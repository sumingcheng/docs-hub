---
slug: 你可以从-docker-inspect-获取哪些信息
title: 你可以从 docker inspect 获取哪些信息
authors: [sumingcheng]
tags: [backend]
date: 2024-11-22
---

# 你可以从 docker inspect 获取哪些信息

## 对正在运行的 MySQLdocker inspect 后内容如下

```
[
    {
        "Id": "92fe41a6dfd5...",  // 容器的唯一标识符
        "Created": "2024-10-09T08:32:41.659Z",  // 容器创建的时间戳
        "Path": "docker-entrypoint.sh",  // 容器启动时执行的脚本
        "Args": ["--default-authentication-plugin=mysql_native_password"],  // 脚本参数
        "State": {
            "Status": "running",  // 容器当前状态，正在运行
            "Running": true,  // 容器是否在运行
            "Health": {
                "Status": "healthy",  // 容器健康状态为健康
                "FailingStreak": 0,  // 健康检查失败次数
                "Log": []  // 健康检查日志
            }
        },
        "Image": "mysql:8.0.36",  // 使用的MySQL镜像版本
        "Name": "/mysql_server",  // 容器名称
        "RestartCount": 0,  // 重启次数
        "HostConfig": {
            "NetworkMode": "mysql_mysql",  // 网络模式
            "PortBindings": {  // 端口绑定配置
                "3306/tcp": [{ "HostIp": "", "HostPort": "3306" }]  // 映射到主机的3306端口
            },
            "RestartPolicy": {
                "Name": "always"  // 重启策略，始终重启
            }
        },
        "Config": {
            "Env": [  // 环境变量配置
                "MYSQL_DATABASE=demo",  // 数据库名
                "MYSQL_USER=admin",  // 用户名
                "MYSQL_PASSWORD=123456",  // 用户密码
                "MYSQL_ROOT_PASSWORD=123456"  // 根密码
            ],
            "Cmd": ["--default-authentication-plugin=mysql_native_password"],  // 容器启动命令
            "Healthcheck": {  // 健康检查配置
                "Test": ["CMD", "mysqladmin", "ping", "-h", "localhost"],  // 使用mysqladmin ping测试
                "Interval": 30000000000,  // 检查间隔
                "Retries": 3  // 重试次数
            }
        },
        "NetworkSettings": {
            "IPAddress": "172.27.0.2",  // 容器分配的IP地址
            "Networks": {
                "mysql_mysql": {  // 网络配置
                    "IPAddress": "172.27.0.2",  // 网络中的IP地址
                    "Gateway": "172.27.0.1"  // 网关
                }
            }
        }
    }
]
```
