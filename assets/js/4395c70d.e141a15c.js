"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["55072"],{38636:function(n,e,c){c.r(e),c.d(e,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/\u51FD\u6570\u8BB0\u5FC6\u5E94\u7528","title":"\u51FD\u6570\u8BB0\u5FC6","description":"\u51FD\u6570\u8BB0\u5FC6\uFF08memoization\uFF09\u662F\u4E00\u79CD\u4F18\u5316\u6280\u672F\uFF0C\u5B83\u53EF\u4EE5\u7F13\u5B58\u51FD\u6570\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\uFF0C\u63D0\u9AD8\u51FD\u6570\u7684\u6267\u884C\u6548\u7387\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528\u51FD\u6570\u8BB0\u5FC6\u4F18\u5316\u9636\u4E58\u51FD\u6570\u7684\u793A\u4F8B\uFF1A","source":"@site/docs/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/80.\u51FD\u6570\u8BB0\u5FC6\u5E94\u7528.md","sourceDirName":"Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B","slug":"/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/\u51FD\u6570\u8BB0\u5FC6\u5E94\u7528","permalink":"/docs-hub/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/\u51FD\u6570\u8BB0\u5FC6\u5E94\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/80.\u51FD\u6570\u8BB0\u5FC6\u5E94\u7528.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734402243000,"sidebarPosition":80,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u6570\u636E\u5F52\u7C7B\u6280\u672F","permalink":"/docs-hub/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/\u5F52\u7C7B\u51FD\u6570\u5C01\u88C5-\u6848\u4F8B"},"next":{"title":"\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5","permalink":"/docs-hub/category/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5"}}'),i=c("85893"),t=c("50065");let s={},a="\u51FD\u6570\u8BB0\u5FC6",o={},l=[{value:"\u8BB0\u5FC6\u6570\u636E",id:"\u8BB0\u5FC6\u6570\u636E",level:2},{value:"\u5E94\u7528\u573A\u666F",id:"\u5E94\u7528\u573A\u666F",level:2}];function d(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u51FD\u6570\u8BB0\u5FC6",children:"\u51FD\u6570\u8BB0\u5FC6"})}),"\n",(0,i.jsx)(e.p,{children:"\u51FD\u6570\u8BB0\u5FC6\uFF08memoization\uFF09\u662F\u4E00\u79CD\u4F18\u5316\u6280\u672F\uFF0C\u5B83\u53EF\u4EE5\u7F13\u5B58\u51FD\u6570\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\uFF0C\u63D0\u9AD8\u51FD\u6570\u7684\u6267\u884C\u6548\u7387\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528\u51FD\u6570\u8BB0\u5FC6\u4F18\u5316\u9636\u4E58\u51FD\u6570\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var times = 0;\nvar cache = [];\n\nfunction factorial(n) {\n  times++;\n\n  if (cache[n]) {\n    return cache[n];\n  }\n\n  if (n === 0 || n === 1) {\n    cache[0] = 1;\n    cache[1] = 1;\n    return 1;\n  }\n\n  return (cache[n] = n * factorial(n - 1));\n}\n\nconsole.time('first');\nconsole.log(factorial(3));\nconsole.timeEnd('first');\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5728\u51FD\u6570\u5916\u90E8\u5B9A\u4E49\u4E86\u4E00\u4E2A",(0,i.jsx)(e.code,{children:"cache"}),"\u6570\u7EC4\u7528\u4E8E\u7F13\u5B58\u8BA1\u7B97\u7ED3\u679C\u3002\u5728\u51FD\u6570\u5185\u90E8\uFF0C\u6211\u4EEC\u9996\u5148\u68C0\u67E5",(0,i.jsx)(e.code,{children:"cache"}),"\u6570\u7EC4\u4E2D\u662F\u5426\u5DF2\u7ECF\u6709\u4E86\u5F53\u524D\u53C2\u6570\u5BF9\u5E94\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u5982\u679C\u6709\uFF0C\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u7684\u7ED3\u679C\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5BF9\u4E8E\u57FA\u7840\u60C5\u51B5\uFF08n \u7B49\u4E8E 0 \u6216 1\uFF09\uFF0C\u6211\u4EEC\u5C06\u7ED3\u679C\u7F13\u5B58\u5728",(0,i.jsx)(e.code,{children:"cache"}),"\u6570\u7EC4\u4E2D\uFF0C\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002\u5BF9\u4E8E\u5176\u4ED6\u60C5\u51B5\uFF0C\u6211\u4EEC\u9012\u5F52\u8BA1\u7B97\u9636\u4E58\uFF0C\u5E76\u5C06\u8BA1\u7B97\u7ED3\u679C\u7F13\u5B58\u5728",(0,i.jsx)(e.code,{children:"cache"}),"\u6570\u7EC4\u4E2D\uFF0C\u7136\u540E\u8FD4\u56DE\u7ED3\u679C\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u901A\u8FC7\u4F7F\u7528\u51FD\u6570\u8BB0\u5FC6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u907F\u514D\u91CD\u590D\u8BA1\u7B97\uFF0C\u63D0\u9AD8\u51FD\u6570\u7684\u6267\u884C\u6548\u7387\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8BB0\u5FC6\u6570\u636E",children:"\u8BB0\u5FC6\u6570\u636E"}),"\n",(0,i.jsx)(e.p,{children:"\u51FD\u6570\u8BB0\u5FC6\u7684\u6838\u5FC3\u601D\u60F3\u662F\uFF0C\u5982\u679C\u51FD\u6570\u7684\u53C2\u6570\u76F8\u540C\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u7684\u7ED3\u679C\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u901A\u7528\u7684\u51FD\u6570\u8BB0\u5FC6\u5B9E\u73B0\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var times = 0;\n\nfunction factorial(n) {\n  times++;\n\n  if (n === 0 || n === 1) {\n    return 1;\n  }\n  return n * factorial(n - 1);\n}\n\nfunction memoize(fn) {\n  var cache = {};\n\n  return function () {\n    console.log(cache);\n    var key = [].join.call(arguments, ',');\n\n    if (cache[key]) {\n      return cache[key];\n    } else {\n      var result = fn.apply(this, arguments);\n      cache[key] = result;\n      return result;\n    }\n  };\n}\n\nvar memoizedFactorial = memoize(factorial);\n\nfor (var i = 0; i <= 6; i++) {\n  console.log(memoizedFactorial(i));\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u901A\u7528\u7684",(0,i.jsx)(e.code,{children:"memoize"}),"\u51FD\u6570\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\u3002\u65B0\u51FD\u6570\u5185\u90E8\u7EF4\u62A4\u4E86\u4E00\u4E2A",(0,i.jsx)(e.code,{children:"cache"}),"\u5BF9\u8C61\uFF0C\u7528\u4E8E\u7F13\u5B58\u51FD\u6570\u7684\u8BA1\u7B97\u7ED3\u679C\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u65B0\u51FD\u6570\u7684\u6267\u884C\u903B\u8F91\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5C06\u51FD\u6570\u7684\u53C2\u6570\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u7F13\u5B58\u7684\u952E\uFF08",(0,i.jsx)(e.code,{children:"key"}),"\uFF09\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u68C0\u67E5",(0,i.jsx)(e.code,{children:"cache"}),"\u5BF9\u8C61\u4E2D\u662F\u5426\u5DF2\u7ECF\u6709\u4E86\u5BF9\u5E94\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u5982\u679C\u6709\uFF0C\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u7684\u7ED3\u679C\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679C\u6CA1\u6709\u7F13\u5B58\u7684\u7ED3\u679C\uFF0C\u8C03\u7528\u539F\u59CB\u51FD\u6570\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u7F13\u5B58\u5728",(0,i.jsx)(e.code,{children:"cache"}),"\u5BF9\u8C61\u4E2D\uFF0C\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u901A\u8FC7\u4F7F\u7528",(0,i.jsx)(e.code,{children:"memoize"}),"\u51FD\u6570\u5BF9",(0,i.jsx)(e.code,{children:"factorial"}),"\u51FD\u6570\u8FDB\u884C\u8BB0\u5FC6\u5316\uFF0C\u6211\u4EEC\u53EF\u4EE5\u907F\u514D\u91CD\u590D\u8BA1\u7B97\uFF0C\u63D0\u9AD8\u51FD\u6570\u7684\u6267\u884C\u6548\u7387\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5E94\u7528\u573A\u666F",children:"\u5E94\u7528\u573A\u666F"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5904\u7406\u5927\u91CF\u6570\u636E\uFF1A\u5F53\u51FD\u6570\u9700\u8981\u5904\u7406\u5927\u91CF\u6570\u636E\uFF0C\u5E76\u4E14\u5B58\u5728\u91CD\u590D\u8BA1\u7B97\u7684\u60C5\u51B5\u65F6\uFF0C\u4F7F\u7528\u51FD\u6570\u8BB0\u5FC6\u53EF\u4EE5\u663E\u8457\u63D0\u9AD8\u6027\u80FD\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9012\u5F52\u51FD\u6570\uFF1A\u5BF9\u4E8E\u9012\u5F52\u51FD\u6570\uFF0C\u5982\u679C\u5B58\u5728\u91CD\u590D\u8BA1\u7B97\u7684\u5B50\u95EE\u9898\uFF0C\u4F7F\u7528\u51FD\u6570\u8BB0\u5FC6\u53EF\u4EE5\u907F\u514D\u91CD\u590D\u8BA1\u7B97\uFF0C\u5C06\u6307\u6570\u7EA7\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u964D\u4F4E\u4E3A\u591A\u9879\u5F0F\u7EA7\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9891\u7E41\u8C03\u7528\u7684\u51FD\u6570\uFF1A\u5BF9\u4E8E\u9891\u7E41\u8C03\u7528\u7684\u51FD\u6570\uFF0C\u5982\u679C\u8BA1\u7B97\u7ED3\u679C\u4E0D\u4F1A\u6539\u53D8\uFF0C\u4F7F\u7528\u51FD\u6570\u8BB0\u5FC6\u53EF\u4EE5\u7F13\u5B58\u8BA1\u7B97\u7ED3\u679C\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\uFF0C\u63D0\u9AD8\u51FD\u6570\u7684\u6267\u884C\u6548\u7387\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u51FD\u6570\u8BB0\u5FC6\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u4F18\u5316\u6280\u672F\uFF0C\u5B83\u901A\u8FC7\u7F13\u5B58\u51FD\u6570\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\uFF0C\u63D0\u9AD8\u51FD\u6570\u7684\u6267\u884C\u6548\u7387\u3002\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u5177\u4F53\u7684\u573A\u666F\u548C\u9700\u6C42\uFF0C\u9009\u62E9\u9002\u5F53\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u51FD\u6570\u8BB0\u5FC6\uFF0C\u4EE5\u63D0\u9AD8\u7A0B\u5E8F\u7684\u6027\u80FD\u548C\u54CD\u5E94\u901F\u5EA6\u3002"})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},50065:function(n,e,c){c.d(e,{Z:function(){return a},a:function(){return s}});var r=c(67294);let i={},t=r.createContext(i);function s(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);