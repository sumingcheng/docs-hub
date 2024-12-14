# iptables 和 ufw 的常用命令

**Author:** [素明诚]

## iptables 基础命令

### 基本语法

```bash
iptables [-t table] command chain rule-specification [options]
```

### 常用命令

| 命令                 | 描述                   |
| -------------------- | ---------------------- |
| `-A, --append`       | 在指定链的末尾添加规则 |
| `-D, --delete`       | 删除指定的规则         |
| `-I, --insert`       | 在指定位置插入规则     |
| `-L, --list`         | 列出指定链中的所有规则 |
| `-F, --flush`        | 清空指定链中的所有规则 |
| `-N, --new-chain`    | 创建新的用户自定义链   |
| `-X, --delete-chain` | 删除用户自定义链       |
| `-P, --policy`       | 设置指定链的默认策略   |

### 常用示例

1. 查看当前规则：

```bash
sudo iptables -L
```

2. 允许特定端口：

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

3. 允许特定 IP：

```bash
sudo iptables -A INPUT -s 192.168.1.100 -j ACCEPT
```

4. 删除特定规则：

```bash
sudo iptables -D INPUT 1
```

## ufw 基础命令

### 常用命令

| 命令          | 描述           |
| ------------- | -------------- |
| `ufw enable`  | 启用防火墙     |
| `ufw disable` | 禁用防火墙     |
| `ufw status`  | 查看防火墙状态 |
| `ufw allow`   | 允许端口或服务 |
| `ufw deny`    | 拒绝端口或服务 |
| `ufw delete`  | 删除规则       |
| `ufw reset`   | 重置为默认设置 |

### 常用示例

1. 开启防火墙：

```bash
sudo ufw enable
```

2. 允许特定端口：

```bash
sudo ufw allow 80/tcp
```

3. 允许特定服务：

```bash
sudo ufw allow ssh
```

4. 删除规则：

```bash
sudo ufw delete allow 80
```

## 注意事项

1. 在远程服务器上修改防火墙规则时要特别小心，确保不会把自己锁在外面
2. 建议先添加允许 SSH 连接的规则，再添加其他规则
3. 对于生产环境，建议使用 ufw，它更简单且不容易配置错误
4. 重要的更改前先备份当前规则
