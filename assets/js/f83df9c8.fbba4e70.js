"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["80945"],{90972:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return a}});var o=t(12492),r=t(85893),c=t(50065);let i={slug:"vue3-\u4E2D\u7684-provide-\u548C-inject",title:"Vue3 \u4E2D\u7684 provide \u548C inject",authors:["sumingcheng"],tags:["frontend"],date:new Date("2023-07-05T00:00:00.000Z")},s="Vue3 \u4E2D\u7684 provide \u548C inject",u={authorsImageUrls:[void 0]},a=[];function l(e){let n={code:"code",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5728 Vue 3 \u4E2D\uFF0C",(0,r.jsx)(n.code,{children:"provide"})," \u548C ",(0,r.jsx)(n.code,{children:"inject"})," \u7684\u503C\u9ED8\u8BA4\u662F\u4E0D\u54CD\u5E94\u5F0F\u7684\u3002\u8FD9\u610F\u5473\u7740\u5982\u679C\u4F60\u63D0\u4F9B\u4E00\u4E2A\u503C\uFF0C\u7136\u540E\u5728\u63D0\u4F9B\u8BE5\u503C\u4E4B\u540E\u6539\u53D8\u5B83\uFF0C\u90A3\u4E48\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"inject"})," \u7684\u7EC4\u4EF6\u5C06\u4E0D\u4F1A\u770B\u5230\u8FD9\u4E2A\u53D8\u5316\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u800C\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 Vue 3 \u7684 ",(0,r.jsx)(n.code,{children:"reactive"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"ref"})," \u65B9\u6CD5\u6765\u521B\u5EFA\u54CD\u5E94\u5F0F\u7684\u503C\uFF0C\u7136\u540E\u63D0\u4F9B\u8FD9\u4E2A\u54CD\u5E94\u5F0F\u7684\u503C\u3002\u8FD9\u6837\uFF0C\u5F53\u8FD9\u4E2A\u503C\u6539\u53D8\u65F6\uFF0C\u6240\u6709\u6CE8\u5165\u8BE5\u503C\u7684\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u4EE5\u53CD\u6620\u8FD9\u4E2A\u53D8\u5316\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// \u5728 Vue 3 \u4E2D\u7684 main.js \u6216\u8005 main.ts \u6587\u4EF6\u4E2D\nimport { createApp, reactive } from 'vue'\nimport App from './App.vue'\n\nconst app = createApp(App)\n\n// \u521B\u5EFA\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u503C\nconst globalState = reactive({ user: 'John Doe' })\n\n// \u63D0\u4F9B\u8FD9\u4E2A\u54CD\u5E94\u5F0F\u7684\u503C\napp.provide('globalState', globalState)\n\napp.mount('#app')\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540E\u5728\u4EFB\u4F55\u5B50\u7EC4\u4EF6\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"inject"})," API \u6765\u63A5\u6536\u8FD9\u4E2A\u54CD\u5E94\u5F0F\u7684\u503C\uFF0C\u5E76\u5728\u6A21\u677F\u6216\u8005\u8BA1\u7B97\u5C5E\u6027\u4E2D\u4F7F\u7528\u5B83\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// \u5728\u4EFB\u4F55\u5B50\u7EC4\u4EF6\u4E2D\nimport { inject } from 'vue'\n\nexport default {\n  setup() {\n    const globalState = inject('globalState')\n\n    // \u5728\u6A21\u677F\u6216\u8005\u8BA1\u7B97\u5C5E\u6027\u4E2D\u4F7F\u7528 globalState.user\n    return { globalState }\n  }\n}\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 Vue 3 \u4E2D\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"globalState.user"})," \u6765\u8BBF\u95EE ",(0,r.jsx)(n.code,{children:"user"})," \u5C5E\u6027\uFF0C\u800C\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"globalState"}),"\uFF0C\u56E0\u4E3A ",(0,r.jsx)(n.code,{children:"globalState"})," \u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u503C\u3002\u5982\u679C\u4F60\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u503C\uFF08\u4F8B\u5982\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u6570\u5B57\uFF09\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"ref"})," \u65B9\u6CD5\u3002"]})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var o=t(67294);let r={},c=o.createContext(r);function i(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(c.Provider,{value:n},e.children)}},12492:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/vue3-\u4E2D\u7684-provide-\u548C-inject","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2023-07-05-Vue3_\u4E2D\u7684_provide_\u548C_inject.md","source":"@site/blog/\u524D\u7AEF/2023-07-05-Vue3_\u4E2D\u7684_provide_\u548C_inject.md","title":"Vue3 \u4E2D\u7684 provide \u548C inject","description":"\u5728 Vue 3 \u4E2D\uFF0Cprovide \u548C inject \u7684\u503C\u9ED8\u8BA4\u662F\u4E0D\u54CD\u5E94\u5F0F\u7684\u3002\u8FD9\u610F\u5473\u7740\u5982\u679C\u4F60\u63D0\u4F9B\u4E00\u4E2A\u503C\uFF0C\u7136\u540E\u5728\u63D0\u4F9B\u8BE5\u503C\u4E4B\u540E\u6539\u53D8\u5B83\uFF0C\u90A3\u4E48\u4F7F\u7528 inject \u7684\u7EC4\u4EF6\u5C06\u4E0D\u4F1A\u770B\u5230\u8FD9\u4E2A\u53D8\u5316\u3002","date":"2023-07-05T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.1566666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"vue3-\u4E2D\u7684-provide-\u548C-inject","title":"Vue3 \u4E2D\u7684 provide \u548C inject","authors":["sumingcheng"],"tags":["frontend"],"date":"2023-07-05T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u6BD4\u8F83 TCPHTTP \u548C WebSocket \u4E09\u79CD\u534F\u8BAE","permalink":"/docs-hub/blog/\u6BD4\u8F83-tcphttp-\u548C-websocket-\u4E09\u79CD\u534F\u8BAE"},"nextItem":{"title":"\u5FAE\u524D\u7AEF\u548CPNPM\u5DE5\u4F5C\u7A7A\u95F4\u4E24\u79CD\u65B9\u6848\u5BF9\u6BD4","permalink":"/docs-hub/blog/\u5FAE\u524D\u7AEF\u548Cpnpm\u5DE5\u4F5C\u7A7A\u95F4\u4E24\u79CD\u65B9\u6848\u5BF9\u6BD4"}}')}}]);