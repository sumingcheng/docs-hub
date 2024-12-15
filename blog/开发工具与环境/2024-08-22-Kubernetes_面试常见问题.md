---
slug: kubernetes-面试常见问题
title: Kubernetes 面试常见问题
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-08-22
---

# Kubernetes 面试常见问题

## Kubernetes 中的 apiVersion 是什么意思？

在 Kubernetes 中,`apiVersion` 指定了创建资源时要使用的 Kubernetes API 版本。由于 Kubernetes API 会随时间发展而演进,新的功能和改进被添加到不同的 API 版本中。`apiVersion` 告诉 Kubernetes 集群如何处理这些资源的特定版本。常见的 `apiVersion` 包括 `v1`、`apps/v1`、`batch/v1` 等,不同的资源和功能需要指定适当的 API 版本。需要注意的是,随着 Kubernetes 的发展,有些 API 可能会被废弃,所以在创建资源时,要确保使用的是当前支持的、稳定的 API 版本。

## Kubernetes 中 Service、Deployment 和 Pod 的基本概念

**Pod** 是 Kubernetes 中的最小和最基本的部署单位,而不是单个容器。每个 Pod 封装了一个或多个容器,这些容器共享存储和网络资源,并运行在同一使用环境下。每个 Pod 分配一个独特的 IP 地址,同一 Pod 内的容器间可以通过 `localhost` 进行通信。此外,Pod 还可以定义 Init Container,用于在应用容器启动前执行一些初始化任务。

**Deployment** 提供了一种声明式的更新机制,管理 Pod 和 ReplicaSet（确保指定数量的 Pod 副本始终可用）。它允许你定义应用的预期状态,Deployment 控制器在后台自动工作以确保当前状态匹配预期状态,包括处理更新、回滚和扩展操作。例如,Deployment 可以指定 RollingUpdate 策略,逐步替换旧的 Pod,实现平滑的应用更新。如果更新出现问题,Deployment 还可以方便地回滚到之前的版本。

**Service** 是定义一组 Pod 的访问规则的抽象方式,允许通过一个稳定的地址访问这些 Pod。Service 提供了负载均衡和服务发现,使得客户端无需了解后端 Pod 的具体位置。除了常见的 ClusterIP、NodePort 和 LoadBalancer 类型,Service 还有一种特殊的类型叫 Headless Service,它不提供负载均衡,而是让客户端直接连接到 Pod。这在某些有状态应用如 StatefulSet 中非常有用。

## Service 的类型有哪几种？有什么区别？用在什么场景？

**ClusterIP** 默认类型,为 Service 分配一个内部的 IP 地址,使 Service 只能在集群内部访问,适用于内部通信。

**NodePort** 在 ClusterIP 的基础上,NodePort 服务通过每个节点的一个静态端口向外暴露服务,使得可以从集群外部通过 `<NodeIP><NodePort>` 访问 Service。适用于需要外部访问的开发和测试环境。

**LoadBalancer** 在 NodePort 的基础上,LoadBalancer 类型通过云服务提供商的负载均衡器自动分配一个外部 IP 地址,使得 Service 可以通过外部 IP 访问。适用于需要大规模外部访问的生产环境。

**ExternalName** ExternalName 服务通过返回一个指定的域名而不是 IP 地址,可以作为内部服务对外部服务的引用。适用于需要访问外部服务但希望通过内部 DNS 管理的场景。

## 什么是 Ingress？Ingress 和 Ingress Controller 是什么关系？

**Ingress** 是一个管理访问集群服务的规则集合,支持通过 HTTP 和 HTTPS 将外部请求路由到集群中的多个服务。Ingress 可以定义负载均衡到不同的 Service、TLS 终止（就是前面还是 HTTPS，后面集群内部使用 HTTP）和基于名称的虚拟主机。例如,可以通过 Ingress 配置 "[https://zhuanlan.zhihu.com/p/715969584/www.mycompany.com/service1](https://zhuanlan.zhihu.com/p/715969584/www.mycompany.com/service1)" 路由到 service1,"[https://zhuanlan.zhihu.com/p/715969584/www.mycompany.com/service2](https://zhuanlan.zhihu.com/p/715969584/www.mycompany.com/service2)" 路由到 service2。

**Ingress Controller** 是一种守护进程,负责实施 Ingress 中定义的规则,处理进入集群的请求。Ingress 仅是规则的声明,而 Ingress Controller 是实施这些规则的实体。常见的 Ingress Controller 包括 Nginx Ingress Controller 和 Traefik。例如,Nginx Ingress Controller 可以根据 Ingress 规则自动配置 Nginx 服务器,实现基于域名的路由。

## PersistentVolume 和 PersistentVolumeClaim 是什么关系？为什么要有这两个？

**PersistentVolume (PV)** 是集群级别的存储资源,可以由管理员预先配置,也可以由存储供应商根据 PVC 的请求动态创建。PV 提供给集群使用的一块存储空间。

**PersistentVolumeClaim (PVC)** 是用户对存储资源的请求,通过 PVC,用户可以请求特定大小和存储特性的 PV。

两者的关系使得存储资源的管理更为动态和灵活,PV 是资源的提供方,而 PVC 是资源的消费方。这种模式解耦了存储的配置与使用,提高了资源的利用率和灵活性。此外,StorageClass 可以定义 PV 的属性模板,让 PVC 动态绑定 PV,进一步简化存储管理。

## PV 和 PVC 的 AccessMode 有哪些取值？分别是什么含义？

**ReadWriteOnce (RWO)**

**PV 只能被单个节点以读写方式挂载。**

适用场景

- 单个 Pod 需要读写访问存储,如单实例数据库。
- 有状态的应用程序,如 GitLab、Jenkins 等,它们通常只需要单个实例来读写数据。

例如：MySQL 或 PostgreSQL 数据库，键值存储,如 Redis 或 Memcached

**ReadOnlyMany (ROX)**

**PV 可以被多个节点同时以只读方式挂载。**

适用场景

- 多个 Pod 需要同时读取相同的数据,如静态网站、共享配置等。
- 分布式应用程序,它们的实例需要共享只读数据。

例如：前端应用程序的静态资源，后端应用程序的配置文件

**ReadWriteMany (RWX)**

**PV 可以被多个节点同时以读写方式挂载。**

适用场景

- 多个 Pod 需要同时读写相同的数据,如多实例数据库、共享文件存储等。
- 分布式应用程序,它们的实例需要共享读写数据。

例如：共享媒体库或用户上传文件，分布式数据处理，使用支持 RWX 的分布式文件系统,如 GlusterFS、Ceph FS 等

**注：以上问题仅针对研发岗，运维岗需要更深入了解**
