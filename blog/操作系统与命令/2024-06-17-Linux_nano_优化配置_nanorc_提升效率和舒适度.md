---
slug: linux-nano-优化配置-nanorc-提升效率和舒适度
title: Linux nano 优化配置 nanorc 提升效率和舒适度
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-06-17
---

# Linux nano 优化，配置 .nanorc 提升效率和舒适度



 

### 打开或创建.nanorc文件  

打开终端输入

```
nano ~/.nanorc
```
### 编辑.nanorc文件以添加配置  

在 `.nanorc` 文件中，您可以添加一系列的配置命令来优化使用体验

**启用语法高亮**

```
include "/usr/share/nano/*.nanorc"
```

加载系统中所有预定义的语法高亮配置。

**启用自动缩进**

```
set autoindent
```

**显示行号**

```
set linenumbers
```

**常显示光标位置**

```
set constantshow
```

**开启软换行**

```
set softwrap
```

**设置制表符宽度**

```
set tabsize 4
```

这会将制表符宽度设置为4个空格。这个设置在编辑代码时尤其有用，因为它可以确保代码的缩进一致。

**替换制表符为空格**

```
set tabstospaces
```

这个设置会将您按下的制表符自动转换为空格，这是编写某些语言（如Python）代码时推荐的做法。

**禁用备份文件的创建**

```
unset backup
```

默认情况下，`nano` 可能会创建备份文件。使用这个命令可以阻止创建带有 `~` 后缀的备份文件。

**设置鼠标支持**

```
set mouse
```

这使您可以使用鼠标进行选择和滚动操作，尽管这在一些终端环境中可能不完全支持。

**自定义高亮** 您可以为特定的文件类型定义自定义的语法高亮规则。

例如，为 Python 文件添加高亮规则

```
syntax "python" "\.py$"
color brightyellow "(if|else|for|break|continue|return|in|not|is)"
color brightblue "(def|class|from|import|as)"
color green "#.*"
```

这将设置关键字、函数名和注释的颜色。

### 保存并关闭.nanorc文件  

完成编辑后，按 `Ctrl+O` 来保存文件。

按 `Enter` 确认文件名。

按 `Ctrl+X` 退出 `nano`。