# frp 配置使用指南

## 简介

FRP (Fast Reverse Proxy) 是一个高性能的反向代理应用，用于帮助开发者轻松地将本地服务暴露到公网。

## 安装

1. 下载适合服务器架构的FRP版本。例如，对于x86_64架构的Linux，您应该下载`frp_x.xx.x_linux_amd64.tar.gz`。
2. 解压下载的文件：`tar -xzvf frp_x.xx.x_linux_amd64.tar.gz`。
3. 进入解压目录：`cd frp_x.xx.x_linux_amd64`。

## 我的环境

frp版本：https://github.com/fatedier/frp/releases/tag/v0.51.3

外网机器：Ubuntu Server 22.04 LTS 64bit

- 使用版本：[frp_0.51.3_linux_amd64.tar.gz](https://github.com/fatedier/frp/releases/download/v0.51.3/frp_0.51.3_linux_amd64.tar.gz)

内网机器：Windows11

- 使用版本：[frp_0.51.3_windows_amd64.zip](https://github.com/fatedier/frp/releases/download/v0.51.3/frp_0.51.3_windows_amd64.zip)

## 服务端配置

服务端配置就是针对frps.ini的配置

```ini
[common]
bind_port = 55555
token = your_token_here
vhost_http_port = 55556
```

- `bind_port`：FRP服务端监听的端口。
- `token`：用于身份验证的令牌，这个你可以随便设置一个密码，但是要跟客户端相同。
- `vhost_http_port`：为HTTP代理设置的端口。

### 运行服务

```shell
frps -c frps.ini
```

## 客户端配置

客户端配置就是针对frpc.ini的配置

```ini
[common]
server_addr = [你的FRP服务器IP]
server_port = 55555
token = your_token_here

[windows_http]
type = http
local_port = 80
custom_domains = your_domain.com 这个也可以不写，直接使用 IP 访问

[rdp]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 55557
```

- `server_addr`和`server_port`：FRP服务端的地址和端口。
- `token`：与服务端相同的令牌。
- 每个`[section_name]`代表一个代理。

### 运行服务

```shell
frpc -c frpc.ini
```

## 配置 **Dashboard**

在服务端的frps.ini进行配置

```ini
dashboard_port = 7500
dashboard_user = admin
dashboard_pwd = your_password
```

配置日志

```ini
log_file = ./frps.log
log_level = info
log_max_days = 3
```

综上，您的`frps.ini`可以配置成如下形式：

```ini
[common]
bind_port = 55555
token = xxxx

allow_ports = 55556,55557

dashboard_port = 7500
dashboard_user = admin
dashboard_pwd = your_password

log_file = ./frps.log
log_level = info
log_max_days = 3
```

重启

```ini
./frps -c frps.ini
```

最后，请确保服务器的防火墙设置允许`55555`和`55556`端口放开

**配置控制台后可以直接访问**

## 服务端自启动

```shell
nano /etc/systemd/system/frps.service
```

添加如下，你也可以不用root用户，但路径一定要对

```ini
[Unit]
Description=FRP Server

[Service]
ExecStart=/home/frp_0.51.3_linux_amd64/frps -c /home/frp_0.51.3_linux_amd64/frps.ini
Restart=on-failure
User=root
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```

### 重新加载

```bash
sudo systemctl daemon-reload
```

### 启动

```bash
sudo systemctl start frps
```

### 查看

```bash
sudo systemctl status frps
```

### 关闭

```bash
sudo systemctl stop frps
```

### 重启

```bash
sudo systemctl restart frps
```

### 设置自启动

```bash
sudo systemctl enable frps
```

### 查看所有运行的服务

```bash
systemctl list-units --type=service --state=running
```

## 客户端自启动

1. **打开任务计划程序**：
   - 在搜索框中输入“任务计划程序”并选择它。
2. **在右侧，点击“创建基本任务”**。
3. **设置任务名称和描述**：
   - 例如，可以命名为“启动FRP客户端”。
4. **选择触发器**：
   - 选择“当计算机启动时”或“当我登录时”，然后点击“下一步”。
5. **选择操作**：
   - 选择“启动程序”，然后点击“下一步”。
6. **指定要运行的程序**：
   - 在“程序或脚本”框中，浏览到您的 `frpc.exe` 文件，例如：`C:\Users\xg\Desktop\frp_0.51.3_windows_amd64\frpc.exe`
   - 在“添加参数(可选)”框中，输入：`-c frpc.ini`
   - 在“起始于(可选)”框中，输入：`C:\Users\xg\Desktop\frp_0.51.3_windows_amd64`
7. **点击“下一步”**，然后在最后一屏点击“完成”。

**现在，每次计算机启动或您登录时，这个任务就会运行，从而自动启动您的 FRP 客户端。**

