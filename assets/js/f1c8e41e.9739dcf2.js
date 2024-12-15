"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["65649"],{50344:function(e,n,o){o.r(n),o.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return a},frontMatter:function(){return c},metadata:function(){return t},toc:function(){return u}});var t=o(16031),s=o(85893),r=o(50065);let c={slug:"docker-\u67E5\u770B-volume-\u4F4D\u7F6E",title:"docker \u67E5\u770B volume \u4F4D\u7F6E",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-06-26T00:00:00.000Z")},l="docker \u67E5\u770B volume \u4F4D\u7F6E",i={authorsImageUrls:[void 0]},u=[];function d(e){let n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5217\u51FA\u6240\u6709\u5377"}),"\uFF1A\u9996\u5148\u786E\u4FDD\u5377 ",(0,s.jsx)(n.code,{children:"logs"})," \u5DF2\u88AB\u6B63\u786E\u521B\u5EFA\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker volume ls\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u68C0\u67E5\u5377\u7684\u8BE6\u60C5"}),"\uFF1A\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6765\u67E5\u770B ",(0,s.jsx)(n.code,{children:"logs"})," \u5377\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u62EC\u5B83\u7684\u5B9E\u9645\u5B58\u50A8\u8DEF\u5F84\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker volume inspect logs \u5377\u540D\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u4E2A\u547D\u4EE4\u5C06\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u5377\u8BE6\u7EC6\u4FE1\u606F\u7684 JSON \u6570\u7EC4\u3002\u5176\u4E2D\u7684 ",(0,s.jsx)(n.code,{children:'"Mountpoint"'})," \u952E\u503C\u5BF9\u5E94\u7684\u503C\u5C31\u662F\u5377\u5728\u5BBF\u4E3B\u673A\u4E0A\u7684\u5B58\u50A8\u8DEF\u5F84\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[\n    {\n        "CreatedAt": "2024-06-20T13:47:04+08:00",\n        "Driver": "local",\n        "Labels": {\n            "com.docker.compose.project": "mysql-redis",\n            "com.docker.compose.version": "2.27.1",\n            "com.docker.compose.volume": "mysql"\n        },\n        "Mountpoint": "/var/lib/docker/volumes/mysql-redis_mysql/_data",\n        "Name": "mysql-redis_mysql",\n        "Options": null,\n        "Scope": "local"\n    }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C",(0,s.jsx)(n.code,{children:"logs"})," \u5377\u7684\u5B58\u50A8\u8DEF\u5F84\u662F ",(0,s.jsx)(n.code,{children:"/var/lib/docker/volumes/mysql-redis_mysql/_data"}),"\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE\u8FD9\u4E2A\u8DEF\u5F84\u6765\u67E5\u770B\u548C\u7BA1\u7406\u5B58\u50A8\u5728\u5377\u4E2D\u7684\u65E5\u5FD7\u6587\u4EF6\u3002"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return c}});var t=o(67294);let s={},r=t.createContext(s);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}},16031:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/docker-\u67E5\u770B-volume-\u4F4D\u7F6E","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-26-docker_\u67E5\u770B_volume_\u4F4D\u7F6E.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-26-docker_\u67E5\u770B_volume_\u4F4D\u7F6E.md","title":"docker \u67E5\u770B volume \u4F4D\u7F6E","description":"\u5217\u51FA\u6240\u6709\u5377\uFF1A\u9996\u5148\u786E\u4FDD\u5377 logs \u5DF2\u88AB\u6B63\u786E\u521B\u5EFA\u3002","date":"2024-06-26T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":0.5733333333333334,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"docker-\u67E5\u770B-volume-\u4F4D\u7F6E","title":"docker \u67E5\u770B volume \u4F4D\u7F6E","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-06-26T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Express \u4E2D\u4F7F\u7528 Winston \u8BB0\u5F55\u65E5\u5FD7","permalink":"/docs-hub/blog/express-\u4E2D\u4F7F\u7528-winston-\u8BB0\u5F55\u65E5\u5FD7"},"nextItem":{"title":"Linux Micro \u4F7F\u7528\u548C\u5E38\u7528\u63D2\u4EF6\u914D\u7F6E","permalink":"/docs-hub/blog/linux-micro-\u4F7F\u7528\u548C\u5E38\u7528\u63D2\u4EF6\u914D\u7F6E"}}')}}]);