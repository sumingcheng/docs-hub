---
slug: python-没-requirementstxt-如何安装包
title: Python 没 requirementstxt 如何安装包
authors: [sumingcheng]
tags: [backend]
date: 2024-03-16
---

# Python 没 requirements.txt 如何安装包



 

### 先安装 pipreqs 生成项目需要的 requirements.txt 文件  
```
pip install pipreqs 
```
### 生成文件  
```
 pipreqs .
```
### 安装  
```
pip install -r requirements.txt
```

注意这里，如果已经存在了 requirements.txt 你想覆盖的话直接 -f

```
pipreqs . --force
```