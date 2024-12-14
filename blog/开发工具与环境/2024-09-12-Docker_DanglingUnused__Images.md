# Docker Dangling/Unused  Images



 **Link:** [https://zhuanlan.zhihu.com/p/719796169]

## Dangling Images（悬空镜像）  

定义这些镜像在本地存在，但是在Docker仓库中已经不存在对应的标签了。通常是因为镜像的标签被更新或删除导致的。

特点它们没有标签，只有镜像ID。

### 产生原因  

* 构建一个新版本的镜像，自动取消旧版本镜像的标签。
* 手动删除一个镜像的标签。
* 使用`docker pull`拉取一个已有标签的新版本镜像，旧版本镜像标签被取消。

识别方法使用命令`docker images -f dangling=true`列出所有悬空镜像。

## Unused Images（未使用镜像）  

定义这些镜像不是任何容器的基础镜像，也不是任何镜像的父镜像。

特点它们可能有标签，但是已经不被需要了。

### 产生原因  

* 某个容器或者镜像被删除，依赖于它的镜像层也随之变为未使用。
* 手动删除一个容器或镜像。

识别方法使用命令`docker images -f dangling=false`并手动识别那些未被使用的镜像。Docker目前没有提供自动识别Unused Images的命令。

## 清理 Dangling Images  

使用命令`docker rmi $(docker images -f dangling=true -q)`删除所有悬空镜像。

使用Docker 1.13版本提供的`docker system prune`命令自动清理悬空镜像。

### 清理Unused Images  

手动识别并删除那些已知不再需要的镜像，使用`docker rmi <image_id>`命令。

谨慎使用`docker system prune -a`命令自动删除所有未使用镜像，此操作不可恢复。

### 清理时的注意事项  

清理前确保不需要这些镜像，清理操作不可恢复。

如果一个悬空镜像同时也是一个未使用镜像，使用`docker image prune`或者`docker system prune`命令就足够了。

定期清理不需要的镜像，以节省磁盘空间。但不要过于频繁。

