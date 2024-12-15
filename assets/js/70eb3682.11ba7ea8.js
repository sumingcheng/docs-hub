"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["60151"],{48464:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>r,toc:()=>a,contentTitle:()=>s});var d=JSON.parse('{"id":"Backend/Go/\u57FA\u7840/\u9879\u76EE\u521D\u59CB\u5316\u548C\u6784\u5EFA\u6307\u5357","title":"Go \u9879\u76EE\u521D\u59CB\u5316\u548C\u6784\u5EFA\u6307\u5357","description":"\u521D\u59CB\u5316\u6A21\u5757","source":"@site/docs/Backend/Go/\u57FA\u7840/18.\u9879\u76EE\u521D\u59CB\u5316\u548C\u6784\u5EFA\u6307\u5357.md","sourceDirName":"Backend/Go/\u57FA\u7840","slug":"/Backend/Go/\u57FA\u7840/\u9879\u76EE\u521D\u59CB\u5316\u548C\u6784\u5EFA\u6307\u5357","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/\u9879\u76EE\u521D\u59CB\u5316\u548C\u6784\u5EFA\u6307\u5357","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u57FA\u7840/18.\u9879\u76EE\u521D\u59CB\u5316\u548C\u6784\u5EFA\u6307\u5357.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":18,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go package \u548C import","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/package\u548Cimport"},"next":{"title":"\u51FD\u6570","permalink":"/docs-hub/category/\u51FD\u6570"}}'),l=i("85893"),o=i("50065");let c={},s="Go \u9879\u76EE\u521D\u59CB\u5316\u548C\u6784\u5EFA\u6307\u5357",r={},a=[{value:"\u521D\u59CB\u5316\u6A21\u5757",id:"\u521D\u59CB\u5316\u6A21\u5757",level:2},{value:"\u83B7\u53D6\u5305",id:"\u83B7\u53D6\u5305",level:2},{value:"\u66F4\u6362\u6A21\u5757\u4EE3\u7406\u6E90",id:"\u66F4\u6362\u6A21\u5757\u4EE3\u7406\u6E90",level:2},{value:"\u5B89\u88C5\u4F9D\u8D56",id:"\u5B89\u88C5\u4F9D\u8D56",level:2},{value:"\u6784\u5EFA\u9879\u76EE",id:"\u6784\u5EFA\u9879\u76EE",level:2},{value:"\u9488\u5BF9\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6784\u5EFA",id:"\u9488\u5BF9\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6784\u5EFA",level:3},{value:"Linux",id:"linux",level:4},{value:"macOS",id:"macos",level:4},{value:"Windows",id:"windows",level:4}];function t(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"go-\u9879\u76EE\u521D\u59CB\u5316\u548C\u6784\u5EFA\u6307\u5357",children:"Go \u9879\u76EE\u521D\u59CB\u5316\u548C\u6784\u5EFA\u6307\u5357"})}),"\n",(0,l.jsx)(n.h2,{id:"\u521D\u59CB\u5316\u6A21\u5757",children:"\u521D\u59CB\u5316\u6A21\u5757"}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"go mod init"})," \u547D\u4EE4\u6765\u521D\u59CB\u5316\u4E00\u4E2A\u65B0\u7684 Go \u6A21\u5757\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"go mod init sumingcheng\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u83B7\u53D6\u5305",children:"\u83B7\u53D6\u5305"}),"\n",(0,l.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"go get"})," \u547D\u4EE4\u83B7\u53D6\u6240\u9700\u7684\u7B2C\u4E09\u65B9\u5305\uFF0C\u4F8B\u5982 Gin Web \u6846\u67B6\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"go get github.com/gin-gonic/gin\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u66F4\u6362\u6A21\u5757\u4EE3\u7406\u6E90",children:"\u66F4\u6362\u6A21\u5757\u4EE3\u7406\u6E90"}),"\n",(0,l.jsx)(n.p,{children:"\u4E3A\u4E86\u63D0\u9AD8\u4E0B\u8F7D\u901F\u5EA6\uFF0C\u53EF\u4EE5\u66F4\u6362 Go \u6A21\u5757\u4EE3\u7406\u6E90\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"go env -w GOPROXY=https://goproxy.cn,direct\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5B89\u88C5\u4F9D\u8D56",children:"\u5B89\u88C5\u4F9D\u8D56"}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"go mod tidy"})," \u547D\u4EE4\u81EA\u52A8\u89E3\u6790\u5E76\u5B89\u88C5\u9879\u76EE\u6240\u9700\u7684\u6240\u6709\u4F9D\u8D56\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"go mod tidy\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6784\u5EFA\u9879\u76EE",children:"\u6784\u5EFA\u9879\u76EE"}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"go build"})," \u547D\u4EE4\u6784\u5EFA\u9879\u76EE\uFF0C\u751F\u6210\u53EF\u6267\u884C\u6587\u4EF6\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"go build\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u9488\u5BF9\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6784\u5EFA",children:"\u9488\u5BF9\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6784\u5EFA"}),"\n",(0,l.jsx)(n.h4,{id:"linux",children:"Linux"}),"\n",(0,l.jsxs)(n.p,{children:["\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF ",(0,l.jsx)(n.code,{children:"GOOS"})," \u548C ",(0,l.jsx)(n.code,{children:"GOARCH"}),"\uFF0C\u7136\u540E\u6267\u884C\u6784\u5EFA\u547D\u4EE4\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"GOOS=linux GOARCH=amd64 go build -o myapp-linux\n"})}),"\n",(0,l.jsx)(n.h4,{id:"macos",children:"macOS"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"GOOS=darwin GOARCH=amd64 go build -o myapp-macos\n"})}),"\n",(0,l.jsx)(n.h4,{id:"windows",children:"Windows"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"GOOS=windows GOARCH=amd64 go build -o myapp-windows.exe\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6CE8\u610F\u4E8B\u9879"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u786E\u4FDD\u5728\u6784\u5EFA\u524D\u5DF2\u5B89\u88C5\u6240\u6709\u5FC5\u8981\u7684\u4F9D\u8D56\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u53EF\u4EE5\u8DE8\u5E73\u53F0\u7F16\u8BD1\uFF0C\u4E0D\u9700\u8981\u5728\u76EE\u6807\u5E73\u53F0\u4E0A\u8FDB\u884C\u6784\u5EFA\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u4E3A Windows \u5E73\u53F0\u751F\u6210\u53EF\u6267\u884C\u6587\u4EF6\u65F6\uFF0C\u8BB0\u5F97\u6DFB\u52A0 ",(0,l.jsx)(n.code,{children:".exe"})," \u540E\u7F00\u3002"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return c}});var d=i(67294);let l={},o=d.createContext(l);function c(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);