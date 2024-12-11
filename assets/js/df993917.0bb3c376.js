"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[69915],{38890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"Frontend/CSS/CSS-\u8868\u683c-BFC-\u4e66\u5199-\u547d\u540d","title":"CSS \u53ef\u89c6\u5316\u5e03\u5c40\u4e0e BFC","description":"\u4e3b\u8981\u5c5e\u6027","source":"@site/docs/Frontend/CSS/90.CSS-\u8868\u683c-BFC-\u4e66\u5199-\u547d\u540d.md","sourceDirName":"Frontend/CSS","slug":"/Frontend/CSS/CSS-\u8868\u683c-BFC-\u4e66\u5199-\u547d\u540d","permalink":"/docs-hub/Frontend/CSS/CSS-\u8868\u683c-BFC-\u4e66\u5199-\u547d\u540d","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/CSS/90.CSS-\u8868\u683c-BFC-\u4e66\u5199-\u547d\u540d.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":90,"frontMatter":{},"sidebar":"cssSidebar","previous":{"title":"CSS \u4e0e\u6d4f\u89c8\u5668\u7684\u4ea4\u4e92","permalink":"/docs-hub/Frontend/CSS/CSS-\u6d4f\u89c8\u5668"},"next":{"title":"\u4f7f\u7528\u6ee4\u955c\u5b9e\u73b0\u9875\u9762\u6574\u4f53\u7070\u5ea6\u6548\u679c","permalink":"/docs-hub/Frontend/CSS/CSS-\u6ee4\u955c\u5c5e\u6027"}}');var o=t(74848),s=t(28453);const r={},i="CSS \u53ef\u89c6\u5316\u5e03\u5c40\u4e0e BFC",c={},d=[{value:"\u4e3b\u8981\u5c5e\u6027",id:"\u4e3b\u8981\u5c5e\u6027",level:2},{value:"BFC Block Formatting Context",id:"bfc-block-formatting-context",level:2},{value:"\u4e66\u5199\u89c4\u8303",id:"\u4e66\u5199\u89c4\u8303",level:2},{value:"\u547d\u540d",id:"\u547d\u540d",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"css-\u53ef\u89c6\u5316\u5e03\u5c40\u4e0e-bfc",children:"CSS \u53ef\u89c6\u5316\u5e03\u5c40\u4e0e BFC"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4e3b\u8981\u5c5e\u6027",children:"\u4e3b\u8981\u5c5e\u6027"}),"\n",(0,o.jsx)(n.p,{children:"display \u5c5e\u6027\u53ef\u7528\u4e8e\u63a7\u5236\u5143\u7d20\u7684\u663e\u793a\u65b9\u5f0f\u4f8b\u5982\u5c06 display \u8bbe\u7f6e\u4e3a table \u65f6\u5143\u7d20\u4f1a\u88ab\u8f6c\u5316\u4e3a\u5757\u7ea7\u8868\u683c\u5143\u7d20\u5c06 display \u8bbe\u7f6e\u4e3a table-row \u65f6\u5143\u7d20\u5c06\u88ab\u89c6\u4e3a\u8868\u683c\u884c\u5c06 display \u8bbe\u7f6e\u4e3a table-cell \u65f6\u5143\u7d20\u5c06\u88ab\u89c6\u4e3a\u8868\u683c\u5355\u5143\u683c"}),"\n",(0,o.jsx)(n.p,{children:"table-layout \u5c5e\u6027\u7528\u4e8e\u5b9a\u4e49\u8868\u683c\u7684\u5e03\u5c40\u7b97\u6cd5\u5f53\u53d6\u503c\u4e3a auto \u65f6\u6839\u636e\u5355\u5143\u683c\u5185\u5bb9\u81ea\u52a8\u8bbe\u7f6e\u5bbd\u5ea6\u5f53\u53d6\u503c\u4e3a fixed \u65f6\u5bbd\u5ea6\u7531\u8868\u683c\u5bb9\u5668\u548c\u5217\u5bbd\u51b3\u5b9a\u8fd9\u79cd\u65b9\u5f0f\u80fd\u5728\u6570\u636e\u91cf\u8f83\u5927\u65f6\u63d0\u9ad8\u6e32\u67d3\u6027\u80fd"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".container {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n\n.row {\n  display: table-row;\n}\n\n.cell {\n  display: table-cell;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u5b9e\u6218\u4e2d\u901a\u8fc7 display \u8bbe\u7f6e\u4e3a table \u7684\u5e03\u5c40\u53ef\u8f7b\u677e\u5b9e\u73b0\u7b49\u5bbd\u5e03\u5c40\u5728\u591a\u5217\u6570\u636e\u5c55\u793a\u4e2d\u65e0\u9700\u989d\u5916\u7f16\u5199\u590d\u6742\u7684\u6d6e\u52a8\u6216\u5b9a\u4f4d\u4ee3\u7801\u5373\u53ef\u5feb\u901f\u5b8c\u6210\u6570\u636e\u884c\u5217\u5bf9\u9f50"}),"\n",(0,o.jsx)(n.h2,{id:"bfc-block-formatting-context",children:"BFC Block Formatting Context"}),"\n",(0,o.jsx)(n.p,{children:"BFC \u662f Web \u9875\u9762\u53ef\u89c6\u5316 CSS \u6e32\u67d3\u4e2d\u7684\u72ec\u7acb\u5e03\u5c40\u533a\u57df\u5e38\u7528\u6765\u907f\u514d\u6d6e\u52a8\u5143\u7d20\u5f71\u54cd\u5176\u5b83\u5143\u7d20\u4f8b\u5982\u5c06\u5bb9\u5668\u89e6\u53d1 BFC \u540e\u53ef\u6709\u6548\u63a7\u5236\u5185\u90e8\u6d6e\u52a8\u5143\u7d20\u907f\u514d\u5176\u5f71\u54cd\u5916\u90e8\u5e03\u5c40"}),"\n",(0,o.jsx)(n.p,{children:"\u521b\u5efa BFC \u7684\u5e38\u7528\u65b9\u6cd5\u662f\u4e3a\u5143\u7d20\u8bbe\u7f6e float \u4e3a\u975e none \u503c\u4e5f\u53ef\u5c06 position \u8bbe\u7f6e\u4e3a absolute \u6216 fixed \u8fd8\u53ef\u901a\u8fc7 display \u8bbe\u7f6e\u4e3a inline-block table-cell table-caption flex \u6216 grid \u89e6\u53d1 BFC \u4f7f\u7528 overflow \u8bbe\u7f6e\u4e3a\u975e visible \u503c\u4e5f\u80fd\u521b\u5efa BFC"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u5b9e\u6218\u4e2d\u5f53\u9700\u8981\u6e05\u9664\u5185\u90e8\u6d6e\u52a8\u65f6\u53ef\u5728\u7236\u5143\u7d20\u4e2d\u89e6\u53d1 BFC \u5c06\u6d6e\u52a8\u5143\u7d20\u5305\u542b\u5728\u72ec\u7acb\u5e03\u5c40\u4e0a\u4e0b\u6587\u4e2d\u907f\u514d\u6d6e\u52a8\u5bfc\u81f4\u7684\u7236\u5bb9\u5668\u9ad8\u5ea6\u574d\u584c\u5728\u963b\u6b62\u5916\u8fb9\u8ddd\u91cd\u53e0\u7b49\u573a\u666f\u4e2d BFC \u4e5f\u80fd\u63d0\u4f9b\u826f\u597d\u652f\u6301\u4f8b\u5982\u5e03\u5c40\u5bfc\u822a\u680f\u65f6\u4e3a\u7236\u5bb9\u5668\u89e6\u53d1 BFC \u53ef\u4f7f\u5185\u90e8\u94fe\u63a5\u6d6e\u52a8\u6b63\u5e38\u663e\u793a\u5e76\u4fdd\u6301\u7236\u5bb9\u5668\u9ad8\u5ea6\u7a33\u5b9a"}),"\n",(0,o.jsx)(n.h2,{id:"\u4e66\u5199\u89c4\u8303",children:"\u4e66\u5199\u89c4\u8303"}),"\n",(0,o.jsx)(n.p,{children:"\u7f16\u5199 CSS \u65f6\u5efa\u8bae\u4fdd\u6301\u7edf\u4e00\u89c4\u8303\u63d0\u9ad8\u4ee3\u7801\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u53ef\u4f7f\u7528 2 \u6216 4 \u7a7a\u683c\u8fdb\u884c\u7f29\u8fdb\u5728\u58f0\u660e\u5927\u62ec\u53f7\u524d\u4fdd\u7559\u7a7a\u683c\u5728\u5c5e\u6027\u503c\u95f4\u7559\u6709\u7a7a\u683c\u4f7f\u7528\u5c0f\u5199\u5b57\u6bcd\u7f16\u5199\u9009\u62e9\u5668\u548c\u5c5e\u6027\u5728\u6bcf\u4e2a\u58f0\u660e\u7ed3\u675f\u540e\u6362\u884c\u7edf\u4e00\u7684\u4e66\u5199\u89c4\u8303\u6709\u52a9\u4e8e\u56e2\u961f\u534f\u4f5c\u548c\u540e\u671f\u7ef4\u62a4"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".selector {\n  property: value;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u5b9e\u6218\u4e2d\u7edf\u4e00\u7684\u4e66\u5199\u89c4\u8303\u53ef\u8ba9\u56e2\u961f\u6210\u5458\u5feb\u901f\u7406\u89e3\u4ee3\u7801\u7ed3\u6784\u907f\u514d\u56e0\u7f16\u7801\u98ce\u683c\u4e0d\u4e00\u81f4\u5f15\u53d1\u7684\u6c9f\u901a\u548c\u7ef4\u62a4\u6210\u672c\u95ee\u9898"}),"\n",(0,o.jsx)(n.h2,{id:"\u547d\u540d",children:"\u547d\u540d"}),"\n",(0,o.jsx)(n.p,{children:"\u4e3a CSS \u7c7b\u548c ID \u9009\u62e9\u6709\u610f\u4e49\u4e14\u63cf\u8ff0\u6027\u5f3a\u7684\u540d\u79f0\u63d0\u5347\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u5c3d\u91cf\u4f7f\u7528\u7b80\u77ed\u800c\u6709\u610f\u4e49\u7684\u8bcd\u8bed\u4f7f\u7528\u8fde\u5b57\u7b26\u66ff\u4ee3\u4e0b\u5212\u7ebf\u6216\u9a7c\u5cf0\u907f\u514d\u4f7f\u7528 left top \u7b49\u4f4d\u7f6e\u76f8\u5173\u8bcd\u6c47\u53ef\u53c2\u8003 BEM SMACSS \u6216 OOCSS \u7b49\u547d\u540d\u89c4\u8303\u5c06\u6837\u5f0f\u7ed3\u6784\u5316\u6a21\u5757\u5316"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u5b9e\u6218\u4e2d\u4e3a\u5bfc\u822a\u83dc\u5355\u4f7f\u7528.nav-menu \u7684\u547d\u540d\u6bd4.top-red-bar \u66f4\u6613\u4e8e\u7406\u89e3\u548c\u7ef4\u62a4\u5728\u4fee\u6539\u6837\u5f0f\u6216\u6dfb\u52a0\u65b0\u529f\u80fd\u65f6\u4e5f\u80fd\u66f4\u5feb\u901f\u5b9a\u4f4d\u76f8\u5173\u4ee3\u7801"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var l=t(96540);const o={},s=l.createContext(o);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);