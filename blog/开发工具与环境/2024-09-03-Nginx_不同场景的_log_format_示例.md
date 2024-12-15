---
slug: nginx-不同场景的-log-format-示例
title: Nginx 不同场景的 log format 示例
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-09-03
---

# Nginx 不同场景的 log_format 示例

## 基本访问日志

用于常规的访问监控,记录关键的请求与响应信息。

```
log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                '$status $body_bytes_sent "$http_referer" '
                '"$http_user_agent" "$http_x_forwarded_for"';
```

## 性能分析日志

用于评估请求处理性能,重点关注响应时间。

```
log_format performance '$time_iso8601|$remote_addr|$request_time|$upstream_response_time|'
                       '$status|$request|$body_bytes_sent';
```

## 安全审计日志

记录与安全相关的额外信息,如 SSL/TLS 参数等。

```
log_format security '$time_iso8601|$remote_addr|$remote_user|$request|'
                    '$status|$body_bytes_sent|$http_referer|$http_user_agent|'
                    '$ssl_protocol|$ssl_cipher|$http_x_forwarded_for';
```

## API 日志

针对 API 请求的专用日志格式,关注认证 token、payload 大小等内容。

```
log_format api '$time_iso8601|$remote_addr|$request_method|$uri|$server_protocol|'
               '$status|$request_time|$http_x_api_token|$content_length';
```

## 调试日志

在排查故障时使用,记录尽可能详尽的信息。通常无需一直启用。

```
log_format debug '$time_iso8601|$remote_addr|$remote_user|$request|'
                 '$status|$body_bytes_sent|$http_referer|$http_user_agent|'
                 '$request_time|$upstream_response_time|$upstream_addr|'
                 '$ssl_protocol|$ssl_cipher|$http_x_forwarded_for|$host|$https';
```

## 在配置中使用日志

下面是一个在生产环境可用的完整示例

```
http {
    log_format main '...';
    log_format performance '...';
    log_format security '...';
    log_format api '...';
    #log_format debug '...';
​
    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log warn;
​
    server {
        listen 80;
        server_name example.com;

        location /api {
            access_log /var/log/nginx/api.log api;
            # ...
        }
​
        location /debug {
            access_log /var/log/nginx/debug.log debug;
            # ...
        }
    }
}
```

## 开发日常使用

```
  log_format backend_log '$time_local|$remote_addr|$http_x_forwarded_for|$remote_user|'
  '$request_method|$request_uri|$server_protocol|$http_host|'
  '$status|$body_bytes_sent|$request_time|$upstream_response_time|'
  '$upstream_addr|$upstream_status|$http_referer|$http_user_agent|'
  '$request_id';
```
