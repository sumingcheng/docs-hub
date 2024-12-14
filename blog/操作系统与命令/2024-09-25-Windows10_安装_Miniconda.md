---
authors: sumingcheng
---
# Windows10 安装 Miniconda



 **Link:** [https://zhuanlan.zhihu.com/p/722046847]

## 下载 miniconda  
[Installing Miniconda](https://docs.anaconda.com/miniconda/miniconda-install/)## 添加环境变量  

**手动添加 Miniconda 到 `PATH`**

**1. 打开环境变量设置**

按下 `Win + X`，选择“**系统**”，然后点击“**高级系统设置**”。

或者通过“控制面板” > “系统和安全” > “系统” > “高级系统设置”进入。

**2. 编辑环境变量**

点击“**环境变量**”按钮。

在“**用户变量**”或“**系统变量**”中，找到并选中 `Path`，然后点击“**编辑**”。

**3. 添加 Miniconda 路径**

点击“**新建**”，添加以下路径（根据您的实际安装路径）：

`C:\Users\<username>\Miniconda3`

`C:\Users\<username>\Miniconda3\Scripts`

`C:\Users\<username>\Miniconda3\Library\bin`

**注意**：请将 `<username>` 替换为您的实际用户名。

**4. 保存更改**

* 点击“**确定**”保存环境变量设置。
* 关闭所有对话框。

**5. 重启 PowerShell**

* 关闭并重新打开 PowerShell，以使环境变量更改生效。

## 验证  
```
conda --version
```
