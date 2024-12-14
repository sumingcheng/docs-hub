---
slug: ubuntu-上安装和配置-docker
title: Ubuntu 上安装和配置 Docker
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-10-09
---

# Ubuntu 上安装和配置 Docker



 

## 一、更新软件源  

备份现有的 `sources.list` 文件并替换为清华大学的镜像源

```
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
​
sudo tee /etc/apt/sources.list > /dev/null <<EOL
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
EOL
​
echo "已备份原始 sources.list 文件为 sources.list.bak，并写入新的 sources.list。"
​
sudo apt-get update
```
## 二、安装必要依赖  
```
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release
```
## 三、添加 Docker 的 GPG 密钥和仓库  
```
sudo install -m 0755 -d /etc/apt/keyrings
​
curl -fsSL https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu/gpg | \
sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
​
sudo chmod a+r /etc/apt/keyrings/docker.gpg
​
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
​
sudo apt-get update
```
## 四、安装 Docker  
```
sudo apt-get install -y docker-ce docker-ce-cli containerd.io \
docker-buildx-plugin docker-compose-plugin
```
## 五、验证安装  
```
docker info
```

如果安装成功，您将看到 Docker 的详细信息。

## 六、配置 Docker 日志和其他选项  

创建或修改 `/etc/docker/daemon.json` 文件

```
sudo tee /etc/docker/daemon.json > /dev/null <<EOF
{
  "insecure-registries": ["0.0.0.0/0"],
  "live-restore": true,
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "50m",
    "max-file": "3"
  },
  "default-address-pools": [
    {
      "base": "172.30.0.0/16",
      "size": 24
    },
    {
      "base": "172.31.0.0/16",
      "size": 24
    }
  ]
}
EOF
```

重新加载并重启 Docker 服务

```
sudo systemctl daemon-reload
sudo systemctl restart docker
sudo systemctl enable docker
```

再次验证

```
docker info
```

确保配置已生效。

## 七、安装 Docker Compose  
```
sudo wget https://github.com/docker/compose/releases/download/v2.27.2/docker-compose-linux-x86_64 \
-O /usr/local/bin/docker-compose
​
sudo chmod +x /usr/local/bin/docker-compose
```
## 八、更新 Hosts 文件  
```
echo -e "59.151.19.44\tmodel.vnet.com\n172.22.220.40\tmodel.vnet.com" | sudo tee -a /etc/hosts
```

这样就完成了 Docker 的安装和基本配置。