"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["1843"],{67871:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var s=t(83564),r=t(85893),o=t(50065);let c={slug:"vue-event-bus-\u4F7F\u7528\u6848\u4F8B",title:"Vue Event bus \u4F7F\u7528\u6848\u4F8B",authors:["sumingcheng"],tags:["frontend"],date:new Date("2023-02-26T00:00:00.000Z")},i="Vue Event bus \u4F7F\u7528\u6848\u4F8B",u={authorsImageUrls:[void 0]},l=[];function d(e){let n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5047\u8BBE\u6211\u4EEC\u6709\u4E24\u4E2A\u7EC4\u4EF6\uFF1A\u4E00\u4E2A\u662F\u7236\u7EC4\u4EF6 ",(0,r.jsx)(n.code,{children:"Parent"}),"\uFF0C\u4E00\u4E2A\u662F\u5B50\u7EC4\u4EF6 ",(0,r.jsx)(n.code,{children:"Child"}),"\u3002\u6211\u4EEC\u5E0C\u671B\u5728 ",(0,r.jsx)(n.code,{children:"Child"})," \u4E2D\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u7136\u540E\u5728 ",(0,r.jsx)(n.code,{children:"Parent"})," \u4E2D\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6\u5E76\u8FDB\u884C\u5904\u7406\u3002\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Event bus \u6765\u5B9E\u73B0\uFF1A"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u5728 ",(0,r.jsx)(n.code,{children:"main.js"})," \u4E2D\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u7684 Event bus\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Vue.prototype.$eventBus = new Vue()\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u63A5\u7740\u5728 ",(0,r.jsx)(n.code,{children:"Child"})," \u7EC4\u4EF6\u4E2D\u89E6\u53D1\u4E8B\u4EF6\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"methods: {\n  handleClick() {\n    this.$eventBus.$emit('myEvent', 'hello')\n  }\n}\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"$emit"})," \u65B9\u6CD5\u6765\u89E6\u53D1\u4E00\u4E2A\u540D\u4E3A ",(0,r.jsx)(n.code,{children:"myEvent"})," \u7684\u4E8B\u4EF6\uFF0C\u5E76\u4F20\u9012\u4E00\u4E2A\u53C2\u6570 ",(0,r.jsx)(n.code,{children:"'hello'"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u540E\u5728 ",(0,r.jsx)(n.code,{children:"Parent"})," \u7EC4\u4EF6\u4E2D\u76D1\u542C\u4E8B\u4EF6\u5E76\u8FDB\u884C\u5904\u7406\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" created() {\n  this.$eventBus.$on('myEvent', (message) => {\n    console.log(message)\n  })\n}\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"$on"})," \u65B9\u6CD5\u6765\u76D1\u542C\u540D\u4E3A ",(0,r.jsx)(n.code,{children:"myEvent"})," \u7684\u4E8B\u4EF6\uFF0C\u5E76\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8F93\u51FA\u4F20\u9012\u7684\u53C2\u6570\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u5C06\u6570\u636E\u4ECE\u4E00\u4E2A\u7EC4\u4EF6\u4F20\u9012\u5230\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CEvent bus \u4F5C\u4E3A\u5168\u5C40\u5BF9\u8C61\uFF0C",(0,r.jsx)(n.strong,{children:"\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4EE3\u7801\u96BE\u4EE5\u7EF4\u62A4\u548C\u8C03\u8BD5\uFF0C\u56E0\u6B64\u9700\u8981\u8C28\u614E\u4F7F\u7528\u3002"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(67294);let r={},o=s.createContext(r);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}},83564:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/vue-event-bus-\u4F7F\u7528\u6848\u4F8B","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2023-02-26-Vue_Event_bus_\u4F7F\u7528\u6848\u4F8B.md","source":"@site/blog/\u524D\u7AEF/2023-02-26-Vue_Event_bus_\u4F7F\u7528\u6848\u4F8B.md","title":"Vue Event bus \u4F7F\u7528\u6848\u4F8B","description":"\u5047\u8BBE\u6211\u4EEC\u6709\u4E24\u4E2A\u7EC4\u4EF6\uFF1A\u4E00\u4E2A\u662F\u7236\u7EC4\u4EF6 Parent\uFF0C\u4E00\u4E2A\u662F\u5B50\u7EC4\u4EF6 Child\u3002\u6211\u4EEC\u5E0C\u671B\u5728 Child \u4E2D\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u7136\u540E\u5728 Parent \u4E2D\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6\u5E76\u8FDB\u884C\u5904\u7406\u3002\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Event bus \u6765\u5B9E\u73B0\uFF1A","date":"2023-02-26T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.8666666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"vue-event-bus-\u4F7F\u7528\u6848\u4F8B","title":"Vue Event bus \u4F7F\u7528\u6848\u4F8B","authors":["sumingcheng"],"tags":["frontend"],"date":"2023-02-26T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Webpack \u5E38\u89C1 LoaderPlugin","permalink":"/docs-hub/blog/webpack-\u5E38\u89C1-loaderplugin"},"nextItem":{"title":"Vue history \u548C hash \u4E24\u79CD\u6A21\u5F0F\u7684\u4F18\u7F3A\u70B9","permalink":"/docs-hub/blog/vue-history-\u548C-hash-\u4E24\u79CD\u6A21\u5F0F\u7684\u4F18\u7F3A\u70B9"}}')}}]);