---
authors: sumingcheng
---
# Linux 使用 skopeo



 **Link:** [https://zhuanlan.zhihu.com/p/702158036]

### 在 Fedora 和 RHEL 上安装  
```
sudo dnf install skopeo
```
### 在 Ubuntu 上安装  
```
sudo apt-get -y install skopeo
```
### 使用 Homebrew 在 macOS 上安装  
```
brew install skopeo
```
### 基本用法  
### 检查容器镜像  
```
skopeo inspect docker://docker.io/library/alpine:latest
```

检查 Docker Hub 上的 Alpine 镜像并返回其元数据。可以使用类似的命令检查其他容器注册表中的镜像。

### 复制容器镜像  
```
skopeo copy docker://docker.io/library/alpine:latest docker://myregistry.local/library/alpine:latest
```

将 Docker Hub 上的 Alpine 镜像复制到私有注册表 `myregistry.local`。

### 复制镜像到本地目录  
```
skopeo copy docker://docker.io/library/alpine:latest dir:/path/to/local/dir
```

将 Alpine 镜像复制到本地目录 `/path/to/local/dir`。

### 删除容器镜像  
```
skopeo delete docker://myregistry.local/library/alpine:latest
```

删除私有注册表 `myregistry.local` 上的 Alpine 镜像。

### 使用身份验证  

对于需要身份验证的容器注册表，可以使用 `--creds` 参数：

```
skopeo copy --src-creds myusername:mypassword docker://docker.io/myrepo/myimage:latest docker://myregistry.local/myrepo/myimage:latest
```

将带有身份验证信息的 Docker Hub 上的镜像复制到私有注册表。

### 复制镜像到 OCI 格式  
```
skopeo copy docker://docker.io/library/alpine:latest oci:/path/to/alpine-bundle:latest
```

将 Docker Hub 上的 Alpine 镜像保存为本地的 OCI 格式 tar 文件。

