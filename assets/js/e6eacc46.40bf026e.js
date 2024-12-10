"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[78156],{85640:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Frontend/JavaScript/Promise/\u7406\u89e3Promises-A-\u89c4\u8303","title":"\u5b9e\u73b0\u7b80\u5355\u7684 Promise","description":"Promises/A+","source":"@site/docs/Frontend/JavaScript/Promise/10.\u7406\u89e3Promises-A-\u89c4\u8303.md","sourceDirName":"Frontend/JavaScript/Promise","slug":"/Frontend/JavaScript/Promise/\u7406\u89e3Promises-A-\u89c4\u8303","permalink":"/docs-hub/docs/Frontend/JavaScript/Promise/\u7406\u89e3Promises-A-\u89c4\u8303","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/Promise/10.\u7406\u89e3Promises-A-\u89c4\u8303.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":10,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"Promise","permalink":"/docs-hub/docs/category/promise"},"next":{"title":"Promise \u5b9e\u73b0\u4e0e\u94fe\u5f0f\u8c03\u7528","permalink":"/docs-hub/docs/Frontend/JavaScript/Promise/\u5904\u7406Promise\u4e2d\u7684\u5f02\u6b65\u548c\u94fe\u5f0f\u8c03\u7528"}}');var o=s(74848),i=s(28453);const c={},d="\u5b9e\u73b0\u7b80\u5355\u7684 Promise",t={},l=[{value:"\u5b89\u88c5 nodemon",id:"\u5b89\u88c5-nodemon",level:2},{value:"\u5b9e\u73b0\u7b80\u5355\u7684 Promise",id:"\u5b9e\u73b0\u7b80\u5355\u7684-promise-1",level:2},{value:"\u4ee3\u7801\u89e3\u6790",id:"\u4ee3\u7801\u89e3\u6790",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u5b9e\u73b0\u7b80\u5355\u7684-promise",children:"\u5b9e\u73b0\u7b80\u5355\u7684 Promise"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://promisesaplus.com/",children:"Promises/A+"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5b89\u88c5-nodemon",children:"\u5b89\u88c5 nodemon"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e3a\u4e86\u4fbf\u4e8e\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u91cd\u542f Node.js \u5e94\u7528\u7a0b\u5e8f\uff0c\u5efa\u8bae\u5b89\u88c5 ",(0,o.jsx)(n.code,{children:"nodemon"}),"\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install -g nodemon\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5b9e\u73b0\u7b80\u5355\u7684-promise-1",children:"\u5b9e\u73b0\u7b80\u5355\u7684 Promise"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5316\u7248\u7684 ",(0,o.jsx)(n.code,{children:"Promise"})," \u5b9e\u73b0\uff0c\u65e8\u5728\u5e2e\u52a9\u7406\u89e3 ",(0,o.jsx)(n.code,{children:"Promise"})," \u7684\u57fa\u672c\u5de5\u4f5c\u539f\u7406\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const PENDING = 'PENDING';\nconst FULFILLED = 'FULFILLED';\nconst REJECTED = 'REJECTED';\n\nclass MyPromise {\n  constructor(executor) {\n    this.status = PENDING;\n    this.value = undefined;\n    this.reason = undefined;\n\n    const resolve = (value) => {\n      if (this.status === PENDING) {\n        this.status = FULFILLED;\n        this.value = value;\n      }\n    };\n\n    const reject = (reason) => {\n      if (this.status === PENDING) {\n        this.status = REJECTED;\n        this.reason = reason;\n      }\n    };\n\n    try {\n      executor(resolve, reject);\n    } catch (error) {\n      reject(error);\n    }\n  }\n\n  then(onFulfilled, onRejected) {\n    if (this.status === FULFILLED) {\n      onFulfilled(this.value);\n    }\n    if (this.status === REJECTED) {\n      onRejected(this.reason);\n    }\n  }\n}\n\nconst promise = new MyPromise((resolve, reject) => {\n  throw new Error('Exception: Error');\n  // resolve('\u6210\u529f');\n});\n\npromise.then(\n  (value) => {\n    console.log(value);\n  },\n  (reason) => {\n    console.log(reason);\n  }\n);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u4ee3\u7801\u89e3\u6790",children:"\u4ee3\u7801\u89e3\u6790"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"MyPromise"})," \u7c7b\u6a21\u62df\u4e86\u539f\u751f ",(0,o.jsx)(n.code,{children:"Promise"})," \u7684\u57fa\u672c\u884c\u4e3a\uff0c\u5305\u62ec\u72b6\u6001\u7ba1\u7406\u548c ",(0,o.jsx)(n.code,{children:"then"})," \u65b9\u6cd5\u7684\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u72b6\u6001\u7ba1\u7406"}),": ",(0,o.jsx)(n.code,{children:"MyPromise"})," \u6709\u4e09\u4e2a\u72b6\u6001\uff0c",(0,o.jsx)(n.code,{children:"PENDING"}),"\uff08\u5f85\u5b9a\uff09\u3001",(0,o.jsx)(n.code,{children:"FULFILLED"}),"\uff08\u5df2\u5151\u73b0\uff09\u548c ",(0,o.jsx)(n.code,{children:"REJECTED"}),"\uff08\u5df2\u62d2\u7edd\uff09\u3002\u72b6\u6001\u4e00\u65e6\u4ece ",(0,o.jsx)(n.code,{children:"PENDING"})," \u53d8\u4e3a ",(0,o.jsx)(n.code,{children:"FULFILLED"})," \u6216 ",(0,o.jsx)(n.code,{children:"REJECTED"}),"\uff0c\u4fbf\u4e0d\u53ef\u9006\u8f6c\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u6784\u9020\u51fd\u6570"}),": \u63a5\u53d7\u4e00\u4e2a\u6267\u884c\u5668\u51fd\u6570 ",(0,o.jsx)(n.code,{children:"executor"}),"\uff0c\u8be5\u51fd\u6570\u5728\u5b9e\u4f8b\u5316\u65f6\u7acb\u5373\u6267\u884c\uff0c\u5e76\u4f20\u5165 ",(0,o.jsx)(n.code,{children:"resolve"})," \u548c ",(0,o.jsx)(n.code,{children:"reject"})," \u4e24\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u6539\u53d8 ",(0,o.jsx)(n.code,{children:"Promise"})," \u7684\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(n.code,{children:"then"})," \u65b9\u6cd5"]}),": \u6839\u636e\u5f53\u524d ",(0,o.jsx)(n.code,{children:"Promise"})," \u7684\u72b6\u6001\uff0c\u8c03\u7528\u76f8\u5e94\u7684\u56de\u8c03\u51fd\u6570 ",(0,o.jsx)(n.code,{children:"onFulfilled"})," \u6216 ",(0,o.jsx)(n.code,{children:"onRejected"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",(0,o.jsx)(n.code,{children:"MyPromise"})," \u88ab\u5b9e\u4f8b\u5316\u65f6\u6267\u884c\u5668\u51fd\u6570\u629b\u51fa\u4e86\u4e00\u4e2a\u9519\u8bef\uff0c\u8fd9\u5c06\u89e6\u53d1 ",(0,o.jsx)(n.code,{children:"reject"})," \u65b9\u6cd5\uff0c\u6700\u7ec8\u5728 ",(0,o.jsx)(n.code,{children:"then"})," \u65b9\u6cd5\u4e2d\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"onRejected"})," \u56de\u8c03\uff0c\u8f93\u51fa\u9519\u8bef\u4fe1\u606f\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const promise = new MyPromise((resolve, reject) => {\n  throw new Error('Exception: Error');\n  // resolve('\u6210\u529f');\n});\n\npromise.then(\n  (value) => {\n    console.log(value);\n  },\n  (reason) => {\n    console.log(reason);\n  }\n);\n// \u8f93\u51fa: Error: Exception: Error\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u540c\u6b65\u6267\u884c"}),": \u5728\u8fd9\u4e2a\u7b80\u5316\u7684\u5b9e\u73b0\u4e2d\uff0c",(0,o.jsx)(n.code,{children:"executor"})," \u51fd\u6570\u548c\u56de\u8c03\u51fd\u6570\u90fd\u662f\u540c\u6b65\u6267\u884c\u7684\u3002\u539f\u751f ",(0,o.jsx)(n.code,{children:"Promise"})," \u652f\u6301\u5f02\u6b65\u64cd\u4f5c\uff0c\u8fd9\u9700\u8981\u66f4\u590d\u6742\u7684\u5904\u7406\uff0c\u5982\u4f7f\u7528\u5fae\u4efb\u52a1\u961f\u5217\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.strong,{children:["\u591a\u6b21\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"then"})]}),": \u5f53\u524d\u5b9e\u73b0\u53ea\u652f\u6301\u5355\u6b21\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"then"})," \u65b9\u6cd5\uff0c\u539f\u751f ",(0,o.jsx)(n.code,{children:"Promise"})," \u652f\u6301\u94fe\u5f0f\u8c03\u7528\u548c\u591a\u6b21 ",(0,o.jsx)(n.code,{children:"then"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u72b6\u6001\u4e0d\u53ef\u9006\u8f6c"}),": \u4e00\u65e6 ",(0,o.jsx)(n.code,{children:"Promise"})," \u7684\u72b6\u6001\u4ece ",(0,o.jsx)(n.code,{children:"PENDING"})," \u8f6c\u53d8\u4e3a ",(0,o.jsx)(n.code,{children:"FULFILLED"})," \u6216 ",(0,o.jsx)(n.code,{children:"REJECTED"}),"\uff0c\u5c31\u4e0d\u80fd\u518d\u6b21\u6539\u53d8\u72b6\u6001\u3002"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var r=s(96540);const o={},i=r.createContext(o);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);