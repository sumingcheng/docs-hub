---
slug: jwtpayload字段解释
title: JWTpayload字段解释
authors: [sumingcheng]
tags: [backend]
date: 2024-07-07
---

# JWT（payload）字段解释

## 注册的 Claims

| 字段名 | 描述           | 类型   |
| ------ | -------------- | ------ |
| iss    | 发行人         | 字符串 |
| sub    | 主题           | 字符串 |
| aud    | 接收方         | 字符串 |
| exp    | 过期时间       | 时间戳 |
| nbf    | 在此之前不可用 | 时间戳 |
| iat    | 发行时间       | 时间戳 |
| jti    | JWT ID         | 字符串 |

### 公共的 Claims

公共的 claims 可以被定义用于公共或私有的信息交换。为了避免冲突，它们应该在 IANA JSON Web Token Registry 中注册，或者包含一个命名空间以防止命名冲突。

### 私有的 Claims

私有的 claims 是发送者和接收者之间共同定义的 claims，并不是注册或公共的 claims。这些 claims 通常用于携带业务逻辑相关的信息。
