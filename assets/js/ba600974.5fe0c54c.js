"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[2082],{78302:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"Frontend/JavaScript/Promise/Promise-\u7ec3\u4e60\u9898","title":"Promise \u7ec3\u4e60\u9898","description":"async \u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f\u793a\u4f8b","source":"@site/docs/Frontend/JavaScript/Promise/50.Promise-\u7ec3\u4e60\u9898.md","sourceDirName":"Frontend/JavaScript/Promise","slug":"/Frontend/JavaScript/Promise/Promise-\u7ec3\u4e60\u9898","permalink":"/docs-hub/docs/Frontend/JavaScript/Promise/Promise-\u7ec3\u4e60\u9898","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/Promise/50.Promise-\u7ec3\u4e60\u9898.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":50,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u5f02\u6b65\u7f16\u7a0b\u8be6\u89e3","permalink":"/docs-hub/docs/Frontend/JavaScript/Promise/Promise-\u9898\u96c6"},"next":{"title":"Generator \u751f\u6210\u5668","permalink":"/docs-hub/docs/Frontend/JavaScript/Promise/Generator"}}');var d=s(74848),l=s(28453);const i={},r="Promise \u7ec3\u4e60\u9898",o={},h=[{value:"async \u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f\u793a\u4f8b",id:"async-\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f\u793a\u4f8b",level:2}];function x(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.header,{children:(0,d.jsx)(e.h1,{id:"promise-\u7ec3\u4e60\u9898",children:"Promise \u7ec3\u4e60\u9898"})}),"\n",(0,d.jsx)(e.h2,{id:"async-\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f\u793a\u4f8b",children:"async \u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f\u793a\u4f8b"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-javascript",children:"let n = 0;\n// async \u5982\u679c\u91cc\u9762\u6ca1\u6709await \u5c31\u662f\u4e00\u4e2a\u666e\u901a\u51fd\u6570\n(async function a(num) {\n  console.log('1-', num); // \u540c\u6b651 \u2014\u2014 1 0\n  // \u5148\u4f20\u53c2\u540e\u52a0\u51cf\n  b(num++);\n  console.log('2-', num); // \u540c\u6b655 \u2014\u2014 2 1\n})(n);\n\nasync function b(num) {\n  console.log('3-', num); // \u540c\u6b652 \u2014\u2014 3 0\n  // \u5148\u4f20\u53c2\u540e\u52a0\u51cf\n  await c(num++); // \u76f8\u5f53\u4e8e Promise.resolve().then(res => console.log('4-',++num);)\n  console.log('4-', ++num); // \u5fae\u4efb\u52a11 \u2014\u2014 4 1\n}\n\nasync function c(num) {\n  console.log('5-', num); // \u540c\u6b653 \u2014\u2014 5 0\n  // \u5f02\u6b65\u4efb\u52a1 \u6ce8\u518c\n  setTimeout(() => {\n    console.log('6-', num); // \u5f02\u6b65\u4efb\u52a1 \u2014\u2014 6 1\n  });\n  console.log('7-', ++num); // \u540c\u6b654 \u2014\u2014 7 1\n}\n\nnew Promise((resolve) => {\n  console.log('8-', n); // \u540c\u6b656 \u2014\u2014 8 0\n  resolve(n);\n}).then((res) => {\n  console.log('9-', n++); // \u5fae\u4efb\u52a12 \u2014\u2014 9 1\n});\n\nconsole.log('10-', n++ > n); // \u540c\u6b657 \u2014\u2014 10 false\nconsole.log('11-', n); // \u540c\u6b658 \u2014\u2014 11 1\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u6d89\u53ca\u591a\u4e2a ",(0,d.jsx)(e.code,{children:"async"})," \u51fd\u6570\u3001",(0,d.jsx)(e.code,{children:"Promise"})," \u4ee5\u53ca ",(0,d.jsx)(e.code,{children:"setTimeout"})," \u7684\u6df7\u5408\u4f7f\u7528\u3002\u4ee5\u4e0b\u662f\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f\u53ca\u5176\u539f\u56e0\uff1a"]}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u521d\u59cb\u5316\u53d8\u91cf"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"let n = 0;"})," \u521d\u59cb\u5316\u53d8\u91cf ",(0,d.jsx)(e.code,{children:"n"})," \u4e3a ",(0,d.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u6267\u884c IIFE (\u7acb\u5373\u8c03\u7528\u7684\u5f02\u6b65\u51fd\u6570)"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"(async function a(num) { ... })(n);"})," \u7acb\u5373\u8c03\u7528\u5f02\u6b65\u51fd\u6570 ",(0,d.jsx)(e.code,{children:"a"}),"\uff0c\u4f20\u5165\u5f53\u524d\u7684 ",(0,d.jsx)(e.code,{children:"n"})," \u503c ",(0,d.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsxs)(e.strong,{children:["\u51fd\u6570 ",(0,d.jsx)(e.code,{children:"a"})," \u6267\u884c"]})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"console.log('1-', num);"})," \u8f93\u51fa ",(0,d.jsx)(e.code,{children:"1- 0"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u8c03\u7528 ",(0,d.jsx)(e.code,{children:"b(num++)"}),"\uff0c\u4f20\u5165\u5f53\u524d ",(0,d.jsx)(e.code,{children:"num"})," \u503c ",(0,d.jsx)(e.code,{children:"0"}),"\uff0c\u7136\u540e ",(0,d.jsx)(e.code,{children:"num"})," \u81ea\u589e\u4e3a ",(0,d.jsx)(e.code,{children:"1"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"console.log('2-', num);"})," \u8f93\u51fa ",(0,d.jsx)(e.code,{children:"2- 1"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsxs)(e.strong,{children:["\u51fd\u6570 ",(0,d.jsx)(e.code,{children:"b"})," \u6267\u884c"]})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"console.log('3-', num);"})," \u8f93\u51fa ",(0,d.jsx)(e.code,{children:"3- 0"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u8c03\u7528 ",(0,d.jsx)(e.code,{children:"await c(num++)"}),"\uff0c\u4f20\u5165\u5f53\u524d ",(0,d.jsx)(e.code,{children:"num"})," \u503c ",(0,d.jsx)(e.code,{children:"0"}),"\uff0c\u7136\u540e ",(0,d.jsx)(e.code,{children:"num"})," \u81ea\u589e\u4e3a ",(0,d.jsx)(e.code,{children:"1"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsxs)(e.strong,{children:["\u51fd\u6570 ",(0,d.jsx)(e.code,{children:"c"})," \u6267\u884c"]})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"console.log('5-', num);"})," \u8f93\u51fa ",(0,d.jsx)(e.code,{children:"5- 0"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u8bbe\u7f6e\u4e00\u4e2a ",(0,d.jsx)(e.code,{children:"setTimeout"}),"\uff0c\u5c06\u5728\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u6ce8\u518c\u4e00\u4e2a\u56de\u8c03\uff0c\u5ef6\u8fdf\u6267\u884c ",(0,d.jsx)(e.code,{children:"console.log('6-', num);"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"console.log('7-', ++num);"})," \u5148\u5c06 ",(0,d.jsx)(e.code,{children:"num"})," \u81ea\u589e\u4e3a ",(0,d.jsx)(e.code,{children:"1"}),"\uff0c\u7136\u540e\u8f93\u51fa ",(0,d.jsx)(e.code,{children:"7- 1"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsxs)(e.strong,{children:["\u7ee7\u7eed\u6267\u884c\u51fd\u6570 ",(0,d.jsx)(e.code,{children:"b"})]})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"await c(num++)"})," \u7b49\u5f85 ",(0,d.jsx)(e.code,{children:"c"})," \u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u3002\u7531\u4e8e ",(0,d.jsx)(e.code,{children:"c"})," \u4e2d\u6ca1\u6709\u8fd4\u56de ",(0,d.jsx)(e.code,{children:"Promise"}),"\uff0c\u9ed8\u8ba4\u8fd4\u56de ",(0,d.jsx)(e.code,{children:"undefined"}),"\uff0c\u56e0\u6b64\u7ee7\u7eed\u6267\u884c\u540e\u7eed\u4ee3\u7801\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"console.log('4-', ++num);"})," \u5c06 ",(0,d.jsx)(e.code,{children:"num"})," \u81ea\u589e\u4e3a ",(0,d.jsx)(e.code,{children:"2"}),"\uff0c\u7136\u540e\u8f93\u51fa ",(0,d.jsx)(e.code,{children:"4- 2"}),"\u3002\u6b64\u65f6\uff0c",(0,d.jsx)(e.code,{children:"b"})," \u51fd\u6570\u7684\u5fae\u4efb\u52a1\u5b8c\u6210\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsxs)(e.strong,{children:["\u6267\u884c ",(0,d.jsx)(e.code,{children:"Promise"})]})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"new Promise((resolve) => { ... }).then(res => { ... });"})," \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,d.jsx)(e.code,{children:"Promise"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"console.log('8-', n);"})," \u8f93\u51fa ",(0,d.jsx)(e.code,{children:"8- 0"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"resolve(n);"})," \u7acb\u5373\u89e3\u6790 ",(0,d.jsx)(e.code,{children:"Promise"}),"\uff0c\u5c06 ",(0,d.jsx)(e.code,{children:"n"})," \u7684\u503c ",(0,d.jsx)(e.code,{children:"0"})," \u4f20\u9012\u7ed9\u4e0b\u4e00\u4e2a ",(0,d.jsx)(e.code,{children:"then"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u5728\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u6ce8\u518c ",(0,d.jsx)(e.code,{children:"then"})," \u56de\u8c03\uff0c\u8f93\u51fa ",(0,d.jsx)(e.code,{children:"9- 1"}),"\uff08\u56e0\u4e3a ",(0,d.jsx)(e.code,{children:"n++"})," \u540e ",(0,d.jsx)(e.code,{children:"n"})," \u53d8\u4e3a ",(0,d.jsx)(e.code,{children:"1"}),"\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u540c\u6b65\u4ee3\u7801\u7ee7\u7eed\u6267\u884c"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"console.log('10-', n++ > n);"})," \u8ba1\u7b97 ",(0,d.jsx)(e.code,{children:"0 > 1"}),"\uff0c\u7ed3\u679c\u4e3a ",(0,d.jsx)(e.code,{children:"false"}),"\uff0c\u7136\u540e ",(0,d.jsx)(e.code,{children:"n"})," \u81ea\u589e\u4e3a ",(0,d.jsx)(e.code,{children:"1"}),"\u3002\u8f93\u51fa ",(0,d.jsx)(e.code,{children:"10- false"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"console.log('11-', n);"})," \u8f93\u51fa ",(0,d.jsx)(e.code,{children:"11- 1"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u5904\u7406\u5fae\u4efb\u52a1\u961f\u5217"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u5148\u6267\u884c ",(0,d.jsx)(e.code,{children:"b"})," \u51fd\u6570\u4e2d ",(0,d.jsx)(e.code,{children:"console.log('4-', ++num);"})," \u8f93\u51fa ",(0,d.jsx)(e.code,{children:"4- 2"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u7136\u540e\u6267\u884c ",(0,d.jsx)(e.code,{children:"Promise"})," \u7684 ",(0,d.jsx)(e.code,{children:"then"})," \u56de\u8c03\uff0c\u8f93\u51fa ",(0,d.jsx)(e.code,{children:"9- 1"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u5904\u7406\u5b8f\u4efb\u52a1\u961f\u5217"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u6267\u884c ",(0,d.jsx)(e.code,{children:"setTimeout"})," \u56de\u8c03\uff0c\u8f93\u51fa ",(0,d.jsx)(e.code,{children:"6- 1"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u6700\u7ec8\u8f93\u51fa\u987a\u5e8f\uff1a"})}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"1- 0\n3- 0\n5- 0\n7- 1\n8- 0\n10- false\n11- 1\n4- 2\n9- 1\n6- 1\n"})}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u8be6\u7ec6\u89e3\u91ca\uff1a"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"\u540c\u6b65\u4efb\u52a1"})," \u6309\u7167\u4ee3\u7801\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\uff0c\u8f93\u51fa ",(0,d.jsx)(e.code,{children:"1- 0"}),"\u3001",(0,d.jsx)(e.code,{children:"3- 0"}),"\u3001",(0,d.jsx)(e.code,{children:"5- 0"}),"\u3001",(0,d.jsx)(e.code,{children:"7- 1"}),"\u3001",(0,d.jsx)(e.code,{children:"8- 0"}),"\u3001",(0,d.jsx)(e.code,{children:"10- false"}),"\u3001",(0,d.jsx)(e.code,{children:"11- 1"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"\u5fae\u4efb\u52a1"})," \u5305\u542b ",(0,d.jsx)(e.code,{children:"async"})," \u51fd\u6570\u4e2d\u7684 ",(0,d.jsx)(e.code,{children:"await"})," \u540e\u7684\u4ee3\u7801\u548c ",(0,d.jsx)(e.code,{children:"Promise.then"})," \u56de\u8c03\uff0c\u5148\u6267\u884c ",(0,d.jsx)(e.code,{children:"4- 2"}),"\uff0c\u7136\u540e\u6267\u884c ",(0,d.jsx)(e.code,{children:"9- 1"}),"\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"\u5f02\u6b65\u4efb\u52a1"})," \u5305\u542b ",(0,d.jsx)(e.code,{children:"setTimeout"})," \u56de\u8c03\uff0c\u6700\u540e\u6267\u884c ",(0,d.jsx)(e.code,{children:"6- 1"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u5173\u952e\u70b9\u89e3\u6790\uff1a"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsxs)(e.strong,{children:[(0,d.jsx)(e.code,{children:"async"})," \u51fd\u6570\u7684\u884c\u4e3a\uff1a"]})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u5982\u679c ",(0,d.jsx)(e.code,{children:"async"})," \u51fd\u6570\u5185\u90e8\u6ca1\u6709 ",(0,d.jsx)(e.code,{children:"await"}),"\uff0c\u5219\u5176\u884c\u4e3a\u7c7b\u4f3c\u4e8e\u666e\u901a\u51fd\u6570\uff0c\u6240\u6709\u540c\u6b65\u4ee3\u7801\u7acb\u5373\u6267\u884c\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u4e00\u65e6\u9047\u5230 ",(0,d.jsx)(e.code,{children:"await"}),"\uff0c\u51fd\u6570\u4f1a\u6682\u505c\u6267\u884c\uff0c\u7b49\u5f85 ",(0,d.jsx)(e.code,{children:"await"})," \u7684 Promise \u5b8c\u6210\u540e\u518d\u7ee7\u7eed\u6267\u884c\u540e\u7eed\u4ee3\u7801\uff0c\u8fd9\u90e8\u5206\u4ee3\u7801\u4f1a\u4f5c\u4e3a\u5fae\u4efb\u52a1\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsxs)(e.strong,{children:[(0,d.jsx)(e.code,{children:"Promise"})," \u548c ",(0,d.jsx)(e.code,{children:"setTimeout"})," \u7684\u533a\u522b\uff1a"]})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"Promise"})," \u7684\u56de\u8c03\uff08\u5982 ",(0,d.jsx)(e.code,{children:"then"}),"\uff09\u5c5e\u4e8e\u5fae\u4efb\u52a1\uff0c\u4f18\u5148\u4e8e\u5b8f\u4efb\u52a1\u6267\u884c\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"setTimeout"})," \u7684\u56de\u8c03\u5c5e\u4e8e\u5b8f\u4efb\u52a1\uff0c\u4f1a\u5728\u6240\u6709\u5fae\u4efb\u52a1\u5b8c\u6210\u540e\u6267\u884c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u53d8\u91cf\u81ea\u589e\u64cd\u4f5c\u7684\u987a\u5e8f\uff1a"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"num++"})," \u662f\u540e\u7f00\u81ea\u589e\uff0c\u5148\u4f20\u9012\u5f53\u524d\u503c\uff0c\u518d\u81ea\u589e\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"++num"})," \u662f\u524d\u7f00\u81ea\u589e\uff0c\u5148\u81ea\u589e\uff0c\u518d\u4f20\u9012\u65b0\u503c\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(x,{...n})}):x(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>r});var c=s(96540);const d={},l=c.createContext(d);function i(n){const e=c.useContext(l);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),c.createElement(l.Provider,{value:e},n.children)}}}]);