"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[9893],{61416:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"Backend/MongoDB/MongoDB\u7d22\u5f15\u4e0e\u67e5\u8be2","title":"MongoDB \u7d22\u5f15\u4e0e\u67e5\u8be2\u4f18\u5316","description":"\u7d22\u5f15\u57fa\u7840","source":"@site/docs/Backend/MongoDB/020-MongoDB\u7d22\u5f15\u4e0e\u67e5\u8be2.md","sourceDirName":"Backend/MongoDB","slug":"/Backend/MongoDB/MongoDB\u7d22\u5f15\u4e0e\u67e5\u8be2","permalink":"/docs-hub/docs/Backend/MongoDB/MongoDB\u7d22\u5f15\u4e0e\u67e5\u8be2","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/MongoDB/020-MongoDB\u7d22\u5f15\u4e0e\u67e5\u8be2.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":20,"frontMatter":{},"sidebar":"mongodbSidebar","previous":{"title":"MongoDB \u5b89\u88c5\u4e0e\u4f7f\u7528\u6307\u5357","permalink":"/docs-hub/docs/Backend/MongoDB/MongoDB\u5b89\u88c5\u4e0e\u4f7f\u7528"},"next":{"title":"MongoDB \u805a\u5408\u64cd\u4f5c\u4e0e\u6570\u636e\u5efa\u6a21","permalink":"/docs-hub/docs/Backend/MongoDB/MongoDB\u805a\u5408\u4e0e\u5efa\u6a21"}}');var r=d(74848),c=d(28453);const i={},l="MongoDB \u7d22\u5f15\u4e0e\u67e5\u8be2\u4f18\u5316",a={},o=[{value:"\u7d22\u5f15\u57fa\u7840",id:"\u7d22\u5f15\u57fa\u7840",level:2},{value:"\u521b\u5efa\u7d22\u5f15",id:"\u521b\u5efa\u7d22\u5f15",level:3},{value:"\u7d22\u5f15\u7c7b\u578b",id:"\u7d22\u5f15\u7c7b\u578b",level:3},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:2},{value:"\u67e5\u8be2\u5206\u6790",id:"\u67e5\u8be2\u5206\u6790",level:3},{value:"\u8986\u76d6\u67e5\u8be2",id:"\u8986\u76d6\u67e5\u8be2",level:3},{value:"\u7d22\u5f15\u7b56\u7565",id:"\u7d22\u5f15\u7b56\u7565",level:2},{value:"\u9009\u62e9\u7d22\u5f15\u5b57\u6bb5",id:"\u9009\u62e9\u7d22\u5f15\u5b57\u6bb5",level:3},{value:"\u7d22\u5f15\u7ef4\u62a4",id:"\u7d22\u5f15\u7ef4\u62a4",level:3},{value:"\u6027\u80fd\u76d1\u63a7",id:"\u6027\u80fd\u76d1\u63a7",level:2},{value:"\u6162\u67e5\u8be2\u5206\u6790",id:"\u6162\u67e5\u8be2\u5206\u6790",level:3},{value:"\u8d44\u6e90\u4f7f\u7528\u76d1\u63a7",id:"\u8d44\u6e90\u4f7f\u7528\u76d1\u63a7",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mongodb-\u7d22\u5f15\u4e0e\u67e5\u8be2\u4f18\u5316",children:"MongoDB \u7d22\u5f15\u4e0e\u67e5\u8be2\u4f18\u5316"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7d22\u5f15\u57fa\u7840",children:"\u7d22\u5f15\u57fa\u7840"}),"\n",(0,r.jsx)(n.h3,{id:"\u521b\u5efa\u7d22\u5f15",children:"\u521b\u5efa\u7d22\u5f15"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 MongoDB \u4e2d\uff0c\u7b14\u8005\u7ecf\u5e38\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"createIndex()"})," \u65b9\u6cd5\u6765\u521b\u5efa\u7d22\u5f15\u3002\u5355\u5b57\u6bb5\u7d22\u5f15\u662f\u6700\u57fa\u672c\u7684\u7d22\u5f15\u7c7b\u578b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.users.createIndex({ username: 1 });\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"1"})," \u8868\u793a\u5347\u5e8f\u7d22\u5f15\uff0c",(0,r.jsx)(n.code,{children:"-1"})," \u8868\u793a\u964d\u5e8f\u7d22\u5f15\u3002\u5bf9\u4e8e\u7ecf\u5e38\u67e5\u8be2\u7684\u5b57\u6bb5\uff0c\u5efa\u8bae\u521b\u5efa\u590d\u5408\u7d22\u5f15\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.orders.createIndex({ userId: 1, orderDate: -1 });\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7d22\u5f15\u7c7b\u578b",children:"\u7d22\u5f15\u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5b9e\u8df5\u4e2d\uff0c\u4ee5\u4e0b\u7d22\u5f15\u7c7b\u578b\u975e\u5e38\u6709\u7528\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u552f\u4e00\u7d22\u5f15\ndb.users.createIndex({ email: 1 }, { unique: true });\n\n// \u90e8\u5206\u7d22\u5f15\ndb.products.createIndex({ price: 1 }, { partialFilterExpression: { quantity: { $gt: 0 } } });\n\n// \u6587\u672c\u7d22\u5f15\ndb.articles.createIndex({ content: 'text' });\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u552f\u4e00\u7d22\u5f15\u786e\u4fdd\u5b57\u6bb5\u503c\u7684\u552f\u4e00\u6027\uff0c\u90e8\u5206\u7d22\u5f15\u4ec5\u7d22\u5f15\u6ee1\u8db3\u7279\u5b9a\u6761\u4ef6\u7684\u6587\u6863\uff0c\u6587\u672c\u7d22\u5f15\u5219\u7528\u4e8e\u5168\u6587\u641c\u7d22\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u4f18\u5316",children:"\u67e5\u8be2\u4f18\u5316"}),"\n",(0,r.jsx)(n.h3,{id:"\u67e5\u8be2\u5206\u6790",children:"\u67e5\u8be2\u5206\u6790"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"explain()"})," \u65b9\u6cd5\u5206\u6790\u67e5\u8be2\u6027\u80fd\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.users.find({ age: { $gt: 21 } }).explain('executionStats');\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u65b9\u6cd5\u63d0\u4f9b\u67e5\u8be2\u6267\u884c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u6709\u52a9\u4e8e\u8bc6\u522b\u6027\u80fd\u74f6\u9888\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8986\u76d6\u67e5\u8be2",children:"\u8986\u76d6\u67e5\u8be2"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u53ea\u8fd4\u56de\u7d22\u5f15\u5b57\u6bb5\u6765\u4f18\u5316\u67e5\u8be2\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.users.find({ age: { $gt: 21 } }, { _id: 0, username: 1 }).hint({ username: 1 });\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8986\u76d6\u67e5\u8be2\u51cf\u5c11\u4e86\u9700\u8981\u8bfb\u53d6\u7684\u6570\u636e\u91cf\uff0c\u4ece\u800c\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7d22\u5f15\u7b56\u7565",children:"\u7d22\u5f15\u7b56\u7565"}),"\n",(0,r.jsx)(n.h3,{id:"\u9009\u62e9\u7d22\u5f15\u5b57\u6bb5",children:"\u9009\u62e9\u7d22\u5f15\u5b57\u6bb5"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\u6839\u636e\u4ee5\u4e0b\u573a\u666f\u521b\u5efa\u7d22\u5f15\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u9891\u7e41\u67e5\u8be2\u7684\u5b57\u6bb5\ndb.orders.createIndex({ status: 1 });\n\n// \u6392\u5e8f\u5b57\u6bb5\ndb.posts.createIndex({ createTime: -1 });\n\n// \u5173\u8054\u67e5\u8be2\u5b57\u6bb5\ndb.comments.createIndex({ postId: 1 });\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9009\u62e9\u5408\u9002\u7684\u7d22\u5f15\u5b57\u6bb5\u80fd\u591f\u663e\u8457\u63d0\u5347\u67e5\u8be2\u6027\u80fd\uff0c\u7279\u522b\u662f\u5728\u5904\u7406\u5927\u91cf\u6570\u636e\u65f6\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u7d22\u5f15\u7ef4\u62a4",children:"\u7d22\u5f15\u7ef4\u62a4"}),"\n",(0,r.jsx)(n.p,{children:"\u5b9a\u671f\u68c0\u67e5\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u67e5\u770b\u96c6\u5408\u7d22\u5f15\ndb.users.getIndexes();\n\n// \u5220\u9664\u4e0d\u518d\u4f7f\u7528\u7684\u7d22\u5f15\ndb.users.dropIndex('index_name');\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5b9a\u671f\u7ef4\u62a4\u7d22\u5f15\u6709\u52a9\u4e8e\u4f18\u5316\u5b58\u50a8\u7a7a\u95f4\u5e76\u63d0\u5347\u6570\u636e\u5e93\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6027\u80fd\u76d1\u63a7",children:"\u6027\u80fd\u76d1\u63a7"}),"\n",(0,r.jsx)(n.h3,{id:"\u6162\u67e5\u8be2\u5206\u6790",children:"\u6162\u67e5\u8be2\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u542f\u6162\u67e5\u8be2\u65e5\u5fd7\uff0c\u76d1\u63a7\u8017\u65f6\u64cd\u4f5c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.setProfilingLevel(1, { slowms: 100 });\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u5206\u6790\u6162\u67e5\u8be2\u65e5\u5fd7\uff0c\u7b14\u8005\u80fd\u591f\u8bc6\u522b\u5e76\u4f18\u5316\u6027\u80fd\u8f83\u5dee\u7684\u67e5\u8be2\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8d44\u6e90\u4f7f\u7528\u76d1\u63a7",children:"\u8d44\u6e90\u4f7f\u7528\u76d1\u63a7"}),"\n",(0,r.jsx)(n.p,{children:"\u76d1\u63a7\u7d22\u5f15\u5927\u5c0f\u548c\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u67e5\u770b\u7d22\u5f15\u5927\u5c0f\ndb.users.stats().indexSizes;\n\n// \u67e5\u770b\u6570\u636e\u5e93\u5185\u5b58\u4f7f\u7528\ndb.serverStatus().mem;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e86\u89e3\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u6709\u52a9\u4e8e\u505a\u51fa\u5408\u7406\u7684\u6027\u80fd\u4f18\u5316\u51b3\u7b56\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u7d22\u5f15\u65f6\u9700\u8003\u8651\u5176\u5bf9\u5199\u64cd\u4f5c\u7684\u5f71\u54cd\uff0c\u907f\u514d\u8fc7\u591a\u7d22\u5f15\u5bfc\u81f4\u5199\u5165\u6027\u80fd\u4e0b\u964d\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>l});var s=d(96540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);