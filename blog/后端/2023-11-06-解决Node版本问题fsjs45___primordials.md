---
slug: 解决node版本问题fsjs45---primordials
title: 解决Node版本问题fsjs45   primordials
authors: [sumingcheng]
tags: [backend]
date: 2023-11-06
---

# 解决Node版本问题：fs.js:45 } = primordials;



 **Link:** [https://zhuanlan.zhihu.com/p/665244842]



这个错误通常是因为使用了不兼容的 Node.js 和 Gulp 版本，尤其是在 Node.js 版本高于 12 时使用 Gulp 3 时出现。要解决这个问题，可以尝试以下两种方法：

**降级 Node.js**

* 检查你的 Node.js 版本，如果超过了 12，并且你在使用 Gulp 3，你需要降级到 Node.js 版本 12。

**使用 npm-shrinkwrap.json**

* 删除 `node_modules` 文件夹。
* 在你的 `package.json` 文件所在目录创建一个名为 `npm-shrinkwrap.json` 的新文件。
* 在 npm-shrinkwrap.json  
   文件中添加以下内容：

```
{
  "dependencies": {
    "graceful-fs": {
      "version": "4.2.2"
    }
  }
} 
```

* 运行 `npm install` 更新你的依赖。
* 最后，运行 `gulp` 启动项目。