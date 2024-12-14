---
slug: ubuntu-上安装-docker-和-docker-compose
title: Ubuntu 上安装 Docker 和 Docker Compose
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-09-11
---

# Ubuntu 上安装 Docker 和 Docker Compose



 **Link:** [https://zhuanlan.zhihu.com/p/700471542]

## 安装 Docker  

**apt 直接装**

```
sudo apt install docker.io
```

**更新您的系统** 更新 Ubuntu 的包索引，确保所有系统包都是最新的。

```
sudo apt update
sudo apt upgrade -y
```

**安装必要的包** 安装一些必需的包，这些包允许 `apt` 通过 HTTPS 使用仓库

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

**添加 Docker 的官方 GPG 密钥** 确保下载的软件包是从 Docker 的官方源获取的。

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

**设置 Docker 仓库** 向 `apt` 源列表添加 Docker 仓库。

```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

**安装 Docker CE (Community Edition)** 更新 `apt` 包索引，然后安装 Docker CE。

```
sudo apt update
sudo apt install docker-ce
```

**验证 Docker 安装** 检查 Docker 是否正确安装，并运行 hello-world 容器作为测试。

```
sudo systemctl status docker
sudo docker run hello-world
```
## 安装 Docker Compose  

**下载 Docker Compose** 访问 Docker Compose 的 GitHub 发布页面 查找最新版本的 Docker Compose。使用 `curl` 下载适用于 Linux 的二进制文件。

```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.11.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

请根据需要替换 `v2.11.2` 为最新版本号。

**添加执行权限** 为下载的二进制文件添加执行权限。

```
sudo chmod +x /usr/local/bin/docker-compose
```

**验证安装** 检查 Docker Compose 是否已成功安装并可以运行。

```
docker-compose --version
```
### 配置 Docker 无需 sudo  

默认情况下，运行 Docker 命令需要 `sudo`。如果您想让普通用户也能运行 Docker 命令而无需使用 `sudo`，可以将用户添加到 Docker 组

```
sudo usermod -aG docker ${USER}
```

之后，您需要注销并重新登录。