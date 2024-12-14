"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["47555"],{28176:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>c,assets:()=>o,toc:()=>t,contentTitle:()=>s});var c=JSON.parse('{"id":"Backend/Go/\u51FD\u6570/\u9519\u8BEF\u5904\u7406","title":"Go \u8BED\u8A00\u7684\u9519\u8BEF\u5904\u7406","description":"\u9519\u8BEF\u5904\u7406\u7684\u57FA\u672C\u793A\u4F8B","source":"@site/docs/Backend/Go/\u51FD\u6570/4.\u9519\u8BEF\u5904\u7406.md","sourceDirName":"Backend/Go/\u51FD\u6570","slug":"/Backend/Go/\u51FD\u6570/\u9519\u8BEF\u5904\u7406","permalink":"/docs-hub/Backend/Go/\u51FD\u6570/\u9519\u8BEF\u5904\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u51FD\u6570/4.\u9519\u8BEF\u5904\u7406.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":4,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u590D\u6742\u51FD\u6570\u7C7B\u578B\u3001\u95ED\u5305\u4E0E\u9003\u9038\u5206\u6790","permalink":"/docs-hub/Backend/Go/\u51FD\u6570/\u590D\u6742\u51FD\u6570\u7C7B\u578B\u3001\u95ED\u5305\u4E0E\u9003\u9038\u5206\u6790"},"next":{"title":"Gin","permalink":"/docs-hub/category/gin"}}'),i=r("85893"),d=r("50065");let l={},s="Go \u8BED\u8A00\u7684\u9519\u8BEF\u5904\u7406",o={},t=[{value:"\u9519\u8BEF\u5904\u7406\u7684\u57FA\u672C\u793A\u4F8B",id:"\u9519\u8BEF\u5904\u7406\u7684\u57FA\u672C\u793A\u4F8B",level:2},{value:"Go \u7684\u9519\u8BEF\u5904\u7406\u8BBE\u8BA1",id:"go-\u7684\u9519\u8BEF\u5904\u7406\u8BBE\u8BA1",level:2},{value:"\u9519\u8BEF\u4F5C\u4E3A\u8FD4\u56DE\u503C",id:"\u9519\u8BEF\u4F5C\u4E3A\u8FD4\u56DE\u503C",level:3},{value:"<code>error</code> \u63A5\u53E3",id:"error-\u63A5\u53E3",level:3},{value:"\u7F3A\u5C11\u4F20\u7EDF\u5F02\u5E38\u673A\u5236",id:"\u7F3A\u5C11\u4F20\u7EDF\u5F02\u5E38\u673A\u5236",level:3},{value:"<code>defer</code>\u3001<code>panic</code> \u548C <code>recover</code> \u6A21\u5F0F",id:"deferpanic-\u548C-recover-\u6A21\u5F0F",level:3},{value:"\u6E05\u6670\u7684\u9519\u8BEF\u4F20\u64AD",id:"\u6E05\u6670\u7684\u9519\u8BEF\u4F20\u64AD",level:3},{value:"\u9519\u8BEF\u5305\u88C5",id:"\u9519\u8BEF\u5305\u88C5",level:3},{value:"\u9519\u8BEF\u5904\u7406\u6848\u4F8B",id:"\u9519\u8BEF\u5904\u7406\u6848\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function a(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"go-\u8BED\u8A00\u7684\u9519\u8BEF\u5904\u7406",children:"Go \u8BED\u8A00\u7684\u9519\u8BEF\u5904\u7406"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9519\u8BEF\u5904\u7406\u7684\u57FA\u672C\u793A\u4F8B",children:"\u9519\u8BEF\u5904\u7406\u7684\u57FA\u672C\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "os"\n)\n\nfunc main() {\n    // \u5C1D\u8BD5\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\n    fileName := "example.txt"\n    file, err := os.Open(fileName)\n\n    // \u68C0\u67E5\u662F\u5426\u6709\u9519\u8BEF\u53D1\u751F\n    if err != nil {\n        fmt.Printf("\u6253\u5F00\u6587\u4EF6 %s \u65F6\u51FA\u9519\uFF1A%v\\n", fileName, err)\n        return\n    }\n\n    // \u786E\u4FDD\u6587\u4EF6\u6700\u7EC8\u5173\u95ED\n    defer file.Close()\n\n    // \u5982\u679C\u6CA1\u6709\u9519\u8BEF\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u5904\u7406\u6587\u4EF6\n    fmt.Printf("\u6587\u4EF6 %s \u6253\u5F00\u6210\u529F\\n", fileName)\n\n    // \u6B64\u5904\u53EF\u4EE5\u6DFB\u52A0\u8BFB\u53D6\u6216\u5904\u7406\u6587\u4EF6\u7684\u4EE3\u7801\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u5C1D\u8BD5\u6253\u5F00\u540D\u4E3A ",(0,i.jsx)(n.code,{children:"example.txt"})," \u7684\u6587\u4EF6\u3002\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u65E0\u6CD5\u6253\u5F00\uFF0C\u7A0B\u5E8F\u4F1A\u8F93\u51FA\u9519\u8BEF\u4FE1\u606F\u5E76\u8FD4\u56DE\u3002\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"defer"})," \u786E\u4FDD\u6587\u4EF6\u5728\u51FD\u6570\u7ED3\u675F\u65F6\u88AB\u6B63\u786E\u5173\u95ED\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"go-\u7684\u9519\u8BEF\u5904\u7406\u8BBE\u8BA1",children:"Go \u7684\u9519\u8BEF\u5904\u7406\u8BBE\u8BA1"}),"\n",(0,i.jsx)(n.h3,{id:"\u9519\u8BEF\u4F5C\u4E3A\u8FD4\u56DE\u503C",children:"\u9519\u8BEF\u4F5C\u4E3A\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(n.p,{children:["Go \u8BED\u8A00\u7684\u51FD\u6570\u901A\u5E38\u8FD4\u56DE\u4E24\u4E2A\u503C\uFF0C\u4E00\u4E2A\u662F\u51FD\u6570\u7684\u7ED3\u679C\uFF0C\u53E6\u4E00\u4E2A\u662F ",(0,i.jsx)(n.code,{children:"error"})," \u7C7B\u578B\u7684\u503C\u3002\u5982\u679C\u53D1\u751F\u9519\u8BEF\uFF0C",(0,i.jsx)(n.code,{children:"error"})," \u5C06\u88AB\u8BBE\u7F6E\u4E3A\u975E ",(0,i.jsx)(n.code,{children:"nil"}),"\uFF0C\u5426\u5219\u4E3A ",(0,i.jsx)(n.code,{children:"nil"}),"\u3002\u8FD9\u8981\u6C42\u6211\u4EEC\u5728\u6BCF\u6B21\u53EF\u80FD\u53D1\u751F\u9519\u8BEF\u7684\u64CD\u4F5C\u540E\uFF0C\u663E\u5F0F\u5730\u68C0\u67E5\u9519\u8BEF\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"result, err := someFunction()\nif err != nil {\n    // \u9519\u8BEF\u5904\u7406\n    return\n}\n// \u7EE7\u7EED\u5904\u7406 result\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"error-\u63A5\u53E3",children:[(0,i.jsx)(n.code,{children:"error"})," \u63A5\u53E3"]}),"\n",(0,i.jsxs)(n.p,{children:["Go \u4E2D\u7684\u9519\u8BEF\u901A\u8FC7\u5185\u7F6E\u7684 ",(0,i.jsx)(n.code,{children:"error"})," \u63A5\u53E3\u8868\u793A\uFF0C\u5B9A\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"type error interface {\n    Error() string\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u5141\u8BB8\u6211\u4EEC\u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u7C7B\u578B\uFF0C\u540C\u65F6\u4FDD\u6301\u4E00\u81F4\u7684\u9519\u8BEF\u5904\u7406\u65B9\u5F0F\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7F3A\u5C11\u4F20\u7EDF\u5F02\u5E38\u673A\u5236",children:"\u7F3A\u5C11\u4F20\u7EDF\u5F02\u5E38\u673A\u5236"}),"\n",(0,i.jsxs)(n.p,{children:["Go \u6CA1\u6709\u7C7B\u4F3C\u4E8E Java \u6216 C# \u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"try-catch"})," \u5F02\u5E38\u673A\u5236\u3002\u8FD9\u9632\u6B62\u4E86\u5F02\u5E38\u7684\u9690\u5F0F\u4F20\u64AD\uFF0C\u8FEB\u4F7F\u6211\u4EEC\u5728\u9519\u8BEF\u53D1\u751F\u7684\u5730\u65B9\u7ACB\u5373\u5904\u7406\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u9760\u6027\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"deferpanic-\u548C-recover-\u6A21\u5F0F",children:[(0,i.jsx)(n.code,{children:"defer"}),"\u3001",(0,i.jsx)(n.code,{children:"panic"})," \u548C ",(0,i.jsx)(n.code,{children:"recover"})," \u6A21\u5F0F"]}),"\n",(0,i.jsxs)(n.p,{children:["\u867D\u7136 Go \u6CA1\u6709\u4F20\u7EDF\u7684\u5F02\u5E38\u673A\u5236\uFF0C\u4F46\u63D0\u4F9B\u4E86 ",(0,i.jsx)(n.code,{children:"panic"})," \u548C ",(0,i.jsx)(n.code,{children:"recover"})," \u6765\u5904\u7406\u7A0B\u5E8F\u4E2D\u7684\u4E25\u91CD\u9519\u8BEF\uFF08\u975E\u4E1A\u52A1\u903B\u8F91\u9519\u8BEF\uFF09\u3002",(0,i.jsx)(n.code,{children:"defer"})," \u7528\u4E8E\u786E\u4FDD\u8D44\u6E90\u7684\u91CA\u653E\uFF0C\u5373\u4F7F\u53D1\u751F\u4E86 ",(0,i.jsx)(n.code,{children:"panic"}),"\uFF0C\u88AB ",(0,i.jsx)(n.code,{children:"defer"})," \u7684\u51FD\u6570\u4ECD\u7136\u4F1A\u6267\u884C\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'defer func() {\n    if r := recover(); r != nil {\n        // \u5904\u7406 panic\n        fmt.Println("\u6355\u83B7\u5230\u5F02\u5E38\uFF1A", r)\n    }\n}()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u6E05\u6670\u7684\u9519\u8BEF\u4F20\u64AD",children:"\u6E05\u6670\u7684\u9519\u8BEF\u4F20\u64AD"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u591A\u5C42\u51FD\u6570\u8C03\u7528\u4E2D\uFF0C\u9519\u8BEF\u9700\u8981\u88AB\u8FD4\u56DE\u5230\u8C03\u7528\u8005\u8FDB\u884C\u5904\u7406\u3002\u8FD9\u79CD\u6A21\u5F0F\u9F13\u52B1\u6211\u4EEC\u4E86\u89E3\u5E76\u5904\u7406\u9519\u8BEF\u7684\u6765\u6E90\uFF0C\u800C\u4E0D\u662F\u5FFD\u7565\u9519\u8BEF\u7684\u5B58\u5728\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u9519\u8BEF\u5305\u88C5",children:"\u9519\u8BEF\u5305\u88C5"}),"\n",(0,i.jsx)(n.p,{children:"\u81EA Go 1.13 \u8D77\uFF0C\u5F15\u5165\u4E86\u9519\u8BEF\u5305\u88C5\u673A\u5236\uFF0C\u53EF\u4EE5\u4E3A\u539F\u59CB\u9519\u8BEF\u6DFB\u52A0\u66F4\u591A\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF0C\u540C\u65F6\u4FDD\u7559\u539F\u59CB\u9519\u8BEF\u7684\u7C7B\u578B\u548C\u503C\uFF0C\u65B9\u4FBF\u66F4\u7CBE\u786E\u7684\u9519\u8BEF\u5904\u7406\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if err != nil {\n    return fmt.Errorf("\u64CD\u4F5C\u5931\u8D25\uFF1A%w", err)\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u9519\u8BEF\u5904\u7406\u6848\u4F8B",children:"\u9519\u8BEF\u5904\u7406\u6848\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "bufio"\n    "fmt"\n    "os"\n)\n\nfunc main() {\n    if err := readFile(); err != nil {\n        fmt.Println("\u53D1\u751F\u9519\u8BEF\uFF1A", err)\n    } else {\n        fmt.Println("\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6BD5")\n    }\n}\n\nfunc readFile() error {\n    // \u6355\u83B7\u53EF\u80FD\u7684 panic\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println("\u6355\u83B7\u5230\u5F02\u5E38\uFF1A", r)\n        }\n    }()\n\n    file, err := os.Open("sumingcheng.txt")\n    if err != nil {\n        return fmt.Errorf("\u6253\u5F00\u6587\u4EF6\u5931\u8D25\uFF1A%w", err)\n    }\n    // \u786E\u4FDD\u6587\u4EF6\u6700\u7EC8\u5173\u95ED\n    defer func() {\n        if err := file.Close(); err != nil {\n            fmt.Println("\u5173\u95ED\u6587\u4EF6\u65F6\u51FA\u9519\uFF1A", err)\n        }\n    }()\n\n    scanner := bufio.NewScanner(file)\n    for scanner.Scan() {\n        fmt.Println(scanner.Text())\n    }\n\n    if err := scanner.Err(); err != nil {\n        return fmt.Errorf("\u8BFB\u53D6\u6587\u4EF6\u65F6\u51FA\u9519\uFF1A%w", err)\n    }\n\n    return nil\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"readFile"})," \u51FD\u6570\u6765\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\uFF0C\u5E76\u5728\u4E3B\u51FD\u6570\u4E2D\u8C03\u7528\u5B83\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["\u6355\u83B7 ",(0,i.jsx)(n.code,{children:"panic"})]})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"defer"})," \u548C\u533F\u540D\u51FD\u6570\u7ED3\u5408 ",(0,i.jsx)(n.code,{children:"recover"}),"\uFF0C\u53EF\u4EE5\u6355\u83B7\u5728 ",(0,i.jsx)(n.code,{children:"readFile"})," \u51FD\u6570\u4E2D\u53EF\u80FD\u53D1\u751F\u7684 ",(0,i.jsx)(n.code,{children:"panic"}),"\uFF0C\u9632\u6B62\u7A0B\u5E8F\u5D29\u6E83\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u9519\u8BEF\u5904\u7406"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6253\u5F00\u6587\u4EF6\u548C\u8BFB\u53D6\u6587\u4EF6\u65F6\uFF0C\u90FD\u68C0\u67E5\u4E86\u53EF\u80FD\u7684\u9519\u8BEF\uFF0C\u5E76\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"fmt.Errorf"})," \u5305\u88C5\u9519\u8BEF\u4FE1\u606F\uFF0C\u6DFB\u52A0\u4E86\u4E0A\u4E0B\u6587\uFF0C\u65B9\u4FBF\u8C03\u8BD5\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8D44\u6E90\u7BA1\u7406"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"defer"})," \u786E\u4FDD\u6587\u4EF6\u5728\u8BFB\u53D6\u5B8C\u6210\u540E\u88AB\u6B63\u786E\u5173\u95ED\uFF0C\u5373\u4F7F\u8FC7\u7A0B\u4E2D\u53D1\u751F\u4E86\u9519\u8BEF\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u53CA\u65F6\u68C0\u67E5\u9519\u8BEF"}),"\uFF1A\u6BCF\u6B21\u53EF\u80FD\u53D1\u751F\u9519\u8BEF\u7684\u64CD\u4F5C\u540E\uFF0C\u7ACB\u5373\u68C0\u67E5\u5E76\u5904\u7406\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["\u5408\u7406\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"panic"})," \u548C ",(0,i.jsx)(n.code,{children:"recover"})]}),"\uFF1A\u4EC5\u5728\u4E0D\u53EF\u6062\u590D\u7684\u9519\u8BEF\u60C5\u51B5\u4E0B\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"panic"}),"\uFF0C\u907F\u514D\u6EE5\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8D44\u6E90\u91CA\u653E"}),"\uFF1A\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"defer"})," \u786E\u4FDD\u6587\u4EF6\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u7B49\u8D44\u6E90\u88AB\u6B63\u786E\u91CA\u653E\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u9519\u8BEF\u4FE1\u606F\u6E05\u6670"}),"\uFF1A\u8FD4\u56DE\u9519\u8BEF\u65F6\uFF0C\u6DFB\u52A0\u6709\u610F\u4E49\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF0C\u65B9\u4FBF\u6392\u67E5\u95EE\u9898\u3002"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var c=r(67294);let i={},d=c.createContext(i);function l(e){let n=c.useContext(d);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);