---
slug: linux-使用-rsync-传输文件
title: Linux 使用 rsync 传输文件
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-06-28
---

# Linux 使用 rsync 传输文件

## 配置 SSH 登录

**在本地机器生成 SSH 密钥**（如果还没有的话）

```
ssh-keygen -t rsa
```

按照提示进行操作

**将公钥复制到远程机器**： 使用 `ssh-copy-id` 命令将你的公钥添加到远程服务器的 `~/.ssh/authorized_keys` 文件中：

```
ssh-copy-id username@B_machine_IP
```

按提示操作，你会看到`Number of key(s) added: 1`表示添加成功，完成这一步后，你应该可以无需密码通过 SSH 访问远程服务器。

## 使用 rsync

**确认 `rsync` 安装**：确保两台机器都安装了 `rsync`。

**执行 `rsync` 命令**：

```
rsync -avzP /path/to/source/folder/ username@B_machine_IP:/path/to/destination/folder/
```

- `-a` 表示归档模式，确保文件的属性和权限被保留。
- `-v` 表示详细模式，会显示传输过程的详细信息。
- `-z` 表示启用压缩，减少数据传输量。
