"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["58774"],{3755:function(e,n,c){c.r(n),c.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"Frontend/JavaScript/ES3~ES5/\u8BED\u6CD5-\u89C4\u8303-\u9519\u8BEF-\u8FD0\u7B97\u7B26-\u5224\u65AD-\u6CE8\u91CA","title":"\u8BED\u53E5\u4E0E\u8FD0\u7B97\u7B26\u6307\u5357","description":"JavaScript \u7684\u8BED\u53E5\u4EE5\u5206\u53F7\u7ED3\u675F\u3002\u4F7F\u7528\u5206\u53F7\u5206\u9694\u6BCF\u6761\u8BED\u53E5\u3002","source":"@site/docs/Frontend/JavaScript/ES3~ES5/20.\u8BED\u6CD5-\u89C4\u8303-\u9519\u8BEF-\u8FD0\u7B97\u7B26-\u5224\u65AD-\u6CE8\u91CA.md","sourceDirName":"Frontend/JavaScript/ES3~ES5","slug":"/Frontend/JavaScript/ES3~ES5/\u8BED\u6CD5-\u89C4\u8303-\u9519\u8BEF-\u8FD0\u7B97\u7B26-\u5224\u65AD-\u6CE8\u91CA","permalink":"/docs-hub/Frontend/JavaScript/ES3~ES5/\u8BED\u6CD5-\u89C4\u8303-\u9519\u8BEF-\u8FD0\u7B97\u7B26-\u5224\u65AD-\u6CE8\u91CA","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/ES3~ES5/20.\u8BED\u6CD5-\u89C4\u8303-\u9519\u8BEF-\u8FD0\u7B97\u7B26-\u5224\u65AD-\u6CE8\u91CA.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":20,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u56DE\u987E\u5386\u53F2","permalink":"/docs-hub/Frontend/JavaScript/ES3~ES5/\u6F14\u8FDB\u4E0E\u6D4F\u89C8\u5668\u53D1\u5C55\u53F2"},"next":{"title":"\u5FAA\u73AF","permalink":"/docs-hub/Frontend/JavaScript/ES3~ES5/\u5FAA\u73AF-\u5F15\u7528\u503C\u521D\u8BC6-\u663E\u793A\u53CA\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362"}}'),l=c("85893"),d=c("50065");let i={},r="\u8BED\u53E5\u4E0E\u8FD0\u7B97\u7B26\u6307\u5357",a={},o=[{value:"\u8868\u8FBE\u5F0F\u5199\u6CD5",id:"\u8868\u8FBE\u5F0F\u5199\u6CD5",level:2},{value:"\u8BED\u6CD5\u9519\u8BEF",id:"\u8BED\u6CD5\u9519\u8BEF",level:2},{value:"\u901A\u7528\u9519\u8BEF",id:"\u901A\u7528\u9519\u8BEF",level:2},{value:"\u4EE3\u7801\u5757\u5185\u7684\u9519\u8BEF",id:"\u4EE3\u7801\u5757\u5185\u7684\u9519\u8BEF",level:2},{value:"\u52A0\u53F7\u8FD0\u7B97\u7B26 <code>+</code>",id:"\u52A0\u53F7\u8FD0\u7B97\u7B26-",level:2},{value:"\u9664\u53F7\u8FD0\u7B97\u7B26 <code>/</code>",id:"\u9664\u53F7\u8FD0\u7B97\u7B26-",level:2},{value:"NaN \u662F\u4EC0\u4E48\uFF1F",id:"nan-\u662F\u4EC0\u4E48",level:3},{value:"\u4E3A\u4EC0\u4E48 NaN \u662F number \u7C7B\u578B\uFF1F",id:"\u4E3A\u4EC0\u4E48-nan-\u662F-number-\u7C7B\u578B",level:3},{value:"Infinity",id:"infinity",level:3},{value:"\u53D6\u4F59\u8FD0\u7B97\u7B26 <code>%</code>",id:"\u53D6\u4F59\u8FD0\u7B97\u7B26-",level:2},{value:"\u503C\u4EA4\u6362\u95EE\u9898",id:"\u503C\u4EA4\u6362\u95EE\u9898",level:2},{value:"\u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26 <code>++</code>\u3001<code>--</code>",id:"\u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26---",level:2},{value:"\u7EC3\u4E60",id:"\u7EC3\u4E60",level:2},{value:"\u7EC3\u4E60 1",id:"\u7EC3\u4E60-1",level:3},{value:"\u7EC3\u4E60 2",id:"\u7EC3\u4E60-2",level:3},{value:"\u7EC3\u4E60 3",id:"\u7EC3\u4E60-3",level:3},{value:"\u7EC3\u4E60 4",id:"\u7EC3\u4E60-4",level:3},{value:"\u7EC3\u4E60 5",id:"\u7EC3\u4E60-5",level:3},{value:"\u5B57\u7B26\u4E0E\u6570\u5B57\u7684\u5BF9\u6BD4",id:"\u5B57\u7B26\u4E0E\u6570\u5B57\u7684\u5BF9\u6BD4",level:2},{value:"<code>==</code> \u548C <code>===</code>",id:"-\u548C-",level:2},{value:"\u4F7F\u7528 <code>if</code> \u5224\u65AD\u6210\u7EE9\u7B49\u7EA7",id:"\u4F7F\u7528-if-\u5224\u65AD\u6210\u7EE9\u7B49\u7EA7",level:2},{value:"\u4F7F\u7528 <code>if else</code> \u4F18\u5316\u5224\u65AD",id:"\u4F7F\u7528-if-else-\u4F18\u5316\u5224\u65AD",level:2},{value:"<code>switch</code> \u7684\u4F7F\u7528\u65B9\u6CD5",id:"switch-\u7684\u4F7F\u7528\u65B9\u6CD5",level:2},{value:"\u4E0E\u3001\u6216\u3001\u975E\u8FD0\u7B97\u7B26",id:"\u4E0E\u6216\u975E\u8FD0\u7B97\u7B26",level:2},{value:"\u5728 JavaScript \u4E2D\u7684\u5047\u503C",id:"\u5728-javascript-\u4E2D\u7684\u5047\u503C",level:2}];function t(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u8BED\u53E5\u4E0E\u8FD0\u7B97\u7B26\u6307\u5357",children:"\u8BED\u53E5\u4E0E\u8FD0\u7B97\u7B26\u6307\u5357"})}),"\n",(0,l.jsx)(n.p,{children:"JavaScript \u7684\u8BED\u53E5\u4EE5\u5206\u53F7\u7ED3\u675F\u3002\u4F7F\u7528\u5206\u53F7\u5206\u9694\u6BCF\u6761\u8BED\u53E5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8868\u8FBE\u5F0F\u5199\u6CD5",children:"\u8868\u8FBE\u5F0F\u5199\u6CD5"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u8FD0\u7B97\u8D4B\u503C\u548C\u5224\u65AD\u7684\u7B26\u53F7\u4E24\u4FA7\u7559\u6709\u7A7A\u683C\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var a = (c = b);\n"})}),"\n",(0,l.jsx)(n.h1,{id:"\u5E38\u89C1\u9519\u8BEF",children:"\u5E38\u89C1\u9519\u8BEF"}),"\n",(0,l.jsx)(n.h2,{id:"\u8BED\u6CD5\u9519\u8BEF",children:"\u8BED\u6CD5\u9519\u8BEF"}),"\n",(0,l.jsx)(n.p,{children:"\u8BED\u6CD5\u9519\u8BEF\u4F1A\u5BFC\u81F4\u6240\u6709\u8BED\u53E5\u65E0\u6CD5\u6267\u884C\u3002"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{alt:"\u8BED\u6CD5\u9519\u8BEF\u793A\u4F8B1",src:c(26827).Z+"",width:"426",height:"270"}),"\n",(0,l.jsx)(n.img,{alt:"\u8BED\u6CD5\u9519\u8BEF\u793A\u4F8B2",src:c(86058).Z+"",width:"950",height:"397"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u901A\u7528\u9519\u8BEF",children:"\u901A\u7528\u9519\u8BEF"}),"\n",(0,l.jsxs)(n.p,{children:["\u901A\u7528\u9519\u8BEF\u4F1A\u4E2D\u65AD\u4EE3\u7801\u7684\u6267\u884C\uFF0C\u524D\u9762\u7684\u4EE3\u7801\u4F1A\u6267\u884C\uFF0C\u540E\u9762\u7684\u4E0D\u4F1A\u6267\u884C\u3002\u4EE5\u4E0B\u793A\u4F8B\u4E2D\uFF0C\u53D8\u91CF",(0,l.jsx)(n.code,{children:"a"}),"\u672A\u5B9A\u4E49\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{alt:"\u901A\u7528\u9519\u8BEF\u793A\u4F8B1",src:c(43583).Z+"",width:"359",height:"276"}),"\n",(0,l.jsx)(n.img,{alt:"\u901A\u7528\u9519\u8BEF\u793A\u4F8B2",src:c(5019).Z+"",width:"979",height:"537"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u4EE3\u7801\u5757\u5185\u7684\u9519\u8BEF",children:"\u4EE3\u7801\u5757\u5185\u7684\u9519\u8BEF"}),"\n",(0,l.jsx)(n.p,{children:"\u9519\u8BEF\u7684\u4EE3\u7801\u5757\u4F1A\u5BFC\u81F4\u6267\u884C\u62A5\u9519\u3002\u6B63\u786E\u7684\u4EE3\u7801\u5757\u5185\u7684\u8BED\u6CD5\u9519\u8BEF\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u90E8\u5206\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u9519\u8BEF\u4EE3\u7801\u5757\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u9519\u8BEF\u4EE3\u7801\u5757",src:c(58296).Z+"",width:"1059",height:"311"})}),"\n",(0,l.jsx)(n.p,{children:"\u6B63\u786E\u4EE3\u7801\u5757\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u6B63\u786E\u4EE3\u7801\u5757",src:c(96582).Z+"",width:"1345",height:"301"})}),"\n",(0,l.jsx)(n.h1,{id:"\u8FD0\u7B97\u7B26",children:"\u8FD0\u7B97\u7B26"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var a = 1,\n  b = 2,\n  d = 3;\nvar c = (a + b) * d;\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"var c = (a + b) * d;"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6267\u884C\u987A\u5E8F"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u58F0\u660E\u53D8\u91CF",(0,l.jsx)(n.code,{children:"a"}),"\u3001",(0,l.jsx)(n.code,{children:"b"}),"\u3001",(0,l.jsx)(n.code,{children:"d"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u58F0\u660E\u53D8\u91CF",(0,l.jsx)(n.code,{children:"c"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u53D8\u91CF",(0,l.jsx)(n.code,{children:"a"}),"\u52A0\u53D8\u91CF",(0,l.jsx)(n.code,{children:"b"}),"\uFF0C\u7ED3\u679C\u4E0E\u53D8\u91CF",(0,l.jsx)(n.code,{children:"d"}),"\u76F8\u4E58\uFF0C\u5F97\u5230\u7ED3\u679C"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5C06\u8BE5\u7ED3\u679C\u8D4B\u503C\u7ED9\u53D8\u91CF",(0,l.jsx)(n.code,{children:"c"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"\u52A0\u53F7\u8FD0\u7B97\u7B26-",children:["\u52A0\u53F7\u8FD0\u7B97\u7B26 ",(0,l.jsx)(n.code,{children:"+"})]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u7528\u4F5C\u6570\u5B66\u8FD0\u7B97\u7684\u52A0\u53F7\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u53EF\u4EE5\u8FDB\u884C\u5B57\u7B26\u4E32\u62FC\u63A5\u3002\u5B57\u7B26\u4E32\u4E0E\u5B57\u7B26\u4E32\u76F8\u52A0\u5F97\u5230\u62FC\u63A5\u7ED3\u679C\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u5B57\u7B26\u4E32\u4E0E",(0,l.jsx)(n.code,{children:"undefined"}),"\u76F8\u52A0\u5F97\u5230",(0,l.jsx)(n.code,{children:"\u5B57\u7B26\u4E32undefined"}),"\u3002\u4EFB\u4F55\u6570\u636E\u7C7B\u578B\u4E0E\u5B57\u7B26\u4E32\u76F8\u52A0\uFF0C\u7ED3\u679C\u90FD\u662F\u5B57\u7B26\u4E32\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log(1 + 1 + 'url' + 'url' + 123);\nconsole.log('123' + undefined);\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u7ED3\u679C"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u52A0\u53F7\u8FD0\u7B97\u7ED3\u679C",src:c(29115).Z+"",width:"529",height:"231"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u9664\u53F7\u8FD0\u7B97\u7B26-",children:["\u9664\u53F7\u8FD0\u7B97\u7B26 ",(0,l.jsx)(n.code,{children:"/"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log(5 / 2);\nconsole.log(1 / 0);\nconsole.log(undefined / undefined);\nconsole.log(NaN / NaN);\nconsole.log(-1 / 0);\nconsole.log(0 / 0);\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u7ED3\u679C"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u9664\u53F7\u8FD0\u7B97\u7ED3\u679C",src:c(60352).Z+"",width:"655",height:"371"})}),"\n",(0,l.jsx)(n.h3,{id:"nan-\u662F\u4EC0\u4E48",children:"NaN \u662F\u4EC0\u4E48\uFF1F"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"NaN"})," \u4EE3\u8868\u201C\u4E0D\u662F\u4E00\u4E2A\u6570\u5B57\u201D\uFF08Not a Number\uFF09\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u5B83\u662F\u6570\u5B57\u7C7B\u578B\uFF0C\u5F53\u8BA1\u7B97\u7ED3\u679C\u51FA\u9519\u65F6\u51FA\u73B0\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4E3A\u4EC0\u4E48-nan-\u662F-number-\u7C7B\u578B",children:"\u4E3A\u4EC0\u4E48 NaN \u662F number \u7C7B\u578B\uFF1F"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"NaN"})," \u7684\u5C5E\u6027\u4E0E ",(0,l.jsx)(n.code,{children:"Number.NaN"})," \u76F8\u540C\u3002\u6839\u636E 1985 \u5E74\u7684",(0,l.jsx)(n.code,{children:"IEEE 754"}),"\u6D6E\u70B9\u6570\u6807\u51C6\uFF0C",(0,l.jsx)(n.code,{children:"NaN"})," \u662F\u4E00\u79CD\u6570\u503C\u6570\u636E\u7C7B\u578B\uFF0C\u8868\u793A\u672A\u5B9A\u4E49\u6216\u4E0D\u53EF\u8868\u793A\u7684\u503C\u3002\u56E0\u6B64\uFF0C",(0,l.jsx)(n.code,{children:"NaN"})," \u5C5E\u4E8E ",(0,l.jsx)(n.code,{children:"number"})," \u7C7B\u578B\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures",children:"JavaScript \u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784 - JavaScript | MDN"})}),"\n",(0,l.jsx)(n.h3,{id:"infinity",children:"Infinity"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Infinity"})," \u662F\u6570\u5B57\u7C7B\u578B\uFF0C\u7528\u6765\u8868\u793A\u65E0\u7A77\u5927\u6216\u65E0\u7A77\u5C0F\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"\u53D6\u4F59\u8FD0\u7B97\u7B26-",children:["\u53D6\u4F59\u8FD0\u7B97\u7B26 ",(0,l.jsx)(n.code,{children:"%"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log(5 % 2);\nconsole.log(4 % 6);\nconsole.log(0 % 6);\nconsole.log(NaN % NaN);\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u7ED3\u679C"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u53D6\u4F59\u8FD0\u7B97\u7ED3\u679C",src:c(62e3).Z+"",width:"648",height:"304"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"4 % 6"})," \u7684\u7ED3\u679C\u662F ",(0,l.jsx)(n.code,{children:"4"}),"\uFF0C\u56E0\u4E3A 4 \u5C0F\u4E8E 6\uFF0C\u4F59\u6570\u5C31\u662F 4\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u503C\u4EA4\u6362\u95EE\u9898",children:"\u503C\u4EA4\u6362\u95EE\u9898"}),"\n",(0,l.jsx)(n.p,{children:"\u4E0D\u4F7F\u7528\u7B2C\u4E09\u4E2A\u53D8\u91CF\u8FDB\u884C\u503C\u4EA4\u6362\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var a = 1;\nvar b = 2;\na = a + b; // a = 3\nb = a - b; // b = 1\na = a - b; // a = 2\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26---",children:["\u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26 ",(0,l.jsx)(n.code,{children:"++"}),"\u3001",(0,l.jsx)(n.code,{children:"--"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var a = 1;\nvar b = 1;\nvar c = 1;\na = a + 1;\nb += 1;\nc++;\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u7ED3\u679C"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u81EA\u589E\u81EA\u51CF\u7ED3\u679C",src:c(76503).Z+"",width:"533",height:"345"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var a = 1;\nconsole.log(a++);\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u7ED3\u679C"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u81EA\u589E\u7ED3\u679C",src:c(32292).Z+"",width:"534",height:"244"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"a++"})," \u662F\u5148\u8BA1\u7B97\u540E\u8D4B\u503C\uFF0C",(0,l.jsx)(n.code,{children:"++a"})," \u662F\u5148\u8D4B\u503C\u540E\u8BA1\u7B97\u3002",(0,l.jsx)(n.code,{children:"--"})," \u51CF\u8FD0\u7B97\u7B26\u540C\u7406\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7EC3\u4E60",children:"\u7EC3\u4E60"}),"\n",(0,l.jsx)(n.h3,{id:"\u7EC3\u4E60-1",children:"\u7EC3\u4E60 1"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u7EC3\u4E601",src:c(53317).Z+"",width:"902",height:"282"})}),"\n",(0,l.jsx)(n.h3,{id:"\u7EC3\u4E60-2",children:"\u7EC3\u4E60 2"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u7EC3\u4E602",src:c(87651).Z+"",width:"941",height:"286"})}),"\n",(0,l.jsx)(n.h3,{id:"\u7EC3\u4E60-3",children:"\u7EC3\u4E60 3"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u7EC3\u4E603",src:c(75170).Z+"",width:"921",height:"275"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6267\u884C ",(0,l.jsx)(n.code,{children:"a--"})," \u540E\uFF0C",(0,l.jsx)(n.code,{children:"a"})," \u7684\u503C\u53D8\u4E3A 4\uFF0C\u6B64\u65F6\u4E24\u4E2A 4 \u76F8\u52A0\u7B49\u4E8E 8\uFF0C\u7ED3\u675F\u540E",(0,l.jsx)(n.code,{children:"a"}),"\u518D\u51CF 1\uFF0C\u6240\u4EE5",(0,l.jsx)(n.code,{children:"a"}),"\u7684\u6700\u7EC8\u503C\u662F 3\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7EC3\u4E60-4",children:"\u7EC3\u4E60 4"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u7EC3\u4E604",src:c(5009).Z+"",width:"938",height:"292"})}),"\n",(0,l.jsx)(n.h3,{id:"\u7EC3\u4E60-5",children:"\u7EC3\u4E60 5"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u7EC3\u4E605",src:c(16379).Z+"",width:"935",height:"285"})}),"\n",(0,l.jsx)(n.h1,{id:"\u6BD4\u8F83\u8FD0\u7B97\u7B26",children:"\u6BD4\u8F83\u8FD0\u7B97\u7B26"}),"\n",(0,l.jsx)(n.h2,{id:"\u5B57\u7B26\u4E0E\u6570\u5B57\u7684\u5BF9\u6BD4",children:"\u5B57\u7B26\u4E0E\u6570\u5B57\u7684\u5BF9\u6BD4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"// \u6570\u5B57\u4E0E\u5B57\u7B26\u4E32\u6BD4\u8F83\uFF0C\u5B57\u7B26\u4E32\u4F1A\u5148\u8F6C\u5316\u4E3A\u6570\u5B57\nvar bool = 1 > '2';\nconsole.log(bool);\n\n// \u6BD4\u8F83\u5B57\u7B26\u7684 ASCII \u7801\nvar bool = 'a' > 'b';\nconsole.log(bool);\n\n// \u4E3A\u4EC0\u4E48 4.5 > 11 \u5462\uFF1F\nvar bool = '4.5' > '11';\nconsole.log(bool);\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u6BD4\u8F83\u8FD0\u7B97\u7ED3\u679C",src:c(48863).Z+"",width:"1278",height:"281"})}),"\n",(0,l.jsxs)(n.h2,{id:"-\u548C-",children:[(0,l.jsx)(n.code,{children:"=="})," \u548C ",(0,l.jsx)(n.code,{children:"==="})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"// NaN \u4E0E\u4EFB\u4F55\u503C\uFF08\u5305\u62EC\u81EA\u5DF1\uFF09\u90FD\u4E0D\u76F8\u7B49\nvar bool1 = NaN == NaN;\nconsole.log(bool1);\n\n// \u5168\u7B49\u8FD0\u7B97\uFF0C\u6BD4\u8F83\u503C\u548C\u7C7B\u578B\nvar bool2 = 1 !== '1';\nconsole.log(bool2);\n\n// \u4E0D\u7B49\u4E8E\u8FD0\u7B97\uFF0C\u6BD4\u8F83\u503C\nvar bool3 = 1 != '1';\nconsole.log(bool3);\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{alt:"\u76F8\u7B49\u8FD0\u7B97\u7ED3\u679C1",src:c(86543).Z+"",width:"1273",height:"293"}),"\n",(0,l.jsx)(n.img,{alt:"\u76F8\u7B49\u8FD0\u7B97\u7ED3\u679C2",src:c(55046).Z+"",width:"939",height:"297"})]}),"\n",(0,l.jsx)(n.h1,{id:"\u6761\u4EF6\u5224\u65AD",children:"\u6761\u4EF6\u5224\u65AD"}),"\n",(0,l.jsxs)(n.h2,{id:"\u4F7F\u7528-if-\u5224\u65AD\u6210\u7EE9\u7B49\u7EA7",children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"if"})," \u5224\u65AD\u6210\u7EE9\u7B49\u7EA7"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8FDE\u7EED\u4F7F\u7528\u591A\u4E2A ",(0,l.jsx)(n.code,{children:"if"})," \u8BED\u53E5\u65F6\uFF0C\u6240\u6709\u6761\u4EF6\u90FD\u4F1A\u88AB\u5224\u65AD\u548C\u6267\u884C\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var score = 63;\nif (score >= 90) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AA');\n}\nif (score >= 80 && score < 90) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AB');\n}\nif (score >= 70 && score < 80) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AC');\n}\nif (score >= 60 && score < 70) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AD');\n}\nif (score < 60) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u4E0D\u53CA\u683C');\n}\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u4F7F\u7528-if-else-\u4F18\u5316\u5224\u65AD",children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"if else"})," \u4F18\u5316\u5224\u65AD"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u6761\u4EF6\u4E4B\u95F4\u5177\u6709\u4E92\u65A5\u6027\u65F6\uFF0C\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"else if"})," \u53EF\u4EE5\u63D0\u9AD8\u6548\u7387\uFF0C\u53EA\u6267\u884C\u6EE1\u8DB3\u6761\u4EF6\u7684\u4EE3\u7801\u5757\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var score = 63;\n\nif (score >= 90 && score <= 100) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AA');\n} else if (score >= 80 && score < 90) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AB');\n} else if (score >= 70 && score < 80) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AC');\n} else if (score >= 60 && score < 70) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AD');\n} else if (score >= 0 && score < 60) {\n  console.log('\u60A8\u7684\u6210\u7EE9\u4E0D\u53CA\u683C');\n} else {\n  console.log('\u60A8\u7684\u6210\u7EE9\u5F02\u5E38');\n}\n"})}),"\n",(0,l.jsxs)(n.h1,{id:"switch-\u8BED\u53E5",children:[(0,l.jsx)(n.code,{children:"switch"})," \u8BED\u53E5"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var city = window.prompt('\u8BF7\u8F93\u5165\u6240\u5728\u5730\u533A');\n\nswitch (city) {\n  case '\u5317\u4EAC':\n    console.log('15k');\n    break;\n  case '\u4E0A\u6D77':\n    console.log('13k');\n    break;\n  case '\u6DF1\u5733':\n    console.log('12k');\n    break;\n  case '\u5E7F\u5DDE':\n    console.log('11k');\n    break;\n  default:\n    console.log('9k');\n}\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"switch-\u7684\u4F7F\u7528\u65B9\u6CD5",children:[(0,l.jsx)(n.code,{children:"switch"})," \u7684\u4F7F\u7528\u65B9\u6CD5"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var score = 65;\n\nswitch (true) {\n  case score >= 90 && score <= 100:\n    console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AA');\n    break;\n  case score >= 80 && score < 90:\n    console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AB');\n    break;\n  case score >= 70 && score < 80:\n    console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AC');\n    break;\n  case score >= 60 && score < 70:\n    console.log('\u60A8\u7684\u6210\u7EE9\u7B49\u7EA7\u4E3AD');\n    break;\n  case score >= 0 && score < 60:\n    console.log('\u60A8\u7684\u6210\u7EE9\u4E0D\u53CA\u683C');\n    break;\n  default:\n    console.log('\u60A8\u7684\u6210\u7EE9\u5F02\u5E38');\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u603B\u7ED3"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5F53\u9700\u8981\u5224\u65AD\u503C\u7684\u8303\u56F4\u6216\u591A\u4E2A\u6761\u4EF6\u65F6\uFF0C\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"if"})," \u66F4\u5408\u9002\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5F53\u503C\u4E3A\u5B9A\u503C\u65F6\uFF0C\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"switch"})," \u66F4\u7B80\u6D01\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"\u903B\u8F91\u8FD0\u7B97",children:"\u903B\u8F91\u8FD0\u7B97"}),"\n",(0,l.jsx)(n.h2,{id:"\u4E0E\u6216\u975E\u8FD0\u7B97\u7B26",children:"\u4E0E\u3001\u6216\u3001\u975E\u8FD0\u7B97\u7B26"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u4E0E\uFF08&&\uFF09"}),(0,l.jsx)(n.th,{children:"\u6216\uFF08"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\uFF09"}),(0,l.jsx)(n.th,{children:"\u975E\uFF08!\uFF09"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u4E24\u4E2A\u6761\u4EF6\u90FD\u4E3A\u771F"}),(0,l.jsx)(n.td,{children:"\u4EFB\u4E00\u6761\u4EF6\u4E3A\u771F"}),(0,l.jsx)(n.td,{children:"\u53D6\u53CD\u64CD\u4F5C"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u5728-javascript-\u4E2D\u7684\u5047\u503C",children:"\u5728 JavaScript \u4E2D\u7684\u5047\u503C"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"undefined"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"null"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"NaN"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:'""'})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"0"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"false"})})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u5176\u4F59\u503C\u5747\u4E3A\u771F"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var a = 1 && 2;\n// \u9047\u5230\u771F\u5C31\u7EE7\u7EED\uFF0C\u9047\u5230\u5047\u5C31\u8FD4\u56DE\uFF0C\u5982\u679C\u6CA1\u6709\u5047\u5219\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u503C\nconsole.log(a); // 2\n\nvar b = 0 || null || 1 || 0;\n// \u9047\u5230\u5047\u5C31\u7EE7\u7EED\uFF0C\u9047\u5230\u771F\u5C31\u8FD4\u56DE\uFF0C\u5982\u679C\u6CA1\u6709\u771F\u5219\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u503C\nconsole.log(b); // 1\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"||"})," \u8FD0\u7B97\u7B26\u8FDB\u884C\u7B80\u5355\u5224\u65AD\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var name = '\u6570\u636E';\nconsole.log(name || '\u6CA1\u6709\u6570\u636E');\n"})}),"\n",(0,l.jsxs)(n.h1,{id:"\u903B\u8F91\u975E\u8FD0\u7B97\u7B26-",children:["\u903B\u8F91\u975E\u8FD0\u7B97\u7B26 ",(0,l.jsx)(n.code,{children:"!"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5E38\u7528\u4E8E\u53D6\u53CD\u64CD\u4F5C\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var a = true;\na = !a; // a \u73B0\u5728\u4E3A false\n"})}),"\n",(0,l.jsx)(n.h1,{id:"\u6CE8\u91CA",children:"\u6CE8\u91CA"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"// \u884C\u6CE8\u91CA\n\n/*\n * \u63A8\u8350\u5199\u6CD5\n * \u5757\u6CE8\u91CA\n */\n\n/**\n * \u81EA\u52A8\u751F\u6210\u7684\u6CE8\u91CA\n */\n\n/*\n    \u4E0D\u63A8\u8350\u7684\u5199\u6CD5\n*/\n"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},60352:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/052641692206e48ef3c17e2cf0fc3326-a669e7abfd5ed11ea6e3405548e4035e.png"},96582:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/05584fd4dac2692e69737a89829d939e-1ef606ab3373702d2c7908fc54ac0276.png"},16379:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/1790beb8cc2c818d54988991152513a5-4a850723a49e948feed2c370e2f5b869.png"},58296:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/4401412ff8b4d54ad9ab88e31ea784ed-c0a3e3aba0750cb0f77af7dc6d46b16c.png"},53317:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/497ddf37d26644fc00321c845ade6cb4-06a6571f4c2f98df7f0a6dc67cef8d2a.png"},75170:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/665c47b23ee87d9e9ec004d01320c70f-91837e3470b62989bf526df9bc11618f.png"},86058:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/74fea15491d7e5b299ee9820be965407-8ce5685634f8d738677252537872c901.png"},87651:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/791abe7c1c373687a0d6813b15b628a5-21efe2cbc49d33b6b50f630360a8c9c8.png"},76503:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/861a55d9706e56b7094b8115a1b1a416-9eab1482ebb2dc9f22bd266faae46c27.png"},55046:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/9bcb67681e19e84d4ba8b7153412cc02-3a336e359f66712e6466e9abe784c2bc.png"},26827:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/a72a9c822e69cf3ea193866d9c0a7290-886d6f8491e734a0e91a1a1d4c3dc4ff.png"},62e3:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/b1a63c87611e5877e1bbaed8553951e6-cc14281bf69e36af32bc38196f38c00a.png"},5019:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/b2e4e69f519c4e2bafa2ee97f8fceccb-4e69553ca0ba3ed5e726ffef74b3c7dd.png"},48863:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/b9410dfd9986886736398e215bb55a0d-95ad974fd62b7cb15a0b029542e58e5b.png"},5009:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/bc7b76873b0e586b1e2cb150c3543797-32a7da3b40b6921ab8355c53992a445e.png"},86543:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/bf96b7c1100cf677dd36e3c547d0e37e-36720b8eb8ad0b39caa0eeb967eddbbf.png"},43583:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/c7c29298336dc12988da9e2d8b2f574e-ba39c529be70e9a3ba5df5f0afa28735.png"},29115:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/cb67845bcebc8e19027285a654e33de2-7a5efb6822c623e9880bd5a462686f6b.png"},32292:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/e08f5d50e59b49186ab63cd32b66a865-b704f1fb291e1530b5c26f737402c44e.png"},50065:function(e,n,c){c.d(n,{Z:function(){return r},a:function(){return i}});var s=c(67294);let l={},d=s.createContext(l);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);