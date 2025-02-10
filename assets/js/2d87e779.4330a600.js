"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["57670"],{38410:function(n,e,t){t.r(e),t.d(e,{assets:function(){return r},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var l=t(38480),o=t(85893),i=t(50065);let s={slug:"go-\u9879\u76EE\u4F7F\u7528-alpine-\u6784\u5EFA\u955C\u50CF",title:"Go \u9879\u76EE\u4F7F\u7528 Alpine \u6784\u5EFA\u955C\u50CF",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-07-07T00:00:00.000Z")},c="Go \u9879\u76EE\u4F7F\u7528 Alpine \u6784\u5EFA\u955C\u50CF",r={authorsImageUrls:[void 0]},u=[{value:"\u793A\u4F8B Dockerfile",id:"\u793A\u4F8B-dockerfile",level:3},{value:"\u8BBE\u7F6E\u8BF4\u660E",id:"\u8BBE\u7F6E\u8BF4\u660E",level:3}];function a(n){let e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"\u793A\u4F8B-dockerfile",children:"\u793A\u4F8B Dockerfile"}),"\n",(0,o.jsx)(e.p,{children:"Go \u5E94\u7528\u80FD\u591F\u5728 Alpine Linux \u4E0A\u8FD0\u884C\uFF0C\u4F60\u9700\u8981\u786E\u4FDD\u5B83\u5B8C\u5168\u9759\u6001\u94FE\u63A5\uFF0C\u5373\u4E0D\u4F9D\u8D56\u4E8E\u4EFB\u4F55\u5916\u90E8\u7684\u52A8\u6001\u94FE\u63A5\u5E93"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"FROM golang:1.22.2 AS build2\n\u200B\nWORKDIR /gin-blog\n\u200B\n# \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u786E\u4FDD Go \u6A21\u5757\u88AB\u542F\u7528\uFF0CCGO \u88AB\u7981\u7528\uFF0C\u5E76\u6307\u5B9A\u64CD\u4F5C\u7CFB\u7EDF\u4E3A Linux\nENV GO111MODULE=on \\\n    CGO_ENABLED=0 \\\n    GOOS=linux\n\u200B\n# \u8BBE\u7F6E Go \u4EE3\u7406\uFF0C\u4EE5\u4FBF\u80FD\u591F\u4E0B\u8F7D\u4F9D\u8D56\nENV GOPROXY=https://goproxy.io,direct\n\u200B\n# \u4E0B\u8F7D\u6240\u6709\u4F9D\u8D56\nRUN go mod download\n\u200B\n# \u4F7F\u7528\u7279\u5B9A\u7684\u7F16\u8BD1\u6807\u5FD7\u6765\u6784\u5EFA\u5E94\u7528\n# -tags netgo\uFF1A\u786E\u4FDD\u4F7F\u7528 Go \u7684\u7EAF Go \u7F51\u7EDC\u6808\n# -ldflags '-w -s -extldflags \"-static\"'\uFF1A\u51CF\u5C0F\u751F\u6210\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u5E76\u786E\u4FDD\u6240\u6709\u7684\u94FE\u63A5\u90FD\u662F\u9759\u6001\u7684\nRUN go build -tags netgo -ldflags '-w -s -extldflags \"-static\"' -o gin-blog\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u8BBE\u7F6E\u8BF4\u660E",children:"\u8BBE\u7F6E\u8BF4\u660E"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"CGO_ENABLED=0"})}),"\n",(0,o.jsx)(e.p,{children:"CGO \u5141\u8BB8 Go \u7A0B\u5E8F\u8C03\u7528 C \u4EE3\u7801\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CCGO \u662F\u542F\u7528\u7684\uFF0C\u8FD9\u53EF\u80FD\u5BFC\u81F4\u751F\u6210\u7684\u53EF\u6267\u884C\u6587\u4EF6\u4F9D\u8D56\u4E8E\u672C\u5730\u7684 C \u5E93\uFF0C\u5982 glibc \u6216 musl libc\u3002\u5728\u591A\u6570 Linux \u53D1\u884C\u7248\u4E0A\uFF0C\u9ED8\u8BA4\u7684 libc \u662F glibc\uFF0C\u800C Alpine \u4F7F\u7528\u7684\u662F musl libc\uFF0C\u4E24\u8005\u5728\u67D0\u4E9B\u5B9E\u73B0\u548C\u884C\u4E3A\u4E0A\u6709\u5DEE\u5F02\u3002\u7981\u7528 CGO \u5E76\u542F\u7528\u7EAF Go \u7F16\u8BD1\uFF0C\u53EF\u4EE5\u751F\u6210\u5B8C\u5168\u9759\u6001\u94FE\u63A5\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u4E0D\u4F9D\u8D56\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u7684 C \u5E93\uFF0C\u4ECE\u800C\u63D0\u9AD8\u5728\u4E0D\u540C Linux \u53D1\u884C\u7248\uFF08\u7279\u522B\u662F\u5728\u4F7F\u7528 musl libc \u7684 Alpine Linux\uFF09\u4E0A\u7684\u517C\u5BB9\u6027\u3002"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"GOOS=linux"}),": \u8FD9\u544A\u8BC9 Go \u7F16\u8BD1\u5668\uFF0C\u76EE\u6807\u64CD\u4F5C\u7CFB\u7EDF\u662F Linux"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"-tags netgo"}),": \u8FD9\u4E2A\u7F16\u8BD1\u6807\u5FD7\u786E\u4FDD Go \u4F7F\u7528\u5176\u81EA\u8EAB\u7684\u7F51\u7EDC\u5E93\uFF0C\u800C\u975E\u7CFB\u7EDF\u7EA7\u7684\u7F51\u7EDC\u5E93\u8FD9\u662F\u4E3A\u4E86\u907F\u514D\u4F9D\u8D56\u7CFB\u7EDF\u7684\u52A8\u6001\u7F51\u7EDC\u5E93\uFF0C\u7279\u522B\u662F\u5728\u9759\u6001\u7F16\u8BD1\u7684\u60C5\u51B5\u4E0B"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"-ldflags '-w -s -extldflags \"-static\"'"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"-w -s"})," \u7528\u6765\u51CF\u5C11\u7F16\u8BD1\u540E\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u901A\u8FC7\u53BB\u9664\u8C03\u8BD5\u4FE1\u606F"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:'-extldflags "-static"\''})," \u786E\u4FDD\u94FE\u63A5\u8FC7\u7A0B\u4E2D\u4E0D\u94FE\u63A5\u4EFB\u4F55\u52A8\u6001\u5E93\uFF0C\u5373\u4F7F\u662F\u7CFB\u7EDF\u7684 libc"]}),"\n"]})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return s}});var l=t(67294);let o={},i=l.createContext(o);function s(n){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),l.createElement(i.Provider,{value:e},n.children)}},38480:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u9879\u76EE\u4F7F\u7528-alpine-\u6784\u5EFA\u955C\u50CF","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-07-07-Go_\u9879\u76EE\u4F7F\u7528_Alpine_\u6784\u5EFA\u955C\u50CF.md","source":"@site/blog/\u540E\u7AEF/2024-07-07-Go_\u9879\u76EE\u4F7F\u7528_Alpine_\u6784\u5EFA\u955C\u50CF.md","title":"Go \u9879\u76EE\u4F7F\u7528 Alpine \u6784\u5EFA\u955C\u50CF","description":"\u793A\u4F8B Dockerfile","date":"2024-07-07T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.56,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u9879\u76EE\u4F7F\u7528-alpine-\u6784\u5EFA\u955C\u50CF","title":"Go \u9879\u76EE\u4F7F\u7528 Alpine \u6784\u5EFA\u955C\u50CF","authors":["sumingcheng"],"tags":["backend"],"date":"2024-07-07T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u4FEE\u6539 Go Module \u4EE3\u7406","permalink":"/docs-hub/blog/\u4FEE\u6539-go-module-\u4EE3\u7406"},"nextItem":{"title":"JWTpayload\u5B57\u6BB5\u89E3\u91CA","permalink":"/docs-hub/blog/jwtpayload\u5B57\u6BB5\u89E3\u91CA"}}')}}]);