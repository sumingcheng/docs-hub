"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["22980"],{9996:function(e,n,o){o.r(n),o.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return u},metadata:function(){return t},toc:function(){return c}});var t=o(44791),i=o(85893),r=o(50065);let u={slug:"\u89E3\u6790-go-\u8BED\u8A00\u7684-gmp-\u5E76\u53D1\u6A21\u578B",title:"\u89E3\u6790 Go \u8BED\u8A00\u7684 GMP \u5E76\u53D1\u6A21\u578B",authors:["sumingcheng"],tags:["backend"],date:new Date("2023-10-20T00:00:00.000Z")},l="\u89E3\u6790 Go \u8BED\u8A00\u7684 GMP \u5E76\u53D1\u6A21\u578B",s={authorsImageUrls:[void 0]},c=[{value:"GMP \u5E76\u53D1\u6A21\u578B",id:"gmp-\u5E76\u53D1\u6A21\u578B",level:2},{value:"Goroutine (G)",id:"goroutine-g",level:2},{value:"Machine (M)",id:"machine-m",level:3},{value:"Processor (P)",id:"processor-p",level:3},{value:"GMP \u6A21\u578B\u7684\u6838\u5FC3\u5DE5\u4F5C\u7EC6\u8282",id:"gmp-\u6A21\u578B\u7684\u6838\u5FC3\u5DE5\u4F5C\u7EC6\u8282",level:2},{value:"Goroutine \u8C03\u5EA6",id:"goroutine-\u8C03\u5EA6",level:3},{value:"\u7EBF\u7A0B\u521B\u5EFA\u548C\u9500\u6BC1",id:"\u7EBF\u7A0B\u521B\u5EFA\u548C\u9500\u6BC1",level:3},{value:"\u62A2\u5360\u5F0F\u8C03\u5EA6",id:"\u62A2\u5360\u5F0F\u8C03\u5EA6",level:3},{value:"\u7F51\u7EDC\u548C\u7CFB\u7EDF\u8C03\u7528",id:"\u7F51\u7EDC\u548C\u7CFB\u7EDF\u8C03\u7528",level:3},{value:"\u5783\u573E\u56DE\u6536\u7684\u534F\u52A9",id:"\u5783\u573E\u56DE\u6536\u7684\u534F\u52A9",level:3},{value:"Work stealing",id:"work-stealing",level:3}];function a(e){let n={h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"gmp-\u5E76\u53D1\u6A21\u578B",children:"GMP \u5E76\u53D1\u6A21\u578B"}),"\n",(0,i.jsx)(n.h2,{id:"goroutine-g",children:"Goroutine (G)"}),"\n",(0,i.jsx)(n.p,{children:"Goroutine \u662F Go \u8BED\u8A00\u4E2D\u7684\u8F7B\u91CF\u7EA7\u7EBF\u7A0B\uFF0C\u6BCF\u4E2A Goroutine \u4EE3\u8868\u4E00\u4E2A\u5E76\u53D1\u6267\u884C\u7684\u4EFB\u52A1\u3002\u5B83\u4EEC\u7684\u521B\u5EFA\u548C\u9500\u6BC1\u6210\u672C\u5F88\u4F4E\uFF0C\u4E14\u8FD0\u884C\u65F6\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5904\u7406\u5B83\u4EEC\u7684\u8C03\u5EA6\u548C\u6267\u884C\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"machine-m",children:"Machine (M)"}),"\n",(0,i.jsx)(n.p,{children:"Machine \u662F\u64CD\u4F5C\u7CFB\u7EDF\u7EA7\u7684\u7EBF\u7A0B\uFF0C\u662F\u771F\u6B63\u6267\u884C\u4EE3\u7801\u7684\u5B9E\u4F53\u3002\u6BCF\u4E2A M \u90FD\u7ED1\u5B9A\u5230\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\uFF0C\u5B83\u6267\u884C\u4E0E\u4E4B\u5173\u8054\u7684 Goroutine \u7684\u4EE3\u7801\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"processor-p",children:"Processor (P)"}),"\n",(0,i.jsx)(n.p,{children:"Processor \u662F\u903B\u8F91\u5904\u7406\u5668\uFF0C\u5B83\u8D1F\u8D23\u8C03\u5EA6 Goroutine \u5230 M \u4E0A\u6267\u884C\u3002\u6BCF\u4E2A P \u6709\u81EA\u5DF1\u7684\u672C\u5730\u8FD0\u884C\u961F\u5217\uFF0C\u5B58\u653E\u7B49\u5F85\u6267\u884C\u7684 Goroutine\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"gmp-\u6A21\u578B\u7684\u6838\u5FC3\u5DE5\u4F5C\u7EC6\u8282",children:"GMP \u6A21\u578B\u7684\u6838\u5FC3\u5DE5\u4F5C\u7EC6\u8282"}),"\n",(0,i.jsx)(n.h3,{id:"goroutine-\u8C03\u5EA6",children:"Goroutine \u8C03\u5EA6"}),"\n",(0,i.jsx)(n.p,{children:"Go \u7684\u8FD0\u884C\u65F6\u7CFB\u7EDF\u7EF4\u62A4\u4E86\u5168\u5C40\u548C\u672C\u5730\u7684\u8FD0\u884C\u961F\u5217\u3002\u5168\u5C40\u8FD0\u884C\u961F\u5217\u5305\u542B\u6240\u6709\u65B0\u521B\u5EFA\u548C\u88AB\u963B\u585E\u540E\u91CD\u65B0\u5C31\u7EEA\u7684 Goroutine\u3002\u6BCF\u4E2A P \u7684\u672C\u5730\u8FD0\u884C\u961F\u5217\u5305\u542B\u4E86\u5373\u5C06\u7531\u8BE5 P \u8C03\u5EA6\u7684 Goroutine\u3002\u53EA\u6709\u5728\u672C\u5730\u8FD0\u884C\u961F\u5217\u88C5\u6EE1\u540E\uFF08256 \u4E2A Goroutine\uFF09\u624D\u4F1A\u628A\u65B0\u6765\u7684 Goroutine \u653E\u5165\u672C\u5730\u8FD0\u884C\u961F\u5217"}),"\n",(0,i.jsx)(n.p,{children:"\u5F53 Goroutine \u9700\u8981\u6267\u884C\u7CFB\u7EDF\u8C03\u7528\u65F6\uFF0C\u5B83\u53EF\u80FD\u4F1A\u88AB\u963B\u585E\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E0E Goroutine \u5173\u8054\u7684\u7EBF\u7A0B\uFF08M\uFF09\u4F1A\u88AB\u89E3\u9664\u7ED1\u5B9A\uFF0C\u5E76\u53EF\u80FD\u4F1A\u4E3A\u5176\u4ED6\u672A\u963B\u585E\u7684 Goroutine \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 M\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Go \u7684\u8FD0\u884C\u65F6\u7CFB\u7EDF\u8FD8\u7BA1\u7406\u4E00\u4E2A\u5B9A\u65F6\u5668\u5806\uFF0C\u7528\u4E8E\u5904\u7406\u5B9A\u65F6\u4E8B\u4EF6\u3002Goroutine \u53EF\u4EE5\u521B\u5EFA\u5B9A\u65F6\u5668\uFF0C\u800C\u8FD0\u884C\u65F6\u7CFB\u7EDF\u5C06\u786E\u4FDD\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u540E\u5C06\u5B83\u4EEC\u5524\u9192\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Go \u7684\u8FD0\u884C\u65F6\u7CFB\u7EDF\u5305\u542B\u4E00\u4E2A\u7F51\u7EDC\u8F6E\u8BE2\u5668\uFF0C\u5B83\u53EF\u4EE5\u5728\u975E\u963B\u585E\u6A21\u5F0F\u4E0B\u68C0\u67E5\u7F51\u7EDC I/O\u3002\u5982\u679C\u4E00\u4E2A Goroutine \u5728\u7B49\u5F85\u7F51\u7EDC I/O\uFF0C\u5B83\u4F1A\u88AB\u653E\u5165\u7F51\u7EDC\u8F6E\u8BE2\u5668\uFF0C\u76F4\u5230 I/O \u51C6\u5907\u597D\u4E3A\u6B62\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7EBF\u7A0B\u521B\u5EFA\u548C\u9500\u6BC1",children:"\u7EBF\u7A0B\u521B\u5EFA\u548C\u9500\u6BC1"}),"\n",(0,i.jsx)(n.p,{children:"\u5F53\u6240\u6709\u7684 M \u90FD\u5728\u6267\u884C Goroutine\uFF0C\u5E76\u4E14\u8FD8\u6709\u66F4\u591A\u7684 Goroutine \u7B49\u5F85\u6267\u884C\u65F6\uFF0C\u8FD0\u884C\u65F6\u7CFB\u7EDF\u53EF\u80FD\u4F1A\u521B\u5EFA\u65B0\u7684 M\u3002\u4E00\u65E6 M \u5B8C\u6210\u4E86 Goroutine \u7684\u6267\u884C\u5E76\u4E14\u6CA1\u6709\u66F4\u591A\u7684 Goroutine \u7B49\u5F85\u6267\u884C\uFF0CM \u53EF\u80FD\u4F1A\u88AB\u9500\u6BC1\u6216\u653E\u56DE\u7EBF\u7A0B\u6C60\u4EE5\u5907\u540E\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4F8B\u5982\u5F53\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u6570\u91CF\u8D85\u8FC7\u4E86\u4E00\u5B9A\u7684\u9608\u503C\u6216\u8005\u7EBF\u7A0B\u5DF2\u7ECF\u5B58\u5728\u4E86\u5F88\u957F\u65F6\u95F4\u6CA1\u6709\u88AB\u91CD\u7528\u65F6\uFF0C\u8FD0\u884C\u65F6\u7CFB\u7EDF\u53EF\u80FD\u4F1A\u9009\u62E9\u9500\u6BC1 M \u4EE5\u91CA\u653E\u8D44\u6E90\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u62A2\u5360\u5F0F\u8C03\u5EA6",children:"\u62A2\u5360\u5F0F\u8C03\u5EA6"}),"\n",(0,i.jsx)(n.p,{children:"Go \u8FD0\u884C\u65F6\u7CFB\u7EDF\u5B9E\u73B0\u4E86\u62A2\u5360\u5F0F\u8C03\u5EA6\uFF0C\u4EE5\u786E\u4FDD Goroutine \u516C\u5E73\u5730\u83B7\u5F97\u6267\u884C\u65F6\u95F4\u3002\u5982\u679C\u4E00\u4E2A Goroutine \u957F\u65F6\u95F4\u5360\u7528 CPU\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u5927\u6982\u662F 10ms\uFF0C\u8D85\u8FC7 10ms\uFF0C\u8FD0\u884C\u65F6\u7CFB\u7EDF\u4F1A\u62A2\u5360\u5B83\uFF0C\u5C06\u5B83\u653E\u56DE\u8FD0\u884C\u961F\u5217\uFF0C\u5E76\u5141\u8BB8\u5176\u4ED6 Goroutine \u6267\u884C\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7F51\u7EDC\u548C\u7CFB\u7EDF\u8C03\u7528",children:"\u7F51\u7EDC\u548C\u7CFB\u7EDF\u8C03\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u5F53 Goroutine \u963B\u585E\u5728\u7F51\u7EDC\u6216\u7CFB\u7EDF\u8C03\u7528\u65F6\uFF0C\u5B83\u7684 M \u4F1A\u89E3\u9664\u4E0E P \u7684\u7ED1\u5B9A\uFF0C\u4F7F P \u53EF\u4EE5\u8C03\u5EA6\u548C\u6267\u884C\u5176\u4ED6 Goroutine\u3002\u4E00\u65E6\u7CFB\u7EDF\u8C03\u7528\u5B8C\u6210\uFF0CGoroutine \u4F1A\u518D\u6B21\u88AB\u653E\u5165\u8FD0\u884C\u961F\u5217\uFF0C\u7B49\u5F85\u88AB\u8C03\u5EA6\u6267\u884C\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5783\u573E\u56DE\u6536\u7684\u534F\u52A9",children:"\u5783\u573E\u56DE\u6536\u7684\u534F\u52A9"}),"\n",(0,i.jsx)(n.p,{children:"Go \u7684\u5783\u573E\u56DE\u6536\u662F\u5E76\u53D1\u6267\u884C\u7684\uFF0C\u5B83\u4E0E GMP \u6A21\u578B\u7D27\u5BC6\u96C6\u6210\u3002Goroutine \u4F1A\u5728\u5FC5\u8981\u65F6\u534F\u52A9\u8FD0\u884C\u65F6\u7CFB\u7EDF\u8FDB\u884C\u5783\u573E\u56DE\u6536\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"work-stealing",children:"Work stealing"}),"\n",(0,i.jsx)(n.p,{children:"\u5F53\u4E00\u4E2A P \u7684\u672C\u5730\u8FD0\u884C\u961F\u5217\u4E3A\u7A7A\u65F6\uFF0C\u5B83\u4F1A\u5C1D\u8BD5\u4ECE\u5176\u4ED6 P \u7684\u672C\u5730\u8FD0\u884C\u961F\u5217\u4E2D\u201C\u5077\u53D6\u201D Goroutine\uFF0C\u4EE5\u4FDD\u6301 CPU \u7684\u5229\u7528\u7387\uFF0C\u4E00\u6B21\u5077\u8D70\u4E00\u534A\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return u}});var t=o(67294);let i={},r=t.createContext(i);function u(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:u(e.components),t.createElement(r.Provider,{value:n},e.children)}},44791:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u89E3\u6790-go-\u8BED\u8A00\u7684-gmp-\u5E76\u53D1\u6A21\u578B","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2023-10-20-\u89E3\u6790_Go_\u8BED\u8A00\u7684_GMP_\u5E76\u53D1\u6A21\u578B.md","source":"@site/blog/\u540E\u7AEF/2023-10-20-\u89E3\u6790_Go_\u8BED\u8A00\u7684_GMP_\u5E76\u53D1\u6A21\u578B.md","title":"\u89E3\u6790 Go \u8BED\u8A00\u7684 GMP \u5E76\u53D1\u6A21\u578B","description":"GMP \u5E76\u53D1\u6A21\u578B","date":"2023-10-20T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":2.7333333333333334,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u89E3\u6790-go-\u8BED\u8A00\u7684-gmp-\u5E76\u53D1\u6A21\u578B","title":"\u89E3\u6790 Go \u8BED\u8A00\u7684 GMP \u5E76\u53D1\u6A21\u578B","authors":["sumingcheng"],"tags":["backend"],"date":"2023-10-20T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u534F\u7A0BGoroutine\u548C\u7EBF\u7A0B\u4E4B\u95F4\u7684\u533A\u522B\u548C\u5173\u7CFB","permalink":"/docs-hub/blog/\u534F\u7A0Bgoroutine\u548C\u7EBF\u7A0B\u4E4B\u95F4\u7684\u533A\u522B\u548C\u5173\u7CFB"},"nextItem":{"title":"\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B","permalink":"/docs-hub/blog/\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B"}}')}}]);