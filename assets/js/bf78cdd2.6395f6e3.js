"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["76137"],{23542:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var c=t(45116),i=t(85893),o=t(50065);let l={slug:"go-\u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF",title:"Go \u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-04-26T00:00:00.000Z")},r="Go \u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF",s={authorsImageUrls:[void 0]},u=[{value:"\u5B87\u5B99\u5757\uFF08Universe block\uFF09",id:"\u5B87\u5B99\u5757universe-block",level:3},{value:"\u5305\u5757\uFF08Package block\uFF09",id:"\u5305\u5757package-block",level:3},{value:"\u6587\u4EF6\u5757\uFF08File block\uFF09",id:"\u6587\u4EF6\u5757file-block",level:3},{value:"&quot;if&quot;, &quot;for&quot;, \u548C &quot;switch&quot; \u8BED\u53E5\u5757\uFF08Implicit block\uFF09",id:"if-for-\u548C-switch-\u8BED\u53E5\u5757implicit-block",level:3},{value:"&quot;switch&quot; \u6216 &quot;select&quot; \u8BED\u53E5\u4E2D\u7684\u6BCF\u4E2A\u5B50\u53E5\uFF08Implicit block\uFF09",id:"switch-\u6216-select-\u8BED\u53E5\u4E2D\u7684\u6BCF\u4E2A\u5B50\u53E5implicit-block",level:3}];function a(n){let e={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"\u5B87\u5B99\u5757universe-block",children:"\u5B87\u5B99\u5757\uFF08Universe block\uFF09"}),"\n",(0,i.jsx)(e.p,{children:"\u5B87\u5B99\u5757\u662F Go \u8BED\u8A00\u4E2D\u6700\u9876\u5C42\u7684\u4F5C\u7528\u57DF\uFF0C\u5305\u542B\u4E86\u6240\u6709\u5185\u7F6E\u7684\u7C7B\u578B\u548C\u51FD\u6570\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\u200B\nimport "fmt"\n\u200B\nfunc main() {\n    var num int = len("Hello") // \u4F7F\u7528\u5185\u7F6E\u51FD\u6570 len\n    fmt.Println(num)           // \u4F7F\u7528\u5185\u7F6E\u5305 fmt\n}\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",(0,i.jsx)(e.code,{children:"len"})," \u548C ",(0,i.jsx)(e.code,{children:"fmt"})," \u90FD\u662F\u5B87\u5B99\u5757\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u4EEC\u5728\u4EFB\u4F55 Go \u7A0B\u5E8F\u4E2D\u90FD\u662F\u53EF\u7528\u7684\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5305\u5757package-block",children:"\u5305\u5757\uFF08Package block\uFF09"}),"\n",(0,i.jsx)(e.p,{children:"\u5305\u5757\u5305\u542B\u4E86\u4E00\u4E2A\u5305\u5185\u7684\u6240\u6709 Go \u6E90\u4EE3\u7801\u6587\u672C\uFF0C\u5176\u5185\u5B9A\u4E49\u7684\u53D8\u91CF\u5728\u6574\u4E2A\u5305\u5185\u53EF\u89C1\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"// \u6587\u4EF6 1: math.go\npackage math\n\u200B\nvar Factor int = 2\n\u200B\n// \u6587\u4EF6 2: double.go\npackage math\n\u200B\nfunc Double(n int) int {\n    return n * Factor  // \u53EF\u4EE5\u8BBF\u95EE\u540C\u4E00\u4E2A\u5305\u5185\u7684\u5176\u4ED6\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF Factor\n}\n\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",(0,i.jsx)(e.code,{children:"Factor"})," \u5728 ",(0,i.jsx)(e.code,{children:"math"})," \u5305\u7684\u5305\u5757\u4E2D\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u5305\u5185\u7684\u5176\u4ED6\u6587\u4EF6\u4E2D\u4F7F\u7528\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6587\u4EF6\u5757file-block",children:"\u6587\u4EF6\u5757\uFF08File block\uFF09"}),"\n",(0,i.jsx)(e.p,{children:"\u6587\u4EF6\u5757\u662F\u4EC5\u9650\u4E8E\u5355\u4E2A\u6587\u4EF6\u7684\u4F5C\u7528\u57DF\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'// \u6587\u4EF6: util.go\npackage util\n\u200B\nvar helper = "hidden"  // \u53EA\u5728 util.go \u6587\u4EF6\u4E2D\u53EF\u89C1\n\u200B\nfunc Help() string {\n    return helper  // \u53EA\u6709\u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE helper\n}\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD9\u91CC\u7684\u53D8\u91CF ",(0,i.jsx)(e.code,{children:"helper"})," \u4EC5\u5728\u5B9A\u4E49\u5B83\u7684\u6587\u4EF6 ",(0,i.jsx)(e.code,{children:"util.go"})," \u5185\u53EF\u89C1\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"if-for-\u548C-switch-\u8BED\u53E5\u5757implicit-block",children:'"if", "for", \u548C "switch" \u8BED\u53E5\u5757\uFF08Implicit block\uFF09'}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8FD9\u4E9B\u63A7\u5236\u6D41\u8BED\u53E5\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u4EC5\u5728\u8BED\u53E5\u5757\u5185\u90E8\u6709\u6548\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\u200B\nimport "fmt"\n\u200B\nfunc main() {\n    if x := 10; x > 5 {\n        fmt.Println(x)  // x \u5728\u8FD9\u4E2A if \u5757\u4E2D\u6709\u6548\n    }\n    // fmt.Println(x)  // \u8FD9\u91CC\u8BBF\u95EE x \u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A x \u7684\u4F5C\u7528\u57DF\u4EC5\u5728 if \u5757\u5185\n}\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"switch-\u6216-select-\u8BED\u53E5\u4E2D\u7684\u6BCF\u4E2A\u5B50\u53E5implicit-block",children:'"switch" \u6216 "select" \u8BED\u53E5\u4E2D\u7684\u6BCF\u4E2A\u5B50\u53E5\uFF08Implicit block\uFF09'}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u6BCF\u4E2A ",(0,i.jsx)(e.code,{children:"switch"})," \u6216 ",(0,i.jsx)(e.code,{children:"select"})," \u7684\u5B50\u53E5\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u4EC5\u5728\u8BE5\u5B50\u53E5\u5185\u6709\u6548\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:' package main\n\u200B\nimport "fmt"\n\u200B\nfunc main() {\n    switch num := 5; {\n    case num < 10:\n        fmt.Println(num)  // num \u5728\u8FD9\u4E2A case \u5757\u4E2D\u6709\u6548\n    }\n    // fmt.Println(num)  // \u8FD9\u91CC\u8BBF\u95EE num \u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A num \u7684\u4F5C\u7528\u57DF\u4EC5\u5728 switch \u7684 case \u5757\u5185\n}\n\n'})})]})}function h(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var c=t(67294);let i={},o=c.createContext(i);function l(n){let e=c.useContext(o);return c.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),c.createElement(o.Provider,{value:e},n.children)}},45116:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-04-26-Go_\u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF.md","source":"@site/blog/\u540E\u7AEF/2024-04-26-Go_\u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF.md","title":"Go \u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF","description":"\u5B87\u5B99\u5757\uFF08Universe block\uFF09","date":"2024-04-26T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.59,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF","title":"Go \u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u57DF","authors":["sumingcheng"],"tags":["backend"],"date":"2024-04-26T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Go \u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528 defer \u65F6\u7684\u4E0D\u540C\u8868\u73B0","permalink":"/docs-hub/blog/go-\u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528-defer-\u65F6\u7684\u4E0D\u540C\u8868\u73B0"},"nextItem":{"title":"Go make \u548C new \u7684\u533A\u522B","permalink":"/docs-hub/blog/go-make-\u548C-new-\u7684\u533A\u522B"}}')}}]);