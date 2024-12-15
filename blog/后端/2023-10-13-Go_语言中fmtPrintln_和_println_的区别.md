---
slug: go-语言中fmtprintln-和-println-的区别
title: Go 语言中fmtPrintln 和 println 的区别
authors: [sumingcheng]
tags: [backend]
date: 2023-10-13
---

# Go 语言中，fmt.Println 和 println 的区别

**来源**：

- `fmt.Println` 是 Go 语言标准库中 `fmt` 包的一部分。它是一个公共函数，可在任何 Go 程序中使用。
- `println` 是一个内建函数，它不属于任何包，是 Go 语言低级操作的一部分。通常，`println` 主要用于调试目的。

**功能性**：

- `fmt.Println` 提供了丰富的功能。除了打印字符串，它还可以用来打印各种数据类型，并且能够处理格式化的字符串。此外，`fmt.Println` 在打印完字符串后会自动添加一个新行。
- `println` 功能较为基础，它可以打印几乎所有值，但不支持格式化输出。它也会在输出后自动添加新行。

**输出**：

- `fmt.Println` 输出到标准输出（stdout），这意味着你可以很容易地重定向输出到其他位置，例如一个文件。
- `println` 可能输出到标准错误输出（stderr），这取决于具体实现，且它的行为在不同的 Go 版本和平台上可能不同。

**性能**：

- `fmt.Println` 由于进行了更多的内部处理（例如接口转换和格式化），可能比 `println` 慢一些。
- `println` 更快，因为它是一个简单的低级内建函数，没有额外的格式化开销。

**使用场景**：

- `fmt.Println` 是在生产环境中打印信息的推荐方式，因为它的行为明确且一致。
- `println` 主要用于调试阶段，不推荐在生产代码中使用，因为它的实现在不同系统和 Go 的版本中可能会有所不同。
