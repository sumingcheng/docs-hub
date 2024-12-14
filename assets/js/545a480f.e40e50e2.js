"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["6911"],{164:function(n,e,l){l.r(e),l.d(e,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>a,toc:()=>t,contentTitle:()=>c});var i=JSON.parse('{"id":"Backend/Go/\u96C6\u5408/\u5207\u7247","title":"Go \u5207\u7247\uFF08Slice\uFF09","description":"\u5207\u7247\u662F\u4E00\u79CD\u52A8\u6001\u6570\u7EC4\uFF0C\u58F0\u660E\u957F\u5EA6\u9ED8\u8BA4\u4E3A 0 \u7684\u6570\u7EC4\u5373\u4E3A\u4E00\u4E2A\u5207\u7247\u3002","source":"@site/docs/Backend/Go/\u96C6\u5408/2.\u5207\u7247.md","sourceDirName":"Backend/Go/\u96C6\u5408","slug":"/Backend/Go/\u96C6\u5408/\u5207\u7247","permalink":"/docs-hub/Backend/Go/\u96C6\u5408/\u5207\u7247","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u96C6\u5408/2.\u5207\u7247.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":2,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u6570\u7EC4","permalink":"/docs-hub/Backend/Go/\u96C6\u5408/\u6570\u7EC4"},"next":{"title":"Go \u5207\u7247\u7684\u6269\u5BB9\u673A\u5236","permalink":"/docs-hub/Backend/Go/\u96C6\u5408/\u5207\u7247\u7684\u6269\u5BB9\u673A\u5236"}}'),s=l("85893"),r=l("50065");let d={},c="Go \u5207\u7247\uFF08Slice\uFF09",a={},t=[{value:"\u521B\u5EFA\u5207\u7247",id:"\u521B\u5EFA\u5207\u7247",level:2},{value:"\u4F7F\u7528\u5207\u7247\u5B57\u9762\u91CF",id:"\u4F7F\u7528\u5207\u7247\u5B57\u9762\u91CF",level:3},{value:"\u4F7F\u7528 <code>make</code> \u51FD\u6570",id:"\u4F7F\u7528-make-\u51FD\u6570",level:3},{value:"\u4ECE\u6570\u7EC4\u521B\u5EFA\u5207\u7247",id:"\u4ECE\u6570\u7EC4\u521B\u5EFA\u5207\u7247",level:3},{value:"\u6DFB\u52A0\u5143\u7D20",id:"\u6DFB\u52A0\u5143\u7D20",level:2},{value:"\u5C55\u5F00\u64CD\u4F5C",id:"\u5C55\u5F00\u64CD\u4F5C",level:2},{value:"\u590D\u5236\u5207\u7247",id:"\u590D\u5236\u5207\u7247",level:2},{value:"\u5220\u9664\u5143\u7D20",id:"\u5220\u9664\u5143\u7D20",level:2},{value:"\u8BBF\u95EE\u548C\u4FEE\u6539\u5143\u7D20",id:"\u8BBF\u95EE\u548C\u4FEE\u6539\u5143\u7D20",level:2},{value:"\u83B7\u53D6\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF",id:"\u83B7\u53D6\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF",level:2},{value:"\u622A\u53D6\u5207\u7247",id:"\u622A\u53D6\u5207\u7247",level:2},{value:"\u622A\u53D6\u5230\u672B\u5C3E",id:"\u622A\u53D6\u5230\u672B\u5C3E",level:3},{value:"\u4ECE\u8D77\u59CB\u4F4D\u7F6E\u622A\u53D6",id:"\u4ECE\u8D77\u59CB\u4F4D\u7F6E\u622A\u53D6",level:3},{value:"\u622A\u53D6\u6574\u4E2A\u5207\u7247",id:"\u622A\u53D6\u6574\u4E2A\u5207\u7247",level:3},{value:"\u904D\u5386\u5207\u7247",id:"\u904D\u5386\u5207\u7247",level:2},{value:"\u5207\u7247\u7684\u5BB9\u91CF\u6269\u5C55",id:"\u5207\u7247\u7684\u5BB9\u91CF\u6269\u5C55",level:2},{value:"\u5207\u7247\u7684\u5185\u5B58\u5171\u4EAB",id:"\u5207\u7247\u7684\u5185\u5B58\u5171\u4EAB",level:2},{value:"\u5207\u7247\u4E0E\u6570\u7EC4\u7684\u533A\u522B",id:"\u5207\u7247\u4E0E\u6570\u7EC4\u7684\u533A\u522B",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(n){let e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"go-\u5207\u7247slice",children:"Go \u5207\u7247\uFF08Slice\uFF09"})}),"\n",(0,s.jsx)(e.p,{children:"\u5207\u7247\u662F\u4E00\u79CD\u52A8\u6001\u6570\u7EC4\uFF0C\u58F0\u660E\u957F\u5EA6\u9ED8\u8BA4\u4E3A 0 \u7684\u6570\u7EC4\u5373\u4E3A\u4E00\u4E2A\u5207\u7247\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"var stringSlice []string\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u521B\u5EFA\u5207\u7247",children:"\u521B\u5EFA\u5207\u7247"}),"\n",(0,s.jsx)(e.h3,{id:"\u4F7F\u7528\u5207\u7247\u5B57\u9762\u91CF",children:"\u4F7F\u7528\u5207\u7247\u5B57\u9762\u91CF"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"numbers := []int{1, 2, 3, 4, 5}\nfmt.Println(numbers) // \u8F93\u51FA: [1 2 3 4 5]\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"\u4F7F\u7528-make-\u51FD\u6570",children:["\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"make"})," \u51FD\u6570"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"make"})," \u51FD\u6570\u521B\u5EFA\u5207\u7247\uFF0C\u53EF\u4EE5\u6307\u5B9A\u957F\u5EA6\u548C\u5BB9\u91CF\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"numbers := make([]int, 3, 5)\nfmt.Println(numbers) // \u8F93\u51FA: [0 0 0]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u4ECE\u6570\u7EC4\u521B\u5EFA\u5207\u7247",children:"\u4ECE\u6570\u7EC4\u521B\u5EFA\u5207\u7247"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"array := [5]int{1, 2, 3, 4, 5}\nslice := array[1:4]\nfmt.Println(slice) // \u8F93\u51FA: [2 3 4]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6DFB\u52A0\u5143\u7D20",children:"\u6DFB\u52A0\u5143\u7D20"}),"\n",(0,s.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"append"})," \u51FD\u6570\u53EF\u4EE5\u5411\u5207\u7247\u6DFB\u52A0\u5143\u7D20\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'var names []string\nnames = append(names, "Alice", "Bob", "Charlie")\nfmt.Println(names) // \u8F93\u51FA: [Alice Bob Charlie]\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"append"})," \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5207\u7247\uFF0C\u9700\u8981\u7528\u53D8\u91CF\u63A5\u6536\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u65B0\u7684\u5207\u7247\u5FC5\u987B\u8D4B\u503C\u7ED9\u539F\u5207\u7247\uFF0C\u624D\u80FD\u5B9E\u73B0\u589E\u52A0\u5143\u7D20\u7684\u6548\u679C\u3002"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"append"})," \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u5F15\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5C55\u5F00\u64CD\u4F5C",children:"\u5C55\u5F00\u64CD\u4F5C"}),"\n",(0,s.jsxs)(e.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"..."})," \u5C06\u4E00\u4E2A\u5207\u7247\u7684\u5143\u7D20\u5C55\u5F00\uFF0C\u5E76\u6DFB\u52A0\u5230\u53E6\u4E00\u4E2A\u5207\u7247\u4E2D\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'func main() {\n    students := []string{"John", "Paul", "George", "Ringo"}\n    moreStudents := []string{"Mick", "Keith", "Charlie", "Ronnie"}\n\n    students = append(students, moreStudents...)\n\n    for index, name := range students {\n        fmt.Println(index, name)\n    }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u590D\u5236\u5207\u7247",children:"\u590D\u5236\u5207\u7247"}),"\n",(0,s.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"copy"})," \u51FD\u6570\u53EF\u4EE5\u590D\u5236\u5207\u7247\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"sourceSlice := []int{1, 2, 3}\ndestinationSlice := make([]int, len(sourceSlice))\ncopy(destinationSlice, sourceSlice)\nfmt.Println(destinationSlice) // \u8F93\u51FA: [1 2 3]\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"copy"})," \u4E0D\u4F1A\u6269\u5145\u76EE\u6807\u5207\u7247\u7684\u957F\u5EA6\uFF0C\u76EE\u6807\u5207\u7247\u5FC5\u987B\u6709\u8DB3\u591F\u7684\u957F\u5EA6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"copy"})," \u8FD4\u56DE\u88AB\u590D\u5236\u7684\u5143\u7D20\u6570\u91CF\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5220\u9664\u5143\u7D20",children:"\u5220\u9664\u5143\u7D20"}),"\n",(0,s.jsxs)(e.p,{children:["\u8981\u4ECE\u5207\u7247\u4E2D\u5220\u9664\u5143\u7D20\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5207\u7247\u7684\u622A\u53D6\u548C ",(0,s.jsx)(e.code,{children:"append"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"numbers := []int{1, 2, 3, 4, 5}\n// \u5220\u9664\u7D22\u5F15\u4E3A 2 \u7684\u5143\u7D20\nnumbers = append(numbers[:2], numbers[3:]...)\nfmt.Println(numbers) // \u8F93\u51FA: [1 2 4 5]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8BBF\u95EE\u548C\u4FEE\u6539\u5143\u7D20",children:"\u8BBF\u95EE\u548C\u4FEE\u6539\u5143\u7D20"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"numbers := []int{1, 2, 3, 4, 5}\n\n// \u8BBF\u95EE\u7D22\u5F15\u4E3A 2 \u7684\u5143\u7D20\nfmt.Println(numbers[2]) // \u8F93\u51FA: 3\n\n// \u4FEE\u6539\u7D22\u5F15\u4E3A 2 \u7684\u5143\u7D20\nnumbers[2] = 10\nfmt.Println(numbers) // \u8F93\u51FA: [1 2 10 4 5]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u83B7\u53D6\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF",children:"\u83B7\u53D6\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"numbers := []int{1, 2, 3, 4, 5}\n\nfmt.Println(len(numbers)) // \u957F\u5EA6: 5\nfmt.Println(cap(numbers)) // \u5BB9\u91CF: 5\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u622A\u53D6\u5207\u7247",children:"\u622A\u53D6\u5207\u7247"}),"\n",(0,s.jsx)(e.p,{children:"\u5207\u7247\u7684\u622A\u53D6\u64CD\u4F5C\u901A\u8FC7\u66F4\u65B0\u5207\u7247\u7684\u6307\u9488\u3001\u957F\u5EA6\u548C\u5BB9\u91CF\u6765\u5B8C\u6210\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'array := []string{"a", "b", "c", "d", "e", "f", "g", "h"}\n\n// \u622A\u53D6\u7D22\u5F15\u4ECE 1 \u5230 5 \u7684\u5143\u7D20\uFF08\u4E0D\u5305\u542B\u7D22\u5F15 5\uFF09\nsubSlice := array[1:5]\nfmt.Println(subSlice) // \u8F93\u51FA: [b c d e]\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u622A\u53D6\u5230\u672B\u5C3E",children:"\u622A\u53D6\u5230\u672B\u5C3E"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"subSlice := array[1:]\nfmt.Println(subSlice) // \u8F93\u51FA: [b c d e f g h]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u4ECE\u8D77\u59CB\u4F4D\u7F6E\u622A\u53D6",children:"\u4ECE\u8D77\u59CB\u4F4D\u7F6E\u622A\u53D6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"subSlice := array[:4]\nfmt.Println(subSlice) // \u8F93\u51FA: [a b c d]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u622A\u53D6\u6574\u4E2A\u5207\u7247",children:"\u622A\u53D6\u6574\u4E2A\u5207\u7247"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"subSlice := array[:]\nfmt.Println(subSlice) // \u8F93\u51FA: [a b c d e f g h]\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6CE8\u610F"}),"\uFF1A\u65B0\u7684\u5207\u7247\u53D8\u91CF\u6307\u5411\u540C\u4E00\u4E2A\u5E95\u5C42\u6570\u7EC4\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'array := []string{"a", "b", "c", "d", "e"}\nsubSlice := array[:3]\narray[0] = "z"\nfmt.Println(subSlice) // \u8F93\u51FA: [z b c]\nfmt.Println(array)    // \u8F93\u51FA: [z b c d e]\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5F53\u4FEE\u6539\u5E95\u5C42\u6570\u7EC4\u7684\u5143\u7D20\u65F6\uFF0C\u6240\u6709\u5F15\u7528\u8BE5\u6570\u7EC4\u7684\u5207\u7247\u90FD\u4F1A\u53D7\u5F71\u54CD\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u904D\u5386\u5207\u7247",children:"\u904D\u5386\u5207\u7247"}),"\n",(0,s.jsxs)(e.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"for"})," \u5FAA\u73AF\u6216 ",(0,s.jsx)(e.code,{children:"for range"})," \u8BED\u53E5\u904D\u5386\u5207\u7247\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'students := []string{"John", "Paul", "George", "Ringo"}\n\n// \u4F7F\u7528\u4F20\u7EDF\u7684 for \u5FAA\u73AF\nfor i := 0; i < len(students); i++ {\n    fmt.Println(i, students[i])\n}\n\n// \u4F7F\u7528 for range \u5FAA\u73AF\nfor index, name := range students {\n    fmt.Println(index, name)\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u5207\u7247\u7684\u5BB9\u91CF\u6269\u5C55",children:"\u5207\u7247\u7684\u5BB9\u91CF\u6269\u5C55"}),"\n",(0,s.jsxs)(e.p,{children:["\u5F53\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"append"})," \u5411\u5207\u7247\u6DFB\u52A0\u5143\u7D20\uFF0C\u4E14\u8D85\u8FC7\u5176\u5BB9\u91CF\u65F6\uFF0CGo \u4F1A\u81EA\u52A8\u5206\u914D\u66F4\u5927\u7684\u5E95\u5C42\u6570\u7EC4\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"numbers := []int{1, 2, 3}\nfmt.Println(len(numbers), cap(numbers)) // \u8F93\u51FA: 3 3\n\nnumbers = append(numbers, 4)\nfmt.Println(len(numbers), cap(numbers)) // \u8F93\u51FA: 4 6\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5207\u7247\u7684\u5BB9\u91CF\u589E\u957F\u7B56\u7565\u662F\u6307\u6570\u578B\u589E\u957F\uFF0C\u4EE5\u51CF\u5C11\u5185\u5B58\u5206\u914D\u7684\u6B21\u6570\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5207\u7247\u7684\u5185\u5B58\u5171\u4EAB",children:"\u5207\u7247\u7684\u5185\u5B58\u5171\u4EAB"}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u4E8E\u5207\u7247\u5171\u4EAB\u5E95\u5C42\u6570\u7EC4\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u9700\u8981\u907F\u514D\u5185\u5B58\u5171\u4EAB\u5E26\u6765\u7684\u526F\u4F5C\u7528\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func main() {\n    data := []int{1, 2, 3, 4, 5}\n    subData := data[2:4] // [3 4]\n\n    subData[0] = 100\n    fmt.Println(data)    // \u8F93\u51FA: [1 2 100 4 5]\n    fmt.Println(subData) // \u8F93\u51FA: [100 4]\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679C\u60F3\u8981\u521B\u5EFA\u5207\u7247\u7684\u526F\u672C\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"copy"})," \u51FD\u6570\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func main() {\n    data := []int{1, 2, 3, 4, 5}\n    subData := make([]int, 2)\n    copy(subData, data[2:4]) // \u590D\u5236 [3 4] \u5230 subData\n\n    subData[0] = 100\n    fmt.Println(data)    // \u8F93\u51FA: [1 2 3 4 5]\n    fmt.Println(subData) // \u8F93\u51FA: [100 4]\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5207\u7247\u4E0E\u6570\u7EC4\u7684\u533A\u522B",children:"\u5207\u7247\u4E0E\u6570\u7EC4\u7684\u533A\u522B"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6570\u7EC4\u662F\u5B9A\u957F\u7684\uFF0C\u957F\u5EA6\u662F\u7C7B\u578B\u7684\u4E00\u90E8\u5206\uFF0C\u957F\u5EA6\u56FA\u5B9A\u540E\u4E0D\u80FD\u6539\u53D8\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5207\u7247\u662F\u53D8\u957F\u7684\uFF0C\u53EF\u4EE5\u52A8\u6001\u589E\u52A0\u6216\u51CF\u5C11\u5143\u7D20\uFF0C\u957F\u5EA6\u53EF\u53D8\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5207\u7247\u662F\u5BF9\u5E95\u5C42\u6570\u7EC4\u7684\u4E00\u4E2A\u5F15\u7528\uFF0C\u64CD\u4F5C\u5207\u7247\u4F1A\u5F71\u54CD\u5E95\u5C42\u6570\u7EC4\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728\u51FD\u6570\u53C2\u6570\u4E2D\uFF0C\u5C3D\u91CF\u4F7F\u7528\u5207\u7247\u800C\u975E\u6570\u7EC4\uFF0C\u4EE5\u83B7\u5F97\u66F4\u5927\u7684\u7075\u6D3B\u6027\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5F53\u9700\u8981\u907F\u514D\u5E95\u5C42\u6570\u7EC4\u7684\u526F\u4F5C\u7528\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"copy"})," \u521B\u5EFA\u5207\u7247\u7684\u526F\u672C\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u904D\u5386\u5207\u7247\u65F6\uFF0C\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"for range"})," \u5FAA\u73AF\u66F4\u52A0\u7B80\u6D01\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},50065:function(n,e,l){l.d(e,{Z:function(){return c},a:function(){return d}});var i=l(67294);let s={},r=i.createContext(s);function d(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);