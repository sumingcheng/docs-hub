"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["48769"],{74044:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"Frontend/TypeScript/\u7C7B","title":"TypeScript \u7C7B","description":"\u5728\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B(OOP)\u4E2D,\u7C7B\u662F\u4E00\u79CD\u7528\u4E8E\u521B\u5EFA\u5BF9\u8C61\u7684\u84DD\u56FE\u6216\u6A21\u677F\u3002\u5B83\u5C01\u88C5\u4E86\u6570\u636E\u548C\u64CD\u4F5C\u6570\u636E\u7684\u65B9\u6CD5\u3002TypeScript \u4F5C\u4E3A JavaScript \u7684\u8D85\u96C6,\u4E5F\u652F\u6301\u4F7F\u7528\u7C7B\u6765\u7EC4\u7EC7\u4EE3\u7801\u3002","source":"@site/docs/Frontend/TypeScript/50.\u7C7B.md","sourceDirName":"Frontend/TypeScript","slug":"/Frontend/TypeScript/\u7C7B","permalink":"/docs-hub/Frontend/TypeScript/\u7C7B","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/TypeScript/50.\u7C7B.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":50,"frontMatter":{},"sidebar":"typescriptSidebar","previous":{"title":"TypeScript \u7C7B\u578B\u5316\u6570\u7EC4\u4E0E\u5143\u7EC4","permalink":"/docs-hub/Frontend/TypeScript/\u7C7B\u578B\u5316\u6570\u7EC4"},"next":{"title":"TypeScript \u51FD\u6570","permalink":"/docs-hub/Frontend/TypeScript/\u51FD\u6570"}}'),s=r("85893"),c=r("50065");let i={},o="TypeScript \u7C7B",d={},l=[{value:"\u7C7B\u7684\u5B9A\u4E49",id:"\u7C7B\u7684\u5B9A\u4E49",level:2},{value:"\u8BBF\u95EE\u4FEE\u9970\u7B26",id:"\u8BBF\u95EE\u4FEE\u9970\u7B26",level:2},{value:"\u7EE7\u627F",id:"\u7EE7\u627F",level:2}];function p(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"typescript-\u7C7B",children:"TypeScript \u7C7B"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B(OOP)\u4E2D,\u7C7B\u662F\u4E00\u79CD\u7528\u4E8E\u521B\u5EFA\u5BF9\u8C61\u7684\u84DD\u56FE\u6216\u6A21\u677F\u3002\u5B83\u5C01\u88C5\u4E86\u6570\u636E\u548C\u64CD\u4F5C\u6570\u636E\u7684\u65B9\u6CD5\u3002TypeScript \u4F5C\u4E3A JavaScript \u7684\u8D85\u96C6,\u4E5F\u652F\u6301\u4F7F\u7528\u7C7B\u6765\u7EC4\u7EC7\u4EE3\u7801\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7C7B\u7684\u5B9A\u4E49",children:"\u7C7B\u7684\u5B9A\u4E49"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 TypeScript \u4E2D,\u4F7F\u7528",(0,s.jsx)(n.code,{children:"class"}),"\u5173\u952E\u5B57\u6765\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u3002\u7C7B\u901A\u5E38\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206:"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6784\u9020\u51FD\u6570(Constructor): \u7528\u4E8E\u521D\u59CB\u5316\u7C7B\u7684\u5B9E\u4F8B,\u4F7F\u7528",(0,s.jsx)(n.code,{children:"constructor"}),"\u5173\u952E\u5B57\u5B9A\u4E49\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5C5E\u6027(Properties): \u7C7B\u7684\u6570\u636E\u6210\u5458,\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u7684\u72B6\u6001\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u65B9\u6CD5(Methods): \u7C7B\u7684\u51FD\u6570\u6210\u5458,\u7528\u4E8E\u64CD\u4F5C\u7C7B\u7684\u6570\u636E\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u7C7B\u5B9A\u4E49\u793A\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class Person {\n  private name: string;\n  private age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n\n  public sayHello() {\n    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D,\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A",(0,s.jsx)(n.code,{children:"Person"}),"\u7C7B,\u5B83\u6709\u4E24\u4E2A\u79C1\u6709\u5C5E\u6027",(0,s.jsx)(n.code,{children:"name"}),"\u548C",(0,s.jsx)(n.code,{children:"age"}),",\u4EE5\u53CA\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u548C\u4E00\u4E2A\u516C\u5171\u65B9\u6CD5",(0,s.jsx)(n.code,{children:"sayHello"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BBF\u95EE\u4FEE\u9970\u7B26",children:"\u8BBF\u95EE\u4FEE\u9970\u7B26"}),"\n",(0,s.jsx)(n.p,{children:"TypeScript \u63D0\u4F9B\u4E86\u4E09\u79CD\u8BBF\u95EE\u4FEE\u9970\u7B26\u6765\u63A7\u5236\u7C7B\u6210\u5458\u7684\u53EF\u89C1\u6027:"}),"\n",(0,s.jsx)(n.p,{children:"public: \u9ED8\u8BA4\u4FEE\u9970\u7B26,\u8868\u793A\u6210\u5458\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u65B9\u88AB\u8BBF\u95EE\u3002"}),"\n",(0,s.jsx)(n.p,{children:"private: \u8868\u793A\u6210\u5458\u53EA\u80FD\u5728\u7C7B\u7684\u5185\u90E8\u8BBF\u95EE\u3002"}),"\n",(0,s.jsx)(n.p,{children:"protected: \u8868\u793A\u6210\u5458\u53EF\u4EE5\u5728\u7C7B\u7684\u5185\u90E8\u4EE5\u53CA\u5B50\u7C7B\u4E2D\u8BBF\u95EE\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u9664\u4E86\u8BBF\u95EE\u4FEE\u9970\u7B26,TypeScript \u8FD8\u63D0\u4F9B\u4E86",(0,s.jsx)(n.code,{children:"readonly"}),"\u4FEE\u9970\u7B26,\u7528\u4E8E\u6307\u5B9A\u5C5E\u6027\u53EA\u80FD\u5728\u6784\u9020\u51FD\u6570\u4E2D\u521D\u59CB\u5316,\u4E4B\u540E\u4E0D\u80FD\u88AB\u4FEE\u6539\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class Circle {\n  readonly radius: number;\n\n  constructor(radius: number) {\n    this.radius = radius;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7EE7\u627F",children:"\u7EE7\u627F"}),"\n",(0,s.jsxs)(n.p,{children:["TypeScript \u652F\u6301\u4F7F\u7528",(0,s.jsx)(n.code,{children:"extends"}),"\u5173\u952E\u5B57\u5B9E\u73B0\u7C7B\u7684\u7EE7\u627F\u3002\u5B50\u7C7B\u53EF\u4EE5\u7EE7\u627F\u7236\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5,\u5E76\u4E14\u53EF\u4EE5\u6DFB\u52A0\u81EA\u5DF1\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u6216\u8986\u76D6\u7236\u7C7B\u7684\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class Animal {\n  protected name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  move(distance: number = 0) {\n    console.log(`${this.name} moved ${distance}m.`);\n  }\n}\n\nclass Dog extends Animal {\n  bark() {\n    console.log('Woof! Woof!');\n  }\n\n  move(distance = 5) {\n    console.log('Running...');\n    super.move(distance);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D,",(0,s.jsx)(n.code,{children:"Dog"}),"\u7C7B\u7EE7\u627F\u4E86",(0,s.jsx)(n.code,{children:"Animal"}),"\u7C7B,\u5E76\u6DFB\u52A0\u4E86\u81EA\u5DF1\u7684",(0,s.jsx)(n.code,{children:"bark"}),"\u65B9\u6CD5\u3002\u5B83\u8FD8\u8986\u76D6\u4E86\u7236\u7C7B\u7684",(0,s.jsx)(n.code,{children:"move"}),"\u65B9\u6CD5,\u5728\u8C03\u7528\u7236\u7C7B\u65B9\u6CD5\u524D\u6DFB\u52A0\u4E86\u81EA\u5DF1\u7684\u903B\u8F91\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9664\u4E86\u4F7F\u7528",(0,s.jsx)(n.code,{children:"extends"}),"\u5B9E\u73B0\u7EE7\u627F,TypeScript \u8FD8\u652F\u6301\u4F7F\u7528",(0,s.jsx)(n.code,{children:"implements"}),"\u5173\u952E\u5B57\u5B9E\u73B0\u63A5\u53E3\u3002\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3,\u7528\u9017\u53F7\u5206\u9694\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface Printable {\n  print(): void;\n}\n\nclass Report implements Printable {\n  print() {\n    console.log('Printing report...');\n  }\n}\n"})})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(67294);let s={},c=t.createContext(s);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);