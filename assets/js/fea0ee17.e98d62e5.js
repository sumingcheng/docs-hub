"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["30142"],{73075:function(n,e,i){i.r(e),i.d(e,{default:()=>x,frontMatter:()=>r,metadata:()=>l,assets:()=>t,toc:()=>o,contentTitle:()=>s});var l=JSON.parse('{"id":"Backend/Go/\u6307\u9488/\u6307\u9488","title":"C \u8BED\u8A00\u4E0E Go \u8BED\u8A00\u4E2D\u7684\u6307\u9488\u6BD4\u8F83","description":"C \u8BED\u8A00\u6307\u9488","source":"@site/docs/Backend/Go/\u6307\u9488/1.\u6307\u9488.md","sourceDirName":"Backend/Go/\u6307\u9488","slug":"/Backend/Go/\u6307\u9488/\u6307\u9488","permalink":"/docs-hub/Backend/Go/\u6307\u9488/\u6307\u9488","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u6307\u9488/1.\u6307\u9488.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734402243000,"sidebarPosition":1,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"\u6307\u9488","permalink":"/docs-hub/category/\u6307\u9488"},"next":{"title":"Go \u8BED\u8A00\u4E2D\u7684 nil \u548C\u7ED3\u6784\u4F53\u6BD4\u8F83","permalink":"/docs-hub/Backend/Go/\u6307\u9488/nil\u548C\u7ED3\u6784\u4F53"}}'),c=i("85893"),d=i("50065");let r={},s="C \u8BED\u8A00\u4E0E Go \u8BED\u8A00\u4E2D\u7684\u6307\u9488\u6BD4\u8F83",t={},o=[{value:"C \u8BED\u8A00\u6307\u9488",id:"c-\u8BED\u8A00\u6307\u9488",level:2},{value:"Go \u8BED\u8A00\u6307\u9488",id:"go-\u8BED\u8A00\u6307\u9488",level:2},{value:"\u4E3B\u8981\u533A\u522B",id:"\u4E3B\u8981\u533A\u522B",level:2},{value:"\u6307\u9488\u7B97\u672F",id:"\u6307\u9488\u7B97\u672F",level:3},{value:"\u7C7B\u578B\u8F6C\u6362",id:"\u7C7B\u578B\u8F6C\u6362",level:3},{value:"\u6307\u9488\u7684\u4F7F\u7528",id:"\u6307\u9488\u7684\u4F7F\u7528",level:2},{value:"\u6307\u9488\u7684\u4F5C\u7528",id:"\u6307\u9488\u7684\u4F5C\u7528",level:2},{value:"\u52A8\u6001\u5206\u914D\u5185\u5B58\u7A7A\u95F4",id:"\u52A8\u6001\u5206\u914D\u5185\u5B58\u7A7A\u95F4",level:2},{value:"<code>new</code> \u51FD\u6570",id:"new-\u51FD\u6570",level:3},{value:"<code>make</code> \u51FD\u6570",id:"make-\u51FD\u6570",level:3},{value:"\u4EA4\u6362\u4E24\u4E2A\u503C",id:"\u4EA4\u6362\u4E24\u4E2A\u503C",level:2},{value:"\u91CE\u6307\u9488",id:"\u91CE\u6307\u9488",level:2},{value:"\u6253\u5370\u7ED3\u679C\u7684\u5DEE\u5F02",id:"\u6253\u5370\u7ED3\u679C\u7684\u5DEE\u5F02",level:2},{value:"<code>fmt.Println(intPtr)</code>",id:"fmtprintlnintptr",level:3},{value:"<code>fmt.Printf(&quot;%p\\n&quot;, intPtr)</code>",id:"fmtprintfpn-intptr",level:3},{value:"<code>fmt.Println(&amp;intPtr)</code>",id:"fmtprintlnintptr-1",level:3},{value:"\u5173\u4E8E\u91CE\u6307\u9488",id:"\u5173\u4E8E\u91CE\u6307\u9488",level:2},{value:"Go \u8BED\u8A00\u7684\u5207\u7247\u548C\u6620\u5C04",id:"go-\u8BED\u8A00\u7684\u5207\u7247\u548C\u6620\u5C04",level:2},{value:"\u5207\u7247\uFF08Slices\uFF09",id:"\u5207\u7247slices",level:3},{value:"\u6620\u5C04\uFF08Maps\uFF09",id:"\u6620\u5C04maps",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function h(n){let e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"c-\u8BED\u8A00\u4E0E-go-\u8BED\u8A00\u4E2D\u7684\u6307\u9488\u6BD4\u8F83",children:"C \u8BED\u8A00\u4E0E Go \u8BED\u8A00\u4E2D\u7684\u6307\u9488\u6BD4\u8F83"})}),"\n",(0,c.jsx)(e.h2,{id:"c-\u8BED\u8A00\u6307\u9488",children:"C \u8BED\u8A00\u6307\u9488"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\nint main() {\n    int number = 10;\n    int *intPtr = &number; // \u6307\u5411\u6574\u6570\u7684\u6307\u9488\n    printf("\u6307\u9488\u6307\u5411\u7684\u503C: %d\\n", *intPtr);\n\n    // \u6307\u9488\u8FD0\u7B97\n    intPtr++;\n    printf("\u9012\u589E\u540E\u7684\u6307\u9488\u5730\u5740: %p\\n", intPtr);\n\n    // \u7C7B\u578B\u8F6C\u6362\n    char *charPtr = (char *)intPtr;\n    printf("\u8F6C\u6362\u4E3A char \u7C7B\u578B\u6307\u9488\u540E\u7684\u5730\u5740: %p\\n", charPtr);\n\n    return 0;\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u9996\u5148\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6574\u6570\u53D8\u91CF ",(0,c.jsx)(e.code,{children:"number"}),"\uFF0C\u7136\u540E\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"&"})," \u83B7\u53D6\u5176\u5730\u5740\u5E76\u8D4B\u7ED9\u6307\u9488 ",(0,c.jsx)(e.code,{children:"intPtr"}),"\u3002\u901A\u8FC7 ",(0,c.jsx)(e.code,{children:"*intPtr"}),"\uFF0C\u53EF\u4EE5\u83B7\u53D6\u6307\u9488\u6307\u5411\u7684\u503C\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u5BF9\u6307\u9488\u8FDB\u884C\u81EA\u589E\u64CD\u4F5C ",(0,c.jsx)(e.code,{children:"intPtr++"}),"\uFF0C\u8FD9\u4F1A\u4F7F\u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2A\u6574\u6570\u5730\u5740\u3002\u7136\u540E\uFF0C\u5C06 ",(0,c.jsx)(e.code,{children:"intPtr"})," \u8F6C\u6362\u4E3A ",(0,c.jsx)(e.code,{children:"char"})," \u7C7B\u578B\u7684\u6307\u9488 ",(0,c.jsx)(e.code,{children:"charPtr"}),"\uFF0C\u4EE5\u5C55\u793A\u6307\u9488\u7C7B\u578B\u8F6C\u6362\u7684\u7528\u6CD5\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"go-\u8BED\u8A00\u6307\u9488",children:"Go \u8BED\u8A00\u6307\u9488"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    number := 10\n    intPtr := &number // \u6307\u5411\u6574\u6570\u7684\u6307\u9488\n    fmt.Println("\u6307\u9488\u6307\u5411\u7684\u503C:", *intPtr)\n\n    // Go \u4E0D\u652F\u6301\u6307\u9488\u7B97\u672F\n    // intPtr++ // \u8FD9\u4F1A\u62A5\u9519\n\n    // Go \u4E0D\u5141\u8BB8\u968F\u610F\u7684\u6307\u9488\u7C7B\u578B\u8F6C\u6362\n    // var charPtr *byte = (*byte)(intPtr) // \u8FD9\u4E5F\u4F1A\u62A5\u9519\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u6211\u540C\u6837\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6574\u6570\u53D8\u91CF ",(0,c.jsx)(e.code,{children:"number"}),"\uFF0C\u5E76\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"&"})," \u83B7\u53D6\u5176\u5730\u5740\u8D4B\u7ED9\u6307\u9488 ",(0,c.jsx)(e.code,{children:"intPtr"}),"\u3002\u901A\u8FC7 ",(0,c.jsx)(e.code,{children:"*intPtr"}),"\uFF0C\u53EF\u4EE5\u83B7\u53D6\u6307\u9488\u6307\u5411\u7684\u503C\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CGo \u4E0D\u652F\u6301\u6307\u9488\u8FD0\u7B97\uFF0C\u4E5F\u4E0D\u5141\u8BB8\u5C06\u4E00\u79CD\u7C7B\u578B\u7684\u6307\u9488\u5F3A\u5236\u8F6C\u6362\u4E3A\u53E6\u4E00\u79CD\u7C7B\u578B\u7684\u6307\u9488\uFF0C\u8FD9\u4E0E C \u8BED\u8A00\u6709\u663E\u8457\u533A\u522B\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u4E3B\u8981\u533A\u522B",children:"\u4E3B\u8981\u533A\u522B"}),"\n",(0,c.jsx)(e.h3,{id:"\u6307\u9488\u7B97\u672F",children:"\u6307\u9488\u7B97\u672F"}),"\n",(0,c.jsxs)(e.p,{children:["\u5728 C \u8BED\u8A00\u4E2D\uFF0C\u6211\u53EF\u4EE5\u5BF9\u6307\u9488\u8FDB\u884C\u7B97\u672F\u8FD0\u7B97\uFF0C\u4F8B\u5982\u81EA\u589E ",(0,c.jsx)(e.code,{children:"ptr++"}),"\uFF0C\u8FD9\u4F1A\u4F7F\u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2A\u5185\u5B58\u5730\u5740\u3002\u7136\u800C\uFF0CGo \u8BED\u8A00\u4E0D\u652F\u6301\u8FD9\u79CD\u64CD\u4F5C\uFF0C\u4EE5\u9632\u6B62\u610F\u5916\u4FEE\u6539\u9519\u8BEF\u7684\u5185\u5B58\u4F4D\u7F6E\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u7C7B\u578B\u8F6C\u6362",children:"\u7C7B\u578B\u8F6C\u6362"}),"\n",(0,c.jsxs)(e.p,{children:["C \u8BED\u8A00\u5141\u8BB8\u5C06\u6307\u9488\u4ECE\u4E00\u79CD\u7C7B\u578B\u8F6C\u6362\u4E3A\u53E6\u4E00\u79CD\u7C7B\u578B\uFF0C\u4F8B\u5982\u5C06 ",(0,c.jsx)(e.code,{children:"int*"})," \u8F6C\u6362\u4E3A ",(0,c.jsx)(e.code,{children:"char*"}),"\u3002\u4F46\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u6307\u9488\u7C7B\u578B\u8F6C\u6362\u975E\u5E38\u53D7\u9650\uFF0C\u4E0D\u5141\u8BB8\u968F\u610F\u8F6C\u6362\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6307\u9488\u7684\u4F7F\u7528",children:"\u6307\u9488\u7684\u4F7F\u7528"}),"\n",(0,c.jsx)(e.p,{children:"\u6307\u9488\u7684\u57FA\u672C\u7528\u6CD5\u5305\u62EC\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u6307\u9488\u7C7B\u578B"}),"\uFF1A\u4F8B\u5982 ",(0,c.jsx)(e.code,{children:"*int"}),"\u3001",(0,c.jsx)(e.code,{children:"*bool"})," \u7B49\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u6307\u9488\u503C"}),"\uFF1A\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"&"})," \u7B26\u53F7\u83B7\u53D6\u53D8\u91CF\u7684\u5730\u5740\uFF0C\u4F8B\u5982 ",(0,c.jsx)(e.code,{children:"&number"}),"\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u6307\u9488\u53D6\u503C"}),"\uFF1A\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"*"})," \u7B26\u53F7\u83B7\u53D6\u6307\u9488\u6307\u5411\u7684\u503C\uFF0C\u4F8B\u5982 ",(0,c.jsx)(e.code,{children:"*intPtr"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6307\u9488\u7684\u4F5C\u7528",children:"\u6307\u9488\u7684\u4F5C\u7528"}),"\n",(0,c.jsx)(e.p,{children:"\u6307\u9488\u5728\u7F16\u7A0B\u4E2D\u6709\u4EE5\u4E0B\u4F5C\u7528\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u52A8\u6001\u5206\u914D\u5185\u5B58\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u4F7F\u7528\u6307\u9488\u8FDB\u884C\u53C2\u6570\u4F20\u9012\uFF0C\u5373\u4F20\u9012\u6307\u9488\u7684\u503C\uFF0C\u8FD9\u4E00\u70B9\u975E\u5E38\u91CD\u8981\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u4FEE\u6539\u51FD\u6570\u5916\u90E8\u7684\u53D8\u91CF\u503C\uFF0C\u6216\u5728\u51FD\u6570\u5185\u90E8\u4FEE\u6539\u5916\u90E8\u53D8\u91CF\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u52A8\u6001\u5206\u914D\u5185\u5B58\u7A7A\u95F4",children:"\u52A8\u6001\u5206\u914D\u5185\u5B58\u7A7A\u95F4"}),"\n",(0,c.jsxs)(e.h3,{id:"new-\u51FD\u6570",children:[(0,c.jsx)(e.code,{children:"new"})," \u51FD\u6570"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"new"})," \u51FD\u6570\u7528\u4E8E\u5206\u914D\u4E00\u4E2A\u7C7B\u578B\u7684\u5185\u5B58\uFF0C\u5E76\u8FD4\u56DE\u6307\u5411\u8BE5\u7C7B\u578B\u96F6\u503C\u7684\u6307\u9488\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:"ptr := new(T)\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5176\u4E2D\uFF0C",(0,c.jsx)(e.code,{children:"T"})," \u662F\u4EFB\u610F\u7C7B\u578B\uFF0C",(0,c.jsx)(e.code,{children:"ptr"})," \u662F\u6307\u5411\u65B0\u5206\u914D\u7684 ",(0,c.jsx)(e.code,{children:"T"})," \u7C7B\u578B\u96F6\u503C\u7684\u6307\u9488\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:"numPtr := new(int) // \u5206\u914D\u4E00\u4E2A int \u7C7B\u578B\u7684\u5185\u5B58\uFF0CnumPtr \u662F\u6307\u5411\u8BE5\u5185\u5B58\u7684\u6307\u9488\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"new"})," \u5206\u914D\u7684\u5185\u5B58\u88AB\u521D\u59CB\u5316\u4E3A\u96F6\u503C\uFF0C\u4F8B\u5982\uFF0C\u6570\u503C\u7C7B\u578B\u7684\u96F6\u503C\u662F ",(0,c.jsx)(e.code,{children:"0"}),"\uFF0C\u5E03\u5C14\u7C7B\u578B\u7684\u96F6\u503C\u662F ",(0,c.jsx)(e.code,{children:"false"}),"\u3002"]}),"\n",(0,c.jsxs)(e.h3,{id:"make-\u51FD\u6570",children:[(0,c.jsx)(e.code,{children:"make"})," \u51FD\u6570"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"make"})," \u51FD\u6570\u7528\u4E8E\u4E3A\u5207\u7247\uFF08slice\uFF09\u3001\u6620\u5C04\uFF08map\uFF09\u548C\u901A\u9053\uFF08channel\uFF09\u5206\u914D\u5E76\u521D\u59CB\u5316\u5185\u5B58\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:"slice := make([]T, length, capacity)\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5176\u4E2D\uFF0C",(0,c.jsx)(e.code,{children:"T"})," \u662F\u5143\u7D20\u7C7B\u578B\uFF0C",(0,c.jsx)(e.code,{children:"length"})," \u662F\u957F\u5EA6\uFF0C",(0,c.jsx)(e.code,{children:"capacity"})," \u662F\u5BB9\u91CF\uFF08\u53EF\u9009\uFF09\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:"numSlice := make([]int, 10, 100) // \u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A 10\uFF0C\u5BB9\u91CF\u4E3A 100 \u7684\u5207\u7247\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"make"})," \u5206\u914D\u7684\u5185\u5B58\u5DF2\u7ECF\u521D\u59CB\u5316\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4EA4\u6362\u4E24\u4E2A\u503C",children:"\u4EA4\u6362\u4E24\u4E2A\u503C"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    num1 := 1\n    num2 := 2\n\n    swapValues(&num1, &num2)\n    fmt.Println(num1, num2)\n    fmt.Println(&num1, &num2)\n}\n\nfunc swapValues(a, b *int) {\n    *a, *b = *b, *a\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u5B9A\u4E49\u4E86\u4E24\u4E2A\u6574\u6570\u53D8\u91CF ",(0,c.jsx)(e.code,{children:"num1"})," \u548C ",(0,c.jsx)(e.code,{children:"num2"}),"\uFF0C\u5E76\u901A\u8FC7\u6307\u9488\u4F20\u9012\u7ED9\u51FD\u6570 ",(0,c.jsx)(e.code,{children:"swapValues"}),"\u3002\u5728\u51FD\u6570\u5185\u90E8\uFF0C\u4F7F\u7528\u6307\u9488\u89E3\u5F15\u7528\u4EA4\u6362\u4E86\u4E24\u4E2A\u53D8\u91CF\u7684\u503C\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u91CE\u6307\u9488",children:"\u91CE\u6307\u9488"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    var intPtr *int\n    fmt.Println(intPtr)\n    fmt.Printf("%p\\n", intPtr)\n    fmt.Println(&intPtr)\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"\u91CE\u6307\u9488\u793A\u610F\u56FE",src:i(14523).Z+"",width:"431",height:"190"})}),"\n",(0,c.jsx)(e.h2,{id:"\u6253\u5370\u7ED3\u679C\u7684\u5DEE\u5F02",children:"\u6253\u5370\u7ED3\u679C\u7684\u5DEE\u5F02"}),"\n",(0,c.jsx)(e.h3,{id:"fmtprintlnintptr",children:(0,c.jsx)(e.code,{children:"fmt.Println(intPtr)"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u53D8\u91CF ",(0,c.jsx)(e.code,{children:"intPtr"})," \u662F\u4E00\u4E2A ",(0,c.jsx)(e.code,{children:"*int"})," \u7C7B\u578B\u7684\u6307\u9488\uFF0C\u672A\u521D\u59CB\u5316\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u5728 Go \u4E2D\uFF0C\u672A\u521D\u59CB\u5316\u7684\u6307\u9488\u9ED8\u8BA4\u503C\u662F ",(0,c.jsx)(e.code,{children:"nil"}),"\uFF0C\u8868\u793A\u5B83\u4E0D\u6307\u5411\u4EFB\u4F55\u5185\u5B58\u5730\u5740\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u56E0\u6B64\uFF0C\u8FD9\u884C\u4EE3\u7801\u4F1A\u6253\u5370\u51FA ",(0,c.jsx)(e.code,{children:"nil"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"fmtprintfpn-intptr",children:(0,c.jsx)(e.code,{children:'fmt.Printf("%p\\n", intPtr)'})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"%p"})," \u683C\u5F0F\u5316\u6307\u9488 ",(0,c.jsx)(e.code,{children:"intPtr"})," \u7684\u503C\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u7531\u4E8E ",(0,c.jsx)(e.code,{children:"intPtr"})," \u662F ",(0,c.jsx)(e.code,{children:"nil"}),"\uFF0C\u5728\u5185\u5B58\u4E2D\u8868\u793A\u4E3A ",(0,c.jsx)(e.code,{children:"0x0"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"fmtprintlnintptr-1",children:(0,c.jsx)(e.code,{children:"fmt.Println(&intPtr)"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u8FD9\u91CC\u7684 ",(0,c.jsx)(e.code,{children:"&intPtr"})," \u83B7\u53D6\u53D8\u91CF ",(0,c.jsx)(e.code,{children:"intPtr"})," \u672C\u8EAB\u7684\u5185\u5B58\u5730\u5740\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u5373\u4F7F ",(0,c.jsx)(e.code,{children:"intPtr"})," \u4E3A ",(0,c.jsx)(e.code,{children:"nil"}),"\uFF0C\u5B83\u81EA\u8EAB\u4ECD\u7136\u6709\u4E00\u4E2A\u6709\u6548\u7684\u5185\u5B58\u5730\u5740\uFF0C\u4F8B\u5982 ",(0,c.jsx)(e.code,{children:"0xc000006028"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u5173\u4E8E\u91CE\u6307\u9488",children:"\u5173\u4E8E\u91CE\u6307\u9488"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u91CE\u6307\u9488"})," \u5728 C/C++ \u4E2D\u6307\u7684\u662F\u6307\u5411\u672A\u77E5\u6216\u968F\u673A\u5185\u5B58\u5730\u5740\u7684\u6307\u9488\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7A0B\u5E8F\u5D29\u6E83\u6216\u884C\u4E3A\u5F02\u5E38\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u672A\u521D\u59CB\u5316\u7684\u6307\u9488\u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(e.code,{children:"nil"}),"\uFF0C\u4E0D\u4F1A\u6307\u5411\u968F\u673A\u5185\u5B58\u5730\u5740\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u89E3\u5F15\u7528 ",(0,c.jsx)(e.code,{children:"nil"})," \u6307\u9488\u4F1A\u5F15\u53D1\u8FD0\u884C\u65F6\u9519\u8BEF\uFF0C\u907F\u514D\u4E86\u91CE\u6307\u9488\u5E26\u6765\u7684\u98CE\u9669\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"Go \u4E2D\u6307\u9488\u7684\u5B89\u5168\u6027",src:i(97300).Z+"",width:"1050",height:"356"})}),"\n",(0,c.jsx)(e.h2,{id:"go-\u8BED\u8A00\u7684\u5207\u7247\u548C\u6620\u5C04",children:"Go \u8BED\u8A00\u7684\u5207\u7247\u548C\u6620\u5C04"}),"\n",(0,c.jsx)(e.p,{children:"\u5207\u7247\u548C\u6620\u5C04\u4F5C\u4E3A\u5F15\u7528\u7C7B\u578B\uFF0C\u5F53\u4F20\u9012\u7ED9\u51FD\u6570\u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u4F20\u9012\u4E86\u5BF9\u5E95\u5C42\u6570\u636E\u7684\u5F15\u7528\u3002\u56E0\u6B64\uFF0C\u51FD\u6570\u5185\u90E8\u5BF9\u5B83\u4EEC\u7684\u4FEE\u6539\u4F1A\u76F4\u63A5\u5F71\u54CD\u5230\u539F\u59CB\u6570\u636E\uFF0C\u65E0\u9700\u4F7F\u7528\u6307\u9488\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u5207\u7247slices",children:"\u5207\u7247\uFF08Slices\uFF09"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc modifySlice(slice []int) {\n    slice[0] = 100\n}\n\nfunc main() {\n    mySlice := []int{1, 2, 3}\n    fmt.Println("\u4FEE\u6539\u524D:", mySlice)\n\n    modifySlice(mySlice)\n    fmt.Println("\u4FEE\u6539\u540E:", mySlice)\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u51FD\u6570 ",(0,c.jsx)(e.code,{children:"modifySlice"})," \u4FEE\u6539\u4E86\u5207\u7247\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002\u7531\u4E8E\u5207\u7247\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u4FEE\u6539\u4F1A\u76F4\u63A5\u53CD\u6620\u5230\u539F\u59CB\u5207\u7247 ",(0,c.jsx)(e.code,{children:"mySlice"})," \u4E0A\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u6620\u5C04maps",children:"\u6620\u5C04\uFF08Maps\uFF09"}),"\n",(0,c.jsx)(e.p,{children:"\u6620\u5C04\u4E5F\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u4F20\u9012\u7ED9\u51FD\u6570\u65F6\uFF0C\u65E0\u9700\u4F7F\u7528\u6307\u9488\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc modifyMap(m map[string]int) {\n    m["key1"] = 100\n}\n\nfunc main() {\n    myMap := map[string]int{"key1": 1, "key2": 2}\n    fmt.Println("\u4FEE\u6539\u524D:", myMap)\n\n    modifyMap(myMap)\n    fmt.Println("\u4FEE\u6539\u540E:", myMap)\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u51FD\u6570 ",(0,c.jsx)(e.code,{children:"modifyMap"})," \u4FEE\u6539\u4E86\u6620\u5C04\u7684\u503C\uFF0C\u4FEE\u6539\u540C\u6837\u4F1A\u76F4\u63A5\u53CD\u6620\u5230\u539F\u59CB\u6620\u5C04 ",(0,c.jsx)(e.code,{children:"myMap"})," \u4E0A\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u5728 Go \u4E2D\uFF0C\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u6307\u9488\u6765\u4F20\u9012\u5207\u7247\u548C\u6620\u5C04\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u672C\u8EAB\u5C31\u662F\u5F15\u7528\u7C7B\u578B\u3002"}),"\n",(0,c.jsxs)(e.li,{children:["\u4F7F\u7528\u6307\u9488\u65F6\uFF0C\u8981\u786E\u4FDD\u6307\u9488\u5DF2\u521D\u59CB\u5316\uFF0C\u907F\u514D\u51FA\u73B0 ",(0,c.jsx)(e.code,{children:"nil"})," \u6307\u9488\u89E3\u5F15\u7528\u7684\u9519\u8BEF\u3002"]}),"\n"]})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},14523:function(n,e,i){i.d(e,{Z:function(){return l}});let l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAC+CAYAAACCloCLAAAgAElEQVR4Ae2d+V8T1/rH738zBhH1q6zFFRAXRNxwqdcdhaq4L21tVaxrtdUuIlZrpVVxaWstdrW2VqzXWhVv6y2opYqIogSIoulvn+/rTJwwWSBhMgk5yeeHvCY4y5k8z/uc9zkzZ8Z/DUrPQbR8usUkgB/GgAyQATIgPwP/ihZxid9JYOUHljlkDskAGRAMUF4cjVHqZIAMkAHpGPBbXqn9s9C770B0j0tBTGwyYronhvzTPS4ZPXqmIiE5AwMGd/5yJ3ts7LGRATJABiKDAZ/yEtKKjUtGt+7h9YMtMYnoEz+oU/frCG145ZD5YD7IABkwykCH8kpIHgJLmA+nxUhwwOBsvyRmNEjcjxWMDJABMhBeDLQrr6QXMsNutNUePN17JFNeYd7JaC93/PfwahCYD+ZDFga8ykuMZMJ9xOUe4F69B/gUmPs+/JsVlQyQATIgJwNe5RXXK1W6mScCwP4DszoUGCGVE1LmjXkjA2TAnQEPeck46tJ+VK8+HY++tO24ZEUgA2SADMjNgIe8El/IkHLUJUCMiU3iyIv3vqTll42p3I0p8xfa/HnISzzLJXMSOnpjiMy/i+ce2orBeDPeZCC8GfCQV8/e/Sgvjl6kZoCNTng3OswP82MGA5QXRUVRkQEyQAakY4DyIrTSQWtGr43HYO+fDMjNAOVFeVFeZIAMkAHpGKC8CK100LLHLHePmflj/sxgIGjy6tErqUsaRc42ZMUwo2LwGOSIDIQ3A0GTV8HLk7Fp/3z8X8ILIZUY5RXewLFBYH7IABkwg4Ggyuvcg+049ecG/HveuJAJjPJixTCjYvAY5IgMhDcDQZeXEJj47DqxDCkDBwVdYpRXeAPHBoH5IQNkwAwGQiYvIbDTf2/B/NdeRExsYtAkRnmxYphRMXgMckQGwpuBkMpLG4WV/vQK0rOC8w5FWeUVO3ozztyqh/VBJcoWDQua3Fkhw7tCMj/MDxnwj4EukZeQ2E91b+Llt2bD7FmJssore9c1/PPPY/Xz7Ic1iLXEewhMWVyOVrvNuZ22vd1+FW8N9dyelcC/SsA4MU5kQD4Gukxe2ijs08vrkDM5y6OhNgqTrPKKHb8N5+40oOXRdRxf5j0eSn4pbtRUo8b5uY3GpzZQXvJVPKN8cz/mmgw4GOhyeWkSM2tavazyMgKkYinEcSvlZSR23IcSIANyMxA28hISM2NafbDlZUmZglXrF2Gwl8t6oa4MnZGX0ns2Xt30Egb15OXFUOeJ5cndSDJ/4Zm/sJLXD7e3oHDtVMT0MD4bMVjyUqX1wXeotrbAfmMfcnTyUiyz8EmdGAFVY0/uAIxbW4aKqttotDWise53nD28EeMTPaUxq6zW4/6VuI9144Opfl1G7ZS8EopQYbfh8d0LOEyJ+RVfNlrh2WgxL8yLYCBs5LW7fDlS0wJ/DsxseemlJcTS2lCJ8jfzEN+OvI7uLsd9uw2t1lrctzY75dR8bTfGuY16Ju/+TXf/qhp1z7cPirziJqOovBIPnzomfDgl1stTqmwc2DiQATIQ7gx0uby+rt6I6QtzTesJmyUvS8pUvLz3e9ywtqgCan1wGSd2LsOIBM/Gvm3kVYu7VRexf0EO4izxUGL6IXvlZ7jRKkZlVpwr6ngK/PSDf6tlBUNeGojxo5bh3S+voqG1TWJlm+dhMCVmGoNarLmkAMhA8BjoUnm9WVqIvknm/s/NgcrLQ1r1l3D8rUUY2tdTWhqYmrzEyOz393PRzWVUlor8Tx2XBx+Xr3RZp+2vLUMhL62sviOXYMfJy5QY/1cBSpsMSMlAl8jrs6vrMGbqyKAELBB5KX1W4KvnIy3b3Qs4uqUQGb3bl5YmAk1ednsdDs323D5x/c/qiMpesQkJOrFp+2vLUMpLK7NP1iK8feI33NdGYld2YGgH56jtx2XwepSMLWNLBnwzEFJ5nb23Dat35iGud0pQxCUSHpC8nk9qaL5ZjjcmZSLGz0a8TV5iwoanvGJXfeuQ1y+bw05eImaKJQmDFnyEKw2ek1FYiXxXIsaIMSIDoWcgZPL65OfVyBiVGTRpafAEJK+eBfiw6j6e2cU9qoe4dfYAXps8zOvbLrTyxFJWeSmWZPSf9gZKz1WjWf3Njbj91esY6Ke09THg99BXXsacMY9mBoIuLzOmv3cmQYHIS5SjxKRh9IoSfFdV/1xij1DzcynWTG1fYrLJS7GkYNDMzTh0/i/YNGn9chhF00f4FHVncsFt2biSATIQLAaCKi+zpr935scHKi+tLCVmsKfEKj7BumnDPRp4WeSlWFKRPmcrjlyswWMXaXn+Ji0OXLLxIQNkIBwZCJq8+iSmBv0SobeAmiUv7dhCYjnLS/CtcyTWiL9PuV5a6zp5zcGhenGJ83e8m+15r037DWKp9JyF93+7o77Y125vxN/nD2HddEpLHyN+ZyNNBuRhIGjy6ioIzJaX9jtcJNbhGzY8JRK8CRsZ2HihBXZ7E67unoreHdyrUtTJKM+l5WX0qP1OLuWpvMwVcxXNDFBenXzGQ5XYrGlI0YnCyMhL6bsSnznfDu94U7z2ho3WRzUub96o+brIpTw9sAkvHcdd9RJgM5ru33LZ78bBhc7RrxKXi2mUljMe+hjyOyVABuRjgPLqpLy8QW5IXs+n5Wv/J1dHS/tvb6G/Tpb6cxCTLzIXlOC7yircb257HZX6KquvX2ZjbUJ+9fHmd/kaOeYsMnNGebFxo+DIABkgA9IxQHkRWumgZU86MnvSzCvz2hkGPOTVu+9AqRuzYE3Y6ExQuS0rIRkgA2QguAx4yCvxhQxp5RUTmxTQ66EIW3BhY3wZXzJABsxiwENeAwZnwyLppbRefQZQXpLmziygeRw2jmQgOhjwkJe47BbXq2seMA4Uuv4DsygvykvaKweB8s/9o6PRZp4defYqLxlHX716dzzqElJm0lm5yQAZIAORwYBXeYmGPumFTHTrLseP7N4jucMRlzaJg9DKkU/miXkiA2TAFwPtyks0+AnJQ8L+/lf3uBSIkaImqI6WvoLB9awwZIAMkAE5GOhQXkIEqf2zEBuXHHajMEtMIvrED/JLWprQCKUcUDJPzBMZIAO+GPApL63hFxITz4CJkU5MbDJiuieG/NM9Lhk9eqYiITkDAwbndEpc4nf4CgbXs8KQATJABuRgwG95aRKTeUko5YCSeWKeyAAZ8MUA5cWp5RyRkgEyQAakY4DyIrTSQeurR8b17LWTgchngPKivCgvMkAGyIB0DFBehFY6aNmrjvxeNXPMHPtigPKivCgvMkAGyIB0DFBehFY6aH31yLievXYyEPkMUF6UF+VFBsgAGZCOAcqL0EoHLXvVkd+rZo6ZY18MUF6UF+VFBsgAGZCOAcqL0EoHra8eGdez104GIp8ByovyorzIABkgA9IxQHkRWumgZa868nvVzDFz7IsByovyorzIABkgA9IxQHkRWumg9dUj43r22slA5DNAeVFelBcZIANkQDoGKC9CKx207FVHfq+aOWaOfTFAeVFelBcZIANkQDoGKC9CKx20vnpkXM9eOxmIfAYoLy/yUhInYmVJOS5W3YbV1oQnTXdRU3kaH2/IQ7/YeFMb+1CWxQod+RWaOWaOo4UBystNXkrqQpRVN+Kffx7Dbm/B40e1eNDc/PzvZtSdXo+hJgkslGVFC9D8nWy8yUB0MEB56eSlWPph/olaVVRPbpzCukkZiLHEQ4nph6wlpai02mC3N+KXjSMDHn2FsixW5uiozMwz8xxNDFBeenn1XI5TzUJQVdg7IdlDUGkbK2Cz22C/vAMDLYFdPlRCWFY0Ac3fygacDEQHA5SXXl5Dd+KakNODo5jhRU5K5g7H+oZjmKlb3zevDDXPbLC3/o7i8Uke0uu/+jQaxXGt57A2wyE9xWBZrJjRUTGZZ+aZDHTMAOWll9eoYlQJydzYhxydnDSIlIQiVIj1zV+gQLdeXAKcdbgaz+w2PL76LrJ098SUpKUovy9Gcw2oWJ/tFJtisCztXLjsGGzGh/EhA5HNAOVlgrxEJVHiC3C4pgV2+yOc35ijSkpIbe7xv9R7aNbzm5GmFx7l5RQ5G5nIbmSYX+Y3GAwYlld+biEOLt2Do8v3B/Wzd+F7GDdyKgal5wT88RVA99FQ7IR38Ov9R2isKkNBUjzaG3lpx+0z+5Dj8qH1DF4ZGI+4KQdw66m4XFiBokxXgAMtSyuTS9e4Mh6MBxmIDgYMyWtw+mh8vKQkqNLSS3Fz3saAxSXk5wtqd6Gkb7/0fIp8LQ7O9C0vMdKaechx+fDep1tRXNnkuFy4wbPsQMvy9Vu4PjoqMPPMPEcrA4bklZYxOmTiEhLbUbCtS+TVLfMVHPtPJa58uw3jevmWl4BI6ZuPQ+Ly4bMW9R5Y04UtyIjxnJnoLi8jZUUrtPzdbLDJABkwVV4fLtoVlBFZl8lLdz9MFVM7Ezb0FUmxJGFKafXzEVsjzryW7nXE5yEvA2Xpy+V3VmYyQAaiiQHT5FWy4B2MHD5RvT+1f3GxqSMzmeQVO64YfzwR97nu4WGrDfa6k5iX5MfIi/LyKvloqoz8rZQPGfCfAVPkdWT5h5g0aqbz0t6o4S9iT+F7pgksZPLy99mr+2WYrps5qAGnxE1G8R9W2O1WXHl7OhZ+eVcdgdV9uQwJbtv7/ZxXO2VpZXLpP+yMFWNFBiKHAVPkJe5LlS4uwYRRM5wCGz5sAt6f/7YpAguZvHy89WLw8zdsPLu0Hf3dZWRJxrjiSrTabWj9owSj4+KhDFyDHxvFM161OLnQ9fKhrzdsdFQWK2DkVEDmkrkkA8YYME1eQmAHl+zF1NFznAIbMmQ83i54M2CBhUxeLu82LMe6ienOdxuOWNz2bsOKomEel7hic0vwP3GZsPU69kxKca5PKzoLq3iwuf4UFqa0XT50fbdh58oi7MZgZ9wYNzIQOQyYKi8hsLJl+5A3fp5TYOlDxmDLnA0BCSxU8hJgize9H7mhe6v8Q/e3yq/zmD2oxE1FyXUxLb4FN0vzEKcblSmWbGy60KBePqw/tRJJ+nUGymLli5zKx1wyl2TAOAOmy0sIrHDSEqe8xPNVa2askUZeqsASJ2HVnnL8Wn0HjY+bYLPW4q8r36H0jTykuE17VyzJyC25pl4ufHb7CGb0bRtdOcEcsQ2XWhyXD8uXZjpHZZ0ty3k8t8kd/HfjFYCxY+zIgJwMmCqvsmUfYs74+U5xpWeMwabZgY26hAxDOfIiyHKCzLwxb2QguhgwTV6Hln6AaWN097syx+Kt/K0BjbiEuCiv6AKSDRDzTQbIgD8MmCavKTmznSOu4UNz8d68tpmGQmxFs9a1+9kyZ1OHkuPIizD7AzO3ISdkIHoYME1e7xRsx9DMXGQPn4Q9C951kZF480ZHL9YdN3Kay/baiEtbUl7RAyQbH+aaDJABfxgwTV5CNLsXvIP9i3Z5iOiTJR9gxZSV7X58TeigvAizPzBzG3JCBqKHAVPlpY2UzF5SXtEDJBsf5poMkAF/GKC8OO3cZeq+P9BwGzYuZIAMdDUDlBflRXmRATJABqRjgPIitNJB29U9PpbPUQcZ6HoGKC/Ki/IiA2SADEjHgCF5iWnvH5j4X574muCxdsaaDqfadzQNX7+OvaWu7y0xB8wBGSADZjBgWF65I6fjzbmb1LfGizfHB+tTNHMdhg3NpbzYM5SuZ2hGBeUx2NCTAe8MGJaXfkQjy3dC4B0CxoVxIQNkQDYGKC+OaDiiIQNkgAxIxwDlRWilg1a2HiLPl6MaMmA+A5QX5UV5kQEyQAakY4DyIrTSQcterPm9WMaUMZWNAcqL8qK8yAAZIAPSMUB5EVrpoJWth8jz5aiGDJjPAOVFeVFeZIAMkAHpGKC8CK100LIXa34vljFlTGVjgPKivCgvMkAGyIB0DFBehFY6aGXrIfJ8OaohA+YzQHlRXpQXGSADZEA6BigvQisdtOzFmt+LZUwZU9kYoLwoL8qLDJABMiAdA5QXoZUOWtl6iDxfjmrIgPkMUF6UF+VFBsgAGZCOAcqL0EoHLXux5vdiGVPGVDYGKC/Ki/IiA2SADEjHAOVFaKWDVrYeIs+XoxoyYD4DlJcXeSmJE7GypBwXq27DamvCk6a7qKk8jY835KFfbHxYNPZGzzGU+xktS1/R+685gya7DfY7RzCjd8exV/rmYmnxCZz/swYPm62wWWtx6/K3OLB+NlI6yJuR89T2+bX6DhofC0ZqcevKdzhQNBvJMe2fp7ZfOLOljz+/m9/oMqbmxJTycpOXkroQZdWN+Oefx7DbW/D4US0eNDc//7sZdafXY2gHDWEowDR6jqHcz2hZ+vgpfRfg0zob7PZ6fL08o8NOg5JSiMNVbXmzNdzB/aa2vNX/tAnDenhKxch5in2OOBlphq2hFg06Ru58/RrSvAjMSFn6ePC7OY0e4xgZcaS8dPJSLP0w/0StKqonN05h3aQMxFjiocT0Q9aSUlRaRUPaiF82juywIQ1m5TB6jqHcz2hZ+rgplkSMLr6GVrsNLRe3It3iKR5te8WSgvzjd9S8tdZ8pebNIvJm6YdhhaWobBJ5s+L8hhEueTNynoplIBaV16llNV8/jlVjBkEtK2YAclYdx582UdYj/Pj6sIDL0n4fl5HR2DKP5uaR8tLLq+dynGoWjU8V9k5Idml8BHhpGytgE5ewLu/AwA4a02BCqhg8x1DuZ7QsfdyUQetxTuTi6XUUj0/yyIXLtpYCHHkg8laLo3NTPbYdtvOyY+RcsQnxurwZOU8l4XX82GqD/dk1vDsq0aUsxZKEsXuuq2U9Pb8ZiQGWpf+N/G5uw8d4yh9Pyksvr6E7cU3I6cFRzNA1PBroSuYOx/qGY5ipW983rww1z2ywt/7utaHtv/o0GsVxreewNsN1BKHEZSFvaxl++u9NNDRb0fr4AeqqLuDL3a9iVLzrtuI8FIPnGMr9jJbljLOlP1767LYqgTvHCtFLF2ttG/1SsSxBuTri+RWbB3qJWeEXjk7HlR0YpDuWkfNUcvegqvkhmm/sxwTdsbTzUfKPOXJ9u9RlvZGytGNyKX9Dyxyan0PKSy+vUcWoEpK5sQ853hqmhCJUiPXNX6BAt15cfpp1uBrP7DY8vvousnT3xJSkpSi/L0YFDahYn+3aU+85EVt/qVP3E/fYWq21qGt4pF4qE3/bqg5jToprY6wYPccQ7mf0HLUKHjOuBFVPbbA3fo8V/Vx/v7aNfqlYRmLrb83qvbFTywa7xtiShNx9/1NFeO9wAbrp82YwJvqyPb4v+BzNgpE/dyMr2GXp2PU4D65z4YDxMV8eXR1TyktXyQNpdJX4AhyuaVHvd5zfmKNWHCG1ucf/UhtO6/nNSNM1ZiLxWTuvqKKyP6jArpdGIU69T5OA+DGv4/PqJnW/uiPzEKvbz+g5hnI/o2WJmCiWEVh//qF6b/H3I29i464DOHz0EPa+twn52YNc5KOvPL1n7EeVGH09uIC9y6cjLakf+vbPRf6WU7jVasPT+u+xKs1VhIGcp75s7bu4bDj7iGPEWH+8UL1f6lwXDFHq2NXK4TLyGmnm1HtOKS9dA+DemMVOeAe/3n+ExqoyFCTFQ2ln5KXB1Wf2IcflQ+sZvDIwHnFTDuCWGEFYK1CU6ZoAxTIW718XI7JG/Ph6pkcvMXbOEdSLHvyDIy6XMI2eYyj3M1qWiGOvguOO321vQmurTRW4GIWqsz+f3cOlfYXop5O5FnuxTJq8AaUVN/HE3raf3V6Hys/fRUGm532zQM5TX6723TJqJyofi/t0f6I41+1+mJu8OsuWVgaXrvWI8YjeeFBeHcgrffslR6Npr8XBmb7lJUZaMw85Lh/e+3QriiubHJcLNzhGYvqKplgK8ak6e/Eadma5jgjEdkqvMZi57GUsXTYbg3WNtXuD6+85hnI/w2VZRmDzr44RZ2v9eZSsmIVhqQMQnz4J+W+ews0WIfuHuLhlvMcITOk5FqsOn0eNVVw+bIHtYa1zqvyTB9dwavssJOjiqMbYTSj+xlKfR+27kliAT6qsatk1h17yuE9nNCba8bmM3kaaufeee8qrA3l1y3wFx/5TiSvfbsO4Xr7lJSBT+ubjkLh8+KxFvZfVdGELMrw98yMmGYheut37JIP2gHVvBP09x1DuZ7iske/huhhttv4Xu8Z6jpTExBerOhr9FHPj2oSvWDKw7Ju7akej4bdSLM4Z+Hz6eioG5+3A6b+F0B7hytsTXaRn9Dzdc6P0moRtF+6p5Tf+9h5G92o7N21bs8rSjsel9waNcYmeuFBeHclLt05UCl+XDdVtLEmYUlr9fMTWiDOvpXtcEnRsZ5K8/DxHj8YziPsZLSv5jXOOuFVsdJnSrjVIiiUfZeqU+Bp8OLlNEEruPtQIqTV8jcWpbf+u7ddjwoeOiTjWU1jYt2290fPUjqvmsccYrPnhjtpReXLjKPK9lK9u5zbK0x9DXe/jkrT79vw7ehpp5tp7rikvXSNuRmMWO64YfzwR97nu4aF4HqjuJOYltTWYGojq9G4zRl668xfHbk+wRn+bkf2M7CPOffRuxzNSD47Ob0f4I7DtsuM+4YnCtphq0ms9/Zo66UWLsbZULDNw4I7Y7yb2Tmjbz+h5Oo8bMxyLT95QJ9201nyBRYO9VzKxfaBlaWVy2X6MGZvoig3lpWv8/X4W534ZprvdP1EbqLjJKP5D3Pew4srb07HwS8elrLovl3neb3He8/ov3hnZ1qBqFVDpPR75q9fglVcLkK677Gj0HEO5n9GyBm29qI68np5Zi57e4muZjY/vCgnV4KMpbTEbuOU/6n5CXj287jcdH90W+91G6bS2/Yyep5prSxrmHvpDnRzytPYbrBrqeZlTy6W6vb/P57XDlv5Y/B5djTTz7T3flJdeXj7eXjH4+Rs2nl3ajv5ujaRiSca44kpHL/yPEoyOi4cycA1+bBSNZi1OLnS9fKifbXh27VCPkUZs/jE8EJfC6sswTVeWr7dCtHeOodzPaFndXjyAO+I3N59HkdvD3KIC9y04jjqx3u3yX7c5R/FQvWz4FRa5PRcn9uuRu9dx2bD1LF7XrTd6noplAF4svqQ+z/Ws/gzWjfR8G4t7g2O0LPfj8G/vDRnjEn1xobz08nJ5t2E51k1Md77bcMTitncbVhS5vrdOVJzY3BL8T1wmbL2OPZNSnDJKKzrrmGRQfwoLdQ2n2GfkO1fbnvMqyHY+55Uwbi1O3nS8VPbu4Zdcn/MyeI6u7/Hz/7cZ2c/IPiIeimU0tlx6qI6irH8cx6vj09TfrsT2w9AFJfilXjxH14yqvTNdYxI7FXuqHfF68Ot+LBqlTdhIwaBZ2/F9jWNd/edL0FvfETAQS8WSipwt5/BIlWUFNo/xfB2Vt4bUaEy8HYv/Fn0NNXPumXPKSycvAYj6xvAbbW8nf/zQ/a3y6zxmDypxU1FyXUyLb8HN0jyX+y6KJRubLjSoDXL9qZVI0jeevSbjrYuOWWr6N2w8ff6ckrc3bBg9x1DvZySOagVNW4nPbz5S4yVi4vFW/7NbMEo301DdR3QeRm3C2TrtLfItEG+Vr3/+VnlxHOu1fZie2HbJUNuvs+ep9HgVp585niNrbfwbNTXV7Xy+xzr3h6LF2+g7yZZ2nlx6Nl6MSXTHhPJyk5eoEEriJKzaUw7t/2oS/y/UX1e+Q+kbeUjR3X9St7UkI7fE8fbzZ7ePYIZuNpuzco3YhkvqM0q1KF/q+kCyEpeN/O3H8PPvt/CwpQmtTxpwr/oCyktWIyfBs7HVjtmZc9T2Uc+3E78t0P0Mn2PCRCzb9Rkq/qxBQ5MVtsY7uHn5G3xYNBupbvHXn2O3lOl47YMvcbGq7f/zqrl2Goe2LUS6F+Fp+3bmPJW41TitewhaiNHbx26/ireGeuavM2Vp58dldDfSzL/3/FNeXuRFWLzDwrgwLmSADIQLA5QX5eW8PxcuUPI82ECSATLgi4GQyWvG3MXYuKNE/WSPmYpB6Tkh//gKBtezwpABMkAG5GAgZPJa+uoGnDhzXv1MmDI35OISsiSUckDJPDFPZIAM+GKA8uJlQ0qdDJABMiAdA6bJa+yEmcgZP73dEZW/I68pMxdgyLDx7R4nkMuNvkzO9eztkQEyQAbkYMAUeQlxHTz5HT4+8Q1GjZvmVTzZY/6Nf89aoH6GDPcup1kFy/DZ6Z/x/oGyoAiMUMoBJfPEPJEBMuCLAVPk9cb2Xc77WR+f+NpDYBlDx+LF6fNQsOgV5M1fAW/3vGbmL1XFpd0Xm1u4yqsEOfIi1L6g5noyQgYinwFT5JU2ZAy2FX/kFNjKNZtV8Ywc/W+88VYxjn37k3OdJqeDJ7/F8tc2QYhNCOm9/Yed2yx5eb3p4uKEjciHmQ0Wc0wGoocBU+QlxKAKbNd+rNm8UxXPtLxFOPLVGaeQNGm5L/eWncCosdMgLiXuKj2KxS8XBUVclFf0QM0GjLkmA5HPgGny0gQmluIS4aff/+xTXJrISj/7CsNGTlIFKPYP1odARz7QzDFzTAaigwFT5SWkIy4Diokbmpj8XW59b1/QpKXJkFBHB9TMM/NMBiKfAdPltWhVUafFJQT3+Q8VGDdpdlAFRqAjH2jmmDkmA9HBgOny2nXgqCF5CYGtWvcm5cWHJaV7WJKNZXQ0lsxzeOXZsLzEJAvto39XobeZhf5eOnx7T6kqr7QhY53HFmVk5bxoitQIX3jBx3wwH2SADBhlwJC8xMxCvZCOfv2jKpfMEbku/67fxp/vJZ8cV48zcWqBy3He/6iM8uKIjCMyMkAGyICTAVPlNSxroot0/BGWfps9hz6jvAinE06jPTLux948GYh8BgzJa1D6aLy8bqvzs+L1Tap0zJKXeLhZf/x5S1Zz5EWpUWpkgAyQAScDBuXl/Vkss+SlTW03e8neWOT3xphj5pgMRAcDlBd7Ms6eDCt9dOBAmgcAAAKHSURBVFR65pl5jgQGKC/Ki/IiA2SADEjHAOVFaKWDNhJ6jfwNHP2QgcAYoLwoL8qLDJABMiAdA5QXoZUOWvZYA+uxMn6MXyQwQHlRXpQXGSADZEA6BigvQisdtJHQa+Rv4OiHDATGgKnyEg8va+87NLI06x2G7T0fRlgCg4XxY/zIABkIFwZMk1f22KlY+uoGlzdj6N+S4e/3whVrkTF0vClv1HCXWLgEnefBBoAMkAEyEBgDpshrzISZOPrNmYDea6h/x+EHhz9HeuZY0wVGWAKDhfFj/MgAGQgXBkyR1/pt75smLk1iefNXUF68H8f7cWSADJABrwyYIq/h2ZMDutfl7f5Y5vAJlBeh9QptuPT8eB4chZCBrmPAFHm531sK178JWteBxtgz9mSADJjJAOXF0Q1HN2SADJAB6RigvAitdNCa2XvjsTgaIANyMkB5UV6UFxkgA2RAOgYoL0IrHbTsKcvZU2bemDczGaC8KC/KiwyQATIgHQOUF6GVDloze288FkcDZEBOBigvyovyIgNkgAxIxwDlRWilg5Y9ZTl7yswb82YmA5QX5UV5kQEyQAakY4DyIrTSQWtm743H4miADMjJAOVFeVFeZIAMkAHpGKC8CK100LKnLGdPmXlj3sxkgPKivCgvMkAGyIB0DFBehFY6aM3svfFYHA2QATkZoLwoL8qLDJABMiAdA5QXoZUOWvaU5ewpM2/Mm5kMUF6UF+VFBsgAGZCOAcqL0EoHrZm9Nx6LowEyICcDlBflRXmRATJABqRjgPIitNJBy56ynD1l5o15M5MByovyorzIABkgA9IxQHkRWumgNbP3xmNxNEAG5GSA8qK8KC8yQAbIgHQM/D9oilK83BofgwAAAABJRU5ErkJggg=="},97300:function(n,e,i){i.d(e,{Z:function(){return l}});let l=i.p+"assets/images/eafb3690cd2eb75595b5a70615fd067d-b96ea5537b7afc46c3cc4e54710c231c.png"},50065:function(n,e,i){i.d(e,{Z:function(){return s},a:function(){return r}});var l=i(67294);let c={},d=l.createContext(c);function r(n){let e=l.useContext(d);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);