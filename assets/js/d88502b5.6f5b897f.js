"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["13207"],{42162:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var s=t(58855),r=t(85893),i=t(50065);let o={slug:"\u8BBE\u7F6E-ssh-\u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",title:"\u8BBE\u7F6E SSH \u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-09-11T00:00:00.000Z")},c="\u8BBE\u7F6E SSH \u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",l={authorsImageUrls:[void 0]},u=[{value:"\u751F\u6210 SSH \u5BC6\u94A5",id:"\u751F\u6210-ssh-\u5BC6\u94A5",level:3},{value:"\u5C06\u516C\u94A5\u590D\u5236\u5230\u670D\u52A1\u5668",id:"\u5C06\u516C\u94A5\u590D\u5236\u5230\u670D\u52A1\u5668",level:3},{value:"\u8FDE\u63A5\u670D\u52A1\u5668",id:"\u8FDE\u63A5\u670D\u52A1\u5668",level:3}];function h(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u751F\u6210-ssh-\u5BC6\u94A5",children:"\u751F\u6210 SSH \u5BC6\u94A5"}),"\n",(0,r.jsxs)(n.p,{children:["\u6253\u5F00\u7EC8\u7AEF\u3002\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u6765\u751F\u6210\u4E00\u4E2A\u65B0\u7684 SSH \u5BC6\u94A5\u5BF9\uFF08",(0,r.jsx)(n.strong,{children:"\u5982\u679C\u4F60\u8FD8\u6CA1\u6709\u7684\u8BDD"}),"\uFF09"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ssh-keygen -t rsa -b 4096\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6309\u7167\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u4E3A\u5BC6\u94A5\u8BBE\u7F6E\u4E00\u4E2A\u5BC6\u7801\uFF0C\u4E5F\u53EF\u4EE5\u7559\u7A7A\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5C06\u516C\u94A5\u590D\u5236\u5230\u670D\u52A1\u5668",children:"\u5C06\u516C\u94A5\u590D\u5236\u5230\u670D\u52A1\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"ssh-copy-id"})," \u547D\u4EE4\u5C06\u4F60\u7684\u516C\u94A5\u590D\u5236\u5230\u670D\u52A1\u5668\u4E0A\uFF0C\u4EE5\u4FBF\u4F60\u53EF\u4EE5\u65E0\u5BC6\u7801\u767B\u5F55"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ssh-copy-id -i ~/.ssh/id_rsa.pub -p 50022 itadmin@192.168.33.111\nssh-copy-id -i ~/.ssh/id_rsa.pub -p 50022 itadmin@192.168.33.110\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u66FF\u6362 ",(0,r.jsx)(n.code,{children:"-i"})," \u540E\u9762\u7684\u8DEF\u5F84\u5982\u679C\u4F60\u7684\u5BC6\u94A5\u4FDD\u5B58\u5728\u4E0D\u540C\u7684\u4F4D\u7F6E\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8FDE\u63A5\u670D\u52A1\u5668",children:"\u8FDE\u63A5\u670D\u52A1\u5668"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"nano ~/.ssh/config"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Host 111\n    HostName 192.168.33.111\n    User itadmin\n    Port 50022\nHost 110\n    HostName 192.168.33.110\n    User itadmin\n    Port 50022\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4E00\u65E6\u4F60\u7684\u516C\u94A5\u88AB\u6DFB\u52A0\u5230\u670D\u52A1\u5668\u7684 ",(0,r.jsx)(n.code,{children:"~/.ssh/authorized_keys"})," \u6587\u4EF6\u4E2D\uFF0C\u4F60\u5C31\u53EF\u4EE5\u4E0D\u9700\u8981\u5BC6\u7801\u76F4\u63A5\u8FDE\u63A5\u4E86"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ssh 111\nssh 110\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u79CD\u65B9\u6CD5\u4E0D\u4EC5\u5B89\u5168\uFF0C\u8FD8\u65B9\u4FBF\uFF0C\u56E0\u4E3A\u4E00\u65E6\u8BBE\u7F6E\u5B8C\u6210\uFF0C\u4F60\u5C31\u53EF\u4EE5\u65E0\u9700\u8F93\u5165\u5BC6\u7801\u5FEB\u901F\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u3002"})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(67294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},58855:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u8BBE\u7F6E-ssh-\u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-11-\u8BBE\u7F6E_SSH_\u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-11-\u8BBE\u7F6E_SSH_\u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1.md","title":"\u8BBE\u7F6E SSH \u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1","description":"\u751F\u6210 SSH \u5BC6\u94A5","date":"2024-09-11T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":0.7833333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u8BBE\u7F6E-ssh-\u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1","title":"\u8BBE\u7F6E SSH \u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-09-11T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u4FEE\u6539 Ubuntu 2204 \u4E2D\u7684 Kubernetes \u5305\u6E90","permalink":"/docs-hub/blog/\u4FEE\u6539-ubuntu-2204-\u4E2D\u7684-kubernetes-\u5305\u6E90"},"nextItem":{"title":"Microk8s \u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5","permalink":"/docs-hub/blog/microk8s-\u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5"}}')}}]);