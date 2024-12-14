"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["49786"],{7913:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"Frontend/Engineering/Webpack-\u6027\u80FD\u4F18\u5316","title":"Webpack \u6027\u80FD\u4F18\u5316\u5B9E\u6218\u6307\u5357","description":"\u4F5C\u4E3A\u524D\u7AEF\u5DE5\u7A0B\u5E08,\u6211\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u7ECF\u5E38\u4F7F\u7528 Webpack \u8FDB\u884C\u9879\u76EE\u6784\u5EFA\u548C\u6253\u5305\u3002\u968F\u7740\u9879\u76EE\u89C4\u6A21\u7684\u4E0D\u65AD\u589E\u957F,Webpack \u7684\u6784\u5EFA\u901F\u5EA6\u548C\u8F93\u51FA\u5305\u7684\u5927\u5C0F\u9010\u6E10\u6210\u4E3A\u5F71\u54CD\u5F00\u53D1\u6548\u7387\u548C\u7528\u6237\u4F53\u9A8C\u7684\u74F6\u9888\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898,\u6211\u603B\u7ED3\u4E86\u4E00\u4E9B\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u53EF\u4EE5\u5E94\u7528\u7684 Webpack \u6027\u80FD\u4F18\u5316\u63AA\u65BD,\u4E3B\u8981\u5206\u4E3A\u4E24\u5927\u7C7B:\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6\u548C\u51CF\u5C0F\u8F93\u51FA\u5305\u5927\u5C0F\u3002","source":"@site/docs/Frontend/Engineering/70.Webpack-\u6027\u80FD\u4F18\u5316.md","sourceDirName":"Frontend/Engineering","slug":"/Frontend/Engineering/Webpack-\u6027\u80FD\u4F18\u5316","permalink":"/docs-hub/Frontend/Engineering/Webpack-\u6027\u80FD\u4F18\u5316","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Engineering/70.Webpack-\u6027\u80FD\u4F18\u5316.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":70,"frontMatter":{},"sidebar":"engineeringSidebar","previous":{"title":"Webpack \u5E38\u7528\u914D\u7F6E\u9879","permalink":"/docs-hub/Frontend/Engineering/Webpack-\u5E38\u7528\u914D\u7F6E\u9879"},"next":{"title":"MVC \u4E0E MVVM \u6A21\u5F0F\u8BE6\u89E3","permalink":"/docs-hub/Frontend/Engineering/MVC-MVVM"}}'),r=l("85893"),i=l("50065");let a={},d="Webpack \u6027\u80FD\u4F18\u5316\u5B9E\u6218\u6307\u5357",o={},c=[{value:"\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6\u7684\u4F18\u5316\u63AA\u65BD",id:"\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6\u7684\u4F18\u5316\u63AA\u65BD",level:2},{value:"\u5347\u7EA7 Webpack \u548C Node.js \u7248\u672C",id:"\u5347\u7EA7-webpack-\u548C-nodejs-\u7248\u672C",level:3},{value:"\u4F18\u5316 Loader \u914D\u7F6E",id:"\u4F18\u5316-loader-\u914D\u7F6E",level:3},{value:"\u4F18\u5316 resolve \u914D\u7F6E",id:"\u4F18\u5316-resolve-\u914D\u7F6E",level:3},{value:"\u4F7F\u7528 DllPlugin \u9884\u7F16\u8BD1\u6846\u67B6/\u5E93",id:"\u4F7F\u7528-dllplugin-\u9884\u7F16\u8BD1\u6846\u67B6\u5E93",level:3},{value:"\u5E76\u884C\u5316\u5904\u7406 Loader",id:"\u5E76\u884C\u5316\u5904\u7406-loader",level:3},{value:"\u9009\u62E9\u5408\u9002\u7684 devtool",id:"\u9009\u62E9\u5408\u9002\u7684-devtool",level:3},{value:"\u63A7\u5236 SourceMap \u7684\u751F\u6210",id:"\u63A7\u5236-sourcemap-\u7684\u751F\u6210",level:3},{value:"\u4F7F\u7528 IgnorePlugin \u5FFD\u7565\u65E0\u7528\u6587\u4EF6",id:"\u4F7F\u7528-ignoreplugin-\u5FFD\u7565\u65E0\u7528\u6587\u4EF6",level:3},{value:"\u5206\u6790\u6784\u5EFA\u6027\u80FD\u74F6\u9888",id:"\u5206\u6790\u6784\u5EFA\u6027\u80FD\u74F6\u9888",level:3},{value:"\u51CF\u5C0F\u8F93\u51FA\u5305\u5927\u5C0F\u7684\u4F18\u5316\u63AA\u65BD",id:"\u51CF\u5C0F\u8F93\u51FA\u5305\u5927\u5C0F\u7684\u4F18\u5316\u63AA\u65BD",level:2},{value:"\u542F\u7528 Tree Shaking",id:"\u542F\u7528-tree-shaking",level:3},{value:"\u62C6\u5206\u4EE3\u7801",id:"\u62C6\u5206\u4EE3\u7801",level:3},{value:"\u538B\u7F29\u4EE3\u7801",id:"\u538B\u7F29\u4EE3\u7801",level:3},{value:"\u5F00\u542F Scope Hoisting",id:"\u5F00\u542F-scope-hoisting",level:3},{value:"\u63D0\u53D6 Runtime \u4EE3\u7801",id:"\u63D0\u53D6-runtime-\u4EE3\u7801",level:3},{value:"\u4F7F\u7528 externals \u914D\u7F6E",id:"\u4F7F\u7528-externals-\u914D\u7F6E",level:3},{value:"\u4F18\u5316\u56FE\u7247\u548C\u5B57\u4F53\u6587\u4EF6",id:"\u4F18\u5316\u56FE\u7247\u548C\u5B57\u4F53\u6587\u4EF6",level:3},{value:"\u53BB\u9664\u65E0\u7528\u7684 CSS",id:"\u53BB\u9664\u65E0\u7528\u7684-css",level:3}];function t(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"webpack-\u6027\u80FD\u4F18\u5316\u5B9E\u6218\u6307\u5357",children:"Webpack \u6027\u80FD\u4F18\u5316\u5B9E\u6218\u6307\u5357"})}),"\n",(0,r.jsx)(n.p,{children:"\u4F5C\u4E3A\u524D\u7AEF\u5DE5\u7A0B\u5E08,\u6211\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u7ECF\u5E38\u4F7F\u7528 Webpack \u8FDB\u884C\u9879\u76EE\u6784\u5EFA\u548C\u6253\u5305\u3002\u968F\u7740\u9879\u76EE\u89C4\u6A21\u7684\u4E0D\u65AD\u589E\u957F,Webpack \u7684\u6784\u5EFA\u901F\u5EA6\u548C\u8F93\u51FA\u5305\u7684\u5927\u5C0F\u9010\u6E10\u6210\u4E3A\u5F71\u54CD\u5F00\u53D1\u6548\u7387\u548C\u7528\u6237\u4F53\u9A8C\u7684\u74F6\u9888\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898,\u6211\u603B\u7ED3\u4E86\u4E00\u4E9B\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u53EF\u4EE5\u5E94\u7528\u7684 Webpack \u6027\u80FD\u4F18\u5316\u63AA\u65BD,\u4E3B\u8981\u5206\u4E3A\u4E24\u5927\u7C7B:\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6\u548C\u51CF\u5C0F\u8F93\u51FA\u5305\u5927\u5C0F\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6\u7684\u4F18\u5316\u63AA\u65BD",children:"\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6\u7684\u4F18\u5316\u63AA\u65BD"}),"\n",(0,r.jsx)(n.h3,{id:"\u5347\u7EA7-webpack-\u548C-nodejs-\u7248\u672C",children:"\u5347\u7EA7 Webpack \u548C Node.js \u7248\u672C"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u6700\u65B0\u7684 Webpack 5.x \u548C Node.js 14.x \u53CA\u4EE5\u4E0A\u7248\u672C,\u53EF\u4EE5\u663E\u8457\u63D0\u5347\u6784\u5EFA\u6027\u80FD\u3002\u65B0\u7248\u672C\u901A\u5E38\u4F1A\u5305\u542B\u4E00\u4E9B\u6027\u80FD\u4F18\u5316\u548C\u65B0\u7279\u6027,\u80FD\u591F\u52A0\u5FEB\u6784\u5EFA\u901F\u5EA6\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4F18\u5316-loader-\u914D\u7F6E",children:"\u4F18\u5316 Loader \u914D\u7F6E"}),"\n",(0,r.jsx)(n.p,{children:"\u5408\u7406\u914D\u7F6E Loader \u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6587\u4EF6\u5904\u7406,\u63D0\u9AD8\u6784\u5EFA\u6548\u7387:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        include: path.resolve(__dirname, 'src'), // \u53EA\u5904\u7406 src \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\n        exclude: /node_modules/, // \u6392\u9664 node_modules \u76EE\u5F55\n        use: ['babel-loader?cacheDirectory'], // \u4F7F\u7528\u7F13\u5B58\u52A0\u901F\u4E8C\u6B21\u6784\u5EFA\n      },\n    ],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4F18\u5316-resolve-\u914D\u7F6E",children:"\u4F18\u5316 resolve \u914D\u7F6E"}),"\n",(0,r.jsx)(n.p,{children:"\u8C03\u6574 resolve \u914D\u7F6E\u53EF\u4EE5\u51CF\u5C11\u6A21\u5757\u641C\u7D22\u7684\u8303\u56F4\u548C\u89E3\u6790\u7684\u6B21\u6570:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  resolve: {\n    modules: [path.resolve(__dirname, 'src'), 'node_modules'], // \u9650\u5B9A\u6A21\u5757\u641C\u7D22\u76EE\u5F55\n    extensions: ['.js', '.json'], // \u9650\u5B9A\u6269\u5C55\u540D\u89E3\u6790\u987A\u5E8F\n    alias: {\n      '@': path.resolve(__dirname, 'src'), // \u8BBE\u7F6E\u8DEF\u5F84\u522B\u540D\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4F7F\u7528-dllplugin-\u9884\u7F16\u8BD1\u6846\u67B6\u5E93",children:"\u4F7F\u7528 DllPlugin \u9884\u7F16\u8BD1\u6846\u67B6/\u5E93"}),"\n",(0,r.jsx)(n.p,{children:"\u5C06\u4E0D\u5E38\u53D8\u52A8\u7684\u7B2C\u4E09\u65B9\u6846\u67B6/\u5E93(\u5982 React\u3001Vue)\u9884\u5148\u7F16\u8BD1\u4E3A\u52A8\u6001\u94FE\u63A5\u5E93(dll),\u53EF\u4EE5\u5927\u5E45\u5EA6\u51CF\u5C11\u4E8C\u6B21\u7F16\u8BD1\u7684\u65F6\u95F4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// webpack.dll.config.js\nmodule.exports = {\n  entry: {\n    vendor: ['react', 'react-dom'],\n  },\n  output: {\n    filename: '[name].dll.js',\n    path: path.resolve(__dirname, 'dist', 'dll'),\n    library: '[name]_[hash]',\n  },\n  plugins: [\n    new webpack.DllPlugin({\n      name: '[name]_[hash]',\n      path: path.resolve(__dirname, 'dist', 'dll', 'manifest.json'),\n    }),\n  ],\n};\n\n// webpack.config.js\nmodule.exports = {\n  plugins: [\n    new webpack.DllReferencePlugin({\n      manifest: path.resolve(__dirname, 'dist', 'dll', 'manifest.json'),\n    }),\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5E76\u884C\u5316\u5904\u7406-loader",children:"\u5E76\u884C\u5316\u5904\u7406 Loader"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 HappyPack \u6216 thread-loader \u53EF\u4EE5\u5C06 Loader \u7684\u6267\u884C\u8FC7\u7A0B\u591A\u8FDB\u7A0B/\u591A\u5B9E\u4F8B\u5316,\u5145\u5206\u5229\u7528\u591A\u6838 CPU \u52A0\u901F\u6784\u5EFA\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u4F7F\u7528 HappyPack\nconst HappyPack = require('happypack');\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: 'happypack/loader?id=babel',\n      },\n    ],\n  },\n  plugins: [\n    new HappyPack({\n      id: 'babel',\n      loaders: ['babel-loader?cacheDirectory'],\n    }),\n  ],\n};\n\n// \u4F7F\u7528 thread-loader\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: ['thread-loader', 'babel-loader?cacheDirectory'],\n      },\n    ],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u9009\u62E9\u5408\u9002\u7684-devtool",children:"\u9009\u62E9\u5408\u9002\u7684 devtool"}),"\n",(0,r.jsx)(n.p,{children:"\u4E0D\u540C\u7684 devtool \u8BBE\u7F6E\u4F1A\u5F71\u54CD\u6784\u5EFA\u548C\u91CD\u65B0\u6784\u5EFA\u7684\u901F\u5EA6,\u4E00\u822C\u6765\u8BF4:\neval \u548C eval-source-map \u6A21\u5F0F\u6784\u5EFA\u901F\u5EA6\u6700\u5FEB,\u9002\u5408\u5F00\u53D1\u73AF\u5883\u3002\ncheap-source-map \u76F8\u5BF9\u8F83\u5FEB,\u9002\u5408\u751F\u4EA7\u73AF\u5883\u3002\nsource-map \u6784\u5EFA\u901F\u5EA6\u6162,\u4F46\u662F\u8C03\u8BD5\u6700\u53CB\u597D\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u63A7\u5236-sourcemap-\u7684\u751F\u6210",children:"\u63A7\u5236 SourceMap \u7684\u751F\u6210"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u9879\u76EE\u4E0D\u9700\u8981\u4F7F\u7528 SourceMap,\u53EF\u4EE5\u5173\u95ED\u5B83\u7684\u751F\u6210,\u4ECE\u800C\u52A0\u901F\u6784\u5EFA\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  devtool: false,\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4F7F\u7528-ignoreplugin-\u5FFD\u7565\u65E0\u7528\u6587\u4EF6",children:"\u4F7F\u7528 IgnorePlugin \u5FFD\u7565\u65E0\u7528\u6587\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 IgnorePlugin \u53EF\u4EE5\u5FFD\u7565\u67D0\u4E9B\u4E0D\u9700\u8981\u88AB\u6253\u5305\u7684\u6587\u4EF6,\u4ECE\u800C\u51CF\u5C0F\u8F93\u51FA\u5305\u7684\u4F53\u79EF\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: [\n    new webpack.IgnorePlugin({\n      resourceRegExp: /^\\.\\/locale$/,\n      contextRegExp: /moment$/,\n    }),\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790\u6784\u5EFA\u6027\u80FD\u74F6\u9888",children:"\u5206\u6790\u6784\u5EFA\u6027\u80FD\u74F6\u9888"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 Webpack \u5185\u7F6E\u7684 profile \u5DE5\u5177\u53EF\u4EE5\u751F\u6210\u6027\u80FD\u5206\u6790\u62A5\u544A,\u7ED3\u5408 webpack-bundle-analyzer \u7B49\u53EF\u89C6\u5316\u5206\u6790\u5DE5\u5177,\u627E\u51FA\u6784\u5EFA\u6027\u80FD\u7684\u74F6\u9888,\u6709\u9488\u5BF9\u6027\u5730\u8FDB\u884C\u4F18\u5316\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"webpack --profile --json > stats.json\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u51CF\u5C0F\u8F93\u51FA\u5305\u5927\u5C0F\u7684\u4F18\u5316\u63AA\u65BD",children:"\u51CF\u5C0F\u8F93\u51FA\u5305\u5927\u5C0F\u7684\u4F18\u5316\u63AA\u65BD"}),"\n",(0,r.jsx)(n.h3,{id:"\u542F\u7528-tree-shaking",children:"\u542F\u7528 Tree Shaking"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u8BBE\u7F6E optimization.usedExports \u4E3A true,Webpack \u4F1A\u81EA\u52A8\u5220\u9664\u6CA1\u6709\u88AB\u4F7F\u7528\u7684\u4EE3\u7801,\u51CF\u5C0F\u8F93\u51FA\u5305\u7684\u4F53\u79EF\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  optimization: {\n    usedExports: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u62C6\u5206\u4EE3\u7801",children:"\u62C6\u5206\u4EE3\u7801"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u52A8\u6001\u5BFC\u5165\u8BED\u6CD5 import() \u548C splitChunks \u914D\u7F6E,\u53EF\u4EE5\u5C06\u4EE3\u7801\u62C6\u5206\u4E3A\u591A\u4E2A\u5F02\u6B65\u52A0\u8F7D\u7684 chunk,\u907F\u514D\u52A0\u8F7D\u7528\u4E0D\u5230\u7684\u4EE3\u7801\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u52A8\u6001\u5BFC\u5165\nimport('./module').then((module) => {\n  // ...\n});\n\n// webpack.config.js\nmodule.exports = {\n  optimization: {\n    splitChunks: {\n      chunks: 'all',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u538B\u7F29\u4EE3\u7801",children:"\u538B\u7F29\u4EE3\u7801"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 TerserPlugin \u538B\u7F29 JavaScript \u4EE3\u7801,\u4F7F\u7528 MiniCssExtractPlugin \u548C OptimizeCSSAssetsPlugin \u538B\u7F29 CSS \u4EE3\u7801\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  optimization: {\n    minimize: true,\n    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],\n  },\n  plugins: [new MiniCssExtractPlugin()],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5F00\u542F-scope-hoisting",children:"\u5F00\u542F Scope Hoisting"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 ModuleConcatenationPlugin \u63D2\u4EF6\u5F00\u542F Scope Hoisting \u53EF\u4EE5\u8BA9 Webpack \u6253\u5305\u51FA\u6765\u7684\u4EE3\u7801\u6587\u4EF6\u66F4\u5C0F\u3001\u8FD0\u884C\u7684\u66F4\u5FEB\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u63D0\u53D6-runtime-\u4EE3\u7801",children:"\u63D0\u53D6 Runtime \u4EE3\u7801"}),"\n",(0,r.jsx)(n.p,{children:"\u5C06 optimization.runtimeChunk \u8BBE\u7F6E\u4E3A true \u6216 'multiple',\u53EF\u4EE5\u5C06 chunk \u4E4B\u95F4\u5171\u4EAB\u7684\u8FD0\u884C\u65F6\u4EE3\u7801\u63D0\u53D6\u5230\u5355\u72EC\u7684 chunk \u4E2D,\u51CF\u5C0F entry chunk \u4F53\u79EF\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  optimization: {\n    runtimeChunk: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4F7F\u7528-externals-\u914D\u7F6E",children:"\u4F7F\u7528 externals \u914D\u7F6E"}),"\n",(0,r.jsx)(n.p,{children:"\u5BF9\u4E8E\u4E00\u4E9B\u5927\u578B\u7684\u7B2C\u4E09\u65B9\u5E93(\u5982 jQuery\u3001Lodash),\u53EF\u4EE5\u4F7F\u7528 externals \u914D\u7F6E\u5C06\u5176\u4ECE bundle \u4E2D\u6392\u9664,\u800C\u4F7F\u7528 CDN \u7B49\u5916\u90E8\u8D44\u6E90\u5F15\u5165,\u4ECE\u800C\u51CF\u5C0F\u6253\u5305\u4F53\u79EF\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  externals: {\n    jquery: 'jQuery',\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4F18\u5316\u56FE\u7247\u548C\u5B57\u4F53\u6587\u4EF6",children:"\u4F18\u5316\u56FE\u7247\u548C\u5B57\u4F53\u6587\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 image-webpack-loader \u5BF9\u56FE\u7247\u8FDB\u884C\u538B\u7F29,\u4F7F\u7528 url-loader \u5C06\u5C0F\u56FE\u7247\u8F6C\u6362\u4E3A base64 \u5185\u8054\u3002\u5BF9\u4E8E\u5B57\u4F53\u6587\u4EF6,\u4E5F\u53EF\u4EE5\u4F7F\u7528 url-loader \u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.(png|jpe?g|gif|svg)$/,\n        use: [\n          {\n            loader: 'url-loader',\n            options: {\n              limit: 8192,\n            },\n          },\n          {\n            loader: 'image-webpack-loader',\n            options: {\n              mozjpeg: {\n                progressive: true,\n                quality: 65,\n              },\n            },\n          },\n        ],\n      },\n      {\n        test: /\\.(woff2?|eot|ttf|otf)$/,\n        use: [\n          {\n            loader: 'url-loader',\n            options: {\n              limit: 8192,\n            },\n          },\n        ],\n      },\n    ],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u53BB\u9664\u65E0\u7528\u7684-css",children:"\u53BB\u9664\u65E0\u7528\u7684 CSS"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 PurgeCSS \u63D2\u4EF6\u53EF\u4EE5\u81EA\u52A8\u68C0\u6D4B\u5E76\u5220\u9664\u6CA1\u6709\u88AB\u4F7F\u7528\u7684 CSS \u4EE3\u7801,\u5927\u5927\u51CF\u5C0F CSS \u6587\u4EF6\u7684\u4F53\u79EF\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const PurgecssPlugin = require('purgecss-webpack-plugin');\nconst glob = require('glob');\nmodule.exports = {\n  plugins: [\n    new PurgecssPlugin({\n      paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true }),\n    }),\n  ],\n};\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return a}});var s=l(67294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);