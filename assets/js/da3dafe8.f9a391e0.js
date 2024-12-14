"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["30995"],{62855:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>t,contentTitle:()=>l});var s=JSON.parse('{"id":"Backend/MongoDB/MongoDB\u7D22\u5F15\u4E0E\u67E5\u8BE2","title":"MongoDB \u7D22\u5F15\u4E0E\u67E5\u8BE2\u4F18\u5316","description":"\u7D22\u5F15\u57FA\u7840","source":"@site/docs/Backend/MongoDB/020-MongoDB\u7D22\u5F15\u4E0E\u67E5\u8BE2.md","sourceDirName":"Backend/MongoDB","slug":"/Backend/MongoDB/MongoDB\u7D22\u5F15\u4E0E\u67E5\u8BE2","permalink":"/docs-hub/Backend/MongoDB/MongoDB\u7D22\u5F15\u4E0E\u67E5\u8BE2","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/MongoDB/020-MongoDB\u7D22\u5F15\u4E0E\u67E5\u8BE2.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":20,"frontMatter":{},"sidebar":"mongodbSidebar","previous":{"title":"MongoDB \u5B89\u88C5\u4E0E\u4F7F\u7528\u6307\u5357","permalink":"/docs-hub/Backend/MongoDB/MongoDB\u5B89\u88C5\u4E0E\u4F7F\u7528"},"next":{"title":"MongoDB \u805A\u5408\u64CD\u4F5C\u4E0E\u6570\u636E\u5EFA\u6A21","permalink":"/docs-hub/Backend/MongoDB/MongoDB\u805A\u5408\u4E0E\u5EFA\u6A21"}}'),r=d("85893"),i=d("50065");let c={},l="MongoDB \u7D22\u5F15\u4E0E\u67E5\u8BE2\u4F18\u5316",a={},t=[{value:"\u7D22\u5F15\u57FA\u7840",id:"\u7D22\u5F15\u57FA\u7840",level:2},{value:"\u521B\u5EFA\u7D22\u5F15",id:"\u521B\u5EFA\u7D22\u5F15",level:3},{value:"\u7D22\u5F15\u7C7B\u578B",id:"\u7D22\u5F15\u7C7B\u578B",level:3},{value:"\u67E5\u8BE2\u4F18\u5316",id:"\u67E5\u8BE2\u4F18\u5316",level:2},{value:"\u67E5\u8BE2\u5206\u6790",id:"\u67E5\u8BE2\u5206\u6790",level:3},{value:"\u8986\u76D6\u67E5\u8BE2",id:"\u8986\u76D6\u67E5\u8BE2",level:3},{value:"\u7D22\u5F15\u7B56\u7565",id:"\u7D22\u5F15\u7B56\u7565",level:2},{value:"\u9009\u62E9\u7D22\u5F15\u5B57\u6BB5",id:"\u9009\u62E9\u7D22\u5F15\u5B57\u6BB5",level:3},{value:"\u7D22\u5F15\u7EF4\u62A4",id:"\u7D22\u5F15\u7EF4\u62A4",level:3},{value:"\u6027\u80FD\u76D1\u63A7",id:"\u6027\u80FD\u76D1\u63A7",level:2},{value:"\u6162\u67E5\u8BE2\u5206\u6790",id:"\u6162\u67E5\u8BE2\u5206\u6790",level:3},{value:"\u8D44\u6E90\u4F7F\u7528\u76D1\u63A7",id:"\u8D44\u6E90\u4F7F\u7528\u76D1\u63A7",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mongodb-\u7D22\u5F15\u4E0E\u67E5\u8BE2\u4F18\u5316",children:"MongoDB \u7D22\u5F15\u4E0E\u67E5\u8BE2\u4F18\u5316"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7D22\u5F15\u57FA\u7840",children:"\u7D22\u5F15\u57FA\u7840"}),"\n",(0,r.jsx)(n.h3,{id:"\u521B\u5EFA\u7D22\u5F15",children:"\u521B\u5EFA\u7D22\u5F15"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 MongoDB \u4E2D\uFF0C\u7B14\u8005\u7ECF\u5E38\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"createIndex()"})," \u65B9\u6CD5\u6765\u521B\u5EFA\u7D22\u5F15\u3002\u5355\u5B57\u6BB5\u7D22\u5F15\u662F\u6700\u57FA\u672C\u7684\u7D22\u5F15\u7C7B\u578B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.users.createIndex({ username: 1 });\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"1"})," \u8868\u793A\u5347\u5E8F\u7D22\u5F15\uFF0C",(0,r.jsx)(n.code,{children:"-1"})," \u8868\u793A\u964D\u5E8F\u7D22\u5F15\u3002\u5BF9\u4E8E\u7ECF\u5E38\u67E5\u8BE2\u7684\u5B57\u6BB5\uFF0C\u5EFA\u8BAE\u521B\u5EFA\u590D\u5408\u7D22\u5F15\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.orders.createIndex({ userId: 1, orderDate: -1 });\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7D22\u5F15\u7C7B\u578B",children:"\u7D22\u5F15\u7C7B\u578B"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u4EE5\u4E0B\u7D22\u5F15\u7C7B\u578B\u975E\u5E38\u6709\u7528\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u552F\u4E00\u7D22\u5F15\ndb.users.createIndex({ email: 1 }, { unique: true });\n\n// \u90E8\u5206\u7D22\u5F15\ndb.products.createIndex({ price: 1 }, { partialFilterExpression: { quantity: { $gt: 0 } } });\n\n// \u6587\u672C\u7D22\u5F15\ndb.articles.createIndex({ content: 'text' });\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u552F\u4E00\u7D22\u5F15\u786E\u4FDD\u5B57\u6BB5\u503C\u7684\u552F\u4E00\u6027\uFF0C\u90E8\u5206\u7D22\u5F15\u4EC5\u7D22\u5F15\u6EE1\u8DB3\u7279\u5B9A\u6761\u4EF6\u7684\u6587\u6863\uFF0C\u6587\u672C\u7D22\u5F15\u5219\u7528\u4E8E\u5168\u6587\u641C\u7D22\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u67E5\u8BE2\u4F18\u5316",children:"\u67E5\u8BE2\u4F18\u5316"}),"\n",(0,r.jsx)(n.h3,{id:"\u67E5\u8BE2\u5206\u6790",children:"\u67E5\u8BE2\u5206\u6790"}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"explain()"})," \u65B9\u6CD5\u5206\u6790\u67E5\u8BE2\u6027\u80FD\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.users.find({ age: { $gt: 21 } }).explain('executionStats');\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6B64\u65B9\u6CD5\u63D0\u4F9B\u67E5\u8BE2\u6267\u884C\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u6709\u52A9\u4E8E\u8BC6\u522B\u6027\u80FD\u74F6\u9888\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8986\u76D6\u67E5\u8BE2",children:"\u8986\u76D6\u67E5\u8BE2"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u53EA\u8FD4\u56DE\u7D22\u5F15\u5B57\u6BB5\u6765\u4F18\u5316\u67E5\u8BE2\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.users.find({ age: { $gt: 21 } }, { _id: 0, username: 1 }).hint({ username: 1 });\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8986\u76D6\u67E5\u8BE2\u51CF\u5C11\u4E86\u9700\u8981\u8BFB\u53D6\u7684\u6570\u636E\u91CF\uFF0C\u4ECE\u800C\u63D0\u5347\u67E5\u8BE2\u6548\u7387\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7D22\u5F15\u7B56\u7565",children:"\u7D22\u5F15\u7B56\u7565"}),"\n",(0,r.jsx)(n.h3,{id:"\u9009\u62E9\u7D22\u5F15\u5B57\u6BB5",children:"\u9009\u62E9\u7D22\u5F15\u5B57\u6BB5"}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u5E38\u6839\u636E\u4EE5\u4E0B\u573A\u666F\u521B\u5EFA\u7D22\u5F15\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u9891\u7E41\u67E5\u8BE2\u7684\u5B57\u6BB5\ndb.orders.createIndex({ status: 1 });\n\n// \u6392\u5E8F\u5B57\u6BB5\ndb.posts.createIndex({ createTime: -1 });\n\n// \u5173\u8054\u67E5\u8BE2\u5B57\u6BB5\ndb.comments.createIndex({ postId: 1 });\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9009\u62E9\u5408\u9002\u7684\u7D22\u5F15\u5B57\u6BB5\u80FD\u591F\u663E\u8457\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\uFF0C\u7279\u522B\u662F\u5728\u5904\u7406\u5927\u91CF\u6570\u636E\u65F6\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u7D22\u5F15\u7EF4\u62A4",children:"\u7D22\u5F15\u7EF4\u62A4"}),"\n",(0,r.jsx)(n.p,{children:"\u5B9A\u671F\u68C0\u67E5\u7D22\u5F15\u4F7F\u7528\u60C5\u51B5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u67E5\u770B\u96C6\u5408\u7D22\u5F15\ndb.users.getIndexes();\n\n// \u5220\u9664\u4E0D\u518D\u4F7F\u7528\u7684\u7D22\u5F15\ndb.users.dropIndex('index_name');\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5B9A\u671F\u7EF4\u62A4\u7D22\u5F15\u6709\u52A9\u4E8E\u4F18\u5316\u5B58\u50A8\u7A7A\u95F4\u5E76\u63D0\u5347\u6570\u636E\u5E93\u6027\u80FD\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6027\u80FD\u76D1\u63A7",children:"\u6027\u80FD\u76D1\u63A7"}),"\n",(0,r.jsx)(n.h3,{id:"\u6162\u67E5\u8BE2\u5206\u6790",children:"\u6162\u67E5\u8BE2\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u5F00\u542F\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u76D1\u63A7\u8017\u65F6\u64CD\u4F5C\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"db.setProfilingLevel(1, { slowms: 100, sampleRate: 1.0 });\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7\u5206\u6790\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u7B14\u8005\u80FD\u591F\u8BC6\u522B\u5E76\u4F18\u5316\u6027\u80FD\u8F83\u5DEE\u7684\u67E5\u8BE2\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8D44\u6E90\u4F7F\u7528\u76D1\u63A7",children:"\u8D44\u6E90\u4F7F\u7528\u76D1\u63A7"}),"\n",(0,r.jsx)(n.p,{children:"\u76D1\u63A7\u7D22\u5F15\u5927\u5C0F\u548C\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u67E5\u770B\u7D22\u5F15\u5927\u5C0F\ndb.users.stats().indexSizes;\n\n// \u67E5\u770B\u6570\u636E\u5E93\u5185\u5B58\u4F7F\u7528\ndb.serverStatus().mem;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E86\u89E3\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5\u6709\u52A9\u4E8E\u505A\u51FA\u5408\u7406\u7684\u6027\u80FD\u4F18\u5316\u51B3\u7B56\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(n.p,{children:"\u521B\u5EFA\u7D22\u5F15\u65F6\u9700\u8003\u8651\u5176\u5BF9\u5199\u64CD\u4F5C\u7684\u5F71\u54CD\uFF0C\u907F\u514D\u8FC7\u591A\u7D22\u5F15\u5BFC\u81F4\u5199\u5165\u6027\u80FD\u4E0B\u964D\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return c}});var s=d(67294);let r={},i=s.createContext(r);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);