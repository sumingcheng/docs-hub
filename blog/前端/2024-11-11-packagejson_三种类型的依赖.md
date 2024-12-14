---
authors: sumingcheng
---
# package.json 三种类型的依赖



 **Link:** [https://zhuanlan.zhihu.com/p/6198082065]

## package.json  
```
{
  "dependencies" {
    "react" "^18.2.0",
    "react-dom" "^18.2.0",
    "axios" "^1.2.3"
  },
  "devDependencies" {
    "webpack" "^5.60.0",
    "webpack-cli" "^4.9.0",
    "babel-loader" "^8.2.3",
    "eslint" "^8.0.0",
    "style-loader" "^3.3.1",
    "css-loader" "^6.7.0"
  },
  "peerDependencies" {
    "react" "^18.0.0"
  }
}
```
## dependencies  

`dependencies` 中列出了项目运行时必需的包。换句话说，这些库是在应用运行时必须存在的。

**React** 和 **React-DOM** 是 React 应用的核心库，它们会被安装到 `node_modules` 中并在应用启动时加载。

**Axios** 是一个用于发送 HTTP 请求的库，通常用于与后端 API 进行交互，它也属于运行时所需的依赖。

```
"dependencies" {
  "react" "^18.2.0",     // React库，应用必须依赖它来构建UI
  "react-dom" "^18.2.0",  // React-DOM库，用于在DOM中渲染React组件
  "axios" "^1.2.3"       // Axios，用于发送 HTTP 请求
}
```

当你运行 `npm install` 时，`dependencies` 中列出的所有库都会被安装到项目中。

## devDependencies  

`devDependencies` 中列出了项目在开发阶段需要的工具和库。这些包只会在开发环境中使用，并且不会在生产环境中被包含。

**Webpack** 是打包工具，用于将代码捆绑成生产环境所需的文件。

**Babel-loader** 是用来将现代 JavaScript（如 ES6+）转译成兼容性更好的版本，通常配合 Webpack 使用。

**ESLint** 是一个 JavaScript 代码检查工具，用于保证代码质量。

```
"devDependencies" {
  "webpack" "^5.60.0",      // Webpack，用于打包代码
  "webpack-cli" "^4.9.0",    // Webpack CLI，允许在命令行中使用Webpack
  "babel-loader" "^8.2.3",   // Babel loader，用于转译JS代码
  "eslint" "^8.0.0",         // ESLint，用于代码风格和质量检查
  "style-loader" "^3.3.1",   // Style loader，处理CSS的加载
  "css-loader" "^6.7.0"      // CSS loader，处理CSS文件
}
```

这些库的主要作用是为了帮助你在开发过程中构建和优化代码。例如，你使用 Webpack 打包代码，Babel 将 ES6 转译为 ES5，ESLint 确保代码符合规范。而这些工具在生产环境中不需要，因此它们只会被列在 `devDependencies` 中。

## peerDependencies  

`peerDependencies` 用来指定该库所依赖的外部库的版本范围，但并不直接安装这些库，而是要求使用该库的项目自己安装这些依赖。

假设你在开发一个 React 组件库，这个组件库依赖于 `react`，但是你并不希望直接将 `react` 包含在你的组件库中，因为你的用户可能已经安装了 `react`。这时，你就可以在 `peerDependencies` 中指定 `react` 的版本范围。

```
"peerDependencies" {
  "react" "^18.0.0"     // 组件库要求项目使用 React 18 或更高版本
}
```

这样，假设用户已经在他们的项目中安装了 `react@18.0.0`，那么他们就可以使用你的组件库了。如果用户没有安装正确版本的 `react`，npm 会给出警告提示。

