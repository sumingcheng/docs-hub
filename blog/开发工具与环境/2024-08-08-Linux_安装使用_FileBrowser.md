---
slug: linux-安装使用-filebrowser
title: Linux 安装使用 FileBrowser
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-08-08
---

# Linux 安装使用 FileBrowser



 **Link:** [https://zhuanlan.zhihu.com/p/713515186]

### 安装 FileBrowser  

Docker 安装 FileBrowser，首先创建`docker-compose.yml` 的文件

```
version: '3.8'
services:
  filebrowser:
    image: filebrowser/filebrowser:latest
    container_name: filebrowser
    ports:
      - "8080:80"
    volumes:
      - /path/to/your/files:/srv
    restart: unless-stopped
```

以启动 FileBrowser

```
docker-compose up -d
```
### 访问和配置 FileBrowser  

浏览器访问 `http://<您的IP或域名>:8080` 来使用 FileBrowser。

## 首次登录  

* **用户名**: admin
* **密码**: admin

### 高级功能  

FileBrowser 支持一些高级功能，例如设置磁盘配额、限制访问权限和启用 HTTPS

**HTTPS 配置**：建议启用 HTTPS 来安全地使用 FileBrowser。您可以在 Docker Compose 文件中配置反向代理和 SSL/TLS。

**自定义用户权限**：您可以为不同用户设置不同的访问权限，以管理谁可以访问什么内容。