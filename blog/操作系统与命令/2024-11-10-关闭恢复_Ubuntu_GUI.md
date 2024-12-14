---
authors: sumingcheng
---
# 关闭/恢复 Ubuntu GUI



 **Link:** [https://zhuanlan.zhihu.com/p/6036747209]

### 临时关闭GUI  

如果你只是想临时关闭GUI，可以通过以下命令停止显示管理器服务（例如GDM、LightDM等）。这会将你带回到命令行界面，而不会在下次启动时影响GUI。

首先，需要确定你的Ubuntu使用的是哪种显示管理器。常见的有`gdm3`（GNOME Display Manager）和`lightdm`。

```
systemctl status gdm3
```

或者

```
systemctl status lightdm
```

停止显示管理器服务。例如，如果你的系统使用`gdm3`，可以使用以下命令

```
sudo systemctl stop gdm3
```

如果是`lightdm`，使用

```
sudo systemctl stop lightdm
```
### 永久不启动GUI  

如果你想让Ubuntu系统永久不启动GUI，只使用命令行界面，可以禁用显示管理器服务的自动启动。

```
sudo systemctl disable gdm3
```

或者

```
sudo systemctl disable lightdm
```

重启你的电脑

```
sudo reboot
```

系统将以命令行模式重新启动。

### 恢复GUI  

如果你想恢复GUI，可以通过以下命令恢复默认的图形界面启动目标

```
sudo systemctl set-default graphical.target
sudo reboot
```
