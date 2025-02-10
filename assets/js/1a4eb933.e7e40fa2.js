"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["96987"],{12836:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>a,toc:()=>d,contentTitle:()=>s});var o=JSON.parse('{"id":"Frontend/BOM/\u83B7\u53D6\u4F4D\u7F6E-\u8BBE\u5907\u901F\u5EA6-\u8BBE\u5907\u65B9\u5411","title":"\u83B7\u53D6\u4F4D\u7F6E\u3001\u8BBE\u5907\u901F\u5EA6\u548C\u8BBE\u5907\u65B9\u5411","description":"\u5728\u524D\u7AEF\u5F00\u53D1\u4E2D,\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u83B7\u53D6\u8BBE\u5907\u7684\u4F4D\u7F6E\u3001\u901F\u5EA6\u548C\u65B9\u5411\u7B49\u4FE1\u606F\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528 Web API \u6765\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u3002","source":"@site/docs/Frontend/BOM/60.\u83B7\u53D6\u4F4D\u7F6E-\u8BBE\u5907\u901F\u5EA6-\u8BBE\u5907\u65B9\u5411.md","sourceDirName":"Frontend/BOM","slug":"/Frontend/BOM/\u83B7\u53D6\u4F4D\u7F6E-\u8BBE\u5907\u901F\u5EA6-\u8BBE\u5907\u65B9\u5411","permalink":"/docs-hub/Frontend/BOM/\u83B7\u53D6\u4F4D\u7F6E-\u8BBE\u5907\u901F\u5EA6-\u8BBE\u5907\u65B9\u5411","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/BOM/60.\u83B7\u53D6\u4F4D\u7F6E-\u8BBE\u5907\u901F\u5EA6-\u8BBE\u5907\u65B9\u5411.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":60,"frontMatter":{},"sidebar":"bomSidebar","previous":{"title":"screen \u4E0E location \u5BF9\u8C61\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5","permalink":"/docs-hub/Frontend/BOM/sreen\u4E0Elocation\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5"},"next":{"title":"\u79FB\u52A8\u7AEF\u4E8B\u4EF6\u4E4B touch","permalink":"/docs-hub/Frontend/BOM/\u79FB\u52A8\u7AEF\u4E8B\u4EF6-touch"}}'),i=t("85893"),c=t("50065");let r={},s="\u83B7\u53D6\u4F4D\u7F6E\u3001\u8BBE\u5907\u901F\u5EA6\u548C\u8BBE\u5907\u65B9\u5411",a={},d=[{value:"\u83B7\u53D6\u4F4D\u7F6E",id:"\u83B7\u53D6\u4F4D\u7F6E",level:2},{value:"\u83B7\u53D6\u8BBE\u5907\u901F\u5EA6",id:"\u83B7\u53D6\u8BBE\u5907\u901F\u5EA6",level:2},{value:"\u83B7\u53D6\u8BBE\u5907\u65B9\u5411",id:"\u83B7\u53D6\u8BBE\u5907\u65B9\u5411",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u83B7\u53D6\u4F4D\u7F6E\u8BBE\u5907\u901F\u5EA6\u548C\u8BBE\u5907\u65B9\u5411",children:"\u83B7\u53D6\u4F4D\u7F6E\u3001\u8BBE\u5907\u901F\u5EA6\u548C\u8BBE\u5907\u65B9\u5411"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u524D\u7AEF\u5F00\u53D1\u4E2D,\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u83B7\u53D6\u8BBE\u5907\u7684\u4F4D\u7F6E\u3001\u901F\u5EA6\u548C\u65B9\u5411\u7B49\u4FE1\u606F\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528 Web API \u6765\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u83B7\u53D6\u4F4D\u7F6E",children:"\u83B7\u53D6\u4F4D\u7F6E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation",children:"Geolocation"})," \u662F\u4E00\u4E2A\u7528\u4E8E\u83B7\u53D6\u8BBE\u5907\u4F4D\u7F6E\u7684 Web API\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4EE3\u7801\u6765\u83B7\u53D6\u8BBE\u5907\u7684\u5F53\u524D\u4F4D\u7F6E:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function success(e) {\n  console.log('\u4F4D\u7F6E\u83B7\u53D6\u6210\u529F', e);\n}\n\nfunction failure(e) {\n  console.log('\u4F4D\u7F6E\u83B7\u53D6\u5931\u8D25', e);\n}\n\nwindow.navigator.geolocation.getCurrentPosition(success, failure);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getCurrentPosition"})," \u65B9\u6CD5\u63A5\u53D7\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570,\u5206\u522B\u7528\u4E8E\u5904\u7406\u83B7\u53D6\u4F4D\u7F6E\u6210\u529F\u548C\u5931\u8D25\u7684\u60C5\u51B5\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u6211\u4EEC\u60F3\u8981\u5B9E\u65F6\u83B7\u53D6\u8BBE\u5907\u7684\u4F4D\u7F6E,\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"watchPosition"})," \u65B9\u6CD5:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"window.navigator.geolocation.watchPosition(success, failure, {\n  timeout: 500,\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"watchPosition"})," \u65B9\u6CD5\u4E0E ",(0,i.jsx)(n.code,{children:"getCurrentPosition"})," \u7C7B\u4F3C,\u4F46\u5B83\u4F1A\u6301\u7EED\u76D1\u542C\u8BBE\u5907\u4F4D\u7F6E\u7684\u53D8\u5316,\u5E76\u5728\u6BCF\u6B21\u4F4D\u7F6E\u66F4\u65B0\u65F6\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"timeout"})," \u9009\u9879\u6765\u6307\u5B9A\u83B7\u53D6\u4F4D\u7F6E\u7684\u8D85\u65F6\u65F6\u95F4\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u83B7\u53D6\u8BBE\u5907\u901F\u5EA6",children:"\u83B7\u53D6\u8BBE\u5907\u901F\u5EA6"}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7\u76D1\u542C ",(0,i.jsx)(n.code,{children:"devicemotion"})," \u4E8B\u4EF6,\u6211\u4EEC\u53EF\u4EE5\u83B7\u53D6\u8BBE\u5907\u7684\u52A0\u901F\u5EA6\u4FE1\u606F,\u4ECE\u800C\u5B9E\u73B0\u4E00\u4E9B\u6709\u8DA3\u7684\u529F\u80FD,\u5982\u6447\u4E00\u6447\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"var geo = document.getElementById('geography');\n\nwindow.addEventListener('devicemotion', function (e) {\n  // \u83B7\u53D6 X \u8F74\u7684\u52A0\u901F\u5EA6\n  geo.innerHTML = 'acc' + e.acceleration.x;\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D,\u6211\u4EEC\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"e.acceleration.x"})," \u83B7\u53D6\u4E86\u8BBE\u5907\u5728 X \u8F74\u4E0A\u7684\u52A0\u901F\u5EA6\u503C,\u5E76\u5C06\u5176\u663E\u793A\u5728\u9875\u9762\u4E0A\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u83B7\u53D6\u8BBE\u5907\u65B9\u5411",children:"\u83B7\u53D6\u8BBE\u5907\u65B9\u5411"}),"\n",(0,i.jsxs)(n.p,{children:["\u9664\u4E86\u52A0\u901F\u5EA6,\u6211\u4EEC\u8FD8\u53EF\u4EE5\u83B7\u53D6\u8BBE\u5907\u7684\u65B9\u5411\u4FE1\u606F\u3002\u5728\u79FB\u52A8\u7AEF,\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u76D1\u542C ",(0,i.jsx)(n.code,{children:"deviceorientation"})," \u4E8B\u4EF6\u6765\u83B7\u53D6\u8BBE\u5907\u7684 ",(0,i.jsx)(n.code,{children:"alpha"}),"\u3001",(0,i.jsx)(n.code,{children:"beta"})," \u548C ",(0,i.jsx)(n.code,{children:"gamma"})," \u503C,\u5206\u522B\u8868\u793A\u8BBE\u5907\u5728 X\u3001Y\u3001Z \u8F74\u4E0A\u7684\u65CB\u8F6C\u89D2\u5EA6\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"var geo = document.getElementById('geography');\n\nwindow.addEventListener('deviceorientation', function (e) {\n  geo.innerHTML = `<p>orientation.alpha: ${e.alpha}</p>\n                   <p>orientation.beta: ${e.beta}</p>\n                   <p>orientation.gamma: ${e.gamma}</p>`;\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F,\u5728 iOS \u8BBE\u5907\u4E0A,\u6211\u4EEC\u9700\u8981\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"webkitCompassHeading"})," \u5C5E\u6027\u6765\u83B7\u53D6\u7F57\u76D8\u65B9\u5411\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var o=t(67294);let i={},c=o.createContext(i);function r(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);