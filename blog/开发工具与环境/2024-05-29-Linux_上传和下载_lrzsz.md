---
slug: linux-上传和下载-lrzsz
title: Linux 上传和下载 lrzsz
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-05-29
---

# Linux 上传和下载 lrzsz



 

### 对于 Ubuntu/Debian 系统  

在 Ubuntu 或 Debian 系统上，可以使用 `apt` 包管理器进行安装：

```
sudo apt update
sudo apt install lrzsz
```
### 对于 CentOS/RHEL 系统  

在 CentOS 或 RHEL 及其衍生版上，使用 `yum`

```
sudo yum install lrzsz
```

如果你使用的是 CentOS 8 或 RHEL 8 及其后续版本，可能需要使用 `dnf`

```
sudo dnf install lrzsz
```
### 对于 Fedora  

Fedora 用户也应该使用 `dnf`

```
sudo dnf install lrzsz
```
### 对于 Arch Linux  

在 Arch Linux 上，使用 `pacman` 进行安装

```
sudo pacman -S lrzsz
```
### 使用 rz 和 sz 命令  

安装 `lrzsz` 后，你可以在支持 Zmodem 协议的终端程序中使用 `rz` 和 `sz` 命令。这些命令通常在与远程服务器进行串口通信或通过 SSH 会话传输文件时非常有用。

* **使用 `rz`**：在终端中输入 `rz`，然后选择本地计算机上的文件进行上传。
* **使用 `sz`**：要发送文件到远程计算机，可以使用 `sz 文件名`。