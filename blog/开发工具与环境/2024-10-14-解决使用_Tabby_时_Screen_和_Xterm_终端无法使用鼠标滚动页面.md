---
slug: 解决使用-tabby-时-screen-和-xterm-终端无法使用鼠标滚动页面
title: 解决使用 Tabby 时 Screen 和 Xterm 终端无法使用鼠标滚动页面
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-10-14
---

# 解决使用 Tabby 时 Screen 和 Xterm 终端无法使用鼠标滚动页面

## 起因

使用 `screen` 和基于 `xterm` 的终端时，滚动鼠标会出现下面这些字符

```
^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[A^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B^[[B
```

## 解决方案

对 `screen` 的配置进行修改，具体方法是在用户的 `.screenrc` 文件中添加一行配置

```
echo "termcapinfo xterm* ti@:te@" > ~/.screenrc
```

"termcapinfo xterm\* ti@:te@" 是针对所有以 `xterm` 开头的终端类型进行配置。其中，`ti@` 和 `te@` 分别禁用了终端的初始化和退出模式。这些模式通常在进入和退出全屏应用时调用，禁用它们可以防止 `screen` 改变终端的显示状态，这是导致显示错误的常见原因。
