"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["27392"],{75827:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var i=t(60487),r=t(85893),l=t(50065);let s={slug:"\u7B97\u6CD5\u4E2D\u7684\u5927o\u8868\u793A\u6CD5big-o-notation",title:"\u7B97\u6CD5\u4E2D\u7684\u5927O\u8868\u793A\u6CD5Big O notation",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-07-07T00:00:00.000Z")},o="\u7B97\u6CD5\u4E2D\u7684\u5927O\u8868\u793A\u6CD5\uFF08Big O notation\uFF09",c={authorsImageUrls:[void 0]},u=[{value:"\u4E0D\u8003\u8651\u7684\u56E0\u7D20",id:"\u4E0D\u8003\u8651\u7684\u56E0\u7D20",level:2},{value:"O(1) - \u5E38\u6570\u65F6\u95F4\u590D\u6742\u5EA6",id:"o1---\u5E38\u6570\u65F6\u95F4\u590D\u6742\u5EA6",level:3},{value:"O(log n) - \u5BF9\u6570\u65F6\u95F4\u590D\u6742\u5EA6",id:"olog-n---\u5BF9\u6570\u65F6\u95F4\u590D\u6742\u5EA6",level:3},{value:"O(n) - \u7EBF\u6027\u65F6\u95F4\u590D\u6742\u5EA6",id:"on---\u7EBF\u6027\u65F6\u95F4\u590D\u6742\u5EA6",level:3},{value:"O(n log n) - \u7EBF\u6027\u5BF9\u6570\u65F6\u95F4\u590D\u6742\u5EA6",id:"on-log-n---\u7EBF\u6027\u5BF9\u6570\u65F6\u95F4\u590D\u6742\u5EA6",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u5927O\u8868\u793A\u6CD5\uFF08Big O notation\uFF09\u6E90\u81EA\u6570\u5B66\u4E2D\u7684\u201C\u6E10\u8FDB\u7B26\u53F7\u201D\uFF0C\u7528\u6765\u63CF\u8FF0\u51FD\u6570\u5F53\u8F93\u5165\u503C\u8D8B\u5411\u65E0\u7A77\u5927\u65F6\u7684\u589E\u957F\u7387 \u5728\u7B97\u6CD5\u5206\u6790\u4E2D\uFF0C\u6211\u4EEC\u901A\u5E38\u5173\u6CE8\u6700\u574F\u60C5\u51B5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u5373\u8F93\u5165\u6570\u636E\u91CF\u6781\u5927\u65F6\uFF0C\u7B97\u6CD5\u6267\u884C\u65F6\u95F4\u7684\u4E0A\u754C"}),"\n",(0,r.jsxs)(e.p,{children:["\u8FD9\u79CD\u8868\u793A\u6CD5\u7684\u91CD\u70B9\u662F\u5E2E\u52A9\u6211\u4EEC\u62BD\u8C61\u5316\u7B97\u6CD5\u7684\u6027\u80FD\uFF0C\u5FFD\u7565\u5177\u4F53\u5B9E\u73B0\u7684\u7EC6\u8282\u548C\u4F4E\u9636\u589E\u957F\uFF0C\u53EA\u5173\u6CE8\u4E3B\u5BFC\u884C\u4E3A \u4F8B\u5982\uFF0C\u4E00\u4E2A\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u53EF\u80FD\u662F ",(0,r.jsx)(e.code,{children:"3n^2 + 5n + 7"}),"\uFF0C\u4F46\u6211\u4EEC\u4F1A\u7528 O(n^2) \u6765\u63CF\u8FF0\u5B83\uFF0C\u56E0\u4E3A\u5F53 n \u8DB3\u591F\u5927\u65F6\uFF0Cn^2 \u9879\u662F\u51B3\u5B9A\u6027\u56E0\u7D20"]}),"\n",(0,r.jsx)(e.p,{children:"\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u5927O\u8868\u793A\u6CD5\u4E3A\u7B97\u6CD5\u8BBE\u8BA1\u548C\u5206\u6790\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6E05\u6670\u3001\u4E00\u81F4\u7684\u6846\u67B6\uFF0C\u4F7F\u5F97\u4E0D\u540C\u7B97\u6CD5\u95F4\u7684\u6BD4\u8F83\u548C\u9009\u62E9\u66F4\u52A0\u57FA\u4E8E\u7406\u8BBA\u548C\u6570\u5B66\u57FA\u7840\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u7ECF\u9A8C \u8FD9\u6709\u52A9\u4E8E\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u4F18\u5316\u6027\u80FD\u548C\u8D44\u6E90\u4F7F\u7528"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E0D\u8003\u8651\u7684\u56E0\u7D20",children:"\u4E0D\u8003\u8651\u7684\u56E0\u7D20"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5177\u4F53\u6267\u884C\u65F6\u95F4"}),"\uFF1A\u5927O\u4E0D\u5173\u5FC3\u7B97\u6CD5\u6267\u884C\u7684\u5177\u4F53\u79D2\u6570\uFF0C\u56E0\u4E3A\u8FD9\u53D7\u5230\u592A\u591A\u5916\u90E8\u56E0\u7D20\u7684\u5F71\u54CD\uFF0C\u5982\u5904\u7406\u5668\u901F\u5EA6\u3001\u7CFB\u7EDF\u8D1F\u8F7D\u3001\u7F16\u8BD1\u5668\u4F18\u5316\u7B49"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7CFB\u6570\u548C\u4F4E\u9636\u9879"}),"\uFF1A\u5728\u5927O\u8868\u793A\u6CD5\u4E2D\uFF0C\u5FFD\u7565\u7CFB\u6570\u548C\u4F4E\u9636\u9879\u662F\u56E0\u4E3A\u5B83\u4EEC\u5BF9\u4E8E\u5927\u89C4\u6A21\u6570\u636E\u7684\u5F71\u54CD\u8F83\u5C0F"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5E38\u6570\u65F6\u95F4"}),"\uFF1A\u5373\u4F7F\u67D0\u4E9B\u64CD\u4F5C\uFF08\u5982\u6570\u636E\u590D\u5236\u3001\u79FB\u52A8\u7B49\uFF09\u5728\u5B9E\u9645\u6267\u884C\u4E2D\u9700\u8981\u65F6\u95F4\uFF0C\u5927O\u5206\u6790\u4E2D\u5E38\u5E38\u5047\u8BBE\u8FD9\u4E9B\u64CD\u4F5C\u7684\u65F6\u95F4\u662F\u5E38\u6570\uFF0C\u5E76\u805A\u7126\u4E8E\u53D8\u5316\u6700\u663E\u8457\u7684\u90E8\u5206"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{alt:"b05eef6228a03d66e8ceaecd60db87db",src:t(4855).Z+"",width:"1440",height:"929"}),"## Go \u8BED\u8A00\u793A\u4F8B"]}),"\n",(0,r.jsx)(e.h3,{id:"o1---\u5E38\u6570\u65F6\u95F4\u590D\u6742\u5EA6",children:"O(1) - \u5E38\u6570\u65F6\u95F4\u590D\u6742\u5EA6"}),"\n",(0,r.jsx)(e.p,{children:"\u64CD\u4F5C\u7684\u6267\u884C\u65F6\u95F4\u4E0D\u4F9D\u8D56\u4E8E\u8F93\u5165\u6570\u636E\u7684\u5927\u5C0F \u4F8B\u5982\uFF0C\u8BBF\u95EE\u6570\u7EC4\u4E2D\u7684\u7279\u5B9A\u5143\u7D20"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func getFirstElement(elements []int) int {\n    return elements[0] // \u603B\u662F\u8FD4\u56DE\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\n}\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"olog-n---\u5BF9\u6570\u65F6\u95F4\u590D\u6742\u5EA6",children:"O(log n) - \u5BF9\u6570\u65F6\u95F4\u590D\u6742\u5EA6"}),"\n",(0,r.jsx)(e.p,{children:"\u901A\u5E38\u89C1\u4E8E\u201C\u5206\u800C\u6CBB\u4E4B\u201D\u7684\u7B56\u7565\uFF0C\u5982\u4E8C\u5206\u641C\u7D22"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func binarySearch(slice []int, target int) int {\n    low := 0\n    high := len(slice) - 1\n\u200B\n    for low <= high {\n        mid := low + (high-low)/2\n        if slice[mid] < target {\n            low = mid + 1\n        } else if slice[mid] > target {\n            high = mid - 1\n        } else {\n            return mid\n        }\n    }\n    return -1\n}\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"on---\u7EBF\u6027\u65F6\u95F4\u590D\u6742\u5EA6",children:"O(n) - \u7EBF\u6027\u65F6\u95F4\u590D\u6742\u5EA6"}),"\n",(0,r.jsx)(e.p,{children:"\u64CD\u4F5C\u7684\u6267\u884C\u65F6\u95F4\u4E0E\u8F93\u5165\u6570\u636E\u7684\u5927\u5C0F\u6210\u6B63\u6BD4 \u4F8B\u5982\uFF0C\u8BA1\u7B97\u6240\u6709\u5143\u7D20\u7684\u603B\u548C"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func sumElements(elements []int) int {\n    sum := 0\n    for _, v := range elements {\n        sum += v\n    }\n    return sum\n}\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"on-log-n---\u7EBF\u6027\u5BF9\u6570\u65F6\u95F4\u590D\u6742\u5EA6",children:"O(n log n) - \u7EBF\u6027\u5BF9\u6570\u65F6\u95F4\u590D\u6742\u5EA6"}),"\n",(0,r.jsx)(e.p,{children:"\u5E38\u89C1\u4E8E\u67D0\u4E9B\u9AD8\u6548\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u5982\u5F52\u5E76\u6392\u5E8F"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func merge(left, right []int) []int {\n    result := make([]int, 0, len(left)+len(right))\n    for len(left) > 0 && len(right) > 0 {\n        if left[0] < right[0] {\n            result = append(result, left[0])\n            left = left[1:]\n        } else {\n            result = append(result, right[0])\n            right = right[1:]\n        }\n    }\n    result = append(result, left...)\n    result = append(result, right...)\n    return result\n}\n\u200B\nfunc mergeSort(elements []int) []int {\n    if len(elements) < 2 {\n        return elements\n    }\n    mid := len(elements) / 2\n    return merge(mergeSort(elements[:mid]), mergeSort(elements[mid:]))\n}\n\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},4855:function(n,e,t){t.d(e,{Z:function(){return i}});let i=t.p+"assets/images/b05eef6228a03d66e8ceaecd60db87db-09378783b4b8852048784236035db814.jpg"},50065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return s}});var i=t(67294);let r={},l=i.createContext(r);function s(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(l.Provider,{value:e},n.children)}},60487:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u7B97\u6CD5\u4E2D\u7684\u5927o\u8868\u793A\u6CD5big-o-notation","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-07-07-\u7B97\u6CD5\u4E2D\u7684\u5927O\u8868\u793A\u6CD5Big_O_notation.md","source":"@site/blog/\u540E\u7AEF/2024-07-07-\u7B97\u6CD5\u4E2D\u7684\u5927O\u8868\u793A\u6CD5Big_O_notation.md","title":"\u7B97\u6CD5\u4E2D\u7684\u5927O\u8868\u793A\u6CD5Big O notation","description":"\u5927O\u8868\u793A\u6CD5\uFF08Big O notation\uFF09\u6E90\u81EA\u6570\u5B66\u4E2D\u7684\u201C\u6E10\u8FDB\u7B26\u53F7\u201D\uFF0C\u7528\u6765\u63CF\u8FF0\u51FD\u6570\u5F53\u8F93\u5165\u503C\u8D8B\u5411\u65E0\u7A77\u5927\u65F6\u7684\u589E\u957F\u7387 \u5728\u7B97\u6CD5\u5206\u6790\u4E2D\uFF0C\u6211\u4EEC\u901A\u5E38\u5173\u6CE8\u6700\u574F\u60C5\u51B5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u5373\u8F93\u5165\u6570\u636E\u91CF\u6781\u5927\u65F6\uFF0C\u7B97\u6CD5\u6267\u884C\u65F6\u95F4\u7684\u4E0A\u754C","date":"2024-07-07T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":2.42,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u7B97\u6CD5\u4E2D\u7684\u5927o\u8868\u793A\u6CD5big-o-notation","title":"\u7B97\u6CD5\u4E2D\u7684\u5927O\u8868\u793A\u6CD5Big O notation","authors":["sumingcheng"],"tags":["backend"],"date":"2024-07-07T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u5E38\u89C1\u7684\u8BBF\u95EE\u63A7\u5236\u6A21\u578B\u548C\u8868\u7ED3\u6784","permalink":"/docs-hub/blog/\u5E38\u89C1\u7684\u8BBF\u95EE\u63A7\u5236\u6A21\u578B\u548C\u8868\u7ED3\u6784"},"nextItem":{"title":"\u9759\u6001\u94FE\u63A5\u5E93Static Libraries\u548C\u52A8\u6001\u94FE\u63A5\u5E93Dynamic Libraries","permalink":"/docs-hub/blog/\u9759\u6001\u94FE\u63A5\u5E93static-libraries\u548C\u52A8\u6001\u94FE\u63A5\u5E93dynamic-libraries"}}')}}]);