"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["15522"],{13976:function(n,e,c){c.r(e),c.d(e,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>t,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"Backend/Go/\u63A5\u53E3/\u9E2D\u5B50\u7C7B\u578B","title":"Go \u9E2D\u5B50\u7C7B\u578B\u548C\u7C7B\u578B\u7EA6\u675F","description":"\u9E2D\u5B50\u7C7B\u578B","source":"@site/docs/Backend/Go/\u63A5\u53E3/2.\u9E2D\u5B50\u7C7B\u578B.md","sourceDirName":"Backend/Go/\u63A5\u53E3","slug":"/Backend/Go/\u63A5\u53E3/\u9E2D\u5B50\u7C7B\u578B","permalink":"/docs-hub/Backend/Go/\u63A5\u53E3/\u9E2D\u5B50\u7C7B\u578B","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u63A5\u53E3/2.\u9E2D\u5B50\u7C7B\u578B.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":2,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u8BED\u8A00\u4E2D\u7684\u63A5\u53E3\u4E0E\u7C7B\u578B\u65AD\u8A00","permalink":"/docs-hub/Backend/Go/\u63A5\u53E3/\u7C7B\u578B\u65AD\u8A00"},"next":{"title":"gRPC \u5728 Node.js \u5BA2\u6237\u7AEF\u548C Go \u670D\u52A1\u7AEF\u901A\u4FE1","permalink":"/docs-hub/Backend/Go/\u63A5\u53E3/Node-gRPC\u901A\u4FE1"}}'),d=c("85893"),r=c("50065");let s={},l="Go \u9E2D\u5B50\u7C7B\u578B\u548C\u7C7B\u578B\u7EA6\u675F",t={},a=[{value:"\u9E2D\u5B50\u7C7B\u578B",id:"\u9E2D\u5B50\u7C7B\u578B",level:2},{value:"JavaScript \u793A\u4F8B",id:"javascript-\u793A\u4F8B",level:3},{value:"Go \u8BED\u8A00\u793A\u4F8B",id:"go-\u8BED\u8A00\u793A\u4F8B",level:3},{value:"<code>any</code> \u7C7B\u578B",id:"any-\u7C7B\u578B",level:2},{value:"\u7C7B\u578B\u53C2\u6570\u7684\u7EA6\u675F",id:"\u7C7B\u578B\u53C2\u6570\u7684\u7EA6\u675F",level:2},{value:"\u81EA\u5B9A\u4E49\u7C7B\u578B",id:"\u81EA\u5B9A\u4E49\u7C7B\u578B",level:2},{value:"\u7C7B\u578B\u96C6",id:"\u7C7B\u578B\u96C6",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function o(n){let e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.header,{children:(0,d.jsx)(e.h1,{id:"go-\u9E2D\u5B50\u7C7B\u578B\u548C\u7C7B\u578B\u7EA6\u675F",children:"Go \u9E2D\u5B50\u7C7B\u578B\u548C\u7C7B\u578B\u7EA6\u675F"})}),"\n",(0,d.jsx)(e.h2,{id:"\u9E2D\u5B50\u7C7B\u578B",children:"\u9E2D\u5B50\u7C7B\u578B"}),"\n",(0,d.jsx)(e.p,{children:"\u9E2D\u5B50\u7C7B\u578B\u662F\u4E00\u79CD\u7F16\u7A0B\u6982\u5FF5\uFF0C\u4E3B\u8981\u7528\u4E8E\u50CF Python \u8FD9\u6837\u7684\u52A8\u6001\u8BED\u8A00\u3002\u5B83\u57FA\u4E8E\u8FD9\u6837\u7684\u7406\u5FF5\uFF1A\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u62E5\u6709\u67D0\u79CD\u884C\u4E3A\u548C\u5C5E\u6027\uFF0C\u4E0D\u7BA1\u5B83\u5C5E\u4E8E\u4EC0\u4E48\u7C7B\uFF0C\u90FD\u53EF\u4EE5\u5F53\u4F5C\u662F\u90A3\u79CD\u7C7B\u578B\u3002\u5728\u8FD9\u79CD\u7C7B\u578B\u7CFB\u7EDF\u4E2D\uFF0C\u5BF9\u8C61\u7684\u5B9E\u9645\u7C7B\u578B\u5E76\u4E0D\u91CD\u8981\uFF0C\u91CD\u8981\u7684\u662F\u5B83\u662F\u5426\u5B9E\u73B0\u4E86\u7279\u5B9A\u7684\u65B9\u6CD5\u6216\u5C5E\u6027\u3002\u56E0\u6B64\uFF0C\u6211\u53EF\u4EE5\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EA\u8981\u5BF9\u8C61\u5177\u6709\u9700\u8981\u7684\u65B9\u6CD5\uFF0C\u4E0D\u7BA1\u5B83\u7684\u5177\u4F53\u7C7B\u578B\uFF0C\u8FD9\u4E2A\u51FD\u6570\u90FD\u53EF\u4EE5\u4F7F\u7528\u5B83\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"javascript-\u793A\u4F8B",children:"JavaScript \u793A\u4F8B"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-javascript",children:'interface Quackable {\n  quack(): void;\n}\n\nclass Duck implements Quackable {\n  quack() {\n    console.log("Quack, quack!");\n  }\n}\n\nclass Person {\n  quack() {\n    console.log("\u6211\u5728\u6A21\u4EFF\u9E2D\u5B50\u53EB\uFF01");\n  }\n}\n\nfunction makeItQuack(ducky: Quackable) {\n  ducky.quack();\n}\n\nconst duck = new Duck();\nconst person = new Person();\n\nmakeItQuack(duck); // \u8F93\u51FA\uFF1AQuack, quack!\nmakeItQuack(person); // \u8F93\u51FA\uFF1A\u6211\u5728\u6A21\u4EFF\u9E2D\u5B50\u53EB\uFF01\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C",(0,d.jsx)(e.code,{children:"makeItQuack"})," \u51FD\u6570\u63A5\u53D7\u4EFB\u4F55\u5B9E\u73B0\u4E86 ",(0,d.jsx)(e.code,{children:"Quackable"})," \u63A5\u53E3\u7684\u5BF9\u8C61\u3002\u4E0D\u8BBA\u5BF9\u8C61\u7684\u5B9E\u9645\u7C7B\u578B\uFF0C\u53EA\u8981\u5177\u6709 ",(0,d.jsx)(e.code,{children:"quack"})," \u65B9\u6CD5\uFF0C\u90FD\u53EF\u4EE5\u4F20\u5165\u8BE5\u51FD\u6570\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"go-\u8BED\u8A00\u793A\u4F8B",children:"Go \u8BED\u8A00\u793A\u4F8B"}),"\n",(0,d.jsxs)(e.p,{children:["Go \u8BED\u8A00\u7684\u201C\u89E3\u8026\u201D\u4E3B\u8981\u4F53\u73B0\u5728\u63A5\u53E3 ",(0,d.jsx)(e.code,{children:"Duck"})," \u548C\u5176\u5B9E\u73B0\u8005 ",(0,d.jsx)(e.code,{children:"Bird"})," \u4E4B\u95F4\u7684\u5173\u7CFB\u3002",(0,d.jsx)(e.code,{children:"Bird"})," \u7ED3\u6784\u4F53\u4E0D\u9700\u8981\u663E\u5F0F\u58F0\u660E\u5B9E\u73B0\u4E86 ",(0,d.jsx)(e.code,{children:"Duck"})," \u63A5\u53E3\u3002\u53EA\u8981 ",(0,d.jsx)(e.code,{children:"Bird"})," \u63D0\u4F9B\u4E86 ",(0,d.jsx)(e.code,{children:"Duck"})," \u63A5\u53E3\u8981\u6C42\u7684\u6240\u6709\u65B9\u6CD5\uFF0C\u5B83\u5C31\u88AB\u89C6\u4E3A\u5B9E\u73B0\u4E86\u8BE5\u63A5\u53E3\u3002\u8FD9\u4F53\u73B0\u4E86\u9E2D\u5B50\u7C7B\u578B\u7684\u601D\u60F3\uFF0C\u56E0\u4E3A\u5B9E\u73B0\u8005\uFF08",(0,d.jsx)(e.code,{children:"Bird"}),"\uFF09\u548C\u63A5\u53E3\uFF08",(0,d.jsx)(e.code,{children:"Duck"}),"\uFF09\u4E4B\u95F4\u6CA1\u6709\u76F4\u63A5\u7684\u3001\u663E\u5F0F\u7684\u5173\u8054\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:'package main\n\nfunc main() {\n    bird := &Bird{\n        legs: 2,\n    }\n    makeItWalkAndShout(bird)\n}\n\ntype Duck interface {\n    walk()\n    shout()\n}\n\ntype Bird struct {\n    legs int\n}\n\nfunc (b *Bird) walk() {\n    println("walk")\n}\n\nfunc (b *Bird) shout() {\n    println("shout")\n}\n\nfunc makeItWalkAndShout(animal Duck) {\n    animal.walk()\n    animal.shout()\n}\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A Go \u793A\u4F8B\u4E2D\uFF0C",(0,d.jsx)(e.code,{children:"makeItWalkAndShout"})," \u51FD\u6570\u63A5\u53D7\u4EFB\u4F55\u5B9E\u73B0\u4E86 ",(0,d.jsx)(e.code,{children:"Duck"})," \u63A5\u53E3\u7684\u7C7B\u578B\u3002",(0,d.jsx)(e.code,{children:"Bird"})," \u7ED3\u6784\u4F53\u867D\u7136\u6CA1\u6709\u663E\u5F0F\u58F0\u660E\u5B9E\u73B0 ",(0,d.jsx)(e.code,{children:"Duck"})," \u63A5\u53E3\uFF0C\u4F46\u7531\u4E8E\u5305\u542B\u4E86 ",(0,d.jsx)(e.code,{children:"walk"})," \u548C ",(0,d.jsx)(e.code,{children:"shout"})," \u65B9\u6CD5\uFF0C\u6240\u4EE5\u6EE1\u8DB3\u4E86\u63A5\u53E3\u8981\u6C42\uFF0C\u53EF\u4EE5\u4F20\u5165 ",(0,d.jsx)(e.code,{children:"makeItWalkAndShout"})," \u51FD\u6570\u3002"]}),"\n",(0,d.jsxs)(e.h2,{id:"any-\u7C7B\u578B",children:[(0,d.jsx)(e.code,{children:"any"})," \u7C7B\u578B"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5728 Go \u8BED\u8A00\u4E2D\uFF0C",(0,d.jsx)(e.code,{children:"any"})," \u662F ",(0,d.jsx)(e.code,{children:"interface{}"})," \u7684\u522B\u540D\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    student := map[string]any{\n        "name": "\u5F20\u4E09",\n        "age":  18,\n    }\n\n    fmt.Println(student)\n}\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4F7F\u7528\u4E86 ",(0,d.jsx)(e.code,{children:"any"})," \u7C7B\u578B\u6765\u8868\u793A\u53EF\u4EE5\u5B58\u50A8\u4EFB\u610F\u7C7B\u578B\u7684\u503C\uFF0C\u65B9\u4FBF\u5728\u96C6\u5408\u4E2D\u6DF7\u5408\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u7C7B\u578B\u53C2\u6570\u7684\u7EA6\u675F",children:"\u7C7B\u578B\u53C2\u6570\u7684\u7EA6\u675F"}),"\n",(0,d.jsx)(e.p,{children:"\u5728 Go \u7684\u6CDB\u578B\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u63A5\u53E3\u6765\u7EA6\u675F\u7C7B\u578B\u53C2\u6570\uFF0C\u6307\u5B9A\u5141\u8BB8\u7684\u7C7B\u578B\u8303\u56F4\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:"type Numeric interface {\n    int | int8 | int16 | int32 | int64 | uint | uint8 | uint16 | uint32\n}\n\nfunc add[T Numeric](a, b T) T {\n    return a + b\n}\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u8FD9\u91CC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u63A5\u53E3 ",(0,d.jsx)(e.code,{children:"Numeric"}),"\uFF0C\u5305\u542B\u4E86\u591A\u79CD\u6574\u6570\u7C7B\u578B\u3002\u6CDB\u578B\u51FD\u6570 ",(0,d.jsx)(e.code,{children:"add"})," \u901A\u8FC7\u7C7B\u578B\u53C2\u6570 ",(0,d.jsx)(e.code,{children:"[T Numeric]"})," \u9650\u5236\u4E86\u53C2\u6570 ",(0,d.jsx)(e.code,{children:"a"})," \u548C ",(0,d.jsx)(e.code,{children:"b"})," \u5FC5\u987B\u662F ",(0,d.jsx)(e.code,{children:"Numeric"})," \u7C7B\u578B\uFF0C\u5B9E\u73B0\u4E86\u5BF9\u4E0D\u540C\u6574\u6570\u7C7B\u578B\u7684\u52A0\u6CD5\u8FD0\u7B97\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u81EA\u5B9A\u4E49\u7C7B\u578B",children:"\u81EA\u5B9A\u4E49\u7C7B\u578B"}),"\n",(0,d.jsx)(e.p,{children:"\u53EF\u4EE5\u57FA\u4E8E\u5DF2\u6709\u7684\u7C7B\u578B\u5B9A\u4E49\u65B0\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:"type MyInt int\n"})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.code,{children:"MyInt"})," \u662F\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\uFF0C\u5E95\u5C42\u7C7B\u578B\u4E3A ",(0,d.jsx)(e.code,{children:"int"}),"\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u7C7B\u578B\u96C6",children:"\u7C7B\u578B\u96C6"}),"\n",(0,d.jsx)(e.p,{children:"\u4F7F\u7528\u7C7B\u578B\u96C6\u53EF\u4EE5\u521B\u5EFA\u6CDB\u578B\u51FD\u6570\uFF0C\u63A5\u53D7\u4EFB\u4F55\u5E95\u5C42\u7C7B\u578B\u4E3A\u6307\u5B9A\u7C7B\u578B\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\ntype MyInt int\n\n// \u63A5\u53D7\u4EFB\u4F55\u5E95\u5C42\u7C7B\u578B\u4E3A int \u7684\u7C7B\u578B\nfunc increment[T ~int](value T) T {\n    return value + 1\n}\n\nfunc main() {\n    var num int = 5\n    var myNum MyInt = 6\n\n    fmt.Println(increment(num))   // \u8F93\u51FA\uFF1A6\n    fmt.Println(increment(myNum)) // \u8F93\u51FA\uFF1A7\n}\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u7C7B\u578B\u53C2\u6570 ",(0,d.jsx)(e.code,{children:"[T ~int]"})," \u8868\u793A ",(0,d.jsx)(e.code,{children:"T"})," \u53EF\u4EE5\u662F ",(0,d.jsx)(e.code,{children:"int"})," \u6216\u8005\u4EFB\u4F55\u5E95\u5C42\u7C7B\u578B\u4E3A ",(0,d.jsx)(e.code,{children:"int"})," \u7684\u7C7B\u578B\uFF0C\u4F8B\u5982\u81EA\u5B9A\u4E49\u7C7B\u578B ",(0,d.jsx)(e.code,{children:"MyInt"}),"\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u7C7B\u578B\u65AD\u8A00\u7684\u4F7F\u7528"}),"\uFF1A\u5728\u5904\u7406\u63A5\u53E3\u7C7B\u578B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u5C06\u5176\u8F6C\u6362\u4E3A\u5177\u4F53\u7C7B\u578B\uFF0C\u4F46\u9700\u8981\u6CE8\u610F\u65AD\u8A00\u5931\u8D25\u7684\u60C5\u51B5\uFF0C\u907F\u514D\u5F15\u53D1\u8FD0\u884C\u65F6\u9519\u8BEF\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CDB\u578B\u7684\u7248\u672C\u8981\u6C42"}),"\uFF1A\u6CDB\u578B\u529F\u80FD\u5728 Go 1.18 \u53CA\u4EE5\u4E0A\u7248\u672C\u5F15\u5165\uFF0C\u4F7F\u7528\u524D\u9700\u786E\u4FDD Go \u7248\u672C\u7B26\u5408\u8981\u6C42\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u53D8\u91CF\u547D\u540D"}),"\uFF1A\u5E94\u4F7F\u7528\u6613\u8BFB\u7684\u53D8\u91CF\u540D\uFF0C\u63D0\u5347\u4EE3\u7801\u53EF\u8BFB\u6027\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u63A5\u53E3\u7684\u7528\u9014"}),"\uFF1A\u63A5\u53E3\u7528\u4E8E\u5B9A\u4E49\u4E00\u7EC4\u65B9\u6CD5\uFF0C\u89C4\u5B9A\u7C7B\u578B\u9700\u8981\u5B9E\u73B0\u54EA\u4E9B\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u4E86\u63A5\u53E3\u7684\u7C7B\u578B\u53EF\u4EE5\u88AB\u5F53\u4F5C\u63A5\u53E3\u7C7B\u578B\u4F7F\u7528\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u63A5\u53E3\u7684\u5D4C\u5957"}),"\uFF1A\u53EF\u4EE5\u901A\u8FC7\u63A5\u53E3\u5D4C\u5957\u6765\u7EC4\u5408\u591A\u4E2A\u63A5\u53E3\uFF0C\u4F7F\u5F97\u65B0\u63A5\u53E3\u5305\u542B\u6240\u6709\u5D4C\u5957\u63A5\u53E3\u7684\u65B9\u6CD5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.hr,{})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},50065:function(n,e,c){c.d(e,{Z:function(){return l},a:function(){return s}});var i=c(67294);let d={},r=i.createContext(d);function s(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);