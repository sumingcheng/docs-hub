"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[94596],{54352:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Frontend/JavaScript/\u4e13\u9898\u5185\u5bb9/\u6df1\u62f7\u8d1d\u6280\u5de7\u4e0eWeakMap\u7684\u4f7f\u7528","title":"\u6df1\u62f7\u8d1d\u6280\u5de7\u4e0e WeakMap \u7684\u4f7f\u7528","description":"\u5728 JavaScript \u5f00\u53d1\u4e2d,\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u5bf9\u5bf9\u8c61\u8fdb\u884c\u6df1\u62f7\u8d1d\u64cd\u4f5c,\u4ee5\u907f\u514d\u5bf9\u8c61\u4e4b\u95f4\u7684\u5f15\u7528\u5bfc\u81f4\u6570\u636e\u88ab\u610f\u5916\u4fee\u6539\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u51e0\u79cd\u5e38\u7528\u7684\u6df1\u62f7\u8d1d\u6280\u5de7,\u5e76\u91cd\u70b9\u8bb2\u89e3\u5982\u4f55\u5229\u7528 WeakMap \u89e3\u51b3\u6df1\u62f7\u8d1d\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u95ee\u9898\u3002","source":"@site/docs/Frontend/JavaScript/\u4e13\u9898\u5185\u5bb9/50.\u6df1\u62f7\u8d1d\u6280\u5de7\u4e0eWeakMap\u7684\u4f7f\u7528.md","sourceDirName":"Frontend/JavaScript/\u4e13\u9898\u5185\u5bb9","slug":"/Frontend/JavaScript/\u4e13\u9898\u5185\u5bb9/\u6df1\u62f7\u8d1d\u6280\u5de7\u4e0eWeakMap\u7684\u4f7f\u7528","permalink":"/docs-hub/Frontend/JavaScript/\u4e13\u9898\u5185\u5bb9/\u6df1\u62f7\u8d1d\u6280\u5de7\u4e0eWeakMap\u7684\u4f7f\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u4e13\u9898\u5185\u5bb9/50.\u6df1\u62f7\u8d1d\u6280\u5de7\u4e0eWeakMap\u7684\u4f7f\u7528.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":50,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"Class super \u5173\u952e\u5b57","permalink":"/docs-hub/Frontend/JavaScript/\u4e13\u9898\u5185\u5bb9/Class\u7684\u4f7f\u7528"},"next":{"title":"ESModule \u6a21\u5757\u5316","permalink":"/docs-hub/Frontend/JavaScript/\u4e13\u9898\u5185\u5bb9/ESModule"}}');var t=a(74848),i=a(28453);const o={},c="\u6df1\u62f7\u8d1d\u6280\u5de7\u4e0e WeakMap \u7684\u4f7f\u7528",s={},l=[{value:"\u4f7f\u7528\u9012\u5f52\u5b9e\u73b0\u6df1\u62f7\u8d1d",id:"\u4f7f\u7528\u9012\u5f52\u5b9e\u73b0\u6df1\u62f7\u8d1d",level:2},{value:"\u5229\u7528\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u6df1\u62f7\u8d1d",id:"\u5229\u7528\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u6df1\u62f7\u8d1d",level:2},{value:"\u89e3\u51b3\u5faa\u73af\u5f15\u7528\u95ee\u9898",id:"\u89e3\u51b3\u5faa\u73af\u5f15\u7528\u95ee\u9898",level:2},{value:"WeakMap \u4e0e Map \u7684\u533a\u522b",id:"weakmap-\u4e0e-map-\u7684\u533a\u522b",level:2},{value:"\u4f7f\u7528 WeakMap \u7ba1\u7406\u4e8b\u4ef6\u76d1\u542c\u5668",id:"\u4f7f\u7528-weakmap-\u7ba1\u7406\u4e8b\u4ef6\u76d1\u542c\u5668",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u6df1\u62f7\u8d1d\u6280\u5de7\u4e0e-weakmap-\u7684\u4f7f\u7528",children:"\u6df1\u62f7\u8d1d\u6280\u5de7\u4e0e WeakMap \u7684\u4f7f\u7528"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728 JavaScript \u5f00\u53d1\u4e2d,\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u5bf9\u5bf9\u8c61\u8fdb\u884c\u6df1\u62f7\u8d1d\u64cd\u4f5c,\u4ee5\u907f\u514d\u5bf9\u8c61\u4e4b\u95f4\u7684\u5f15\u7528\u5bfc\u81f4\u6570\u636e\u88ab\u610f\u5916\u4fee\u6539\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u51e0\u79cd\u5e38\u7528\u7684\u6df1\u62f7\u8d1d\u6280\u5de7,\u5e76\u91cd\u70b9\u8bb2\u89e3\u5982\u4f55\u5229\u7528 WeakMap \u89e3\u51b3\u6df1\u62f7\u8d1d\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u9012\u5f52\u5b9e\u73b0\u6df1\u62f7\u8d1d",children:"\u4f7f\u7528\u9012\u5f52\u5b9e\u73b0\u6df1\u62f7\u8d1d"}),"\n",(0,t.jsx)(e.p,{children:"\u6700\u57fa\u672c\u7684\u6df1\u62f7\u8d1d\u65b9\u5f0f\u662f\u5229\u7528\u9012\u5f52\u904d\u5386\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027,\u9010\u4e00\u8fdb\u884c\u62f7\u8d1d\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528 ES5 \u8bed\u6cd5\u5b9e\u73b0\u7684\u6df1\u62f7\u8d1d\u51fd\u6570:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function deepClone(origin, target) {\n  var tar = target || {};\n  var toStr = Object.prototype.toString;\n  var arrType = '[object Array]';\n\n  for (var key in origin) {\n    if (origin.hasOwnProperty(key)) {\n      var value = origin[key];\n\n      if (typeof value === 'object' && value !== null) {\n        tar[key] = toStr.call(value) === arrType ? [] : {};\n        deepClone(value, tar[key]);\n      } else {\n        tar[key] = value;\n      }\n    }\n  }\n\n  return tar;\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e2a\u51fd\u6570\u901a\u8fc7\u5224\u65ad\u5c5e\u6027\u503c\u7684\u7c7b\u578b,\u5982\u679c\u662f\u5bf9\u8c61\u5c31\u9012\u5f52\u8c03\u7528 deepClone \u51fd\u6570,\u5426\u5219\u76f4\u63a5\u8d4b\u503c\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f,\u6211\u4eec\u8981\u5148\u5224\u65ad\u5c5e\u6027\u662f\u5426\u662f\u5bf9\u8c61\u81ea\u8eab\u7684\u5c5e\u6027,\u907f\u514d\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\u88ab\u62f7\u8d1d\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u5229\u7528\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u6df1\u62f7\u8d1d",children:"\u5229\u7528\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u6df1\u62f7\u8d1d"}),"\n",(0,t.jsx)(e.p,{children:"\u53e6\u4e00\u79cd\u6df1\u62f7\u8d1d\u7684\u601d\u8def\u662f\u5229\u7528\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5224\u65ad\u5c5e\u6027\u503c\u7684\u7c7b\u578b,\u7136\u540e\u4f7f\u7528\u5bf9\u5e94\u7684\u6784\u9020\u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u6216\u6570\u7ec4,\u518d\u9012\u5f52\u62f7\u8d1d\u5176\u4e2d\u7684\u5c5e\u6027\u3002\u4e0b\u9762\u662f\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function deepClone(origin) {\n  if (origin == undefined || typeof origin !== 'object') {\n    return origin;\n  }\n\n  if (origin instanceof Date) {\n    return new Date(origin);\n  }\n\n  if (origin instanceof RegExp) {\n    return new RegExp(origin);\n  }\n\n  const target = new origin.constructor();\n\n  for (let key in origin) {\n    if (origin.hasOwnProperty(key)) {\n      target[key] = deepClone(origin[key]);\n    }\n  }\n\n  return target;\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u6784\u9020\u51fd\u6570\u7684\u597d\u5904\u662f\u53ef\u4ee5\u6b63\u786e\u5904\u7406 Date\u3001RegExp \u7b49\u7279\u6b8a\u7c7b\u578b\u7684\u5bf9\u8c61,\u540c\u65f6\u4ee3\u7801\u4e5f\u66f4\u52a0\u7b80\u6d01\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u89e3\u51b3\u5faa\u73af\u5f15\u7528\u95ee\u9898",children:"\u89e3\u51b3\u5faa\u73af\u5f15\u7528\u95ee\u9898"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u5bf9\u8c61\u5b58\u5728\u5faa\u73af\u5f15\u7528\u7684\u60c5\u51b5\u4e0b,\u4e0a\u9762\u7684\u6df1\u62f7\u8d1d\u51fd\u6570\u4f1a\u51fa\u73b0\u6b7b\u5faa\u73af\u3002\u4f8b\u5982:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"let obj1 = {};\nlet obj2 = {};\nobj1.ref = obj2;\nobj2.ref = obj1;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898,\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 WeakMap \u6765\u5b58\u50a8\u5df2\u62f7\u8d1d\u8fc7\u7684\u5bf9\u8c61,\u5f53\u518d\u6b21\u9047\u5230\u65f6\u76f4\u63a5\u8fd4\u56de,\u907f\u514d\u91cd\u590d\u62f7\u8d1d\u5bfc\u81f4\u7684\u6b7b\u5faa\u73af\u3002\u6539\u8fdb\u540e\u7684\u6df1\u62f7\u8d1d\u51fd\u6570\u5982\u4e0b:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function deepClone(origin, hashMap = new WeakMap()) {\n  if (origin == undefined || typeof origin !== 'object') {\n    return origin;\n  }\n\n  if (origin instanceof Date) {\n    return new Date(origin);\n  }\n\n  if (origin instanceof RegExp) {\n    return new RegExp(origin);\n  }\n\n  const hashKey = hashMap.get(origin);\n\n  if (hashKey) {\n    return hashKey;\n  }\n\n  const target = new origin.constructor();\n  hashMap.set(origin, target);\n\n  for (let key in origin) {\n    if (origin.hasOwnProperty(key)) {\n      target[key] = deepClone(origin[key], hashMap);\n    }\n  }\n\n  return target;\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"WeakMap \u7684\u952e\u662f\u5f31\u5f15\u7528,\u5f53\u952e\u540d\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u88ab\u5783\u573e\u56de\u6536\u65f6,\u5bf9\u5e94\u7684\u952e\u503c\u4e5f\u4f1a\u88ab\u79fb\u9664\u3002\u8fd9\u4e2a\u7279\u6027\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u907f\u514d\u5185\u5b58\u6cc4\u6f0f\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"weakmap-\u4e0e-map-\u7684\u533a\u522b",children:"WeakMap \u4e0e Map \u7684\u533a\u522b"}),"\n",(0,t.jsx)(e.p,{children:"WeakMap \u4e0e Map \u6709\u4ee5\u4e0b\u51e0\u70b9\u533a\u522b:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Map \u7684\u952e\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b,\u800c WeakMap \u7684\u952e\u53ea\u80fd\u662f\u5bf9\u8c61"}),"\n",(0,t.jsx)(e.li,{children:"WeakMap \u7684\u952e\u540d\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u662f\u5f31\u5f15\u7528,\u4e0d\u4f1a\u5f71\u54cd\u5783\u573e\u56de\u6536\u673a\u5236"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u6b63\u662f\u7531\u4e8e WeakMap \u7684\u8fd9\u4e9b\u7279\u6027,\u6211\u4eec\u53ef\u4ee5\u7528\u5b83\u6765\u89e3\u51b3\u4e00\u4e9b\u5185\u5b58\u7ba1\u7406\u65b9\u9762\u7684\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528-weakmap-\u7ba1\u7406\u4e8b\u4ef6\u76d1\u542c\u5668",children:"\u4f7f\u7528 WeakMap \u7ba1\u7406\u4e8b\u4ef6\u76d1\u542c\u5668"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u6d4f\u89c8\u5668\u5f00\u53d1\u4e2d,\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u7ed9 DOM \u5143\u7d20\u7ed1\u5b9a\u4e8b\u4ef6\u76d1\u542c\u5668\u3002\u4f46\u662f\u5f53\u8be5\u5143\u7d20\u88ab\u79fb\u9664\u65f6,\u6211\u4eec\u8fd8\u9700\u8981\u624b\u52a8\u79fb\u9664\u4e8b\u4ef6\u76d1\u542c\u5668,\u5426\u5219\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"const btn = document.querySelector('#btn');\nbtn.addEventListener('click', handleBtnClick, false);\n\nfunction handleBtnClick() {}\n\n// \u79fb\u9664DOM\u5143\u7d20\u65f6,\u9700\u8981\u624b\u52a8\u89e3\u7ed1\u4e8b\u4ef6\nbtn.remove();\nhandleBtnClick = null;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5229\u7528 WeakMap,\u6211\u4eec\u53ef\u4ee5\u81ea\u52a8\u6e05\u7406\u8fd9\u4e9b\u4e8b\u4ef6\u76d1\u542c\u5668:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"const btn = document.querySelector('#btn');\nconst listenerMap = new WeakMap();\n\nlistenerMap.set(btn, handleBtnClick);\nbtn.addEventListener('click', listenerMap.get(btn), false);\n\nfunction handleBtnClick() {}\n\n// \u79fb\u9664DOM\u5143\u7d20\u65f6,WeakMap\u4e2d\u5bf9\u5e94\u7684\u952e\u503c\u4f1a\u81ea\u52a8\u88ab\u5783\u573e\u56de\u6536\nbtn.remove();\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>o,x:()=>c});var r=a(96540);const t={},i=r.createContext(t);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);