"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["45880"],{19889:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"Frontend/Vue/\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3/\u4ECEWebpack\u5230v-show-v-if","title":"\u642D\u5EFAvue\u9879\u76EE","description":"\u5220\u9664\u9664\u56FE\u4E2D\u4EE5\u5916\u6240\u6709\u6587\u4EF6","source":"@site/docs/Frontend/Vue/\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3/10.\u4ECEWebpack\u5230v-show-v-if.md","sourceDirName":"Frontend/Vue/\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3","slug":"/Frontend/Vue/\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3/\u4ECEWebpack\u5230v-show-v-if","permalink":"/docs-hub/Frontend/Vue/\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3/\u4ECEWebpack\u5230v-show-v-if","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3/10.\u4ECEWebpack\u5230v-show-v-if.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":10,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3","permalink":"/docs-hub/category/\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3"},"next":{"title":"v-if \u548C v-show \u6BD4\u8F83","permalink":"/docs-hub/Frontend/Vue/\u6761\u4EF6\u6E32\u67D3\u548C\u5217\u8868\u6E32\u67D3/v-if-v-show"}}'),l=s("85893"),c=s("50065");let d={},i="\u642D\u5EFAvue\u9879\u76EE",t={},o=[{value:"\u5220\u9664\u9664\u56FE\u4E2D\u4EE5\u5916\u6240\u6709\u6587\u4EF6",id:"\u5220\u9664\u9664\u56FE\u4E2D\u4EE5\u5916\u6240\u6709\u6587\u4EF6",level:2},{value:"\u914D\u7F6Ewebpack",id:"\u914D\u7F6Ewebpack",level:2}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u642D\u5EFAvue\u9879\u76EE",children:"\u642D\u5EFAvue\u9879\u76EE"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"vue create vue-xxx\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5220\u9664\u9664\u56FE\u4E2D\u4EE5\u5916\u6240\u6709\u6587\u4EF6",children:"\u5220\u9664\u9664\u56FE\u4E2D\u4EE5\u5916\u6240\u6709\u6587\u4EF6"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(75024).Z+"",width:"293",height:"283"})}),"\n",(0,l.jsx)(n.h1,{id:"\u5B9E\u73B0\u529F\u80FD",children:"\u5B9E\u73B0\u529F\u80FD"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5B9E\u73B0\u4E00\u4E2A\u7B26\u5408\u6D4F\u89C8\u5668\u89E3\u6790\u89C4\u5219\u7684",(0,l.jsx)(n.code,{children:".js"}),"\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7528\u6807\u51C6\u7684",(0,l.jsx)(n.code,{children:"JS"}),"\u8BED\u6CD5\u5B9E\u73B0",(0,l.jsx)(n.code,{children:"Vue"}),"\u7684\u529F\u80FD"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"\u5EFA\u7ACB\u670D\u52A1\u5E94\u7528",children:"\u5EFA\u7ACB\u670D\u52A1\u5E94\u7528"}),"\n",(0,l.jsxs)(n.p,{children:["\u8BA9\u6587\u4EF6\u53EF\u4EE5",(0,l.jsx)(n.code,{children:"import"}),"\u548C",(0,l.jsx)(n.code,{children:"export default"})]}),"\n",(0,l.jsx)(n.h1,{id:"\u521D\u59CB\u5316packagejson",children:"\u521D\u59CB\u5316package.json"}),"\n",(0,l.jsxs)(n.p,{children:["\u901A\u8FC7",(0,l.jsx)(n.code,{children:"package.json"}),"\u6765\u7BA1\u7406\u4F9D\u8D56\u548C\u7248\u672C\u8FD8\u6709\u542F\u52A8\u547D\u4EE4\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"npm init -y\n"})}),"\n",(0,l.jsx)(n.h1,{id:"\u5B89\u88C5webpack",children:"\u5B89\u88C5webpack"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:"yarn add webpack@4 webpack-cli@3 webpack-dev-server@3\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u914D\u7F6Ewebpack",children:"\u914D\u7F6Ewebpack"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const { resolve } = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\n// \u5BFC\u51FA\u4E00\u4E2A\u5BF9\u8C61\nmodule.exports = {\n  // \u542F\u52A8\u6A21\u5F0F\n  mode: \"development\",\n  // \u62FF\u5230\u5165\u53E3\u6587\u4EF6\n  entry: resolve(__dirname, 'src/main.js'),\n  // \u8F93\u51FA\n  output: {\n    filename: 'main.js',\n    path: resolve(__dirname, 'dist')\n  },\n  // \u7701\u7565\u6389.js \u548C .vue\n  resolve: {\n    extensions: ['.js', '.vue']\n  },\n  // \u5148\u53BBnode_modules\u627E\u5305\uFF0C\u627E\u4E0D\u5230\u53BBmodules\u91CC\u627E\n  resolveLoader: {\n    modules: [\n      'node_modules',\n      resolve(__dirname, './modules')\n    ]\n  },\n  module: {\n    // \u5904\u7406\u76F8\u5173\u6587\u4EF6\n    rules: [{\n      // \u5FFD\u7565\u5927\u5C0F\u5199\n      test: /.vue$/i,\n      // \u4F7F\u7528\u81EA\u5DF1\u5199\u7684 vue-loader\n      loader: 'vue-loader'\n    },\n            {\n              test: /.css$/i,\n              // \u5148\u7ECF\u8FC7css-loader\u5904\u7406\u518D\u7ECF\u8FC7style-lodaer\n              use: ['style-loader', 'css-loader']\n            }\n           ]\n  },\n  plugins: [\n    // \u4F7F\u7528\u5B83\u6765\u5904\u7406HTML\u6A21\u7248\uFF0C\u5E2E\u5FD9\u628Acss\u548Cjs\u653E\u5165html\u4E2D\n    new HtmlWebpackPlugin({\n      template: resolve(__dirname, 'public/index.html')\n    })\n  ]\n}\n"})}),"\n",(0,l.jsx)(n.h1,{id:"\u5B89\u88C5css\u76F8\u5173loader",children:"\u5B89\u88C5css\u76F8\u5173loader"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:" npm i style-loader@2 css-loader@5 -D\n"})}),"\n",(0,l.jsxs)(n.h1,{id:"\u5B89\u88C5html-webpack-plugin",children:["\u5B89\u88C5",(0,l.jsx)(n.code,{children:"html-webpack-plugin"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u628A\u6211\u4EEC\u5904\u7406\u597D\u7684",(0,l.jsx)(n.code,{children:"css"}),"\u548C",(0,l.jsx)(n.code,{children:"js"}),"\u6CE8\u5165\u5230",(0,l.jsx)(n.code,{children:"html"}),"\u6A21\u7248\u4E2D"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:"npm i html-webpack-plugin@4.5 -D\n"})}),"\n",(0,l.jsx)(n.h1,{id:"\u9879\u76EE\u4EE3\u7801",children:"\u9879\u76EE\u4EE3\u7801"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/sumingcheng/From-webpack-to-vue-loader",children:"GitHub - sumingcheng/From-webpack-to-vue-loader: \u5229\u7528HtmlWebpackPlugin\u5B9E\u73B0vue-loader\u7684\u529F\u80FD"})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},75024:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/d8e0d407bc92474974e097f0e74e02da-3d86456245dcba83676680a5d348a06a.png"},50065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var r=s(67294);let l={},c=r.createContext(l);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);