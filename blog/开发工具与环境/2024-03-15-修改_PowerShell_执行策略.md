---
slug: 修改-powershell-执行策略
title: 修改 PowerShell 执行策略
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-03-15
---

# 修改 PowerShell 执行策略



 **Link:** [https://zhuanlan.zhihu.com/p/687163626]



PowerShell 的执行策略帮助保护您的计算机不被恶意脚本执行，但同时它也可能阻止了一些合法脚本的执行。为了解决这个问题，您需要更改 PowerShell 的执行策略。

## 执行命令  

1. 打开 PowerShell 作为管理员（搜索 PowerShell，右键点击，选择“以管理员身份运行”）。
2. 执行上述任一 `Set-ExecutionPolicy` 命令。
3. 如果系统提示确认，输入 `Y` 并按回车键以确认更改。

## 临时更改执行策略  

如果您只是想临时更改执行策略以激活虚拟环境，可以使用以下命令

```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
## 永久更改执行策略  

如果您想永久更改执行策略，可以使用以下命令

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```