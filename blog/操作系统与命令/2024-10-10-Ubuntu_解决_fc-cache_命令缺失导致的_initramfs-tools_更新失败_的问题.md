---
authors: sumingcheng
---
# Ubuntu 解决 fc-cache 命令缺失导致的 initramfs-tools 更新失败 的问题



 **Link:** [https://zhuanlan.zhihu.com/p/915883132]

## 错误内容  
```
E: /usr/share/initramfs-tools/hooks/plymouth failed with return 127.
update-initramfs: failed for /boot/initrd.img-... with 127.
dpkg: error processing package initramfs-tools (--configure):
 installed initramfs-tools package post-installation script subprocess returned error exit status 127
```

**错误代码 127** 表示命令未找到（command not found）。

`initramfs-tools` 的 `plymouth` 钩子脚本在更新 `initramfs` 镜像时，需要调用 `fc-cache` 命令。

尽管 `fontconfig` 软件包已安装，但 `fc-cache` 命令缺失，可能是由于软件包损坏、文件系统问题或磁盘空间不足导致的。

## 排查步骤  
### 步骤 1：更新软件包列表  

首先，更新您的软件包列表以确保获取最新的软件包信息。

```
sudo apt-get update
```
### 步骤 2：强制重新安装fontconfig及其相关软件包  

强制重新安装 `fontconfig` 及其相关的软件包，包括 `libfontconfig1` 和 `fontconfig-config`。

```
sudo apt-get install --reinstall fontconfig fontconfig-config libfontconfig1
```

**注意：** 请仔细观察重新安装过程中的任何错误信息。如果出现错误，请记录下来。

### 步骤 3：验证fc-cache是否存在  

重新安装后，检查 `fc-cache` 是否已安装。

```
which fc-cache
```

**预期结果：** 应该输出 `/usr/bin/fc-cache`。如果没有输出，表示 `fc-cache` 仍然缺失。

### 步骤 4：检查fc-cache的可执行权限  

查看 `fc-cache` 的文件权限是否正确。

```
ls -l /usr/bin/fc-cache
```

**预期结果：** 您应该看到文件存在，并且具有可执行权限（`-rwxr-xr-x`）。

### 步骤 5：测试fc-cache命令  

尝试运行 `fc-cache`，以确保它可以正常工作。

```
/usr/bin/fc-cache --version
```

**预期结果：** 显示 `fontconfig` 的版本信息。

### 步骤 6：完成未完成的软件包配置  

由于之前的错误涉及到 `initramfs-tools` 未完全安装或配置，运行以下命令：

```
sudo dpkg --configure -a
```

这将尝试完成任何未完成的软件包配置。

### 步骤 7：更新initramfs  

尝试重新生成 `initramfs`，看看错误是否仍然存在。

```
sudo update-initramfs -u
```
### 步骤 8：如果问题仍然存在，检查软件包完整性  

如果 `fc-cache` 仍然缺失，可能是软件包数据库或 `fontconfig` 软件包本身已损坏。我们可以尝试清理软件包缓存并重新下载软件包。

```
sudo apt-get clean
sudo apt-get update
sudo apt-get install --reinstall fontconfig fontconfig-config libfontconfig1
```
### 步骤 9：检查磁盘空间  

确保系统磁盘有足够的可用空间，特别是 `/usr` 所在的分区。

```
df -h
```

如果空间不足，可能导致软件包无法正确安装。

### 步骤 10：检查文件系统是否存在损坏  

如果怀疑文件系统可能损坏，可以尝试在下次重启时运行文件系统检查。

```
sudo touch /forcefsck
```

然后重启系统，系统会在启动时自动检查文件系统。

### 步骤 11：查看fontconfig软件包的文件列表  

检查 `fontconfig` 软件包应包含哪些文件，并验证它们是否存在。

```
dpkg -L fontconfig
```

查看输出，确认 `/usr/bin/fc-cache` 是否在列表中。

### 步骤 12：尝试从 DEB 文件手动安装fontconfig  

如果问题仍未解决，可以尝试手动下载并安装 `fontconfig` 软件包。

```
sudo apt-get download fontconfig
sudo dpkg -i --force-all fontconfig_*.deb
```

**注意：** 请确保替换 `fontconfig_*.deb` 为实际下载的文件名。

### 步骤 13：检查fontconfig依赖的库  

查看 `fc-cache` 依赖的库，确保它们都存在。

```
ldd /usr/bin/fc-cache
```

如果有任何库显示为 `not found`，则需要重新安装相应的库。

### 步骤 14：重新安装相关的依赖库  

如果发现缺少某些库，例如 `libfontconfig.so.1`，请重新安装相关的库。

```
sudo apt-get install --reinstall libfontconfig1
```
### 步骤 15：尝试移除并重新安装fontconfig  

**警告：** 这可能会移除依赖于 `fontconfig` 的其他软件包，请务必谨慎。

```
sudo apt-get remove --purge fontconfig
sudo apt-get install fontconfig
```

在执行此操作前，您可以检查哪些软件包依赖于 `fontconfig`：

```
apt-cache rdepends fontconfig
```
### 步骤 16：再次验证fc-cache  

重复 **步骤 3** 和 **步骤 5**，确认 `fc-cache` 已正确安装并可执行。

### 步骤 17：重新配置并更新initramfs  
```
sudo dpkg --configure -a
sudo update-initramfs -u
```

  


---

  


**如果在上述所有步骤后问题仍未解决，我们可以考虑以下临时解决方案：**

### 临时解决方案：禁用plymouth钩子  

**注意：** 这只是一个临时的解决方案，可能会影响系统的启动画面。

**步骤 1：重命名 `plymouth` 钩子脚本**

```
sudo mv /usr/share/initramfs-tools/hooks/plymouth /usr/share/initramfs-tools/hooks/plymouth.bak
```

**步骤 2：重新配置软件包并更新 `initramfs`**

```
sudo dpkg --configure -a
sudo update-initramfs -u
```

**步骤 3：继续软件包安装或更新**

```
apt install git
```
