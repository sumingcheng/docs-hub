"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["71623"],{40045:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/class-style\u7ED1\u5B9A\u65B9\u6CD5\u6848\u4F8B\u5206\u6790","title":"Vue.js \u89C6\u56FE\u7ED1\u5B9A\u6307\u5357","description":"class \u7684\u89C6\u56FE\u7ED1\u5B9A","source":"@site/docs/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/10.class-style\u7ED1\u5B9A\u65B9\u6CD5\u6848\u4F8B\u5206\u6790.md","sourceDirName":"Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027","slug":"/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/class-style\u7ED1\u5B9A\u65B9\u6CD5\u6848\u4F8B\u5206\u6790","permalink":"/docs-hub/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/class-style\u7ED1\u5B9A\u65B9\u6CD5\u6848\u4F8B\u5206\u6790","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/10.class-style\u7ED1\u5B9A\u65B9\u6CD5\u6848\u4F8B\u5206\u6790.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":10,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"Vue\u8FDB\u9636\u7279\u6027","permalink":"/docs-hub/category/vue\u8FDB\u9636\u7279\u6027"},"next":{"title":"\u4EC0\u4E48\u662F\u7EC4\u4EF6\u5316","permalink":"/docs-hub/Frontend/Vue/Vue\u8FDB\u9636\u7279\u6027/\u7EC4\u4EF6\u5316\u6784\u5EFA"}}'),c=t("85893"),i=t("50065");let l={},a="Vue.js \u89C6\u56FE\u7ED1\u5B9A\u6307\u5357",r={},d=[{value:"class \u7684\u89C6\u56FE\u7ED1\u5B9A",id:"class-\u7684\u89C6\u56FE\u7ED1\u5B9A",level:2},{value:"\u5B57\u7B26\u4E32\u5F62\u5F0F",id:"\u5B57\u7B26\u4E32\u5F62\u5F0F",level:3},{value:"\u5BF9\u8C61\u5F62\u5F0F",id:"\u5BF9\u8C61\u5F62\u5F0F",level:3},{value:"\u9759\u6001\u7C7B\u540D\u548C\u52A8\u6001\u7C7B\u540D\u5171\u5B58",id:"\u9759\u6001\u7C7B\u540D\u548C\u52A8\u6001\u7C7B\u540D\u5171\u5B58",level:3},{value:"\u62BD\u79BB\u6837\u5F0F\u903B\u8F91",id:"\u62BD\u79BB\u6837\u5F0F\u903B\u8F91",level:3},{value:"\u6570\u7EC4\u5F62\u5F0F",id:"\u6570\u7EC4\u5F62\u5F0F",level:3},{value:"\u7EC4\u4EF6\u4E0A\u4F7F\u7528",id:"\u7EC4\u4EF6\u4E0A\u4F7F\u7528",level:3},{value:"$attrs",id:"attrs",level:4},{value:"style \u7684\u89C6\u56FE\u7ED1\u5B9A",id:"style-\u7684\u89C6\u56FE\u7ED1\u5B9A",level:2},{value:"\u5BF9\u8C61\u5F62\u5F0F",id:"\u5BF9\u8C61\u5F62\u5F0F-1",level:3},{value:"\u6570\u7EC4\u5F62\u5F0F",id:"\u6570\u7EC4\u5F62\u5F0F-1",level:3},{value:"\u6837\u5F0F\u591A\u503C",id:"\u6837\u5F0F\u591A\u503C",level:4}];function o(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"vuejs-\u89C6\u56FE\u7ED1\u5B9A\u6307\u5357",children:"Vue.js \u89C6\u56FE\u7ED1\u5B9A\u6307\u5357"})}),"\n",(0,c.jsx)(n.h2,{id:"class-\u7684\u89C6\u56FE\u7ED1\u5B9A",children:"class \u7684\u89C6\u56FE\u7ED1\u5B9A"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"v-bind"}),"\u7528\u4E8E\u5728\u6807\u7B7E\u4E0A\u7ED1\u5B9A\u5C5E\u6027\uFF0C",(0,c.jsx)(n.code,{children:"Vue"}),"\u5BF9",(0,c.jsx)(n.code,{children:"v-bind:class"}),"\u548C",(0,c.jsx)(n.code,{children:"v-bind:style"}),"\u8FDB\u884C\u4E86\u7279\u6B8A\u7684\u5C01\u88C5\uFF0C\u652F\u6301\u591A\u79CD\u7ED1\u5B9A\u5F62\u5F0F\uFF0C\u5305\u62EC\u5BF9\u8C61\u548C\u6570\u7EC4\u7684\u65B9\u5F0F\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5B57\u7B26\u4E32\u5F62\u5F0F",children:"\u5B57\u7B26\u4E32\u5F62\u5F0F"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u5B57\u7B26\u4E32\u5F62\u5F0F\u4E0B\uFF0C\u7C7B\u540D\u662F\u9759\u6001\u7684\uFF0C\u76F4\u63A5\u5199\u5728",(0,c.jsx)(n.code,{children:"class"}),"\u5C5E\u6027\u4E2D\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'<template>\n  <div class="active">This is active</div>\n  <div class="container">This is container</div>\n</template>\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u5BF9\u8C61\u5F62\u5F0F",children:"\u5BF9\u8C61\u5F62\u5F0F"}),"\n",(0,c.jsx)(n.p,{children:"\u5BF9\u8C61\u5F62\u5F0F\u5141\u8BB8\u6839\u636E\u6570\u636E\u52A8\u6001\u7ED1\u5B9A\u7C7B\u540D\u3002\u901A\u8FC7\u5E03\u5C14\u503C\u6765\u63A7\u5236\u7C7B\u540D\u7684\u6DFB\u52A0\u4E0E\u79FB\u9664\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'<template>\n  <div :class="{ active: isActive }">This is active</div>\n  <div :class="{ active: isActive2 }">This is active</div>\n</template>\n\n<script>\nexport default {\n  name: \'App\',\n  data() {\n    return {\n      isActive: true,\n      isActive2: false\n    }\n  }\n}\n<\/script>\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u9759\u6001\u7C7B\u540D\u548C\u52A8\u6001\u7C7B\u540D\u5171\u5B58",children:"\u9759\u6001\u7C7B\u540D\u548C\u52A8\u6001\u7C7B\u540D\u5171\u5B58"}),"\n",(0,c.jsxs)(n.p,{children:["\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u9759\u6001\u7C7B\u540D\u548C\u52A8\u6001\u7C7B\u540D\uFF0C\u901A\u8FC7",(0,c.jsx)(n.code,{children:":class"}),"\u7ED1\u5B9A\u5BF9\u8C61\u6765\u63A7\u5236\u52A8\u6001\u90E8\u5206\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'<template>\n  <div\n    class="static"\n    :class="{ active: isActive, error: hasError}"\n  >This is active</div>\n</template>\n\n<script>\nexport default {\n  name: \'App\',\n  data() {\n    return {\n      isActive: true,\n      hasError: true\n    }\n  }\n}\n<\/script>\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u62BD\u79BB\u6837\u5F0F\u903B\u8F91",children:"\u62BD\u79BB\u6837\u5F0F\u903B\u8F91"}),"\n",(0,c.jsx)(n.p,{children:"\u5C06\u7C7B\u540D\u903B\u8F91\u62BD\u79BB\u5230\u8BA1\u7B97\u5C5E\u6027\u4E2D\uFF0C\u4F7F\u6A21\u677F\u66F4\u52A0\u7B80\u6D01\uFF0C\u5E76\u4FBF\u4E8E\u7EF4\u62A4\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"<template>\n  <div :class=\"classObject\">This is active</div>\n</template>\n\n<script>\nexport default {\n  name: 'App',\n  data() {\n    return {\n      isActive: true,\n      error: null\n    }\n  },\n  computed: {\n    classObject() {\n      return {\n        active: this.isActive && !this.error,\n        error: this.error\n      }\n    }\n  }\n}\n<\/script>\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u6570\u7EC4\u5F62\u5F0F",children:"\u6570\u7EC4\u5F62\u5F0F"}),"\n",(0,c.jsx)(n.p,{children:"\u6570\u7EC4\u5F62\u5F0F\u5141\u8BB8\u540C\u65F6\u7ED1\u5B9A\u591A\u4E2A\u7C7B\u540D\uFF0C\u9759\u6001\u7C7B\u540D\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u52A8\u6001\u7C7B\u540D\u901A\u8FC7\u53D8\u91CF\u4F20\u9012\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"<template>\n  <div :class=\"[activeClass, errorClass]\"></div>\n  <div :class=\"['static', activeClass]\"></div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeClass: 'active',\n      errorClass: 'text-danger'\n    }\n  }\n}\n<\/script>\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u7EC4\u4EF6\u4E0A\u4F7F\u7528",children:"\u7EC4\u4EF6\u4E0A\u4F7F\u7528"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728",(0,c.jsx)(n.code,{children:"Vue2"}),"\u4E2D\uFF0C\u7236\u7EC4\u4EF6\u7684",(0,c.jsx)(n.code,{children:"class"}),"\u503C\u4F1A\u4F20\u9012\u5230\u5B50\u7EC4\u4EF6\u4E0A\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'// \u5B50\u7EC4\u4EF6\nconst MyComponent = {\n  template: `\n    <div class="active">this is component</div>\n  `\n}\n\n// \u7236\u7EC4\u4EF6\nconst App = {\n  data() {\n    return {}\n  },\n  components: {\n    MyComponent\n  },\n  template: `\n    <div class="my-app">\n      <my-component class="my-component"></my-component>\n    </div>\n  `\n}\n<\/script>\n'})}),"\n",(0,c.jsx)(n.h4,{id:"attrs",children:"$attrs"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728",(0,c.jsx)(n.code,{children:"Vue3"}),"\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528",(0,c.jsx)(n.code,{children:"$attrs.class"}),"\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u7C7B\u540D\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(69794).Z+"",width:"290",height:"392"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'const MyComponent = {\n  mounted() {\n    console.log(this);\n  },\n  template: `\n    <div class="active1">div</div>\n    <div :class="[\'active2\', $attrs.class]">div2</div>\n  `\n}\n\nconst App = {\n  data() {\n    return {}\n  },\n  components: {\n    MyComponent\n  },\n  template: `\n    <div class="my-app">\n      <my-component class="my-component"></my-component>\n    </div>\n  `\n}\n<\/script>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"style-\u7684\u89C6\u56FE\u7ED1\u5B9A",children:"style \u7684\u89C6\u56FE\u7ED1\u5B9A"}),"\n",(0,c.jsx)(n.h3,{id:"\u5BF9\u8C61\u5F62\u5F0F-1",children:"\u5BF9\u8C61\u5F62\u5F0F"}),"\n",(0,c.jsxs)(n.p,{children:["\u901A\u8FC7\u5BF9\u8C61\u5F62\u5F0F\u7ED1\u5B9A\u6837\u5F0F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u6A21\u677F\u4E2D\u5B9A\u4E49\u6837\u5F0F\u5BF9\u8C61\uFF0C\u6216\u8005\u5C06\u6837\u5F0F\u5BF9\u8C61\u62BD\u79BB\u5230",(0,c.jsx)(n.code,{children:"data"}),"\u4E2D\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"<template>\n  <button :style=\"{\n    color: '#fff',\n    'background-color': 'red',\n    backgroundColor: btnBgColor\n  }\"></button>\n\n  <button :style=\"btnStyle\"></button>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      btnBgColor: 'blue',\n      btnStyle: {\n        backgroundColor: 'red'\n      }\n    }\n  }\n}\n<\/script>\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u6570\u7EC4\u5F62\u5F0F-1",children:"\u6570\u7EC4\u5F62\u5F0F"}),"\n",(0,c.jsx)(n.p,{children:"\u6570\u7EC4\u5F62\u5F0F\u5141\u8BB8\u7ED1\u5B9A\u591A\u4E2A\u6837\u5F0F\u5BF9\u8C61\uFF0C\u4FBF\u4E8E\u590D\u7528\u516C\u5171\u6837\u5F0F\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"<template>\n  <div :style=\"[btnStyle, commonBtnStyle]\"></div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      btnStyle: {\n        color: '#fff',\n        backgroundColor: 'red'\n      },\n      commonBtnStyle: {\n        borderRadius: '17px'\n      }\n    }\n  }\n}\n<\/script>\n"})}),"\n",(0,c.jsx)(n.h4,{id:"\u6837\u5F0F\u591A\u503C",children:"\u6837\u5F0F\u591A\u503C"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Vue"}),"\u4F1A\u6E32\u67D3\u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u4E2A\u88AB\u6D4F\u89C8\u5668\u652F\u6301\u7684\u503C\u3002\u5982\u679C\u6D4F\u89C8\u5668\u652F\u6301\u4E0D\u5E26\u524D\u7F00\u7684\u503C\uFF0C\u5219\u6E32\u67D3\u4E0D\u5E26\u524D\u7F00\u7684\u503C\u3002\u9700\u8981\u6CE8\u610F\uFF0C\u8FD9\u79CD\u68C0\u6D4B\u662F\u5728\u4EE3\u7801\u8FD0\u884C\u65F6\u8FDB\u884C\u7684\uFF0C\u800C\u4E0D\u662F\u5728\u7F16\u8BD1\u65F6\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"<template>\n  <div :style=\"{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }\"></div>\n</template>\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},69794:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/d0feabdf04d049bd4488f2ddca729d19-5b01e717b525d749736b87915a4ec2b5.png"},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(67294);let c={},i=s.createContext(c);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);