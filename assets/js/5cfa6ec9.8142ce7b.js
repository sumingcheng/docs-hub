"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["86032"],{86079:function(n,e,t){t.r(e),t.d(e,{assets:function(){return a},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return u}});var r=t(35597),s=t(85893),o=t(50065);let i={slug:"\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B",title:"\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B",authors:["sumingcheng"],tags:["performance-architecture"],date:new Date("2023-10-20T00:00:00.000Z")},c="\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B",a={authorsImageUrls:[void 0]},u=[];function l(n){let e={code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u51CF\u5C11\u5F00\u9500"}),"\uFF1A\u7EBF\u7A0B\u7684\u521B\u5EFA\u548C\u9500\u6BC1\u6D89\u53CA\u5185\u5B58\u5206\u914D\u548C\u91CA\u653E\uFF0C\u4EE5\u53CA\u76F8\u5173\u7CFB\u7EDF\u8D44\u6E90\u7684\u521D\u59CB\u5316\u548C\u6E05\u7406\uFF0C\u8FD9\u4E9B\u90FD\u662F\u6709\u65F6\u95F4\u548C\u7A7A\u95F4\u5F00\u9500\u7684\u3002\u901A\u8FC7\u91CD\u7528\u7EBF\u7A0B\uFF0C\u53EF\u4EE5\u907F\u514D\u8FD9\u4E9B\u5F00\u9500\uFF0C\u4ECE\u800C\u63D0\u9AD8\u7CFB\u7EDF\u6548\u7387\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63D0\u9AD8\u54CD\u5E94\u901F\u5EA6"}),"\uFF1A\u73B0\u6210\u7684\u7A7A\u95F2\u7EBF\u7A0B\u53EF\u4EE5\u7ACB\u5373\u88AB\u5206\u914D\u6765\u5904\u7406\u65B0\u7684\u4EFB\u52A1\uFF0C\u907F\u514D\u4E86\u7EBF\u7A0B\u521B\u5EFA\u7684\u5EF6\u65F6\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4E86\u7CFB\u7EDF\u7684\u54CD\u5E94\u901F\u5EA6\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u964D\u4F4E\u5185\u5B58\u788E\u7247\u5316"}),"\uFF1A\u9891\u7E41\u7684\u5185\u5B58\u5206\u914D\u548C\u91CA\u653E\u53EF\u80FD\u5BFC\u81F4\u5185\u5B58\u788E\u7247\u5316\uFF0C\u5F71\u54CD\u5185\u5B58\u5229\u7528\u7387\u3002\u7EBF\u7A0B\u91CD\u7528\u901A\u8FC7\u51CF\u5C11\u5185\u5B58\u5206\u914D\u548C\u91CA\u653E\u9891\u7387\uFF0C\u6709\u52A9\u4E8E\u964D\u4F4E\u5185\u5B58\u788E\u7247\u5316\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8282\u7EA6\u7CFB\u7EDF\u8D44\u6E90"}),"\uFF1A\u6BCF\u4E2A\u7EBF\u7A0B\u7684\u521B\u5EFA\u90FD\u4F1A\u5360\u7528\u4E00\u5B9A\u7684\u7CFB\u7EDF\u8D44\u6E90\u3002\u7EBF\u7A0B\u91CD\u7528\u53EF\u4EE5\u8282\u7EA6\u8FD9\u4E9B\u8D44\u6E90\uFF0C\u63D0\u5347\u7CFB\u7EDF\u7684\u6269\u5C55\u6027\u548C\u7A33\u5B9A\u6027\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package main\n\nimport (\n	"fmt"\n	"sync"\n)\n\n// \u4EFB\u52A1\ntype Task struct {\n	id int\n}\n\n// worker\u51FD\u6570\uFF0C\u5904\u7406\u4EFB\u52A1\nfunc worker(id int, tasks <-chan Task, wg *sync.WaitGroup) {\n	defer wg.Done()  // \u5728\u51FD\u6570\u9000\u51FA\u65F6\uFF0C\u901A\u77E5WaitGroup\u4E00\u4E2A\u4EFB\u52A1\u5DF2\u5B8C\u6210\n\n	for task := range tasks {  // \u5FAA\u73AF\u4ECE\u4EFB\u52A1\u901A\u9053\u63A5\u6536\u4EFB\u52A1\u5E76\u5904\u7406\n		fmt.Printf("Worker %d processing task %d\\n", id, task.id)\n	}\n}\n\nfunc main() {\n	const numWorkers = 5  // \u5B9A\u4E49worker\u6570\u91CF\n	const numTasks = 10   // \u5B9A\u4E49\u4EFB\u52A1\u6570\u91CF\n\n	tasks := make(chan Task, numTasks)  // \u521B\u5EFA\u4EFB\u52A1\u901A\u9053\n	var wg sync.WaitGroup  // \u521B\u5EFA\u4E00\u4E2AWaitGroup\u4EE5\u7B49\u5F85\u6240\u6709\u4EFB\u52A1\u5B8C\u6210\n\n	// \u542F\u52A8worker goroutines\n	for i := 1; i <= numWorkers; i++ {\n		wg.Add(1)  // \u4E3A\u6BCF\u4E2Aworker\u589E\u52A0\u4E00\u4E2A\u4EFB\u52A1\u8BA1\u6570\n		go worker(i, tasks, &wg)  // \u542F\u52A8worker\n	}\n\n	// \u5C06\u4EFB\u52A1\u53D1\u9001\u5230\u4EFB\u52A1\u901A\u9053\n	for i := 1; i <= numTasks; i++ {\n		tasks <- Task{id: i}\n	}\n\n	close(tasks)  // \u5173\u95ED\u4EFB\u52A1\u901A\u9053\uFF0C\u901A\u77E5\u6240\u6709worker\u6CA1\u6709\u66F4\u591A\u4EFB\u52A1\n	wg.Wait()     // \u7B49\u5F85\u6240\u6709\u4EFB\u52A1\u5B8C\u6210\n}\n\n'})})]})}function g(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var r=t(67294);let s={},o=r.createContext(s);function i(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(o.Provider,{value:e},n.children)}},35597:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784/2023-10-20-\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B.md","source":"@site/blog/\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784/2023-10-20-\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B.md","title":"\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B","description":"\u51CF\u5C11\u5F00\u9500\uFF1A\u7EBF\u7A0B\u7684\u521B\u5EFA\u548C\u9500\u6BC1\u6D89\u53CA\u5185\u5B58\u5206\u914D\u548C\u91CA\u653E\uFF0C\u4EE5\u53CA\u76F8\u5173\u7CFB\u7EDF\u8D44\u6E90\u7684\u521D\u59CB\u5316\u548C\u6E05\u7406\uFF0C\u8FD9\u4E9B\u90FD\u662F\u6709\u65F6\u95F4\u548C\u7A7A\u95F4\u5F00\u9500\u7684\u3002\u901A\u8FC7\u91CD\u7528\u7EBF\u7A0B\uFF0C\u53EF\u4EE5\u907F\u514D\u8FD9\u4E9B\u5F00\u9500\uFF0C\u4ECE\u800C\u63D0\u9AD8\u7CFB\u7EDF\u6548\u7387\u3002","date":"2023-10-20T00:00:00.000Z","tags":[{"inline":false,"label":"\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784","permalink":"/docs-hub/blog/tags/performance-architecture","description":"\u6027\u80FD\u4F18\u5316\u548C\u7CFB\u7EDF\u67B6\u6784\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.52,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B","title":"\u4E3A\u4EC0\u4E48\u8981\u91CD\u7528\u7EBF\u7A0B","authors":["sumingcheng"],"tags":["performance-architecture"],"date":"2023-10-20T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u89E3\u6790 Go \u8BED\u8A00\u7684 GMP \u5E76\u53D1\u6A21\u578B","permalink":"/docs-hub/blog/\u89E3\u6790-go-\u8BED\u8A00\u7684-gmp-\u5E76\u53D1\u6A21\u578B"},"nextItem":{"title":"\u4EC0\u4E48\u662F\u8F6E\u8F6C\u65F6\u95F4\u7247Round Robin Time Slice","permalink":"/docs-hub/blog/\u4EC0\u4E48\u662F\u8F6E\u8F6C\u65F6\u95F4\u7247round-robin-time-slice"}}')}}]);