"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["987"],{39731:function(n,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>t,contentTitle:()=>s});var i=JSON.parse('{"id":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.from","title":"Array.from()","description":"Array.from() \u65B9\u6CD5\u7528\u4E8E\u4ECE\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u6216\u53EF\u8FED\u4EE3\u5BF9\u8C61\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6D45\u62F7\u8D1D\u7684\u6570\u7EC4\u5B9E\u4F8B\u3002","source":"@site/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/40.Array.from.md","sourceDirName":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5","slug":"/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.from","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.from","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/40.Array.from.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734402243000,"sidebarPosition":40,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"14 \u79CD\u64CD\u4F5C\u5BF9\u8C61\u65B9\u6CD5","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Proxy\u4E0EES-14\u79CD\u5BF9\u8C61\u64CD\u4F5C\u65B9\u6CD5"},"next":{"title":"Array.prototype.copyWithin()","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.copyWithin"}}'),a=r("85893"),c=r("50065");let o={},s="Array.from()",l={},t=[{value:"\u8FD4\u56DE\u65B0\u6570\u7EC4\u5F15\u7528",id:"\u8FD4\u56DE\u65B0\u6570\u7EC4\u5F15\u7528",level:2},{value:"\u5185\u90E8\u5F15\u7528\u4E0D\u505A\u6DF1\u62F7\u8D1D",id:"\u5185\u90E8\u5F15\u7528\u4E0D\u505A\u6DF1\u62F7\u8D1D",level:2},{value:"\u5904\u7406\u5B57\u7B26\u4E32",id:"\u5904\u7406\u5B57\u7B26\u4E32",level:2},{value:"\u5904\u7406\u4E0D\u53EF\u8FED\u4EE3\u5BF9\u8C61",id:"\u5904\u7406\u4E0D\u53EF\u8FED\u4EE3\u5BF9\u8C61",level:3},{value:"\u7C7B\u6570\u7EC4",id:"\u7C7B\u6570\u7EC4",level:2},{value:"\u9519\u8BEF\u4E0B\u6807\u7C7B\u6570\u7EC4",id:"\u9519\u8BEF\u4E0B\u6807\u7C7B\u6570\u7EC4",level:2},{value:"Map \u5BF9\u8C61",id:"map-\u5BF9\u8C61",level:2},{value:"Set \u5BF9\u8C61",id:"set-\u5BF9\u8C61",level:2},{value:"\u8FD4\u56DE\u6B63\u5E38\u6570\u7EC4\u7684\u5FC5\u8981\u6761\u4EF6",id:"\u8FD4\u56DE\u6B63\u5E38\u6570\u7EC4\u7684\u5FC5\u8981\u6761\u4EF6",level:2},{value:"\u672A\u63D0\u4F9B\u53C2\u6570",id:"\u672A\u63D0\u4F9B\u53C2\u6570",level:2},{value:"\u4E09\u4E2A\u53C2\u6570",id:"\u4E09\u4E2A\u53C2\u6570",level:2},{value:"\u6267\u884C\u539F\u7406\u5BF9\u6BD4",id:"\u6267\u884C\u539F\u7406\u5BF9\u6BD4",level:3},{value:"\u586B\u5145\u6570\u7EC4",id:"\u586B\u5145\u6570\u7EC4",level:2},{value:"\u5408\u5E76\u548C\u53BB\u91CD",id:"\u5408\u5E76\u548C\u53BB\u91CD",level:2}];function d(n){let e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"arrayfrom",children:"Array.from()"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Array.from()"})," \u65B9\u6CD5\u7528\u4E8E\u4ECE\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u6216\u53EF\u8FED\u4EE3\u5BF9\u8C61\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6D45\u62F7\u8D1D\u7684\u6570\u7EC4\u5B9E\u4F8B\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u65B0\u6570\u7EC4\u5F15\u7528",children:"\u8FD4\u56DE\u65B0\u6570\u7EC4\u5F15\u7528"}),"\n",(0,a.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,a.jsx)(e.code,{children:"Array.from()"})," \u521B\u5EFA\u7684\u65B0\u6570\u7EC4\u4E0E\u539F\u6570\u7EC4\u4E0D\u540C\uFF0C\u5B83\u4EEC\u62E5\u6709\u5404\u81EA\u7684\u5F15\u7528\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arr = [1, 2, 3];\nconst newArr = Array.from(arr);\n\nconsole.log(newArr === arr); // false\nconsole.log(newArr); // [1, 2, 3]\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u5185\u90E8\u5F15\u7528\u4E0D\u505A\u6DF1\u62F7\u8D1D",children:"\u5185\u90E8\u5F15\u7528\u4E0D\u505A\u6DF1\u62F7\u8D1D"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Array.from()"})," \u8FDB\u884C\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C\u5185\u90E8\u5BF9\u8C61\u7684\u5F15\u7528\u4F9D\u7136\u6307\u5411\u539F\u59CB\u5BF9\u8C61\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arr = [\n  {\n    id: 1,\n    name: '\u5F20\u4E09',\n  },\n  {\n    id: 2,\n    name: '\u674E\u56DB',\n  },\n];\n\nconst newArr = Array.from(arr);\n\nconsole.log(arr[1] === newArr[1]); // true\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u5904\u7406\u5B57\u7B26\u4E32",children:"\u5904\u7406\u5B57\u7B26\u4E32"}),"\n",(0,a.jsxs)(e.p,{children:["\u7531\u4E8E\u5B57\u7B26\u4E32\u5B9E\u73B0\u4E86\u53EF\u8FED\u4EE3\u63A5\u53E3 ",(0,a.jsx)(e.code,{children:"Symbol.iterator"}),"\uFF0C",(0,a.jsx)(e.code,{children:"Array.from()"})," \u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5B57\u7B26\u6570\u7EC4\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const str = '123';\nconst newArr = Array.from(str);\n\nconsole.log(newArr); // ['1', '2', '3']\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u5904\u7406\u4E0D\u53EF\u8FED\u4EE3\u5BF9\u8C61",children:"\u5904\u7406\u4E0D\u53EF\u8FED\u4EE3\u5BF9\u8C61"}),"\n",(0,a.jsxs)(e.p,{children:["\u5BF9\u4E8E\u4E0D\u53EF\u8FED\u4EE3\u7684\u5BF9\u8C61\uFF0C",(0,a.jsx)(e.code,{children:"Array.from()"})," \u5C06\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u6570\u7EC4\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const num = 123;\nconst newArr = Array.from(num);\n\nconsole.log(newArr); // []\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u7C7B\u6570\u7EC4",children:"\u7C7B\u6570\u7EC4"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Array.from()"})," \u4E5F\u53EF\u4EE5\u5C06\u7C7B\u6570\u7EC4\u5BF9\u8C61\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arrLike = {\n  0: 'a',\n  1: 'b',\n  2: 'c',\n  length: 3,\n};\n\nconst newArr = Array.from(arrLike);\nconsole.log(newArr); // ['a', 'b', 'c']\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u9519\u8BEF\u4E0B\u6807\u7C7B\u6570\u7EC4",children:"\u9519\u8BEF\u4E0B\u6807\u7C7B\u6570\u7EC4"}),"\n",(0,a.jsxs)(e.p,{children:["\u5BF9\u4E8E\u7C7B\u6570\u7EC4\u5BF9\u8C61\u4E2D\u7F3A\u5931\u7684\u7D22\u5F15\uFF0C",(0,a.jsx)(e.code,{children:"Array.from()"})," \u4F1A\u586B\u5145 ",(0,a.jsx)(e.code,{children:"undefined"}),"\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arrLike = {\n  1: 'a',\n  3: 'b',\n  4: 'c',\n  length: 5,\n};\n\nconst newArr = Array.from(arrLike);\nconsole.log(newArr); // [undefined, 'a', undefined, 'b', 'c']\n"})}),"\n",(0,a.jsx)(e.h2,{id:"map-\u5BF9\u8C61",children:"Map \u5BF9\u8C61"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Array.from()"})," \u53EF\u4EE5\u5C06 ",(0,a.jsx)(e.code,{children:"Map"})," \u5BF9\u8C61\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n]);\n\nconsole.log(m);\n\nconst newArr = Array.from(m);\nconsole.log(newArr);\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:r(71480).Z+"",width:"736",height:"488"})}),"\n",(0,a.jsx)(e.h2,{id:"set-\u5BF9\u8C61",children:"Set \u5BF9\u8C61"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Array.from()"})," \u53EF\u4EE5\u5C06 ",(0,a.jsx)(e.code,{children:"Set"})," \u5BF9\u8C61\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const s = new Set([1, 2, 3]);\n\nconsole.log(s);\n\nconst newArr = Array.from(s);\nconsole.log(newArr); // [1, 2, 3]\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u8FD4\u56DE\u6B63\u5E38\u6570\u7EC4\u7684\u5FC5\u8981\u6761\u4EF6",children:"\u8FD4\u56DE\u6B63\u5E38\u6570\u7EC4\u7684\u5FC5\u8981\u6761\u4EF6"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Array.from()"})," \u8FD4\u56DE\u6B63\u5E38\u6570\u7EC4\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u53C2\u6570\u5FC5\u987B\u662F\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u6216\u8005\u662F\u6807\u51C6\u7684\u7C7B\u6570\u7EC4\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.h1,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,a.jsx)(e.h2,{id:"\u672A\u63D0\u4F9B\u53C2\u6570",children:"\u672A\u63D0\u4F9B\u53C2\u6570"}),"\n",(0,a.jsxs)(e.p,{children:["\u5982\u679C\u4E0D\u4F20\u9012\u53C2\u6570\uFF0C",(0,a.jsx)(e.code,{children:"Array.from()"})," \u4F1A\u5C1D\u8BD5\u4F7F\u7528 ",(0,a.jsx)(e.code,{children:"undefined"}),"\uFF0C\u8FD9\u4F1A\u5BFC\u81F4 TypeError\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const newArr = Array.from();\n// Uncaught TypeError: undefined is not iterable\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u4E09\u4E2A\u53C2\u6570",children:"\u4E09\u4E2A\u53C2\u6570"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Array.from()"})," \u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF1A\u76EE\u6807\u6570\u7EC4\u3001\u6620\u5C04\u51FD\u6570\uFF08\u63A5\u6536\u6BCF\u4E00\u9879\u53CA\u5176\u7D22\u5F15\uFF09\u3001\u4EE5\u53CA\u6620\u5C04\u51FD\u6570\u7684 ",(0,a.jsx)(e.code,{children:"this"})," \u6307\u5411\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arrLike = {\n  0: 1,\n  1: 2,\n  2: 3,\n  length: 3,\n};\n\nconst newArr = Array.from(\n  arrLike,\n  function (item, index) {\n    // \u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u56DE\u8C03\u51FD\u6570\u5185\u90E8\u7684 this \u6307\u5411 window\n    console.log(item, index);\n    console.log(this);\n    return item;\n  },\n  { a: 1 }\n);\n\nconsole.log(newArr);\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u6267\u884C\u539F\u7406\u5BF9\u6BD4",children:"\u6267\u884C\u539F\u7406\u5BF9\u6BD4"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"from"})," \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u6267\u884C\u539F\u7406\u4E0E ",(0,a.jsx)(e.code,{children:"map"})," \u57FA\u672C\u76F8\u540C\uFF0C\u4F46 ",(0,a.jsx)(e.code,{children:"from"})," \u662F\u4E00\u4E2A\u6574\u4F53\u64CD\u4F5C\uFF0C\u800C ",(0,a.jsx)(e.code,{children:"map"})," \u662F\u5148\u8F6C\u6362\u518D\u6620\u5C04\uFF0C\u56E0\u6B64 ",(0,a.jsx)(e.code,{children:"map"})," \u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u53EF\u4EE5\u8BBF\u95EE\u6570\u7EC4\u53C2\u6570\uFF0C\u800C ",(0,a.jsx)(e.code,{children:"from"})," \u8FD8\u672A\u6267\u884C\u5B8C\u6BD5\uFF0C\u6CA1\u6709\u6570\u7EC4\u53C2\u6570\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arrLike = {\n  0: 1,\n  1: 2,\n  2: 3,\n  length: 3,\n};\n\nconst newArr = Array.from(arrLike).map(function (item, index, array) {\n  console.log(item, index);\n  return item + 1;\n});\n\nconsole.log(newArr);\n"})}),"\n",(0,a.jsx)(e.h1,{id:"\u5E38\u89C1\u4F7F\u7528",children:"\u5E38\u89C1\u4F7F\u7528"}),"\n",(0,a.jsx)(e.h2,{id:"\u586B\u5145\u6570\u7EC4",children:"\u586B\u5145\u6570\u7EC4"}),"\n",(0,a.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,a.jsx)(e.code,{children:"Array.from()"})," \u53EF\u4EE5\u65B9\u4FBF\u5730\u586B\u5145\u6570\u7EC4\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const r = range(1, 10, 2);\nconsole.log(r); // [1, 3, 5, 7, 9]\n\nfunction range(start, stop, step) {\n  return Array.from({ length: Math.floor((stop - start) / step) + 1 }, function (item, index) {\n    return start + index * step;\n  });\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u5408\u5E76\u548C\u53BB\u91CD",children:"\u5408\u5E76\u548C\u53BB\u91CD"}),"\n",(0,a.jsxs)(e.p,{children:["\u7ED3\u5408 ",(0,a.jsx)(e.code,{children:"Array.from()"})," \u548C ",(0,a.jsx)(e.code,{children:"Set"})," \u53EF\u4EE5\u5B9E\u73B0\u6570\u7EC4\u7684\u5408\u5E76\u4E0E\u53BB\u91CD\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const arr = [1, 2, 3, 4, 5, 1, 2];\n\nfunction combine() {\n  const combined = Array.prototype.concat.apply([], arguments);\n  return Array.from(new Set(combined));\n}\n\nconsole.log(combine(arr));\n"})}),"\n",(0,a.jsx)(e.h1,{id:"\u5B9E\u73B0-arrayfrom",children:"\u5B9E\u73B0 Array.from()"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"function myArrayFrom(arrayLike, mapFn, thisArg) {\n  // \u68C0\u67E5 arrayLike \u662F\u5426\u4E3A null \u6216 undefined\n  if (arrayLike == null) {\n    throw new TypeError('Array.from requires an array-like object');\n  }\n\n  // \u83B7\u53D6\u8FED\u4EE3\u5668\u65B9\u6CD5\n  let iteratorMethod = arrayLike[Symbol.iterator];\n  let items = [];\n\n  if (typeof iteratorMethod === 'function') {\n    // \u5982\u679C\u662F\u53EF\u8FED\u4EE3\u5BF9\u8C61,\u4F7F\u7528\u8FED\u4EE3\u5668\u83B7\u53D6\u503C\n    let iterator = iteratorMethod.call(arrayLike);\n    let next = iterator.next();\n    while (!next.done) {\n      items.push(next.value);\n      next = iterator.next();\n    }\n  } else {\n    // \u5904\u7406\u7C7B\u6570\u7EC4\u5BF9\u8C61\n    let len = arrayLike.length >>> 0;\n    for (let i = 0; i < len; i++) {\n      if (i in arrayLike) {\n        items[i] = arrayLike[i];\n      }\n    }\n  }\n\n  // \u5982\u679C\u63D0\u4F9B\u4E86 mapFn,\u5BF9\u6BCF\u4E2A\u5143\u7D20\u8FDB\u884C\u6620\u5C04\n  if (typeof mapFn === 'function') {\n    items = items.map((item, index) => {\n      return mapFn.call(thisArg, item, index);\n    });\n  }\n\n  return items;\n}\n\n// \u6D4B\u8BD5\nconst obj = {\n  0: 1,\n  1: 2,\n  2: 3,\n  length: 3,\n};\n\nconsole.log(myArrayFrom(obj)); // [1, 2, 3]\nconsole.log(myArrayFrom(obj, (x) => x * 2)); // [2, 4, 6]\n"})})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},71480:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/b2082bcb63a9beb71604cea96ed3cdf1-bec545cc2237246db269c154f7fc0a08.png"},50065:function(n,e,r){r.d(e,{Z:function(){return s},a:function(){return o}});var i=r(67294);let a={},c=i.createContext(a);function o(n){let e=i.useContext(c);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);