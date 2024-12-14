---
slug: ubuntu-安装-zsh-配置-oh-my-zsh-主题和插件
title: Ubuntu 安装 Zsh 配置 Oh My Zsh 主题和插件
authors: [sumingcheng]
tags: [os-and-commands]
date: 2024-04-13
---

# Ubuntu 安装 Zsh 配置 Oh My Zsh 主题和插件



 **Link:** [https://zhuanlan.zhihu.com/p/689954464]

### 安装 Zsh  

打开你的 Ubuntu 终端

更新你的包列表

```
sudo apt update
```

安装 Zsh

```
sudo apt install zsh
```

安装完成后，你可以通过运行

```
zsh
```

来切换到 Zsh shell，或者你可以将其设置为默认的 shell

```
chsh -s $(which zsh)
```

这将改变默认的 shell。注销并重新登录或者关闭并重新打开 Ubuntu 终端，以使这个更改生效。

### 安装 Oh My Zsh  

Oh My Zsh 是一个流行的开源框架，用于管理你的 Zsh 配置。它提供了很多有用的功能，如主题支持、插件和别名等。

通过运行以下命令安装 Oh My Zsh

```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

这个脚本会自动安装 Oh My Zsh 并将其设置为默认的 shell。

安装完成后，你可以打开 `~/.zshrc` 文件来配置 Oh My Zsh 的主题和插件

```
nano ~/.zshrc
```

在这个配置文件中，你可以修改 `ZSH_THEME` 变量来更改主题，或者在 `plugins=(git)` 那一行添加或删除插件。

### 配置 Oh My Zsh 主题和插件  

你可以选择一个你喜欢的主题，将其名称赋值给 `ZSH_THEME` 变量。例如，如果你想要使用 `agnoster` 主题，修改这一行

```
ZSH_THEME="agnoster"
```

Oh My Zsh 提供了大量插件，可以增强你的 shell 体验。你可以通过修改 `~/.zshrc` 文件中的 `plugins` 数组来启用这些插件。例如，要启用 `git`、`z` 和 `autojump` 插件，修改这一行

```
plugins=(git z autojump)
```

安装完成后，你可以通过关闭并重新打开终端或运行 `source ~/.zshrc` 来应用更改。