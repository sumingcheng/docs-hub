"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["4582"],{28211:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return u}});var r=n(82080),s=n(85893),i=n(50065);let o={slug:"nextjs-\u62A5\u9519-warning-extra-attributes-from-the-server-style",title:"Nextjs \u62A5\u9519 Warning Extra attributes from the server style",authors:["sumingcheng"],tags:["frontend"],date:new Date("2024-07-15T00:00:00.000Z")},a="Next.js \u62A5\u9519 Warning: Extra attributes from the server: style",c={authorsImageUrls:[void 0]},u=[{value:"\u95EE\u9898\u539F\u56E0",id:"\u95EE\u9898\u539F\u56E0",level:2},{value:"\u89E3\u51B3\u65B9\u6CD5 2\uFF0C\u5173\u95ED\u6D4F\u89C8\u5668\u63D2\u4EF6",id:"\u89E3\u51B3\u65B9\u6CD5-2\u5173\u95ED\u6D4F\u89C8\u5668\u63D2\u4EF6",level:2}];function l(e){let t={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u95EE\u9898\u539F\u56E0",children:"\u95EE\u9898\u539F\u56E0"}),"\n",(0,s.jsx)(t.p,{children:"\u53D1\u751F\u6B64\u9519\u8BEF\u7684\u539F\u56E0\u662F nextjs \u4ECE\u670D\u52A1\u5668\u7AEF\u6536\u5230\u4E86\u5BA2\u6237\u7AEF\u65E0\u6CD5\u8BC6\u522B\u7684\u989D\u5916\u5C5E\u6027\uFF0C\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u5BA2\u6237\u7AEF\u6E32\u67D3\u548C\u670D\u52A1\u7AEF\u6E32\u67D3\u4E0D\u5339\u914D\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u6211\u8FD9\u4E2A\u9879\u76EE\u521A\u521D\u59CB\u5316\uFF0C\u4F7F\u7528\u7684\u662F next+radix-ui\uFF0C\u914D\u7F6E\u5168\u5C40\u4E3B\u9898\u7684\u65F6\u5019\u51FA\u73B0\u7684\u9519\u8BEF"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"cf131e6a0d82e7d521bb6bf7454f15e7",src:n(41969).Z+"",width:"1440",height:"560"}),"## \u89E3\u51B3\u65B9\u6CD5 1\uFF0C\u5FFD\u7565\u8FD9\u4E2A\u8B66\u544A"]}),"\n",(0,s.jsx)(t.p,{children:"\u4FEE\u6539 layout.tsx \u7684 html \u5C5E\u6027\uFF0C\u589E\u52A0 suppressHydrationWarning"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<html suppressHydrationWarning={true}>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u89E3\u51B3\u65B9\u6CD5-2\u5173\u95ED\u6D4F\u89C8\u5668\u63D2\u4EF6",children:"\u89E3\u51B3\u65B9\u6CD5 2\uFF0C\u5173\u95ED\u6D4F\u89C8\u5668\u63D2\u4EF6"}),"\n",(0,s.jsx)(t.p,{children:"\u5982\u679C\u4F60\u6709\u5F88\u591A\u6D4F\u89C8\u5668\u63D2\u4EF6\uFF0C\u5C24\u5176\u662F\u6D89\u53CA\u5230\u6837\u5F0F\u548C\u989C\u8272\uFF0C\u6216\u8005\u662F\u6587\u5B57\u7C7B\u7684\uFF0C\u90FD\u4F1A\u5BFC\u81F4\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u7981\u7528\u8FD9\u4E2A\u63D2\u4EF6"}),"\n",(0,s.jsxs)(t.p,{children:["Chrome \u63A8\u51FA\u4E86\u4E00\u4E2A\u65B0\u7684\u6D4B\u8BD5\u7248\u529F\u80FD\uFF0C\u5141\u8BB8\u7528\u6237\u4E3A\u7279\u5B9A URL \u5173\u95ED\u6269\u5C55\uFF0C\u8FD9\u6709\u52A9\u4E8E\u89E3\u51B3\u76F8\u5173\u9519\u8BEF\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE ",(0,s.jsx)(t.code,{children:"chrome://flags/#extensions-menu-access-control"})," \u542F\u7528\u201CExtensions Menu Access Control\u201D\u6807\u5FD7\uFF0C\u5E76\u91CD\u542F Chrome\u3002\u542F\u7528\u540E\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u6269\u5C55\u7A0B\u5E8F\u56FE\u6807\u6765\u5207\u6362\u6216\u542F\u7528/\u7981\u7528\u7279\u5B9A URL \u7684\u6269\u5C55\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"18e725a41967c18898147d0c3ed1f519",src:n(59098).Z+"",width:"562",height:"687"}),"## \u89E3\u51B3\u65B9\u6CD5 3\uFF0C\u4E0D\u4F7F\u7528\u9519\u8BEF\u7684\u5D4C\u5957"]}),"\n",(0,s.jsxs)(t.p,{children:["\u9519\u8BEF\u7684\u5D4C\u5957\u5982\u4E0B\uFF0C\u6216\u8005\u662F\u4F8B\u5982",(0,s.jsx)(t.code,{children:"li"}),"\u5143\u7D20\u4E2D\u5D4C\u5957",(0,s.jsx)(t.code,{children:"ul"}),"\u5143\u7D20\uFF0C\u60C5\u51B5\u6709\u5F88\u591A"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<a>\n<a><a/>\n<a/>\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5982\u679C\u4F60\u6709\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u5927\u6982\u7387\u662F\u8FD9\u4E9B\u95EE\u9898\u5BFC\u81F4\u7684"})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},59098:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/18e725a41967c18898147d0c3ed1f519-213304d8392cb4cdb37d474fdac09ad5.jpg"},41969:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/cf131e6a0d82e7d521bb6bf7454f15e7-eae3132f6cedef76a0e30361f353e130.jpg"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(67294);let s={},i=r.createContext(s);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}},82080:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/nextjs-\u62A5\u9519-warning-extra-attributes-from-the-server-style","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2024-07-15-Nextjs_\u62A5\u9519_Warning_Extra_attributes_from_the_server_style.md","source":"@site/blog/\u524D\u7AEF/2024-07-15-Nextjs_\u62A5\u9519_Warning_Extra_attributes_from_the_server_style.md","title":"Nextjs \u62A5\u9519 Warning Extra attributes from the server style","description":"\u95EE\u9898\u539F\u56E0","date":"2024-07-15T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.0733333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"nextjs-\u62A5\u9519-warning-extra-attributes-from-the-server-style","title":"Nextjs \u62A5\u9519 Warning Extra attributes from the server style","authors":["sumingcheng"],"tags":["frontend"],"date":"2024-07-15T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u5982\u4F55\u4E0A\u4F20\u955C\u50CF\u5230 Docker Hub","permalink":"/docs-hub/blog/\u5982\u4F55\u4E0A\u4F20\u955C\u50CF\u5230-docker-hub"},"nextItem":{"title":"Go Gin \u5E38\u7528\u7684\u9A8C\u8BC1\u89C4\u5219","permalink":"/docs-hub/blog/go-gin-\u5E38\u7528\u7684\u9A8C\u8BC1\u89C4\u5219"}}')}}]);