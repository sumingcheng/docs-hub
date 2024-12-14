---
slug: 国内-docker-配置-atomhub-镜像仓库
title: 国内 Docker 配置 atomhub 镜像仓库
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-07-03
---

# 国内 Docker 配置 atomhub 镜像仓库



 **Link:** [https://zhuanlan.zhihu.com/p/702721609]



Docker Hub 镜像被禁，在国内可以使用下面这个镜像源，目前只有一些基础镜像

**编辑Docker配置文件**: 打开或创建 `/etc/docker/daemon.json` 文件

```
{
  "registry-mirrors": [
    "https://atomhub.openatom.cn"
  ]
}
```

**重启Docker服务**: 为使配置生效，请执行以下命令：

```
sudo systemctl daemon-reload
sudo systemctl restart docker
```
### 官网地址  

[https://atomhub.openatom.cn/](https://atomhub.openatom.cn/)

  


**试过这个源目前是可以使用的，因为里面有华为，所以相信未来也一定可以继续使用！**