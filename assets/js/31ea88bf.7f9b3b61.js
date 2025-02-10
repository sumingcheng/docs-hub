"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["57124"],{61539:function(n,e,t){t.r(e),t.d(e,{assets:function(){return a},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var s=t(45930),c=t(85893),i=t(50065);let r={slug:"\u5982\u4F55\u7F16\u5199-go-\u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5",title:"\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-06-22T00:00:00.000Z")},o="\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5",a={authorsImageUrls:[void 0]},u=[{value:"testing \u5305",id:"testing-\u5305",level:3},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:3},{value:"IDE \u6267\u884C",id:"ide-\u6267\u884C",level:3}];function l(n){let e={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h3,{id:"testing-\u5305",children:"testing \u5305"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"testing"})," \u5305\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E13\u95E8\u7528\u4E8E\u6027\u80FD\u6D4B\u8BD5\u7684\u5DE5\u5177\uFF0C\u79F0\u4E3A\u57FA\u51C6\u6D4B\u8BD5\uFF08benchmarks\uFF09\u3002\u57FA\u51C6\u6D4B\u8BD5\u51FD\u6570\u4EE5 ",(0,c.jsx)(e.code,{children:"Benchmark"})," \u5F00\u5934\uFF0C\u5E76\u63A5\u53D7\u4E00\u4E2A ",(0,c.jsx)(e.code,{children:"*testing.B"})," \u7C7B\u578B\u7684\u53C2\u6570\u3002\u8FD9\u4E2A\u53C2\u6570\u63D0\u4F9B\u4E86\u63A7\u5236\u6D4B\u8BD5\u8FD0\u884C\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u4F8B\u5982 ",(0,c.jsx)(e.code,{children:"b.N"}),"\uFF0C\u5B83\u4EE3\u8868\u6D4B\u8BD5\u5FAA\u73AF\u7684\u6B21\u6570\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'package main\n\u200B\nimport (\n    "encoding/json"\n    "github.com/bytedance/sonic"\n)\n\u200B\ntype Student struct {\n    Name   string\n    Age    int\n    Gender string\n}\n\u200B\ntype Class struct {\n    Id       string\n    Students []Student\n}\n\u200B\nvar (\n    s = Student{"\u5F20\u4E09", 18, "\u5973"}\n    c = Class{\n        Id:       "1\u5E742\u73ED",\n        Students: []Student{s, s, s},\n    }\n)\n// Benchmark \u5F00\u5934\nfunc\nJson(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        bytes, _ := json.Marshal(c)\n        var c2 Class\n        json.Unmarshal(bytes, &c2)\n    }\n}\n\u200B\nfunc BenchmarkSonic(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        bytes, _ := sonic.Marshal(c)\n        var c2 Class\n        sonic.Unmarshal(bytes, &c2)\n    }\n}\n\n'})}),"\n",(0,c.jsx)(e.h3,{id:"ide-\u6267\u884C",children:"IDE \u6267\u884C"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.img,{alt:"44c617759eee959e35e5c76c15fb67df",src:t(85954).Z+"",width:"1436",height:"939"}),"### \u547D\u4EE4\u884C\u6267\u884C"]}),"\n",(0,c.jsx)(e.p,{children:"\u6253\u5F00\u547D\u4EE4\u884C\u6216\u7EC8\u7AEF\uFF0C\u5728\u5305\u542B\u6027\u80FD\u6D4B\u8BD5\u6587\u4EF6\u7684\u76EE\u5F55\u4E0B\u8FD0\u884C\uFF1A"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"go test -bench=.\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"-bench"})," \u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u8981\u8FD0\u884C\u7684\u57FA\u51C6\u6D4B\u8BD5\u3002",(0,c.jsx)(e.code,{children:"-bench=."})," \u8868\u793A\u8FD0\u884C\u6240\u6709\u57FA\u51C6\u6D4B\u8BD5\u3002"]})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},85954:function(n,e,t){t.d(e,{Z:function(){return s}});let s=t.p+"assets/images/44c617759eee959e35e5c76c15fb67df-ea9127390f75b20e45be52859034695a.jpg"},50065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var s=t(67294);let c={},i=s.createContext(c);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(i.Provider,{value:e},n.children)}},45930:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u5982\u4F55\u7F16\u5199-go-\u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-06-22-\u5982\u4F55\u7F16\u5199_Go_\u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5.md","source":"@site/blog/\u540E\u7AEF/2024-06-22-\u5982\u4F55\u7F16\u5199_Go_\u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5.md","title":"\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5","description":"testing \u5305","date":"2024-06-22T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.8633333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u5982\u4F55\u7F16\u5199-go-\u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5","title":"\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5","authors":["sumingcheng"],"tags":["backend"],"date":"2024-06-22T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5","permalink":"/docs-hub/blog/\u5982\u4F55\u7F16\u5199-go-\u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5"},"nextItem":{"title":"\u76D1\u63A7\u5355\u673ADocker\u5BB9\u5668\u4F7F\u7528cAdvisorPrometheus\u548CGrafana","permalink":"/docs-hub/blog/\u76D1\u63A7\u5355\u673Adocker\u5BB9\u5668\u4F7F\u7528cadvisorprometheus\u548Cgrafana"}}')}}]);