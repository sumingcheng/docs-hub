"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["26600"],{26564:function(e,n,c){c.r(n),c.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>d,assets:()=>t,toc:()=>l,contentTitle:()=>s});var d=JSON.parse('{"id":"Backend/Go/\u57FA\u7840/Go\u8BED\u8A00\u7684\u53D8\u91CF","title":"Go \u53D8\u91CF","description":"\u53D8\u91CF\u662F\u65B9\u4FBF\u8BA1\u7B97\u673A\u4ECE\u5185\u5B58\u4E2D\u53D6\u503C\u548C\u5411\u5185\u5B58\u4E2D\u5B58\u503C\u7684\u5DE5\u5177\u3002\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u53D8\u91CF\u6709\u4E00\u4E9B\u72EC\u7279\u7684\u7279\u70B9\u3002","source":"@site/docs/Backend/Go/\u57FA\u7840/4.Go\u8BED\u8A00\u7684\u53D8\u91CF.md","sourceDirName":"Backend/Go/\u57FA\u7840","slug":"/Backend/Go/\u57FA\u7840/Go\u8BED\u8A00\u7684\u53D8\u91CF","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/Go\u8BED\u8A00\u7684\u53D8\u91CF","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u57FA\u7840/4.Go\u8BED\u8A00\u7684\u53D8\u91CF.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":4,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u547D\u4EE4\u4E0E\u51FD\u6570\u4F7F\u7528","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/\u547D\u4EE4\u4E0E\u51FD\u6570\u4F7F\u7528"},"next":{"title":"Go \u5E38\u91CF","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/Go\u8BED\u8A00\u7684\u5E38\u91CF"}}'),i=c("85893"),r=c("50065");let o={},s="Go \u53D8\u91CF",t={},l=[{value:"Go \u53D8\u91CF\u7279\u70B9",id:"go-\u53D8\u91CF\u7279\u70B9",level:2},{value:"\u9759\u6001\u7C7B\u578B",id:"\u9759\u6001\u7C7B\u578B",level:3},{value:"\u533F\u540D\u53D8\u91CF",id:"\u533F\u540D\u53D8\u91CF",level:3},{value:"\u663E\u5F0F\u7C7B\u578B\u8F6C\u6362",id:"\u663E\u5F0F\u7C7B\u578B\u8F6C\u6362",level:3},{value:"\u77ED\u53D8\u91CF\u58F0\u660E",id:"\u77ED\u53D8\u91CF\u58F0\u660E",level:3},{value:"\u96F6\u503C",id:"\u96F6\u503C",level:3},{value:"\u6307\u9488",id:"\u6307\u9488",level:3},{value:"\u53EF\u89C1\u6027\u901A\u8FC7\u547D\u540D\u63A7\u5236",id:"\u53EF\u89C1\u6027\u901A\u8FC7\u547D\u540D\u63A7\u5236",level:3},{value:"\u4E0D\u652F\u6301\u81EA\u52A8\u5168\u5C40\u53D8\u91CF",id:"\u4E0D\u652F\u6301\u81EA\u52A8\u5168\u5C40\u53D8\u91CF",level:3}];function a(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"go-\u53D8\u91CF",children:"Go \u53D8\u91CF"})}),"\n",(0,i.jsx)(n.p,{children:"\u53D8\u91CF\u662F\u65B9\u4FBF\u8BA1\u7B97\u673A\u4ECE\u5185\u5B58\u4E2D\u53D6\u503C\u548C\u5411\u5185\u5B58\u4E2D\u5B58\u503C\u7684\u5DE5\u5177\u3002\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u53D8\u91CF\u6709\u4E00\u4E9B\u72EC\u7279\u7684\u7279\u70B9\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"go-\u53D8\u91CF\u7279\u70B9",children:"Go \u53D8\u91CF\u7279\u70B9"}),"\n",(0,i.jsx)(n.h3,{id:"\u9759\u6001\u7C7B\u578B",children:"\u9759\u6001\u7C7B\u578B"}),"\n",(0,i.jsxs)(n.p,{children:["Go \u662F\u9759\u6001\u7C7B\u578B\u7684\u8BED\u8A00\uFF0C\u4E00\u65E6\u53D8\u91CF\u88AB\u58F0\u660E\u4E3A\u67D0\u4E2A\u7C7B\u578B\uFF0C\u5982 ",(0,i.jsx)(n.strong,{children:"int"})," \u6216 ",(0,i.jsx)(n.strong,{children:"string"}),"\uFF0C\u5C31\u4E0D\u80FD\u518D\u8D4B\u503C\u4E3A\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u3002\u8FD9\u4E0E JavaScript \u7684\u52A8\u6001\u7C7B\u578B\u4E0D\u540C\u3002\u5728\u7F16\u7A0B\u4E2D\uFF0C\u6211\u9700\u8981\u660E\u786E\u6307\u5B9A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u907F\u514D\u7C7B\u578B\u6DF7\u6DC6\uFF0C\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u9760\u6027\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u533F\u540D\u53D8\u91CF",children:"\u533F\u540D\u53D8\u91CF"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Go \u4E2D\uFF0C\u4F7F\u7528 ",(0,i.jsx)(n.strong,{children:"_"})," \u8868\u793A\u533F\u540D\u53D8\u91CF\u3002\u5F53\u6211\u9700\u8981\u5FFD\u7565\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u4E00\u90E8\u5206\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u533F\u540D\u53D8\u91CF\u6765\u5360\u4F4D\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    a, _, c := abc()\n    fmt.Println(a, c)\n}\n\nfunc abc() (int, int, string) {\n    return 1, 2, "abc"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u8C03\u7528\u4E86 ",(0,i.jsx)(n.code,{children:"abc()"})," \u51FD\u6570\uFF0C\u4F46\u53EA\u9700\u8981\u7B2C\u4E00\u4E2A\u548C\u7B2C\u4E09\u4E2A\u8FD4\u56DE\u503C\u3002\u901A\u8FC7\u4F7F\u7528\u533F\u540D\u53D8\u91CF ",(0,i.jsx)(n.strong,{children:"_"}),"\uFF0C\u53EF\u4EE5\u5FFD\u7565\u4E0D\u9700\u8981\u7684\u7B2C\u4E8C\u4E2A\u8FD4\u56DE\u503C\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u663E\u5F0F\u7C7B\u578B\u8F6C\u6362",children:"\u663E\u5F0F\u7C7B\u578B\u8F6C\u6362"}),"\n",(0,i.jsxs)(n.p,{children:["Go \u4E2D\u7684\u7C7B\u578B\u8F6C\u6362\u5FC5\u987B\u662F\u663E\u5F0F\u7684\uFF0CGo \u4E0D\u4F1A\u8FDB\u884C\u81EA\u52A8\u7684\u7C7B\u578B\u8F6C\u6362\u3002\u8FD9\u4E0E JavaScript \u7684\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362\u4E0D\u540C\u3002\u5F53\u6211\u9700\u8981\u5C06\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"int"})," \u7C7B\u578B\u8F6C\u6362\u4E3A ",(0,i.jsx)(n.code,{children:"float64"})," \u7C7B\u578B\u65F6\uFF0C\u9700\u8981\u4F7F\u7528\u7C7B\u578B\u8F6C\u6362\u64CD\u4F5C\uFF0C\u4F8B\u5982 ",(0,i.jsx)(n.code,{children:"float64(myInt)"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u77ED\u53D8\u91CF\u58F0\u660E",children:"\u77ED\u53D8\u91CF\u58F0\u660E"}),"\n",(0,i.jsxs)(n.p,{children:["Go \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u6D01\u7684\u77ED\u53D8\u91CF\u58F0\u660E\u7B26 ",(0,i.jsx)(n.code,{children:":="}),"\uFF0C\u7528\u4E8E\u58F0\u660E\u5E76\u521D\u59CB\u5316\u53D8\u91CF\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'name := "John"\nage := 30\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:":="}),"\uFF0C\u6211\u53EF\u4EE5\u540C\u65F6\u58F0\u660E\u548C\u8D4B\u503C\uFF0C\u4EE3\u7801\u66F4\u52A0\u7B80\u6D01\u660E\u4E86\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u96F6\u503C",children:"\u96F6\u503C"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Go \u4E2D\uFF0C\u53D8\u91CF\u5728\u58F0\u660E\u65F6\u4F1A\u81EA\u52A8\u521D\u59CB\u5316\u4E3A\u5176\u7C7B\u578B\u7684\u96F6\u503C\uFF0C\u907F\u514D\u4E86\u672A\u521D\u59CB\u5316\u53D8\u91CF\u7684\u51FA\u73B0\u3002\u5F53\u6211\u58F0\u660E\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"int"})," \u7C7B\u578B\u7684\u53D8\u91CF\u800C\u672A\u8D4B\u503C\u65F6\uFF0C\u5B83\u7684\u9ED8\u8BA4\u503C\u662F ",(0,i.jsx)(n.code,{children:"0"}),"\uFF1B",(0,i.jsx)(n.code,{children:"string"})," \u7C7B\u578B\u7684\u53D8\u91CF\u9ED8\u8BA4\u503C\u662F\u7A7A\u5B57\u7B26\u4E32\u3002\u8FD9\u4E0E JavaScript \u4E0D\u540C\uFF0CJavaScript \u4E2D\u672A\u8D4B\u503C\u7684\u53D8\u91CF\u662F ",(0,i.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u6307\u9488",children:"\u6307\u9488"}),"\n",(0,i.jsxs)(n.p,{children:["Go \u8BED\u8A00\u652F\u6301\u6307\u9488\uFF0C\u4F7F\u6211\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740\u3002\u8FD9\u4E0E JavaScript \u4E0D\u540C\uFF0CJavaScript \u4E0D\u652F\u6301\u6307\u9488\u3002\u5728 Go \u4E2D\uFF0C\u6211\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"&"})," \u7B26\u53F7\u83B7\u53D6\u53D8\u91CF\u7684\u5730\u5740\uFF0C\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"*"})," \u7B26\u53F7\u89E3\u5F15\u7528\u6307\u9488\uFF0C\u8BBF\u95EE\u6307\u9488\u6307\u5411\u7684\u503C\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"var a int = 10\nvar p *int = &a\nfmt.Println(*p) // \u8F93\u51FA 10\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C",(0,i.jsx)(n.code,{children:"p"})," \u662F\u4E00\u4E2A\u6307\u5411\u6574\u6570\u7684\u6307\u9488\uFF0C\u6307\u5411\u53D8\u91CF ",(0,i.jsx)(n.code,{children:"a"}),"\u3002\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"*"})," \u64CD\u4F5C\u7B26\uFF0C\u53EF\u4EE5\u83B7\u53D6 ",(0,i.jsx)(n.code,{children:"p"})," \u6307\u5411\u7684\u503C\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u53EF\u89C1\u6027\u901A\u8FC7\u547D\u540D\u63A7\u5236",children:"\u53EF\u89C1\u6027\u901A\u8FC7\u547D\u540D\u63A7\u5236"}),"\n",(0,i.jsx)(n.p,{children:"Go \u901A\u8FC7\u6807\u8BC6\u7B26\u7684\u547D\u540D\u6765\u63A7\u5236\u53EF\u89C1\u6027\u3002\u9996\u5B57\u6BCD\u5927\u5199\u7684\u53D8\u91CF\u6216\u51FD\u6570\u5728\u5916\u90E8\u5305\u4E2D\u53EF\u89C1\uFF08\u516C\u6709\u7684\uFF09\uFF0C\u9996\u5B57\u6BCD\u5C0F\u5199\u7684\u5219\u4EC5\u5728\u5305\u5185\u53EF\u89C1\uFF08\u79C1\u6709\u7684\uFF09\u3002\u8FD9\u4E00\u89C4\u5219\u7B80\u5355\u660E\u4E86\uFF0C\u907F\u514D\u4E86\u989D\u5916\u7684\u5173\u952E\u5B57\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u4E0D\u652F\u6301\u81EA\u52A8\u5168\u5C40\u53D8\u91CF",children:"\u4E0D\u652F\u6301\u81EA\u52A8\u5168\u5C40\u53D8\u91CF"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Go \u4E2D\uFF0C\u6240\u6709\u53D8\u91CF\u90FD\u5FC5\u987B\u663E\u5F0F\u58F0\u660E\uFF0C\u672A\u58F0\u660E\u76F4\u63A5\u4F7F\u7528\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u9519\u8BEF\u3002\u8FD9\u4E0E JavaScript \u4E0D\u540C\uFF0C\u5728 JavaScript \u4E2D\uFF0C\u5982\u679C\u5FD8\u8BB0\u4E86 ",(0,i.jsx)(n.code,{children:"var"}),"\u3001",(0,i.jsx)(n.code,{children:"let"})," \u6216 ",(0,i.jsx)(n.code,{children:"const"}),"\uFF0C\u53D8\u91CF\u4F1A\u81EA\u52A8\u6210\u4E3A\u5168\u5C40\u53D8\u91CF\u3002Go \u7684\u8FD9\u79CD\u8BBE\u8BA1\u63D0\u9AD8\u4E86\u4EE3\u7801\u7684\u5B89\u5168\u6027\uFF0C\u907F\u514D\u4E86\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,c){c.d(n,{Z:function(){return s},a:function(){return o}});var d=c(67294);let i={},r=d.createContext(i);function o(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);