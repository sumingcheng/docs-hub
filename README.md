# docs-hub

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
