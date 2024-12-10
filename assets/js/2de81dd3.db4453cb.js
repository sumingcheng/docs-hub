"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[96830],{11516:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"Backend/Redis/Redis\u6027\u80fd\u4f18\u5316\u4e0e\u8fd0\u7ef4","title":"Redis \u6027\u80fd\u4f18\u5316\u4e0e\u8fd0\u7ef4","description":"Redis \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u5e7f\u6cdb\u7528\u4e8e\u7f13\u5b58\u3001\u4f1a\u8bdd\u5b58\u50a8\u3001\u6d88\u606f\u961f\u5217\u7b49\u573a\u666f\u3002\u5728\u5927\u89c4\u6a21\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u5982\u4f55\u4fdd\u6301\u5176\u9ad8\u6027\u80fd\u5e76\u786e\u4fdd\u5176\u7a33\u5b9a\u8fd0\u884c\uff0c\u662f\u7cfb\u7edf\u8fd0\u7ef4\u7684\u5173\u952e\u3002\u672c\u6587\u5c06\u63a2\u8ba8 Redis \u6027\u80fd\u4f18\u5316\u7684\u7b56\u7565\u53ca\u5e38\u89c1\u7684\u8fd0\u7ef4\u65b9\u6cd5\uff0c\u5e2e\u52a9\u4f60\u63d0\u9ad8 Redis \u7684\u6548\u7387\uff0c\u5e76\u4fdd\u969c\u5176\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u9ad8\u53ef\u7528\u6027\u3002","source":"@site/docs/Backend/Redis/40.Redis\u6027\u80fd\u4f18\u5316\u4e0e\u8fd0\u7ef4.md","sourceDirName":"Backend/Redis","slug":"/Backend/Redis/Redis\u6027\u80fd\u4f18\u5316\u4e0e\u8fd0\u7ef4","permalink":"/docs-hub/docs/Backend/Redis/Redis\u6027\u80fd\u4f18\u5316\u4e0e\u8fd0\u7ef4","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Redis/40.Redis\u6027\u80fd\u4f18\u5316\u4e0e\u8fd0\u7ef4.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":40,"frontMatter":{},"sidebar":"redisSidebar","previous":{"title":"Redis \u96c6\u7fa4\u4e0e\u5206\u7247","permalink":"/docs-hub/docs/Backend/Redis/Redis\u96c6\u7fa4\u4e0e\u5206\u7247"}}');var l=s(74848),d=s(28453);const r={},c="Redis \u6027\u80fd\u4f18\u5316\u4e0e\u8fd0\u7ef4",h={},x=[{value:"Redis \u6027\u80fd\u4f18\u5316",id:"redis-\u6027\u80fd\u4f18\u5316",level:2},{value:"1. \u5408\u7406\u9009\u62e9\u6570\u636e\u7ed3\u6784",id:"1-\u5408\u7406\u9009\u62e9\u6570\u636e\u7ed3\u6784",level:3},{value:"\u793a\u4f8b\uff1a\u4f18\u5316\u5b58\u50a8\u7ed3\u6784",id:"\u793a\u4f8b\u4f18\u5316\u5b58\u50a8\u7ed3\u6784",level:4},{value:"2. \u5408\u7406\u914d\u7f6e\u5185\u5b58",id:"2-\u5408\u7406\u914d\u7f6e\u5185\u5b58",level:3},{value:"3. \u542f\u7528\u6301\u4e45\u5316\u7b56\u7565",id:"3-\u542f\u7528\u6301\u4e45\u5316\u7b56\u7565",level:3},{value:"4. \u4f7f\u7528 pipelining \u6279\u91cf\u64cd\u4f5c",id:"4-\u4f7f\u7528-pipelining-\u6279\u91cf\u64cd\u4f5c",level:3},{value:"5. \u4f18\u5316\u952e\u7684\u547d\u540d\u4e0e\u8fc7\u671f\u65f6\u95f4",id:"5-\u4f18\u5316\u952e\u7684\u547d\u540d\u4e0e\u8fc7\u671f\u65f6\u95f4",level:3},{value:"6. \u542f\u7528 Lua \u811a\u672c",id:"6-\u542f\u7528-lua-\u811a\u672c",level:3},{value:"Redis \u8fd0\u7ef4",id:"redis-\u8fd0\u7ef4",level:2},{value:"1. \u76d1\u63a7\u4e0e\u544a\u8b66",id:"1-\u76d1\u63a7\u4e0e\u544a\u8b66",level:3},{value:"2. \u65e5\u5fd7\u4e0e\u6545\u969c\u6392\u67e5",id:"2-\u65e5\u5fd7\u4e0e\u6545\u969c\u6392\u67e5",level:3},{value:"3. \u6570\u636e\u5907\u4efd\u4e0e\u6062\u590d",id:"3-\u6570\u636e\u5907\u4efd\u4e0e\u6062\u590d",level:3},{value:"4. \u9ad8\u53ef\u7528\u4e0e\u707e\u5907",id:"4-\u9ad8\u53ef\u7528\u4e0e\u707e\u5907",level:3},{value:"5. \u5b9a\u671f\u7ef4\u62a4\u4e0e\u4f18\u5316",id:"5-\u5b9a\u671f\u7ef4\u62a4\u4e0e\u4f18\u5316",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function j(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"redis-\u6027\u80fd\u4f18\u5316\u4e0e\u8fd0\u7ef4",children:"Redis \u6027\u80fd\u4f18\u5316\u4e0e\u8fd0\u7ef4"})}),"\n",(0,l.jsx)(n.p,{children:"Redis \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u5e7f\u6cdb\u7528\u4e8e\u7f13\u5b58\u3001\u4f1a\u8bdd\u5b58\u50a8\u3001\u6d88\u606f\u961f\u5217\u7b49\u573a\u666f\u3002\u5728\u5927\u89c4\u6a21\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u5982\u4f55\u4fdd\u6301\u5176\u9ad8\u6027\u80fd\u5e76\u786e\u4fdd\u5176\u7a33\u5b9a\u8fd0\u884c\uff0c\u662f\u7cfb\u7edf\u8fd0\u7ef4\u7684\u5173\u952e\u3002\u672c\u6587\u5c06\u63a2\u8ba8 Redis \u6027\u80fd\u4f18\u5316\u7684\u7b56\u7565\u53ca\u5e38\u89c1\u7684\u8fd0\u7ef4\u65b9\u6cd5\uff0c\u5e2e\u52a9\u4f60\u63d0\u9ad8 Redis \u7684\u6548\u7387\uff0c\u5e76\u4fdd\u969c\u5176\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u9ad8\u53ef\u7528\u6027\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"redis-\u6027\u80fd\u4f18\u5316",children:"Redis \u6027\u80fd\u4f18\u5316"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u5408\u7406\u9009\u62e9\u6570\u636e\u7ed3\u6784",children:"1. \u5408\u7406\u9009\u62e9\u6570\u636e\u7ed3\u6784"}),"\n",(0,l.jsx)(n.p,{children:"Redis \u63d0\u4f9b\u4e86\u591a\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5982\u5b57\u7b26\u4e32\uff08String\uff09\u3001\u54c8\u5e0c\uff08Hash\uff09\u3001\u5217\u8868\uff08List\uff09\u3001\u96c6\u5408\uff08Set\uff09\u3001\u6709\u5e8f\u96c6\u5408\uff08Sorted Set\uff09\u3001\u4f4d\u56fe\uff08Bitmap\uff09\u7b49\u3002\u4e0d\u540c\u7684\u6570\u636e\u7ed3\u6784\u9002\u7528\u4e8e\u4e0d\u540c\u7684\u573a\u666f\uff0c\u5408\u7406\u9009\u62e9\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u663e\u8457\u63d0\u5347\u6027\u80fd\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"String"}),"\uff1a\u9002\u5408\u7528\u4e8e\u5b58\u50a8\u7b80\u5355\u7684\u952e\u503c\u5bf9\uff0c\u8bbf\u95ee\u975e\u5e38\u5feb\u901f\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Hash"}),"\uff1a\u9002\u7528\u4e8e\u5b58\u50a8\u5bf9\u8c61\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5982\u7528\u6237\u4fe1\u606f\u7b49\u3002\u4f7f\u7528\u54c8\u5e0c\u5b58\u50a8\u6570\u636e\u53ef\u4ee5\u8282\u7701\u5185\u5b58\u548c\u63d0\u9ad8\u6027\u80fd\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"List"}),"\uff1a\u9002\u5408\u7528\u4e8e\u4efb\u52a1\u961f\u5217\u3001\u6d88\u606f\u961f\u5217\u7b49\u573a\u666f\u3002\u53ef\u4ee5\u5229\u7528\u5de6\u5f39\u51fa\uff08LPOP\uff09\u548c\u53f3\u5f39\u51fa\uff08RPOP\uff09\u64cd\u4f5c\u6765\u5feb\u901f\u8bfb\u53d6\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Set"}),"\uff1a\u7528\u4e8e\u5b58\u50a8\u552f\u4e00\u7684\u3001\u4e0d\u91cd\u590d\u7684\u5143\u7d20\uff0c\u9002\u5408\u8fdb\u884c\u53bb\u91cd\u3001\u4ea4\u96c6\u3001\u5e76\u96c6\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Sorted Set"}),"\uff1a\u9002\u5408\u4e8e\u9700\u8981\u6309\u6743\u91cd\u6216\u5206\u6570\u6392\u5e8f\u7684\u573a\u666f\uff0c\u4f8b\u5982\u6392\u884c\u699c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u793a\u4f8b\u4f18\u5316\u5b58\u50a8\u7ed3\u6784",children:"\u793a\u4f8b\uff1a\u4f18\u5316\u5b58\u50a8\u7ed3\u6784"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u5e94\u7528\u5b58\u50a8\u7528\u6237\u4fe1\u606f\uff0c\u4f7f\u7528\u54c8\u5e0c\u800c\u975e\u5b57\u7b26\u4e32\u53ef\u80fd\u66f4\u4e3a\u9ad8\u6548\u3002\u5982\u4e0b\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'HSET user:1000 name "Alice" age 30\nHGET user:1000 name\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4e0e\u4f7f\u7528\u5b57\u7b26\u4e32\u5b58\u50a8\u6bcf\u4e2a\u5c5e\u6027\u76f8\u6bd4\uff0c\u54c8\u5e0c\u7ed3\u6784\u4e0d\u4ec5\u8282\u7701\u5185\u5b58\uff0c\u800c\u4e14\u64cd\u4f5c\u66f4\u9ad8\u6548\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"2-\u5408\u7406\u914d\u7f6e\u5185\u5b58",children:"2. \u5408\u7406\u914d\u7f6e\u5185\u5b58"}),"\n",(0,l.jsx)(n.p,{children:"Redis \u4e3b\u8981\u4f9d\u8d56\u5185\u5b58\u6765\u5b58\u50a8\u6570\u636e\uff0c\u56e0\u6b64\u5185\u5b58\u914d\u7f6e\u5bf9\u5176\u6027\u80fd\u81f3\u5173\u91cd\u8981\u3002\u4ee5\u4e0b\u662f\u51e0\u79cd\u5185\u5b58\u7ba1\u7406\u7b56\u7565\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"maxmemory"}),"\uff1a\u8bbe\u7f6e Redis \u4f7f\u7528\u7684\u6700\u5927\u5185\u5b58\u9650\u5236\u3002\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\u65f6\uff0cRedis \u4f1a\u6839\u636e\u914d\u7f6e\u7684\u9a71\u9010\u7b56\u7565\u6765\u5904\u7406\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u914d\u7f6e\u4f8b\u5b50\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"maxmemory 4gb\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"maxmemory-policy"}),"\uff1a\u9009\u62e9\u5185\u5b58\u6ee1\u65f6\u7684\u9a71\u9010\u7b56\u7565\u3002\u5e38\u89c1\u7684\u9a71\u9010\u7b56\u7565\u5305\u62ec\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"noeviction"}),"\uff1a\u7981\u6b62\u9a71\u9010\uff08\u9ed8\u8ba4\uff09\uff0c\u4e00\u65e6\u8fbe\u5230\u6700\u5927\u5185\u5b58\u9650\u5236\uff0cRedis \u5c06\u8fd4\u56de\u9519\u8bef\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"volatile-lru"}),"\uff1a\u53ea\u9a71\u9010\u5e26\u6709\u8fc7\u671f\u65f6\u95f4\u7684\u952e\uff0c\u4f7f\u7528 LRU \u7b97\u6cd5\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"allkeys-lru"}),"\uff1a\u9a71\u9010\u6240\u6709\u952e\uff0c\u4f7f\u7528 LRU \u7b97\u6cd5\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"volatile-random"}),"\uff1a\u968f\u673a\u9a71\u9010\u5e26\u6709\u8fc7\u671f\u65f6\u95f4\u7684\u952e\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"allkeys-random"}),"\uff1a\u968f\u673a\u9a71\u9010\u6240\u6709\u952e\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"volatile-ttl"}),"\uff1a\u4f18\u5148\u9a71\u9010\u5373\u5c06\u8fc7\u671f\u7684\u952e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u914d\u7f6e\u4f8b\u5b50\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"maxmemory-policy allkeys-lru\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5185\u5b58\u538b\u7f29"}),"\uff1aRedis \u4f7f\u7528\u7684\u662f\u5185\u5b58\u6570\u636e\u5e93\uff0c\u56e0\u6b64\u5bf9\u4e8e\u5927\u89c4\u6a21\u6570\u636e\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u5185\u5b58\u5360\u7528\u8fc7\u9ad8\u7684\u95ee\u9898\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Redis \u7684 ",(0,l.jsx)(n.strong,{children:"\u538b\u7f29\u5b58\u50a8"}),"\uff08\u5982\u54c8\u5e0c\u548c\u5217\u8868\u538b\u7f29\uff09\u6765\u51cf\u5c11\u5185\u5b58\u6d88\u8017\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"3-\u542f\u7528\u6301\u4e45\u5316\u7b56\u7565",children:"3. \u542f\u7528\u6301\u4e45\u5316\u7b56\u7565"}),"\n",(0,l.jsx)(n.p,{children:"\u867d\u7136 Redis \u662f\u5185\u5b58\u6570\u636e\u5e93\uff0c\u4f46\u542f\u7528\u5408\u9002\u7684\u6301\u4e45\u5316\u673a\u5236\uff08\u5982 RDB \u6216 AOF\uff09\u6709\u52a9\u4e8e\u9632\u6b62\u6570\u636e\u4e22\u5931\uff0c\u5e76\u63d0\u5347\u6027\u80fd\u3002\u5177\u4f53\u9009\u62e9\u54ea\u79cd\u6301\u4e45\u5316\u65b9\u5f0f\u53d6\u51b3\u4e8e\u4e1a\u52a1\u7684\u9700\u6c42\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"RDB"}),"\uff1a\u751f\u6210\u6570\u636e\u5e93\u5feb\u7167\uff0c\u9002\u7528\u4e8e\u5bf9\u6027\u80fd\u8981\u6c42\u9ad8\u3001\u5bf9\u6570\u636e\u6301\u4e45\u5316\u8981\u6c42\u4e0d\u90a3\u4e48\u4e25\u683c\u7684\u573a\u666f\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"AOF"}),"\uff1a\u8bb0\u5f55\u6240\u6709\u5199\u64cd\u4f5c\uff0c\u9002\u7528\u4e8e\u6570\u636e\u9700\u8981\u9ad8\u5ea6\u6301\u4e45\u5316\u7684\u573a\u666f\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5bf9\u4e8e\u5927\u90e8\u5206\u9ad8\u6027\u80fd\u8981\u6c42\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u7ed3\u5408\u4f7f\u7528 RDB \u548c AOF\uff0c\u8fd9\u6837\u53ef\u4ee5\u65e2\u4fdd\u8bc1\u6301\u4e45\u5316\uff0c\u53c8\u6700\u5927\u5316\u63d0\u5347\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"4-\u4f7f\u7528-pipelining-\u6279\u91cf\u64cd\u4f5c",children:"4. \u4f7f\u7528 pipelining \u6279\u91cf\u64cd\u4f5c"}),"\n",(0,l.jsxs)(n.p,{children:["Redis \u7684\u547d\u4ee4\u662f\u57fa\u4e8e\u8bf7\u6c42/\u54cd\u5e94\u6a21\u578b\u7684\uff0c\u9010\u4e2a\u53d1\u9001\u8bf7\u6c42\u53ef\u80fd\u4f1a\u9020\u6210\u5927\u91cf\u7684\u7f51\u7edc\u5ef6\u8fdf\u3002\u4f7f\u7528 ",(0,l.jsx)(n.strong,{children:"pipelining"})," \u6280\u672f\u53ef\u4ee5\u5c06\u591a\u4e2a\u547d\u4ee4\u6279\u91cf\u53d1\u9001\u7ed9 Redis \u670d\u52a1\u5668\uff0c\u907f\u514d\u4e86\u6bcf\u4e2a\u8bf7\u6c42\u7684\u5f80\u8fd4\u5ef6\u8fdf\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"redis-cli --pipe\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6216\u8005\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u7ba1\u9053\u64cd\u4f5c\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"import redis\nr = redis.StrictRedis(host='localhost', port=6379, db=0)\npipe = r.pipeline()\nfor i in range(1000):\n    pipe.set(f'key{i}', f'value{i}')\npipe.execute()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"5-\u4f18\u5316\u952e\u7684\u547d\u540d\u4e0e\u8fc7\u671f\u65f6\u95f4",children:"5. \u4f18\u5316\u952e\u7684\u547d\u540d\u4e0e\u8fc7\u671f\u65f6\u95f4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u952e\u7684\u547d\u540d"}),"\uff1a\u907f\u514d\u4f7f\u7528\u8fc7\u957f\u7684\u952e\u540d\uff0c\u4ee5\u51cf\u5c11\u5185\u5b58\u5f00\u9500\u3002\u4f7f\u7528\u77ed\u800c\u6709\u610f\u4e49\u7684\u547d\u540d\u65b9\u5f0f\uff0c\u5982 ",(0,l.jsx)(n.code,{children:"user:1000:name"}),"\uff0c\u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u6027\u80fd\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u8fc7\u671f\u65f6\u95f4"}),"\uff1a\u4e3a\u9002\u5f53\u7684\u6570\u636e\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c\u4ee5\u786e\u4fdd\u4e0d\u518d\u9700\u8981\u7684\u6570\u636e\u80fd\u88ab\u81ea\u52a8\u6e05\u9664\uff0c\u907f\u514d Redis \u5185\u5b58\u81a8\u80c0\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'SET user:1000:name "Alice" EX 3600\n'})}),"\n",(0,l.jsx)(n.h3,{id:"6-\u542f\u7528-lua-\u811a\u672c",children:"6. \u542f\u7528 Lua \u811a\u672c"}),"\n",(0,l.jsx)(n.p,{children:"Redis \u652f\u6301\u901a\u8fc7 Lua \u811a\u672c\u6267\u884c\u539f\u5b50\u64cd\u4f5c\uff0c\u907f\u514d\u591a\u6b21\u7f51\u7edc\u5f80\u8fd4\uff0c\u63d0\u9ad8\u6027\u80fd\u3002\u4f8b\u5982\uff0c\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u540c\u65f6\u64cd\u4f5c\u591a\u4e2a\u952e\u65f6\uff0c\u4f7f\u7528 Lua \u811a\u672c\u53ef\u4ee5\u51cf\u5c11\u7f51\u7edc\u5ef6\u8fdf\u5e76\u63d0\u9ad8\u6548\u7387\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'EVAL "return redis.call(\'SET\', KEYS[1], ARGV[1])" 1 mykey "hello"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"redis-\u8fd0\u7ef4",children:"Redis \u8fd0\u7ef4"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u76d1\u63a7\u4e0e\u544a\u8b66",children:"1. \u76d1\u63a7\u4e0e\u544a\u8b66"}),"\n",(0,l.jsx)(n.p,{children:"\u5b9a\u671f\u76d1\u63a7 Redis \u7684\u8fd0\u884c\u72b6\u6001\uff0c\u786e\u4fdd\u7cfb\u7edf\u7684\u5065\u5eb7\u548c\u6027\u80fd\u3002\u53ef\u4ee5\u4f7f\u7528 Redis \u5185\u7f6e\u7684\u547d\u4ee4\u548c\u5916\u90e8\u76d1\u63a7\u5de5\u5177\u6765\u83b7\u53d6\u5b9e\u65f6\u7684\u6027\u80fd\u6570\u636e\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u76d1\u63a7\u547d\u4ee4"}),"\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"INFO"}),"\uff1a\u83b7\u53d6 Redis \u7684\u5404\u9879\u7edf\u8ba1\u4fe1\u606f\uff0c\u5982\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3001\u8fde\u63a5\u6570\u3001\u64cd\u4f5c\u547d\u4ee4\u7b49\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"redis-cli INFO\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"MONITOR"}),"\uff1a\u5b9e\u65f6\u76d1\u63a7 Redis \u6536\u5230\u7684\u6240\u6709\u547d\u4ee4\u8bf7\u6c42\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"redis-cli MONITOR\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5916\u90e8\u76d1\u63a7\u5de5\u5177"}),"\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Redis-Stat"}),"\uff1a\u4e00\u4e2a\u7b80\u5355\u7684 Redis \u6027\u80fd\u76d1\u63a7\u5de5\u5177\uff0c\u63d0\u4f9b\u547d\u4ee4\u6267\u884c\u65f6\u95f4\u3001\u5185\u5b58\u4f7f\u7528\u7b49\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Prometheus + Redis Exporter"}),"\uff1a\u4f7f\u7528 Prometheus \u8fdb\u884c Redis \u7684\u76d1\u63a7\uff0c\u652f\u6301\u5b9a\u5236\u5316\u544a\u8b66\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"2-\u65e5\u5fd7\u4e0e\u6545\u969c\u6392\u67e5",children:"2. \u65e5\u5fd7\u4e0e\u6545\u969c\u6392\u67e5"}),"\n",(0,l.jsx)(n.p,{children:"Redis \u63d0\u4f9b\u4e86\u591a\u79cd\u65e5\u5fd7\u8bb0\u5f55\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5e2e\u52a9\u8fd0\u7ef4\u4eba\u5458\u6392\u67e5\u6545\u969c\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u65e5\u5fd7\u7ea7\u522b"}),"\uff1a\u5728 Redis \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u65e5\u5fd7\u7ea7\u522b\uff0c\u5e38\u89c1\u7684\u7ea7\u522b\u5305\u62ec ",(0,l.jsx)(n.code,{children:"debug"}),"\u3001",(0,l.jsx)(n.code,{children:"verbose"}),"\u3001",(0,l.jsx)(n.code,{children:"notice"}),"\u3001",(0,l.jsx)(n.code,{children:"warning"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u914d\u7f6e\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"loglevel notice\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6545\u969c\u6392\u67e5"}),"\uff1a\u5e38\u89c1\u7684\u6545\u969c\u5305\u62ec\u7f51\u7edc\u5ef6\u8fdf\u8fc7\u9ad8\u3001\u5185\u5b58\u6ea2\u51fa\u3001\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\u8fc7\u591a\u7b49\u95ee\u9898\u3002\u5728\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b Redis \u65e5\u5fd7\u6587\u4ef6\uff0c\u7ed3\u5408\u547d\u4ee4 ",(0,l.jsx)(n.code,{children:"INFO"})," \u548c ",(0,l.jsx)(n.code,{children:"MONITOR"})," \u6765\u5b9a\u4f4d\u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"3-\u6570\u636e\u5907\u4efd\u4e0e\u6062\u590d",children:"3. \u6570\u636e\u5907\u4efd\u4e0e\u6062\u590d"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"RDB \u5907\u4efd"}),"\uff1a\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"BGSAVE"})," \u547d\u4ee4\u6216\u8bbe\u7f6e ",(0,l.jsx)(n.code,{children:"save"})," \u53c2\u6570\u6765\u89e6\u53d1\u6570\u636e\u5907\u4efd\u3002\u5907\u4efd\u6587\u4ef6\u4f1a\u4fdd\u5b58\u5728\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\uff0c\u4e00\u822c\u4e3a ",(0,l.jsx)(n.code,{children:"dump.rdb"})," \u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"BGSAVE\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"AOF \u5907\u4efd"}),"\uff1aAOF \u6587\u4ef6\u4f1a\u8bb0\u5f55 Redis \u7684\u6240\u6709\u5199\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5b9a\u671f\u91cd\u5199 AOF \u6587\u4ef6\uff0c\u907f\u514d\u6587\u4ef6\u8fc7\u5927\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"BGREWRITEAOF\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6062\u590d\u6570\u636e"}),"\uff1a\u5982\u679c Redis \u53d1\u751f\u6545\u969c\uff0c\u53ef\u4ee5\u901a\u8fc7\u5c06\u5907\u4efd\u7684 ",(0,l.jsx)(n.code,{children:"dump.rdb"})," \u6216 ",(0,l.jsx)(n.code,{children:"appendonly.aof"})," \u6587\u4ef6\u590d\u5236\u5230\u6570\u636e\u76ee\u5f55\u4e2d\uff0c\u91cd\u542f Redis \u5373\u53ef\u6062\u590d\u6570\u636e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"4-\u9ad8\u53ef\u7528\u4e0e\u707e\u5907",children:"4. \u9ad8\u53ef\u7528\u4e0e\u707e\u5907"}),"\n",(0,l.jsx)(n.p,{children:"Redis \u63d0\u4f9b\u4e86\u591a\u79cd\u9ad8\u53ef\u7528\u914d\u7f6e\uff0c\u5305\u62ec\u4e3b\u4ece\u590d\u5236\u548c Redis Sentinel\u3002Redis Sentinel \u53ef\u4ee5\u76d1\u63a7\u4e3b\u8282\u70b9\u7684\u5065\u5eb7\u72b6\u6001\uff0c\u5e76\u5728\u4e3b\u8282\u70b9\u5b95\u673a\u65f6\u81ea\u52a8\u8fdb\u884c\u6545\u969c\u8f6c\u79fb\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u4e3b\u4ece\u590d\u5236"}),"\uff1a\u901a\u8fc7\u8bbe\u7f6e ",(0,l.jsx)(n.code,{children:"slaveof"})," \u914d\u7f6e\u5c06\u4ece\u8282\u70b9\u4e0e\u4e3b\u8282\u70b9\u540c\u6b65\uff0c\u786e\u4fdd\u6570\u636e\u5197\u4f59\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Redis Sentinel"}),"\uff1a\u81ea\u52a8\u76d1\u63a7 Redis \u4e3b\u8282\u70b9\uff0c\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\u652f\u6301\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sentinel monitor mymaster <master-ip> 6379 2\n"})}),"\n",(0,l.jsx)(n.h3,{id:"5-\u5b9a\u671f\u7ef4\u62a4\u4e0e\u4f18\u5316",children:"5. \u5b9a\u671f\u7ef4\u62a4\u4e0e\u4f18\u5316"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u5b9a\u671f\u91cd\u542f"}),"\uff1a\u6839\u636e\u6570\u636e\u589e\u957f\u548c\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff0c\u5b9a\u671f\u91cd\u542f Redis \u670d\u52a1\u5668\uff0c\u91ca\u653e\u65e0\u7528\u5185\u5b58\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6570\u636e\u5e93\u6e05\u7406"}),"\uff1a\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"FLUSHDB"})," \u548c ",(0,l.jsx)(n.code,{children:"FLUSHALL"})," \u547d\u4ee4\u6e05\u9664\u4e0d\u518d\u9700\u8981\u7684\u6570\u636e\u5e93\u6216\u6240\u6709\u6570\u636e\u5e93\u7684\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"FLUSHDB\nFLUSHALL\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728\u9ad8\u8d1f\u8f7d\u73af\u5883\u4e0b\uff0c\u907f\u514d\u4f7f\u7528\u963b\u585e\u547d\u4ee4\uff0c\u5982 ",(0,l.jsx)(n.code,{children:"BLPOP"}),"\uff0c\u5b83\u53ef\u80fd\u4f1a\u5bfc\u81f4 Redis \u54cd\u5e94\u7f13\u6162\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5b9a\u671f\u68c0\u67e5 Redis \u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff0c\u5e76\u8bbe\u7f6e\u5408\u9002\u7684 ",(0,l.jsx)(n.code,{children:"maxmemory-policy"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"redis-cli"})," \u5de5\u5177\u8fdb\u884c\u76d1\u63a7\u548c\u6545\u969c\u6392\u67e5\uff0c\u53ca\u65f6\u53d1\u73b0\u6027\u80fd\u74f6\u9888\u3002"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const l={},d=i.createContext(l);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);