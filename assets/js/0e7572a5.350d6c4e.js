"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[84055],{43055:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/forEach-filter-map\u7684\u4f7f\u7528\u4e0e\u91cd\u5199","title":"forEach\u3001filter \u548c map","description":"Array.prototype.forEach()","source":"@site/docs/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/40.forEach-filter-map\u7684\u4f7f\u7528\u4e0e\u91cd\u5199.md","sourceDirName":"Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5","slug":"/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/forEach-filter-map\u7684\u4f7f\u7528\u4e0e\u91cd\u5199","permalink":"/docs-hub/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/forEach-filter-map\u7684\u4f7f\u7528\u4e0e\u91cd\u5199","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/40.forEach-filter-map\u7684\u4f7f\u7528\u4e0e\u91cd\u5199.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":40,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"every\u3001some\u3001reduce \u548c reduceRight","permalink":"/docs-hub/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/every-some-reduce-reduceRight\u4f7f\u7528\u4e0e\u91cd\u5199"},"next":{"title":"\u5e38\u89c1\u95ee\u9898","permalink":"/docs-hub/category/\u5e38\u89c1\u95ee\u9898"}}');var a=r(74848),l=r(28453);const c={},i="forEach\u3001filter \u548c map",s={},o=[{value:"Array.prototype.forEach()",id:"arrayprototypeforeach",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u91cd\u5199 forEach",id:"\u91cd\u5199-foreach",level:3},{value:"Array.prototype.filter()",id:"arrayprototypefilter",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"\u91cd\u5199 filter",id:"\u91cd\u5199-filter",level:3},{value:"Array.prototype.map()",id:"arrayprototypemap",level:2},{value:"\u91cd\u5199 map",id:"\u91cd\u5199-map",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"foreachfilter-\u548c-map",children:"forEach\u3001filter \u548c map"})}),"\n",(0,a.jsx)(n.h2,{id:"arrayprototypeforeach",children:"Array.prototype.forEach()"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"forEach"})," \u65b9\u6cd5\u5728 ",(0,a.jsx)(n.code,{children:"ES5"})," \u4e2d\u5f15\u5165\uff0c\u7528\u4e8e\u5bf9\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u6b21\u6307\u5b9a\u7684\u51fd\u6570\u3002\u5b83\u4e0d\u4f1a\u8fd4\u56de\u7ed3\u679c\uff0c\u800c\u662f\u5bf9\u6570\u7ec4\u8fdb\u884c\u904d\u5386\u64cd\u4f5c\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,a.jsx)(n.p,{children:"\u56de\u8c03\u51fd\u6570\u63a5\u6536\u4e09\u4e2a\u53c2\u6570\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u5f53\u524d\u5143\u7d20 (",(0,a.jsx)(n.code,{children:"element"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5f53\u524d\u5143\u7d20\u7684\u7d22\u5f15 (",(0,a.jsx)(n.code,{children:"index"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["\u6574\u4e2a\u6570\u7ec4 (",(0,a.jsx)(n.code,{children:"array"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u9009\uff0c\u7528\u4e8e\u6307\u5b9a\u56de\u8c03\u51fd\u6570\u4e2d\u7684 ",(0,a.jsx)(n.code,{children:"this"})," \u503c\u3002\u5982\u679c\u4f20\u5165\u7684\u662f\u539f\u59cb\u503c\uff0c\u4f1a\u8fdb\u884c\u5305\u88c5\uff0c\u4f46\u4e0d\u4f1a\u5305\u88c5 ",(0,a.jsx)(n.code,{children:"null"})," \u548c ",(0,a.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const arr = [{ a: 1, c: 1 }, { b: 2 }, { c: 3 }];\n\n// \u666e\u901a\u5faa\u73af\nfor (let i = 0; i < arr.length; i++) {\n  console.log(arr[i], i, arr);\n}\n\n// \u4f7f\u7528 forEach\narr.forEach(function (element, index, array) {\n  console.log(this, element);\n}, '1');\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:r(96807).A+"",width:"859",height:"339"})}),"\n",(0,a.jsx)(n.h3,{id:"\u91cd\u5199-foreach",children:"\u91cd\u5199 forEach"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f ",(0,a.jsx)(n.code,{children:"forEach"})," \u65b9\u6cd5\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.myForEach = function (callback) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[1] || window;\n\n  for (let i = 0; i < length; i++) {\n    callback.call(thisArg, array[i], i, array);\n  }\n};\n\n// \u793a\u4f8b\u4f7f\u7528\nconst sampleArray = [{ a: 1 }, { b: 2 }, { c: 3 }];\nsampleArray.myForEach(function (element, index, array) {\n  console.log(this, element);\n}, '1');\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6ce8\u610f\u4e8b\u9879"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"forEach"})," \u4e0d\u4f1a\u4e2d\u9014\u505c\u6b62\uff0c\u5373\u4f7f\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528\u4e86 ",(0,a.jsx)(n.code,{children:"return"})," \u4e5f\u4e0d\u4f1a\u5f71\u54cd\u904d\u5386\u8fc7\u7a0b\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u65e0\u6cd5\u94fe\u5f0f\u8c03\u7528\uff0c\u56e0\u4e3a ",(0,a.jsx)(n.code,{children:"forEach"})," \u8fd4\u56de ",(0,a.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"arrayprototypefilter",children:"Array.prototype.filter()"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"filter"})," \u65b9\u6cd5\u7528\u4e8e\u7b5b\u9009\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\uff0c\u5305\u542b\u6240\u6709\u901a\u8fc7\u6d4b\u8bd5\u7684\u5143\u7d20\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u9879\u8fdb\u884c\u5224\u65ad\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u901a\u8fc7\u8fd4\u56de\u5e03\u5c14\u503c\u6765\u51b3\u5b9a\u5143\u7d20\u662f\u5426\u4fdd\u7559\u5728\u65b0\u6570\u7ec4\u4e2d\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const filteredArray = data.filter(function (element) {\n  return element.is_free === '1';\n});\n\nconsole.log(filteredArray);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u91cd\u5199-filter",children:"\u91cd\u5199 filter"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f ",(0,a.jsx)(n.code,{children:"filter"})," \u65b9\u6cd5\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.myFilter = function (callback) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[1] || window;\n  const resultArray = [];\n\n  for (let i = 0; i < length; i++) {\n    if (callback.call(thisArg, array[i], i, array)) {\n      // \u5047\u8bbe deepClone \u662f\u4e00\u4e2a\u5df2\u5b9a\u4e49\u7684\u6df1\u62f7\u8d1d\u51fd\u6570\n      resultArray.push(deepClone(array[i]));\n    }\n  }\n  return resultArray;\n};\n\n// \u793a\u4f8b\u4f7f\u7528\nconst filteredData = data.myFilter(function (element) {\n  return element.is_free === '1';\n  console.log(this);\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6700\u4f73\u5b9e\u8df5"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u786e\u4fdd\u56de\u8c03\u51fd\u6570\u4e0d\u4fee\u6539\u539f\u6570\u7ec4\uff0c\u4ee5\u907f\u514d\u526f\u4f5c\u7528\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u53ef\u4ee5\u66f4\u7b80\u6d01\u5730\u7f16\u5199\u56de\u8c03\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"arrayprototypemap",children:"Array.prototype.map()"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"map"})," \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u65b0\u6570\u7ec4\uff0c\u5176\u7ed3\u679c\u662f\u5bf9\u539f\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u8c03\u7528\u4e00\u4e2a\u63d0\u4f9b\u7684\u51fd\u6570\u540e\u7684\u8fd4\u56de\u503c\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const newArray = data.map(\n  function (element, index, array) {\n    // \u64cd\u4f5c\u6570\u7ec4\u4e0d\u4f1a\u4fee\u6539\u539f\u6570\u7ec4\uff0c\u56e0\u4e3a\u8fd4\u56de\u7684\u662f\u65b0\u5143\u7d20\n    return { ...element, course: this.name + element.course };\n  },\n  { name: 'title' }\n);\n\nconsole.log(newArray);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u91cd\u5199-map",children:"\u91cd\u5199 map"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f ",(0,a.jsx)(n.code,{children:"map"})," \u65b9\u6cd5\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.myMap = function (callback) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[1] || window;\n  const resultArray = [];\n\n  for (let i = 0; i < length; i++) {\n    // \u5047\u8bbe deepClone \u662f\u4e00\u4e2a\u5df2\u5b9a\u4e49\u7684\u6df1\u62f7\u8d1d\u51fd\u6570\n    const clonedElement = deepClone(array[i]);\n    resultArray.push(callback.call(thisArg, clonedElement, i, array));\n  }\n  return resultArray;\n};\n\n// \u793a\u4f8b\u4f7f\u7528\nconst mappedData = data.myMap(\n  function (element) {\n    return { ...element, course: this.name + element.course };\n  },\n  { name: 'title' }\n);\n\nconsole.log(mappedData);\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6700\u4f73\u5b9e\u8df5"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"map"})," \u8fdb\u884c\u4e0d\u53ef\u53d8\u64cd\u4f5c\uff0c\u907f\u514d\u76f4\u63a5\u4fee\u6539\u539f\u6570\u7ec4\u3002"]}),"\n",(0,a.jsx)(n.li,{children:"\u8fd4\u56de\u65b0\u7684\u5bf9\u8c61\u6216\u503c\uff0c\u4ee5\u4fdd\u6301\u6570\u636e\u7684\u7eaf\u7cb9\u6027\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},96807:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/874dfe3b20ede38dcb6cdef3d1e5f3ab-a62e44527e053029137f4172e0a5ef5d.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(96540);const a={},l=t.createContext(a);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);