"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["47905"],{16396:function(e,n,l){l.r(n),l.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>r,assets:()=>t,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"Frontend/Electron/\u6587\u4EF6URL\u4E8B\u4EF6\u76D1\u542C","title":"Electron \u6587\u4EF6\u548C URL \u5904\u7406\u4E8B\u4EF6\u76D1\u542C","description":"open-file \u4E8B\u4EF6","source":"@site/docs/Frontend/Electron/24.\u6587\u4EF6URL\u4E8B\u4EF6\u76D1\u542C.md","sourceDirName":"Frontend/Electron","slug":"/Frontend/Electron/\u6587\u4EF6URL\u4E8B\u4EF6\u76D1\u542C","permalink":"/docs-hub/Frontend/Electron/\u6587\u4EF6URL\u4E8B\u4EF6\u76D1\u542C","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Electron/24.\u6587\u4EF6URL\u4E8B\u4EF6\u76D1\u542C.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":24,"frontMatter":{},"sidebar":"electronSidebar","previous":{"title":"Electron \u9000\u51FA\u76F8\u5173\u4E8B\u4EF6\u76D1\u542C","permalink":"/docs-hub/Frontend/Electron/\u9000\u51FA\u4E8B\u4EF6\u76D1\u542C"}}'),c=l("85893"),i=l("50065");let o={},s="Electron \u6587\u4EF6\u548C URL \u5904\u7406\u4E8B\u4EF6\u76D1\u542C",t={},d=[{value:"open-file \u4E8B\u4EF6",id:"open-file-\u4E8B\u4EF6",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u6587\u4EF6\u5173\u8054\u914D\u7F6E",id:"\u6587\u4EF6\u5173\u8054\u914D\u7F6E",level:3},{value:"URL Scheme \u914D\u7F6E",id:"url-scheme-\u914D\u7F6E",level:3},{value:"\u5E73\u53F0\u5DEE\u5F02\u5904\u7406",id:"\u5E73\u53F0\u5DEE\u5F02\u5904\u7406",level:3},{value:"\u5B89\u5168\u8003\u8651",id:"\u5B89\u5168\u8003\u8651",level:3}];function h(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"electron-\u6587\u4EF6\u548C-url-\u5904\u7406\u4E8B\u4EF6\u76D1\u542C",children:"Electron \u6587\u4EF6\u548C URL \u5904\u7406\u4E8B\u4EF6\u76D1\u542C"})}),"\n",(0,c.jsx)(n.h2,{id:"open-file-\u4E8B\u4EF6",children:"open-file \u4E8B\u4EF6"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 Electron \u5E94\u7528\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u5904\u7406\u7528\u6237\u53CC\u51FB\u6253\u5F00\u5173\u8054\u6587\u4EF6\u7684\u573A\u666F\u3002\u4F8B\u5982\uFF0C\u4E00\u4E2A Markdown \u7F16\u8F91\u5668\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u53CC\u51FB ",(0,c.jsx)(n.code,{children:".md"})," \u6587\u4EF6\uFF0C\u81EA\u52A8\u6253\u5F00\u8BE5\u7F16\u8F91\u5668\u5E76\u52A0\u8F7D\u6587\u4EF6\u5185\u5BB9\u3002\u8FD9\u5C31\u9700\u8981\u7528\u5230 Electron \u7684 ",(0,c.jsx)(n.code,{children:"open-file"})," \u4E8B\u4EF6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"open-file"})," \u4E8B\u4EF6\u662F macOS \u5E73\u53F0\u72EC\u6709\u7684\u7279\u6027\uFF0C\u5728 Windows \u548C Linux \u4E0A\u65E0\u6548\u3002\u5F53\u7528\u6237\u53CC\u51FB\u5173\u8054\u7684\u6587\u4EF6\u56FE\u6807\u3001\u4ECE Finder \u4E2D\u5C06\u6587\u4EF6\u62D6\u653E\u5230\u5E94\u7528\u56FE\u6807\u4E0A\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4E0B\u9762\u662F\u76D1\u542C ",(0,c.jsx)(n.code,{children:"open-file"})," \u4E8B\u4EF6\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'const { app } = require(\'electron\')\n\napp.on(\'open-file\', (event, path) => {\n  event.preventDefault()\n  console.log(`\u7528\u6237\u6253\u5F00\u4E86\u6587\u4EF6: ${path}`)\n  // \u5728\u8FD9\u91CC\u5904\u7406\u6253\u5F00\u7684\u6587\u4EF6...\n})\n\n\u5728\u4E3B\u8FDB\u7A0B\u7684 `app` \u6A21\u5757\u4E0A\u76D1\u542C `open-file` \u4E8B\u4EF6\uFF0C\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A\n\n- `event`: \u4E8B\u4EF6\u5BF9\u8C61\n- `path`: \u7528\u6237\u6253\u5F00\u7684\u6587\u4EF6\u5B8C\u6574\u8DEF\u5F84\n\n\u6211\u4EEC\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u83B7\u53D6\u5230\u6253\u5F00\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u7136\u540E\u8FDB\u884C\u76F8\u5E94\u7684\u5904\u7406\uFF0C\u6BD4\u5982\u53D1\u9001\u5230\u6E32\u67D3\u8FDB\u7A0B\u52A0\u8F7D\u6587\u4EF6\u5185\u5BB9\u7B49\u3002\n\n\u6CE8\u610F\u8981\u8C03\u7528 `event.preventDefault()` \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u9632\u6B62\u5E94\u7528\u88AB\u591A\u6B21\u542F\u52A8\u3002\n\n## open-url \u4E8B\u4EF6\n\n\u9664\u4E86\u6253\u5F00\u6587\u4EF6\uFF0CElectron \u8FD8\u652F\u6301\u81EA\u5B9A\u4E49\u5E94\u7528\u7EA7 URL Scheme\uFF0C\u8BA9\u5E94\u7528\u53EF\u4EE5\u54CD\u5E94\u7279\u5B9A\u7684 URL \u94FE\u63A5\u3002\u4F8B\u5982\uFF0C\u70B9\u51FB `myapp://open?name=test` \u94FE\u63A5\u53EF\u4EE5\u6253\u5F00\u5E94\u7528\u5E76\u6267\u884C\u76F8\u5173\u64CD\u4F5C\u3002\n\n\u8981\u5B9E\u73B0 URL Scheme \u529F\u80FD\uFF0C\u9996\u5148\u9700\u8981\u5728\u5E94\u7528\u6253\u5305\u914D\u7F6E\u4E2D\u6CE8\u518C Scheme\uFF1A\n\n```json\n{\n  "build": {\n    "protocols": [\n      {\n        "name": "myapp",\n        "schemes": ["myapp"]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u7136\u540E\u76D1\u542C ",(0,c.jsx)(n.code,{children:"open-url"})," \u4E8B\u4EF6\u6765\u5904\u7406 URL \u8BF7\u6C42\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const { app } = require('electron');\n\napp.on('open-url', (event, url) => {\n  event.preventDefault();\n  console.log(`\u6536\u5230 URL Scheme \u8BF7\u6C42: ${url}`);\n  // \u89E3\u6790 URL \u5E76\u6267\u884C\u76F8\u5173\u64CD\u4F5C...\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4E0E ",(0,c.jsx)(n.code,{children:"open-file"})," \u7C7B\u4F3C\uFF0C",(0,c.jsx)(n.code,{children:"open-url"})," \u4E8B\u4EF6\u56DE\u8C03\u63A5\u6536 ",(0,c.jsx)(n.code,{children:"event"})," \u548C ",(0,c.jsx)(n.code,{children:"url"})," \u4E24\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F\u4E8B\u4EF6\u5BF9\u8C61\u548C\u8BF7\u6C42\u7684\u5B8C\u6574 URL\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u5C06 URL \u8FDB\u884C\u89E3\u6790\uFF0C\u63D0\u53D6\u51FA\u76F8\u5173\u53C2\u6570\uFF0C\u7136\u540E\u6267\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982\u6253\u5F00\u7279\u5B9A\u7684\u9875\u9762\u3001\u6267\u884C\u67D0\u4E9B\u547D\u4EE4\u7B49\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,c.jsx)(n.p,{children:"\u4E3A\u4E86\u8BA9\u5E94\u7528\u66F4\u597D\u5730\u652F\u6301\u6253\u5F00\u6587\u4EF6\u548C URL Scheme\uFF0C\u6709\u4EE5\u4E0B\u51E0\u70B9\u6700\u4F73\u5B9E\u8DF5\u4F9B\u53C2\u8003\uFF1A"}),"\n",(0,c.jsx)(n.h3,{id:"\u6587\u4EF6\u5173\u8054\u914D\u7F6E",children:"\u6587\u4EF6\u5173\u8054\u914D\u7F6E"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5408\u7406\u914D\u7F6E\u5E94\u7528\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u5728 ",(0,c.jsx)(n.code,{children:"package.json"})," \u4E2D\u7684 ",(0,c.jsx)(n.code,{children:"build.fileAssociations"})," \u5B57\u6BB5\u4E2D\u5B9A\u4E49"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6253\u5305\u65F6\u786E\u4FDD\u5C06\u5173\u8054\u56FE\u6807\u6253\u5305\u8FDB app\uFF0C\u5728 ",(0,c.jsx)(n.code,{children:"build.fileAssociations"})," \u4E2D\u6307\u5B9A ",(0,c.jsx)(n.code,{children:"icon"})," \u8DEF\u5F84"]}),"\n",(0,c.jsx)(n.li,{children:"\u5728\u5E94\u7528\u542F\u52A8\u65F6\u68C0\u67E5\u5173\u8054\u662F\u5426\u6210\u529F\u6CE8\u518C\uFF0C\u5FC5\u8981\u65F6\u5F15\u5BFC\u7528\u6237\u624B\u52A8\u5173\u8054"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"url-scheme-\u914D\u7F6E",children:"URL Scheme \u914D\u7F6E"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u4E3A\u5E94\u7528\u6CE8\u518C\u5168\u5C40\u552F\u4E00\u7684 URL Scheme\uFF0C\u907F\u514D\u4E0E\u5176\u4ED6\u5E94\u7528\u51B2\u7A81"}),"\n",(0,c.jsx)(n.li,{children:"\u5408\u7406\u8BBE\u8BA1 URL \u7684 path \u548C query \u53C2\u6570\uFF0C\u63D0\u4F9B\u5FC5\u8981\u7684\u53EF\u6269\u5C55\u6027"}),"\n",(0,c.jsx)(n.li,{children:"\u5728\u4E0D\u540C\u5E73\u53F0\u4E0A\u6D4B\u8BD5 Scheme \u542F\u52A8\u548C\u53C2\u6570\u4F20\u9012\u662F\u5426\u6B63\u5E38"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5E73\u53F0\u5DEE\u5F02\u5904\u7406",children:"\u5E73\u53F0\u5DEE\u5F02\u5904\u7406"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6839\u636E ",(0,c.jsx)(n.code,{children:"process.platform"})," \u5224\u65AD\u5F53\u524D\u8FD0\u884C\u5E73\u53F0\uFF0C\u5BF9 ",(0,c.jsx)(n.code,{children:"open-file"}),"\u3001",(0,c.jsx)(n.code,{children:"open-url"})," \u4E8B\u4EF6\u5206\u522B\u5904\u7406"]}),"\n",(0,c.jsx)(n.li,{children:"\u5FC5\u8981\u65F6\u63D0\u4F9B\u56DE\u9000\u65B9\u6848\uFF0C\u6BD4\u5982\u5728\u975E macOS \u5E73\u53F0\u4E0A\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u547D\u4EE4\u884C\u53C2\u6570\u4F20\u9012\u6587\u4EF6\u8DEF\u5F84"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5B89\u5168\u8003\u8651",children:"\u5B89\u5168\u8003\u8651"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5BF9\u4F20\u5165\u7684\u6587\u4EF6\u8DEF\u5F84\u548C URL \u8FDB\u884C\u5B89\u5168\u6821\u9A8C\u548C\u8FC7\u6EE4\uFF0C\u9632\u6B62\u6CE8\u5165\u653B\u51FB"}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679C\u6D89\u53CA\u654F\u611F\u6570\u636E\uFF0C\u8003\u8651\u5BF9 URL query \u53C2\u6570\u8FDB\u884C\u52A0\u5BC6\u4F20\u8F93\uFF0C\u4E0D\u8981\u660E\u6587\u66B4\u9732"}),"\n",(0,c.jsx)(n.li,{children:"\u8C28\u614E\u5904\u7406\u6765\u81EA\u5916\u90E8\u7684\u6587\u4EF6\u548C URL \u8BF7\u6C42\uFF0C\u9632\u6B62\u5BF9\u5E94\u7528\u9020\u6210\u7834\u574F"}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return s},a:function(){return o}});var r=l(67294);let c={},i=r.createContext(c);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);