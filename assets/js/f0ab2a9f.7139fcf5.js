"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["29230"],{1234:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return a},frontMatter:function(){return i},metadata:function(){return t},toc:function(){return l}});var t=s(38204),r=s(85893),o=s(50065);let i={slug:"vscode-ssh\u5F00\u53D1\u514D\u5BC6\u767B\u5F55",title:"VSCode SSH\u5F00\u53D1\u514D\u5BC6\u767B\u5F55",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-09-03T00:00:00.000Z")},c="VSCode SSH \u5F00\u53D1\uFF0C\u514D\u5BC6\u767B\u5F55",d={authorsImageUrls:[void 0]},l=[{value:"\u751F\u6210 SSH \u5BC6\u94A5\u5BF9",id:"\u751F\u6210-ssh-\u5BC6\u94A5\u5BF9",level:2},{value:"\u5C06\u516C\u94A5\u6DFB\u52A0\u5230 Linux \u670D\u52A1\u5668",id:"\u5C06\u516C\u94A5\u6DFB\u52A0\u5230-linux-\u670D\u52A1\u5668",level:2},{value:"\u914D\u7F6E VSCode \u8FDB\u884C\u8FDC\u7A0B\u5F00\u53D1",id:"\u914D\u7F6E-vscode-\u8FDB\u884C\u8FDC\u7A0B\u5F00\u53D1",level:2}];function h(e){let n={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u751F\u6210-ssh-\u5BC6\u94A5\u5BF9",children:"\u751F\u6210 SSH \u5BC6\u94A5\u5BF9"}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5F00 Git Bash\uFF0C\u7136\u540E\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u751F\u6210\u4E00\u4E2A\u65B0\u7684 SSH \u5BC6\u94A5\u5BF9\u3002\u5982\u679C\u4F60\u751F\u6210\u8FC7\u4E86\u5C31\u4E0D\u8981\u518D\u751F\u4E86\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u91CC\u7684",(0,r.jsx)(n.code,{children:"your_email@example.com"}),"\u5E94\u66FF\u6362\u4E3A\u60A8\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\uFF0C\u7528\u4F5C\u5BC6\u94A5\u7684\u6807\u7B7E\u3002\u6309\u56DE\u8F66\u63A5\u53D7\u9ED8\u8BA4\u6587\u4EF6\u4F4D\u7F6E\uFF08\u901A\u5E38\u662F",(0,r.jsx)(n.code,{children:"/c/Users/YourUsername/.ssh/id_rsa"}),"\uFF09\uFF0C\u5728\u63D0\u793A\u65F6\u53EF\u4EE5\u9009\u62E9\u8F93\u5165\u5BC6\u7801\u6216\u7559\u7A7A\u4EE5\u521B\u5EFA\u65E0\u5BC6\u7801\u7684\u5BC6\u94A5\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5C06\u516C\u94A5\u6DFB\u52A0\u5230-linux-\u670D\u52A1\u5668",children:"\u5C06\u516C\u94A5\u6DFB\u52A0\u5230 Linux \u670D\u52A1\u5668"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u62F7\u8D1D\u516C\u94A5\u5185\u5BB9"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 Git Bash \u4E2D\uFF0C\u4F7F\u7528",(0,r.jsx)(n.code,{children:"cat"}),"\u547D\u4EE4\u67E5\u770B\u5E76\u590D\u5236\u60A8\u7684\u516C\u94A5\u5185\u5BB9"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat ~/.ssh/id_rsa.pub\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u590D\u5236\u8F93\u51FA\u7684\u6240\u6709\u5185\u5BB9\uFF08\u786E\u4FDD\u590D\u5236\u5B8C\u6574\uFF0C\u5305\u62EC",(0,r.jsx)(n.code,{children:"ssh-rsa"}),"\u5F00\u5934\u548C\u90AE\u7BB1\u7ED3\u5C3E\uFF09\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u767B\u5F55\u5230\u7684 Linux \u670D\u52A1\u5668"})," \u4F7F\u7528\u7528\u6237\u540D\u548C\u670D\u52A1\u5668\u5730\u5740\u767B\u5F55"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ssh -p 22 username@server-address\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u66FF\u6362",(0,r.jsx)(n.code,{children:"username"}),"\u548C",(0,r.jsx)(n.code,{children:"server-address"}),"\u4E3A\u60A8\u7684\u5B9E\u9645\u7528\u6237\u540D\u548C\u670D\u52A1\u5668\u5730\u5740\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7F16\u8F91 authorized_keys \u6587\u4EF6"})," \u5728\u670D\u52A1\u5668\u4E0A\uFF0C\u5C06\u516C\u94A5\u5185\u5BB9\u6DFB\u52A0\u5230",(0,r.jsx)(n.code,{children:"~/.ssh/authorized_keys"}),"\u6587\u4EF6\u4E2D\u3002\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u53EF\u4EE5\u521B\u5EFA\u5B83\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540E\u628A\u4F60\u521A\u521A\u590D\u5236\u7684\u5185\u5BB9\u7C98\u8D34\u8FDB\u6765\uFF0C\u4FDD\u5B58"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nano ~/.ssh/authorized_keys\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8BBE\u7F6E\u6743\u9650"})," \u8BBE\u7F6E\u6B63\u786E\u7684\u6587\u4EF6\u6743\u9650\u4EE5\u786E\u4FDD\u5B89\u5168"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"chmod 700 ~/.ssh\nchmod 600 ~/.ssh/authorized_keys\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u914D\u7F6E-vscode-\u8FDB\u884C\u8FDC\u7A0B\u5F00\u53D1",children:"\u914D\u7F6E VSCode \u8FDB\u884C\u8FDC\u7A0B\u5F00\u53D1"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"41e4e8b9fab8cfb98ba360b830509447",src:s(28602).Z+"",width:"1440",height:"335"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"VSCode"}),"\u5185\u6DFB\u52A0",(0,r.jsx)(n.code,{children:"IdentityFile ~/.ssh/id_rsa"}),"\u3002\u8FD9\u53EF\u4EE5\u8FDB\u4E00\u6B65\u7B80\u5316\u60A8\u7684 SSH \u8FDE\u63A5\u547D\u4EE4"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Host example\n    HostName example.com\n    User username\n    IdentityFile ~/.ssh/id_rsa\n"})})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28602:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/41e4e8b9fab8cfb98ba360b830509447-e90bb612685a61301b968df1eb882f37.jpg"},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(67294);let r={},o=t.createContext(r);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}},38204:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/vscode-ssh\u5F00\u53D1\u514D\u5BC6\u767B\u5F55","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-03-VSCode_SSH\u5F00\u53D1\u514D\u5BC6\u767B\u5F55.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-03-VSCode_SSH\u5F00\u53D1\u514D\u5BC6\u767B\u5F55.md","title":"VSCode SSH\u5F00\u53D1\u514D\u5BC6\u767B\u5F55","description":"\u751F\u6210 SSH \u5BC6\u94A5\u5BF9","date":"2024-09-03T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.1433333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"vscode-ssh\u5F00\u53D1\u514D\u5BC6\u767B\u5F55","title":"VSCode SSH\u5F00\u53D1\u514D\u5BC6\u767B\u5F55","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-09-03T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Nginx \u4E0D\u540C\u573A\u666F\u7684 log format \u793A\u4F8B","permalink":"/docs-hub/blog/nginx-\u4E0D\u540C\u573A\u666F\u7684-log-format-\u793A\u4F8B"},"nextItem":{"title":"Cpolar\u5B89\u88C5\u4E0E\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u5DE5\u5177\u63A8\u8350","permalink":"/docs-hub/blog/cpolar\u5B89\u88C5\u4E0E\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u5DE5\u5177\u63A8\u8350"}}')}}]);