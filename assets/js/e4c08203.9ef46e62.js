"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["62292"],{41306:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165methods\u5C5E\u6027\u4EE5\u53CA\u5B9E\u4F8B\u65B9\u6CD5\u6302\u8F7D\u5B9E\u73B0","title":"Methods","description":"\u6211\u5728\u5411\u7EC4\u4EF6\u5B9E\u4F8B\u6DFB\u52A0\u65B9\u6CD5\u65F6\uFF0C\u6240\u6709\u7684\u65B9\u6CD5\u90FD\u4F1A\u6302\u8F7D\u5728\u5B9E\u4F8B\u4E0A\u3002","source":"@site/docs/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/60.\u6DF1\u5165methods\u5C5E\u6027\u4EE5\u53CA\u5B9E\u4F8B\u65B9\u6CD5\u6302\u8F7D\u5B9E\u73B0.md","sourceDirName":"Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027","slug":"/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165methods\u5C5E\u6027\u4EE5\u53CA\u5B9E\u4F8B\u65B9\u6CD5\u6302\u8F7D\u5B9E\u73B0","permalink":"/docs-hub/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165methods\u5C5E\u6027\u4EE5\u53CA\u5B9E\u4F8B\u65B9\u6CD5\u6302\u8F7D\u5B9E\u73B0","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/60.\u6DF1\u5165methods\u5C5E\u6027\u4EE5\u53CA\u5B9E\u4F8B\u65B9\u6CD5\u6302\u8F7D\u5B9E\u73B0.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":60,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"Data","permalink":"/docs-hub/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165\u7814\u7A76data\u5C5E\u6027\u4EE5\u53CA\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0"},"next":{"title":"Vue\u8FDB\u9636\u7279\u6027","permalink":"/docs-hub/category/vue\u8FDB\u9636\u7279\u6027"}}'),c=t("85893"),r=t("50065");let d={},o="Methods",i={},a=[{value:"\u4F7F\u7528 methods",id:"\u4F7F\u7528-methods",level:2},{value:"\u4F7F\u7528\u65B9\u6CD5",id:"\u4F7F\u7528\u65B9\u6CD5",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"methods",children:"Methods"})}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u5728\u5411\u7EC4\u4EF6\u5B9E\u4F8B\u6DFB\u52A0\u65B9\u6CD5\u65F6\uFF0C\u6240\u6709\u7684\u65B9\u6CD5\u90FD\u4F1A\u6302\u8F7D\u5728\u5B9E\u4F8B\u4E0A\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"\x3c!-- `greet` \u662F\u4E0A\u9762\u5B9A\u4E49\u8FC7\u7684\u65B9\u6CD5\u540D --\x3e\n<button @click=\"greet\">Greet</button>\n\ndata() {\n  return {\n    name: 'Vue.js'\n  }\n},\nmethods: {\n  greet(event) {\n    // \u65B9\u6CD5\u4E2D\u7684 `this` \u6307\u5411\u5F53\u524D\u6D3B\u8DC3\u7684\u7EC4\u4EF6\u5B9E\u4F8B\n    alert(`Hello ${this.name}!`)\n    // `event` \u662F DOM \u539F\u751F\u4E8B\u4EF6\n    if (event) {\n      alert(event.target.tagName)\n    }\n  }\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4F7F\u7528-methods",children:"\u4F7F\u7528 methods"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u521B\u5EFA ",(0,c.jsx)(n.code,{children:"Vue"})," \u5B9E\u4F8B\u65F6\uFF0C",(0,c.jsx)(n.code,{children:"methods"})," \u4F1A\u81EA\u52A8\u7ED1\u5B9A\u5F53\u524D\u5B9E\u4F8B\u7684 ",(0,c.jsx)(n.code,{children:"this"}),"\uFF0C\u786E\u4FDD\u5728\u4E8B\u4EF6\u76D1\u542C\u65F6\uFF0C\u56DE\u8C03\u59CB\u7EC8\u6307\u5411\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u5B9A\u4E49 ",(0,c.jsx)(n.code,{children:"methods"})," \u65F6\uFF0C\u5E94\u907F\u514D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\uFF0C\u56E0\u4E3A\u7BAD\u5934\u51FD\u6570\u4F1A\u963B\u6B62 ",(0,c.jsx)(n.code,{children:"Vue"})," \u6B63\u786E\u7ED1\u5B9A\u7EC4\u4EF6\u5B9E\u4F8B\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:'@click="greet"'})," \u65F6\uFF0C\u65B9\u6CD5\u540D\u540E\u9762\u7684\u62EC\u53F7 ",(0,c.jsx)(n.code,{children:"()"})," \u5E76\u4E0D\u662F\u6267\u884C\u7B26\u53F7\uFF0C\u800C\u662F\u7528\u4E8E\u4F20\u9012\u53C2\u6570\u7684\u5BB9\u5668\u3002\u4EE5\u4E0B\u662F\u5206\u89E3\u5199\u6CD5\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"onClick = { () => changeTitle('This is your TITLE') }\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u6A21\u677F\u4E2D\u76F4\u63A5\u8C03\u7528\u65B9\u6CD5\u65F6\uFF0C\u5E94\u5C3D\u91CF\u907F\u514D\u526F\u4F5C\u7528\u3002\u8FD9\u6837\u53EF\u4EE5\u786E\u4FDD\u7EC4\u4EF6\u7684\u53EF\u9884\u6D4B\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002"}),"\n",(0,c.jsx)(n.h1,{id:"\u76F4\u63A5\u7ED1\u5B9A\u65B9\u6CD5\u6267\u884C",children:"\u76F4\u63A5\u7ED1\u5B9A\u65B9\u6CD5\u6267\u884C"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"<h2>{{ yourTitle() }}</h2>\n\nmethods: {\n  yourTitle () {\n    return 'This is your TITLE';\n  },\n}\n"})}),"\n",(0,c.jsx)(n.h1,{id:"js-\u5DE5\u5177\u5E93-lodash",children:"JS \u5DE5\u5177\u5E93 Lodash"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Lodash"})," \u4F7F ",(0,c.jsx)(n.code,{children:"JavaScript"})," \u5F00\u53D1\u66F4\u52A0\u7B80\u4FBF\uFF0C\u51CF\u5C11\u4E86\u5904\u7406\u6570\u7EC4\u3001\u6570\u5B57\u3001\u5BF9\u8C61\u548C\u5B57\u7B26\u4E32\u7B49\u7684\u590D\u6742\u6027\u3002\u5E38\u7528\u7684\u529F\u80FD\u5982\u8282\u6D41\u3001\u9632\u6296\u548C\u65F6\u95F4\u8FC7\u671F\u7B49\uFF0C",(0,c.jsx)(n.code,{children:"Lodash"})," \u90FD\u6709\u6DB5\u76D6\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/lodash/lodash",children:"https://github.com/lodash/lodash"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u6CD5",children:"\u4F7F\u7528\u65B9\u6CD5"}),"\n",(0,c.jsxs)(n.p,{children:["\u4EE5\u4E0B\u662F\u4E00\u4E2A\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"Lodash"})," \u5B9E\u73B0\u8282\u6D41\u529F\u80FD\u7684\u793A\u4F8B\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'const TeacherList = {\n  data() {\n    return {\n      teachers: [],\n    };\n  },\n  template: `\n    <div>\n      <table border="1">\n        <thead>\n          <tr>\n            <td>ID</td>\n            <td>\u59D3\u540D</td>\n            <td>\u5B66\u79D1</td>\n          </tr>\n        </thead>\n        <tbody v-if="teachers.length > 0">\n          <tr v-for="teacher in teachers" :key="teacher.id">\n            <td>{{ teacher.id }}</td>\n            <td>{{ teacher.name }}</td>\n            <td>{{ teacher.subject }}</td>\n          </tr>\n        </tbody>\n        <tbody v-else>\n          <tr>\n            <td colspan="3">\u6682\u65E0\u6570\u636E</td>\n          </tr>\n        </tbody>\n      </table>\n      <button @click="debouncedFetchTeachers">\u83B7\u53D6\u6559\u5E08\u6570\u636E</button>\n    </div>\n  `,\n  created() {\n    // \u4F7F\u7528 Lodash \u7684 debounce \u65B9\u6CD5\u9632\u6296\n    this.debouncedFetchTeachers = _.debounce(this.fetchTeachers, 1000);\n  },\n  unmounted() {\n    // \u7EC4\u4EF6\u5378\u8F7D\u65F6\u53D6\u6D88\u9632\u6296\u51FD\u6570\n    this.debouncedFetchTeachers.cancel();\n  },\n  methods: {\n    async fetchTeachers() {\n      try {\n        const response = await axios.get(\'http://localhost:8081/getTeachers\');\n        this.teachers = response.data;\n      } catch (error) {\n        console.error(\'\u83B7\u53D6\u6559\u5E08\u6570\u636E\u5931\u8D25:\', error);\n      }\n    },\n  },\n};\n\nVue.createApp(TeacherList).mount(\'#app\');\n'})}),"\n",(0,c.jsx)(n.h1,{id:"\u5B9E\u73B0-methods",children:"\u5B9E\u73B0 methods"}),"\n",(0,c.jsxs)(n.p,{children:["\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684 ",(0,c.jsx)(n.code,{children:"Vue"})," \u5B9E\u73B0\uFF0C\u5C55\u793A\u4E86\u5982\u4F55\u521D\u59CB\u5316\u6570\u636E\u548C\u65B9\u6CD5\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"var Vue = (function () {\n  function Vue(options) {\n    this.$data = options.data();\n    this._methods = options.methods;\n\n    this._init(this);\n  }\n\n  Vue.prototype._init = function (vm) {\n    initializeData(vm);\n    initializeMethods(vm);\n  };\n\n  function initializeData(vm) {\n    for (var key in vm.$data) {\n      (function (key) {\n        Object.defineProperty(vm, key, {\n          get: function () {\n            return vm.$data[key];\n          },\n          set: function (newValue) {\n            vm.$data[key] = newValue;\n          },\n        });\n      })(key);\n    }\n  }\n\n  function initializeMethods(vm) {\n    for (var key in vm._methods) {\n      vm[key] = vm._methods[key].bind(vm);\n    }\n  }\n\n  return Vue;\n})();\n\nvar vm = new Vue({\n  data() {\n    return {\n      countA: 1,\n      countB: 2,\n    };\n  },\n  methods: {\n    incrementA(amount) {\n      this.countA += amount;\n    },\n    incrementB(amount) {\n      this.countB += amount;\n    },\n    calculateTotal() {\n      console.log(this.countA + this.countB);\n    },\n  },\n});\n\nconsole.log(vm);\n\nvm.incrementA(1);\nvm.incrementA(1);\nvm.incrementA(1);\nvm.incrementA(1);\n// countA 5\n\nvm.incrementB(2);\nvm.incrementB(2);\nvm.incrementB(2);\nvm.incrementB(2);\n// countB 10\n\nvm.calculateTotal(); //  15\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u5B9E\u73B0\u4E2D\uFF0C",(0,c.jsx)(n.code,{children:"initializeData"})," \u51FD\u6570\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"Object.defineProperty"})," \u5C06\u6570\u636E\u5C5E\u6027\u4EE3\u7406\u5230\u5B9E\u4F8B\u4E0A\uFF0C\u4F7F\u5F97\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"vm.countA"})," \u8BBF\u95EE\u548C\u4FEE\u6539\u6570\u636E\u3002\u540C\u65F6\uFF0C",(0,c.jsx)(n.code,{children:"initializeMethods"})," \u51FD\u6570\u7ED1\u5B9A\u4E86\u6240\u6709\u65B9\u6CD5\u5230\u5B9E\u4F8B\uFF0C\u786E\u4FDD ",(0,c.jsx)(n.code,{children:"this"})," \u6307\u5411\u6B63\u786E\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u3002"]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(67294);let c={},r=s.createContext(c);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);