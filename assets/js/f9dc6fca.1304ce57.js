"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[5163],{19909:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"Backend/Redis/Redis\u6570\u636e\u7c7b\u578b\u4e0e\u547d\u4ee4","title":"Redis \u6570\u636e\u7c7b\u578b\u4e0e\u547d\u4ee4","description":"\u5b57\u7b26\u4e32\uff08String\uff09","source":"@site/docs/Backend/Redis/10.Redis\u6570\u636e\u7c7b\u578b\u4e0e\u547d\u4ee4.md","sourceDirName":"Backend/Redis","slug":"/Backend/Redis/Redis\u6570\u636e\u7c7b\u578b\u4e0e\u547d\u4ee4","permalink":"/docs-hub/docs/Backend/Redis/Redis\u6570\u636e\u7c7b\u578b\u4e0e\u547d\u4ee4","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Redis/10.Redis\u6570\u636e\u7c7b\u578b\u4e0e\u547d\u4ee4.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":10,"frontMatter":{},"sidebar":"redisSidebar","previous":{"title":"Redis \u4f7f\u7528\u6307\u5357","permalink":"/docs-hub/docs/Backend/Redis/Redis-\u57fa\u7840\u4f7f\u7528"},"next":{"title":"Redis \u6301\u4e45\u5316\u4e0e\u5907\u4efd","permalink":"/docs-hub/docs/Backend/Redis/Redis\u6301\u4e45\u5316\u4e0e\u5907\u4efd"}}');var l=n(74848),i=n(28453);const c={},r="Redis \u6570\u636e\u7c7b\u578b\u4e0e\u547d\u4ee4",h={},t=[{value:"\u5b57\u7b26\u4e32\uff08String\uff09",id:"\u5b57\u7b26\u4e32string",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u54c8\u5e0c\uff08Hash\uff09",id:"\u54c8\u5e0chash",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-1",level:3},{value:"\u5217\u8868\uff08List\uff09",id:"\u5217\u8868list",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-2",level:3},{value:"\u96c6\u5408\uff08Set\uff09",id:"\u96c6\u5408set",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-3",level:3},{value:"\u6709\u5e8f\u96c6\u5408\uff08Sorted Set\uff09",id:"\u6709\u5e8f\u96c6\u5408sorted-set",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-4",level:3},{value:"\u4f4d\u56fe\uff08Bitmap\uff09",id:"\u4f4d\u56febitmap",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-5",level:3},{value:"\u53d1\u5e03/\u8ba2\u9605\uff08Pub/Sub\uff09",id:"\u53d1\u5e03\u8ba2\u9605pubsub",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-6",level:3},{value:"\u4e8b\u52a1\uff08Transaction\uff09",id:"\u4e8b\u52a1transaction",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-7",level:3},{value:"Lua \u811a\u672c",id:"lua-\u811a\u672c",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4-8",level:3},{value:"\u6570\u636e\u7c7b\u578b\u7279\u6027\u5bf9\u6bd4\u8868",id:"\u6570\u636e\u7c7b\u578b\u7279\u6027\u5bf9\u6bd4\u8868",level:2}];function a(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.header,{children:(0,l.jsx)(d.h1,{id:"redis-\u6570\u636e\u7c7b\u578b\u4e0e\u547d\u4ee4",children:"Redis \u6570\u636e\u7c7b\u578b\u4e0e\u547d\u4ee4"})}),"\n",(0,l.jsx)(d.h2,{id:"\u5b57\u7b26\u4e32string",children:"\u5b57\u7b26\u4e32\uff08String\uff09"}),"\n",(0,l.jsx)(d.p,{children:"\u5728\u751f\u4ea7\u4e2d\u6211\u5e38\u7528\u5b57\u7b26\u4e32\u7c7b\u578b\u5b58\u50a8\u7b80\u5355\u7684\u952e\u503c\u6570\u636e\u3002\u4f8b\u5982\u7f13\u5b58\u7528\u6237\u4f1a\u8bdd\u4fe1\u606f\u6216\u4e34\u65f6\u8ba1\u7b97\u7ed3\u679c\u3002\u5b57\u7b26\u4e32\u7c7b\u578b\u64cd\u4f5c\u7b80\u4fbf\u4e14\u6027\u80fd\u9ad8\uff0c\u5728\u9700\u8981\u5feb\u901f\u8bfb\u5199\u7684\u5c0f\u578b\u6570\u636e\u573a\u666f\u4e0b\u8f83\u4e3a\u5408\u9002\u3002"}),"\n",(0,l.jsx)(d.h3,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsxs)(d.p,{children:["\u53ef\u901a\u8fc7",(0,l.jsx)(d.code,{children:"SET key value"}),"\u4e3a\u952e\u8d4b\u503c\uff0c\u518d\u7528",(0,l.jsx)(d.code,{children:"GET key"}),"\u83b7\u53d6\u5bf9\u5e94\u503c\u3002\u5982\u679c\u9700\u8981\u7edf\u8ba1\u8bbf\u95ee\u91cf\uff0c\u6211\u4f1a\u4f7f\u7528",(0,l.jsx)(d.code,{children:"INCR key"}),"\u6216",(0,l.jsx)(d.code,{children:"DECR key"}),"\u5bf9\u5b58\u50a8\u6570\u503c\u7684\u952e\u8fdb\u884c\u81ea\u589e\u81ea\u51cf\uff0c\u4ee5\u4fbf\u5728\u9ad8\u5e76\u53d1\u4e0b\u5b9e\u73b0\u9ad8\u6548\u8ba1\u6570\u3002"]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:'SET user:1 "Alice"\nGET user:1\nINCR user:count\nDECR user:count\n'})}),"\n",(0,l.jsx)(d.h2,{id:"\u54c8\u5e0chash",children:"\u54c8\u5e0c\uff08Hash\uff09"}),"\n",(0,l.jsx)(d.p,{children:"\u6211\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u5e38\u7528\u54c8\u5e0c\u6765\u5b58\u50a8\u5bf9\u8c61\u4fe1\u606f\uff0c\u5982\u7528\u6237\u6863\u6848\u6216\u5546\u54c1\u4fe1\u606f\u3002\u4e0e\u5b57\u7b26\u4e32\u76f8\u6bd4\uff0c\u54c8\u5e0c\u66f4\u9002\u5408\u4ee5\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u7ec4\u7ec7\u590d\u6742\u6570\u636e\uff0c\u4f7f\u5f97\u4fee\u6539\u5355\u4e2a\u5b57\u6bb5\u66f4\u7075\u6d3b\u4e14\u6570\u636e\u5b58\u50a8\u66f4\u7d27\u51d1\u3002"}),"\n",(0,l.jsx)(d.h3,{id:"\u5e38\u7528\u547d\u4ee4-1",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsxs)(d.p,{children:["\u4f7f\u7528",(0,l.jsx)(d.code,{children:"HSET key field value"}),"\u4e3a\u54c8\u5e0c\u6dfb\u52a0\u6216\u66f4\u65b0\u5b57\u6bb5\u503c\uff0c\u7528",(0,l.jsx)(d.code,{children:"HGET key field"}),"\u83b7\u53d6\u7279\u5b9a\u5b57\u6bb5\u7684\u503c\u3002\u5982\u679c\u8981\u904d\u5386\u5168\u90e8\u5b57\u6bb5\u53ca\u503c\uff0c\u53ef\u4f7f\u7528",(0,l.jsx)(d.code,{children:"HGETALL key"}),"\u3002"]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:'HSET user:1 name "Alice" age 30\nHGET user:1 name\nHGETALL user:1\n'})}),"\n",(0,l.jsx)(d.h2,{id:"\u5217\u8868list",children:"\u5217\u8868\uff08List\uff09"}),"\n",(0,l.jsxs)(d.p,{children:["\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6211\u4f1a\u7528\u5217\u8868\u6765\u5904\u7406\u6709\u5e8f\u961f\u5217\u6570\u636e\u3002\u4f8b\u5982\u5728\u6d88\u606f\u961f\u5217\u4e2d\u7528",(0,l.jsx)(d.code,{children:"LPUSH"}),"\u548c",(0,l.jsx)(d.code,{children:"RPOP"}),"\u5b9e\u73b0\u5148\u8fdb\u5148\u51fa\uff0c\u6216\u5728\u5b9e\u65f6\u4efb\u52a1\u5217\u8868\u4e2d\u4f7f\u7528",(0,l.jsx)(d.code,{children:"RPUSH"}),"\u63d2\u5165\u65b0\u4efb\u52a1\uff0c\u7136\u540e",(0,l.jsx)(d.code,{children:"LPOP"}),"\u83b7\u53d6\u5f85\u5904\u7406\u4efb\u52a1\u3002"]}),"\n",(0,l.jsx)(d.h3,{id:"\u5e38\u7528\u547d\u4ee4-2",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsxs)(d.p,{children:["\u7528",(0,l.jsx)(d.code,{children:"LPUSH key value"}),"\u4ece\u5de6\u4fa7\u63d2\u5165\u5143\u7d20\uff0c\u7528",(0,l.jsx)(d.code,{children:"RPUSH key value"}),"\u4ece\u53f3\u4fa7\u63d2\u5165\u5143\u7d20\u3002\u901a\u8fc7",(0,l.jsx)(d.code,{children:"LPOP key"}),"\u6216",(0,l.jsx)(d.code,{children:"RPOP key"}),"\u4ece\u5bf9\u5e94\u4fa7\u5f39\u51fa\u5143\u7d20\uff0c\u7075\u6d3b\u6784\u5efa\u961f\u5217\u6216\u6808\u7ed3\u6784\u3002"]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:'LPUSH queue "task1"\nRPUSH queue "task2"\nLPOP queue\nRPOP queue\n'})}),"\n",(0,l.jsx)(d.h2,{id:"\u96c6\u5408set",children:"\u96c6\u5408\uff08Set\uff09"}),"\n",(0,l.jsx)(d.p,{children:"\u5728\u751f\u4ea7\u4e2d\u6211\u5e38\u7528\u96c6\u5408\u7c7b\u578b\u6765\u5b58\u50a8\u53bb\u91cd\u540e\u7684\u7528\u6237 ID \u96c6\uff0c\u6216\u6807\u8bb0\u5df2\u5904\u7406\u4efb\u52a1\u7684\u6807\u8bc6\u96c6\u5408\u3002\u96c6\u5408\u4e2d\u7684\u5143\u7d20\u662f\u65e0\u5e8f\u4e14\u552f\u4e00\u7684\uff0c\u6709\u5229\u4e8e\u5feb\u901f\u5224\u65ad\u67d0\u5143\u7d20\u662f\u5426\u5b58\u5728\u3002"}),"\n",(0,l.jsx)(d.h3,{id:"\u5e38\u7528\u547d\u4ee4-3",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsxs)(d.p,{children:[(0,l.jsx)(d.code,{children:"SADD key member"}),"\u6dfb\u52a0\u5143\u7d20\uff0c",(0,l.jsx)(d.code,{children:"SREM key member"}),"\u5220\u9664\u5143\u7d20\u3002\u4f7f\u7528",(0,l.jsx)(d.code,{children:"SMEMBERS key"}),"\u5217\u51fa\u5168\u90e8\u5143\u7d20\uff0c\u7528",(0,l.jsx)(d.code,{children:"SISMEMBER key member"}),"\u5224\u65ad\u5143\u7d20\u662f\u5426\u5728\u96c6\u5408\u4e2d\u3002"]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:'SADD users "Alice" "Bob" "Charlie"\nSMEMBERS users\nSISMEMBER users "Alice"\n'})}),"\n",(0,l.jsx)(d.h2,{id:"\u6709\u5e8f\u96c6\u5408sorted-set",children:"\u6709\u5e8f\u96c6\u5408\uff08Sorted Set\uff09"}),"\n",(0,l.jsx)(d.p,{children:"\u5728\u6392\u884c\u699c\u6216\u79ef\u5206\u7edf\u8ba1\u4e2d\uff0c\u6211\u4f1a\u9009\u7528\u6709\u5e8f\u96c6\u5408\u3002\u5176\u901a\u8fc7\u4e3a\u6bcf\u4e2a\u6210\u5458\u5173\u8054\u4e00\u4e2a\u5206\u6570\u5b9e\u73b0\u81ea\u52a8\u6392\u5e8f\uff0c\u9002\u5408\u5b9e\u73b0\u6392\u884c\u699c\u3001\u8bc4\u5206\u7cfb\u7edf\u548c\u5ef6\u8fdf\u961f\u5217\u7b49\u573a\u666f\u3002"}),"\n",(0,l.jsx)(d.h3,{id:"\u5e38\u7528\u547d\u4ee4-4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsxs)(d.p,{children:[(0,l.jsx)(d.code,{children:"ZADD key score member"}),"\u6dfb\u52a0\u6210\u5458\u53ca\u5176\u5206\u6570\uff0c\u7528",(0,l.jsx)(d.code,{children:"ZRANGE key start stop"}),"\u67e5\u770b\u6307\u5b9a\u6392\u540d\u533a\u95f4\u7684\u6210\u5458\u5217\u8868\u3002\u4f7f\u7528",(0,l.jsx)(d.code,{children:"ZREM key member"}),"\u53ef\u79fb\u9664\u7279\u5b9a\u6210\u5458\uff0c",(0,l.jsx)(d.code,{children:"ZCARD key"}),"\u5219\u8fd4\u56de\u6210\u5458\u603b\u6570\u3002"]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:'ZADD leaderboard 100 "Alice" 200 "Bob"\nZRANGE leaderboard 0 -1\nZREM leaderboard "Alice"\n'})}),"\n",(0,l.jsx)(d.h2,{id:"\u4f4d\u56febitmap",children:"\u4f4d\u56fe\uff08Bitmap\uff09"}),"\n",(0,l.jsxs)(d.p,{children:["\u5728\u5927\u89c4\u6a21\u7528\u6237\u6d3b\u8dc3\u5ea6\u7edf\u8ba1\u4e2d\uff0c\u6211\u5e38\u4ee5\u4f4d\u56fe\u5b58\u50a8\u7528\u6237\u6d3b\u8dc3\u6807\u8bb0\u3002\u4f8b\u5982\u901a\u8fc7",(0,l.jsx)(d.code,{children:"SETBIT key offset value"}),"\u6807\u8bb0\u67d0\u7528\u6237\u5728\u7279\u5b9a\u65e5\u671f\u5185\u662f\u5426\u8bbf\u95ee\u8fc7\u7cfb\u7edf\uff0c\u7136\u540e\u4f7f\u7528\u4f4d\u64cd\u4f5c\u6307\u4ee4\u7edf\u8ba1\u6574\u4f53\u6d3b\u8dc3\u7528\u6237\u6570\u3002"]}),"\n",(0,l.jsx)(d.h3,{id:"\u5e38\u7528\u547d\u4ee4-5",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsxs)(d.p,{children:[(0,l.jsx)(d.code,{children:"SETBIT key offset value"}),"\u8bbe\u7f6e\u4f4d\u56fe\u4e2d\u67d0\u504f\u79fb\u91cf\u7684\u503c\uff0c",(0,l.jsx)(d.code,{children:"GETBIT key offset"}),"\u83b7\u53d6\u8be5\u4f4d\u7f6e\u503c\u3002\u5927\u89c4\u6a21\u573a\u666f\u4e0b\uff0c\u53ef\u5feb\u901f\u7edf\u8ba1\u7279\u5b9a\u6761\u4ef6\u7684\u7528\u6237\u6570\u91cf\u3002"]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"SETBIT user:1 100 1\nGETBIT user:1 100\n"})}),"\n",(0,l.jsx)(d.h2,{id:"\u53d1\u5e03\u8ba2\u9605pubsub",children:"\u53d1\u5e03/\u8ba2\u9605\uff08Pub/Sub\uff09"}),"\n",(0,l.jsxs)(d.p,{children:["\u5728\u9700\u8981\u8de8\u670d\u52a1\u5668\u5feb\u901f\u5e7f\u64ad\u6d88\u606f\u65f6\uff0c\u6211\u4f1a\u4f7f\u7528\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u3002\u5ba2\u6237\u7aef\u53ef\u901a\u8fc7",(0,l.jsx)(d.code,{children:"SUBSCRIBE"}),"\u8ba2\u9605\u9891\u9053\uff0c\u5e76\u5728\u6d88\u606f\u53d1\u5e03\u540e\u5b9e\u65f6\u6536\u5230\u901a\u77e5\u3002"]}),"\n",(0,l.jsx)(d.h3,{id:"\u5e38\u7528\u547d\u4ee4-6",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsxs)(d.p,{children:[(0,l.jsx)(d.code,{children:"PUBLISH channel message"}),"\u53d1\u5e03\u6d88\u606f\u5230\u9891\u9053\uff0c",(0,l.jsx)(d.code,{children:"SUBSCRIBE channel"}),"\u8ba2\u9605\u9891\u9053\u63a5\u6536\u6d88\u606f\uff0c",(0,l.jsx)(d.code,{children:"UNSUBSCRIBE channel"}),"\u53d6\u6d88\u8ba2\u9605\u3002"]}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:'PUBLISH news "Hello World"\nSUBSCRIBE news\n'})}),"\n",(0,l.jsx)(d.h2,{id:"\u4e8b\u52a1transaction",children:"\u4e8b\u52a1\uff08Transaction\uff09"}),"\n",(0,l.jsxs)(d.p,{children:["\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\u6211\u4f1a\u7528\u4e8b\u52a1\u786e\u4fdd\u4e00\u7ec4\u547d\u4ee4\u7684\u539f\u5b50\u6027\u3002\u4f8b\u5982\u5728\u4e00\u6b21\u6027\u66f4\u65b0\u591a\u4e2a\u952e\u65f6\u4f7f\u7528",(0,l.jsx)(d.code,{children:"MULTI"}),"\u5f00\u59cb\u4e8b\u52a1\uff0c\u6267\u884c\u82e5\u5e72\u547d\u4ee4\u540e\u7528",(0,l.jsx)(d.code,{children:"EXEC"}),"\u63d0\u4ea4\u3002\u82e5\u9700\u653e\u5f03\u4e8b\u52a1\u4e2d\u547d\u4ee4\u5219\u4f7f\u7528",(0,l.jsx)(d.code,{children:"DISCARD"}),"\u3002"]}),"\n",(0,l.jsx)(d.h3,{id:"\u5e38\u7528\u547d\u4ee4-7",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:'MULTI\nSET user:2 "Bob"\nINCR user:2\nEXEC\n'})}),"\n",(0,l.jsx)(d.h2,{id:"lua-\u811a\u672c",children:"Lua \u811a\u672c"}),"\n",(0,l.jsxs)(d.p,{children:["\u6211\u5728\u5904\u7406\u9700\u8981\u4fdd\u8bc1\u539f\u5b50\u6027\u7684\u590d\u6742\u903b\u8f91\u65f6\uff0c\u4f1a\u5c06\u903b\u8f91\u5199\u6210 Lua \u811a\u672c\uff0c\u7136\u540e\u901a\u8fc7",(0,l.jsx)(d.code,{children:"EVAL"}),"\u6267\u884c\u3002\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u4e0e Redis \u7684\u7f51\u7edc\u4ea4\u4e92\u6b21\u6570\uff0c\u63d0\u5347\u64cd\u4f5c\u6548\u7387\u3002"]}),"\n",(0,l.jsx)(d.h3,{id:"\u5e38\u7528\u547d\u4ee4-8",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsx)(d.pre,{children:(0,l.jsx)(d.code,{className:"language-bash",children:"EVAL \"return redis.call('GET', KEYS[1])\" 1 user:1\n"})}),"\n",(0,l.jsx)(d.h2,{id:"\u6570\u636e\u7c7b\u578b\u7279\u6027\u5bf9\u6bd4\u8868",children:"\u6570\u636e\u7c7b\u578b\u7279\u6027\u5bf9\u6bd4\u8868"}),"\n",(0,l.jsx)(d.p,{children:"\u4e0b\u8868\u6982\u62ec\u4e86\u5e38\u7528\u6570\u636e\u7c7b\u578b\u7684\u7279\u70b9\u4e0e\u9002\u7528\u573a\u666f\uff0c\u4fbf\u4e8e\u6211\u5728\u5b9e\u9645\u8fd0\u7ef4\u4e2d\u5feb\u901f\u9009\u62e9\u5408\u9002\u7684\u6570\u636e\u7ed3\u6784"}),"\n",(0,l.jsxs)(d.table,{children:[(0,l.jsx)(d.thead,{children:(0,l.jsxs)(d.tr,{children:[(0,l.jsx)(d.th,{children:"\u6570\u636e\u7c7b\u578b"}),(0,l.jsx)(d.th,{children:"\u6709\u5e8f\u6027"}),(0,l.jsx)(d.th,{children:"\u91cd\u590d\u5141\u8bb8"}),(0,l.jsx)(d.th,{children:"\u5178\u578b\u5e94\u7528\u573a\u666f"})]})}),(0,l.jsxs)(d.tbody,{children:[(0,l.jsxs)(d.tr,{children:[(0,l.jsx)(d.td,{children:"String"}),(0,l.jsx)(d.td,{children:"\u65e0"}),(0,l.jsx)(d.td,{children:"\u652f\u6301\u91cd\u590d\u503c"}),(0,l.jsx)(d.td,{children:"\u7b80\u5355\u952e\u503c\u5bf9\u7f13\u5b58\u3001\u8ba1\u6570\u5668"})]}),(0,l.jsxs)(d.tr,{children:[(0,l.jsx)(d.td,{children:"Hash"}),(0,l.jsx)(d.td,{children:"\u57fa\u4e8e\u5b57\u6bb5\u7ec4\u7ec7"}),(0,l.jsx)(d.td,{children:"\u5b57\u6bb5\u552f\u4e00"}),(0,l.jsx)(d.td,{children:"\u5b58\u50a8\u5bf9\u8c61\u6570\u636e\u3001\u7528\u6237\u4fe1\u606f"})]}),(0,l.jsxs)(d.tr,{children:[(0,l.jsx)(d.td,{children:"List"}),(0,l.jsx)(d.td,{children:"\u6709\u5e8f"}),(0,l.jsx)(d.td,{children:"\u652f\u6301\u91cd\u590d\u503c"}),(0,l.jsx)(d.td,{children:"\u961f\u5217\u3001\u6d88\u606f\u5217\u8868"})]}),(0,l.jsxs)(d.tr,{children:[(0,l.jsx)(d.td,{children:"Set"}),(0,l.jsx)(d.td,{children:"\u65e0\u5e8f"}),(0,l.jsx)(d.td,{children:"\u5143\u7d20\u552f\u4e00"}),(0,l.jsx)(d.td,{children:"\u53bb\u91cd\u3001\u5feb\u901f\u6210\u5458\u5224\u65ad"})]}),(0,l.jsxs)(d.tr,{children:[(0,l.jsx)(d.td,{children:"Sorted Set"}),(0,l.jsx)(d.td,{children:"\u6709\u5e8f(\u7531\u5206\u6570\u51b3\u5b9a)"}),(0,l.jsx)(d.td,{children:"\u5143\u7d20\u552f\u4e00"}),(0,l.jsx)(d.td,{children:"\u6392\u884c\u699c\u3001\u5ef6\u8fdf\u961f\u5217"})]})]})]})]})}function o(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,l.jsx)(d,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>c,x:()=>r});var s=n(96540);const l={},i=s.createContext(l);function c(e){const d=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:d},e.children)}}}]);