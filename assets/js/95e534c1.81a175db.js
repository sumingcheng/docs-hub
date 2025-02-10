"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["71674"],{36459:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"Backend/Regular/\u6B63\u5219\u8868\u8FBE\u5F0F\u521B\u5EFA\u65B9\u5F0F","title":"\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u521B\u5EFA\u65B9\u5F0F","description":"\u5728 JavaScript \u4E2D,\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u591A\u79CD\u65B9\u5F0F\u6765\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u51E0\u79CD\u5E38\u89C1\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u521B\u5EFA\u65B9\u5F0F,\u5E76\u901A\u8FC7\u5B9E\u4F8B\u6765\u6F14\u793A\u5B83\u4EEC\u7684\u7528\u6CD5\u3002","source":"@site/docs/Backend/Regular/20-\u6B63\u5219\u8868\u8FBE\u5F0F\u521B\u5EFA\u65B9\u5F0F.md","sourceDirName":"Backend/Regular","slug":"/Backend/Regular/\u6B63\u5219\u8868\u8FBE\u5F0F\u521B\u5EFA\u65B9\u5F0F","permalink":"/docs-hub/Backend/Regular/\u6B63\u5219\u8868\u8FBE\u5F0F\u521B\u5EFA\u65B9\u5F0F","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Regular/20-\u6B63\u5219\u8868\u8FBE\u5F0F\u521B\u5EFA\u65B9\u5F0F.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":20,"frontMatter":{},"sidebar":"regularSidebar","previous":{"title":"\u6B63\u5219\u8868\u8FBE\u5F0F\u57FA\u7840","permalink":"/docs-hub/Backend/Regular/\u6B63\u5219\u8868\u8FBE\u5F0F\u57FA\u7840"},"next":{"title":"\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u91CF\u8BCD\u4E0E\u65B9\u6CD5","permalink":"/docs-hub/Backend/Regular/\u6B63\u5219\u8868\u8FBE\u5F0F\u91CF\u8BCD\u4E0E\u65B9\u6CD5"}}'),c=r("85893"),s=r("50065");let i={},a="\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u521B\u5EFA\u65B9\u5F0F",l={},d=[{value:"\u6D4B\u8BD5\u7528\u4F8B",id:"\u6D4B\u8BD5\u7528\u4F8B",level:2},{value:"\u5B57\u9762\u91CF\u521B\u5EFA",id:"\u5B57\u9762\u91CF\u521B\u5EFA",level:2},{value:"\u6784\u9020\u51FD\u6570\u521B\u5EFA",id:"\u6784\u9020\u51FD\u6570\u521B\u5EFA",level:2},{value:"\u9009\u62E9\u7B26",id:"\u9009\u62E9\u7B26",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u521B\u5EFA\u65B9\u5F0F",children:"\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u521B\u5EFA\u65B9\u5F0F"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728 JavaScript \u4E2D,\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u591A\u79CD\u65B9\u5F0F\u6765\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u51E0\u79CD\u5E38\u89C1\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u521B\u5EFA\u65B9\u5F0F,\u5E76\u901A\u8FC7\u5B9E\u4F8B\u6765\u6F14\u793A\u5B83\u4EEC\u7684\u7528\u6CD5\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u6D4B\u8BD5\u7528\u4F8B",children:"\u6D4B\u8BD5\u7528\u4F8B"}),"\n",(0,c.jsx)(n.p,{children:"\u4E3A\u4E86\u66F4\u597D\u5730\u6F14\u793A\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4F7F\u7528,\u6211\u4EEC\u5148\u5B9A\u4E49\u4E00\u4E2A\u6D4B\u8BD5\u5B57\u7B26\u4E32:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8FD9\u4E2A\u5B57\u7B26\u4E32\u5305\u542B\u4E86\u4E00\u6BB5 Lorem ipsum \u6587\u672C,\u6211\u4EEC\u5C06\u5728\u540E\u9762\u7684\u793A\u4F8B\u4E2D\u4F7F\u7528\u5B83\u6765\u6D4B\u8BD5\u6B63\u5219\u8868\u8FBE\u5F0F\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u5B57\u9762\u91CF\u521B\u5EFA",children:"\u5B57\u9762\u91CF\u521B\u5EFA"}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u7B80\u5355\u7684\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u65B9\u5F0F\u662F\u4F7F\u7528\u5B57\u9762\u91CF\u3002\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728",(0,c.jsx)(n.code,{children:"//"}),"\u4E4B\u95F4\u5199\u5165\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5185\u5BB9\u3002\u4F8B\u5982:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let str = 'admin';\nlet pattern = 'n';\nconsole.log(new RegExp(pattern).test(str));\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D,\u6211\u4EEC\u4F7F\u7528\u4E86",(0,c.jsx)(n.code,{children:"new RegExp(pattern).test(str)"}),"\u6765\u6D4B\u8BD5\u5B57\u7B26\u4E32",(0,c.jsx)(n.code,{children:"'admin'"}),"\u662F\u5426\u5305\u542B\u5B57\u6BCD",(0,c.jsx)(n.code,{children:"'n'"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6784\u9020\u51FD\u6570\u521B\u5EFA",children:"\u6784\u9020\u51FD\u6570\u521B\u5EFA"}),"\n",(0,c.jsxs)(n.p,{children:["\u9664\u4E86\u5B57\u9762\u91CF,\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528",(0,c.jsx)(n.code,{children:"RegExp"}),"\u6784\u9020\u51FD\u6570\u6765\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F\u5BF9\u8C61\u3002\u6784\u9020\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570:\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5185\u5BB9\u548C\u4FEE\u9970\u7B26\u3002\u4F8B\u5982:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let text = 'Lorem';\nlet regex = new RegExp(text, 'g');\n\nconsole.log(regex.test(str));\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u5168\u5C40\u641C\u7D22",(0,c.jsx)(n.code,{children:"'Lorem'"}),"\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5BF9\u8C61",(0,c.jsx)(n.code,{children:"regex"}),",\u5E76\u7528\u5B83\u6D4B\u8BD5",(0,c.jsx)(n.code,{children:"str"}),"\u4E2D\u662F\u5426\u5305\u542B",(0,c.jsx)(n.code,{children:"'Lorem'"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6784\u9020\u51FD\u6570\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4E00\u4E2A\u597D\u5904\u662F\u53EF\u4EE5\u52A8\u6001\u751F\u6210\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5185\u5BB9\u3002\u4F8B\u5982:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"console.log('Lorem'.replace(/\\w/g, '#'));\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8FD9\u884C\u4EE3\u7801\u4F7F\u7528",(0,c.jsx)(n.code,{children:"replace"}),"\u65B9\u6CD5\u5C06",(0,c.jsx)(n.code,{children:"'Lorem'"}),"\u4E2D\u7684\u6240\u6709\u5355\u8BCD\u5B57\u7B26\u66FF\u6362\u4E3A",(0,c.jsx)(n.code,{children:"'#'"}),"\u3002\u5176\u4E2D",(0,c.jsx)(n.code,{children:"/\\w/g"}),"\u5C31\u662F\u4E00\u4E2A\u7528\u5B57\u9762\u91CF\u521B\u5EFA\u7684\u5168\u5C40\u6B63\u5219\u8868\u8FBE\u5F0F\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9009\u62E9\u7B26",children:"\u9009\u62E9\u7B26"}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u65F6\u6211\u4EEC\u5E0C\u671B\u6B63\u5219\u8868\u8FBE\u5F0F\u53EF\u4EE5\u5339\u914D\u591A\u4E2A\u6A21\u5F0F\u4E2D\u7684\u4E00\u4E2A,\u8FD9\u65F6\u53EF\u4EE5\u4F7F\u7528\u9009\u62E9\u7B26",(0,c.jsx)(n.code,{children:"|"}),"\u3002\u4F8B\u5982:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"console.log(/aa|b/g.test(str));\nconsole.log(/aa&b/g.test(str));\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u7B2C\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F",(0,c.jsx)(n.code,{children:"/aa|b/g"}),"\u8868\u793A\u5339\u914D",(0,c.jsx)(n.code,{children:"'aa'"}),"\u6216",(0,c.jsx)(n.code,{children:"'b'"}),",\u7B2C\u4E8C\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F",(0,c.jsx)(n.code,{children:"/aa&b/g"}),"\u8868\u793A\u5339\u914D",(0,c.jsx)(n.code,{children:"'aa&b'"}),"\u8FD9\u4E2A\u6574\u4F53\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var t=r(67294);let c={},s=t.createContext(c);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);