"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["74770"],{31277:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var s=t(47666),r=t(85893),c=t(50065);let o={slug:"docker-\u914D\u7F6E\u4EE3\u7406",title:"Docker \u914D\u7F6E\u4EE3\u7406",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-06-07T00:00:00.000Z")},d="Docker \u914D\u7F6E\u4EE3\u7406",i={authorsImageUrls:[void 0]},l=[{value:"\u521B\u5EFA systemd \u670D\u52A1\u8986\u76D6\u6587\u4EF6",id:"\u521B\u5EFA-systemd-\u670D\u52A1\u8986\u76D6\u6587\u4EF6",level:3},{value:"\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF",id:"\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF",level:3},{value:"\u91CD\u65B0\u52A0\u8F7D systemd \u914D\u7F6E",id:"\u91CD\u65B0\u52A0\u8F7D-systemd-\u914D\u7F6E",level:3},{value:"\u91CD\u542F Docker \u670D\u52A1",id:"\u91CD\u542F-docker-\u670D\u52A1",level:3},{value:"\u9A8C\u8BC1\u4EE3\u7406\u8BBE\u7F6E\u662F\u5426\u751F\u6548",id:"\u9A8C\u8BC1\u4EE3\u7406\u8BBE\u7F6E\u662F\u5426\u751F\u6548",level:3}];function u(e){let n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u521B\u5EFA-systemd-\u670D\u52A1\u8986\u76D6\u6587\u4EF6",children:"\u521B\u5EFA systemd \u670D\u52A1\u8986\u76D6\u6587\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u4E3A\u4E86\u907F\u514D\u76F4\u63A5\u4FEE\u6539\u539F\u59CB\u7684 systemd \u670D\u52A1\u6587\u4EF6"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u6253\u5F00\u7EC8\u7AEF\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u4E3A ",(0,r.jsx)(n.code,{children:"docker.service"})," \u521B\u5EFA\u6216\u7F16\u8F91\u4E00\u4E2A\u8986\u76D6\u6587\u4EF6"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo systemctl edit docker.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u6253\u5F00\u4E00\u4E2A\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u5141\u8BB8\u4F60\u4E3A Docker \u670D\u52A1\u6DFB\u52A0\u6216\u4FEE\u6539\u914D\u7F6E\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF",children:"\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6253\u5F00\u7684\u7F16\u8F91\u5668\u4E2D\uFF0C\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\u4EE5\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u4F7F\u7528\u60A8\u7684\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740\u548C\u7AEF\u53E3\u66FF\u6362 ",(0,r.jsx)(n.code,{children:"127.0.0.1:7890"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[Service]\nEnvironment="HTTP_PROXY=socks5://127.0.0.1:7890"\nEnvironment="HTTPS_PROXY=socks5://127.0.0.1:7890"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4FDD\u5B58\u5E76\u5173\u95ED\u7F16\u8F91\u5668\u3002systemd \u4F1A\u81EA\u52A8\u4FDD\u5B58\u8FD9\u4E9B\u66F4\u6539\u5230 ",(0,r.jsx)(n.code,{children:"/etc/systemd/system/docker.service.d/override.conf"})," \u6587\u4EF6\uFF0C\u8FD9\u662F\u4E00\u4E2A\u4E13\u95E8\u4E3A\u8986\u76D6\u539F\u59CB\u670D\u52A1\u914D\u7F6E\u7684\u6587\u4EF6\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u91CD\u65B0\u52A0\u8F7D-systemd-\u914D\u7F6E",children:"\u91CD\u65B0\u52A0\u8F7D systemd \u914D\u7F6E"}),"\n",(0,r.jsx)(n.p,{children:"\u4FEE\u6539 systemd \u914D\u7F6E\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\uFF0C\u4F7F\u66F4\u6539\u751F\u6548"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u4E00\u6B65\u786E\u4FDD systemd \u8BFB\u53D6\u4E86\u6700\u65B0\u7684\u670D\u52A1\u914D\u7F6E\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u91CD\u542F-docker-\u670D\u52A1",children:"\u91CD\u542F Docker \u670D\u52A1"}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540E\uFF0C\u91CD\u542F Docker \u670D\u52A1\u4EE5\u5E94\u7528\u65B0\u7684\u4EE3\u7406\u8BBE\u7F6E"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo systemctl restart docker\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u9A8C\u8BC1\u4EE3\u7406\u8BBE\u7F6E\u662F\u5426\u751F\u6548",children:"\u9A8C\u8BC1\u4EE3\u7406\u8BBE\u7F6E\u662F\u5426\u751F\u6548"}),"\n",(0,r.jsx)(n.p,{children:"\u5B8C\u6210\u4E0A\u8FF0\u6B65\u9AA4\u540E\uFF0C\u53EF\u4EE5\u68C0\u67E5 Docker \u670D\u52A1\u7684\u73AF\u5883\u53D8\u91CF\u662F\u5426\u6B63\u786E\u8BBE\u7F6E\u3002\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u670D\u52A1\u7684\u5F53\u524D\u72B6\u6001\u548C\u73AF\u5883\u53D8\u91CF"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"systemctl status docker.service\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8F93\u51FA\u4E2D\uFF0C\u5E94\u5F53\u80FD\u770B\u5230\u8BBE\u7F6E\u7684\u73AF\u5883\u53D8\u91CF ",(0,r.jsx)(n.code,{children:"HTTP_PROXY"})," \u548C ",(0,r.jsx)(n.code,{children:"HTTPS_PROXY"}),"\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(67294);let r={},c=s.createContext(r);function o(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}},47666:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/docker-\u914D\u7F6E\u4EE3\u7406","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-07-Docker_\u914D\u7F6E\u4EE3\u7406.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-07-Docker_\u914D\u7F6E\u4EE3\u7406.md","title":"Docker \u914D\u7F6E\u4EE3\u7406","description":"\u521B\u5EFA systemd \u670D\u52A1\u8986\u76D6\u6587\u4EF6","date":"2024-06-07T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.0833333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"docker-\u914D\u7F6E\u4EE3\u7406","title":"Docker \u914D\u7F6E\u4EE3\u7406","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-06-07T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Linux \u4F7F\u7528 zstd \u89E3\u538B\u7F29","permalink":"/docs-hub/blog/linux-\u4F7F\u7528-zstd-\u89E3\u538B\u7F29"},"nextItem":{"title":"npm \u8BBE\u7F6E\u6E90 \u6DD8\u5B9D\u963F\u91CC\u817E\u8BAF\u534E\u4E3A\u7F51\u6613\u4E2D\u79D1\u6E05\u534E","permalink":"/docs-hub/blog/npm-\u8BBE\u7F6E\u6E90-\u6DD8\u5B9D\u963F\u91CC\u817E\u8BAF\u534E\u4E3A\u7F51\u6613\u4E2D\u79D1\u6E05\u534E"}}')}}]);