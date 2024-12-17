"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["6046"],{36379:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>o,assets:()=>i,toc:()=>a,contentTitle:()=>s});var o=JSON.parse('{"id":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Proxy\u4E0EES-14\u79CD\u5BF9\u8C61\u64CD\u4F5C\u65B9\u6CD5","title":"14 \u79CD\u64CD\u4F5C\u5BF9\u8C61\u65B9\u6CD5","description":"1. [[GetPrototypeOf]]","source":"@site/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/30.Proxy\u4E0EES-14\u79CD\u5BF9\u8C61\u64CD\u4F5C\u65B9\u6CD5.md","sourceDirName":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5","slug":"/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Proxy\u4E0EES-14\u79CD\u5BF9\u8C61\u64CD\u4F5C\u65B9\u6CD5","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Proxy\u4E0EES-14\u79CD\u5BF9\u8C61\u64CD\u4F5C\u65B9\u6CD5","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/30.Proxy\u4E0EES-14\u79CD\u5BF9\u8C61\u64CD\u4F5C\u65B9\u6CD5.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734402243000,"sidebarPosition":30,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"Object.defineProperty \u4F7F\u7528\u6307\u5357","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/ObjectDefineProperty"},"next":{"title":"Array.from()","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.from"}}'),t=r("85893"),c=r("50065");let l={},s="14 \u79CD\u64CD\u4F5C\u5BF9\u8C61\u65B9\u6CD5",i={},a=[{value:"1. [[GetPrototypeOf]]",id:"1-getprototypeof",level:2},{value:"2. [[SetPrototypeOf]]",id:"2-setprototypeof",level:2},{value:"3. \u83B7\u53D6\u5BF9\u8C61\u7684\u53EF\u6269\u5C55\u6027",id:"3-\u83B7\u53D6\u5BF9\u8C61\u7684\u53EF\u6269\u5C55\u6027",level:2},{value:"4. [[GetOwnProperty]]",id:"4-getownproperty",level:2},{value:"5. [[PreventExtensions]]",id:"5-preventextensions",level:2},{value:"6. [[DefineOwnProperty]]",id:"6-defineownproperty",level:2},{value:"7. [[HasProperty]]",id:"7-hasproperty",level:2},{value:"8. [[GET]]",id:"8-get",level:2},{value:"9. [[SET]]",id:"9-set",level:2},{value:"10. \u5220\u9664\u5C5E\u6027",id:"10-\u5220\u9664\u5C5E\u6027",level:2},{value:"11. \u679A\u4E3E\u5C5E\u6027",id:"11-\u679A\u4E3E\u5C5E\u6027",level:2},{value:"12. OwnPropertyKeys",id:"12-ownpropertykeys",level:2},{value:"13. call / apply / bind",id:"13-call--apply--bind",level:2},{value:"14. new",id:"14-new",level:2},{value:"defineProperty",id:"defineproperty",level:2},{value:"Proxy",id:"proxy",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u4EE3\u7406 Object",id:"\u4EE3\u7406-object",level:2},{value:"\u4EE3\u7406 Array",id:"\u4EE3\u7406-array",level:2},{value:"\u4EE3\u7406 Function",id:"\u4EE3\u7406-function",level:2},{value:"\u65B9\u6CD5\u5728 Reflect \u7684\u597D\u5904",id:"\u65B9\u6CD5\u5728-reflect-\u7684\u597D\u5904",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"14-\u79CD\u64CD\u4F5C\u5BF9\u8C61\u65B9\u6CD5",children:"14 \u79CD\u64CD\u4F5C\u5BF9\u8C61\u65B9\u6CD5"})}),"\n",(0,t.jsx)(n.h2,{id:"1-getprototypeof",children:"1. [[GetPrototypeOf]]"}),"\n",(0,t.jsxs)(n.p,{children:["\u7B14\u8005\u4ECB\u7ECD\u5982\u4F55\u83B7\u53D6\u5BF9\u8C61\u7684\u539F\u578B\u3002\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"Object.getPrototypeOf"})," \u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u83B7\u53D6\u5BF9\u8C61\u7684\u539F\u578B\nconst proto = Object.getPrototypeOf(obj);\nconsole.log(proto); // \u8F93\u51FA\u5BF9\u8C61\u7684\u539F\u578B\nconsole.log(obj.__proto__); // \u53E6\u4E00\u79CD\u83B7\u53D6\u539F\u578B\u7684\u65B9\u5F0F\nconsole.log(Object.prototype); // Object.prototype \u662F\u6240\u6709\u666E\u901A\u5BF9\u8C61\u7684\u539F\u578B\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-setprototypeof",children:"2. [[SetPrototypeOf]]"}),"\n",(0,t.jsxs)(n.p,{children:["\u8BBE\u7F6E\u4E00\u4E2A\u6307\u5B9A\u5BF9\u8C61\u7684\u539F\u578B\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Object.setPrototypeOf"})," \u65B9\u6CD5\u53EF\u4EE5\u52A8\u6001\u4FEE\u6539\u5BF9\u8C61\u7684\u539F\u578B\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u8BBE\u7F6E\u5BF9\u8C61\u7684\u539F\u578B\nObject.setPrototypeOf(obj, { c: 3, d: 4 });\nobj.__proto__ = { c: 3, d: 4 };\nconsole.log(obj); // \u8F93\u51FA\uFF1A{ a: 1, b: 2, c: 3, d: 4 }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3-\u83B7\u53D6\u5BF9\u8C61\u7684\u53EF\u6269\u5C55\u6027",children:"3. \u83B7\u53D6\u5BF9\u8C61\u7684\u53EF\u6269\u5C55\u6027"}),"\n",(0,t.jsxs)(n.p,{children:["\u7B14\u8005\u89E3\u91CA\u5982\u4F55\u68C0\u67E5\u548C\u63A7\u5236\u5BF9\u8C61\u7684\u53EF\u6269\u5C55\u6027\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Object.isExtensible"}),"\u3001",(0,t.jsx)(n.code,{children:"Object.seal"})," \u548C ",(0,t.jsx)(n.code,{children:"Object.freeze"})," \u65B9\u6CD5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u53EF\u6269\u5C55\nlet isExtensible = Object.isExtensible(obj);\nconsole.log(isExtensible); // true\n\n// \u51BB\u7ED3\u5BF9\u8C61\uFF0C\u4F7F\u5176\u4E0D\u53EF\u6269\u5C55\u4E14\u4E0D\u53EF\u4FEE\u6539\nObject.freeze(obj);\nlet isExtensibleAfterFreeze = Object.isExtensible(obj);\nconsole.log(isExtensibleAfterFreeze); // false\n\n// \u5C01\u95ED\u5BF9\u8C61\uFF0C\u4F7F\u5176\u4E0D\u53EF\u6269\u5C55\u4F46\u53EF\u4FEE\u6539\u5DF2\u6709\u5C5E\u6027\nObject.seal(obj);\nobj.c = 3; // \u65E0\u6548\uFF0C\u5C5E\u6027\u4E0D\u4F1A\u88AB\u6DFB\u52A0\nconsole.log(obj); // { a: 1, b: 2 }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4-getownproperty",children:"4. [[GetOwnProperty]]"}),"\n",(0,t.jsxs)(n.p,{children:["\u83B7\u53D6\u5BF9\u8C61\u81EA\u8EAB\u5C5E\u6027\u7684\u5C5E\u6027\u540D\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Object.getOwnPropertyNames"})," \u65B9\u6CD5\u53EF\u4EE5\u5217\u51FA\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const obj = { a: 1, b: 2 };\n\n// \u83B7\u53D6\u5BF9\u8C61\u7684\u81EA\u8EAB\u5C5E\u6027\u540D\nObject.setPrototypeOf(obj, { c: 3, d: 4 });\nconsole.log(Object.getOwnPropertyNames(obj)); // ["a", "b"]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"5-preventextensions",children:"5. [[PreventExtensions]]"}),"\n",(0,t.jsxs)(n.p,{children:["\u7981\u6B62\u6269\u5C55\u5BF9\u8C61\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Object.preventExtensions"})," \u65B9\u6CD5\u53EF\u4EE5\u963B\u6B62\u5411\u5BF9\u8C61\u6DFB\u52A0\u65B0\u5C5E\u6027\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u7981\u6B62\u6269\u5C55\u5BF9\u8C61\nObject.preventExtensions(obj);\nobj.c = 3; // \u65E0\u6548\uFF0C\u5C5E\u6027\u4E0D\u4F1A\u88AB\u6DFB\u52A0\nconsole.log(obj); // { a: 1, b: 2 }\n\n// \u5220\u9664\u5C5E\u6027\ndelete obj.a;\nconsole.log(obj); // { b: 2 }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"6-defineownproperty",children:"6. [[DefineOwnProperty]]"}),"\n",(0,t.jsxs)(n.p,{children:["\u5B9A\u4E49\u6216\u4FEE\u6539\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Object.defineProperty"})," \u65B9\u6CD5\u53EF\u4EE5\u7CBE\u786E\u63A7\u5236\u5C5E\u6027\u7684\u884C\u4E3A\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u5B9A\u4E49\u65B0\u7684\u5C5E\u6027\u6216\u4FEE\u6539\u73B0\u6709\u5C5E\u6027\nObject.defineProperty(obj, 'c', {\n  value: 3,\n  writable: true,\n  enumerable: true,\n  configurable: true,\n});\nconsole.log(obj); // { a: 1, b: 2, c: 3 }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"7-hasproperty",children:"7. [[HasProperty]]"}),"\n",(0,t.jsxs)(n.p,{children:["\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u5177\u6709\u67D0\u4E2A\u5C5E\u6027\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"hasOwnProperty"})," \u65B9\u6CD5\u53EF\u4EE5\u68C0\u67E5\u5C5E\u6027\u662F\u5426\u4E3A\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u5177\u6709\u5C5E\u6027 'a'\nconsole.log(obj.hasOwnProperty('a')); // true\nconsole.log(obj.hasOwnProperty('c')); // false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"8-get",children:"8. [[GET]]"}),"\n",(0,t.jsxs)(n.p,{children:["\u8BBF\u95EE\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u53EF\u4EE5\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"in"})," \u64CD\u4F5C\u7B26\u6216\u76F4\u63A5\u8BBF\u95EE\u5C5E\u6027\u503C\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u4F7F\u7528 'in' \u68C0\u67E5\u5C5E\u6027\u662F\u5426\u5B58\u5728\nconsole.log('a' in obj); // true\nconsole.log('c' in obj); // false\n\n// \u76F4\u63A5\u8BBF\u95EE\u5C5E\u6027\u503C\nconsole.log(obj.a); // 1\nconsole.log(obj.c); // undefined\n"})}),"\n",(0,t.jsx)(n.h2,{id:"9-set",children:"9. [[SET]]"}),"\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u76F4\u63A5\u8D4B\u503C\u53EF\u4EE5\u4FEE\u6539\u73B0\u6709\u5C5E\u6027\u6216\u6DFB\u52A0\u65B0\u5C5E\u6027\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u4FEE\u6539\u73B0\u6709\u5C5E\u6027\nobj.a = 3;\n\n// \u6DFB\u52A0\u65B0\u5C5E\u6027\nobj.c = 4;\n\nconsole.log(obj); // { a: 3, b: 2, c: 4 }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"10-\u5220\u9664\u5C5E\u6027",children:"10. \u5220\u9664\u5C5E\u6027"}),"\n",(0,t.jsxs)(n.p,{children:["\u5220\u9664\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"delete"})," \u64CD\u4F5C\u7B26\u53EF\u4EE5\u79FB\u9664\u5BF9\u8C61\u7684\u5C5E\u6027\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u5220\u9664\u5C5E\u6027 'a'\ndelete obj.a;\n\nconsole.log(obj); // { b: 2 }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"11-\u679A\u4E3E\u5C5E\u6027",children:"11. \u679A\u4E3E\u5C5E\u6027"}),"\n",(0,t.jsxs)(n.p,{children:["\u8FED\u4EE3\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u5C5E\u6027\uFF0C\u5305\u62EC\u7EE7\u627F\u7684\u5C5E\u6027\uFF0C\u4F46\u4E0D\u5305\u62EC ",(0,t.jsx)(n.code,{children:"Symbol"})," \u7C7B\u578B\u7684\u5C5E\u6027\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\n// \u4F7F\u7528 for...in \u8FED\u4EE3\u53EF\u679A\u4E3E\u5C5E\u6027\nfor (const key in obj) {\n  console.log(`${key}: ${obj[key]}`);\n}\n// \u8F93\u51FA:\n// a: 1\n// b: 2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"12-ownpropertykeys",children:"12. OwnPropertyKeys"}),"\n",(0,t.jsxs)(n.p,{children:["\u83B7\u53D6\u5BF9\u8C61\u7684\u6240\u6709\u952E\uFF0C\u5305\u62EC\u975E\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Object.keys"})," \u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u81EA\u8EAB\u5C5E\u6027\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const obj = { a: 1, b: 2 };\n\n// \u83B7\u53D6\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u81EA\u8EAB\u5C5E\u6027\u952E\nconsole.log(Object.keys(obj)); // ["a", "b"]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"13-call--apply--bind",children:"13. call / apply / bind"}),"\n",(0,t.jsxs)(n.p,{children:["\u8C03\u7528\u51FD\u6570\u7684\u4E0D\u540C\u65B9\u5F0F\u3002",(0,t.jsx)(n.code,{children:"call"})," \u548C ",(0,t.jsx)(n.code,{children:"apply"})," \u7528\u4E8E\u6539\u53D8\u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C",(0,t.jsx)(n.code,{children:"bind"})," \u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7ED1\u5B9A\u51FD\u6570\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\nfunction greet(greeting) {\n  console.log(`${greeting}, a is ${this.a}`);\n}\n\n// \u4F7F\u7528 call\ngreet.call(obj, 'Hello'); // \u8F93\u51FA: Hello, a is 1\n\n// \u4F7F\u7528 apply\ngreet.apply(obj, ['Hi']); // \u8F93\u51FA: Hi, a is 1\n\n// \u4F7F\u7528 bind\nconst boundGreet = greet.bind(obj);\nboundGreet('Hey'); // \u8F93\u51FA: Hey, a is 1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"14-new",children:"14. new"}),"\n",(0,t.jsxs)(n.p,{children:["\u521B\u5EFA\u7528\u6237\u5B9A\u4E49\u7684\u5BF9\u8C61\u7C7B\u578B\u7684\u5B9E\u4F8B\u6216\u5177\u6709\u6784\u9020\u51FD\u6570\u7684\u5185\u7F6E\u5BF9\u8C61\u7684\u5B9E\u4F8B\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"new"})," \u64CD\u4F5C\u7B26\u53EF\u4EE5\u5B9E\u4F8B\u5316\u5BF9\u8C61\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2 };\n\nfunction Test() {\n  this.c = 3;\n}\n\nconst testInstance = new Test();\nconsole.log(testInstance); // Test { c: 3 }\n"})}),"\n",(0,t.jsx)(n.h1,{id:"proxy-\u548C-defineproperty-\u533A\u522B",children:"Proxy \u548C defineProperty \u533A\u522B"}),"\n",(0,t.jsx)(n.h2,{id:"defineproperty",children:"defineProperty"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"defineProperty"})," \u65B9\u6CD5\u7528\u4E8E\u52AB\u6301\u6570\u636E\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u6216\u5B9A\u4E49\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u63A7\u5236\u5C5E\u6027\u7684\u884C\u4E3A\uFF0C\u4F8B\u5982\u8BBE\u7F6E\u53EA\u8BFB\u5C5E\u6027\u6216\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"defineProperty"})," \u52AB\u6301\u6570\u636E\uFF0C\u7ED9\u5BF9\u8C61\u8FDB\u884C\u6269\u5C55\uFF0C\u5BF9\u5C5E\u6027\u8FDB\u884C\u8BBE\u7F6E\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4F8B\u5982\u4FEE\u6539\u6570\u7EC4\u4E0B\u6807\u7684\u4E00\u4E9B\u65B9\u6CD5\u65F6\uFF0C",(0,t.jsx)(n.code,{children:"defineProperty"})," \u7684 ",(0,t.jsx)(n.code,{children:"set"})," \u662F\u65E0\u6CD5\u89E6\u53D1\u7684\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"Vue2.0"})," \u4E2D\uFF0C\u4EE3\u7406\u662F\u901A\u8FC7\u91CD\u5199 ",(0,t.jsx)(n.code,{children:"Data"})," \u6765\u5B9E\u73B0\u7684\uFF0C\u56E0\u6B64\u9700\u8981\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"defineProperty"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"proxy",children:"Proxy"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Proxy"})," \u662F ",(0,t.jsx)(n.code,{children:"ES6"})," \u65B0\u589E\u7684\u6784\u9020\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u7684\u4EE3\u7406\uFF0C\u53EF\u4EE5\u62E6\u622A\u548C\u5B9A\u4E49\u57FA\u672C\u64CD\u4F5C\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Proxy"})," \u8FD4\u56DE\u4E00\u4E2A\u4EE3\u7406\u5BF9\u8C61\uFF0C\u5BF9\u76EE\u6807\u5BF9\u8C61\u8FDB\u884C\u4EE3\u7406\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Proxy"})," \u4E0D\u4EC5\u4EC5\u662F\u62E6\u622A\uFF0C\u8FD8\u53EF\u4EE5\u4EE3\u7406\u5904\u7406\u5404\u79CD\u64CD\u4F5C\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Vue3.0"})," \u4F7F\u7528\u7684\u662F ",(0,t.jsx)(n.code,{children:"Proxy"})," \u6765\u5B9E\u73B0\u54CD\u5E94\u5F0F\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"target"}),"\uFF0C\u76EE\u6807\u5BF9\u8C61\uFF0C\u5373\u8981\u8FDB\u884C\u4EE3\u7406\u7684\u5BF9\u8C61\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"handler"}),"\uFF0C\u5904\u7406\u5668\uFF0C\u5305\u542B\u53EF\u4EE5\u62E6\u622A\u7684\u5404\u79CD\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u81EA\u5B9A\u4E49\u51FD\u6570\u7684\u5404\u79CD\u529F\u80FD\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"proxy-\u4EE3\u7406",children:"Proxy \u4EE3\u7406"}),"\n",(0,t.jsx)(n.h2,{id:"\u4EE3\u7406-object",children:"\u4EE3\u7406 Object"}),"\n",(0,t.jsxs)(n.p,{children:["\u7B14\u8005\u901A\u8FC7\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u5982\u4F55\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Proxy"})," \u4EE3\u7406\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\uFF0C\u5E76\u62E6\u622A ",(0,t.jsx)(n.code,{children:"get"})," \u548C ",(0,t.jsx)(n.code,{children:"set"})," \u64CD\u4F5C\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const target = {\n  a: 1,\n  b: 2,\n};\n\nconst proxy = new Proxy(target, {\n  // \u62E6\u622A\u5C5E\u6027\u8BFB\u53D6\n  get(target, prop) {\n    console.log(`\u83B7\u53D6\u5C5E\u6027 ${prop}: ${target[prop]}`);\n    return target[prop];\n  },\n  // \u62E6\u622A\u5C5E\u6027\u8BBE\u7F6E\n  set(target, prop, value) {\n    target[prop] = value;\n    console.log(`\u8BBE\u7F6E\u5C5E\u6027 ${prop} \u4E3A ${value}`);\n    return true;\n  },\n});\n\nconsole.log(proxy.a); // \u83B7\u53D6\u5C5E\u6027 a: 1\nproxy.a = 3; // \u8BBE\u7F6E\u5C5E\u6027 a \u4E3A 3\nconsole.log(proxy.a); // \u83B7\u53D6\u5C5E\u6027 a: 3\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4EE3\u7406-array",children:"\u4EE3\u7406 Array"}),"\n",(0,t.jsxs)(n.p,{children:["\u901A\u8FC7\u4EE5\u4E0B\u793A\u4F8B\uFF0C\u7B14\u8005\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Proxy"})," \u4EE3\u7406\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5E76\u62E6\u622A\u6570\u7EC4\u7684 ",(0,t.jsx)(n.code,{children:"get"})," \u548C ",(0,t.jsx)(n.code,{children:"set"})," \u64CD\u4F5C\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const originalArray = [\n  { name: '\u5F20\u4E09', age: 25 },\n  { name: '\u674E\u56DB', age: 30 },\n  { name: '\u738B\u4E94', age: 35 },\n];\n\nconst proxyArray = new Proxy(originalArray, {\n  // \u62E6\u622A\u5C5E\u6027\u8BFB\u53D6\n  get(target, prop) {\n    if (prop in target) {\n      console.log(`\u8BFB\u53D6\u7D22\u5F15 ${prop}:`, target[prop]);\n      return target[prop];\n    }\n    return undefined;\n  },\n  // \u62E6\u622A\u5C5E\u6027\u8BBE\u7F6E\n  set(target, prop, value) {\n    target[prop] = value;\n    console.log(`\u8BBE\u7F6E\u7D22\u5F15 ${prop} \u4E3A`, value);\n    return true;\n  },\n});\n\nproxyArray[1] = { name: '\u5C0F\u5F20', age: 28 }; // \u8BBE\u7F6E\u7D22\u5F15 1 \u4E3A { name: '\u5C0F\u5F20', age: 28 }\nconsole.log(proxyArray[1]); // \u8BFB\u53D6\u7D22\u5F15 1: { name: '\u5C0F\u5F20', age: 28 }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4EE3\u7406-function",children:"\u4EE3\u7406 Function"}),"\n",(0,t.jsxs)(n.p,{children:["\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Proxy"})," \u4EE3\u7406\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u62E6\u622A\u5176\u5C5E\u6027\u8BBF\u95EE\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const fn = function () {\n  console.log('\u6267\u884C\u51FD\u6570 fn');\n};\n\nfn.a = 123;\n\nconst proxyFn = new Proxy(fn, {\n  // \u62E6\u622A\u5C5E\u6027\u8BFB\u53D6\n  get(target, prop) {\n    if (prop in target) {\n      return `${target[prop]} \u8FD4\u56DE\u7684 fn`;\n    }\n    return undefined;\n  },\n});\n\nconsole.log(proxyFn.a); // \u8F93\u51FA: 123 \u8FD4\u56DE\u7684 fn\nproxyFn(); // \u8F93\u51FA: \u6267\u884C\u51FD\u6570 fn\n"})}),"\n",(0,t.jsx)(n.h1,{id:"\u5B9E\u73B0-myproxy",children:"\u5B9E\u73B0 MyProxy"}),"\n",(0,t.jsxs)(n.p,{children:["\u7B14\u8005\u901A\u8FC7\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 ",(0,t.jsx)(n.code,{children:"MyProxy"})," \u51FD\u6570\uFF0C\u6F14\u793A\u4E86\u5982\u4F55\u6A21\u4EFF ",(0,t.jsx)(n.code,{children:"Proxy"})," \u7684\u57FA\u672C\u529F\u80FD\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function MyProxy(target, handler) {\n  const proxyTarget = deepClone(target);\n\n  Object.keys(proxyTarget).forEach((key) => {\n    Object.defineProperty(proxyTarget, key, {\n      get() {\n        return handler.get ? handler.get(target, key) : target[key];\n      },\n      set(newVal) {\n        if (handler.set) {\n          handler.set(target, key, newVal);\n        } else {\n          target[key] = newVal;\n        }\n      },\n      enumerable: true,\n      configurable: true,\n    });\n  });\n\n  return proxyTarget;\n\n  // \u6DF1\u62F7\u8D1D\u51FD\u6570\n  function deepClone(original, clone = {}) {\n    const toStr = Object.prototype.toString;\n    const arrType = '[object Array]';\n\n    for (const key in original) {\n      if (original.hasOwnProperty(key)) {\n        if (typeof original[key] === 'object' && original[key] !== null) {\n          clone[key] = toStr.call(original[key]) === arrType ? [] : {};\n          deepClone(original[key], clone[key]);\n        } else {\n          clone[key] = original[key];\n        }\n      }\n    }\n    return clone;\n  }\n}\n\nconst target = {\n  a: 1,\n  b: 2,\n};\n\nconst proxy = new MyProxy(target, {\n  get(target, prop) {\n    return target[prop];\n  },\n  set(target, prop, value) {\n    target[prop] = value;\n  },\n});\n\nconsole.log(proxy.a); // \u8F93\u51FA: 1\nproxy.b = 4;\nconsole.log(proxy.b); // \u8F93\u51FA: 4\n"})}),"\n",(0,t.jsx)(n.h1,{id:"\u66F4\u591A\u7684-proxy-\u6355\u83B7\u5668",children:"\u66F4\u591A\u7684 Proxy \u6355\u83B7\u5668"}),"\n",(0,t.jsxs)(n.p,{children:["\u7B14\u8005\u63A8\u8350\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#handler_%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95",children:"Proxy - JavaScript | MDN"})," \u4EE5\u4E86\u89E3\u66F4\u591A ",(0,t.jsx)(n.code,{children:"Proxy"})," \u7684\u6355\u83B7\u5668\u548C\u7528\u6CD5\u3002"]}),"\n",(0,t.jsx)(n.h1,{id:"reflect",children:"Reflect"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Reflect"})," \u662F ",(0,t.jsx)(n.code,{children:"ES6"})," \u7684\u5185\u7F6E\u5BF9\u8C61\uFF0C\u4F5C\u4E3A\u65B9\u6CD5\u7684\u96C6\u5408\u5BB9\u5668\u3002\u6700\u521D\u7684 ",(0,t.jsx)(n.code,{children:"14"})," \u79CD\u65B9\u6CD5\u90FD\u662F\u653E\u5728 ",(0,t.jsx)(n.code,{children:"Object"})," \u4E0A\uFF0C\u4F46\u968F\u7740 ",(0,t.jsx)(n.code,{children:"Reflect"})," \u7684\u5F15\u5165\uFF0C\u8BB8\u591A\u64CD\u4F5C\u88AB\u79FB\u52A8\u5230\u4E86 ",(0,t.jsx)(n.code,{children:"Reflect"}),"\uFF0C\u4F7F\u5F97 API \u66F4\u52A0\u4E00\u81F4\u548C\u51FD\u6570\u5316\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const target = {\n  a: 1,\n  b: 2,\n};\n\nconst proxy = new Proxy(target, {\n  get(target, prop) {\n    // \u4F7F\u7528 Reflect.get \u83B7\u53D6\u5C5E\u6027\u503C\n    return Reflect.get(target, prop);\n  },\n  set(target, prop, value) {\n    // \u4F7F\u7528 Reflect.set \u8BBE\u7F6E\u5C5E\u6027\u503C\n    const isSuccess = Reflect.set(target, prop, value);\n\n    if (isSuccess) {\n      console.log('\u5C5E\u6027\u8BBE\u7F6E\u6210\u529F');\n    }\n    return isSuccess;\n  },\n});\n\n// \u4F7F\u7528\u4EE3\u7406\u83B7\u53D6\u548C\u8BBE\u7F6E\u5C5E\u6027\nconsole.log(proxy.a); // \u8F93\u51FA: 1\nproxy.b = 4; // \u8F93\u51FA: \u5C5E\u6027\u8BBE\u7F6E\u6210\u529F\nconsole.log(proxy.b); // \u8F93\u51FA: 4\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u65B9\u6CD5\u5728-reflect-\u7684\u597D\u5904",children:"\u65B9\u6CD5\u5728 Reflect \u7684\u597D\u5904"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7EDF\u4E00\u7684\u65B9\u6CD5\u96C6\u5408"}),"\uFF1A\u672A\u6765\u4F1A\u6709\u66F4\u591A\u65B9\u6CD5\u88AB\u6DFB\u52A0\u5230 ",(0,t.jsx)(n.code,{children:"Reflect"})," \u4E0A\uFF0C\u4F7F\u5F97 ",(0,t.jsx)(n.code,{children:"Object"})," \u4E0A\u7684\u65B9\u6CD5\u66F4\u52A0\u7B80\u6D01\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u51FD\u6570\u5F0F\u7F16\u7A0B"}),"\uFF1A",(0,t.jsx)(n.code,{children:"Reflect"})," \u63D0\u4F9B\u4E86\u4E00\u79CD\u66F4\u7B26\u5408\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u65B9\u5F0F\u6765\u64CD\u4F5C\u5BF9\u8C61\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1 };\nconsole.log(Reflect.has(obj, 'a')); // true\uFF0C\u76F8\u5F53\u4E8E 'a' in obj\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5168\u5C40\u5BF9\u8C61"}),"\uFF1A",(0,t.jsx)(n.code,{children:"Reflect"})," \u662F\u4E00\u4E2A\u5168\u5C40\u7684\u5185\u7F6E\u5BF9\u8C61\uFF0C\u63D0\u4F9B\u9759\u6001\u65B9\u6CD5\uFF0C\u65E0\u9700\u5B9E\u4F8B\u5316\u5373\u53EF\u4F7F\u7528\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(66479).Z+"",width:"980",height:"643"})}),"\n",(0,t.jsx)(n.h1,{id:"\u5B8C\u6574\u793A\u4F8B",children:"\u5B8C\u6574\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.p,{children:["\u7ED3\u5408 ",(0,t.jsx)(n.code,{children:"Proxy"})," \u548C ",(0,t.jsx)(n.code,{children:"Reflect"}),"\uFF0C\u7B14\u8005\u5C55\u793A\u4E86\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A\u66F4\u52A0\u5065\u58EE\u548C\u7075\u6D3B\u7684\u4EE3\u7406\u5BF9\u8C61\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const target = {\n  a: 1,\n  b: 2,\n};\n\nconst handler = {\n  get(target, prop, receiver) {\n    console.log(`\u83B7\u53D6\u5C5E\u6027 ${prop}`);\n    return Reflect.get(target, prop, receiver);\n  },\n  set(target, prop, value, receiver) {\n    console.log(`\u8BBE\u7F6E\u5C5E\u6027 ${prop} \u4E3A ${value}`);\n    return Reflect.set(target, prop, value, receiver);\n  },\n  deleteProperty(target, prop) {\n    console.log(`\u5220\u9664\u5C5E\u6027 ${prop}`);\n    return Reflect.deleteProperty(target, prop);\n  },\n};\n\nconst proxy = new Proxy(target, handler);\n\nconsole.log(proxy.a); // \u83B7\u53D6\u5C5E\u6027 a \\n 1\nproxy.b = 3; // \u8BBE\u7F6E\u5C5E\u6027 b \u4E3A 3\ndelete proxy.a; // \u5220\u9664\u5C5E\u6027 a\nconsole.log(target); // { b: 3 }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u901A\u8FC7\u4E0A\u8FF0\u793A\u4F8B\uFF0C\u7B14\u8005\u5C55\u793A\u4E86\u5982\u4F55\u5229\u7528 ",(0,t.jsx)(n.code,{children:"Proxy"})," \u548C ",(0,t.jsx)(n.code,{children:"Reflect"})," \u6765\u62E6\u622A\u548C\u63A7\u5236\u5BF9\u8C61\u7684\u57FA\u672C\u64CD\u4F5C\uFF0C\u4ECE\u800C\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u529F\u80FD\uFF0C\u5982\u65E5\u5FD7\u8BB0\u5F55\u3001\u6570\u636E\u9A8C\u8BC1\u7B49\u3002"]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},66479:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/866bc271335358d6fea41e6c3c01e918-72dd2f407c0c0909f84f035c8f6a9a48.png"},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var o=r(67294);let t={},c=o.createContext(t);function l(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);