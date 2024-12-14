---
slug: java-受检checked异常和非受检unchecked异常
title: Java 受检Checked异常和非受检Unchecked异常
authors: [sumingcheng]
tags: [backend]
date: 2023-10-13
---

# Java 受检（Checked）异常和非受检（Unchecked）异常



 



**受检异常（Checked Exceptions）**：

* 受检异常是那些在编译期间Java编译器要求必须处理（要么用try-catch捕获，要么在方法签名中用throws子句声明）的异常。
* 它们继承自`java.lang.Exception`类，但不包括`java.lang.RuntimeException`类的子类。
* 受检异常通常是由外部错误条件引起的，这些条件在程序运行时可能经常发生，程序员预见到这些异常情况并且被期望在编译阶段就处理它们。例如，试图根据指定的文件路径打开一个文件时可能会抛出`FileNotFoundException`，或者由于网络问题导致的`IOException`。

**非受检异常（Unchecked Exceptions）**：

* 非受检异常是编译器不要求强制处理的异常。它们要么是由编程错误引起的（如访问null对象的成员、数组越界），要么是程序应该在运行时处理的异常。
* 非受检异常包括`java.lang.RuntimeException`的所有子类和`java.lang.Error`的所有子类。`RuntimeException`是那些可能在Java虚拟机正常操作期间抛出的异常的超类。
* 常见的`RuntimeException`包括`NullPointerException`（当应用试图在需要对象的地方使用null时，抛出此异常）、`IndexOutOfBoundsException`（指示某排序索引（如数组、字符串或向量）越界时抛出）等。
* `Error`是指那些通常不被应用程序捕获的严重问题，例如`OutOfMemoryError`、`StackOverflowError`等。

### 如何判断异常类型  

* 如果异常是 **java.lang.RuntimeException** 的子类，或者是 **java.lang.Error**，那它就是一个非受检异常。
* 如果异常是 **java.lang.Exception** 的子类，但不是 **java.lang.RuntimeException** 的子类，那它就是一个受检异常