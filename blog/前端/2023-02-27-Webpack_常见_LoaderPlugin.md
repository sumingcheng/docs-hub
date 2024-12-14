# Webpack 常见 Loader、Plugin



 **Link:** [https://zhuanlan.zhihu.com/p/609546537]

## 什么是Loader、Plugin  

简单的说 Loader 用于转换各种资源，例如 Babel-loader：将 ES6+ 代码转换为 ES5 代码，以便在低版本浏览器中运行

而 Plugin 是用于增强 Webpack 的功能，例如 HtmlWebpackPlugin：自动生成 HTML 文件，并将打包生成的 JavaScript 和 CSS 文件自动引入 HTML 中。

### Loader  

(1) Babel-loader：将 ES6+ 代码转换为 ES5 代码，以便在低版本浏览器中运行。

(2) Style-loader：将 CSS 插入到 HTML 中的 style 标签中。

(3) CSS-loader：解析 CSS 文件，并处理 CSS 中的依赖关系，例如 @import 和 url()。

(4) File-loader：处理图片和其他文件，将它们打包到 output 目录，并返回它们的 URL。

(5) Url-loader：与 File-loader 类似，但是它可以将文件转换为 base64 URL，以减少 HTTP 请求的数量。

(6) Vue-loader：处理 .vue 文件，将它们转换为 JavaScript 模块。

(7) Less-loader：解析 Less 文件并转换为 CSS。

(8) Sass-loader：解析 Sass 文件并转换为 CSS。

### Plugin  

(1) HtmlWebpackPlugin：自动生成 HTML 文件，并将打包生成的 JavaScript 和 CSS 文件自动引入 HTML 中。

(2) CleanWebpackPlugin：自动清理 output 目录中的旧文件。

(3) mini-css-extract-plugin：将 CSS 提取到单独的文件中。

(4) CopyWebpackPlugin：一些静态资源或者打包好的文件复制到输出到 output 目录中。

(5) UglifyWebpackPlugin：压缩 JavaScript 代码。

(6) DefinePlugin：定义全局变量。

(7) ProvidePlugin：自动加载模块，而不必使用 require 或 import 导入。

(8) HotModuleReplacementPlugin：实现模块热更新，用于提高开发效率。

