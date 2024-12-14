---
slug: nginx-代理-eventsstream-接口配置优化
title: Nginx 代理 EventsStream 接口配置优化
authors: [sumingcheng]
tags: [backend]
date: 2024-07-19
---

# Nginx 代理 EventsStream 接口配置优化



 



**处理 HTTP 流（如 SSE-Server Sent Events）的场景，这种情况下，配置需要优化以支持长连接和实时数据流**

## 配置优化  

**`proxy_buffering off;`**

这个设置非常适合事件流。对于 SSE 或 WebSocket 等实时数据传输技术，禁用缓冲可以减少发送消息到客户端的延迟，因为它允许服务器立即发送响应而不是等待缓冲区填满。

**`chunked_transfer_encoding on;`**

适合事件流。对于动态生成且大小未知的内容（如实时生成的事件数据），启用分块传输可以持续地发送数据到客户端，而不必等待所有内容生成完成。

**`tcp_nopush on;`**

处理事件流时可能不是最佳选择。虽然它可以优化数据包的传输效率，但对于需要尽快把小消息推送到客户端的实时通信来说，可能会引入不必要的延迟。

**`tcp_nodelay on;`**

非常适合事件流。此设置确保数据包立即发送，对于需要低延迟的实时数据传输（如 SSE）非常关键。

**`keepalive_timeout 120;`**

适合事件流。长时间的 keepalive 超时对于维持 SSE 这样的长连接非常有利，因为它可以减少因连接超时而频繁重连的情况。

## 配置  

建议只是针对需要设置的接口进行配置如下

```
    location /api/chat-process {
      # 后台接口地址
      proxy_pass http://127.0.0.1:5008/api/chat-process;
      proxy_redirect default;
      add_header Access-Control-Allow-Origin *;
      add_header Access-Control-Allow-Headers X-Requested-With;
      add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
			proxy_buffering off;
			chunked_transfer_encoding on;
			tcp_nopush on;
			tcp_nodelay on;
			keepalive_timeout 300;
    }
```