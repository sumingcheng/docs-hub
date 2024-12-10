"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[16558],{36966:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>t,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"Backend/Nginx/Nginx\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e","title":"Nginx \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e","description":"\u8d1f\u8f7d\u5747\u8861\u7b80\u4ecb","source":"@site/docs/Backend/Nginx/20.Nginx\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e.md","sourceDirName":"Backend/Nginx","slug":"/Backend/Nginx/Nginx\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e","permalink":"/docs-hub/docs/Backend/Nginx/Nginx\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Nginx/20.Nginx\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":20,"frontMatter":{},"sidebar":"nginxSidebar","previous":{"title":"Nginx \u57fa\u7840\u5165\u95e8","permalink":"/docs-hub/docs/Backend/Nginx/Nginx\u57fa\u7840\u5165\u95e8"},"next":{"title":"Nginx \u5b89\u5168\u4e0e\u6027\u80fd\u4f18\u5316","permalink":"/docs-hub/docs/Backend/Nginx/Nginx\u5b89\u5168\u4e0e\u6027\u80fd\u4f18\u5316"}}');var r=c(74848),i=c(28453);const a={},d="Nginx \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",l={},o=[{value:"\u8d1f\u8f7d\u5747\u8861\u7b80\u4ecb",id:"\u8d1f\u8f7d\u5747\u8861\u7b80\u4ecb",level:2},{value:"Nginx \u8d1f\u8f7d\u5747\u8861\u57fa\u672c\u914d\u7f6e",id:"nginx-\u8d1f\u8f7d\u5747\u8861\u57fa\u672c\u914d\u7f6e",level:2},{value:"\u5b9a\u4e49\u4e0a\u6e38\u670d\u52a1\u5668",id:"\u5b9a\u4e49\u4e0a\u6e38\u670d\u52a1\u5668",level:3},{value:"\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",id:"\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",level:3},{value:"\u8f6e\u8be2\uff08Round Robin\uff09",id:"\u8f6e\u8be2round-robin",level:4},{value:"\u6700\u5c11\u8fde\u63a5\uff08Least Connections\uff09",id:"\u6700\u5c11\u8fde\u63a5least-connections",level:4},{value:"IP \u54c8\u5e0c\uff08IP Hash\uff09",id:"ip-\u54c8\u5e0cip-hash",level:4},{value:"\u5065\u5eb7\u68c0\u67e5",id:"\u5065\u5eb7\u68c0\u67e5",level:2},{value:"\u4f1a\u8bdd\u4fdd\u6301",id:"\u4f1a\u8bdd\u4fdd\u6301",level:2},{value:"\u4f7f\u7528 IP \u54c8\u5e0c\u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301",id:"\u4f7f\u7528-ip-\u54c8\u5e0c\u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301",level:3},{value:"\u4f7f\u7528 Cookie \u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301",id:"\u4f7f\u7528-cookie-\u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301",level:3},{value:"SSL \u8d1f\u8f7d\u5747\u8861",id:"ssl-\u8d1f\u8f7d\u5747\u8861",level:2},{value:"\u6027\u80fd\u4f18\u5316",id:"\u6027\u80fd\u4f18\u5316",level:2},{value:"\u542f\u7528\u7f13\u5b58",id:"\u542f\u7528\u7f13\u5b58",level:3},{value:"\u542f\u7528 Gzip \u538b\u7f29",id:"\u542f\u7528-gzip-\u538b\u7f29",level:3}];function x(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"nginx-\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",children:"Nginx \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8d1f\u8f7d\u5747\u8861\u7b80\u4ecb",children:"\u8d1f\u8f7d\u5747\u8861\u7b80\u4ecb"}),"\n",(0,r.jsx)(n.p,{children:"\u8d1f\u8f7d\u5747\u8861\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u5e38\u7528\u7684\u4e00\u79cd\u6280\u672f\uff0c\u901a\u8fc7\u5c06\u5ba2\u6237\u7aef\u8bf7\u6c42\u5206\u914d\u5230\u591a\u53f0\u670d\u52a1\u5668\u4e0a\uff0c\u63d0\u9ad8\u7cfb\u7edf\u7684\u5e76\u53d1\u5904\u7406\u80fd\u529b\u548c\u53ef\u9760\u6027\u3002Nginx \u4f5c\u4e3a\u9ad8\u6027\u80fd\u7684\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u5185\u7f6e\u4e86\u591a\u79cd\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u80fd\u591f\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u5206\u914d\u6d41\u91cf\u3002\u7b14\u8005\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u4f7f\u7528 Nginx \u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\uff0c\u53d1\u73b0\u5176\u914d\u7f6e\u7b80\u4fbf\u4e14\u6027\u80fd\u5353\u8d8a\uff0c\u6781\u5927\u5730\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u54cd\u5e94\u901f\u5ea6\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"nginx-\u8d1f\u8f7d\u5747\u8861\u57fa\u672c\u914d\u7f6e",children:"Nginx \u8d1f\u8f7d\u5747\u8861\u57fa\u672c\u914d\u7f6e"}),"\n",(0,r.jsx)(n.h3,{id:"\u5b9a\u4e49\u4e0a\u6e38\u670d\u52a1\u5668",children:"\u5b9a\u4e49\u4e0a\u6e38\u670d\u52a1\u5668"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Nginx \u914d\u7f6e\u4e2d\uff0c\u9996\u5148\u9700\u8981\u5b9a\u4e49\u4e0a\u6e38\u670d\u52a1\u5668\u7ec4\uff0c\u8fd9\u4e9b\u670d\u52a1\u5668\u5c06\u5904\u7406\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002\u4e0a\u6e38\u670d\u52a1\u5668\u53ef\u4ee5\u4f7f\u7528\u57df\u540d\u6216 IP \u5730\u5740\uff0c\u5e76\u4e14\u53ef\u4ee5\u6307\u5b9a\u7aef\u53e3\u53f7\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    upstream backend {\n        server backend1.example.com:8080;\n        server backend2.example.com:8080;\n        server backend3.example.com:8080;\n    }\n\n    server {\n        listen 80;\n        server_name example.com;\n\n        location / {\n            proxy_pass http://backend;\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e0a\u8ff0\u914d\u7f6e\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"backend"}),"\u662f\u4e0a\u6e38\u670d\u52a1\u5668\u7ec4\u7684\u540d\u79f0\uff0c\u5305\u542b\u4e86\u4e09\u53f0\u540e\u7aef\u670d\u52a1\u5668\u3002",(0,r.jsx)(n.code,{children:"proxy_pass"}),"\u6307\u4ee4\u5c06\u5ba2\u6237\u7aef\u8bf7\u6c42\u8f6c\u53d1\u5230\u8fd9\u4e2a\u670d\u52a1\u5668\u7ec4\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",children:"\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"Nginx \u652f\u6301\u591a\u79cd\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff0c\u5e38\u89c1\u7684\u5305\u62ec\u8f6e\u8be2\uff08Round Robin\uff09\u3001\u6700\u5c11\u8fde\u63a5\uff08Least Connections\uff09\u548c IP \u54c8\u5e0c\uff08IP Hash\uff09\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u8f6e\u8be2round-robin",children:"\u8f6e\u8be2\uff08Round Robin\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u8f6e\u8be2\u662f Nginx \u7684\u9ed8\u8ba4\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff0c\u5b83\u6309\u987a\u5e8f\u5c06\u8bf7\u6c42\u4f9d\u6b21\u5206\u914d\u7ed9\u4e0a\u6e38\u670d\u52a1\u5668\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"upstream backend {\n    server backend1.example.com:8080;\n    server backend2.example.com:8080;\n    server backend3.example.com:8080;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u65e0\u9700\u989d\u5916\u914d\u7f6e\uff0cNginx \u4f1a\u81ea\u52a8\u4f7f\u7528\u8f6e\u8be2\u7b97\u6cd5\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u6700\u5c11\u8fde\u63a5least-connections",children:"\u6700\u5c11\u8fde\u63a5\uff08Least Connections\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u5c11\u8fde\u63a5\u7b97\u6cd5\u5c06\u8bf7\u6c42\u5206\u914d\u7ed9\u5f53\u524d\u8fde\u63a5\u6570\u6700\u5c11\u7684\u670d\u52a1\u5668\uff0c\u9002\u7528\u4e8e\u5904\u7406\u65f6\u95f4\u4e0d\u5747\u8861\u7684\u8bf7\u6c42\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"upstream backend {\n    least_conn;\n    server backend1.example.com:8080;\n    server backend2.example.com:8080;\n    server backend3.example.com:8080;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u5728",(0,r.jsx)(n.code,{children:"upstream"}),"\u5757\u4e2d\u6dfb\u52a0",(0,r.jsx)(n.code,{children:"least_conn"}),"\u6307\u4ee4\uff0c\u542f\u7528\u6700\u5c11\u8fde\u63a5\u7b97\u6cd5\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"ip-\u54c8\u5e0cip-hash",children:"IP \u54c8\u5e0c\uff08IP Hash\uff09"}),"\n",(0,r.jsx)(n.p,{children:"IP \u54c8\u5e0c\u7b97\u6cd5\u6839\u636e\u5ba2\u6237\u7aef\u7684 IP \u5730\u5740\u5c06\u8bf7\u6c42\u5206\u914d\u7ed9\u56fa\u5b9a\u7684\u670d\u52a1\u5668\uff0c\u6709\u52a9\u4e8e\u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"upstream backend {\n    ip_hash;\n    server backend1.example.com:8080;\n    server backend2.example.com:8080;\n    server backend3.example.com:8080;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6dfb\u52a0",(0,r.jsx)(n.code,{children:"ip_hash"}),"\u6307\u4ee4\u540e\uff0c\u76f8\u540c IP \u7684\u8bf7\u6c42\u5c06\u59cb\u7ec8\u5206\u914d\u7ed9\u540c\u4e00\u53f0\u670d\u52a1\u5668\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5065\u5eb7\u68c0\u67e5",children:"\u5065\u5eb7\u68c0\u67e5"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u786e\u4fdd\u8bf7\u6c42\u53ea\u88ab\u5206\u914d\u5230\u5065\u5eb7\u7684\u540e\u7aef\u670d\u52a1\u5668\uff0cNginx \u53ef\u4ee5\u914d\u7f6e\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\u3002\u901a\u8fc7\u5b9a\u671f\u68c0\u67e5\u670d\u52a1\u5668\u7684\u5065\u5eb7\u72b6\u6001\uff0c\u81ea\u52a8\u5c06\u6545\u969c\u670d\u52a1\u5668\u4ece\u8d1f\u8f7d\u5747\u8861\u6c60\u4e2d\u79fb\u9664\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    upstream backend {\n        server backend1.example.com:8080;\n        server backend2.example.com:8080;\n        server backend3.example.com:8080;\n\n        keepalive 32;\n    }\n\n    server {\n        listen 80;\n        server_name example.com;\n\n        location / {\n            proxy_pass http://backend;\n            proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6b64\u914d\u7f6e\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"proxy_next_upstream"}),"\u6307\u4ee4\u6307\u5b9a\u4e86\u5728\u9047\u5230\u9519\u8bef\u65f6\uff0cNginx \u5e94\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u4e0b\u4e00\u4e2a\u53ef\u7528\u7684\u670d\u52a1\u5668\u3002\u5bf9\u4e8e\u66f4\u9ad8\u7ea7\u7684\u5065\u5eb7\u68c0\u67e5\uff0c\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u6a21\u5757\u5982",(0,r.jsx)(n.code,{children:"ngx_http_healthcheck_module"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f1a\u8bdd\u4fdd\u6301",children:"\u4f1a\u8bdd\u4fdd\u6301"}),"\n",(0,r.jsx)(n.p,{children:"\u6709\u4e9b\u5e94\u7528\u9700\u8981\u786e\u4fdd\u540c\u4e00\u7528\u6237\u7684\u8bf7\u6c42\u603b\u662f\u7531\u540c\u4e00\u53f0\u670d\u52a1\u5668\u5904\u7406\uff0c\u8fd9\u79f0\u4e3a\u4f1a\u8bdd\u4fdd\u6301\u3002Nginx \u901a\u8fc7 IP \u54c8\u5e0c\u6216 Cookie \u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528-ip-\u54c8\u5e0c\u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301",children:"\u4f7f\u7528 IP \u54c8\u5e0c\u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u524d\u6240\u8ff0\uff0c\u914d\u7f6e",(0,r.jsx)(n.code,{children:"ip_hash"}),"\u5373\u53ef\u5b9e\u73b0\u57fa\u4e8e IP \u7684\u4f1a\u8bdd\u4fdd\u6301\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"upstream backend {\n    ip_hash;\n    server backend1.example.com:8080;\n    server backend2.example.com:8080;\n    server backend3.example.com:8080;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528-cookie-\u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301",children:"\u4f7f\u7528 Cookie \u5b9e\u73b0\u4f1a\u8bdd\u4fdd\u6301"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u8bbe\u7f6e Cookie\uff0cNginx \u53ef\u4ee5\u5c06\u8bf7\u6c42\u7ed1\u5b9a\u5230\u7279\u5b9a\u7684\u670d\u52a1\u5668\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"upstream backend {\n    server backend1.example.com:8080;\n    server backend2.example.com:8080;\n    server backend3.example.com:8080;\n\n    sticky cookie srv_id expires=1h path=/;\n}\n\nserver {\n    listen 80;\n    server_name example.com;\n\n    location / {\n        proxy_pass http://backend;\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6b64\u914d\u7f6e\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"sticky"}),"\u6307\u4ee4\u4f7f\u7528\u540d\u4e3a",(0,r.jsx)(n.code,{children:"srv_id"}),"\u7684 Cookie \u6765\u4fdd\u6301\u4f1a\u8bdd\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"ssl-\u8d1f\u8f7d\u5747\u8861",children:"SSL \u8d1f\u8f7d\u5747\u8861"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5904\u7406 HTTPS \u8bf7\u6c42\u65f6\uff0cNginx \u53ef\u4ee5\u4f5c\u4e3a SSL \u7ec8\u7aef\uff0c\u5c06 SSL \u8fde\u63a5\u7ec8\u6b62\u5728 Nginx \u5c42\uff0c\u7136\u540e\u5c06\u89e3\u5bc6\u540e\u7684\u8bf7\u6c42\u8f6c\u53d1\u5230\u540e\u7aef\u670d\u52a1\u5668\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    upstream backend {\n        server backend1.example.com:8080;\n        server backend2.example.com:8080;\n        server backend3.example.com:8080;\n    }\n\n    server {\n        listen 443 ssl;\n        server_name secure.example.com;\n\n        ssl_certificate /etc/ssl/certs/example.crt;\n        ssl_certificate_key /etc/ssl/private/example.key;\n\n        location / {\n            proxy_pass http://backend;\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u786e\u4fdd SSL \u8bc1\u4e66\u548c\u79c1\u94a5\u8def\u5f84\u6b63\u786e\uff0c\u5e76\u4e14\u914d\u7f6e\u4e86\u5fc5\u8981\u7684 SSL \u53c2\u6570\u4ee5\u4fdd\u8bc1\u5b89\u5168\u6027\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6027\u80fd\u4f18\u5316",children:"\u6027\u80fd\u4f18\u5316"}),"\n",(0,r.jsx)(n.h3,{id:"\u542f\u7528\u7f13\u5b58",children:"\u542f\u7528\u7f13\u5b58"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u5728 Nginx \u4e2d\u914d\u7f6e\u7f13\u5b58\uff0c\u53ef\u4ee5\u51cf\u5c11\u540e\u7aef\u670d\u52a1\u5668\u7684\u8d1f\u8f7d\uff0c\u63d0\u9ad8\u54cd\u5e94\u901f\u5ea6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;\n\n    upstream backend {\n        server backend1.example.com:8080;\n        server backend2.example.com:8080;\n        server backend3.example.com:8080;\n    }\n\n    server {\n        listen 80;\n        server_name example.com;\n\n        location / {\n            proxy_cache my_cache;\n            proxy_pass http://backend;\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e",(0,r.jsx)(n.code,{children:"proxy_cache_path"}),"\u6307\u5b9a\u7f13\u5b58\u76ee\u5f55\u548c\u76f8\u5173\u53c2\u6570\uff0c",(0,r.jsx)(n.code,{children:"proxy_cache"}),"\u6307\u4ee4\u542f\u7528\u7f13\u5b58\u529f\u80fd\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u542f\u7528-gzip-\u538b\u7f29",children:"\u542f\u7528 Gzip \u538b\u7f29"}),"\n",(0,r.jsx)(n.p,{children:"\u542f\u7528 Gzip \u538b\u7f29\u53ef\u4ee5\u51cf\u5c11\u4f20\u8f93\u7684\u6570\u636e\u91cf\uff0c\u63d0\u9ad8\u52a0\u8f7d\u901f\u5ea6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nginx",children:"http {\n    gzip on;\n    gzip_types text/plain application/json application/javascript text/css;\n    gzip_min_length 256;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"http"}),"\u5757\u4e2d\u6dfb\u52a0 Gzip \u914d\u7f6e\uff0c\u4ee5\u538b\u7f29\u7279\u5b9a\u7c7b\u578b\u7684\u6587\u4ef6\u3002"]})]})}function t(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>a,x:()=>d});var s=c(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);