---
slug: 常用的-journalctl-命令总结
title: 常用的 journalctl 命令总结
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-09-25
---

# 常用的 journalctl 命令总结



 **Link:** [https://zhuanlan.zhihu.com/p/722001166]



**journalctl** 是一个用于查看由 **systemd** 收集的系统和服务日志的工具。

### 1. 查看所有日志  
```
journalctl
```
### 2. 实时查看日志（类似于tail -f）  
```
journalctl -f
```
### 3. 按服务查看日志  

**查看特定服务的日志**

```
journalctl -u <服务名>
```

例如，查看 `nginx` 服务的日志

```
journalctl -u nginx
```

**实时查看特定服务的日志**

```
journalctl -u <服务名> -f
```
### 4. 按时间过滤日志  

**查看自某时间以来的日志**

```
journalctl --since "YYYY-MM-DD HH:MM:SS"
```

例如，查看今天的日志

```
journalctl --since today
```

**查看某时间范围内的日志**

```
journalctl --since "YYYY-MM-DD" --until "YYYY-MM-DD"
```
### 5. 按引导（启动）次数查看日志  

**查看当前引导（启动）以来的日志**

```
journalctl -b
```

**查看上一次引导的日志**

```
journalctl -b -1
```

**列出所有引导记录**

```
journalctl --list-boots
```
### 6. 按优先级（日志级别）过滤  

**仅显示错误级别及以上的日志**

```
journalctl -p err
```

**指定优先级范围**

```
journalctl -p 0..3
```

**优先级等级（从高到低）**

| 优先级 | 级别 | 含义 |
| --- | --- | --- |
| 0 | emerg | 紧急 |
| 1 | alert | 警报 |
| 2 | crit | 严重 |
| 3 | err | 错误 |
| 4 | warning | 警告 |
| 5 | notice | 通知 |
| 6 | info | 信息 |
| 7 | debug | 调试 |

### 7. 搜索日志内容  

**按关键词搜索日志**

```
journalctl | grep "关键词"
```

**使用 `-g` 选项搜索**

```
journalctl -g "关键词"
```
### 8. 按进程或用户过滤  

**按进程 ID（PID）过滤**

```
journalctl _PID=1234
```

**按用户 ID（UID）过滤**

```
journalctl _UID=1000
```
### 9. 查看内核日志  
```
journalctl -k
```
### 10. 反向排序日志（最新的在前）  
```
journalctl -r
```
### 11. 查看磁盘日志占用情况  
```
journalctl --disk-usage
```
### 12. 清理日志  

**保留最近 7 天的日志**

```
sudo journalctl --vacuum-time=7d
```

**将日志总大小限制为 1GB**

```
sudo journalctl --vacuum-size=1G
```
### 13. 不使用分页器显示  
```
journalctl --no-pager
```
### 14. 指定输出格式  

**详细模式**

```
journalctl -o verbose
```

**JSON 格式**

```
journalctl -o json-pretty
```
### 15. 导出和导入日志  

**导出日志**

```
journalctl --since "YYYY-MM-DD" --until "YYYY-MM-DD" --output=export > logs.bin
```

**导入日志**

```
journalctl --file=logs.bin
```