"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["85678"],{49480:function(e,n,t){t.r(n),t.d(n,{assets:function(){return r},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var i=t(8152),c=t(85893),o=t(50065);let l={slug:"go-\u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B",title:"Go \u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-04-26T00:00:00.000Z")},s="Go \u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B",r={authorsImageUrls:[void 0]},d=[{value:"\u6269\u5BB9\u64CD\u4F5C",id:"\u6269\u5BB9\u64CD\u4F5C",level:2},{value:"\u4ECE nil \u5207\u7247",id:"\u4ECE-nil-\u5207\u7247",level:2},{value:"\u5207\u7247\u622A\u53D6\u540E\u518D\u6269\u5BB9",id:"\u5207\u7247\u622A\u53D6\u540E\u518D\u6269\u5BB9",level:2},{value:"\u663E\u5F0F\u4F7F\u7528 make \u6307\u5B9A\u521D\u59CB\u5BB9\u91CF",id:"\u663E\u5F0F\u4F7F\u7528-make-\u6307\u5B9A\u521D\u59CB\u5BB9\u91CF",level:2},{value:"\u901A\u8FC7 copy \u521B\u5EFA\u65B0\u5207\u7247",id:"\u901A\u8FC7-copy-\u521B\u5EFA\u65B0\u5207\u7247",level:2}];function a(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u6269\u5BB9\u64CD\u4F5C",children:"\u6269\u5BB9\u64CD\u4F5C"}),"\n",(0,c.jsxs)(n.p,{children:["\u5F53\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"append"})," \u5411\u5207\u7247\u8FFD\u52A0\u5143\u7D20\uFF0C\u4E14\u8FFD\u52A0\u540E\u7684\u603B\u5143\u7D20\u6570\u91CF\u8D85\u51FA\u4E86\u5207\u7247\u7684\u539F\u59CB\u5BB9\u91CF\u65F6\uFF0CGo \u4F1A\u81EA\u52A8\u91CD\u65B0\u5206\u914D\u4E00\u4E2A\u66F4\u5927\u7684\u5E95\u5C42\u6570\u7EC4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"slice := []int{1, 2, 3}\nslice = append(slice, 4, 5, 6, 7)  // \u539F\u59CB\u5BB9\u91CF\u53EF\u80FD\u4E0D\u8DB3\u4EE5\u5B58\u653E\u6240\u6709\u5143\u7D20\uFF0C\u89E6\u53D1\u91CD\u65B0\u5206\u914D\n\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4ECE-nil-\u5207\u7247",children:"\u4ECE nil \u5207\u7247"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:["\u4ECE ",(0,c.jsx)(n.code,{children:"nil"})," \u5207\u7247\u8FDB\u884C ",(0,c.jsx)(n.code,{children:"append"})]})," \u5BF9 ",(0,c.jsx)(n.code,{children:"nil"})," \u5207\u7247\u8FDB\u884C ",(0,c.jsx)(n.code,{children:"append"})," \u64CD\u4F5C\u65F6\uFF0C\u7531\u4E8E ",(0,c.jsx)(n.code,{children:"nil"})," \u5207\u7247\u6CA1\u6709\u5E95\u5C42\u6570\u7EC4\uFF0C\u56E0\u6B64\u4F1A\u5206\u914D\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"var slice []int\nslice = append(slice, 1)  // \u4ECE nil \u5207\u7247\u5F00\u59CB\uFF0C\u5206\u914D\u65B0\u7684\u5E95\u5C42\u6570\u7EC4\n\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5207\u7247\u622A\u53D6\u540E\u518D\u6269\u5BB9",children:"\u5207\u7247\u622A\u53D6\u540E\u518D\u6269\u5BB9"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679C\u5BF9\u4E00\u4E2A\u5207\u7247\u8FDB\u884C\u622A\u53D6\u64CD\u4F5C\uFF0C\u7136\u540E\u57FA\u4E8E\u8FD9\u4E2A\u622A\u53D6\u7684\u7ED3\u679C\u8FDB\u884C ",(0,c.jsx)(n.code,{children:"append"})," \u64CD\u4F5C\uFF0C\u5E76\u4E14\u6240\u9700\u5BB9\u91CF\u8D85\u8FC7\u4E86\u622A\u53D6\u5207\u7247\u7684\u5BB9\u91CF\uFF0C\u8FD9\u540C\u6837\u4F1A\u89E6\u53D1\u91CD\u65B0\u5206\u914D\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"original := []int{1, 2, 3, 4, 5}\nsubSlice := original[:2]  // \u5BB9\u91CF\u4ECD\u7136\u662F 5\nsubSlice = append(subSlice, 6, 7, 8, 9, 10, 11)  // \u5BB9\u91CF\u8D85\u8F7D\uFF0C\u9700\u8981\u91CD\u65B0\u5206\u914D\n\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u663E\u5F0F\u4F7F\u7528-make-\u6307\u5B9A\u521D\u59CB\u5BB9\u91CF",children:"\u663E\u5F0F\u4F7F\u7528 make \u6307\u5B9A\u521D\u59CB\u5BB9\u91CF"}),"\n",(0,c.jsxs)(n.p,{children:["\u5F53\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"make"})," \u521B\u5EFA\u5207\u7247\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u521D\u59CB\u5BB9\u91CF\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u521B\u5EFA\u7684\u5207\u7247\u5C06\u62E5\u6709\u72EC\u7ACB\u7684\u5E95\u5C42\u6570\u7EC4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"slice := make([]int, 0, 10)  // \u521B\u5EFA\u4E00\u4E2A\u521D\u59CB\u5BB9\u91CF\u4E3A 10 \u7684\u7A7A\u5207\u7247\n\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u901A\u8FC7-copy-\u521B\u5EFA\u65B0\u5207\u7247",children:"\u901A\u8FC7 copy \u521B\u5EFA\u65B0\u5207\u7247"}),"\n",(0,c.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"copy"})," \u51FD\u6570\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5B8C\u5168\u72EC\u7ACB\u7684\u5207\u7247\u526F\u672C\uFF0C\u8BE5\u526F\u672C\u5C06\u62E5\u6709\u81EA\u5DF1\u7684\u5E95\u5C42\u6570\u7EC4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"original := []int{1, 2, 3}\nclone := make([]int, len(original))\ncopy(clone, original)  // clone \u73B0\u5728\u6709\u4E86\u4E00\u4E2A\u5B8C\u5168\u72EC\u7ACB\u7684\u5E95\u5C42\u6570\u7EC4\n\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6C42\u8D5E~"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(67294);let c={},o=i.createContext(c);function l(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),i.createElement(o.Provider,{value:n},e.children)}},8152:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-04-26-Go_\u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B.md","source":"@site/blog/\u540E\u7AEF/2024-04-26-Go_\u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B.md","title":"Go \u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B","description":"\u6269\u5BB9\u64CD\u4F5C","date":"2024-04-26T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.31,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B","title":"Go \u5207\u7247\u5E95\u5C42\u6570\u7EC4\u7684\u91CD\u65B0\u5206\u914D\u60C5\u51B5\u4E0E\u793A\u4F8B","authors":["sumingcheng"],"tags":["backend"],"date":"2024-04-26T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u89E3\u51B3 Go \u4E2D\u7ED3\u6784\u4F53\u6210\u5458\u4E0D\u80FD\u4FEE\u6539\u7684\u95EE\u9898\u7684\u4E24\u79CD\u65B9\u6CD5","permalink":"/docs-hub/blog/\u89E3\u51B3-go-\u4E2D\u7ED3\u6784\u4F53\u6210\u5458\u4E0D\u80FD\u4FEE\u6539\u7684\u95EE\u9898\u7684\u4E24\u79CD\u65B9\u6CD5"},"nextItem":{"title":"Go \u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528 defer \u65F6\u7684\u4E0D\u540C\u8868\u73B0","permalink":"/docs-hub/blog/go-\u547D\u540D\u8FD4\u56DE\u503C\u548C\u975E\u547D\u540D\u8FD4\u56DE\u503C\u5728\u4F7F\u7528-defer-\u65F6\u7684\u4E0D\u540C\u8868\u73B0"}}')}}]);