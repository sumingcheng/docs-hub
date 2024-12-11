"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[71277],{8468:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Frontend/JavaScript/Promise/\u8fed\u4ee3\u5668-\u751f\u6210\u5668","title":"\u751f\u6210\u5668\u4e0e\u8fed\u4ee3\u5668","description":"\u5728 JavaScript \u4e2d\uff0cPromise\u7684\u53d1\u5c55\u6700\u7ec8\u4fc3\u6210\u4e86async\u548cawait\u7684\u8bde\u751f\u3002async\u548cawait\u7684\u80cc\u540e\uff0c\u7075\u611f\u6765\u6e90\u4e8e\u751f\u6210\u5668\uff0c\u751f\u6210\u5668\u672c\u8eab\u80fd\u591f\u521b\u5efa\u8fed\u4ee3\u5668\u3002","source":"@site/docs/Frontend/JavaScript/Promise/70.\u8fed\u4ee3\u5668-\u751f\u6210\u5668.md","sourceDirName":"Frontend/JavaScript/Promise","slug":"/Frontend/JavaScript/Promise/\u8fed\u4ee3\u5668-\u751f\u6210\u5668","permalink":"/docs-hub/Frontend/JavaScript/Promise/\u8fed\u4ee3\u5668-\u751f\u6210\u5668","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/Promise/70.\u8fed\u4ee3\u5668-\u751f\u6210\u5668.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":70,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"Generator \u751f\u6210\u5668","permalink":"/docs-hub/Frontend/JavaScript/Promise/Generator"},"next":{"title":"\u5f02\u6b65\u7f16\u7a0b\u4e0e Promise","permalink":"/docs-hub/Frontend/JavaScript/Promise/Promise\u524d\u7f6e\u77e5\u8bc6"}}');var o=t(74848),i=t(28453);const s={},c="\u751f\u6210\u5668\u4e0e\u8fed\u4ee3\u5668",l={},a=[{value:"\u5b9e\u73b0\u4e00\u4e2a\u8fed\u4ee3\u5668",id:"\u5b9e\u73b0\u4e00\u4e2a\u8fed\u4ee3\u5668",level:2},{value:"\u6570\u7ec4\u7684\u8fed\u4ee3",id:"\u6570\u7ec4\u7684\u8fed\u4ee3",level:3},{value:"\u5bf9\u8c61\u7684\u8fed\u4ee3\u5b9e\u73b0",id:"\u5bf9\u8c61\u7684\u8fed\u4ee3\u5b9e\u73b0",level:3},{value:"\u8fed\u4ee3\u4e00\u4e2a\u5bf9\u8c61",id:"\u8fed\u4ee3\u4e00\u4e2a\u5bf9\u8c61",level:3},{value:"\u8fed\u4ee3",id:"\u8fed\u4ee3",level:2},{value:"\u904d\u5386",id:"\u904d\u5386",level:2},{value:"yield",id:"yield",level:2},{value:"next \u8d4b\u503c",id:"next-\u8d4b\u503c",level:2},{value:"\u5bf9\u8c61\u7684\u8fed\u4ee3",id:"\u5bf9\u8c61\u7684\u8fed\u4ee3",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u751f\u6210\u5668\u4e0e\u8fed\u4ee3\u5668",children:"\u751f\u6210\u5668\u4e0e\u8fed\u4ee3\u5668"})}),"\n",(0,o.jsxs)(e.p,{children:["\u5728 JavaScript \u4e2d\uff0c",(0,o.jsx)(e.code,{children:"Promise"}),"\u7684\u53d1\u5c55\u6700\u7ec8\u4fc3\u6210\u4e86",(0,o.jsx)(e.code,{children:"async"}),"\u548c",(0,o.jsx)(e.code,{children:"await"}),"\u7684\u8bde\u751f\u3002",(0,o.jsx)(e.code,{children:"async"}),"\u548c",(0,o.jsx)(e.code,{children:"await"}),"\u7684\u80cc\u540e\uff0c\u7075\u611f\u6765\u6e90\u4e8e\u751f\u6210\u5668\uff0c\u751f\u6210\u5668\u672c\u8eab\u80fd\u591f\u521b\u5efa\u8fed\u4ee3\u5668\u3002"]}),"\n",(0,o.jsx)(e.h1,{id:"\u8fed\u4ee3\u5668",children:"\u8fed\u4ee3\u5668"}),"\n",(0,o.jsx)(e.p,{children:"\u8fed\u4ee3\u5668\u63d0\u4f9b\u4e86\u4e00\u79cd\u7edf\u4e00\u7684\u65b9\u6cd5\u6765\u904d\u5386\u5404\u79cd\u6570\u636e\u7c7b\u578b\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"const array = [1, 2, 3, 4];\nconst string = '123';\nconst object = {\n  a: 1,\n  b: 2,\n};\nconsole.log(Object.getPrototypeOf(string));\n// \u83b7\u53d6\u5b57\u7b26\u4e32\u7684\u539f\u578b\n\nconst iterator = array[Symbol.iterator]();\n// \u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u5177\u5907next\u65b9\u6cd5\uff0c\u901a\u8fc7next\u65b9\u6cd5\u9010\u6b65\u8c03\u7528\nconsole.log(iterator.next());\nconsole.log(iterator.next());\nconsole.log(iterator.next());\nconsole.log(iterator.next());\nconsole.log(iterator.next());\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5b9e\u73b0\u4e00\u4e2a\u8fed\u4ee3\u5668",children:"\u5b9e\u73b0\u4e00\u4e2a\u8fed\u4ee3\u5668"}),"\n",(0,o.jsx)(e.h3,{id:"\u6570\u7ec4\u7684\u8fed\u4ee3",children:"\u6570\u7ec4\u7684\u8fed\u4ee3"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"const array = [1, 2, 3, 4];\n\nfunction createIterator(items) {\n  let currentIndex = 0;\n  return {\n    next() {\n      if (currentIndex < items.length) {\n        return {\n          value: items[currentIndex++],\n          done: false,\n        };\n      }\n      return {\n        value: undefined,\n        done: true,\n      };\n    },\n  };\n}\n\nconst iterator = createIterator(array);\nconsole.log(iterator.next());\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u5bf9\u8c61\u7684\u8fed\u4ee3\u5b9e\u73b0",children:"\u5bf9\u8c61\u7684\u8fed\u4ee3\u5b9e\u73b0"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"const obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n  [Symbol.iterator]() {\n    let currentIndex = 0;\n    const entries = Object.entries(this);\n    return {\n      next() {\n        if (currentIndex < entries.length) {\n          return {\n            value: entries[currentIndex++],\n            done: false,\n          };\n        }\n        return {\n          value: undefined,\n          done: true,\n        };\n      },\n    };\n  },\n};\n\nconst iterator = obj[Symbol.iterator]();\nconsole.log(iterator.next());\nconsole.log(iterator.next());\nconsole.log(iterator.next());\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u8fed\u4ee3\u4e00\u4e2a\u5bf9\u8c61",children:"\u8fed\u4ee3\u4e00\u4e2a\u5bf9\u8c61"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"const obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n  [Symbol.iterator]() {\n    let currentIndex = 0;\n    const entries = Object.entries(this);\n    return {\n      next() {\n        if (currentIndex < entries.length) {\n          return {\n            value: entries[currentIndex++],\n            done: false,\n          };\n        }\n        return {\n          value: undefined,\n          done: true,\n        };\n      },\n    };\n  },\n};\n\nfor (const entry of obj) {\n  console.log(entry);\n}\n"})}),"\n",(0,o.jsx)(e.h1,{id:"\u904d\u5386\u548c\u8fed\u4ee3",children:"\u904d\u5386\u548c\u8fed\u4ee3"}),"\n",(0,o.jsx)(e.h2,{id:"\u8fed\u4ee3",children:"\u8fed\u4ee3"}),"\n",(0,o.jsx)(e.p,{children:"\u8fed\u4ee3\u662f\u4e00\u79cd\u6a21\u5f0f\uff0c\u6309\u7167\u987a\u5e8f\u4ece\u76ee\u6807\u6e90\u4e2d\u9010\u4e2a\u63d0\u53d6\u6570\u636e\u3002\u76ee\u6807\u6e90\u901a\u5e38\u662f\u6709\u5e8f\u4e14\u8fde\u7eed\u7684\u6570\u636e\u7ed3\u6784\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u904d\u5386",children:"\u904d\u5386"}),"\n",(0,o.jsx)(e.p,{children:"\u904d\u5386\u6307\u7684\u662f\u5c06\u6570\u636e\u6309\u67d0\u79cd\u65b9\u5f0f\u5c55\u793a\u51fa\u6765\uff0c\u800c\u4e0d\u8003\u8651\u5176\u5185\u90e8\u7684\u987a\u5e8f\u3002"}),"\n",(0,o.jsx)(e.h1,{id:"\u751f\u6210\u5668",children:"\u751f\u6210\u5668"}),"\n",(0,o.jsx)(e.p,{children:"\u751f\u6210\u5668\u7528\u4e8e\u521b\u5efa\u8fed\u4ee3\u5668\uff0c\u7b80\u5316\u8fed\u4ee3\u5668\u7684\u5b9e\u73b0\u8fc7\u7a0b\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"function* generateNumbers() {\n  yield 1;\n  yield 2;\n  yield 3;\n  yield 4;\n}\nconst iterator = generateNumbers();\n\nfor (const number of iterator) {\n  console.log(number);\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"yield",children:"yield"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"yield"}),"\u5173\u952e\u5b57\u7528\u4e8e\u5728\u751f\u6210\u5668\u51fd\u6570\u4e2d\u6682\u505c\u6267\u884c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u503c\u3002\u6bcf\u6b21\u8c03\u7528",(0,o.jsx)(e.code,{children:"next"}),"\u65b9\u6cd5\u65f6\uff0c\u751f\u6210\u5668\u51fd\u6570\u4f1a\u4ece\u4e0a\u4e00\u6b21\u6682\u505c\u7684\u5730\u65b9\u7ee7\u7eed\u6267\u884c\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"function* generateValues() {\n  console.log('\u5f00\u59cb\u751f\u6210\u7b2c\u4e00\u4e2a\u503c');\n  yield 1;\n  console.log('\u5f00\u59cb\u751f\u6210\u7b2c\u4e8c\u4e2a\u503c');\n  yield 2;\n  yield 3;\n  yield 4;\n}\n\nconst iterator = generateValues();\nconsole.log(iterator.next());\nconsole.log(iterator.next());\nconsole.log(iterator.next());\n"})}),"\n",(0,o.jsx)(e.h2,{id:"next-\u8d4b\u503c",children:"next \u8d4b\u503c"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"next"}),"\u65b9\u6cd5\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u8be5\u53c2\u6570\u4f1a\u88ab\u8d4b\u503c\u7ed9\u4e0a\u4e00\u4e2a",(0,o.jsx)(e.code,{children:"yield"}),"\u8868\u8fbe\u5f0f\u3002\u8fd9\u79cd\u4f20\u503c\u65b9\u5f0f\u867d\u7136\u6709\u4e9b\u5947\u7279\uff0c\u4f46\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"function* interactGenerator() {\n  const firstInput = yield 1;\n  console.log(`\u63a5\u6536\u5230\u7684\u7b2c\u4e00\u4e2a\u8f93\u5165: ${firstInput}`);\n\n  const secondInput = yield 2;\n  console.log(`\u63a5\u6536\u5230\u7684\u7b2c\u4e8c\u4e2a\u8f93\u5165: ${secondInput}`);\n\n  const thirdInput = yield 3;\n  console.log(`\u63a5\u6536\u5230\u7684\u7b2c\u4e09\u4e2a\u8f93\u5165: ${thirdInput}`);\n\n  const fourthInput = yield 4;\n  console.log(`\u63a5\u6536\u5230\u7684\u7b2c\u56db\u4e2a\u8f93\u5165: ${fourthInput}`);\n}\n\nconst iterator = interactGenerator();\nconsole.log(iterator.next());\nconsole.log(iterator.next('\u8f93\u5165\u4e00'));\nconsole.log(iterator.next('\u8f93\u5165\u4e8c'));\nconsole.log(iterator.next('\u8f93\u5165\u4e09'));\nconsole.log(iterator.next('\u8f93\u5165\u56db'));\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:t(39553).A+"",width:"634",height:"409"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5bf9\u8c61\u7684\u8fed\u4ee3",children:"\u5bf9\u8c61\u7684\u8fed\u4ee3"}),"\n",(0,o.jsx)(e.p,{children:"\u4f7f\u7528\u751f\u6210\u5668\u51fd\u6570\u53ef\u4ee5\u7b80\u5316\u5bf9\u8c61\u7684\u8fed\u4ee3\u5668\u5b9e\u73b0\uff0c\u65e0\u9700\u663e\u5f0f\u5730\u8fd4\u56de\u503c\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"const obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n  *[Symbol.iterator]() {\n    const entries = Object.entries(this);\n    for (const entry of entries) {\n      yield entry;\n    }\n  },\n};\n\nfor (const entry of obj) {\n  console.log(entry);\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},39553:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/0dc8ad173a6175a3ea67c11824c86c1a-25c997d95bb8d79f46e5753714d943bd.png"},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var r=t(96540);const o={},i=r.createContext(o);function s(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);