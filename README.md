# NoteBook

文档使用 [Docusaurus](https://docusaurus.io/) 构建，这是一个现代化的静态网站生成器。

## 安装

```
$ yarn
```

## 本地开发

```
$ yarn start
```

此命令会启动本地开发服务器并打开浏览器窗口。大多数更改都会实时生效，无需重启服务器。

## 构建

```
$ yarn build
```

此命令会在 `build` 目录中生成静态内容，可以使用任何静态内容托管服务来部署。

## 部署

### 使用 SSH 方式

```
$ USE_SSH=true yarn deploy
```

### 不使用 SSH 方式

```
$ GIT_USER=<你的 GitHub 用户名> yarn deploy
```

如果你使用 GitHub Pages 托管，这个命令可以方便地构建网站并推送到 `gh-pages` 分支。

## 命令说明

以下是 package.json 中各个命令的具体用途

```json
"scripts": {
    "docusaurus": "docusaurus",              // Docusaurus CLI 命令的基础入口
    "dev": "docusaurus start --port 9999",   // 启动开发服务器，指定端口为 9999
    "build": "docusaurus build",             // 构建生产环境的静态文件
    "swizzle": "docusaurus swizzle",         // 自定义主题组件
    "deploy": "docusaurus deploy",           // 部署到 GitHub Pages 或其他平台
    "clear": "docusaurus clear",             // 清除构建缓存
    "serve": "docusaurus serve",             // 启动本地服务器来预览构建后的网站
    "write-translations": "docusaurus write-translations",  // 提取需要翻译的字符串
    "write-heading-ids": "docusaurus write-heading-ids"    // 为标题生成唯一的 ID
}
```

## 文档组织方式

```
docs/
  go/
    _category_.json           # Go 教程的配置
    intro.md                 # 介绍文档
    basic/
      _category_.json        # 基础知识的配置
      01-variables.md       # 变量
      02-functions.md       # 函数
      03-structs.md         # 结构体
```

## 顺序和着陆页

使用特定文档作为着陆页（当前 go 目录的配置）

```js
{
  "label": "Go教程",
  "position": 1,
  "link": {
    "type": "doc",
    "id": "go/intro"
  }
}
```

使用自动生成的索引页（当前 basic 目录的配置）

```js
{
  "label": "基础知识",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Go 语言基础知识介绍"
  }
}
```

自动生成的索引页会列出该目录下的所有文档，而使用特定文档作为着陆页则会显示你指定的那个文档的内容。你可以根据需要选择使用哪种方式

- 如果你有一个很好的介绍页面（比如 intro.md），建议使用 `type: "doc"`
- 如果你想要自动列出所有子文档，建议使用 `type: "generated-index"`

这两种方式都很实用，选择哪种主要取决于你想要呈现给用户的内容组织方式。

## 修改和创建时间

**使用 Git 时间戳**

- 开启 `showLastUpdateTime` 和 `showLastUpdateAuthor`
- 这样可以自动跟踪文档更新历史
- 不需要手动维护日期信息

**特殊情况下手动指定**

- 如果需要指定具体的发布日期，可以在 frontmatter 中使用 `date`
- 如果需要覆盖 Git 的更新时间，可以使用 `last_update`

**添加作者信息**

- 使用 `authors.yml` 统一管理作者信息
- 在文档 frontmatter 中引用作者

**Git 提交信息**

- 写清晰的提交信息，因为这些信息可能会显示在文档更新历史中
- 使用有意义的提交者信息（name 和 email）
