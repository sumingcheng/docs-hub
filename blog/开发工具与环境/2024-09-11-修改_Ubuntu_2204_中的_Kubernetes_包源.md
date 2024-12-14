---
slug: 修改-ubuntu-2204-中的-kubernetes-包源
title: 修改 Ubuntu 2204 中的 Kubernetes 包源
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-09-11
---

# 修改 Ubuntu 22.04 中的 Kubernetes 包源



 **Link:** [https://zhuanlan.zhihu.com/p/719531210]

### 备份现有的 Kubernetes 源文件  

在修改之前，首先备份你的现有 Kubernetes 源文件，以便必要时可以恢复原始设置。

```
sudo cp /etc/apt/sources.list.d/kubernetes.list /etc/apt/sources.list.d/kubernetes.list.backup
```
### 编辑 Kubernetes源文件  

使用文本编辑器编辑 Kubernetes 源文件。你可以使用 `nano` 或你喜欢的任何编辑器：

```
sudo nano /etc/apt/sources.list.d/kubernetes.list
```
### 替换为新的源  

选择使用阿里云的 Kubernetes 镜像，你应该将文件内容更改为

```
deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
```

清华大学镜像源，将内容更改为

```
deb https://mirrors.tuna.tsinghua.edu.cn/kubernetes/apt/ kubernetes-xenial main
```

保存文件并退出编辑器。

### 添加镜像源的 GPG 密钥  

为了确保 apt 可以信任新源的软件包，你需要添加镜像源的 GPG 密钥。

```
curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -
```

清华大学源：

```
curl -s https://mirrors.tuna.tsinghua.edu.cn/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -
```
### 更新软件源  

更新 apt 的软件包列表以反映源的变更

```
sudo apt update
```
### 测试新源  

你可以尝试安装或更新一个 Kubernetes 包来确认新的源是否工作正常

```
sudo apt install kubectl
```

或者如果已经安装了，尝试更新看是否有新版本

```
sudo apt update && sudo apt upgrade
```