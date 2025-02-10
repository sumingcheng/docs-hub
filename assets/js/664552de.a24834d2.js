"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["82155"],{94781:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return a},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var s=r(43002),t=r(85893),o=r(50065);let i={slug:"linux-\u5B89\u88C5\u4F7F\u7528-filebrowser",title:"Linux \u5B89\u88C5\u4F7F\u7528 FileBrowser",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-08-08T00:00:00.000Z")},l="Linux \u5B89\u88C5\u4F7F\u7528 FileBrowser",c={authorsImageUrls:[void 0]},u=[{value:"\u5B89\u88C5 FileBrowser",id:"\u5B89\u88C5-filebrowser",level:3},{value:"\u8BBF\u95EE\u548C\u914D\u7F6E FileBrowser",id:"\u8BBF\u95EE\u548C\u914D\u7F6E-filebrowser",level:3},{value:"\u9996\u6B21\u767B\u5F55",id:"\u9996\u6B21\u767B\u5F55",level:2},{value:"\u9AD8\u7EA7\u529F\u80FD",id:"\u9AD8\u7EA7\u529F\u80FD",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u5B89\u88C5-filebrowser",children:"\u5B89\u88C5 FileBrowser"}),"\n",(0,t.jsxs)(n.p,{children:["Docker \u5B89\u88C5 FileBrowser\uFF0C\u9996\u5148\u521B\u5EFA",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," \u7684\u6587\u4EF6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"version: '3.8'\nservices:\n  filebrowser:\n    image: filebrowser/filebrowser:latest\n    container_name: filebrowser\n    ports:\n      - \"8080:80\"\n    volumes:\n      - /path/to/your/files:/srv\n    restart: unless-stopped\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u542F\u52A8 FileBrowser"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker-compose up -d\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8BBF\u95EE\u548C\u914D\u7F6E-filebrowser",children:"\u8BBF\u95EE\u548C\u914D\u7F6E FileBrowser"}),"\n",(0,t.jsxs)(n.p,{children:["\u6D4F\u89C8\u5668\u8BBF\u95EE ",(0,t.jsx)(n.code,{children:"http://<\u60A8\u7684IP\u6216\u57DF\u540D>:8080"})," \u6765\u4F7F\u7528 FileBrowser\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9996\u6B21\u767B\u5F55",children:"\u9996\u6B21\u767B\u5F55"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7528\u6237\u540D"}),": admin"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5BC6\u7801"}),": admin"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u9AD8\u7EA7\u529F\u80FD",children:"\u9AD8\u7EA7\u529F\u80FD"}),"\n",(0,t.jsx)(n.p,{children:"FileBrowser \u652F\u6301\u4E00\u4E9B\u9AD8\u7EA7\u529F\u80FD\uFF0C\u4F8B\u5982\u8BBE\u7F6E\u78C1\u76D8\u914D\u989D\u3001\u9650\u5236\u8BBF\u95EE\u6743\u9650\u548C\u542F\u7528 HTTPS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"HTTPS \u914D\u7F6E"}),"\uFF1A\u5EFA\u8BAE\u542F\u7528 HTTPS \u6765\u5B89\u5168\u5730\u4F7F\u7528 FileBrowser\u3002\u60A8\u53EF\u4EE5\u5728 Docker Compose \u6587\u4EF6\u4E2D\u914D\u7F6E\u53CD\u5411\u4EE3\u7406\u548C SSL/TLS\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u81EA\u5B9A\u4E49\u7528\u6237\u6743\u9650"}),"\uFF1A\u60A8\u53EF\u4EE5\u4E3A\u4E0D\u540C\u7528\u6237\u8BBE\u7F6E\u4E0D\u540C\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u4EE5\u7BA1\u7406\u8C01\u53EF\u4EE5\u8BBF\u95EE\u4EC0\u4E48\u5185\u5BB9\u3002"]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(67294);let t={},o=s.createContext(t);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}},43002:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/linux-\u5B89\u88C5\u4F7F\u7528-filebrowser","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-08-08-Linux_\u5B89\u88C5\u4F7F\u7528_FileBrowser.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-08-08-Linux_\u5B89\u88C5\u4F7F\u7528_FileBrowser.md","title":"Linux \u5B89\u88C5\u4F7F\u7528 FileBrowser","description":"\u5B89\u88C5 FileBrowser","date":"2024-08-08T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":0.6033333333333334,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"linux-\u5B89\u88C5\u4F7F\u7528-filebrowser","title":"Linux \u5B89\u88C5\u4F7F\u7528 FileBrowser","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-08-08T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Docker \u914D\u7F6E\u4EE3\u7406\u4E34\u65F6\u6C38\u4E45\u8BBE\u7F6E","permalink":"/docs-hub/blog/docker-\u914D\u7F6E\u4EE3\u7406\u4E34\u65F6\u6C38\u4E45\u8BBE\u7F6E"},"nextItem":{"title":"Harbor \u914D\u7F6E\u5E76\u751F\u6210\u8BA4\u8BC1\u4FE1\u606F","permalink":"/docs-hub/blog/harbor-\u914D\u7F6E\u5E76\u751F\u6210\u8BA4\u8BC1\u4FE1\u606F"}}')}}]);