"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["82548"],{81119:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return a},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var c=t(77488),r=t(85893),s=t(50065);let o={slug:"\u5982\u4F55\u7F16\u5199-go-\u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5",title:"\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-06-22T00:00:00.000Z")},i="\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5",d={authorsImageUrls:[void 0]},l=[{value:"testing \u5305",id:"testing-\u5305",level:3},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:3},{value:"\u7F16\u5199\u6D4B\u8BD5\u7684\u89C4\u5219",id:"\u7F16\u5199\u6D4B\u8BD5\u7684\u89C4\u5219",level:3},{value:"\u8FD0\u884C\u6D4B\u8BD5",id:"\u8FD0\u884C\u6D4B\u8BD5",level:3}];function u(e){let n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"testing-\u5305",children:"testing \u5305"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"testing"})," \u5305\u662F Go \u8BED\u8A00\u7684\u6807\u51C6\u5E93\u7EC4\u6210\u90E8\u5206\uFF0C\u4E13\u95E8\u7528\u4E8E\u652F\u6301\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002\u8BE5\u5305\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u529F\u80FD\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u5B9A\u4E49\u6D4B\u8BD5\u7528\u4F8B\u3001\u8BB0\u5F55\u6D4B\u8BD5\u7ED3\u679C\uFF0C\u5E76\u5229\u7528\u4E00\u7CFB\u5217\u5DE5\u5177\u51FD\u6570\u63A7\u5236\u6D4B\u8BD5\u903B\u8F91\u548C\u62A5\u544A\u6D4B\u8BD5\u72B6\u6001\u3002\u8FD9\u5305\u62EC\u5904\u7406\u5931\u8D25\u3001\u65E5\u5FD7\u8BB0\u5F55\u548C\u6761\u4EF6\u6027\u6D4B\u8BD5\u4E2D\u65AD\u7B49\u529F\u80FD\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,r.jsxs)(n.p,{children:["\u4EE5\u4E00\u4E2A\u57FA\u672C\u7684\u52A0\u6CD5\u51FD\u6570\u6D4B\u8BD5\u4E3A\u4F8B\u3002\u9996\u5148\uFF0C\u5047\u8BBE\u4F60\u6709\u4E00\u4E2A\u52A0\u6CD5\u51FD\u6570\u5B9A\u4E49\u5728 ",(0,r.jsx)(n.code,{children:"calculator.go"})," \u6587\u4EF6\u4E2D"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"package calculator\n\u200B\n// Add \u8FD4\u56DE\u4E24\u4E2A\u6574\u6570\u7684\u548C\nfunc Add(a, b int) int {\n    return a + b\n}\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5BF9\u5E94\u7684\u6D4B\u8BD5\u6587\u4EF6 ",(0,r.jsx)(n.code,{children:"calculator_test.go"})," \u5305\u542B\u5982\u4E0B\u4EE3\u7801"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package calculator\n\u200B\nimport "testing"\n\u200B\n// TestAdd \u6D4B\u8BD5 Add \u51FD\u6570\nfunc TestAdd(t *testing.T) {\n    result := Add(1, 2)\n    expected := 3\n    if result != expected {\n        t.Errorf("Add(1, 2) = %d; expected %d", result, expected)\n    }\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u7F16\u5199\u6D4B\u8BD5\u7684\u89C4\u5219",children:"\u7F16\u5199\u6D4B\u8BD5\u7684\u89C4\u5219"}),"\n",(0,r.jsxs)(n.p,{children:["\u6D4B\u8BD5\u6587\u4EF6\u540D\u5E94\u4EE5 ",(0,r.jsx)(n.code,{children:"_test.go"})," \u7ED3\u5C3E\uFF0C\u5B58\u653E\u5728\u4E0E\u88AB\u6D4B\u8BD5\u6E90\u6587\u4EF6\u76F8\u540C\u7684\u5305\u4E2D\u3002\u6BCF\u4E2A\u6D4B\u8BD5\u51FD\u6570\u5FC5\u987B\u4EE5 ",(0,r.jsx)(n.code,{children:"Test"})," \u5F00\u5934\uFF0C\u5E76\u63A5\u53D7\u4E00\u4E2A ",(0,r.jsx)(n.code,{children:"*testing.T"})," \u7C7B\u578B\u7684\u53C2\u6570\u3002\u8FD9\u4E9B\u51FD\u6570\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"testing"})," \u5305\u63D0\u4F9B\u7684\u65B9\u6CD5\u8FDB\u884C\u9519\u8BEF\u62A5\u544A\u548C\u65E5\u5FD7\u8BB0\u5F55"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"t.Errorf()"})," \u548C ",(0,r.jsx)(n.code,{children:"t.Error()"}),": \u5F53\u6D4B\u8BD5\u9700\u8981\u62A5\u544A\u9519\u8BEF\u65F6\u4F7F\u7528\uFF0C",(0,r.jsx)(n.code,{children:"Errorf"})," \u5141\u8BB8\u6309\u683C\u5F0F\u8F93\u51FA\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"t.Fatalf()"})," \u548C ",(0,r.jsx)(n.code,{children:"t.Fatal()"}),": \u9047\u5230\u65E0\u6CD5\u7EE7\u7EED\u7684\u9519\u8BEF\u65F6\u8C03\u7528\uFF0C\u4F1A\u7ACB\u5373\u7EC8\u6B62\u6D4B\u8BD5\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"t.Log()"})," \u548C ",(0,r.jsx)(n.code,{children:"t.Logf()"}),": \u7528\u4E8E\u8BB0\u5F55\u6D4B\u8BD5\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u5728\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"-v"})," \u53C2\u6570\u8FD0\u884C\u6D4B\u8BD5\u65F6\u663E\u793A\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8FD0\u884C\u6D4B\u8BD5",children:"\u8FD0\u884C\u6D4B\u8BD5"}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5F00\u547D\u4EE4\u884C\u6216\u7EC8\u7AEF\uFF0C\u5728\u5305\u542B\u6D4B\u8BD5\u6587\u4EF6\u7684\u76EE\u5F55\u4E0B\u8FD0\u884C"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go test\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"-v"})," \u53C2\u6570\u53EF\u4EE5\u67E5\u770B\u6BCF\u4E2A\u6D4B\u8BD5\u51FD\u6570\u7684\u8BE6\u7EC6\u8F93\u51FA\u4FE1\u606F\u3002\u82E5\u53EA\u60F3\u8FD0\u884C\u7279\u5B9A\u7684\u6D4B\u8BD5\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"-run"})," \u53C2\u6570\uFF0C\u5982"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go test -run TestAdd\n"})})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var c=t(67294);let r={},s=c.createContext(r);function o(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(s.Provider,{value:n},e.children)}},77488:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u5982\u4F55\u7F16\u5199-go-\u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-06-22-\u5982\u4F55\u7F16\u5199_Go_\u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5.md","source":"@site/blog/\u540E\u7AEF/2024-06-22-\u5982\u4F55\u7F16\u5199_Go_\u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5.md","title":"\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5","description":"testing \u5305","date":"2024-06-22T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.48,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u5982\u4F55\u7F16\u5199-go-\u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5","title":"\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u5355\u5143\u6D4B\u8BD5","authors":["sumingcheng"],"tags":["backend"],"date":"2024-06-22T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"PotPlayer \u5FEB\u6377\u952E","permalink":"/docs-hub/blog/potplayer-\u5FEB\u6377\u952E"},"nextItem":{"title":"\u5982\u4F55\u7F16\u5199 Go \u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5","permalink":"/docs-hub/blog/\u5982\u4F55\u7F16\u5199-go-\u8BED\u8A00\u7684\u6027\u80FD\u6D4B\u8BD5"}}')}}]);