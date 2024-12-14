# Linux 修改 root 用户的密码



 **Link:** [https://zhuanlan.zhihu.com/p/702805204]

## 修改 root 用户  

如果你需要修改 root 用户自己的密码，可以直接运行 `passwd` 命令

```
passwd 
```

系统会提示你输入并确认新密码：

```
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully 
```
### 修改其他用户的密码  

**切换到 root 用户**（如果还没有切换）

```
sudo -i 
```

**修改用户 `alice` 的密码**

```
passwd alice 
```

**操作步骤同上**

