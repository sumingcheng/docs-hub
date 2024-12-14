---
slug: linux-mongodb-数据的导出和导入
title: Linux MongoDB 数据的导出和导入
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-09-26
---

# Linux MongoDB 数据的导出和导入



 **Link:** [https://zhuanlan.zhihu.com/p/712964315]

## 准备工作  
### 检查 MongoDB 安装状态  

如果你已经安装了 MongoDB 服务器，那么 mongodump 和 mongorestore 工具可能已经包含在内，你可以直接使用这些工具。如果未安装完整的服务器或使用 Docker 环境，需按以下步骤安装这些工具。

## 安装 mongodump 和 mongorestore  
### 导入 MongoDB 的 GPG 公钥  

执行以下命令导入公钥，确保软件来源的安全性。

```
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
```
### 添加 MongoDB 的软件源  

我的是 Ubuntu，创建相应的源列表文件。以下示例适用于 Ubuntu 20.04 (Focal Fossa)。

```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```
### 更新软件包列表  

更新 apt 包索引以包含最新的 MongoDB 软件源。

```
sudo apt-get update
```
### 安装 MongoDB 数据库工具  

安装包含 mongodump 和 mongorestore 的数据库工具包。

```
sudo apt-get install -y mongodb-database-tools
```
### 验证工具安装  

安装完成后，检查工具的版本以确认安装成功。

```
mongodump --version
mongorestore --version
```
## 使用 mongodump 和 mongorestore  
### 数据导出  

使用 mongodump 从源数据库导出数据。请确保正确替换 URI 中的用户名和密码，对密码进行 URL 编码（如有特殊字符），并指定足够权限的输出目录。

```
mongodump --uri "mongodb://myusername:mypassword@10.20.201.215:27017/fastgpt?authSource=admin&directConnection=true" --out /home/fastgpt-dump
```
### 数据导入  

使用 mongorestore 将数据导入到目标数据库。添加 `--noOverwrite` 选项可以避免覆盖目标实例中已存在的数据。

```
mongorestore --uri "mongodb://name:你的密码@192.168.33.62:27017/fastgpt?authSource=admin" --noOverwrite /home/fastgpt-dump
```