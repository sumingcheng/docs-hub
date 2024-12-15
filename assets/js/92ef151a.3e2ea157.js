"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["61628"],{24086:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return c}});var r=n(84657),o=n(85893),s=n(50065);let i={slug:"nginx-\u4E0D\u540C\u573A\u666F\u7684-log-format-\u793A\u4F8B",title:"Nginx \u4E0D\u540C\u573A\u666F\u7684 log format \u793A\u4F8B",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-09-03T00:00:00.000Z")},l="Nginx \u4E0D\u540C\u573A\u666F\u7684 log_format \u793A\u4F8B",a={authorsImageUrls:[void 0]},c=[{value:"\u57FA\u672C\u8BBF\u95EE\u65E5\u5FD7",id:"\u57FA\u672C\u8BBF\u95EE\u65E5\u5FD7",level:2},{value:"\u6027\u80FD\u5206\u6790\u65E5\u5FD7",id:"\u6027\u80FD\u5206\u6790\u65E5\u5FD7",level:2},{value:"\u5B89\u5168\u5BA1\u8BA1\u65E5\u5FD7",id:"\u5B89\u5168\u5BA1\u8BA1\u65E5\u5FD7",level:2},{value:"API \u65E5\u5FD7",id:"api-\u65E5\u5FD7",level:2},{value:"\u8C03\u8BD5\u65E5\u5FD7",id:"\u8C03\u8BD5\u65E5\u5FD7",level:2},{value:"\u5728\u914D\u7F6E\u4E2D\u4F7F\u7528\u65E5\u5FD7",id:"\u5728\u914D\u7F6E\u4E2D\u4F7F\u7528\u65E5\u5FD7",level:2},{value:"\u5F00\u53D1\u65E5\u5E38\u4F7F\u7528",id:"\u5F00\u53D1\u65E5\u5E38\u4F7F\u7528",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u57FA\u672C\u8BBF\u95EE\u65E5\u5FD7",children:"\u57FA\u672C\u8BBF\u95EE\u65E5\u5FD7"}),"\n",(0,o.jsx)(t.p,{children:"\u7528\u4E8E\u5E38\u89C4\u7684\u8BBF\u95EE\u76D1\u63A7,\u8BB0\u5F55\u5173\u952E\u7684\u8BF7\u6C42\u4E0E\u54CD\u5E94\u4FE1\u606F\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'log_format main \'$remote_addr - $remote_user [$time_local] "$request" \'\n                \'$status $body_bytes_sent "$http_referer" \'\n                \'"$http_user_agent" "$http_x_forwarded_for"\';\n'})}),"\n",(0,o.jsx)(t.h2,{id:"\u6027\u80FD\u5206\u6790\u65E5\u5FD7",children:"\u6027\u80FD\u5206\u6790\u65E5\u5FD7"}),"\n",(0,o.jsx)(t.p,{children:"\u7528\u4E8E\u8BC4\u4F30\u8BF7\u6C42\u5904\u7406\u6027\u80FD,\u91CD\u70B9\u5173\u6CE8\u54CD\u5E94\u65F6\u95F4\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"log_format performance '$time_iso8601|$remote_addr|$request_time|$upstream_response_time|'\n                       '$status|$request|$body_bytes_sent';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u5B89\u5168\u5BA1\u8BA1\u65E5\u5FD7",children:"\u5B89\u5168\u5BA1\u8BA1\u65E5\u5FD7"}),"\n",(0,o.jsx)(t.p,{children:"\u8BB0\u5F55\u4E0E\u5B89\u5168\u76F8\u5173\u7684\u989D\u5916\u4FE1\u606F,\u5982 SSL/TLS \u53C2\u6570\u7B49\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"log_format security '$time_iso8601|$remote_addr|$remote_user|$request|'\n                    '$status|$body_bytes_sent|$http_referer|$http_user_agent|'\n                    '$ssl_protocol|$ssl_cipher|$http_x_forwarded_for';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"api-\u65E5\u5FD7",children:"API \u65E5\u5FD7"}),"\n",(0,o.jsx)(t.p,{children:"\u9488\u5BF9 API \u8BF7\u6C42\u7684\u4E13\u7528\u65E5\u5FD7\u683C\u5F0F,\u5173\u6CE8\u8BA4\u8BC1 token\u3001payload \u5927\u5C0F\u7B49\u5185\u5BB9\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"log_format api '$time_iso8601|$remote_addr|$request_method|$uri|$server_protocol|'\n               '$status|$request_time|$http_x_api_token|$content_length';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u8C03\u8BD5\u65E5\u5FD7",children:"\u8C03\u8BD5\u65E5\u5FD7"}),"\n",(0,o.jsx)(t.p,{children:"\u5728\u6392\u67E5\u6545\u969C\u65F6\u4F7F\u7528,\u8BB0\u5F55\u5C3D\u53EF\u80FD\u8BE6\u5C3D\u7684\u4FE1\u606F\u3002\u901A\u5E38\u65E0\u9700\u4E00\u76F4\u542F\u7528\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"log_format debug '$time_iso8601|$remote_addr|$remote_user|$request|'\n                 '$status|$body_bytes_sent|$http_referer|$http_user_agent|'\n                 '$request_time|$upstream_response_time|$upstream_addr|'\n                 '$ssl_protocol|$ssl_cipher|$http_x_forwarded_for|$host|$https';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u5728\u914D\u7F6E\u4E2D\u4F7F\u7528\u65E5\u5FD7",children:"\u5728\u914D\u7F6E\u4E2D\u4F7F\u7528\u65E5\u5FD7"}),"\n",(0,o.jsx)(t.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u5728\u751F\u4EA7\u73AF\u5883\u53EF\u7528\u7684\u5B8C\u6574\u793A\u4F8B"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"http {\n    log_format main '...';\n    log_format performance '...';\n    log_format security '...';\n    log_format api '...';\n    #log_format debug '...';\n\u200B\n    access_log /var/log/nginx/access.log main;\n    error_log /var/log/nginx/error.log warn;\n\u200B\n    server {\n        listen 80;\n        server_name example.com;\n\n        location /api {\n            access_log /var/log/nginx/api.log api;\n            # ...\n        }\n\u200B\n        location /debug {\n            access_log /var/log/nginx/debug.log debug;\n            # ...\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u5F00\u53D1\u65E5\u5E38\u4F7F\u7528",children:"\u5F00\u53D1\u65E5\u5E38\u4F7F\u7528"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"  log_format backend_log '$time_local|$remote_addr|$http_x_forwarded_for|$remote_user|'\n  '$request_method|$request_uri|$server_protocol|$http_host|'\n  '$status|$body_bytes_sent|$request_time|$upstream_response_time|'\n  '$upstream_addr|$upstream_status|$http_referer|$http_user_agent|'\n  '$request_id';\n"})})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var r=n(67294);let o={},s=r.createContext(o);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},84657:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/nginx-\u4E0D\u540C\u573A\u666F\u7684-log-format-\u793A\u4F8B","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-03-Nginx_\u4E0D\u540C\u573A\u666F\u7684_log_format_\u793A\u4F8B.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-03-Nginx_\u4E0D\u540C\u573A\u666F\u7684_log_format_\u793A\u4F8B.md","title":"Nginx \u4E0D\u540C\u573A\u666F\u7684 log format \u793A\u4F8B","description":"\u57FA\u672C\u8BBF\u95EE\u65E5\u5FD7","date":"2024-09-03T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":0.8866666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"nginx-\u4E0D\u540C\u573A\u666F\u7684-log-format-\u793A\u4F8B","title":"Nginx \u4E0D\u540C\u573A\u666F\u7684 log format \u793A\u4F8B","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-09-03T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u5B89\u88C5 Helm \u914D\u7F6E\u4EE3\u7406","permalink":"/docs-hub/blog/\u5B89\u88C5-helm-\u914D\u7F6E\u4EE3\u7406"},"nextItem":{"title":"VSCode SSH\u5F00\u53D1\u514D\u5BC6\u767B\u5F55","permalink":"/docs-hub/blog/vscode-ssh\u5F00\u53D1\u514D\u5BC6\u767B\u5F55"}}')}}]);