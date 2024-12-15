---
slug: 使用-firewalld-放开关闭端口
title: 使用 firewalld 放开关闭端口
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-05-23
---

# 使用 firewalld 放开/关闭端口

### 使用 firewalld 放开/关闭端口

确保 `firewalld` 服务正在运行

```
sudo systemctl start firewalld
sudo systemctl enable firewalld
```

使用 `firewall-cmd` 命令放开 3000 和 3001 端口

```
sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
sudo firewall-cmd --zone=public --add-port=3001/tcp --permanent
```

关闭 3000 和 3001 端口

```
sudo firewall-cmd --zone=public --remove-port=3000/tcp --permanent
sudo firewall-cmd --zone=public --remove-port=3001/tcp --permanent
```

重载防火墙以使更改生效

```
sudo firewall-cmd --reload
```

验证端口是否已放开

```
sudo firewall-cmd --list-all
```
