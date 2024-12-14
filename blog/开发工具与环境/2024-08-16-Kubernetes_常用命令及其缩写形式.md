---
slug: kubernetes-常用命令及其缩写形式
title: Kubernetes 常用命令及其缩写形式
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-08-16
---

# Kubernetes 常用命令及其缩写形式



 **Link:** [https://zhuanlan.zhihu.com/p/714809401]



主要资源类型及其 `kubectl` 命令的缩写

| 常用命令 | 缩写形式 | 说明 |
| --- | --- | --- |
| pods | po | 管理 Pods |
| services | svc | 管理服务 |
| deployments | deploy | 管理部署 |
| replicasets | rs | 管理 ReplicaSets |
| namespaces | ns | 管理命名空间 |
| ingresses | ing | 管理 Ingress |
| configmaps | cm | 管理配置映射 |
| secrets | secret | 管理敏感信息 |
| serviceaccounts | sa | 管理服务账号 |
| persistentvolumeclaims | pvc | 管理持久卷声明 |
| persistentvolumes | pv | 管理持久卷 |

### 补充  

以下是一些可能也需要了解的 Kubernetes 资源类型，虽然它们的使用频率可能没有上表中的那么高

| 常用命令 | 缩写形式 | 说明 |
| --- | --- | --- |
| events | ev | 查看事件 |
| nodes | no | 管理集群节点 |
| clusterroles | cr | 管理集群级角色 |
| clusterrolebindings | crb | 管理集群级角色绑定 |
| roles | ro | 管理命名空间级角色 |
| rolebindings | rb | 管理命名空间级角色绑定 |