"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["82359"],{8725:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>o,assets:()=>r,toc:()=>d,contentTitle:()=>l});var o=JSON.parse('{"id":"Network/HTTP/keep-alive\u673A\u5236","title":"\u52A8\u6001\u5F02\u6B65\u7EC4\u4EF6","description":"\u5F02\u6B65\u7EC4\u4EF6","source":"@site/docs/Network/HTTP/110.keep-alive\u673A\u5236.md","sourceDirName":"Network/HTTP","slug":"/Network/HTTP/keep-alive\u673A\u5236","permalink":"/docs-hub/Network/HTTP/keep-alive\u673A\u5236","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Network/HTTP/110.keep-alive\u673A\u5236.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":110,"frontMatter":{},"sidebar":"networkHttpSidebar","previous":{"title":"HTTP \u54CD\u5E94\u5934\u8BE6\u89E3","permalink":"/docs-hub/Network/HTTP/Response-Headers\u8BE6\u89E3"},"next":{"title":"\u5B57\u7B26\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406\u6307\u5357","permalink":"/docs-hub/Network/HTTP/\u7F16\u7801\u4E0E\u4E71\u7801\u5904\u7406"}}'),i=t("85893"),c=t("50065");let a={},l="\u52A8\u6001\u5F02\u6B65\u7EC4\u4EF6",r={},d=[{value:"\u5F02\u6B65\u7EC4\u4EF6",id:"\u5F02\u6B65\u7EC4\u4EF6",level:2},{value:"\u52A8\u6001\u7EC4\u4EF6",id:"\u52A8\u6001\u7EC4\u4EF6",level:2},{value:"keep-alive \u7684\u539F\u7406",id:"keep-alive-\u7684\u539F\u7406",level:2},{value:"keep-alive \u5C5E\u6027",id:"keep-alive-\u5C5E\u6027",level:2},{value:"exclude",id:"exclude",level:2},{value:"include",id:"include",level:2},{value:"max",id:"max",level:2},{value:"\u6B63\u5219\u5339\u914D",id:"\u6B63\u5219\u5339\u914D",level:2},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function s(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u52A8\u6001\u5F02\u6B65\u7EC4\u4EF6",children:"\u52A8\u6001\u5F02\u6B65\u7EC4\u4EF6"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5F02\u6B65\u7EC4\u4EF6",children:"\u5F02\u6B65\u7EC4\u4EF6"}),"\n",(0,i.jsxs)(n.p,{children:["\u5F02\u6B65\u7EC4\u4EF6\u4F1A\u88AB\u5206\u5272\u6210\u4EE3\u7801\u5757\u6587\u4EF6\uFF0C\u5E76\u6309\u9700\u4ECE\u670D\u52A1\u5668\u4E0A\u4E0B\u8F7D\u7EC4\u4EF6",(0,i.jsx)(n.code,{children:"xx.js"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:"\x3c!-- Vue2 --\x3e\nAsyncComp: () => import('./xxx'); /* Vue3 */ import { defineAsyncComponent } from 'vue'; const AsyncComp = defineAsyncComponent(() => import('./xxx'));\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u52A8\u6001\u7EC4\u4EF6",children:"\u52A8\u6001\u7EC4\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4EA4\u4E92\u4E2D\uFF0C\u7EC4\u4EF6\u7684\u6E32\u67D3\u662F\u4E0D\u786E\u5B9A\u7684\uFF0C\u6839\u636E\u7528\u6237\u7684\u64CD\u4F5C\u51B3\u5B9A\u6E32\u67D3\u54EA\u4E2A\u7EC4\u4EF6\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'<component :is="currentComponent"></component>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:"<template>\n  <div class=\"login-tab\">\n    <div class=\"login-nav\">\n      <div v-for=\"tab in tabs\" :key=\"tab\" :class=\"['nav-item', { active: activeTab === tab }]\" @click=\"switchTab(tab)\">{{ tab }}</div>\n    </div>\n    <div class=\"login-component\">\n      <keep-alive>\n        <component :is=\"activeComponent\"></component>\n      </keep-alive>\n    </div>\n  </div>\n</template>\n\n<script>\nimport AccountLogin from './AccountLogin';\n\nexport default {\n  name: 'MainLogin',\n  components: {\n    AccountLogin,\n    QrcodeLogin: () => import('./QrcodeLogin'),\n    MobileLogin: () => import('./MobileLogin'),\n  },\n  data() {\n    return {\n      activeTab: 'Account',\n      tabs: ['Account', 'Qrcode', 'Mobile'],\n    };\n  },\n  methods: {\n    switchTab(tab) {\n      this.activeTab = tab;\n    },\n  },\n  computed: {\n    activeComponent() {\n      return this.activeTab.toLowerCase() + '-login';\n    },\n  },\n};\n<\/script>\n"})}),"\n",(0,i.jsx)(n.h1,{id:"keep-alive",children:"keep-alive"}),"\n",(0,i.jsxs)(n.p,{children:["\u88AB",(0,i.jsx)(n.code,{children:"keep-alive"}),"\u5305\u88F9\u7684\u7EC4\u4EF6\u5728\u5207\u6362\u65F6\u4F1A\u7F13\u5B58\u7EC4\u4EF6\uFF0C\u4FDD\u6301\u7EC4\u4EF6\u72B6\u6001\uFF0C\u907F\u514D\u9891\u7E41\u6E32\u67D3\u5E26\u6765\u7684\u6027\u80FD\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"vDOM\uFF1A\u865A\u62DF DOM"}),"\n",(0,i.jsx)(n.li,{children:"vNode\uFF1A\u865A\u62DF\u8282\u70B9"}),"\n",(0,i.jsx)(n.li,{children:"rDOM\uFF1A\u771F\u5B9E DOM"}),"\n",(0,i.jsx)(n.li,{children:"rNode\uFF1A\u771F\u5B9E\u8282\u70B9"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"keep-alive-\u7684\u539F\u7406",children:"keep-alive \u7684\u539F\u7406"}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u6237\u64CD\u4F5C\u89C6\u56FE\u5BFC\u81F4\u7EC4\u4EF6\u663E\u793A\u53D8\u5316\uFF0C\u88AB",(0,i.jsx)(n.code,{children:"keep-alive"}),"\u5305\u88F9\u7684\u7EC4\u4EF6\u4F1A\u7F13\u5B58\u5176",(0,i.jsx)(n.code,{children:"vNode"}),"\u3002\u6709\u7F13\u5B58\u7684",(0,i.jsx)(n.code,{children:"vNode"}),"\u65F6\uFF0C\u76F4\u63A5\u7528\u5B83\u66F4\u65B0",(0,i.jsx)(n.code,{children:"DOM"}),"\uFF0C\u65E0\u9700\u7ECF\u8FC7",(0,i.jsx)(n.code,{children:"unmounted"}),"\uFF0C\u518D\u6B21\u6FC0\u6D3B\u65F6\u4E0D\u89E6\u53D1",(0,i.jsx)(n.code,{children:"mounted"}),"\uFF0C\u800C\u662F\u8C03\u7528",(0,i.jsx)(n.code,{children:"activated"}),"\uFF0C\u5931\u6D3B\u65F6\u8C03\u7528",(0,i.jsx)(n.code,{children:"deactivated"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"keep-alive-\u5C5E\u6027",children:"keep-alive \u5C5E\u6027"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"keep-alive"}),"\u6B63\u5E38\u5339\u914D\u7EC4\u4EF6\u7684",(0,i.jsx)(n.code,{children:"name"}),"\u5C5E\u6027\uFF0C\u82E5\u65E0\u5219\u5339\u914D\u5C40\u90E8\u6CE8\u518C\u7684\u7EC4\u4EF6\u540D\u79F0\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"exclude",children:"exclude"}),"\n",(0,i.jsx)(n.p,{children:"\u6392\u9664\u7279\u5B9A\u7EC4\u4EF6\u4E0D\u88AB\u7F13\u5B58\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:'<keep-alive exclude="List,Intro">\n  <component :is="currentComponent"></component>\n</keep-alive>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"include",children:"include"}),"\n",(0,i.jsx)(n.p,{children:"\u4EC5\u5141\u8BB8\u7279\u5B9A\u7EC4\u4EF6\u88AB\u7F13\u5B58\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:'<keep-alive include="List,Intro">\n  <component :is="currentComponent"></component>\n</keep-alive>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"max",children:"max"}),"\n",(0,i.jsx)(n.p,{children:"\u9650\u5236\u6700\u591A\u7F13\u5B58\u7684\u7EC4\u4EF6\u6570\u91CF\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:'<keep-alive max="10">\n  <component :is="currentComponent"></component>\n</keep-alive>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u6B63\u5219\u5339\u914D",children:"\u6B63\u5219\u5339\u914D"}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u9700\u8981\u7F13\u5B58\u7684\u7EC4\u4EF6\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:'<keep-alive :include="/^List|Intro$/">\n  <component :is="currentComponent"></component>\n</keep-alive>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,i.jsxs)(n.p,{children:["\u5F02\u6B65\u7EC4\u4EF6\u65E0\u6CD5\u4F7F\u7528",(0,i.jsx)(n.code,{children:"include"}),"\u5C5E\u6027\uFF0C\u867D\u7136\u88AB\u7F13\u5B58\u4F46\u65E0\u6CD5\u6B63\u786E\u663E\u793A\u3002\u5BF9\u4E8E\u5F02\u6B65\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u4F7F\u7528",(0,i.jsx)(n.code,{children:"exclude"}),"\u5C5E\u6027\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:'<keep-alive exclude="AsyncComponent">\n  <component :is="currentComponent"></component>\n</keep-alive>\n'})}),"\n",(0,i.jsx)(n.h1,{id:"keep-alive-\u5B9E\u73B0",children:"keep-alive \u5B9E\u73B0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"import Comp1 from './components/Comp1';\nimport Comp2 from './components/Comp2';\nimport Comp3 from './components/Comp3';\n\nconst buttons = document.getElementById('buttons');\nconst wrapper = document.getElementById('wrapper');\n\nconst App = {\n  components: {\n    Comp1,\n    Comp2,\n    Comp3,\n  },\n  cache: {},\n  init() {\n    this.bindEvents();\n  },\n  mounted(callback) {\n    callback && callback();\n  },\n  activated(callback) {\n    callback && callback();\n  },\n  bindEvents() {\n    buttons.addEventListener('click', this.handleButtonClick.bind(this), false);\n  },\n  handleButtonClick(event) {\n    const target = event.target;\n    const tag = target.tagName.toLowerCase();\n\n    if (tag === 'span') {\n      const key = target.dataset.key;\n      let vNode = this.cache[key];\n\n      if (!vNode) {\n        vNode = this.createVNode(this.components[key]);\n        if (this.isKeepAlive(wrapper)) {\n          this.cache[key] = vNode;\n        }\n      }\n\n      const realNode = this.createRealNode(vNode);\n      wrapper.innerHTML = '';\n      wrapper.appendChild(realNode);\n\n      if (this.isKeepAlive(wrapper)) {\n        this.activated(() => {\n          console.log(`${key} activated`);\n        });\n      } else {\n        this.mounted(() => {\n          console.log(`${key} mounted`);\n        });\n      }\n    }\n  },\n  createVNode(component) {\n    const { template, name } = component;\n    const tag = template.match(/<(.+?)>/)[1];\n    const content = template.match(/>(.+?)</)[1];\n\n    return {\n      tag,\n      children: content,\n      mark: name,\n    };\n  },\n  createRealNode(vNode) {\n    const node = document.createElement(vNode.tag);\n    node.innerText = vNode.children;\n    return node;\n  },\n  isKeepAlive(wrapper) {\n    const parentTag = wrapper.parentNode.tagName.toLowerCase();\n    return parentTag === 'keep-alive';\n  },\n};\n\nApp.init();\n"})})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var o=t(67294);let i={},c=o.createContext(i);function a(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);