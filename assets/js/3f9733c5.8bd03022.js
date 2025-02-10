"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["53030"],{74885:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return a},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var o=t(73692),s=t(85893),c=t(50065);let r={slug:"js\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49",title:"JS\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49",authors:["sumingcheng"],tags:["frontend"],date:new Date("2023-07-11T00:00:00.000Z")},i="JS \u4E2D this \u6709\u4EC0\u4E48\u610F\u4E49\uFF1F",l={authorsImageUrls:[void 0]},u=[];function d(n){let e={code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u65B9\u6CD5\u501F\u7528"}),"\uFF1A\u4E00\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u501F\u7528\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u6709\u4E00\u4E2A ",(0,s.jsx)(e.code,{children:"person"})," \u5BF9\u8C61\uFF0C\u6709\u4E00\u4E2A ",(0,s.jsx)(e.code,{children:"introduce"})," \u65B9\u6CD5\u53EF\u4EE5\u5F15\u7528 ",(0,s.jsx)(e.code,{children:"this.name"}),"\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'let person = {\n  name: "Alice",\n  introduce: function() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n};\n\n// \u8FD9\u4E2A\u5BF9\u8C61\u6709\u4E00\u4E2A name \u5C5E\u6027\uFF0C\u4F46\u662F\u6CA1\u6709 introduce \u65B9\u6CD5\nlet anotherPerson = {\n  name: "Bob"\n};\n\n// \u6211\u4EEC\u53EF\u4EE5\u501F\u7528 person \u7684 introduce \u65B9\u6CD5\n// \u5B9E\u9645\u610F\u601D\u5C31\u662F\u8BF4\uFF0C\u6211\u901A\u8FC7call\u65B9\u6CD5\uFF0C\u628Aperson\u4E0A\u7684\u65B9\u6CD5\u62FF\u6765\u4E86\uFF0C\u5728\u4F60\u7684\u8EAB\u4E0A\u6267\u884C\n\nperson.introduce.call(anotherPerson);  // \u8F93\u51FA "Hello, my name is Bob"\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsxs)(e.strong,{children:["\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"apply()"})," \u4EE5\u6570\u7EC4\u5F62\u5F0F\u4F20\u9012\u51FD\u6570\u53C2\u6570"]}),"\uFF1A\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u63A5\u53D7\u4E00\u7EC4\u503C\uFF0C\u800C\u4F60\u7684\u503C\u662F\u5B58\u50A8\u5728\u6570\u7EC4\u4E2D\uFF0C",(0,s.jsx)(e.code,{children:"apply()"})," \u53EF\u4EE5\u5E2E\u52A9\u4F60\u4EE5\u6570\u7EC4\u5F62\u5F0F\u4F20\u9012\u53C2\u6570\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"function sum(a, b, c) {\n  return a + b + c;\n}\n\nlet numbers = [1, 2, 3];\n\nconsole.log(sum.apply(null, numbers));  // \u8F93\u51FA 6\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsxs)(e.strong,{children:["\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"bind()"})," \u4E3A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u521B\u5EFA\u6301\u4E45\u6027\u4E0A\u4E0B\u6587"]}),"\uFF1A\u5728\u5904\u7406\u4E8B\u4EF6\u6216\u56DE\u8C03\u51FD\u6570\u65F6\uFF0C\u4F60\u53EF\u80FD\u60F3\u8981\u51FD\u6570\u5728\u7279\u5B9A\u4E0A\u4E0B\u6587\u4E2D\u6267\u884C\uFF0C",(0,s.jsx)(e.code,{children:"bind()"})," \u53EF\u4EE5\u5E2E\u52A9\u4F60\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"let button = {\n  content: 'Show message',\n  clickHandler: function() {\n    console.log(this.content);\n  }\n};\n\n// \u8FD9\u6837\u505A\u4F1A\u5BFC\u81F4 this \u4E22\u5931\uFF0C\u56E0\u4E3A addEventListener \u4F1A\u8C03\u7528 clickHandler\uFF0C\u5C06 this \u8BBE\u7F6E\u4E3A\u8C03\u7528\u5B83\u7684\u5143\u7D20\uFF08\u8FD9\u91CC\u662F button \u5143\u7D20\uFF09\n// document.querySelector('button').addEventListener('click', button.clickHandler);\n\n// \u4F7F\u7528 bind\uFF0C\u6211\u4EEC\u53EF\u4EE5\u786E\u4FDD clickHandler \u5185\u7684 this \u59CB\u7EC8\u6307\u5411 button \u5BF9\u8C61\ndocument.querySelector('button').addEventListener('click', button.clickHandler.bind(button));\n\n"})})]})}function a(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return r}});var o=t(67294);let s={},c=o.createContext(s);function r(n){let e=o.useContext(c);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(c.Provider,{value:e},n.children)}},73692:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/js\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2023-07-11-JS\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49.md","source":"@site/blog/\u524D\u7AEF/2023-07-11-JS\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49.md","title":"JS\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49","description":"\u65B9\u6CD5\u501F\u7528\uFF1A\u4E00\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u501F\u7528\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u6709\u4E00\u4E2A person \u5BF9\u8C61\uFF0C\u6709\u4E00\u4E2A introduce \u65B9\u6CD5\u53EF\u4EE5\u5F15\u7528 this.name\uFF1A","date":"2023-07-11T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.14,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"js\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49","title":"JS\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49","authors":["sumingcheng"],"tags":["frontend"],"date":"2023-07-11T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B","permalink":"/docs-hub/blog/\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B"},"nextItem":{"title":"\u6BD4\u8F83 TCPHTTP \u548C WebSocket \u4E09\u79CD\u534F\u8BAE","permalink":"/docs-hub/blog/\u6BD4\u8F83-tcphttp-\u548C-websocket-\u4E09\u79CD\u534F\u8BAE"}}')}}]);