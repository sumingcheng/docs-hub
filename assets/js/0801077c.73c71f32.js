"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["59318"],{8181:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return a}});var r=t(11119),o=t(85893),c=t(50065);let i={slug:"go-\u8BED\u8A00\u4E2D-defer-\u8BED\u53E5",title:"Go \u8BED\u8A00\u4E2D defer \u8BED\u53E5",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-06-19T00:00:00.000Z")},s="Go \u8BED\u8A00\u4E2D defer \u8BED\u53E5",d={authorsImageUrls:[void 0]},a=[{value:"defer \u4E0E \u533F\u540D\u51FD\u6570",id:"defer-\u4E0E-\u533F\u540D\u51FD\u6570",level:2}];function u(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Go \u8BED\u8A00\u4E2D\uFF0C",(0,o.jsx)(n.code,{children:"defer"})," \u8BED\u53E5\u9075\u5FAA\u540E\u8FDB\u5148\u51FA\uFF08LIFO\uFF09\u7684\u539F\u5219\u6267\u884C\u3002\u8FD9\u6837\u505A\u4E3B\u8981\u662F\u4E3A\u4E86\u7B80\u5316\u8D44\u6E90\uFF08\u5982\u6587\u4EF6\u3001\u9501\uFF09\u7684\u7BA1\u7406\uFF0C\u4F7F\u5F97\u8D44\u6E90\u7684\u83B7\u53D6\u548C\u91CA\u653E\u987A\u5E8F\u4FDD\u6301\u4E00\u81F4\uFF0C\u6613\u4E8E\u7EF4\u62A4\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'package main\n\nimport (\n	"fmt"\n)\n\nfunc main() {\n	defer fmt.Println("\u7B2C\u4E00\u4E2A defer")  // \u6700\u540E\u6267\u884C\n	defer fmt.Println("\u7B2C\u4E8C\u4E2A defer")  // \u7B2C\u4E8C\u4E2A\u6267\u884C\n	defer fmt.Println("\u7B2C\u4E09\u4E2A defer")  // \u6700\u5148\u6267\u884C\n\n	fmt.Println("\u4E3B\u4F53")\n}\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u672C\u8D28\u539F\u56E0\u5C31\u662F\u56E0\u4E3A ",(0,o.jsx)(n.code,{children:"defer"})," \u8BED\u53E5\u4F7F\u7528\u4E86\u6808\u6765\u5B58\u50A8"]}),"\n",(0,o.jsx)(n.h2,{id:"defer-\u4E0E-\u533F\u540D\u51FD\u6570",children:"defer \u4E0E \u533F\u540D\u51FD\u6570"}),"\n",(0,o.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"defer"})," \u533F\u540D\u51FD\u6570\u65F6\uFF0C\u6838\u5FC3\u95EE\u9898\u5728\u4E8E\u53D8\u91CF\u6355\u83B7\u7279\u6027"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'package main\n\nimport "fmt"\n\nfunc main() {\n	a := 1\n	defer func() {\n		fmt.Println(a) // \u8F93\u51FA 2\n	}()\n	a = 2\n	fmt.Println(a) // \u8F93\u51FA 2\n}\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"defer"})," \u540E\u9762\u5982\u679C\u662F go \u8BED\u53E5\uFF0C\u8FD9\u4E2A go \u8BED\u53E5\u91CC\u9762\u7684\u53D8\u91CF\uFF0C\u5728\u6CE8\u518C\u7684\u65F6\u5019\u5C31\u5DF2\u7ECF\u8BA1\u7B97\u597D\u4E86"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"defer"})," \u540E\u9762\u5982\u679C\u662F\u533F\u540D\u51FD\u6570\uFF0C\u8FD9\u4E2A\u533F\u540D\u51FD\u6570\u8BBE\u8BA1\u5230\u7684\u53D8\u91CF\uFF0C\u662F\u5728\u6267\u884C\u7684\u65F6\u5019\u624D\u4F1A\u8BA1\u7B97\u3002"]})]})}function l(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var r=t(67294);let o={},c=r.createContext(o);function i(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:n},e.children)}},11119:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u8BED\u8A00\u4E2D-defer-\u8BED\u53E5","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-06-19-Go_\u8BED\u8A00\u4E2D_defer_\u8BED\u53E5.md","source":"@site/blog/\u540E\u7AEF/2024-06-19-Go_\u8BED\u8A00\u4E2D_defer_\u8BED\u53E5.md","title":"Go \u8BED\u8A00\u4E2D defer \u8BED\u53E5","description":"Go \u8BED\u8A00\u4E2D\uFF0Cdefer \u8BED\u53E5\u9075\u5FAA\u540E\u8FDB\u5148\u51FA\uFF08LIFO\uFF09\u7684\u539F\u5219\u6267\u884C\u3002\u8FD9\u6837\u505A\u4E3B\u8981\u662F\u4E3A\u4E86\u7B80\u5316\u8D44\u6E90\uFF08\u5982\u6587\u4EF6\u3001\u9501\uFF09\u7684\u7BA1\u7406\uFF0C\u4F7F\u5F97\u8D44\u6E90\u7684\u83B7\u53D6\u548C\u91CA\u653E\u987A\u5E8F\u4FDD\u6301\u4E00\u81F4\uFF0C\u6613\u4E8E\u7EF4\u62A4\u3002","date":"2024-06-19T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.8066666666666666,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u8BED\u8A00\u4E2D-defer-\u8BED\u53E5","title":"Go \u8BED\u8A00\u4E2D defer \u8BED\u53E5","authors":["sumingcheng"],"tags":["backend"],"date":"2024-06-19T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Go fmt \u683C\u5F0F\u5316\u8F93\u51FA","permalink":"/docs-hub/blog/go-fmt-\u683C\u5F0F\u5316\u8F93\u51FA"},"nextItem":{"title":"Go \u8BED\u8A00\u4E2D\u5207\u7247\u7684\u58F0\u660E\u521D\u59CB\u5316\u548C\u64CD\u4F5C\u8BE6\u89E3","permalink":"/docs-hub/blog/go-\u8BED\u8A00\u4E2D\u5207\u7247\u7684\u58F0\u660E\u521D\u59CB\u5316\u548C\u64CD\u4F5C\u8BE6\u89E3"}}')}}]);