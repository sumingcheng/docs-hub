"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[34054],{90506:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Frontend/Engineering/Webpack-\u6027\u80fd\u4f18\u5316","title":"Webpack \u6027\u80fd\u4f18\u5316\u5b9e\u6218\u6307\u5357","description":"\u4f5c\u4e3a\u524d\u7aef\u5de5\u7a0b\u5e08,\u6211\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f7f\u7528 Webpack \u8fdb\u884c\u9879\u76ee\u6784\u5efa\u548c\u6253\u5305\u3002\u968f\u7740\u9879\u76ee\u89c4\u6a21\u7684\u4e0d\u65ad\u589e\u957f,Webpack \u7684\u6784\u5efa\u901f\u5ea6\u548c\u8f93\u51fa\u5305\u7684\u5927\u5c0f\u9010\u6e10\u6210\u4e3a\u5f71\u54cd\u5f00\u53d1\u6548\u7387\u548c\u7528\u6237\u4f53\u9a8c\u7684\u74f6\u9888\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898,\u6211\u603b\u7ed3\u4e86\u4e00\u4e9b\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u53ef\u4ee5\u5e94\u7528\u7684 Webpack \u6027\u80fd\u4f18\u5316\u63aa\u65bd,\u4e3b\u8981\u5206\u4e3a\u4e24\u5927\u7c7b:\u63d0\u9ad8\u6784\u5efa\u901f\u5ea6\u548c\u51cf\u5c0f\u8f93\u51fa\u5305\u5927\u5c0f\u3002","source":"@site/docs/Frontend/Engineering/70.Webpack-\u6027\u80fd\u4f18\u5316.md","sourceDirName":"Frontend/Engineering","slug":"/Frontend/Engineering/Webpack-\u6027\u80fd\u4f18\u5316","permalink":"/docs-hub/docs/Frontend/Engineering/Webpack-\u6027\u80fd\u4f18\u5316","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Engineering/70.Webpack-\u6027\u80fd\u4f18\u5316.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":70,"frontMatter":{},"sidebar":"engineeringSidebar","previous":{"title":"Webpack \u5e38\u7528\u914d\u7f6e\u9879","permalink":"/docs-hub/docs/Frontend/Engineering/Webpack-\u5e38\u7528\u914d\u7f6e\u9879"},"next":{"title":"MVC \u4e0e MVVM \u6a21\u5f0f\u8be6\u89e3","permalink":"/docs-hub/docs/Frontend/Engineering/MVC-MVVM"}}');var r=l(74848),i=l(28453);const a={},o="Webpack \u6027\u80fd\u4f18\u5316\u5b9e\u6218\u6307\u5357",d={},c=[{value:"\u63d0\u9ad8\u6784\u5efa\u901f\u5ea6\u7684\u4f18\u5316\u63aa\u65bd",id:"\u63d0\u9ad8\u6784\u5efa\u901f\u5ea6\u7684\u4f18\u5316\u63aa\u65bd",level:2},{value:"\u5347\u7ea7 Webpack \u548c Node.js \u7248\u672c",id:"\u5347\u7ea7-webpack-\u548c-nodejs-\u7248\u672c",level:3},{value:"\u4f18\u5316 Loader \u914d\u7f6e",id:"\u4f18\u5316-loader-\u914d\u7f6e",level:3},{value:"\u4f18\u5316 resolve \u914d\u7f6e",id:"\u4f18\u5316-resolve-\u914d\u7f6e",level:3},{value:"\u4f7f\u7528 DllPlugin \u9884\u7f16\u8bd1\u6846\u67b6/\u5e93",id:"\u4f7f\u7528-dllplugin-\u9884\u7f16\u8bd1\u6846\u67b6\u5e93",level:3},{value:"\u5e76\u884c\u5316\u5904\u7406 Loader",id:"\u5e76\u884c\u5316\u5904\u7406-loader",level:3},{value:"\u9009\u62e9\u5408\u9002\u7684 devtool",id:"\u9009\u62e9\u5408\u9002\u7684-devtool",level:3},{value:"\u63a7\u5236 SourceMap \u7684\u751f\u6210",id:"\u63a7\u5236-sourcemap-\u7684\u751f\u6210",level:3},{value:"\u4f7f\u7528 IgnorePlugin \u5ffd\u7565\u65e0\u7528\u6587\u4ef6",id:"\u4f7f\u7528-ignoreplugin-\u5ffd\u7565\u65e0\u7528\u6587\u4ef6",level:3},{value:"\u5206\u6790\u6784\u5efa\u6027\u80fd\u74f6\u9888",id:"\u5206\u6790\u6784\u5efa\u6027\u80fd\u74f6\u9888",level:3},{value:"\u51cf\u5c0f\u8f93\u51fa\u5305\u5927\u5c0f\u7684\u4f18\u5316\u63aa\u65bd",id:"\u51cf\u5c0f\u8f93\u51fa\u5305\u5927\u5c0f\u7684\u4f18\u5316\u63aa\u65bd",level:2},{value:"\u542f\u7528 Tree Shaking",id:"\u542f\u7528-tree-shaking",level:3},{value:"\u62c6\u5206\u4ee3\u7801",id:"\u62c6\u5206\u4ee3\u7801",level:3},{value:"\u538b\u7f29\u4ee3\u7801",id:"\u538b\u7f29\u4ee3\u7801",level:3},{value:"\u5f00\u542f Scope Hoisting",id:"\u5f00\u542f-scope-hoisting",level:3},{value:"\u63d0\u53d6 Runtime \u4ee3\u7801",id:"\u63d0\u53d6-runtime-\u4ee3\u7801",level:3},{value:"\u4f7f\u7528 externals \u914d\u7f6e",id:"\u4f7f\u7528-externals-\u914d\u7f6e",level:3},{value:"\u4f18\u5316\u56fe\u7247\u548c\u5b57\u4f53\u6587\u4ef6",id:"\u4f18\u5316\u56fe\u7247\u548c\u5b57\u4f53\u6587\u4ef6",level:3},{value:"\u53bb\u9664\u65e0\u7528\u7684 CSS",id:"\u53bb\u9664\u65e0\u7528\u7684-css",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"webpack-\u6027\u80fd\u4f18\u5316\u5b9e\u6218\u6307\u5357",children:"Webpack \u6027\u80fd\u4f18\u5316\u5b9e\u6218\u6307\u5357"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f5c\u4e3a\u524d\u7aef\u5de5\u7a0b\u5e08,\u6211\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f7f\u7528 Webpack \u8fdb\u884c\u9879\u76ee\u6784\u5efa\u548c\u6253\u5305\u3002\u968f\u7740\u9879\u76ee\u89c4\u6a21\u7684\u4e0d\u65ad\u589e\u957f,Webpack \u7684\u6784\u5efa\u901f\u5ea6\u548c\u8f93\u51fa\u5305\u7684\u5927\u5c0f\u9010\u6e10\u6210\u4e3a\u5f71\u54cd\u5f00\u53d1\u6548\u7387\u548c\u7528\u6237\u4f53\u9a8c\u7684\u74f6\u9888\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898,\u6211\u603b\u7ed3\u4e86\u4e00\u4e9b\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u53ef\u4ee5\u5e94\u7528\u7684 Webpack \u6027\u80fd\u4f18\u5316\u63aa\u65bd,\u4e3b\u8981\u5206\u4e3a\u4e24\u5927\u7c7b:\u63d0\u9ad8\u6784\u5efa\u901f\u5ea6\u548c\u51cf\u5c0f\u8f93\u51fa\u5305\u5927\u5c0f\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u63d0\u9ad8\u6784\u5efa\u901f\u5ea6\u7684\u4f18\u5316\u63aa\u65bd",children:"\u63d0\u9ad8\u6784\u5efa\u901f\u5ea6\u7684\u4f18\u5316\u63aa\u65bd"}),"\n",(0,r.jsx)(n.h3,{id:"\u5347\u7ea7-webpack-\u548c-nodejs-\u7248\u672c",children:"\u5347\u7ea7 Webpack \u548c Node.js \u7248\u672c"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u6700\u65b0\u7684 Webpack 5.x \u548c Node.js 14.x \u53ca\u4ee5\u4e0a\u7248\u672c,\u53ef\u4ee5\u663e\u8457\u63d0\u5347\u6784\u5efa\u6027\u80fd\u3002\u65b0\u7248\u672c\u901a\u5e38\u4f1a\u5305\u542b\u4e00\u4e9b\u6027\u80fd\u4f18\u5316\u548c\u65b0\u7279\u6027,\u80fd\u591f\u52a0\u5feb\u6784\u5efa\u901f\u5ea6\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4f18\u5316-loader-\u914d\u7f6e",children:"\u4f18\u5316 Loader \u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u5408\u7406\u914d\u7f6e Loader \u53ef\u4ee5\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5904\u7406,\u63d0\u9ad8\u6784\u5efa\u6548\u7387:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        include: path.resolve(__dirname, 'src'), // \u53ea\u5904\u7406 src \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\n        exclude: /node_modules/, // \u6392\u9664 node_modules \u76ee\u5f55\n        use: ['babel-loader?cacheDirectory'], // \u4f7f\u7528\u7f13\u5b58\u52a0\u901f\u4e8c\u6b21\u6784\u5efa\n      },\n    ],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f18\u5316-resolve-\u914d\u7f6e",children:"\u4f18\u5316 resolve \u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u8c03\u6574 resolve \u914d\u7f6e\u53ef\u4ee5\u51cf\u5c11\u6a21\u5757\u641c\u7d22\u7684\u8303\u56f4\u548c\u89e3\u6790\u7684\u6b21\u6570:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  resolve: {\n    modules: [path.resolve(__dirname, 'src'), 'node_modules'], // \u9650\u5b9a\u6a21\u5757\u641c\u7d22\u76ee\u5f55\n    extensions: ['.js', '.json'], // \u9650\u5b9a\u6269\u5c55\u540d\u89e3\u6790\u987a\u5e8f\n    alias: {\n      '@': path.resolve(__dirname, 'src'), // \u8bbe\u7f6e\u8def\u5f84\u522b\u540d\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528-dllplugin-\u9884\u7f16\u8bd1\u6846\u67b6\u5e93",children:"\u4f7f\u7528 DllPlugin \u9884\u7f16\u8bd1\u6846\u67b6/\u5e93"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u4e0d\u5e38\u53d8\u52a8\u7684\u7b2c\u4e09\u65b9\u6846\u67b6/\u5e93(\u5982 React\u3001Vue)\u9884\u5148\u7f16\u8bd1\u4e3a\u52a8\u6001\u94fe\u63a5\u5e93(dll),\u53ef\u4ee5\u5927\u5e45\u5ea6\u51cf\u5c11\u4e8c\u6b21\u7f16\u8bd1\u7684\u65f6\u95f4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// webpack.dll.config.js\nmodule.exports = {\n  entry: {\n    vendor: ['react', 'react-dom'],\n  },\n  output: {\n    filename: '[name].dll.js',\n    path: path.resolve(__dirname, 'dist', 'dll'),\n    library: '[name]_[hash]',\n  },\n  plugins: [\n    new webpack.DllPlugin({\n      name: '[name]_[hash]',\n      path: path.resolve(__dirname, 'dist', 'dll', 'manifest.json'),\n    }),\n  ],\n};\n\n// webpack.config.js\nmodule.exports = {\n  plugins: [\n    new webpack.DllReferencePlugin({\n      manifest: path.resolve(__dirname, 'dist', 'dll', 'manifest.json'),\n    }),\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5e76\u884c\u5316\u5904\u7406-loader",children:"\u5e76\u884c\u5316\u5904\u7406 Loader"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 HappyPack \u6216 thread-loader \u53ef\u4ee5\u5c06 Loader \u7684\u6267\u884c\u8fc7\u7a0b\u591a\u8fdb\u7a0b/\u591a\u5b9e\u4f8b\u5316,\u5145\u5206\u5229\u7528\u591a\u6838 CPU \u52a0\u901f\u6784\u5efa\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u4f7f\u7528 HappyPack\nconst HappyPack = require('happypack');\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: 'happypack/loader?id=babel',\n      },\n    ],\n  },\n  plugins: [\n    new HappyPack({\n      id: 'babel',\n      loaders: ['babel-loader?cacheDirectory'],\n    }),\n  ],\n};\n\n// \u4f7f\u7528 thread-loader\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: ['thread-loader', 'babel-loader?cacheDirectory'],\n      },\n    ],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u9009\u62e9\u5408\u9002\u7684-devtool",children:"\u9009\u62e9\u5408\u9002\u7684 devtool"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u540c\u7684 devtool \u8bbe\u7f6e\u4f1a\u5f71\u54cd\u6784\u5efa\u548c\u91cd\u65b0\u6784\u5efa\u7684\u901f\u5ea6,\u4e00\u822c\u6765\u8bf4:\neval \u548c eval-source-map \u6a21\u5f0f\u6784\u5efa\u901f\u5ea6\u6700\u5feb,\u9002\u5408\u5f00\u53d1\u73af\u5883\u3002\ncheap-source-map \u76f8\u5bf9\u8f83\u5feb,\u9002\u5408\u751f\u4ea7\u73af\u5883\u3002\nsource-map \u6784\u5efa\u901f\u5ea6\u6162,\u4f46\u662f\u8c03\u8bd5\u6700\u53cb\u597d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u63a7\u5236-sourcemap-\u7684\u751f\u6210",children:"\u63a7\u5236 SourceMap \u7684\u751f\u6210"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u9879\u76ee\u4e0d\u9700\u8981\u4f7f\u7528 SourceMap,\u53ef\u4ee5\u5173\u95ed\u5b83\u7684\u751f\u6210,\u4ece\u800c\u52a0\u901f\u6784\u5efa\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  devtool: false,\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528-ignoreplugin-\u5ffd\u7565\u65e0\u7528\u6587\u4ef6",children:"\u4f7f\u7528 IgnorePlugin \u5ffd\u7565\u65e0\u7528\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 IgnorePlugin \u53ef\u4ee5\u5ffd\u7565\u67d0\u4e9b\u4e0d\u9700\u8981\u88ab\u6253\u5305\u7684\u6587\u4ef6,\u4ece\u800c\u51cf\u5c0f\u8f93\u51fa\u5305\u7684\u4f53\u79ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: [\n    new webpack.IgnorePlugin({\n      resourceRegExp: /^\\.\\/locale$/,\n      contextRegExp: /moment$/,\n    }),\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790\u6784\u5efa\u6027\u80fd\u74f6\u9888",children:"\u5206\u6790\u6784\u5efa\u6027\u80fd\u74f6\u9888"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 Webpack \u5185\u7f6e\u7684 profile \u5de5\u5177\u53ef\u4ee5\u751f\u6210\u6027\u80fd\u5206\u6790\u62a5\u544a,\u7ed3\u5408 webpack-bundle-analyzer \u7b49\u53ef\u89c6\u5316\u5206\u6790\u5de5\u5177,\u627e\u51fa\u6784\u5efa\u6027\u80fd\u7684\u74f6\u9888,\u6709\u9488\u5bf9\u6027\u5730\u8fdb\u884c\u4f18\u5316\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"webpack --profile --json > stats.json\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u51cf\u5c0f\u8f93\u51fa\u5305\u5927\u5c0f\u7684\u4f18\u5316\u63aa\u65bd",children:"\u51cf\u5c0f\u8f93\u51fa\u5305\u5927\u5c0f\u7684\u4f18\u5316\u63aa\u65bd"}),"\n",(0,r.jsx)(n.h3,{id:"\u542f\u7528-tree-shaking",children:"\u542f\u7528 Tree Shaking"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u8bbe\u7f6e optimization.usedExports \u4e3a true,Webpack \u4f1a\u81ea\u52a8\u5220\u9664\u6ca1\u6709\u88ab\u4f7f\u7528\u7684\u4ee3\u7801,\u51cf\u5c0f\u8f93\u51fa\u5305\u7684\u4f53\u79ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  optimization: {\n    usedExports: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u62c6\u5206\u4ee3\u7801",children:"\u62c6\u5206\u4ee3\u7801"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u52a8\u6001\u5bfc\u5165\u8bed\u6cd5 import() \u548c splitChunks \u914d\u7f6e,\u53ef\u4ee5\u5c06\u4ee3\u7801\u62c6\u5206\u4e3a\u591a\u4e2a\u5f02\u6b65\u52a0\u8f7d\u7684 chunk,\u907f\u514d\u52a0\u8f7d\u7528\u4e0d\u5230\u7684\u4ee3\u7801\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u52a8\u6001\u5bfc\u5165\nimport('./module').then((module) => {\n  // ...\n});\n\n// webpack.config.js\nmodule.exports = {\n  optimization: {\n    splitChunks: {\n      chunks: 'all',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u538b\u7f29\u4ee3\u7801",children:"\u538b\u7f29\u4ee3\u7801"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 TerserPlugin \u538b\u7f29 JavaScript \u4ee3\u7801,\u4f7f\u7528 MiniCssExtractPlugin \u548c OptimizeCSSAssetsPlugin \u538b\u7f29 CSS \u4ee3\u7801\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  optimization: {\n    minimize: true,\n    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],\n  },\n  plugins: [new MiniCssExtractPlugin()],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5f00\u542f-scope-hoisting",children:"\u5f00\u542f Scope Hoisting"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 ModuleConcatenationPlugin \u63d2\u4ef6\u5f00\u542f Scope Hoisting \u53ef\u4ee5\u8ba9 Webpack \u6253\u5305\u51fa\u6765\u7684\u4ee3\u7801\u6587\u4ef6\u66f4\u5c0f\u3001\u8fd0\u884c\u7684\u66f4\u5feb\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u63d0\u53d6-runtime-\u4ee3\u7801",children:"\u63d0\u53d6 Runtime \u4ee3\u7801"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06 optimization.runtimeChunk \u8bbe\u7f6e\u4e3a true \u6216 'multiple',\u53ef\u4ee5\u5c06 chunk \u4e4b\u95f4\u5171\u4eab\u7684\u8fd0\u884c\u65f6\u4ee3\u7801\u63d0\u53d6\u5230\u5355\u72ec\u7684 chunk \u4e2d,\u51cf\u5c0f entry chunk \u4f53\u79ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  optimization: {\n    runtimeChunk: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528-externals-\u914d\u7f6e",children:"\u4f7f\u7528 externals \u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e00\u4e9b\u5927\u578b\u7684\u7b2c\u4e09\u65b9\u5e93(\u5982 jQuery\u3001Lodash),\u53ef\u4ee5\u4f7f\u7528 externals \u914d\u7f6e\u5c06\u5176\u4ece bundle \u4e2d\u6392\u9664,\u800c\u4f7f\u7528 CDN \u7b49\u5916\u90e8\u8d44\u6e90\u5f15\u5165,\u4ece\u800c\u51cf\u5c0f\u6253\u5305\u4f53\u79ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  externals: {\n    jquery: 'jQuery',\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f18\u5316\u56fe\u7247\u548c\u5b57\u4f53\u6587\u4ef6",children:"\u4f18\u5316\u56fe\u7247\u548c\u5b57\u4f53\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 image-webpack-loader \u5bf9\u56fe\u7247\u8fdb\u884c\u538b\u7f29,\u4f7f\u7528 url-loader \u5c06\u5c0f\u56fe\u7247\u8f6c\u6362\u4e3a base64 \u5185\u8054\u3002\u5bf9\u4e8e\u5b57\u4f53\u6587\u4ef6,\u4e5f\u53ef\u4ee5\u4f7f\u7528 url-loader \u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.(png|jpe?g|gif|svg)$/,\n        use: [\n          {\n            loader: 'url-loader',\n            options: {\n              limit: 8192,\n            },\n          },\n          {\n            loader: 'image-webpack-loader',\n            options: {\n              mozjpeg: {\n                progressive: true,\n                quality: 65,\n              },\n            },\n          },\n        ],\n      },\n      {\n        test: /\\.(woff2?|eot|ttf|otf)$/,\n        use: [\n          {\n            loader: 'url-loader',\n            options: {\n              limit: 8192,\n            },\n          },\n        ],\n      },\n    ],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u53bb\u9664\u65e0\u7528\u7684-css",children:"\u53bb\u9664\u65e0\u7528\u7684 CSS"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 PurgeCSS \u63d2\u4ef6\u53ef\u4ee5\u81ea\u52a8\u68c0\u6d4b\u5e76\u5220\u9664\u6ca1\u6709\u88ab\u4f7f\u7528\u7684 CSS \u4ee3\u7801,\u5927\u5927\u51cf\u5c0f CSS \u6587\u4ef6\u7684\u4f53\u79ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const PurgecssPlugin = require('purgecss-webpack-plugin');\nconst glob = require('glob');\nmodule.exports = {\n  plugins: [\n    new PurgecssPlugin({\n      paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true }),\n    }),\n  ],\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>o});var s=l(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);