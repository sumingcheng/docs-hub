---
slug: go-println-和-fmtprintln-对比
title: Go println 和 fmtPrintln 对比
authors: [sumingcheng]
tags: [backend]
date: 2024-04-25
---

# Go println() 和 fmt.Println() 对比



 **Link:** [https://zhuanlan.zhihu.com/p/694513628]



| 特性 | println() | fmt.Println() |
| --- | --- | --- |
| 来源 | Go 语言的内建函数，无需导入 | 需要导入 fmt 包 |
| 用途 | 主要用于开发阶段的快速调试 | 适用于生产环境，支持复杂的输出需求 |
| 格式化能力 | 无法自定义输出格式 | 支持广泛的格式化选项，如数字格式、宽度、精度等 |
| 输出控制 | 自动在输出元素之间添加空格，结尾自动换行 | 自动在输出元素之间添加空格，结尾自动换行，格式化更灵活 |
| 性能 | 通常较快但差异通常不显著 | 性能优秀，适用于高频输出场景 |
| 依赖性 | 不依赖任何外部包，始终可用 | 依赖于 fmt 包，需要导入使用 |
| 输出示例 | println("Hello", "world") 输出：Hello world | fmt.Println("Hello", "world") 输出：Hello world |
| 适用场景 | 简单脚本、学习阶段、快速调试 | 生产代码、需要格式化输出的场景、日志记录等 |
| 控制台交互 | 较为简单，无法处理复杂的用户输出交互 | 可以与 fmt.Scanln() 等输入函数配合使用，适合复杂的控制台交互 |
| 推荐使用 | 开发早期、调试、教学示例 | 生产环境、需要格式化或多样化输出的应用 |

### 格式化输出  
### print  
```
func main() {
    name := "Alice"
    age := 30
    println("Name:", name, "Age:", age)
}

```
### Println  
```
func main() {
    name := "Alice"
    age := 30
    fmt.Printf("Name: %s, Age: %d\n", name, age)
}

```
### 使用切片和复杂数据结构  
```
package main

import "fmt"

func main() {
	numbers := []int{1, 2, 3}
	// 快速检查切片的地址或确认切片非空。
	println("Numbers:", numbers) // Numbers: [3/3]0xc000010108
	// 能够直接输出切片内容及其结构，适合在处理数据和调试复杂结构时使用。
	fmt.Println("Numbers:", numbers) // Numbers: [1 2 3]
}

```