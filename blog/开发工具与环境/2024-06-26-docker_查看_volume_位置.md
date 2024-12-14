---
slug: docker-查看-volume-位置
title: docker 查看 volume 位置
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-06-26
---

# docker 查看 volume 位置



 



**列出所有卷**：首先确保卷 `logs` 已被正确创建。

```
docker volume ls
```

**检查卷的详情**：使用以下命令来查看 `logs` 卷的详细信息，包括它的实际存储路径。

```
docker volume inspect logs 卷名
```

这个命令将返回一个包含卷详细信息的JSON数组。其中的 `"Mountpoint"` 键值对应的值就是卷在宿主机上的存储路径。例如：

```
[
    {
        "CreatedAt": "2024-06-20T13:47:04+08:00",
        "Driver": "local",
        "Labels": {
            "com.docker.compose.project": "mysql-redis",
            "com.docker.compose.version": "2.27.1",
            "com.docker.compose.volume": "mysql"
        },
        "Mountpoint": "/var/lib/docker/volumes/mysql-redis_mysql/_data",
        "Name": "mysql-redis_mysql",
        "Options": null,
        "Scope": "local"
    }
]
```

在这个示例中，`logs` 卷的存储路径是 `/var/lib/docker/volumes/mysql-redis_mysql/_data`。您可以通过访问这个路径来查看和管理存储在卷中的日志文件。