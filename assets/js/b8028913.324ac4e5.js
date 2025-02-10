"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["50207"],{34570:function(n,e,c){c.r(e),c.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"Frontend/JavaScript/\u5E38\u89C1\u95EE\u9898/\u95ED\u5305\u4E0E\u56DE\u8C03","title":"JavaScript \u4E2D\u7684\u95ED\u5305\u4E0E\u56DE\u8C03","description":"\u4EC0\u4E48\u662F\u95ED\u5305","source":"@site/docs/Frontend/JavaScript/\u5E38\u89C1\u95EE\u9898/100.\u95ED\u5305\u4E0E\u56DE\u8C03.md","sourceDirName":"Frontend/JavaScript/\u5E38\u89C1\u95EE\u9898","slug":"/Frontend/JavaScript/\u5E38\u89C1\u95EE\u9898/\u95ED\u5305\u4E0E\u56DE\u8C03","permalink":"/docs-hub/Frontend/JavaScript/\u5E38\u89C1\u95EE\u9898/\u95ED\u5305\u4E0E\u56DE\u8C03","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u5E38\u89C1\u95EE\u9898/100.\u95ED\u5305\u4E0E\u56DE\u8C03.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":100,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"prototype proto \u548C constructor","permalink":"/docs-hub/Frontend/JavaScript/\u5E38\u89C1\u95EE\u9898/prototype\u4E0Econstructor"},"next":{"title":"TortoiseSVN\u5FFD\u7565node_modules","permalink":"/docs-hub/Frontend/JavaScript/\u5E38\u89C1\u95EE\u9898/TortoiseSVN\u5FFD\u7565node_modules"}}'),t=c("85893"),s=c("50065");let i={},o="JavaScript \u4E2D\u7684\u95ED\u5305\u4E0E\u56DE\u8C03",d={},l=[{value:"\u4EC0\u4E48\u662F\u95ED\u5305",id:"\u4EC0\u4E48\u662F\u95ED\u5305",level:2},{value:"\u95ED\u5305\u7684\u539F\u7406",id:"\u95ED\u5305\u7684\u539F\u7406",level:2},{value:"\u4F7F\u7528\u95ED\u5305",id:"\u4F7F\u7528\u95ED\u5305",level:2},{value:"\u56DE\u8C03\u51FD\u6570",id:"\u56DE\u8C03\u51FD\u6570",level:2},{value:"\u56DE\u8C03\u51FD\u6570\u4E0E\u95ED\u5305",id:"\u56DE\u8C03\u51FD\u6570\u4E0E\u95ED\u5305",level:2}];function a(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"javascript-\u4E2D\u7684\u95ED\u5305\u4E0E\u56DE\u8C03",children:"JavaScript \u4E2D\u7684\u95ED\u5305\u4E0E\u56DE\u8C03"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4EC0\u4E48\u662F\u95ED\u5305",children:"\u4EC0\u4E48\u662F\u95ED\u5305"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 JavaScript \u4E2D,\u5F53\u4E00\u4E2A\u51FD\u6570\u80FD\u591F\u8BB0\u4F4F\u5E76\u8BBF\u95EE\u5176\u6240\u5728\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\u65F6,\u5C31\u4EA7\u751F\u4E86\u95ED\u5305,\u5373\u4F7F\u51FD\u6570\u662F\u5728\u5F53\u524D\u8BCD\u6CD5\u4F5C\u7528\u57DF\u4E4B\u5916\u6267\u884C\u3002\u7B80\u5355\u6765\u8BF4,\u95ED\u5305\u8BA9\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A\u5185\u5C42\u51FD\u6570\u4E2D\u8BBF\u95EE\u5230\u5176\u5916\u5C42\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6839\u636E ECMA262 \u6807\u51C6:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u95ED\u5305\u8BA9\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A\u5185\u5C42\u51FD\u6570\u4E2D\u8BBF\u95EE\u5230\u5176\u5916\u5C42\u51FD\u6570\u7684\u4F5C\u7528\u57DF,\u6BCF\u5F53\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570,\u95ED\u5305\u5C31\u4F1A\u5728\u51FD\u6570\u521B\u5EFA\u7684\u540C\u65F6\u88AB\u521B\u5EFA\u51FA\u6765\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u4E00\u4E2A\u51FD\u6570\u4E0E\u5176\u6240\u5904\u7684\u73AF\u5883(\u4F5C\u7528\u57DF)\u6346\u7ED1\u5728\u4E00\u8D77\u7684\u8FD9\u79CD\u7EC4\u5408,\u5C31\u53EB\u505A\u95ED\u5305\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u66F4\u591A\u5173\u4E8E\u95ED\u5305\u7684\u89E3\u91CA\u53EF\u4EE5\u53C2\u8003 MDN \u6587\u6863:",(0,t.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",children:"\u95ED\u5305 - JavaScript | MDN"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u95ED\u5305\u7684\u539F\u7406",children:"\u95ED\u5305\u7684\u539F\u7406"}),"\n",(0,t.jsx)(e.p,{children:"\u5F53\u4E00\u4E2A\u51FD\u6570\u7EDF\u4E00\u4E0E\u5916\u754C\u73AF\u5883(\u4F5C\u7528\u57DF)\u6346\u7ED1\u5728\u4E00\u8D77\u65F6,\u5C31\u5F62\u6210\u4E86\u95ED\u5305\u3002\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"// \u5168\u5C40\u4F5C\u7528\u57DF\u5F62\u6210\u95ED\u5305\nfunction outer() {\n  // outer\u51FD\u6570\u4F5C\u7528\u57DF\u5F62\u6210\u95ED\u5305\n  function inner() {\n    // inner\u51FD\u6570\u4F5C\u7528\u57DF\u5F62\u6210\u95ED\u5305\n  }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D,",(0,t.jsx)(e.code,{children:"outer"}),"\u51FD\u6570\u548C",(0,t.jsx)(e.code,{children:"inner"}),"\u51FD\u6570\u90FD\u5F62\u6210\u4E86\u5404\u81EA\u7684\u95ED\u5305\u3002",(0,t.jsx)(e.code,{children:"inner"}),"\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE",(0,t.jsx)(e.code,{children:"outer"}),"\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF,\u8FD9\u5C31\u662F\u95ED\u5305\u7684\u4F5C\u7528\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F7F\u7528\u95ED\u5305",children:"\u4F7F\u7528\u95ED\u5305"}),"\n",(0,t.jsx)(e.p,{children:"\u95ED\u5305\u7684\u4E00\u4E2A\u5E38\u89C1\u7528\u6CD5\u662F\u5728\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u53E6\u4E00\u4E2A\u51FD\u6570,\u5185\u90E8\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF\u3002\u770B\u4E0B\u9762\u7684\u4F8B\u5B50:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function compute(type) {\n  let baseNum = 100;\n\n  function plus(a, b) {\n    return baseNum + a + b;\n  }\n\n  function minus(a, b) {\n    return baseNum - a - b;\n  }\n\n  if (type === '+') {\n    return plus;\n  } else if (type === '-') {\n    return minus;\n  }\n}\n\nconst plusFn = compute('+');\nconsole.log(plusFn(1, 2)); // \u8F93\u51FA103\n\nconst minusFn = compute('-');\nconsole.log(minusFn(1, 2)); // \u8F93\u51FA97\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4E0A\u9762\u4EE3\u7801\u4E2D,",(0,t.jsx)(e.code,{children:"compute"}),"\u51FD\u6570\u6839\u636E\u4F20\u5165\u7684",(0,t.jsx)(e.code,{children:"type"}),"\u53C2\u6570\u8FD4\u56DE",(0,t.jsx)(e.code,{children:"plus"}),"\u6216",(0,t.jsx)(e.code,{children:"minus"}),"\u51FD\u6570\u3002\u8FD9\u4E24\u4E2A\u5185\u90E8\u51FD\u6570\u90FD\u53EF\u4EE5\u8BBF\u95EE",(0,t.jsx)(e.code,{children:"compute"}),"\u51FD\u6570\u7684",(0,t.jsx)(e.code,{children:"baseNum"}),"\u53D8\u91CF,\u5F62\u6210\u4E86\u95ED\u5305\u3002\u5F53\u6211\u4EEC\u8C03\u7528",(0,t.jsx)(e.code,{children:"plusFn(1, 2)"}),"\u65F6,\u5B9E\u9645\u4E0A\u662F\u5728\u8C03\u7528",(0,t.jsx)(e.code,{children:"plus"}),"\u51FD\u6570,\u800C",(0,t.jsx)(e.code,{children:"plus"}),"\u53EF\u4EE5\u8BBF\u95EE",(0,t.jsx)(e.code,{children:"baseNum"}),"\u53D8\u91CF,\u6240\u4EE5\u7ED3\u679C\u662F 103\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u95ED\u5305\u7684\u53E6\u4E00\u4E2A\u7279\u6027\u662F\u53EF\u4EE5\u8BA9\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\u59CB\u7EC8\u4FDD\u6301\u5728\u5185\u5B58\u4E2D\u3002\u770B\u4E0B\u9762\u7684\u4F8B\u5B50:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function test() {\n  let a = 1;\n\n  function add() {\n    return ++a;\n  }\n\n  return add;\n}\n\nconst fn = test();\nconsole.log(fn()); // \u8F93\u51FA2\nconsole.log(fn()); // \u8F93\u51FA3\nconsole.log(fn()); // \u8F93\u51FA4\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4E0A\u9762\u4EE3\u7801\u4E2D,",(0,t.jsx)(e.code,{children:"test"}),"\u51FD\u6570\u8FD4\u56DE\u4E86\u5185\u90E8\u51FD\u6570",(0,t.jsx)(e.code,{children:"add"}),",",(0,t.jsx)(e.code,{children:"add"}),"\u51FD\u6570\u5F62\u6210\u4E86\u95ED\u5305,\u53EF\u4EE5\u8BBF\u95EE",(0,t.jsx)(e.code,{children:"test"}),"\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF",(0,t.jsx)(e.code,{children:"a"}),"\u3002\u5F53\u6211\u4EEC\u8FDE\u7EED\u591A\u6B21\u8C03\u7528",(0,t.jsx)(e.code,{children:"fn"}),"\u65F6,",(0,t.jsx)(e.code,{children:"a"}),"\u7684\u503C\u4F1A\u4E0D\u65AD\u589E\u52A0\u3002\u8FD9\u662F\u56E0\u4E3A",(0,t.jsx)(e.code,{children:"a"}),"\u59CB\u7EC8\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D,\u6BCF\u6B21\u8C03\u7528",(0,t.jsx)(e.code,{children:"add"}),"\u65F6\u90FD\u4F1A\u66F4\u65B0",(0,t.jsx)(e.code,{children:"a"}),"\u7684\u503C\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u56DE\u8C03\u51FD\u6570",children:"\u56DE\u8C03\u51FD\u6570"}),"\n",(0,t.jsx)(e.p,{children:"\u56DE\u8C03\u51FD\u6570\u662F\u6307\u88AB\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u53E6\u4E00\u4E2A\u51FD\u6570,\u5728\u8BE5\u51FD\u6570\u5185\u90E8\u6267\u884C\u7684\u51FD\u6570\u3002\u5728 JavaScript \u4E2D,\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11,\u53EF\u4EE5\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u3002\u56DE\u8C03\u51FD\u6570\u5206\u4E3A\u540C\u6B65\u56DE\u8C03\u548C\u5F02\u6B65\u56DE\u8C03\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u540C\u6B65\u56DE\u8C03\u662F\u6307\u5728\u51FD\u6570\u8FD4\u56DE\u4E4B\u524D\u6267\u884C\u56DE\u8C03\u51FD\u6570,\u770B\u4E0B\u9762\u7684\u4F8B\u5B50:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function compute(a, b, callback) {\n  const result = a + b;\n  callback(result);\n}\n\ncompute(1, 2, function (result) {\n  console.log(result); // \u8F93\u51FA3\n});\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5F02\u6B65\u56DE\u8C03\u662F\u6307\u5728\u51FD\u6570\u8FD4\u56DE\u4E4B\u540E\u6267\u884C\u56DE\u8C03\u51FD\u6570,JavaScript \u4E2D\u6700\u5E38\u89C1\u7684\u5F02\u6B65\u56DE\u8C03\u662F\u4E8B\u4EF6\u76D1\u542C:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"const btn = document.querySelector('#btn');\nbtn.addEventListener('click', function () {\n  console.log('\u6309\u94AE\u88AB\u70B9\u51FB\u4E86');\n});\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4E0A\u9762\u4EE3\u7801\u7ED9\u6309\u94AE\u6DFB\u52A0\u4E86\u70B9\u51FB\u4E8B\u4EF6\u76D1\u542C,\u5F53\u6309\u94AE\u88AB\u70B9\u51FB\u65F6\u4F1A\u5F02\u6B65\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u56DE\u8C03\u51FD\u6570\u4E0E\u95ED\u5305",children:"\u56DE\u8C03\u51FD\u6570\u4E0E\u95ED\u5305"}),"\n",(0,t.jsx)(e.p,{children:"\u56DE\u8C03\u51FD\u6570\u7ECF\u5E38\u4E0E\u95ED\u5305\u4E00\u8D77\u4F7F\u7528,\u770B\u4E0B\u9762\u7684\u4F8B\u5B50:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function compute() {\n  let baseNum = 100;\n  return function (a, b, type) {\n    let result = 0;\n    switch (type) {\n      case '+':\n        result = baseNum + a + b;\n        break;\n      case '-':\n        result = baseNum - a - b;\n        break;\n      default:\n        break;\n    }\n    console.log(`${a} ${type} ${b} = ${result}`);\n  };\n}\n\nconst fn = compute();\nfn(1, 2, '+'); // \u8F93\u51FA: 1 + 2 = 103\nfn(1, 2, '-'); // \u8F93\u51FA: 1 - 2 = 97\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4E0A\u9762\u4EE3\u7801\u4E2D,",(0,t.jsx)(e.code,{children:"compute"}),"\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u51FD\u6570,\u533F\u540D\u51FD\u6570\u5F62\u6210\u4E86\u95ED\u5305,\u53EF\u4EE5\u8BBF\u95EE",(0,t.jsx)(e.code,{children:"compute"}),"\u51FD\u6570\u7684",(0,t.jsx)(e.code,{children:"baseNum"}),"\u53D8\u91CF\u3002\u6211\u4EEC\u5C06\u533F\u540D\u51FD\u6570\u8D4B\u503C\u7ED9",(0,t.jsx)(e.code,{children:"fn"}),"\u53D8\u91CF,\u7136\u540E\u8C03\u7528",(0,t.jsx)(e.code,{children:"fn"}),"\u5E76\u4F20\u5165\u53C2\u6570\u3002\u533F\u540D\u51FD\u6570\u6839\u636E\u4F20\u5165\u7684",(0,t.jsx)(e.code,{children:"type"}),"\u53C2\u6570\u6267\u884C\u4E0D\u540C\u7684\u8BA1\u7B97,\u5E76\u8F93\u51FA\u7ED3\u679C\u3002"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:c(56290).Z+"",width:"788",height:"251"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},56290:function(n,e,c){c.d(e,{Z:function(){return r}});let r=c.p+"assets/images/57440d91392c77cf3c1890003e52cea0-70dcadb0676f0da49b8624a5dcf539fc.png"},50065:function(n,e,c){c.d(e,{Z:function(){return o},a:function(){return i}});var r=c(67294);let t={},s=r.createContext(t);function i(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);