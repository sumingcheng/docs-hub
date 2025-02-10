"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["38698"],{1224:function(n,e,r){r.r(e),r.d(e,{default:()=>p,frontMatter:()=>d,metadata:()=>t,assets:()=>s,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.fill","title":"Array.prototype.fill","description":"fill","source":"@site/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/70.Array.prototype.fill.md","sourceDirName":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5","slug":"/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.fill","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.fill","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/70.Array.prototype.fill.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":70,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u904D\u5386\u65B9\u6CD5\u5BF9\u6BD4 for-of \u548C for-in","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.entries"},"next":{"title":"Array.prototype.find","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.find"}}'),l=r("85893"),i=r("50065");let d={},o="Array.prototype.fill",s={},a=[{value:"fill",id:"fill",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:3},{value:"\u6570\u7EC4\u8F6C\u7C7B\u6570\u7EC4",id:"\u6570\u7EC4\u8F6C\u7C7B\u6570\u7EC4",level:2},{value:"\u5B9E\u73B0 fill",id:"\u5B9E\u73B0-fill",level:2}];function c(n){let e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"arrayprototypefill",children:"Array.prototype.fill"})}),"\n",(0,l.jsx)(e.h2,{id:"fill",children:"fill"}),"\n",(0,l.jsxs)(e.p,{children:["\u4F5C\u4E3A JavaScript \u4E2D\u6570\u7EC4\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C",(0,l.jsx)(e.code,{children:"fill"})," \u53EF\u4EE5\u7528\u6307\u5B9A\u7684\u503C\u586B\u5145\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u3002\u5B83\u5177\u6709\u4EE5\u4E0B\u542B\u4E49\uFF1A"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u52A8\u8BCD"}),"\uFF1A\u586B\u6EE1\u3001\u5145\u6EE1\u3001\u88C5\u6EE1\u3001\u5835\u585E\u3001\u586B\u8865\u3001\u6EE1\u8DB3\u3001\u62C5\u4EFB\u3001\u8017\u53BB\u3001\u5403\u9971\u3001\u6309\u8BA2\u5355\u4F9B\u5E94\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u540D\u8BCD"}),"\uFF1A\u586B\u6EE1\u7684\u91CF\u3001\u8DB3\u591F\u7684\u91CF\u3001\u5403\u9971\u7684\u91CF\u3001\u559D\u8DB3\u7684\u91CF\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"fill"})," \u65B9\u6CD5\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF1A\u586B\u5145\u503C\u3001\u5F00\u59CB\u4E0B\u6807\u548C\u7ED3\u675F\u4E0B\u6807\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u586B\u5145\u503C"}),"\uFF1A\u7528\u4E8E\u586B\u5145\u6570\u7EC4\u7684\u503C\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5F00\u59CB\u4E0B\u6807"}),"\uFF08\u53EF\u9009\uFF09\uFF1A\u5F00\u59CB\u586B\u5145\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A 0\u3002\u5982\u679C\u4E3A\u8D1F\u6570\uFF0C\u5219\u4ECE\u6570\u7EC4\u672B\u5C3E\u5012\u6570\u8BA1\u7B97\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7ED3\u675F\u4E0B\u6807"}),"\uFF08\u53EF\u9009\uFF09\uFF1A\u7ED3\u675F\u586B\u5145\u7684\u4F4D\u7F6E\uFF08\u4E0D\u5305\u542B\u8BE5\u4F4D\u7F6E\uFF09\uFF0C\u9ED8\u8BA4\u4E3A\u6570\u7EC4\u957F\u5EA6\u3002\u5982\u679C\u4E3A\u8D1F\u6570\uFF0C\u5219\u4ECE\u6570\u7EC4\u672B\u5C3E\u5012\u6570\u8BA1\u7B97\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"const arr = [1, 2, 3, 4, 5];\n// \u586B\u5145\u533A\u95F4 [2,4)\nconst newArr = arr.fill('a', 2, 4);\nconsole.log(newArr); // [1, 2, 'a', 'a', 5]\n\n// newArr \u8FD4\u56DE\u7684\u662F\u539F\u6570\u7EC4\u7684\u5F15\u7528\nconsole.log(arr === newArr); // true\n\n// \u5168\u90E8\u8986\u76D6\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\nconst newArrUn = arr.fill();\nconsole.log(newArrUn); // [undefined, undefined, undefined, undefined, undefined]\n\n// start \u975E\u6570\u5B57\uFF0Cend \u4E3A\u6570\u5B57 [0,4)\nconst arr1 = arr.fill('g', 'a', 4);\nconsole.log(arr1); // ['g', 'g', 'g', 'g', undefined]\n\n// \u672A\u5B9A\u4E49 start \u548C end\uFF0C\u5168\u90E8\u8986\u76D6\nconst arr2 = arr.fill('g', undefined, undefined);\nconsole.log(arr2); // ['g', 'g', 'g', 'g', 'g']\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"fill \u65B9\u6CD5\u793A\u610F\u56FE",src:r(37060).Z+"",width:"722",height:"328"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6570\u7EC4\u8F6C\u7C7B\u6570\u7EC4",children:"\u6570\u7EC4\u8F6C\u7C7B\u6570\u7EC4"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5C06\u6570\u7EC4\u8F6C\u6362\u4E3A\u7C7B\u6570\u7EC4\u5BF9\u8C61\u3002\u7C7B\u6570\u7EC4\u5BF9\u8C61\u5177\u6709\u6570\u7EC4\u7684\u4E00\u4E9B\u7279\u6027\uFF0C\u5982 ",(0,l.jsx)(e.code,{children:"length"})," \u5C5E\u6027\u548C\u7D22\u5F15\uFF0C\u4F46\u4E0D\u5177\u5907\u6570\u7EC4\u7684\u6240\u6709\u65B9\u6CD5\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5C06\u6570\u7EC4\u8F6C\u6362\u4E3A\u7C7B\u6570\u7EC4\u5BF9\u8C61\u7684\u793A\u4F8B\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"function makeArrayLike(arr) {\n  const arrLike = {\n    length: arr.length,\n    push: Array.prototype.push,\n    splice: Array.prototype.splice,\n  };\n\n  arr.forEach((item, index) => {\n    Array.prototype.fill.call(arrLike, item, index, index + 1);\n  });\n\n  return arrLike;\n}\n\nconst newObj = makeArrayLike(['a', 'b', 'c', 'd', 'e', 'f']);\n\nconsole.log(newObj);\n// { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e', '5': 'f', length: 6, push: [Function: push], splice: [Function: splice] }\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"makeArrayLike"})," \u51FD\u6570\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A\u6570\u7EC4\u5E76\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u6570\u7EC4\u5BF9\u8C61\u3002\u901A\u8FC7\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"Array.prototype.fill"})," \u65B9\u6CD5\uFF0C\u6211\u5C06\u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\u586B\u5145\u5230\u7C7B\u6570\u7EC4\u5BF9\u8C61\u4E2D\u5BF9\u5E94\u7684\u4F4D\u7F6E\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5B9E\u73B0-fill",children:"\u5B9E\u73B0 fill"}),"\n",(0,l.jsxs)(e.p,{children:["\u4E3A\u4E86\u66F4\u597D\u5730\u7406\u89E3 ",(0,l.jsx)(e.code,{children:"fill"})," \u65B9\u6CD5\u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5B9E\u73B0 ",(0,l.jsx)(e.code,{children:"fill"})," \u65B9\u6CD5\u7684\u793A\u4F8B\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"Array.prototype.myFill = function (value, start, end) {\n  // \u8BBE\u7F6E\u586B\u5145\u503C\uFF0C\u5982\u679C\u672A\u63D0\u4F9B\u5219\u4E3A undefined\n  const fillValue = typeof value !== 'undefined' ? value : undefined;\n\n  // \u8F6C\u6362 this \u5BF9\u8C61\u4E3A\u6570\u7EC4\n  if (this == null) {\n    throw new TypeError('Cannot convert undefined or null to object');\n  }\n\n  const obj = Object(this);\n  const len = obj.length >>> 0;\n\n  // \u8BA1\u7B97\u5F00\u59CB\u7D22\u5F15\n  let startIndex = typeof start === 'undefined' ? 0 : Number(start);\n  startIndex = isNaN(startIndex) ? 0 : startIndex < 0 ? Math.max(len + startIndex, 0) : Math.min(startIndex, len);\n\n  // \u8BA1\u7B97\u7ED3\u675F\u7D22\u5F15\n  let endIndex = typeof end === 'undefined' ? len : Number(end);\n  endIndex = isNaN(endIndex) ? len : endIndex < 0 ? Math.max(len + endIndex, 0) : Math.min(endIndex, len);\n\n  // \u586B\u5145\u6570\u7EC4\n  for (let i = startIndex; i < endIndex; i++) {\n    obj[i] = fillValue;\n  }\n\n  return obj;\n};\n\nconst arr = [1, 2, 3, 4, 5];\nconst newArr = arr.myFill('a', 2, 4);\nconsole.log(newArr); // [1, 2, 'a', 'a', 5]\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u5B9E\u73B0\u4E2D\uFF0C\u6211\u6269\u5C55\u4E86 ",(0,l.jsx)(e.code,{children:"Array.prototype"})," \u6DFB\u52A0\u4E86\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"myFill"})," \u65B9\u6CD5\u3002\u8BE5\u65B9\u6CD5\u9996\u5148\u9A8C\u8BC1 ",(0,l.jsx)(e.code,{children:"this"})," \u662F\u5426\u4E3A\u6709\u6548\u7684\u6570\u7EC4\u5BF9\u8C61\uFF0C\u7136\u540E\u8BA1\u7B97\u5F00\u59CB\u548C\u7ED3\u675F\u7D22\u5F15\uFF0C\u6700\u540E\u5728\u6307\u5B9A\u8303\u56F4\u5185\u586B\u5145\u503C\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u901A\u8FC7\u8FD9\u4E2A\u793A\u4F8B\uFF0C\u53EF\u4EE5\u66F4\u6DF1\u5165\u5730\u7406\u89E3 ",(0,l.jsx)(e.code,{children:"fill"})," \u65B9\u6CD5\u7684\u5185\u90E8\u5DE5\u4F5C\u673A\u5236\uFF0C\u5E76\u4E86\u89E3\u5982\u4F55\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u81EA\u5B9A\u4E49\u6570\u7EC4\u65B9\u6CD5\u3002"]})]})}function p(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},37060:function(n,e,r){r.d(e,{Z:function(){return t}});let t=r.p+"assets/images/06d184f0df94541ec5aa4319a3e6d33a-68d80c755206d1e02dfec53e06f832e2.png"},50065:function(n,e,r){r.d(e,{Z:function(){return o},a:function(){return d}});var t=r(67294);let l={},i=t.createContext(l);function d(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);