# github 使用个人访问令牌（PAT）克隆项目



 **Link:** [https://zhuanlan.zhihu.com/p/703920227]

## 生成 PAT  

登录 GitHub。

在右上角点击你的头像，然后选择“Settings（设置）”。

在侧边栏中选择“Developer settings（开发者设置）”。

选择“Personal access tokens（个人访问令牌）”，然后点击“Generate new token（生成新令牌）”。

设置令牌的权限，并生成。

## 克隆项目  

替换为仓库的 URL

```
git clone https://username@repository-url.git
```

**当提示输入密码时，输入刚才生成的 PAT**

