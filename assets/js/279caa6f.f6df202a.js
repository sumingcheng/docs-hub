"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["2356"],{19605:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return a},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var o=t(37530),s=t(85893),c=t(50065);let r={slug:"go-\u8BED\u8A00\u7684-go-get-\u547D\u4EE4\u65F6\u7981\u7528\u6A21\u5757\u7684\u54C8\u5E0C\u6821\u9A8C\u529F\u80FD",title:"Go \u8BED\u8A00\u7684 go get \u547D\u4EE4\u65F6\u7981\u7528\u6A21\u5757\u7684\u54C8\u5E0C\u6821\u9A8C\u529F\u80FD",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-07-01T00:00:00.000Z")},i="Go \u8BED\u8A00\u7684 go get \u547D\u4EE4\u65F6\u7981\u7528\u6A21\u5757\u7684\u54C8\u5E0C\u6821\u9A8C\u529F\u80FD",l={authorsImageUrls:[void 0]},u=[{value:"GOSUMDB \u73AF\u5883\u53D8\u91CF",id:"gosumdb-\u73AF\u5883\u53D8\u91CF",level:3},{value:"\u7981\u7528\u54C8\u5E0C\u6821\u9A8C",id:"\u7981\u7528\u54C8\u5E0C\u6821\u9A8C",level:3},{value:"\u8BBE\u7F6E\u65B9\u6CD5",id:"\u8BBE\u7F6E\u65B9\u6CD5",level:3},{value:"\u63D0\u793A~",id:"\u63D0\u793A",level:3},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:3}];function d(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"gosumdb-\u73AF\u5883\u53D8\u91CF",children:"GOSUMDB \u73AF\u5883\u53D8\u91CF"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GOSUMDB"})," \u73AF\u5883\u53D8\u91CF\u7528\u4E8E\u6307\u5B9A\u7528\u4E8E\u9A8C\u8BC1\u6A21\u5757\u5185\u5BB9\u7684 Go checksum database \u7684\u670D\u52A1\u5668\u3002Go \u6A21\u5757\u7CFB\u7EDF\u4F7F\u7528\u8FD9\u4E2A\u6570\u636E\u5E93\u6765\u786E\u4FDD\u6A21\u5757\u5185\u5BB9\u7684\u4E00\u81F4\u6027\u548C\u5B89\u5168\u6027\uFF0C\u9632\u6B62\u6A21\u5757\u906D\u5230\u7BE1\u6539\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7981\u7528\u54C8\u5E0C\u6821\u9A8C",children:"\u7981\u7528\u54C8\u5E0C\u6821\u9A8C"}),"\n",(0,s.jsxs)(n.p,{children:["\u8BBE\u7F6E ",(0,s.jsx)(n.code,{children:"GOSUMDB=off"}),"\uFF0C\u53EF\u4EE5\u5173\u95ED\u5BF9\u6240\u6709\u5916\u90E8\u6A21\u5757\u7684\u6821\u9A8C\u548C\u6570\u636E\u5E93\u67E5\u8BE2\u3002\u8FD9\u610F\u5473\u7740\u5F53\u4F60\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"go get"})," \u4E0B\u8F7D\u4F9D\u8D56\u65F6\uFF0CGo \u5DE5\u5177\u94FE\u4E0D\u4F1A\u5C1D\u8BD5\u9A8C\u8BC1\u4E0B\u8F7D\u7684\u6A21\u5757\u662F\u5426\u4E0E\u6821\u9A8C\u548C\u6570\u636E\u5E93\u4E2D\u8BB0\u5F55\u7684\u54C8\u5E0C\u503C\u76F8\u5339\u914D\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u79CD\u8BBE\u7F6E\u901A\u5E38\u7528\u4E8E\u79C1\u6709\u7F51\u7EDC\u6216\u8005\u662F\u5BF9\u5B89\u5168\u8981\u6C42\u4E0D\u9AD8\u4E14\u9700\u8981\u63D0\u901F\u7684\u5F00\u53D1\u73AF\u5883\u4E2D\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u8BBE\u7F6E\u65B9\u6CD5",children:"\u8BBE\u7F6E\u65B9\u6CD5"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u547D\u4EE4\u884C\u4E2D\u8BBE\u7F6E ",(0,s.jsx)(n.code,{children:"GOSUMDB=off"})," \u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5B9E\u73B0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"go env -w GOSUMDB=off\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u5728\u5F53\u524D\u7528\u6237\u7684 Go \u73AF\u5883\u4E2D\u6C38\u4E45\u8BBE\u7F6E ",(0,s.jsx)(n.code,{children:"GOSUMDB"})," \u7684\u503C\u4E3A ",(0,s.jsx)(n.code,{children:"off"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u63D0\u793A",children:"\u63D0\u793A~"}),"\n",(0,s.jsx)(n.p,{children:"\u7981\u7528\u6A21\u5757\u54C8\u5E0C\u6821\u9A8C\u5C06\u964D\u4F4E\u9879\u76EE\u5B89\u5168\u6027\uFF0C\u56E0\u4E3A\u4F60\u5C06\u65E0\u6CD5\u9A8C\u8BC1\u6A21\u5757\u7684\u5185\u5BB9\u662F\u5426\u88AB\u7BE1\u6539\u3002\u53EA\u6709\u5728\u4F60\u5B8C\u5168\u4FE1\u4EFB\u4F60\u7684\u6A21\u5757\u6765\u6E90\uFF0C\u6216\u5728\u5185\u90E8\u3001\u9694\u79BB\u7684\u5F00\u53D1\u73AF\u5883\u4E2D\u4F7F\u7528\u65F6\uFF0C\u624D\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5185\u90E8\u6216\u79C1\u6709\u7684\u7F51\u7EDC\u73AF\u5883\u4E2D\uFF0C\u65E0\u6CD5\u8BBF\u95EE Go \u7684\u5B98\u65B9 checksum database\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\u9891\u7E41\u6D4B\u8BD5\u6216\u66F4\u65B0\u4F9D\u8D56\uFF0C\u4E14\u5BF9\u5B89\u5168\u6027\u7684\u5373\u65F6\u9A8C\u8BC1\u8981\u6C42\u8F83\u4F4E\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var o=t(67294);let s={},c=o.createContext(s);function r(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:n},e.children)}},37530:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u8BED\u8A00\u7684-go-get-\u547D\u4EE4\u65F6\u7981\u7528\u6A21\u5757\u7684\u54C8\u5E0C\u6821\u9A8C\u529F\u80FD","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-07-01-Go_\u8BED\u8A00\u7684_go_get_\u547D\u4EE4\u65F6\u7981\u7528\u6A21\u5757\u7684\u54C8\u5E0C\u6821\u9A8C\u529F\u80FD.md","source":"@site/blog/\u540E\u7AEF/2024-07-01-Go_\u8BED\u8A00\u7684_go_get_\u547D\u4EE4\u65F6\u7981\u7528\u6A21\u5757\u7684\u54C8\u5E0C\u6821\u9A8C\u529F\u80FD.md","title":"Go \u8BED\u8A00\u7684 go get \u547D\u4EE4\u65F6\u7981\u7528\u6A21\u5757\u7684\u54C8\u5E0C\u6821\u9A8C\u529F\u80FD","description":"GOSUMDB \u73AF\u5883\u53D8\u91CF","date":"2024-07-01T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.1966666666666668,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u8BED\u8A00\u7684-go-get-\u547D\u4EE4\u65F6\u7981\u7528\u6A21\u5757\u7684\u54C8\u5E0C\u6821\u9A8C\u529F\u80FD","title":"Go \u8BED\u8A00\u7684 go get \u547D\u4EE4\u65F6\u7981\u7528\u6A21\u5757\u7684\u54C8\u5E0C\u6821\u9A8C\u529F\u80FD","authors":["sumingcheng"],"tags":["backend"],"date":"2024-07-01T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Go \u4F7F\u7528 Swagger","permalink":"/docs-hub/blog/go-\u4F7F\u7528-swagger"},"nextItem":{"title":"JWT \u7B7E\u540D\u548C\u9A8C\u8BC1\u7B7E\u540D\u7684\u8FC7\u7A0B","permalink":"/docs-hub/blog/jwt-\u7B7E\u540D\u548C\u9A8C\u8BC1\u7B7E\u540D\u7684\u8FC7\u7A0B"}}')}}]);