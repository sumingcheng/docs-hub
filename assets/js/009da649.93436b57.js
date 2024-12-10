"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[91808],{96909:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/\u5e94\u7528\u5b9e\u4f8b-\u7ec4\u4ef6\u5b9e\u4f8b\u4e0e\u6839\u7ec4\u4ef6\u5b9e\u4f8b","title":"\u5e94\u7528\u5b9e\u4f8b","description":"createApp \u521b\u5efa APP \u5e76\u8fd4\u56de\u4e00\u4e2a\u5e94\u7528\u5b9e\u4f8b\u3002","source":"@site/docs/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/30.\u5e94\u7528\u5b9e\u4f8b-\u7ec4\u4ef6\u5b9e\u4f8b\u4e0e\u6839\u7ec4\u4ef6\u5b9e\u4f8b.md","sourceDirName":"Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027","slug":"/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/\u5e94\u7528\u5b9e\u4f8b-\u7ec4\u4ef6\u5b9e\u4f8b\u4e0e\u6839\u7ec4\u4ef6\u5b9e\u4f8b","permalink":"/docs-hub/docs/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/\u5e94\u7528\u5b9e\u4f8b-\u7ec4\u4ef6\u5b9e\u4f8b\u4e0e\u6839\u7ec4\u4ef6\u5b9e\u4f8b","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/30.\u5e94\u7528\u5b9e\u4f8b-\u7ec4\u4ef6\u5b9e\u4f8b\u4e0e\u6839\u7ec4\u4ef6\u5b9e\u4f8b.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":30,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"\u4ec0\u4e48\u662f\u7ec4\u4ef6\u5316","permalink":"/docs-hub/docs/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/\u7ec4\u4ef6\u5316\u6784\u5efa"},"next":{"title":"\u5b9e\u73b0 Vue2.0 \u6570\u636e\u52ab\u6301","permalink":"/docs-hub/docs/Frontend/Vue/Vue\u8fdb\u9636\u7279\u6027/\u6570\u636e\u52ab\u6301\u6e90\u7801"}}');var c=t(74848),d=t(28453);const i={},l="\u5e94\u7528\u5b9e\u4f8b",o={},r=[{value:"\u5b9e\u4f8b\u4e0a\u66b4\u9732\u4e86\u5f88\u591a\u65b9\u6cd5",id:"\u5b9e\u4f8b\u4e0a\u66b4\u9732\u4e86\u5f88\u591a\u65b9\u6cd5",level:2},{value:"\u94fe\u5f0f\u8c03\u7528",id:"\u94fe\u5f0f\u8c03\u7528",level:2},{value:"mount",id:"mount",level:2},{value:"vm \u547d\u540d",id:"vm-\u547d\u540d",level:2},{value:"\u521d\u59cb\u5316\u7684\u6574\u4e2a\u8fc7\u7a0b",id:"\u521d\u59cb\u5316\u7684\u6574\u4e2a\u8fc7\u7a0b",level:2},{value:"\u865a\u62df\u8282\u70b9",id:"\u865a\u62df\u8282\u70b9",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"<code>index.html</code>",id:"indexhtml",level:3},{value:"<code>index.js</code>",id:"indexjs",level:3}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"\u5e94\u7528\u5b9e\u4f8b",children:"\u5e94\u7528\u5b9e\u4f8b"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"createApp"})," \u521b\u5efa ",(0,c.jsx)(e.code,{children:"APP"})," \u5e76\u8fd4\u56de\u4e00\u4e2a\u5e94\u7528\u5b9e\u4f8b\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"const app = Vue.createApp({});\nconsole.log(app);\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5e94\u7528\u5b9e\u4f8b\u63d0\u4f9b\u4e86\u8bb8\u591a\u53ef\u7528\u7684\u65b9\u6cd5\u3002\u8fd9\u4e9b\u65b9\u6cd5\u5927\u591a\u6570\u90fd\u4f1a\u8fd4\u56de\u901a\u8fc7 ",(0,c.jsx)(e.code,{children:"createApp"})," \u521b\u5efa\u7684\u5e94\u7528\u5b9e\u4f8b\uff0c\u4fbf\u4e8e\u8fdb\u884c\u94fe\u5f0f\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"const app = Vue.createApp({});\nconst appInstance = app.component('MyTitle', {\n  data() {\n    return {\n      title: 'HTML',\n    };\n  },\n  template: `<h1>{{ title }}</h1>`,\n});\nconsole.log(app === appInstance); // true\n\napp.mount('#app');\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:t(90769).A+"",width:"1195",height:"784"})}),"\n",(0,c.jsx)(e.h2,{id:"\u5b9e\u4f8b\u4e0a\u66b4\u9732\u4e86\u5f88\u591a\u65b9\u6cd5",children:"\u5b9e\u4f8b\u4e0a\u66b4\u9732\u4e86\u5f88\u591a\u65b9\u6cd5"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"createApp"})," \u521b\u5efa\u7684\u5e94\u7528\u5b9e\u4f8b\u63d0\u4f9b\u4e86\u591a\u79cd\u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"component"})," \u6ce8\u518c\u7ec4\u4ef6"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"directive"})," \u6ce8\u518c\u6307\u4ee4"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"filter"})," \u6ce8\u518c\u8fc7\u6ee4\u5668"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"use"})," \u4f7f\u7528\u63d2\u4ef6"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u8fd9\u4e9b\u65b9\u6cd5\u5927\u591a\u6570\u90fd\u4f1a\u8fd4\u56de\u5e94\u7528\u5b9e\u4f8b\u672c\u8eab\uff0c\u652f\u6301\u94fe\u5f0f\u8c03\u7528\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u94fe\u5f0f\u8c03\u7528",children:"\u94fe\u5f0f\u8c03\u7528"}),"\n",(0,c.jsx)(e.p,{children:"\u901a\u8fc7\u94fe\u5f0f\u8c03\u7528\uff0c\u53ef\u4ee5\u7b80\u5316\u5e94\u7528\u5b9e\u4f8b\u7684\u914d\u7f6e\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u6ce8\u518c\u7ec4\u4ef6\u548c\u6307\u4ee4\uff0c\u5e76\u6302\u8f7d\u5e94\u7528\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"const app = Vue.createApp({});\nconst appInstance = app\n  .component('MyTitle', {\n    data() {\n      return {\n        title: 'HTML',\n      };\n    },\n    template: `<h1 v-to-lower-case>{{ title }}</h1>`,\n  })\n  .directive('toLowerCase', {\n    mounted(el) {\n      el.addEventListener(\n        'click',\n        function () {\n          this.innerText = this.innerText.toLowerCase();\n        },\n        false\n      );\n    },\n  })\n  .mount('#app');\n"})}),"\n",(0,c.jsx)(e.h1,{id:"\u6839\u7ec4\u4ef6vm",children:"\u6839\u7ec4\u4ef6\uff08VM\uff09"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u6839\u7ec4\u4ef6\u7684\u672c\u8d28\u662f\u4e00\u4e2a\u5bf9\u8c61"})}),"\n",(0,c.jsxs)(e.p,{children:["\u6839\u7ec4\u4ef6\u662f Vue \u6e32\u67d3\u7684\u8d77\u70b9\uff0c\u901a\u8fc7 ",(0,c.jsx)(e.code,{children:"createApp({})"})," \u521b\u5efa\u65f6\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u3002\u6839\u7ec4\u4ef6\u662f Vue \u5e94\u7528\u6b63\u5e38\u6e32\u67d3\u7684\u57fa\u7840\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"mount",children:"mount"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"mount"})," \u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u6839\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u5e94\u7528\u5b9e\u4f8b\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"// \u8fd4\u56de\u7684\u662f\u6839\u7ec4\u4ef6\u5b9e\u4f8b\nconst vm = app.mount('#app');\n// \u5982\u679c HTML \u4e2d\u4f7f\u7528\u7684\u662f class\uff0c\u4e5f\u53ef\u4ee5\u8fd9\u6837\u6302\u8f7d\nconst vm = app.mount('.app');\n"})}),"\n",(0,c.jsx)(e.h2,{id:"vm-\u547d\u540d",children:"vm \u547d\u540d"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"Vue"})," \u5e76\u4e0d\u5b8c\u5168\u7b26\u5408 ",(0,c.jsx)(e.code,{children:"mvvm"})," \u6a21\u578b\uff0c\u4ec5\u53c2\u8003\u4e86\u5176\u4e2d\u7684 ",(0,c.jsx)(e.code,{children:"vm"}),"\uff08viewmodel\uff09\u90e8\u5206\u3002"]}),"\n",(0,c.jsx)(e.h1,{id:"\u6839\u5143\u7d20",children:"\u6839\u5143\u7d20"}),"\n",(0,c.jsxs)(e.p,{children:["\u6839\u5143\u7d20\u662f\u4e00\u4e2a ",(0,c.jsx)(e.code,{children:"HTML"})," \u5143\u7d20\u3002\u5f53\u6267\u884c ",(0,c.jsx)(e.code,{children:"createApp"})," \u521b\u5efa Vue \u5b9e\u4f8b\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u6839\u5143\u7d20\u3002\u56e0\u6b64\uff0c\u9700\u8981\u5728 HTML \u4e2d\u5305\u542b\u4e00\u4e2a\u7c7b\u4f3c ",(0,c.jsx)(e.code,{children:'<div id="app">'})," \u7684\u5143\u7d20\u6765\u4f5c\u4e3a\u6839\u5143\u7d20\u3002"]}),"\n",(0,c.jsx)(e.h1,{id:"\u7ec4\u4ef6\u5b9e\u4f8b",children:"\u7ec4\u4ef6\u5b9e\u4f8b"}),"\n",(0,c.jsx)(e.p,{children:"\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u6709\u81ea\u5df1\u7684\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u4e00\u4e2a\u5e94\u7528\u4e2d\u7684\u6240\u6709\u7ec4\u4ef6\u5171\u4eab\u4e00\u4e2a\u5e94\u7528\u5b9e\u4f8b\u3002\u65e0\u8bba\u662f\u6839\u7ec4\u4ef6\u8fd8\u662f\u5176\u4ed6\u7ec4\u4ef6\uff0c\u914d\u7f6e\u9009\u9879\u548c\u7ec4\u4ef6\u884c\u4e3a\u90fd\u662f\u4e00\u81f4\u7684\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"const MyTitle = {\n  template: `\n      <h1>\n        <slot></slot>\n      </h1>\n    `,\n  mounted() {\n    console.log(this);\n  },\n};\n\nconst MyAuthor = {\n  template: `\n      <p>\n        Author:<slot></slot>\n      </p>\n    `,\n};\nconst MyContent = {\n  template: `\n      <p>\n        <slot></slot>\n      </p>\n    `,\n};\n\nconst App = {\n  components: {\n    MyTitle,\n    MyAuthor,\n    MyContent,\n  },\n  data() {\n    return {\n      title: '\u6807\u9898',\n      author: '\u4f5c\u8005',\n      content: '\u8fd9\u662f\u5185\u5bb9',\n    };\n  },\n  template: `\n        <div>\n          <my-title>{{ title }}</my-title>\n          <my-author>{{ author }}</my-author>\n          <my-content>{{ content }}</my-content>\n        </div>\n      `,\n};\n\nconst app = Vue.createApp(App);\n\nconst vm = app.mount('#app');\nconsole.log(vm);\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:t(33254).A+"",width:"1560",height:"1228"})}),"\n",(0,c.jsxs)(e.p,{children:["\u7ec4\u4ef6\u5b9e\u4f8b\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u4f8b\u5982 ",(0,c.jsx)(e.code,{children:"property"}),"\u3002Vue \u4e3a\u7ec4\u4ef6\u5b9e\u4f8b\u81ea\u5b9a\u4e49\u6dfb\u52a0\u4e86\u4e00\u4e9b\u5c5e\u6027\uff0c\u5982 ",(0,c.jsx)(e.code,{children:"data"}),"\u3001",(0,c.jsx)(e.code,{children:"props"}),"\u3001",(0,c.jsx)(e.code,{children:"components"}),"\u3001",(0,c.jsx)(e.code,{children:"methods"})," \u7b49\u3002\u540c\u65f6\uff0c\u7ec4\u4ef6\u5b9e\u4f8b\u8fd8\u5305\u542b\u5185\u7f6e\u65b9\u6cd5\u5982 ",(0,c.jsx)(e.code,{children:"this.$attrs"})," \u548c ",(0,c.jsx)(e.code,{children:"this.$emit"}),"\u3002"]}),"\n",(0,c.jsx)(e.h1,{id:"\u751f\u547d\u5468\u671f\u51fd\u6570",children:"\u751f\u547d\u5468\u671f\u51fd\u6570"}),"\n",(0,c.jsxs)(e.p,{children:["\u7ec4\u4ef6\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u4f1a\u7ecf\u5386\u591a\u4e2a\u9636\u6bb5\uff0c",(0,c.jsx)(e.code,{children:"Vue"})," \u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\uff0c\u8fd9\u4e9b\u51fd\u6570\u4f1a\u5728\u5bf9\u5e94\u7684\u521d\u59cb\u5316\u9636\u6bb5\u81ea\u52a8\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u521d\u59cb\u5316\u7684\u6574\u4e2a\u8fc7\u7a0b",children:"\u521d\u59cb\u5316\u7684\u6574\u4e2a\u8fc7\u7a0b"}),"\n",(0,c.jsxs)(e.p,{children:["\u8be6\u7ec6\u5185\u5bb9\u53ef\u53c2\u8003 ",(0,c.jsx)(e.a,{href:"https://staging-cn.vuejs.org/guide/essentials/lifecycle.html",children:"\u751f\u547d\u5468\u671f\u94a9\u5b50 | Vue.js"})]}),"\n",(0,c.jsx)(e.h2,{id:"\u865a\u62df\u8282\u70b9",children:"\u865a\u62df\u8282\u70b9"}),"\n",(0,c.jsx)(e.p,{children:"\u865a\u62df\u8282\u70b9\u7684\u5b58\u5728\u662f\u4e3a\u4e86\u4f18\u5316 DOM \u64cd\u4f5c\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0\u3002\u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"<span>123</span>;\nspan.innerText = 123;\n\n// \u76f4\u63a5\u64cd\u4f5c DOM \u4f1a\u5bfc\u81f4\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0\n// \u4f7f\u7528\u865a\u62df DOM \u53ef\u4ee5\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u865a\u62df DOM \u901a\u8fc7\u5728\u5185\u5b58\u4e2d\u7ef4\u62a4\u4e00\u4e2a\u865a\u62df\u8282\u70b9\u6811\uff0c\u53ea\u6709\u5728\u5fc5\u8981\u65f6\u624d\u4f1a\u66f4\u65b0\u5b9e\u9645\u7684 DOM \u8282\u70b9\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,c.jsx)(e.h3,{id:"indexhtml",children:(0,c.jsx)(e.code,{children:"index.html"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vue \u5e94\u7528\u793a\u4f8b</title>\n    \x3c!-- <script src="./src/main.js"><\/script> --\x3e\n  </head>\n  <body>\n    <div id="app">\n      \x3c!-- \u7ec4\u4ef6\u4f7f\u7528\u65f6\u91c7\u7528 kebab-case \u547d\u540d\u6cd5 --\x3e\n    </div>\n    <script src="https://cdn.jsdelivr.net/npm/vue@3.1.2/dist/vue.global.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,c.jsx)(e.h3,{id:"indexjs",children:(0,c.jsx)(e.code,{children:"index.js"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"const MyTitle = {\n  template: `\n        <h1>\n            <slot></slot>\n        </h1>\n    `,\n  mounted() {\n    console.log(this);\n  },\n};\n\nconst MyAuthor = {\n  template: `\n        <p>\n            Author: <slot></slot>\n        </p>\n    `,\n};\n\nconst MyContent = {\n  template: `\n        <p>\n            <slot></slot>\n        </p>\n    `,\n};\n\nconst App = {\n  components: {\n    // \u7ec4\u4ef6\u5b9a\u4e49\u65f6\u91c7\u7528 PascalCase \u547d\u540d\u6cd5\n    MyTitle,\n    MyAuthor,\n    MyContent,\n  },\n  data() {\n    return {\n      title: '\u8fd9\u662f\u4e00\u4e2a\u6807\u9898',\n      author: '\u5c0f\u53f6',\n      content: '\u8fd9\u662f\u5185\u5bb9',\n    };\n  },\n  template: `\n        <div>\n            <my-title>{{ title }}</my-title>\n            <my-author>{{ author }}</my-author>\n            <my-content>{{ content }}</my-content>\n        </div>\n    `,\n};\n\nconst app = Vue.createApp(App);\nconst vm = app.mount('#app');\nconsole.log('\u8fd9\u91cc\u6253\u5370 Vue \u2193');\nconsole.log(Vue);\n"})})]})}function p(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},90769:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/c3b6b52dfb4674a32b9550d7609ac8f0-659f9d62e1d77192ead9b82ac7aa4143.png"},33254:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/d156ecc0f01d8ccf1a2fa69224d593be-153154e7fc844fcc0a8cc807ddf72f57.png"},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>l});var s=t(96540);const c={},d=s.createContext(c);function i(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);