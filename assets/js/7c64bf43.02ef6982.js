"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["34470"],{57498:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>h,contentTitle:()=>c});var i=JSON.parse('{"id":"Backend/MySQL/MySQL\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5","title":"MySQL \u6027\u80FD\u4F18\u5316\u5B9E\u8DF5","description":"\u67E5\u8BE2\u4F18\u5316","source":"@site/docs/Backend/MySQL/60.MySQL\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5.md","sourceDirName":"Backend/MySQL","slug":"/Backend/MySQL/MySQL\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5","permalink":"/docs-hub/Backend/MySQL/MySQL\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/MySQL/60.MySQL\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":60,"frontMatter":{},"sidebar":"mysqlSidebar","previous":{"title":"MySQL \u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3","permalink":"/docs-hub/Backend/MySQL/MySQL\u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3"},"next":{"title":"MySQL \u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB","permalink":"/docs-hub/Backend/MySQL/MySQL\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB"}}'),d=l("85893"),s=l("50065");let r={},c="MySQL \u6027\u80FD\u4F18\u5316\u5B9E\u8DF5",a={},h=[{value:"\u67E5\u8BE2\u4F18\u5316",id:"\u67E5\u8BE2\u4F18\u5316",level:2},{value:"\u4F7F\u7528<code>EXPLAIN</code>\u5206\u6790\u67E5\u8BE2",id:"\u4F7F\u7528explain\u5206\u6790\u67E5\u8BE2",level:3},{value:"\u907F\u514D\u5168\u8868\u626B\u63CF",id:"\u907F\u514D\u5168\u8868\u626B\u63CF",level:3},{value:"\u4F18\u5316<code>JOIN</code>\u64CD\u4F5C",id:"\u4F18\u5316join\u64CD\u4F5C",level:3},{value:"\u7D22\u5F15\u4F18\u5316",id:"\u7D22\u5F15\u4F18\u5316",level:2},{value:"\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15",id:"\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15",level:3},{value:"\u907F\u514D\u8FC7\u591A\u7D22\u5F15",id:"\u907F\u514D\u8FC7\u591A\u7D22\u5F15",level:3},{value:"\u4F7F\u7528\u8986\u76D6\u7D22\u5F15",id:"\u4F7F\u7528\u8986\u76D6\u7D22\u5F15",level:3},{value:"\u7F13\u5B58\u4F7F\u7528",id:"\u7F13\u5B58\u4F7F\u7528",level:2},{value:"\u67E5\u8BE2\u7F13\u5B58",id:"\u67E5\u8BE2\u7F13\u5B58",level:3},{value:"\u5E94\u7528\u5C42\u7F13\u5B58",id:"\u5E94\u7528\u5C42\u7F13\u5B58",level:3},{value:"\u914D\u7F6E\u8C03\u6574",id:"\u914D\u7F6E\u8C03\u6574",level:2},{value:"\u8C03\u6574\u7F13\u51B2\u6C60\u5927\u5C0F",id:"\u8C03\u6574\u7F13\u51B2\u6C60\u5927\u5C0F",level:3},{value:"\u4F18\u5316\u8FDE\u63A5\u6570",id:"\u4F18\u5316\u8FDE\u63A5\u6570",level:3},{value:"\u8C03\u6574\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F",id:"\u8C03\u6574\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F",level:3},{value:"\u786C\u4EF6\u4F18\u5316",id:"\u786C\u4EF6\u4F18\u5316",level:2},{value:"\u4F7F\u7528 SSD \u5B58\u50A8",id:"\u4F7F\u7528-ssd-\u5B58\u50A8",level:3},{value:"\u589E\u52A0\u5185\u5B58",id:"\u589E\u52A0\u5185\u5B58",level:3},{value:"\u591A\u6838\u5904\u7406\u5668",id:"\u591A\u6838\u5904\u7406\u5668",level:3},{value:"\u6570\u636E\u5E93\u8BBE\u8BA1\u4F18\u5316",id:"\u6570\u636E\u5E93\u8BBE\u8BA1\u4F18\u5316",level:2},{value:"\u89C4\u8303\u5316\u4E0E\u53CD\u89C4\u8303\u5316",id:"\u89C4\u8303\u5316\u4E0E\u53CD\u89C4\u8303\u5316",level:3},{value:"\u5408\u7406\u7684\u6570\u636E\u7C7B\u578B",id:"\u5408\u7406\u7684\u6570\u636E\u7C7B\u578B",level:3},{value:"\u5206\u533A\u8868",id:"\u5206\u533A\u8868",level:3},{value:"\u4F7F\u7528<code>EXPLAIN</code>\u4F18\u5316\u67E5\u8BE2",id:"\u4F7F\u7528explain\u4F18\u5316\u67E5\u8BE2",level:2},{value:"\u76D1\u63A7\u548C\u5206\u6790\u5DE5\u5177",id:"\u76D1\u63A7\u548C\u5206\u6790\u5DE5\u5177",level:2},{value:"MySQL \u6162\u67E5\u8BE2\u65E5\u5FD7",id:"mysql-\u6162\u67E5\u8BE2\u65E5\u5FD7",level:3},{value:"Percona Toolkit",id:"percona-toolkit",level:3},{value:"MySQL Workbench",id:"mysql-workbench",level:3}];function o(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"mysql-\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5",children:"MySQL \u6027\u80FD\u4F18\u5316\u5B9E\u8DF5"})}),"\n",(0,d.jsx)(n.h2,{id:"\u67E5\u8BE2\u4F18\u5316",children:"\u67E5\u8BE2\u4F18\u5316"}),"\n",(0,d.jsx)(n.p,{children:"\u67E5\u8BE2\u4F18\u5316\u80FD\u591F\u663E\u8457\u51CF\u5C11\u6267\u884C\u65F6\u95F4\u5E76\u63D0\u9AD8\u6570\u636E\u5E93\u54CD\u5E94\u901F\u5EA6\u3002\u901A\u8FC7\u4ED4\u7EC6\u5206\u6790\u548C\u4F18\u5316 SQL \u8BED\u53E5\uFF0C\u53EF\u5728\u76F8\u540C\u786C\u4EF6\u6761\u4EF6\u4E0B\u83B7\u5F97\u66F4\u9AD8\u7684\u67E5\u8BE2\u6027\u80FD\u3002\u5728\u5927\u578B\u7528\u6237\u8868\u4E2D\u6DFB\u52A0\u5408\u9002\u7D22\u5F15\uFF0C\u5C06\u7528\u6237\u4FE1\u606F\u6309\u5E38\u7528\u67E5\u8BE2\u6761\u4EF6\u5B58\u653E\u6709\u52A9\u4E8E\u5FEB\u901F\u5B9A\u4F4D\u7ED3\u679C\u3002\u9488\u5BF9\u8BA2\u5355\u4FE1\u606F\u68C0\u7D22\u65F6\uFF0C\u82E5\u67E5\u8BE2\u9891\u7387\u9AD8\u4E14\u6761\u4EF6\u56FA\u5B9A\uFF0C\u53EF\u63D0\u524D\u8BBE\u8BA1\u7279\u5B9A\u7D22\u5F15\u5B57\u6BB5\u51CF\u5C11\u626B\u63CF\u91CF\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"\u4F7F\u7528explain\u5206\u6790\u67E5\u8BE2",children:["\u4F7F\u7528",(0,d.jsx)(n.code,{children:"EXPLAIN"}),"\u5206\u6790\u67E5\u8BE2"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"EXPLAIN"}),"\u8BED\u53E5\u7528\u4E8E\u5206\u6790\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u4EE5\u8BC6\u522B\u6F5C\u5728\u6027\u80FD\u74F6\u9888\u3002\u5BF9\u7ECF\u5E38\u8BBF\u95EE\u7684\u7528\u6237\u6570\u636E\u8868\u6267\u884C EXPLAIN\uFF0C\u53EF\u53D1\u73B0\u662F\u5426\u4F7F\u7528\u5230\u6B63\u786E\u7684\u7D22\u5F15\u6216\u5B58\u5728\u4E0D\u5FC5\u8981\u7684\u5168\u8868\u626B\u63CF\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"EXPLAIN SELECT username, email FROM users WHERE id = 1;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u7535\u5546\u7CFB\u7EDF\u4E2D\uFF0C\u5BF9\u591A\u8868\u5173\u8054\u67E5\u8BE2\u6267\u884C EXPLAIN\uFF0C\u53EF\u67E5\u770B JOIN \u987A\u5E8F\u3001\u4F7F\u7528\u7D22\u5F15\u60C5\u51B5\u548C\u53EF\u80FD\u7684\u56DE\u8868\u64CD\u4F5C\uFF0C\u7EE7\u800C\u9488\u5BF9\u6027\u4F18\u5316\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u907F\u514D\u5168\u8868\u626B\u63CF",children:"\u907F\u514D\u5168\u8868\u626B\u63CF"}),"\n",(0,d.jsx)(n.p,{children:"\u5168\u8868\u626B\u63CF\u4F1A\u5728\u6570\u636E\u91CF\u5DE8\u5927\u65F6\u964D\u4F4E\u67E5\u8BE2\u6027\u80FD\u3002\u4E3A\u63D0\u9AD8\u68C0\u7D22\u8BA2\u5355\u8BB0\u5F55\u7684\u6548\u7387\uFF0C\u9884\u5148\u5728\u8BA2\u5355\u8868\u7684 user_id \u5B57\u6BB5\u4E0A\u521B\u5EFA\u7D22\u5F15\uFF0C\u67E5\u8BE2\u65F6\u901A\u8FC7 user_id \u7CBE\u51C6\u5B9A\u4F4D\u7528\u6237\u8BA2\u5355\u6761\u76EE\uFF0C\u907F\u514D\u5BF9\u6574\u5F20\u8BA2\u5355\u8868\u9010\u884C\u68C0\u7D22\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX idx_user_id ON users(id);\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u67E5\u8BE2\u8BA2\u5355\u65F6\u76F4\u63A5\u6839\u636E\u7528\u6237 id \u5B9A\u4F4D\u6240\u9700\u8BB0\u5F55\uFF0C\u5C06\u54CD\u5E94\u65F6\u95F4\u4ECE\u6570\u79D2\u964D\u81F3\u6BEB\u79D2\u7EA7\u522B\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"\u4F18\u5316join\u64CD\u4F5C",children:["\u4F18\u5316",(0,d.jsx)(n.code,{children:"JOIN"}),"\u64CD\u4F5C"]}),"\n",(0,d.jsx)(n.p,{children:"\u591A\u8868\u5173\u8054\u67E5\u8BE2\u4E2D\u82E5\u672A\u5408\u7406\u8BBE\u7F6E\u7D22\u5F15\uFF0CJOIN \u4F1A\u5E26\u6765\u989D\u5916\u5F00\u9500\u3002\u9488\u5BF9\u5E38\u7528\u5173\u8054\u5217\u6DFB\u52A0\u7D22\u5F15\uFF0C\u901A\u8FC7\u51CF\u5C11\u4E2D\u95F4\u6570\u636E\u96C6\u5927\u5C0F\u964D\u4F4E\u67E5\u8BE2\u5EF6\u8FDF\u3002\u5728\u7EDF\u8BA1\u6D3B\u8DC3\u7528\u6237\u8BA2\u5355\u65F6\uFF0C\u5BF9\u7528\u6237\u8868\u548C\u8BA2\u5355\u8868\u7684\u5173\u8054\u5217 user_id \u5EFA\u7ACB\u9002\u5F53\u7D22\u5F15\u5E76\u786E\u4FDD\u4E24\u5F20\u8868\u7684 JOIN \u6761\u4EF6\u7B80\u5355\u6E05\u6670\uFF0C\u53EF\u5728\u9AD8\u5E76\u53D1\u6761\u4EF6\u4E0B\u4F9D\u7136\u5FEB\u901F\u8FD4\u56DE\u7ED3\u679C\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT u.username, o.order_date\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE u.status = 'active';\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u7528\u6237\u4E0E\u8BA2\u5355\u7684\u4E00\u5BF9\u591A\u573A\u666F\u4E0B\uFF0C\u8FD9\u79CD\u4F18\u5316\u53EF\u8BA9\u67E5\u8BE2\u5728\u6570\u767E\u4E07\u7EA7\u8BA2\u5355\u6570\u636E\u4E2D\u4ECD\u4FDD\u6301\u826F\u597D\u6027\u80FD\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u7D22\u5F15\u4F18\u5316",children:"\u7D22\u5F15\u4F18\u5316"}),"\n",(0,d.jsx)(n.p,{children:"\u7D22\u5F15\u662F\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u7684\u5173\u952E\u5DE5\u5177\u3002\u9488\u5BF9\u67E5\u8BE2\u9700\u6C42\u8BBE\u8BA1\u4E0E\u7EF4\u62A4\u7D22\u5F15\uFF0C\u53EF\u5728\u5927\u6570\u636E\u91CF\u573A\u666F\u4E0B\u663E\u8457\u51CF\u5C11\u67E5\u8BE2\u5EF6\u8FDF\u3002\u5728\u7EDF\u8BA1\u7528\u6237\u6CE8\u518C\u6570\u636E\u65F6\uFF0C\u4E3A\u65E5\u671F\u5B57\u6BB5\u5EFA\u7ACB\u5408\u9002\u7D22\u5F15\u80FD\u66F4\u9AD8\u6548\u5730\u68C0\u7D22\u6307\u5B9A\u65E5\u671F\u6BB5\u5185\u7684\u6D3B\u8DC3\u7528\u6237\u8BB0\u5F55\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15",children:"\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15"}),"\n",(0,d.jsx)(n.p,{children:"\u6839\u636E\u5B9E\u9645\u67E5\u8BE2\u6A21\u5F0F\u521B\u5EFA\u5355\u5217\u6216\u590D\u5408\u7D22\u5F15\u3002\u5F53\u6309\u90AE\u7BB1\u5B57\u6BB5\u641C\u7D22\u7528\u6237\u4FE1\u606F\u65F6\uFF0C\u5728 email \u5B57\u6BB5\u4E0A\u521B\u5EFA\u7D22\u5F15\u53EF\u52A0\u5FEB\u7528\u6237\u8D44\u6599\u67E5\u8BE2\u901F\u5EA6\uFF1B\u5728\u641C\u7D22\u65B0\u6CE8\u518C\u7528\u6237\u65F6\uFF0C\u4E3A status \u4E0E created_at \u5B57\u6BB5\u521B\u5EFA\u590D\u5408\u7D22\u5F15\uFF0C\u4F7F\u67E5\u8BE2\u76F4\u63A5\u4ECE\u7D22\u5F15\u4E2D\u627E\u5230\u76EE\u6807\u6570\u636E\u884C\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX idx_email ON users(email);\nCREATE INDEX idx_status_created ON users(status, created_at);\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u7528\u6237\u641C\u7D22\u529F\u80FD\u4E2D\uFF0C\u5229\u7528 idx_email \u7D22\u5F15\u53EF\u77AC\u65F6\u8FD4\u56DE\u76EE\u6807\u7528\u6237\u6570\u636E\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u907F\u514D\u8FC7\u591A\u7D22\u5F15",children:"\u907F\u514D\u8FC7\u591A\u7D22\u5F15"}),"\n",(0,d.jsx)(n.p,{children:"\u7D22\u5F15\u8FC7\u591A\u4F1A\u5728\u5199\u5165\u66F4\u65B0\u65F6\u4EA7\u751F\u989D\u5916\u6D88\u8017\u3002\u5E94\u5BF9\u7ECF\u5E38\u6267\u884C\u7684\u67E5\u8BE2\u7CBE\u786E\u5206\u6790\uFF0C\u53EA\u4E3A\u6700\u5E38\u7528\u6761\u4EF6\u521B\u5EFA\u5FC5\u8981\u7D22\u5F15\u3002\u5B9A\u671F\u67E5\u770B\u7D22\u5F15\u4F7F\u7528\u9891\u7387\uFF0C\u79FB\u9664\u5197\u4F59\u7D22\u5F15\uFF0C\u4F7F\u5199\u6027\u80FD\u4E0E\u8BFB\u6027\u80FD\u8FBE\u5230\u826F\u597D\u5E73\u8861\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u4F7F\u7528\u8986\u76D6\u7D22\u5F15",children:"\u4F7F\u7528\u8986\u76D6\u7D22\u5F15"}),"\n",(0,d.jsx)(n.p,{children:"\u8986\u76D6\u7D22\u5F15\u5305\u542B\u67E5\u8BE2\u6240\u9700\u7684\u6240\u6709\u5217\u3002\u5BF9\u7528\u6237\u4FE1\u606F\u67E5\u8BE2\u4E2D\u4EC5\u9700\u8981 username \u4E0E email \u5B57\u6BB5\u65F6\uFF0C\u63D0\u524D\u521B\u5EFA\u5305\u542B\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u7684\u590D\u5408\u7D22\u5F15\uFF0C\u4F7F\u67E5\u8BE2\u65E0\u9700\u8BBF\u95EE\u8868\u6570\u636E\u6587\u4EF6\u5373\u53EF\u76F4\u63A5\u4ECE\u7D22\u5F15\u8FD4\u56DE\u7ED3\u679C\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX idx_username_email ON users(username, email);\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u9AD8\u5E76\u53D1\u73AF\u5883\u4E2D\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u80FD\u51CF\u5C11 IO \u7B49\u5F85\u5E76\u63D0\u5347\u541E\u5410\u91CF\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u7F13\u5B58\u4F7F\u7528",children:"\u7F13\u5B58\u4F7F\u7528"}),"\n",(0,d.jsx)(n.p,{children:"\u7F13\u5B58\u80FD\u964D\u4F4E\u6570\u636E\u5E93\u8D1F\u8F7D\u5E76\u52A0\u901F\u6570\u636E\u8BBF\u95EE\u3002\u5728\u9891\u7E41\u8BFB\u53D6\u7684\u914D\u7F6E\u6216\u70ED\u95E8\u5546\u54C1\u5217\u8868\u67E5\u8BE2\u4E2D\uFF0C\u5C06\u7ED3\u679C\u7F13\u5B58\u81F3\u5185\u5B58\u53EF\u5927\u5E45\u51CF\u5C11\u540E\u7AEF\u6570\u636E\u5E93\u67E5\u8BE2\u6B21\u6570\u3002\u5BF9\u70ED\u95E8\u641C\u7D22\u5173\u952E\u8BCD\u5BF9\u5E94\u5546\u54C1\u6E05\u5355\u8FDB\u884C\u7F13\u5B58\uFF0C\u5728\u9AD8\u5CF0\u671F\u8BBF\u95EE\u65F6\u663E\u8457\u52A0\u5FEB\u67E5\u8BE2\u901F\u5EA6\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u67E5\u8BE2\u7F13\u5B58",children:"\u67E5\u8BE2\u7F13\u5B58"}),"\n",(0,d.jsx)(n.p,{children:"MySQL \u67E5\u8BE2\u7F13\u5B58\u5728\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\u4E0B\u80FD\u5B58\u50A8\u67E5\u8BE2\u7ED3\u679C\u5E76\u91CD\u590D\u5229\u7528\u3002\u5BF9\u957F\u671F\u7A33\u5B9A\u4E0D\u53D8\u7684\u5206\u7C7B\u5217\u8868\u67E5\u8BE2\u542F\u7528\u67E5\u8BE2\u7F13\u5B58\uFF0C\u53EF\u8BA9\u76F8\u540C\u67E5\u8BE2\u91CD\u590D\u8BF7\u6C42\u65F6\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u7ED3\u679C\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"query_cache_size=64M\nquery_cache_type=1\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u7528\u6237\u7ECF\u5E38\u68C0\u7D22\u7684\u5546\u54C1\u5206\u7C7B\u3001\u57CE\u5E02\u5217\u8868\u7B49\u4F4E\u9891\u53D8\u52A8\u7684\u6570\u636E\u4E2D\uFF0C\u542F\u7528\u67E5\u8BE2\u7F13\u5B58\u6548\u679C\u660E\u663E\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u5E94\u7528\u5C42\u7F13\u5B58",children:"\u5E94\u7528\u5C42\u7F13\u5B58"}),"\n",(0,d.jsx)(n.p,{children:"\u901A\u8FC7 Redis \u6216 Memcached \u7B49\u5DE5\u5177\u5728\u5E94\u7528\u5C42\u7F13\u5B58\u7ED3\u679C\u6570\u636E\uFF0C\u80FD\u51CF\u5C11\u5BF9\u6570\u636E\u5E93\u7684\u8BBF\u95EE\u538B\u529B\u3002\u5BF9\u70ED\u95E8\u7528\u6237\u8D44\u6599\u548C\u7ECF\u5E38\u8BBF\u95EE\u7684\u9759\u6001\u6570\u636E\u8FDB\u884C\u7F13\u5B58\uFF0C\u5728\u8BBF\u95EE\u5E94\u7528\u65F6\u5148\u67E5\u8BE2\u7F13\u5B58\uFF0C\u5982\u65E0\u6570\u636E\u518D\u4ECE\u6570\u636E\u5E93\u52A0\u8F7D\u5E76\u66F4\u65B0\u7F13\u5B58\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"import redis\n\ncache = redis.Redis(host='localhost', port=6379, db=0)\nuser = cache.get('user:1')\nif not user:\n    user = get_user_from_db(1)\n    cache.set('user:1', user)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u793E\u4EA4\u5E73\u53F0\u5173\u6CE8\u5EA6\u6392\u884C\u699C\u3001\u65B0\u95FB\u70ED\u70B9\u5217\u8868\u4E2D\u53EF\u4F7F\u7528\u6B64\u7B56\u7565\u663E\u8457\u964D\u4F4E\u6570\u636E\u5E93\u67E5\u8BE2\u5F00\u9500\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u914D\u7F6E\u8C03\u6574",children:"\u914D\u7F6E\u8C03\u6574"}),"\n",(0,d.jsx)(n.p,{children:"\u5408\u7406\u914D\u7F6E MySQL \u53C2\u6570\u5145\u5206\u5229\u7528\u786C\u4EF6\u8D44\u6E90\u3002\u5BF9\u9AD8\u5E76\u53D1\u7684\u7535\u5546\u8BA2\u5355\u5E93\uFF0C\u9002\u5F53\u52A0\u5927\u7F13\u51B2\u6C60\u3001\u589E\u52A0\u6700\u5927\u8FDE\u63A5\u6570\u5E76\u8C03\u4F18\u65E5\u5FD7\u5199\u5165\u53C2\u6570\u80FD\u63D0\u9AD8\u6574\u4F53\u541E\u5410\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u8C03\u6574\u7F13\u51B2\u6C60\u5927\u5C0F",children:"\u8C03\u6574\u7F13\u51B2\u6C60\u5927\u5C0F"}),"\n",(0,d.jsx)(n.p,{children:"InnoDB \u7F13\u51B2\u6C60\u5927\u5C0F\u5F71\u54CD\u5185\u5B58\u53EF\u7F13\u5B58\u6570\u636E\u91CF\u3002\u5C06 innodb_buffer_pool_size \u8BBE\u7F6E\u4E3A\u670D\u52A1\u5668\u53EF\u7528\u5185\u5B58\u7684\u7EA6 70%-80%\uFF0C\u80FD\u63D0\u9AD8\u70ED\u95E8\u6570\u636E\u7684\u7F13\u5B58\u547D\u4E2D\u7387\uFF0C\u51CF\u5C11\u78C1\u76D8 IO \u64CD\u4F5C\uFF0C\u5728\u5E9E\u5927\u7684\u5546\u54C1\u548C\u8BA2\u5355\u5E93\u4E2D\u663E\u8457\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"innodb_buffer_pool_size=8G\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u4F18\u5316\u8FDE\u63A5\u6570",children:"\u4F18\u5316\u8FDE\u63A5\u6570"}),"\n",(0,d.jsx)(n.p,{children:"\u6839\u636E\u5B9E\u9645\u5E76\u53D1\u60C5\u51B5\u8C03\u6574 max_connections \u907F\u514D\u8FDE\u63A5\u8FC7\u591A\u5BFC\u81F4\u8D44\u6E90\u8017\u5C3D\u3002\u5BF9\u4E8E\u4E2D\u578B\u7535\u5546\u7F51\u7AD9\u5C06\u5176\u8BBE\u4E3A\u5408\u9002\u503C\uFF0C\u4F7F\u8FDE\u63A5\u8BF7\u6C42\u65E2\u4E0D\u56E0\u8FC7\u591A\u5360\u7528\u8D44\u6E90\uFF0C\u4E5F\u4E0D\u56E0\u8FC7\u5C11\u5BFC\u81F4\u8BBF\u95EE\u5EF6\u8FDF\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"max_connections=500\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u8C03\u6574\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F",children:"\u8C03\u6574\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F"}),"\n",(0,d.jsx)(n.p,{children:"\u9002\u5EA6\u589E\u5927 innodb_log_file_size \u51CF\u5C11\u65E5\u5FD7\u5199\u5165\u9891\u7387\uFF0C\u63D0\u9AD8\u5199\u5165\u6027\u80FD\u3002\u5BF9\u6301\u7EED\u5199\u5165\u7684\u8BA2\u5355\u3001\u652F\u4ED8\u8BB0\u5F55\u8868\uFF0C\u901A\u8FC7\u9002\u5EA6\u63D0\u5347\u8BE5\u503C\u5728\u4FDD\u8BC1\u6570\u636E\u5B89\u5168\u57FA\u7840\u4E0A\u5F97\u5230\u66F4\u597D\u7684\u5199\u6027\u80FD\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"innodb_log_file_size=1G\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u786C\u4EF6\u4F18\u5316",children:"\u786C\u4EF6\u4F18\u5316"}),"\n",(0,d.jsx)(n.p,{children:"\u786C\u4EF6\u8D44\u6E90\u76F4\u63A5\u5F71\u54CD\u6570\u636E\u5E93\u6027\u80FD\u3002\u4E3A\u8FFD\u6C42\u66F4\u9AD8\u6027\u80FD\uFF0C\u5728\u8BBF\u95EE\u91CF\u5927\u4E14\u6570\u636E\u91CF\u5E9E\u5927\u7684\u4E1A\u52A1\u4E2D\u90E8\u7F72\u66F4\u9AD8\u6027\u80FD\u7684\u5B58\u50A8\u4E0E\u786C\u4EF6\u914D\u7F6E\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u4F7F\u7528-ssd-\u5B58\u50A8",children:"\u4F7F\u7528 SSD \u5B58\u50A8"}),"\n",(0,d.jsx)(n.p,{children:"SSD \u7684\u968F\u673A\u8BFB\u5199\u6027\u80FD\u4F18\u4E8E\u673A\u68B0\u786C\u76D8\uFF0C\u80FD\u964D\u4F4E\u6570\u636E\u5E93\u54CD\u5E94\u65F6\u95F4\u3002\u5C06\u7528\u6237\u6D3B\u8DC3\u5EA6\u7EDF\u8BA1\u8868\u4E0E\u8BA2\u5355\u660E\u7EC6\u8868\u5B58\u653E\u5728 SSD \u4E0A\uFF0C\u67E5\u8BE2\u5EF6\u8FDF\u663E\u8457\u964D\u4F4E\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u589E\u52A0\u5185\u5B58",children:"\u589E\u52A0\u5185\u5B58"}),"\n",(0,d.jsx)(n.p,{children:"\u66F4\u591A\u5185\u5B58\u5141\u8BB8\u7F13\u5B58\u66F4\u591A\u6570\u636E\uFF0C\u51CF\u5C11\u78C1\u76D8 IO \u8BBF\u95EE\u3002\u5F53\u540C\u65F6\u8BBF\u95EE\u8BA2\u5355\u3001\u7528\u6237\u3001\u5E93\u5B58\u6570\u636E\u65F6\uFF0C\u5185\u5B58\u8D8A\u5145\u8DB3\u5219\u8D8A\u80FD\u6709\u6548\u5E94\u5BF9\u7A81\u53D1\u67E5\u8BE2\u9AD8\u5CF0\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u591A\u6838\u5904\u7406\u5668",children:"\u591A\u6838\u5904\u7406\u5668"}),"\n",(0,d.jsx)(n.p,{children:"\u591A\u6838 CPU \u53EF\u540C\u65F6\u5904\u7406\u66F4\u591A\u67E5\u8BE2\u8BF7\u6C42\u3002\u5BF9\u4E8E\u77ED\u65F6\u95F4\u5185\u5927\u91CF\u5E76\u53D1\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u5728\u591A\u6838\u73AF\u5883\u4E0B\u6570\u636E\u5E93\u53EF\u5E76\u884C\u5904\u7406\u66F4\u591A\u4EFB\u52A1\uFF0C\u63D0\u5347\u6574\u4F53\u541E\u5410\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u6570\u636E\u5E93\u8BBE\u8BA1\u4F18\u5316",children:"\u6570\u636E\u5E93\u8BBE\u8BA1\u4F18\u5316"}),"\n",(0,d.jsx)(n.p,{children:"\u5408\u7406\u7684\u6570\u636E\u5E93\u8BBE\u8BA1\u662F\u6027\u80FD\u4F18\u5316\u57FA\u7840\u3002\u5728\u67E5\u8BE2\u7528\u6237\u884C\u4E3A\u3001\u8BA2\u5355\u7EDF\u8BA1\u65F6\uFF0C\u4F18\u96C5\u7684\u6570\u636E\u7ED3\u6784\u6709\u5229\u4E8E\u5FEB\u901F\u68C0\u7D22\u4E0E\u805A\u5408\u64CD\u4F5C\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u8868\u626B\u63CF\u4E0E\u5173\u8054\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u89C4\u8303\u5316\u4E0E\u53CD\u89C4\u8303\u5316",children:"\u89C4\u8303\u5316\u4E0E\u53CD\u89C4\u8303\u5316"}),"\n",(0,d.jsx)(n.p,{children:"\u901A\u8FC7\u89C4\u8303\u5316\u51CF\u8F7B\u6570\u636E\u5197\u4F59\uFF0C\u5229\u7528\u53CD\u89C4\u8303\u5316\u5728\u7279\u5B9A\u573A\u666F\u4E0B\u51CF\u5C11\u5173\u8054\u67E5\u8BE2\u6B21\u6570\uFF0C\u63D0\u5347\u6027\u80FD\u3002\u5728\u62A5\u8868\u5206\u6790\u573A\u666F\u4E2D\uFF0C\u4E8B\u5148\u5C06\u5408\u5E76\u7684\u7EDF\u8BA1\u6570\u636E\u5B58\u50A8\u4E8E\u5355\u8868\u4E2D\uFF0C\u65E0\u9700\u591A\u6B21 JOIN \u5373\u53EF\u5FEB\u901F\u8FD4\u56DE\u7ED3\u679C\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u5408\u7406\u7684\u6570\u636E\u7C7B\u578B",children:"\u5408\u7406\u7684\u6570\u636E\u7C7B\u578B"}),"\n",(0,d.jsx)(n.p,{children:"\u9009\u62E9\u6B63\u786E\u7684\u6570\u636E\u7C7B\u578B\u7F29\u51CF\u5B58\u50A8\u7A7A\u95F4\u4E0E\u6BD4\u8F83\u5F00\u9500\u3002\u5728\u5B58\u653E\u4EF7\u683C\u3001\u6570\u91CF\u7B49\u6570\u636E\u65F6\uFF0C\u4F7F\u7528\u5408\u9002\u7CBE\u5EA6\u7684 DECIMAL \u7C7B\u578B\u65E2\u6EE1\u8DB3\u7CBE\u5EA6\u8981\u6C42\u53C8\u907F\u514D\u7A7A\u95F4\u6D6A\u8D39\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE products (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    price DECIMAL(10,2)\n) ENGINE=InnoDB;\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5206\u533A\u8868",children:"\u5206\u533A\u8868"}),"\n",(0,d.jsx)(n.p,{children:"\u5BF9\u5DE8\u5927\u8868\u8FDB\u884C\u5206\u533A\u53EF\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u4E0E\u7EF4\u62A4\u6548\u7387\u3002\u5C06\u9500\u552E\u8BB0\u5F55\u6309\u5E74\u4EFD\u5206\u533A\u540E\uFF0C\u67E5\u8BE2\u7279\u5B9A\u5E74\u4EFD\u6570\u636E\u65F6\u4EC5\u9700\u8BBF\u95EE\u5BF9\u5E94\u5206\u533A\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u626B\u63CF\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE sales (\n    id INT,\n    sale_date DATE,\n    amount DECIMAL(10,2)\n) ENGINE=InnoDB\nPARTITION BY RANGE (YEAR(sale_date)) (\n    PARTITION p0 VALUES LESS THAN (1991),\n    PARTITION p1 VALUES LESS THAN (1995),\n    PARTITION p2 VALUES LESS THAN (1999),\n    PARTITION p3 VALUES LESS THAN MAXVALUE\n);\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u5206\u6790\u7279\u5B9A\u65F6\u95F4\u6BB5\u5185\u7684\u9500\u552E\u6570\u636E\u65F6\uFF0C\u901A\u8FC7\u8BBF\u95EE\u5BF9\u5E94\u5206\u533A\u53EF\u663E\u8457\u964D\u4F4E\u67E5\u8BE2\u65F6\u95F4\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"\u4F7F\u7528explain\u4F18\u5316\u67E5\u8BE2",children:["\u4F7F\u7528",(0,d.jsx)(n.code,{children:"EXPLAIN"}),"\u4F18\u5316\u67E5\u8BE2"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"EXPLAIN"}),"\u53EF\u663E\u793A\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u3002\u901A\u8FC7\u5206\u6790\u8BBF\u95EE\u7C7B\u578B\u3001\u53EF\u80FD\u4F7F\u7528\u7684\u7D22\u5F15\u53CA\u5B9E\u9645\u6267\u884C\u987A\u5E8F\uFF0C\u53EF\u6307\u5BFC\u4F18\u5316\u7B56\u7565\u3002\u5728\u8BA2\u5355\u4E0E\u7528\u6237\u8868\u5173\u8054\u67E5\u8BE2\u4E2D\u67E5\u770B EXPLAIN \u7ED3\u679C\uFF0C\u6709\u52A9\u4E8E\u6839\u636E\u8FD4\u56DE\u7684\u4FE1\u606F\u5224\u65AD\u662F\u5426\u9700\u8981\u8C03\u6574\u7D22\u5F15\u6216\u6539\u53D8\u67E5\u8BE2\u7ED3\u6784\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"EXPLAIN SELECT u.username, o.order_date\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE u.status = 'active';\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6839\u636E EXPLAIN \u4FE1\u606F\u8C03\u6574\u7D22\u5F15\u5217\u987A\u5E8F\u6216\u6DFB\u52A0\u7F3A\u5931\u7D22\u5F15\u540E\uFF0C\u518D\u6B21\u6267\u884C\u67E5\u8BE2\u53EF\u663E\u8457\u51CF\u5C11\u626B\u63CF\u884C\u6570\uFF0C\u7F29\u77ED\u6267\u884C\u65F6\u95F4\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u76D1\u63A7\u548C\u5206\u6790\u5DE5\u5177",children:"\u76D1\u63A7\u548C\u5206\u6790\u5DE5\u5177"}),"\n",(0,d.jsx)(n.p,{children:"\u5229\u7528\u76D1\u63A7\u4E0E\u5206\u6790\u5DE5\u5177\u53EF\u6301\u7EED\u8DDF\u8E2A\u6570\u636E\u5E93\u6027\u80FD\u3002\u5BF9\u8BBF\u95EE\u91CF\u6CE2\u52A8\u8F83\u5927\u7684\u7CFB\u7EDF\u5B9A\u671F\u68C0\u67E5\u6162\u67E5\u8BE2\u65E5\u5FD7\u6216\u501F\u52A9\u7B2C\u4E09\u65B9\u5DE5\u5177\u53D1\u73B0\u6F5C\u5728\u74F6\u9888\uFF0C\u63D0\u524D\u8FDB\u884C\u4F18\u5316\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"mysql-\u6162\u67E5\u8BE2\u65E5\u5FD7",children:"MySQL \u6162\u67E5\u8BE2\u65E5\u5FD7"}),"\n",(0,d.jsx)(n.p,{children:"\u542F\u7528\u6162\u67E5\u8BE2\u65E5\u5FD7\u5E76\u8BBE\u7F6E\u9608\u503C\uFF0C\u8BB0\u5F55\u8D85\u8FC7\u6307\u5B9A\u6267\u884C\u65F6\u95F4\u7684\u67E5\u8BE2\u3002\u6839\u636E\u6162\u67E5\u8BE2\u65E5\u5FD7\u4E2D\u51FA\u73B0\u9891\u7387\u9AD8\u7684 SQL \u8BED\u53E5\uFF0C\u91CD\u70B9\u5206\u6790\u6267\u884C\u8BA1\u5212\u5E76\u8FDB\u884C\u9488\u5BF9\u6027\u4F18\u5316\uFF0C\u53EF\u51CF\u5C11\u67E5\u8BE2\u54CD\u5E94\u65F6\u95F4\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"slow_query_log=1\nslow_query_log_file=/var/log/mysql/slow.log\nlong_query_time=2\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u7528\u6237\u8BA2\u5355\u67E5\u8BE2\u957F\u671F\u7F13\u6162\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7\u6162\u67E5\u8BE2\u65E5\u5FD7\u627E\u5230\u5BFC\u81F4\u95EE\u9898\u7684 SQL\uFF0C\u5E76\u4E3A\u5176\u6DFB\u52A0\u5408\u9002\u7D22\u5F15\u6216\u8C03\u6574\u6570\u636E\u7ED3\u6784\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"percona-toolkit",children:"Percona Toolkit"}),"\n",(0,d.jsx)(n.p,{children:"Percona Toolkit \u63D0\u4F9B\u4E30\u5BCC\u7684\u7BA1\u7406\u4E0E\u5206\u6790\u5DE5\u5177\uFF0C\u534F\u52A9\u8FDB\u884C\u6570\u636E\u540C\u6B65\u6821\u9A8C\u3001\u67E5\u8BE2\u5206\u6790\u4E0E\u8868\u7ED3\u6784\u4F18\u5316\u3002\u5728\u9891\u7E41\u53D8\u52A8\u7684\u6570\u636E\u73AF\u5883\u4E2D\u53EF\u901A\u8FC7\u8BE5\u5DE5\u5177\u76D1\u63A7\u6307\u6807\u4E0E\u6027\u80FD\u53D8\u5316\uFF0C\u5FEB\u901F\u5B9A\u4F4D\u5F02\u5E38\u67E5\u8BE2\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"mysql-workbench",children:"MySQL Workbench"}),"\n",(0,d.jsx)(n.p,{children:"MySQL Workbench \u63D0\u4F9B\u53EF\u89C6\u5316\u754C\u9762\uFF0C\u6613\u4E8E\u67E5\u770B\u7ED3\u6784\u3001\u6267\u884C\u67E5\u8BE2\u548C\u76D1\u63A7\u6027\u80FD\u3002\u901A\u8FC7\u8BE5\u5DE5\u5177\u53EF\u5728\u6570\u636E\u91CF\u6FC0\u589E\u524D\u63D0\u524D\u53D1\u73B0\u6F5C\u5728\u74F6\u9888\uFF0C\u5E76\u5728\u95EE\u9898\u663E\u73B0\u524D\u5B8C\u6210\u4F18\u5316\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return r}});var i=l(67294);let d={},s=i.createContext(d);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);