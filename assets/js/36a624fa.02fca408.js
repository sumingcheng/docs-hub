"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["99801"],{8584:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>t,metadata:()=>i,assets:()=>c,toc:()=>h,contentTitle:()=>d});var i=JSON.parse('{"id":"Network/HTTP/\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406","title":"\u5B57\u7B26\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406\u6307\u5357","description":"\u4EC0\u4E48\u662F\u5B57\u7B26\u7F16\u7801","source":"@site/docs/Network/HTTP/120.\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406.md","sourceDirName":"Network/HTTP","slug":"/Network/HTTP/\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406","permalink":"/docs-hub/Network/HTTP/\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Network/HTTP/120.\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734402243000,"sidebarPosition":120,"frontMatter":{},"sidebar":"networkHttpSidebar","previous":{"title":"\u52A8\u6001\u5F02\u6B65\u7EC4\u4EF6","permalink":"/docs-hub/Network/HTTP/keep-alive\u673A\u5236"},"next":{"title":"\u7F51\u7EDC\u901A\u4FE1\u57FA\u7840","permalink":"/docs-hub/Network/HTTP/\u7F51\u7EDC\u5957\u63A5\u5B57"}}'),l=s("85893"),r=s("50065");let t={},d="\u5B57\u7B26\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406\u6307\u5357",c={},h=[{value:"\u4EC0\u4E48\u662F\u5B57\u7B26\u7F16\u7801",id:"\u4EC0\u4E48\u662F\u5B57\u7B26\u7F16\u7801",level:2},{value:"\u5E38\u89C1\u7684\u5B57\u7B26\u7F16\u7801",id:"\u5E38\u89C1\u7684\u5B57\u7B26\u7F16\u7801",level:2},{value:"\u4E71\u7801\u7684\u6210\u56E0",id:"\u4E71\u7801\u7684\u6210\u56E0",level:2},{value:"\u5982\u4F55\u907F\u514D\u4E71\u7801",id:"\u5982\u4F55\u907F\u514D\u4E71\u7801",level:2},{value:"\u7F16\u7801\u8F6C\u6362\u65B9\u6CD5",id:"\u7F16\u7801\u8F6C\u6362\u65B9\u6CD5",level:2}];function o(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u5B57\u7B26\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406\u6307\u5357",children:"\u5B57\u7B26\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406\u6307\u5357"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4EC0\u4E48\u662F\u5B57\u7B26\u7F16\u7801",children:"\u4EC0\u4E48\u662F\u5B57\u7B26\u7F16\u7801"}),"\n",(0,l.jsx)(e.p,{children:"\u5B57\u7B26\u7F16\u7801\u662F\u5C06\u5B57\u7B26\u96C6\u4E2D\u7684\u5B57\u7B26\u7F16\u7801\u4E3A\u6307\u5B9A\u96C6\u5408\u4E2D\u67D0\u4E00\u5BF9\u8C61(\u4F8B\u5982:\u6BD4\u7279\u6A21\u5F0F\u3001\u81EA\u7136\u6570\u30018 \u4F4D\u7EC4\u6216\u8005\u7535\u8109\u51B2),\u4EE5\u4FBF\u6587\u672C\u5728\u8BA1\u7B97\u673A\u4E2D\u5B58\u50A8\u548C\u901A\u8FC7\u901A\u4FE1\u7F51\u7EDC\u7684\u4F20\u9012\u3002\u5E38\u89C1\u7684\u4F8B\u5B50\u5305\u62EC\u5C06\u62C9\u4E01\u5B57\u6BCD\u8868\u7F16\u7801\u6210\u6469\u5C14\u65AF\u7535\u7801\u548C ASCII\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u901A\u4FD7\u5730\u8BF4,\u5B57\u7B26\u7F16\u7801\u5C31\u662F\u4E00\u5957\u5C06\u5B57\u7B26\u8F6C\u6362\u4E3A\u8BA1\u7B97\u673A\u53EF\u8BC6\u522B\u6570\u5B57\u7684\u89C4\u5219\u3002\u8BA1\u7B97\u673A\u53EA\u8BA4\u8BC6 0 \u548C 1,\u8981\u51C6\u786E\u5730\u5904\u7406\u5404\u79CD\u5B57\u7B26,\u5C31\u9700\u8981\u8FDB\u884C\u7F16\u7801\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5E38\u89C1\u7684\u5B57\u7B26\u7F16\u7801",children:"\u5E38\u89C1\u7684\u5B57\u7B26\u7F16\u7801"}),"\n",(0,l.jsx)(e.p,{children:"\u8BA1\u7B97\u673A\u53D1\u5C55\u7684\u65E9\u671F\u9636\u6BB5,\u5404\u4E2A\u56FD\u5BB6\u548C\u5730\u533A\u5206\u522B\u5236\u5B9A\u4E86\u8BB8\u591A\u5B57\u7B26\u7F16\u7801\u65B9\u6848,\u7531\u4E8E\u6807\u51C6\u4E0D\u7EDF\u4E00,\u5BFC\u81F4\u7ECF\u5E38\u51FA\u73B0\u540C\u4E00\u6BB5\u6587\u5B57\u5728\u4E0D\u540C\u7F16\u7801\u4E0B\u663E\u793A\u4E71\u7801\u7684\u60C5\u51B5\u3002\u76F4\u5230\u540E\u6765\u51FA\u73B0\u4E86 Unicode \u7F16\u7801,\u624D\u57FA\u672C\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5E38\u89C1\u5B57\u7B26\u7F16\u7801\u5982\u4E0B:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"ASCII:\u65E9\u671F\u7684\u7F16\u7801,\u4E3B\u8981\u9488\u5BF9\u82F1\u6587\u5B57\u7B26,\u7528\u4E00\u4E2A\u5B57\u8282(8 \u4F4D)\u8868\u793A 128 \u4E2A\u5B57\u7B26\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"ISO-8859-1:\u4E5F\u79F0 Latin-1,\u5728 ASCII \u57FA\u7840\u4E0A\u6269\u5C55,\u7528\u4E00\u4E2A\u5B57\u8282\u8868\u793A 256 \u4E2A\u5B57\u7B26,\u6DB5\u76D6\u4E86\u5927\u591A\u6570\u897F\u6B27\u8BED\u8A00\u5B57\u7B26\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"GB2312:\u4E2D\u56FD\u5927\u9646\u4F7F\u7528\u7684\u7F16\u7801,\u7528\u4E24\u4E2A\u5B57\u8282\u8868\u793A\u7B80\u4F53\u4E2D\u6587\u5B57\u7B26\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["GBK",":GB2312"," \u7684\u6269\u5C55,\u589E\u52A0\u4E86\u5BF9\u7E41\u4F53\u5B57\u548C\u65E5\u6587\u7684\u652F\u6301\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["UTF-8",":Unicode"," \u7684\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F,\u4F7F\u7528\u53D8\u957F\u5B57\u8282\u8868\u793A,\u517C\u5BB9 ASCII\u3002\u5B83\u7528 1-4 \u4E2A\u5B57\u8282\u8868\u793A\u4E00\u4E2A\u5B57\u7B26,\u9891\u7387\u9AD8\u7684\u5B57\u7B26\u4F7F\u7528 1 \u4E2A\u5B57\u8282\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["UTF-16",":Unicode"," \u7684\u53E6\u4E00\u79CD\u5B9E\u73B0,\u7528 2 \u6216 4 \u4E2A\u5B57\u8282\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4E71\u7801\u7684\u6210\u56E0",children:"\u4E71\u7801\u7684\u6210\u56E0"}),"\n",(0,l.jsx)(e.p,{children:"\u4E71\u7801\u662F\u6307\u6587\u5B57\u65E0\u6CD5\u6B63\u5E38\u663E\u793A,\u53D8\u6210\u4E00\u5806\u65E0\u6CD5\u8FA8\u8BA4\u7684\u5B57\u7B26\u3002\u4EA7\u751F\u4E71\u7801\u7684\u539F\u56E0\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u79CD:"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7F16\u7801\u4E0D\u4E00\u81F4:\u6BD4\u5982\u4E00\u4E2A\u6587\u4EF6\u662F\u4EE5 UTF-8 \u7F16\u7801\u4FDD\u5B58\u7684,\u4F46\u6D4F\u89C8\u5668\u5374\u4EE5 GBK \u7F16\u7801\u89E3\u91CA,\u5C31\u4F1A\u51FA\u73B0\u4E71\u7801\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7F3A\u5931\u5B57\u7B26:\u6709\u4E9B\u751F\u50FB\u5B57\u5728\u67D0\u4E9B\u7F16\u7801\u4E2D\u6CA1\u6709\u5B9A\u4E49,\u5C31\u4F1A\u7528\u4E00\u4E2A\u7279\u6B8A\u7B26\u53F7(\u5982\u95EE\u53F7)\u66FF\u4EE3,\u5BFC\u81F4\u4E71\u7801\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4F20\u8F93\u9519\u8BEF:\u7F51\u7EDC\u4F20\u8F93\u6216\u8005\u5B58\u50A8\u8FC7\u7A0B\u4E2D\u7684\u9519\u8BEF,\u5BFC\u81F4\u7F16\u7801\u4FE1\u606F\u4E22\u5931\u6216\u6DF7\u4E71\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8F6F\u4EF6 bug:\u4E00\u4E9B\u8F6F\u4EF6\u5728\u5904\u7406\u4E0D\u540C\u7F16\u7801\u7684\u8F6C\u6362\u65F6\u51FA\u73B0 bug,\u5BFC\u81F4\u4E71\u7801\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5982\u4F55\u907F\u514D\u4E71\u7801",children:"\u5982\u4F55\u907F\u514D\u4E71\u7801"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7EDF\u4E00\u7F16\u7801:\u5728\u4E00\u4E2A\u7CFB\u7EDF\u4E2D,\u5C3D\u91CF\u4F7F\u7528\u540C\u4E00\u79CD\u7F16\u7801,\u6BD4\u5982\u90FD\u4F7F\u7528 UTF-8\u3002\u4E0D\u540C\u7F16\u7801\u4E4B\u95F4\u8F6C\u6362\u5BB9\u6613\u51FA\u9519\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u58F0\u660E\u7F16\u7801:\u5728 HTML\u3001XML \u7B49\u6587\u4EF6\u4E2D,\u8981\u7528",(0,l.jsx)(e.code,{children:"<meta>"}),"\u6807\u7B7E\u663E\u5F0F\u58F0\u660E\u6587\u4EF6\u7F16\u7801,\u8BA9\u6D4F\u89C8\u5668\u77E5\u9053\u5982\u4F55\u89E3\u91CA\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:'<meta charset="UTF-8" />\n'})}),"\n",(0,l.jsxs)(e.ol,{start:"3",children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6B63\u786E\u8F6C\u7801:\u5728\u4E00\u4E9B\u65E0\u6CD5\u7EDF\u4E00\u7F16\u7801\u7684\u573A\u666F,\u6BD4\u5982\u4ECE\u6570\u636E\u5E93\u8BFB\u53D6\u6570\u636E\u518D\u663E\u793A\u5230\u7F51\u9875,\u8981\u8FDB\u884C\u6B63\u786E\u7684\u8F6C\u7801,\u786E\u4FDD\u5404\u4E2A\u73AF\u8282\u7684\u7F16\u7801\u4E00\u81F4\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4F7F\u7528 UTF-8:\u63A8\u8350\u4F7F\u7528 UTF-8 \u7F16\u7801,\u5B83\u8986\u76D6\u4E86\u5168\u4E16\u754C\u6240\u6709\u8BED\u8A00\u7684\u5B57\u7B26,\u4E14\u5BB9\u9519\u7387\u9AD8,\u51FA\u73B0\u4E71\u7801\u7684\u53EF\u80FD\u6027\u5C0F\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7F16\u7801\u8F6C\u6362\u65B9\u6CD5",children:"\u7F16\u7801\u8F6C\u6362\u65B9\u6CD5"}),"\n",(0,l.jsx)(e.p,{children:"\u5728 Java\u3001Python \u7B49\u7F16\u7A0B\u8BED\u8A00\u4E2D,\u90FD\u63D0\u4F9B\u4E86\u7F16\u7801\u8F6C\u6362\u7684\u65B9\u6CD5\u3002\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u7528\u7684\u8F6C\u6362\u65B9\u5F0F:"}),"\n",(0,l.jsx)(e.p,{children:"Java:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:'String s = "\u4F60\u597D";\n// UTF-8\u8F6CGBK\nbyte[] gbk = s.getBytes("GBK");\n// GBK\u8F6CUTF-8\nString utf8 = new String(gbk, "UTF-8");\n'})}),"\n",(0,l.jsx)(e.p,{children:"Python:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'s = "\u4F60\u597D"\n# UTF-8\u8F6CGBK\ngbk = s.encode("GBK")\n# GBK\u8F6CUTF-8\nutf8 = gbk.decode("GBK").encode("UTF-8")\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4E00\u4E9B\u6587\u672C\u7F16\u8F91\u5668\u4E2D,\u4E5F\u63D0\u4F9B\u4E86\u7F16\u7801\u8F6C\u6362\u529F\u80FD,\u53EF\u4EE5\u65B9\u4FBF\u5730\u5C06\u6587\u4EF6\u5728\u4E0D\u540C\u7F16\u7801\u4E4B\u95F4\u8F6C\u6362\u3002"})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return t}});var i=s(67294);let l={},r=i.createContext(l);function t(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);