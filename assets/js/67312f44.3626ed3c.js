"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[50290],{73592:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"Frontend/Vue/\u6761\u4ef6\u6e32\u67d3\u548c\u5217\u8868\u6e32\u67d3/\u4eceWebpack\u5230v-show-v-if","title":"\u642d\u5efavue\u9879\u76ee","description":"\u5220\u9664\u9664\u56fe\u4e2d\u4ee5\u5916\u6240\u6709\u6587\u4ef6","source":"@site/docs/Frontend/Vue/\u6761\u4ef6\u6e32\u67d3\u548c\u5217\u8868\u6e32\u67d3/10.\u4eceWebpack\u5230v-show-v-if.md","sourceDirName":"Frontend/Vue/\u6761\u4ef6\u6e32\u67d3\u548c\u5217\u8868\u6e32\u67d3","slug":"/Frontend/Vue/\u6761\u4ef6\u6e32\u67d3\u548c\u5217\u8868\u6e32\u67d3/\u4eceWebpack\u5230v-show-v-if","permalink":"/docs-hub/Frontend/Vue/\u6761\u4ef6\u6e32\u67d3\u548c\u5217\u8868\u6e32\u67d3/\u4eceWebpack\u5230v-show-v-if","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/\u6761\u4ef6\u6e32\u67d3\u548c\u5217\u8868\u6e32\u67d3/10.\u4eceWebpack\u5230v-show-v-if.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":10,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"\u6761\u4ef6\u6e32\u67d3\u548c\u5217\u8868\u6e32\u67d3","permalink":"/docs-hub/category/\u6761\u4ef6\u6e32\u67d3\u548c\u5217\u8868\u6e32\u67d3"},"next":{"title":"v-if \u548c v-show \u6bd4\u8f83","permalink":"/docs-hub/Frontend/Vue/\u6761\u4ef6\u6e32\u67d3\u548c\u5217\u8868\u6e32\u67d3/v-if-v-show"}}');var r=s(74848),d=s(28453);const l={},i="\u642d\u5efavue\u9879\u76ee",o={},a=[{value:"\u5220\u9664\u9664\u56fe\u4e2d\u4ee5\u5916\u6240\u6709\u6587\u4ef6",id:"\u5220\u9664\u9664\u56fe\u4e2d\u4ee5\u5916\u6240\u6709\u6587\u4ef6",level:2},{value:"\u914d\u7f6ewebpack",id:"\u914d\u7f6ewebpack",level:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u642d\u5efavue\u9879\u76ee",children:"\u642d\u5efavue\u9879\u76ee"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"vue create vue-xxx\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5220\u9664\u9664\u56fe\u4e2d\u4ee5\u5916\u6240\u6709\u6587\u4ef6",children:"\u5220\u9664\u9664\u56fe\u4e2d\u4ee5\u5916\u6240\u6709\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(4512).A+"",width:"293",height:"283"})}),"\n",(0,r.jsx)(n.h1,{id:"\u5b9e\u73b0\u529f\u80fd",children:"\u5b9e\u73b0\u529f\u80fd"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5b9e\u73b0\u4e00\u4e2a\u7b26\u5408\u6d4f\u89c8\u5668\u89e3\u6790\u89c4\u5219\u7684",(0,r.jsx)(n.code,{children:".js"}),"\u6587\u4ef6"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7528\u6807\u51c6\u7684",(0,r.jsx)(n.code,{children:"JS"}),"\u8bed\u6cd5\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"Vue"}),"\u7684\u529f\u80fd"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u5efa\u7acb\u670d\u52a1\u5e94\u7528",children:"\u5efa\u7acb\u670d\u52a1\u5e94\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["\u8ba9\u6587\u4ef6\u53ef\u4ee5",(0,r.jsx)(n.code,{children:"import"}),"\u548c",(0,r.jsx)(n.code,{children:"export default"})]}),"\n",(0,r.jsx)(n.h1,{id:"\u521d\u59cb\u5316packagejson",children:"\u521d\u59cb\u5316package.json"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7",(0,r.jsx)(n.code,{children:"package.json"}),"\u6765\u7ba1\u7406\u4f9d\u8d56\u548c\u7248\u672c\u8fd8\u6709\u542f\u52a8\u547d\u4ee4\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"npm init -y\n"})}),"\n",(0,r.jsx)(n.h1,{id:"\u5b89\u88c5webpack",children:"\u5b89\u88c5webpack"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"yarn add webpack@4 webpack-cli@3 webpack-dev-server@3\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6ewebpack",children:"\u914d\u7f6ewebpack"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { resolve } = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\n// \u5bfc\u51fa\u4e00\u4e2a\u5bf9\u8c61\nmodule.exports = {\n  // \u542f\u52a8\u6a21\u5f0f\n  mode: \"development\",\n  // \u62ff\u5230\u5165\u53e3\u6587\u4ef6\n  entry: resolve(__dirname, 'src/main.js'),\n  // \u8f93\u51fa\n  output: {\n    filename: 'main.js',\n    path: resolve(__dirname, 'dist')\n  },\n  // \u7701\u7565\u6389.js \u548c .vue\n  resolve: {\n    extensions: ['.js', '.vue']\n  },\n  // \u5148\u53bbnode_modules\u627e\u5305\uff0c\u627e\u4e0d\u5230\u53bbmodules\u91cc\u627e\n  resolveLoader: {\n    modules: [\n      'node_modules',\n      resolve(__dirname, './modules')\n    ]\n  },\n  module: {\n    // \u5904\u7406\u76f8\u5173\u6587\u4ef6\n    rules: [{\n      // \u5ffd\u7565\u5927\u5c0f\u5199\n      test: /.vue$/i,\n      // \u4f7f\u7528\u81ea\u5df1\u5199\u7684 vue-loader\n      loader: 'vue-loader'\n    },\n            {\n              test: /.css$/i,\n              // \u5148\u7ecf\u8fc7css-loader\u5904\u7406\u518d\u7ecf\u8fc7style-lodaer\n              use: ['style-loader', 'css-loader']\n            }\n           ]\n  },\n  plugins: [\n    // \u4f7f\u7528\u5b83\u6765\u5904\u7406HTML\u6a21\u7248\uff0c\u5e2e\u5fd9\u628acss\u548cjs\u653e\u5165html\u4e2d\n    new HtmlWebpackPlugin({\n      template: resolve(__dirname, 'public/index.html')\n    })\n  ]\n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"\u5b89\u88c5css\u76f8\u5173loader",children:"\u5b89\u88c5css\u76f8\u5173loader"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:" npm i style-loader@2 css-loader@5 -D\n"})}),"\n",(0,r.jsxs)(n.h1,{id:"\u5b89\u88c5html-webpack-plugin",children:["\u5b89\u88c5",(0,r.jsx)(n.code,{children:"html-webpack-plugin"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u628a\u6211\u4eec\u5904\u7406\u597d\u7684",(0,r.jsx)(n.code,{children:"css"}),"\u548c",(0,r.jsx)(n.code,{children:"js"}),"\u6ce8\u5165\u5230",(0,r.jsx)(n.code,{children:"html"}),"\u6a21\u7248\u4e2d"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"npm i html-webpack-plugin@4.5 -D\n"})}),"\n",(0,r.jsx)(n.h1,{id:"\u9879\u76ee\u4ee3\u7801",children:"\u9879\u76ee\u4ee3\u7801"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sumingcheng/From-webpack-to-vue-loader",children:"GitHub - sumingcheng/From-webpack-to-vue-loader: \u5229\u7528HtmlWebpackPlugin\u5b9e\u73b0vue-loader\u7684\u529f\u80fd"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},4512:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/d8e0d407bc92474974e097f0e74e02da-3d86456245dcba83676680a5d348a06a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var c=s(96540);const r={},d=c.createContext(r);function l(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);