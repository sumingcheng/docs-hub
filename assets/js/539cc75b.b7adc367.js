"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["86457"],{78025:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>t,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"Backend/MySQL/MySQL\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB","title":"MySQL \u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB","description":"\u4E3B\u4ECE\u590D\u5236\u7684\u57FA\u7840\u539F\u7406","source":"@site/docs/Backend/MySQL/70.MySQL\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB.md","sourceDirName":"Backend/MySQL","slug":"/Backend/MySQL/MySQL\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB","permalink":"/docs-hub/Backend/MySQL/MySQL\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/MySQL/70.MySQL\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":70,"frontMatter":{},"sidebar":"mysqlSidebar","previous":{"title":"MySQL \u6027\u80FD\u4F18\u5316\u5B9E\u8DF5","permalink":"/docs-hub/Backend/MySQL/MySQL\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5"}}'),d=r("85893"),l=r("50065");let c={},i="MySQL \u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB",t={},a=[{value:"\u4E3B\u4ECE\u590D\u5236\u7684\u57FA\u7840\u539F\u7406",id:"\u4E3B\u4ECE\u590D\u5236\u7684\u57FA\u7840\u539F\u7406",level:2},{value:"\u590D\u5236\u67B6\u6784",id:"\u590D\u5236\u67B6\u6784",level:2},{value:"\u590D\u5236\u7C7B\u578B",id:"\u590D\u5236\u7C7B\u578B",level:2},{value:"\u914D\u7F6E\u4E3B\u4ECE\u590D\u5236",id:"\u914D\u7F6E\u4E3B\u4ECE\u590D\u5236",level:2},{value:"\u4E3B\u670D\u52A1\u5668\u914D\u7F6E",id:"\u4E3B\u670D\u52A1\u5668\u914D\u7F6E",level:2},{value:"\u521B\u5EFA\u590D\u5236\u7528\u6237",id:"\u521B\u5EFA\u590D\u5236\u7528\u6237",level:2},{value:"\u4ECE\u670D\u52A1\u5668\u914D\u7F6E",id:"\u4ECE\u670D\u52A1\u5668\u914D\u7F6E",level:2},{value:"\u8BFB\u5199\u5206\u79BB\u5B9E\u73B0",id:"\u8BFB\u5199\u5206\u79BB\u5B9E\u73B0",level:2},{value:"\u590D\u5236\u76D1\u63A7\u4E0E\u6545\u969C\u5904\u7406",id:"\u590D\u5236\u76D1\u63A7\u4E0E\u6545\u969C\u5904\u7406",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"mysql-\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB",children:"MySQL \u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4E3B\u4ECE\u590D\u5236\u7684\u57FA\u7840\u539F\u7406",children:"\u4E3B\u4ECE\u590D\u5236\u7684\u57FA\u7840\u539F\u7406"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u6211\u901A\u5E38\u901A\u8FC7\u4E3A\u4E3B\u670D\u52A1\u5668\u5F00\u542F\u4E8C\u8FDB\u5236\u65E5\u5FD7\uFF0C\u5E76\u5728\u4ECE\u670D\u52A1\u5668\u4E0A\u914D\u7F6E\u5176\u4E3A\u4E3B\u670D\u52A1\u5668\u7684\u590D\u5236\u5BF9\u8C61\uFF0C\u4EE5\u6B64\u5B9E\u73B0\u4E3B\u4ECE\u590D\u5236\u7684\u57FA\u7840\u67B6\u6784\u3002\u4E3B\u670D\u52A1\u5668\u5728\u5904\u7406\u5199\u8BF7\u6C42\u7684\u540C\u65F6\u4F1A\u5C06\u6570\u636E\u53D8\u66F4\u8BB0\u5F55\u5230\u4E8C\u8FDB\u5236\u65E5\u5FD7\uFF0C\u4ECE\u670D\u52A1\u5668\u5B9A\u671F\u4ECE\u4E3B\u670D\u52A1\u5668\u62C9\u53D6\u5E76\u91CD\u653E\u8FD9\u4E9B\u65E5\u5FD7\u5B9E\u73B0\u6570\u636E\u540C\u6B65\u3002\u8FD9\u4E00\u673A\u5236\u4E0D\u4EC5\u80FD\u5C06\u8BFB\u5199\u8D1F\u8F7D\u5206\u644A\u5230\u4E0D\u540C\u670D\u52A1\u5668\uFF0C\u8FD8\u80FD\u5728\u6545\u969C\u65F6\u5FEB\u901F\u5207\u6362\u5230\u4ECE\u670D\u52A1\u5668\uFF0C\u63D0\u5347\u7CFB\u7EDF\u7684\u53EF\u9760\u6027\u548C\u6269\u5C55\u6027\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u590D\u5236\u67B6\u6784",children:"\u590D\u5236\u67B6\u6784"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u90E8\u7F72\u4E2D\uFF0C\u6211\u4F1A\u9009\u7528\u4E00\u53F0\u4F5C\u4E3A\u4E3B\u670D\u52A1\u5668\u8FDB\u884C\u5199\u64CD\u4F5C\uFF0C\u82E5\u5E72\u53F0\u4F5C\u4E3A\u4ECE\u670D\u52A1\u5668\u8D1F\u8D23\u8BFB\u64CD\u4F5C\u3002\u901A\u8FC7\u5C06\u8BFB\u8BF7\u6C42\u5206\u914D\u7ED9\u4ECE\u670D\u52A1\u5668\uFF0C\u4E3B\u670D\u52A1\u5668\u538B\u529B\u5F97\u5230\u663E\u8457\u964D\u4F4E\u3002\u540C\u65F6\uFF0C\u5982\u679C\u4E3B\u670D\u52A1\u5668\u53D1\u751F\u6545\u969C\uFF0C\u6211\u53EF\u4EE5\u8FC5\u901F\u5C06\u67D0\u53F0\u4ECE\u670D\u52A1\u5668\u664B\u5347\u4E3A\u65B0\u7684\u4E3B\u670D\u52A1\u5668\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E1A\u52A1\u4E2D\u65AD\u65F6\u95F4\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u590D\u5236\u7C7B\u578B",children:"\u590D\u5236\u7C7B\u578B"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u5B9E\u9645\u8FD0\u7EF4\u4E2D\uFF0C\u6211\u901A\u5E38\u4F1A\u6839\u636E\u4E1A\u52A1\u7279\u6027\u9009\u62E9\u590D\u5236\u7C7B\u578B\u3002MySQL \u652F\u6301\u57FA\u4E8E\u8BED\u53E5\u7684\u590D\u5236\u4E0E\u57FA\u4E8E\u884C\u7684\u590D\u5236\u3002\u57FA\u4E8E\u8BED\u53E5\u7684\u590D\u5236\u8BB0\u5F55\u6267\u884C\u7684 SQL \u8BED\u53E5\uFF0C\u9002\u5408\u903B\u8F91\u7B80\u5355\u7684\u573A\u666F\uFF0C\u4F46\u53EF\u80FD\u5728\u9AD8\u5E76\u53D1\u73AF\u5883\u4E2D\u51FA\u73B0\u4E0D\u4E00\u81F4\u95EE\u9898\u3002\u57FA\u4E8E\u884C\u7684\u590D\u5236\u8BB0\u5F55\u88AB\u4FEE\u6539\u7684\u884C\u6570\u636E\uFF0C\u5728\u751F\u4EA7\u4E2D\u6211\u66F4\u591A\u9009\u62E9\u57FA\u4E8E\u884C\u7684\u590D\u5236\u4EE5\u786E\u4FDD\u6570\u636E\u4E00\u81F4\u6027\u3002\u53EF\u5728\u4E3B\u5E93\u914D\u7F6E\u6587\u4EF6\u4E2D\u901A\u8FC7\u8BBE\u7F6E binlog_format=ROW \u6765\u542F\u7528\u57FA\u4E8E\u884C\u7684\u590D\u5236\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4E0B\u8868\u5BF9\u6BD4\u4E24\u79CD\u590D\u5236\u7C7B\u578B\u7684\u5E38\u89C1\u7279\u70B9"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u590D\u5236\u7C7B\u578B"}),(0,d.jsx)(n.th,{children:"\u7279\u70B9"}),(0,d.jsx)(n.th,{children:"\u4F7F\u7528\u573A\u666F"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u57FA\u4E8E\u8BED\u53E5"}),(0,d.jsx)(n.td,{children:"\u65E5\u5FD7\u91CF\u5C0F\uFF0C\u6613\u8BFB\u6027\u9AD8\uFF0C\u4F46\u5728\u9AD8\u5E76\u53D1\u4E0B\u53EF\u80FD\u51FA\u73B0\u6570\u636E\u4E0D\u4E00\u81F4"}),(0,d.jsx)(n.td,{children:"\u7B80\u5355\u903B\u8F91\u573A\u666F"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u57FA\u4E8E\u884C"}),(0,d.jsx)(n.td,{children:"\u6570\u636E\u4E00\u81F4\u6027\u66F4\u9AD8\uFF0C\u4F46\u65E5\u5FD7\u91CF\u8F83\u5927"}),(0,d.jsx)(n.td,{children:"\u9AD8\u5E76\u53D1\u3001\u6570\u636E\u4E00\u81F4\u6027\u8981\u6C42\u9AD8\u7684\u751F\u4EA7\u73AF\u5883"})]})]})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CHANGE MASTER TO MASTER_LOG_FILE = 'mysql-bin.000001', MASTER_LOG_POS =  107;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u914D\u7F6E\u4E3B\u4ECE\u590D\u5236",children:"\u914D\u7F6E\u4E3B\u4ECE\u590D\u5236"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u914D\u7F6E\u4E3B\u4ECE\u590D\u5236\u65F6\uFF0C\u6211\u9996\u5148\u4F1A\u5728\u4E3B\u670D\u52A1\u5668\u4E0A\u542F\u7528\u4E8C\u8FDB\u5236\u65E5\u5FD7\uFF0C\u5E76\u4E3A\u6BCF\u53F0\u670D\u52A1\u5668\u5206\u914D\u552F\u4E00\u7684 server-id\uFF0C\u968F\u540E\u5728\u4E3B\u670D\u52A1\u5668\u4E0A\u521B\u5EFA\u4E00\u4E2A\u4E13\u7528\u590D\u5236\u7528\u6237\uFF0C\u7136\u540E\u5728\u4ECE\u670D\u52A1\u5668\u4E0A\u901A\u8FC7 CHANGE MASTER TO \u6307\u5B9A\u4E3B\u670D\u52A1\u5668\u7684\u8FDE\u63A5\u4FE1\u606F\u548C\u65E5\u5FD7\u4F4D\u7F6E\uFF0C\u6700\u540E\u542F\u52A8\u4ECE\u670D\u52A1\u5668\u7684\u590D\u5236\u8FDB\u7A0B\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u4E3B\u670D\u52A1\u5668\u914D\u7F6E",children:"\u4E3B\u670D\u52A1\u5668\u914D\u7F6E"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u4E3B\u670D\u52A1\u5668\u7684 my.cnf \u4E2D\u542F\u7528\u4E8C\u8FDB\u5236\u65E5\u5FD7\uFF0C\u5E76\u6307\u5B9A\u552F\u4E00 server-id\u3002\u5B8C\u6210\u540E\u91CD\u542F MySQL \u670D\u52A1\u751F\u6548\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"[mysqld]\nserver-id=1\nlog-bin=mysql-bin\nbinlog_format=ROW\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u521B\u5EFA\u590D\u5236\u7528\u6237",children:"\u521B\u5EFA\u590D\u5236\u7528\u6237"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u4E3B\u670D\u52A1\u5668\u4E0A\u521B\u5EFA\u590D\u5236\u7528\u6237\u5E76\u8D4B\u4E88 REPLICATION SLAVE \u6743\u9650\uFF0C\u8FD9\u6837\u4ECE\u670D\u52A1\u5668\u5373\u53EF\u4F7F\u7528\u8BE5\u7528\u6237\u8FDE\u63A5\u4E3B\u670D\u52A1\u5668\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'replica_user'@'%' IDENTIFIED BY 'secure_password';\nGRANT REPLICATION SLAVE ON *.* TO 'replica_user'@'%';\nFLUSH PRIVILEGES;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4ECE\u670D\u52A1\u5668\u914D\u7F6E",children:"\u4ECE\u670D\u52A1\u5668\u914D\u7F6E"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u4ECE\u670D\u52A1\u5668\u4E0A\u8BBE\u7F6E\u4E0E\u4E3B\u670D\u52A1\u5668\u4E0D\u540C\u7684\u552F\u4E00 server-id\uFF0C\u5E76\u4E3A\u4ECE\u670D\u52A1\u5668\u6307\u5B9A\u4E2D\u7EE7\u65E5\u5FD7\u6587\u4EF6\u3002\u542F\u52A8 MySQL \u540E\uFF0C\u5728\u4ECE\u670D\u52A1\u5668\u4E2D\u6307\u5B9A\u4E3B\u670D\u52A1\u5668\u4FE1\u606F\u3001\u590D\u5236\u8D26\u53F7\u4E0E\u5BF9\u5E94\u7684\u65E5\u5FD7\u6587\u4EF6\u548C\u4F4D\u7F6E\uFF0C\u7136\u540E\u542F\u52A8\u590D\u5236\u7EBF\u7A0B\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"[mysqld]\nserver-id=2\nrelay-log=relay-log-bin\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CHANGE MASTER TO\n    MASTER_HOST='\u4E3B\u670D\u52A1\u5668IP',\n    MASTER_USER='replica_user',\n    MASTER_PASSWORD='secure_password',\n    MASTER_LOG_FILE='mysql-bin.000001',\n    MASTER_LOG_POS=107;\nSTART SLAVE;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u8BFB\u5199\u5206\u79BB\u5B9E\u73B0",children:"\u8BFB\u5199\u5206\u79BB\u5B9E\u73B0"}),"\n",(0,d.jsx)(n.p,{children:"\u4E3A\u63D0\u9AD8\u6574\u4F53\u6027\u80FD\uFF0C\u6211\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\u4F1A\u5C06\u5199\u8BF7\u6C42\u56FA\u5B9A\u6307\u5411\u4E3B\u670D\u52A1\u5668\uFF0C\u5E76\u901A\u8FC7\u5E94\u7528\u5C42\u4EE3\u7801\u5C06\u8BFB\u8BF7\u6C42\u5206\u53D1\u7ED9\u4ECE\u670D\u52A1\u5668\u3002\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7EF4\u62A4\u4E24\u4E2A\u72EC\u7ACB\u7684\u6570\u636E\u6E90\u8FDE\u63A5\uFF0C\u5728\u4E1A\u52A1\u903B\u8F91\u4E2D\u533A\u5206\u8BFB\u5199\u64CD\u4F5C\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8BFB\u5199\u5206\u79BB\u3002\u6B64\u4E3E\u964D\u4F4E\u4E86\u4E3B\u670D\u52A1\u5668\u7684\u67E5\u8BE2\u538B\u529B\uFF0C\u5E76\u4F7F\u67E5\u8BE2\u6027\u80FD\u5728\u591A\u4ECE\u670D\u52A1\u5668\u95F4\u6C34\u5E73\u6269\u5C55\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'import mysql.connector\n\nmaster_db = mysql.connector.connect(\n    host="\u4E3B\u670D\u52A1\u5668IP",\n    user="root",\n    password="password",\n    database="mydatabase"\n)\n\nslave_db = mysql.connector.connect(\n    host="\u4ECE\u670D\u52A1\u5668IP",\n    user="root",\n    password="password",\n    database="mydatabase"\n)\n\n# \u5199\u64CD\u4F5C\u76F4\u63A5\u8D70\u4E3B\u5E93\u8FDE\u63A5\ncursor_master = master_db.cursor()\ncursor_master.execute("INSERT INTO orders (product_id, quantity) VALUES (1, 10)")\nmaster_db.commit()\n\n# \u8BFB\u64CD\u4F5C\u8D70\u4ECE\u5E93\u8FDE\u63A5\ncursor_slave = slave_db.cursor()\ncursor_slave.execute("SELECT * FROM orders WHERE product_id=1")\nprint(cursor_slave.fetchall())\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u6709\u591A\u53F0\u4ECE\u670D\u52A1\u5668\u65F6\uFF0C\u6211\u4E5F\u5E38\u4F7F\u7528 HAProxy \u8FD9\u7C7B\u8D1F\u8F7D\u5747\u8861\u5668\uFF0C\u5C06\u8BFB\u8BF7\u6C42\u5E73\u5747\u5206\u914D\u5230\u4E0D\u540C\u4ECE\u670D\u52A1\u5668\uFF0C\u51CF\u5C11\u5355\u53F0\u4ECE\u670D\u52A1\u5668\u538B\u529B\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"frontend mysql_front\n    bind *:3306\n    mode tcp\n    default_backend mysql_back\n\nbackend mysql_back\n    mode tcp\n    balance roundrobin\n    server slave1 \u4ECE\u670D\u52A1\u5668IP:3306 check\n    server slave2 \u4ECE\u670D\u52A1\u5668IP:3306 check\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u590D\u5236\u76D1\u63A7\u4E0E\u6545\u969C\u5904\u7406",children:"\u590D\u5236\u76D1\u63A7\u4E0E\u6545\u969C\u5904\u7406"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u65E5\u5E38\u7EF4\u62A4\u4E2D\uFF0C\u6211\u7ECF\u5E38\u901A\u8FC7 SHOW SLAVE STATUS\\G \u547D\u4EE4\u67E5\u770B\u4ECE\u670D\u52A1\u5668\u7684\u590D\u5236\u72B6\u6001\u3002\u5F53\u51FA\u73B0\u590D\u5236\u4E2D\u65AD\u6216\u5EF6\u8FDF\u8FC7\u9AD8\u7684\u60C5\u51B5\uFF0C\u6211\u4F1A\u5148\u505C\u6B62\u4ECE\u670D\u52A1\u5668\u590D\u5236\u7EBF\u7A0B\uFF0C\u68C0\u67E5\u4E2D\u7EE7\u65E5\u5FD7\u4E0E\u4E3B\u670D\u52A1\u5668\u4E8C\u8FDB\u5236\u65E5\u5FD7\u7684\u5DEE\u5F02\uFF0C\u7136\u540E\u901A\u8FC7\u624B\u52A8\u540C\u6B65\u4E22\u5931\u6570\u636E\u6216\u8DF3\u8FC7\u5F02\u5E38\u4E8B\u4EF6\u7684\u65B9\u5F0F\u6062\u590D\u590D\u5236\u3002\u4E3A\u51CF\u5C11\u6B64\u7C7B\u95EE\u9898\uFF0C\u6211\u5728\u90E8\u7F72\u65F6\u4F1A\u4FDD\u6301\u4E3B\u4ECE\u670D\u52A1\u5668\u65F6\u949F\u540C\u6B65\uFF0C\u5E76\u5C3D\u91CF\u907F\u514D\u5728\u4E3B\u5E93\u6267\u884C\u975E\u5E42\u7B49\u64CD\u4F5C\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SHOW SLAVE STATUS\\G\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u751F\u4EA7\u4E2D\u6211\u4F1A\u8BA9\u4E3B\u4ECE\u670D\u52A1\u5668\u4FDD\u6301\u76F8\u540C\u7684 MySQL \u7248\u672C\u4E0E\u914D\u7F6E\uFF0C\u4EE5\u964D\u4F4E\u56E0\u7248\u672C\u5DEE\u5F02\u5BFC\u81F4\u7684\u590D\u5236\u5F02\u5E38\u98CE\u9669\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u4E3B\u670D\u52A1\u5668\u4E0A\u5B9A\u671F\u5907\u4EFD\u6570\u636E\uFF0C\u8FD9\u6837\u5728\u4E3B\u670D\u52A1\u5668\u51FA\u73B0\u6545\u969C\u5E76\u9700\u8981\u4ECE\u4ECE\u670D\u52A1\u5668\u5207\u6362\u65F6\uFF0C\u624B\u5934\u6709\u5B8C\u6574\u5907\u4EFD\u53EF\u4EE5\u5FEB\u901F\u6062\u590D\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u76D1\u63A7\u590D\u5236\u5EF6\u8FDF\u60C5\u51B5\uFF0C\u5982\u679C\u5EF6\u8FDF\u8FC7\u9AD8\uFF0C\u6211\u4F1A\u8003\u8651\u589E\u52A0\u4ECE\u670D\u52A1\u5668\u6570\u91CF\u3001\u4F18\u5316\u67E5\u8BE2\u7ED3\u6784\u6216\u8005\u4F7F\u7528\u66F4\u9AD8\u6027\u80FD\u7684\u786C\u4EF6\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u590D\u6742\u67E5\u8BE2\u591A\u7684\u73AF\u5883\u4E2D\uFF0C\u4E3A\u51CF\u5C11\u590D\u5236\u5EF6\u8FDF\uFF0C\u6211\u4F1A\u5C3D\u91CF\u5C06\u5199\u64CD\u4F5C\u96C6\u4E2D\u5728\u5FC5\u8981\u7684\u5173\u952E\u64CD\u4F5C\u4E0A\uFF0C\u51CF\u5C11\u957F\u4E8B\u52A1\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/replication.html",children:"\u5B98\u65B9\u6587\u6863"})}),"\n",(0,d.jsx)(n.p,{children:"-- \u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u4E3B\u4ECE\u5EF6\u8FDF\u79D2\u6570\nSHOW SLAVE STATUS\\G\n-- Seconds_Behind_Master \u5B57\u6BB5\u663E\u793A\u4ECE\u5E93\u5EF6\u8FDF\u79D2\u6570"}),"\n",(0,d.jsx)(n.p,{children:"-- \u4E5F\u53EF\u4EE5\u4F7F\u7528 pt-heartbeat \u5DE5\u5177\u66F4\u7CBE\u786E\u5730\u76D1\u63A7\u590D\u5236\u5EF6\u8FDF"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var s=r(67294);let d={},l=s.createContext(d);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);