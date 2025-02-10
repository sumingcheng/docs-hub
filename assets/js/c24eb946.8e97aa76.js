"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["9603"],{51644:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>c,assets:()=>a,toc:()=>i,contentTitle:()=>d});var c=JSON.parse('{"id":"Frontend/JavaScript/\u4E13\u9898\u5185\u5BB9/Class","title":"\u539F\u578B","description":"\u5728 JavaScript \u4E2D\uFF0C\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4E2Aprototype\u5C5E\u6027\uFF0C\u5B83\u6307\u5411\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u3002\u901A\u8FC7\u51FD\u6570\u521B\u5EFA\u7684\u5BF9\u8C61\u4F1A\u7EE7\u627F\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002","source":"@site/docs/Frontend/JavaScript/\u4E13\u9898\u5185\u5BB9/30.Class.md","sourceDirName":"Frontend/JavaScript/\u4E13\u9898\u5185\u5BB9","slug":"/Frontend/JavaScript/\u4E13\u9898\u5185\u5BB9/Class","permalink":"/docs-hub/Frontend/JavaScript/\u4E13\u9898\u5185\u5BB9/Class","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u4E13\u9898\u5185\u5BB9/30.Class.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":30,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"Blob \u5BF9\u8C61","permalink":"/docs-hub/Frontend/JavaScript/\u4E13\u9898\u5185\u5BB9/Blob\u5BF9\u8C61"},"next":{"title":"Class super \u5173\u952E\u5B57","permalink":"/docs-hub/Frontend/JavaScript/\u4E13\u9898\u5185\u5BB9/Class\u7684\u4F7F\u7528"}}'),r=s("85893"),o=s("50065");let l={},d="\u539F\u578B",a={},i=[{value:"\u51FD\u6570\u8868\u8FBE\u5F0F",id:"\u51FD\u6570\u8868\u8FBE\u5F0F",level:2},{value:"\u6682\u65F6\u6027\u6B7B\u533A",id:"\u6682\u65F6\u6027\u6B7B\u533A",level:2},{value:"\u516C/\u79C1\u6709\u5C5E\u6027",id:"\u516C\u79C1\u6709\u5C5E\u6027",level:2},{value:"\u9759\u6001\u5C5E\u6027",id:"\u9759\u6001\u5C5E\u6027",level:2}];function t(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u539F\u578B",children:"\u539F\u578B"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 JavaScript \u4E2D\uFF0C\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"prototype"}),"\u5C5E\u6027\uFF0C\u5B83\u6307\u5411\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u3002\u901A\u8FC7\u51FD\u6570\u521B\u5EFA\u7684\u5BF9\u8C61\u4F1A\u7EE7\u627F\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528\u539F\u578B\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function Person(name = 'zhangsan', age = 18) {\n  this.name = name;\n  this.age = age;\n}\n\nPerson.prototype.say = function () {\n  console.log(`my name is ${this.name}, my age is ${this.age}`);\n};\n\nnew Person('lisi', 19).say();\n\nlet person = new Person('wangwu', 20);\n\n// \u539F\u578B\u4E0A\u7684\u5C5E\u6027\uFF0C\u5168\u7B49\u4E8E\u8FD9\u4E2A\u6784\u9020\u5668\nconsole.log(Object.getPrototypeOf(person).constructor === Person); // true\nconsole.log(Person.prototype.constructor === Person); // true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"Person"}),"\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u5728\u5176\u539F\u578B\u5BF9\u8C61\u4E0A\u6DFB\u52A0\u4E86\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"say"}),"\u65B9\u6CD5\u3002\u901A\u8FC7",(0,r.jsx)(n.code,{children:"new"}),"\u5173\u952E\u5B57\u521B\u5EFA\u7684",(0,r.jsx)(n.code,{children:"Person"}),"\u5B9E\u4F8B\u4F1A\u7EE7\u627F\u539F\u578B\u5BF9\u8C61\u4E0A\u7684",(0,r.jsx)(n.code,{children:"say"}),"\u65B9\u6CD5\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7",(0,r.jsx)(n.code,{children:"Object.getPrototypeOf()"}),"\u6216\u8005",(0,r.jsx)(n.code,{children:"Person.prototype"}),"\u6765\u8BBF\u95EE\u539F\u578B\u5BF9\u8C61\uFF0C\u5B83\u4EEC\u7684",(0,r.jsx)(n.code,{children:"constructor"}),"\u5C5E\u6027\u6307\u5411\u6784\u9020\u51FD\u6570\u672C\u8EAB\u3002"]}),"\n",(0,r.jsx)(n.h1,{id:"class",children:"class"}),"\n",(0,r.jsxs)(n.p,{children:["ES6 \u5F15\u5165\u4E86",(0,r.jsx)(n.code,{children:"class"}),"\u5173\u952E\u5B57\uFF0C\u63D0\u4F9B\u4E86\u4E00\u79CD\u66F4\u52A0\u9762\u5411\u5BF9\u8C61\u7684\u5199\u6CD5\u6765\u5B9A\u4E49\u7C7B\u3002\u4F7F\u7528",(0,r.jsx)(n.code,{children:"class"}),"\u5B9A\u4E49\u7684\u7C7B\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u7C7B\u5185\u90E8\u5B9A\u4E49\u7684\u65B9\u6CD5\u662F\u4E0D\u53EF\u679A\u4E3E\u7684\uFF0C\u800C\u4F20\u7EDF\u7684\u6784\u9020\u51FD\u6570\u4E0A\u7684\u65B9\u6CD5\u662F\u53EF\u679A\u4E3E\u7684\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u7C7B\u4E2D\u6709\u9ED8\u8BA4\u7684",(0,r.jsx)(n.code,{children:"constructor"}),"\u6784\u9020\u51FD\u6570\uFF0C\u5982\u679C\u4E0D\u663E\u5F0F\u5B9A\u4E49\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u7684",(0,r.jsx)(n.code,{children:"constructor"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528",(0,r.jsx)(n.code,{children:"class"}),"\u5B9A\u4E49\u7C7B\u7684\u793A\u4F8B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"class Person {\n  // \u6784\u9020\u51FD\u6570\n  constructor(name = 'zhangsan', age = '18') {\n    // \u5B9E\u4F8B\u5316\u7684\u5C5E\u6027\uFF1A\u79C1\u6709\u5C5E\u6027\n    this.name = name;\n    this.age = age;\n  }\n\n  // \u6784\u9020\u51FD\u6570\u539F\u578B\u4E0A\u7684\u65B9\u6CD5\uFF1A\u516C\u6709\u5C5E\u6027\n  // \u516C\u6709\u5C5E\u6027\u4E0D\u53EF\u679A\u4E3E\n  say() {\n    console.log(`my name is ${this.name}, my age is ${this.age}`);\n  }\n}\n\nconsole.log(new Person());\nconsole.log(typeof Person); // function\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528",(0,r.jsx)(n.code,{children:"class"}),"\u5173\u952E\u5B57\u5B9A\u4E49\u4E86\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"Person"}),"\u7C7B\uFF0C\u5305\u542B\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"constructor"}),"\u6784\u9020\u51FD\u6570\u548C\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"say"}),"\u65B9\u6CD5\u3002\u901A\u8FC7",(0,r.jsx)(n.code,{children:"new"}),"\u5173\u952E\u5B57\u521B\u5EFA\u7684\u5B9E\u4F8B\u4F1A\u81EA\u52A8\u8C03\u7528",(0,r.jsx)(n.code,{children:"constructor"}),"\u6784\u9020\u51FD\u6570\u8FDB\u884C\u521D\u59CB\u5316\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u51FD\u6570\u8868\u8FBE\u5F0F",children:"\u51FD\u6570\u8868\u8FBE\u5F0F"}),"\n",(0,r.jsx)(n.p,{children:"\u7C7B\u4E5F\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u5F62\u5F0F\u5B9A\u4E49\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let Person = class {\n  say() {\n    console.log(1);\n  }\n};\n\nnew Person().say(); // 1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6682\u65F6\u6027\u6B7B\u533A",children:"\u6682\u65F6\u6027\u6B7B\u533A"}),"\n",(0,r.jsxs)(n.p,{children:["\u7C7B\u7684\u58F0\u660E\u4E0D\u4F1A\u63D0\u5347\uFF0C\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A\uFF08Temporal Dead Zone\uFF0CTDZ\uFF09\u3002\u5728\u7C7B\u58F0\u660E\u4E4B\u524D\u5C1D\u8BD5\u8BBF\u95EE\u7C7B\u4F1A\u629B\u51FA\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"ReferenceError"}),"\u9519\u8BEF\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"console.log(new Person()); // Uncaught ReferenceError: Cannot access 'Person' before initialization\nclass Person {}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u516C\u79C1\u6709\u5C5E\u6027",children:"\u516C/\u79C1\u6709\u5C5E\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u7C7B\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u516C\u6709\u5C5E\u6027\u548C\u79C1\u6709\u5C5E\u6027\u3002\u516C\u6709\u5C5E\u6027\u662F\u5728\u539F\u578B\u5BF9\u8C61\u4E0A\u5B9A\u4E49\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u88AB\u5B9E\u4F8B\u8BBF\u95EE\u3002\u79C1\u6709\u5C5E\u6027\u662F\u5728\u6784\u9020\u51FD\u6570\u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u53EA\u80FD\u5728\u7C7B\u7684\u5185\u90E8\u8BBF\u95EE\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u72EC\u4E00\u65E0\u4E8C\u503C\nconst eat = Symbol();\n\nclass Person {\n  // \u79C1\u6709\u5C5E\u6027\n  a = 1;\n\n  // \u516C\u6709\u5C5E\u6027\n  say() {\n    console.log(1);\n  }\n\n  // \u79C1\u6709\u65B9\u6CD5\n  [eat]() {\n    console.log(2);\n  }\n}\n\nconsole.log(new Person().say()); // 1\nconsole.log(new Person().eat()); // undefined\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C",(0,r.jsx)(n.code,{children:"a"}),"\u662F\u79C1\u6709\u5C5E\u6027\uFF0C",(0,r.jsx)(n.code,{children:"say"}),"\u662F\u516C\u6709\u5C5E\u6027\uFF0C",(0,r.jsx)(n.code,{children:"[eat]"}),"\u662F\u79C1\u6709\u65B9\u6CD5\u3002\u79C1\u6709\u5C5E\u6027\u548C\u79C1\u6709\u65B9\u6CD5\u53EA\u80FD\u5728\u7C7B\u7684\u5185\u90E8\u8BBF\u95EE\uFF0C\u5916\u90E8\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9759\u6001\u5C5E\u6027",children:"\u9759\u6001\u5C5E\u6027"}),"\n",(0,r.jsxs)(n.p,{children:["\u9759\u6001\u5C5E\u6027\u662F\u76F4\u63A5\u5B9A\u4E49\u5728\u7C7B\u672C\u8EAB\u4E0A\u7684\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u5B9A\u4E49\u5728\u539F\u578B\u5BF9\u8C61\u4E0A\u3002\u9759\u6001\u5C5E\u6027\u53EF\u4EE5\u4F7F\u7528",(0,r.jsx)(n.code,{children:"static"}),"\u5173\u952E\u5B57\u6765\u5B9A\u4E49\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"class Person {\n  static a() {\n    console.log(1);\n  }\n}\n\nconsole.log(Person.a()); // 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C",(0,r.jsx)(n.code,{children:"a"}),"\u662F",(0,r.jsx)(n.code,{children:"Person"}),"\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u7C7B\u540D\u6765\u8BBF\u95EE\uFF0C\u800C\u4E0D\u9700\u8981\u521B\u5EFA\u5B9E\u4F8B\u3002"]}),"\n",(0,r.jsx)(n.h1,{id:"extends\u7EE7\u627F",children:"extends\uFF1A\u7EE7\u627F"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"extends"}),"\u5173\u952E\u5B57\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u7C7B\u4F5C\u4E3A\u53E6\u4E00\u4E2A\u7C7B\u7684\u5B50\u7C7B\u3002\u5B50\u7C7B\u4F1A\u7EE7\u627F\u7236\u7C7B\u7684\u516C\u6709\u5C5E\u6027\u548C\u79C1\u6709\u5C5E\u6027\uFF0C\u4F46\u4E0D\u4F1A\u7EE7\u627F\u9759\u6001\u5C5E\u6027\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"class Parent {\n  constructor(name = 'zs') {\n    this.name = name;\n  }\n}\n\n// \u5B50\u7C7B\u7EE7\u627F\u7236\u7C7B\nclass Child extends Parent {}\n\nconsole.log(new Child()); // Child { name: 'zs' }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C",(0,r.jsx)(n.code,{children:"Child"}),"\u7C7B\u901A\u8FC7",(0,r.jsx)(n.code,{children:"extends"}),"\u5173\u952E\u5B57\u7EE7\u627F\u4E86",(0,r.jsx)(n.code,{children:"Parent"}),"\u7C7B\uFF0C",(0,r.jsx)(n.code,{children:"Child"}),"\u7684\u5B9E\u4F8B\u4F1A\u7EE7\u627F",(0,r.jsx)(n.code,{children:"Parent"}),"\u7C7B\u7684",(0,r.jsx)(n.code,{children:"name"}),"\u5C5E\u6027\u3002"]}),"\n",(0,r.jsx)(n.h1,{id:"super",children:"super"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"super"}),"\u5173\u952E\u5B57\u7528\u4E8E\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u548C\u65B9\u6CD5\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u5FC5\u987B\u5148\u8C03\u7528",(0,r.jsx)(n.code,{children:"super()"}),"\u65B9\u6CD5\u624D\u80FD\u4F7F\u7528",(0,r.jsx)(n.code,{children:"this"}),"\u5173\u952E\u5B57\u3002",(0,r.jsx)(n.code,{children:"super()"}),"\u65B9\u6CD5\u4F1A\u6267\u884C\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u5C06\u53C2\u6570\u4F20\u9012\u7ED9\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u7236\u7C7B\nclass Parent {\n  constructor(name = 'zs') {\n    this.name = name;\n  }\n}\n\n// \u5B50\u7C7B\nclass Child extends Parent {\n  constructor(name = 'ls', age) {\n    // \u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\n    super(name);\n    this.age = age;\n    this.type = '\u513F\u5B50';\n  }\n}\n\nconsole.log(new Child()); // Child { name: 'ls', age: undefined, type: '\u513F\u5B50' }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C",(0,r.jsx)(n.code,{children:"Child"}),"\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u901A\u8FC7",(0,r.jsx)(n.code,{children:"super(name)"}),"\u8C03\u7528\u4E86\u7236\u7C7B",(0,r.jsx)(n.code,{children:"Parent"}),"\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u4F20\u9012\u4E86",(0,r.jsx)(n.code,{children:"name"}),"\u53C2\u6570\u3002\u8FD9\u6837\uFF0C",(0,r.jsx)(n.code,{children:"Child"}),"\u7C7B\u7684\u5B9E\u4F8B\u5C31\u4F1A\u7EE7\u627F\u7236\u7C7B\u7684",(0,r.jsx)(n.code,{children:"name"}),"\u5C5E\u6027\uFF0C\u5E76\u4E14\u53EF\u4EE5\u6DFB\u52A0\u81EA\u5DF1\u7684",(0,r.jsx)(n.code,{children:"age"}),"\u548C",(0,r.jsx)(n.code,{children:"type"}),"\u5C5E\u6027\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"super"}),"\u5173\u952E\u5B57\u8FD8\u53EF\u4EE5\u7528\u4E8E\u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5\u3002\u5728\u5B50\u7C7B\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7",(0,r.jsx)(n.code,{children:"super.method()"}),"\u6765\u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var c=s(67294);let r={},o=c.createContext(r);function l(e){let n=c.useContext(o);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);