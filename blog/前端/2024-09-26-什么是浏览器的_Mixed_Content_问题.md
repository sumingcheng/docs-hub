---
slug: 什么是浏览器的-mixed-content-问题
title: 什么是浏览器的 Mixed Content 问题
authors: [sumingcheng]
tags: [frontend]
date: 2024-09-26
---

# 什么是浏览器的 Mixed Content 问题？

**Mixed Content**（混合内容）是指在浏览器中访问一个使用 **HTTPS**（超文本传输安全协议）加载的网页时，该网页包含了一些通过 **HTTP**（不安全的超文本传输协议）加载的资源。浏览器会将这种情况视为安全风险，因为 HTTP 的资源是不加密的，可能被第三方截获或篡改，从而破坏整个页面的安全性。

## 为什么 Mixed Content 是问题？

HTTPS 提供了三大关键安全属性

**加密** 防止数据在传输过程中被第三方监听。

**数据完整性** 防止数据在传输过程中被篡改。

**身份验证** 确保与服务器通信的客户端是合法的。

如果在 HTTPS 页面中加载 HTTP 资源

HTTP 资源的数据是未加密的，可能被中间人攻击（如篡改 JavaScript 脚本、图片、CSS）。

**这使得原本安全的页面不再完全可信，破坏了 HTTPS 的初衷!。**

## Mixed Content 的分类

根据加载的 HTTP 资源类型，Mixed Content 被分为两类

## Passive Mixed Content（被动混合内容）

这类资源不会直接与页面的其他内容互动。

例如 图片、视频、音频、样式文件（CSS）。

浏览器可能会允许被动混合内容的加载，但会在地址栏或开发者工具中显示警告。

## Active Mixed Content（主动混合内容）

这类资源会与页面的其他部分互动，直接影响页面的安全性。

例如 JavaScript 脚本、内联框架（iframe）、AJAX 请求等。

由于这些资源可能会被劫持和篡改，浏览器会**直接阻止**主动混合内容的加载。

## 浏览器如何处理 Mixed Content？

不同浏览器的处理方式可能略有不同，但大多数现代浏览器（如 Chrome、Firefox、Edge 等）都会采取以下措施

### 被动混合内容

浏览器会允许加载这些资源，但会显示安全警告，提示用户当前页面加载了不安全的内容。

### 主动混合内容

浏览器会完全阻止加载这些资源，防止不安全的内容影响页面的安全性。

通常会在控制台（Console）中看到错误信息，并且不会加载这些不安全的资源。

## Mixed Content 的解决方法

要解决 **Mixed Content** 问题，你需要确保页面上所有资源都通过 **HTTPS** 加载。以下是几种常见的解决方法

### 确保所有资源使用 HTTPS

将页面中所有引用的外部资源（如图片、脚本、样式表、**iframe** 等）都更改为 HTTPS。

如果资源服务器不支持 HTTPS，考虑将资源托管在支持 HTTPS 的服务器上，或联系资源提供方升级其服务。

### 相对协议使用

你可以使用相对协议来加载资源（即 `//` 开头的 URL），例如

```
<script src="//example.com/script.js"></script>
```

这种方式会自动使用当前页面的协议来加载资源。如果当前页面是 HTTPS，资源也将通过 HTTPS 加载。

### 将不支持 HTTPS 的资源代理到 HTTPS

如果外部资源不支持 HTTPS，可以考虑将请求代理到你的服务器，通过你的服务器以 HTTPS 加载该资源。

### 检测和修复

使用浏览器的开发者工具（F12 -> Console 或 Network 标签页）查看哪些资源导致了 Mixed Content 问题。

修复后重新加载页面，确认问题是否解决。

## 具体的案例分析

假设你有一个通过 HTTPS 加载的网页，但是其中的图片和 JavaScript 资源是通过 HTTP 加载的。可能出现以下情况

**图片资源**（被动混合内容）

```
<img src="http://example.com/image.jpg">
```

浏览器可能会允许图片加载，但会显示安全警告。

**JavaScript 资源**（主动混合内容）

```
<script src="http://example.com/script.js"></script>
```

浏览器会阻止 JavaScript 文件加载，并在控制台显示错误信息，因为 JavaScript 可能会影响页面的安全性。

### 浏览器显示的错误提示

### Chrome

```
Mixed Content: The page at 'https://example.com' was loaded over HTTPS, but requested an insecure resource 'http://example.com/resource.js'. This request has been blocked; the content must be served over HTTPS.
```

### Firefox

```
Blocked loading mixed active content "http://example.com/resource.js"
Loading mixed (insecure) display content "http://example.com/image.jpg" on a secure page
```
