---
slug: padstart-和-padend
title: padStart 和 padEnd
authors: [sumingcheng]
tags: [frontend]
date: 2023-09-12
---

# padStart 和 padEnd

`padStart` 和 `padEnd` 是 ES8 (ES2017) 中引入的两个字符串原型方法。它们用于在字符串的开头或结尾填充指定的字符，直到字符串达到给定的长度。这两个方法常用于格式化输出。

`padStart` 和 `padEnd` 是 ES8 (ES2017) 中引入的两个字符串原型方法。它们用于在字符串的开头或结尾填充指定的字符，直到字符串达到给定的长度。这两个方法常用于格式化输出。

### 1.padStart(targetLength [, padString])

这个方法会在当前字符串的开头填充字符，直到字符串达到 `targetLength` 的长度。如果填充的字符串 `padString` 没有指定，那么默认使用空格进行填充。

### 示例：

```
'5'.padStart(2, '0');       // '05'
'123'.padStart(5, '0');    // '00123'
'abc'.padStart(6, '01');   // '01abc'
'abcdef'.padStart(4, '0'); // 'abcdef', 因为原字符串已经超过或等于目标长度，所以返回原字符串

```

### 2.padEnd(targetLength [, padString])

这个方法会在当前字符串的结尾填充字符，直到字符串达到 `targetLength` 的长度。如果填充的字符串 `padString` 没有指定，那么默认使用空格进行填充。

### 示例：

```
'5'.padEnd(2, '0');       // '50'
'123'.padEnd(5, '0');    // '12300'
'abc'.padEnd(6, '01');   // 'abc010'
'abcdef'.padEnd(4, '0'); // 'abcdef', 因为原字符串已经超过或等于目标长度，所以返回原字符串

```

这两个方法在处理数字、日期等格式时非常有用，它们可以确保输出的字符串具有统一的长度和格式。
