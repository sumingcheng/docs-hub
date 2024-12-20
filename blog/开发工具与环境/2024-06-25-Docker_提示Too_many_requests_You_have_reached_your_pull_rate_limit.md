---
slug: docker-提示too-many-requests-you-have-reached-your-pull-rate-limit
title: Docker 提示Too many requests You have reached your pull rate limit
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-06-25
---

# Docker 提示“Too many requests: You have reached your pull rate limit”。

Docker Hub 为了管理资源消耗，对镜像的拉取次数设有限制。对于未认证的用户，这一限制较低，而对于已认证的用户，限制相对较高。一旦超出这个限制，就会收到 HTTP 状态码 429（Too Many Requests）

## Docker Hub 登录

最简单的方法是登录到您的 Docker Hub 账户。通过执行下面的命令来登录

```
docker login
```

登录后，Docker Hub 将提高您的 API 调用频率限制，已认证的用户**每 6 小时 200 个拉取请求**

## 其他方法

**升级 Docker Hub 账户**

如果您是高频用户，建议考虑升级到 Docker Hub 的付费账户。付费账户提供更高的数据拉取限额，满足更频繁的开发需求。

**使用其他镜像仓库**

考虑使用其他公共镜像仓库，如 Google Container Registry (GCR)、Amazon Elastic Container Registry (ECR)，或者建立您自己的私有镜像仓库。这些选择可以分散对 Docker Hub 的依赖，减少受限的风险。

**本地缓存常用镜像**

尽量缓存您经常使用的镜像。当您的 CI/CD 流程或开发环境需要使用这些镜像时，直接从本地缓存拉取，减少对 Docker Hub 的请求。
