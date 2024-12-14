---
slug: packagejson-文件配置详解
title: packagejson 文件配置详解
authors: [sumingcheng]
tags: [frontend]
date: 2023-09-02
---

# package.json 文件配置详解



 **Link:** [https://zhuanlan.zhihu.com/p/653861097]



`yarn` 在 `yarn init` 的时候 生成的 `package.json` 文件用来配置项目的信息、名称、版本号、描述信息等，还可以定义项目所需要的各种依赖包。

创建 `package.json` 文件

## 核心字段  

`name` 和 `version` 是 `package.json` 中最重要的两个必需字段，如果没有它们那么包将无法被安装，**两者一起用来创建一个唯一的id。**

### name  

包的名字，在 URL 中作为命令行参数，作为 `node_modules` 里的目录名使用。由小写字母组成，尽量简洁。

### version  

包的当前版本号。

### author  

作者信息。

### description  

是一个字符串，可以帮助我们了解软件包的用途，也可以在包管理中搜索包时使用它。

### keywords  

是一个字符串数组，在包管理器中搜索包时起作用。

### license  

许可证，以方便用户知道他们是在什么授权下使用此包，以及此包还有哪些附加限制。

### main  

项目的入口文件，默认为 `index.js`。

### scripts  

定义自动化开发相关任务的好方法，比如使用一些简单的构建过程或开发工具。**可以通过 `yarn run <script>` 命令来执行。**

### dependencies  

包的开发版和发布版都需要的依赖。

### devDependencies  

只在包开发期间需要，但是生产环境不会被安装的包。

### config  

配置你的脚本的选项或参数。

### homepage  

包的项目主页或者文档首页。

`bugs`问题反馈系统的 `URL`，或者是 `email` 地址之类的链接，用户通过该途径向你反馈问题。

### repository  

代码托管的位置。

### contributors  

贡献者信息，可以是多个人。

### files  

项目包含的文件，可以是单独的文件、整个文件夹，或者通配符匹配到的文件。

### directories  

当我们的包安装时，可以指定确切的位置来放二进制文件、man pages、文档、例子等。