---
authors: sumingcheng
---
# 如何上传镜像到 Docker Hub



 **Link:** [https://zhuanlan.zhihu.com/p/709346862]



**创建 Docker Hub 账户**：如果还没有 Docker Hub 账户，首先访问 Docker Hub 注册一个账户

[https://hub.docker.com/](https://hub.docker.com/)## 进入终端  

**登录 Docker Hub**： 在本地终端使用以下命令登录 Docker Hub

```
docker login
```

按照提示输入您的 Docker Hub 用户名和密码

**标记您的镜像**： 在上传镜像之前，需要将您的本地镜像标记为远程仓库的格式使用以下命令

```
docker tag local-image:tag username/repository:tag
```

其中 `local-image:tag` 是您本地的镜像名和标签，`username/repository:tag` 是您在 Docker Hub 上的用户名、仓库名和标签

**上传镜像**： 使用以下命令上传镜像

```
docker push username/repository:tag
```

确保替换 `username/repository:tag` 为您标记的镜像名

**确认上传**： 上传完成后，您可以在 Docker Hub 上的账户仓库中看到您的镜像

