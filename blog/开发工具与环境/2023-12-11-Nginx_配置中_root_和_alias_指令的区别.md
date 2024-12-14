---
slug: nginx-配置中-root-和-alias-指令的区别
title: Nginx 配置中 root 和 alias 指令的区别
authors: [sumingcheng]
tags: [dev-tools]
date: 2023-12-11
---

# Nginx 配置中 root 和 alias 指令的区别



 **Link:** [https://zhuanlan.zhihu.com/p/671653767]

## 两种指令的配置区别  

假设您的网站主页文件存放在 `/var/www/sumingcheng` 目录下，而管理系统的文件存放在 `/var/www/sumingcheng-admin` 目录下。

### 使用root指令配置主页  

对于网站的主页（`sumingcheng.cn`），我们使用 `root` 指令。这意味着所有到根 URL 的请求都会映射到 `/var/www/sumingcheng` 目录。

```
server {
    listen       80;
    server_name  sumingcheng.cn;
​
    # 配置主页
    location / {
        root   /var/www/sumingcheng;
        index  index.html index.htm;
    }
}
```

在这个配置中，当用户访问 `http://sumingcheng.cn` 时，Nginx 将会从 `/var/www/sumingcheng/index.html` 加载主页。

### 使用alias指令配置管理系统  

对于管理系统（`sumingcheng.cn/admin`），使用 `alias` 指令。这意味着所有到 `/admin` URL 的请求都会映射到 `/var/www/sumingcheng-admin` 目录。

```
server {
    listen       80;
    server_name  sumingcheng.cn;
​
    # 配置主页
    location / {
        root   /var/www/sumingcheng;
        index  index.html index.htm;
    }
​
    # 配置管理系统
    location /admin/ {
        alias /var/www/sumingcheng-admin/;
        index index.html index.htm;
    }
​
    # 其他配置...
}
```

在这个配置中，当用户访问 `http://sumingcheng.cn/admin` 时，Nginx 将会从 `/var/www/sumingcheng-admin/index.html` 加载管理系统的页面。

### 为什么不推荐使用root配置admin呢？  

使用 `root` 配置 `admin` 路由是可以的，但这在某些情况下可能会导致路径解析问题，特别是当子目录的物理路径与 URL 路径不完全一致时。这正是 `alias` 指令更受欢迎的原因之一。

### 先解释一下，什么是子目录的物理路径与 URL 路径不完全一致  
### 子目录的物理路径与 URL 路径一致  

如果你使用 `root /var/www;` 并且 URL 路径与文件系统路径一致

1. URL 路径：`http://sumingcheng.cn/admin`
2. 文件系统路径：`/var/www/admin`

这种情况下，当用户访问 `http://sumingcheng.cn/admin`，Nginx 会在 `/var/www/admin` 路径下查找文件，这是因为 URL 路径 `/admin` 直接映射到了 `/var/www/admin`。

### 子目录的物理路径与 URL 路径不一致  

但在你的情况中，你想要的映射关系是

1. URL 路径：`http://sumingcheng.cn/admin`
2. 文件系统路径：`/var/www/sumingcheng-admin`

这里，URL 路径 `/admin` 并不直接对应于文件系统中的 `/var/www/admin` 路径，而是对应于 `/var/www/sumingcheng-admin`。这就是所谓的“物理路径与 URL 路径不完全一致”。

### 使用root配置子目录  

当使用 `root` 配置子目录（比如 `/admin`）时，Nginx 会将整个 URL 路径附加到 `root` 指令指定的路径后面。这意味着，如果你的 `root` 配置是 `/var/www/sumingcheng-admin`，并且用户访问 `http://sumingcheng.cn/admin/index.html`，Nginx 会尝试在 `/var/www/sumingcheng-admin/admin/index.html` 找到该文件。这可能并不是你想要的，因为实际的文件可能就在 `/var/www/sumingcheng-admin/index.html`。

### 使用alias配置子目录  

相比之下，`alias` 指令允许你将一个特定的 URL 路径（如 `/admin`）映射到服务器上的一个不同的路径。这意味着，如果你的 `alias` 配置是 `/var/www/sumingcheng-admin/`，当用户访问 `http://sumingcheng.cn/admin/index.html` 时，Nginx 会直接在 `/var/www/sumingcheng-admin/index.html` 查找该文件，这正是我们期望的结果。

## 有几种情况下不建议使用root指令  

1. **URL 路径与文件系统路径不一致**：当你想将特定的 URL 路径映射到服务器上的一个不同的文件系统路径时，这种情况下使用 `root` 可能导致路径错误。例如，如果你想通过 URL `http://sumingcheng.cn/admin` 访问 `/var/www/special-admin` 目录下的内容，使用 `root` 将导致 Nginx 尝试在 `/var/www/special-admin/admin` 中查找文件，而实际你希望它直接查找 `/var/www/special-admin`。
2. **需要特定的子路径映射**：如果你的应用需要将多个 URL 子路径映射到完全不同的文件系统路径，使用 `root` 将无法满足需求。例如，如果 `/images` 应该映射到一个路径，而 `/scripts` 映射到另一个完全不同的路径，`root` 将无法实现这种映射。
3. **避免不必要的嵌套目录**：使用 `root` 有时会导致文件路径解析出现不必要的嵌套。例如，如果配置了 `root /var/www;` 和一个指向 `/admin` 的 `location` 块，Nginx 会尝试在 `/var/www/admin` 中查找 `/admin` 的内容，这可能并不是实际的文件路径。

### 什么情况下推荐使用root指令  

1. **整站映射**：当你的整个网站或应用位于一个单一的文件系统目录下，并且 URL 路径直接映射到这个目录结构时，使用 `root` 是最简单和直接的方法。例如，如果你的网站文件全部位于 `/var/www/mywebsite` 目录下，那么使用 `root /var/www/mywebsite;` 是最合适的。
2. **简单的 URL 结构**：对于简单的、没有复杂子目录映射需求的网站，`root` 提供了一个干净和高效的解决方案。因为在这种情况下，每个 URL 路径都直接对应于文件系统中的一个相同的路径。