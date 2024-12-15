"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["67293"],{85849:function(e,n,d){d.r(n),d.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>r,assets:()=>h,toc:()=>x,contentTitle:()=>l});var r=JSON.parse('{"id":"Backend/Docker/Docker-\u57FA\u7840\u547D\u4EE4","title":"Docker \u5E38\u7528\u547D\u4EE4\u8BE6\u89E3","description":"\u5BB9\u5668\u7BA1\u7406\u547D\u4EE4","source":"@site/docs/Backend/Docker/10.Docker-\u57FA\u7840\u547D\u4EE4.md","sourceDirName":"Backend/Docker","slug":"/Backend/Docker/Docker-\u57FA\u7840\u547D\u4EE4","permalink":"/docs-hub/Backend/Docker/Docker-\u57FA\u7840\u547D\u4EE4","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Docker/10.Docker-\u57FA\u7840\u547D\u4EE4.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":10,"frontMatter":{},"sidebar":"dockerSidebar","next":{"title":"Docker \u548C\u76F8\u5173\u5DE5\u5177\u7684\u5B89\u88C5\u4E0E\u4F7F\u7528","permalink":"/docs-hub/Backend/Docker/Docker-\u5B89\u88C5\u4E0E\u4F7F\u7528"}}'),c=d("85893"),s=d("50065");let i={},l="Docker \u5E38\u7528\u547D\u4EE4\u8BE6\u89E3",h={},x=[{value:"\u5BB9\u5668\u7BA1\u7406\u547D\u4EE4",id:"\u5BB9\u5668\u7BA1\u7406\u547D\u4EE4",level:2},{value:"\u955C\u50CF\u7BA1\u7406\u547D\u4EE4",id:"\u955C\u50CF\u7BA1\u7406\u547D\u4EE4",level:2},{value:"\u7F51\u7EDC\u7BA1\u7406\u547D\u4EE4",id:"\u7F51\u7EDC\u7BA1\u7406\u547D\u4EE4",level:2},{value:"\u6570\u636E\u5377\u7BA1\u7406\u547D\u4EE4",id:"\u6570\u636E\u5377\u7BA1\u7406\u547D\u4EE4",level:2},{value:"\u5BB9\u5668\u76D1\u63A7\u548C\u65E5\u5FD7\u547D\u4EE4",id:"\u5BB9\u5668\u76D1\u63A7\u548C\u65E5\u5FD7\u547D\u4EE4",level:2},{value:"\u6267\u884C\u547D\u4EE4",id:"\u6267\u884C\u547D\u4EE4",level:2},{value:"\u5E38\u7528\u8865\u5145\u547D\u4EE4",id:"\u5E38\u7528\u8865\u5145\u547D\u4EE4",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"docker-\u5E38\u7528\u547D\u4EE4\u8BE6\u89E3",children:"Docker \u5E38\u7528\u547D\u4EE4\u8BE6\u89E3"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5BB9\u5668\u7BA1\u7406\u547D\u4EE4",children:"\u5BB9\u5668\u7BA1\u7406\u547D\u4EE4"}),"\n",(0,c.jsx)(n.p,{children:"\u5BB9\u5668\u662F Docker \u7684\u6838\u5FC3\u7EC4\u4EF6\uFF0C\u6211\u5C06\u5728\u6B64\u8BE6\u89E3\u5E38\u7528\u7684\u5BB9\u5668\u7BA1\u7406\u547D\u4EE4\u3002"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u529F\u80FD"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u4EE3\u7801"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u521B\u5EFA\u5E76\u542F\u52A8 Nginx \u5BB9\u5668"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker run -d --name my-nginx -p 80:80 nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u505C\u6B62\u5BB9\u5668"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker stop my-nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u542F\u52A8\u5BB9\u5668"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker start my-nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u91CD\u542F\u5BB9\u5668"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker restart my-nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5220\u9664\u5BB9\u5668"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker rm my-nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5217\u51FA\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker ps"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5217\u51FA\u6240\u6709\u5BB9\u5668\uFF08\u5305\u62EC\u5DF2\u505C\u6B62\u7684\uFF09"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker ps -a"})})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker run"})," \u547D\u4EE4\u7528\u4E8E\u521B\u5EFA\u5E76\u542F\u52A8\u5BB9\u5668\u3002",(0,c.jsx)(n.code,{children:"-d"})," \u8868\u793A\u540E\u53F0\u8FD0\u884C\uFF0C",(0,c.jsx)(n.code,{children:"--name"})," \u6307\u5B9A\u5BB9\u5668\u540D\u79F0\uFF0C",(0,c.jsx)(n.code,{children:"-p"})," \u6620\u5C04\u4E3B\u673A\u7AEF\u53E3\u5230\u5BB9\u5668\u7AEF\u53E3\u3002\u5728\u8FD0\u884C\u5BB9\u5668\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"-v"})," \u53C2\u6570\u6302\u8F7D\u6570\u636E\u5377\uFF0C\u4F8B\u5982 ",(0,c.jsx)(n.code,{children:"-v sumingcheng:/data"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker stop"}),"\u3001",(0,c.jsx)(n.code,{children:"docker start"})," \u548C ",(0,c.jsx)(n.code,{children:"docker restart"})," \u547D\u4EE4\u5206\u522B\u7528\u4E8E\u505C\u6B62\u3001\u542F\u52A8\u548C\u91CD\u542F\u5BB9\u5668\u3002\u82E5\u9700\u8981\u5F3A\u5236\u505C\u6B62\u5BB9\u5668\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker kill"})," \u547D\u4EE4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker rm"})," \u547D\u4EE4\u7528\u4E8E\u5220\u9664\u5BB9\u5668\u3002\u5220\u9664\u524D\u9700\u5148\u505C\u6B62\u5BB9\u5668\uFF0C\u6216\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker rm -f"})," \u5F3A\u5236\u5220\u9664\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker ps"})," \u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\uFF0C\u6DFB\u52A0 ",(0,c.jsx)(n.code,{children:"-a"})," \u53C2\u6570\u53EF\u663E\u793A\u6240\u6709\u5BB9\u5668\uFF0C\u5305\u62EC\u5DF2\u505C\u6B62\u7684\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker logs my-nginx"})," \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7\uFF0C\u6DFB\u52A0 ",(0,c.jsx)(n.code,{children:"-f"})," \u53C2\u6570\u53EF\u4EE5\u5B9E\u65F6\u8DDF\u8E2A\u65E5\u5FD7\u8F93\u51FA\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"docker exec -it my-nginx /bin/bash"})," \u547D\u4EE4\u53EF\u4EE5\u8FDB\u5165\u5BB9\u5668\u7684\u4EA4\u4E92\u5F0F\u7EC8\u7AEF\uFF0C\u8FDB\u884C\u5185\u90E8\u64CD\u4F5C\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker commit my-nginx my-nginx-image"})," \u547D\u4EE4\u53EF\u4EE5\u5C06\u5BB9\u5668\u7684\u5F53\u524D\u72B6\u6001\u4FDD\u5B58\u4E3A\u65B0\u7684\u955C\u50CF\uFF0C\u4FBF\u4E8E\u540E\u7EED\u4F7F\u7528\u6216\u5206\u53D1\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8FD0\u884C\u5BB9\u5668\u65F6\uFF0C\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"--rm"})," \u53C2\u6570\u53EF\u4EE5\u5728\u5BB9\u5668\u9000\u51FA\u540E\u81EA\u52A8\u5220\u9664\u5BB9\u5668\uFF0C\u8282\u7701\u7CFB\u7EDF\u8D44\u6E90\u3002\u5B9A\u671F\u6E05\u7406\u4E0D\u518D\u4F7F\u7528\u7684\u5BB9\u5668\uFF0C\u4FDD\u6301\u7CFB\u7EDF\u7684\u6574\u6D01\u548C\u9AD8\u6548\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u955C\u50CF\u7BA1\u7406\u547D\u4EE4",children:"\u955C\u50CF\u7BA1\u7406\u547D\u4EE4"}),"\n",(0,c.jsx)(n.p,{children:"\u955C\u50CF\u662F\u521B\u5EFA\u5BB9\u5668\u7684\u57FA\u7840\uFF0C\u6211\u5C06\u4ECB\u7ECD\u5E38\u7528\u7684\u955C\u50CF\u7BA1\u7406\u547D\u4EE4\u3002"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u529F\u80FD"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u4EE3\u7801"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u62C9\u53D6 Nginx \u955C\u50CF"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker pull nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5217\u51FA\u6240\u6709\u672C\u5730\u955C\u50CF"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker images"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5220\u9664\u955C\u50CF"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker rmi nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u6784\u5EFA\u955C\u50CF"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker build -t my-nginx-image ."})})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker pull"})," \u547D\u4EE4\u7528\u4E8E\u4ECE Docker Hub \u6216\u79C1\u6709\u4ED3\u5E93\u62C9\u53D6\u955C\u50CF\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker images"})," \u547D\u4EE4\u5217\u51FA\u672C\u5730\u6240\u6709\u955C\u50CF\uFF0C\u5305\u62EC\u4ED3\u5E93\u540D\u3001\u6807\u7B7E\u548C\u5927\u5C0F\u7B49\u4FE1\u606F\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker rmi"})," \u547D\u4EE4\u7528\u4E8E\u5220\u9664\u672C\u5730\u955C\u50CF\u3002\u82E5\u955C\u50CF\u88AB\u5BB9\u5668\u4F7F\u7528\uFF0C\u9700\u5148\u5220\u9664\u76F8\u5173\u5BB9\u5668\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker build"})," \u547D\u4EE4\u6839\u636E ",(0,c.jsx)(n.code,{children:"Dockerfile"})," \u6784\u5EFA\u955C\u50CF\uFF0C",(0,c.jsx)(n.code,{children:"-t"})," \u53C2\u6570\u4E3A\u955C\u50CF\u6307\u5B9A\u540D\u79F0\u548C\u6807\u7B7E\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7ED9\u955C\u50CF\u6253\u6807\u7B7E\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker tag my-nginx-image my-nginx-image:v1.0"}),"\uFF0C\u4FBF\u4E8E\u7248\u672C\u7BA1\u7406\u3002\u67E5\u770B\u955C\u50CF\u5386\u53F2\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker history my-nginx-image"}),"\uFF0C\u4E86\u89E3\u955C\u50CF\u7684\u6784\u5EFA\u5386\u53F2\u5C42\u6B21\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6784\u5EFA\u955C\u50CF\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u8F7B\u91CF\u7EA7\u7684\u57FA\u7840\u955C\u50CF\uFF0C\u5982 ",(0,c.jsx)(n.code,{children:"alpine"}),"\uFF0C\u4EE5\u51CF\u5C0F\u955C\u50CF\u5927\u5C0F\u3002\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:".dockerignore"})," \u6587\u4EF6\u5FFD\u7565\u4E0D\u5FC5\u8981\u7684\u6587\u4EF6\uFF0C\u4F18\u5316\u6784\u5EFA\u6548\u7387\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7F51\u7EDC\u7BA1\u7406\u547D\u4EE4",children:"\u7F51\u7EDC\u7BA1\u7406\u547D\u4EE4"}),"\n",(0,c.jsx)(n.p,{children:"Docker \u7F51\u7EDC\u7528\u4E8E\u5BB9\u5668\u95F4\u901A\u4FE1\uFF0C\u6211\u5C06\u4ECB\u7ECD\u5E38\u7528\u7684\u7F51\u7EDC\u7BA1\u7406\u547D\u4EE4\u3002"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u529F\u80FD"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u4EE3\u7801"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u521B\u5EFA\u7F51\u7EDC"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker network create nginx-network"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5217\u51FA\u6240\u6709\u7F51\u7EDC"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker network ls"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5220\u9664\u7F51\u7EDC"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker network rm nginx-network"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5C06\u5BB9\u5668\u8FDE\u63A5\u5230\u7F51\u7EDC"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker network connect nginx-network my-nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u4ECE\u7F51\u7EDC\u65AD\u5F00\u5BB9\u5668"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker network disconnect nginx-network my-nginx"})})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker network create"})," \u547D\u4EE4\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7F51\u7EDC\uFF0C\u9ED8\u8BA4\u7C7B\u578B\u4E3A ",(0,c.jsx)(n.code,{children:"bridge"}),"\u3002\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"--driver"})," \u53C2\u6570\u6307\u5B9A\u7F51\u7EDC\u7C7B\u578B\uFF0C\u4F8B\u5982 ",(0,c.jsx)(n.code,{children:"overlay"}),"\uFF0C\u9002\u7528\u4E8E Swarm \u96C6\u7FA4\u73AF\u5883\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker network connect"})," \u548C ",(0,c.jsx)(n.code,{children:"docker network disconnect"})," \u547D\u4EE4\u7528\u4E8E\u5C06\u5BB9\u5668\u8FDE\u63A5\u5230\u7F51\u7EDC\u6216\u4ECE\u7F51\u7EDC\u65AD\u5F00\uFF0C\u65B9\u4FBF\u7075\u6D3B\u5730\u7BA1\u7406\u5BB9\u5668\u901A\u4FE1\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker network inspect nginx-network"})," \u67E5\u770B\u7F51\u7EDC\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u62EC\u8FDE\u63A5\u7684\u5BB9\u5668\u3001\u7F51\u7EDC\u914D\u7F6E\u7B49\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8FD0\u884C\u5BB9\u5668\u65F6\uFF0C\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker run --network nginx-network nginx"})," \u6307\u5B9A\u5BB9\u5668\u52A0\u5165\u7279\u5B9A\u7F51\u7EDC\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u521B\u5EFA\u8986\u76D6\u7F51\u7EDC\uFF08\u7528\u4E8E Swarm \u96C6\u7FA4\uFF09\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker network create --driver overlay my-overlay-network"}),"\uFF0C\u652F\u6301\u8DE8\u4E3B\u673A\u7684\u5BB9\u5668\u901A\u4FE1\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4F7F\u7528\u81EA\u5B9A\u4E49\u7F51\u7EDC\u65F6\uFF0C\u5BB9\u5668\u53EF\u4EE5\u901A\u8FC7\u5BB9\u5668\u540D\u79F0\u4E92\u76F8\u901A\u4FE1\uFF0C\u7B80\u5316\u914D\u7F6E\u3002\u907F\u514D\u4F7F\u7528\u9ED8\u8BA4 ",(0,c.jsx)(n.code,{children:"bridge"})," \u7F51\u7EDC\uFF0C\u901A\u8FC7\u521B\u5EFA\u4E13\u7528\u7F51\u7EDC\u63D0\u5347\u5B89\u5168\u6027\u548C\u7BA1\u7406\u4FBF\u6377\u6027\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6570\u636E\u5377\u7BA1\u7406\u547D\u4EE4",children:"\u6570\u636E\u5377\u7BA1\u7406\u547D\u4EE4"}),"\n",(0,c.jsx)(n.p,{children:"\u6570\u636E\u5377\u7528\u4E8E\u6301\u4E45\u5316\u5BB9\u5668\u6570\u636E\uFF0C\u6211\u5C06\u4ECB\u7ECD\u5E38\u7528\u7684\u6570\u636E\u5377\u7BA1\u7406\u547D\u4EE4\u3002"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u529F\u80FD"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u4EE3\u7801"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u521B\u5EFA\u6570\u636E\u5377"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker volume create nginx-data"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5217\u51FA\u6240\u6709\u6570\u636E\u5377"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker volume ls"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5220\u9664\u6570\u636E\u5377"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker volume rm nginx-data"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u67E5\u770B\u5377\u8BE6\u7EC6\u4FE1\u606F"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker volume inspect nginx-data"})})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker volume create"})," \u547D\u4EE4\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5377\uFF0C\u4FBF\u4E8E\u7BA1\u7406\u6301\u4E45\u5316\u6570\u636E\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8FD0\u884C\u5BB9\u5668\u65F6\uFF0C\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"-v nginx-data:/data"})," \u5C06\u6570\u636E\u5377\u6302\u8F7D\u5230\u5BB9\u5668\u7684 ",(0,c.jsx)(n.code,{children:"/data"})," \u76EE\u5F55\uFF0C\u786E\u4FDD\u6570\u636E\u5728\u5BB9\u5668\u91CD\u542F\u6216\u5220\u9664\u540E\u4F9D\u7136\u5B58\u5728\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6570\u636E\u5377\u4E0D\u4F1A\u968F\u7740\u5BB9\u5668\u7684\u5220\u9664\u800C\u5220\u9664\uFF0C\u9700\u8981\u624B\u52A8\u6E05\u7406\u672A\u4F7F\u7528\u7684\u6570\u636E\u5377\uFF0C\u4FDD\u6301\u7CFB\u7EDF\u6574\u6D01\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u6302\u8F7D\u4E3B\u673A\u76EE\u5F55\u5230\u5BB9\u5668\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker run -v /host/data:/container/data nginx"}),"\uFF0C\u76F4\u63A5\u4F7F\u7528\u4E3B\u673A\u76EE\u5F55\u4F5C\u4E3A\u6570\u636E\u5377\uFF0C\u4FBF\u4E8E\u4E0E\u4E3B\u673A\u6587\u4EF6\u7CFB\u7EDF\u96C6\u6210\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5220\u9664\u672A\u4F7F\u7528\u7684\u6570\u636E\u5377\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker volume prune"}),"\uFF0C\u6E05\u7406\u6240\u6709\u672A\u88AB\u4F7F\u7528\u7684\u6570\u636E\u5377\uFF0C\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,c.jsx)(n.p,{children:"\u4F7F\u7528\u547D\u540D\u6570\u636E\u5377\u7BA1\u7406\u6301\u4E45\u5316\u6570\u636E\uFF0C\u66F4\u65B9\u4FBF\u7EF4\u62A4\u548C\u8BC6\u522B\u3002\u6570\u636E\u5377\u7684\u6027\u80FD\u901A\u5E38\u4F18\u4E8E\u7ED1\u5B9A\u4E3B\u673A\u76EE\u5F55\uFF08bind mount\uFF09\uFF0C\u9002\u5408\u9700\u8981\u9AD8\u6548\u8BFB\u5199\u7684\u573A\u666F\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u5BB9\u5668\u76D1\u63A7\u548C\u65E5\u5FD7\u547D\u4EE4",children:"\u5BB9\u5668\u76D1\u63A7\u548C\u65E5\u5FD7\u547D\u4EE4"}),"\n",(0,c.jsx)(n.p,{children:"\u4E3A\u4E86\u7EF4\u62A4\u5BB9\u5668\u7684\u7A33\u5B9A\u8FD0\u884C\uFF0C\u76D1\u63A7\u548C\u65E5\u5FD7\u975E\u5E38\u91CD\u8981\uFF0C\u6211\u5C06\u4ECB\u7ECD\u76F8\u5173\u547D\u4EE4\u3002"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u529F\u80FD"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u4EE3\u7801"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker logs my-nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5B9E\u65F6\u8DDF\u8E2A\u5BB9\u5668\u65E5\u5FD7"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker logs -f my-nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u67E5\u770B\u5BB9\u5668\u5185\u90E8\u8FD0\u884C\u7684\u8FDB\u7A0B"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker top my-nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u663E\u793A\u5BB9\u5668\u8D44\u6E90\u4F7F\u7528\u7EDF\u8BA1"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker stats my-nginx"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u67E5\u770B\u5BB9\u5668\u8BE6\u7EC6\u4FE1\u606F"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker inspect my-nginx"})})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker logs my-nginx"})," \u547D\u4EE4\u53EF\u4EE5\u83B7\u53D6\u5BB9\u5668\u7684\u6807\u51C6\u8F93\u51FA\u65E5\u5FD7\u3002\u6DFB\u52A0 ",(0,c.jsx)(n.code,{children:"-f"})," \u53C2\u6570\u5B9E\u65F6\u8DDF\u8E2A\u65E5\u5FD7\u8F93\u51FA\uFF0C\u7C7B\u4F3C\u4E8E ",(0,c.jsx)(n.code,{children:"tail -f"}),"\uFF0C\u4FBF\u4E8E\u76D1\u63A7\u5E94\u7528\u8FD0\u884C\u60C5\u51B5\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker top my-nginx"})," \u547D\u4EE4\u67E5\u770B\u5BB9\u5668\u5185\u90E8\u8FD0\u884C\u7684\u8FDB\u7A0B\u5217\u8868\uFF0C\u5E2E\u52A9\u6392\u67E5\u5E94\u7528\u95EE\u9898\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker stats my-nginx"})," \u547D\u4EE4\u663E\u793A\u5BB9\u5668\u7684\u5B9E\u65F6\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5\uFF0C\u5305\u62EC CPU\u3001\u5185\u5B58\u3001\u7F51\u7EDC\u7B49\uFF0C\u4FBF\u4E8E\u8D44\u6E90\u76D1\u63A7\u548C\u4F18\u5316\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker inspect my-nginx"})," \u547D\u4EE4\u67E5\u770B\u5BB9\u5668\u7684\u8BE6\u7EC6\u914D\u7F6E\u4FE1\u606F\uFF0C\u5305\u62EC\u7F51\u7EDC\u8BBE\u7F6E\u3001\u6302\u8F7D\u5377\u3001\u73AF\u5883\u53D8\u91CF\u7B49\uFF0C\u6709\u52A9\u4E8E\u6DF1\u5165\u4E86\u89E3\u5BB9\u5668\u8FD0\u884C\u73AF\u5883\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8BBE\u7F6E\u65E5\u5FD7\u9A71\u52A8\uFF1A\u8FD0\u884C\u5BB9\u5668\u65F6\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"--log-driver"})," \u53C2\u6570\u8BBE\u7F6E\u65E5\u5FD7\u9A71\u52A8\uFF0C\u4F8B\u5982 ",(0,c.jsx)(n.code,{children:"json-file"}),"\u3001",(0,c.jsx)(n.code,{children:"syslog"})," \u7B49\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u7684\u65E5\u5FD7\u7BA1\u7406\u9700\u6C42\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9650\u5236\u5BB9\u5668\u8D44\u6E90\uFF1A\u8FD0\u884C\u5BB9\u5668\u65F6\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"--memory"}),"\u3001",(0,c.jsx)(n.code,{children:"--cpus"})," \u7B49\u53C2\u6570\u9650\u5236\u5BB9\u5668\u7684\u8D44\u6E90\u4F7F\u7528\uFF0C\u9632\u6B62\u5BB9\u5668\u5360\u7528\u8FC7\u591A\u4E3B\u673A\u8D44\u6E90\uFF0C\u5F71\u54CD\u7CFB\u7EDF\u7A33\u5B9A\u6027\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,c.jsx)(n.p,{children:"\u4F7F\u7528\u76D1\u63A7\u5DE5\u5177\u5982 Prometheus \u548C Grafana \u5BF9\u5BB9\u5668\u8FDB\u884C\u957F\u671F\u76D1\u63A7\uFF0C\u53CA\u65F6\u53D1\u73B0\u548C\u89E3\u51B3\u6027\u80FD\u74F6\u9888\u3002\u8BBE\u7F6E\u8D44\u6E90\u9650\u5236\u53EF\u4EE5\u9632\u6B62\u5355\u4E2A\u5BB9\u5668\u5F71\u54CD\u6574\u4E2A\u7CFB\u7EDF\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u6267\u884C\u547D\u4EE4",children:"\u6267\u884C\u547D\u4EE4"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u5BB9\u5668\u4E2D\u6267\u884C\u547D\u4EE4\u6216\u8FDB\u5165\u5BB9\u5668\u5185\u90E8\uFF0C\u6211\u5C06\u4ECB\u7ECD\u76F8\u5173\u547D\u4EE4\u3002"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u529F\u80FD"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u4EE3\u7801"})})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u5728\u5BB9\u5668\u4E2D\u6267\u884C\u547D\u4EE4"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker exec -it my-nginx bash"})})]})})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker exec"})," \u547D\u4EE4\u7528\u4E8E\u5728\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\u5185\u6267\u884C\u547D\u4EE4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"-it"})," \u53C2\u6570\u4E2D\uFF0C",(0,c.jsx)(n.code,{children:"-i"})," \u4FDD\u6301\u6807\u51C6\u8F93\u5165\u6253\u5F00\uFF0C",(0,c.jsx)(n.code,{children:"-t"})," \u5206\u914D\u4E00\u4E2A\u4F2A\u7EC8\u7AEF\uFF0C\u4FBF\u4E8E\u4EA4\u4E92\u64CD\u4F5C\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u82E5\u5BB9\u5668\u5185\u65E0 ",(0,c.jsx)(n.code,{children:"bash"}),"\uFF0C\u53EF\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"sh"})," \u6216\u5176\u4ED6\u53EF\u7528\u7684 Shell\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker exec -it my-nginx sh\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4EE5\u4EA4\u4E92\u6A21\u5F0F\u542F\u52A8\u5BB9\u5668\u53EF\u4EE5\u4F7F\u7528\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run -it nginx /bin/bash\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u76F4\u63A5\u8FDB\u5165\u5BB9\u5668\u7684\u4EA4\u4E92\u5F0F\u7EC8\u7AEF\uFF0C\u8FDB\u884C\u5B9E\u65F6\u64CD\u4F5C\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u5BB9\u5668\u4E2D\u8FD0\u884C\u5355\u4E2A\u547D\u4EE4\u53EF\u4EE5\u4F7F\u7528\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker exec my-nginx ls /usr/share/nginx/html\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5217\u51FA\u5BB9\u5668\u5185\u6307\u5B9A\u76EE\u5F55\u7684\u5185\u5BB9\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u67E5\u770B\u6587\u4EF6\u7ED3\u6784\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5C3D\u91CF\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"Dockerfile"})," \u81EA\u52A8\u5316\u6784\u5EFA\u955C\u50CF\uFF0C\u51CF\u5C11\u624B\u52A8\u8FDB\u5165\u5BB9\u5668\u6267\u884C\u547D\u4EE4\u7684\u9700\u6C42\uFF0C\u63D0\u5347\u73AF\u5883\u4E00\u81F4\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5E38\u7528\u8865\u5145\u547D\u4EE4",children:"\u5E38\u7528\u8865\u5145\u547D\u4EE4"}),"\n",(0,c.jsx)(n.p,{children:"\u4E3A\u66F4\u5168\u9762\u5730\u4F7F\u7528 Docker\uFF0C\u6211\u6574\u7406\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u8865\u5145\u547D\u4EE4\u3002"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u529F\u80FD"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u547D\u4EE4\u4EE3\u7801"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u67E5\u770B Docker \u7248\u672C\u4FE1\u606F"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker version"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u67E5\u770B Docker \u7CFB\u7EDF\u4FE1\u606F"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker info"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u767B\u5F55 Docker \u6CE8\u518C\u670D\u52A1\u5668"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker login"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u63A8\u9001\u955C\u50CF\u5230\u4ED3\u5E93"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker push my-nginx-image"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u4ECE\u5BB9\u5668\u521B\u5EFA\u65B0\u955C\u50CF"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker commit my-nginx my-nginx-image:v2"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u6E05\u7406\u672A\u4F7F\u7528\u7684\u8D44\u6E90"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"docker system prune"})})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker version"})," \u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u7684 Docker \u7248\u672C\u4FE1\u606F\uFF0C\u786E\u4FDD\u73AF\u5883\u517C\u5BB9\u6027\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker info"})," \u547D\u4EE4\u67E5\u770B Docker \u7CFB\u7EDF\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u62EC\u955C\u50CF\u3001\u5BB9\u5668\u6570\u91CF\u3001\u5B58\u50A8\u9A71\u52A8\u7B49\uFF0C\u6709\u52A9\u4E8E\u7CFB\u7EDF\u7BA1\u7406\u548C\u4F18\u5316\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker login"})," \u547D\u4EE4\u7528\u4E8E\u767B\u5F55\u5230 Docker Hub \u6216\u79C1\u6709\u4ED3\u5E93\uFF0C\u6267\u884C ",(0,c.jsx)(n.code,{children:"docker logout"})," \u53EF\u6CE8\u9500\u767B\u5F55\uFF0C\u786E\u4FDD\u8D26\u53F7\u5B89\u5168\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker push"})," \u547D\u4EE4\u5C06\u672C\u5730\u955C\u50CF\u63A8\u9001\u5230\u955C\u50CF\u4ED3\u5E93\u3002\u786E\u4FDD\u955C\u50CF\u540D\u79F0\u4E0E\u4ED3\u5E93\u547D\u540D\u7A7A\u95F4\u5339\u914D\uFF0C\u4FBF\u4E8E\u955C\u50CF\u7BA1\u7406\u548C\u5206\u53D1\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker commit"})," \u547D\u4EE4\u5C06\u5BB9\u5668\u7684\u5F53\u524D\u72B6\u6001\u4FDD\u5B58\u4E3A\u65B0\u7684\u955C\u50CF\u3002\u5EFA\u8BAE\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"Dockerfile"})," \u6784\u5EFA\u955C\u50CF\uFF0C\u4EE5\u4FDD\u8BC1\u53EF\u91CD\u590D\u6027\u548C\u4E00\u81F4\u6027\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"docker system prune"})," \u547D\u4EE4\u6E05\u7406\u672A\u4F7F\u7528\u7684\u5BB9\u5668\u3001\u7F51\u7EDC\u3001\u955C\u50CF\u7B49\u8D44\u6E90\uFF0C\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4\uFF0C\u4FDD\u6301\u7CFB\u7EDF\u6574\u6D01\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u67E5\u770B\u78C1\u76D8\u7A7A\u95F4\u4F7F\u7528\u60C5\u51B5\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker system df"}),"\uFF0C\u4E86\u89E3 Docker \u76F8\u5173\u8D44\u6E90\u5360\u7528\u7684\u7A7A\u95F4\uFF0C\u4FBF\u4E8E\u78C1\u76D8\u7BA1\u7406\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5BFC\u51FA\u955C\u50CF\u4E3A\u6587\u4EF6\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker save -o my-nginx-image.tar my-nginx-image\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7528\u4E8E\u5907\u4EFD\u6216\u4F20\u8F93\u955C\u50CF\uFF0C\u65B9\u4FBF\u5728\u4E0D\u540C\u73AF\u5883\u95F4\u8FC1\u79FB\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u955C\u50CF\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker load -i my-nginx-image.tar\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5C06\u5BFC\u51FA\u7684\u955C\u50CF\u6587\u4EF6\u52A0\u8F7D\u5230\u672C\u5730\uFF0C\u5FEB\u901F\u6062\u590D\u6216\u90E8\u7F72\u955C\u50CF\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6700\u4F73\u5B9E\u8DF5"})}),"\n",(0,c.jsx)(n.p,{children:"\u5B9A\u671F\u68C0\u67E5\u548C\u6E05\u7406\u672A\u4F7F\u7528\u7684 Docker \u8D44\u6E90\uFF0C\u9632\u6B62\u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3\u3002\u4F7F\u7528\u81EA\u52A8\u5316\u811A\u672C\u7BA1\u7406\u955C\u50CF\u548C\u5BB9\u5668\uFF0C\u63D0\u5347\u8FD0\u7EF4\u6548\u7387\u3002"})]})}function j(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},50065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return i}});var r=d(67294);let c={},s=r.createContext(c);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);