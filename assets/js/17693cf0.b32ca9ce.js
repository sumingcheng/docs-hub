"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["95337"],{59499:function(n,e,t){t.r(e),t.d(e,{default:()=>o,frontMatter:()=>d,metadata:()=>r,assets:()=>s,toc:()=>u,contentTitle:()=>a});var r=JSON.parse('{"id":"Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/\u5185\u7F6E\u6307\u4EE4","title":"Vue.js \u6761\u4EF6\u6E32\u67D3\u8BE6\u89E3","description":"v-if \u5220\u9664\u8282\u70B9","source":"@site/docs/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/50.\u5185\u7F6E\u6307\u4EE4.md","sourceDirName":"Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8","slug":"/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/\u5185\u7F6E\u6307\u4EE4","permalink":"/docs-hub/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/\u5185\u7F6E\u6307\u4EE4","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/50.\u5185\u7F6E\u6307\u4EE4.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":50,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"mustache-Vue\u7F16\u8BD1","permalink":"/docs-hub/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/Mustache-Vue\u7F16\u8BD1-\u5185\u7F6E\u6307\u4EE4"},"next":{"title":"Vue.js \u5C5E\u6027\u4E0E\u63D2\u503C\u8BE6\u89E3","permalink":"/docs-hub/Frontend/Vue/Vue\u57FA\u7840\u5165\u95E8/\u5C5E\u6027-\u8868\u8FBE\u5F0F"}}'),c=t("85893"),i=t("50065");let d={},a="Vue.js \u6761\u4EF6\u6E32\u67D3\u8BE6\u89E3",s={},u=[{value:"v-if \u5220\u9664\u8282\u70B9",id:"v-if-\u5220\u9664\u8282\u70B9",level:2},{value:"v-show \u9690\u85CF\u8282\u70B9",id:"v-show-\u9690\u85CF\u8282\u70B9",level:2},{value:"\u7406\u89E3\u6307\u4EE4",id:"\u7406\u89E3\u6307\u4EE4",level:2},{value:"\u52A8\u6001\u5C5E\u6027\u540D\u7684\u4F7F\u7528",id:"\u52A8\u6001\u5C5E\u6027\u540D\u7684\u4F7F\u7528",level:2},{value:"\u63D2\u503C\u8868\u8FBE\u5F0F\u8BBF\u95EE\u7684\u95EE\u9898",id:"\u63D2\u503C\u8868\u8FBE\u5F0F\u8BBF\u95EE\u7684\u95EE\u9898",level:2}];function l(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"vuejs-\u6761\u4EF6\u6E32\u67D3\u8BE6\u89E3",children:"Vue.js \u6761\u4EF6\u6E32\u67D3\u8BE6\u89E3"})}),"\n",(0,c.jsx)(e.h2,{id:"v-if-\u5220\u9664\u8282\u70B9",children:"v-if \u5220\u9664\u8282\u70B9"}),"\n",(0,c.jsx)(e.p,{children:"\u793A\u4F8B\u4EE3\u7801\uFF08\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u67E5\u770B DOM \u7ED3\u6784\uFF0C\u65B9\u4FBF\u7406\u89E3\u66F4\u6DF1\u523B\uFF09"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'const App = {\n  data() {\n    return {\n      currentLinkIndex: 0,\n      urls: [\'www.taobao.com\', \'www.tmall.com\', \'www.jd.com\'],\n    };\n  },\n  template: `\n    <div>\n        <p v-if="currentLinkIndex === 0">\n            <a :href="urls[0]" target="_blank">\u6DD8\u5B9D\u5546\u57CE</a>\n        </p>\n        <p v-else-if="currentLinkIndex === 1">\n            <a :href="urls[1]">\u5929\u732B\u5546\u57CE</a>\n        </p>\n        <p v-else>\n            <a :href="urls[2]">\u4EAC\u4E1C\u5546\u57CE</a>\n        </p>\n    </div>\n    <div>\n        <button @click="changeIndex(0)">\u6DD8\u5B9D</button>\n        <button @click="changeIndex(1)">\u5929\u732B</button>\n        <button @click="changeIndex(2)">\u4EAC\u4E1C</button>\n    </div>\n    `,\n  methods: {\n    changeIndex(index) {\n      this.currentLinkIndex = index;\n    },\n  },\n};\n\nVue.createApp(App).mount(\'#app\');\n'})}),"\n",(0,c.jsx)(e.h2,{id:"v-show-\u9690\u85CF\u8282\u70B9",children:"v-show \u9690\u85CF\u8282\u70B9"}),"\n",(0,c.jsxs)(e.p,{children:["\u793A\u4F8B\u4EE3\u7801\uFF08\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u67E5\u770B",(0,c.jsx)(e.code,{children:"DOM"}),"\u7ED3\u6784\uFF0C\u65B9\u4FBF\u7406\u89E3\u66F4\u6DF1\u523B\uFF09"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'const App = {\n  data() {\n    return {\n      currentLinkIndex: 0,\n      urls: [\'www.taobao.com\', \'www.tmall.com\', \'www.jd.com\'],\n    };\n  },\n  template: `\n    <div>\n        <p v-show="currentLinkIndex === 0">\n            <a :href="urls[0]" target="_blank">\u6DD8\u5B9D\u5546\u57CE</a>\n        </p>\n        <p v-show="currentLinkIndex === 1">\n            <a :href="urls[1]">\u5929\u732B\u5546\u57CE</a>\n        </p>\n        <p v-show="currentLinkIndex === 2">\n            <a :href="urls[2]">\u4EAC\u4E1C\u5546\u57CE</a>\n        </p>\n    </div>\n    <div>\n        <button @click="changeIndex(0)">\u6DD8\u5B9D</button>\n        <button @click="changeIndex(1)">\u5929\u732B</button>\n        <button @click="changeIndex(2)">\u4EAC\u4E1C</button>\n    </div>\n    `,\n  methods: {\n    changeIndex(index) {\n      this.currentLinkIndex = index;\n    },\n  },\n};\n\nVue.createApp(App).mount(\'#app\');\n'})}),"\n",(0,c.jsx)(e.h2,{id:"\u7406\u89E3\u6307\u4EE4",children:"\u7406\u89E3\u6307\u4EE4"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:t(53967).Z+"",width:"885",height:"336"})}),"\n",(0,c.jsx)(e.h2,{id:"\u52A8\u6001\u5C5E\u6027\u540D\u7684\u4F7F\u7528",children:"\u52A8\u6001\u5C5E\u6027\u540D\u7684\u4F7F\u7528"}),"\n",(0,c.jsx)(e.p,{children:"\u52A8\u6001\u7684\u5C5E\u6027\u540D\u53C2\u6570\u4E0D\u80FD\u51FA\u73B0\u7A7A\u683C\u548C\u5F15\u53F7\uFF0C\u56E0\u4E3A HTML \u7684\u5408\u6CD5\u5C5E\u6027\u540D\u4E0D\u80FD\u51FA\u73B0\u7A7A\u683C\u548C\u5F15\u53F7\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'\x3c!-- <h1 v-bind:[\'data-\'+attr]="tag">{{title}}</h1> --\x3e\n<h1 :[attr]="tag">{{title}}</h1>\n'})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"null"})," \u4F5C\u4E3A\u5C5E\u6027\u662F\u65E0\u6548\u7684\u3002\u4F46\u662F ",(0,c.jsx)(e.code,{children:"null"})," \u53EF\u4EE5\u89E3\u9664\u5C5E\u6027\u7ED1\u5B9A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u65B9\u6CD5\u6765\u89E3\u9664\u5C5E\u6027\u7ED1\u5B9A\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'<h1 :[null]="tag">{{title}}</h1>\n'})}),"\n",(0,c.jsx)(e.h2,{id:"\u63D2\u503C\u8868\u8FBE\u5F0F\u8BBF\u95EE\u7684\u95EE\u9898",children:"\u63D2\u503C\u8868\u8FBE\u5F0F\u8BBF\u95EE\u7684\u95EE\u9898"}),"\n",(0,c.jsx)(e.p,{children:"\u81EA\u5DF1\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u63D2\u503C\u8868\u8FBE\u5F0F\u662F\u8BBF\u95EE\u4E0D\u5230\u7684"}),"\n",(0,c.jsx)(e.p,{children:"\u63D2\u503C\u8868\u8FBE\u5F0F\u6709\u4E00\u4E2A\u53D7\u9650\u5217\u8868\uFF0C\u53EF\u4EE5\u70B9\u51FB\u67E5\u770B"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://github.com/vuejs/vue-next/tree/master/packages/shared/src",children:"Vuejs/vue-next"})})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},53967:function(n,e,t){t.d(e,{Z:function(){return r}});let r=t.p+"assets/images/d971905ae826a376cb07502d9249c8f9-3bc46c1347f220f0ac797ddd39a2b0e1.png"},50065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return d}});var r=t(67294);let c={},i=r.createContext(c);function d(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);