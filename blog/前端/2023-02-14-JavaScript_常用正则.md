---
slug: javascript-常用正则
title: JavaScript 常用正则
authors: [sumingcheng]
tags: [frontend]
date: 2023-02-14
---

# JavaScript 常用正则

## 匹配手机号

```
^1[345678]\d{9}$
```

## 匹配 QQ 号

```
^[1-9][0-9]{4,9}$
```

## 匹配 16 进制

```
#?([0-9a-zA-Z]{6}|[0-9a-zA-Z]{3})
```

## 匹配邮箱

```
^([0-9a-zA-Z_\.\-]+)@([0-9a-zA-Z_\.\-]+)\.([A-Za-z]{2,6})$
```

## 匹配 URL

```
^((https?|ftp|file):\/\/)?([\da-z\.\-]+)\.([a-z\.]{2,6})([\/w\.\-]*)*\/?$
```

## 匹配 HTML

```
^<([a-z]+)([^>]+)*(?:>(.*)<\/\1>|\s+\/>)$
```

## 匹配 IP

```
 ^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$
```

## 匹配日期

```
^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$
```

## 车牌

```
/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
```

## 身份证

```
^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$
```
