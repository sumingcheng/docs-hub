"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["62399"],{79437:function(e,n,s){s.r(n),s.d(n,{assets:function(){return i},contentTitle:function(){return d},default:function(){return o},frontMatter:function(){return t},metadata:function(){return l},toc:function(){return u}});var l=s(4396),c=s(85893),r=s(50065);let t={slug:"linux-ufw-\u5E38\u7528\u547D\u4EE4",title:"Linux ufw \u5E38\u7528\u547D\u4EE4",authors:["sumingcheng"],tags:["os-and-commands"],date:new Date("2024-05-28T00:00:00.000Z")},d="Linux ufw \u5E38\u7528\u547D\u4EE4",i={authorsImageUrls:[void 0]},u=[{value:"\u5F00\u653E\u5355\u4E2A\u7AEF\u53E3",id:"\u5F00\u653E\u5355\u4E2A\u7AEF\u53E3",level:3},{value:"\u5F00\u653E\u7AEF\u53E3\u8303\u56F4",id:"\u5F00\u653E\u7AEF\u53E3\u8303\u56F4",level:3},{value:"\u5F00\u653E\u7279\u5B9A\u7684\u670D\u52A1",id:"\u5F00\u653E\u7279\u5B9A\u7684\u670D\u52A1",level:3},{value:"\u4F7F\u7528\u89C4\u5219\u6307\u5B9A\u6765\u6E90 IP",id:"\u4F7F\u7528\u89C4\u5219\u6307\u5B9A\u6765\u6E90-ip",level:3},{value:"\u7BA1\u7406\u548C\u67E5\u770B ufw \u72B6\u6001",id:"\u7BA1\u7406\u548C\u67E5\u770B-ufw-\u72B6\u6001",level:3},{value:"\u5220\u9664\u6216\u91CD\u7F6E\u89C4\u5219",id:"\u5220\u9664\u6216\u91CD\u7F6E\u89C4\u5219",level:3}];function a(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Author:"})," [\u7D20\u660E\u8BDA]"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5F00\u653E\u5355\u4E2A\u7AEF\u53E3",children:"\u5F00\u653E\u5355\u4E2A\u7AEF\u53E3"}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"ufw"})," \u5F00\u653E\u5355\u4E2A\u7AEF\u53E3\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5176\u4E2D ",(0,c.jsx)(n.code,{children:"<port>"})," \u662F\u4F60\u5E0C\u671B\u5F00\u653E\u7684\u7AEF\u53E3\u53F7"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow <port>\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u60F3\u5F00\u653E\u7AEF\u53E3 80\uFF08\u901A\u5E38\u7528\u4E8E HTTP\uFF09\uFF0C\u4F60\u53EF\u4EE5\u6267\u884C"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow 80\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u5F00\u653E\u7AEF\u53E3\u8303\u56F4",children:"\u5F00\u653E\u7AEF\u53E3\u8303\u56F4"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679C\u4F60\u9700\u8981\u5F00\u653E\u4E00\u7CFB\u5217\u7684\u7AEF\u53E3\uFF0C\u53EF\u4EE5\u6307\u5B9A\u7AEF\u53E3\u8303\u56F4\u548C\u534F\u8BAE\u3002\u4F8B\u5982\uFF0C\u8981\u5F00\u653E\u7AEF\u53E3 6000 \u5230 7000\uFF0C\u53EF\u4EE5\u4F7F\u7528"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow 6000:7000/tcp\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8FD9\u91CC\u6307\u5B9A\u4E86 TCP \u534F\u8BAE\u3002\u5982\u679C\u9700\u8981\u540C\u65F6\u5F00\u653E TCP \u548C UDP\uFF0C\u4F60\u53EF\u4EE5\u5206\u522B\u6DFB\u52A0\u89C4\u5219\uFF0C\u6216\u8005\u7B80\u5355\u5730\u7701\u7565\u534F\u8BAE\u90E8\u5206\uFF0C\u8FD9\u6837\u4F1A\u5BF9\u4E24\u79CD\u534F\u8BAE\u90FD\u5F00\u653E"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow 6000:7000\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u5F00\u653E\u7279\u5B9A\u7684\u670D\u52A1",children:"\u5F00\u653E\u7279\u5B9A\u7684\u670D\u52A1"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ufw"})," \u8FD8\u5141\u8BB8\u4F60\u6839\u636E\u670D\u52A1\u540D\u79F0\u5F00\u653E\u7AEF\u53E3\uFF0C\u524D\u63D0\u662F ",(0,c.jsx)(n.code,{children:"/etc/services"})," \u6587\u4EF6\u4E2D\u6709\u76F8\u5E94\u7684\u670D\u52A1\u5B9A\u4E49\u3002\u4F8B\u5982\uFF0C\u5F00\u653E HTTP \u670D\u52A1"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow http\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6216\u8005\u5F00\u653E SSH \u670D\u52A1"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow ssh\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u4F7F\u7528\u89C4\u5219\u6307\u5B9A\u6765\u6E90-ip",children:"\u4F7F\u7528\u89C4\u5219\u6307\u5B9A\u6765\u6E90 IP"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ufw"})," \u4E5F\u5141\u8BB8\u4F60\u6307\u5B9A\u7279\u5B9A\u7684\u6765\u6E90 IP \u5730\u5740\u6216\u8005\u5B50\u7F51\uFF0C\u4ECE\u800C\u53EA\u5141\u8BB8\u6765\u81EA\u7279\u5B9A IP \u7684\u6D41\u91CF\u901A\u8FC7\u7279\u5B9A\u7684\u7AEF\u53E3\u3002\u4F8B\u5982\uFF0C\u53EA\u5141\u8BB8 IP \u5730\u5740 ",(0,c.jsx)(n.code,{children:"192.168.1.100"})," \u901A\u8FC7\u7AEF\u53E3 22"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow from 192.168.1.100 to any port 22\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u7BA1\u7406\u548C\u67E5\u770B-ufw-\u72B6\u6001",children:"\u7BA1\u7406\u548C\u67E5\u770B ufw \u72B6\u6001"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u6DFB\u52A0\u89C4\u5219\u4E4B\u524D\uFF0C\u786E\u4FDD ",(0,c.jsx)(n.code,{children:"ufw"})," \u662F\u542F\u7528\u7684\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6765\u542F\u7528 ",(0,c.jsx)(n.code,{children:"ufw"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw enable\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u67E5\u770B\u6240\u6709\u5DF2\u7ECF\u8BBE\u7F6E\u7684\u89C4\u5219\u548C ",(0,c.jsx)(n.code,{children:"ufw"})," \u7684\u72B6\u6001"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw status verbose\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679C\u9700\u8981\u7981\u7528 ",(0,c.jsx)(n.code,{children:"ufw"}),"\uFF0C\u53EF\u4EE5\u4F7F\u7528"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw disable\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u5220\u9664\u6216\u91CD\u7F6E\u89C4\u5219",children:"\u5220\u9664\u6216\u91CD\u7F6E\u89C4\u5219"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u9700\u8981\u5220\u9664\u4E4B\u524D\u8BBE\u7F6E\u7684\u89C4\u5219\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"delete"})," \u547D\u4EE4\uFF0C\u540E\u8DDF\u5148\u524D\u6DFB\u52A0\u7684\u76F8\u540C\u89C4\u5219"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw delete allow 80\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6216\u8005\uFF0C\u4F60\u53EF\u4EE5\u91CD\u7F6E\u6240\u6709 ",(0,c.jsx)(n.code,{children:"ufw"})," \u89C4\u5219\uFF0C\u8FD4\u56DE\u5230\u521D\u59CB\u72B6\u6001\uFF08\u6CE8\u610F\u8FD9\u4F1A\u5220\u9664\u6240\u6709\u81EA\u5B9A\u4E49\u7684\u89C4\u5219\uFF09"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ufw reset\n"})})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var l=s(67294);let c={},r=l.createContext(c);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),l.createElement(r.Provider,{value:n},e.children)}},4396:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/linux-ufw-\u5E38\u7528\u547D\u4EE4","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u547D\u4EE4/2024-05-28-Linux_ufw_\u5E38\u7528\u547D\u4EE4.md","source":"@site/blog/\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u547D\u4EE4/2024-05-28-Linux_ufw_\u5E38\u7528\u547D\u4EE4.md","title":"Linux ufw \u5E38\u7528\u547D\u4EE4","description":"Author: [\u7D20\u660E\u8BDA]","date":"2024-05-28T00:00:00.000Z","tags":[{"inline":false,"label":"\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u547D\u4EE4","permalink":"/docs-hub/blog/tags/os-and-commands","description":"\u64CD\u4F5C\u7CFB\u7EDF\u548C\u547D\u4EE4\u884C\u76F8\u5173\u77E5\u8BC6"}],"readingTime":1.6166666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"linux-ufw-\u5E38\u7528\u547D\u4EE4","title":"Linux ufw \u5E38\u7528\u547D\u4EE4","authors":["sumingcheng"],"tags":["os-and-commands"],"date":"2024-05-28T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"ss \u547D\u4EE4\u7684\u57FA\u672C\u7528\u6CD5","permalink":"/docs-hub/blog/ss-\u547D\u4EE4\u7684\u57FA\u672C\u7528\u6CD5"},"nextItem":{"title":"\u4F7F\u7528 firewalld \u653E\u5F00\u5173\u95ED\u7AEF\u53E3","permalink":"/docs-hub/blog/\u4F7F\u7528-firewalld-\u653E\u5F00\u5173\u95ED\u7AEF\u53E3"}}')}}]);