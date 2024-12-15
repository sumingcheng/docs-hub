---
slug: git-语义化提交semantic-commits
title: Git 语义化提交Semantic Commits
authors: [sumingcheng]
tags: [dev-tools]
date: 2023-07-26
---

# Git 语义化提交（Semantic Commits）

| 类型     | 描述                                                                                           |
| -------- | ---------------------------------------------------------------------------------------------- |
| feat     | 新增了一个新的功能                                                                             |
| fix      | 修复了一个 bug                                                                                 |
| docs     | 对文档进行了修改或更新                                                                         |
| style    | 对代码的格式进行了修改（比如删除空格、格式化、缺少分号等等）。注意，这并不影响代码的逻辑或功能 |
| refactor | 对代码进行了重构（即既不是新增功能，也不是修复 bug 的代码变动）                                |
| test     | 新增或修改了测试                                                                               |
| chore    | 对构建过程或辅助工具进行了修改                                                                 |
| perf     | 提高了性能                                                                                     |
| build    | 影响了构建系统或外部依赖关系的更改                                                             |
| ci       | 对 CI 配置文件和脚本进行了修改                                                                 |
| revert   | 撤销了之前的 commit                                                                            |

这种风格的提交信息通常遵循这样的格式：`<type>(<scope>): <subject>`，其中：

- `<type>`：提交的类型，如上表所述。
- `<scope>`：影响的范围，即这次提交影响了哪些部分。这是可选的，取决于项目。
- `<subject>`：提交的简短描述。

**Git 提交信息的示例**

新增功能

```
feat(user): add password reset functionality
```

修复 bug

```
fix(login): correct error handling on invalid input
```

更新文档

```
docs(readme): update installation instructions
```

修改代码格式

```
style(app): apply prettier for code formatting
```

重构

```
refactor(database): simplify query builder logic
```

修改系统构建

```
build(docker): update Dockerfile to use alpine base image
```

提高性能

```
perf(server): reduce memory usage in data processing
```
