"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["72212"],{96961:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>r,assets:()=>t,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"Backend/MySQL/MySQL\u4E8B\u52A1\u4E0E\u9501\u673A\u5236","title":"MySQL \u4E8B\u52A1\u4E0E\u9501\u673A\u5236","description":"\u4E8B\u52A1\u6982\u8FF0","source":"@site/docs/Backend/MySQL/40.MySQL\u4E8B\u52A1\u4E0E\u9501\u673A\u5236.md","sourceDirName":"Backend/MySQL","slug":"/Backend/MySQL/MySQL\u4E8B\u52A1\u4E0E\u9501\u673A\u5236","permalink":"/docs-hub/Backend/MySQL/MySQL\u4E8B\u52A1\u4E0E\u9501\u673A\u5236","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/MySQL/40.MySQL\u4E8B\u52A1\u4E0E\u9501\u673A\u5236.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":40,"frontMatter":{},"sidebar":"mysqlSidebar","previous":{"title":"MySQL \u7D22\u5F15\u539F\u7406\u4E0E\u4F18\u5316","permalink":"/docs-hub/Backend/MySQL/MySQL\u7D22\u5F15\u539F\u7406\u4E0E\u4F18\u5316"},"next":{"title":"MySQL \u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3","permalink":"/docs-hub/Backend/MySQL/MySQL\u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3"}}'),l=s("85893"),d=s("50065");let c={},i="MySQL \u4E8B\u52A1\u4E0E\u9501\u673A\u5236",t={},a=[{value:"\u4E8B\u52A1\u6982\u8FF0",id:"\u4E8B\u52A1\u6982\u8FF0",level:2},{value:"\u4E8B\u52A1\u7684 ACID \u7279\u6027",id:"\u4E8B\u52A1\u7684-acid-\u7279\u6027",level:3},{value:"\u4E8B\u52A1\u7684\u4F7F\u7528",id:"\u4E8B\u52A1\u7684\u4F7F\u7528",level:3},{value:"\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B",id:"\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B",level:2},{value:"\u9501\u673A\u5236\u6982\u8FF0",id:"\u9501\u673A\u5236\u6982\u8FF0",level:2},{value:"\u6B7B\u9501\u5904\u7406",id:"\u6B7B\u9501\u5904\u7406",level:2},{value:"\u4EE3\u7801\u793A\u4F8B",id:"\u4EE3\u7801\u793A\u4F8B",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function h(n){let e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"mysql-\u4E8B\u52A1\u4E0E\u9501\u673A\u5236",children:"MySQL \u4E8B\u52A1\u4E0E\u9501\u673A\u5236"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4E8B\u52A1\u6982\u8FF0",children:"\u4E8B\u52A1\u6982\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u4F1A\u4F7F\u7528\u4E8B\u52A1\u786E\u4FDD\u6570\u636E\u7684\u4E00\u81F4\u6027\u548C\u5B8C\u6574\u6027\u3002\u4E8B\u52A1\u662F\u6570\u636E\u5E93\u4E2D\u7684\u903B\u8F91\u5355\u5143\uFF0C\u5176\u4E2D\u7684\u591A\u6761 SQL \u8BED\u53E5\u8981\u4E48\u5168\u90E8\u6210\u529F\u8981\u4E48\u5168\u90E8\u5931\u8D25\uFF0C\u6211\u901A\u8FC7\u4E8B\u52A1\u80FD\u6709\u6548\u907F\u514D\u6570\u636E\u4E0D\u4E00\u81F4\u95EE\u9898\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u4E8B\u52A1\u7684-acid-\u7279\u6027",children:"\u4E8B\u52A1\u7684 ACID \u7279\u6027"}),"\n",(0,l.jsxs)(e.p,{children:["\u539F\u5B50\u6027",(0,l.jsx)(e.br,{}),"\n","\u4E8B\u52A1\u4E2D\u7684\u6240\u6709\u64CD\u4F5C\u8981\u4E48\u5168\u90E8\u5B8C\u6210\u8981\u4E48\u5168\u90E8\u4E0D\u505A"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4E00\u81F4\u6027",(0,l.jsx)(e.br,{}),"\n","\u4E8B\u52A1\u6267\u884C\u524D\u540E\u6570\u636E\u5E93\u90FD\u4FDD\u6301\u4E00\u81F4\u72B6\u6001"]}),"\n",(0,l.jsxs)(e.p,{children:["\u9694\u79BB\u6027",(0,l.jsx)(e.br,{}),"\n","\u591A\u4E2A\u4E8B\u52A1\u540C\u65F6\u6267\u884C\u65F6\u76F8\u4E92\u72EC\u7ACB\u4E92\u4E0D\u5E72\u6270"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6301\u4E45\u6027",(0,l.jsx)(e.br,{}),"\n","\u4E8B\u52A1\u63D0\u4EA4\u540E\u7684\u7ED3\u679C\u662F\u6C38\u4E45\u6027\u7684\u7CFB\u7EDF\u6545\u969C\u4E5F\u4E0D\u5F71\u54CD\u5DF2\u63D0\u4EA4\u6570\u636E"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4E8B\u52A1\u7684\u4F7F\u7528",children:"\u4E8B\u52A1\u7684\u4F7F\u7528"}),"\n",(0,l.jsx)(e.p,{children:"\u5728 MySQL \u4E2D\u4F7F\u7528\u4E8B\u52A1\u65F6\u6211\u4E00\u822C\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"START TRANSACTION;\n-- \u6267\u884CSQL\u64CD\u4F5C\nCOMMIT;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u4E8B\u52A1\u8FC7\u7A0B\u4E2D\u53D1\u751F\u9519\u8BEF\u6211\u4F1A\u901A\u8FC7\u4EE5\u4E0B\u64CD\u4F5C\u56DE\u6EDA"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"START TRANSACTION;\n-- \u6267\u884CSQL\u64CD\u4F5C\nROLLBACK;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B",children:"\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B"}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u5728\u5B9E\u9645\u4E2D\u4F1A\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\uFF0C\u8FD9\u4E9B\u7EA7\u522B\u51B3\u5B9A\u4E8B\u52A1\u95F4\u76F8\u4E92\u5F71\u54CD\u7684\u7A0B\u5EA6\u3002MySQL \u652F\u6301\u4EE5\u4E0B\u56DB\u79CD\u9694\u79BB\u7EA7\u522B"}),"\n",(0,l.jsxs)(e.p,{children:["\u8BFB\u672A\u63D0\u4EA4",(0,l.jsx)(e.br,{}),"\n","\u4E8B\u52A1\u53EF\u8BFB\u53D6\u672A\u63D0\u4EA4\u6570\u636E\u53EF\u80FD\u4F1A\u53D1\u751F\u810F\u8BFB"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8BFB\u5DF2\u63D0\u4EA4",(0,l.jsx)(e.br,{}),"\n","\u53EA\u80FD\u8BFB\u53D6\u5DF2\u63D0\u4EA4\u6570\u636E\u907F\u514D\u810F\u8BFB\u4F46\u4ECD\u6709\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u5E7B\u8BFB\u95EE\u9898\u3002Oracle \u6570\u636E\u5E93\u9ED8\u8BA4\u4F7F\u7528\u6B64\u7EA7\u522B\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u53EF\u91CD\u590D\u8BFB",(0,l.jsx)(e.br,{}),"\n","\u5728\u540C\u4E00\u4E8B\u52A1\u4E2D\u591A\u6B21\u8BFB\u53D6\u540C\u4E00\u884C\u6570\u636E\u7ED3\u679C\u4E00\u81F4\u53EF\u907F\u514D\u810F\u8BFB\u548C\u4E0D\u53EF\u91CD\u590D\u8BFB\u3002MySQL InnoDB \u9ED8\u8BA4\u4F7F\u7528\u6B64\u7EA7\u522B\uFF0C\u5E76\u901A\u8FC7 MVCC \u548C\u95F4\u9699\u9501\u89E3\u51B3\u4E86\u5927\u90E8\u5206\u5E7B\u8BFB\u95EE\u9898\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4E32\u884C\u5316",(0,l.jsx)(e.br,{}),"\n","\u5F3A\u5236\u4E8B\u52A1\u4E32\u884C\u6267\u884C\u907F\u514D\u6240\u6709\u8BFB\u5199\u5F02\u5E38\u4F46\u5E76\u53D1\u6027\u80FD\u8F83\u4F4E"]}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u5728\u9700\u8981\u4FEE\u6539\u9694\u79BB\u7EA7\u522B\u65F6\u4F1A\u4F7F\u7528\u4EE5\u4E0B\u64CD\u4F5C\u8BED\u53E5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SET GLOBAL TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9501\u673A\u5236\u6982\u8FF0",children:"\u9501\u673A\u5236\u6982\u8FF0"}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u5728\u4F7F\u7528\u4E8B\u52A1\u65F6\u7ECF\u5E38\u9700\u8981\u8003\u8651\u9501\u673A\u5236\u4EE5\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u548C\u5E76\u53D1\u6027\u80FD\u3002MySQL \u4E2D\u5E38\u7528\u884C\u7EA7\u9501\u548C\u8868\u7EA7\u9501"}),"\n",(0,l.jsxs)(e.p,{children:["\u884C\u7EA7\u9501",(0,l.jsx)(e.br,{}),"\n","\u53EA\u9501\u5B9A\u88AB\u9009\u4E2D\u7684\u884C\u5E76\u53D1\u6027\u80FD\u8F83\u9AD8 InnoDB \u5B58\u50A8\u5F15\u64CE\u652F\u6301\u884C\u7EA7\u9501"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8868\u7EA7\u9501",(0,l.jsx)(e.br,{}),"\n","\u9501\u5B9A\u6574\u4E2A\u8868\u9002\u7528\u4E8E\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F MyISAM \u5B58\u50A8\u5F15\u64CE\u591A\u7528\u8868\u7EA7\u9501"]}),"\n",(0,l.jsxs)(e.p,{children:["\u610F\u5411\u9501",(0,l.jsx)(e.br,{}),"\n","\u8FD9\u662F\u4E00\u79CD\u8868\u7EA7\u9501\u7528\u4E8E\u6807\u8BB0\u4E8B\u52A1\u6253\u7B97\u5BF9\u8868\u4E2D\u90E8\u5206\u884C\u52A0\u9501\u4ECE\u800C\u5728\u52A0\u9501\u524D\u907F\u514D\u51B2\u7A81"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6B7B\u9501\u5904\u7406",children:"\u6B7B\u9501\u5904\u7406"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u9AD8\u5E76\u53D1\u4E0B\u53EF\u80FD\u51FA\u73B0\u6B7B\u9501\u5373\u591A\u4E2A\u4E8B\u52A1\u4E92\u76F8\u7B49\u5F85\u5BF9\u65B9\u91CA\u653E\u8D44\u6E90\u800C\u65E0\u6CD5\u7EE7\u7EED\u6267\u884C\u3002InnoDB \u80FD\u81EA\u52A8\u68C0\u6D4B\u6B7B\u9501\u5E76\u56DE\u6EDA\u5176\u4E2D\u4E00\u4E2A\u4E8B\u52A1\u6253\u7834\u50F5\u5C40\u540C\u65F6\u8BB0\u5F55\u6B7B\u9501\u4FE1\u606F\u4EE5\u4FBF\u6211\u540E\u7EED\u6392\u67E5\u95EE\u9898"}),"\n",(0,l.jsx)(e.h2,{id:"\u4EE3\u7801\u793A\u4F8B",children:"\u4EE3\u7801\u793A\u4F8B"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u5B9E\u9645\u573A\u666F\u4E2D\u6211\u4E3A\u907F\u514D\u5E76\u53D1\u4FEE\u6539\u540C\u4E00\u884C\u6570\u636E\u5BFC\u81F4\u4E0D\u4E00\u81F4\u901A\u5E38\u4F1A\u5148\u52A0\u9501\u518D\u66F4\u65B0"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"START TRANSACTION;\n\n-- \u5BF9\u7279\u5B9A\u7528\u6237\u884C\u52A0\u9501\u9632\u6B62\u5176\u4ED6\u4E8B\u52A1\u4FEE\u6539\nSELECT * FROM accounts WHERE user_id = 1 FOR UPDATE;\n\n-- \u66F4\u65B0\u8D26\u6237\u4F59\u989D\nUPDATE accounts SET balance = balance - 100 WHERE user_id = 1;\n\nCOMMIT;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,l.jsxs)(e.p,{children:["\u5408\u7406\u9009\u62E9\u9694\u79BB\u7EA7\u522B\u5E73\u8861\u6570\u636E\u4E00\u81F4\u6027\u4E0E\u6027\u80FD",(0,l.jsx)(e.br,{}),"\n","\u4F7F\u7528\u884C\u7EA7\u9501\u4EE5\u63D0\u5347\u5E76\u53D1\u6027\u80FD",(0,l.jsx)(e.br,{}),"\n","\u907F\u514D\u957F\u65F6\u95F4\u6301\u6709\u9501\u51CF\u5C11\u6B7B\u9501\u98CE\u9669",(0,l.jsx)(e.br,{}),"\n","\u5B9A\u671F\u76D1\u63A7\u548C\u5206\u6790\u9501\u7B49\u5F85\u4F18\u5316\u6570\u636E\u5E93\u8BBE\u8BA1",(0,l.jsx)(e.br,{}),"\n","\u786E\u4FDD\u4E8B\u52A1\u5C3D\u91CF\u7B80\u77ED\u51CF\u5C11\u8D44\u6E90\u5360\u7528"]})]})}function o(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var r=s(67294);let l={},d=r.createContext(l);function c(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);