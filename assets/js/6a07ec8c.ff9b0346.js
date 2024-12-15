"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["36019"],{66629:function(e,o,n){n.r(o),n.d(o,{assets:function(){return i},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return l}});var c=n(76738),s=n(85893),r=n(50065);let d={slug:"docker-compose-\u547D\u4EE4\u8BE6\u89E3",title:"Docker Compose \u547D\u4EE4\u8BE6\u89E3",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-06-06T00:00:00.000Z")},p="Docker Compose \u547D\u4EE4\u8BE6\u89E3",i={authorsImageUrls:[void 0]},l=[{value:"docker-compose up",id:"docker-compose-up",level:3},{value:"docker-compose down",id:"docker-compose-down",level:3},{value:"docker-compose build",id:"docker-compose-build",level:3},{value:"docker-compose ps",id:"docker-compose-ps",level:3},{value:"docker-compose start",id:"docker-compose-start",level:3},{value:"docker-compose stop",id:"docker-compose-stop",level:3},{value:"docker-compose restart",id:"docker-compose-restart",level:3},{value:"docker-compose logs",id:"docker-compose-logs",level:3},{value:"docker-compose pull",id:"docker-compose-pull",level:3},{value:"docker-compose push",id:"docker-compose-push",level:3},{value:"docker-compose exec",id:"docker-compose-exec",level:3},{value:"docker-compose run",id:"docker-compose-run",level:3},{value:"docker-compose rm",id:"docker-compose-rm",level:3},{value:"docker-compose config",id:"docker-compose-config",level:3},{value:"docker-compose kill",id:"docker-compose-kill",level:3},{value:"docker-compose pause",id:"docker-compose-pause",level:3},{value:"docker-compose unpause",id:"docker-compose-unpause",level:3},{value:"docker-compose port",id:"docker-compose-port",level:3},{value:"docker-compose top",id:"docker-compose-top",level:3},{value:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6",id:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6",level:3}];function t(e){let o={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h3,{id:"docker-compose-up",children:"docker-compose up"}),"\n",(0,s.jsx)(o.p,{children:"\u6B64\u547D\u4EE4\u7528\u4E8E\u521B\u5EFA\u3001\u91CD\u5EFA\u3001\u542F\u52A8\u548C\u8FDE\u63A5\u5BB9\u5668\u3002\u5728\u524D\u53F0\u8FD0\u884C\u65F6\uFF0C\u4F1A\u663E\u793A\u6240\u6709\u670D\u52A1\u7684\u542F\u52A8\u65E5\u5FD7\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'Creating network "myapp_default" with the default driver\nCreating volume "myapp_dbdata" with default driver\nCreating myapp_web_1 ... done\nCreating myapp_db_1  ... done\nAttaching to myapp_web_1, myapp_db_1\n'})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-down",children:"docker-compose down"}),"\n",(0,s.jsxs)(o.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",(0,s.jsx)(o.code,{children:"docker-compose down"})," ",(0,s.jsx)(o.strong,{children:"\u4E0D\u4F1A"})," \u5220\u9664\u7531 ",(0,s.jsx)(o.code,{children:"docker-compose.yml"})," \u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u5377\uFF08\u5373\u90A3\u4E9B\u901A\u8FC7 ",(0,s.jsx)(o.code,{children:"volumes:"})," \u90E8\u5206\u6307\u5B9A\u7684\u5377\uFF09\u3002\u8FD9\u4E9B\u5377\u4F1A\u4FDD\u7559\u4EE5\u4FBF\u5C06\u6765\u91CD\u7528\uFF0C\u9664\u975E\u60A8\u624B\u52A8\u5220\u9664\u5B83\u4EEC\u3002"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Stopping myapp_web_1 ... done\nStopping myapp_db_1  ... done\nRemoving myapp_web_1 ... done\nRemoving myapp_db_1  ... done\nRemoving network myapp_default\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-build",children:"docker-compose build"}),"\n",(0,s.jsx)(o.p,{children:"\u5982\u679C\u6709 build \u7684\u914D\u7F6E\u4F1A\u91CD\u65B0\u6784\u5EFA\u670D\u52A1\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"db uses an image, skipping\nBuilding web\nStep 1/3 : FROM node:10\n ---\x3e 123abc\nStep 2/3 : ADD . /code\n ---\x3e Using cache\n ---\x3e 456def\nStep 3/3 : RUN npm install\n ---\x3e Running in 789ghi\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-ps",children:"docker-compose ps"}),"\n",(0,s.jsx)(o.p,{children:"\u663E\u793A\u4E0E\u914D\u7F6E\u4E2D\u5B9A\u4E49\u7684\u670D\u52A1\u76F8\u5173\u7684\u5BB9\u5668\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"     Name                   Command              State           Ports\n---------------------------------------------------------------------------------\nmyapp_web_1   nginx -g daemon off;          Up      0.0.0.0:80->80/tcp,:::80->80/tcp\nmyapp_db_1    docker-entrypoint.sh postgres Up      5432/tcp\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-start",children:"docker-compose start"}),"\n",(0,s.jsx)(o.p,{children:"\u542F\u52A8\u4E00\u4E2A\u6216\u591A\u4E2A\u5DF2\u505C\u6B62\u7684\u5BB9\u5668\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Starting db_1 ... done\nStarting web_1 ... done\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-stop",children:"docker-compose stop"}),"\n",(0,s.jsx)(o.p,{children:"\u505C\u6B62\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Stopping myapp_web_1 ... done\nStopping myapp_db_1  ... done\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-restart",children:"docker-compose restart"}),"\n",(0,s.jsx)(o.p,{children:"\u91CD\u542F\u670D\u52A1\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Restarting myapp_web_1 ... done\nRestarting myapp_db_1  ... done\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-logs",children:"docker-compose logs"}),"\n",(0,s.jsx)(o.p,{children:"\u67E5\u770B\u670D\u52A1\u7684\u65E5\u5FD7\u8F93\u51FA\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Attaching to myapp_web_1, myapp_db_1\nweb_1  | Example app listening at http://localhost:3000\ndb_1   | 2021-01-01 12:00:00.000 UTC [1] LOG:  database system is ready to accept connections\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-pull",children:"docker-compose pull"}),"\n",(0,s.jsx)(o.p,{children:"\u62C9\u53D6\u670D\u52A1\u4F9D\u8D56\u7684\u955C\u50CF\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Pulling db (postgres:latest)...\nlatest: Pulling from library/postgres\nDigest: sha256:abc123\nStatus: Downloaded newer image for postgres:latest\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-push",children:"docker-compose push"}),"\n",(0,s.jsx)(o.p,{children:"\u5C06\u670D\u52A1\u4E2D\u6D89\u53CA\u7684\u955C\u50CF\u63A8\u9001\u5230 Docker Hub \u6216\u5176\u4ED6\u955C\u50CF\u4ED3\u5E93\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Pushing api (myregistry.com/myapp/api)...\nThe push refers to repository [docker.io/myapp/api]\n5f70bf18a086: Pushed\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-exec",children:"docker-compose exec"}),"\n",(0,s.jsxs)(o.p,{children:["\u5982\u679C\u60A8\u7684 ",(0,s.jsx)(o.code,{children:"docker-compose.yml"})," \u5B9A\u4E49\u4E2D\u67D0\u4E2A\u670D\u52A1\u914D\u7F6E\u4E3A\u591A\u4E2A\u5BB9\u5668\u5B9E\u4F8B\uFF0C\u6267\u884C ",(0,s.jsx)(o.code,{children:"docker-compose exec"})," \u547D\u4EE4\u5C06\u9ED8\u8BA4\u9009\u62E9\u7531\u8BE5\u670D\u52A1\u521B\u5EFA\u7684\u7B2C\u4E00\u4E2A\u5BB9\u5668\u3002\u5982\u679C\u9700\u8981\u5728\u7279\u5B9A\u7684\u5BB9\u5668\u4E0A\u6267\u884C\u547D\u4EE4\uFF0C\u901A\u5E38\u9700\u8981\u901A\u8FC7 Docker \u7684\u5E95\u5C42\u547D\u4EE4\u6765\u5904\u7406"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'$ docker-compose exec db psql -U postgres\n\u200B\npsql (12.2)\nType "help" for help.\n\u200B\npostgres=#\n'})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-run",children:"docker-compose run"}),"\n",(0,s.jsx)(o.p,{children:"\u4F7F\u7528\u4E00\u4E2A\u670D\u52A1\u4EE5\u4E00\u6B21\u6027\u6A21\u5F0F\u6267\u884C\u547D\u4EE4\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"$ docker-compose run web env\n\u200B\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nHOSTNAME=8b1b53f6cfa9\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-rm",children:"docker-compose rm"}),"\n",(0,s.jsx)(o.p,{children:"\u5220\u9664\u6240\u6709\uFF08\u505C\u6B62\u72B6\u6001\u7684\uFF09\u670D\u52A1\u5BB9\u5668\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Going to remove myapp_web_1, myapp_db_1\nAre you sure? [yN] y\nRemoving myapp_web_1 ... done\nRemoving myapp_db_1  ... done\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-config",children:"docker-compose config"}),"\n",(0,s.jsx)(o.p,{children:"\u9A8C\u8BC1\u5E76\u67E5\u770B\u914D\u7F6E\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"services:\n  db:\n    image: postgres\n    restart: always\n  web:\n    build: .\n    ports:\n     - \"5000:5000\"\nversion: '3.0'\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-kill",children:"docker-compose kill"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"kill"})," \u4E0D\u4F1A\u5220\u9664\u5BB9\u5668\uFF0C\u4E5F\u4E0D\u4F1A\u5220\u9664\u5BB9\u5668\u7684\u7F51\u7EDC\u914D\u7F6E\u6216\u8005\u6302\u8F7D\u7684\u5377\u3002\u8FD9\u610F\u5473\u7740\u60A8\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(o.code,{children:"docker-compose start"})," \u547D\u4EE4\u518D\u6B21\u542F\u52A8\u8FD9\u4E9B\u5BB9\u5668\uFF0C\u800C\u5176\u73AF\u5883\u914D\u7F6E\u548C\u6570\u636E\u5C06\u4FDD\u6301\u4E0D\u53D8\u3002\u8FD9\u4F7F\u5F97 ",(0,s.jsx)(o.code,{children:"kill"})," \u547D\u4EE4\u975E\u5E38\u9002\u7528\u4E8E\u9700\u8981\u5FEB\u901F\u505C\u6B62\u670D\u52A1\u800C\u4E0D\u5E0C\u671B\u4E22\u5931\u4EFB\u4F55\u6570\u636E\u7684\u573A\u666F"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Killing myapp_web_1 ... done\nKilling myapp_db_1  ... done\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-pause",children:"docker-compose pause"}),"\n",(0,s.jsxs)(o.p,{children:["\u5BF9\u5BB9\u5668\u4F7F\u7528 ",(0,s.jsx)(o.code,{children:"pause"})," \u547D\u4EE4\u65F6\uFF0CDocker \u4F1A\u4F7F\u7528 Linux \u5185\u6838\u7684 cgroups \u529F\u80FD\u6765\u6682\u505C\u5BB9\u5668\u4E2D\u6240\u6709\u7684\u8FDB\u7A0B\u3002\u8FD9\u610F\u5473\u7740\u8FD9\u4E9B\u8FDB\u7A0B\u4F1A\u7ACB\u5373\u505C\u6B62\u6267\u884C\uFF0C\u6240\u6709\u7684 CPU \u64CD\u4F5C\u5C06\u4F1A\u88AB\u51BB\u7ED3\uFF0C\u4F46\u662F\u5BB9\u5668\u7684\u5185\u5B58\u72B6\u6001\u4FDD\u6301\u4E0D\u53D8\u3002\u5BB9\u5668\u4E2D\u7684\u8FDB\u7A0B\u5C31\u50CF\u662F\u88AB\u201C\u51BB\u7ED3\u201D\u5728\u67D0\u4E2A\u7279\u5B9A\u7684\u65F6\u523B\u3002"]}),"\n",(0,s.jsx)(o.p,{children:"\u8FD9\u4E2A\u529F\u80FD\u7279\u522B\u9002\u7528\u4E8E\u9700\u8981\u4E34\u65F6\u91CA\u653E\u7CFB\u7EDF\u8D44\u6E90\uFF08\u5982 CPU \u4F7F\u7528\u7387\uFF09\u4F46\u53C8\u4E0D\u60F3\u7ED3\u675F\u6216\u91CD\u542F\u5BB9\u5668\u7684\u60C5\u51B5\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u8FD0\u884C\u7684\u67D0\u4E2A\u670D\u52A1\u6682\u65F6\u4E0D\u9700\u8981\u5904\u7406\u4EFB\u52A1\uFF0C\u4F46\u60A8\u5E0C\u671B\u4FDD\u7559\u5176\u5F53\u524D\u7684\u72B6\u6001\uFF0C\u53EF\u4EE5\u6682\u505C\u8BE5\u670D\u52A1\uFF0C\u4E4B\u540E\u518D\u6062\u590D\u5176\u8FD0\u884C\uFF0C\u6062\u590D\u65F6\u5BB9\u5668\u4F1A\u4ECE\u6682\u505C\u65F6\u7684\u72B6\u6001\u7EE7\u7EED\u8FD0\u884C\u3002"}),"\n",(0,s.jsx)(o.p,{children:"\u7838\u74E6\u9C81\u591A~"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Pausing myapp_web_1 ... done\nPausing myapp_db_1  ... done\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-unpause",children:"docker-compose unpause"}),"\n",(0,s.jsx)(o.p,{children:"\u6062\u590D\u670D\u52A1\u4E2D\u5DF2\u6682\u505C\u7684\u5BB9\u5668\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"Unpausing myapp_web_1 ... done\nUnpausing myapp_db_1  ... done\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-port",children:"docker-compose port"}),"\n",(0,s.jsx)(o.p,{children:"\u6253\u5370\u7ED1\u5B9A\u7684\u516C\u5F00\u7AEF\u53E3\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"$ docker-compose port web 5000\n0.0.0.0:49153\n"})}),"\n",(0,s.jsx)(o.h3,{id:"docker-compose-top",children:"docker-compose top"}),"\n",(0,s.jsx)(o.p,{children:"\u663E\u793A\u8FD0\u884C\u7684\u5BB9\u5668\u4E2D\u7684\u8FDB\u7A0B\u3002"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"myapp_web_1\nUID     PID     PPID    C   STIME   TTY     TIME     CMD\nroot    2618    2595    0   10:00   ?       00:00:02  nginx: master process nginx -g daemon off;\n"})}),"\n",(0,s.jsx)(o.h3,{id:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6",children:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,s.jsxs)(o.p,{children:["\u5982\u679C\u60A8\u6709\u4E00\u4E2A\u4E0D\u662F\u6807\u51C6\u547D\u540D\uFF08\u5373\u975E ",(0,s.jsx)(o.code,{children:"docker-compose.yml"}),"\uFF09\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6BD4\u5982\u53EB ",(0,s.jsx)(o.code,{children:"custom-compose.yaml"}),"\uFF0C\u60A8\u53EF\u4EE5\u8FD9\u6837\u8FD0\u884C ",(0,s.jsx)(o.code,{children:"docker-compose"})," \u547D\u4EE4\uFF1A"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"docker-compose -f custom-compose.yaml up\n"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"\u6574\u7406\u4E0D\u6613\uFF0C\u6C42\u5173\u6CE8"})})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},50065:function(e,o,n){n.d(o,{Z:function(){return p},a:function(){return d}});var c=n(67294);let s={},r=c.createContext(s);function d(e){let o=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function p(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(r.Provider,{value:o},e.children)}},76738:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/docker-compose-\u547D\u4EE4\u8BE6\u89E3","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-06-Docker_Compose_\u547D\u4EE4\u8BE6\u89E3.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-06-Docker_Compose_\u547D\u4EE4\u8BE6\u89E3.md","title":"Docker Compose \u547D\u4EE4\u8BE6\u89E3","description":"docker-compose up","date":"2024-06-06T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":3.4166666666666665,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"docker-compose-\u547D\u4EE4\u8BE6\u89E3","title":"Docker Compose \u547D\u4EE4\u8BE6\u89E3","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-06-06T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Linux \u4F7F\u7528 skopeo","permalink":"/docs-hub/blog/linux-\u4F7F\u7528-skopeo"},"nextItem":{"title":"docker-compose \u914D\u7F6E\u5B57\u6BB5\u8BE6\u89E3","permalink":"/docs-hub/blog/docker-compose-\u914D\u7F6E\u5B57\u6BB5\u8BE6\u89E3"}}')}}]);