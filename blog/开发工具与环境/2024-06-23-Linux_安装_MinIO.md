---
slug: linux-安装-minio
title: Linux 安装 MinIO
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-06-23
---

# Linux 安装 MinIO



 **Link:** [https://zhuanlan.zhihu.com/p/701858772]

## 官网地址  
[https://min.io/download?license=agpl&platform=docker](https://min.io/download?license=agpl&platform=docker)## Docker 安装  

创建一个 docker-compose.yml

```
services:
  minio:
    image: quay.io/minio/minio
    container_name: minio
    ports:
      - "9000:9000"
      - "9001:9001" # MinIO的管理界面（Console）端口
    volumes:
      - minio_data:/data
      - minio_config:/root/.minio
    environment:
      MINIO_ROOT_USER: admin # 设置MinIO的用户名
      MINIO_ROOT_PASSWORD: admin123456 # 设置MinIO的密码
      MINIO_REGION: "cn-north-1"
      MINIO_BROWSER: "on" # 是否开启浏览器访问
    command: server /data --console-address ":9001"
    healthcheck:
      test:
        [
          "CMD",
          "curl",
          "-f",
          "http://localhost:9000/minio/health/live"
        ]
      interval: 30s
      timeout: 20s
      retries: 3
    networks:
      - minio_network
volumes:
  minio_data:
  minio_config:
networks:
  minio_network:
    driver: bridge
```