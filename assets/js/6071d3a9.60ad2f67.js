"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["53214"],{71716:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return a}});var i=t(44012),c=t(85893),o=t(50065);let r={slug:"go-\u4E2D\u7684-atomic-\u7684\u4F7F\u7528\u573A\u666F",title:"Go \u4E2D\u7684 atomic \u7684\u4F7F\u7528\u573A\u666F",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-06-12T00:00:00.000Z")},s="Go \u4E2D\u7684 atomic \u7684\u4F7F\u7528\u573A\u666F",l={authorsImageUrls:[void 0]},a=[{value:"atomic \u7684\u6700\u4F73\u5B9E\u8DF5\u548C\u4F7F\u7528\u573A\u666F",id:"atomic-\u7684\u6700\u4F73\u5B9E\u8DF5\u548C\u4F7F\u7528\u573A\u666F",level:2},{value:"\u8BA1\u6570\u5668\u548C\u7EDF\u8BA1\u4FE1\u606F",id:"\u8BA1\u6570\u5668\u548C\u7EDF\u8BA1\u4FE1\u606F",level:3},{value:"\u72B6\u6001\u6807\u5FD7\u7BA1\u7406",id:"\u72B6\u6001\u6807\u5FD7\u7BA1\u7406",level:3},{value:"\u65E0\u9501\u6570\u636E\u7ED3\u6784",id:"\u65E0\u9501\u6570\u636E\u7ED3\u6784",level:3},{value:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7684\u573A\u666F",id:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7684\u573A\u666F",level:2},{value:"\u590D\u6742\u72B6\u6001\u6216\u591A\u53D8\u91CF\u534F\u540C",id:"\u590D\u6742\u72B6\u6001\u6216\u591A\u53D8\u91CF\u534F\u540C",level:3},{value:"\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91",id:"\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91",level:3},{value:"\u9AD8\u9891\u5EA6\u7684\u5199\u64CD\u4F5C",id:"\u9AD8\u9891\u5EA6\u7684\u5199\u64CD\u4F5C",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"atomic-\u7684\u6700\u4F73\u5B9E\u8DF5\u548C\u4F7F\u7528\u573A\u666F",children:"atomic \u7684\u6700\u4F73\u5B9E\u8DF5\u548C\u4F7F\u7528\u573A\u666F"}),"\n",(0,c.jsx)(e.h3,{id:"\u8BA1\u6570\u5668\u548C\u7EDF\u8BA1\u4FE1\u606F",children:"\u8BA1\u6570\u5668\u548C\u7EDF\u8BA1\u4FE1\u606F"}),"\n",(0,c.jsx)(e.p,{children:"\u539F\u5B50\u5305\u5E38\u7528\u4E8E\u5B9E\u73B0\u9AD8\u6027\u80FD\u7684\u8BA1\u6570\u5668\u6216\u7EDF\u8BA1\u6570\u636E\u6536\u96C6\uFF0C\u4F8B\u5982\u8BA1\u7B97\u7F51\u7AD9\u8BBF\u95EE\u91CF\u3001\u670D\u52A1\u8C03\u7528\u6B21\u6570\u7B49\u3002\u56E0\u4E3A\u8FD9\u4E9B\u64CD\u4F5C\u901A\u5E38\u6D89\u53CA\u5355\u4E2A\u53D8\u91CF\u7684\u7B80\u5355\u589E\u51CF\uFF0C\u4F7F\u7528\u539F\u5B50\u64CD\u4F5C\u6BD4\u5F15\u5165\u4E92\u65A5\u9501\u66F4\u4E3A\u9AD8\u6548\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"var visitors int64\n// \u6BCF\u6B21\u7528\u6237\u8BBF\u95EE\u65F6\uFF0C\u589E\u52A0\u8BBF\u5BA2\u6570\u91CF\natomic.AddInt64(&visitors, 1)\n\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u72B6\u6001\u6807\u5FD7\u7BA1\u7406",children:"\u72B6\u6001\u6807\u5FD7\u7BA1\u7406"}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E2D\uFF0C\u4F7F\u7528\u539F\u5B50\u64CD\u4F5C\u6765\u68C0\u67E5\u6216\u8BBE\u7F6E\u72B6\u6001\u6807\u5FD7\u53EF\u4EE5\u907F\u514D\u4F7F\u7528\u9501\uFF0C\u7279\u522B\u662F\u5728\u72B6\u6001\u53D8\u5316\u4E0D\u9891\u7E41\uFF0C\u4F46\u68C0\u67E5\u9891\u7E41\u7684\u573A\u666F\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"var state int32\n// \u8BBE\u7F6E\u72B6\u6001\natomic.StoreInt32(&state, 1)\n// \u68C0\u67E5\u72B6\u6001\nif atomic.LoadInt32(&state) == 1 {\n    // \u6267\u884C\u67D0\u4E9B\u64CD\u4F5C\n}\n\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u65E0\u9501\u6570\u636E\u7ED3\u6784",children:"\u65E0\u9501\u6570\u636E\u7ED3\u6784"}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u5B9E\u73B0\u65E0\u9501\u6570\u636E\u7ED3\u6784\uFF0C\u5982\u65E0\u9501\u961F\u5217\u3001\u65E0\u9501\u6808\u7B49\u65F6\uFF0C\u539F\u5B50\u64CD\u4F5C\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u5DE5\u5177\u3002\u8FD9\u4E9B\u6570\u636E\u7ED3\u6784\u901A\u5E38\u7528\u5728\u9AD8\u6027\u80FD\u6216\u5B9E\u65F6\u7CFB\u7EDF\u4E2D\uFF0C\u53EF\u4EE5\u663E\u8457\u51CF\u5C11\u7EBF\u7A0B\u963B\u585E\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"type AtomicInt struct {\n    value int64\n}\n\u200B\nfunc (a *AtomicInt) Increment() {\n    atomic.AddInt64(&a.value, 1)\n}\n\u200B\nfunc (a *AtomicInt) Get() int64 {\n    return atomic.LoadInt64(&a.value)\n}\n\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7684\u573A\u666F",children:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7684\u573A\u666F"}),"\n",(0,c.jsx)(e.h3,{id:"\u590D\u6742\u72B6\u6001\u6216\u591A\u53D8\u91CF\u534F\u540C",children:"\u590D\u6742\u72B6\u6001\u6216\u591A\u53D8\u91CF\u534F\u540C"}),"\n",(0,c.jsx)(e.p,{children:"\u5F53\u64CD\u4F5C\u6D89\u53CA\u5230\u591A\u4E2A\u53D8\u91CF\u6216\u8005\u72B6\u6001\u8F83\u4E3A\u590D\u6742\u7684\u540C\u6B65\u65F6\uFF0C\u4EC5\u4F7F\u7528\u539F\u5B50\u64CD\u4F5C\u5F80\u5F80\u65E0\u6CD5\u6709\u6548\u7BA1\u7406\u3002\u4F8B\u5982\uFF0C\u9700\u8981\u6839\u636E\u591A\u4E2A\u53D8\u91CF\u7684\u503C\u51B3\u5B9A\u903B\u8F91\u6D41\u7A0B\u7684\u60C5\u51B5\uFF0C\u4F7F\u7528\u4E92\u65A5\u9501\u53EF\u80FD\u662F\u66F4\u597D\u7684\u9009\u62E9\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u53EF\u4EE5\u540C\u65F6\u4FDD\u62A4\u591A\u4E2A\u53D8\u91CF\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"// \u9519\u8BEF\u7528\u6CD5\uFF1A\u5C1D\u8BD5\u4F7F\u7528\u539F\u5B50\u64CD\u4F5C\u540C\u6B65\u591A\u4E2A\u53D8\u91CF\nvar a, b int32\natomic.AddInt32(&a, 1)\natomic.AddInt32(&b, 1)\n// \u65E0\u6CD5\u4FDD\u8BC1 a \u548C b \u7684\u589E\u52A0\u64CD\u4F5C\u662F\u540C\u6B65\u53D1\u751F\u7684\n\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91",children:"\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91"}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679C\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u6761\u4EF6\u540C\u6B65\uFF0C\u6D89\u53CA\u591A\u6B65\u9AA4\u9A8C\u8BC1\u6216\u8005\u590D\u5408\u72B6\u6001\u53D8\u5316\uFF0C\u4F7F\u7528\u539F\u5B50\u64CD\u4F5C\u4F1A\u4F7F\u4EE3\u7801\u590D\u6742\u4E14\u96BE\u4EE5\u7EF4\u62A4\u3002\u5728\u8FD9\u4E9B\u573A\u666F\u4E2D\uFF0C\u4F7F\u7528\u66F4\u9AD8\u7EA7\u7684\u540C\u6B65\u673A\u5236\uFF08\u5982\u901A\u9053\u3001\u9501\u6216\u6761\u4EF6\u53D8\u91CF\u7B49\uFF09\u901A\u5E38\u66F4\u52A0\u5408\u9002\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u9AD8\u9891\u5EA6\u7684\u5199\u64CD\u4F5C",children:"\u9AD8\u9891\u5EA6\u7684\u5199\u64CD\u4F5C"}),"\n",(0,c.jsx)(e.p,{children:"\u539F\u5B50\u64CD\u4F5C\u786E\u4FDD\u4E86\u5355\u4E2A\u64CD\u4F5C\u7684\u539F\u5B50\u6027\uFF0C\u5373\u5728\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u4E0D\u4F1A\u88AB\u5176\u4ED6\u7EBF\u7A0B\u6253\u65AD\u3002\u8FD9\u901A\u8FC7\u786C\u4EF6\u7EA7\u522B\u7684\u652F\u6301\u5B8C\u6210\uFF0C\u901A\u5E38\u662F\u901A\u8FC7\u4E00\u79CD\u79F0\u4E3A\u201C\u6BD4\u8F83\u5E76\u4EA4\u6362\u201D\uFF08Compare-and-Swap, CAS\uFF09\u7684\u64CD\u4F5C\u3002\u5F53\u4F60\u6709\u591A\u4E2A\u7EBF\u7A0B\u8BD5\u56FE\u540C\u65F6\u4FEE\u6539\u540C\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u4F1A\u5C1D\u8BD5\u6267\u884C CAS \u64CD\u4F5C\uFF1A"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u8BFB\u53D6\u5F53\u524D\u503C"}),"\uFF1A\u7EBF\u7A0B\u9996\u5148\u8BFB\u53D6\u76EE\u6807\u53D8\u91CF\u7684\u5F53\u524D\u503C\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u8BA1\u7B97\u65B0\u503C"}),"\uFF1A\u57FA\u4E8E\u5F53\u524D\u503C\uFF0C\u7EBF\u7A0B\u8BA1\u7B97\u65B0\u7684\u503C\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u6BD4\u8F83\u5E76\u4EA4\u6362"}),"\uFF1A\u5982\u679C\u76EE\u6807\u53D8\u91CF\u7684\u5F53\u524D\u503C\u4E0E\u6B65\u9AA4 1 \u4E2D\u8BFB\u5230\u7684\u503C\u76F8\u540C\uFF0CCAS \u64CD\u4F5C\u4F1A\u5C06\u65B0\u503C\u5199\u5165\u53D8\u91CF\u3002\u5982\u679C\u4E0D\u540C\uFF0C\u8BF4\u660E\u5728\u6B64\u671F\u95F4\u5185\u5176\u4ED6\u7EBF\u7A0B\u5DF2\u7ECF\u4FEE\u6539\u4E86\u53D8\u91CF\uFF0C\u5F53\u524D\u7EBF\u7A0B\u7684\u64CD\u4F5C\u5931\u8D25\uFF0C\u901A\u5E38\u4F1A\u91CD\u8BD5\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u9891\u7E41\u7684\u5199\u64CD\u4F5C\u5F15\u53D1\u7684\u95EE\u9898"})}),"\n",(0,c.jsx)(e.p,{children:"\u5F53\u5927\u91CF\u7EBF\u7A0B\u9891\u7E41\u5C1D\u8BD5\u66F4\u65B0\u540C\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u4EE5\u4E0B\u95EE\u9898\u53EF\u80FD\u53D1\u751F"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u4E89\u7528\u9AD8"}),"\uFF1A\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u5C1D\u8BD5\u4FEE\u6539\u6570\u636E\uFF0C\u4F46\u7531\u4E8E CAS \u7684\u5DE5\u4F5C\u673A\u5236\uFF0C\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u7684\u4FEE\u6539\u80FD\u6210\u529F\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u9700\u8981\u91CD\u8BD5\u3002\u8FD9\u5BFC\u81F4\u4E86\u9AD8\u4E89\u7528\uFF0C\u591A\u4E2A\u7EBF\u7A0B\u4E0D\u65AD\u91CD\u8BD5\uFF0C\u6D6A\u8D39 CPU \u8D44\u6E90\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u6027\u80FD\u74F6\u9888"}),"\uFF1A\u5C3D\u7BA1\u539F\u5B50\u64CD\u4F5C\u6BD4\u9501\u7684\u5F00\u9500\u5C0F\uFF0C\u4F46\u5F53\u4E89\u7528\u975E\u5E38\u6FC0\u70C8\u65F6\uFF0C\u7EBF\u7A0B\u9891\u7E41\u8FDB\u884C\u65E0\u6548\u7684\u91CD\u8BD5\uFF0C\u8FD9\u4F1A\u6210\u4E3A\u7CFB\u7EDF\u6027\u80FD\u7684\u74F6\u9888\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u7EBF\u7A0B\u9965\u997F"}),"\uFF1A\u5728\u6781\u7AEF\u7684\u4E89\u7528\u573A\u666F\u4E2D\uFF0C\u67D0\u4E9B\u7EBF\u7A0B\u53EF\u80FD\u4F1A\u957F\u65F6\u95F4\u5730\u6210\u529F\u4E0D\u4E86\u64CD\u4F5C\uFF0C\u5BFC\u81F4\u7EBF\u7A0B\u9965\u997F\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsxs)(e.strong,{children:["\u6240\u4EE5\u5728\u786E\u4FDD\u7EBF\u7A0B\u5B89\u5168\u7684\u540C\u65F6\uFF0C\u4F18\u5316\u7CFB\u7EDF\u7684\u6574\u4F53\u6027\u80FD\uFF0C\u907F\u514D\u56E0\u539F\u5B50\u64CD\u4F5C\u7684\u8FC7\u5EA6\u4F7F\u7528\u800C\u5BFC\u81F4\u7684\u6027\u80FD\u74F6\u9888\u3002",(0,c.jsx)(e.code,{children:"atomic"})," \u5305\u5728\u5904\u7406\u7B80\u5355\u7684\u540C\u6B65\u9700\u6C42\u65F6\u975E\u5E38\u6709\u7528\uFF0C\u5C24\u5176\u9002\u5408\u4E8E\u8F7B\u91CF\u7EA7\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982\u72B6\u6001\u6807\u5FD7\u6216\u8BA1\u6570\u5668\u3002"]})})]})}function h(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return r}});var i=t(67294);let c={},o=i.createContext(c);function r(n){let e=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),i.createElement(o.Provider,{value:e},n.children)}},44012:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u4E2D\u7684-atomic-\u7684\u4F7F\u7528\u573A\u666F","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-06-12-Go_\u4E2D\u7684_atomic_\u7684\u4F7F\u7528\u573A\u666F.md","source":"@site/blog/\u540E\u7AEF/2024-06-12-Go_\u4E2D\u7684_atomic_\u7684\u4F7F\u7528\u573A\u666F.md","title":"Go \u4E2D\u7684 atomic \u7684\u4F7F\u7528\u573A\u666F","description":"atomic \u7684\u6700\u4F73\u5B9E\u8DF5\u548C\u4F7F\u7528\u573A\u666F","date":"2024-06-12T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":3.3266666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u4E2D\u7684-atomic-\u7684\u4F7F\u7528\u573A\u666F","title":"Go \u4E2D\u7684 atomic \u7684\u4F7F\u7528\u573A\u666F","authors":["sumingcheng"],"tags":["backend"],"date":"2024-06-12T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Chrome http \u83B7\u53D6\u9EA6\u514B\u98CE","permalink":"/docs-hub/blog/chrome-http-\u83B7\u53D6\u9EA6\u514B\u98CE"},"nextItem":{"title":"docker-compose \u914D\u7F6E\u5377\u793A\u4F8B","permalink":"/docs-hub/blog/docker-compose-\u914D\u7F6E\u5377\u793A\u4F8B"}}')}}]);