---
slug: linux-全方面配置-bash-提升体验
title: Linux 全方面配置 Bash 提升体验
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-10-09
---

# Linux 全方面配置 Bash 提升体验

## 配置 Bash 提示符（PS1）

编辑你的 `.bashrc` 文件来自定义命令行提示符，添加颜色和信息使其更有用

```
nano ~/.bashrc
```

在 Bash 中，`PS1` 是环境变量之一，用来定义主命令提示符，即你在命令行界面看到的每条命令前的文本。`PS1` 可以定制化显示用户的名字、当前工作目录、主机名等信息，还可以添加颜色，使得命令行界面更加直观和易用。

### PS1 变量的组成

`PS1` 的设置可以包括纯文本和一些特殊的转义字符，这些转义字符用于插入动态信息，如下所示：

- `\u`：显示当前用户的用户名。
- `\h`：显示机器的主机名，但不包括域名。
- `\w`：显示当前工作目录的完整路径。
- `\W`：只显示当前工作目录的基础名称。
- `\d`：显示日期。
- `\t`：显示当前时间（24 小时格式）。
- `\n`：新行。
- `\e`：转义字符（用于添加颜色或其他控制代码）。

### 颜色代码

在 `PS1` 中添加颜色，通常使用 ANSI 转义序列来定义。

- `\[\033[01;32m\]`：绿色
- `\[\033[01;34m\]`：蓝色
- `\[\033[00m\]`：重置颜色（结束颜色代码）

## 安装和配置 bash-completion

安装 bash-completion 增强命令补全

```
sudo apt-get install bash-completion
```

确保 `.bashrc` 或 `.bash_profile` 包含以下行以启用它

```
if [ -f /etc/bash_completion ] && ! shopt -oq posix; then
    . /etc/bash_completion
fi
```

## 别名和函数

在 `.bashrc` 中定义常用命令的别名和函数，这些简短的别名可以提高日常工作的效率。

```
alias ll='ls -lah'
alias gs='git status'
alias df='df -h'
```

## 安装 Bash 框架

安装像 Bash-it 或 Oh My Bash 这样的框架，通常你只需要选择并安装其中一个。这是因为这两个框架的功能相似。

**[https://github.com/Bash-it/bash-it](https://github.com/Bash-it/bash-it)**

```
git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it
~/.bash_it/install.sh
```

**[https://github.com/ohmybash/oh-my-bash](https://github.com/ohmybash/oh-my-bash) 推荐**

注意， Oh My Bash 所要求的最低版本（Bash 3.2）

```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"
```

这些框架提供了丰富的主题、插件和工具，让你的 Bash 更加强大和易用。

### 查看支持主题

```
ls ~/.oh-my-bash/themes/
```

找到你喜欢主题后，修改`~/.bashrc`，找到`OSH_THEME="agnoster"`我设置主题为`agnoster`。

## 命令历史配置

配置 Bash 历史记录，增加存储的命令数量并忽略重复项，忽略重复项这个一定要配置，总有`ll`狂魔。

```
echo 'HISTSIZE=5000' >> ~/.bashrc
echo 'HISTFILESIZE=10000' >> ~/.bashrc
echo 'HISTCONTROL=ignoreboth:erasedups' >> ~/.bashrc
```

## 安全性增强

对敏感操作进行别名设置以增加安全性警告

```
alias rm='rm -i'
```

## 重新加载配置

保存所有更改后，运行以下命令来重新加载 `.bashrc` 配置

```
source ~/.bashrc
```
