"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["27769"],{43494:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>o});var a=JSON.parse('{"id":"Frontend/JavaScript/Promise/async-await","title":"async/await \u4E0E Promise \u7684\u5BF9\u6BD4","description":"async/await \u662F JavaScript \u4E2D\u5904\u7406\u5F02\u6B65\u64CD\u4F5C\u7684\u8BED\u6CD5\u7CD6,\u5B83\u57FA\u4E8E Promise \u5BF9\u8C61\u5B9E\u73B0\u3002\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u5BF9\u6BD4 async/await \u4E0E Promise,\u6DF1\u5165\u7406\u89E3\u5B83\u4EEC\u7684\u7279\u70B9\u548C\u7528\u6CD5\u3002","source":"@site/docs/Frontend/JavaScript/Promise/110.async-await.md","sourceDirName":"Frontend/JavaScript/Promise","slug":"/Frontend/JavaScript/Promise/async-await","permalink":"/docs-hub/Frontend/JavaScript/Promise/async-await","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/Promise/110.async-await.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":110,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u5F02\u6B65\u7F16\u7A0B\u5B9E\u8DF5","permalink":"/docs-hub/Frontend/JavaScript/Promise/Promise\u6848\u4F8B"},"next":{"title":"\u4E8B\u4EF6\u73AF","permalink":"/docs-hub/category/\u4E8B\u4EF6\u73AF"}}'),r=s("85893"),i=s("50065");let t={},o="async/await \u4E0E Promise \u7684\u5BF9\u6BD4",c={},l=[{value:"async/await \u7684\u7279\u70B9",id:"asyncawait-\u7684\u7279\u70B9",level:2},{value:"\u4E0E Promise \u7684\u5BF9\u6BD4",id:"\u4E0E-promise-\u7684\u5BF9\u6BD4",level:2},{value:"\u5B9E\u6218\u793A\u4F8B",id:"\u5B9E\u6218\u793A\u4F8B",level:2},{value:"\u5EF6\u8FDF\u51FD\u6570",id:"\u5EF6\u8FDF\u51FD\u6570",level:3},{value:"\u4E0E Class \u7ED3\u5408\u4F7F\u7528",id:"\u4E0E-class-\u7ED3\u5408\u4F7F\u7528",level:3},{value:"\u9519\u8BEF\u5904\u7406",id:"\u9519\u8BEF\u5904\u7406",level:3},{value:"\u5E76\u884C\u6267\u884C",id:"\u5E76\u884C\u6267\u884C",level:3},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"asyncawait-\u4E0E-promise-\u7684\u5BF9\u6BD4",children:"async/await \u4E0E Promise \u7684\u5BF9\u6BD4"})}),"\n",(0,r.jsx)(n.p,{children:"async/await \u662F JavaScript \u4E2D\u5904\u7406\u5F02\u6B65\u64CD\u4F5C\u7684\u8BED\u6CD5\u7CD6,\u5B83\u57FA\u4E8E Promise \u5BF9\u8C61\u5B9E\u73B0\u3002\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u5BF9\u6BD4 async/await \u4E0E Promise,\u6DF1\u5165\u7406\u89E3\u5B83\u4EEC\u7684\u7279\u70B9\u548C\u7528\u6CD5\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"asyncawait-\u7684\u7279\u70B9",children:"async/await \u7684\u7279\u70B9"}),"\n",(0,r.jsx)(n.p,{children:"await \u662F\u4E00\u4E2A\u64CD\u4F5C\u7B26,\u7528\u4E8E\u7B49\u5F85 Promise \u5BF9\u8C61\u7684\u5904\u7406\u7ED3\u679C\u3002\u5B83\u5FC5\u987B\u5728 async \u51FD\u6570\u4E2D\u4F7F\u7528\u3002await \u8868\u8FBE\u5F0F\u7684\u8FD0\u7B97\u7ED3\u679C\u53D6\u51B3\u4E8E\u5B83\u7B49\u5F85\u7684 Promise \u5BF9\u8C61\u7684\u72B6\u6001:"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C Promise \u5904\u4E8E pending \u72B6\u6001,await \u8868\u8FBE\u5F0F\u4F1A\u6682\u505C async \u51FD\u6570\u7684\u6267\u884C,\u76F4\u5230 Promise \u72B6\u6001\u53D1\u751F\u53D8\u5316\u3002\n\u5982\u679C Promise \u5904\u4E8E fulfilled \u72B6\u6001,await \u8868\u8FBE\u5F0F\u7684\u8BA1\u7B97\u7ED3\u679C\u662F Promise \u7684\u503C\u3002\n\u5982\u679C Promise \u5904\u4E8E rejected \u72B6\u6001,await \u8868\u8FBE\u5F0F\u4F1A\u629B\u51FA\u9519\u8BEF\u3002"}),"\n",(0,r.jsx)(n.p,{children:"async \u51FD\u6570\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u8FD4\u56DE Promise \u5BF9\u8C61\u7684\u51FD\u6570\u3002async \u51FD\u6570\u5185\u90E8\u53EF\u4EE5\u4F7F\u7528 await \u64CD\u4F5C\u7B26,\u8BA9\u51FD\u6570\u6682\u505C\u6267\u884C,\u76F4\u5230\u4E00\u4E2A Promise \u5BF9\u8C61 resolve,\u7136\u540E\u5F97\u5230 resolve \u7684\u503C,\u518D\u7EE7\u7EED\u6267\u884C\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4E0E-promise-\u7684\u5BF9\u6BD4",children:"\u4E0E Promise \u7684\u5BF9\u6BD4"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u5C06 async/await \u4E0E Promise \u8FDB\u884C\u5BF9\u6BD4:"}),"\n",(0,r.jsx)(n.p,{children:"async \u53EF\u4EE5\u770B\u4F5C\u662F\u5C06\u51FD\u6570\u8FD4\u56DE\u503C\u4F7F\u7528 Promise.resolve()\u5305\u88C5\u4E86\u4E0B\u3002\nawait \u53EF\u4EE5\u7406\u89E3\u4E3A Promise \u7684 then \u65B9\u6CD5\u7684\u8BED\u6CD5\u7CD6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528 Promise \u548C async/await \u5B9E\u73B0\u76F8\u540C\u529F\u80FD\u7684\u4F8B\u5B50:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Promise\u5B9E\u73B0\nnew Promise((resolve) => {\n  console.log(1);\n  resolve('2');\n}).then((value) => {\n  console.log(value);\n});\n\n// async/await\u5B9E\u73B0\nasync function asyncFn() {\n  let a = await new Promise((resolve) => {\n    setTimeout(() => {\n      resolve('1');\n    }, 1000);\n  });\n  console.log(a);\n\n  let b = await new Promise((resolve) => {\n    setTimeout(() => {\n      resolve('2');\n    }, 1000);\n  });\n  console.log(b);\n\n  let c = await new Promise((resolve) => {\n    setTimeout(() => {\n      resolve('3');\n    }, 1000);\n  });\n  console.log(c);\n\n  let d = await new Promise((resolve) => {\n    setTimeout(() => {\n      resolve('4');\n    }, 1000);\n  });\n  console.log(d);\n}\n\nasyncFn();\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D,\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 async/await \u8BA9\u5F02\u6B65\u4EE3\u7801\u7684\u5199\u6CD5\u66F4\u52A0\u6E05\u6670\u548C\u76F4\u89C2\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5B9E\u6218\u793A\u4F8B",children:"\u5B9E\u6218\u793A\u4F8B"}),"\n",(0,r.jsx)(n.h3,{id:"\u5EF6\u8FDF\u51FD\u6570",children:"\u5EF6\u8FDF\u51FD\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 async/await \u5B9E\u73B0\u4E00\u4E2A\u5EF6\u8FDF\u51FD\u6570,\u8BA9\u7A0B\u5E8F\u6682\u505C\u4E00\u6BB5\u65F6\u95F4\u540E\u518D\u7EE7\u7EED\u6267\u884C:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function sleep(delay) {\n  return new Promise((resolve) => {\n    setTimeout(resolve, delay);\n  });\n}\n\nasync function showNumbers() {\n  for (let i of [1, 2, 3, 4, 5]) {\n    await sleep(1000);\n    console.log(i);\n  }\n}\n\nshowNumbers();\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D,sleep \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61,\u5B83\u5728\u6307\u5B9A\u7684\u5EF6\u8FDF\u65F6\u95F4\u540E resolve\u3002\u5728 showNumbers \u51FD\u6570\u4E2D,\u6211\u4EEC\u4F7F\u7528 for...of \u5FAA\u73AF\u904D\u5386\u6570\u7EC4,\u6BCF\u6B21\u5FAA\u73AF\u90FD\u7B49\u5F85 1 \u79D2\u949F,\u7136\u540E\u6253\u5370\u5F53\u524D\u7684\u6570\u5B57\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4E0E-class-\u7ED3\u5408\u4F7F\u7528",children:"\u4E0E Class \u7ED3\u5408\u4F7F\u7528"}),"\n",(0,r.jsx)(n.p,{children:"async/await \u4E5F\u53EF\u4EE5\u4E0E ES6 \u7684 Class \u8BED\u6CD5\u7ED3\u5408\u4F7F\u7528:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"class User {\n  constructor(name) {\n    this.name = name;\n  }\n\n  then(resolve) {\n    resolve(this.name);\n  }\n}\n\nasync function getUser() {\n  let user = await new User('zhangsan');\n  console.log(user);\n}\n\ngetUser();\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D,\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A User \u7C7B,\u5B83\u7684\u6784\u9020\u51FD\u6570\u63A5\u6536\u4E00\u4E2A name \u53C2\u6570\u3002\u7136\u540E\u6211\u4EEC\u7ED9 User \u7C7B\u6DFB\u52A0\u4E86\u4E00\u4E2A then \u65B9\u6CD5,\u8BA9\u5B83\u53EF\u4EE5\u88AB await\u3002\u5728 getUser \u51FD\u6570\u4E2D,\u6211\u4EEC\u4F7F\u7528 await \u5173\u952E\u5B57\u7B49\u5F85 User \u5BF9\u8C61\u7684 then \u65B9\u6CD5\u6267\u884C\u5B8C\u6210,\u7136\u540E\u5F97\u5230 resolve \u7684\u503C,\u4E5F\u5C31\u662F\u7528\u6237\u7684\u540D\u5B57\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u9519\u8BEF\u5904\u7406",children:"\u9519\u8BEF\u5904\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 async/await \u65F6,\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 try/catch \u8BED\u53E5\u6765\u6355\u83B7\u9519\u8BEF:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function fn() {\n  try {\n    console.log(a);\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nfn();\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D,\u5F53 fn \u51FD\u6570\u6267\u884C\u65F6,\u5982\u679C a \u53D8\u91CF\u6CA1\u6709\u5B9A\u4E49,\u5C31\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002\u6211\u4EEC\u4F7F\u7528 try/catch \u8BED\u53E5\u6355\u83B7\u8FD9\u4E2A\u9519\u8BEF,\u7136\u540E\u6253\u5370\u51FA\u6765\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C async \u51FD\u6570\u5185\u90E8\u6CA1\u6709\u4F7F\u7528 try/catch \u6355\u83B7\u9519\u8BEF,\u90A3\u4E48\u9519\u8BEF\u4F1A\u88AB async \u51FD\u6570\u8FD4\u56DE\u7684 Promise \u5BF9\u8C61 reject:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function fn() {\n  console.log(a);\n}\n\nfn()\n  .then((value) => {\n    console.log('resolved', value);\n  })\n  .catch((err) => {\n    console.log('rejected', err);\n  });\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D,\u5F53 fn \u51FD\u6570\u629B\u51FA\u9519\u8BEF\u65F6,\u9519\u8BEF\u4F1A\u88AB catch \u65B9\u6CD5\u6355\u83B7,\u7136\u540E\u6253\u5370\u51FA\u6765\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5E76\u884C\u6267\u884C",children:"\u5E76\u884C\u6267\u884C"}),"\n",(0,r.jsx)(n.p,{children:"async/await \u4E5F\u53EF\u4EE5\u5B9E\u73B0\u5E76\u884C\u6267\u884C\u591A\u4E2A\u5F02\u6B65\u64CD\u4F5C:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function delay(time) {\n  return new Promise((resolve) => {\n    setTimeout(resolve, time);\n  });\n}\n\nasync function fn() {\n  let start = Date.now();\n\n  await Promise.all([delay(1000), delay(2000)]);\n\n  let end = Date.now();\n  console.log(end - start);\n}\n\nfn();\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D,\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A delay \u51FD\u6570,\u5B83\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61,\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u540E resolve\u3002\u7136\u540E\u6211\u4EEC\u5728 fn \u51FD\u6570\u4E2D\u4F7F\u7528 Promise.all \u65B9\u6CD5\u5E76\u884C\u6267\u884C\u4E24\u4E2A delay \u51FD\u6570,\u7B49\u5F85\u5B83\u4EEC\u90FD\u5B8C\u6210\u540E,\u8BA1\u7B97\u5E76\u6253\u5370\u51FA\u603B\u5171\u8017\u65F6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 Promise.race \u65B9\u6CD5\u7B49\u5F85\u591A\u4E2A\u5F02\u6B65\u64CD\u4F5C\u4E2D\u7684\u4E00\u4E2A\u5B8C\u6210:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function delay(time) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(time);\n    }, time);\n  });\n}\n\nasync function fn() {\n  let result = await Promise.race([delay(1000), delay(2000)]);\n\n  console.log(result);\n}\n\nfn();\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D,Promise.race \u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A Promise \u5BF9\u8C61\u6570\u7EC4,\u7B49\u5F85\u5176\u4E2D\u4E00\u4E2A Promise \u5BF9\u8C61 resolve,\u7136\u540E\u8FD4\u56DE\u8FD9\u4E2A Promise \u5BF9\u8C61\u7684\u503C\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,r.jsx)(n.p,{children:"await \u5173\u952E\u5B57\u53EA\u80FD\u5728 async \u51FD\u6570\u4E2D\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"async \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u4F7F\u7528 try/catch \u8BED\u53E5\u6355\u83B7 async \u51FD\u6570\u4E2D\u7684\u9519\u8BEF,\u4E5F\u53EF\u4EE5\u4F7F\u7528 Promise \u7684 catch \u65B9\u6CD5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u591A\u4E2A\u5F02\u6B65\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u7528 Promise.all \u548C Promise.race \u6765\u5E76\u884C\u6267\u884C\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D,\u6211\u4EEC\u5E94\u8BE5\u6839\u636E\u5177\u4F53\u7684\u9700\u6C42\u9009\u62E9\u4F7F\u7528 Promise \u8FD8\u662F async/await\u3002\u5BF9\u4E8E\u4E00\u4E9B\u7B80\u5355\u7684\u5F02\u6B65\u64CD\u4F5C,\u4F7F\u7528 Promise \u53EF\u80FD\u66F4\u52A0\u65B9\u4FBF\u3002\u800C\u5BF9\u4E8E\u4E00\u4E9B\u590D\u6742\u7684\u5F02\u6B65\u64CD\u4F5C,\u4F7F\u7528 async/await \u53EF\u4EE5\u8BA9\u4EE3\u7801\u66F4\u52A0\u6E05\u6670\u548C\u6613\u4E8E\u9605\u8BFB\u3002"})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var a=s(67294);let r={},i=a.createContext(r);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);