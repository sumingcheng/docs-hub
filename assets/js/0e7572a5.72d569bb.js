"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["72274"],{40753:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>s,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/forEach-filter-map\u7684\u4F7F\u7528\u4E0E\u91CD\u5199","title":"forEach\u3001filter \u548C map","description":"Array.prototype.forEach()","source":"@site/docs/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/40.forEach-filter-map\u7684\u4F7F\u7528\u4E0E\u91CD\u5199.md","sourceDirName":"Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5","slug":"/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/forEach-filter-map\u7684\u4F7F\u7528\u4E0E\u91CD\u5199","permalink":"/docs-hub/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/forEach-filter-map\u7684\u4F7F\u7528\u4E0E\u91CD\u5199","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/40.forEach-filter-map\u7684\u4F7F\u7528\u4E0E\u91CD\u5199.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":40,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"every\u3001some\u3001reduce \u548C reduceRight","permalink":"/docs-hub/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/every-some-reduce-reduceRight\u4F7F\u7528\u4E0E\u91CD\u5199"},"next":{"title":"\u5E38\u89C1\u95EE\u9898","permalink":"/docs-hub/category/\u5E38\u89C1\u95EE\u9898"}}'),a=r("85893"),l=r("50065");let i={},c="forEach\u3001filter \u548C map",s={},o=[{value:"Array.prototype.forEach()",id:"arrayprototypeforeach",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:3},{value:"\u91CD\u5199 forEach",id:"\u91CD\u5199-foreach",level:3},{value:"Array.prototype.filter()",id:"arrayprototypefilter",level:2},{value:"\u7279\u70B9",id:"\u7279\u70B9",level:3},{value:"\u91CD\u5199 filter",id:"\u91CD\u5199-filter",level:3},{value:"Array.prototype.map()",id:"arrayprototypemap",level:2},{value:"\u91CD\u5199 map",id:"\u91CD\u5199-map",level:3}];function d(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"foreachfilter-\u548C-map",children:"forEach\u3001filter \u548C map"})}),"\n",(0,a.jsx)(n.h2,{id:"arrayprototypeforeach",children:"Array.prototype.forEach()"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"forEach"})," \u65B9\u6CD5\u5728 ",(0,a.jsx)(n.code,{children:"ES5"})," \u4E2D\u5F15\u5165\uFF0C\u7528\u4E8E\u5BF9\u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u4E00\u6B21\u6307\u5B9A\u7684\u51FD\u6570\u3002\u5B83\u4E0D\u4F1A\u8FD4\u56DE\u7ED3\u679C\uFF0C\u800C\u662F\u5BF9\u6570\u7EC4\u8FDB\u884C\u904D\u5386\u64CD\u4F5C\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,a.jsx)(n.p,{children:"\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u5F53\u524D\u5143\u7D20 (",(0,a.jsx)(n.code,{children:"element"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5F53\u524D\u5143\u7D20\u7684\u7D22\u5F15 (",(0,a.jsx)(n.code,{children:"index"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["\u6574\u4E2A\u6570\u7EC4 (",(0,a.jsx)(n.code,{children:"array"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u9009\uFF0C\u7528\u4E8E\u6307\u5B9A\u56DE\u8C03\u51FD\u6570\u4E2D\u7684 ",(0,a.jsx)(n.code,{children:"this"})," \u503C\u3002\u5982\u679C\u4F20\u5165\u7684\u662F\u539F\u59CB\u503C\uFF0C\u4F1A\u8FDB\u884C\u5305\u88C5\uFF0C\u4F46\u4E0D\u4F1A\u5305\u88C5 ",(0,a.jsx)(n.code,{children:"null"})," \u548C ",(0,a.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const arr = [{ a: 1, c: 1 }, { b: 2 }, { c: 3 }];\n\n// \u666E\u901A\u5FAA\u73AF\nfor (let i = 0; i < arr.length; i++) {\n  console.log(arr[i], i, arr);\n}\n\n// \u4F7F\u7528 forEach\narr.forEach(function (element, index, array) {\n  console.log(this, element);\n}, '1');\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:r(4336).Z+"",width:"859",height:"339"})}),"\n",(0,a.jsx)(n.h3,{id:"\u91CD\u5199-foreach",children:"\u91CD\u5199 forEach"}),"\n",(0,a.jsxs)(n.p,{children:["\u4EE5\u4E0B\u662F ",(0,a.jsx)(n.code,{children:"forEach"})," \u65B9\u6CD5\u7684\u81EA\u5B9A\u4E49\u5B9E\u73B0\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.myForEach = function (callback) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[1] || window;\n\n  for (let i = 0; i < length; i++) {\n    callback.call(thisArg, array[i], i, array);\n  }\n};\n\n// \u793A\u4F8B\u4F7F\u7528\nconst sampleArray = [{ a: 1 }, { b: 2 }, { c: 3 }];\nsampleArray.myForEach(function (element, index, array) {\n  console.log(this, element);\n}, '1');\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6CE8\u610F\u4E8B\u9879"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"forEach"})," \u4E0D\u4F1A\u4E2D\u9014\u505C\u6B62\uFF0C\u5373\u4F7F\u56DE\u8C03\u51FD\u6570\u4E2D\u4F7F\u7528\u4E86 ",(0,a.jsx)(n.code,{children:"return"})," \u4E5F\u4E0D\u4F1A\u5F71\u54CD\u904D\u5386\u8FC7\u7A0B\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u65E0\u6CD5\u94FE\u5F0F\u8C03\u7528\uFF0C\u56E0\u4E3A ",(0,a.jsx)(n.code,{children:"forEach"})," \u8FD4\u56DE ",(0,a.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"arrayprototypefilter",children:"Array.prototype.filter()"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"filter"})," \u65B9\u6CD5\u7528\u4E8E\u7B5B\u9009\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u5305\u542B\u6240\u6709\u901A\u8FC7\u6D4B\u8BD5\u7684\u5143\u7D20\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u7279\u70B9",children:"\u7279\u70B9"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5BF9\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u9879\u8FDB\u884C\u5224\u65AD\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u901A\u8FC7\u8FD4\u56DE\u5E03\u5C14\u503C\u6765\u51B3\u5B9A\u5143\u7D20\u662F\u5426\u4FDD\u7559\u5728\u65B0\u6570\u7EC4\u4E2D\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const filteredArray = data.filter(function (element) {\n  return element.is_free === '1';\n});\n\nconsole.log(filteredArray);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u91CD\u5199-filter",children:"\u91CD\u5199 filter"}),"\n",(0,a.jsxs)(n.p,{children:["\u4EE5\u4E0B\u662F ",(0,a.jsx)(n.code,{children:"filter"})," \u65B9\u6CD5\u7684\u81EA\u5B9A\u4E49\u5B9E\u73B0\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.myFilter = function (callback) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[1] || window;\n  const resultArray = [];\n\n  for (let i = 0; i < length; i++) {\n    if (callback.call(thisArg, array[i], i, array)) {\n      // \u5047\u8BBE deepClone \u662F\u4E00\u4E2A\u5DF2\u5B9A\u4E49\u7684\u6DF1\u62F7\u8D1D\u51FD\u6570\n      resultArray.push(deepClone(array[i]));\n    }\n  }\n  return resultArray;\n};\n\n// \u793A\u4F8B\u4F7F\u7528\nconst filteredData = data.myFilter(function (element) {\n  return element.is_free === '1';\n  console.log(this);\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u786E\u4FDD\u56DE\u8C03\u51FD\u6570\u4E0D\u4FEE\u6539\u539F\u6570\u7EC4\uFF0C\u4EE5\u907F\u514D\u526F\u4F5C\u7528\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u53EF\u4EE5\u66F4\u7B80\u6D01\u5730\u7F16\u5199\u56DE\u8C03\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"arrayprototypemap",children:"Array.prototype.map()"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"map"})," \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5176\u7ED3\u679C\u662F\u5BF9\u539F\u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\u8C03\u7528\u4E00\u4E2A\u63D0\u4F9B\u7684\u51FD\u6570\u540E\u7684\u8FD4\u56DE\u503C\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const newArray = data.map(\n  function (element, index, array) {\n    // \u64CD\u4F5C\u6570\u7EC4\u4E0D\u4F1A\u4FEE\u6539\u539F\u6570\u7EC4\uFF0C\u56E0\u4E3A\u8FD4\u56DE\u7684\u662F\u65B0\u5143\u7D20\n    return { ...element, course: this.name + element.course };\n  },\n  { name: 'title' }\n);\n\nconsole.log(newArray);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u91CD\u5199-map",children:"\u91CD\u5199 map"}),"\n",(0,a.jsxs)(n.p,{children:["\u4EE5\u4E0B\u662F ",(0,a.jsx)(n.code,{children:"map"})," \u65B9\u6CD5\u7684\u81EA\u5B9A\u4E49\u5B9E\u73B0\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.myMap = function (callback) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[1] || window;\n  const resultArray = [];\n\n  for (let i = 0; i < length; i++) {\n    // \u5047\u8BBE deepClone \u662F\u4E00\u4E2A\u5DF2\u5B9A\u4E49\u7684\u6DF1\u62F7\u8D1D\u51FD\u6570\n    const clonedElement = deepClone(array[i]);\n    resultArray.push(callback.call(thisArg, clonedElement, i, array));\n  }\n  return resultArray;\n};\n\n// \u793A\u4F8B\u4F7F\u7528\nconst mappedData = data.myMap(\n  function (element) {\n    return { ...element, course: this.name + element.course };\n  },\n  { name: 'title' }\n);\n\nconsole.log(mappedData);\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"map"})," \u8FDB\u884C\u4E0D\u53EF\u53D8\u64CD\u4F5C\uFF0C\u907F\u514D\u76F4\u63A5\u4FEE\u6539\u539F\u6570\u7EC4\u3002"]}),"\n",(0,a.jsx)(n.li,{children:"\u8FD4\u56DE\u65B0\u7684\u5BF9\u8C61\u6216\u503C\uFF0C\u4EE5\u4FDD\u6301\u6570\u636E\u7684\u7EAF\u7CB9\u6027\u3002"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4336:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/874dfe3b20ede38dcb6cdef3d1e5f3ab-a62e44527e053029137f4172e0a5ef5d.png"},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(67294);let a={},l=t.createContext(a);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);