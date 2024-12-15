---
slug: linux-配置和使用-screen
title: Linux 配置和使用 Screen
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-07-25
---

# Linux 配置和使用 Screen

### 安装 Screen

使用以下命令安装`screen`

```
# Debian/Ubuntu
sudo apt-get install screen
​
# CentOS/RHEL
sudo yum install screen
​
# Arch Linux
sudo pacman -S screen
```

### 启动和管理 Screen 会话

| 命令                   | 功能         |
| ---------------------- | ------------ |
| screen                 | 启动新会话   |
| screen -S session_name | 启动命名会话 |
| screen -ls             | 列出所有会话 |
| screen -r session_name | 重新连接会话 |
| Ctrl + a, d            | 分离当前会话 |

### 窗口管理

| 命令        | 功能             |
| ----------- | ---------------- |
| Ctrl + a, c | 新建窗口         |
| Ctrl + a, n | 切换到下一个窗口 |
| Ctrl + a, p | 切换到上一个窗口 |
| Ctrl + a, w | 列出所有窗口     |
| Ctrl + a, k | 关闭当前窗口     |

### 分割窗口

| 命令          | 功能         |
| ------------- | ------------ |
| Ctrl + a, S   | 水平分割窗口 |
| Ctrl + a, Tab | 切换分区     |
| Ctrl + a, Q   | 移除所有分割 |

### 复制和粘贴

| 命令        | 功能                                        |
| ----------- | ------------------------------------------- |
| Ctrl + a, [ | 进入复制模式                                |
| Space       | 开始选择文本（再次按 Space 结束选择并复制） |
| Ctrl + a, ] | 粘贴文本                                    |

### 锁定和帮助

| 命令        | 功能         |
| ----------- | ------------ |
| Ctrl + a, x | 锁定会话     |
| Ctrl + a, ? | 显示帮助信息 |

### 退出 Screen

| 命令        | 功能         |
| ----------- | ------------ |
| exit        | 退出会话     |
| Ctrl + a, K | 强制终止会话 |

### 自定义配置

编辑`~/.screenrc`文件以自定义`screen`的行为。示例配置启用垂直分割和设置快捷键

```
bind | split -v
bind - resize =
```
