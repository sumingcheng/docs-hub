"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["95510"],{83391:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var s=t(52193),c=t(85893),r=t(50065);let i={slug:"\u5BF9\u7B49\u4F9D\u8D56peer-dependency",title:"\u5BF9\u7B49\u4F9D\u8D56peer dependency",authors:["sumingcheng"],tags:["frontend"],date:new Date("2023-07-04T00:00:00.000Z")},o="\u5BF9\u7B49\u4F9D\u8D56\uFF08peer dependency\uFF09",u={authorsImageUrls:[void 0]},d=[];function l(e){let n={code:"code",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u5BF9\u7B49\u4F9D\u8D56\uFF08peer dependency\uFF09\u6307\u7684\u662F\u4E00\u4E2A\u5E93\u9700\u8981\u5728\u5176\u5DE5\u4F5C\u73AF\u5883\u4E2D\u9884\u5148\u5B58\u5728\u4E00\u4E2A\u7279\u5B9A\u7684\u5E93\u6216\u8005\u5DE5\u5177\uFF0C\u4F46\u5E76\u4E0D\u76F4\u63A5\u5305\u542B\u6216\u5BFC\u5165\u8FD9\u4E2A\u7279\u5B9A\u5E93\u3002\u8FD9\u79CD\u7279\u5B9A\u5E93\u88AB\u79F0\u4E3A\u8FD9\u4E2A\u5E93\u7684\u5BF9\u7B49\u4F9D\u8D56\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u8BBE\u4F60\u6B63\u5728\u5F00\u53D1\u4E00\u4E2A\u540D\u4E3A ",(0,c.jsx)(n.code,{children:"my-plugin"})," \u7684 Vue.js \u63D2\u4EF6\u3002\u8FD9\u4E2A\u63D2\u4EF6\u9700\u8981\u5728\u4E00\u4E2A\u5DF2\u7ECF\u5B89\u88C5\u4E86 Vue.js \u7684\u73AF\u5883\u4E2D\u8FD0\u884C\uFF0C\u56E0\u4E3A\u5B83\u9700\u8981\u4F7F\u7528 Vue.js \u7684\u4E00\u4E9B\u7279\u6027\u6216 API\u3002\u7136\u800C\uFF0C",(0,c.jsx)(n.code,{children:"my-plugin"})," \u5E76\u4E0D\u4F1A\u76F4\u63A5\u5305\u542B Vue.js \u7684\u4EE3\u7801\uFF0C\u5B83\u53EA\u662F\u5047\u8BBE Vue.js \u5DF2\u7ECF\u5B58\u5728\u4E8E\u5176\u8FD0\u884C\u73AF\u5883\u4E2D\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u8BF4 Vue.js \u662F ",(0,c.jsx)(n.code,{children:"my-plugin"})," \u7684\u5BF9\u7B49\u4F9D\u8D56\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5F53\u4F60\u5728 ",(0,c.jsx)(n.code,{children:"my-plugin"})," \u7684 ",(0,c.jsx)(n.code,{children:"package.json"})," \u6587\u4EF6\u4E2D\u58F0\u660E Vue.js \u4E3A\u5BF9\u7B49\u4F9D\u8D56\u65F6\uFF0C\u4F60\u5728\u544A\u8BC9\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"my-plugin"})," \u7684\u5F00\u53D1\u8005\uFF0C\u4ED6\u4EEC\u9700\u8981\u81EA\u5DF1\u624B\u52A8\u5B89\u88C5 Vue.js\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5BF9\u7B49\u4F9D\u8D56\u7684\u4E00\u4E2A\u4E3B\u8981\u5E94\u7528\u573A\u666F\u662F\u63D2\u4EF6\u7CFB\u7EDF\uFF0C\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u3002\u63D2\u4EF6\u9700\u8981\u4F7F\u7528\u4E3B\u7A0B\u5E8F\uFF08\u5982 Vue.js\uFF09\u7684 API\uFF0C\u4F46\u5E76\u4E0D\u76F4\u63A5\u5305\u542B\u4E3B\u7A0B\u5E8F\u7684\u4EE3\u7801\u3002\u901A\u8FC7\u5C06\u4E3B\u7A0B\u5E8F\u58F0\u660E\u4E3A\u5BF9\u7B49\u4F9D\u8D56\uFF0C\u63D2\u4EF6\u53EF\u4EE5\u786E\u4FDD\u81EA\u5DF1\u603B\u662F\u4F7F\u7528\u4E0E\u4E3B\u7A0B\u5E8F\u76F8\u540C\u7684\u7248\u672C\uFF0C\u907F\u514D\u7248\u672C\u51B2\u7A81\u6216\u8005\u4E0D\u517C\u5BB9\u7684\u95EE\u9898\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u53E6\u5916\uFF0C\u5BF9\u7B49\u4F9D\u8D56\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5F3A\u5236\u6267\u884C\u67D0\u4E9B\u7248\u672C\u7684\u517C\u5BB9\u6027\u3002\u4F8B\u5982\uFF0C\u5982\u679C ",(0,c.jsx)(n.code,{children:"my-plugin"})," \u53EA\u80FD\u548C Vue.js 3.x \u517C\u5BB9\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u5728 ",(0,c.jsx)(n.code,{children:"my-plugin"})," \u7684 ",(0,c.jsx)(n.code,{children:"package.json"}),' \u6587\u4EF6\u4E2D\u58F0\u660E Vue.js \u7684\u7248\u672C\u4E3A "^3.0.0"\u3002\u8FD9\u6837\uFF0C\u5982\u679C\u7528\u6237\u5C1D\u8BD5\u5728 Vue.js 2.x \u7684\u73AF\u5883\u4E2D\u4F7F\u7528 ',(0,c.jsx)(n.code,{children:"my-plugin"}),"\uFF0C\u4ED6\u4EEC\u4F1A\u6536\u5230\u4E00\u4E2A\u8B66\u544A\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u58F0\u660E"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"5000b9e047739b1338ba0661f58072e3",src:t(6356).Z+"",width:"701",height:"267"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},6356:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/5000b9e047739b1338ba0661f58072e3-7a26b33d3c31c623280b9521c3907523.jpg"},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(67294);let c={},r=s.createContext(c);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}},52193:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u5BF9\u7B49\u4F9D\u8D56peer-dependency","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2023-07-04-\u5BF9\u7B49\u4F9D\u8D56peer_dependency.md","source":"@site/blog/\u524D\u7AEF/2023-07-04-\u5BF9\u7B49\u4F9D\u8D56peer_dependency.md","title":"\u5BF9\u7B49\u4F9D\u8D56peer dependency","description":"\u5BF9\u7B49\u4F9D\u8D56\uFF08peer dependency\uFF09\u6307\u7684\u662F\u4E00\u4E2A\u5E93\u9700\u8981\u5728\u5176\u5DE5\u4F5C\u73AF\u5883\u4E2D\u9884\u5148\u5B58\u5728\u4E00\u4E2A\u7279\u5B9A\u7684\u5E93\u6216\u8005\u5DE5\u5177\uFF0C\u4F46\u5E76\u4E0D\u76F4\u63A5\u5305\u542B\u6216\u5BFC\u5165\u8FD9\u4E2A\u7279\u5B9A\u5E93\u3002\u8FD9\u79CD\u7279\u5B9A\u5E93\u88AB\u79F0\u4E3A\u8FD9\u4E2A\u5E93\u7684\u5BF9\u7B49\u4F9D\u8D56\u3002","date":"2023-07-04T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.32,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u5BF9\u7B49\u4F9D\u8D56peer-dependency","title":"\u5BF9\u7B49\u4F9D\u8D56peer dependency","authors":["sumingcheng"],"tags":["frontend"],"date":"2023-07-04T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u5FAE\u524D\u7AEF\u548CPNPM\u5DE5\u4F5C\u7A7A\u95F4\u4E24\u79CD\u65B9\u6848\u5BF9\u6BD4","permalink":"/docs-hub/blog/\u5FAE\u524D\u7AEF\u548Cpnpm\u5DE5\u4F5C\u7A7A\u95F4\u4E24\u79CD\u65B9\u6848\u5BF9\u6BD4"},"nextItem":{"title":"\u4E3A\u4EC0\u4E48\u6E05\u9664\u6D6E\u52A8\u8981\u4F7F\u7528display table","permalink":"/docs-hub/blog/\u4E3A\u4EC0\u4E48\u6E05\u9664\u6D6E\u52A8\u8981\u4F7F\u7528display-table"}}')}}]);