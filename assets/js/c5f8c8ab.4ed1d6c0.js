"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["64157"],{89041:function(e,n,r){r.r(n),r.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/ObjectDefineProperty","title":"Object.defineProperty \u4F7F\u7528\u6307\u5357","description":"\u53C2\u6570","source":"@site/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/20.ObjectDefineProperty.md","sourceDirName":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5","slug":"/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/ObjectDefineProperty","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/ObjectDefineProperty","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/20.ObjectDefineProperty.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":20,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u56DB\u79CD\u5224\u65AD\u76F8\u7B49\u6027\u7684\u65B9\u6CD5","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/\u76F8\u7B49\u6027\u5224\u65AD\u4E0EObject.is\u65B9\u6CD5"},"next":{"title":"14 \u79CD\u64CD\u4F5C\u5BF9\u8C61\u65B9\u6CD5","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Proxy\u4E0EES-14\u79CD\u5BF9\u8C61\u64CD\u4F5C\u65B9\u6CD5"}}'),a=r("85893"),o=r("50065");let i={},c="Object.defineProperty \u4F7F\u7528\u6307\u5357",l={},d=[{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u65B9\u6CD5\u7684\u7279\u70B9",id:"\u65B9\u6CD5\u7684\u7279\u70B9",level:2},{value:"\u8BA9\u5C5E\u6027\u53EF\u4EE5\u8FDB\u884C\u5220\u9664\u3001\u679A\u4E3E\u3001\u4FEE\u6539",id:"\u8BA9\u5C5E\u6027\u53EF\u4EE5\u8FDB\u884C\u5220\u9664\u679A\u4E3E\u4FEE\u6539",level:2},{value:"get/set",id:"getset",level:2},{value:"get",id:"get",level:3},{value:"set",id:"set",level:3},{value:"\u5B9A\u4E49\u6570\u7EC4",id:"\u5B9A\u4E49\u6570\u7EC4",level:2}];function s(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"objectdefineproperty-\u4F7F\u7528\u6307\u5357",children:"Object.defineProperty \u4F7F\u7528\u6307\u5357"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"Object.defineProperty"})," \u65B9\u6CD5\u65F6\uFF0C\u6211\u9700\u8981\u63D0\u4F9B\u4EE5\u4E0B\u53C2\u6570\uFF1A"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"obj"})," \u8981\u5B9A\u4E49\u5C5E\u6027\u7684\u5BF9\u8C61\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"prop"})," \u8981\u4FEE\u6539\u6216\u5B9A\u4E49\u7684\u5C5E\u6027\u540D\u79F0\u6216 ",(0,a.jsx)(n.code,{children:"Symbol"}),"\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"descriptor"})," \u7528\u4E8E\u5B9A\u4E49\u6216\u4FEE\u6539\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u65B9\u6CD5\u7684\u7279\u70B9",children:"\u65B9\u6CD5\u7684\u7279\u70B9"}),"\n",(0,a.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"Object.defineProperty"})," \u5B9A\u4E49\u7684\u5C5E\u6027\u5177\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A"]}),"\n",(0,a.jsx)(n.p,{children:"\u5C5E\u6027\u4E0D\u53EF\u4FEE\u6539\u3001\u4E0D\u53EF\u679A\u4E3E\u3001\u4E0D\u53EF\u5220\u9664\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"function defineProperty() {\n  var obj = {};\n  // \u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027\n  Object.defineProperties(obj, {\n    a: {\n      value: 1,\n    },\n    b: {\n      value: 2,\n    },\n  });\n  return obj;\n}\n\nvar obj = defineProperty();\n// \u5C1D\u8BD5\u4FEE\u6539\u5C5E\u6027a\u7684\u503C\nobj.a = 5;\n// \u5C1D\u8BD5\u679A\u4E3E\u5C5E\u6027\nfor (var key in obj) {\n  console.log(key);\n}\n// \u5C1D\u8BD5\u5220\u9664\u5C5E\u6027a\ndelete obj.a;\nconsole.log(obj);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u8BA9\u5C5E\u6027\u53EF\u4EE5\u8FDB\u884C\u5220\u9664\u679A\u4E3E\u4FEE\u6539",children:"\u8BA9\u5C5E\u6027\u53EF\u4EE5\u8FDB\u884C\u5220\u9664\u3001\u679A\u4E3E\u3001\u4FEE\u6539"}),"\n",(0,a.jsxs)(n.p,{children:["\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027\u63CF\u8FF0\u7B26\u4E2D\u7684 ",(0,a.jsx)(n.code,{children:"writable"}),"\u3001",(0,a.jsx)(n.code,{children:"enumerable"})," \u548C ",(0,a.jsx)(n.code,{children:"configurable"}),"\uFF0C\u6211\u53EF\u4EE5\u4F7F\u5C5E\u6027\u53D8\u5F97\u53EF\u4FEE\u6539\u3001\u53EF\u679A\u4E3E\u548C\u53EF\u5220\u9664\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"function defineProperty() {\n  var obj = {};\n  // \u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027\n  Object.defineProperties(obj, {\n    a: {\n      value: 1,\n      writable: true, // \u53EF\u5199\n      enumerable: true, // \u53EF\u679A\u4E3E\n      configurable: true, // \u53EF\u914D\u7F6E\n    },\n    b: {\n      value: 2,\n      writable: true,\n      enumerable: true,\n      configurable: true,\n    },\n  });\n  return obj;\n}\n\nvar obj = defineProperty();\n\n// \u4FEE\u6539\u5C5E\u6027a\u7684\u503C\nobj.a = 5;\n// \u679A\u4E3E\u5C5E\u6027\nfor (var key in obj) {\n  console.log(key);\n}\n// \u5220\u9664\u5C5E\u6027a\ndelete obj.a;\nconsole.log(obj);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"getset",children:"get/set"}),"\n",(0,a.jsx)(n.h3,{id:"get",children:"get"}),"\n",(0,a.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"get"})," \u65B9\u6CD5\uFF0C\u6211\u53EF\u4EE5\u5728\u8BBF\u95EE\u5C5E\u6027\u65F6\u81EA\u5B9A\u4E49\u8FD4\u56DE\u503C\u3002\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"get"})," \u65F6\uFF0C\u4E0D\u80FD\u540C\u65F6\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"value"}),"\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"set",children:"set"}),"\n",(0,a.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"set"})," \u65B9\u6CD5\uFF0C\u5728\u4FEE\u6539\u5C5E\u6027\u503C\u65F6\u8C03\u7528\u7279\u5B9A\u7684\u65B9\u6CD5\u3002\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"set"})," \u65F6\uFF0C\u4E0D\u80FD\u540C\u65F6\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"writable"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"function defineProperty() {\n  var obj = {};\n  var internalA = 1;\n\n  Object.defineProperties(obj, {\n    a: {\n      // \u8BBF\u95EE\u5668\n      get() {\n        return `\u5F53\u524D\u503C\uFF1A${internalA}`;\n      },\n      // \u8BBE\u7F6E\u5668\n      set(newVal) {\n        internalA = newVal;\n        var paragraph = document.getElementsByTagName('p')[0];\n        if (paragraph) {\n          paragraph.innerHTML = internalA;\n        }\n      },\n    },\n    b: {\n      value: 2,\n    },\n  });\n\n  return obj;\n}\n\nvar obj = defineProperty();\nobj.a = 2;\nconsole.log(obj.a);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5B9A\u4E49\u6570\u7EC4",children:"\u5B9A\u4E49\u6570\u7EC4"}),"\n",(0,a.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"Object.defineProperty"}),"\uFF0C\u6211\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5E76\u5728\u8BBE\u7F6E\u503C\u65F6\u81EA\u52A8\u8BB0\u5F55\u53D8\u5316\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"function DataArray() {\n  var value = null;\n  var history = [];\n\n  Object.defineProperty(this, 'val', {\n    get: function () {\n      return value;\n    },\n    set: function (newVal) {\n      value = newVal;\n      history.push({ val: value });\n      console.log('\u503C\u5DF2\u66F4\u65B0');\n    },\n  });\n\n  this.getHistory = function () {\n    return history;\n  };\n}\n\nvar dataArray = new DataArray();\n\ndataArray.val = 123;\ndataArray.val = 234;\n\nconsole.log(dataArray.getHistory());\n"})})]})}function j(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(67294);let a={},o=t.createContext(a);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);