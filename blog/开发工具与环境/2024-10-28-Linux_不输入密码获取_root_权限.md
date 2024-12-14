---
authors: sumingcheng
---
# Linux 不输入密码获取 root 权限



 **Link:** [https://zhuanlan.zhihu.com/p/3666992026]

## 修改sudoers文件以免密码执行sudo（推荐）  

可以通过修改 `sudoers` 文件为特定用户配置无密码 `sudo` 权限

使用 `visudo` 命令安全编辑 `sudoers` 文件

```
sudo visudo
```

在文件中添加或修改以下行，替换 `your_username` 为实际的用户名

```
your_username ALL=(ALL) NOPASSWD: ALL
```

保存并退出编辑器。

这样配置后，用户在执行 `sudo` 命令时无需输入密码，例如使用 `sudo su` 可以直接切换到 `root` 用户。

## 设置root用户的自动登录  

对于部分 Linux 发行版，可以设置在启动时自动登录 `root` 用户

**对于使用 SysVinit 的系统，编辑 `/etc/inittab` 文件**

打开 `/etc/inittab`，找到以下行

```
1:2345:respawn:/sbin/getty 38400 tty1
```

修改为

```
1:2345:respawn:/sbin/getty --autologin root 38400 tty1
```

**对于使用 `systemd` 的系统，修改 `getty` 服务配置**

创建覆盖文件

```
sudo mkdir -p /etc/systemd/system/getty@tty1.service.d/
sudo nano /etc/systemd/system/getty@tty1.service.d/override.conf
```

添加以下内容

```
[Service]
ExecStart=
ExecStart=-/sbin/agetty --autologin root --noclear %I $TERM
```

刷新 `systemd` 配置并重启服务

```
sudo systemctl daemon-reload
sudo systemctl restart getty@tty1.service
```
## 禁用root用户密码  

**不建议此方法**，但也可以通过删除 `root` 用户的密码实现无密码登录

使用以下命令删除 `root` 用户密码

```
sudo passwd -d root
```
## 使用ssh公钥认证  

通过配置 `ssh` 允许使用公钥进行身份验证，从而无需密码直接登录到 `root` 用户

确保 `ssh` 服务的配置文件 `/etc/ssh/sshd_config` 中启用了公钥认证

```
PubkeyAuthentication yes
```

在 `root` 用户的`home`目录下，将用户的公钥添加到 `~/.ssh/authorized_keys` 文件中。

确保客户端的私钥安全，且不被未授权用户访问。

