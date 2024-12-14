---
authors: sumingcheng
---
# Ubuntu 设置 sudo -s 无密码



 **Link:** [https://zhuanlan.zhihu.com/p/692249921]

## 配置无密码 sudo  

使用 `visudo` 编辑 sudo 配置

```
sudo visudo
```

`visudo` 命令会安全地打开 `/etc/sudoers` 文件进行编辑，并检查保存时的语法错误。

在 `visudo` 编辑器中，找到适当的位置并添加规则。这里有几个示例

为单个用户免密码使用 sudo（替换 `username` 为您的用户名）

```
username ALL=(ALL) NOPASSWD:ALL
```

为一个用户组免密码使用 sudo（替换 `groupname` 为您的组名，并确保组名前有 `%`）

```
%groupname ALL=(ALL) NOPASSWD:ALL
```

允许所有用户免密码使用 sudo

```
ALL ALL=(ALL) NOPASSWD:ALL
```

按 `Ctrl+O` 保存更改，然后按 `Ctrl+X` 退出 nano 编辑器。

关闭终端会话并重新打开，以测试无密码 sudo 是否生效。

## 注意事项  

* 日常使用确保您对需要此权限的用户或组有充分的信任。
* 我一般在 win 子系统里面直接配置无密码，这样节省时间

  


如果您喜欢这篇文章，不妨给它点个赞并收藏，感谢您的支持！

