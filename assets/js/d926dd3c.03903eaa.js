"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["73326"],{82396:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>c,assets:()=>h,toc:()=>l,contentTitle:()=>t});var c=JSON.parse('{"id":"Backend/Git/\u89E3\u51B3 husky8.0 \u94A9\u5B50\u4E0D\u89E6\u53D1","title":"\u89E3\u51B3 husky8.0 \u94A9\u5B50\u4E0D\u89E6\u53D1","description":"\u5982\u679C\u60A8\u7684\u63D0\u4EA4\u6CA1\u6709\u89E6\u53D1\u9884\u671F\u7684\u94A9\u5B50\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5EFA\u8BAE\u548C\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u6309\u7167\u8FD9\u4E9B\u6B65\u9AA4\u8FDB\u884C\u6545\u969C\u6392\u67E5\uFF1A","source":"@site/docs/Backend/Git/\u89E3\u51B3 husky8.0 \u94A9\u5B50\u4E0D\u89E6\u53D1.md","sourceDirName":"Backend/Git","slug":"/Backend/Git/\u89E3\u51B3 husky8.0 \u94A9\u5B50\u4E0D\u89E6\u53D1","permalink":"/docs-hub/Backend/Git/\u89E3\u51B3 husky8.0 \u94A9\u5B50\u4E0D\u89E6\u53D1","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Git/\u89E3\u51B3 husky8.0 \u94A9\u5B50\u4E0D\u89E6\u53D1.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"frontMatter":{},"sidebar":"gitSidebar","previous":{"title":"Git-\u63D0\u4EA4\u89C4\u8303","permalink":"/docs-hub/Backend/Git/Git-\u63D0\u4EA4\u89C4\u8303"}}'),i=s("85893"),r=s("50065");let d={},t="\u89E3\u51B3 husky8.0 \u94A9\u5B50\u4E0D\u89E6\u53D1",h={},l=[];function o(e){let n={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u89E3\u51B3-husky80-\u94A9\u5B50\u4E0D\u89E6\u53D1",children:"\u89E3\u51B3 husky8.0 \u94A9\u5B50\u4E0D\u89E6\u53D1"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u60A8\u7684\u63D0\u4EA4\u6CA1\u6709\u89E6\u53D1\u9884\u671F\u7684\u94A9\u5B50\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5EFA\u8BAE\u548C\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u6309\u7167\u8FD9\u4E9B\u6B65\u9AA4\u8FDB\u884C\u6545\u969C\u6392\u67E5\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u786E\u4FDD\u94A9\u5B50\u6587\u4EF6\u5B58\u5728"}),"\uFF1A \u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u7684\u9879\u76EE\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:".husky"})," \u76EE\u5F55\u5B58\u5728\uFF0C\u5E76\u4E14\u5176\u4E2D\u5305\u542B\u4E86\u60A8\u671F\u671B\u6267\u884C\u7684\u94A9\u5B50\u6587\u4EF6\uFF08\u4F8B\u5982 ",(0,i.jsx)(n.code,{children:"pre-commit"}),"\u3001",(0,i.jsx)(n.code,{children:"commit-msg"})," \u7B49\uFF09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u68C0\u67E5\u94A9\u5B50\u6587\u4EF6\u7684\u6743\u9650"}),"\uFF1A Git\u94A9\u5B50\u9700\u8981\u6709\u6267\u884C\u6743\u9650\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u4E3A\u94A9\u5B50\u6587\u4EF6\u6DFB\u52A0\u6267\u884C\u6743\u9650\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod +x .husky/<hook-name>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u4E3A ",(0,i.jsx)(n.code,{children:"pre-commit"})," \u94A9\u5B50\u6DFB\u52A0\u6267\u884C\u6743\u9650\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod +x .husky/pre-commit\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u786E\u4FDD\u94A9\u5B50\u6587\u4EF6\u7684\u5185\u5BB9\u662F\u6B63\u786E\u7684"}),"\uFF1A \u6253\u5F00\u94A9\u5B50\u6587\u4EF6\u5E76\u68C0\u67E5\u5176\u5185\u5BB9\u3002\u786E\u4FDD\u5B83\u5305\u542B\u4E86\u6B63\u786E\u7684\u811A\u672C\uFF0C\u5E76\u4E14\u5728\u6587\u4EF6\u7684\u5F00\u5934\u6709 ",(0,i.jsx)(n.code,{children:"husky"})," \u7684\u5F15\u5BFC\u4EE3\u7801\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u68C0\u67E5Git\u94A9\u5B50\u76EE\u5F55"}),"\uFF1A \u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770BGit\u94A9\u5B50\u7684\u76EE\u5F55\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git rev-parse --git-dir\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u5E94\u8BE5\u8FD4\u56DE ",(0,i.jsx)(n.code,{children:".git"})," \u76EE\u5F55\u7684\u8DEF\u5F84\u3002\u7136\u540E\uFF0C\u60A8\u53EF\u4EE5\u68C0\u67E5\u8BE5\u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"hooks"})," \u5B50\u76EE\u5F55\uFF0C\u786E\u4FDD\u5B83\u5305\u542B\u4E86\u6307\u5411\u60A8\u9879\u76EE\u4E2D ",(0,i.jsx)(n.code,{children:".husky"})," \u76EE\u5F55\u7684\u7B26\u53F7\u94FE\u63A5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5C1D\u8BD5\u624B\u52A8\u8FD0\u884C\u94A9\u5B50"}),"\uFF1A \u60A8\u53EF\u4EE5\u5C1D\u8BD5\u624B\u52A8\u8FD0\u884C\u94A9\u5B50\u6587\u4EF6\uFF0C\u770B\u770B\u662F\u5426\u6709\u4EFB\u4F55\u9519\u8BEF\u6D88\u606F\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sh .husky/pre-commit\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["\u68C0\u67E5",(0,i.jsx)(n.code,{children:"core.hooksPath"}),"\u914D\u7F6E"]}),"\uFF1A \u5982\u679C\u60A8\u4E4B\u524D\u66F4\u6539\u8FC7Git\u7684\u94A9\u5B50\u8DEF\u5F84\u914D\u7F6E\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5F71\u54CD",(0,i.jsx)(n.code,{children:"husky"}),"\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git config core.hooksPath\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u8FD9\u8FD4\u56DE\u4E86\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u786E\u4FDD\u5B83\u6307\u5411\u60A8\u9879\u76EE\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:".husky"})," \u76EE\u5F55\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u91CD\u65B0\u5B89\u88C5husky"}),"\uFF1A \u6709\u65F6\uFF0C\u91CD\u65B0\u5B89\u88C5",(0,i.jsx)(n.code,{children:"husky"}),"\u5E76\u91CD\u65B0\u8BBE\u7F6E\u94A9\u5B50\u53EF\u80FD\u4F1A\u89E3\u51B3\u95EE\u9898\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx husky install\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u67E5\u770B\u5176\u4ED6\u53EF\u80FD\u7684\u51B2\u7A81"}),"\uFF1A \u5982\u679C\u60A8\u7684\u9879\u76EE\u4E2D\u4F7F\u7528\u4E86\u5176\u4ED6\u7684Git\u94A9\u5B50\u5DE5\u5177\uFF0C\u5982",(0,i.jsx)(n.code,{children:"pre-commit"}),"\u6216",(0,i.jsx)(n.code,{children:"commitizen"}),"\uFF0C\u786E\u4FDD\u5B83\u4EEC\u4E0E",(0,i.jsx)(n.code,{children:"husky"}),"\u6CA1\u6709\u51B2\u7A81\u3002"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var c=s(67294);let i={},r=c.createContext(i);function d(e){let n=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);