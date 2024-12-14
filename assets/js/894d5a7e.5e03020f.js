"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["63768"],{31185:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/DOM-Diff-\u4E13\u9898","title":"\u865A\u62DF DOM \u6982\u8FF0","description":"\u7279\u70B9","source":"@site/docs/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/60.DOM-Diff-\u4E13\u9898.md","sourceDirName":"Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027","slug":"/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/DOM-Diff-\u4E13\u9898","permalink":"/docs-hub/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/DOM-Diff-\u4E13\u9898","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/60.DOM-Diff-\u4E13\u9898.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":60,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"\u89C2\u5BDF\u8005\u6A21\u5F0F","permalink":"/docs-hub/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/\u89C2\u5BDF\u8005\u548C\u53D1\u5E03\u8BA2\u9605"},"next":{"title":"\u5E38\u89C1\u95EE\u9898\u89E3\u51B3","permalink":"/docs-hub/category/\u5E38\u89C1\u95EE\u9898\u89E3\u51B3"}}'),i=t("85893"),s=t("50065");let c={},d="\u865A\u62DF DOM \u6982\u8FF0",a={},l=[{value:"\u7279\u70B9",id:"\u7279\u70B9",level:2},{value:"\u865A\u62DF\u8282\u70B9\u7684\u7ED3\u6784",id:"\u865A\u62DF\u8282\u70B9\u7684\u7ED3\u6784",level:2},{value:"\u5B9E\u9645\u6E32\u67D3",id:"\u5B9E\u9645\u6E32\u67D3",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2}];function o(e){let n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u865A\u62DF-dom-\u6982\u8FF0",children:"\u865A\u62DF DOM \u6982\u8FF0"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7279\u70B9",children:"\u7279\u70B9"}),"\n",(0,i.jsxs)(n.p,{children:["\u540C\u7EA7\u6BD4\u8F83",(0,i.jsx)(n.br,{}),"\n","\u6DF1\u5EA6\u4F18\u5148",(0,i.jsx)(n.br,{}),"\n","\u4F4D\u7F6E\u4E0D\u540C\u76F4\u63A5\u66FF\u6362"]}),"\n",(0,i.jsx)(n.h2,{id:"\u865A\u62DF\u8282\u70B9\u7684\u7ED3\u6784",children:"\u865A\u62DF\u8282\u70B9\u7684\u7ED3\u6784"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"createElement(tagName, props, children);\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(22361).Z+"",width:"1527",height:"613"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5B9E\u9645\u6E32\u67D3",children:"\u5B9E\u9645\u6E32\u67D3"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(61268).Z+"",width:"1514",height:"463"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4F7F\u7528\u865A\u62DF DOM \u65F6\uFF0C\u786E\u4FDD\u7EC4\u4EF6\u7684\u552F\u4E00\u6027\u548C\u7A33\u5B9A\u6027\u53EF\u4EE5\u63D0\u9AD8\u6E32\u67D3\u6548\u7387\u3002\u5408\u7406\u7BA1\u7406\u7EC4\u4EF6\u7684\u72B6\u6001\u548C\u5C5E\u6027\uFF0C\u6709\u52A9\u4E8E\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3\u3002\u540C\u65F6\uFF0C\u7406\u89E3\u865A\u62DF DOM \u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u8005\u4F18\u5316\u5E94\u7528\u6027\u80FD\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528",(0,i.jsx)(n.code,{children:"createElement"}),"\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u865A\u62DF\u8282\u70B9\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const vnode = createElement('div', { className: 'container' }, [createElement('h1', null, 'Hello, Virtual DOM'), createElement('p', null, 'This is a simple example.')]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u5305\u542B\u6807\u9898\u548C\u6BB5\u843D\u7684",(0,i.jsx)(n.code,{children:"div"}),"\u5143\u7D20\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u865A\u62DF DOM \u80FD\u591F\u9AD8\u6548\u5730\u7BA1\u7406\u548C\u66F4\u65B0 UI\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},61268:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/8a73515670f41ef2af87960455a530a9-bbf071ee59daef24a8940924cdc532e7.png"},22361:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/b69737c079167cfae74747179b2aedd6-e6857ff1c62aef0ce643a8a1f156377b.png"},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var r=t(67294);let i={},s=r.createContext(i);function c(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);