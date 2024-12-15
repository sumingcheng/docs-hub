"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["28830"],{48258:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return a},frontMatter:function(){return r},metadata:function(){return t},toc:function(){return o}});var t=s(87350),c=s(85893),l=s(50065);let r={slug:"systemd-\u7684\u57FA\u672C\u4F7F\u7528",title:"systemd \u7684\u57FA\u672C\u4F7F\u7528",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2023-10-30T00:00:00.000Z")},i="systemd \u7684\u57FA\u672C\u4F7F\u7528",d={authorsImageUrls:[void 0]},o=[{value:"\u670D\u52A1\u63A7\u5236",id:"\u670D\u52A1\u63A7\u5236",level:2},{value:"\u670D\u52A1\u5F00\u673A\u81EA\u542F\u8BBE\u7F6E",id:"\u670D\u52A1\u5F00\u673A\u81EA\u542F\u8BBE\u7F6E",level:2},{value:"\u7CFB\u7EDF\u72B6\u6001\u67E5\u770B",id:"\u7CFB\u7EDF\u72B6\u6001\u67E5\u770B",level:2},{value:"\u5B9A\u65F6\u5668\u548C\u8BA1\u5212\u4EFB\u52A1",id:"\u5B9A\u65F6\u5668\u548C\u8BA1\u5212\u4EFB\u52A1",level:2},{value:"\u521B\u5EFA\u548C\u7BA1\u7406\u81EA\u5B9A\u4E49\u670D\u52A1",id:"\u521B\u5EFA\u548C\u7BA1\u7406\u81EA\u5B9A\u4E49\u670D\u52A1",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u670D\u52A1\u63A7\u5236",children:"\u670D\u52A1\u63A7\u5236"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u542F\u52A8\u670D\u52A1(\u53EF\u7B80\u5199)"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo systemctl start apache2.service\nsudo systemctl start apache2\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u505C\u6B62\u670D\u52A1"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo systemctl stop apache2.service\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u91CD\u65B0\u542F\u52A8\u670D\u52A1"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo systemctl restart apache2.service\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u67E5\u770B\u670D\u52A1\u72B6\u6001"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"systemctl status apache2.service\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u670D\u52A1\u5F00\u673A\u81EA\u542F\u8BBE\u7F6E",children:"\u670D\u52A1\u5F00\u673A\u81EA\u542F\u8BBE\u7F6E"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u542F\u7528\u670D\u52A1\u5F00\u673A\u81EA\u542F"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo systemctl enable apache2.service\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7981\u7528\u670D\u52A1\u5F00\u673A\u81EA\u542F"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo systemctl disable apache2.service\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u7CFB\u7EDF\u72B6\u6001\u67E5\u770B",children:"\u7CFB\u7EDF\u72B6\u6001\u67E5\u770B"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u67E5\u770B\u670D\u52A1\u7684\u7F51\u7EDC\u8FDE\u63A5"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"ss -tnlp | grep apache2\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u67E5\u770B\u6240\u6709\u65E5\u5FD7"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"journalctl -u apache2.service\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u67E5\u770B\u6700\u65B0\u65E5\u5FD7"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"journalctl -u apache2.service -e\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5217\u51FA\u6240\u6709\u8FD0\u884C\u7684\u670D\u52A1"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"systemctl list-units --type=service\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u67E5\u770B\u7CFB\u7EDF\u65E5\u5FD7"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"journalctl\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5B9A\u65F6\u5668\u548C\u8BA1\u5212\u4EFB\u52A1",children:"\u5B9A\u65F6\u5668\u548C\u8BA1\u5212\u4EFB\u52A1"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6 /etc/systemd/system/backup.service \u6765\u5B9A\u4E49\u8981\u6267\u884C\u7684\u4EFB\u52A1\uFF1A"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"plaintextCopy code[Unit]\nDescription=Daily Backup\n\n[Service]\nExecStart=/usr/local/bin/backup.sh\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6 /etc/systemd/system/backup.timer \u6765\u5B9A\u4E49\u5B9A\u65F6\u5668\uFF1A"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"plaintextCopy code[Unit]\nDescription=Runs backup every day at 2am\n\n[Timer]\nOnCalendar=*-*-* 020000\nUnit=backup.service\n\n[Install]\nWantedBy=timers.target\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u542F\u52A8\u5E76\u542F\u7528\u5B9A\u65F6\u5668\uFF1A"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo systemctl start backup.timer\nsudo systemctl enable backup.timer\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u521B\u5EFA\u548C\u7BA1\u7406\u81EA\u5B9A\u4E49\u670D\u52A1",children:"\u521B\u5EFA\u548C\u7BA1\u7406\u81EA\u5B9A\u4E49\u670D\u52A1"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u81EA\u5B9A\u4E49\u670D\u52A1\u5355\u5143\u6587\u4EF6\u7684\u4F8B\u5B50\uFF0C\u8BE5\u6587\u4EF6\u5E94\u4FDD\u5B58\u4E3A /etc/systemd/system/custom.service"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"plaintextCopy code[Unit]\nDescription=Custom Service\n\n[Service]\nExecStart=/usr/local/bin/custom.sh\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5728\u521B\u5EFA\u4E86\u5355\u5143\u6587\u4EF6\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8\u3001\u505C\u6B62\u6216\u91CD\u65B0\u542F\u52A8\u670D\u52A1\uFF1A"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo systemctl start custom.service\nsudo systemctl stop custom.service\nsudo systemctl restart custom.service\n"})})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var t=s(67294);let c={},l=t.createContext(c);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(l.Provider,{value:n},e.children)}},87350:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/systemd-\u7684\u57FA\u672C\u4F7F\u7528","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2023-10-30-systemd_\u7684\u57FA\u672C\u4F7F\u7528.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2023-10-30-systemd_\u7684\u57FA\u672C\u4F7F\u7528.md","title":"systemd \u7684\u57FA\u672C\u4F7F\u7528","description":"\u670D\u52A1\u63A7\u5236","date":"2023-10-30T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.0966666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"systemd-\u7684\u57FA\u672C\u4F7F\u7528","title":"systemd \u7684\u57FA\u672C\u4F7F\u7528","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2023-10-30T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u89E3\u51B3Node\u7248\u672C\u95EE\u9898fsjs45   primordials","permalink":"/docs-hub/blog/\u89E3\u51B3node\u7248\u672C\u95EE\u9898fsjs45---primordials"},"nextItem":{"title":"Go \u4E3A\u4EC0\u4E48\u4E0D\u63A8\u8350\u4F7F\u7528\u9501","permalink":"/docs-hub/blog/go-\u4E3A\u4EC0\u4E48\u4E0D\u63A8\u8350\u4F7F\u7528\u9501"}}')}}]);