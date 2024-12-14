---
authors: sumingcheng
---
# GitHub Actions 的工作流文件的主要模块



 **Link:** [https://zhuanlan.zhihu.com/p/653145759]



**名称 (name)**: 描述工作流程的名称，这在 GitHub 的操作 UI 中是可见的。

```
name: My CI/CD Workflow
```

**触发器 (on)**: 定义什么时候运行工作流程。它可以是 GitHub 事件（如 `push`、`pull_request`）或者定时任务。

```
 on: [push]
```

或者更复杂的触发器：

```
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

**工作 (jobs)**: 工作是一组要在同一个运行环境中执行的步骤。你可以定义多个工作，它们可以并行执行或按照特定的依赖顺序执行。

```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      ...
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      ...
```

**步骤 (steps)**: 步骤是在工作中执行的单个任务。每个步骤可以是执行命令、运行脚本或使用 GitHub Actions 市场上的现有操作。

```
 steps:
  - name: Check out code
    uses: actions/checkout@v2
  - name: Run tests
    run: npm test
```

**环境变量和路径 (env 和 with)**: 为步骤或整个工作设置环境变量或输入参数。

```
env:
  NODE_ENV: production
steps:
  - name: Use Node.js
    uses: actions/setup-node@v2
    with:
      node-version: '14'
```

**策略 (strategy)**: 定义工作的策略，例如矩阵构建，它可以同时测试多个版本或配置。

```
 strategy:
  matrix:
    node-version: [12.x, 14.x, 16.x]
```
