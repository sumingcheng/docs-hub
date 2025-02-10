"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["73029"],{47536:function(n,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>s,contentTitle:()=>l});var t=JSON.parse('{"id":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.copyWithin","title":"Array.prototype.copyWithin()","description":"Array.prototype.copyWithin() \u65B9\u6CD5\u7528\u4E8E\u5C06\u6570\u7EC4\u4E2D\u7684\u6307\u5B9A\u90E8\u5206\u590D\u5236\u5230\u540C\u4E00\u6570\u7EC4\u4E2D\u7684\u53E6\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u5E76\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u6570\u7EC4\u3002\u8BE5\u65B9\u6CD5\u4F1A\u76F4\u63A5\u4FEE\u6539\u539F\u6570\u7EC4\u3002","source":"@site/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/50.Array.prototype.copyWithin.md","sourceDirName":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5","slug":"/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.copyWithin","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.copyWithin","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/50.Array.prototype.copyWithin.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":50,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"Array.from()","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.from"},"next":{"title":"\u904D\u5386\u65B9\u6CD5\u5BF9\u6BD4 for-of \u548C for-in","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.entries"}}'),i=r("85893"),o=r("50065");let c={},l="Array.prototype.copyWithin()",d={},s=[{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"target",id:"target",level:3},{value:"start",id:"start",level:3},{value:"end",id:"end",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u5143\u7D20\u4E3A\u5F15\u7528\u503C",id:"\u5143\u7D20\u4E3A\u5F15\u7528\u503C",level:2},{value:"\u7C7B\u6570\u7EC4\u5BF9\u8C61",id:"\u7C7B\u6570\u7EC4\u5BF9\u8C61",level:2},{value:"\u4F4D\u8FD0\u7B97",id:"\u4F4D\u8FD0\u7B97",level:2},{value:"\u6709\u7B26\u53F7\u4F4D\u79FB",id:"\u6709\u7B26\u53F7\u4F4D\u79FB",level:3},{value:"\u5DE6\u4F4D\u79FB (<code>&lt;&lt;</code>)",id:"\u5DE6\u4F4D\u79FB-",level:4},{value:"\u53F3\u4F4D\u79FB (<code>&gt;&gt;</code>)",id:"\u53F3\u4F4D\u79FB-",level:4},{value:"\u65E0\u7B26\u53F7\u4F4D\u79FB",id:"\u65E0\u7B26\u53F7\u4F4D\u79FB",level:3},{value:"\u53F3\u4F4D\u79FB (<code>&gt;&gt;&gt;</code>)",id:"\u53F3\u4F4D\u79FB--1",level:4},{value:"\u81EA\u5B9A\u4E49\u5B9E\u73B0 <code>copyWithin</code>",id:"\u81EA\u5B9A\u4E49\u5B9E\u73B0-copywithin",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u94FE\u63A5",id:"\u94FE\u63A5",level:2}];function a(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"arrayprototypecopywithin",children:"Array.prototype.copyWithin()"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Array.prototype.copyWithin()"})," \u65B9\u6CD5\u7528\u4E8E\u5C06\u6570\u7EC4\u4E2D\u7684\u6307\u5B9A\u90E8\u5206\u590D\u5236\u5230\u540C\u4E00\u6570\u7EC4\u4E2D\u7684\u53E6\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u5E76\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u6570\u7EC4\u3002\u8BE5\u65B9\u6CD5\u4F1A\u76F4\u63A5\u4FEE\u6539\u539F\u6570\u7EC4\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"copyWithin()"})," \u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF1A",(0,i.jsx)(e.code,{children:"target"}),"\u3001",(0,i.jsx)(e.code,{children:"start"})," \u548C ",(0,i.jsx)(e.code,{children:"end"}),"\uFF0C\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u6570\u7EC4\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const arr = [1, 2, 3, 4, 5];\nconst newArr = arr.copyWithin(0, 3, 4);\n// Array.prototype.copyWithin\nconsole.log(newArr); // [4, 2, 3, 4, 5]\n"})}),"\n",(0,i.jsx)(e.h3,{id:"target",children:"target"}),"\n",(0,i.jsx)(e.p,{children:"\u6307\u5B9A\u590D\u5236\u5230\u7684\u76EE\u6807\u8D77\u59CB\u4F4D\u7F6E\u7684\u6570\u7EC4\u7D22\u5F15\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"start",children:"start"}),"\n",(0,i.jsx)(e.p,{children:"\u6307\u5B9A\u5F00\u59CB\u590D\u5236\u7684\u8D77\u59CB\u4F4D\u7F6E\u7684\u6570\u7EC4\u7D22\u5F15\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"end",children:"end"}),"\n",(0,i.jsx)(e.p,{children:"\u6307\u5B9A\u505C\u6B62\u590D\u5236\u7684\u7ED3\u675F\u4F4D\u7F6E\u7684\u6570\u7EC4\u7D22\u5F15\uFF08\u4E0D\u5305\u62EC\u8BE5\u4F4D\u7F6E\u7684\u5143\u7D20\uFF09\u3002\u5982\u679C\u8D85\u8FC7\u6570\u7EC4\u957F\u5EA6\uFF0C\u5219\u590D\u5236\u5230\u6570\u7EC4\u672B\u5C3E\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"copyWithin()"})," \u65B9\u6CD5\u5728\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u4E0B\u5177\u6709\u4E0D\u540C\u7684\u884C\u4E3A\uFF1A"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"3~4"})," \u8868\u793A\u590D\u5236\u4E0B\u6807\u4E3A 3 \u5230 4 \u4E4B\u95F4\u7684\u5143\u7D20\uFF0C\u4E0D\u5305\u62EC\u4E0B\u6807 4\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53 ",(0,i.jsx)(e.code,{children:"end"})," \u8D85\u8FC7\u6570\u7EC4\u957F\u5EA6\u65F6\uFF0C\u590D\u5236\u5C06\u6301\u7EED\u5230\u6570\u7EC4\u7684\u672B\u5C3E\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679C ",(0,i.jsx)(e.code,{children:"target"})," \u8D85\u8FC7\u6570\u7EC4\u957F\u5EA6\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u884C\u4EFB\u4F55\u66FF\u6362\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53 ",(0,i.jsx)(e.code,{children:"target"})," \u5927\u4E8E ",(0,i.jsx)(e.code,{children:"start"})," \u65F6\uFF0C\u6B63\u5E38\u8FDB\u884C\u66FF\u6362\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679C ",(0,i.jsx)(e.code,{children:"start"})," \u6216 ",(0,i.jsx)(e.code,{children:"end"})," \u662F\u8D1F\u6570\uFF0C\u5219\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"start + length"})," \u548C ",(0,i.jsx)(e.code,{children:"end + length"})," \u8BA1\u7B97\u5B9E\u9645\u4F4D\u7F6E\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4EC5\u5F53 ",(0,i.jsx)(e.code,{children:"target"})," \u8986\u76D6\u6574\u4E2A\u6570\u7EC4\u5143\u7D20\u65F6\uFF0C\u4ECE ",(0,i.jsx)(e.code,{children:"target"})," \u4F4D\u5F00\u59CB\u66FF\u6362\uFF0C\u5269\u4F59\u90E8\u5206\u4E0D\u53D7\u5F71\u54CD\uFF0C\u4E14\u6570\u7EC4\u957F\u5EA6\u4FDD\u6301\u4E0D\u53D8\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"copyWithin"})," \u4F1A\u4FEE\u6539\u539F\u6570\u7EC4\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const arr = [1, 2, 3, 4, 5];\nconst newArr = arr.copyWithin(0, 3, 4);\nconsole.log(newArr); // [4, 2, 3, 4, 5]\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5143\u7D20\u4E3A\u5F15\u7528\u503C",children:"\u5143\u7D20\u4E3A\u5F15\u7528\u503C"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"copyWithin()"})," \u8FDB\u884C\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C\u590D\u5236\u7684\u5BF9\u8C61\u4ECD\u7136\u5F15\u7528\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const arr = [\n  { id: 1, name: '\u5F20\u4E09' },\n  { id: 2, name: '\u674E\u56DB' },\n  { id: 3, name: '\u738B\u4E94' },\n  { id: 4, name: '\u8D75\u516D' },\n  { id: 5, name: '\u516D\u4E03' },\n  { id: 6, name: '\u5468\u516B' },\n];\n\nconst targetBefore = arr[2];\nconst newArr = arr.copyWithin(0, 2, 3);\nconst targetAfter = arr[0];\n\nconsole.log(targetBefore === targetAfter); // true\nconsole.log(newArr);\n// [\n//   { id: 3, name: '\u738B\u4E94' },\n//   { id: 2, name: '\u674E\u56DB' },\n//   { id: 3, name: '\u738B\u4E94' },\n//   { id: 4, name: '\u8D75\u516D' },\n//   { id: 5, name: '\u516D\u4E03' },\n//   { id: 6, name: '\u5468\u516B' },\n// ]\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u7C7B\u6570\u7EC4\u5BF9\u8C61",children:"\u7C7B\u6570\u7EC4\u5BF9\u8C61"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"copyWithin()"})," \u53EF\u4EE5\u5E94\u7528\u4E8E\u7C7B\u6570\u7EC4\u5BF9\u8C61\uFF0C\u901A\u8FC7\u4FEE\u6539 ",(0,i.jsx)(e.code,{children:"this"})," \u6307\u5411\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const obj = {\n  0: 1,\n  1: 2,\n  2: 3,\n  3: 4,\n  4: 5,\n  length: 5,\n};\n\nconst newObj = [].copyWithin.call(obj, 0, 2, 4);\nconsole.log(newObj); // { '0': 3, '1': 4, '2': 3, '3': 4, '4': 5, length: 5 }\nconsole.log(obj === newObj); // true\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4F4D\u8FD0\u7B97",children:"\u4F4D\u8FD0\u7B97"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 ",(0,i.jsx)(e.code,{children:"copyWithin"})," \u7684\u5B9E\u73B0\u4E2D\uFF0C\u4F4D\u8FD0\u7B97\u7528\u4E8E\u5904\u7406\u53C2\u6570\u7684\u8F6C\u6362\uFF0C\u786E\u4FDD\u53C2\u6570\u4E3A\u6709\u6548\u7684\u6574\u6570\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6709\u7B26\u53F7\u4F4D\u79FB",children:"\u6709\u7B26\u53F7\u4F4D\u79FB"}),"\n",(0,i.jsxs)(e.h4,{id:"\u5DE6\u4F4D\u79FB-",children:["\u5DE6\u4F4D\u79FB (",(0,i.jsx)(e.code,{children:"<<"}),")"]}),"\n",(0,i.jsx)(e.p,{children:"\u5C06\u6570\u5B57\u7684\u4E8C\u8FDB\u5236\u4F4D\u5411\u5DE6\u79FB\u52A8\u6307\u5B9A\u7684\u4F4D\u6570\uFF0C\u5DE6\u4FA7\u6EA2\u51FA\u7684\u4F4D\u5C06\u88AB\u4E22\u5F03\uFF0C\u53F3\u4FA7\u7528\u96F6\u586B\u5145\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"console.log(5 << 2); // 20\n"})}),"\n",(0,i.jsxs)(e.h4,{id:"\u53F3\u4F4D\u79FB-",children:["\u53F3\u4F4D\u79FB (",(0,i.jsx)(e.code,{children:">>"}),")"]}),"\n",(0,i.jsx)(e.p,{children:"\u5C06\u6570\u5B57\u7684\u4E8C\u8FDB\u5236\u4F4D\u5411\u53F3\u79FB\u52A8\u6307\u5B9A\u7684\u4F4D\u6570\uFF0C\u4FDD\u7559\u7B26\u53F7\u4F4D\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"console.log(5 >> 2); // 1\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u65E0\u7B26\u53F7\u4F4D\u79FB",children:"\u65E0\u7B26\u53F7\u4F4D\u79FB"}),"\n",(0,i.jsxs)(e.p,{children:["\u65E0\u7B26\u53F7\u4F4D\u79FB\uFF08\u903B\u8F91\u4F4D\u79FB\uFF09\u4E0D\u8003\u8651\u7B26\u53F7\u4F4D\uFF0C\u9AD8\u4F4D\u8865 ",(0,i.jsx)(e.code,{children:"0"}),"\uFF0C\u7ED3\u679C\u603B\u4E3A\u6B63\u6570\u3002"]}),"\n",(0,i.jsxs)(e.h4,{id:"\u53F3\u4F4D\u79FB--1",children:["\u53F3\u4F4D\u79FB (",(0,i.jsx)(e.code,{children:">>>"}),")"]}),"\n",(0,i.jsx)(e.p,{children:"\u5C06\u6570\u5B57\u7684\u4E8C\u8FDB\u5236\u4F4D\u5411\u53F3\u79FB\u52A8\u6307\u5B9A\u7684\u4F4D\u6570\uFF0C\u5DE6\u4FA7\u7528\u96F6\u586B\u5145\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const a = [98, 85, 65, 92, 78, 98, 78, 65, 87, 85, 87, 48, 75, 48, 65, 48];\nconsole.log(a.length >>> 0); // 16\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"\u81EA\u5B9A\u4E49\u5B9E\u73B0-copywithin",children:["\u81EA\u5B9A\u4E49\u5B9E\u73B0 ",(0,i.jsx)(e.code,{children:"copyWithin"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u4EE5\u4E0B\u662F ",(0,i.jsx)(e.code,{children:"Array.prototype.copyWithin"})," \u7684\u81EA\u5B9A\u4E49\u5B9E\u73B0 ",(0,i.jsx)(e.code,{children:"myCopyWithin"}),"\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"Array.prototype.myCopyWithin = function (target, start, end) {\n  if (this == null) {\n    throw new TypeError('this is null or not defined');\n  }\n\n  const obj = Object(this);\n  const len = obj.length >>> 0;\n\n  let to = target >> 0;\n  to = to < 0 ? Math.max(len + to, 0) : Math.min(to, len);\n\n  let from = start >> 0;\n  from = from < 0 ? Math.max(len + from, 0) : Math.min(from, len);\n\n  let final = end !== undefined ? end >> 0 : len;\n  final = final < 0 ? Math.max(len + final, 0) : Math.min(final, len);\n\n  const count = Math.min(final - from, len - to);\n  let direction = 1;\n\n  if (from < to && to < from + count) {\n    direction = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n\n  for (let i = 0; i < count; i++) {\n    if (from in obj) {\n      obj[to] = obj[from];\n    } else {\n      delete obj[to];\n    }\n    from += direction;\n    to += direction;\n  }\n\n  return obj;\n};\n\nconst arr = [1, 2, 3, 4, 5];\nconst newArr = arr.myCopyWithin(0, 3, 4);\nconsole.log(newArr); // [4, 2, 3, 4, 5]\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"copyWithin()"})," \u4F1A\u4FEE\u6539\u539F\u6570\u7EC4\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u65B9\u6CD5\u4E0D\u4F1A\u6539\u53D8\u6570\u7EC4\u7684\u957F\u5EA6\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u590D\u5236\u7684\u5143\u7D20\u662F\u6D45\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\u7684\u5143\u7D20\uFF0C\u590D\u5236\u7684\u662F\u5F15\u7528\u5730\u5740\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u94FE\u63A5",children:"\u94FE\u63A5"}),"\n",(0,i.jsxs)(e.p,{children:["\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u8BBF\u95EE ",(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin",children:"Array.prototype.copyWithin() - JavaScript | MDN"}),"\u3002"]})]})}function h(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},50065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return c}});var t=r(67294);let i={},o=t.createContext(i);function c(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);