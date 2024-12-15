"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["49099"],{229:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return c},default:function(){return a},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return h}});var i=t(12536),r=t(85893),s=t(50065);let l={slug:"git-\u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F",title:"Git \u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-10-09T00:00:00.000Z")},c="Git \u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F",o={authorsImageUrls:[void 0]},h=[{value:"\u4F7F\u7528 git filter-branch \u6765\u4FEE\u6539\u63D0\u4EA4\u8005\u4FE1\u606F",id:"\u4F7F\u7528-git-filter-branch-\u6765\u4FEE\u6539\u63D0\u4EA4\u8005\u4FE1\u606F",level:2},{value:"\u786E\u8BA4\u53D8\u66F4",id:"\u786E\u8BA4\u53D8\u66F4",level:2},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2},{value:"\u63A8\u9001\u66F4\u6539",id:"\u63A8\u9001\u66F4\u6539",level:2},{value:"\u5907\u4EFD",id:"\u5907\u4EFD",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4F7F\u7528-git-filter-branch-\u6765\u4FEE\u6539\u63D0\u4EA4\u8005\u4FE1\u606F",children:"\u4F7F\u7528 git filter-branch \u6765\u4FEE\u6539\u63D0\u4EA4\u8005\u4FE1\u606F"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6253\u5F00\u7EC8\u7AEF"}),"\u5728\u4F60\u7684 Git \u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E2D\u6253\u5F00\u547D\u4EE4\u884C\u5DE5\u5177\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["\u6267\u884C",(0,r.jsx)(n.code,{children:"git filter-branch"}),"\u547D\u4EE4"]}),"\u786E\u4FDD\u4F60\u7684\u547D\u4EE4\u7ED3\u6784\u6B63\u786E\u65E0\u8BEF\u3002\u4E0B\u9762\u662F\u547D\u4EE4\u7684\u5B8C\u6574\u5F62\u5F0F\uFF0C\u6CE8\u610F\u786E\u4FDD\u5728\u4F60\u7684 shell \u4E2D\u6B63\u786E\u5904\u7406\u5F15\u53F7"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'git filter-branch --env-filter \'\nGIT_AUTHOR_NAME="sumingcheng"\nGIT_AUTHOR_EMAIL="cjwdyzdyplxjg@gmail.com"\nGIT_COMMITTER_NAME="sumingcheng"\nGIT_COMMITTER_EMAIL="cjwdyzdyplxjg@gmail.com"\n\' --tag-name-filter cat -- --branches --tags\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u4E2A\u547D\u4EE4\u7684\u90E8\u5206\uFF0C",(0,r.jsx)(n.code,{children:"--env-filter"})," \u662F\u7528\u6765\u8BBE\u7F6E\u65B0\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u6539\u53D8\u4F5C\u8005\u548C\u63D0\u4EA4\u8005\u7684\u59D3\u540D\u548C\u90AE\u7BB1\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u67E5\u770B\u8F93\u51FA"}),"\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C",(0,r.jsx)(n.code,{children:"git filter-branch"}),"\u4F1A\u8F93\u51FA\u5904\u7406\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u6BCF\u4E2A\u88AB\u91CD\u5199\u7684\u63D0\u4EA4\u3002\u6CE8\u610F\u89C2\u5BDF\u662F\u5426\u6709\u4EFB\u4F55\u9519\u8BEF\u4FE1\u606F\u6216\u8B66\u544A\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u786E\u8BA4\u53D8\u66F4",children:"\u786E\u8BA4\u53D8\u66F4"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4F7F\u7528\u4E86",(0,r.jsx)(n.code,{children:"git filter-branch"}),"\u547D\u4EE4\u4E4B\u540E\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6765\u68C0\u67E5\u5386\u53F2\u662F\u5426\u5DF2\u7ECF\u6539\u53D8"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'git log --pretty=format:"%H %an %ae"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u5217\u51FA\u6240\u6709\u63D0\u4EA4\u7684\u54C8\u5E0C\u503C\u3001\u4F5C\u8005\u540D\u79F0\u548C\u7535\u5B50\u90AE\u4EF6\u5730\u5740\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u8F93\u51FA\u786E\u8BA4\u4FE1\u606F\u662F\u5426\u5DF2\u7ECF\u66F4\u65B0\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u547D\u4EE4\u8BED\u6CD5\u9519\u8BEF"}),"\u5728\u67D0\u4E9B shell \u73AF\u5883\u4E0B\uFF0C\u547D\u4EE4\u7684\u5F15\u53F7\u548C\u7A7A\u683C\u53EF\u80FD\u9700\u8981\u7279\u522B\u6CE8\u610F\u3002\u786E\u4FDD\u547D\u4EE4\u4E2D\u7684\u7A7A\u683C\u548C\u5F15\u53F7\u90FD\u6B63\u786E\u65E0\u8BEF\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7F13\u5B58\u95EE\u9898"}),"\u6709\u65F6\u5019\uFF0CGit \u7684\u4E00\u4E9B\u5BA2\u6237\u7AEF\u6216\u8005 GUI \u5DE5\u5177\u4F1A\u7F13\u5B58\u65E7\u7684\u63D0\u4EA4\u4FE1\u606F\u3002\u5C1D\u8BD5\u5728\u547D\u4EE4\u884C\u5DE5\u5177\u4E2D\u76F4\u63A5\u67E5\u770B\u63D0\u4EA4\u5386\u53F2\uFF0C\u6216\u8005\u91CD\u542F\u4F60\u7684 Git \u5BA2\u6237\u7AEF\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5206\u652F\u4FDD\u62A4"}),"\u5982\u679C\u4F60\u5728\u4F7F\u7528\u67D0\u4E9B\u6258\u7BA1\u670D\u52A1\uFF08\u5982 GitHub\uFF09\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u6709\u5206\u652F\u4FDD\u62A4\u89C4\u5219\u963B\u6B62\u4E86\u5386\u53F2\u7684\u6539\u53D8\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u63A8\u9001\u66F4\u6539",children:"\u63A8\u9001\u66F4\u6539"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u672C\u5730\u7684\u66F4\u6539\u662F\u6B63\u786E\u7684\uFF0C\u800C\u4F60\u60F3\u8981\u5C06\u8FD9\u4E9B\u66F4\u6539\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u5F3A\u5236\u63A8\u9001\u6765\u8986\u76D6\u8FDC\u7A0B\u7684\u63D0\u4EA4\u5386\u53F2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git push origin --force --all\ngit push origin --force --tags\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u5C06\u66F4\u65B0\u6240\u6709\u5206\u652F\u548C\u6807\u7B7E\u7684\u8FDC\u7A0B\u526F\u672C\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5907\u4EFD",children:"\u5907\u4EFD"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6267\u884C\u8FD9\u7C7B\u7834\u574F\u6027\u64CD\u4F5C\u4E4B\u524D\uFF0C\u603B\u662F\u597D\u7684\u505A\u6CD5\u5907\u4EFD\u4F60\u7684\u4ED3\u5E93\u3002\u5982\u679C\u4E8B\u60C5\u51FA\u73B0\u610F\u5916\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5907\u4EFD\u6765\u6062\u590D\u539F\u72B6\u3002\u4F60\u53EF\u4EE5\u7B80\u5355\u5730\u514B\u9686\u6574\u4E2A\u4ED3\u5E93\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E\u4F5C\u4E3A\u5907\u4EFD\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var i=t(67294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}},12536:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/git-\u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-10-09-Git_\u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-10-09-Git_\u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F.md","title":"Git \u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F","description":"\u4F7F\u7528 git filter-branch \u6765\u4FEE\u6539\u63D0\u4EA4\u8005\u4FE1\u606F","date":"2024-10-09T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.8133333333333332,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"git-\u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F","title":"Git \u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-10-09T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u4EC0\u4E48\u662F\u6570\u636E\u5B9A\u4E49\u8BED\u8A00DDL","permalink":"/docs-hub/blog/\u4EC0\u4E48\u662F\u6570\u636E\u5B9A\u4E49\u8BED\u8A00ddl"},"nextItem":{"title":"Linux \u5168\u65B9\u9762\u914D\u7F6E Bash \u63D0\u5347\u4F53\u9A8C","permalink":"/docs-hub/blog/linux-\u5168\u65B9\u9762\u914D\u7F6E-bash-\u63D0\u5347\u4F53\u9A8C"}}')}}]);