"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[504],{92926:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Backend/MySQL/MySQL\u4e3b\u4ece\u590d\u5236\u4e0e\u8bfb\u5199\u5206\u79bb","title":"MySQL \u4e3b\u4ece\u590d\u5236\u4e0e\u8bfb\u5199\u5206\u79bb","description":"\u4e3b\u4ece\u590d\u5236\u7684\u57fa\u7840\u539f\u7406","source":"@site/docs/Backend/MySQL/70.MySQL\u4e3b\u4ece\u590d\u5236\u4e0e\u8bfb\u5199\u5206\u79bb.md","sourceDirName":"Backend/MySQL","slug":"/Backend/MySQL/MySQL\u4e3b\u4ece\u590d\u5236\u4e0e\u8bfb\u5199\u5206\u79bb","permalink":"/docs-hub/docs/Backend/MySQL/MySQL\u4e3b\u4ece\u590d\u5236\u4e0e\u8bfb\u5199\u5206\u79bb","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/MySQL/70.MySQL\u4e3b\u4ece\u590d\u5236\u4e0e\u8bfb\u5199\u5206\u79bb.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":70,"frontMatter":{},"sidebar":"mysqlSidebar","previous":{"title":"MySQL \u6027\u80fd\u4f18\u5316\u5b9e\u8df5","permalink":"/docs-hub/docs/Backend/MySQL/MySQL\u6027\u80fd\u4f18\u5316\u5b9e\u8df5"}}');var d=s(74848),l=s(28453);const c={},i="MySQL \u4e3b\u4ece\u590d\u5236\u4e0e\u8bfb\u5199\u5206\u79bb",t={},a=[{value:"\u4e3b\u4ece\u590d\u5236\u7684\u57fa\u7840\u539f\u7406",id:"\u4e3b\u4ece\u590d\u5236\u7684\u57fa\u7840\u539f\u7406",level:2},{value:"\u590d\u5236\u67b6\u6784",id:"\u590d\u5236\u67b6\u6784",level:2},{value:"\u590d\u5236\u7c7b\u578b",id:"\u590d\u5236\u7c7b\u578b",level:2},{value:"\u914d\u7f6e\u4e3b\u4ece\u590d\u5236",id:"\u914d\u7f6e\u4e3b\u4ece\u590d\u5236",level:2},{value:"\u4e3b\u670d\u52a1\u5668\u914d\u7f6e",id:"\u4e3b\u670d\u52a1\u5668\u914d\u7f6e",level:2},{value:"\u521b\u5efa\u590d\u5236\u7528\u6237",id:"\u521b\u5efa\u590d\u5236\u7528\u6237",level:2},{value:"\u4ece\u670d\u52a1\u5668\u914d\u7f6e",id:"\u4ece\u670d\u52a1\u5668\u914d\u7f6e",level:2},{value:"\u8bfb\u5199\u5206\u79bb\u5b9e\u73b0",id:"\u8bfb\u5199\u5206\u79bb\u5b9e\u73b0",level:2},{value:"\u590d\u5236\u76d1\u63a7\u4e0e\u6545\u969c\u5904\u7406",id:"\u590d\u5236\u76d1\u63a7\u4e0e\u6545\u969c\u5904\u7406",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"mysql-\u4e3b\u4ece\u590d\u5236\u4e0e\u8bfb\u5199\u5206\u79bb",children:"MySQL \u4e3b\u4ece\u590d\u5236\u4e0e\u8bfb\u5199\u5206\u79bb"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4e3b\u4ece\u590d\u5236\u7684\u57fa\u7840\u539f\u7406",children:"\u4e3b\u4ece\u590d\u5236\u7684\u57fa\u7840\u539f\u7406"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u901a\u5e38\u901a\u8fc7\u4e3a\u4e3b\u670d\u52a1\u5668\u5f00\u542f\u4e8c\u8fdb\u5236\u65e5\u5fd7\uff0c\u5e76\u5728\u4ece\u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u5176\u4e3a\u4e3b\u670d\u52a1\u5668\u7684\u590d\u5236\u5bf9\u8c61\uff0c\u4ee5\u6b64\u5b9e\u73b0\u4e3b\u4ece\u590d\u5236\u7684\u57fa\u7840\u67b6\u6784\u3002\u4e3b\u670d\u52a1\u5668\u5728\u5904\u7406\u5199\u8bf7\u6c42\u7684\u540c\u65f6\u4f1a\u5c06\u6570\u636e\u53d8\u66f4\u8bb0\u5f55\u5230\u4e8c\u8fdb\u5236\u65e5\u5fd7\uff0c\u4ece\u670d\u52a1\u5668\u5b9a\u671f\u4ece\u4e3b\u670d\u52a1\u5668\u62c9\u53d6\u5e76\u91cd\u653e\u8fd9\u4e9b\u65e5\u5fd7\u5b9e\u73b0\u6570\u636e\u540c\u6b65\u3002\u8fd9\u4e00\u673a\u5236\u4e0d\u4ec5\u80fd\u5c06\u8bfb\u5199\u8d1f\u8f7d\u5206\u644a\u5230\u4e0d\u540c\u670d\u52a1\u5668\uff0c\u8fd8\u80fd\u5728\u6545\u969c\u65f6\u5feb\u901f\u5207\u6362\u5230\u4ece\u670d\u52a1\u5668\uff0c\u63d0\u5347\u7cfb\u7edf\u7684\u53ef\u9760\u6027\u548c\u6269\u5c55\u6027\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u590d\u5236\u67b6\u6784",children:"\u590d\u5236\u67b6\u6784"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u90e8\u7f72\u4e2d\uff0c\u6211\u4f1a\u9009\u7528\u4e00\u53f0\u4f5c\u4e3a\u4e3b\u670d\u52a1\u5668\u8fdb\u884c\u5199\u64cd\u4f5c\uff0c\u82e5\u5e72\u53f0\u4f5c\u4e3a\u4ece\u670d\u52a1\u5668\u8d1f\u8d23\u8bfb\u64cd\u4f5c\u3002\u901a\u8fc7\u5c06\u8bfb\u8bf7\u6c42\u5206\u914d\u7ed9\u4ece\u670d\u52a1\u5668\uff0c\u4e3b\u670d\u52a1\u5668\u538b\u529b\u5f97\u5230\u663e\u8457\u964d\u4f4e\u3002\u540c\u65f6\uff0c\u5982\u679c\u4e3b\u670d\u52a1\u5668\u53d1\u751f\u6545\u969c\uff0c\u6211\u53ef\u4ee5\u8fc5\u901f\u5c06\u67d0\u53f0\u4ece\u670d\u52a1\u5668\u664b\u5347\u4e3a\u65b0\u7684\u4e3b\u670d\u52a1\u5668\uff0c\u4ece\u800c\u51cf\u5c11\u4e1a\u52a1\u4e2d\u65ad\u65f6\u95f4\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u590d\u5236\u7c7b\u578b",children:"\u590d\u5236\u7c7b\u578b"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u8fd0\u7ef4\u4e2d\uff0c\u6211\u901a\u5e38\u4f1a\u6839\u636e\u4e1a\u52a1\u7279\u6027\u9009\u62e9\u590d\u5236\u7c7b\u578b\u3002MySQL \u652f\u6301\u57fa\u4e8e\u8bed\u53e5\u7684\u590d\u5236\u4e0e\u57fa\u4e8e\u884c\u7684\u590d\u5236\u3002\u57fa\u4e8e\u8bed\u53e5\u7684\u590d\u5236\u8bb0\u5f55\u6267\u884c\u7684 SQL \u8bed\u53e5\uff0c\u9002\u5408\u903b\u8f91\u7b80\u5355\u7684\u573a\u666f\uff0c\u4f46\u53ef\u80fd\u5728\u9ad8\u5e76\u53d1\u73af\u5883\u4e2d\u51fa\u73b0\u4e0d\u4e00\u81f4\u95ee\u9898\u3002\u57fa\u4e8e\u884c\u7684\u590d\u5236\u8bb0\u5f55\u88ab\u4fee\u6539\u7684\u884c\u6570\u636e\uff0c\u5728\u751f\u4ea7\u4e2d\u6211\u66f4\u591a\u9009\u62e9\u57fa\u4e8e\u884c\u7684\u590d\u5236\u4ee5\u786e\u4fdd\u6570\u636e\u4e00\u81f4\u6027\u3002\u53ef\u5728\u4e3b\u5e93\u914d\u7f6e\u6587\u4ef6\u4e2d\u901a\u8fc7\u8bbe\u7f6e binlog_format=ROW \u6765\u542f\u7528\u57fa\u4e8e\u884c\u7684\u590d\u5236\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4e0b\u8868\u5bf9\u6bd4\u4e24\u79cd\u590d\u5236\u7c7b\u578b\u7684\u5e38\u89c1\u7279\u70b9"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u590d\u5236\u7c7b\u578b"}),(0,d.jsx)(n.th,{children:"\u7279\u70b9"}),(0,d.jsx)(n.th,{children:"\u4f7f\u7528\u573a\u666f"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u57fa\u4e8e\u8bed\u53e5"}),(0,d.jsx)(n.td,{children:"\u65e5\u5fd7\u91cf\u5c0f\uff0c\u6613\u8bfb\u6027\u9ad8\uff0c\u4f46\u5728\u9ad8\u5e76\u53d1\u4e0b\u53ef\u80fd\u51fa\u73b0\u6570\u636e\u4e0d\u4e00\u81f4"}),(0,d.jsx)(n.td,{children:"\u7b80\u5355\u903b\u8f91\u573a\u666f"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u57fa\u4e8e\u884c"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u4e00\u81f4\u6027\u66f4\u9ad8\uff0c\u4f46\u65e5\u5fd7\u91cf\u8f83\u5927"}),(0,d.jsx)(n.td,{children:"\u9ad8\u5e76\u53d1\u3001\u6570\u636e\u4e00\u81f4\u6027\u8981\u6c42\u9ad8\u7684\u751f\u4ea7\u73af\u5883"})]})]})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CHANGE MASTER TO MASTER_LOG_FILE = 'mysql-bin.000001', MASTER_LOG_POS =  107;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u914d\u7f6e\u4e3b\u4ece\u590d\u5236",children:"\u914d\u7f6e\u4e3b\u4ece\u590d\u5236"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u914d\u7f6e\u4e3b\u4ece\u590d\u5236\u65f6\uff0c\u6211\u9996\u5148\u4f1a\u5728\u4e3b\u670d\u52a1\u5668\u4e0a\u542f\u7528\u4e8c\u8fdb\u5236\u65e5\u5fd7\uff0c\u5e76\u4e3a\u6bcf\u53f0\u670d\u52a1\u5668\u5206\u914d\u552f\u4e00\u7684 server-id\uff0c\u968f\u540e\u5728\u4e3b\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u4e00\u4e2a\u4e13\u7528\u590d\u5236\u7528\u6237\uff0c\u7136\u540e\u5728\u4ece\u670d\u52a1\u5668\u4e0a\u901a\u8fc7 CHANGE MASTER TO \u6307\u5b9a\u4e3b\u670d\u52a1\u5668\u7684\u8fde\u63a5\u4fe1\u606f\u548c\u65e5\u5fd7\u4f4d\u7f6e\uff0c\u6700\u540e\u542f\u52a8\u4ece\u670d\u52a1\u5668\u7684\u590d\u5236\u8fdb\u7a0b\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u4e3b\u670d\u52a1\u5668\u914d\u7f6e",children:"\u4e3b\u670d\u52a1\u5668\u914d\u7f6e"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u4e3b\u670d\u52a1\u5668\u7684 my.cnf \u4e2d\u542f\u7528\u4e8c\u8fdb\u5236\u65e5\u5fd7\uff0c\u5e76\u6307\u5b9a\u552f\u4e00 server-id\u3002\u5b8c\u6210\u540e\u91cd\u542f MySQL \u670d\u52a1\u751f\u6548\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"[mysqld]\nserver-id=1\nlog-bin=mysql-bin\nbinlog_format=ROW\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u521b\u5efa\u590d\u5236\u7528\u6237",children:"\u521b\u5efa\u590d\u5236\u7528\u6237"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u4e3b\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u590d\u5236\u7528\u6237\u5e76\u8d4b\u4e88 REPLICATION SLAVE \u6743\u9650\uff0c\u8fd9\u6837\u4ece\u670d\u52a1\u5668\u5373\u53ef\u4f7f\u7528\u8be5\u7528\u6237\u8fde\u63a5\u4e3b\u670d\u52a1\u5668\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'replica_user'@'%' IDENTIFIED BY 'secure_password';\nGRANT REPLICATION SLAVE ON *.* TO 'replica_user'@'%';\nFLUSH PRIVILEGES;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4ece\u670d\u52a1\u5668\u914d\u7f6e",children:"\u4ece\u670d\u52a1\u5668\u914d\u7f6e"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u4ece\u670d\u52a1\u5668\u4e0a\u8bbe\u7f6e\u4e0e\u4e3b\u670d\u52a1\u5668\u4e0d\u540c\u7684\u552f\u4e00 server-id\uff0c\u5e76\u4e3a\u4ece\u670d\u52a1\u5668\u6307\u5b9a\u4e2d\u7ee7\u65e5\u5fd7\u6587\u4ef6\u3002\u542f\u52a8 MySQL \u540e\uff0c\u5728\u4ece\u670d\u52a1\u5668\u4e2d\u6307\u5b9a\u4e3b\u670d\u52a1\u5668\u4fe1\u606f\u3001\u590d\u5236\u8d26\u53f7\u4e0e\u5bf9\u5e94\u7684\u65e5\u5fd7\u6587\u4ef6\u548c\u4f4d\u7f6e\uff0c\u7136\u540e\u542f\u52a8\u590d\u5236\u7ebf\u7a0b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"[mysqld]\nserver-id=2\nrelay-log=relay-log-bin\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"CHANGE MASTER TO\n    MASTER_HOST='\u4e3b\u670d\u52a1\u5668IP',\n    MASTER_USER='replica_user',\n    MASTER_PASSWORD='secure_password',\n    MASTER_LOG_FILE='mysql-bin.000001',\n    MASTER_LOG_POS=107;\nSTART SLAVE;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u8bfb\u5199\u5206\u79bb\u5b9e\u73b0",children:"\u8bfb\u5199\u5206\u79bb\u5b9e\u73b0"}),"\n",(0,d.jsx)(n.p,{children:"\u4e3a\u63d0\u9ad8\u6574\u4f53\u6027\u80fd\uff0c\u6211\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u4f1a\u5c06\u5199\u8bf7\u6c42\u56fa\u5b9a\u6307\u5411\u4e3b\u670d\u52a1\u5668\uff0c\u5e76\u901a\u8fc7\u5e94\u7528\u5c42\u4ee3\u7801\u5c06\u8bfb\u8bf7\u6c42\u5206\u53d1\u7ed9\u4ece\u670d\u52a1\u5668\u3002\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7ef4\u62a4\u4e24\u4e2a\u72ec\u7acb\u7684\u6570\u636e\u6e90\u8fde\u63a5\uff0c\u5728\u4e1a\u52a1\u903b\u8f91\u4e2d\u533a\u5206\u8bfb\u5199\u64cd\u4f5c\uff0c\u4ece\u800c\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb\u3002\u6b64\u4e3e\u964d\u4f4e\u4e86\u4e3b\u670d\u52a1\u5668\u7684\u67e5\u8be2\u538b\u529b\uff0c\u5e76\u4f7f\u67e5\u8be2\u6027\u80fd\u5728\u591a\u4ece\u670d\u52a1\u5668\u95f4\u6c34\u5e73\u6269\u5c55\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'import mysql.connector\n\nmaster_db = mysql.connector.connect(\n    host="\u4e3b\u670d\u52a1\u5668IP",\n    user="root",\n    password="password",\n    database="mydatabase"\n)\n\nslave_db = mysql.connector.connect(\n    host="\u4ece\u670d\u52a1\u5668IP",\n    user="root",\n    password="password",\n    database="mydatabase"\n)\n\n# \u5199\u64cd\u4f5c\u76f4\u63a5\u8d70\u4e3b\u5e93\u8fde\u63a5\ncursor_master = master_db.cursor()\ncursor_master.execute("INSERT INTO orders (product_id, quantity) VALUES (1, 10)")\nmaster_db.commit()\n\n# \u8bfb\u64cd\u4f5c\u8d70\u4ece\u5e93\u8fde\u63a5\ncursor_slave = slave_db.cursor()\ncursor_slave.execute("SELECT * FROM orders WHERE product_id=1")\nprint(cursor_slave.fetchall())\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u6709\u591a\u53f0\u4ece\u670d\u52a1\u5668\u65f6\uff0c\u6211\u4e5f\u5e38\u4f7f\u7528 HAProxy \u8fd9\u7c7b\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u5c06\u8bfb\u8bf7\u6c42\u5e73\u5747\u5206\u914d\u5230\u4e0d\u540c\u4ece\u670d\u52a1\u5668\uff0c\u51cf\u5c11\u5355\u53f0\u4ece\u670d\u52a1\u5668\u538b\u529b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ini",children:"frontend mysql_front\n    bind *:3306\n    mode tcp\n    default_backend mysql_back\n\nbackend mysql_back\n    mode tcp\n    balance roundrobin\n    server slave1 \u4ece\u670d\u52a1\u5668IP:3306 check\n    server slave2 \u4ece\u670d\u52a1\u5668IP:3306 check\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u590d\u5236\u76d1\u63a7\u4e0e\u6545\u969c\u5904\u7406",children:"\u590d\u5236\u76d1\u63a7\u4e0e\u6545\u969c\u5904\u7406"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u65e5\u5e38\u7ef4\u62a4\u4e2d\uff0c\u6211\u7ecf\u5e38\u901a\u8fc7 SHOW SLAVE STATUS\\G \u547d\u4ee4\u67e5\u770b\u4ece\u670d\u52a1\u5668\u7684\u590d\u5236\u72b6\u6001\u3002\u5f53\u51fa\u73b0\u590d\u5236\u4e2d\u65ad\u6216\u5ef6\u8fdf\u8fc7\u9ad8\u7684\u60c5\u51b5\uff0c\u6211\u4f1a\u5148\u505c\u6b62\u4ece\u670d\u52a1\u5668\u590d\u5236\u7ebf\u7a0b\uff0c\u68c0\u67e5\u4e2d\u7ee7\u65e5\u5fd7\u4e0e\u4e3b\u670d\u52a1\u5668\u4e8c\u8fdb\u5236\u65e5\u5fd7\u7684\u5dee\u5f02\uff0c\u7136\u540e\u901a\u8fc7\u624b\u52a8\u540c\u6b65\u4e22\u5931\u6570\u636e\u6216\u8df3\u8fc7\u5f02\u5e38\u4e8b\u4ef6\u7684\u65b9\u5f0f\u6062\u590d\u590d\u5236\u3002\u4e3a\u51cf\u5c11\u6b64\u7c7b\u95ee\u9898\uff0c\u6211\u5728\u90e8\u7f72\u65f6\u4f1a\u4fdd\u6301\u4e3b\u4ece\u670d\u52a1\u5668\u65f6\u949f\u540c\u6b65\uff0c\u5e76\u5c3d\u91cf\u907f\u514d\u5728\u4e3b\u5e93\u6267\u884c\u975e\u5e42\u7b49\u64cd\u4f5c\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SHOW SLAVE STATUS\\G\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u751f\u4ea7\u4e2d\u6211\u4f1a\u8ba9\u4e3b\u4ece\u670d\u52a1\u5668\u4fdd\u6301\u76f8\u540c\u7684 MySQL \u7248\u672c\u4e0e\u914d\u7f6e\uff0c\u4ee5\u964d\u4f4e\u56e0\u7248\u672c\u5dee\u5f02\u5bfc\u81f4\u7684\u590d\u5236\u5f02\u5e38\u98ce\u9669\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u4e3b\u670d\u52a1\u5668\u4e0a\u5b9a\u671f\u5907\u4efd\u6570\u636e\uff0c\u8fd9\u6837\u5728\u4e3b\u670d\u52a1\u5668\u51fa\u73b0\u6545\u969c\u5e76\u9700\u8981\u4ece\u4ece\u670d\u52a1\u5668\u5207\u6362\u65f6\uff0c\u624b\u5934\u6709\u5b8c\u6574\u5907\u4efd\u53ef\u4ee5\u5feb\u901f\u6062\u590d\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u76d1\u63a7\u590d\u5236\u5ef6\u8fdf\u60c5\u51b5\uff0c\u5982\u679c\u5ef6\u8fdf\u8fc7\u9ad8\uff0c\u6211\u4f1a\u8003\u8651\u589e\u52a0\u4ece\u670d\u52a1\u5668\u6570\u91cf\u3001\u4f18\u5316\u67e5\u8be2\u7ed3\u6784\u6216\u8005\u4f7f\u7528\u66f4\u9ad8\u6027\u80fd\u7684\u786c\u4ef6\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u590d\u6742\u67e5\u8be2\u591a\u7684\u73af\u5883\u4e2d\uff0c\u4e3a\u51cf\u5c11\u590d\u5236\u5ef6\u8fdf\uff0c\u6211\u4f1a\u5c3d\u91cf\u5c06\u5199\u64cd\u4f5c\u96c6\u4e2d\u5728\u5fc5\u8981\u7684\u5173\u952e\u64cd\u4f5c\u4e0a\uff0c\u51cf\u5c11\u957f\u4e8b\u52a1\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/replication.html",children:"\u5b98\u65b9\u6587\u6863"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(96540);const d={},l=r.createContext(d);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);