"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["93649"],{52249:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>s});var t=JSON.parse('{"id":"Frontend/TypeScript/\u57FA\u672C\u7C7B\u578B","title":"TypeScript \u57FA\u672C\u7C7B\u578B","description":"\u5728 TypeScript \u4E2D,\u6211\u4EEC\u53EF\u4EE5\u4E3A\u53D8\u91CF\u3001\u51FD\u6570\u53C2\u6570\u3001\u51FD\u6570\u8FD4\u56DE\u503C\u7B49\u6307\u5B9A\u7C7B\u578B\u3002\u6307\u5B9A\u7C7B\u578B\u53EF\u4EE5\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027,\u540C\u65F6\u4E5F\u80FD\u907F\u514D\u4E00\u4E9B\u6F5C\u5728\u7684\u9519\u8BEF\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u8BE6\u7EC6\u4E86\u89E3\u4E00\u4E0B TypeScript \u652F\u6301\u7684\u5404\u79CD\u57FA\u672C\u7C7B\u578B\u3002","source":"@site/docs/Frontend/TypeScript/30.\u57FA\u672C\u7C7B\u578B.md","sourceDirName":"Frontend/TypeScript","slug":"/Frontend/TypeScript/\u57FA\u672C\u7C7B\u578B","permalink":"/docs-hub/Frontend/TypeScript/\u57FA\u672C\u7C7B\u578B","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/TypeScript/30.\u57FA\u672C\u7C7B\u578B.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734402243000,"sidebarPosition":30,"frontMatter":{},"sidebar":"typescriptSidebar","previous":{"title":"TypeScript \u5B89\u88C5\u4E0E\u914D\u7F6E","permalink":"/docs-hub/Frontend/TypeScript/\u5B89\u88C5\u4E0E\u914D\u7F6E"},"next":{"title":"TypeScript \u63A5\u53E3","permalink":"/docs-hub/Frontend/TypeScript/\u63A5\u53E3"}}'),l=r("85893"),i=r("50065");let c={},s="TypeScript \u57FA\u672C\u7C7B\u578B",o={},a=[{value:"\u539F\u59CB\u6570\u636E\u7C7B\u578B",id:"\u539F\u59CB\u6570\u636E\u7C7B\u578B",level:2},{value:"\u6570\u7EC4\u4E0E\u5143\u7EC4",id:"\u6570\u7EC4\u4E0E\u5143\u7EC4",level:2},{value:"\u7279\u6B8A\u7C7B\u578B",id:"\u7279\u6B8A\u7C7B\u578B",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"typescript-\u57FA\u672C\u7C7B\u578B",children:"TypeScript \u57FA\u672C\u7C7B\u578B"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728 TypeScript \u4E2D,\u6211\u4EEC\u53EF\u4EE5\u4E3A\u53D8\u91CF\u3001\u51FD\u6570\u53C2\u6570\u3001\u51FD\u6570\u8FD4\u56DE\u503C\u7B49\u6307\u5B9A\u7C7B\u578B\u3002\u6307\u5B9A\u7C7B\u578B\u53EF\u4EE5\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027,\u540C\u65F6\u4E5F\u80FD\u907F\u514D\u4E00\u4E9B\u6F5C\u5728\u7684\u9519\u8BEF\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u8BE6\u7EC6\u4E86\u89E3\u4E00\u4E0B TypeScript \u652F\u6301\u7684\u5404\u79CD\u57FA\u672C\u7C7B\u578B\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u539F\u59CB\u6570\u636E\u7C7B\u578B",children:"\u539F\u59CB\u6570\u636E\u7C7B\u578B"}),"\n",(0,l.jsx)(n.p,{children:"TypeScript \u652F\u6301\u4E0E JavaScript \u51E0\u4E4E\u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B,\u5177\u4F53\u5305\u62EC:"}),"\n",(0,l.jsx)(n.p,{children:"boolean \u5E03\u5C14\u503C,\u5982:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"let isDone: boolean = false;\n"})}),"\n",(0,l.jsx)(n.p,{children:"number \u6570\u5B57,\u652F\u6301\u6574\u6570\u3001\u6D6E\u70B9\u6570\u3001\u4E8C\u8FDB\u5236\u3001\u516B\u8FDB\u5236\u548C\u5341\u516D\u8FDB\u5236,\u5982:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"let decimal: number = 6;\nlet hex: number = 0xf00d;\nlet binary: number = 0b1010;\nlet octal: number = 0o744;\n"})}),"\n",(0,l.jsx)(n.p,{children:"string \u5B57\u7B26\u4E32,\u652F\u6301\u5355\u5F15\u53F7\u3001\u53CC\u5F15\u53F7\u548C\u6A21\u677F\u5B57\u7B26\u4E32,\u5982:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"let color: string = 'blue';\ncolor = 'red';\nlet sentence: string = `Hello, my name is ${fullName}.`;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["null \u548C undefined,\u5B83\u4EEC\u662F\u6240\u6709\u7C7B\u578B\u7684\u5B50\u7C7B\u578B,\u53EF\u4EE5\u8D4B\u503C\u7ED9\u4EFB\u4F55\u7C7B\u578B\u7684\u53D8\u91CF\u3002\u4F46\u662F\u5F53\u542F\u7528",(0,l.jsx)(n.code,{children:"--strictNullChecks"}),"\u6807\u8BB0,null \u548C undefined \u53EA\u80FD\u8D4B\u503C\u7ED9 void \u548C\u5B83\u4EEC\u5404\u81EA\u7684\u7C7B\u578B\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"symbol \u8868\u793A\u72EC\u4E00\u65E0\u4E8C\u7684\u503C,\u901A\u8FC7 Symbol \u6784\u9020\u51FD\u6570\u521B\u5EFA,\u5982:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"let sym1 = Symbol();\nlet sym2 = Symbol('key');\n"})}),"\n",(0,l.jsx)(n.p,{children:"bigint \u8868\u793A\u4EFB\u610F\u7CBE\u5EA6\u7684\u6574\u6570,\u4F7F\u7528 BigInt \u51FD\u6570\u521B\u5EFA,\u5982:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"const oneHundred: bigint = BigInt(100);\nconst anotherHundred: bigint = 100n;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6570\u7EC4\u4E0E\u5143\u7EC4",children:"\u6570\u7EC4\u4E0E\u5143\u7EC4"}),"\n",(0,l.jsx)(n.p,{children:"\u6570\u7EC4\u7C7B\u578B\u53EF\u4EE5\u7528\u4E24\u79CD\u65B9\u5F0F\u8868\u793A:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// \u5143\u7D20\u7C7B\u578B\u540E\u9762\u63A5\u4E0A[]\nlet list: number[] = [1, 2, 3];\n\n// \u4F7F\u7528\u6570\u7EC4\u6CDB\u578B\nlet list: Array<number> = [1, 2, 3];\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5143\u7EC4\u7C7B\u578B\u5141\u8BB8\u8868\u793A\u4E00\u4E2A\u5DF2\u77E5\u5143\u7D20\u6570\u91CF\u548C\u7C7B\u578B\u7684\u6570\u7EC4,\u5982:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"let x: [string, number];\nx = ['hello', 10]; // OK\nx = [10, 'hello']; // Error\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7279\u6B8A\u7C7B\u578B",children:"\u7279\u6B8A\u7C7B\u578B"}),"\n",(0,l.jsx)(n.p,{children:"any \u8868\u793A\u5141\u8BB8\u8D4B\u503C\u4E3A\u4EFB\u610F\u7C7B\u578B,\u5728\u7F16\u7A0B\u9636\u6BB5\u8FD8\u4E0D\u6E05\u695A\u7C7B\u578B\u7684\u53D8\u91CF\u53EF\u4EE5\u6307\u5B9A\u4E3A any \u7C7B\u578B\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"let notSure: any = 4;\nnotSure = 'maybe a string';\nnotSure = false; // okay, definitely a boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"unknown \u8868\u793A\u672A\u77E5\u7C7B\u578B,\u4E0E any \u4E00\u6837,\u6240\u6709\u7C7B\u578B\u90FD\u53EF\u4EE5\u5206\u914D\u7ED9 unknown\u3002\u4F46\u662F unknown \u7C7B\u578B\u53EA\u80FD\u88AB\u8D4B\u503C\u7ED9 any \u7C7B\u578B\u548C unknown \u672C\u8EAB\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"let value: unknown;\nvalue = true; // OK\nvalue = 42; // OK\nvalue = 'Hello World'; // OK\n\nlet value1: unknown = value; // OK\nlet value2: any = value; // OK\nlet value3: boolean = value; // Error\nlet value4: number = value; // Error\nlet value5: string = value; // Error\n"})}),"\n",(0,l.jsx)(n.p,{children:"void \u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u7C7B\u578B,\u5F53\u4E00\u4E2A\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6,\u901A\u5E38\u4F1A\u89C1\u5230\u5176\u8FD4\u56DE\u503C\u7C7B\u578B\u662F void\u3002\u58F0\u660E\u4E00\u4E2A void \u7C7B\u578B\u7684\u53D8\u91CF\u6CA1\u6709\u4EC0\u4E48\u5927\u7528,\u56E0\u4E3A\u4F60\u53EA\u80FD\u4E3A\u5B83\u8D4B\u4E88 undefined \u548C null\u3002"}),"\n",(0,l.jsx)(n.p,{children:"never \u8868\u793A\u6C38\u4E0D\u5B58\u5728\u7684\u503C\u7684\u7C7B\u578B\u3002\u4F8B\u5982 never \u7C7B\u578B\u662F\u90A3\u4E9B\u603B\u662F\u4F1A\u629B\u51FA\u5F02\u5E38\u6216\u6839\u672C\u5C31\u4E0D\u4F1A\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u6216\u7BAD\u5934\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// \u8FD4\u56DEnever\u7684\u51FD\u6570\u5FC5\u987B\u5B58\u5728\u65E0\u6CD5\u8FBE\u5230\u7684\u7EC8\u70B9\nfunction error(message: string): never {\n  throw new Error(message);\n}\n\n// \u63A8\u65AD\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3Anever\nfunction fail() {\n  return error('Something failed');\n}\n\n// \u8FD4\u56DEnever\u7684\u51FD\u6570\u5FC5\u987B\u5B58\u5728\u65E0\u6CD5\u8FBE\u5230\u7684\u7EC8\u70B9\nfunction infiniteLoop(): never {\n  while (true) {}\n}\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return c}});var t=r(67294);let l={},i=t.createContext(l);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);