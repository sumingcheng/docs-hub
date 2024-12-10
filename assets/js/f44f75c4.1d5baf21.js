"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[15794],{75282:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/every-some-reduce-reduceRight\u4f7f\u7528\u4e0e\u91cd\u5199","title":"every\u3001some\u3001reduce \u548c reduceRight","description":"Array.prototype.every()","source":"@site/docs/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/30.every-some-reduce-reduceRight\u4f7f\u7528\u4e0e\u91cd\u5199.md","sourceDirName":"Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5","slug":"/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/every-some-reduce-reduceRight\u4f7f\u7528\u4e0e\u91cd\u5199","permalink":"/docs-hub/docs/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/every-some-reduce-reduceRight\u4f7f\u7528\u4e0e\u91cd\u5199","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/30.every-some-reduce-reduceRight\u4f7f\u7528\u4e0e\u91cd\u5199.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":30,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5","permalink":"/docs-hub/docs/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5"},"next":{"title":"forEach\u3001filter \u548c map","permalink":"/docs-hub/docs/Frontend/JavaScript/\u6570\u7ec4\u6269\u5c55\u65b9\u6cd5/forEach-filter-map\u7684\u4f7f\u7528\u4e0e\u91cd\u5199"}}');var a=r(74848),c=r(28453);const i={},o="every\u3001some\u3001reduce \u548c reduceRight",s={},l=[{value:"Array.prototype.every()",id:"arrayprototypeevery",level:2},{value:"\u91cd\u5199 every",id:"\u91cd\u5199-every",level:2},{value:"Array.prototype.some()",id:"arrayprototypesome",level:2},{value:"\u91cd\u5199 some",id:"\u91cd\u5199-some",level:2},{value:"Array.prototype.reduce()",id:"arrayprototypereduce",level:2},{value:"\u91cd\u5199 reduce",id:"\u91cd\u5199-reduce",level:2},{value:"\u91cd\u5199 reduceRight",id:"\u91cd\u5199-reduceright",level:2},{value:"\u641c\u7d22\u529f\u80fd",id:"\u641c\u7d22\u529f\u80fd",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"everysomereduce-\u548c-reduceright",children:"every\u3001some\u3001reduce \u548c reduceRight"})}),"\n",(0,a.jsx)(n.h2,{id:"arrayprototypeevery",children:"Array.prototype.every()"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"every"})," \u65b9\u6cd5\u7528\u4e8e\u6d4b\u8bd5\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u662f\u5426\u90fd\u901a\u8fc7\u4e86\u6307\u5b9a\u51fd\u6570\u7684\u6d4b\u8bd5\u3002\u5982\u679c\u6570\u7ec4\u4e2d\u7684\u67d0\u4e2a\u5143\u7d20\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u904d\u5386\u5c06\u4f1a\u505c\u6b62\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"data.every(\n  function (element, index, array) {\n    console.log(element);\n    return element.is_free === '0';\n  },\n  { a: 1 }\n);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u91cd\u5199-every",children:"\u91cd\u5199 every"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0b\u9762\u662f ",(0,a.jsx)(n.code,{children:"every"})," \u65b9\u6cd5\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.myEvery = function (callback) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[1] || window;\n  let result = true;\n\n  for (let i = 0; i < length; i++) {\n    if (!callback.call(thisArg, array[i], i, array)) {\n      result = false;\n      break;\n    }\n  }\n  return result;\n};\n\ndata.myEvery(\n  function (element, index, array) {\n    console.log(element);\n    console.log(this);\n    return element.is_free === '0';\n  },\n  { a: 1 }\n);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"arrayprototypesome",children:"Array.prototype.some()"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"some"})," \u65b9\u6cd5\u7528\u4e8e\u6d4b\u8bd5\u6570\u7ec4\u4e2d\u662f\u5426\u81f3\u5c11\u6709\u4e00\u4e2a\u5143\u7d20\u901a\u8fc7\u4e86\u6307\u5b9a\u51fd\u6570\u7684\u6d4b\u8bd5\u3002\u5982\u679c\u627e\u5230\u8fd9\u6837\u7684\u5143\u7d20\uff0c\u904d\u5386\u5c06\u4f1a\u505c\u6b62\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"data.some(\n  function (element, index, array) {\n    console.log(element);\n    return element.is_free === '0';\n  },\n  { a: 1 }\n);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u91cd\u5199-some",children:"\u91cd\u5199 some"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0b\u9762\u662f ",(0,a.jsx)(n.code,{children:"some"})," \u65b9\u6cd5\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.mySome = function (callback) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[1] || window;\n  let result = false;\n\n  for (let i = 0; i < length; i++) {\n    if (callback.call(thisArg, array[i], i, array)) {\n      result = true;\n      break;\n    }\n  }\n  return result;\n};\n\ndata.mySome(\n  function (element, index, array) {\n    console.log(element);\n    console.log(this);\n    return element.is_free === '0';\n  },\n  { a: 1 }\n);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"arrayprototypereduce",children:"Array.prototype.reduce()"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"reduce"})," \u65b9\u6cd5\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u4e2a\u7531\u60a8\u63d0\u4f9b\u7684 reducer \u51fd\u6570\uff0c\u5c06\u5176\u7ed3\u679c\u6c47\u603b\u4e3a\u5355\u4e2a\u8f93\u51fa\u503c\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const cookieDataString = 'a=1; b=2; c=3;';\n\nconst cookieArray = cookieDataString.split('; ');\nconst cookieObject = cookieArray.reduce(function (accumulator, current) {\n  const [key, value] = current.split('=');\n  accumulator[key] = value;\n  return accumulator;\n}, {});\nconsole.log(cookieObject);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u91cd\u5199-reduce",children:"\u91cd\u5199 reduce"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0b\u9762\u662f ",(0,a.jsx)(n.code,{children:"reduce"})," \u65b9\u6cd5\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.myReduce = function (callback, initialValue) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[2] || window;\n  let accumulator = initialValue;\n\n  for (let i = 0; i < length; i++) {\n    accumulator = callback.call(thisArg, accumulator, array[i], i, array);\n  }\n  return accumulator;\n};\n\nconst cookieDataString = 'a=1; b=2; c=3;';\n\nconst cookieArray = cookieDataString.split('; ');\nconst cookieObject = cookieArray.myReduce(function (accumulator, current) {\n  const [key, value] = current.split('=');\n  accumulator[key] = value;\n  return accumulator;\n}, {});\nconsole.log(cookieObject);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u91cd\u5199-reduceright",children:"\u91cd\u5199 reduceRight"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"reduceRight"})," \u65b9\u6cd5\u4e0e ",(0,a.jsx)(n.code,{children:"reduce"})," \u7c7b\u4f3c\uff0c\u4f46\u5b83\u4ece\u6570\u7ec4\u7684\u672b\u5c3e\u5f00\u59cb\u904d\u5386\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"Array.prototype.myReduceRight = function (callback, initialValue) {\n  const array = this;\n  const length = array.length;\n  const thisArg = arguments[2] || window;\n  let accumulator = initialValue;\n\n  for (let i = length - 1; i >= 0; i--) {\n    accumulator = callback.call(thisArg, accumulator, array[i], i, array);\n  }\n  return accumulator;\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u641c\u7d22\u529f\u80fd",children:"\u641c\u7d22\u529f\u80fd"}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b9e\u73b0\u8bfe\u7a0b\u641c\u7d22\u529f\u80fd\u7684\u793a\u4f8b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<input type="text" id="J_search" placeholder="\u641c\u7d22\u8bfe\u7a0b" />\n<ul class="J_list">\n  <span>- \u6682\u65e0\u6570\u636e -</span>\n</ul>\n<div id="J_data"></div>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"(function (document) {\n  const searchInput = document.getElementById('J_search');\n  const listElement = document.getElementsByClassName('J_list')[0];\n\n  const initialize = function () {\n    bindEvents();\n  };\n\n  function bindEvents() {\n    searchInput.addEventListener('input', searchCourse, false);\n  }\n\n  function searchCourse() {\n    const query = this.value.trim();\n    if (query.length > 0) {\n      const filteredData = filterData(data, query);\n      const listHTML = createList(filteredData);\n      listElement.innerHTML = listHTML || `<span>\u6682\u65e0\u6570\u636e</span>`;\n    } else {\n      listElement.innerHTML = `<span>\u6682\u65e0\u6570\u636e</span>`;\n    }\n  }\n\n  function filterData(data, keyword) {\n    return data.reduce(function (accumulator, current) {\n      if (current.course.includes(keyword)) {\n        accumulator.push(current);\n      }\n      return accumulator;\n    }, []);\n  }\n\n  function createList(data) {\n    if (!data || data.length === 0) {\n      return '';\n    }\n\n    return data\n      .map(function (item) {\n        return `<li>${item.course}</li>`;\n      })\n      .join('');\n  }\n\n  initialize();\n})(document);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},c=t.createContext(a);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);