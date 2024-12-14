# Linux 安装 Minikube 详细操作



 **Link:** [https://zhuanlan.zhihu.com/p/705373615]

## 安装依赖  

**更新系统依赖**

```
sudo apt update && sudo apt upgrade
```

**安装必要依赖**

```
sudo apt install -y curl wget apt-transport-https
```
## 添加用户组  

**添加当前用户到 docker 组**

```
sudo usermod -aG docker $USER
newgrp docker
```

这里的 `sudo usermod -aG docker $USER` 将当前用户添加到 docker 组。为了使这一变更生效，通常需要注销再重新登录，或者开启一个新的终端会话。使用 `newgrp docker` 命令可以在当前会话中立即应用更改。

## 安装 Minikube  

**下载 Minikube**

```
curl -LO https//storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

**验证安装**

```
minikube version
```
## 启动 Minikube  

使用 Docker 作为驱动，Minikube 会在一个 Docker 容器内部运行 Kubernetes 集群，而不是创建一个完整的虚拟机。这种方法更轻量级，因为它利用了现有的操作系统环境和 Docker 的容器技术。

```
minikube start --driver=docker
```
## 验证 Minikube 是否成功启动  
```
minikube status
kubectl cluster-info
```
## 正常输出示例  
```
minikube
type Control Plane
host Running
kubelet Running
apiserver Running
kubeconfig Configured
```
## 手动调整 Minikube 资源  

**停止 Minikube**

```
minikube stop
```
## 调整配置  

永久更改配置

```
minikube start --cpus 8 --memory 16384
```
## 重新启动 Minikube  
```
minikube start
```
## 确认 kubectl 配置  

检查 kubectl 的配置文件，确保其指向正确的 Kubernetes API 地址

```
kubectl config view
```

查看 Minikube IP 地址，确认服务器配置

```
minikube ip
```
## 修正 kubectl 配置  

如果配置文件中的集群地址不正确，可以使用以下命令来设置正确的集群信息

```
kubectl config set-cluster minikube --server=https//192.168.49.28443 --certificate-authority=/home/gptadmin/.minikube/ca.crt
kubectl config set-context minikube --cluster=minikube --user=minikube
kubectl config use-context minikube
```
## 查看集群信息  

获取 Kubernetes 控制平面的状态和地址

```
kubectl cluster-info
```
## 列出所有节点  

显示 Minikube 集群中的所有节点信息

```
kubectl get nodes
```
## 查看所有命名空间的 Pods  

列出集群中所有命名空间的 Pods

```
kubectl get pods --all-namespaces
```
