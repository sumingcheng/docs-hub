"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["1564"],{44287:function(n,e,t){t.r(e),t.d(e,{assets:function(){return a},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var s=t(84669),o=t(85893),i=t(50065);let r={slug:"\u4F60\u53EF\u4EE5\u4ECE-docker-inspect-\u83B7\u53D6\u54EA\u4E9B\u4FE1\u606F",title:"\u4F60\u53EF\u4EE5\u4ECE docker inspect \u83B7\u53D6\u54EA\u4E9B\u4FE1\u606F",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-11-22T00:00:00.000Z")},c="\u4F60\u53EF\u4EE5\u4ECE docker inspect \u83B7\u53D6\u54EA\u4E9B\u4FE1\u606F",a={authorsImageUrls:[void 0]},u=[{value:"\u5BF9\u6B63\u5728\u8FD0\u884C\u7684 MySQLdocker inspect \u540E\u5185\u5BB9\u5982\u4E0B",id:"\u5BF9\u6B63\u5728\u8FD0\u884C\u7684-mysqldocker-inspect-\u540E\u5185\u5BB9\u5982\u4E0B",level:2}];function l(n){let e={code:"code",h2:"h2",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u5BF9\u6B63\u5728\u8FD0\u884C\u7684-mysqldocker-inspect-\u540E\u5185\u5BB9\u5982\u4E0B",children:"\u5BF9\u6B63\u5728\u8FD0\u884C\u7684 MySQLdocker inspect \u540E\u5185\u5BB9\u5982\u4E0B"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'[\n    {\n        "Id": "92fe41a6dfd5...",  // \u5BB9\u5668\u7684\u552F\u4E00\u6807\u8BC6\u7B26\n        "Created": "2024-10-09T08:32:41.659Z",  // \u5BB9\u5668\u521B\u5EFA\u7684\u65F6\u95F4\u6233\n        "Path": "docker-entrypoint.sh",  // \u5BB9\u5668\u542F\u52A8\u65F6\u6267\u884C\u7684\u811A\u672C\n        "Args": ["--default-authentication-plugin=mysql_native_password"],  // \u811A\u672C\u53C2\u6570\n        "State": {\n            "Status": "running",  // \u5BB9\u5668\u5F53\u524D\u72B6\u6001\uFF0C\u6B63\u5728\u8FD0\u884C\n            "Running": true,  // \u5BB9\u5668\u662F\u5426\u5728\u8FD0\u884C\n            "Health": {\n                "Status": "healthy",  // \u5BB9\u5668\u5065\u5EB7\u72B6\u6001\u4E3A\u5065\u5EB7\n                "FailingStreak": 0,  // \u5065\u5EB7\u68C0\u67E5\u5931\u8D25\u6B21\u6570\n                "Log": []  // \u5065\u5EB7\u68C0\u67E5\u65E5\u5FD7\n            }\n        },\n        "Image": "mysql:8.0.36",  // \u4F7F\u7528\u7684MySQL\u955C\u50CF\u7248\u672C\n        "Name": "/mysql_server",  // \u5BB9\u5668\u540D\u79F0\n        "RestartCount": 0,  // \u91CD\u542F\u6B21\u6570\n        "HostConfig": {\n            "NetworkMode": "mysql_mysql",  // \u7F51\u7EDC\u6A21\u5F0F\n            "PortBindings": {  // \u7AEF\u53E3\u7ED1\u5B9A\u914D\u7F6E\n                "3306/tcp": [{ "HostIp": "", "HostPort": "3306" }]  // \u6620\u5C04\u5230\u4E3B\u673A\u76843306\u7AEF\u53E3\n            },\n            "RestartPolicy": {\n                "Name": "always"  // \u91CD\u542F\u7B56\u7565\uFF0C\u59CB\u7EC8\u91CD\u542F\n            }\n        },\n        "Config": {\n            "Env": [  // \u73AF\u5883\u53D8\u91CF\u914D\u7F6E\n                "MYSQL_DATABASE=demo",  // \u6570\u636E\u5E93\u540D\n                "MYSQL_USER=admin",  // \u7528\u6237\u540D\n                "MYSQL_PASSWORD=123456",  // \u7528\u6237\u5BC6\u7801\n                "MYSQL_ROOT_PASSWORD=123456"  // \u6839\u5BC6\u7801\n            ],\n            "Cmd": ["--default-authentication-plugin=mysql_native_password"],  // \u5BB9\u5668\u542F\u52A8\u547D\u4EE4\n            "Healthcheck": {  // \u5065\u5EB7\u68C0\u67E5\u914D\u7F6E\n                "Test": ["CMD", "mysqladmin", "ping", "-h", "localhost"],  // \u4F7F\u7528mysqladmin ping\u6D4B\u8BD5\n                "Interval": 30000000000,  // \u68C0\u67E5\u95F4\u9694\n                "Retries": 3  // \u91CD\u8BD5\u6B21\u6570\n            }\n        },\n        "NetworkSettings": {\n            "IPAddress": "172.27.0.2",  // \u5BB9\u5668\u5206\u914D\u7684IP\u5730\u5740\n            "Networks": {\n                "mysql_mysql": {  // \u7F51\u7EDC\u914D\u7F6E\n                    "IPAddress": "172.27.0.2",  // \u7F51\u7EDC\u4E2D\u7684IP\u5730\u5740\n                    "Gateway": "172.27.0.1"  // \u7F51\u5173\n                }\n            }\n        }\n    }\n]\n'})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return r}});var s=t(67294);let o={},i=s.createContext(o);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(i.Provider,{value:e},n.children)}},84669:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u4F60\u53EF\u4EE5\u4ECE-docker-inspect-\u83B7\u53D6\u54EA\u4E9B\u4FE1\u606F","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-11-22-\u4F60\u53EF\u4EE5\u4ECE_docker_inspect_\u83B7\u53D6\u54EA\u4E9B\u4FE1\u606F.md","source":"@site/blog/\u540E\u7AEF/2024-11-22-\u4F60\u53EF\u4EE5\u4ECE_docker_inspect_\u83B7\u53D6\u54EA\u4E9B\u4FE1\u606F.md","title":"\u4F60\u53EF\u4EE5\u4ECE docker inspect \u83B7\u53D6\u54EA\u4E9B\u4FE1\u606F","description":"\u5BF9\u6B63\u5728\u8FD0\u884C\u7684 MySQLdocker inspect \u540E\u5185\u5BB9\u5982\u4E0B","date":"2024-11-22T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.01,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u4F60\u53EF\u4EE5\u4ECE-docker-inspect-\u83B7\u53D6\u54EA\u4E9B\u4FE1\u606F","title":"\u4F60\u53EF\u4EE5\u4ECE docker inspect \u83B7\u53D6\u54EA\u4E9B\u4FE1\u606F","authors":["sumingcheng"],"tags":["backend"],"date":"2024-11-22T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"gitmoji-cli \u4F7F\u7528","permalink":"/docs-hub/blog/gitmoji-cli-\u4F7F\u7528"},"nextItem":{"title":"Web \u5F00\u53D1\u4E0B MVC \u6D41\u7A0B","permalink":"/docs-hub/blog/web-\u5F00\u53D1\u4E0B-mvc-\u6D41\u7A0B"}}')}}]);