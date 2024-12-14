---
authors: sumingcheng
---
# Linux 安装 kubectl



 **Link:** [https://zhuanlan.zhihu.com/p/714306348]

### 下载kubectl  

下载最新稳定版的 `kubectl`。这个命令会查询 Kubernetes 的最新稳定版本号，并下载对应版本的 `kubectl` 二进制文件。

```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```
### 使kubectl可执行  

**赋予下载的 `kubectl` 可执行权限**。

```
chmod +x ./kubectl
```
### 将kubectl移动到系统路径中  

**移动 `kubectl` 到 `/usr/local/bin`**。所有用户都能访问 `kubectl` 命令。

```
sudo mv ./kubectl /usr/local/bin/kubectl
```

将 `kubectl` 放置在 `/usr/local/bin` 目录下，因为这个目录通常已经包含在环境变量 `$PATH` 中。

### 验证安装  

**检查 `kubectl` 的版本来确认安装**。这不仅会显示版本信息，也确认了 `kubectl` 可以正常运行。

```
kubectl version --client
```
