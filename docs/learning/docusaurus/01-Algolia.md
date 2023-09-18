# Algolia DocSearch 配置

**Algolia 的 DocSearch 是一个免费的工具，专为文档网站设计，提供强大的搜索功能。**

## 申请

1. **访问 DocSearch 官方网站**: 首先，导航到 [DocSearch 官方申请页面](https://docsearch.algolia.com/apply/)。
2. **填写申请表格**: 提供你的文档网站的详细信息，例如网站的 URL、主要内容语言等。
3. **等待批准**: 一旦提交，Algolia 的团队会评估你的申请。如果你的网站被接受，你将收到一个 API 密钥和其他配置详情。

## 安装

1. **安装 DocSearch 插件**: 通常，你可以通过 npm 或 yarn 安装 DocSearch。

   ```
   npm install docsearch.js
   ```

   或

   ```
   yarn add docsearch.js
   ```

2. **引入 CSS 和 JS**: 在你的文档网站的主要 HTML 文件中引入 DocSearch 的 CSS 和 JS 文件。

   ```
   <link rel="stylesheet" href="/path-to-docsearch.min.css">
   <script src="/path-to-docsearch.min.js"></script>
   ```

## 配置

1. **初始化 DocSearch**: 在你的主要 JavaScript 文件中，使用从 Algolia 收到的 API 密钥和配置来初始化 DocSearch。

2. **docusaurus.config.js**

   ```javascript
     themeConfig: {
       // 搜索
       algolia: {
         apiKey: '4738bf597613dad54ccea9f4de048456',
         indexName: 'sumingcheng',
         contextualSearch: true,
         appId: 'P783BA7DL3',
       },
     }
   ```

3. **调整样式 (可选)**: 根据需要，你可以通过 CSS 覆盖默认的 DocSearch 样式，以使其更好地融入你的文档网站的设计。

## 测试

配置成功后你的导航栏会出现搜索框，例如https://sumingcheng.github.io/NoteBook/

