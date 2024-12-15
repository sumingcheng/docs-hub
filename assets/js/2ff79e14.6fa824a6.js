"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["62426"],{24090:function(e,n,i){i.r(n),i.d(n,{default:()=>x,frontMatter:()=>c,metadata:()=>l,assets:()=>d,toc:()=>t,contentTitle:()=>a});var l=JSON.parse('{"id":"Backend/Nginx/Nginx\u5B89\u5168\u4E0E\u6027\u80FD\u4F18\u5316","title":"Nginx \u5B89\u5168\u4E0E\u6027\u80FD\u4F18\u5316","description":"\u5B89\u5168\u6027\u6700\u4F73\u5B9E\u8DF5","source":"@site/docs/Backend/Nginx/30.Nginx\u5B89\u5168\u4E0E\u6027\u80FD\u4F18\u5316.md","sourceDirName":"Backend/Nginx","slug":"/Backend/Nginx/Nginx\u5B89\u5168\u4E0E\u6027\u80FD\u4F18\u5316","permalink":"/docs-hub/Backend/Nginx/Nginx\u5B89\u5168\u4E0E\u6027\u80FD\u4F18\u5316","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Nginx/30.Nginx\u5B89\u5168\u4E0E\u6027\u80FD\u4F18\u5316.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":30,"frontMatter":{},"sidebar":"nginxSidebar","previous":{"title":"Nginx \u8D1F\u8F7D\u5747\u8861\u914D\u7F6E","permalink":"/docs-hub/Backend/Nginx/Nginx\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E"},"next":{"title":"Nginx \u9AD8\u53EF\u7528\u90E8\u7F72","permalink":"/docs-hub/Backend/Nginx/Nginx\u9AD8\u53EF\u7528\u90E8\u7F72"}}'),r=i("85893"),s=i("50065");let c={},a="Nginx \u5B89\u5168\u4E0E\u6027\u80FD\u4F18\u5316",d={},t=[{value:"\u5B89\u5168\u6027\u6700\u4F73\u5B9E\u8DF5",id:"\u5B89\u5168\u6027\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u66F4\u65B0 Nginx",id:"\u66F4\u65B0-nginx",level:3},{value:"\u4EE5\u975E root \u7528\u6237\u8FD0\u884C Nginx",id:"\u4EE5\u975E-root-\u7528\u6237\u8FD0\u884C-nginx",level:3},{value:"\u9650\u5236\u8BF7\u6C42\u5927\u5C0F",id:"\u9650\u5236\u8BF7\u6C42\u5927\u5C0F",level:3},{value:"\u9690\u85CF Nginx \u7248\u672C\u4FE1\u606F",id:"\u9690\u85CF-nginx-\u7248\u672C\u4FE1\u606F",level:3},{value:"\u4F7F\u7528 SSL/TLS",id:"\u4F7F\u7528-ssltls",level:3},{value:"\u5B9E\u65BD\u8BBF\u95EE\u63A7\u5236",id:"\u5B9E\u65BD\u8BBF\u95EE\u63A7\u5236",level:3},{value:"\u9632\u6B62 DDoS \u653B\u51FB",id:"\u9632\u6B62-ddos-\u653B\u51FB",level:3},{value:"\u4FDD\u62A4\u914D\u7F6E\u6587\u4EF6",id:"\u4FDD\u62A4\u914D\u7F6E\u6587\u4EF6",level:3},{value:"\u6027\u80FD\u4F18\u5316\u7B56\u7565",id:"\u6027\u80FD\u4F18\u5316\u7B56\u7565",level:2},{value:"\u542F\u7528\u7F13\u5B58",id:"\u542F\u7528\u7F13\u5B58",level:3},{value:"\u542F\u7528 Gzip \u538B\u7F29",id:"\u542F\u7528-gzip-\u538B\u7F29",level:3},{value:"\u4F18\u5316\u5DE5\u4F5C\u8FDB\u7A0B",id:"\u4F18\u5316\u5DE5\u4F5C\u8FDB\u7A0B",level:3},{value:"\u8C03\u6574 Keepalive \u8BBE\u7F6E",id:"\u8C03\u6574-keepalive-\u8BBE\u7F6E",level:3},{value:"\u4F18\u5316\u7F13\u51B2\u533A\u5927\u5C0F",id:"\u4F18\u5316\u7F13\u51B2\u533A\u5927\u5C0F",level:3},{value:"\u542F\u7528 HTTP/2",id:"\u542F\u7528-http2",level:3},{value:"\u4F7F\u7528 Brotli \u538B\u7F29",id:"\u4F7F\u7528-brotli-\u538B\u7F29",level:3},{value:"\u4F18\u5316\u9759\u6001\u6587\u4EF6\u670D\u52A1",id:"\u4F18\u5316\u9759\u6001\u6587\u4EF6\u670D\u52A1",level:3}];function o(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"nginx-\u5B89\u5168\u4E0E\u6027\u80FD\u4F18\u5316",children:"Nginx \u5B89\u5168\u4E0E\u6027\u80FD\u4F18\u5316"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5B89\u5168\u6027\u6700\u4F73\u5B9E\u8DF5",children:"\u5B89\u5168\u6027\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,r.jsx)(n.h3,{id:"\u66F4\u65B0-nginx",children:"\u66F4\u65B0 Nginx"}),"\n",(0,r.jsxs)(n.p,{children:["\u4FDD\u6301 Nginx \u7248\u672C\u6700\u65B0\u80FD\u591F\u786E\u4FDD\u60A8\u83B7\u5F97\u6700\u65B0\u7684\u5B89\u5168\u8865\u4E01\u548C\u529F\u80FD\u6539\u8FDB\u3002\u5B9A\u671F\u68C0\u67E5",(0,r.jsx)(n.a,{href:"http://nginx.org/en/download.html",children:"Nginx \u5B98\u65B9\u53D1\u5E03"}),"\u5E76\u4F7F\u7528\u5305\u7BA1\u7406\u5668\u66F4\u65B0\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt upgrade nginx\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4EE5\u975E-root-\u7528\u6237\u8FD0\u884C-nginx",children:"\u4EE5\u975E root \u7528\u6237\u8FD0\u884C Nginx"}),"\n",(0,r.jsx)(n.p,{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNginx \u4EE5 root \u7528\u6237\u542F\u52A8\uFF0C\u4F46\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4F1A\u5207\u6362\u5230\u6307\u5B9A\u7684\u975E root \u7528\u6237\u3002\u8FD9\u53EF\u4EE5\u964D\u4F4E\u6F5C\u5728\u7684\u5B89\u5168\u98CE\u9669\u3002\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u7528\u6237\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"user www-data;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u786E\u4FDD",(0,r.jsx)(n.code,{children:"www-data"}),"\u7528\u6237\u62E5\u6709\u9002\u5F53\u7684\u6743\u9650\u8BBF\u95EE\u5FC5\u8981\u7684\u76EE\u5F55\u548C\u6587\u4EF6\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9650\u5236\u8BF7\u6C42\u5927\u5C0F",children:"\u9650\u5236\u8BF7\u6C42\u5927\u5C0F"}),"\n",(0,r.jsx)(n.p,{children:"\u9650\u5236\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5927\u5C0F\u53EF\u4EE5\u9632\u6B62\u6076\u610F\u7528\u6237\u53D1\u9001\u8FC7\u5927\u7684\u8BF7\u6C42\uFF0C\u6D88\u8017\u670D\u52A1\u5668\u8D44\u6E90\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    client_max_body_size 10M;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6B64\u914D\u7F6E\u5C06\u6700\u5927\u8BF7\u6C42\u4F53\u9650\u5236\u4E3A 10MB\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u9690\u85CF-nginx-\u7248\u672C\u4FE1\u606F",children:"\u9690\u85CF Nginx \u7248\u672C\u4FE1\u606F"}),"\n",(0,r.jsx)(n.p,{children:"\u9690\u85CF Nginx \u7684\u7248\u672C\u4FE1\u606F\u53EF\u4EE5\u51CF\u5C11\u88AB\u653B\u51FB\u8005\u5229\u7528\u5DF2\u77E5\u6F0F\u6D1E\u7684\u98CE\u9669\u3002\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    server_tokens off;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4F7F\u7528-ssltls",children:"\u4F7F\u7528 SSL/TLS"}),"\n",(0,r.jsx)(n.p,{children:"\u542F\u7528 SSL/TLS \u52A0\u5BC6\u901A\u4FE1\uFF0C\u4FDD\u62A4\u6570\u636E\u4F20\u8F93\u7684\u5B89\u5168\u3002\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"server {\n    listen 443 ssl;\n    server_name secure.example.com;\n\n    ssl_certificate /etc/ssl/certs/example.crt;\n    ssl_certificate_key /etc/ssl/private/example.key;\n\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;\n    ssl_prefer_server_ciphers off;\n\n    root /var/www/secure;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u786E\u4FDD\u4F7F\u7528\u5F3A\u52A0\u5BC6\u534F\u8BAE\u548C\u5BC6\u7801\u5957\u4EF6\uFF0C\u907F\u514D\u4F7F\u7528\u8FC7\u65F6\u7684\u534F\u8BAE\u5982 TLSv1 \u6216 SSL\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5B9E\u65BD\u8BBF\u95EE\u63A7\u5236",children:"\u5B9E\u65BD\u8BBF\u95EE\u63A7\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7 IP \u767D\u540D\u5355\u6216\u9ED1\u540D\u5355\u9650\u5236\u5BF9\u670D\u52A1\u5668\u7684\u8BBF\u95EE\u3002\u4F8B\u5982\uFF0C\u4EC5\u5141\u8BB8\u7279\u5B9A IP \u8BBF\u95EE\u7BA1\u7406\u9875\u9762\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"location /admin {\n    allow 192.168.1.0/24;\n    deny all;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u9632\u6B62-ddos-\u653B\u51FB",children:"\u9632\u6B62 DDoS \u653B\u51FB"}),"\n",(0,r.jsx)(n.p,{children:"\u9650\u5236\u6BCF\u4E2A IP \u7684\u8FDE\u63A5\u6570\u548C\u8BF7\u6C42\u901F\u7387\uFF0C\u51CF\u5C11 DDoS \u653B\u51FB\u7684\u5F71\u54CD\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    limit_conn_zone $binary_remote_addr zone=addr:10m;\n    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;\n\n    server {\n        listen 80;\n        server_name example.com;\n\n        location / {\n            limit_conn addr 10;\n            limit_req zone=one burst=5;\n            proxy_pass http://backend;\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4FDD\u62A4\u914D\u7F6E\u6587\u4EF6",children:"\u4FDD\u62A4\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u786E\u4FDD Nginx \u914D\u7F6E\u6587\u4EF6\u7684\u6743\u9650\u6B63\u786E\uFF0C\u9632\u6B62\u672A\u6388\u6743\u7684\u8BBF\u95EE\u6216\u4FEE\u6539\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo chown root:root /etc/nginx/nginx.conf\nsudo chmod 644 /etc/nginx/nginx.conf\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6027\u80FD\u4F18\u5316\u7B56\u7565",children:"\u6027\u80FD\u4F18\u5316\u7B56\u7565"}),"\n",(0,r.jsx)(n.h3,{id:"\u542F\u7528\u7F13\u5B58",children:"\u542F\u7528\u7F13\u5B58"}),"\n",(0,r.jsx)(n.p,{children:"\u914D\u7F6E Nginx \u7F13\u5B58\u53EF\u4EE5\u51CF\u5C11\u540E\u7AEF\u670D\u52A1\u5668\u7684\u8D1F\u8F7D\uFF0C\u63D0\u9AD8\u54CD\u5E94\u901F\u5EA6\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;\n\n    upstream backend {\n        server backend1.example.com:8080;\n        server backend2.example.com:8080;\n        server backend3.example.com:8080;\n    }\n\n    server {\n        listen 80;\n        server_name example.com;\n\n        location / {\n            proxy_cache my_cache;\n            proxy_pass http://backend;\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u542F\u7528-gzip-\u538B\u7F29",children:"\u542F\u7528 Gzip \u538B\u7F29"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7 Gzip \u538B\u7F29\u51CF\u5C11\u4F20\u8F93\u6570\u636E\u91CF\uFF0C\u52A0\u5FEB\u9875\u9762\u52A0\u8F7D\u901F\u5EA6\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    gzip on;\n    gzip_types text/plain application/json application/javascript text/css;\n    gzip_min_length 256;\n    gzip_proxied any;\n    gzip_vary on;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4F18\u5316\u5DE5\u4F5C\u8FDB\u7A0B",children:"\u4F18\u5316\u5DE5\u4F5C\u8FDB\u7A0B"}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636E\u670D\u52A1\u5668\u7684 CPU \u6838\u5FC3\u6570\u914D\u7F6E Nginx \u7684\u5DE5\u4F5C\u8FDB\u7A0B\u6570\uFF0C\u63D0\u5347\u5E76\u53D1\u5904\u7406\u80FD\u529B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"worker_processes auto;\n\nevents {\n    worker_connections 1024;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"auto"}),"\u9009\u9879\u4F1A\u81EA\u52A8\u68C0\u6D4B CPU \u6838\u5FC3\u6570\uFF0C\u5408\u7406\u5206\u914D\u5DE5\u4F5C\u8FDB\u7A0B\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8C03\u6574-keepalive-\u8BBE\u7F6E",children:"\u8C03\u6574 Keepalive \u8BBE\u7F6E"}),"\n",(0,r.jsx)(n.p,{children:"\u4F18\u5316 Keepalive \u8BBE\u7F6E\u53EF\u4EE5\u51CF\u5C11\u8FDE\u63A5\u5EFA\u7ACB\u7684\u5F00\u9500\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    keepalive_timeout 65;\n    keepalive_requests 100;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"keepalive_timeout"}),"\u8BBE\u7F6E\u4FDD\u6301\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C",(0,r.jsx)(n.code,{children:"keepalive_requests"}),"\u9650\u5236\u6BCF\u4E2A\u8FDE\u63A5\u7684\u8BF7\u6C42\u6570\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4F18\u5316\u7F13\u51B2\u533A\u5927\u5C0F",children:"\u4F18\u5316\u7F13\u51B2\u533A\u5927\u5C0F"}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636E\u5E94\u7528\u9700\u6C42\u8C03\u6574\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u907F\u514D\u5185\u5B58\u6D6A\u8D39\u6216\u6027\u80FD\u74F6\u9888\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    client_body_buffer_size 16k;\n    client_header_buffer_size 1k;\n    large_client_header_buffers 2 1k;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u542F\u7528-http2",children:"\u542F\u7528 HTTP/2"}),"\n",(0,r.jsx)(n.p,{children:"HTTP/2 \u53EF\u4EE5\u663E\u8457\u63D0\u9AD8\u7F51\u9875\u52A0\u8F7D\u901F\u5EA6\uFF0C\u7279\u522B\u662F\u5728\u5904\u7406\u591A\u4E2A\u5E76\u53D1\u8BF7\u6C42\u65F6\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"server {\n    listen 443 ssl http2;\n    server_name example.com;\n\n    ssl_certificate /etc/ssl/certs/example.crt;\n    ssl_certificate_key /etc/ssl/private/example.key;\n\n    root /var/www/html;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u786E\u4FDD\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u90FD\u652F\u6301 HTTP/2\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4F7F\u7528-brotli-\u538B\u7F29",children:"\u4F7F\u7528 Brotli \u538B\u7F29"}),"\n",(0,r.jsx)(n.p,{children:"Brotli \u662F\u4E00\u79CD\u66F4\u9AD8\u6548\u7684\u538B\u7F29\u7B97\u6CD5\uFF0C\u80FD\u591F\u8FDB\u4E00\u6B65\u51CF\u5C11\u4F20\u8F93\u6570\u636E\u91CF\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    brotli on;\n    brotli_types text/plain application/json application/javascript text/css;\n    brotli_comp_level 6;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u786E\u4FDD Nginx \u7F16\u8BD1\u65F6\u5305\u542B Brotli \u6A21\u5757\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4F18\u5316\u9759\u6001\u6587\u4EF6\u670D\u52A1",children:"\u4F18\u5316\u9759\u6001\u6587\u4EF6\u670D\u52A1"}),"\n",(0,r.jsx)(n.p,{children:"\u914D\u7F6E Nginx \u9AD8\u6548\u5730\u63D0\u4F9B\u9759\u6001\u6587\u4EF6\uFF0C\u51CF\u5C11\u670D\u52A1\u5668\u8D1F\u8F7D\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:'server {\n    listen 80;\n    server_name static.example.com;\n\n    root /var/www/static;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n        expires 30d;\n        add_header Cache-Control "public, no-transform";\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expires"}),"\u6307\u4EE4\u8BBE\u7F6E\u6D4F\u89C8\u5668\u7F13\u5B58\u65F6\u95F4\uFF0C",(0,r.jsx)(n.code,{children:"Cache-Control"}),"\u4F18\u5316\u7F13\u5B58\u7B56\u7565\u3002"]})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return c}});var l=i(67294);let r={},s=l.createContext(r);function c(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);