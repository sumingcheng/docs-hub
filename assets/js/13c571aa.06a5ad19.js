"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[23245],{59135:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Frontend/JavaScript/JS-\u5e38\u89c1\u5185\u7f6e\u65b9\u6cd5/Array.prototype.flatMap","title":"Array.prototype.flatMap","description":"\u7b49\u540c\u4e8e","source":"@site/docs/Frontend/JavaScript/JS-\u5e38\u89c1\u5185\u7f6e\u65b9\u6cd5/110.Array.prototype.flatMap.md","sourceDirName":"Frontend/JavaScript/JS-\u5e38\u89c1\u5185\u7f6e\u65b9\u6cd5","slug":"/Frontend/JavaScript/JS-\u5e38\u89c1\u5185\u7f6e\u65b9\u6cd5/Array.prototype.flatMap","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5e38\u89c1\u5185\u7f6e\u65b9\u6cd5/Array.prototype.flatMap","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/JS-\u5e38\u89c1\u5185\u7f6e\u65b9\u6cd5/110.Array.prototype.flatMap.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":110,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"Array.prototype.flat()","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5e38\u89c1\u5185\u7f6e\u65b9\u6cd5/Array.prototype.flat"},"next":{"title":"includes","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5e38\u89c1\u5185\u7f6e\u65b9\u6cd5/Array.prototype.includes"}}');var a=r(74848),s=r(28453);const i={},o="Array.prototype.flatMap",c={},l=[{value:"\u7b49\u540c\u4e8e",id:"\u7b49\u540c\u4e8e",level:2},{value:"\u62c6\u89e3\u82f1\u6587\u53e5\u5b50",id:"\u62c6\u89e3\u82f1\u6587\u53e5\u5b50",level:2},{value:"\u904d\u5386\u65f6\u589e\u52a0\u9879",id:"\u904d\u5386\u65f6\u589e\u52a0\u9879",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"arrayprototypeflatmap",children:"Array.prototype.flatMap"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"// Array.prototype.flatMap ES2020\nconst arr = ['123', '456', '678'];\n\n// \u4f7f\u7528 map \u548c flat \u65b9\u6cd5\u5b9e\u73b0\u5e73\u94fa\nconst newArr1 = arr\n  .map(function (item) {\n    return item.split('');\n  })\n  .flat();\n\nconsole.log(newArr1);\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u7b49\u540c\u4e8e",children:"\u7b49\u540c\u4e8e"}),"\n",(0,a.jsxs)(e.p,{children:["\u5c06 ",(0,a.jsx)(e.code,{children:"map"})," \u548c ",(0,a.jsx)(e.code,{children:"flat"})," \u7ed3\u5408\u4f7f\u7528\uff0c\u5b9e\u9645\u4e0a\u53ef\u4ee5\u901a\u8fc7 ",(0,a.jsx)(e.code,{children:"flatMap"})," \u4e00\u6b65\u5b8c\u6210\u3002\u8fd9\u79cd\u65b9\u5f0f\u7684\u6548\u7387\u66f4\u9ad8\uff0c\u56e0\u4e3a\u5b83\u907f\u514d\u4e86\u5bf9\u6570\u7ec4\u7684\u591a\u6b21\u904d\u5386\u3002",(0,a.jsx)(e.code,{children:"ECMA-262"})," \u548c ",(0,a.jsx)(e.code,{children:"MDN"})," \u90fd\u6709\u63d0\u5230\u8fd9\u79cd\u6027\u80fd\u5dee\u5f02\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const newArr2 = arr.flatMap(function (item) {\n  return item.split('');\n});\n\nconsole.log(newArr2);\n"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h1,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"flatMap"})," \u63a5\u53d7\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u548c\u4e00\u4e2a\u53ef\u9009\u7684 ",(0,a.jsx)(e.code,{children:"this"})," \u6307\u5411\u4f5c\u4e3a\u53c2\u6570\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"// \u53c2\u6570\u8bf4\u660e\uff1a\n// 1. \u5f53\u524d\u904d\u5386\u7684\u5143\u7d20\n// 2. \u5f53\u524d\u904d\u5386\u7684\u5143\u7d20\u5728\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\n// 3. \u6570\u7ec4\u672c\u8eab\n// flatMap \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u4ee5\u4fee\u6539\u56de\u8c03\u51fd\u6570\u7684 `this` \u6307\u5411\nconst arr = ['123', '456', '678'];\n\nconst newArr3 = arr.flatMap(\n  function (item, index, arr) {\n    console.log(item, index, arr);\n    console.log(this); // \u663e\u793a `this` \u7684\u503c\n  },\n  { a: 1 }\n);\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c",(0,a.jsx)(e.code,{children:"this"})," \u88ab\u7ed1\u5b9a\u4e3a ",(0,a.jsx)(e.code,{children:"{ a: 1 }"}),"\uff0c\u56de\u8c03\u51fd\u6570\u4e2d ",(0,a.jsx)(e.code,{children:"this"})," \u7684\u503c\u4f1a\u88ab\u8f93\u51fa\u3002"]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h1,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,a.jsx)(e.h2,{id:"\u62c6\u89e3\u82f1\u6587\u53e5\u5b50",children:"\u62c6\u89e3\u82f1\u6587\u53e5\u5b50"}),"\n",(0,a.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u5c06\u82f1\u6587\u53e5\u5b50\u6309\u5355\u8bcd\u8fdb\u884c\u62c6\u5206\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(e.code,{children:"flatMap"}),"\uff0c\u5b83\u5c06\u6bcf\u4e2a\u53e5\u5b50\u6309\u7a7a\u683c\u62c6\u5206\u4e3a\u5355\u4e2a\u5355\u8bcd\uff0c\u5e76\u5c06\u5176\u5e73\u94fa\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arr = [\"My name's SMC\", \"I'm 35\", 'years old.'];\n\nconst newArr = arr.flatMap(function (item) {\n  return item.split(' '); // \u4f7f\u7528\u7a7a\u683c\u62c6\u5206\u6bcf\u4e2a\u53e5\u5b50\n});\n\nconsole.log(newArr);\n// ['My', \"name's\", 'SMC', \"I'm\", '35', 'years', 'old.']\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u904d\u5386\u65f6\u589e\u52a0\u9879",children:"\u904d\u5386\u65f6\u589e\u52a0\u9879"}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u5904\u7406\u6570\u7ec4\u65f6\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u5bf9\u8d1f\u6570\u8fdb\u884c\u7279\u6b8a\u5904\u7406\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.jsx)(e.code,{children:"flatMap"})," \u5728\u904d\u5386\u65f6\u589e\u52a0\u989d\u5916\u7684\u9879\u3002\u6bd4\u5982\uff0c\u5c06\u8d1f\u6570\u4e0e\u524d\u4e00\u4e2a\u5143\u7d20\u76f8\u52a0\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arr = [1, -2, -3, 5, 8, -9, 6, 7, 0];\n\nconst newArr = arr.flatMap(function (item, index) {\n  if (item < 0 && index >= 1) {\n    return [item, `${item} + ${arr[index - 1]} = ${item + arr[index - 1]}`];\n  }\n  return item;\n});\n\nconsole.log(newArr);\n// [1, -2, '-2+1 = -1', -3, '-3+-2 = -5', 5, 8, -9, '-9+8 = -1', 6, 7, 0]\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u8d1f\u6570\u4f1a\u4e0e\u524d\u4e00\u4e2a\u6570\u5b57\u76f8\u52a0\uff0c\u5e76\u4ee5\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u8fd4\u56de\u3002"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsxs)(e.h1,{id:"flatmap-\u65b9\u6cd5\u5b9e\u73b0",children:[(0,a.jsx)(e.code,{children:"flatMap"})," \u65b9\u6cd5\u5b9e\u73b0"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u81ea\u5df1\u5b9e\u73b0\u7c7b\u4f3c ",(0,a.jsx)(e.code,{children:"flatMap"})," \u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arr = ['123', '456', '678'];\n\nArray.prototype.myFlatMap = function (cb) {\n  // \u5224\u65ad\u56de\u8c03\u51fd\u6570\u662f\u5426\u6709\u6548\n  if (typeof cb !== 'function') {\n    throw new TypeError('Callback must be a function');\n  }\n\n  // \u4fdd\u5b58\u5f53\u524d\u6570\u7ec4\u548c\u4f20\u5165\u7684 this \u503c\n  var arr = this,\n    arg2 = arguments[1],\n    res = [],\n    item;\n\n  for (var i = 0; i < arr.length; i++) {\n    // \u56de\u8c03\u51fd\u6570\u4f1a\u4f7f\u7528 apply \u65b9\u6cd5\u7ed1\u5b9a this\n    item = cb.apply(arg2, [arr[i], i, arr]);\n\n    // \u5982\u679c\u8fd4\u56de\u503c\u4e3a\u771f\uff0c\u52a0\u5165\u7ed3\u679c\u6570\u7ec4\n    if (item) {\n      res.push(item);\n    }\n  }\n\n  // \u4f7f\u7528 flat \u65b9\u6cd5\u8fdb\u884c\u6570\u7ec4\u5e73\u94fa\n  return res.flat();\n};\n\nconst newArr = arr.myFlatMap(function (item) {\n  return item.split(''); // \u5c06\u6bcf\u4e2a\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u5b57\u7b26\u6570\u7ec4\n});\n\nconsole.log(newArr);\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);