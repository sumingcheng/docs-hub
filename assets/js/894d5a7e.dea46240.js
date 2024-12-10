"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[20636],{38408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/DOM-Diff-\u4e13\u9898","title":"\u865a\u62df DOM \u6982\u8ff0","description":"\u7279\u70b9","source":"@site/docs/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/60.DOM-Diff-\u4e13\u9898.md","sourceDirName":"Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027","slug":"/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/DOM-Diff-\u4e13\u9898","permalink":"/docs-hub/docs/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/DOM-Diff-\u4e13\u9898","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/60.DOM-Diff-\u4e13\u9898.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":60,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"\u89c2\u5bdf\u8005\u6a21\u5f0f","permalink":"/docs-hub/docs/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/\u89c2\u5bdf\u8005\u548c\u53d1\u5e03\u8ba2\u9605"},"next":{"title":"Vue \u5e38\u89c1\u4f18\u5316\u624b\u6bb5","permalink":"/docs-hub/docs/Frontend/Vue/Vue\u6027\u80fd\u4f18\u5316\u4e0e\u5b9e\u8df5/Vue\u5e38\u89c1\u4f18\u5316\u624b\u6bb5"}}');var r=t(74848),i=t(28453);const c={},d="\u865a\u62df DOM \u6982\u8ff0",a={},o=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u865a\u62df\u8282\u70b9\u7684\u7ed3\u6784",id:"\u865a\u62df\u8282\u70b9\u7684\u7ed3\u6784",level:2},{value:"\u5b9e\u9645\u6e32\u67d3",id:"\u5b9e\u9645\u6e32\u67d3",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}];function l(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u865a\u62df-dom-\u6982\u8ff0",children:"\u865a\u62df DOM \u6982\u8ff0"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u7ea7\u6bd4\u8f83",(0,r.jsx)(n.br,{}),"\n","\u6df1\u5ea6\u4f18\u5148",(0,r.jsx)(n.br,{}),"\n","\u4f4d\u7f6e\u4e0d\u540c\u76f4\u63a5\u66ff\u6362"]}),"\n",(0,r.jsx)(n.h2,{id:"\u865a\u62df\u8282\u70b9\u7684\u7ed3\u6784",children:"\u865a\u62df\u8282\u70b9\u7684\u7ed3\u6784"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createElement(tagName, props, children);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(51776).A+"",width:"1527",height:"613"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9e\u9645\u6e32\u67d3",children:"\u5b9e\u9645\u6e32\u67d3"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(10293).A+"",width:"1514",height:"463"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u865a\u62df DOM \u65f6\uff0c\u786e\u4fdd\u7ec4\u4ef6\u7684\u552f\u4e00\u6027\u548c\u7a33\u5b9a\u6027\u53ef\u4ee5\u63d0\u9ad8\u6e32\u67d3\u6548\u7387\u3002\u5408\u7406\u7ba1\u7406\u7ec4\u4ef6\u7684\u72b6\u6001\u548c\u5c5e\u6027\uff0c\u6709\u52a9\u4e8e\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u3002\u540c\u65f6\uff0c\u7406\u89e3\u865a\u62df DOM \u7684\u5de5\u4f5c\u539f\u7406\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u4f18\u5316\u5e94\u7528\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528",(0,r.jsx)(n.code,{children:"createElement"}),"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u865a\u62df\u8282\u70b9\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const vnode = createElement('div', { className: 'container' }, [createElement('h1', null, 'Hello, Virtual DOM'), createElement('p', null, 'This is a simple example.')]);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u5305\u542b\u6807\u9898\u548c\u6bb5\u843d\u7684",(0,r.jsx)(n.code,{children:"div"}),"\u5143\u7d20\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u865a\u62df DOM \u80fd\u591f\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u66f4\u65b0 UI\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},10293:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/8a73515670f41ef2af87960455a530a9-bbf071ee59daef24a8940924cdc532e7.png"},51776:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/b69737c079167cfae74747179b2aedd6-e6857ff1c62aef0ce643a8a1f156377b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);