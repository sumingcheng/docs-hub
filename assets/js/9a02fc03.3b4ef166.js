"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[90553],{65403:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"Frontend/JavaScript/\u4e8b\u4ef6\u73af/\u4e8b\u4ef6\u73af\u7684\u8fd0\u884c\u6d41\u7a0b","title":"\u4e8b\u4ef6\u5faa\u73af\u7ec3\u4e60","description":"\u7ec3\u4e60 1","source":"@site/docs/Frontend/JavaScript/\u4e8b\u4ef6\u73af/3.\u4e8b\u4ef6\u73af\u7684\u8fd0\u884c\u6d41\u7a0b.md","sourceDirName":"Frontend/JavaScript/\u4e8b\u4ef6\u73af","slug":"/Frontend/JavaScript/\u4e8b\u4ef6\u73af/\u4e8b\u4ef6\u73af\u7684\u8fd0\u884c\u6d41\u7a0b","permalink":"/docs-hub/Frontend/JavaScript/\u4e8b\u4ef6\u73af/\u4e8b\u4ef6\u73af\u7684\u8fd0\u884c\u6d41\u7a0b","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u4e8b\u4ef6\u73af/3.\u4e8b\u4ef6\u73af\u7684\u8fd0\u884c\u6d41\u7a0b.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":3,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1","permalink":"/docs-hub/Frontend/JavaScript/\u4e8b\u4ef6\u73af/\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1"},"next":{"title":"\u51fd\u6570\u5f0f\u7f16\u7a0b","permalink":"/docs-hub/category/\u51fd\u6570\u5f0f\u7f16\u7a0b"}}');var l=s(74848),i=s(28453);const d={},o="\u4e8b\u4ef6\u5faa\u73af\u7ec3\u4e60",r={},h=[{value:"\u7ec3\u4e60 1",id:"\u7ec3\u4e60-1",level:2},{value:"\u7ec3\u4e60 2",id:"\u7ec3\u4e60-2",level:2},{value:"\u7ec3\u4e60 3",id:"\u7ec3\u4e60-3",level:2},{value:"\u7ec3\u4e60 4",id:"\u7ec3\u4e60-4",level:2},{value:"\u7ec3\u4e60 5",id:"\u7ec3\u4e60-5",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u4e8b\u4ef6\u5faa\u73af\u7ec3\u4e60",children:"\u4e8b\u4ef6\u5faa\u73af\u7ec3\u4e60"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7ec3\u4e60-1",children:"\u7ec3\u4e60 1"}),"\n",(0,l.jsx)(n.p,{children:"\u5206\u6790\u4ee5\u4e0b\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"Promise.resolve().then(() => {\n  console.log('p1');\n  setTimeout(() => {\n    console.log('s2');\n  }, 0);\n});\n\nsetTimeout(() => {\n  console.log('s1');\n  Promise.resolve().then(() => {\n    console.log('p2');\n  });\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u6b65\u9aa4\u5982\u4e0b:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u521d\u59cb\u5316\u5b8f\u4efb\u52a1\u961f\u5217: ",(0,l.jsx)(n.code,{children:"s1"}),", ",(0,l.jsx)(n.code,{children:"s2"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u521d\u59cb\u5316\u5fae\u4efb\u52a1\u961f\u5217: ",(0,l.jsx)(n.code,{children:"p1"}),", ",(0,l.jsx)(n.code,{children:"p2"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c\u540c\u6b65\u4ee3\u7801,\u5c06",(0,l.jsx)(n.code,{children:"Promise.resolve().then"}),"\u7684\u56de\u8c03\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217,",(0,l.jsx)(n.code,{children:"setTimeout"}),"\u7684\u56de\u8c03\u52a0\u5165\u5b8f\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsx)(n.li,{children:"\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5,\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217"}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"p1"}),",\u5c06",(0,l.jsx)(n.code,{children:"setTimeout"}),"\u7684\u56de\u8c03\u52a0\u5165\u5b8f\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsx)(n.li,{children:"\u5fae\u4efb\u52a1\u961f\u5217\u6267\u884c\u5b8c\u6bd5,\u6267\u884c\u5b8f\u4efb\u52a1\u961f\u5217"}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"s1"}),",\u5c06",(0,l.jsx)(n.code,{children:"Promise.resolve().then"}),"\u7684\u56de\u8c03\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"p2"})]}),"\n",(0,l.jsx)(n.li,{children:"\u5fae\u4efb\u52a1\u961f\u5217\u6267\u884c\u5b8c\u6bd5,\u6267\u884c\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1"}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"s2"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u6b64\u6700\u7ec8\u8f93\u51fa\u987a\u5e8f\u4e3a: ",(0,l.jsx)(n.code,{children:"p1"}),", ",(0,l.jsx)(n.code,{children:"s1"}),", ",(0,l.jsx)(n.code,{children:"p2"}),", ",(0,l.jsx)(n.code,{children:"s2"})]}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u987a\u5e8f\u9075\u5faa: \u540c\u6b65\u4ee3\u7801 -> \u5fae\u4efb\u52a1\u4ee3\u7801 -> \u6e32\u67d3 -> \u5b8f\u4efb\u52a1\u4ee3\u7801"}),"\n",(0,l.jsx)(n.h2,{id:"\u7ec3\u4e60-2",children:"\u7ec3\u4e60 2"}),"\n",(0,l.jsx)(n.p,{children:"\u5206\u6790\u4ee5\u4e0b\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log(1);\n\nsetTimeout(() => {\n  console.log(2);\n}, 10);\n\nnew Promise(function (resolve, reject) {\n  console.log(3);\n  resolve('');\n  console.log(4);\n}).then((res) => {\n  console.log(5);\n});\nconsole.log(6);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u6b65\u9aa4:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"1"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5c06",(0,l.jsx)(n.code,{children:"setTimeout"}),"\u7684\u56de\u8c03\u52a0\u5165\u5b8f\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c",(0,l.jsx)(n.code,{children:"new Promise"}),"\u7684 executor,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"3"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u9047\u5230",(0,l.jsx)(n.code,{children:"resolve"}),",\u5c06",(0,l.jsx)(n.code,{children:"then"}),"\u7684\u56de\u8c03\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7ee7\u7eed\u6267\u884c executor,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"4"})]}),"\n",(0,l.jsxs)(n.li,{children:["executor \u6267\u884c\u5b8c\u6bd5,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"6"})]}),"\n",(0,l.jsx)(n.li,{children:"\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5,\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217"}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c",(0,l.jsx)(n.code,{children:"then"}),"\u7684\u56de\u8c03,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"5"})]}),"\n",(0,l.jsx)(n.li,{children:"\u5fae\u4efb\u52a1\u961f\u5217\u6267\u884c\u5b8c\u6bd5,\u6267\u884c\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1"}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"2"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u6b64\u6700\u7ec8\u8f93\u51fa\u987a\u5e8f\u4e3a: ",(0,l.jsx)(n.code,{children:"1"}),", ",(0,l.jsx)(n.code,{children:"3"}),", ",(0,l.jsx)(n.code,{children:"4"}),", ",(0,l.jsx)(n.code,{children:"6"}),", ",(0,l.jsx)(n.code,{children:"5"}),", ",(0,l.jsx)(n.code,{children:"2"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ec3\u4e60-3",children:"\u7ec3\u4e60 3"}),"\n",(0,l.jsx)(n.p,{children:"\u5206\u6790\u4ee5\u4e0b\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const oBtn = document.getElementById('btn');\n\noBtn.addEventListener(\n  'click',\n  () => {\n    console.log(1);\n\n    Promise.resolve('m1').then((str) => {\n      console.log(str);\n    });\n  },\n  false\n);\n\noBtn.addEventListener(\n  'click',\n  () => {\n    console.log(2);\n\n    Promise.resolve('m2').then((str) => {\n      console.log(str);\n    });\n  },\n  false\n);\n\noBtn.click();\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u6b65\u9aa4:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4e3a",(0,l.jsx)(n.code,{children:"btn"}),"\u5143\u7d20\u7ed1\u5b9a\u4e24\u4e2a\u70b9\u51fb\u4e8b\u4ef6\u56de\u8c03"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8c03\u7528",(0,l.jsx)(n.code,{children:"oBtn.click()"}),"\u6a21\u62df\u70b9\u51fb\u4e8b\u4ef6"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c\u7b2c\u4e00\u4e2a\u70b9\u51fb\u56de\u8c03,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"1"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5c06",(0,l.jsx)(n.code,{children:"Promise.resolve('m1').then"}),"\u7684\u56de\u8c03\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c\u7b2c\u4e8c\u4e2a\u70b9\u51fb\u56de\u8c03,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"2"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5c06",(0,l.jsx)(n.code,{children:"Promise.resolve('m2').then"}),"\u7684\u56de\u8c03\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsx)(n.li,{children:"\u70b9\u51fb\u56de\u8c03\u6267\u884c\u5b8c\u6bd5(\u5c5e\u4e8e\u5b8f\u4efb\u52a1),\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217"}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"m1"}),", ",(0,l.jsx)(n.code,{children:"m2"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u6b64\u6700\u7ec8\u8f93\u51fa\u987a\u5e8f\u4e3a: ",(0,l.jsx)(n.code,{children:"1"}),", ",(0,l.jsx)(n.code,{children:"2"}),", ",(0,l.jsx)(n.code,{children:"m1"}),", ",(0,l.jsx)(n.code,{children:"m2"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"addEventListener"}),"\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u56de\u8c03\u5c5e\u4e8e\u5b8f\u4efb\u52a1"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ec3\u4e60-4",children:"\u7ec3\u4e60 4"}),"\n",(0,l.jsx)(n.p,{children:"\u5206\u6790\u4ee5\u4e0b\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"setTimeout(() => {\n  console.log('setTimeout1');\n  setTimeout(() => {\n    console.log('setTimeout3');\n  }, 1000);\n  Promise.resolve().then((data) => {\n    console.log('then3');\n  });\n});\n\nPromise.resolve().then((data) => {\n  console.log('then1');\n  console.log('then4');\n  Promise.resolve().then((data) => {\n    console.log('then6');\n  });\n});\n\nPromise.resolve().then((data) => {\n  console.log('then2');\n  console.log('then5');\n  setTimeout(() => {\n    console.log('setTimeout2');\n  }, 1000);\n});\n\nconsole.log(2);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u6b65\u9aa4:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5c06\u7b2c\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"setTimeout"}),"\u7684\u56de\u8c03\u52a0\u5165\u5b8f\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5c06\u7b2c\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"Promise.resolve().then"}),"\u7684\u56de\u8c03\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5c06\u7b2c\u4e8c\u4e2a",(0,l.jsx)(n.code,{children:"Promise.resolve().then"}),"\u7684\u56de\u8c03\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"2"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217,\u4f9d\u6b21\u8f93\u51fa",(0,l.jsx)(n.code,{children:"then1"}),", ",(0,l.jsx)(n.code,{children:"then4"}),", ",(0,l.jsx)(n.code,{children:"then2"}),", ",(0,l.jsx)(n.code,{children:"then5"}),",\u5e76\u5c06",(0,l.jsx)(n.code,{children:"then6"}),"\u7684\u56de\u8c03\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7ee7\u7eed\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"then6"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5fae\u4efb\u52a1\u961f\u5217\u6267\u884c\u5b8c\u6bd5,\u6267\u884c\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1,\u5373\u7b2c\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"setTimeout"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"setTimeout1"}),",\u5c06\u5185\u90e8\u7684",(0,l.jsx)(n.code,{children:"setTimeout"}),"\u52a0\u5165\u5b8f\u4efb\u52a1\u961f\u5217,\u5c06",(0,l.jsx)(n.code,{children:"then3"}),"\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"then3"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1,\u5373\u7b2c\u4e8c\u4e2a",(0,l.jsx)(n.code,{children:"setTimeout"}),",\u8f93\u51fa",(0,l.jsx)(n.code,{children:"setTimeout2"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c\u6700\u540e\u4e00\u4e2a\u5b8f\u4efb\u52a1,\u5373\u6700\u5185\u5c42\u7684",(0,l.jsx)(n.code,{children:"setTimeout"}),",\u8f93\u51fa",(0,l.jsx)(n.code,{children:"setTimeout3"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u6b64\u6700\u7ec8\u8f93\u51fa\u987a\u5e8f\u4e3a:",(0,l.jsx)(n.code,{children:"2"}),", ",(0,l.jsx)(n.code,{children:"then1"}),", ",(0,l.jsx)(n.code,{children:"then4"}),", ",(0,l.jsx)(n.code,{children:"then2"}),", ",(0,l.jsx)(n.code,{children:"then5"}),", ",(0,l.jsx)(n.code,{children:"then6"}),", ",(0,l.jsx)(n.code,{children:"setTimeout1"}),", ",(0,l.jsx)(n.code,{children:"then3"}),", ",(0,l.jsx)(n.code,{children:"setTimeout2"}),", ",(0,l.jsx)(n.code,{children:"setTimeout3"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5148\u8c03\u7528\u7684",(0,l.jsx)(n.code,{children:"then"}),"\u4e00\u5b9a\u5148\u4e8e\u540e\u8c03\u7528\u7684",(0,l.jsx)(n.code,{children:"then"}),"\u8f93\u51fa"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ec3\u4e60-5",children:"\u7ec3\u4e60 5"}),"\n",(0,l.jsx)(n.p,{children:"\u5206\u6790\u4ee5\u4e0b\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"async function async1() {\n  console.log('a1.start');\n  await async2();\n  console.log('a1 end');\n}\n\nasync function async2() {\n  console.log('async2');\n}\n\nconsole.log('script start');\n\nsetTimeout(function () {\n  console.log('setTimeout');\n}, 0);\n\nasync1();\n\nnew Promise(function (resolve) {\n  console.log('promise1');\n  resolve();\n}).then(function () {\n  console.log('promise2');\n});\n\nconsole.log('script end');\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u6b65\u9aa4:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"script start"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5c06",(0,l.jsx)(n.code,{children:"setTimeout"}),"\u7684\u56de\u8c03\u52a0\u5165\u5b8f\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8c03\u7528",(0,l.jsx)(n.code,{children:"async1()"}),",\u8f93\u51fa",(0,l.jsx)(n.code,{children:"a1.start"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u9047\u5230",(0,l.jsx)(n.code,{children:"await"}),",\u8c03\u7528",(0,l.jsx)(n.code,{children:"async2()"}),",\u8f93\u51fa",(0,l.jsx)(n.code,{children:"async2"}),",",(0,l.jsx)(n.code,{children:"await"}),"\u540e\u9762\u7684\u4ee3\u7801\u76f8\u5f53\u4e8e",(0,l.jsx)(n.code,{children:"then"}),"\u7684\u56de\u8c03,\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6267\u884c",(0,l.jsx)(n.code,{children:"new Promise"}),"\u7684 executor,\u8f93\u51fa",(0,l.jsx)(n.code,{children:"promise1"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u9047\u5230",(0,l.jsx)(n.code,{children:"resolve"}),",\u5c06",(0,l.jsx)(n.code,{children:"then"}),"\u7684\u56de\u8c03\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"script end"})]}),"\n",(0,l.jsx)(n.li,{children:"\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5,\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217"}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"a1 end"}),", ",(0,l.jsx)(n.code,{children:"promise2"})]}),"\n",(0,l.jsx)(n.li,{children:"\u5fae\u4efb\u52a1\u961f\u5217\u6267\u884c\u5b8c\u6bd5,\u6267\u884c\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1"}),"\n",(0,l.jsxs)(n.li,{children:["\u8f93\u51fa",(0,l.jsx)(n.code,{children:"setTimeout"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u6b64\u6700\u7ec8\u8f93\u51fa\u987a\u5e8f\u4e3a: ",(0,l.jsx)(n.code,{children:"script start"}),"\u3001 ",(0,l.jsx)(n.code,{children:"a1.start"})," \u3001 ",(0,l.jsx)(n.code,{children:"async2"}),"\u3001 ",(0,l.jsx)(n.code,{children:"promise1"}),"\u3001 ",(0,l.jsx)(n.code,{children:"script end"}),"\u3001 ",(0,l.jsx)(n.code,{children:"a1 end"}),"\u3001",(0,l.jsx)(n.code,{children:"promise2"}),"\u3001",(0,l.jsx)(n.code,{children:"setTimeout"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"await"}),"\u540e\u9762\u7684\u4ee3\u7801\u76f8\u5f53\u4e8e",(0,l.jsx)(n.code,{children:"Promise.then"}),"\u7684\u56de\u8c03,\u4f1a\u88ab\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u4e8b\u4ef6\u5faa\u73af\u7ec3\u4e60\u9898",src:s(17177).A+"",width:"1173",height:"726"})}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u4e9b\u7ec3\u4e60\u9898,\u6211\u4eec\u53ef\u4ee5\u603b\u7ed3\u51fa\u4e8b\u4ef6\u5faa\u73af\u7684\u4e00\u4e9b\u89c4\u5f8b:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u540c\u6b65\u4ee3\u7801\u4f18\u5148\u6267\u884c,\u5c06\u5f02\u6b65\u4efb\u52a1\u52a0\u5165\u5bf9\u5e94\u7684\u5b8f\u4efb\u52a1\u961f\u5217\u6216\u5fae\u4efb\u52a1\u961f\u5217"}),"\n",(0,l.jsx)(n.li,{children:"\u5f53\u540c\u6b65\u4ee3\u7801\u5168\u90e8\u6267\u884c\u5b8c\u540e,\u68c0\u67e5\u5e76\u6e05\u7a7a\u5fae\u4efb\u52a1\u961f\u5217"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c UI \u6e32\u67d3\u5de5\u4f5c"}),"\n",(0,l.jsx)(n.li,{children:"\u53d6\u51fa\u5b8f\u4efb\u52a1\u961f\u5217\u7684\u9996\u4e2a\u4efb\u52a1\u6267\u884c,\u68c0\u67e5\u5e76\u6e05\u7a7a\u5fae\u4efb\u52a1\u961f\u5217,\u4f9d\u6b64\u5faa\u73af"}),"\n",(0,l.jsx)(n.li,{children:"\u5148\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u56de\u8c03\u5148\u6267\u884c"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"await"}),"\u540e\u9762\u7684\u4ee3\u7801\u76f8\u5f53\u4e8e",(0,l.jsx)(n.code,{children:"Promise.then"}),"\u7684\u56de\u8c03"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},17177:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/faeedd8cdc278efb633b46c67c834b5f-49b3a05c99805e4256f85b6a1fc759d0.jpeg"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var c=s(96540);const l={},i=c.createContext(l);function d(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);