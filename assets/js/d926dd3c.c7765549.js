"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[42412],{50365:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"Backend/Git/\u89e3\u51b3 husky8.0 \u94a9\u5b50\u4e0d\u89e6\u53d1","title":"\u89e3\u51b3 husky8.0 \u94a9\u5b50\u4e0d\u89e6\u53d1","description":"\u5982\u679c\u60a8\u7684\u63d0\u4ea4\u6ca1\u6709\u89e6\u53d1\u9884\u671f\u7684\u94a9\u5b50\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5efa\u8bae\u548c\u6b65\u9aa4\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u8fd9\u4e9b\u6b65\u9aa4\u8fdb\u884c\u6545\u969c\u6392\u67e5\uff1a","source":"@site/docs/Backend/Git/\u89e3\u51b3 husky8.0 \u94a9\u5b50\u4e0d\u89e6\u53d1.md","sourceDirName":"Backend/Git","slug":"/Backend/Git/\u89e3\u51b3 husky8.0 \u94a9\u5b50\u4e0d\u89e6\u53d1","permalink":"/docs-hub/docs/Backend/Git/\u89e3\u51b3 husky8.0 \u94a9\u5b50\u4e0d\u89e6\u53d1","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Git/\u89e3\u51b3 husky8.0 \u94a9\u5b50\u4e0d\u89e6\u53d1.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"frontMatter":{},"sidebar":"gitSidebar","previous":{"title":"Git-\u63d0\u4ea4\u89c4\u8303","permalink":"/docs-hub/docs/Backend/Git/Git-\u63d0\u4ea4\u89c4\u8303"}}');var i=s(74848),r=s(28453);const d={},t="\u89e3\u51b3 husky8.0 \u94a9\u5b50\u4e0d\u89e6\u53d1",h={},o=[];function l(e){const n={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u89e3\u51b3-husky80-\u94a9\u5b50\u4e0d\u89e6\u53d1",children:"\u89e3\u51b3 husky8.0 \u94a9\u5b50\u4e0d\u89e6\u53d1"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7684\u63d0\u4ea4\u6ca1\u6709\u89e6\u53d1\u9884\u671f\u7684\u94a9\u5b50\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5efa\u8bae\u548c\u6b65\u9aa4\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u8fd9\u4e9b\u6b65\u9aa4\u8fdb\u884c\u6545\u969c\u6392\u67e5\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u786e\u4fdd\u94a9\u5b50\u6587\u4ef6\u5b58\u5728"}),"\uff1a \u9996\u5148\uff0c\u786e\u4fdd\u60a8\u7684\u9879\u76ee\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:".husky"})," \u76ee\u5f55\u5b58\u5728\uff0c\u5e76\u4e14\u5176\u4e2d\u5305\u542b\u4e86\u60a8\u671f\u671b\u6267\u884c\u7684\u94a9\u5b50\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"pre-commit"}),"\u3001",(0,i.jsx)(n.code,{children:"commit-msg"})," \u7b49\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u68c0\u67e5\u94a9\u5b50\u6587\u4ef6\u7684\u6743\u9650"}),"\uff1a Git\u94a9\u5b50\u9700\u8981\u6709\u6267\u884c\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4e3a\u94a9\u5b50\u6587\u4ef6\u6dfb\u52a0\u6267\u884c\u6743\u9650\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod +x .husky/<hook-name>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u4e3a ",(0,i.jsx)(n.code,{children:"pre-commit"})," \u94a9\u5b50\u6dfb\u52a0\u6267\u884c\u6743\u9650\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod +x .husky/pre-commit\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u786e\u4fdd\u94a9\u5b50\u6587\u4ef6\u7684\u5185\u5bb9\u662f\u6b63\u786e\u7684"}),"\uff1a \u6253\u5f00\u94a9\u5b50\u6587\u4ef6\u5e76\u68c0\u67e5\u5176\u5185\u5bb9\u3002\u786e\u4fdd\u5b83\u5305\u542b\u4e86\u6b63\u786e\u7684\u811a\u672c\uff0c\u5e76\u4e14\u5728\u6587\u4ef6\u7684\u5f00\u5934\u6709 ",(0,i.jsx)(n.code,{children:"husky"})," \u7684\u5f15\u5bfc\u4ee3\u7801\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u68c0\u67e5Git\u94a9\u5b50\u76ee\u5f55"}),"\uff1a \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770bGit\u94a9\u5b50\u7684\u76ee\u5f55\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git rev-parse --git-dir\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u5e94\u8be5\u8fd4\u56de ",(0,i.jsx)(n.code,{children:".git"})," \u76ee\u5f55\u7684\u8def\u5f84\u3002\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u68c0\u67e5\u8be5\u76ee\u5f55\u4e0b\u7684 ",(0,i.jsx)(n.code,{children:"hooks"})," \u5b50\u76ee\u5f55\uff0c\u786e\u4fdd\u5b83\u5305\u542b\u4e86\u6307\u5411\u60a8\u9879\u76ee\u4e2d ",(0,i.jsx)(n.code,{children:".husky"})," \u76ee\u5f55\u7684\u7b26\u53f7\u94fe\u63a5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5c1d\u8bd5\u624b\u52a8\u8fd0\u884c\u94a9\u5b50"}),"\uff1a \u60a8\u53ef\u4ee5\u5c1d\u8bd5\u624b\u52a8\u8fd0\u884c\u94a9\u5b50\u6587\u4ef6\uff0c\u770b\u770b\u662f\u5426\u6709\u4efb\u4f55\u9519\u8bef\u6d88\u606f\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sh .husky/pre-commit\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["\u68c0\u67e5",(0,i.jsx)(n.code,{children:"core.hooksPath"}),"\u914d\u7f6e"]}),"\uff1a \u5982\u679c\u60a8\u4e4b\u524d\u66f4\u6539\u8fc7Git\u7684\u94a9\u5b50\u8def\u5f84\u914d\u7f6e\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5f71\u54cd",(0,i.jsx)(n.code,{children:"husky"}),"\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git config core.hooksPath\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8fd9\u8fd4\u56de\u4e86\u4e00\u4e2a\u8def\u5f84\uff0c\u786e\u4fdd\u5b83\u6307\u5411\u60a8\u9879\u76ee\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:".husky"})," \u76ee\u5f55\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u91cd\u65b0\u5b89\u88c5husky"}),"\uff1a \u6709\u65f6\uff0c\u91cd\u65b0\u5b89\u88c5",(0,i.jsx)(n.code,{children:"husky"}),"\u5e76\u91cd\u65b0\u8bbe\u7f6e\u94a9\u5b50\u53ef\u80fd\u4f1a\u89e3\u51b3\u95ee\u9898\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx husky install\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u67e5\u770b\u5176\u4ed6\u53ef\u80fd\u7684\u51b2\u7a81"}),"\uff1a \u5982\u679c\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u4e86\u5176\u4ed6\u7684Git\u94a9\u5b50\u5de5\u5177\uff0c\u5982",(0,i.jsx)(n.code,{children:"pre-commit"}),"\u6216",(0,i.jsx)(n.code,{children:"commitizen"}),"\uff0c\u786e\u4fdd\u5b83\u4eec\u4e0e",(0,i.jsx)(n.code,{children:"husky"}),"\u6ca1\u6709\u51b2\u7a81\u3002"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var c=s(96540);const i={},r=c.createContext(i);function d(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);