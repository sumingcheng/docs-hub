"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["185"],{10896:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return t},toc:function(){return o}});var t=r(66739),d=r(85893),i=r(50065);let c={slug:"go-\u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528-defer-\u65F6\u7684\u4E0D\u540C\u8868\u73B0",title:"Go \u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528 defer \u65F6\u7684\u4E0D\u540C\u8868\u73B0",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-04-26T00:00:00.000Z")},s="Go \u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528 defer \u65F6\u7684\u4E0D\u540C\u8868\u73B0",l={authorsImageUrls:[void 0]},o=[{value:"\u4F7F\u7528\u547D\u540D\u8FD4\u56DE\u503C",id:"\u4F7F\u7528\u547D\u540D\u8FD4\u56DE\u503C",level:2},{value:"\u89E3\u91CA",id:"\u89E3\u91CA",level:3},{value:"\u4F7F\u7528\u975E\u547D\u540D\u8FD4\u56DE\u503C",id:"\u4F7F\u7528\u975E\u547D\u540D\u8FD4\u56DE\u503C",level:2},{value:"\u89E3\u91CA",id:"\u89E3\u91CA-1",level:3},{value:"defer \u4F7F\u7528\u603B\u7ED3",id:"defer-\u4F7F\u7528\u603B\u7ED3",level:2}];function u(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u4F7F\u7528\u547D\u540D\u8FD4\u56DE\u503C",children:"\u4F7F\u7528\u547D\u540D\u8FD4\u56DE\u503C"}),"\n",(0,d.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"defer"})," \u4FEE\u6539\u8FD9\u4E2A\u8FD4\u56DE\u503C\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'package main\n\u200B\nimport "fmt"\n\u200B\nfunc modifyWithNamedReturn() (result int) {\n    defer func() {\n        result += 5  // \u4FEE\u6539\u547D\u540D\u8FD4\u56DE\u503C\n    }()\n\n    return 10  // \u521D\u59CB\u8BBE\u7F6E\u8FD4\u56DE\u503C\u4E3A 10\n}\n\u200B\nfunc main() {\n    fmt.Println(modifyWithNamedReturn())  // \u8F93\u51FA 15\n}\n\n'})}),"\n",(0,d.jsx)(n.h3,{id:"\u89E3\u91CA",children:"\u89E3\u91CA"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8FD9\u4E2A\u51FD\u6570 ",(0,d.jsx)(n.code,{children:"modifyWithNamedReturn"})," \u4E2D\u6709\u4E00\u4E2A\u547D\u540D\u8FD4\u56DE\u503C ",(0,d.jsx)(n.code,{children:"result"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u51FD\u6570\u8FD4\u56DE\u65F6\uFF0C\u9996\u5148\u8BBE\u7F6E ",(0,d.jsx)(n.code,{children:"result"})," \u4E3A ",(0,d.jsx)(n.code,{children:"10"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5728\u51FD\u6570\u5B9E\u9645\u8FD4\u56DE\u524D\uFF0C",(0,d.jsx)(n.code,{children:"defer"})," \u8BED\u53E5\u6267\u884C\uFF0C\u5C06 ",(0,d.jsx)(n.code,{children:"result"})," \u7684\u503C\u589E\u52A0 ",(0,d.jsx)(n.code,{children:"5"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u56E0\u6B64\uFF0C\u867D\u7136 ",(0,d.jsx)(n.code,{children:"return"})," \u8BED\u53E5\u6700\u521D\u5C06\u8FD4\u56DE\u503C\u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"10"}),"\uFF0C",(0,d.jsx)(n.code,{children:"defer"})," \u4FEE\u6539\u540E\uFF0C\u6700\u7EC8\u8FD4\u56DE\u503C\u53D8\u4E3A ",(0,d.jsx)(n.code,{children:"15"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F7F\u7528\u975E\u547D\u540D\u8FD4\u56DE\u503C",children:"\u4F7F\u7528\u975E\u547D\u540D\u8FD4\u56DE\u503C"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"defer"})," \u5982\u4F55\u65E0\u6CD5\u4FEE\u6539\u8FD4\u56DE\u503C\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'package main\n\u200B\nimport "fmt"\n\u200B\nfunc modifyWithoutNamedReturn() int {\n    var result int\n\n    defer func() {\n        result += 5  // \u5C1D\u8BD5\u4FEE\u6539\uFF0C\u4F46\u4E0D\u5F71\u54CD\u8FD4\u56DE\u503C\n    }()\n    result = 10  // \u8BBE\u7F6E result \u7684\u503C\n\n    return result  // \u8FD4\u56DE result \u7684\u503C\n}\n\u200B\nfunc main() {\n    fmt.Println(modifyWithoutNamedReturn())  // \u8F93\u51FA 10\n}\n\n'})}),"\n",(0,d.jsx)(n.h3,{id:"\u89E3\u91CA-1",children:"\u89E3\u91CA"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u51FD\u6570 ",(0,d.jsx)(n.code,{children:"modifyWithoutNamedReturn"})," \u8FD4\u56DE\u4E00\u4E2A\u975E\u547D\u540D\u8FD4\u56DE\u503C\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"result"})," \u88AB\u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"10"}),"\uFF0C\u5E76\u51C6\u5907\u7528\u4F5C\u8FD4\u56DE\u503C\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5C3D\u7BA1 ",(0,d.jsx)(n.code,{children:"defer"})," \u51FD\u6570\u5C06 ",(0,d.jsx)(n.code,{children:"result"})," \u589E\u52A0\u4E86 ",(0,d.jsx)(n.code,{children:"5"}),"\uFF0C\u4F46\u8FD9\u79CD\u4FEE\u6539\u53D1\u751F\u5728\u8FD4\u56DE\u503C\u88AB\u786E\u5B9A\uFF08\u5DF2\u590D\u5236\uFF09\u540E\uFF0C\u56E0\u6B64\u5BF9\u5B9E\u9645\u8FD4\u56DE\u7ED9\u8C03\u7528\u8005\u7684\u503C\u6CA1\u6709\u5F71\u54CD\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6700\u7EC8\u8F93\u51FA\u4E3A ",(0,d.jsx)(n.code,{children:"10"}),"\uFF0C\u5C55\u793A\u4E86\u5373\u4F7F ",(0,d.jsx)(n.code,{children:"defer"})," \u4FEE\u6539\u4E86\u5C40\u90E8\u53D8\u91CF ",(0,d.jsx)(n.code,{children:"result"}),"\uFF0C\u4E5F\u4E0D\u4F1A\u6539\u53D8\u8FD4\u56DE\u503C\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"defer-\u4F7F\u7528\u603B\u7ED3",children:"defer \u4F7F\u7528\u603B\u7ED3"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"defer"})," \u5728\u547D\u540D\u8FD4\u56DE\u503C\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4FEE\u6539\u6700\u7EC8\u7684\u8FD4\u56DE\u503C\uFF0C\u56E0\u4E3A\u547D\u540D\u8FD4\u56DE\u503C\u7684\u4F5C\u7528\u57DF\u5EF6\u4F38\u81F3\u6574\u4E2A\u51FD\u6570\uFF0C\u5305\u62EC ",(0,d.jsx)(n.code,{children:"defer"})," \u6267\u884C\u7684\u65F6\u95F4\u3002\u800C\u5728\u975E\u547D\u540D\u8FD4\u56DE\u503C\u7684\u60C5\u51B5\u4E0B\uFF0C",(0,d.jsx)(n.code,{children:"return"})," \u8BED\u53E5\u5B9E\u9645\u4E0A\u662F\u5C06\u503C\u590D\u5236\u5230\u8FD4\u56DE\u4F4D\u7F6E\uFF0C\u6B64\u540E\u7684 ",(0,d.jsx)(n.code,{children:"defer"})," \u4FEE\u6539\u4E0D\u518D\u5F71\u54CD\u5DF2\u7ECF\u8BBE\u7F6E\u7684\u8FD4\u56DE\u503C\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u7B80\u5355\u70B9\u53EF\u4EE5\u8FD9\u6837\u7406\u89E3\uFF0C\u547D\u540D\u8FD4\u56DE\u503C\uFF0C\u8BF4\u660E\u8FD4\u56DE\u503C\u5F88\u91CD\u8981\uFF0C\u8981\u90FD\u5904\u7406\u5B8C\u518D\u8FD4\u56DE~"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return c}});var t=r(67294);let d={},i=t.createContext(d);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(i.Provider,{value:n},e.children)}},66739:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528-defer-\u65F6\u7684\u4E0D\u540C\u8868\u73B0","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-04-26-Go_\u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528_defer_\u65F6\u7684\u4E0D\u540C\u8868\u73B0.md","source":"@site/blog/\u540E\u7AEF/2024-04-26-Go_\u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528_defer_\u65F6\u7684\u4E0D\u540C\u8868\u73B0.md","title":"Go \u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528 defer \u65F6\u7684\u4E0D\u540C\u8868\u73B0","description":"\u4F7F\u7528\u547D\u540D\u8FD4\u56DE\u503C","date":"2024-04-26T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.5233333333333334,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528-defer-\u65F6\u7684\u4E0D\u540C\u8868\u73B0","title":"Go \u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528 defer \u65F6\u7684\u4E0D\u540C\u8868\u73B0","authors":["sumingcheng"],"tags":["backend"],"date":"2024-04-26T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Go \u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B","permalink":"/docs-hub/blog/go-\u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B"},"nextItem":{"title":"Go \u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF","permalink":"/docs-hub/blog/go-\u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF"}}')}}]);