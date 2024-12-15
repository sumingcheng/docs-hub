"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["9357"],{814:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return d}});var r=t(96792),l=t(85893),i=t(50065);let o={slug:"\u4F7F\u7528-firewalld-\u653E\u5F00\u5173\u95ED\u7AEF\u53E3",title:"\u4F7F\u7528 firewalld \u653E\u5F00\u5173\u95ED\u7AEF\u53E3",authors:["sumingcheng"],tags:["os-and-commands"],date:new Date("2024-05-23T00:00:00.000Z")},c="\u4F7F\u7528 firewalld \u653E\u5F00/\u5173\u95ED\u7AEF\u53E3",s={authorsImageUrls:[void 0]},d=[{value:"\u4F7F\u7528 firewalld \u653E\u5F00/\u5173\u95ED\u7AEF\u53E3",id:"\u4F7F\u7528-firewalld-\u653E\u5F00\u5173\u95ED\u7AEF\u53E3",level:3}];function a(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"\u4F7F\u7528-firewalld-\u653E\u5F00\u5173\u95ED\u7AEF\u53E3",children:"\u4F7F\u7528 firewalld \u653E\u5F00/\u5173\u95ED\u7AEF\u53E3"}),"\n",(0,l.jsxs)(n.p,{children:["\u786E\u4FDD ",(0,l.jsx)(n.code,{children:"firewalld"})," \u670D\u52A1\u6B63\u5728\u8FD0\u884C"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"sudo systemctl start firewalld\nsudo systemctl enable firewalld\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"firewall-cmd"})," \u547D\u4EE4\u653E\u5F00 3000 \u548C 3001 \u7AEF\u53E3"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent\nsudo firewall-cmd --zone=public --add-port=3001/tcp --permanent\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5173\u95ED 3000 \u548C 3001 \u7AEF\u53E3"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"sudo firewall-cmd --zone=public --remove-port=3000/tcp --permanent\nsudo firewall-cmd --zone=public --remove-port=3001/tcp --permanent\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u91CD\u8F7D\u9632\u706B\u5899\u4EE5\u4F7F\u66F4\u6539\u751F\u6548"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"sudo firewall-cmd --reload\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u9A8C\u8BC1\u7AEF\u53E3\u662F\u5426\u5DF2\u653E\u5F00"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"sudo firewall-cmd --list-all\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(67294);let l={},i=r.createContext(l);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(i.Provider,{value:n},e.children)}},96792:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u4F7F\u7528-firewalld-\u653E\u5F00\u5173\u95ED\u7AEF\u53E3","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u547D\u4EE4/2024-05-23-\u4F7F\u7528_firewalld_\u653E\u5F00\u5173\u95ED\u7AEF\u53E3.md","source":"@site/blog/\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u547D\u4EE4/2024-05-23-\u4F7F\u7528_firewalld_\u653E\u5F00\u5173\u95ED\u7AEF\u53E3.md","title":"\u4F7F\u7528 firewalld \u653E\u5F00\u5173\u95ED\u7AEF\u53E3","description":"\u4F7F\u7528 firewalld \u653E\u5F00/\u5173\u95ED\u7AEF\u53E3","date":"2024-05-23T00:00:00.000Z","tags":[{"inline":false,"label":"\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u547D\u4EE4","permalink":"/docs-hub/blog/tags/os-and-commands","description":"\u64CD\u4F5C\u7CFB\u7EDF\u548C\u547D\u4EE4\u884C\u76F8\u5173\u77E5\u8BC6"}],"readingTime":0.3233333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u4F7F\u7528-firewalld-\u653E\u5F00\u5173\u95ED\u7AEF\u53E3","title":"\u4F7F\u7528 firewalld \u653E\u5F00\u5173\u95ED\u7AEF\u53E3","authors":["sumingcheng"],"tags":["os-and-commands"],"date":"2024-05-23T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Linux ufw \u5E38\u7528\u547D\u4EE4","permalink":"/docs-hub/blog/linux-ufw-\u5E38\u7528\u547D\u4EE4"},"nextItem":{"title":"Docker \u6279\u91CF\u5220\u9664\u6240\u6709\u5BB9\u5668","permalink":"/docs-hub/blog/docker-\u6279\u91CF\u5220\u9664\u6240\u6709\u5BB9\u5668"}}')}}]);