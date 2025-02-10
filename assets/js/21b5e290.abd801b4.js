"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["71228"],{21617:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return a},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return i}});var o=t(50965),c=t(85893),s=t(50065);let r={slug:"kubectl-\u6D4B\u8BD5\u96C6\u7FA4\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDE\u901A\u6027",title:"kubectl \u6D4B\u8BD5\u96C6\u7FA4\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDE\u901A\u6027",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-08-16T00:00:00.000Z")},l="kubectl \u6D4B\u8BD5\u96C6\u7FA4\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDE\u901A\u6027",u={authorsImageUrls:[void 0]},i=[];function d(e){let n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u8981\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"kubectl"})," \u6765\u68C0\u67E5\u96C6\u7FA4\u4E2D\u7684 Pod \u662F\u5426\u80FD\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDB\u884C\u901A\u4FE1\uFF0C\u4F46\u662F\u6CA1\u6709\u529E\u6CD5\u76F4\u63A5 ping\u3002\u4F60\u53EF\u4EE5"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u7684\u6D4B\u8BD5 Pod"}),"\u60A8\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u7684 Pod\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u7F51\u7EDC\u8FDE\u901A\u6027\u3002\u901A\u5E38\u4F7F\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u955C\u50CF\u5982 ",(0,c.jsx)(n.code,{children:"busybox"})," \u6765\u8FDB\u884C\u6B64\u7C7B\u6D4B\u8BD5\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u8FD0\u884C\u6D4B\u8BD5\u547D\u4EE4"}),"\u5728\u521B\u5EFA\u7684\u6D4B\u8BD5 Pod \u4E2D\uFF0C\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"ping"})," \u547D\u4EE4\u6765\u6D4B\u8BD5\u5916\u90E8\u5730\u5740\u7684\u8FDE\u901A\u6027\u3002\u4F8B\u5982"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"kubectl run curlpod --image=busybox --restart=Never -- ping -c 4 google.com\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8FD9\u6761\u547D\u4EE4\u4F1A\u542F\u52A8\u4E00\u4E2A\u540D\u4E3A ",(0,c.jsx)(n.code,{children:"curlpod"})," \u7684 Pod\uFF0C\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"busybox"})," \u955C\u50CF\uFF0C\u5E76\u6267\u884C ",(0,c.jsx)(n.code,{children:"ping google.com"})," \u547D\u4EE4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u68C0\u67E5\u8F93\u51FA"}),"\u67E5\u770B\u8F93\u51FA\u6765\u786E\u8BA4\u662F\u5426\u6210\u529F\u8FDE\u63A5\u5230\u5916\u90E8\u7F51\u7EDC\u3002\u5982\u679C\u547D\u4EE4\u6267\u884C\u6210\u529F\uFF0C\u60A8\u5C06\u770B\u5230 ",(0,c.jsx)(n.code,{children:"ping"})," \u547D\u4EE4\u7684\u7ED3\u679C\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6E05\u7406\u8D44\u6E90"}),"\u6D4B\u8BD5\u5B8C\u6210\u540E\uFF0C\u8BB0\u5F97\u5220\u9664\u6D4B\u8BD5\u7528\u7684 Pod \u4EE5\u91CA\u653E\u8D44\u6E90"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"kubectl delete pod curlpod\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u641E\u96C6\u7FA4\u524D\u4E00\u5B9A\u4E00\u5B9A\u8981\u5148\u914D\u7F6E\u597D\u7F51\u7EDC\uFF0C\u5BF9\u4E8E\u65B0\u624B\u6765\u8BF4\uFF0C\u5927\u90E8\u5206\u9519\u8BEF\u90FD\u662F\u7F51\u7EDC\u95EE\u9898\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var o=t(67294);let c={},s=o.createContext(c);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(s.Provider,{value:n},e.children)}},50965:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/kubectl-\u6D4B\u8BD5\u96C6\u7FA4\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDE\u901A\u6027","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-08-16-kubectl_\u6D4B\u8BD5\u96C6\u7FA4\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDE\u901A\u6027.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-08-16-kubectl_\u6D4B\u8BD5\u96C6\u7FA4\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDE\u901A\u6027.md","title":"kubectl \u6D4B\u8BD5\u96C6\u7FA4\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDE\u901A\u6027","description":"\u8981\u4F7F\u7528 kubectl \u6765\u68C0\u67E5\u96C6\u7FA4\u4E2D\u7684 Pod \u662F\u5426\u80FD\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDB\u884C\u901A\u4FE1\uFF0C\u4F46\u662F\u6CA1\u6709\u529E\u6CD5\u76F4\u63A5 ping\u3002\u4F60\u53EF\u4EE5","date":"2024-08-16T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":0.85,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"kubectl-\u6D4B\u8BD5\u96C6\u7FA4\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDE\u901A\u6027","title":"kubectl \u6D4B\u8BD5\u96C6\u7FA4\u4E0E\u5916\u90E8\u7F51\u7EDC\u8FDE\u901A\u6027","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-08-16T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Kubernetes \u5E38\u7528\u547D\u4EE4\u53CA\u5176\u7F29\u5199\u5F62\u5F0F","permalink":"/docs-hub/blog/kubernetes-\u5E38\u7528\u547D\u4EE4\u53CA\u5176\u7F29\u5199\u5F62\u5F0F"},"nextItem":{"title":"Go \u9879\u76EE\u6253\u5305\u4E0D\u540C\u5E73\u53F0\u548C\u7248\u672C","permalink":"/docs-hub/blog/go-\u9879\u76EE\u6253\u5305\u4E0D\u540C\u5E73\u53F0\u548C\u7248\u672C"}}')}}]);