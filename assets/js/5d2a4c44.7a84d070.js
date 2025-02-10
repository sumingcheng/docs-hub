"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["61577"],{54533:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return l}});var o=t(44461),r=t(85893),s=t(50065);let a={slug:"nginx-\u914D\u7F6E\u793A\u4F8B",title:"Nginx \u914D\u7F6E\u793A\u4F8B",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2023-11-20T00:00:00.000Z")},i="Nginx \u914D\u7F6E\u793A\u4F8B",c={authorsImageUrls:[void 0]},l=[];function u(e){let n={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"http {\n    # \u57FA\u7840\u914D\u7F6E\n    include       mime.types;\n    default_type  application/octet-stream;\n    sendfile        on;\n    keepalive_timeout  65;\n\n    # \u65E5\u5FD7\u914D\u7F6E\n    access_log /var/log/nginx/access.log;\n    error_log /var/log/nginx/error.log;\n\n    # \u670D\u52A1\u5668\u914D\u7F6E\n    server {\n        listen       80;  # \u76D1\u542C\u7AEF\u53E3\n        server_name  localhost;  # \u670D\u52A1\u5668\u540D\n\n        # \u5BF9 /http \u8BF7\u6C42\u7684\u5904\u7406\n        location /http {\n            # URL \u91CD\u5199\uFF0C\u79FB\u9664 '/http'\n            rewrite ^/http/(.*) /$1 break;\n\n            # \u4EE3\u7406\u8BBE\u7F6E\n            proxy_pass http://localhost:3335;\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection 'upgrade';\n            proxy_set_header Host $host;\n            proxy_cache_bypass $http_upgrade;\n\n            # \u8BBE\u7F6E\u4EE3\u7406\u7684\u5934\u90E8\u4FE1\u606F\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto $scheme;\n        }\n\n        # \u9ED8\u8BA4\u5904\u7406\n        location / {\n            root   html;\n            index  index.html index.htm;\n        }\n\n        # \u9519\u8BEF\u9875\u9762\u914D\u7F6E\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n    }\n}\n"})})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var o=t(67294);let r={},s=o.createContext(r);function a(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}},44461:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/nginx-\u914D\u7F6E\u793A\u4F8B","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2023-11-20-Nginx_\u914D\u7F6E\u793A\u4F8B.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2023-11-20-Nginx_\u914D\u7F6E\u793A\u4F8B.md","title":"Nginx \u914D\u7F6E\u793A\u4F8B","description":"","date":"2023-11-20T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":0.48333333333333334,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"nginx-\u914D\u7F6E\u793A\u4F8B","title":"Nginx \u914D\u7F6E\u793A\u4F8B","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2023-11-20T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Koa \u548C Express \u6846\u67B6\u533A\u522B","permalink":"/docs-hub/blog/koa-\u548C-express-\u6846\u67B6\u533A\u522B"},"nextItem":{"title":"ORMObject-Relational Mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04","permalink":"/docs-hub/blog/ormobject-relational-mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04"}}')}}]);