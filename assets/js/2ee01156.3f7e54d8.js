"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["64328"],{71194:function(n,e,s){s.r(e),s.d(e,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return t},toc:function(){return d}});var t=s(79642),r=s(85893),c=s(50065);let i={slug:"linux-\u4F7F\u7528-rsync-\u4F20\u8F93\u6587\u4EF6",title:"Linux \u4F7F\u7528 rsync \u4F20\u8F93\u6587\u4EF6",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-06-28T00:00:00.000Z")},o="Linux \u4F7F\u7528 rsync \u4F20\u8F93\u6587\u4EF6",l={authorsImageUrls:[void 0]},d=[{value:"\u914D\u7F6E SSH \u767B\u5F55",id:"\u914D\u7F6E-ssh-\u767B\u5F55",level:2},{value:"\u4F7F\u7528 rsync",id:"\u4F7F\u7528-rsync",level:2}];function u(n){let e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u914D\u7F6E-ssh-\u767B\u5F55",children:"\u914D\u7F6E SSH \u767B\u5F55"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5728\u672C\u5730\u673A\u5668\u751F\u6210 SSH \u5BC6\u94A5"}),"\uFF08\u5982\u679C\u8FD8\u6CA1\u6709\u7684\u8BDD\uFF09"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"ssh-keygen -t rsa\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6309\u7167\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5C06\u516C\u94A5\u590D\u5236\u5230\u8FDC\u7A0B\u673A\u5668"}),"\uFF1A \u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"ssh-copy-id"})," \u547D\u4EE4\u5C06\u4F60\u7684\u516C\u94A5\u6DFB\u52A0\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u7684 ",(0,r.jsx)(e.code,{children:"~/.ssh/authorized_keys"})," \u6587\u4EF6\u4E2D\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"ssh-copy-id username@B_machine_IP\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u6309\u63D0\u793A\u64CD\u4F5C\uFF0C\u4F60\u4F1A\u770B\u5230",(0,r.jsx)(e.code,{children:"Number of key(s) added: 1"}),"\u8868\u793A\u6DFB\u52A0\u6210\u529F\uFF0C\u5B8C\u6210\u8FD9\u4E00\u6B65\u540E\uFF0C\u4F60\u5E94\u8BE5\u53EF\u4EE5\u65E0\u9700\u5BC6\u7801\u901A\u8FC7 SSH \u8BBF\u95EE\u8FDC\u7A0B\u670D\u52A1\u5668\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F7F\u7528-rsync",children:"\u4F7F\u7528 rsync"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsxs)(e.strong,{children:["\u786E\u8BA4 ",(0,r.jsx)(e.code,{children:"rsync"})," \u5B89\u88C5"]}),"\uFF1A\u786E\u4FDD\u4E24\u53F0\u673A\u5668\u90FD\u5B89\u88C5\u4E86 ",(0,r.jsx)(e.code,{children:"rsync"}),"\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsxs)(e.strong,{children:["\u6267\u884C ",(0,r.jsx)(e.code,{children:"rsync"})," \u547D\u4EE4"]}),"\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"rsync -avzP /path/to/source/folder/ username@B_machine_IP:/path/to/destination/folder/\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"-a"})," \u8868\u793A\u5F52\u6863\u6A21\u5F0F\uFF0C\u786E\u4FDD\u6587\u4EF6\u7684\u5C5E\u6027\u548C\u6743\u9650\u88AB\u4FDD\u7559\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"-v"})," \u8868\u793A\u8BE6\u7EC6\u6A21\u5F0F\uFF0C\u4F1A\u663E\u793A\u4F20\u8F93\u8FC7\u7A0B\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"-z"})," \u8868\u793A\u542F\u7528\u538B\u7F29\uFF0C\u51CF\u5C11\u6570\u636E\u4F20\u8F93\u91CF\u3002"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return i}});var t=s(67294);let r={},c=t.createContext(r);function i(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(c.Provider,{value:e},n.children)}},79642:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/linux-\u4F7F\u7528-rsync-\u4F20\u8F93\u6587\u4EF6","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-28-Linux_\u4F7F\u7528_rsync_\u4F20\u8F93\u6587\u4EF6.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-28-Linux_\u4F7F\u7528_rsync_\u4F20\u8F93\u6587\u4EF6.md","title":"Linux \u4F7F\u7528 rsync \u4F20\u8F93\u6587\u4EF6","description":"\u914D\u7F6E SSH \u767B\u5F55","date":"2024-06-28T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":0.67,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"linux-\u4F7F\u7528-rsync-\u4F20\u8F93\u6587\u4EF6","title":"Linux \u4F7F\u7528 rsync \u4F20\u8F93\u6587\u4EF6","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-06-28T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Bash \u8BBE\u7F6E\u5386\u53F2\u8BB0\u5F55\u7684\u6700\u5927\u6761\u6570","permalink":"/docs-hub/blog/bash-\u8BBE\u7F6E\u5386\u53F2\u8BB0\u5F55\u7684\u6700\u5927\u6761\u6570"},"nextItem":{"title":"Zsh \u8BBE\u7F6E\u5386\u53F2\u8BB0\u5F55\u7684\u6700\u5927\u6761\u6570","permalink":"/docs-hub/blog/zsh-\u8BBE\u7F6E\u5386\u53F2\u8BB0\u5F55\u7684\u6700\u5927\u6761\u6570"}}')}}]);