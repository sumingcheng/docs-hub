"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["46376"],{60676:function(n,e,i){i.r(e),i.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>t,contentTitle:()=>a});var s=JSON.parse('{"id":"Backend/Nginx/Nginx\u57FA\u7840\u5165\u95E8","title":"Nginx \u57FA\u7840\u5165\u95E8","description":"\u4EC0\u4E48\u662F Nginx","source":"@site/docs/Backend/Nginx/10.Nginx\u57FA\u7840\u5165\u95E8.md","sourceDirName":"Backend/Nginx","slug":"/Backend/Nginx/Nginx\u57FA\u7840\u5165\u95E8","permalink":"/docs-hub/Backend/Nginx/Nginx\u57FA\u7840\u5165\u95E8","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Nginx/10.Nginx\u57FA\u7840\u5165\u95E8.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":10,"frontMatter":{},"sidebar":"nginxSidebar","next":{"title":"Nginx \u8D1F\u8F7D\u5747\u8861\u914D\u7F6E","permalink":"/docs-hub/Backend/Nginx/Nginx\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E"}}'),l=i("85893"),r=i("50065");let c={},a="Nginx \u57FA\u7840\u5165\u95E8",d={},t=[{value:"\u4EC0\u4E48\u662F Nginx",id:"\u4EC0\u4E48\u662F-nginx",level:2},{value:"\u5B89\u88C5 Nginx",id:"\u5B89\u88C5-nginx",level:2},{value:"\u4F7F\u7528\u5305\u7BA1\u7406\u5668\u5B89\u88C5",id:"\u4F7F\u7528\u5305\u7BA1\u7406\u5668\u5B89\u88C5",level:3},{value:"\u7F16\u8BD1\u6E90\u7801\u5B89\u88C5",id:"\u7F16\u8BD1\u6E90\u7801\u5B89\u88C5",level:3},{value:"Nginx \u914D\u7F6E\u57FA\u7840",id:"nginx-\u914D\u7F6E\u57FA\u7840",level:2},{value:"\u5168\u5C40\u914D\u7F6E",id:"\u5168\u5C40\u914D\u7F6E",level:3},{value:"HTTP \u5757",id:"http-\u5757",level:3},{value:"\u670D\u52A1\u5668\u5757",id:"\u670D\u52A1\u5668\u5757",level:3},{value:"Nginx \u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406",id:"nginx-\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406",level:2},{value:"Nginx \u4F5C\u4E3A\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668",id:"nginx-\u4F5C\u4E3A\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668",level:2},{value:"\u5E38\u89C1\u7684 Nginx \u547D\u4EE4",id:"\u5E38\u89C1\u7684-nginx-\u547D\u4EE4",level:2},{value:"\u65E5\u5FD7\u7BA1\u7406",id:"\u65E5\u5FD7\u7BA1\u7406",level:2},{value:"\u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F",id:"\u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F",level:3},{value:"\u5B89\u5168\u6027\u8BBE\u7F6E",id:"\u5B89\u5168\u6027\u8BBE\u7F6E",level:2},{value:"\u4F7F\u7528 HTTPS",id:"\u4F7F\u7528-https",level:3},{value:"\u9632\u6B62 DDoS \u653B\u51FB",id:"\u9632\u6B62-ddos-\u653B\u51FB",level:3},{value:"\u6027\u80FD\u4F18\u5316",id:"\u6027\u80FD\u4F18\u5316",level:2},{value:"\u542F\u7528 Gzip \u538B\u7F29",id:"\u542F\u7528-gzip-\u538B\u7F29",level:3},{value:"\u914D\u7F6E\u7F13\u5B58",id:"\u914D\u7F6E\u7F13\u5B58",level:3},{value:"\u53C2\u8003\u94FE\u63A5",id:"\u53C2\u8003\u94FE\u63A5",level:3}];function x(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"nginx-\u57FA\u7840\u5165\u95E8",children:"Nginx \u57FA\u7840\u5165\u95E8"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4EC0\u4E48\u662F-nginx",children:"\u4EC0\u4E48\u662F Nginx"}),"\n",(0,l.jsx)(e.p,{children:"Nginx \u662F\u4E00\u6B3E\u9AD8\u6027\u80FD\u7684 HTTP \u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4E5F\u662F\u4E00\u4E2A IMAP/POP3 \u4EE3\u7406\u670D\u52A1\u5668\u3002\u7531\u4E8E\u5176\u8F7B\u91CF\u7EA7\u3001\u9AD8\u5E76\u53D1\u548C\u7A33\u5B9A\u6027\uFF0CNginx \u88AB\u5E7F\u6CDB\u5E94\u7528\u4E8E\u5404\u7C7B\u7F51\u7AD9\u548C\u5E94\u7528\u4E2D\u3002\u7B14\u8005\u5728\u4F7F\u7528 Nginx \u65F6\uFF0C\u6DF1\u523B\u4F53\u4F1A\u5230\u5176\u914D\u7F6E\u7684\u7075\u6D3B\u6027\u548C\u9AD8\u6548\u6027\uFF0C\u7279\u522B\u662F\u5728\u5904\u7406\u9759\u6001\u8D44\u6E90\u548C\u8D1F\u8F7D\u5747\u8861\u65B9\u9762\u8868\u73B0\u51FA\u8272\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5B89\u88C5-nginx",children:"\u5B89\u88C5 Nginx"}),"\n",(0,l.jsx)(e.h3,{id:"\u4F7F\u7528\u5305\u7BA1\u7406\u5668\u5B89\u88C5",children:"\u4F7F\u7528\u5305\u7BA1\u7406\u5668\u5B89\u88C5"}),"\n",(0,l.jsx)(e.p,{children:"\u5728 Ubuntu \u7CFB\u7EDF\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 Nginx\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt update\nsudo apt install nginx\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728 CentOS \u7CFB\u7EDF\u4E2D\uFF0C\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo yum install epel-release\nsudo yum install nginx\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8 Nginx \u670D\u52A1\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo systemctl start nginx\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u786E\u4FDD Nginx \u5F00\u673A\u81EA\u542F\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo systemctl enable nginx\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u7F16\u8BD1\u6E90\u7801\u5B89\u88C5",children:"\u7F16\u8BD1\u6E90\u7801\u5B89\u88C5"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49 Nginx\uFF0C\u53EF\u4EE5\u9009\u62E9\u4ECE\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5\u3002\u9996\u5148\u4E0B\u8F7D Nginx \u6E90\u7801\u5305\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"wget http://nginx.org/download/nginx-1.25.3.tar.gz\ntar -zxvf nginx-1.25.3.tar.gz\ncd nginx-1.25.3\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u914D\u7F6E\u7F16\u8BD1\u9009\u9879\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"./configure --prefix=/usr/local/nginx --with-http_ssl_module\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7F16\u8BD1\u5E76\u5B89\u88C5\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"make\nsudo make install\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8 Nginx\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo /usr/local/nginx/sbin/nginx\n"})}),"\n",(0,l.jsx)(e.h2,{id:"nginx-\u914D\u7F6E\u57FA\u7840",children:"Nginx \u914D\u7F6E\u57FA\u7840"}),"\n",(0,l.jsxs)(e.p,{children:["Nginx \u7684\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u4F4D\u4E8E",(0,l.jsx)(e.code,{children:"/etc/nginx/nginx.conf"}),"\u3002\u7B14\u8005\u5EFA\u8BAE\u5728\u4FEE\u6539\u914D\u7F6E\u524D\u5907\u4EFD\u539F\u6587\u4EF6\uFF0C\u4EE5\u9632\u51FA\u73B0\u95EE\u9898\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u5168\u5C40\u914D\u7F6E",children:"\u5168\u5C40\u914D\u7F6E"}),"\n",(0,l.jsx)(e.p,{children:"\u5168\u5C40\u914D\u7F6E\u90E8\u5206\u5305\u542B\u7528\u6237\u6743\u9650\u3001\u5DE5\u4F5C\u8FDB\u7A0B\u6570\u7B49\u8BBE\u7F6E\u3002\u4F8B\u5982\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:"user www-data;\nworker_processes auto;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\n"})}),"\n",(0,l.jsx)(e.h3,{id:"http-\u5757",children:"HTTP \u5757"}),"\n",(0,l.jsx)(e.p,{children:"HTTP \u5757\u4E2D\u5305\u542B\u4E86\u6240\u6709 HTTP \u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u5305\u62EC MIME \u7C7B\u578B\u3001\u65E5\u5FD7\u683C\u5F0F\u3001\u4EE5\u53CA\u5305\u542B\u5176\u4ED6\u914D\u7F6E\u6587\u4EF6\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:'http {\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n\n    log_format main \'$remote_addr - $remote_user [$time_local] "$request" \'\n                    \'$status $body_bytes_sent "$http_referer" \'\n                    \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log /var/log/nginx/access.log main;\n\n    sendfile on;\n    keepalive_timeout 65;\n\n    include /etc/nginx/conf.d/*.conf;\n}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u670D\u52A1\u5668\u5757",children:"\u670D\u52A1\u5668\u5757"}),"\n",(0,l.jsx)(e.p,{children:"\u670D\u52A1\u5668\u5757\u7528\u4E8E\u5B9A\u4E49\u4E0D\u540C\u7684\u865A\u62DF\u4E3B\u673A\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u670D\u52A1\u5668\u5757\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:"server {\n    listen 80;\n    server_name example.com www.example.com;\n\n    root /var/www/html;\n    index index.html index.htm;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"nginx-\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406",children:"Nginx \u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406"}),"\n",(0,l.jsx)(e.p,{children:"\u53CD\u5411\u4EE3\u7406\u529F\u80FD\u5141\u8BB8 Nginx \u5C06\u5BA2\u6237\u7AEF\u8BF7\u6C42\u8F6C\u53D1\u5230\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u5982 Node.js \u6216 Apache\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u914D\u7F6E\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:"server {\n    listen 80;\n    server_name api.example.com;\n\n    location / {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u6B64\u914D\u7F6E\u5C06",(0,l.jsx)(e.code,{children:"api.example.com"}),"\u7684\u8BF7\u6C42\u8F6C\u53D1\u5230\u672C\u5730\u7684 3000 \u7AEF\u53E3\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"nginx-\u4F5C\u4E3A\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668",children:"Nginx \u4F5C\u4E3A\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668"}),"\n",(0,l.jsx)(e.p,{children:"Nginx \u5728\u5904\u7406\u9759\u6001\u6587\u4EF6\u65B9\u9762\u8868\u73B0\u4F18\u5F02\u3002\u4EE5\u4E0B\u914D\u7F6E\u5C55\u793A\u4E86\u5982\u4F55\u914D\u7F6E Nginx \u4EE5\u63D0\u4F9B\u9759\u6001\u6587\u4EF6\u670D\u52A1\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:"server {\n    listen 80;\n    server_name static.example.com;\n\n    root /var/www/static;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5C06",(0,l.jsx)(e.code,{children:"static.example.com"}),"\u7684\u8BF7\u6C42\u6307\u5411",(0,l.jsx)(e.code,{children:"/var/www/static"}),"\u76EE\u5F55\uFF0C\u786E\u4FDD\u9759\u6001\u8D44\u6E90\u80FD\u591F\u5FEB\u901F\u54CD\u5E94\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5E38\u89C1\u7684-nginx-\u547D\u4EE4",children:"\u5E38\u89C1\u7684 Nginx \u547D\u4EE4"}),"\n",(0,l.jsx)(e.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u7528\u7684 Nginx \u7BA1\u7406\u547D\u4EE4\uFF1A"}),"\n",(0,l.jsx)(e.p,{children:"\u542F\u52A8 Nginx\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo systemctl start nginx\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u505C\u6B62 Nginx\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo systemctl stop nginx\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u91CD\u542F Nginx\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo systemctl restart nginx\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo systemctl reload nginx\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u6709\u8BEF\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo nginx -t\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u65E5\u5FD7\u7BA1\u7406",children:"\u65E5\u5FD7\u7BA1\u7406"}),"\n",(0,l.jsxs)(e.p,{children:["Nginx \u9ED8\u8BA4\u8BB0\u5F55\u8BBF\u95EE\u65E5\u5FD7\u548C\u9519\u8BEF\u65E5\u5FD7\u3002\u8BBF\u95EE\u65E5\u5FD7\u4F4D\u4E8E",(0,l.jsx)(e.code,{children:"/var/log/nginx/access.log"}),"\uFF0C\u9519\u8BEF\u65E5\u5FD7\u4F4D\u4E8E",(0,l.jsx)(e.code,{children:"/var/log/nginx/error.log"}),"\u3002\u5408\u7406\u914D\u7F6E\u65E5\u5FD7\u683C\u5F0F\u548C\u65E5\u5FD7\u8F6E\u8F6C\u6709\u52A9\u4E8E\u7EF4\u62A4\u548C\u76D1\u63A7\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F",children:"\u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F"}),"\n",(0,l.jsx)(e.p,{children:"\u53EF\u4EE5\u5728 HTTP \u5757\u4E2D\u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:'log_format custom \'$remote_addr - $remote_user [$time_local] "$request" \'\n                  \'$status $body_bytes_sent "$http_referer" \'\n                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n\naccess_log /var/log/nginx/custom_access.log custom;\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u5B89\u5168\u6027\u8BBE\u7F6E",children:"\u5B89\u5168\u6027\u8BBE\u7F6E"}),"\n",(0,l.jsx)(e.h3,{id:"\u4F7F\u7528-https",children:"\u4F7F\u7528 HTTPS"}),"\n",(0,l.jsx)(e.p,{children:"\u914D\u7F6E HTTPS \u9700\u8981 SSL \u8BC1\u4E66\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7B80\u5355\u7684 HTTPS \u670D\u52A1\u5668\u5757\u914D\u7F6E\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:"server {\n    listen 443 ssl;\n    server_name secure.example.com;\n\n    ssl_certificate /etc/ssl/certs/example.crt;\n    ssl_certificate_key /etc/ssl/private/example.key;\n\n    root /var/www/secure;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u786E\u4FDD SSL \u8BC1\u4E66\u548C\u79C1\u94A5\u8DEF\u5F84\u6B63\u786E\uFF0C\u5E76\u4E14\u6587\u4EF6\u6743\u9650\u5B89\u5168\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u9632\u6B62-ddos-\u653B\u51FB",children:"\u9632\u6B62 DDoS \u653B\u51FB"}),"\n",(0,l.jsx)(e.p,{children:"\u53EF\u4EE5\u901A\u8FC7\u9650\u5236\u8FDE\u63A5\u6570\u548C\u8BF7\u6C42\u901F\u7387\u6765\u9632\u6B62 DDoS \u653B\u51FB\u3002\u4F8B\u5982\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:"http {\n    limit_conn_zone $binary_remote_addr zone=addr:10m;\n    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;\n\n    server {\n        listen 80;\n        server_name example.com;\n\n        location / {\n            limit_conn addr 10;\n            limit_req zone=one burst=5;\n            proxy_pass http://localhost:3000;\n        }\n    }\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6B64\u914D\u7F6E\u9650\u5236\u6BCF\u4E2A IP \u5730\u5740\u7684\u5E76\u53D1\u8FDE\u63A5\u6570\u548C\u8BF7\u6C42\u901F\u7387\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u6027\u80FD\u4F18\u5316",children:"\u6027\u80FD\u4F18\u5316"}),"\n",(0,l.jsx)(e.h3,{id:"\u542F\u7528-gzip-\u538B\u7F29",children:"\u542F\u7528 Gzip \u538B\u7F29"}),"\n",(0,l.jsx)(e.p,{children:"\u542F\u7528 Gzip \u53EF\u4EE5\u51CF\u5C11\u4F20\u8F93\u6570\u636E\u91CF\uFF0C\u63D0\u9AD8\u52A0\u8F7D\u901F\u5EA6\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:"http {\n    gzip on;\n    gzip_types text/plain application/json application/javascript text/css;\n    gzip_min_length 256;\n}\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u914D\u7F6E\u7F13\u5B58",children:"\u914D\u7F6E\u7F13\u5B58"}),"\n",(0,l.jsx)(e.p,{children:"\u5229\u7528 Nginx \u7684\u7F13\u5B58\u529F\u80FD\uFF0C\u53EF\u4EE5\u663E\u8457\u63D0\u9AD8\u6027\u80FD\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-nginx",children:"http {\n    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;\n\n    server {\n        listen 80;\n        server_name cache.example.com;\n\n        location / {\n            proxy_cache my_cache;\n            proxy_pass http://backend;\n        }\n    }\n}\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u53C2\u8003\u94FE\u63A5",children:"\u53C2\u8003\u94FE\u63A5"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"http://nginx.org/en/docs/",children:"Nginx \u5B98\u65B9\u6587\u6863"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.nginx.com/resources/wiki/start/topics/examples/full/",children:"Nginx \u914D\u7F6E\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.digitalocean.com/community/tutorials/optimizing-nginx-performance",children:"\u5982\u4F55\u4F18\u5316 Nginx \u6027\u80FD"})}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6CE8\u610F\uFF1A\u5728\u8FDB\u884C\u914D\u7F6E\u4FEE\u6539\u540E\uFF0C\u52A1\u5FC5\u4F7F\u7528",(0,l.jsx)(e.code,{children:"nginx -t"}),"\u547D\u4EE4\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u7684\u6B63\u786E\u6027\u3002"]})]})}function o(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(x,{...n})}):x(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return c}});var s=i(67294);let l={},r=s.createContext(l);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);