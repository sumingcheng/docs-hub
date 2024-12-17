"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["22775"],{38628:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>s,metadata:()=>c,assets:()=>d,toc:()=>p,contentTitle:()=>l});var c=JSON.parse('{"id":"Frontend/TypeScript/TypeScript\u7B80\u4ECB","title":"TypeScript \u7B80\u4ECB","description":"TypeScript \u662F JavaScript \u7684\u8D85\u96C6,\u5728 JavaScript \u7684\u57FA\u7840\u4E0A\u589E\u52A0\u4E86\u7C7B\u578B\u7CFB\u7EDF\u3002\u4F7F\u7528 TypeScript \u53EF\u4EE5\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u66F4\u65E9\u5730\u53D1\u73B0\u9519\u8BEF,\u63D0\u9AD8\u4EE3\u7801\u8D28\u91CF\u548C\u53EF\u7EF4\u62A4\u6027\u3002","source":"@site/docs/Frontend/TypeScript/10.TypeScript\u7B80\u4ECB.md","sourceDirName":"Frontend/TypeScript","slug":"/Frontend/TypeScript/TypeScript\u7B80\u4ECB","permalink":"/docs-hub/Frontend/TypeScript/TypeScript\u7B80\u4ECB","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/TypeScript/10.TypeScript\u7B80\u4ECB.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734402243000,"sidebarPosition":10,"frontMatter":{},"sidebar":"typescriptSidebar","next":{"title":"TypeScript \u5B89\u88C5\u4E0E\u914D\u7F6E","permalink":"/docs-hub/Frontend/TypeScript/\u5B89\u88C5\u4E0E\u914D\u7F6E"}}'),r=i("85893"),t=i("50065");let s={},l="TypeScript \u7B80\u4ECB",d={},p=[{value:"TypeScript \u7684\u4F18\u52BF",id:"typescript-\u7684\u4F18\u52BF",level:2},{value:"\u5B89\u88C5 TypeScript",id:"\u5B89\u88C5-typescript",level:2},{value:"\u521D\u59CB\u5316\u9879\u76EE",id:"\u521D\u59CB\u5316\u9879\u76EE",level:2},{value:"\u7C7B\u578B\u6CE8\u89E3",id:"\u7C7B\u578B\u6CE8\u89E3",level:2},{value:"TypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF",id:"typescript-\u7684\u7C7B\u578B\u7CFB\u7EDF",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"typescript-\u7B80\u4ECB",children:"TypeScript \u7B80\u4ECB"})}),"\n",(0,r.jsx)(n.p,{children:"TypeScript \u662F JavaScript \u7684\u8D85\u96C6,\u5728 JavaScript \u7684\u57FA\u7840\u4E0A\u589E\u52A0\u4E86\u7C7B\u578B\u7CFB\u7EDF\u3002\u4F7F\u7528 TypeScript \u53EF\u4EE5\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u66F4\u65E9\u5730\u53D1\u73B0\u9519\u8BEF,\u63D0\u9AD8\u4EE3\u7801\u8D28\u91CF\u548C\u53EF\u7EF4\u62A4\u6027\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"typescript-\u7684\u4F18\u52BF",children:"TypeScript \u7684\u4F18\u52BF"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 TypeScript \u76F8\u6BD4 JavaScript \u6709\u4EE5\u4E0B\u51E0\u70B9\u4F18\u52BF:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9759\u6001\u7C7B\u578B\u68C0\u67E5",":TypeScript"," \u5728\u7F16\u8BD1\u9636\u6BB5\u5C31\u80FD\u53D1\u73B0\u7C7B\u578B\u9519\u8BEF,\u51CF\u5C11\u8FD0\u884C\u65F6\u9519\u8BEF\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u66F4\u597D\u7684\u4EE3\u7801\u63D0\u793A",":IDE"," \u53EF\u4EE5\u6839\u636E\u7C7B\u578B\u4FE1\u606F\u63D0\u4F9B\u66F4\u51C6\u786E\u7684\u4EE3\u7801\u63D0\u793A\u548C\u81EA\u52A8\u8865\u5168\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u589E\u5F3A\u4EE3\u7801\u53EF\u8BFB\u6027:\u7C7B\u578B\u6CE8\u89E3\u8BA9\u4EE3\u7801\u66F4\u5BB9\u6613\u7406\u89E3,\u660E\u786E\u8868\u8FBE\u4E86\u5F00\u53D1\u8005\u7684\u610F\u56FE\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4FBF\u4E8E\u91CD\u6784:\u7C7B\u578B\u7CFB\u7EDF\u53EF\u4EE5\u8F85\u52A9\u8FDB\u884C\u4EE3\u7801\u91CD\u6784,\u63D0\u9AD8\u4EE3\u7801\u8D28\u91CF\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F,TypeScript \u6700\u7EC8\u8FD8\u662F\u4F1A\u7F16\u8BD1\u4E3A JavaScript \u4EE3\u7801\u8FD0\u884C\u3002\u5B83\u4E0D\u4F1A\u63D0\u4F9B\u989D\u5916\u7684\u6027\u80FD\u4F18\u5316,\u4F46\u53EF\u4EE5\u901A\u8FC7\u5DE5\u5177\u5BF9\u751F\u6210\u7684 JavaScript \u4EE3\u7801\u8FDB\u884C\u4F18\u5316\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5B89\u88C5-typescript",children:"\u5B89\u88C5 TypeScript"}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7 npm \u5168\u5C40\u5B89\u88C5 TypeScript \u7F16\u8BD1\u5668\u548C ts-node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install -g typescript ts-node\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5B89\u88C5\u5B8C\u6210\u540E,\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"tsc --help\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u770B\u5230\u8F93\u51FA",(0,r.jsx)(n.code,{children:"tsc: The TypeScript Compiler - Version x.x.x"}),",\u5219\u8868\u793A\u5B89\u88C5\u6210\u529F\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u521D\u59CB\u5316\u9879\u76EE",children:"\u521D\u59CB\u5316\u9879\u76EE"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4EEC\u5148\u521B\u5EFA\u4E00\u4E2A\u6F14\u793A\u9879\u76EE,\u521D\u59CB\u5316 package.json \u5E76\u5B89\u88C5 axios:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm init -y\nnpm install axios\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540E\u521B\u5EFA\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"index.ts"}),"\u6587\u4EF6,\u7F16\u5199\u4EE5\u4E0B TypeScript \u4EE3\u7801:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import axios from 'axios';\n\nconst url = 'https://jsonplaceholder.typicode.com/todos/1';\n\naxios.get(url).then((res) => {\n  console.log(res.data);\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528",(0,r.jsx)(n.code,{children:"tsc"}),"\u547D\u4EE4\u5C06 TypeScript \u4EE3\u7801\u7F16\u8BD1\u4E3A JavaScript:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"tsc index.ts\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7F16\u8BD1\u540E\u4F1A\u751F\u6210",(0,r.jsx)(n.code,{children:"index.js"}),"\u6587\u4EF6,\u7136\u540E\u901A\u8FC7 node \u8FD0\u884C:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"node index.js\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6216\u8005\u76F4\u63A5\u4F7F\u7528",(0,r.jsx)(n.code,{children:"ts-node"}),"\u8FD0\u884C TypeScript \u4EE3\u7801:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ts-node index.ts\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7C7B\u578B\u6CE8\u89E3",children:"\u7C7B\u578B\u6CE8\u89E3"}),"\n",(0,r.jsx)(n.p,{children:"\u63A5\u4E0B\u6765\u6211\u4EEC\u7ED9\u4E0A\u9762\u7684\u4EE3\u7801\u6DFB\u52A0\u7C7B\u578B\u6CE8\u89E3:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import axios from 'axios';\n\nconst url = 'https://jsonplaceholder.typicode.com/todos/1';\n\n// \u5B9A\u4E49\u63A5\u53E3\ninterface Todo {\n  id: number;\n  title: string;\n  completed: boolean;\n}\n\naxios.get(url).then((res) => {\n  // \u65AD\u8A00res.data\u7684\u7C7B\u578B\u4E3ATodo\n  const todo = res.data as Todo;\n  const { id, title, completed } = todo;\n  logTodo(id, title, completed);\n});\n\nfunction logTodo(id: number, title: string, completed: boolean) {\n  console.log(`\n    \u8FD9\u4E2Atodo\u7684ID\u4E3A: ${id}\n    \u6807\u9898\u662F: ${title} \n    \u662F\u5426\u5DF2\u5B8C\u6210: ${completed}\n  `);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"Todo"}),"\u63A5\u53E3\u6765\u63CF\u8FF0\u54CD\u5E94\u6570\u636E\u7684\u7ED3\u6784\u3002\u901A\u8FC7",(0,r.jsx)(n.code,{children:"as"}),"\u5173\u952E\u5B57\u65AD\u8A00",(0,r.jsx)(n.code,{children:"res.data"}),"\u7684\u7C7B\u578B\u4E3A",(0,r.jsx)(n.code,{children:"Todo"}),",\u8FD9\u6837\u5728\u4F7F\u7528",(0,r.jsx)(n.code,{children:"todo"}),"\u53D8\u91CF\u65F6\u5C31\u80FD\u83B7\u5F97\u7C7B\u578B\u68C0\u67E5\u548C\u4EE3\u7801\u63D0\u793A\u4E86\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540C\u65F6\u7ED9",(0,r.jsx)(n.code,{children:"logTodo"}),"\u51FD\u6570\u7684\u53C2\u6570\u6DFB\u52A0\u4E86\u7C7B\u578B\u6CE8\u89E3,\u660E\u786E\u4E86\u6BCF\u4E2A\u53C2\u6570\u7684\u7C7B\u578B,\u589E\u5F3A\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"typescript-\u7684\u7C7B\u578B\u7CFB\u7EDF",children:"TypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF"}),"\n",(0,r.jsx)(n.p,{children:"TypeScript \u652F\u6301\u4E24\u5927\u7C7B\u7C7B\u578B:\u539F\u59CB\u7C7B\u578B(Primitive Types)\u548C\u5BF9\u8C61\u7C7B\u578B(Object Types)\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u539F\u59CB\u7C7B\u578B\u5305\u62EC:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"number"}),"\n",(0,r.jsx)(n.li,{children:"boolean"}),"\n",(0,r.jsx)(n.li,{children:"string"}),"\n",(0,r.jsx)(n.li,{children:"undefined"}),"\n",(0,r.jsx)(n.li,{children:"null"}),"\n",(0,r.jsx)(n.li,{children:"void"}),"\n",(0,r.jsx)(n.li,{children:"symbol"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5BF9\u8C61\u7C7B\u578B\u5305\u62EC:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"object"}),"\n",(0,r.jsx)(n.li,{children:"array"}),"\n",(0,r.jsx)(n.li,{children:"tuple"}),"\n",(0,r.jsx)(n.li,{children:"enum"}),"\n",(0,r.jsx)(n.li,{children:"any"}),"\n",(0,r.jsx)(n.li,{children:"never"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u5B9A\u4E49\u53D8\u91CF\u65F6\u6CA1\u6709\u6307\u5B9A\u7C7B\u578B,TypeScript \u4F1A\u6839\u636E\u53D8\u91CF\u7684\u503C\u63A8\u65AD\u51FA\u4E00\u4E2A\u7C7B\u578B\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A\u7C7B\u578B\u63A8\u65AD(Type Inference)\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"let count = 0; // \u63A8\u65AD\u4E3Anumber\u7C7B\u578B\nconst name = 'TypeScript'; // \u63A8\u65AD\u4E3Astring\u7C7B\u578B\n\n// \u5BF9\u4E8E const \u58F0\u660E\u7684\u53D8\u91CF\uFF0CTypeScript \u4F1A\u8FDB\u884C\u66F4\u4E25\u683C\u7684\u5B57\u9762\u91CF\u7C7B\u578B\u63A8\u65AD\nconst status = 'active'; // \u63A8\u65AD\u4E3A 'active' \u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u800C\u4E0D\u662F string\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4F46\u5982\u679C\u53D8\u91CF\u7684\u7C7B\u578B\u4E0D\u660E\u786E,\u4F8B\u5982\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\u53EF\u80FD\u662F\u591A\u79CD\u7C7B\u578B,\u5C31\u9700\u8981\u4F7F\u7528\u8054\u5408\u7C7B\u578B(Union Types):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"let value: string | number;\nvalue = 'hello';\nvalue = 123;\n"})})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var c=i(67294);let r={},t=c.createContext(r);function s(e){let n=c.useContext(t);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);