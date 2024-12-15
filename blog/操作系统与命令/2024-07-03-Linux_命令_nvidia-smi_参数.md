---
slug: linux-命令-nvidia-smi-参数
title: Linux 命令 nvidia-smi 参数
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-07-03
---

# Linux 命令 nvidia-smi 参数

## 命令 nvidia-smi 输出的信息

![06e4d05b11403eb3a9f8943902ac0e8f](../image/06e4d05b11403eb3a9f8943902ac0e8f.jpg)### 表格标题和版本信息

**NVIDIA-SMI**：显示 `nvidia-smi` 工具的版本号

**Driver Version**：当前安装的 NVIDIA 驱动版本

**CUDA Version**：系统支持的 CUDA 版本，这对开发者来说很重要，因为它决定了可以使用的 CUDA 工具和功能

### GPU 列表

**对于每块 GPU，表格都会显示以下信息，从左到右介绍**

**GPU**：GPU 的编号，从 0 开始

**Name**：GPU 的型号，例如“NVIDIA GeForce RTX 3090”

**Persistence-M**：持久性模式的开关状态，通常在服务器和需长时间运行的环境中启用

**Bus-Id**：GPU 在系统中的 PCI 总线 ID

**Disp.A**：显示活动状态，显示是否有显示器连接到这块 GPU

**Volatile Uncorr. ECC**：显示是否启用了易失性未校正的错误校正码（ECC），通常用于计算密集型任务的可靠性

### 性能指标

**Fan**：风扇速度的百分比

**Temp**：GPU 的当前温度

**Perf**：性能状态，从 P0（最高性能）到 P12（最低性能）

**Pwr/Cap：**当前功率使用量和功率上限

**Memory-Usage**：GPU 内存的使用情况，显示已使用和总计的内存（例如，“2MiB / 24576MiB”）

**GPU-Util**：GPU 利用率的百分比，显示 GPU 被使用的程度

**Compute M.**：计算模式，通常是“Default”或“Exclusive”，影响 GPU 的访问控制

**MIG M.**：如果启用了多实例 GPU（MIG），这里会显示状态

### 进程信息

**这部分列出了当前在 GPU 上运行的所有进程**

**PID**：进程 ID

**Type**：进程类型，通常是 C（计算）或 G（图形）

**Process name**：进程名称

**GPU Memory Usage**：该进程使用的 GPU 内存量
