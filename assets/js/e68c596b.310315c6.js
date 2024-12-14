"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["46155"],{50886:function(e,n,d){d.r(n),d.d(n,{default:()=>j,frontMatter:()=>r,metadata:()=>l,assets:()=>t,toc:()=>h,contentTitle:()=>c});var l=JSON.parse('{"id":"Backend/MySQL/MySQL\u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3","title":"MySQL \u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3","description":"InnoDB \u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790","source":"@site/docs/Backend/MySQL/50.MySQL\u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3.md","sourceDirName":"Backend/MySQL","slug":"/Backend/MySQL/MySQL\u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3","permalink":"/docs-hub/Backend/MySQL/MySQL\u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/MySQL/50.MySQL\u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":50,"frontMatter":{},"sidebar":"mysqlSidebar","previous":{"title":"MySQL \u4E8B\u52A1\u4E0E\u9501\u673A\u5236","permalink":"/docs-hub/Backend/MySQL/MySQL\u4E8B\u52A1\u4E0E\u9501\u673A\u5236"},"next":{"title":"MySQL \u6027\u80FD\u4F18\u5316\u5B9E\u8DF5","permalink":"/docs-hub/Backend/MySQL/MySQL\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5"}}'),i=d("85893"),s=d("50065");let r={},c="MySQL \u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3",t={},h=[{value:"InnoDB \u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",id:"innodb-\u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",level:2},{value:"\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF08MVCC\uFF09",id:"\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236mvcc",level:3},{value:"\u6570\u636E\u5B57\u5178",id:"\u6570\u636E\u5B57\u5178",level:3},{value:"\u5916\u952E\u7EA6\u675F",id:"\u5916\u952E\u7EA6\u675F",level:3},{value:"\u7D22\u5F15\u7C7B\u578B",id:"\u7D22\u5F15\u7C7B\u578B",level:3},{value:"\u914D\u7F6E\u4F18\u5316",id:"\u914D\u7F6E\u4F18\u5316",level:3},{value:"MyISAM \u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",id:"myisam-\u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",level:2},{value:"\u7D22\u5F15\u673A\u5236",id:"\u7D22\u5F15\u673A\u5236",level:3},{value:"\u8868\u7EA7\u9501\u5B9E\u73B0",id:"\u8868\u7EA7\u9501\u5B9E\u73B0",level:3},{value:"\u5168\u6587\u7D22\u5F15",id:"\u5168\u6587\u7D22\u5F15",level:3},{value:"\u4F18\u5316\u7B56\u7565",id:"\u4F18\u5316\u7B56\u7565",level:3},{value:"MEMORY \u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",id:"memory-\u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",level:2},{value:"\u5185\u5B58\u7BA1\u7406",id:"\u5185\u5B58\u7BA1\u7406",level:3},{value:"\u6570\u636E\u6301\u4E45\u5316",id:"\u6570\u636E\u6301\u4E45\u5316",level:3},{value:"\u4F18\u5316\u7B56\u7565",id:"\u4F18\u5316\u7B56\u7565-1",level:3},{value:"NDB Cluster \u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",id:"ndb-cluster-\u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",level:2},{value:"\u6570\u636E\u5206\u5E03",id:"\u6570\u636E\u5206\u5E03",level:3},{value:"\u8282\u70B9\u7C7B\u578B",id:"\u8282\u70B9\u7C7B\u578B",level:3},{value:"\u9AD8\u53EF\u7528\u6027",id:"\u9AD8\u53EF\u7528\u6027",level:3},{value:"\u914D\u7F6E\u4F18\u5316",id:"\u914D\u7F6E\u4F18\u5316-1",level:3},{value:"\u5B58\u50A8\u5F15\u64CE\u9009\u62E9\u6848\u4F8B",id:"\u5B58\u50A8\u5F15\u64CE\u9009\u62E9\u6848\u4F8B",level:2},{value:"\u5B58\u50A8\u5F15\u64CE\u4E0E\u9AD8\u53EF\u7528\u6027",id:"\u5B58\u50A8\u5F15\u64CE\u4E0E\u9AD8\u53EF\u7528\u6027",level:2},{value:"\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565",id:"\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565",level:2},{value:"\u76F8\u5173\u5DE5\u5177",id:"\u76F8\u5173\u5DE5\u5177",level:2},{value:"\u5B58\u50A8\u5F15\u64CE\u7279\u6027\u5BF9\u6BD4\u8868",id:"\u5B58\u50A8\u5F15\u64CE\u7279\u6027\u5BF9\u6BD4\u8868",level:2}];function x(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"mysql-\u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3",children:"MySQL \u5B58\u50A8\u5F15\u64CE\u8BE6\u89E3"})}),"\n",(0,i.jsx)(n.h2,{id:"innodb-\u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",children:"InnoDB \u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u666E\u904D\u5C06 InnoDB \u4F5C\u4E3A\u9ED8\u8BA4\u5B58\u50A8\u5F15\u64CE\u3002InnoDB \u652F\u6301\u4E8B\u52A1\u3001\u884C\u7EA7\u9501\u4E0E\u5D29\u6E83\u6062\u590D\u7279\u6027\uFF0C\u9002\u7528\u4E8E\u5927\u591A\u6570\u9AD8\u5E76\u53D1\u4E0E\u9AD8\u53EF\u9760\u6027\u573A\u666F\u3002\u4F8B\u5982\u5728\u652F\u4ED8\u7CFB\u7EDF\u4E2D\u9891\u7E41\u66F4\u65B0\u8D26\u6237\u4F59\u989D\u4E0E\u8BA2\u5355\u72B6\u6001\uFF0C\u53EF\u901A\u8FC7\u884C\u7EA7\u9501\u4E0E\u4E8B\u52A1\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u4E0E\u9AD8\u5E76\u53D1\u5904\u7406\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236mvcc",children:"\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF08MVCC\uFF09"}),"\n",(0,i.jsx)(n.p,{children:"InnoDB \u4F7F\u7528 MVCC \u6280\u672F\u5904\u7406\u9AD8\u5E76\u53D1\u8BFB\u5199\u64CD\u4F5C\u3002\u7531\u4E8E\u5BF9\u8BFB\u64CD\u4F5C\u4E0E\u5199\u64CD\u4F5C\u5404\u81EA\u7EF4\u62A4\u72EC\u7ACB\u7248\u672C\uFF0C\u67E5\u8BE2\u53EF\u5728\u65E0\u9700\u7B49\u5F85\u5199\u5165\u4E8B\u52A1\u5B8C\u6210\u7684\u60C5\u51B5\u4E0B\u8BFB\u53D6\u8F83\u65E7\u7248\u672C\u7684\u6570\u636E\u3002\u5728\u8BBF\u95EE\u7528\u6237\u8BA2\u5355\u8BE6\u60C5\u65F6\uFF0C\u5373\u4FBF\u6709\u65B0\u8BA2\u5355\u6B63\u5728\u63D2\u5165\uFF0C\u67E5\u8BE2\u64CD\u4F5C\u4ECD\u53EF\u5FEB\u901F\u8FD4\u56DE\u5DF2\u5B58\u5728\u7684\u8BA2\u5355\u4FE1\u606F\uFF0C\u800C\u4E0D\u88AB\u5199\u9501\u963B\u585E\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6570\u636E\u5B57\u5178",children:"\u6570\u636E\u5B57\u5178"}),"\n",(0,i.jsx)(n.p,{children:"InnoDB \u5C06\u8868\u3001\u7D22\u5F15\u4E0E\u5217\u7B49\u5143\u6570\u636E\u96C6\u4E2D\u5B58\u653E\u4E8E\u6570\u636E\u5B57\u5178\u4E2D\u3002\u8FD9\u6837\u5728\u7BA1\u7406\u4E0A\u66F4\u6709\u6761\u7406\uFF0C\u5927\u91CF\u8868\u4E0E\u7D22\u5F15\u7684\u5143\u6570\u636E\u67E5\u8BE2\u53EF\u66F4\u9AD8\u6548\u3002\u4F8B\u5982\u5728\u591A\u5E93\u591A\u8868\u573A\u666F\u4E2D\u5FEB\u901F\u5B9A\u4F4D\u67D0\u4E2A\u8868\u7684\u5143\u6570\u636E\uFF0C\u65E0\u9700\u904D\u5386\u591A\u6587\u4EF6\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5916\u952E\u7EA6\u675F",children:"\u5916\u952E\u7EA6\u675F"}),"\n",(0,i.jsx)(n.p,{children:"InnoDB \u652F\u6301\u5916\u952E\u7EA6\u675F\u5B9E\u73B0\u53C2\u7167\u5B8C\u6574\u6027\u3002\u901A\u8FC7\u5B9A\u4E49\u5916\u952E\u5173\u7CFB\u907F\u514D\u65E0\u6548\u6570\u636E\u4EA7\u751F\uFF0C\u5982\u8BA2\u5355\u8868\u4E0E\u5BA2\u6237\u8868\u4FDD\u6301\u4E25\u683C\u5F15\u7528\u5173\u7CFB\uFF0C\u5220\u9664\u5BA2\u6237\u65F6\u53EF\u81EA\u52A8\u68C0\u67E5\u5E76\u5904\u7406\u76F8\u5173\u8BA2\u5355\u8BB0\u5F55\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7D22\u5F15\u7C7B\u578B",children:"\u7D22\u5F15\u7C7B\u578B"}),"\n",(0,i.jsx)(n.p,{children:"InnoDB \u652F\u6301 B+\u6811\u4E0E\u5168\u6587\u7D22\u5F15\u3002\u5F53\u9762\u5BF9\u6D77\u91CF\u7528\u6237\u8BB0\u5F55\u4E0E\u4F9D\u8D56\u6761\u4EF6\u68C0\u7D22\u65F6\u4F7F\u7528 B+\u6811\u7D22\u5F15\u53EF\u5927\u5E45\u63D0\u5347\u67E5\u8BE2\u901F\u5EA6\u3002\u5728\u4EA7\u54C1\u8BC4\u8BBA\u641C\u7D22\u7B49\u6587\u672C\u68C0\u7D22\u573A\u666F\u4E2D\u542F\u7528\u5168\u6587\u7D22\u5F15\u53EF\u66F4\u9AD8\u6548\u5B9A\u4F4D\u5339\u914D\u5185\u5BB9\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u914D\u7F6E\u4F18\u5316",children:"\u914D\u7F6E\u4F18\u5316"}),"\n",(0,i.jsx)(n.p,{children:"\u5B9E\u9645\u4F18\u5316\u65F6\u53EF\u7ED3\u5408\u7CFB\u7EDF\u8D44\u6E90\u5BF9 InnoDB \u53C2\u6570\u8FDB\u884C\u8C03\u4F18\u3002\u4F8B\u5982\u5728\u9AD8\u5E76\u53D1\u4EA4\u6613\u573A\u666F\u4E0B\u52A0\u5927\u7F13\u51B2\u6C60\u5BB9\u91CF\u6216\u9002\u5F53\u8C03\u6574\u65E5\u5FD7\u5237\u65B0\u7B56\u7565\uFF0C\u53D6\u5F97\u6027\u80FD\u4E0E\u6570\u636E\u5B89\u5168\u7684\u5E73\u8861\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"[mysqld]\ninnodb_buffer_pool_size=2G\ninnodb_log_file_size=512M\ninnodb_flush_log_at_trx_commit=1\ninnodb_thread_concurrency=8\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u7528\u6237\u8BA2\u5355\u5E93\u4E2D\u53EF\u9002\u5F53\u63D0\u5347 innodb_buffer_pool_size\uFF0C\u8BA9\u8BA2\u5355\u4E0E\u7528\u6237\u6570\u636E\u5C3D\u53EF\u80FD\u5E38\u9A7B\u5185\u5B58\uFF0C\u63D0\u9AD8\u8BFB\u5199\u6548\u7387\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4F8B\u5982\u5728\u4E00\u53F0 16G \u5185\u5B58\u7684\u670D\u52A1\u5668\u4E0A\u8FD0\u884C\u4EA4\u6613\u7CFB\u7EDF\u65F6\uFF0C\u53EF\u5148\u5C06 innodb_buffer_pool_size \u8C03\u6574\u4E3A\u603B\u5185\u5B58\u7684 1/8 \u81F3 1/4\uFF0C\u6839\u636E\u538B\u529B\u6D4B\u8BD5\u7ED3\u679C\u518D\u505A\u5FAE\u8C03\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"myisam-\u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",children:"MyISAM \u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"MyISAM \u9002\u7528\u4E8E\u8BFB\u591A\u5199\u5C11\u4E14\u5BF9\u4E8B\u52A1\u8981\u6C42\u4E0D\u9AD8\u7684\u573A\u666F\u3002\u4F8B\u5982\u5728\u65B0\u95FB\u8D44\u8BAF\u7C7B\u7F51\u7AD9\u4E2D\uFF0C\u4EE5\u5C55\u793A\u548C\u68C0\u7D22\u4E3A\u4E3B\uFF0C\u7528\u6237\u8BC4\u8BBA\u66F4\u65B0\u91CF\u76F8\u5BF9\u8F83\u4F4E\uFF0C\u53EF\u5229\u7528 MyISAM \u7684\u7B80\u5355\u7ED3\u6784\u4E0E\u5FEB\u901F\u8BFB\u53D6\u7279\u6027\u63D0\u5347\u9875\u9762\u52A0\u8F7D\u901F\u5EA6\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7D22\u5F15\u673A\u5236",children:"\u7D22\u5F15\u673A\u5236"}),"\n",(0,i.jsx)(n.p,{children:"MyISAM \u4F7F\u7528\u72EC\u7ACB\u6587\u4EF6\u5B58\u50A8\u7D22\u5F15\u4E0E\u6570\u636E\u3002\u5BF9\u65B0\u95FB\u6570\u636E\u8FDB\u884C\u68C0\u7D22\u65F6\u5C06\u6807\u9898\u6216\u53D1\u5E03\u65F6\u95F4\u5217\u5EFA\u7ACB\u7D22\u5F15\uFF0C\u67E5\u8BE2\u7279\u5B9A\u65E5\u671F\u53D1\u5E03\u7684\u65B0\u95FB\u8BB0\u5F55\u66F4\u9AD8\u6548\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8868\u7EA7\u9501\u5B9E\u73B0",children:"\u8868\u7EA7\u9501\u5B9E\u73B0"}),"\n",(0,i.jsx)(n.p,{children:"MyISAM \u4F7F\u7528\u8868\u7EA7\u9501\u3002\u5F53\u5927\u91CF\u7528\u6237\u5E76\u53D1\u8BFB\u53D6\u65B0\u95FB\u5217\u8868\u65F6\u53EF\u8F7B\u677E\u5E94\u5BF9\uFF0C\u4F46\u5982\u679C\u540C\u65F6\u6709\u8F83\u591A\u5199\u5165\u64CD\u4F5C\u5219\u4F1A\u53D1\u751F\u7B49\u5F85\u3002\u4F8B\u5982\u5728\u65E9\u95F4\u9AD8\u5CF0\u540C\u6B65\u65B0\u95FB\u6570\u636E\u65F6\uFF0C\u9002\u5F53\u9519\u5CF0\u5199\u5165\u6216\u8F6C\u7528\u66F4\u9002\u5408\u5E76\u53D1\u5199\u5165\u7684\u5F15\u64CE\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5168\u6587\u7D22\u5F15",children:"\u5168\u6587\u7D22\u5F15"}),"\n",(0,i.jsx)(n.p,{children:"MyISAM \u539F\u751F\u652F\u6301\u5168\u6587\u7D22\u5F15\uFF0C\u53EF\u901A\u8FC7 MATCH AGAINST \u8FDB\u884C\u5168\u6587\u68C0\u7D22\u3002\u4F8B\u5982\u5728\u65B0\u95FB\u5185\u5BB9\u5B57\u6BB5\u4E0A\u5EFA\u7ACB\u5168\u6587\u7D22\u5F15\uFF0C\u5728\u641C\u7D22\u680F\u4E2D\u8F93\u5165\u5173\u952E\u8BCD\u540E\uFF0C\u8FD4\u56DE\u76F8\u5173\u5185\u5BB9\u7684\u901F\u5EA6\u66F4\u5FEB\u66F4\u7CBE\u51C6\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE articles (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    title VARCHAR(255),\n    content TEXT,\n    FULLTEXT(title, content)\n) ENGINE=MyISAM;\n\nSELECT id, title\nFROM articles\nWHERE MATCH(title, content) AGAINST('\u533A\u5757\u94FE');\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4F18\u5316\u7B56\u7565",children:"\u4F18\u5316\u7B56\u7565"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u65B0\u95FB\u6570\u636E\u9891\u7E41\u66F4\u65B0\u540E\uFF0C\u53EF\u5B9A\u671F\u6267\u884C\u4F18\u5316\u64CD\u4F5C\u6539\u5584\u67E5\u8BE2\u6548\u7387\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"OPTIMIZE TABLE articles;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4F8B\u5982\u5728\u65E5\u5E38\u51CC\u6668\u4F4E\u5CF0\u671F\u6267\u884C\u4F18\u5316\u64CD\u4F5C\uFF0C\u8BA9\u6574\u65E5\u7684\u67E5\u8BE2\u6027\u80FD\u4FDD\u6301\u7A33\u5B9A\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"memory-\u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",children:"MEMORY \u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"MEMORY \u5C06\u6570\u636E\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\uFF0C\u9002\u7528\u4E8E\u9AD8\u901F\u7F13\u5B58\u4E0E\u4E34\u65F6\u6570\u636E\u7EDF\u8BA1\u573A\u666F\u3002\u4F8B\u5982\u5728\u70B9\u51FB\u6D41\u5206\u6790\u4E2D\u4E34\u65F6\u5B58\u653E\u5F53\u5929\u7684\u5728\u7EBF\u7528\u6237\u6570\u636E\u3001PV \u6216 UV \u8BA1\u6570\uFF0C\u8BA9\u5B9E\u65F6\u6570\u636E\u5904\u7406\u901F\u5EA6\u66F4\u5FEB\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5185\u5B58\u7BA1\u7406",children:"\u5185\u5B58\u7BA1\u7406"}),"\n",(0,i.jsx)(n.p,{children:"MEMORY \u5F15\u64CE\u652F\u6301\u4F7F\u7528\u54C8\u5E0C\u6216 B+\u6811\u7D22\u5F15\u7ED3\u6784\u3002\u54C8\u5E0C\u7D22\u5F15\u9002\u5408\u7CBE\u786E\u5339\u914D\u952E\u503C\uFF0C\u5982\u5FEB\u901F\u5B9A\u4F4D\u7279\u5B9A\u7528\u6237\u4F1A\u8BDD\u4FE1\u606F\u3002B+\u6811\u7D22\u5F15\u66F4\u9002\u5408\u8303\u56F4\u67E5\u8BE2\uFF0C\u5728\u7EDF\u8BA1\u7279\u5B9A\u65F6\u95F4\u6BB5\u7684\u8BBF\u95EE\u91CF\u65F6\uFF0C\u901A\u8FC7 B+\u6811\u7D22\u5F15\u53EF\u9AD8\u6548\u63D0\u53D6\u5BF9\u5E94\u6570\u636E\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE session_stats (\n    session_id VARCHAR(100) PRIMARY KEY,\n    user_id INT,\n    last_active TIMESTAMP\n) ENGINE=MEMORY;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u6B64\u8868\u5728\u9AD8\u5CF0\u671F\u5FEB\u901F\u68C0\u7D22\u7528\u6237\u4E0A\u6B21\u6D3B\u8DC3\u65F6\u95F4\u5E76\u8FDB\u884C\u5B9E\u65F6\u7EDF\u8BA1\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6570\u636E\u6301\u4E45\u5316",children:"\u6570\u636E\u6301\u4E45\u5316"}),"\n",(0,i.jsx)(n.p,{children:"MEMORY \u5F15\u64CE\u65E0\u6570\u636E\u6301\u4E45\u5316\u80FD\u529B\uFF0C\u670D\u52A1\u5668\u91CD\u542F\u540E\u6570\u636E\u4F1A\u6D88\u5931\u3002\u56E0\u6B64\u9002\u7528\u4E8E\u4E34\u65F6\u6570\u636E\u5B58\u50A8\u4E0E\u5B9E\u65F6\u5206\u6790\u573A\u666F\uFF0C\u5982\u5B58\u653E\u5F53\u65E5\u5B9E\u65F6\u9500\u552E\u989D\u3001\u5728\u7EBF\u8BBF\u5BA2\u7B49\u6682\u5B58\u4FE1\u606F\uFF0C\u4E0D\u9002\u5408\u4F5C\u4E3A\u6838\u5FC3\u6570\u636E\u5B58\u50A8\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u4F18\u5316\u7B56\u7565-1",children:"\u4F18\u5316\u7B56\u7565"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u521B\u5EFA MEMORY \u8868\u65F6\u53EF\u8BBE\u7F6E MAX_ROWS \u7B49\u9650\u5236\uFF0C\u907F\u514D\u5360\u7528\u8FC7\u591A\u5185\u5B58\u3002\u5B9E\u9645\u4F7F\u7528\u4E2D\u6839\u636E\u7CFB\u7EDF\u5185\u5B58\u4E0E\u5E76\u53D1\u6570\u63A7\u5236\u8868\u5927\u5C0F\uFF0C\u8BA9\u7EDF\u8BA1\u67E5\u8BE2\u5FEB\u901F\u4F46\u4E0D\u5F71\u54CD\u5176\u4ED6\u5E94\u7528\u8FD0\u884C\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE cache_data (\n    keyname VARCHAR(50) PRIMARY KEY,\n    val TEXT\n) ENGINE=MEMORY\nMAX_ROWS=10000\nAVG_ROW_LENGTH=100;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4F8B\u5982\u5728\u5E7F\u544A\u6295\u653E\u7CFB\u7EDF\u4E2D\u8BB0\u5F55\u6700\u8FD1\u67E5\u8BE2\u7ED3\u679C\u5E76\u9650\u5236\u6761\u76EE\u6570\uFF0C\u9632\u6B62\u56E0\u5E7F\u544A\u6295\u653E\u89C4\u5219\u67E5\u8BE2\u7F13\u5B58\u8FC7\u591A\u800C\u5360\u7528\u5927\u91CF\u5185\u5B58\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"ndb-cluster-\u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790",children:"NDB Cluster \u5B58\u50A8\u5F15\u64CE\u6DF1\u5165\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"NDB Cluster \u9002\u7528\u4E8E\u5206\u5E03\u5F0F\u573A\u666F\uFF0C\u63D0\u5347\u6C34\u5E73\u6269\u5C55\u4E0E\u9AD8\u53EF\u7528\u80FD\u529B\u3002\u4F8B\u5982\u5728\u5927\u578B\u7535\u5546\u5E73\u53F0\u4E0A\uFF0C\u5C06\u5546\u54C1\u4FE1\u606F\u4E0E\u5E93\u5B58\u6570\u636E\u5206\u7247\u5206\u5E03\u5728\u591A\u6570\u636E\u8282\u70B9\u4E2D\uFF0C\u5B95\u673A\u65F6\u81EA\u52A8\u6062\u590D\uFF0C\u4FDD\u969C\u7CFB\u7EDF\u6301\u7EED\u670D\u52A1\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6570\u636E\u5206\u5E03",children:"\u6570\u636E\u5206\u5E03"}),"\n",(0,i.jsx)(n.p,{children:"NDB Cluster \u5C06\u6570\u636E\u5206\u6563\u5728\u591A\u4E2A\u6570\u636E\u8282\u70B9\u4E2D\uFF0C\u907F\u514D\u5355\u8282\u70B9\u6027\u80FD\u74F6\u9888\u3002\u5F53\u5546\u54C1\u6570\u91CF\u4E0E\u8BBF\u95EE\u91CF\u9AA4\u589E\u65F6\uFF0C\u901A\u8FC7\u589E\u52A0\u6570\u636E\u8282\u70B9\u6269\u5145\u5B58\u50A8\u4E0E\u8BA1\u7B97\u8D44\u6E90\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8282\u70B9\u7C7B\u578B",children:"\u8282\u70B9\u7C7B\u578B"}),"\n",(0,i.jsx)(n.p,{children:"NDB Cluster \u5305\u542B\u6570\u636E\u8282\u70B9\u3001\u7BA1\u7406\u8282\u70B9\u4E0E SQL \u8282\u70B9\u3002\u6570\u636E\u8282\u70B9\u5B58\u50A8\u6570\u636E\uFF0C\u7BA1\u7406\u8282\u70B9\u534F\u8C03\u96C6\u7FA4\u8FD0\u884C\uFF0CSQL \u8282\u70B9\u8D1F\u8D23\u5904\u7406\u67E5\u8BE2\u8BF7\u6C42\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE distributed_orders (\n    order_id INT PRIMARY KEY,\n    customer_id INT,\n    order_time DATETIME\n) ENGINE=NDB;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5206\u5E03\u5F0F\u8BA2\u5355\u8868\u4E2D\u5B58\u50A8\u5168\u7F51\u8BA2\u5355\u8BB0\u5F55\uFF0C\u591A\u6570\u636E\u8282\u70B9\u5E76\u884C\u5904\u7406\u67E5\u8BE2\u4E0E\u63D2\u5165\uFF0C\u8BA9\u9500\u552E\u9AD8\u5CF0\u671F\u95F4\u8BA2\u5355\u7CFB\u7EDF\u4ECD\u80FD\u6D41\u7545\u8FD0\u884C\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u9AD8\u53EF\u7528\u6027",children:"\u9AD8\u53EF\u7528\u6027"}),"\n",(0,i.jsx)(n.p,{children:"NDB Cluster \u5728\u6570\u636E\u8282\u70B9\u6545\u969C\u65F6\u53EF\u81EA\u52A8\u6062\u590D\u6570\u636E\uFF0C\u786E\u4FDD\u9AD8\u53EF\u7528\u6027\u3002\u7535\u5546\u4FC3\u9500\u671F\u95F4\u5982\u679C\u67D0\u8282\u70B9\u5B95\u673A\uFF0C\u96C6\u7FA4\u4F1A\u8FC5\u901F\u5C06\u6570\u636E\u526F\u672C\u4ECE\u5176\u4ED6\u8282\u70B9\u6062\u590D\u5230\u53EF\u7528\u72B6\u6001\uFF0C\u4E0D\u4F1A\u4E2D\u65AD\u8BA2\u5355\u5904\u7406\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u914D\u7F6E\u4F18\u5316-1",children:"\u914D\u7F6E\u4F18\u5316"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 NDB Cluster \u73AF\u5883\u4E2D\u6839\u636E\u5B9E\u9645\u8282\u70B9\u6570\u91CF\u4E0E\u6570\u636E\u89C4\u6A21\u8C03\u6574\u53C2\u6570\u3002\u4F8B\u5982\u9002\u5F53\u63D0\u5347 ndb_buffer_memory \u5B58\u50A8\u66F4\u591A\u6570\u636E\uFF0C\u6216\u589E\u52A0 ndb_data_node_connections \u4F18\u5316\u8282\u70B9\u95F4\u901A\u4FE1\uFF0C\u8BA9\u67E5\u8BE2\u4E0E\u66F4\u65B0\u66F4\u52A0\u9AD8\u6548\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5B58\u50A8\u5F15\u64CE\u9009\u62E9\u6848\u4F8B",children:"\u5B58\u50A8\u5F15\u64CE\u9009\u62E9\u6848\u4F8B"}),"\n",(0,i.jsx)(n.p,{children:"\u5B9E\u9645\u573A\u666F\u4E2D\u9009\u62E9\u9002\u5408\u7684\u5B58\u50A8\u5F15\u64CE\u53EF\u663E\u8457\u63D0\u5347\u6027\u80FD\u3002\u4F8B\u5982\u91D1\u878D\u4E1A\u52A1\u4E2D\u4F7F\u7528 InnoDB\uFF0C\u4FDD\u8BC1\u8F6C\u8D26\u4E0E\u6E05\u7B97\u7684\u5F3A\u4E00\u81F4\u6027\u3002\u5185\u5BB9\u7BA1\u7406\u573A\u666F\u591A\u4EE5 MyISAM \u63D0\u5347\u5168\u6587\u68C0\u7D22\u901F\u5EA6\u3002\u4E34\u65F6\u6027\u7EDF\u8BA1\u573A\u666F\u9009\u7528 MEMORY \u5B58\u50A8\u5F15\u64CE\u5C06\u7EDF\u8BA1\u6570\u636E\u5B58\u4E8E\u5185\u5B58\u4E2D\u5FEB\u901F\u8BFB\u53D6\u3002\u6D77\u91CF\u5206\u5E03\u5F0F\u6570\u636E\u5904\u7406\u4E2D\u5229\u7528 NDB Cluster \u5B9E\u73B0\u9AD8\u53EF\u7528\u4E0E\u53EF\u6269\u5C55\u6027\u80FD\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5927\u578B\u89C6\u9891\u5E73\u53F0\u7EDF\u8BA1\u5728\u7EBF\u89C2\u4F17\u6570\u65F6\uFF0C\u53EF\u5728 MEMORY \u4E2D\u8BB0\u5F55\u5728\u7EBF\u4F1A\u8BDD\u6570\u636E\uFF0C\u5728\u5E76\u53D1\u8BBF\u95EE\u65F6\u4ECD\u80FD\u5FEB\u901F\u67E5\u8BE2\u5F53\u524D\u5728\u7EBF\u6570\u3002\u5728\u9700\u8981\u5BF9\u89C6\u9891\u6807\u9898\u3001\u63CF\u8FF0\u8FDB\u884C\u5168\u6587\u641C\u7D22\u65F6\u9009\u62E9 MyISAM \u5EFA\u7ACB\u5168\u6587\u7D22\u5F15\u52A0\u5FEB\u68C0\u7D22\u901F\u5EA6\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5B58\u50A8\u5F15\u64CE\u4E0E\u9AD8\u53EF\u7528\u6027",children:"\u5B58\u50A8\u5F15\u64CE\u4E0E\u9AD8\u53EF\u7528\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u9AD8\u53EF\u7528\u67B6\u6784\u4E2D\u5229\u7528\u5B58\u50A8\u5F15\u64CE\u7279\u6027\u6539\u5584\u53EF\u7528\u6027\u3002\u4F8B\u5982 InnoDB \u914D\u5408\u4E3B\u4ECE\u590D\u5236\u786E\u4FDD\u6570\u636E\u591A\u673A\u5907\u4EFD\u4E0E\u5FEB\u901F\u6545\u969C\u5207\u6362\u3002NDB Cluster \u5219\u901A\u8FC7\u96C6\u7FA4\u673A\u5236\u5B9E\u73B0\u591A\u8282\u70B9\u5BB9\u707E\uFF0C\u65E0\u9700\u624B\u52A8\u5E72\u9884\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u751F\u4EA7\u73AF\u5883\u4E2D\u53EF\u5728\u4E3B\u670D\u52A1\u5668\u4F7F\u7528 InnoDB\uFF0C\u5E76\u5B9A\u671F\u5C06\u6570\u636E\u590D\u5236\u5230\u53EA\u8BFB\u4ECE\u5E93\u4E2D\u3002\u5F53\u4E3B\u5E93\u6545\u969C\u65F6\u4ECE\u5E93\u53EF\u8FC5\u901F\u63A5\u7BA1\uFF0C\u5B9E\u73B0\u8FD1\u4E4E\u65E0\u7F1D\u7684\u670D\u52A1\u8FDE\u7EED\u6027\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565",children:"\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565"}),"\n",(0,i.jsx)(n.p,{children:"\u786E\u4FDD\u6570\u636E\u5B89\u5168\u6027\u79BB\u4E0D\u5F00\u5408\u7406\u7684\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565\u3002InnoDB \u5728\u70ED\u5907\u4EFD\u65F6\u53EF\u4F7F\u7528 Percona XtraBackup \u7B49\u5DE5\u5177\u5728\u7EBF\u5907\u4EFD\uFF0C\u51CF\u5C11\u505C\u673A\u65F6\u95F4\u3002MyISAM \u5219\u9700\u5728\u4F4E\u5CF0\u671F\u9501\u8868\u540E\u8FDB\u884C\u51B7\u5907\u4EFD\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5B9E\u9645\u751F\u4EA7\u4E2D\u53EF\u5B9A\u671F\u4F7F\u7528 mysqldump \u505A\u903B\u8F91\u5907\u4EFD\uFF0C\u5E76\u901A\u8FC7\u4E8C\u8FDB\u5236\u65E5\u5FD7\u5B9E\u73B0\u589E\u91CF\u5907\u4EFD\u3002\u5728\u51FA\u73B0\u6570\u636E\u8BEF\u5220\u65F6\u53EF\u5C06\u5168\u91CF\u5907\u4EFD\u4E0E\u589E\u91CF\u5907\u4EFD\u7ED3\u5408\u5FEB\u901F\u6062\u590D\u5230\u4E8B\u6545\u524D\u72B6\u6001\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysqldump -u root -p mydatabase > backup.sql\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4F8B\u5982\u5728\u7528\u6237\u6570\u636E\u8BEF\u64CD\u4F5C\u5BFC\u81F4\u4E00\u6279\u8D26\u6237\u4FE1\u606F\u5F02\u5E38\u65F6\uFF0C\u901A\u8FC7\u5168\u91CF\u4E0E\u589E\u91CF\u5907\u4EFD\u8FD8\u539F\u6570\u636E\u5230\u6B63\u5E38\u70B9\uFF0C\u907F\u514D\u4E0D\u53EF\u9006\u6570\u636E\u635F\u5931\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u76F8\u5173\u5DE5\u5177",children:"\u76F8\u5173\u5DE5\u5177"}),"\n",(0,i.jsx)(n.p,{children:"\u65E5\u5E38\u8FD0\u7EF4\u4E2D\u53EF\u4F7F\u7528 Percona Toolkit \u8FDB\u884C\u6162\u67E5\u8BE2\u5206\u6790\u4E0E\u6570\u636E\u6821\u9A8C\uFF0C\u52A0\u901F\u6545\u969C\u5B9A\u4F4D\u4E0E\u6027\u80FD\u4F18\u5316\u3002MySQL Workbench \u53EF\u89C6\u5316\u7BA1\u7406\u5DE5\u5177\u65B9\u4FBF\u67E5\u770B\u7ED3\u6784\u3001\u6267\u884C\u67E5\u8BE2\u5E76\u4FEE\u6539\u914D\u7F6E\u3002phpMyAdmin \u57FA\u4E8E Web \u754C\u9762\uFF0C\u9002\u5408\u4E2D\u5C0F\u578B\u7CFB\u7EDF\u65E5\u5E38\u7EF4\u62A4\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4F8B\u5982\u5728\u4E1A\u52A1\u9AD8\u5CF0\u524D\u901A\u8FC7 Percona Toolkit \u5206\u6790\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u53D1\u73B0\u67D0\u6761\u8BA2\u5355\u7EDF\u8BA1\u67E5\u8BE2\u8FC7\u6162\u540E\u53CA\u65F6\u6DFB\u52A0\u7D22\u5F15\uFF0C\u4FDD\u8BC1\u665A\u95F4\u4FC3\u9500\u65F6\u7528\u6237\u4ECD\u80FD\u6D41\u7545\u4E0B\u5355\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5B58\u50A8\u5F15\u64CE\u7279\u6027\u5BF9\u6BD4\u8868",children:"\u5B58\u50A8\u5F15\u64CE\u7279\u6027\u5BF9\u6BD4\u8868"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u64CE\u540D\u79F0"}),(0,i.jsx)(n.th,{children:"\u4E8B\u52A1\u652F\u6301"}),(0,i.jsx)(n.th,{children:"\u9501\u7C7B\u578B"}),(0,i.jsx)(n.th,{children:"\u5168\u6587\u7D22\u5F15"}),(0,i.jsx)(n.th,{children:"\u5185\u5B58\u5B58\u50A8"}),(0,i.jsx)(n.th,{children:"\u6C34\u5E73\u6269\u5C55"}),(0,i.jsx)(n.th,{children:"\u6570\u636E\u538B\u7F29"}),(0,i.jsx)(n.th,{children:"\u4F7F\u7528\u573A\u666F"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"InnoDB"}),(0,i.jsx)(n.td,{children:"\u662F"}),(0,i.jsx)(n.td,{children:"\u884C\u7EA7\u9501"}),(0,i.jsx)(n.td,{children:"\u662F (5.6+)"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u662F"}),(0,i.jsx)(n.td,{children:"\u91D1\u878D\u4E0E\u5F3A\u4E00\u81F4\u6027\u7CFB\u7EDF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MyISAM"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u8868\u7EA7\u9501"}),(0,i.jsx)(n.td,{children:"\u662F"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u5185\u5BB9\u68C0\u7D22\u4E0E\u8BFB\u591A\u5199\u5C11\u573A\u666F"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MEMORY"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u884C\u7EA7\u9501"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u662F"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u4E34\u65F6\u7F13\u5B58\u4E0E\u5FEB\u901F\u8BFB\u5199"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"NDB"}),(0,i.jsx)(n.td,{children:"\u662F"}),(0,i.jsx)(n.td,{children:"\u884C\u7EA7\u9501"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u90E8\u5206(\u5185\u5B58+\u78C1\u76D8)"}),(0,i.jsx)(n.td,{children:"\u662F"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u5206\u5E03\u5F0F\u96C6\u7FA4\u4E0E\u9AD8\u53EF\u7528\u73AF\u5883"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ARCHIVE"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u884C\u7EA7\u9501"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:"\u662F"}),(0,i.jsx)(n.td,{children:"\u5386\u53F2\u65E5\u5FD7\u5F52\u6863\u4E0E\u957F\u671F\u5B58\u50A8"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},50065:function(e,n,d){d.d(n,{Z:function(){return c},a:function(){return r}});var l=d(67294);let i={},s=l.createContext(i);function r(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);