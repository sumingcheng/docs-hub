---
slug: ubuntu-安装-nvm
title: Ubuntu 安装 nvm
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-04-12
---

# Ubuntu 安装 nvm

### curl

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### wget

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

安装脚本会将 `nvm` 安装到你的家目录下，并尝试更新你的 shell 配置文件（如 `.bash_profile`、`.zshrc`、`.profile` 或 `.bashrc`），以便每次打开新的终端时自动加载 `nvm`。

为了开始使用 `nvm`，你可能需要关闭并重新打开你的终端，或者手动执行下面的命令来载入 `nvm`

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

验证 `nvm` 是否已成功安装，运行

```
nvm --version
```

### 使用 nvm 安装 Node.js

要安装最新版本的 Node.js，运行

```
nvm install node
```

要安装长期支持（LTS）版本的 Node.js，运行

```
nvm install --lts
```

要安装特定版本的 Node.js，你可以指定版本号，例如

```
nvm install 14.17.0
```

安装后，你可以使用以下命令来切换到已安装的任何版本

```
nvm use 14.17.0
```

要查看当前使用的 Node.js 版本，运行

```
node -v
```

要列出所有已安装的 Node.js 版本，运行

```
nvm ls
```

使用 `nvm`，你可以轻松管理多个 Node.js 版本，并根据需要为不同的项目使用不同的版本。
