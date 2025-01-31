---
slug: 什么是-restful-api
title: 什么是 RESTful API
authors: [sumingcheng]
tags: [network-protocol]
date: 2023-11-16
---

# 什么是 RESTful API

RESTful API（Representational State Transfer API）既是一种技术模式，也是一种设计标准或风格。它并不是一个正式的标准，而是一系列架构原则和约束条件的集合。

这些原则和约束条件旨在利用现有的 Web 技术和协议（如 HTTP），以一种简单、高效、可扩展、可靠和可移植的方式来设计和开发分布式系统。RESTful API 强调资源的表现层和客户端-服务器之间的无状态通信，目的是提高网络应用的性能、可伸缩性和简化修改。它已成为开发 Web 服务的流行方法。

### 实际使用

比如我们某个请求的接口，可能是以下这几种形式

```
# 获取 notes
GET /notes
# 获取 notes id 的数据
GET /notes/id
```

这种接口，我们是不用考虑服务端内部是怎么实现的，只需要知道这是彼此交互的接口

客户端不知道服务器到底有多少个中间层，也不需要知道

某些请求，比如 get /notes 可以在客户端或者服务端缓存一段时间

遵循以上的这些原则，就是 RESTful API

### RESTful API 中文叫什么？

RESTful API 翻译成中文通常被称作“表现层状态转移应用编程接口”。这里，“表现层”指的是资源的表现层，即资源的具体表示形式（如 JSON、XML 等）；“状态转移”则是指通过 HTTP 动词（如 GET、POST、PUT、DELETE 等）来表达对资源的操作，实现应用的状态转换。这种设计风格强调资源的识别、通过标准的 HTTP 方法进行操作，以及无状态通信，是构建 Web 服务的一种流行方法。
