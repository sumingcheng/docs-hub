"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["33692"],{84483:function(e,n,s){s.r(n),s.d(n,{assets:function(){return i},contentTitle:function(){return d},default:function(){return a},frontMatter:function(){return c},metadata:function(){return r},toc:function(){return o}});var r=s(63070),t=s(85893),l=s(50065);let c={slug:"kubernetesk8s\u96C6\u7FA4-docker-\u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6",title:"KubernetesK8s\u96C6\u7FA4 Docker \u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-09-12T00:00:00.000Z")},d="Kubernetes\uFF08K8s\uFF09\u96C6\u7FA4 Docker \u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6",i={authorsImageUrls:[void 0]},o=[{value:"\u51C6\u5907\u4EE3\u7406",id:"\u51C6\u5907\u4EE3\u7406",level:2},{value:"\u7248\u672C\u95EE\u9898",id:"\u7248\u672C\u95EE\u9898",level:2},{value:"\u73AF\u5883\u51C6\u5907",id:"\u73AF\u5883\u51C6\u5907",level:2},{value:"\u8BBE\u7F6E\u4E3B\u673A\u540D",id:"\u8BBE\u7F6E\u4E3B\u673A\u540D",level:3},{value:"\u7981\u7528 Swap",id:"\u7981\u7528-swap",level:3},{value:"\u52A0\u8F7D\u5FC5\u8981\u7684\u5185\u6838\u6A21\u5757",id:"\u52A0\u8F7D\u5FC5\u8981\u7684\u5185\u6838\u6A21\u5757",level:3},{value:"\u8BBE\u7F6E\u7CFB\u7EDF\u53C2\u6570",id:"\u8BBE\u7F6E\u7CFB\u7EDF\u53C2\u6570",level:3},{value:"\u5B89\u88C5 Docker\u3001kubeadm\u3001kubelet \u548C kubectl",id:"\u5B89\u88C5-dockerkubeadmkubelet-\u548C-kubectl",level:2},{value:"\u5B89\u88C5 Docker",id:"\u5B89\u88C5-docker",level:3},{value:"\u6DFB\u52A0 Kubernetes \u4ED3\u5E93",id:"\u6DFB\u52A0-kubernetes-\u4ED3\u5E93",level:3},{value:"\u5B89\u88C5 kubeadm, kubelet \u548C kubectl",id:"\u5B89\u88C5-kubeadm-kubelet-\u548C-kubectl",level:3},{value:"\u914D\u7F6E docker",id:"\u914D\u7F6E-docker",level:2},{value:"\u91CD\u542F",id:"\u91CD\u542F",level:3},{value:"\u914D\u7F6E kubelet",id:"\u914D\u7F6E-kubelet",level:2},{value:"\u91CD\u542F",id:"\u91CD\u542F-1",level:3},{value:"\u521D\u59CB\u5316 Kubernetes \u4E3B\u8282\u70B9",id:"\u521D\u59CB\u5316-kubernetes-\u4E3B\u8282\u70B9",level:2},{value:"\u914D\u7F6E kubectl",id:"\u914D\u7F6E-kubectl",level:2},{value:"\u5982\u679C\u8BC1\u4E66\u6709\u95EE\u9898\uFF0C\u91CD\u65B0\u751F\u6210\u8BC1\u4E66",id:"\u5982\u679C\u8BC1\u4E66\u6709\u95EE\u9898\u91CD\u65B0\u751F\u6210\u8BC1\u4E66",level:2},{value:"\u5B89\u88C5 Pod \u7F51\u7EDC\u63D2\u4EF6",id:"\u5B89\u88C5-pod-\u7F51\u7EDC\u63D2\u4EF6",level:2},{value:"\u52A0\u5165\u5DE5\u4F5C\u8282\u70B9",id:"\u52A0\u5165\u5DE5\u4F5C\u8282\u70B9",level:2},{value:"\u9A8C\u8BC1\u96C6\u7FA4\u72B6\u6001",id:"\u9A8C\u8BC1\u96C6\u7FA4\u72B6\u6001",level:2},{value:"\u76D1\u63A7\u8282\u70B9\u53D8\u5316",id:"\u76D1\u63A7\u8282\u70B9\u53D8\u5316",level:2},{value:"\u5B89\u88C5\u5E76\u914D\u7F6E Helm",id:"\u5B89\u88C5\u5E76\u914D\u7F6E-helm",level:2},{value:"\u5BF9\u4E8E Helm 3\uFF0C\u76F4\u63A5\u521D\u59CB\u5316\u5373\u53EF",id:"\u5BF9\u4E8E-helm-3\u76F4\u63A5\u521D\u59CB\u5316\u5373\u53EF",level:3},{value:"\u5378\u8F7D K8S \u6240\u6709\u7EC4\u4EF6",id:"\u5378\u8F7D-k8s-\u6240\u6709\u7EC4\u4EF6",level:2}];function u(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u51C6\u5907\u4EE3\u7406",children:"\u51C6\u5907\u4EE3\u7406"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'export HTTPS_PROXY="http://172.22.220.64:7890"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u7248\u672C\u95EE\u9898",children:"\u7248\u672C\u95EE\u9898"}),"\n",(0,t.jsxs)(n.p,{children:["\u4E09\u53F0 Ubuntu 22.04.4 LTS x86_64 \u673A\u5668\u4E0A\u642D\u5EFA Kubernetes \u96C6\u7FA4\u3002\u4F7F\u7528\u7684 Docker \u7248\u672C\u81F3\u5C11\u662F 19.03\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u7248\u672C\u652F\u6301 Kubernetes \u6240\u9700\u7684\u7279\u6027\u548C\u914D\u7F6E\u3002\u786E\u4FDD Docker \u7684 cgroup \u9A71\u52A8\u8BBE\u7F6E\u4E3A",(0,t.jsx)(n.code,{children:"systemd"}),"\uFF0C\u4EE5\u4E0E kubelet \u4FDD\u6301\u4E00\u81F4\uFF0C\u907F\u514D\u8D44\u6E90\u7BA1\u7406\u4E0A\u7684\u6F5C\u5728\u51B2\u7A81\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u73AF\u5883\u51C6\u5907",children:"\u73AF\u5883\u51C6\u5907"}),"\n",(0,t.jsx)(n.h3,{id:"\u8BBE\u7F6E\u4E3B\u673A\u540D",children:"\u8BBE\u7F6E\u4E3B\u673A\u540D"}),"\n",(0,t.jsxs)(n.p,{children:["\u6BCF\u53F0\u673A\u5668\u4E0A\u8BBE\u7F6E\u9002\u5F53\u7684\u4E3B\u673A\u540D\u5E76\u66F4\u65B0 ",(0,t.jsx)(n.code,{children:"/etc/hosts"})," \u6587\u4EF6\u4EE5\u4FBF\u8282\u70B9\u95F4\u80FD\u591F\u76F8\u4E92\u89E3\u6790\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'# \u5728 k8s-master \u4E0A\nsudo hostnamectl set-hostname k8s-master\necho "172.22.220.64 k8s-master" | sudo tee -a /etc/hosts\n\u200B\n# \u5728 k8s-worker1 \u4E0A\nsudo hostnamectl set-hostname k8s-worker1\necho "192.168.33.110 k8s-worker1" | sudo tee -a /etc/hosts\n\u200B\n# \u5728 k8s-worker2 \u4E0A\nsudo hostnamectl set-hostname k8s-worker2\necho "192.168.33.111 k8s-worker2" | sudo tee -a /etc/hosts\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u7981\u7528-swap",children:"\u7981\u7528 Swap"}),"\n",(0,t.jsx)(n.p,{children:"Kubernetes \u8981\u6C42\u7981\u7528 swap\u3002\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u6267\u884C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo swapoff -a\n# \u6C38\u4E45\u7981\u7528\uFF0C\u6CE8\u91CA\u6389 /etc/fstab \u4E2D\u76F8\u5173\u7684 swap \u884C\nsudo sed -i '/ swap / s/^/#/' /etc/fstab\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u52A0\u8F7D\u5FC5\u8981\u7684\u5185\u6838\u6A21\u5757",children:"\u52A0\u8F7D\u5FC5\u8981\u7684\u5185\u6838\u6A21\u5757"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u6267\u884C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo modprobe overlay\nsudo modprobe br_netfilter\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8BBE\u7F6E\u7CFB\u7EDF\u53C2\u6570",children:"\u8BBE\u7F6E\u7CFB\u7EDF\u53C2\u6570"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u6DFB\u52A0 Kubernetes \u63A8\u8350\u7684 sysctl \u53C2\u6570"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF\nsudo sysctl --system\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5B89\u88C5-dockerkubeadmkubelet-\u548C-kubectl",children:"\u5B89\u88C5 Docker\u3001kubeadm\u3001kubelet \u548C kubectl"}),"\n",(0,t.jsx)(n.h3,{id:"\u5B89\u88C5-docker",children:"\u5B89\u88C5 Docker"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u5DF2\u7ECF\u5B89\u88C5\u4E86 Docker\uFF0C\u786E\u8BA4\u4E00\u4E0B Docker \u662F\u5426\u6B63\u5728\u8FD0\u884C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl status docker\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6CA1\u6709\u5B89\u88C5\uFF0C\u5148\u5B89\u88C5\u4E00\u4E0B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apt install docker.io\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6DFB\u52A0-kubernetes-\u4ED3\u5E93",children:"\u6DFB\u52A0 Kubernetes \u4ED3\u5E93"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u6267\u884C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'sudo apt-get update\nsudo apt-get install -y apt-transport-https ca-certificates curl\ncurl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -\necho "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5B89\u88C5-kubeadm-kubelet-\u548C-kubectl",children:"\u5B89\u88C5 kubeadm, kubelet \u548C kubectl"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"kubelet"}),"\u8FD0\u884C\u5728\u6240\u6709\u96C6\u7FA4\u8282\u70B9\u4E0A\u7684\u4EE3\u7406\uFF0C\u8D1F\u8D23\u542F\u52A8\u548C\u7BA1\u7406\u5BB9\u5668\u5E94\u7528\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"kubeadm"}),"\u5DE5\u5177\uFF0C\u7528\u4E8E\u5FEB\u901F\u8BBE\u7F6E\u548C\u7BA1\u7406 Kubernetes \u96C6\u7FA4\u7684\u57FA\u7840\u67B6\u6784\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"kubectl"}),"\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u7528\u4E8E\u4E0E Kubernetes \u96C6\u7FA4\u4EA4\u4E92\u548C\u7BA1\u7406\u8D44\u6E90\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt-get update\nsudo apt-get install -y kubelet-1.23.6 kubeadm-1.23.6 kubectl-1.23.6\nsudo apt-mark hold kubelet-1.23.6 kubeadm-1.23.6 kubectl-1.23.6\n\u200B\n# \u5982\u679C\u4F60\u5DF2\u7ECF\u5B89\u88C5\uFF0C\u53EF\u4EE5\u5148\u5220\u9664\u518D\u5B89\u88C5\u6307\u5B9A\u7248\u672C\nsudo apt-get remove -y kubelet kubeadm kubectl\n"})}),"\n",(0,t.jsx)(n.p,{children:"hold \u662F\u8BBE\u7F6E\u4FDD\u7559\u72B6\u6001\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0"}),"\n",(0,t.jsx)(n.h2,{id:"\u914D\u7F6E-docker",children:"\u914D\u7F6E docker"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'nano /etc/docker/daemon.json\n{\n  "experimental": true,\n  "features": {\n    "buildkit": true\n  },\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m"\n  },\n  "storage-driver": "overlay2"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u91CD\u542F",children:"\u91CD\u542F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl restart docker\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u914D\u7F6E-kubelet",children:"\u914D\u7F6E kubelet"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'nano /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n# Note This dropin only works with kubeadm and kubelet v1.11+\n[Service]\nEnvironment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf"\nEnvironment="KUBELET_CONFIG_ARGS=--config=/var/lib/kubelet/config.yaml"\n# This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically\nEnvironmentFile=-/var/lib/kubelet/kubeadm-flags.env\n# This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use\n# the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.\nEnvironmentFile=-/etc/default/kubelet\nExecStart=\nExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS\nEnvironment="KUBELET_CGROUP_ARGS=--cgroup-driver=systemd"\nnano /var/lib/kubelet/config.yaml\nsudo chown rootroot /var/lib/kubelet/config.yaml\nsudo chmod 644 /var/lib/kubelet/config.yaml\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u91CD\u542F-1",children:"\u91CD\u542F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl daemon-reload\nsudo systemctl restart kubelet\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u521D\u59CB\u5316-kubernetes-\u4E3B\u8282\u70B9",children:"\u521D\u59CB\u5316 Kubernetes \u4E3B\u8282\u70B9"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u67E5\u770B\u8981\u4E0B\u8F7D\u7684\u5185\u5BB9"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubeadm config images list\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4F7F\u7528\u963F\u91CC\u4E91 Kubernetes \u955C\u50CF\u7684\u955C\u50CF\u52A0\u901F\u670D\u52A1"})}),"\n",(0,t.jsxs)(n.p,{children:["**",(0,t.jsx)(n.code,{children:"10.244.0.0/16"}),"**\u8FD9\u4E2A\u662F Flannel \u9ED8\u8BA4\u7684 Pod \u7F51\u7EDC\u5730\u5740\u8303\u56F4\u3002\u5982\u679C\u4F60\u4F7F\u7528 Flannel \u4F5C\u4E3A\u7F51\u7EDC\u63D2\u4EF6\uFF0C\u901A\u5E38\u4F7F\u7528\u8FD9\u4E2A CIDR\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["**",(0,t.jsx)(n.code,{children:"192.168.0.0/16"}),"**\u8FD9\u662F Calico \u7684\u9ED8\u8BA4\u5730\u5740\u8303\u56F4\u3002\u5982\u679C\u4F60\u4F7F\u7528 Calico\uFF0C\u901A\u5E38\u4F1A\u6307\u5B9A\u8FD9\u4E2A\u8303\u56F4\uFF0C\u4E0D\u8FC7\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubeadm init --pod-network-cidr=192.168.0.0/16 --image-repository registry.cn-hangzhou.aliyuncs.com/google_containers --kubernetes-version=v1.23.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4E0D\u4F7F\u7528\u963F\u91CC\u4E91\uFF0C\u76F4\u63A5\u5728 k8s-master \u4E0A\u6267\u884C\uFF0C\u521D\u59CB\u5316\uFF0C\u8FD9\u91CC\u7684 ",(0,t.jsx)(n.code,{children:"-E"})," \u9009\u9879\u544A\u8BC9 ",(0,t.jsx)(n.code,{children:"sudo"})," \u4FDD\u7559\u7528\u6237\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u8FD9\u6837 ",(0,t.jsx)(n.code,{children:"kubeadm"})," \u5C31\u53EF\u4EE5\u4F7F\u7528\u524D\u9762\u8BBE\u7F6E\u7684\u4EE3\u7406\u73AF\u5883\u53D8\u91CF\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo -E kubeadm init --pod-network-cidr=10.244.0.0/16\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8BB0\u5F55\u4E0B\u8F93\u51FA\u4E2D\u7684 ",(0,t.jsx)(n.code,{children:"kubeadm join"})," \u547D\u4EE4\uFF0C\u8FD9\u662F\u540E\u9762\u5DE5\u4F5C\u8282\u70B9\u9700\u8981\u4F7F\u7528\u7684\u547D\u4EE4\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Your Kubernetes control-plane has initialized successfully!\n\u200B\nTo start using your cluster, you need to run the following as a regular user\n\u200B\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u)$(id -g) $HOME/.kube/config\n\u200B\nAlternatively, if you are the root user, you can run\n\u200B\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\u200B\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at\n  https//kubernetes.io/docs/concepts/cluster-administration/addons/\n\u200B\nThen you can join any number of worker nodes by running the following on each as root\n\u200B\nkubeadm init phase certs apiserver --apiserver-cert-extra-sans=172.22.220.64,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster,kubernetes.default.svc.cluster.local\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u914D\u7F6E-kubectl",children:"\u914D\u7F6E kubectl"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 k8s-master \u4E0A\uFF0C\u914D\u7F6E\u7528\u6237\u7684 kubeconfig \u6587\u4EF6\u4EE5\u4F7F\u7528 kubectl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u)$(id -g) $HOME/.kube/config\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5982\u679C\u8BC1\u4E66\u6709\u95EE\u9898\u91CD\u65B0\u751F\u6210\u8BC1\u4E66",children:"\u5982\u679C\u8BC1\u4E66\u6709\u95EE\u9898\uFF0C\u91CD\u65B0\u751F\u6210\u8BC1\u4E66"}),"\n",(0,t.jsx)(n.p,{children:"\u624B\u52A8\u5220\u9664\u73B0\u6709\u7684 apiserver \u8BC1\u4E66\u6587\u4EF6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rm /etc/kubernetes/pki/apiserver.*\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u518D\u6B21\u8FD0\u884C\u8BC1\u4E66\u751F\u6210\u547D\u4EE4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubeadm init phase certs apiserver --apiserver-cert-extra-sans=172.22.220.64,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster,kubernetes.default.svc.cluster.local\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u518D\u6B21\u91CD\u542F apiserver \u5BB9\u5668"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker ps | grep kube-apiserver | grep -v pause\ndocker kill <container-id>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u518D\u6B21\u68C0\u67E5\u65B0\u751F\u6210\u7684\u8BC1\u4E66"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u65B0\u8BC1\u4E66\u7684\u5185\u5BB9(\u5C24\u5176\u662F\u5E8F\u5217\u53F7)\u4E0E\u65E7\u8BC1\u4E66\u4E0D\u540C,\u5C31\u8BF4\u660E\u8BC1\u4E66\u5DF2\u7ECF\u66F4\u65B0\u6210\u529F\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5B89\u88C5-pod-\u7F51\u7EDC\u63D2\u4EF6",children:"\u5B89\u88C5 Pod \u7F51\u7EDC\u63D2\u4EF6"}),"\n",(0,t.jsx)(n.p,{children:"\u53EF\u4EE5\u9009\u62E9\u4E00\u4E2A\u7F51\u7EDC\u63D2\u4EF6\uFF0C\u4F8B\u5982 Calico\uFF0C\u5E76\u5728 k8s-master \u4E0A\u6267\u884C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl apply -f https//docs.projectcalico.org/manifests/calico.yaml\nkubectl get nodes\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u52A0\u5165\u5DE5\u4F5C\u8282\u70B9",children:"\u52A0\u5165\u5DE5\u4F5C\u8282\u70B9"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 k8s-worker1 \u548C k8s-worker2 \u4E0A\uFF0C\u4F7F\u7528\u4E4B\u524D\u8BB0\u5F55\u7684 ",(0,t.jsx)(n.code,{children:"kubeadm join"})," \u547D\u4EE4\u6765\u52A0\u5165\u96C6\u7FA4"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubeadm join 172.22.220.646443 --token 6bqr0n.5dlu623stgokbvdd \\\n        --discovery-token-ca-cert-hash sha256851c48c250ee78aa569a77c935f14ee6edcebc6b004655e52ac775bcc89cf013\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9A8C\u8BC1\u96C6\u7FA4\u72B6\u6001",children:"\u9A8C\u8BC1\u96C6\u7FA4\u72B6\u6001"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 k8s-master \u4E0A\uFF0C\u68C0\u67E5\u8282\u70B9\u548C Pod \u7684\u72B6\u6001"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl get nodes\nkubectl get pods --all-namespaces\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u76D1\u63A7\u8282\u70B9\u53D8\u5316",children:"\u76D1\u63A7\u8282\u70B9\u53D8\u5316"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl get nodes -w\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5B89\u88C5\u5E76\u914D\u7F6E-helm",children:"\u5B89\u88C5\u5E76\u914D\u7F6E Helm"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4F60\u7684\u672C\u5730\u673A\u5668\u6216\u7BA1\u7406\u673A\u4E0A\u5B89\u88C5 Helm\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u5230\u4E0B\u8F7D Helm \u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u5E76\u5C06\u5176\u914D\u7F6E\u5230\u9002\u5F53\u7684\u8DEF\u5F84\u3002\u4F60\u8FD8\u9700\u8981\u521D\u59CB\u5316 Helm \u7684\u670D\u52A1\u7AEF\u7EC4\u4EF6 Tiller\uFF08\u6CE8\u610F\u4ECE Helm v3 \u5F00\u59CB\uFF0C\u5DF2\u7ECF\u79FB\u9664\u4E86 Tiller\uFF09\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u5BF9\u4E8E-helm-3\u76F4\u63A5\u521D\u59CB\u5316\u5373\u53EF",children:"\u5BF9\u4E8E Helm 3\uFF0C\u76F4\u63A5\u521D\u59CB\u5316\u5373\u53EF"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm repo add stable https//charts.helm.sh/stable\nhelm repo update\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u9A8C\u8BC1 Helm \u662F\u5426\u6B63\u786E\u5B89\u88C5\u5E76\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5B89\u88C5\u4E00\u4E2A\u7B80\u5355\u7684 Helm chart \u6765\u6D4B\u8BD5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm install stable/mysql --generate-name\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u8FD9\u4E2A\u547D\u4EE4\u6210\u529F\u6267\u884C\uFF0C\u5E76\u4E14\u80FD\u591F\u770B\u5230 Pod \u6B63\u5728\u8FD0\u884C\u72B6\u6001\uFF0C\u5219\u8BF4\u660E Helm \u5DF2\u51C6\u5907\u597D\u7528\u4E8E\u90E8\u7F72\u5E94\u7528\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5378\u8F7D-k8s-\u6240\u6709\u7EC4\u4EF6",children:"\u5378\u8F7D K8S \u6240\u6709\u7EC4\u4EF6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubeadm reset -f\nsystemctl stop kubelet\nsystemctl stop docker\nrm -rf /var/lib/cni/\nrm -rf /var/lib/kubelet/*\nrm -rf /etc/cni/\nrm -rf /etc/kubernetes/\nrm -rf /var/lib/docker/\napt-get remove docker docker-engine docker.io containerd runc\n"})})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var r=s(67294);let t={},l=r.createContext(t);function c(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(l.Provider,{value:n},e.children)}},63070:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/kubernetesk8s\u96C6\u7FA4-docker-\u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-12-KubernetesK8s\u96C6\u7FA4_Docker_\u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-12-KubernetesK8s\u96C6\u7FA4_Docker_\u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6.md","title":"KubernetesK8s\u96C6\u7FA4 Docker \u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6","description":"\u51C6\u5907\u4EE3\u7406","date":"2024-09-12T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":4.76,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"kubernetesk8s\u96C6\u7FA4-docker-\u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6","title":"KubernetesK8s\u96C6\u7FA4 Docker \u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-09-12T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Docker DanglingUnused  Images","permalink":"/docs-hub/blog/docker-danglingunused--images"},"nextItem":{"title":"Windows \u4E0A\u4E3A WSL2 \u8BBE\u7F6E\u7AEF\u53E3\u8F6C\u53D1\u5B9E\u73B0\u5C40\u57DF\u7F51\u8BBF\u95EE","permalink":"/docs-hub/blog/windows-\u4E0A\u4E3A-wsl2-\u8BBE\u7F6E\u7AEF\u53E3\u8F6C\u53D1\u5B9E\u73B0\u5C40\u57DF\u7F51\u8BBF\u95EE"}}')}}]);