---
slug: linux-redis-cli-常用操作命令
title: Linux redis-cli 常用操作命令
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-08-27
---

# Linux redis-cli 常用操作命令



 

## 连接到 Redis 服务器  

`-h` 指定服务器主机名，`-p` 指定端口，`-a` 用于认证密码。如果你直接输入`redis-cli` 它会尝试连接到本地机器上默认的 Redis 端口 6379。

```
redis-cli -h [hostname] -p [port] -a [password]
```
## 设置键值  

设置一个键值对。

```
SET key value
```
## 获取键的值  

用来获取指定键的值。

```
GET key
```
## 删除键  

删除一个或多个键。

```
DEL key
```
## 检查键是否存在  

检查一个键是否存在，存在返回 1，不存在返回 0。

```
EXISTS key
```
## 列出所有键  

根据模式匹配列出所有键，例如 `KEYS *` 列出所有键。

```
KEYS pattern
```
## 切换数据库  
```
SELECT 1
```
## 清空当前数据库  

清空当前选中的数据库

```
FLUSHDB
```
## 清空所有数据库  

清空所有数据库

```
FLUSHALL
```
## 查看统计信息  
```
INFO
```
## 原子性增减操作  

对存储在键中的数字执行原子增加或减少操作。

```
INCR key
DECR key
```