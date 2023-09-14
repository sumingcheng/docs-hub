# docusaurus 使用指南

## 脚本命令

1. **docusaurus**: 这个命令只是 Docusaurus 的入口，通常不会直接使用。
2. **dev (docusaurus start)**: 启动一个开发服务器，并开启热重载功能。这意味着当你修改文档或代码时，页面会自动刷新来反映这些更改。
3. **build (docusaurus build)**: 构建文档网站为静态文件。这些文件可以部署到任何静态文件托管服务上。
4. **swizzle (docusaurus swizzle)**: “Swizzling” 是 Docusaurus 的一个特性，允许你覆盖默认的主题组件，以便自定义它们。这个命令会将组件复制到你的项目中，这样你就可以修改它们。
5. **deploy (docusaurus deploy)**: 如果你的网站托管在 GitHub Pages 上，这个命令会帮助你构建并部署你的文档网站。它基本上是一个辅助工具，简化了部署过程。
6. **clear (docusaurus clear)**: 清除缓存和临时文件，这在遇到某些“奇怪”的构建问题时可能有帮助。
7. **serve (docusaurus serve)**: 构建并在本地预览你的 Docusaurus 网站，这对于在部署之前检查内容非常有用。
8. **write-translations (docusaurus write-translations)**: 这个命令帮助你管理文档的翻译。它将默认的翻译从源代码中提取出来，以便你可以更容易地翻译它们。
9. **write-heading-ids (docusaurus write-heading-ids)**: 这个命令为文档的标题添加唯一的ID，这样你可以直接链接到特定的部分。

## 目录结构

```perl
my-docusaurus-project/
├── docs/                     # 文档内容
│   ├── intro.md              # intro.md 文件名会被转换为 /intro 路径
│   ├── folder/               # 子目录
│   │   ├── doc1.md           # /folder/doc1 路径
│   │   └── doc2.md           # /folder/doc2 路径
│   └── ...
├── src/                      # 自定义的源代码
│   ├── css/                  # 用于主题的自定义 CSS
│   ├── components/           # 自定义 React 组件
│   └── ...
├── static/                   # 静态资源（图片、样式等）
│   ├── img/
│   └── ...
├── docusaurus.config.js      # Docusaurus 的配置文件
├── package.json              # 项目依赖和脚本
└── sidebar.js                # 定义文档页面的侧边栏
```

1. **docs/**: 这个目录包含你的 Markdown 文档。每个文件或子目录都会转换为网站的一个部分。
2. **src/**: 如果你想自定义 Docusaurus 的默认配置或样式，可以在这里添加自定义的源代码。常见的自定义项包括 CSS 和 React 组件。
3. **static/**: 你可以放置静态资源的地方，例如图片、样式表或其他文件。这些文件会被复制到构建的网站的根目录中，所以可以很容易地引用它们。
4. **docusaurus.config.js**: 这是 Docusaurus 的主配置文件，其中包含站点的元数据、导航、插件、主题和其他设置。
5. **package.json**: 这是一个标准的 npm 配置文件，其中列出了项目的依赖关系和脚本。当你运行如 `npm run start` 这样的命令时，它会使用这里定义的脚本。
6. **sidebar.js**: 这个文件定义了文档页面的侧边栏结构。你可以指定哪些文档应该在侧边栏中显示，以及它们的顺序。
