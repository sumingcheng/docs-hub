---
slug: zsh-中使用-agnoster-主题
title: zsh 中使用 agnoster 主题
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-05-29
---

# zsh 中使用 agnoster 主题



 **Link:** [https://zhuanlan.zhihu.com/p/700301299]

### 确保已安装 Oh My Zsh  

如果你还没有安装 `Oh My Zsh`，可以通过运行以下命令来安装它

```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
### 修改.zshrc配置文件  

打开你的 `~/.zshrc` 文件。你可以使用任何文本编辑器，如 `nano`

```
nano ~/.zshrc
```

找到配置文件中的 `ZSH_THEME` 行。默认情况下，它可能设置为 `ZSH_THEME="robbyrussell"`。

将其更改为 `agnoster`

```
ZSH_THEME="agnoster"
```

保存并关闭文件。如果你使用的是 `nano`，可以按 `Ctrl+O` 保存更改，然后按 `Ctrl+X` 退出。

### 应用更改  

运行以下命令来应用更改，使新主题生效

```
source ~/.zshrc
```

或者，你可以简单地关闭并重新打开你的终端。

### 安装合适的字体  

由于 `agnoster` 主题使用特殊的字体符号来显示 git 状态等信息，你可能需要安装 Powerline 字体或任何兼容的字体

**安装 Powerline 字体**: 可以从 Powerline Fonts 项目中下载并安装。

```
# 克隆
git clone https://github.com/powerline/fonts.git --depth=1
​
# 安装
cd fonts
./install.sh
​
# 清理
cd ..
rm -rf fonts
```

**配置终端使用 Powerline 字体**: 打开你的终端设置（这取决于你使用的终端模拟器），找到字体设置部分，然后选择一个安装的 Powerline 字体，如 `DejaVu Sans Mono for Powerline`。

## 我的配置文件  
```
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="agnoster"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git docker sudo history zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
```