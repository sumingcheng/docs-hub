"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["89104"],{52589:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var s=r(34943),t=r(85893),c=r(50065);let o={slug:"docker-\u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9",title:"Docker \u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-09-25T00:00:00.000Z")},i="Docker \u66F4\u6362\u955C\u50CF\u6E90\uFF08\u963F\u91CC\u3001\u79D1\u5927\u3001\u7F51\u6613\u3001\u817E\u8BAF\u3001\u4E2D\u79D1\u5927\u3001\u5FAE\u8F6F\u3001\u5B98\u65B9\uFF09",l={authorsImageUrls:[void 0]},d=[{value:"\u539F\u5730\u5740",id:"\u539F\u5730\u5740",level:2},{value:"Docker \u5B98\u65B9\u955C\u50CF\u52A0\u901F\u5668\uFF08\u4E2D\u56FD\u533A\uFF09",id:"docker-\u5B98\u65B9\u955C\u50CF\u52A0\u901F\u5668\u4E2D\u56FD\u533A",level:3},{value:"\u7F51\u6613\u4E91\u955C\u50CF\u52A0\u901F\u5668",id:"\u7F51\u6613\u4E91\u955C\u50CF\u52A0\u901F\u5668",level:3},{value:"\u79D1\u5927\u8BAF\u98DE\u5F00\u6E90\u955C\u50CF\u52A0\u901F\u5668",id:"\u79D1\u5927\u8BAF\u98DE\u5F00\u6E90\u955C\u50CF\u52A0\u901F\u5668",level:3},{value:"Azure \u4E2D\u56FD\u955C\u50CF\u52A0\u901F\u5668",id:"azure-\u4E2D\u56FD\u955C\u50CF\u52A0\u901F\u5668",level:3},{value:"\u817E\u8BAF\u4E91\u516C\u5171\u955C\u50CF\u5E93",id:"\u817E\u8BAF\u4E91\u516C\u5171\u955C\u50CF\u5E93",level:3},{value:"\u963F\u91CC\u4E91\u516C\u5171\u955C\u50CF\u52A0\u901F\u5668",id:"\u963F\u91CC\u4E91\u516C\u5171\u955C\u50CF\u52A0\u901F\u5668",level:3},{value:"\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66\u955C\u50CF\u52A0\u901F\u5668",id:"\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66\u955C\u50CF\u52A0\u901F\u5668",level:3},{value:"2024 \u5E74 8 \u6708 2 \u65E5 09:14:06 \u66F4\u65B0",id:"2024-\u5E74-8-\u6708-2-\u65E5-091406-\u66F4\u65B0",level:2},{value:"2024 \u5E74 8 \u6708 12 \u65E5 15:32:23 \u66F4\u65B0",id:"2024-\u5E74-8-\u6708-12-\u65E5-153223-\u66F4\u65B0",level:2}];function h(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7F16\u8F91 Docker \u914D\u7F6E\u6587\u4EF6"}),": \u6253\u5F00\u6216\u521B\u5EFA ",(0,t.jsx)(n.code,{children:"/etc/docker/daemon.json"})," \u6587\u4EF6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n  "registry-mirrors": [\n    "https://registry.docker-cn.com",\n    "http://hub-mirror.c.163.com",\n    "https://docker.mirrors.ustc.edu.cn",\n    "https://dockerhub.azk8s.cn",\n    "https://mirror.ccs.tencentyun.com",\n    "https://registry.cn-hangzhou.aliyuncs.com",\n    "https://docker.mirrors.ustc.edu.cn"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u91CD\u542F Docker \u670D\u52A1"}),": \u4E3A\u4F7F\u914D\u7F6E\u751F\u6548\uFF0C\u8BF7\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl daemon-reload\nsudo systemctl restart docker\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u539F\u5730\u5740",children:"\u539F\u5730\u5740"}),"\n",(0,t.jsx)(n.h3,{id:"docker-\u5B98\u65B9\u955C\u50CF\u52A0\u901F\u5668\u4E2D\u56FD\u533A",children:"Docker \u5B98\u65B9\u955C\u50CF\u52A0\u901F\u5668\uFF08\u4E2D\u56FD\u533A\uFF09"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5730\u5740"}),": ",(0,t.jsx)(n.code,{children:"https://registry.docker-cn.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7F51\u6613\u4E91\u955C\u50CF\u52A0\u901F\u5668",children:"\u7F51\u6613\u4E91\u955C\u50CF\u52A0\u901F\u5668"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5730\u5740"}),": ",(0,t.jsx)(n.code,{children:"http://hub-mirror.c.163.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u79D1\u5927\u8BAF\u98DE\u5F00\u6E90\u955C\u50CF\u52A0\u901F\u5668",children:"\u79D1\u5927\u8BAF\u98DE\u5F00\u6E90\u955C\u50CF\u52A0\u901F\u5668"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5730\u5740"}),": ",(0,t.jsx)(n.code,{children:"https://docker.mirrors.ustc.edu.cn"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"azure-\u4E2D\u56FD\u955C\u50CF\u52A0\u901F\u5668",children:"Azure \u4E2D\u56FD\u955C\u50CF\u52A0\u901F\u5668"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5730\u5740"}),": ",(0,t.jsx)(n.code,{children:"https://dockerhub.azk8s.cn"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u817E\u8BAF\u4E91\u516C\u5171\u955C\u50CF\u5E93",children:"\u817E\u8BAF\u4E91\u516C\u5171\u955C\u50CF\u5E93"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5730\u5740"}),": ",(0,t.jsx)(n.code,{children:"https://mirror.ccs.tencentyun.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u963F\u91CC\u4E91\u516C\u5171\u955C\u50CF\u52A0\u901F\u5668",children:"\u963F\u91CC\u4E91\u516C\u5171\u955C\u50CF\u52A0\u901F\u5668"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5730\u5740"}),": ",(0,t.jsx)(n.code,{children:"https://registry.cn-hangzhou.aliyuncs.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66\u955C\u50CF\u52A0\u901F\u5668",children:"\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66\u955C\u50CF\u52A0\u901F\u5668"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5730\u5740"}),": ",(0,t.jsx)(n.code,{children:"https://docker.mirrors.ustc.edu.cn"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2024-\u5E74-8-\u6708-2-\u65E5-091406-\u66F4\u65B0",children:"2024 \u5E74 8 \u6708 2 \u65E5 09:14:06 \u66F4\u65B0"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u4E0A\u9762\u7684 G \u4E86\uFF0C\u53EF\u4EE5\u8BD5\u8BD5\u4E0B\u9762\u8FD9\u4E9B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "registry-mirrors": [\n        "https://hub.uuuadc.top",\n        "https://docker.anyhub.us.kg",\n        "https://dockerhub.jobcher.com",\n        "https://dockerhub.icu",\n        "https://docker.ckyl.me",\n        "https://docker.awsl9527.cn"\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"2024-\u5E74-8-\u6708-12-\u65E5-153223-\u66F4\u65B0",children:"2024 \u5E74 8 \u6708 12 \u65E5 15:32:23 \u66F4\u65B0"}),"\n",(0,t.jsx)(n.p,{children:"\u955C\u50CF\u6E90\u5931\u6548\u7684\u95EE\u9898,\u901A\u5E38\u6709\u4EE5\u4E0B\u51E0\u79CD\u957F\u671F\u89E3\u51B3\u65B9\u6848"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4F7F\u7528\u963F\u91CC\u4E91+GitHub \u6784\u5EFA\u955C\u50CF"})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD9\u4E2A\u7F51\u4E0A\u6709\u5F88\u591A\u6559\u7A0B\uFF0C\u5C31\u7EC6\u8BF4\u4E86"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u672C\u673A\u914D\u7F6E\u4EE3\u7406 (\u63A8\u8350)"})}),"\n",(0,t.jsx)(n.p,{children:"\u53EF\u4EE5\u5C01\u88C5\u4E00\u4E0B clash\uFF0C\u5BB9\u5668\u542F\u52A8\uFF0C\u65B9\u4FBF\u7BA1\u7406"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u642D\u5EFA\u79C1\u6709\u5BB9\u5668\u955C\u50CF\u4ED3\u5E93(\u5982 Harbor)"})}),"\n",(0,t.jsx)(n.p,{children:"Harbor \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u4F01\u4E1A\u7EA7\u5BB9\u5668\u955C\u50CF\u4ED3\u5E93,\u63D0\u4F9B\u4E86\u955C\u50CF\u7BA1\u7406\u3001\u8BBF\u95EE\u63A7\u5236\u3001\u5B89\u5168\u626B\u63CF\u7B49\u529F\u80FD\u3002\u642D\u5EFA\u79C1\u6709\u4ED3\u5E93\u53EF\u4EE5\u65B9\u4FBF\u56E2\u961F\u5185\u90E8\u7684\u955C\u50CF\u4E0B\u8F7D\u548C\u540C\u6B65,\u540C\u65F6\u4E5F\u9700\u8981\u914D\u7F6E\u76F8\u5E94\u7684\u4EE3\u7406\u4EE5\u52A0\u901F\u8BBF\u95EE\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(67294);let t={},c=s.createContext(t);function o(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}},34943:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/docker-\u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-25-Docker_\u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-25-Docker_\u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9.md","title":"Docker \u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9","description":"\u7F16\u8F91 Docker \u914D\u7F6E\u6587\u4EF6: \u6253\u5F00\u6216\u521B\u5EFA /etc/docker/daemon.json \u6587\u4EF6","date":"2024-09-25T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.1766666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"docker-\u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9","title":"Docker \u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-09-25T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Linux \u4F7F\u7528 tar \u547D\u4EE4\u8FDB\u884C\u8FC1\u79FB","permalink":"/docs-hub/blog/linux-\u4F7F\u7528-tar-\u547D\u4EE4\u8FDB\u884C\u8FC1\u79FB"},"nextItem":{"title":"FastGPT47  chatglm3-6b  m3e \u672C\u5730\u90E8\u7F72","permalink":"/docs-hub/blog/fastgpt47--chatglm3-6b--m3e-\u672C\u5730\u90E8\u7F72"}}')}}]);