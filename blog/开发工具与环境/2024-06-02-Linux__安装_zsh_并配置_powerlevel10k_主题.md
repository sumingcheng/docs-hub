---
slug: linux--安装-zsh-并配置-powerlevel10k-主题
title: Linux  安装 zsh 并配置 powerlevel10k 主题
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-06-02
---

# Linux 安装 zsh 并配置 powerlevel10k 主题

## 安装 Zsh

`powerlevel10k` 是一个 Zsh 主题，因此首先需要确保你的系统上安装了 Zsh。

```
sudo apt update
sudo apt install zsh
```

### 设置 Zsh 为默认 Shell

安装完 Zsh 后，你可以通过以下命令将其设置为默认 Shell：

```
chsh -s $(which zsh)
```

重启计算机后，Zsh 将成为你的默认 Shell。

### 安装 Oh My Zsh

`Oh My Zsh` 是一个管理 Zsh 配置的框架，`powerlevel10k` 依赖此框架运行。

```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 安装 powerlevel10k

现在你可以安装 `powerlevel10k` 主题了：

```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

### 配置.zshrc 使用 powerlevel10k

编辑你的 `~/.zshrc` 文件，将 `ZSH_THEME` 设置为 `powerlevel10k/powerlevel10k`：

```
sed -i 's/ZSH_THEME=".*"/ZSH_THEME="powerlevel10k\/powerlevel10k"/' ~/.zshrc
```

### 配置终端字体

`powerlevel10k` 推荐使用 `Nerd Fonts` 字体以支持图标和特殊字符。你可以从 Nerd Fonts 下载并安装字体。

```
# 创建一个字体目录
mkdir -p ~/.local/share/fonts
​
# 进入该目录
cd ~/.local/share/fonts
​
# 下载 Nerd Fonts 版本的 Fira Code 字体
curl -fLo "Fira Code Regular Nerd Font Complete.otf" \
    https://github.com/ryanoasis/nerd-fonts/releases/download/v3.2.1/FiraCode.zip

# 如果是 zip 文件，需要解压
unzip FiraCode.zip -d FiraCode
​
# 刷新字体缓存
fc-cache -fv
```

### 重新加载和配置 powerlevel10k

重启你的终端或者重新加载配置文件：

```
source ~/.zshrc
```

之后，`powerlevel10k` 配置向导会自动启动。按照向导的步骤进行选择，以根据你的喜好和需求定制外观。

## 想重新配置主题

```
p10k configure
```
