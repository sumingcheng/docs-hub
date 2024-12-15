"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["77328"],{66394:function(e,n,o){o.r(n),o.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return t},toc:function(){return a}});var t=o(80932),r=o(85893),c=o(50065);let s={slug:"go-\u642D\u5EFA\u5E76\u4F7F\u7528-goproxy-\u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668",title:"Go \u642D\u5EFA\u5E76\u4F7F\u7528 goproxy \u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-07-02T00:00:00.000Z")},i="Go \u642D\u5EFA\u5E76\u4F7F\u7528 goproxy \u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668",d={authorsImageUrls:[void 0]},a=[{value:"\u5B89\u88C5 goproxy",id:"\u5B89\u88C5-goproxy",level:2},{value:"\u914D\u7F6E\u4EE3\u7406",id:"\u914D\u7F6E\u4EE3\u7406",level:2},{value:"\u6D4B\u8BD5",id:"\u6D4B\u8BD5",level:3},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:3}];function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5B89\u88C5-goproxy",children:"\u5B89\u88C5 goproxy"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ED3\u5E93\u5730\u5740\uFF1A",(0,r.jsx)(n.a,{href:"https://github.com/goproxyio/goproxy",children:"https://github.com/goproxyio/goproxy"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'services:\n  goproxy:\n    image: goproxy/goproxy:latest\n    command: "-listen=0.0.0.0:8081 -cacheDir=/ext"\n    ports:\n      - "8081:8081"\n    restart: always\n    environment:\n      - HTTP_PROXY=http://172.22.220.64:7890 # \u4EE3\u7406\u5730\u5740\n      - HTTPS_PROXY=http://172.22.220.64:7890 # \u8FD9\u4E2A\u5F97\u6709\uFF0C\u5426\u5219\u767D\u73A9\n    volumes:\n      - ./cacheDir:/ext\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u914D\u7F6E\u4EE3\u7406",children:"\u914D\u7F6E\u4EE3\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u8981\u6D4B\u8BD5\u7684\u8BDD\u5148\u6E05\u9664\u7F13\u5B58"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go clean -modcache\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8BBE\u7F6E\u4E3A\u81EA\u5DF1\u642D\u5EFA\u7684\u4EE3\u7406\uFF0C\u6211\u8FD9\u91CC\u7684\u6D4B\u8BD5\u73AF\u5883\u7684 windows\u3002\u6CE8\u610F\u4F7F\u7528",(0,r.jsx)(n.code,{children:"export"}),"\u662F\u66FF\u6362\u8BE5\u73AF\u5883\u53D8\u91CF\u4E4B\u524D\u7684\u503C\uFF0C\u800C\u4E0D\u662F\u6DFB\u52A0\u65B0\u503C\u5230\u73B0\u6709\u7684\u5217\u8868\u4E2D"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export GOPROXY=http://172.22.220.64:8081\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67E5\u770B\u914D\u7F6E"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go env GOPROXY\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E0B\u8F7D\u5305"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go get -v github.com/sirupsen/logrus\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6D4B\u8BD5",children:"\u6D4B\u8BD5"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"36dd244a94607dce1a9e004e60e89a2e",src:o(17921).Z+"",width:"942",height:"164"}),(0,r.jsx)(n.img,{alt:"76da0346edcede665a737c847c6473a2",src:o(37465).Z+"",width:"1285",height:"467"}),(0,r.jsx)(n.img,{alt:"0cb74ada0bc74a2d10bd4d9941276636",src:o(8784).Z+"",width:"542",height:"380"})]}),"\n",(0,r.jsx)(n.p,{children:"\u6210\u529F~"}),"\n",(0,r.jsx)(n.h3,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4F01\u4E1A\u5185\u90E8"}),"\uFF1A\u4F01\u4E1A\u53EF\u4EE5\u642D\u5EFA\u5185\u90E8\u7684 ",(0,r.jsx)(n.code,{children:"goproxy"})," \u670D\u52A1\u5668\uFF0C\u7528\u6765\u63D0\u4F9B\u4F01\u4E1A\u5185\u90E8\u4F7F\u7528\u7684\u79C1\u6709\u6A21\u5757\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u7F13\u5B58\u516C\u5171\u6A21\u5757\uFF0C\u51CF\u5C11\u5BF9\u5916\u90E8\u7F51\u7EDC\u7684\u4F9D\u8D56\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5F00\u6E90\u793E\u533A"}),"\uFF1A\u5F00\u6E90\u9879\u76EE\u53EF\u4EE5\u8BBE\u7F6E\u4F7F\u7528\u516C\u5171\u7684 ",(0,r.jsx)(n.code,{children:"goproxy"})," \u670D\u52A1\uFF0C\u5982 ",(0,r.jsx)(n.code,{children:"goproxy.cn"})," \u6216 ",(0,r.jsx)(n.code,{children:"goproxy.io"}),"\uFF0C\u8FD9\u4E9B\u90FD\u662F\u4E3A\u4E86\u63D0\u4F9B\u66F4\u5FEB\u901F\u7684\u6A21\u5757\u4E0B\u8F7D\u670D\u52A1\u800C\u8BBE\u7ACB\u7684\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4E2A\u4EBA\u5F00\u53D1\u8005"}),"\uFF1A\u4E2A\u4EBA\u5F00\u53D1\u8005\u4E5F\u53EF\u4EE5\u4F7F\u7528\u516C\u5171\u7684\u6216\u79C1\u6709\u7684 ",(0,r.jsx)(n.code,{children:"goproxy"})," \u5B9E\u4F8B\u6765\u4F18\u5316\u81EA\u5DF1\u7684\u5F00\u53D1\u6D41\u7A0B\uFF0C\u5C24\u5176\u662F\u5728\u7F51\u7EDC\u8FDE\u63A5\u4E0D\u4F73\u7684\u60C5\u51B5\u4E0B\u3002"]})]})}function g(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8784:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/0cb74ada0bc74a2d10bd4d9941276636-f976572e64a16cede9592ae96b1b3e19.jpg"},17921:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/36dd244a94607dce1a9e004e60e89a2e-f413304c9f14104e05932e1ae460eedf.jpg"},37465:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/76da0346edcede665a737c847c6473a2-97517c486fcc6af82cd7d991fa62c53e.jpg"},50065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return s}});var t=o(67294);let r={},c=t.createContext(r);function s(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:n},e.children)}},80932:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u642D\u5EFA\u5E76\u4F7F\u7528-goproxy-\u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-07-02-Go_\u642D\u5EFA\u5E76\u4F7F\u7528_goproxy_\u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668.md","source":"@site/blog/\u540E\u7AEF/2024-07-02-Go_\u642D\u5EFA\u5E76\u4F7F\u7528_goproxy_\u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668.md","title":"Go \u642D\u5EFA\u5E76\u4F7F\u7528 goproxy \u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668","description":"\u5B89\u88C5 goproxy","date":"2024-07-02T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.9766666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u642D\u5EFA\u5E76\u4F7F\u7528-goproxy-\u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668","title":"Go \u642D\u5EFA\u5E76\u4F7F\u7528 goproxy \u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668","authors":["sumingcheng"],"tags":["backend"],"date":"2024-07-02T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Go \u521B\u5EFA goroutine \u7684\u56DB\u79CD\u65B9\u5F0F","permalink":"/docs-hub/blog/go-\u521B\u5EFA-goroutine-\u7684\u56DB\u79CD\u65B9\u5F0F"},"nextItem":{"title":"embed \u5305\u5728 Go \u4F7F\u7528\u573A\u666F","permalink":"/docs-hub/blog/embed-\u5305\u5728-go-\u4F7F\u7528\u573A\u666F"}}')}}]);