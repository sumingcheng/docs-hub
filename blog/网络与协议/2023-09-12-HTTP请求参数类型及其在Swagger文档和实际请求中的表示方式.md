---
slug: http请求参数类型及其在swagger文档和实际请求中的表示方式
title: HTTP请求参数类型及其在Swagger文档和实际请求中的表示方式
authors: [sumingcheng]
tags: [network-protocol]
date: 2023-09-12
---

# HTTP 请求参数类型及其在 Swagger 文档和实际请求中的表示方式





| 参数类型             | Swagger 描述            | 说明                                                                                       | 示例（传参形式）                                         |
| -------------------- | ----------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| Query Parameters     | 参数在 URL 的查询部分   | 使用 ? 开始，并使用 & 分隔多个参数                                                         | `http://sumingcheng.cn/api?param=value`                  |
| Path Parameters      | 参数是 URL 路径的一部分 | 路径参数通常用花括号 {} 表示，并在实际请求中替换为实际值                                   | `http://sumingcheng.cn/api/users/{userId}`               |
| Request Body         | 参数在 HTTP 请求体中    | 通常用于 POST、PUT 或 PATCH 请求，可以是 JSON、XML 等格式                                  | `{ "username": "John", "email": "john@sumingcheng.cn" }` |
| Header Parameters    | 参数在 HTTP 请求头中    | 用于传递额外的元数据，如身份验证令牌、客户端可接受的内容类型等                             | `Authorization: Bearer token_value`                      |
| Cookie Parameters    | 参数在 HTTP cookies 中  | 用于会话管理、用户跟踪等                                                                   | `sessionId=12345`                                        |
| Form Data Parameters | 参数在表单数据中        | 通常用于提交 HTML 表单，使用 application/x-www-form-urlencoded 或 multipart/form-data 格式 | `username=John&email=john@sumingcheng.cn`                |