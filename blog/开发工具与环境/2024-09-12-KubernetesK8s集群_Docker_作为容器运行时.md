---
authors: sumingcheng
---
# Kubernetes（K8s）集群 Docker 作为容器运行时



 **Link:** [https://zhuanlan.zhihu.com/p/719476380]

## 准备代理  
```
export HTTPS_PROXY="http://172.22.220.64:7890"
```
## 版本问题  

三台 Ubuntu 22.04.4 LTS x86\_64 机器上搭建 Kubernetes 集群。使用的Docker版本至少是19.03，因为这个版本支持Kubernetes所需的特性和配置。确保Docker的cgroup驱动设置为`systemd`，以与kubelet保持一致，避免资源管理上的潜在冲突。

## 环境准备  
### 设置主机名  

每台机器上设置适当的主机名并更新 `/etc/hosts` 文件以便节点间能够相互解析。

在每台机器上执行以下命令

```
# 在 k8s-master 上
sudo hostnamectl set-hostname k8s-master
echo "172.22.220.64 k8s-master" | sudo tee -a /etc/hosts
​
# 在 k8s-worker1 上
sudo hostnamectl set-hostname k8s-worker1
echo "192.168.33.110 k8s-worker1" | sudo tee -a /etc/hosts
​
# 在 k8s-worker2 上
sudo hostnamectl set-hostname k8s-worker2
echo "192.168.33.111 k8s-worker2" | sudo tee -a /etc/hosts
```
### 禁用 Swap  

Kubernetes 要求禁用 swap。在每台机器上执行

```
sudo swapoff -a
# 永久禁用，注释掉 /etc/fstab 中相关的 swap 行
sudo sed -i '/ swap / s/^/#/' /etc/fstab
```
### 加载必要的内核模块  

在每台机器上执行

```
sudo modprobe overlay
sudo modprobe br_netfilter
```
### 设置系统参数  

在每台机器上添加 Kubernetes 推荐的 sysctl 参数

```
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF
sudo sysctl --system
```
## 安装 Docker、kubeadm、kubelet 和 kubectl  
### 安装 Docker  

如果已经安装了 Docker，确认一下 Docker 是否正在运行

```
sudo systemctl status docker
```

没有安装，先安装一下

```
apt install docker.io
```
### 添加 Kubernetes 仓库  

在每台机器上执行

```
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```
### 安装 kubeadm, kubelet 和 kubectl  

**kubelet**运行在所有集群节点上的代理，负责启动和管理容器应用。

**kubeadm**工具，用于快速设置和管理 Kubernetes 集群的基础架构。

**kubectl**命令行工具，用于与 Kubernetes 集群交互和管理资源。

```
sudo apt-get update
sudo apt-get install -y kubelet-1.23.6 kubeadm-1.23.6 kubectl-1.23.6
sudo apt-mark hold kubelet-1.23.6 kubeadm-1.23.6 kubectl-1.23.6
​
# 如果你已经安装，可以先删除再安装指定版本
sudo apt-get remove -y kubelet kubeadm kubectl
```

hold 是设置保留状态，不会自动更新

## 配置 docker  
```
nano /etc/docker/daemon.json
{
  "experimental": true,
  "features": {
    "buildkit": true
  },
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
```
### 重启  
```
sudo systemctl restart docker
```
## 配置 kubelet  
```
nano /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
# Note This dropin only works with kubeadm and kubelet v1.11+
[Service]
Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf"
Environment="KUBELET_CONFIG_ARGS=--config=/var/lib/kubelet/config.yaml"
# This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
EnvironmentFile=-/var/lib/kubelet/kubeadm-flags.env
# This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
# the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
EnvironmentFile=-/etc/default/kubelet
ExecStart=
ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
Environment="KUBELET_CGROUP_ARGS=--cgroup-driver=systemd"
nano /var/lib/kubelet/config.yaml
sudo chown rootroot /var/lib/kubelet/config.yaml
sudo chmod 644 /var/lib/kubelet/config.yaml
```
### 重启  
```
sudo systemctl daemon-reload
sudo systemctl restart kubelet
```
## 初始化 Kubernetes 主节点  

**查看要下载的内容**

```
kubeadm config images list
```

**使用阿里云 Kubernetes 镜像的镜像加速服务**

**`10.244.0.0/16`**这个是 Flannel 默认的 Pod 网络地址范围。如果你使用 Flannel 作为网络插件，通常使用这个 CIDR。

**`192.168.0.0/16`**这是 Calico 的默认地址范围。如果你使用 Calico，通常会指定这个范围，不过你也可以自定义。

```
kubeadm init --pod-network-cidr=192.168.0.0/16 --image-repository registry.cn-hangzhou.aliyuncs.com/google_containers --kubernetes-version=v1.23.0
```

不使用阿里云，直接在 k8s-master 上执行，初始化，这里的 `-E` 选项告诉 `sudo` 保留用户的环境变量，这样 `kubeadm` 就可以使用前面设置的代理环境变量。

```
sudo -E kubeadm init --pod-network-cidr=10.244.0.0/16
```

记录下输出中的 `kubeadm join` 命令，这是后面工作节点需要使用的命令。

```
Your Kubernetes control-plane has initialized successfully!
​
To start using your cluster, you need to run the following as a regular user
​
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u)$(id -g) $HOME/.kube/config
​
Alternatively, if you are the root user, you can run
​
  export KUBECONFIG=/etc/kubernetes/admin.conf
​
You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at
  https//kubernetes.io/docs/concepts/cluster-administration/addons/
​
Then you can join any number of worker nodes by running the following on each as root
​
kubeadm init phase certs apiserver --apiserver-cert-extra-sans=172.22.220.64,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster,kubernetes.default.svc.cluster.local 
```
## 配置 kubectl  

在 k8s-master 上，配置用户的 kubeconfig 文件以使用 kubectl

```
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u)$(id -g) $HOME/.kube/config
```
## 如果证书有问题，重新生成证书  

手动删除现有的 apiserver 证书文件

```
rm /etc/kubernetes/pki/apiserver.*
```

再次运行证书生成命令

```
kubeadm init phase certs apiserver --apiserver-cert-extra-sans=172.22.220.64,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster,kubernetes.default.svc.cluster.local 
```

再次重启 apiserver 容器

```
docker ps | grep kube-apiserver | grep -v pause 
docker kill <container-id>
```

再次检查新生成的证书

```
openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout
```

如果新证书的内容(尤其是序列号)与旧证书不同,就说明证书已经更新成功。

## 安装 Pod 网络插件  

可以选择一个网络插件，例如 Calico，并在 k8s-master 上执行

```
kubectl apply -f https//docs.projectcalico.org/manifests/calico.yaml
kubectl get nodes
```
## 加入工作节点  

在 k8s-worker1 和 k8s-worker2 上，使用之前记录的 `kubeadm join` 命令来加入集群

```
kubeadm join 172.22.220.646443 --token 6bqr0n.5dlu623stgokbvdd \
        --discovery-token-ca-cert-hash sha256851c48c250ee78aa569a77c935f14ee6edcebc6b004655e52ac775bcc89cf013
```
## 验证集群状态  

在 k8s-master 上，检查节点和 Pod 的状态

```
kubectl get nodes
kubectl get pods --all-namespaces
```
## 监控节点变化  
```
kubectl get nodes -w
```
## 安装并配置 Helm  

在你的本地机器或管理机上安装 Helm。这通常涉及到下载 Helm 的二进制文件并将其配置到适当的路径。你还需要初始化 Helm 的服务端组件 Tiller（注意从 Helm v3 开始，已经移除了 Tiller）。

### 对于 Helm 3，直接初始化即可  
```
helm repo add stable https//charts.helm.sh/stable
helm repo update
```

验证 Helm 是否正确安装并配置，可以尝试安装一个简单的 Helm chart 来测试

```
helm install stable/mysql --generate-name
```

如果这个命令成功执行，并且能够看到 Pod 正在运行状态，则说明 Helm 已准备好用于部署应用。

## 卸载 K8S 所有组件  
```
kubeadm reset -f
systemctl stop kubelet
systemctl stop docker
rm -rf /var/lib/cni/
rm -rf /var/lib/kubelet/*
rm -rf /etc/cni/
rm -rf /etc/kubernetes/
rm -rf /var/lib/docker/
apt-get remove docker docker-engine docker.io containerd runc
```
