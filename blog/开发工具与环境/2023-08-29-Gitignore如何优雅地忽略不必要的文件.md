---
authors: sumingcheng
---
# Gitignore：如何优雅地忽略不必要的文件



 **Link:** [https://zhuanlan.zhihu.com/p/653054188]



**使用 .gitignore 排除不必要的文件**

在使用 Git 进行版本控制时，经常有一些文件或目录我们不希望加入到版本控制中，例如依赖文件、配置文件或是编译生成的文件。`.gitignore` 文件就是用来帮助我们实现这个目的的。

**创建 .gitignore 文件**

在你的 Git 项目根目录下，新建一个 `.gitignore` 文件。

```
# .gitignore 内容示例

# 依赖文件
/node_modules
/.pnp
.pnp.js

# 测试产生的文件夹
/coverage

# 生产构建目录
/build

# 其他常见不需要的文件
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

**.gitignore 过滤规则**

* `#` 开头的行为注释。
* `/` 开头表示目录。
* `*` 用于匹配多个字符。
* `?` 可以匹配任何单个字符。
* `[]` 用于匹配字符集中的任何字符（例如，`[abc]` 将匹配任何 `a`、`b` 或 `c` 字符）。
* 使用 `!` 开头的模式将排除之前定义的模式。

通过上述规则，你可以轻松地定制 `.gitignore`，确保只有需要的文件被加入到 Git 版本控制中。

