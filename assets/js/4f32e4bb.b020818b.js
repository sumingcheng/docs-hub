"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[87113],{42874:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Backend/MySQL/MySQL\u4e8b\u52a1\u4e0e\u9501\u673a\u5236","title":"MySQL \u4e8b\u52a1\u4e0e\u9501\u673a\u5236","description":"\u4e8b\u52a1\u6982\u8ff0","source":"@site/docs/Backend/MySQL/40.MySQL\u4e8b\u52a1\u4e0e\u9501\u673a\u5236.md","sourceDirName":"Backend/MySQL","slug":"/Backend/MySQL/MySQL\u4e8b\u52a1\u4e0e\u9501\u673a\u5236","permalink":"/docs-hub/docs/Backend/MySQL/MySQL\u4e8b\u52a1\u4e0e\u9501\u673a\u5236","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/MySQL/40.MySQL\u4e8b\u52a1\u4e0e\u9501\u673a\u5236.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":40,"frontMatter":{},"sidebar":"mysqlSidebar","previous":{"title":"MySQL \u7d22\u5f15\u539f\u7406\u4e0e\u4f18\u5316","permalink":"/docs-hub/docs/Backend/MySQL/MySQL\u7d22\u5f15\u539f\u7406\u4e0e\u4f18\u5316"},"next":{"title":"MySQL \u5b58\u50a8\u5f15\u64ce\u8be6\u89e3","permalink":"/docs-hub/docs/Backend/MySQL/MySQL\u5b58\u50a8\u5f15\u64ce\u8be6\u89e3"}}');var c=s(74848),d=s(28453);const l={},i="MySQL \u4e8b\u52a1\u4e0e\u9501\u673a\u5236",t={},a=[{value:"\u4e8b\u52a1\u6982\u8ff0",id:"\u4e8b\u52a1\u6982\u8ff0",level:2},{value:"\u4e8b\u52a1\u7684 ACID \u7279\u6027",id:"\u4e8b\u52a1\u7684-acid-\u7279\u6027",level:3},{value:"\u4e8b\u52a1\u7684\u4f7f\u7528",id:"\u4e8b\u52a1\u7684\u4f7f\u7528",level:3},{value:"\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b",id:"\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b",level:2},{value:"\u9501\u673a\u5236\u6982\u8ff0",id:"\u9501\u673a\u5236\u6982\u8ff0",level:2},{value:"\u6b7b\u9501\u5904\u7406",id:"\u6b7b\u9501\u5904\u7406",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}];function h(n){const e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,d.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"mysql-\u4e8b\u52a1\u4e0e\u9501\u673a\u5236",children:"MySQL \u4e8b\u52a1\u4e0e\u9501\u673a\u5236"})}),"\n",(0,c.jsx)(e.h2,{id:"\u4e8b\u52a1\u6982\u8ff0",children:"\u4e8b\u52a1\u6982\u8ff0"}),"\n",(0,c.jsx)(e.p,{children:"\u6211\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u4f1a\u4f7f\u7528\u4e8b\u52a1\u786e\u4fdd\u6570\u636e\u7684\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027\u3002\u4e8b\u52a1\u662f\u6570\u636e\u5e93\u4e2d\u7684\u903b\u8f91\u5355\u5143\uff0c\u5176\u4e2d\u7684\u591a\u6761 SQL \u8bed\u53e5\u8981\u4e48\u5168\u90e8\u6210\u529f\u8981\u4e48\u5168\u90e8\u5931\u8d25\uff0c\u6211\u901a\u8fc7\u4e8b\u52a1\u80fd\u6709\u6548\u907f\u514d\u6570\u636e\u4e0d\u4e00\u81f4\u95ee\u9898\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u4e8b\u52a1\u7684-acid-\u7279\u6027",children:"\u4e8b\u52a1\u7684 ACID \u7279\u6027"}),"\n",(0,c.jsxs)(e.p,{children:["\u539f\u5b50\u6027",(0,c.jsx)(e.br,{}),"\n","\u4e8b\u52a1\u4e2d\u7684\u6240\u6709\u64cd\u4f5c\u8981\u4e48\u5168\u90e8\u5b8c\u6210\u8981\u4e48\u5168\u90e8\u4e0d\u505a"]}),"\n",(0,c.jsxs)(e.p,{children:["\u4e00\u81f4\u6027",(0,c.jsx)(e.br,{}),"\n","\u4e8b\u52a1\u6267\u884c\u524d\u540e\u6570\u636e\u5e93\u90fd\u4fdd\u6301\u4e00\u81f4\u72b6\u6001"]}),"\n",(0,c.jsxs)(e.p,{children:["\u9694\u79bb\u6027",(0,c.jsx)(e.br,{}),"\n","\u591a\u4e2a\u4e8b\u52a1\u540c\u65f6\u6267\u884c\u65f6\u76f8\u4e92\u72ec\u7acb\u4e92\u4e0d\u5e72\u6270"]}),"\n",(0,c.jsxs)(e.p,{children:["\u6301\u4e45\u6027",(0,c.jsx)(e.br,{}),"\n","\u4e8b\u52a1\u63d0\u4ea4\u540e\u7684\u7ed3\u679c\u662f\u6c38\u4e45\u6027\u7684\u7cfb\u7edf\u6545\u969c\u4e5f\u4e0d\u5f71\u54cd\u5df2\u63d0\u4ea4\u6570\u636e"]}),"\n",(0,c.jsx)(e.h3,{id:"\u4e8b\u52a1\u7684\u4f7f\u7528",children:"\u4e8b\u52a1\u7684\u4f7f\u7528"}),"\n",(0,c.jsx)(e.p,{children:"\u5728 MySQL \u4e2d\u4f7f\u7528\u4e8b\u52a1\u65f6\u6211\u4e00\u822c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"START TRANSACTION;\n-- \u6267\u884cSQL\u64cd\u4f5c\nCOMMIT;\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u4e8b\u52a1\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\u6211\u4f1a\u901a\u8fc7\u4ee5\u4e0b\u64cd\u4f5c\u56de\u6eda"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"START TRANSACTION;\n-- \u6267\u884cSQL\u64cd\u4f5c\nROLLBACK;\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b",children:"\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b"}),"\n",(0,c.jsx)(e.p,{children:"\u6211\u5728\u5b9e\u9645\u4e2d\u4f1a\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\uff0c\u8fd9\u4e9b\u7ea7\u522b\u51b3\u5b9a\u4e8b\u52a1\u95f4\u76f8\u4e92\u5f71\u54cd\u7684\u7a0b\u5ea6\u3002MySQL \u652f\u6301\u4ee5\u4e0b\u56db\u79cd\u9694\u79bb\u7ea7\u522b"}),"\n",(0,c.jsxs)(e.p,{children:["\u8bfb\u672a\u63d0\u4ea4",(0,c.jsx)(e.br,{}),"\n","\u4e8b\u52a1\u53ef\u8bfb\u53d6\u672a\u63d0\u4ea4\u6570\u636e\u53ef\u80fd\u4f1a\u53d1\u751f\u810f\u8bfb"]}),"\n",(0,c.jsxs)(e.p,{children:["\u8bfb\u5df2\u63d0\u4ea4",(0,c.jsx)(e.br,{}),"\n","\u53ea\u80fd\u8bfb\u53d6\u5df2\u63d0\u4ea4\u6570\u636e\u907f\u514d\u810f\u8bfb\u4f46\u4ecd\u6709\u4e0d\u53ef\u91cd\u590d\u8bfb\u95ee\u9898"]}),"\n",(0,c.jsxs)(e.p,{children:["\u53ef\u91cd\u590d\u8bfb",(0,c.jsx)(e.br,{}),"\n","\u5728\u540c\u4e00\u4e8b\u52a1\u4e2d\u591a\u6b21\u8bfb\u53d6\u540c\u4e00\u884c\u6570\u636e\u7ed3\u679c\u4e00\u81f4\u53ef\u907f\u514d\u810f\u8bfb\u548c\u4e0d\u53ef\u91cd\u590d\u8bfb"]}),"\n",(0,c.jsxs)(e.p,{children:["\u4e32\u884c\u5316",(0,c.jsx)(e.br,{}),"\n","\u5f3a\u5236\u4e8b\u52a1\u4e32\u884c\u6267\u884c\u907f\u514d\u6240\u6709\u8bfb\u5199\u5f02\u5e38\u4f46\u5e76\u53d1\u6027\u80fd\u8f83\u4f4e"]}),"\n",(0,c.jsx)(e.p,{children:"\u6211\u5728\u9700\u8981\u4fee\u6539\u9694\u79bb\u7ea7\u522b\u65f6\u4f1a\u4f7f\u7528\u4ee5\u4e0b\u64cd\u4f5c\u8bed\u53e5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SET GLOBAL TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9501\u673a\u5236\u6982\u8ff0",children:"\u9501\u673a\u5236\u6982\u8ff0"}),"\n",(0,c.jsx)(e.p,{children:"\u6211\u5728\u4f7f\u7528\u4e8b\u52a1\u65f6\u7ecf\u5e38\u9700\u8981\u8003\u8651\u9501\u673a\u5236\u4ee5\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027\u548c\u5e76\u53d1\u6027\u80fd\u3002MySQL \u4e2d\u5e38\u7528\u884c\u7ea7\u9501\u548c\u8868\u7ea7\u9501"}),"\n",(0,c.jsxs)(e.p,{children:["\u884c\u7ea7\u9501",(0,c.jsx)(e.br,{}),"\n","\u53ea\u9501\u5b9a\u88ab\u9009\u4e2d\u7684\u884c\u5e76\u53d1\u6027\u80fd\u8f83\u9ad8 InnoDB \u5b58\u50a8\u5f15\u64ce\u652f\u6301\u884c\u7ea7\u9501"]}),"\n",(0,c.jsxs)(e.p,{children:["\u8868\u7ea7\u9501",(0,c.jsx)(e.br,{}),"\n","\u9501\u5b9a\u6574\u4e2a\u8868\u9002\u7528\u4e8e\u8bfb\u591a\u5199\u5c11\u7684\u573a\u666f MyISAM \u5b58\u50a8\u5f15\u64ce\u591a\u7528\u8868\u7ea7\u9501"]}),"\n",(0,c.jsxs)(e.p,{children:["\u610f\u5411\u9501",(0,c.jsx)(e.br,{}),"\n","\u8fd9\u662f\u4e00\u79cd\u8868\u7ea7\u9501\u7528\u4e8e\u6807\u8bb0\u4e8b\u52a1\u6253\u7b97\u5bf9\u8868\u4e2d\u90e8\u5206\u884c\u52a0\u9501\u4ece\u800c\u5728\u52a0\u9501\u524d\u907f\u514d\u51b2\u7a81"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6b7b\u9501\u5904\u7406",children:"\u6b7b\u9501\u5904\u7406"}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u9ad8\u5e76\u53d1\u4e0b\u53ef\u80fd\u51fa\u73b0\u6b7b\u9501\u5373\u591a\u4e2a\u4e8b\u52a1\u4e92\u76f8\u7b49\u5f85\u5bf9\u65b9\u91ca\u653e\u8d44\u6e90\u800c\u65e0\u6cd5\u7ee7\u7eed\u6267\u884c\u3002InnoDB \u80fd\u81ea\u52a8\u68c0\u6d4b\u6b7b\u9501\u5e76\u56de\u6eda\u5176\u4e2d\u4e00\u4e2a\u4e8b\u52a1\u6253\u7834\u50f5\u5c40\u540c\u65f6\u8bb0\u5f55\u6b7b\u9501\u4fe1\u606f\u4ee5\u4fbf\u6211\u540e\u7eed\u6392\u67e5\u95ee\u9898"}),"\n",(0,c.jsx)(e.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u5b9e\u9645\u573a\u666f\u4e2d\u6211\u4e3a\u907f\u514d\u5e76\u53d1\u4fee\u6539\u540c\u4e00\u884c\u6570\u636e\u5bfc\u81f4\u4e0d\u4e00\u81f4\u901a\u5e38\u4f1a\u5148\u52a0\u9501\u518d\u66f4\u65b0"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"START TRANSACTION;\n\n-- \u5bf9\u7279\u5b9a\u7528\u6237\u884c\u52a0\u9501\u9632\u6b62\u5176\u4ed6\u4e8b\u52a1\u4fee\u6539\nSELECT * FROM accounts WHERE user_id = 1 FOR UPDATE;\n\n-- \u66f4\u65b0\u8d26\u6237\u4f59\u989d\nUPDATE accounts SET balance = balance - 100 WHERE user_id = 1;\n\nCOMMIT;\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,c.jsxs)(e.p,{children:["\u5408\u7406\u9009\u62e9\u9694\u79bb\u7ea7\u522b\u5e73\u8861\u6570\u636e\u4e00\u81f4\u6027\u4e0e\u6027\u80fd",(0,c.jsx)(e.br,{}),"\n","\u4f7f\u7528\u884c\u7ea7\u9501\u4ee5\u63d0\u5347\u5e76\u53d1\u6027\u80fd",(0,c.jsx)(e.br,{}),"\n","\u907f\u514d\u957f\u65f6\u95f4\u6301\u6709\u9501\u51cf\u5c11\u6b7b\u9501\u98ce\u9669",(0,c.jsx)(e.br,{}),"\n","\u5b9a\u671f\u76d1\u63a7\u548c\u5206\u6790\u9501\u7b49\u5f85\u4f18\u5316\u6570\u636e\u5e93\u8bbe\u8ba1",(0,c.jsx)(e.br,{}),"\n","\u786e\u4fdd\u4e8b\u52a1\u5c3d\u91cf\u7b80\u77ed\u51cf\u5c11\u8d44\u6e90\u5360\u7528"]})]})}function o(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>i});var r=s(96540);const c={},d=r.createContext(c);function l(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);