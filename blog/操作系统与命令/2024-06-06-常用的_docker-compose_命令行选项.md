---
slug: 常用的-docker-compose-命令行选项
title: 常用的 docker-compose 命令行选项
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-06-06
---

# 常用的 docker-compose 命令行选项

## 常用的 docker-compose 命仅行选项

**-p | --project-name** 用于指定项目名称。默认情况下，`docker-compose` 使用当前目录名作为项目名称。使用此选项可以自定义项目名称，这在同一台机器上运行多个配置实例时非常有用。

**-d | --detach** 与 `up` 命令结合使用，使服务在后台运行。这样，`docker-compose` 命令执行后会立即返回控制台，而不占用命令行。

```
docker-compose up -d
```

**--no-deps** 启动服务时不启动其依赖的服务。当只需重启单个服务而不影响其他依赖服务时使用。

**--build**

1. **构建或重新构建镜像**：根据 `docker-compose.yml` 文件中定义的 `build` 上下文和配置自动构建或更新服务所需的镜像。
2. **停止并移除当前运行的容器**：如果这些服务的容器已经在运行，且相关镜像有更新，Docker Compose 会停止并移除这些容器。
3. **启动新容器**：使用新构建的镜像启动新的容器实例，确保服务运行的是最新的代码和依赖版本。

```
docker-compose up --build
```

**--no-build** 启动服务时跳过构建步骤，直接使用现有镜像。

**--no-color** 禁用彩色输出，适用于输出日志时避免颜色代码造成的阅读困难。

**--verbose** 输出更多的调试信息，包括与 Docker 引擎的通信。

**--no-ansi** 禁止输出 ANSI 控制字符，适用于需要清晰日志输出的场景。

**-t | --timeout** 设置命令超时时间（单位为秒）。这对于控制容器停止等操作的响应时间非常有用。

**-v | --version** 显示 `docker-compose` 的版本。

**--scale** 动态调整服务的副本数量。

```
docker-compose up --scale web=3
```

## 进阶和特定用途的 docker-compose 命令行选项

**--env-file** 指定一个环境变量文件。这允许从外部文件加载环境变量，而不是在 `docker-compose.yml` 文件中硬编码。

```
docker-compose --env-file .env.production up
```

**--log-level** 设置日志级别（DEBUG, INFO, WARNING, ERROR, CRITICAL），以控制输出的详细程度。

**--profile** 指定包含在启动时的配置文件。这可以用于根据不同的环境或条件启动不同的服务集合。

**--remove-orphans** 在执行 `up` 或 `down` 命令时移除不再定义在配置文件中的孤立容器。

**--force-recreate** 即使配置未更改，也强制重新创建容器。这在更新环境或修复问题时非常有用。

**--always-recreate-deps** 当服务被重新创建时，强制重新创建其所有依赖的服务。

**--abort-on-container-exit** 当任何容器退出时，停止所有容器。这在自动化测试环境中尤为重要，确保如果一个组件失败，整个环境都将停止。

**--exit-code-from** 使用 `up` 命令时，设置从特定服务获取退出代码。这对 CI/CD 管道中的错误处理非常有用。

**--follow** 跟随日志输出，通常与 `logs` 命令结合使用，用于实时监控日志。
