"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["556"],{53511:function(e,t,n){n.r(t),n.d(t,{default:()=>S,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"Frontend/CSS/CSS-\u6EE4\u955C\u5C5E\u6027","title":"\u4F7F\u7528\u6EE4\u955C\u5B9E\u73B0\u9875\u9762\u6574\u4F53\u7070\u5EA6\u6548\u679C","description":"\u901A\u8FC7 CSS \u7684 filter \u5C5E\u6027\u53EF\u4E3A\u6574\u4E2A\u9875\u9762\u5E94\u7528\u7070\u5EA6\u6EE4\u955C\u5C06\u9875\u9762\u5448\u73B0\u9ED1\u767D\u6548\u679C\u5728\u9700\u8981\u8425\u9020\u7279\u6B8A\u6C1B\u56F4\u6216\u7070\u5EA6\u5316\u5904\u7406\u65F6\u53EF\u4EE5\u76F4\u63A5\u5728 html \u6807\u7B7E\u4E0A\u4F7F\u7528 filter \u5B9E\u73B0\u5168\u5C40\u7684\u89C6\u89C9\u8C03\u6574\u4F8B\u5982\u5728\u7EAA\u5FF5\u65E5\u6216\u7279\u6B8A\u6D3B\u52A8\u4E2D\u5FEB\u901F\u5207\u6362\u9875\u9762\u6837\u5F0F\u5F62\u6210\u7EDF\u4E00\u7684\u9ED1\u767D\u4E3B\u9898","source":"@site/docs/Frontend/CSS/100.CSS-\u6EE4\u955C\u5C5E\u6027.md","sourceDirName":"Frontend/CSS","slug":"/Frontend/CSS/CSS-\u6EE4\u955C\u5C5E\u6027","permalink":"/docs-hub/Frontend/CSS/CSS-\u6EE4\u955C\u5C5E\u6027","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/CSS/100.CSS-\u6EE4\u955C\u5C5E\u6027.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":100,"frontMatter":{},"sidebar":"cssSidebar","previous":{"title":"CSS \u53EF\u89C6\u5316\u5E03\u5C40\u4E0E BFC","permalink":"/docs-hub/Frontend/CSS/CSS-\u8868\u683C-BFC-\u4E66\u5199-\u547D\u540D"},"next":{"title":"\u5F39\u6027\u76D2\u6A21\u578B","permalink":"/docs-hub/Frontend/CSS/\u5F39\u6027\u76D2\u6A21\u578B"}}'),o=n("85893"),s=n("50065");let i={},a="\u4F7F\u7528\u6EE4\u955C\u5B9E\u73B0\u9875\u9762\u6574\u4F53\u7070\u5EA6\u6548\u679C",l={},c=[];function d(e){let t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\u4F7F\u7528\u6EE4\u955C\u5B9E\u73B0\u9875\u9762\u6574\u4F53\u7070\u5EA6\u6548\u679C",children:"\u4F7F\u7528\u6EE4\u955C\u5B9E\u73B0\u9875\u9762\u6574\u4F53\u7070\u5EA6\u6548\u679C"})}),"\n",(0,o.jsx)(t.p,{children:"\u901A\u8FC7 CSS \u7684 filter \u5C5E\u6027\u53EF\u4E3A\u6574\u4E2A\u9875\u9762\u5E94\u7528\u7070\u5EA6\u6EE4\u955C\u5C06\u9875\u9762\u5448\u73B0\u9ED1\u767D\u6548\u679C\u5728\u9700\u8981\u8425\u9020\u7279\u6B8A\u6C1B\u56F4\u6216\u7070\u5EA6\u5316\u5904\u7406\u65F6\u53EF\u4EE5\u76F4\u63A5\u5728 html \u6807\u7B7E\u4E0A\u4F7F\u7528 filter \u5B9E\u73B0\u5168\u5C40\u7684\u89C6\u89C9\u8C03\u6574\u4F8B\u5982\u5728\u7EAA\u5FF5\u65E5\u6216\u7279\u6B8A\u6D3B\u52A8\u4E2D\u5FEB\u901F\u5207\u6362\u9875\u9762\u6837\u5F0F\u5F62\u6210\u7EDF\u4E00\u7684\u9ED1\u767D\u4E3B\u9898"}),"\n",(0,o.jsx)(t.p,{children:"\u5728\u5B9E\u6218\u4E2D\u53EF\u76F4\u63A5\u5728 html \u5143\u7D20\u4E0A\u6DFB\u52A0 filter \u5C5E\u6027\u5C06 grayscale \u503C\u8BBE\u7F6E\u4E3A\u6240\u9700\u7684\u6BD4\u4F8B\u5373\u53EF\u4E5F\u53EF\u901A\u8FC7\u517C\u5BB9\u6027\u524D\u7F00\u5B9E\u73B0\u66F4\u5E7F\u6CDB\u7684\u6D4F\u89C8\u5668\u652F\u6301\u4EE5\u4E0B\u4EE3\u7801\u4E3A\u9875\u9762\u5E94\u7528\u7EA6 95%\u7684\u7070\u5EA6\u6548\u679C"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter",children:"filter - CSS\uFF08\u5C42\u53E0\u6837\u5F0F\u8868\uFF09 | MDN"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:"html {\n  filter: grayscale(95%);\n  -webkit-filter: grayscale(95%);\n  -moz-filter: grayscale(95%);\n  -ms-filter: grayscale(95%);\n  -o-filter: grayscale(95%);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=.95);\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u5728\u771F\u5B9E\u9879\u76EE\u4E2D\u53EF\u6839\u636E\u5B9E\u9645\u9700\u6C42\u52A8\u6001\u8C03\u6574\u7070\u5EA6\u6BD4\u4F8B\u901A\u8FC7 JavaScript \u6216\u540E\u7AEF\u903B\u8F91\u6765\u51B3\u5B9A\u662F\u5426\u5E94\u7528\u8BE5\u6837\u5F0F\u4F8B\u5982\u5728\u7279\u6B8A\u65E5\u671F\u81EA\u52A8\u542F\u7528\u7070\u5EA6\u6EE4\u955C\u4F7F\u9875\u9762\u6574\u4F53\u989C\u8272\u53D8\u6DE1\u4EE5\u8FBE\u5230\u7EAA\u5FF5\u6216\u7A81\u51FA\u7279\u5B9A\u4E3B\u9898\u7684\u6548\u679C"})]})}function S(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var r=n(67294);let o={},s=r.createContext(o);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);