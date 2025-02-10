"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["26087"],{59905:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>c,assets:()=>h,toc:()=>a,contentTitle:()=>r});var c=JSON.parse('{"id":"Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/computed\u4E0Ewatch\u5E94\u7528\u5206\u6790","title":"watch \u4E0E computed \u7684\u6DF1\u5165\u6BD4\u8F83","description":"watch \u4FA6\u542C\u5668","source":"@site/docs/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/30.computed\u4E0Ewatch\u5E94\u7528\u5206\u6790.md","sourceDirName":"Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027","slug":"/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/computed\u4E0Ewatch\u5E94\u7528\u5206\u6790","permalink":"/docs-hub/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/computed\u4E0Ewatch\u5E94\u7528\u5206\u6790","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/30.computed\u4E0Ewatch\u5E94\u7528\u5206\u6790.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":30,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"computed\u548Cwatch\u6BD4\u8F83","permalink":"/docs-hub/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u8BA1\u7B97\u5C5E\u6027\u4E0E\u4FA6\u542C\u5668"},"next":{"title":"\u8BA1\u7B97\u5C5E\u6027","permalink":"/docs-hub/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165\u7814\u7A76\u8BA1\u7B97\u5C5E\u6027\u4EE5\u53CA\u5E94\u7528\u573A\u666F\u5206\u6790"}}'),d=t("85893"),s=t("50065");let i={},r="watch \u4E0E computed \u7684\u6DF1\u5165\u6BD4\u8F83",h={},a=[{value:"watch \u4FA6\u542C\u5668",id:"watch-\u4FA6\u542C\u5668",level:2},{value:"computed \u8BA1\u7B97\u5C5E\u6027",id:"computed-\u8BA1\u7B97\u5C5E\u6027",level:2},{value:"watch \u7684\u5E94\u7528",id:"watch-\u7684\u5E94\u7528",level:2},{value:"\u5373\u65F6\u56DE\u8C03\u4FA6\u542C\u5668",id:"\u5373\u65F6\u56DE\u8C03\u4FA6\u542C\u5668",level:3},{value:"\u4FA6\u542C\u5668\u56DE\u8C03\u89E6\u53D1\u7684\u65F6\u673A",id:"\u4FA6\u542C\u5668\u56DE\u8C03\u89E6\u53D1\u7684\u65F6\u673A",level:3},{value:"watch \u4E0E computed \u7684\u5B9E\u6218\u5BF9\u6BD4",id:"watch-\u4E0E-computed-\u7684\u5B9E\u6218\u5BF9\u6BD4",level:2},{value:"\u4F7F\u7528 computed",id:"\u4F7F\u7528-computed",level:3},{value:"\u4F7F\u7528 watch",id:"\u4F7F\u7528-watch",level:3},{value:"\u5B8C\u6574\u4EE3\u7801\u793A\u4F8B",id:"\u5B8C\u6574\u4EE3\u7801\u793A\u4F8B",level:2},{value:"\u6267\u884C\u6548\u679C",id:"\u6267\u884C\u6548\u679C",level:2}];function o(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"watch-\u4E0E-computed-\u7684\u6DF1\u5165\u6BD4\u8F83",children:"watch \u4E0E computed \u7684\u6DF1\u5165\u6BD4\u8F83"})}),"\n",(0,d.jsx)(n.h2,{id:"watch-\u4FA6\u542C\u5668",children:"watch \u4FA6\u542C\u5668"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"watch"}),"\u4FA6\u542C\u5668\u5173\u6CE8\u4E8E\u6570\u636E\u7684\u66F4\u65B0\u3002\u5B83\u4E3A\u6570\u636E\u6DFB\u52A0\u4FA6\u542C\u5668\uFF0C\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4FA6\u542C\u5668\u51FD\u6570\u4F1A\u88AB\u6267\u884C\u3002",(0,d.jsx)(n.code,{children:"watch"}),"\u7684\u7279\u70B9\u662F\u5728\u6570\u636E\u66F4\u65B0\u65F6\u5B8C\u6210\u7279\u5B9A\u7684\u903B\u8F91\u64CD\u4F5C\uFF0C\u4F8B\u5982\u5728\u6570\u636E\u53D8\u5316\u540E\u53D1\u9001",(0,d.jsx)(n.code,{children:"AJAX"}),"\u8BF7\u6C42\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"computed-\u8BA1\u7B97\u5C5E\u6027",children:"computed \u8BA1\u7B97\u5C5E\u6027"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"computed"}),"\u8BA1\u7B97\u5C5E\u6027\u4E3B\u8981\u5173\u6CE8\u4E8E\u6A21\u677F\u4E2D\u7684\u903B\u8F91\u5904\u7406\u3002\u5B83\u7528\u4E8E\u62BD\u79BB\u548C\u590D\u7528\u6A21\u677F\u4E2D\u590D\u6742\u7684\u903B\u8F91\u8FD0\u7B97\u3002\u5F53\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8BA1\u7B97\u5C5E\u6027\u4F1A\u91CD\u65B0\u8C03\u7528\u5E76\u66F4\u65B0\u5176\u503C\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"watch-\u7684\u5E94\u7528",children:"watch \u7684\u5E94\u7528"}),"\n",(0,d.jsx)(n.h3,{id:"\u5373\u65F6\u56DE\u8C03\u4FA6\u542C\u5668",children:"\u5373\u65F6\u56DE\u8C03\u4FA6\u542C\u5668"}),"\n",(0,d.jsxs)(n.p,{children:["\u5373\u65F6\u56DE\u8C03\u4FA6\u542C\u5668\u5141\u8BB8\u5728\u4FA6\u542C\u5668\u521D\u59CB\u5316\u65F6\u7ACB\u5373\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002\u901A\u8FC7\u8BBE\u7F6E",(0,d.jsx)(n.code,{children:"immediate"}),"\u4E3A",(0,d.jsx)(n.code,{children:"true"}),"\uFF0C\u53EF\u4EE5\u5728\u6570\u636E\u521D\u59CB\u5316\u65F6\u4E5F\u89E6\u53D1\u56DE\u8C03\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"watch: {\n    question: {\n        handler(newQuestion) {\n            // \u5904\u7406\u65B0\u7684\u95EE\u9898\n            console.log('\u95EE\u9898\u5DF2\u66F4\u65B0:', newQuestion);\n        },\n        immediate: true\n    }\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u4FA6\u542C\u5668\u56DE\u8C03\u89E6\u53D1\u7684\u65F6\u673A",children:"\u4FA6\u542C\u5668\u56DE\u8C03\u89E6\u53D1\u7684\u65F6\u673A"}),"\n",(0,d.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",(0,d.jsx)(n.code,{children:"flush"}),"\u9009\u9879\u6765\u63A7\u5236\u4FA6\u542C\u5668\u56DE\u8C03\u7684\u89E6\u53D1\u65F6\u673A\u3002\u5C06",(0,d.jsx)(n.code,{children:"flush"}),"\u8BBE\u7F6E\u4E3A",(0,d.jsx)(n.code,{children:"'post'"}),"\uFF0C\u4FA6\u542C\u5668\u5C06\u5728 Vue \u5B8C\u6210 DOM \u66F4\u65B0\u4E4B\u540E\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"watch: {\n    question: {\n        handler(newQuestion) {\n            // \u5728DOM\u66F4\u65B0\u540E\u5904\u7406\u65B0\u7684\u95EE\u9898\n            console.log('\u95EE\u9898\u5DF2\u66F4\u65B0\u5E76\u4E14DOM\u5DF2\u5237\u65B0:', newQuestion);\n        },\n        flush: 'post'\n    }\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"watch-\u4E0E-computed-\u7684\u5B9E\u6218\u5BF9\u6BD4",children:"watch \u4E0E computed \u7684\u5B9E\u6218\u5BF9\u6BD4"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u9009\u62E9\u4F7F\u7528",(0,d.jsx)(n.code,{children:"watch"}),"\u8FD8\u662F",(0,d.jsx)(n.code,{children:"computed"}),"\u53D6\u51B3\u4E8E\u5177\u4F53\u7684\u9700\u6C42\u3002\u5982\u679C\u9700\u8981\u57FA\u4E8E\u591A\u4E2A\u6570\u636E\u6E90\u8FDB\u884C\u590D\u6742\u8BA1\u7B97\u5E76\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\uFF0C",(0,d.jsx)(n.code,{children:"computed"}),"\u662F\u66F4\u5408\u9002\u7684\u9009\u62E9\uFF0C\u56E0\u4E3A\u5B83\u5177\u6709\u7F13\u5B58\u673A\u5236\uFF0C\u80FD\u63D0\u5347\u6027\u80FD\u3002\u800C\u5982\u679C\u9700\u8981\u5728\u6570\u636E\u53D8\u5316\u65F6\u6267\u884C\u5F02\u6B65\u64CD\u4F5C\u6216\u8FDB\u884C\u4E00\u4E9B\u526F\u4F5C\u7528\u5904\u7406\uFF0C\u5982\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\uFF0C",(0,d.jsx)(n.code,{children:"watch"}),"\u5219\u66F4\u4E3A\u9002\u7528\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF0C\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u641C\u7D22\u529F\u80FD\uFF0C\u9700\u8981\u6839\u636E\u7528\u6237\u8F93\u5165\u52A8\u6001\u8FC7\u6EE4\u7ED3\u679C\uFF1A"}),"\n",(0,d.jsx)(n.h3,{id:"\u4F7F\u7528-computed",children:"\u4F7F\u7528 computed"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"computed: {\n    filteredResults() {\n        return this.items.filter(item => item.includes(this.searchQuery));\n    }\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u4F7F\u7528-watch",children:"\u4F7F\u7528 watch"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"watch: {\n    searchQuery(newQuery) {\n        this.fetchResults(newQuery);\n    }\n},\nmethods: {\n    fetchResults(query) {\n        // \u53D1\u9001AJAX\u8BF7\u6C42\u83B7\u53D6\u7ED3\u679C\n        axios.get(`/api/search?q=${query}`).then(response => {\n            this.items = response.data;\n        });\n    }\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\uFF0C",(0,d.jsx)(n.code,{children:"computed"}),"\u7528\u4E8E\u5B9E\u65F6\u8BA1\u7B97\u8FC7\u6EE4\u540E\u7684\u7ED3\u679C\uFF0C\u800C",(0,d.jsx)(n.code,{children:"watch"}),"\u5219\u7528\u4E8E\u5728\u641C\u7D22\u67E5\u8BE2\u53D8\u5316\u65F6\u89E6\u53D1\u6570\u636E\u7684\u5F02\u6B65\u83B7\u53D6\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5B8C\u6574\u4EE3\u7801\u793A\u4F8B",children:"\u5B8C\u6574\u4EE3\u7801\u793A\u4F8B"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://www.yuque.com/sumingcheng/gs6i1z/vcgmee",children:"Vue watch \u4E0E computed \u5E94\u7528\u793A\u4F8B"})}),"\n",(0,d.jsx)(n.h2,{id:"\u6267\u884C\u6548\u679C",children:"\u6267\u884C\u6548\u679C"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(95506).Z+"",width:"1338",height:"799"})})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},95506:function(e,n,t){t.d(n,{Z:function(){return c}});let c=t.p+"assets/images/8a9bcac844f5290d84521a3c9abecb51-3f62b114dd960d3c0e2b9b7cd30ea8ae.gif"},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var c=t(67294);let d={},s=c.createContext(d);function i(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);