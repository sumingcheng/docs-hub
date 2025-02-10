"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["5856"],{15222:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var l=t(94849),r=t(85893),i=t(50065);let a={slug:"webpack-\u5E38\u89C1-loaderplugin",title:"Webpack \u5E38\u89C1 LoaderPlugin",authors:["sumingcheng"],tags:["frontend"],date:new Date("2023-02-27T00:00:00.000Z")},o="Webpack \u5E38\u89C1 Loader\u3001Plugin",u={authorsImageUrls:[void 0]},c=[{value:"\u4EC0\u4E48\u662F Loader\u3001Plugin",id:"\u4EC0\u4E48\u662F-loaderplugin",level:2},{value:"Loader",id:"loader",level:3},{value:"Plugin",id:"plugin",level:3}];function s(e){let n={h2:"h2",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4EC0\u4E48\u662F-loaderplugin",children:"\u4EC0\u4E48\u662F Loader\u3001Plugin"}),"\n",(0,r.jsx)(n.p,{children:"\u7B80\u5355\u7684\u8BF4 Loader \u7528\u4E8E\u8F6C\u6362\u5404\u79CD\u8D44\u6E90\uFF0C\u4F8B\u5982 Babel-loader\uFF1A\u5C06 ES6+ \u4EE3\u7801\u8F6C\u6362\u4E3A ES5 \u4EE3\u7801\uFF0C\u4EE5\u4FBF\u5728\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C"}),"\n",(0,r.jsx)(n.p,{children:"\u800C Plugin \u662F\u7528\u4E8E\u589E\u5F3A Webpack \u7684\u529F\u80FD\uFF0C\u4F8B\u5982 HtmlWebpackPlugin\uFF1A\u81EA\u52A8\u751F\u6210 HTML \u6587\u4EF6\uFF0C\u5E76\u5C06\u6253\u5305\u751F\u6210\u7684 JavaScript \u548C CSS \u6587\u4EF6\u81EA\u52A8\u5F15\u5165 HTML \u4E2D\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"loader",children:"Loader"}),"\n",(0,r.jsx)(n.p,{children:"(1) Babel-loader\uFF1A\u5C06 ES6+ \u4EE3\u7801\u8F6C\u6362\u4E3A ES5 \u4EE3\u7801\uFF0C\u4EE5\u4FBF\u5728\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(2) Style-loader\uFF1A\u5C06 CSS \u63D2\u5165\u5230 HTML \u4E2D\u7684 style \u6807\u7B7E\u4E2D\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(3) CSS-loader\uFF1A\u89E3\u6790 CSS \u6587\u4EF6\uFF0C\u5E76\u5904\u7406 CSS \u4E2D\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4F8B\u5982 @import \u548C url()\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(4) File-loader\uFF1A\u5904\u7406\u56FE\u7247\u548C\u5176\u4ED6\u6587\u4EF6\uFF0C\u5C06\u5B83\u4EEC\u6253\u5305\u5230 output \u76EE\u5F55\uFF0C\u5E76\u8FD4\u56DE\u5B83\u4EEC\u7684 URL\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(5) Url-loader\uFF1A\u4E0E File-loader \u7C7B\u4F3C\uFF0C\u4F46\u662F\u5B83\u53EF\u4EE5\u5C06\u6587\u4EF6\u8F6C\u6362\u4E3A base64 URL\uFF0C\u4EE5\u51CF\u5C11 HTTP \u8BF7\u6C42\u7684\u6570\u91CF\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(6) Vue-loader\uFF1A\u5904\u7406 .vue \u6587\u4EF6\uFF0C\u5C06\u5B83\u4EEC\u8F6C\u6362\u4E3A JavaScript \u6A21\u5757\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(7) Less-loader\uFF1A\u89E3\u6790 Less \u6587\u4EF6\u5E76\u8F6C\u6362\u4E3A CSS\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(8) Sass-loader\uFF1A\u89E3\u6790 Sass \u6587\u4EF6\u5E76\u8F6C\u6362\u4E3A CSS\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"plugin",children:"Plugin"}),"\n",(0,r.jsx)(n.p,{children:"(1) HtmlWebpackPlugin\uFF1A\u81EA\u52A8\u751F\u6210 HTML \u6587\u4EF6\uFF0C\u5E76\u5C06\u6253\u5305\u751F\u6210\u7684 JavaScript \u548C CSS \u6587\u4EF6\u81EA\u52A8\u5F15\u5165 HTML \u4E2D\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(2) CleanWebpackPlugin\uFF1A\u81EA\u52A8\u6E05\u7406 output \u76EE\u5F55\u4E2D\u7684\u65E7\u6587\u4EF6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(3) mini-css-extract-plugin\uFF1A\u5C06 CSS \u63D0\u53D6\u5230\u5355\u72EC\u7684\u6587\u4EF6\u4E2D\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(4) CopyWebpackPlugin\uFF1A\u4E00\u4E9B\u9759\u6001\u8D44\u6E90\u6216\u8005\u6253\u5305\u597D\u7684\u6587\u4EF6\u590D\u5236\u5230\u8F93\u51FA\u5230 output \u76EE\u5F55\u4E2D\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(5) UglifyWebpackPlugin\uFF1A\u538B\u7F29 JavaScript \u4EE3\u7801\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(6) DefinePlugin\uFF1A\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(7) ProvidePlugin\uFF1A\u81EA\u52A8\u52A0\u8F7D\u6A21\u5757\uFF0C\u800C\u4E0D\u5FC5\u4F7F\u7528 require \u6216 import \u5BFC\u5165\u3002"}),"\n",(0,r.jsx)(n.p,{children:"(8) HotModuleReplacementPlugin\uFF1A\u5B9E\u73B0\u6A21\u5757\u70ED\u66F4\u65B0\uFF0C\u7528\u4E8E\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var l=t(67294);let r={},i=l.createContext(r);function a(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:n},e.children)}},94849:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/webpack-\u5E38\u89C1-loaderplugin","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2023-02-27-Webpack_\u5E38\u89C1_LoaderPlugin.md","source":"@site/blog/\u524D\u7AEF/2023-02-27-Webpack_\u5E38\u89C1_LoaderPlugin.md","title":"Webpack \u5E38\u89C1 LoaderPlugin","description":"\u4EC0\u4E48\u662F Loader\u3001Plugin","date":"2023-02-27T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.2333333333333334,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"webpack-\u5E38\u89C1-loaderplugin","title":"Webpack \u5E38\u89C1 LoaderPlugin","authors":["sumingcheng"],"tags":["frontend"],"date":"2023-02-27T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Vue Provide \u548C Inject","permalink":"/docs-hub/blog/vue-provide-\u548C-inject"},"nextItem":{"title":"Vue Event bus \u4F7F\u7528\u6848\u4F8B","permalink":"/docs-hub/blog/vue-event-bus-\u4F7F\u7528\u6848\u4F8B"}}')}}]);