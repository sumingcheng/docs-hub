"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["88282"],{24180:function(n,e,t){t.r(e),t.d(e,{assets:function(){return a},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var i=t(25476),c=t(85893),r=t(50065);let l={slug:"go-\u5207\u7247\u7F29\u5BB9",title:"Go \u5207\u7247\u7F29\u5BB9",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-07-31T00:00:00.000Z")},o="Go \u5207\u7247\u7F29\u5BB9",a={authorsImageUrls:[void 0]},s=[{value:"\u521B\u5EFA\u65B0\u5207\u7247\u5E76\u62F7\u8D1D\u6570\u636E",id:"\u521B\u5EFA\u65B0\u5207\u7247\u5E76\u62F7\u8D1D\u6570\u636E",level:3},{value:"\u5229\u7528 append \u51FD\u6570",id:"\u5229\u7528-append-\u51FD\u6570",level:3},{value:"\u4F7F\u7528\u5168\u5C40\u5207\u7247\u91CD\u65B0\u5207\u7247",id:"\u4F7F\u7528\u5168\u5C40\u5207\u7247\u91CD\u65B0\u5207\u7247",level:3},{value:"\u7F29\u5BB9\u540E\uFF0C\u5C3D\u91CF\u5C11\u7684\u4F7F\u7528 CPU",id:"\u7F29\u5BB9\u540E\u5C3D\u91CF\u5C11\u7684\u4F7F\u7528-cpu",level:3}];function u(n){let e={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.p,{children:"\u5728 Go \u4E2D\uFF0C\u7531\u4E8E\u5207\u7247\u5E95\u5C42\u4F7F\u7528\u6570\u7EC4\u5B9E\u73B0\uFF0C\u771F\u6B63\u7684\u7F29\u5BB9\u901A\u5E38\u6307\u7684\u662F\u51CF\u5C11\u5207\u7247\u7684\u5BB9\u91CF\uFF0C\u4EE5\u91CA\u653E\u4E0D\u9700\u8981\u7684\u5185\u5B58\u3002\u8FD9\u901A\u5E38\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5207\u7247\u5E76\u590D\u5236\u6240\u9700\u6570\u636E\u6765\u5B9E\u73B0\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u521B\u5EFA\u65B0\u5207\u7247\u5E76\u62F7\u8D1D\u6570\u636E",children:"\u521B\u5EFA\u65B0\u5207\u7247\u5E76\u62F7\u8D1D\u6570\u636E"}),"\n",(0,c.jsx)(e.p,{children:"\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5207\u7247\uFF0C\u5E76\u4E14\u5C06\u65E7\u5207\u7247\u7684\u6570\u636E\u590D\u5236\u5230\u8FD9\u4E2A\u65B0\u7684\u5207\u7247\u4E2D\u3002\u65B0\u5207\u7247\u7684\u5BB9\u91CF\u548C\u957F\u5EA6\u88AB\u7CBE\u786E\u63A7\u5236\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u6CE8\u610F\uFF0C\u8FD9\u91CC\u4F7F\u7528",(0,c.jsx)(e.code,{children:"make([]Type, len, cap)"}),"\u521B\u5EFA\u65B0\u7684\u5207\u7247\u65F6\uFF0CGo \u8FD0\u884C\u65F6\u4F1A\u5206\u914D\u4E00\u4E2A\u5168\u65B0\u7684\u5E95\u5C42\u6570\u7EC4\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u8FD9\u79CD\u65B9\u5F0F\u662F\u5728\u4F60\u6C38\u8FDC\u4E0D\u4F1A\u8BA9\u8FD9\u4E2A\u5207\u7247\u518D\u6269\u5BB9\u7684\u65F6\u5019\u4F7F\u7528\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"func ShrinkSlice(original []int, newLength int) []int {\n    if newLength > len(original) {\n        newLength = len(original)\n    }\n    newSlice := make([]int, newLength, newLength) // \u8BBE\u7F6E\u65B0\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\n    copy(newSlice, original[:newLength])\n    return newSlice\n}\n\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u5229\u7528-append-\u51FD\u6570",children:"\u5229\u7528 append \u51FD\u6570"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"append"})," \u51FD\u6570\u53EF\u4EE5\u5728\u589E\u52A0\u5207\u7247\u957F\u5EA6\u7684\u540C\u65F6\u63A7\u5236\u5176\u5BB9\u91CF\u3002\u5982\u679C\u5728\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:"append"})," \u65F6\u5F00\u59CB\u4E00\u4E2A\u65B0\u7684\u5207\u7247\uFF08nil \u5207\u7247\uFF09\uFF0CGo \u7684\u7F16\u8BD1\u5668\u548C\u8FD0\u884C\u65F6\u4F1A\u4F18\u5316\u5185\u5B58\u5206\u914D\uFF0C\u901A\u5E38\u53EA\u4F1A\u5206\u914D\u5230\u6240\u9700\u7684\u5BB9\u91CF\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u8FD9\u91CC",(0,c.jsx)(e.code,{children:"append"}),"\u51FD\u6570\u5728\u6DFB\u52A0\u5143\u7D20\u8D85\u8FC7\u539F\u59CB\u5207\u7247\u5BB9\u91CF\u65F6\u4F1A\u81EA\u52A8\u5206\u914D\u65B0\u7684\u5E95\u5C42\u6570\u7EC4\uFF0C\u5E76\u590D\u5236\u539F\u59CB\u6570\u636E\u5230\u65B0\u6570\u7EC4\u3002\u5373\u4F7F\u5F00\u59CB\u65F6\u6307\u5B9A\u4E86\u5BB9\u91CF\uFF0C",(0,c.jsx)(e.code,{children:"append"}),"\u64CD\u4F5C\u4ECD\u53EF\u80FD\u89E6\u53D1\u65B0\u6570\u7EC4\u7684\u521B\u5EFA\uFF0C\u8FD9\u662F\u4E3A\u4E86\u4FDD\u8BC1\u5207\u7247\u7684\u6269\u5C55\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u4F9D\u8D56\u539F\u6570\u7EC4\u7684\u5207\u7247\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"func ShrinkSliceUsingAppend(original []int, newLength int) []int {\n    if newLength > len(original) {\n        newLength = len(original)\n    }\n    newSlice := make([]int, 0, newLength) // \u521B\u5EFA\u4E00\u4E2A\u5BB9\u91CF\u4E3AnewLength\u7684\u7A7A\u5207\u7247\n    newSlice = append(newSlice, original[:newLength]...)\n    return newSlice\n}\n\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u4F7F\u7528\u5168\u5C40\u5207\u7247\u91CD\u65B0\u5207\u7247",children:"\u4F7F\u7528\u5168\u5C40\u5207\u7247\u91CD\u65B0\u5207\u7247"}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679C\u4E0D\u62C5\u5FC3\u539F\u59CB\u6570\u636E\u7684\u4FDD\u62A4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u91CD\u65B0\u5207\u7247\uFF08reslicing\uFF09\u64CD\u4F5C\u76F4\u63A5\u5728\u539F\u5207\u7247\u4E0A\u64CD\u4F5C\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u4E0D\u9700\u8981\u989D\u5916\u7684\u5185\u5B58\u5206\u914D\uFF0C\u4F46\u662F\u9700\u8981\u624B\u52A8\u7BA1\u7406\u539F\u59CB\u6570\u636E\u3002\uFF08\u4F7F\u7528\u5168\u5C40\u5207\u7247\u91CD\u65B0\u5207\u7247\uFF09\u4F1A\u4FDD\u6301\u4E0E\u539F\u59CB\u5E95\u5C42\u6570\u7EC4\u7684\u76F4\u63A5\u8054\u7CFB\uFF0C\u800C\u524D\u4E24\u79CD\u65B9\u6CD5\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5E95\u5C42\u6570\u7EC4\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"func ShrinkSliceInPlace(original []int, newLength int) []int {\n    if newLength > len(original) {\n        newLength = len(original)\n    }\n    return original[:newLength:newLength] // \u8BBE\u7F6E\u65B0\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u76F8\u540C\n}\n\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u7F29\u5BB9\u540E\u5C3D\u91CF\u5C11\u7684\u4F7F\u7528-cpu",children:"\u7F29\u5BB9\u540E\uFF0C\u5C3D\u91CF\u5C11\u7684\u4F7F\u7528 CPU"}),"\n",(0,c.jsx)(e.p,{children:"\u6574\u4E2A\u5B9E\u73B0\u7684\u6838\u5FC3\u662F\u5E0C\u671B\u5728\u540E\u7EED\u5C11\u89E6\u53D1\u6269\u5BB9\u7684\u524D\u63D0\u4E0B,\u4E00\u6B21\u6027\u91CA\u653E\u5C3D\u53EF\u80FD\u591A\u7684\u5185\u5B58"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"func calCapacity(c, l int) (int, bool) { // usage = Deng Ming\n    // \u5BB9\u91CF <=64 \u7F29\u4E0D\u7F29\u90FD\u65E0\u6240\u8C13, \u56E0\u4E3A\u6D6A\u8D39\u5185\u5B58\u4E5F\u6D6A\u8D39\u4E0D\u4E86\u591A\u5C11\n    // \u4F60\u53EF\u4EE5\u8003\u8651\u8C03\u5927\u8FD9\u4E2A\u9608\u503C, \u6216\u8005\u8C03\u5C0F\u8FD9\u4E2A\u9608\u503C\n    if c <= 64 {\n        return c, false\n    }\n    // \u5982\u679C\u5BB9\u91CF\u5927\u4E8E 2048, \u4F46\u662F\u5143\u7D20\u4E0D\u8DB3\u4E00\u534A,\n    // \u964D\u4F4E\u4E3A 0.625, \u4E5F\u5C31\u662F 5/8\n    // \u4E5F\u5C31\u662F\u6BD4\u4E00\u534A\u591A\u4E00\u70B9, \u548C\u6B63\u5411\u6269\u5BB9\u7684 1.25 \u500D\u76F8\u547C\u5E94\n    if c > 2048 && (c/l >= 2) {\n        factor := 0.625\n        return int(float32(c) * float32(factor)), true\n    }\n    // \u5982\u679C\u5728 2048 \u4EE5\u5185, \u5E76\u4E14\u5143\u7D20\u4E0D\u8DB3 1/4, \u90A3\u4E48\u76F4\u63A5\u7F29\u51CF\u4E3A\u4E00\u534A\n    if c <= 2048 && (c/l >= 4) {\n        return c / 2, true\n    }\n    return c, false\n}\n\n"})})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var i=t(67294);let c={},r=i.createContext(c);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),i.createElement(r.Provider,{value:e},n.children)}},25476:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u5207\u7247\u7F29\u5BB9","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-07-31-Go_\u5207\u7247\u7F29\u5BB9.md","source":"@site/blog/\u540E\u7AEF/2024-07-31-Go_\u5207\u7247\u7F29\u5BB9.md","title":"Go \u5207\u7247\u7F29\u5BB9","description":"\u5728 Go \u4E2D\uFF0C\u7531\u4E8E\u5207\u7247\u5E95\u5C42\u4F7F\u7528\u6570\u7EC4\u5B9E\u73B0\uFF0C\u771F\u6B63\u7684\u7F29\u5BB9\u901A\u5E38\u6307\u7684\u662F\u51CF\u5C11\u5207\u7247\u7684\u5BB9\u91CF\uFF0C\u4EE5\u91CA\u653E\u4E0D\u9700\u8981\u7684\u5185\u5B58\u3002\u8FD9\u901A\u5E38\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5207\u7247\u5E76\u590D\u5236\u6240\u9700\u6570\u636E\u6765\u5B9E\u73B0\u3002","date":"2024-07-31T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":2.5833333333333335,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u5207\u7247\u7F29\u5BB9","title":"Go \u5207\u7247\u7F29\u5BB9","authors":["sumingcheng"],"tags":["backend"],"date":"2024-07-31T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Go bcrypt \u52A0\u5BC6\u548C\u9A8C\u8BC1","permalink":"/docs-hub/blog/go-bcrypt-\u52A0\u5BC6\u548C\u9A8C\u8BC1"},"nextItem":{"title":"Vault \u521D\u59CB\u5316\u4E0E\u914D\u7F6E","permalink":"/docs-hub/blog/vault-\u521D\u59CB\u5316\u4E0E\u914D\u7F6E"}}')}}]);