"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["13216"],{45507:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>t,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"Frontend/Node/\u9879\u76EE\u642D\u5EFA","title":"\u5B89\u88C5 Node.js","description":"\u5B89\u88C5 Node.js \u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF1A","source":"@site/docs/Frontend/Node/170.\u9879\u76EE\u642D\u5EFA.md","sourceDirName":"Frontend/Node","slug":"/Frontend/Node/\u9879\u76EE\u642D\u5EFA","permalink":"/docs-hub/Frontend/Node/\u9879\u76EE\u642D\u5EFA","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Node/170.\u9879\u76EE\u642D\u5EFA.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":170,"frontMatter":{},"sidebar":"nodeSidebar","previous":{"title":"Node \u4E0E node-sass \u7248\u672C\u5BF9\u5E94\u5173\u7CFB","permalink":"/docs-hub/Frontend/Node/node\u548Cnode-sass\u7248\u672C"}}'),c=i("85893"),d=i("50065");let r={},l="\u5B89\u88C5 Node.js",t={},o=[{value:"\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6",id:"\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6",level:2},{value:"package.json",id:"packagejson",level:2},{value:"index.html",id:"indexhtml",level:2},{value:".gitignore",id:"gitignore",level:2},{value:".editorconfig",id:"editorconfig",level:2},{value:".babelrc",id:"babelrc",level:2},{value:"static",id:"static",level:2},{value:"src",id:"src",level:2},{value:"src/main.js",id:"srcmainjs",level:3},{value:"config",id:"config",level:2},{value:"router/index.js",id:"routerindexjs",level:2},{value:"App.vue",id:"appvue",level:3}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u5B89\u88C5-nodejs",children:"\u5B89\u88C5 Node.js"})}),"\n",(0,c.jsx)(n.p,{children:"\u5B89\u88C5 Node.js \u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"node -v\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5B89\u88C5 Node.js \u65F6\u4F1A\u81EA\u52A8\u5B89\u88C5 npm\u3002\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B npm \u7248\u672C\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npm -v\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4F7F\u7528 Git \u8FDB\u884C\u4EE3\u7801\u7BA1\u7406\u53EF\u4EE5\u53C2\u8003",(0,c.jsx)(n.a,{href:"https://github.com/ReMuling/Vue_qunar",children:"Git/Vue_qunar"}),"\u3002"]}),"\n",(0,c.jsx)(n.h1,{id:"\u4F7F\u7528\u6A21\u677Fwebpack",children:"\u4F7F\u7528\u6A21\u677F\uFF08Webpack\uFF09"}),"\n",(0,c.jsx)(n.p,{children:"\u5168\u5C40\u5B89\u88C5 Vue CLI \u521D\u59CB\u5316\u5DE5\u5177\uFF0C\u7136\u540E\u4F7F\u7528 Webpack \u6A21\u677F\u521B\u5EFA\u9879\u76EE\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npm install -g @vue/cli-init\nvue init webpack travel\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8FD0\u884C\u4E0A\u8FF0\u547D\u4EE4\u540E\uFF0C\u60A8\u53EF\u4EE5\u5B9A\u4E49\u9879\u76EE\u540D\u79F0\u3001\u4F5C\u8005\u540D\u79F0\u7B49\u4FE1\u606F\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:i(99561).Z+"",width:"1503",height:"234"})}),"\n",(0,c.jsxs)(n.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u9009\u62E9\u662F\u5426\u4F7F\u7528\u9ED8\u8BA4\u7684\u7F16\u8BD1\u65B9\u5F0F\uFF0C\u662F\u5426\u5B89\u88C5 ",(0,c.jsx)(n.code,{children:"Vue-router"}),"\uFF0C\u662F\u5426\u542F\u7528 ",(0,c.jsx)(n.code,{children:"Eslint"})," \u4EE3\u7801\u68C0\u67E5\uFF0C\u662F\u5426\u9700\u8981\u5355\u5143\u6D4B\u8BD5\uFF0C\u662F\u5426\u9700\u8981 ",(0,c.jsx)(n.code,{children:"e2e"})," \u6D4B\u8BD5\uFF0C\u4EE5\u53CA\u9009\u62E9\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"npm"})," \u8FD8\u662F ",(0,c.jsx)(n.code,{children:"yarn"})," \u6765\u5B89\u88C5\u4F9D\u8D56\u5305\u3002\u4EE5\u4E0B\u662F\u6211\u7684\u9009\u62E9\u5185\u5BB9\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:i(11912).Z+"",width:"943",height:"313"})}),"\n",(0,c.jsx)(n.p,{children:"\u7B49\u5F85\u4F9D\u8D56\u5B89\u88C5\u5B8C\u6210\u5E76\u751F\u6210\u76EE\u5F55\u7ED3\u6784\u3002\u5F53\u60A8\u770B\u5230\u4EE5\u4E0B\u63D0\u793A\u65F6\uFF0C\u8BF4\u660E\u5B89\u88C5\u6210\u529F\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-vue",children:"project initialization finished!\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:i(22186).Z+"",width:"1920",height:"1030"})}),"\n",(0,c.jsxs)(n.p,{children:["\u9879\u76EE\u521B\u5EFA\u6210\u529F\u540E\uFF0C\u8BBF\u95EE\u672C\u5730 ",(0,c.jsx)(n.code,{children:"8080"})," \u7AEF\u53E3\u5373\u53EF\u8FD0\u884C\u9879\u76EE\u3002"]}),"\n",(0,c.jsx)(n.h1,{id:"packagejson-\u6587\u4EF6",children:"package.json \u6587\u4EF6"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:i(32543).Z+"",width:"1451",height:"733"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4E3A\u4E86\u7B80\u6D01\u8D77\u89C1\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 ",(0,c.jsx)(n.code,{children:"package.json"})," \u4E2D\u8BBE\u7F6E\u4E00\u4E9B\u7B80\u77ED\u7684\u811A\u672C\u6307\u4EE4\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6",children:"\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6"}),"\n",(0,c.jsxs)(n.p,{children:["\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A ",(0,c.jsx)(n.code,{children:"package.json"})," \u6587\u4EF6\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npm init -y\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u521B\u5EFA\u7684 ",(0,c.jsx)(n.code,{children:"package.json"})," \u6587\u4EF6\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u8FDB\u884C\u6240\u9700\u7684\u914D\u7F6E\u3002\u9664\u4E86\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"npm"})," \u521B\u5EFA\uFF0C",(0,c.jsx)(n.code,{children:"yarn"})," \u4E5F\u53EF\u4EE5\u521B\u5EFA ",(0,c.jsx)(n.code,{children:"package.json"})," \u6587\u4EF6\u3002\u4F46\u5EFA\u8BAE\u5728\u9879\u76EE\u521D\u671F\u9009\u62E9\u4E00\u4E2A\u5305\u7BA1\u7406\u5DE5\u5177\u5E76\u575A\u6301\u4F7F\u7528\uFF0C\u907F\u514D\u4E2D\u9014\u66F4\u6362\u5BFC\u81F4\u7684\u4F9D\u8D56\u95EE\u9898\u3002"]}),"\n",(0,c.jsx)(n.h1,{id:"\u5206\u6790\u521B\u5EFA\u7684\u76EE\u5F55",children:"\u5206\u6790\u521B\u5EFA\u7684\u76EE\u5F55"}),"\n",(0,c.jsx)(n.h2,{id:"packagejson",children:"package.json"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"package.json"})," \u6587\u4EF6\u5728\u4EA7\u54C1\u4E0A\u7EBF\u540E\u4ECD\u7136\u6709\u5176\u4F5C\u7528\uFF0C\u5B83\u4E0D\u4EC5\u5728\u5F00\u53D1\u9636\u6BB5\u4FDD\u5B58\u9879\u76EE\u7684\u4F9D\u8D56\u4FE1\u606F\uFF0C\u8FD8\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u7528\u4E8E\u5B89\u88C5\u548C\u7BA1\u7406\u4F9D\u8D56\u5305\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"indexhtml",children:"index.html"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"index.html"})," \u63D0\u4F9B\u4E86\u4E00\u4E2A\u6302\u8F7D\u70B9\uFF0C\u662F\u5E94\u7528\u7684\u6839\u6302\u8F7D\u70B9\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-vue",children:'<div id="app"></div>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"gitignore",children:".gitignore"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:".gitignore"})," \u6587\u4EF6\u5E2E\u52A9\u6211\u4EEC\u5FFD\u7565\u4E00\u4E9B\u4E0D\u9700\u8981\u4E0A\u4F20\u5230\u7248\u672C\u63A7\u5236\u7684\u6587\u4EF6\uFF0C\u4F8B\u5982 ",(0,c.jsx)(n.code,{children:"node_modules"})," \u76EE\u5F55\u3002\u7531\u4E8E ",(0,c.jsx)(n.code,{children:"node_modules"})," \u5305\u4F53\u79EF\u8F83\u5927\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"npm install"})," \u91CD\u65B0\u751F\u6210\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u4E0A\u4F20\u5230\u4ED3\u5E93\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"editorconfig",children:".editorconfig"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:".editorconfig"})," \u6587\u4EF6\u7528\u4E8E\u914D\u7F6E\u7F16\u8F91\u5668\u7684\u76F8\u5173\u8BBE\u7F6E\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u4F1A\u8986\u76D6\u7F16\u8F91\u5668\u81EA\u8EAB\u7684\u8BBE\u7F6E\uFF0C\u786E\u4FDD\u56E2\u961F\u6210\u5458\u5728\u4E0D\u540C\u7F16\u8F91\u5668\u4E2D\u4FDD\u6301\u4E00\u81F4\u7684\u4EE3\u7801\u98CE\u683C\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"babelrc",children:".babelrc"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:".babelrc"})," \u6587\u4EF6\u7528\u4E8E\u914D\u7F6E Babel \u63D2\u4EF6\uFF0C\u7F16\u8BD1 ",(0,c.jsx)(n.code,{children:"ES6"})," \u8BED\u6CD5\uFF0C\u5C06\u5176\u8F6C\u6362\u4E3A\u6D4F\u89C8\u5668\u80FD\u591F\u7406\u89E3\u7684 ",(0,c.jsx)(n.code,{children:"JavaScript"})," \u4EE3\u7801\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"static",children:"static"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"static"})," \u76EE\u5F55\u7528\u4E8E\u5B58\u653E\u9759\u6001\u6587\u4EF6\uFF0C\u5982\u56FE\u7247\u3001\u5B57\u4F53\u7B49\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u4E0D\u4F1A\u7ECF\u8FC7 Webpack \u5904\u7406\uFF0C\u76F4\u63A5\u5728\u9879\u76EE\u4E2D\u5F15\u7528\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"src",children:"src"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"src"})," \u76EE\u5F55\u662F\u6E90\u4EE3\u7801\u7684\u4E3B\u8981\u5B58\u653E\u4F4D\u7F6E\uFF0C\u5305\u542B\u7EC4\u4EF6\u3001\u8DEF\u7531\u7B49\u6838\u5FC3\u4EE3\u7801\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"srcmainjs",children:"src/main.js"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"import Vue from 'vue';\nimport App from './App';\nimport router from './router';\n\nVue.config.productionTip = false;\n\n/* eslint-disable no-new */\nnew Vue({\n  el: '#app',\n  router,\n  components: { App },\n  template: '<App/>',\n});\n// \u8FD9\u662F\u4E00\u4E2A\u6839\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u5F15\u5165\u4E00\u4E9B\u5B50\u7EC4\u4EF6\u3002\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"main.js"})," \u662F\u5E94\u7528\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u8D1F\u8D23\u521B\u5EFA\u6839 Vue \u5B9E\u4F8B\uFF0C\u5E76\u6302\u8F7D\u5230 ",(0,c.jsx)(n.code,{children:"#app"})," \u5143\u7D20\u4E0A\u3002\u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u5F15\u5165\u5E76\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6\u6216\u63D2\u4EF6\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"config",children:"config"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"config"})," \u76EE\u5F55\u7528\u4E8E\u5B58\u653E\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5305\u62EC\u5F00\u53D1\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\u7684\u4E0D\u540C\u914D\u7F6E\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"routerindexjs",children:"router/index.js"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:i(47651).Z+"",width:"993",height:"438"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"router/index.js"})," \u6587\u4EF6\u914D\u7F6E\u4E86\u5E94\u7528\u7684\u8DEF\u7531\uFF0C\u5B9A\u4E49\u4E86\u4E0D\u540C\u8DEF\u5F84\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u7BA1\u7406\u5E94\u7528\u7684\u5BFC\u822A\u548C\u89C6\u56FE\u5207\u6362\u3002"]}),"\n",(0,c.jsx)(n.h1,{id:"\u5355\u6587\u4EF6\u7EC4\u4EF6",children:"\u5355\u6587\u4EF6\u7EC4\u4EF6"}),"\n",(0,c.jsx)(n.h3,{id:"appvue",children:"App.vue"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-vue",children:"<template>\n  <div id=\"app\">\n    <router-view />\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'App',\n};\n<\/script>\n\n<style>\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n</style>\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u663E\u8457\u7279\u70B9\u662F\u5C06\u6A21\u677F\u3001\u811A\u672C\u548C\u6837\u5F0F\u7EDF\u4E00\u5B9A\u4E49\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u4FBF\u4E8E\u7EC4\u4EF6\u7684\u7EF4\u62A4\u548C\u7BA1\u7406\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:i(58163).Z+"",width:"441",height:"201"})}),"\n",(0,c.jsx)(n.p,{children:"\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u7EC4\u4EF6\u7684\u7ED3\u6784\u66F4\u52A0\u6E05\u6670\uFF0C\u5F00\u53D1\u6548\u7387\u4E5F\u5F97\u5230\u4E86\u63D0\u5347\u3002"}),"\n",(0,c.jsx)(n.h1,{id:"\u4F7F\u7528-git-\u8FDB\u884C\u4EE3\u7801\u7BA1\u7406",children:"\u4F7F\u7528 Git \u8FDB\u884C\u4EE3\u7801\u7BA1\u7406"}),"\n",(0,c.jsx)(n.p,{children:"\u4F7F\u7528 Git \u8FDB\u884C\u7248\u672C\u63A7\u5236\u53EF\u4EE5\u5E2E\u52A9\u60A8\u7BA1\u7406\u4EE3\u7801\u7684\u5386\u53F2\u7248\u672C\uFF0C\u534F\u4F5C\u5F00\u53D1\u66F4\u52A0\u9AD8\u6548\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u7528\u7684 Git \u547D\u4EE4\u793A\u4F8B\uFF1A"}),"\n",(0,c.jsx)(n.p,{children:"\u521D\u59CB\u5316 Git \u4ED3\u5E93\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"git init\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6DFB\u52A0\u6587\u4EF6\u5230\u6682\u5B58\u533A\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"git add .\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u63D0\u4EA4\u66F4\u6539\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'git commit -m "Initial commit"\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"git remote add origin https://github.com/YourUsername/YourRepository.git\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u63A8\u9001\u4EE3\u7801\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"git push -u origin master\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u901A\u8FC7\u5408\u7406\u4F7F\u7528 Git\uFF0C\u53EF\u4EE5\u6709\u6548\u5730\u7BA1\u7406\u9879\u76EE\u7684\u4EE3\u7801\u7248\u672C\uFF0C\u907F\u514D\u56E0\u4EE3\u7801\u51B2\u7A81\u5BFC\u81F4\u7684\u95EE\u9898\u3002"}),"\n",(0,c.jsx)(n.h1,{id:"\u914D\u7F6E-eslint",children:"\u914D\u7F6E ESLint"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9879\u76EE\u4E2D\u914D\u7F6E ESLint \u53EF\u4EE5\u5E2E\u52A9\u60A8\u4FDD\u6301\u4EE3\u7801\u98CE\u683C\u7684\u4E00\u81F4\u6027\uFF0C\u5E76\u53CA\u65F6\u53D1\u73B0\u6F5C\u5728\u7684\u9519\u8BEF\u3002\u4EE5\u4E0B\u662F\u914D\u7F6E ESLint \u7684\u6B65\u9AA4\uFF1A"}),"\n",(0,c.jsx)(n.p,{children:"\u5B89\u88C5 ESLint \u53CA\u76F8\u5173\u63D2\u4EF6\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npm install eslint eslint-plugin-vue --save-dev\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u521D\u59CB\u5316 ESLint \u914D\u7F6E\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npx eslint --init\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6839\u636E\u63D0\u793A\u9009\u62E9\u9002\u5408\u60A8\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u4F8B\u5982\u9009\u62E9 ",(0,c.jsx)(n.code,{children:"Vue"})," \u76F8\u5173\u7684\u89C4\u5219\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u60A8\u53EF\u4EE5\u5728\u7F16\u8F91\u5668\u4E2D\u96C6\u6210 ESLint \u63D2\u4EF6\uFF0C\u5B9E\u65F6\u68C0\u67E5\u4EE3\u7801\u4E2D\u7684\u95EE\u9898\uFF0C\u5E76\u6839\u636E\u63D0\u793A\u8FDB\u884C\u4FEE\u6B63\u3002"}),"\n",(0,c.jsx)(n.h1,{id:"\u4F7F\u7528-vue-router",children:"\u4F7F\u7528 Vue Router"}),"\n",(0,c.jsx)(n.p,{children:"Vue Router \u662F Vue.js \u5B98\u65B9\u7684\u8DEF\u7531\u7BA1\u7406\u5668\uFF0C\u7528\u4E8E\u6784\u5EFA\u5355\u9875\u5E94\u7528\u3002\u4EE5\u4E0B\u662F\u57FA\u672C\u7684\u4F7F\u7528\u6B65\u9AA4\uFF1A"}),"\n",(0,c.jsx)(n.p,{children:"\u5B89\u88C5 Vue Router\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npm install vue-router --save\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"src/router/index.js"})," \u4E2D\u914D\u7F6E\u8DEF\u7531\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"import Vue from 'vue';\nimport Router from 'vue-router';\nimport Home from '@/components/Home.vue';\nimport About from '@/components/About.vue';\n\nVue.use(Router);\n\nexport default new Router({\n  routes: [\n    {\n      path: '/',\n      name: 'Home',\n      component: Home,\n    },\n    {\n      path: '/about',\n      name: 'About',\n      component: About,\n    },\n  ],\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"main.js"})," \u4E2D\u5F15\u5165\u5E76\u4F7F\u7528\u8DEF\u7531\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"import router from './router';\n\nnew Vue({\n  el: '#app',\n  router,\n  components: { App },\n  template: '<App/>',\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"<router-link>"})," \u548C ",(0,c.jsx)(n.code,{children:"<router-view>"})," \u5B9E\u73B0\u5BFC\u822A\u548C\u89C6\u56FE\u5207\u6362\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u901A\u8FC7 Vue Router\uFF0C\u53EF\u4EE5\u8F7B\u677E\u7BA1\u7406\u5E94\u7528\u7684\u4E0D\u540C\u9875\u9762\u548C\u7EC4\u4EF6\uFF0C\u5B9E\u73B0\u6D41\u7545\u7684\u7528\u6237\u4F53\u9A8C\u3002"}),"\n",(0,c.jsx)(n.h1,{id:"\u53C2\u8003\u94FE\u63A5",children:"\u53C2\u8003\u94FE\u63A5"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://nodejs.org/en/download/releases/",children:"Node.js \u5B98\u65B9\u4E0B\u8F7D\u9875\u9762"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},47651:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/07fe910961f63b6d6ff0c5f84817f5e2-5e5acdea26edaf99275682595f576e48.png"},11912:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/2cfca4ae4c07f8fe7c11041cc286aaf3-14029fbdc99efdcc1ae7e09b51c647d1.png"},22186:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/4c17be96c2d89c75d8da0458e424c6aa-22418ea30ad7b7b3954e28b8ae22aa9f.png"},32543:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/613ab63d0add8d5e99173cf587be9e7a-cc023df508bf9b59ca362197c8c7618a.png"},99561:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/9250938fcbebdc8ac009734f3e78a79e-7c26c3d61686f160ecd06d72f4017761.png"},58163:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/fad79ad0c762537dfde0b5634be7b93f-592f7a7c527047acb6e4263e87e182ab.png"},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var s=i(67294);let c={},d=s.createContext(c);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);