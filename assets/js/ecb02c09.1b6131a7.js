"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["69941"],{34393:function(M,T,i){i.r(T),i.d(T,{default:()=>c,frontMatter:()=>l,metadata:()=>I,assets:()=>d,toc:()=>N,contentTitle:()=>D});var I=JSON.parse('{"id":"Network/HTTP/HTTP\u62A5\u6587-\u8BF7\u6C42\u65B9\u5F0F-GET\u4E0EPOST","title":"HTTP \u62A5\u6587\u4E0E\u8BF7\u6C42\u65B9\u5F0F","description":"\u8BF7\u6C42\u7F51\u9875\u7684\u6D41\u7A0B","source":"@site/docs/Network/HTTP/30.HTTP\u62A5\u6587-\u8BF7\u6C42\u65B9\u5F0F-GET\u4E0EPOST.md","sourceDirName":"Network/HTTP","slug":"/Network/HTTP/HTTP\u62A5\u6587-\u8BF7\u6C42\u65B9\u5F0F-GET\u4E0EPOST","permalink":"/docs-hub/Network/HTTP/HTTP\u62A5\u6587-\u8BF7\u6C42\u65B9\u5F0F-GET\u4E0EPOST","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Network/HTTP/30.HTTP\u62A5\u6587-\u8BF7\u6C42\u65B9\u5F0F-GET\u4E0EPOST.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":30,"frontMatter":{},"sidebar":"networkHttpSidebar","previous":{"title":"\u7F51\u7EDC\u57FA\u7840\u77E5\u8BC6","permalink":"/docs-hub/Network/HTTP/DNS-TCP-UDP-HTTP-HTTPS-\u4E09\u6B21\u63E1\u624B"},"next":{"title":"\u72B6\u6001\u7801","permalink":"/docs-hub/Network/HTTP/HTTP\u72B6\u6001\u7801-accept-Content-Type"}}'),n=i("85893"),e=i("50065");let l={},D="HTTP \u62A5\u6587\u4E0E\u8BF7\u6C42\u65B9\u5F0F",d={},N=[{value:"\u8BF7\u6C42\u7F51\u9875\u7684\u6D41\u7A0B",id:"\u8BF7\u6C42\u7F51\u9875\u7684\u6D41\u7A0B",level:2},{value:"HTTP \u62A5\u6587\u7EC4\u6210",id:"http-\u62A5\u6587\u7EC4\u6210",level:2},{value:"\u8BF7\u6C42\u62A5\u6587",id:"\u8BF7\u6C42\u62A5\u6587",level:3},{value:"\u54CD\u5E94\u62A5\u6587",id:"\u54CD\u5E94\u62A5\u6587",level:3},{value:"HTTP \u8BF7\u6C42\u65B9\u6CD5",id:"http-\u8BF7\u6C42\u65B9\u6CD5",level:2},{value:"GET \u548C POST \u8BF7\u6C42\u7684\u533A\u522B",id:"get-\u548C-post-\u8BF7\u6C42\u7684\u533A\u522B",level:2},{value:"POST \u8BF7\u6C42\u8FC7\u7A0B",id:"post-\u8BF7\u6C42\u8FC7\u7A0B",level:2},{value:"GET \u8BF7\u6C42\u8FC7\u7A0B",id:"get-\u8BF7\u6C42\u8FC7\u7A0B",level:2},{value:"\u6301\u4E45\u8FDE\u63A5",id:"\u6301\u4E45\u8FDE\u63A5",level:2},{value:"\u7BA1\u9053\u5316\u6301\u4E45\u8FDE\u63A5",id:"\u7BA1\u9053\u5316\u6301\u4E45\u8FDE\u63A5",level:3},{value:"\u5E42\u7B49\u6027",id:"\u5E42\u7B49\u6027",level:2},{value:"\u6570\u5B66\u4E2D\u7684\u5E42\u7B49",id:"\u6570\u5B66\u4E2D\u7684\u5E42\u7B49",level:3},{value:"HTTP \u4E2D\u7684\u5E42\u7B49\u6027",id:"http-\u4E2D\u7684\u5E42\u7B49\u6027",level:3},{value:"\u5E42\u7B49\u6027\u7684\u5FC5\u8981\u6027",id:"\u5E42\u7B49\u6027\u7684\u5FC5\u8981\u6027",level:3}];function g(M){let T={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,e.a)(),...M.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(T.header,{children:(0,n.jsx)(T.h1,{id:"http-\u62A5\u6587\u4E0E\u8BF7\u6C42\u65B9\u5F0F",children:"HTTP \u62A5\u6587\u4E0E\u8BF7\u6C42\u65B9\u5F0F"})}),"\n",(0,n.jsx)(T.h2,{id:"\u8BF7\u6C42\u7F51\u9875\u7684\u6D41\u7A0B",children:"\u8BF7\u6C42\u7F51\u9875\u7684\u6D41\u7A0B"}),"\n",(0,n.jsx)(T.p,{children:(0,n.jsx)(T.img,{alt:"\u8BF7\u6C42\u7F51\u9875\u7684\u6D41\u7A0B",src:i(40537).Z+"",width:"650",height:"371"})}),"\n",(0,n.jsx)(T.h2,{id:"http-\u62A5\u6587\u7EC4\u6210",children:"HTTP \u62A5\u6587\u7EC4\u6210"}),"\n",(0,n.jsx)(T.p,{children:"HTTP \u57FA\u4E8E\u5BA2\u6237\u7AEF/\u670D\u52A1\u5668(C/S)\u67B6\u6784\u6A21\u578B,\u901A\u8FC7\u53EF\u9760\u7684 TCP \u8FDE\u63A5\u4EA4\u6362\u534F\u8BAE,\u662F\u4E00\u4E2A\u65E0\u72B6\u6001\u7684\u8BF7\u6C42/\u54CD\u5E94\u534F\u8BAE\u3002\u6BCF\u6B21\u8FDE\u63A5\u53EA\u5904\u7406\u4E00\u4E2A\u8BF7\u6C42,\u670D\u52A1\u5668\u5904\u7406\u5B8C\u5BA2\u6237\u7684\u8BF7\u6C42\u5E76\u63A5\u6536\u5230\u5BA2\u6237\u7684\u5E94\u7B54\u540E\u5C31\u65AD\u5F00\u8FDE\u63A5\u3002\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u8282\u7701\u4F20\u8F93\u65F6\u95F4\u3002"}),"\n",(0,n.jsx)(T.p,{children:"HTTP \u62A5\u6587\u7531\u4E09\u90E8\u5206\u7EC4\u6210:"}),"\n",(0,n.jsxs)(T.ol,{children:["\n",(0,n.jsx)(T.li,{children:"\u8D77\u59CB\u884C:\u63CF\u8FF0\u8BF7\u6C42\u6216\u54CD\u5E94\u7684\u57FA\u672C\u4FE1\u606F"}),"\n",(0,n.jsx)(T.li,{children:"\u5934\u90E8\u5B57\u6BB5:\u4F7F\u7528 key-value \u5F62\u5F0F\u66F4\u8BE6\u7EC6\u5730\u8BF4\u660E\u62A5\u6587"}),"\n",(0,n.jsx)(T.li,{children:"\u6D88\u606F\u6B63\u6587:\u5B9E\u9645\u4F20\u8F93\u7684\u6570\u636E,\u53EF\u4EE5\u662F\u6587\u672C,\u56FE\u7247,\u89C6\u9891,\u97F3\u9891\u7B49\u5185\u5BB9"}),"\n"]}),"\n",(0,n.jsx)(T.p,{children:(0,n.jsx)(T.img,{alt:"\u53D1\u9001\u62A5\u6587",src:i(80203).Z+"",width:"1179",height:"383"})}),"\n",(0,n.jsx)(T.h3,{id:"\u8BF7\u6C42\u62A5\u6587",children:"\u8BF7\u6C42\u62A5\u6587"}),"\n",(0,n.jsx)(T.p,{children:"\u8BF7\u6C42\u62A5\u6587\u7531\u8BF7\u6C42\u884C\u3001\u8BF7\u6C42\u5934\u90E8\u3001\u7A7A\u884C\u548C\u8BF7\u6C42\u6570\u636E 4 \u4E2A\u90E8\u5206\u7EC4\u6210\u3002"}),"\n",(0,n.jsx)(T.p,{children:(0,n.jsx)(T.img,{alt:"\u8BF7\u6C42\u62A5\u6587",src:i(32244).Z+"",width:"897",height:"529"})}),"\n",(0,n.jsx)(T.h3,{id:"\u54CD\u5E94\u62A5\u6587",children:"\u54CD\u5E94\u62A5\u6587"}),"\n",(0,n.jsx)(T.p,{children:"\u54CD\u5E94\u62A5\u6587\u7531\u72B6\u6001\u884C\u3001\u6D88\u606F\u62A5\u5934\u3001\u7A7A\u884C\u548C\u54CD\u5E94\u6B63\u6587 4 \u4E2A\u90E8\u5206\u7EC4\u6210\u3002"}),"\n",(0,n.jsx)(T.p,{children:(0,n.jsx)(T.img,{alt:"\u54CD\u5E94\u62A5\u6587",src:i(6783).Z+"",width:"629",height:"295"})}),"\n",(0,n.jsx)(T.h2,{id:"http-\u8BF7\u6C42\u65B9\u6CD5",children:"HTTP \u8BF7\u6C42\u65B9\u6CD5"}),"\n",(0,n.jsxs)(T.p,{children:["HTTP1.0 \u5B9A\u4E49\u4E86\u4E09\u79CD\u8BF7\u6C42\u65B9\u6CD5",":GET","\u3001POST \u548C HEAD \u65B9\u6CD5\u3002"]}),"\n",(0,n.jsxs)(T.p,{children:["HTTP1.1 \u65B0\u589E\u4E86\u4E94\u79CD\u8BF7\u6C42\u65B9\u6CD5",":OPTIONS","\u3001PUT\u3001DELETE\u3001TRACE \u548C CONNECT \u65B9\u6CD5\u3002"]}),"\n",(0,n.jsxs)(T.table,{children:[(0,n.jsx)(T.thead,{children:(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.th,{children:"\u5E8F\u53F7"}),(0,n.jsx)(T.th,{children:"\u65B9\u6CD5"}),(0,n.jsx)(T.th,{children:"\u63CF\u8FF0"})]})}),(0,n.jsxs)(T.tbody,{children:[(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.td,{children:"1"}),(0,n.jsx)(T.td,{children:"GET"}),(0,n.jsx)(T.td,{children:"\u8BF7\u6C42\u6307\u5B9A\u7684\u9875\u9762\u4FE1\u606F,\u5E76\u8FD4\u56DE\u5B9E\u4F53\u4E3B\u4F53\u3002"})]}),(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.td,{children:"2"}),(0,n.jsx)(T.td,{children:"HEAD"}),(0,n.jsx)(T.td,{children:"\u7C7B\u4F3C\u4E8E get \u8BF7\u6C42,\u53EA\u4E0D\u8FC7\u8FD4\u56DE\u7684\u54CD\u5E94\u4E2D\u6CA1\u6709\u5177\u4F53\u7684\u5185\u5BB9,\u7528\u4E8E\u83B7\u53D6\u62A5\u5934"})]}),(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.td,{children:"3"}),(0,n.jsx)(T.td,{children:"POST"}),(0,n.jsx)(T.td,{children:"\u5411\u6307\u5B9A\u8D44\u6E90\u63D0\u4EA4\u6570\u636E\u8FDB\u884C\u5904\u7406\u8BF7\u6C42(\u4F8B\u5982\u63D0\u4EA4\u8868\u5355\u6216\u8005\u4E0A\u4F20\u6587\u4EF6)\u3002\u6570\u636E\u88AB\u5305\u542B\u5728\u8BF7\u6C42\u4F53\u4E2D\u3002POST \u8BF7\u6C42\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65B0\u7684\u8D44\u6E90\u7684\u5EFA\u7ACB\u548C/\u6216\u5DF2\u6709\u8D44\u6E90\u7684\u4FEE\u6539\u3002"})]}),(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.td,{children:"4"}),(0,n.jsx)(T.td,{children:"PUT"}),(0,n.jsx)(T.td,{children:"\u4ECE\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u4F20\u9001\u7684\u6570\u636E\u53D6\u4EE3\u6307\u5B9A\u7684\u6587\u6863\u7684\u5185\u5BB9\u3002"})]}),(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.td,{children:"5"}),(0,n.jsx)(T.td,{children:"DELETE"}),(0,n.jsx)(T.td,{children:"\u8BF7\u6C42\u670D\u52A1\u5668\u5220\u9664\u6307\u5B9A\u7684\u9875\u9762\u3002"})]}),(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.td,{children:"6"}),(0,n.jsx)(T.td,{children:"CONNECT"}),(0,n.jsx)(T.td,{children:"HTTP/1.1 \u534F\u8BAE\u4E2D\u9884\u7559\u7ED9\u80FD\u591F\u5C06\u8FDE\u63A5\u6539\u4E3A\u7BA1\u9053\u65B9\u5F0F\u7684\u4EE3\u7406\u670D\u52A1\u5668\u3002"})]}),(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.td,{children:"7"}),(0,n.jsx)(T.td,{children:"OPTIONS"}),(0,n.jsx)(T.td,{children:"\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u770B\u670D\u52A1\u5668\u7684\u6027\u80FD\u3002"})]}),(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.td,{children:"8"}),(0,n.jsx)(T.td,{children:"TRACE"}),(0,n.jsx)(T.td,{children:"\u56DE\u663E\u670D\u52A1\u5668\u6536\u5230\u7684\u8BF7\u6C42,\u4E3B\u8981\u7528\u4E8E\u6D4B\u8BD5\u6216\u8BCA\u65AD\u3002"})]}),(0,n.jsxs)(T.tr,{children:[(0,n.jsx)(T.td,{children:"9"}),(0,n.jsx)(T.td,{children:"PATCH"}),(0,n.jsx)(T.td,{children:"\u662F\u5BF9 PUT \u65B9\u6CD5\u7684\u8865\u5145,\u7528\u6765\u5BF9\u5DF2\u77E5\u8D44\u6E90\u8FDB\u884C\u5C40\u90E8\u66F4\u65B0 \u3002"})]})]})]}),"\n",(0,n.jsx)(T.h2,{id:"get-\u548C-post-\u8BF7\u6C42\u7684\u533A\u522B",children:"GET \u548C POST \u8BF7\u6C42\u7684\u533A\u522B"}),"\n",(0,n.jsx)(T.p,{children:"GET \u548C POST \u662F HTTP \u8BF7\u6C42\u7684\u4E24\u79CD\u57FA\u672C\u65B9\u6CD5,\u8981\u8BF4\u5B83\u4EEC\u7684\u533A\u522B,\u5927\u81F4\u6709\u4EE5\u4E0B\u51E0\u70B9:"}),"\n",(0,n.jsxs)(T.ol,{children:["\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u8BF7\u6C42\u53C2\u6570\u901A\u8FC7 URL \u4F20\u9012,POST \u653E\u5728 Request body \u4E2D\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u8BF7\u6C42\u5728 URL \u4E2D\u4F20\u9001\u7684\u53C2\u6570\u662F\u6709\u957F\u5EA6\u9650\u5236\u7684,\u800C POST \u6CA1\u6709\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u6BD4 POST \u66F4\u4E0D\u5B89\u5168,\u56E0\u4E3A\u53C2\u6570\u76F4\u63A5\u66B4\u9732\u5728 URL \u4E0A,\u6240\u4EE5\u4E0D\u80FD\u7528\u6765\u4F20\u9012\u654F\u611F\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u8BF7\u6C42\u53EA\u80FD\u8FDB\u884C url \u7F16\u7801,\u800C POST \u652F\u6301\u591A\u79CD\u7F16\u7801\u65B9\u5F0F\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u8BF7\u6C42\u7684\u53C2\u6570\u6570\u636E\u4F1A\u88AB\u5B8C\u6574\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u91CC,\u800C POST \u4E2D\u7684\u53C2\u6570\u4E0D\u4F1A\u88AB\u4FDD\u7559\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u5BF9\u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B,GET \u53EA\u63A5\u53D7 ASCII \u5B57\u7B26,\u800C POST \u6CA1\u6709\u9650\u5236\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u4EA7\u751F\u4E00\u4E2A TCP \u6570\u636E\u5305,POST \u4EA7\u751F\u4E24\u4E2A TCP \u6570\u636E\u5305\u3002(\u975E\u5FC5\u7136,\u8BE6\u60C5\u8BF7\u70B9\u51FB)"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u8BF7\u6C42\u4F1A\u88AB\u6D4F\u89C8\u5668\u4E3B\u52A8 cache,\u800C POST \u4E0D\u4F1A,\u9664\u975E\u624B\u52A8\u8BBE\u7F6E\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u8BF7\u6C42\u53EA\u80FD\u8FDB\u884C url \u7F16\u7801,\u800C POST \u652F\u6301\u591A\u79CD\u7F16\u7801\u65B9\u5F0F\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u8BF7\u6C42\u53C2\u6570\u4F1A\u88AB\u5B8C\u6574\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u91CC,\u800C POST \u4E2D\u7684\u53C2\u6570\u4E0D\u4F1A\u88AB\u4FDD\u7559\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u5BF9\u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B,GET \u53EA\u63A5\u53D7 ASCII \u5B57\u7B26,\u800C POST \u6CA1\u6709\u9650\u5236\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u548C POST \u672C\u8D28\u4E0A\u5C31\u662F TCP \u94FE\u63A5,\u5E76\u65E0\u5DEE\u522B\u3002\u4F46\u662F\u7531\u4E8E HTTP \u7684\u89C4\u5B9A\u548C\u6D4F\u89C8\u5668/\u670D\u52A1\u5668\u7684\u9650\u5236,\u5BFC\u81F4\u4ED6\u4EEC\u5728\u5E94\u7528\u8FC7\u7A0B\u4E2D\u4F53\u73B0\u51FA\u4E00\u4E9B\u4E0D\u540C\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(T.h2,{id:"post-\u8BF7\u6C42\u8FC7\u7A0B",children:"POST \u8BF7\u6C42\u8FC7\u7A0B"}),"\n",(0,n.jsxs)(T.ol,{children:["\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u6D4F\u89C8\u5668\u53D1\u9001 TCP \u8FDE\u63A5\u8BF7\u6C42\u5230\u670D\u52A1\u5668,\u670D\u52A1\u5668\u548C\u6D4F\u89C8\u5668\u5EFA\u7ACB TCP \u4E09\u6B21\u63E1\u624B\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u63E1\u624B\u6210\u529F\u540E,\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u5668\u53D1\u9001 HTTP POST \u8BF7\u6C42,\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4E86\u8981\u8BBF\u95EE\u7684 URL \u5730\u5740\u3001HTTP \u7248\u672C\u53F7\u3001\u8BF7\u6C42\u65B9\u6CD5\u7B49\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u670D\u52A1\u5668\u63A5\u6536\u5230\u8BF7\u6C42\u540E,\u4F1A\u5BF9\u8BF7\u6C42\u5934\u8FDB\u884C\u68C0\u67E5,\u5982\u679C\u8BF7\u6C42\u5934\u6709\u95EE\u9898,\u5C31\u4F1A\u8FD4\u56DE\u76F8\u5E94\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u5982\u679C\u6CA1\u95EE\u9898,\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE 100 Continue \u54CD\u5E94,\u8868\u793A\u5BA2\u6237\u7AEF\u53EF\u4EE5\u7EE7\u7EED\u53D1\u9001\u8BF7\u6C42\u4F53\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u6D4F\u89C8\u5668\u6536\u5230 100 Continue \u54CD\u5E94\u540E,\u5F00\u59CB\u53D1\u9001\u8BF7\u6C42\u4F53\u3002\u8BF7\u6C42\u4F53\u53EF\u4EE5\u5305\u542B\u6587\u672C\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\u5185\u5BB9\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u670D\u52A1\u5668\u6536\u5230\u8BF7\u6C42\u4F53\u540E,\u4F1A\u5BF9\u8BF7\u6C42\u4F53\u8FDB\u884C\u5904\u7406\u3002\u5982\u679C\u5904\u7406\u6210\u529F,\u5C31\u8FD4\u56DE 200 OK \u54CD\u5E94,\u5E76\u5728\u54CD\u5E94\u5934\u4E2D\u5305\u542B\u4E86\u5904\u7406\u7ED3\u679C\u7684\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u6D4F\u89C8\u5668\u6536\u5230\u54CD\u5E94\u540E,\u4F1A\u6839\u636E\u54CD\u5E94\u5934\u4E2D\u7684\u4FE1\u606F\u6765\u663E\u793A\u54CD\u5E94\u5185\u5BB9,\u6BD4\u5982\u5C06\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTML \u6587\u672C\u89E3\u6790\u5E76\u6E32\u67D3\u51FA\u6765\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(T.h2,{id:"get-\u8BF7\u6C42\u8FC7\u7A0B",children:"GET \u8BF7\u6C42\u8FC7\u7A0B"}),"\n",(0,n.jsxs)(T.ol,{children:["\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u6D4F\u89C8\u5668\u53D1\u9001 TCP \u8FDE\u63A5\u8BF7\u6C42\u5230\u670D\u52A1\u5668,\u670D\u52A1\u5668\u548C\u6D4F\u89C8\u5668\u5EFA\u7ACB TCP \u4E09\u6B21\u63E1\u624B\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u63E1\u624B\u6210\u529F\u540E,\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u5668\u53D1\u9001 HTTP GET \u8BF7\u6C42,\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4E86\u8981\u8BBF\u95EE\u7684 URL \u5730\u5740\u3001HTTP \u7248\u672C\u53F7\u3001\u8BF7\u6C42\u65B9\u6CD5\u7B49\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u670D\u52A1\u5668\u63A5\u6536\u5230\u8BF7\u6C42\u540E,\u4F1A\u5BF9\u8BF7\u6C42\u5934\u8FDB\u884C\u68C0\u67E5,\u5982\u679C\u8BF7\u6C42\u5934\u6709\u95EE\u9898,\u5C31\u4F1A\u8FD4\u56DE\u76F8\u5E94\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u5982\u679C\u6CA1\u95EE\u9898,\u670D\u52A1\u5668\u4F1A\u5728\u54CD\u5E94\u5934\u4E2D\u8FD4\u56DE 200 OK,\u8868\u793A\u8BF7\u6C42\u6210\u529F\u3002\u540C\u65F6,\u54CD\u5E94\u5934\u4E2D\u8FD8\u4F1A\u5305\u542B\u8BF7\u6C42\u7684 URL \u5730\u5740\u3001HTTP \u7248\u672C\u53F7\u3001\u5185\u5BB9\u7C7B\u578B\u3001\u5185\u5BB9\u957F\u5EA6\u7B49\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"\u6D4F\u89C8\u5668\u6536\u5230\u54CD\u5E94\u540E,\u4F1A\u6839\u636E\u54CD\u5E94\u5934\u4E2D\u7684\u4FE1\u606F\u6765\u663E\u793A\u54CD\u5E94\u5185\u5BB9,\u6BD4\u5982\u5C06\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTML \u6587\u672C\u89E3\u6790\u5E76\u6E32\u67D3\u51FA\u6765\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(T.h2,{id:"\u6301\u4E45\u8FDE\u63A5",children:"\u6301\u4E45\u8FDE\u63A5"}),"\n",(0,n.jsx)(T.p,{children:'HTTP \u534F\u8BAE\u91C7\u7528"\u8BF7\u6C42-\u5E94\u7B54"\u6A21\u5F0F,\u5F53\u4F7F\u7528\u666E\u901A\u6A21\u5F0F,\u5373\u975E Keep-Alive \u6A21\u5F0F\u65F6,\u6BCF\u4E2A\u8BF7\u6C42/\u5E94\u7B54\u5BA2\u6237\u548C\u670D\u52A1\u5668\u90FD\u8981\u65B0\u5EFA\u4E00\u4E2A\u8FDE\u63A5,\u5B8C\u6210\u4E4B\u540E\u7ACB\u5373\u65AD\u5F00\u8FDE\u63A5(HTTP \u534F\u8BAE\u4E3A\u65E0\u8FDE\u63A5\u7684\u534F\u8BAE)\u3002'}),"\n",(0,n.jsx)(T.p,{children:"\u5F53\u4F7F\u7528 Keep-Alive \u6A21\u5F0F(\u53C8\u79F0\u6301\u4E45\u8FDE\u63A5\u3001\u8FDE\u63A5\u91CD\u7528)\u65F6,Keep-Alive \u529F\u80FD\u4F7F\u5BA2\u6237\u7AEF\u5230\u670D\u52A1\u5668\u7AEF\u7684\u8FDE\u63A5\u6301\u7EED\u6709\u6548,\u5F53\u51FA\u73B0\u5BF9\u670D\u52A1\u5668\u7684\u540E\u7EE7\u8BF7\u6C42\u65F6,Keep-Alive \u529F\u80FD\u907F\u514D\u4E86\u5EFA\u7ACB\u6216\u8005\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u3002"}),"\n",(0,n.jsx)(T.h3,{id:"\u7BA1\u9053\u5316\u6301\u4E45\u8FDE\u63A5",children:"\u7BA1\u9053\u5316\u6301\u4E45\u8FDE\u63A5"}),"\n",(0,n.jsx)(T.p,{children:"HTTP/1.1 \u8FD8\u5141\u8BB8\u5BA2\u6237\u7AEF\u4E0D\u7528\u7B49\u5F85\u4E0A\u4E00\u6B21\u8BF7\u6C42\u7ED3\u679C\u8FD4\u56DE,\u5C31\u53EF\u4EE5\u53D1\u51FA\u4E0B\u4E00\u6B21\u8BF7\u6C42,\u4F46\u670D\u52A1\u5668\u7AEF\u5FC5\u987B\u6309\u7167\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5148\u540E\u987A\u5E8F\u4F9D\u6B21\u56DE\u9001\u54CD\u5E94\u7ED3\u679C,\u4EE5\u4FDD\u8BC1\u5BA2\u6237\u7AEF\u80FD\u591F\u533A\u5206\u51FA\u6BCF\u6B21\u8BF7\u6C42\u7684\u54CD\u5E94\u5185\u5BB9,\u8FD9\u6837\u4E5F\u663E\u8457\u5730\u51CF\u5C11\u4E86\u6574\u4E2A\u4E0B\u8F7D\u8FC7\u7A0B\u6240\u9700\u8981\u7684\u65F6\u95F4\u3002"}),"\n",(0,n.jsx)(T.p,{children:(0,n.jsx)(T.img,{alt:"\u7BA1\u9053\u5316\u6301\u4E45\u8FDE\u63A5",src:i(40994).Z+"",width:"855",height:"432"})}),"\n",(0,n.jsx)(T.h2,{id:"\u5E42\u7B49\u6027",children:"\u5E42\u7B49\u6027"}),"\n",(0,n.jsx)(T.p,{children:"\u5E42\u7B49\u6027\u662F HTTP \u534F\u8BAE\u63D0\u4F9B\u7684\u4E00\u79CD\u4FDD\u8BC1,\u4F7F\u5F97\u591A\u6B21\u8BF7\u6C42\u7684\u6548\u679C\u4E0E\u4E00\u6B21\u8BF7\u6C42\u7684\u6548\u679C\u76F8\u540C\u3002"}),"\n",(0,n.jsx)(T.h3,{id:"\u6570\u5B66\u4E2D\u7684\u5E42\u7B49",children:"\u6570\u5B66\u4E2D\u7684\u5E42\u7B49"}),"\n",(0,n.jsx)(T.p,{children:"\u5728\u6570\u5B66\u4E2D,\u5E42\u7B49\u662F\u6307 N \u6B21\u53D8\u6362\u4E0E 1 \u6B21\u53D8\u6362\u7684\u7ED3\u679C\u76F8\u540C\u3002"}),"\n",(0,n.jsxs)(T.p,{children:[(0,n.jsx)(T.img,{alt:"\u5E42\u7B49\u793A\u4F8B",src:i(31480).Z+"",width:"54",height:"19"}),"\n",(0,n.jsx)(T.img,{alt:"\u5E42\u7B49\u793A\u4F8B",src:i(17039).Z+"",width:"64",height:"23"})]}),"\n",(0,n.jsx)(T.h3,{id:"http-\u4E2D\u7684\u5E42\u7B49\u6027",children:"HTTP \u4E2D\u7684\u5E42\u7B49\u6027"}),"\n",(0,n.jsx)(T.p,{children:"\u5728 HTTP \u4E2D,\u5E42\u7B49\u6027\u662F\u6307\u591A\u6B21\u6267\u884C\u540C\u4E00\u4E2A\u8BF7\u6C42,\u7ED3\u679C\u4E5F\u90FD\u4E00\u6837,\u4E0D\u4F1A\u56E0\u4E3A\u591A\u6B21\u8BF7\u6C42\u800C\u4EA7\u751F\u526F\u4F5C\u7528\u3002"}),"\n",(0,n.jsxs)(T.ol,{children:["\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"GET \u8BF7\u6C42\u5C31\u662F\u4E00\u4E2A\u5178\u578B\u7684\u5E42\u7B49\u8BF7\u6C42\u3002\u65E0\u8BBA\u4F60\u5BF9\u4E00\u4E2A URL \u5730\u5740\u6267\u884C\u591A\u5C11\u6B21 GET \u8BF7\u6C42,\u7ED3\u679C\u90FD\u662F\u4E00\u6837\u7684\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"POST \u8BF7\u6C42\u4E0D\u662F\u5E42\u7B49\u7684\u3002\u6BD4\u5982,\u6211\u4EEC\u591A\u6B21\u53D1\u9001\u4E00\u4E2A POST \u8BF7\u6C42,\u5C31\u4F1A\u521B\u5EFA\u591A\u4E2A\u8D44\u6E90\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"PUT \u8BF7\u6C42\u662F\u5E42\u7B49\u7684,\u56E0\u4E3A PUT \u8BF7\u6C42\u662F\u5BF9\u5DF2\u5B58\u5728\u8D44\u6E90\u7684\u5168\u90E8\u66F4\u65B0,\u6240\u4EE5\u591A\u6B21 PUT \u7684\u7ED3\u679C\u5E76\u65E0\u5DEE\u5F02\u3002"}),"\n"]}),"\n",(0,n.jsxs)(T.li,{children:["\n",(0,n.jsx)(T.p,{children:"DELETE \u8BF7\u6C42\u4E5F\u662F\u5E42\u7B49\u7684,\u56E0\u4E3A\u6211\u4EEC\u591A\u6B21 DELETE \u4E00\u4E2A\u8D44\u6E90,\u8D44\u6E90\u53EA\u4F1A\u88AB\u5220\u9664\u4E00\u6B21\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(T.h3,{id:"\u5E42\u7B49\u6027\u7684\u5FC5\u8981\u6027",children:"\u5E42\u7B49\u6027\u7684\u5FC5\u8981\u6027"}),"\n",(0,n.jsx)(T.p,{children:"\u5728\u7F51\u7EDC\u4F20\u8F93\u4E2D,\u53EF\u80FD\u4F1A\u53D1\u751F\u8BF7\u6C42\u4E22\u5931\u6216\u8005\u8BF7\u6C42\u91CD\u590D\u7684\u60C5\u51B5\u3002\u5982\u679C\u4F7F\u7528\u7684\u662F\u975E\u5E42\u7B49\u8BF7\u6C42,\u5C31\u53EF\u80FD\u4F1A\u9020\u6210\u8D44\u6E90\u72B6\u6001\u7684\u4E0D\u4E00\u81F4\u3002"}),"\n",(0,n.jsx)(T.p,{children:"\u6BD4\u5982,\u6211\u4EEC\u8981\u5220\u9664\u4E00\u4E2A\u8D44\u6E90,\u7ED3\u679C\u8BF7\u6C42\u4E22\u5931\u4E86,\u5BA2\u6237\u7AEF\u4EE5\u4E3A\u5220\u9664\u6210\u529F\u800C\u670D\u52A1\u7AEF\u5E76\u6CA1\u6709\u5220\u9664\u8D44\u6E90,\u8FD9\u5C31\u9020\u6210\u4E86\u72B6\u6001\u4E0D\u4E00\u81F4\u3002\u5982\u679C\u6211\u4EEC\u591A\u6B21\u53D1\u9001\u5220\u9664\u8BF7\u6C42,\u670D\u52A1\u7AEF\u53EF\u80FD\u5C31\u4F1A\u628A\u8D44\u6E90\u5220\u9664\u591A\u6B21,\u8FD9\u4E5F\u662F\u72B6\u6001\u4E0D\u4E00\u81F4\u3002"}),"\n",(0,n.jsx)(T.p,{children:"\u800C\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u7684\u662F\u5E42\u7B49\u8BF7\u6C42,\u6BD4\u5982 DELETE \u8BF7\u6C42,\u5373\u4F7F\u8BF7\u6C42\u6709\u4E22\u5931\u6216\u8005\u91CD\u590D,\u6700\u540E\u8D44\u6E90\u72B6\u6001\u90FD\u662F\u4E00\u81F4\u7684\u3002\u8981\u4E48\u8D44\u6E90\u88AB\u5220\u9664,\u8981\u4E48\u8D44\u6E90\u4FDD\u6301\u539F\u6837,\u4E0D\u4F1A\u51FA\u73B0\u8D44\u6E90\u88AB\u5220\u9664\u591A\u6B21\u7684\u60C5\u51B5\u3002"}),"\n",(0,n.jsx)(T.p,{children:"\u6240\u4EE5,\u5728\u7F51\u7EDC\u5E94\u7528\u4E2D,\u7279\u522B\u662F\u6D89\u53CA\u5230\u8D44\u6E90\u72B6\u6001\u53D8\u66F4\u7684\u60C5\u51B5\u4E0B,\u6211\u4EEC\u5E94\u8BE5\u5C3D\u91CF\u4F7F\u7528\u5E42\u7B49\u8BF7\u6C42,\u6BD4\u5982 PUT \u548C DELETE,\u907F\u514D\u4F7F\u7528\u975E\u5E42\u7B49\u8BF7\u6C42\u3002\u8FD9\u6837\u53EF\u4EE5\u63D0\u9AD8\u7CFB\u7EDF\u7684\u5065\u58EE\u6027,\u907F\u514D\u8BF7\u6C42\u4E22\u5931\u6216\u91CD\u590D\u5BFC\u81F4\u7684\u72B6\u6001\u4E0D\u4E00\u81F4\u95EE\u9898\u3002"})]})}function c(M={}){let{wrapper:T}={...(0,e.a)(),...M.components};return T?(0,n.jsx)(T,{...M,children:(0,n.jsx)(g,{...M})}):g(M)}},80203:function(M,T,i){i.d(T,{Z:function(){return I}});let I=i.p+"assets/images/09b6f4d6ae9ffe85e8155c99655f4544-158b05820d5522067c9fcec44e6469aa.png"},31480:function(M,T,i){i.d(T,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjYuODA3ZXgiIGhlaWdodD0iMi4zNDNleCIgc3R5bGU9InZlcnRpY2FsLWFsaWduOiAtMC4zMzhleDsiIHZpZXdCb3g9IjAgLTg2My4xIDI5MzAuOCAxMDA4LjYiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWxhYmVsbGVkYnk9Ik1hdGhKYXgtU1ZHLTEtVGl0bGUiPgo8dGl0bGUgaWQ9Ik1hdGhKYXgtU1ZHLTEtVGl0bGUiPnheeT14PC90aXRsZT4KPGRlZnMgYXJpYS1oaWRkZW49InRydWUiPgo8cGF0aCBzdHJva2Utd2lkdGg9IjEiIGlkPSJFMS1NSk1BVEhJLTc4IiBkPSJNNTIgMjg5UTU5IDMzMSAxMDYgMzg2VDIyMiA0NDJRMjU3IDQ0MiAyODYgNDI0VDMyOSAzNzlRMzcxIDQ0MiA0MzAgNDQyUTQ2NyA0NDIgNDk0IDQyMFQ1MjIgMzYxUTUyMiAzMzIgNTA4IDMxNFQ0ODEgMjkyVDQ1OCAyODhRNDM5IDI4OCA0MjcgMjk5VDQxNSAzMjhRNDE1IDM3NCA0NjUgMzkxUTQ1NCA0MDQgNDI1IDQwNFE0MTIgNDA0IDQwNiA0MDJRMzY4IDM4NiAzNTAgMzM2UTI5MCAxMTUgMjkwIDc4UTI5MCA1MCAzMDYgMzhUMzQxIDI2UTM3OCAyNiA0MTQgNTlUNDYzIDE0MFE0NjYgMTUwIDQ2OSAxNTFUNDg1IDE1M0g0ODlRNTA0IDE1MyA1MDQgMTQ1UTUwNCAxNDQgNTAyIDEzNFE0ODYgNzcgNDQwIDMzVDMzMyAtMTFRMjYzIC0xMSAyMjcgNTJRMTg2IC0xMCAxMzMgLTEwSDEyN1E3OCAtMTAgNTcgMTZUMzUgNzFRMzUgMTAzIDU0IDEyM1Q5OSAxNDNRMTQyIDE0MyAxNDIgMTAxUTE0MiA4MSAxMzAgNjZUMTA3IDQ2VDk0IDQxTDkxIDQwUTkxIDM5IDk3IDM2VDExMyAyOVQxMzIgMjZRMTY4IDI2IDE5NCA3MVEyMDMgODcgMjE3IDEzOVQyNDUgMjQ3VDI2MSAzMTNRMjY2IDM0MCAyNjYgMzUyUTI2NiAzODAgMjUxIDM5MlQyMTcgNDA0UTE3NyA0MDQgMTQyIDM3MlQ5MyAyOTBROTEgMjgxIDg4IDI4MFQ3MiAyNzhINThRNTIgMjg0IDUyIDI4OVoiPjwvcGF0aD4KPHBhdGggc3Ryb2tlLXdpZHRoPSIxIiBpZD0iRTEtTUpNQVRISS03OSIgZD0iTTIxIDI4N1EyMSAzMDEgMzYgMzM1VDg0IDQwNlQxNTggNDQyUTE5OSA0NDIgMjI0IDQxOVQyNTAgMzU1UTI0OCAzMzYgMjQ3IDMzNFEyNDcgMzMxIDIzMSAyODhUMTk4IDE5MVQxODIgMTA1UTE4MiA2MiAxOTYgNDVUMjM4IDI3UTI2MSAyNyAyODEgMzhUMzEyIDYxVDMzOSA5NFEzMzkgOTUgMzQ0IDExNFQzNTggMTczVDM3NyAyNDdRNDE1IDM5NyA0MTkgNDA0UTQzMiA0MzEgNDYyIDQzMVE0NzUgNDMxIDQ4MyA0MjRUNDk0IDQxMlQ0OTYgNDAzUTQ5NiAzOTAgNDQ3IDE5M1QzOTEgLTIzUTM2MyAtMTA2IDI5NCAtMTU1VDE1NiAtMjA1UTExMSAtMjA1IDc3IC0xODNUNDMgLTExN1E0MyAtOTUgNTAgLTgwVDY5IC01OFQ4OSAtNDhUMTA2IC00NVExNTAgLTQ1IDE1MCAtODdRMTUwIC0xMDcgMTM4IC0xMjJUMTE1IC0xNDJUMTAyIC0xNDdMOTkgLTE0OFExMDEgLTE1MyAxMTggLTE2MFQxNTIgLTE2N0gxNjBRMTc3IC0xNjcgMTg2IC0xNjVRMjE5IC0xNTYgMjQ3IC0xMjdUMjkwIC02NVQzMTMgLTlUMzIxIDIxTDMxNSAxN1EzMDkgMTMgMjk2IDZUMjcwIC02UTI1MCAtMTEgMjMxIC0xMVExODUgLTExIDE1MCAxMVQxMDQgODJRMTAzIDg5IDEwMyAxMTNRMTAzIDE3MCAxMzggMjYyVDE3MyAzNzlRMTczIDM4MCAxNzMgMzgxUTE3MyAzOTAgMTczIDM5M1QxNjkgNDAwVDE1OCA0MDRIMTU0UTEzMSA0MDQgMTEyIDM4NVQ4MiAzNDRUNjUgMzAyVDU3IDI4MFE1NSAyNzggNDEgMjc4SDI3UTIxIDI4NCAyMSAyODdaIj48L3BhdGg+CjxwYXRoIHN0cm9rZS13aWR0aD0iMSIgaWQ9IkUxLU1KTUFJTi0zRCIgZD0iTTU2IDM0N1E1NiAzNjAgNzAgMzY3SDcwN1E3MjIgMzU5IDcyMiAzNDdRNzIyIDMzNiA3MDggMzI4TDM5MCAzMjdINzJRNTYgMzMyIDU2IDM0N1pNNTYgMTUzUTU2IDE2OCA3MiAxNzNINzA4UTcyMiAxNjMgNzIyIDE1M1E3MjIgMTQwIDcwNyAxMzNINzBRNTYgMTQwIDU2IDE1M1oiPjwvcGF0aD4KPC9kZWZzPgo8ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMCkiIGFyaWEtaGlkZGVuPSJ0cnVlIj4KIDx1c2UgeGxpbms6aHJlZj0iI0UxLU1KTUFUSEktNzgiIHg9IjAiIHk9IjAiPjwvdXNlPgogPHVzZSB0cmFuc2Zvcm09InNjYWxlKDAuNzA3KSIgeGxpbms6aHJlZj0iI0UxLU1KTUFUSEktNzkiIHg9IjgwOSIgeT0iNTgzIj48L3VzZT4KIDx1c2UgeGxpbms6aHJlZj0iI0UxLU1KTUFJTi0zRCIgeD0iMTMwMiIgeT0iMCI+PC91c2U+CiA8dXNlIHhsaW5rOmhyZWY9IiNFMS1NSk1BVEhJLTc4IiB4PSIyMzU4IiB5PSIwIj48L3VzZT4KPC9nPgo8L3N2Zz4="},40537:function(M,T,i){i.d(T,{Z:function(){return I}});let I=i.p+"assets/images/582e695d73fb2a95e6d2335c05623aad-f296ea2044a9715d9d33f215bacf805b.jpeg"},40994:function(M,T,i){i.d(T,{Z:function(){return I}});let I=i.p+"assets/images/729bc61860c9a7889ff56f5edb68b385-7323d5d312a200b7e53e97b81a333c86.png"},17039:function(M,T,i){i.d(T,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguMDQ3ZXgiIGhlaWdodD0iMi44NDNleCIgc3R5bGU9InZlcnRpY2FsLWFsaWduOiAtMC44MzhleDsiIHZpZXdCb3g9IjAgLTg2My4xIDM0NjQuNiAxMjIzLjkiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWxhYmVsbGVkYnk9Ik1hdGhKYXgtU1ZHLTEtVGl0bGUiPgo8dGl0bGUgaWQ9Ik1hdGhKYXgtU1ZHLTEtVGl0bGUiPng9MHx8MTwvdGl0bGU+CjxkZWZzIGFyaWEtaGlkZGVuPSJ0cnVlIj4KPHBhdGggc3Ryb2tlLXdpZHRoPSIxIiBpZD0iRTEtTUpNQVRISS03OCIgZD0iTTUyIDI4OVE1OSAzMzEgMTA2IDM4NlQyMjIgNDQyUTI1NyA0NDIgMjg2IDQyNFQzMjkgMzc5UTM3MSA0NDIgNDMwIDQ0MlE0NjcgNDQyIDQ5NCA0MjBUNTIyIDM2MVE1MjIgMzMyIDUwOCAzMTRUNDgxIDI5MlQ0NTggMjg4UTQzOSAyODggNDI3IDI5OVQ0MTUgMzI4UTQxNSAzNzQgNDY1IDM5MVE0NTQgNDA0IDQyNSA0MDRRNDEyIDQwNCA0MDYgNDAyUTM2OCAzODYgMzUwIDMzNlEyOTAgMTE1IDI5MCA3OFEyOTAgNTAgMzA2IDM4VDM0MSAyNlEzNzggMjYgNDE0IDU5VDQ2MyAxNDBRNDY2IDE1MCA0NjkgMTUxVDQ4NSAxNTNINDg5UTUwNCAxNTMgNTA0IDE0NVE1MDQgMTQ0IDUwMiAxMzRRNDg2IDc3IDQ0MCAzM1QzMzMgLTExUTI2MyAtMTEgMjI3IDUyUTE4NiAtMTAgMTMzIC0xMEgxMjdRNzggLTEwIDU3IDE2VDM1IDcxUTM1IDEwMyA1NCAxMjNUOTkgMTQzUTE0MiAxNDMgMTQyIDEwMVExNDIgODEgMTMwIDY2VDEwNyA0NlQ5NCA0MUw5MSA0MFE5MSAzOSA5NyAzNlQxMTMgMjlUMTMyIDI2UTE2OCAyNiAxOTQgNzFRMjAzIDg3IDIxNyAxMzlUMjQ1IDI0N1QyNjEgMzEzUTI2NiAzNDAgMjY2IDM1MlEyNjYgMzgwIDI1MSAzOTJUMjE3IDQwNFExNzcgNDA0IDE0MiAzNzJUOTMgMjkwUTkxIDI4MSA4OCAyODBUNzIgMjc4SDU4UTUyIDI4NCA1MiAyODlaIj48L3BhdGg+CjxwYXRoIHN0cm9rZS13aWR0aD0iMSIgaWQ9IkUxLU1KTUFJTi0zRCIgZD0iTTU2IDM0N1E1NiAzNjAgNzAgMzY3SDcwN1E3MjIgMzU5IDcyMiAzNDdRNzIyIDMzNiA3MDggMzI4TDM5MCAzMjdINzJRNTYgMzMyIDU2IDM0N1pNNTYgMTUzUTU2IDE2OCA3MiAxNzNINzA4UTcyMiAxNjMgNzIyIDE1M1E3MjIgMTQwIDcwNyAxMzNINzBRNTYgMTQwIDU2IDE1M1oiPjwvcGF0aD4KPHBhdGggc3Ryb2tlLXdpZHRoPSIxIiBpZD0iRTEtTUpNQUlOLTMwIiBkPSJNOTYgNTg1UTE1MiA2NjYgMjQ5IDY2NlEyOTcgNjY2IDM0NSA2NDBUNDIzIDU0OFE0NjAgNDY1IDQ2MCAzMjBRNDYwIDE2NSA0MTcgODNRMzk3IDQxIDM2MiAxNlQzMDEgLTE1VDI1MCAtMjJRMjI0IC0yMiAxOTggLTE2VDEzNyAxNlQ4MiA4M1EzOSAxNjUgMzkgMzIwUTM5IDQ5NCA5NiA1ODVaTTMyMSA1OTdRMjkxIDYyOSAyNTAgNjI5UTIwOCA2MjkgMTc4IDU5N1ExNTMgNTcxIDE0NSA1MjVUMTM3IDMzM1ExMzcgMTc1IDE0NSAxMjVUMTgxIDQ2UTIwOSAxNiAyNTAgMTZRMjkwIDE2IDMxOCA0NlEzNDcgNzYgMzU0IDEzMFQzNjIgMzMzUTM2MiA0NzggMzU0IDUyNFQzMjEgNTk3WiI+PC9wYXRoPgo8cGF0aCBzdHJva2Utd2lkdGg9IjEiIGlkPSJFMS1NSk1BSU4tN0MiIGQ9Ik0xMzkgLTI0OUgxMzdRMTI1IC0yNDkgMTE5IC0yMzVWMjUxTDEyMCA3MzdRMTMwIDc1MCAxMzkgNzUwUTE1MiA3NTAgMTU5IDczNVYtMjM1UTE1MSAtMjQ5IDE0MSAtMjQ5SDEzOVoiPjwvcGF0aD4KPHBhdGggc3Ryb2tlLXdpZHRoPSIxIiBpZD0iRTEtTUpNQUlOLTMxIiBkPSJNMjEzIDU3OEwyMDAgNTczUTE4NiA1NjggMTYwIDU2M1QxMDIgNTU2SDgzVjYwMkgxMDJRMTQ5IDYwNCAxODkgNjE3VDI0NSA2NDFUMjczIDY2M1EyNzUgNjY2IDI4NSA2NjZRMjk0IDY2NiAzMDIgNjYwVjM2MUwzMDMgNjFRMzEwIDU0IDMxNSA1MlQzMzkgNDhUNDAxIDQ2SDQyN1YwSDQxNlEzOTUgMyAyNTcgM1ExMjEgMyAxMDAgMEg4OFY0NkgxMTRRMTM2IDQ2IDE1MiA0NlQxNzcgNDdUMTkzIDUwVDIwMSA1MlQyMDcgNTdUMjEzIDYxVjU3OFoiPjwvcGF0aD4KPC9kZWZzPgo8ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMCkiIGFyaWEtaGlkZGVuPSJ0cnVlIj4KIDx1c2UgeGxpbms6aHJlZj0iI0UxLU1KTUFUSEktNzgiIHg9IjAiIHk9IjAiPjwvdXNlPgogPHVzZSB4bGluazpocmVmPSIjRTEtTUpNQUlOLTNEIiB4PSI4NTAiIHk9IjAiPjwvdXNlPgogPHVzZSB4bGluazpocmVmPSIjRTEtTUpNQUlOLTMwIiB4PSIxOTA2IiB5PSIwIj48L3VzZT4KIDx1c2UgeGxpbms6aHJlZj0iI0UxLU1KTUFJTi03QyIgeD0iMjQwNyIgeT0iMCI+PC91c2U+CiA8dXNlIHhsaW5rOmhyZWY9IiNFMS1NSk1BSU4tN0MiIHg9IjI2ODUiIHk9IjAiPjwvdXNlPgogPHVzZSB4bGluazpocmVmPSIjRTEtTUpNQUlOLTMxIiB4PSIyOTY0IiB5PSIwIj48L3VzZT4KPC9nPgo8L3N2Zz4="},6783:function(M,T,i){i.d(T,{Z:function(){return I}});let I=i.p+"assets/images/a50d55d87088a5aa7b1893188a5ee5a1-88a0d8bf18d42c2a032c66bca58896a4.jpeg"},32244:function(M,T,i){i.d(T,{Z:function(){return I}});let I=i.p+"assets/images/ecec2d86faae49957101c7abd3e8da45-e323cffe29d10535ba6e029d61c73273.jpeg"},50065:function(M,T,i){i.d(T,{Z:function(){return D},a:function(){return l}});var I=i(67294);let n={},e=I.createContext(n);function l(M){let T=I.useContext(e);return I.useMemo(function(){return"function"==typeof M?M(T):{...T,...M}},[T,M])}function D(M){let T;return T=M.disableParentContext?"function"==typeof M.components?M.components(n):M.components||n:l(M.components),I.createElement(e.Provider,{value:T},M.children)}}}]);