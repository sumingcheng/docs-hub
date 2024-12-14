"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["47676"],{16291:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>r,metadata:()=>c,assets:()=>h,toc:()=>t,contentTitle:()=>l});var c=JSON.parse('{"id":"Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/\u63D2\u503C-\u7F16\u8BD1-\u5185\u7F6E\u6307\u4EE4","title":"\u63D2\u503C\u8868\u8FBE\u5F0F-\u5185\u7F6E\u5236\u5B9A","description":"\u5728\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u8BA4\u4E3A\u7684\u6A21\u7248\u8BED\u6CD5\u4EC5\u4EC5\u662F\u5305\u542B\u5728 template \u91CC\u9762\u7684\u5185\u5BB9\uFF0C\u5B9E\u9645\u4E0A\u5B83\u8FD8\u5305\u542B\u4E86 Vue \u7684\u7279\u6027\uFF0C\u5982\u8868\u8FBE\u5F0F\u3001\u6307\u4EE4\u548C\u5C5E\u6027\u7B49\u3002Vue \u7684\u6A21\u7248\u57FA\u4E8E HTML\uFF0C\u8FD9\u610F\u5473\u7740\u6A21\u677F\u4E2D\u76F4\u63A5\u7F16\u5199\u7684 HTML \u4EE3\u7801\u80FD\u591F\u88AB\u6D4F\u89C8\u5668\u7684 HTML \u89E3\u6790\u5668\u6B63\u786E\u89E3\u6790\u3002\u7136\u800C\uFF0C\u6A21\u7248\u4E2D\u7684\u6307\u4EE4\u548C\u8868\u8FBE\u5F0F\u9700\u8981 Vue \u63D0\u4F9B\u7684\u6A21\u677F\u7F16\u8BD1\u7CFB\u7EDF\u6765\u5904\u7406\u3002","source":"@site/docs/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/30.\u63D2\u503C-\u7F16\u8BD1-\u5185\u7F6E\u6307\u4EE4.md","sourceDirName":"Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8","slug":"/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/\u63D2\u503C-\u7F16\u8BD1-\u5185\u7F6E\u6307\u4EE4","permalink":"/docs-hub/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/\u63D2\u503C-\u7F16\u8BD1-\u5185\u7F6E\u6307\u4EE4","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/30.\u63D2\u503C-\u7F16\u8BD1-\u5185\u7F6E\u6307\u4EE4.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":30,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"Vue \u57FA\u7840\u5165\u95E8","permalink":"/docs-hub/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/\u57FA\u672C\u7528\u6CD5"},"next":{"title":"mustache-Vue\u7F16\u8BD1","permalink":"/docs-hub/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/Mustache-Vue\u7F16\u8BD1-\u5185\u7F6E\u6307\u4EE4"}}'),d=s("85893"),i=s("50065");let r={},l="\u63D2\u503C\u8868\u8FBE\u5F0F-\u5185\u7F6E\u5236\u5B9A",h={},t=[{value:"v-once",id:"v-once",level:2},{value:"v-html",id:"v-html",level:2},{value:"\u4EC0\u4E48\u662F XSS \u653B\u51FB?",id:"\u4EC0\u4E48\u662F-xss-\u653B\u51FB",level:2},{value:"\u88AB\u5229\u7528\u7684 innerHTML",id:"\u88AB\u5229\u7528\u7684-innerhtml",level:2}];function o(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u63D2\u503C\u8868\u8FBE\u5F0F-\u5185\u7F6E\u5236\u5B9A",children:"\u63D2\u503C\u8868\u8FBE\u5F0F-\u5185\u7F6E\u5236\u5B9A"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u8BA4\u4E3A\u7684\u6A21\u7248\u8BED\u6CD5\u4EC5\u4EC5\u662F\u5305\u542B\u5728 ",(0,d.jsx)(n.code,{children:"template"})," \u91CC\u9762\u7684\u5185\u5BB9\uFF0C\u5B9E\u9645\u4E0A\u5B83\u8FD8\u5305\u542B\u4E86 ",(0,d.jsx)(n.code,{children:"Vue"})," \u7684\u7279\u6027\uFF0C\u5982\u8868\u8FBE\u5F0F\u3001\u6307\u4EE4\u548C\u5C5E\u6027\u7B49\u3002",(0,d.jsx)(n.code,{children:"Vue"})," \u7684\u6A21\u7248\u57FA\u4E8E ",(0,d.jsx)(n.code,{children:"HTML"}),"\uFF0C\u8FD9\u610F\u5473\u7740\u6A21\u677F\u4E2D\u76F4\u63A5\u7F16\u5199\u7684 ",(0,d.jsx)(n.code,{children:"HTML"})," \u4EE3\u7801\u80FD\u591F\u88AB\u6D4F\u89C8\u5668\u7684 ",(0,d.jsx)(n.code,{children:"HTML"})," \u89E3\u6790\u5668\u6B63\u786E\u89E3\u6790\u3002\u7136\u800C\uFF0C\u6A21\u7248\u4E2D\u7684\u6307\u4EE4\u548C\u8868\u8FBE\u5F0F\u9700\u8981 ",(0,d.jsx)(n.code,{children:"Vue"})," \u63D0\u4F9B\u7684\u6A21\u677F\u7F16\u8BD1\u7CFB\u7EDF\u6765\u5904\u7406\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5F00\u53D1\u8005\u5728\u7F16\u5199 ",(0,d.jsx)(n.code,{children:"template"})," \u5185\u5BB9\u65F6\uFF0C",(0,d.jsx)(n.code,{children:"Vue"})," \u4F1A\u5C06\u5176\u89E3\u6790\u4E3A ",(0,d.jsx)(n.code,{children:"HTML"})," \u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u8F6C\u6362\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\u3002\u901A\u8FC7\u904D\u5386 ",(0,d.jsx)(n.code,{children:"AST"}),"\uFF0C",(0,d.jsx)(n.code,{children:"Vue"})," \u5C06\u8868\u8FBE\u5F0F\u3001\u5C5E\u6027\u548C\u6307\u4EE4\u8F6C\u6362\u4E3A\u865A\u62DF DOM \u6811\uFF0C\u6700\u7EC8\u751F\u6210\u771F\u5B9E\u7684 DOM \u5E76\u6E32\u67D3\u5230\u9875\u9762\u4E0A\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'// \u7B80\u5355\u51FD\u6570\nfunction square(n) {\n    return n * n;\n}\n\n// \u8F6C\u6362\u540E\u7684AST\n{\n   type: "FunctionDeclaration",\n   id: {\n       type: "Identifier",\n       name: "square"\n   },\n   params: [\n      {\n           type: "Identifier",\n           name: "n"\n      }\n   ],\n   // \u5176\u4ED6\u5C5E\u6027\u7701\u7565\n}\n'})}),"\n",(0,d.jsx)(n.h1,{id:"\u4E3A\u4EC0\u4E48\u8981\u6709\u865A\u62DF-dom",children:"\u4E3A\u4EC0\u4E48\u8981\u6709\u865A\u62DF DOM\uFF1F"}),"\n",(0,d.jsxs)(n.p,{children:["\u865A\u62DF DOM \u7684\u5F15\u5165\u4E3B\u8981\u662F\u4E3A\u4E86\u4F18\u5316\u6027\u80FD\u3002\u5F53\u76F4\u63A5\u64CD\u4F5C\u771F\u5B9E DOM \u65F6\uFF0C\u6BCF\u4E00\u6B21\u7684\u4FEE\u6539\u90FD\u53EF\u80FD\u5BFC\u81F4\u6D4F\u89C8\u5668\u7684\u91CD\u7ED8\u548C\u91CD\u6392\uFF0C\u5F71\u54CD\u6027\u80FD\u3002\u901A\u8FC7\u5F15\u5165\u865A\u62DF DOM\uFF0C",(0,d.jsx)(n.code,{children:"Vue"})," \u53EF\u4EE5\u5728\u5185\u5B58\u4E2D\u9AD8\u6548\u5730\u5BF9\u6BD4\u65B0\u65E7\u865A\u62DF DOM \u6811\u7684\u5DEE\u5F02\uFF0C\u4EC5\u5C06\u5FC5\u8981\u7684\u90E8\u5206\u66F4\u65B0\u5230\u771F\u5B9E DOM\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\u64CD\u4F5C\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"<span>123</span>;\nspan.innerText = 123;\n\n// span.innerText \u7684\u76F4\u63A5\u4FEE\u6539\u4F1A\u5F71\u54CD DOM \u8282\u70B9\u7684\u53D8\u5316\n// \u800C\u4F7F\u7528\u865A\u62DF DOM \u540E\uFF0CVue \u53EF\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u66F4\u65B0\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5B9E\u9645\u4E0A\uFF0C\u7F51\u9875\u4E2D\u5927\u591A\u6570\u7684\u53D8\u5316\u672C\u8D28\u4E0A\u90FD\u662F\u6570\u636E\u7684\u53D8\u5316\u3002",(0,d.jsx)(n.code,{children:"Vue"})," \u7684\u6838\u5FC3\u601D\u60F3\u662F\u201C\u6570\u636E\u9A71\u52A8\u201D\uFF0C\u5373\u901A\u8FC7\u6570\u636E\u7684\u53D8\u5316\u6765\u9A71\u52A8\u89C6\u56FE\u7684\u66F4\u65B0\u3002\u8FD9\u79CD\u8BBE\u8BA1\u7406\u5FF5\u4F7F\u5F97 ",(0,d.jsx)(n.code,{children:"Vue"})," \u80FD\u591F\u9AD8\u6548\u5730\u7BA1\u7406\u548C\u66F4\u65B0\u754C\u9762\u3002"]}),"\n",(0,d.jsx)(n.h1,{id:"\u63D2\u503C\u8868\u8FBE\u5F0F",children:"\u63D2\u503C\u8868\u8FBE\u5F0F"}),"\n",(0,d.jsxs)(n.p,{children:["\u63D2\u503C\u8868\u8FBE\u5F0F\u5141\u8BB8\u6211\u4EEC\u5728\u6A21\u677F\u4E2D\u52A8\u6001\u5730\u663E\u793A\u6570\u636E\u3002",(0,d.jsx)(n.code,{children:"Vue"})," \u4F7F\u7528\u53CC\u82B1\u62EC\u53F7 ",(0,d.jsx)(n.code,{children:"{{ }}"})," \u6765\u7ED1\u5B9A\u6570\u636E\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"const App = {\n  data() {\n    return {\n      title: 'This is my title',\n    };\n  },\n  template: `\n        <div>\n            <h1 class=\"title\">\n            {{ title }}\n            </h1>\n        </div>\n    `,\n};\nVue.createApp(App).mount('#app');\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0C",(0,d.jsx)(n.code,{children:"{{ title }}"})," \u4F1A\u88AB\u66FF\u6362\u4E3A ",(0,d.jsx)(n.code,{children:"data"})," \u4E2D\u5B9A\u4E49\u7684 ",(0,d.jsx)(n.code,{children:"title"})," \u7684\u503C\u3002\u5F53 ",(0,d.jsx)(n.code,{children:"title"})," \u7684\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u89C6\u56FE\u4F1A\u81EA\u52A8\u66F4\u65B0\u4EE5\u53CD\u6620\u65B0\u7684\u503C\u3002"]}),"\n",(0,d.jsx)(n.h1,{id:"mustache\u516B\u5B57\u80E1",children:"Mustache\uFF08\u516B\u5B57\u80E1\uFF09"}),"\n",(0,d.jsxs)(n.p,{children:["\u63D2\u503C\u8868\u8FBE\u5F0F\u7684\u7531\u6765\u53EF\u4EE5\u8FFD\u6EAF\u5230 Mustache \u6A21\u677F\u5F15\u64CE\u3002Mustache \u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"\\{{ \\}}"})," \u6765\u8868\u793A\u6A21\u677F\u4E2D\u7684\u53D8\u91CF\uFF0C\u8FD9\u79CD\u8BED\u6CD5\u88AB ",(0,d.jsx)(n.code,{children:"Vue"})," \u91C7\u7EB3\u5E76\u52A0\u4EE5\u6269\u5C55\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.a,{href:"https://github.com/janl/mustache.js",children:["GitHub - janl/mustache.js: Minimal templating with ",(0,d.jsx)(n.code,{children:"\\{{mustaches\\}}"})," in JavaScript"]})}),"\n",(0,d.jsx)(n.h1,{id:"\u6570\u636E\u7ED1\u5B9A\u7684\u7ED1\u5B9A\u7684\u662F\u4EC0\u4E48",children:"\u6570\u636E\u7ED1\u5B9A\u7684\u7ED1\u5B9A\u7684\u662F\u4EC0\u4E48\uFF1F"}),"\n",(0,d.jsxs)(n.p,{children:["\u6570\u636E\u7ED1\u5B9A\u662F ",(0,d.jsx)(n.code,{children:"Vue"})," \u7684\u6838\u5FC3\u7279\u6027\u4E4B\u4E00\uFF0C\u5B83\u8D1F\u8D23\u5C06\u6570\u636E\u6A21\u578B\u4E0E\u89C6\u56FE\u5C42\u8FDE\u63A5\u8D77\u6765\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u7ED1\u5B9A\u7684\u5185\u5BB9\u4E3B\u8981\u5305\u62EC\uFF1A"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"App.data"})," \u4E2D\u7684\u6570\u636E"]}),"\uFF1A\u8FD9\u662F\u7EC4\u4EF6\u5185\u90E8\u7684\u6570\u636E\uFF0C\u76F4\u63A5\u7ED1\u5B9A\u5230\u6A21\u677F\u4E2D\u7684\u63D2\u503C\u8868\u8FBE\u5F0F\u6216\u5C5E\u6027\u4E0A\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u7236\u7EC4\u4EF6\u4F20\u9012\u8FDB\u6765\u7684\u5C5E\u6027\u503C"}),"\uFF1A\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"props"}),"\uFF0C\u7236\u7EC4\u4EF6\u53EF\u4EE5\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u3002\u8FD9\u79CD\u65B9\u5F0F\u4F7F\u5F97\u7EC4\u4EF6\u4E4B\u95F4\u80FD\u591F\u9AD8\u6548\u5730\u5171\u4EAB\u548C\u4F20\u9012\u6570\u636E\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u7EC4\u4EF6\u7684\u6D41\u7A0B\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u5B9A\u4E49\u7236\u7EC4\u4EF6"}),"\uFF1A\u7236\u7EC4\u4EF6\u4E2D\u5305\u542B\u5B50\u7EC4\u4EF6\uFF0C\u5E76\u901A\u8FC7\u5C5E\u6027\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u5B9A\u4E49\u5B50\u7EC4\u4EF6"}),"\uFF1A\u5B50\u7EC4\u4EF6\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"props"})," \u63A5\u6536\u6765\u81EA\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u5728\u7236\u7EC4\u4EF6\u4E2D\u58F0\u660E\u5B50\u7EC4\u4EF6"}),"\uFF1A\u5728\u7236\u7EC4\u4EF6\u7684\u6A21\u677F\u4E2D\u4F7F\u7528\u5B50\u7EC4\u4EF6\uFF0C\u5E76\u7ED1\u5B9A\u76F8\u5E94\u7684\u5C5E\u6027\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h1,{id:"directive-\u6307\u4EE4",children:"directive \u6307\u4EE4"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Vue"})," \u63D0\u4F9B\u4E86\u5927\u91CF\u7684\u5185\u7F6E\u6307\u4EE4\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"v-"})," \u524D\u7F00\u6765\u4F7F\u7528\u8FD9\u4E9B\u6307\u4EE4\u3002\u6B64\u5916\uFF0C\u5F00\u53D1\u8005\u4E5F\u53EF\u4EE5\u6269\u5C55\u81EA\u5B9A\u4E49\u6307\u4EE4\uFF0C\u4F46\u9700\u8981\u9075\u5FAA ",(0,d.jsx)(n.code,{children:"v-"})," \u547D\u540D\u89C4\u8303\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"v-once",children:"v-once"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"v-once"})," \u6307\u4EE4\u7528\u4E8E\u4E00\u6B21\u6027\u6E32\u67D3\u5143\u7D20\u6216\u7EC4\u4EF6\u3002\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"v-once"})," \u7684\u5143\u7D20\u53CA\u5176\u6240\u6709\u5B50\u8282\u70B9\u53EA\u4F1A\u6E32\u67D3\u4E00\u6B21\uFF0C\u4E4B\u540E\u5373\u4F7F\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u4E5F\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u8FD9\u5BF9\u4E8E\u9759\u6001\u5185\u5BB9\u7684\u6E32\u67D3\u53EF\u4EE5\u63D0\u5347\u6027\u80FD\u3002"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsxs)(n.strong,{children:["\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"v-once"})," \u65F6\uFF0C\uFFFD\uFFFD \u4F1A\u5F71\u54CD\u5176\u5185\u90E8\u7684\u5B50\u5143\u7D20\uFF0C\u4F7F\u5185\u90E8\u7684\u6307\u4EE4\u4EC5\u6267\u884C\u4E00\u6B21\u3002"]})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsxs)(n.strong,{children:["\u89C6\u56FE\u4E2D\uFF0C",(0,d.jsx)(n.code,{children:"Vue"})," \u6307\u5B9A\u7684\u63D2\u503C\u8868\u8FBE\u5F0F\u7684\u6570\u636E\u53D8\u91CF\u5FC5\u987B\u5728\u5B9E\u4F8B\u4E0A\u58F0\u660E\u3002"]})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v-html",children:"v-html"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"v-html"})," \u6307\u4EE4\u7528\u4E8E\u5C06\u539F\u59CB\u7684 HTML \u5B57\u7B26\u4E32\u63D2\u5165\u5230 DOM \u4E2D\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C",(0,d.jsx)(n.code,{children:"v-html"})," \u4E0D\u4F1A\u89E3\u6790\u63D2\u503C\u8868\u8FBE\u5F0F\u4E2D\u7684 HTML\uFF0C\u800C\u662F\u5C06\u5176\u4F5C\u4E3A\u539F\u59CB HTML \u63D2\u5165\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"const App = {\n  data() {\n    return {\n      title: 'This is my TITLE',\n    };\n  },\n  template: `\n    <div>\n        {{ '<h1>' + title + '</h1>' }}\n    </div>  \n    `,\n};\n\nVue.createApp(App).mount('#app');\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u7ED3\u679C"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(97695).Z+"",width:"368",height:"207"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u63D2\u503C\u8868\u8FBE\u5F0F ",(0,d.jsx)(n.code,{children:"{{ '<h1>' + title + '</h1>' }}"})," \u4F1A\u89E3\u6790\u4E3A ",(0,d.jsx)(n.code,{children:"HTML"}),"\uFF0C\u56E0\u4E3A\u63D2\u503C\u8868\u8FBE\u5F0F\u662F\u672A\u7ECF\u52A0\u5DE5\u7684 ",(0,d.jsx)(n.code,{children:"rawHTML"}),"\uFF0C\u6CA1\u6709\u5BF9 ",(0,d.jsx)(n.code,{children:"DOM"})," \u8FDB\u884C\u64CD\u4F5C\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u7C7B\u4F3C\u4E8E\u76F8\u673A\u7684 ",(0,d.jsx)(n.code,{children:"RAW"})," \u6587\u4EF6\uFF0C\u8FD9\u4E9B ",(0,d.jsx)(n.code,{children:"rawHTML"})," \u662F\u672A\u7ECF\u5904\u7406\u7684 ",(0,d.jsx)(n.code,{children:"HTML"})," \u5185\u5BB9\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u4E0D\u8981\u5C1D\u8BD5\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"v-html"})," \u6765\u6E32\u67D3\u5B50\u6A21\u677F\uFF0C\u56E0\u4E3A ",(0,d.jsx)(n.code,{children:"Vue"})," \u7684\u7F16\u8BD1\u7CFB\u7EDF\u9700\u8981\u5904\u7406\u6A21\u677F\u5185\u5BB9\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"const App = {\n  data() {\n    return {\n      title: '<h1>This is my TITLE</h1>',\n    };\n  },\n  template: `\n        <div v-html=\"title\"></div>\n    `,\n};\n// \u4E0D\u8981\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u53BB\u505A\u5B50\u6A21\u677F\nVue.createApp(App).mount('#app');\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Vue"})," \u5E95\u5C42\u6709\u81EA\u5DF1\u7684\u4E00 \uFFFD\uFFFD \u7F16\u8BD1\u7CFB\u7EDF\uFF0C\u6A21\u677F\u5185\u5BB9\u5FC5\u987B\u7ECF\u8FC7 ",(0,d.jsx)(n.code,{children:"Vue"})," \u7684\u7F16\u8BD1\u7CFB\u7EDF\u624D\u80FD\u6B63\u786E\u6E32\u67D3\u4E3A\u771F\u5B9E\u7684 ",(0,d.jsx)(n.code,{children:"DOM"}),"\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5B57\u7B26\u4E32 \u2192 ",(0,d.jsx)(n.code,{children:"AST"})," \u6811 \u2192 \u865A\u62DF ",(0,d.jsx)(n.code,{children:"DOM"})," \u2192 \u771F\u5B9E ",(0,d.jsx)(n.code,{children:"DOM"})," \u2192 \u6E32\u67D3\u5230 ",(0,d.jsx)(n.code,{children:"#app"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5E94\u9075\u5FAA ",(0,d.jsx)(n.code,{children:"Vue"})," \u7684\u89C4\u5219\uFF0C\u5C06\u5B50\u6A21\u677F\u653E\u5165\u5B50\u7EC4\u4EF6\u4E2D\uFF0C\u4EE5\u5B9E\u73B0\u6A21\u677F\u7684\u590D\u7528\u548C\u7EC4\u5408\u7684\u5F3A\u5927\u529F\u80FD\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h1,{id:"v-html-\u4F1A\u5F15\u53D1\u7684\u95EE\u9898",children:"v-html \u4F1A\u5F15\u53D1\u7684\u95EE\u9898"}),"\n",(0,d.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"v-html"})," \u9700\u8981\u8C28\u614E\uFF0C\u7279\u522B\u662F\u5F53\u63D2\u5165\u7684\u5185\u5BB9\u6765\u81EA\u7528\u6237\u8F93\u5165\u65F6\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u5BFC\u81F4 ",(0,d.jsx)(n.code,{children:"XSS"})," \u653B\u51FB\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4EC0\u4E48\u662F-xss-\u653B\u51FB",children:"\u4EC0\u4E48\u662F XSS \u653B\u51FB?"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"XSS"}),"\uFF08\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\uFF09\u901A\u5E38\u6307\u653B\u51FB\u8005\u5229\u7528\u7F51\u9875\u5F00\u53D1\u4E2D\u7684\u6F0F\u6D1E\uFF0C\u901A\u8FC7\u6CE8\u5165\u6076\u610F\u811A\u672C\u4EE3\u7801\u5230\u7F51\u9875\u4E2D\uFF0C\u4F7F\u7528\u6237\u5728\u6D4F\u89C8\u5668\u4E2D\u6267\u884C\u8FD9\u4E9B\u6076\u610F\u811A\u672C\u3002\u8FD9\u4E9B\u811A\u672C\u901A\u5E38\u662F ",(0,d.jsx)(n.code,{children:"JavaScript"}),"\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u662F ",(0,d.jsx)(n.code,{children:"Java"}),"\u3001",(0,d.jsx)(n.code,{children:"VBScript"}),"\u3001",(0,d.jsx)(n.code,{children:"ActiveX"}),"\u3001",(0,d.jsx)(n.code,{children:"Flash"}),"\uFF0C\u751A\u81F3\u662F\u666E\u901A\u7684 ",(0,d.jsx)(n.code,{children:"HTML"}),"\u3002\u653B\u51FB\u6210\u529F\u540E\uFF0C\u653B\u51FB\u8005\u53EF\u80FD\u7A83\u53D6\u7528\u6237\u7684\u654F\u611F\u4FE1\u606F\uFF0C\u5982\u4F1A\u8BDD ",(0,d.jsx)(n.code,{children:"cookie"}),"\uFF0C\u6216\u8005\u6267\u884C\u4E00\u4E9B\u672A\u6388\u6743\u7684\u64CD\u4F5C\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u88AB\u5229\u7528\u7684-innerhtml",children:"\u88AB\u5229\u7528\u7684 innerHTML"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"v-html"})," \u52A8\u6001\u6E32\u67D3 ",(0,d.jsx)(n.code,{children:"HTML"})," \u7684\u5B9E\u73B0\u673A\u5236"]}),"\uFF1A",(0,d.jsx)(n.code,{children:"v-html"})," \u57FA\u672C\u4E0A\u662F\u901A\u8FC7\u8BBE\u7F6E\u5143\u7D20\u7684 ",(0,d.jsx)(n.code,{children:"innerHTML"})," \u6765\u5B9E\u73B0\u7684\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"innerHTML"})," \u5BB9\u6613\u5BFC\u81F4 ",(0,d.jsx)(n.code,{children:"XSS"})," \u653B\u51FB"]}),"\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"// \u63D2\u5165\u5230 DIV \u4E2D\uFF0C\u867D\u7136 HTML5 \u5BF9\u67D0\u4E9B\u6807\u7B7E\u6709\u4E25\u683C\u9650\u5236\nvar text = '<script>alert(123)<\/script>';\ndocument.getElementById('app').innerHTML = text;\n\n// \u4F46 img \u6807\u7B7E\u53EF\u4EE5\u6267\u884C onerror \u4E8B\u4EF6\nvar text = '<img src=\"invalid.jpg\" onerror=\"alert(123)\">';\ndocument.getElementById('app').innerHTML = text;\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6F5C\u5728\u98CE\u9669"}),"\uFF1A\u653B\u51FB\u8005\u53EF\u4EE5\u5229\u7528\u4E00\u4E9B\u6807\u7B7E\u548C\u4E8B\u4EF6\u6765\u6CE8\u5165\u548C\u6267\u884C\u6076\u610F\u811A\u672C\uFF0C\u56E0\u6B64\u5728\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"v-html"})," \u65F6\u5FC5\u987B\u683C\u5916\u5C0F\u5FC3\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u5B89\u5168\u5EFA\u8BAE"}),"\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4E0D\u8981\u5C06\u7528\u6237\u63D0\u4F9B\u7684\u5185\u5BB9\u76F4\u63A5\u4F5C\u4E3A ",(0,d.jsx)(n.code,{children:"v-html"})," \u7684\u63D2\u503C\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u5BF9\u7528\u6237\u8F93\u5165\u7684\u5185\u5BB9\u8FDB\u884C\u4E25\u683C\u7684\u8FC7\u6EE4\u548C\u6D88\u6BD2\uFF0C\u9632\u6B62\u6076\u610F\u4EE3\u7801\u7684\u6CE8\u5165\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u5C3D\u91CF\u907F\u514D\u5728\u5904\u7406\u7528\u6237\u8F93\u5165\u65F6\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"v-html"}),"\uFF0C\u4EE5\u786E\u4FDD\u7F51\u7AD9\u7684\u5B89\u5168\u6027\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},97695:function(e,n,s){s.d(n,{Z:function(){return c}});let c=s.p+"assets/images/af53171c99d5b4bbc4698e26c1eb8f49-e3836d8957706bb68cd64de6837dad85.png"},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var c=s(67294);let d={},i=c.createContext(d);function r(e){let n=c.useContext(i);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);