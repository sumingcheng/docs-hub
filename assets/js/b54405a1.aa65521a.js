"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["6161"],{57959:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>s});var t=JSON.parse('{"id":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Generator\u4E0EIterator","title":"\u6570\u7EC4\u904D\u5386\u4E0E\u8FED\u4EE3","description":"\u5728 JavaScript \u4E2D\uFF0C\u6570\u7EC4\u904D\u5386\u662F\u5904\u7406\u548C\u64CD\u4F5C\u6570\u636E\u7684\u57FA\u672C\u64CD\u4F5C\u4E4B\u4E00\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u4E03\u79CD\u5E38\u7528\u7684\u6570\u7EC4\u904D\u5386\u65B9\u6CD5\uFF0C\u5E76\u6DF1\u5165\u63A2\u8BA8\u751F\u6210\u5668\u548C\u8FED\u4EE3\u5668\u7684\u4F7F\u7528\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u7075\u6D3B\u7684\u904D\u5386\u63A7\u5236\u3002","source":"@site/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/140.Generator\u4E0EIterator.md","sourceDirName":"Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5","slug":"/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Generator\u4E0EIterator","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Generator\u4E0EIterator","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/140.Generator\u4E0EIterator.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":140,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"Array.prototype.sort","permalink":"/docs-hub/Frontend/JavaScript/JS-\u5E38\u89C1\u5185\u7F6E\u65B9\u6CD5/Array.prototype.sort"},"next":{"title":"Promise","permalink":"/docs-hub/category/promise"}}'),c=r("85893"),o=r("50065");let l={},s="\u6570\u7EC4\u904D\u5386\u4E0E\u8FED\u4EE3",a={},i=[{value:"\u4E03\u79CD\u6570\u7EC4\u904D\u5386\u65B9\u6CD5",id:"\u4E03\u79CD\u6570\u7EC4\u904D\u5386\u65B9\u6CD5",level:2},{value:"forEach\uFF08\u904D\u5386\uFF09",id:"foreach\u904D\u5386",level:3},{value:"map\uFF08\u6620\u5C04\uFF09",id:"map\u6620\u5C04",level:3},{value:"filter\uFF08\u8FC7\u6EE4\uFF09",id:"filter\u8FC7\u6EE4",level:3},{value:"reduce\uFF08\u5F52\u7EB3\uFF09",id:"reduce\u5F52\u7EB3",level:3},{value:"reduceRight\uFF08\u53CD\u5411\u5F52\u7EB3\uFF09",id:"reduceright\u53CD\u5411\u5F52\u7EB3",level:3},{value:"every\uFF08\u6BCF\u4E2A\uFF09",id:"every\u6BCF\u4E2A",level:3},{value:"some\uFF08\u90E8\u5206\uFF09",id:"some\u90E8\u5206",level:3},{value:"\u8FED\u4EE3\u63A7\u5236\u7684\u9700\u6C42",id:"\u8FED\u4EE3\u63A7\u5236\u7684\u9700\u6C42",level:2},{value:"\u8FED\u4EE3\u4E00\u4E2A\u6570\u7EC4",id:"\u8FED\u4EE3\u4E00\u4E2A\u6570\u7EC4",level:2},{value:"\u51FD\u6570\u5199\u6CD5",id:"\u51FD\u6570\u5199\u6CD5",level:2},{value:"\u751F\u6210\u5668",id:"\u751F\u6210\u5668",level:2},{value:"\u8FED\u4EE3\u5668",id:"\u8FED\u4EE3\u5668",level:2},{value:"\u5B9E\u73B0\u751F\u6210\u5668\u51FD\u6570",id:"\u5B9E\u73B0\u751F\u6210\u5668\u51FD\u6570",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u6570\u7EC4\u904D\u5386\u4E0E\u8FED\u4EE3",children:"\u6570\u7EC4\u904D\u5386\u4E0E\u8FED\u4EE3"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728 JavaScript \u4E2D\uFF0C\u6570\u7EC4\u904D\u5386\u662F\u5904\u7406\u548C\u64CD\u4F5C\u6570\u636E\u7684\u57FA\u672C\u64CD\u4F5C\u4E4B\u4E00\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u4E03\u79CD\u5E38\u7528\u7684\u6570\u7EC4\u904D\u5386\u65B9\u6CD5\uFF0C\u5E76\u6DF1\u5165\u63A2\u8BA8\u751F\u6210\u5668\u548C\u8FED\u4EE3\u5668\u7684\u4F7F\u7528\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u7075\u6D3B\u7684\u904D\u5386\u63A7\u5236\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u4E03\u79CD\u6570\u7EC4\u904D\u5386\u65B9\u6CD5",children:"\u4E03\u79CD\u6570\u7EC4\u904D\u5386\u65B9\u6CD5"}),"\n",(0,c.jsxs)(n.p,{children:["JavaScript \u63D0\u4F9B\u4E86\u591A\u79CD\u6570\u7EC4\u904D\u5386\u65B9\u6CD5\uFF0C\u6BCF\u79CD\u65B9\u6CD5\u90FD\u6709\u5176\u72EC\u7279\u7684\u7528\u9014\u548C\u4F18\u52BF\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5E95\u5C42\u90FD\u4F7F\u7528",(0,c.jsx)(n.code,{children:"for"}),"\u5FAA\u73AF\u5B9E\u73B0\uFF0C\u4F46\u63D0\u4F9B\u4E86\u66F4\u7B80\u6D01\u548C\u529F\u80FD\u5F3A\u5927\u7684\u63A5\u53E3\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"foreach\u904D\u5386",children:"forEach\uFF08\u904D\u5386\uFF09"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"forEach"}),"\u65B9\u6CD5\u7528\u4E8E\u904D\u5386\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002\u8FD9\u662F\u4E00\u4E2A\u4F18\u5316\u7248\u7684\u4F20\u7EDF",(0,c.jsx)(n.code,{children:"for"}),"\u5FAA\u73AF\uFF0C\u7B80\u5316\u4E86\u904D\u5386\u8FC7\u7A0B\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const numbers = [1, 2, 3, 4, 5];\nnumbers.forEach((number) => {\n  console.log(number);\n});\n// \u8F93\u51FA:\n// 1\n// 2\n// 3\n// 4\n// 5\n"})}),"\n",(0,c.jsx)(n.h3,{id:"map\u6620\u5C04",children:"map\uFF08\u6620\u5C04\uFF09"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"map"}),"\u65B9\u6CD5\u904D\u5386\u6570\u7EC4\u5E76\u5BF9\u6BCF\u4E2A\u5143\u7D20\u5E94\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5305\u542B\u51FD\u6570\u5904\u7406\u540E\u7684\u7ED3\u679C\u3002\u5B83\u4E0D\u4F1A\u4FEE\u6539\u539F\u6570\u7EC4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map((number) => number * 2);\nconsole.log(doubled);\n// \u8F93\u51FA: [2, 4, 6, 8, 10]\n"})}),"\n",(0,c.jsx)(n.h3,{id:"filter\u8FC7\u6EE4",children:"filter\uFF08\u8FC7\u6EE4\uFF09"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"filter"}),"\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5305\u542B\u6240\u6709\u901A\u8FC7\u6307\u5B9A\u6D4B\u8BD5\u7684\u5143\u7D20\u3002\u5B83\u6839\u636E\u56DE\u8C03\u51FD\u6570\u8FD4\u56DE\u7684\u5E03\u5C14\u503C\u51B3\u5B9A\u662F\u5426\u5305\u542B\u5F53\u524D\u5143\u7D20\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const numbers = [1, 2, 3, 4, 5];\nconst even = numbers.filter((number) => number % 2 === 0);\nconsole.log(even);\n// \u8F93\u51FA: [2, 4]\n"})}),"\n",(0,c.jsx)(n.h3,{id:"reduce\u5F52\u7EB3",children:"reduce\uFF08\u5F52\u7EB3\uFF09"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"reduce"}),"\u65B9\u6CD5\u5BF9\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u6267\u884C\u4E00\u4E2A\u5F52\u7EB3\u51FD\u6570\uFF0C\u6700\u7EC8\u6C47\u603B\u4E3A\u5355\u4E00\u7684\u503C\u3002\u5B83\u9002\u7528\u4E8E\u7D2F\u52A0\u3001\u7D2F\u4E58\u7B49\u64CD\u4F5C\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((accumulator, current) => accumulator + current, 0);\nconsole.log(sum);\n// \u8F93\u51FA: 15\n"})}),"\n",(0,c.jsx)(n.h3,{id:"reduceright\u53CD\u5411\u5F52\u7EB3",children:"reduceRight\uFF08\u53CD\u5411\u5F52\u7EB3\uFF09"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"reduceRight"}),"\u65B9\u6CD5\u4E0E",(0,c.jsx)(n.code,{children:"reduce"}),"\u7C7B\u4F3C\uFF0C\u4F46\u5B83\u4ECE\u6570\u7EC4\u7684\u672B\u5C3E\u5F00\u59CB\u5411\u524D\u904D\u5386\u3002\u8FD9\u5728\u67D0\u4E9B\u9700\u8981\u9006\u5E8F\u5904\u7406\u7684\u573A\u666F\u4E2D\u975E\u5E38\u6709\u7528\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const numbers = [1, 2, 3, 4, 5];\nconst sumReverse = numbers.reduceRight((accumulator, current) => accumulator + current, 0);\nconsole.log(sumReverse);\n// \u8F93\u51FA: 15\n"})}),"\n",(0,c.jsx)(n.h3,{id:"every\u6BCF\u4E2A",children:"every\uFF08\u6BCF\u4E2A\uFF09"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"every"}),"\u65B9\u6CD5\u68C0\u67E5\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5143\u7D20\u662F\u5426\u90FD\u6EE1\u8DB3\u6307\u5B9A\u7684\u6761\u4EF6\u3002\u53EA\u6709\u5F53\u6240\u6709\u5143\u7D20\u90FD\u901A\u8FC7\u6D4B\u8BD5\u65F6\uFF0C\u8FD4\u56DE",(0,c.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every((number) => number % 2 === 0);\nconsole.log(allEven);\n// \u8F93\u51FA: true\n"})}),"\n",(0,c.jsx)(n.h3,{id:"some\u90E8\u5206",children:"some\uFF08\u90E8\u5206\uFF09"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"some"}),"\u65B9\u6CD5\u68C0\u67E5\u6570\u7EC4\u4E2D\u662F\u5426\u81F3\u5C11\u6709\u4E00\u4E2A\u5143\u7D20\u6EE1\u8DB3\u6307\u5B9A\u7684\u6761\u4EF6\u3002\u53EA\u8981\u6709\u4E00\u4E2A\u5143\u7D20\u901A\u8FC7\u6D4B\u8BD5\uFF0C\u8FD4\u56DE",(0,c.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const numbers = [1, 3, 5, 6];\nconst hasEven = numbers.some((number) => number % 2 === 0);\nconsole.log(hasEven);\n// \u8F93\u51FA: true\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u8FED\u4EE3\u63A7\u5236\u7684\u9700\u6C42",children:"\u8FED\u4EE3\u63A7\u5236\u7684\u9700\u6C42"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E0C\u671B\u5728\u904D\u5386\u8FC7\u7A0B\u4E2D\u80FD\u591F\u624B\u52A8\u63A7\u5236\u8FED\u4EE3\u7684\u6D41\u7A0B\uFF0C\u4F8B\u5982\u6682\u505C\u6216\u505C\u6B62\u904D\u5386\u3002\u8FD9\u65F6\uFF0C\u4F20\u7EDF\u7684\u904D\u5386\u65B9\u6CD5\u53EF\u80FD\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\u3002\u4E3A\u6B64\uFF0CJavaScript \u63D0\u4F9B\u4E86\u751F\u6210\u5668\u548C\u8FED\u4EE3\u5668\uFF0C\u4F7F\u5F97\u904D\u5386\u8FC7\u7A0B\u66F4\u52A0\u7075\u6D3B\u548C\u53EF\u63A7\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8FED\u4EE3\u4E00\u4E2A\u6570\u7EC4",children:"\u8FED\u4EE3\u4E00\u4E2A\u6570\u7EC4"}),"\n",(0,c.jsxs)(n.p,{children:["\u751F\u6210\u5668\u51FD\u6570\uFF08",(0,c.jsx)(n.code,{children:"function *"}),"\uFF09\u80FD\u591F\u8FD4\u56DE\u4E00\u4E2A\u751F\u6210\u5668\u5BF9\u8C61\uFF0C\u4F7F\u5F97\u51FD\u6570\u7684\u6267\u884C\u53EF\u4EE5\u5206\u9636\u6BB5\u8FDB\u884C\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u63A7\u5236\u4F55\u65F6\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u6B65\u3002\u8FD9\u4E3A\u6570\u7EC4\u7684\u8FED\u4EE3\u63D0\u4F9B\u4E86\u66F4\u5927\u7684\u7075\u6D3B\u6027\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"function* generator() {\n  yield '\u59D3\u540D\uFF0C\u7D20\u660E\u8BDA';\n  yield '\u5E74\u9F84: 26';\n  yield '\u7231\u597D: \u65C5\u6E38';\n  return '\u559C\u6B22JavaScript';\n}\n\nconst iterator = generator();\nconsole.log(iterator.next()); // { value: '\u59D3\u540D\uFF0C\u7D20\u660E\u8BDA', done: false }\nconsole.log(iterator.next()); // { value: '\u5E74\u9F84: 26', done: false }\nconsole.log(iterator.next()); // { value: '\u7231\u597D: \u65C5\u6E38', done: false }\nconsole.log(iterator.next()); // { value: '\u559C\u6B22JavaScript', done: true }\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u51FD\u6570\u5199\u6CD5",children:"\u51FD\u6570\u5199\u6CD5"}),"\n",(0,c.jsx)(n.p,{children:"\u901A\u8FC7\u751F\u6210\u5668\u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u6570\u7EC4\u8FDB\u884C\u9010\u6B65\u8FED\u4EE3\uFF0C\u5141\u8BB8\u5728\u6BCF\u6B21\u8FED\u4EE3\u4E4B\u95F4\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u6216\u6761\u4EF6\u5224\u65AD\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const userInfo = ['\u59D3\u540D\uFF0C\u7D20\u660E\u8BDA', '\u5E74\u9F84: 26', '\u7231\u597D: \u65C5\u6E38'];\n\nfunction* generator(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    yield arr[i];\n  }\n  return '\u559C\u6B22JavaScript';\n}\n\nconst iterator = generator(userInfo);\nconsole.log(iterator.next()); // { value: '\u59D3\u540D\uFF0C\u7D20\u660E\u8BDA', done: false }\nconsole.log(iterator.next()); // { value: '\u5E74\u9F84: 26', done: false }\nconsole.log(iterator.next()); // { value: '\u7231\u597D: \u65C5\u6E38', done: false }\nconsole.log(iterator.next()); // { value: '\u559C\u6B22JavaScript', done: true }\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u751F\u6210\u5668",children:"\u751F\u6210\u5668"}),"\n",(0,c.jsxs)(n.p,{children:["\u751F\u6210\u5668\u901A\u8FC7",(0,c.jsx)(n.code,{children:"yield"}),"\u5173\u952E\u5B57\u63A7\u5236\u8FED\u4EE3\u8FC7\u7A0B\uFF0C\u4F7F\u5F97\u8C03\u7528\u8005\u53EF\u4EE5\u5728\u6BCF\u6B21",(0,c.jsx)(n.code,{children:"next"}),"\u8C03\u7528\u65F6\u51B3\u5B9A\u662F\u5426\u7EE7\u7EED\u6267\u884C\u3002\u8FD9\u79CD\u63A7\u5236\u65B9\u5F0F\u5728\u5904\u7406\u5F02\u6B65\u64CD\u4F5C\u6216\u9700\u8981\u4E2D\u65AD\u7684\u904D\u5386\u65F6\u5C24\u4E3A\u6709\u7528\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8FED\u4EE3\u5668",children:"\u8FED\u4EE3\u5668"}),"\n",(0,c.jsxs)(n.p,{children:["\u8FED\u4EE3\u5668\u662F\u751F\u6210\u5668\u51FD\u6570\u6267\u884C\u540E\u8FD4\u56DE\u7684\u5BF9\u8C61\uFF0C\u5177\u6709",(0,c.jsx)(n.code,{children:"next"}),"\u65B9\u6CD5\u3002\u6BCF\u6B21\u8C03\u7528",(0,c.jsx)(n.code,{children:"next"}),"\u65B9\u6CD5\u90FD\u4F1A\u6267\u884C\u751F\u6210\u5668\u51FD\u6570\u4E2D\u7684\u4E0B\u4E00\u6761",(0,c.jsx)(n.code,{children:"yield"}),"\u8BED\u53E5\uFF0C\u76F4\u5230\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5B9E\u73B0\u751F\u6210\u5668\u51FD\u6570",children:"\u5B9E\u73B0\u751F\u6210\u5668\u51FD\u6570"}),"\n",(0,c.jsxs)(n.p,{children:["\u9664\u4E86\u4F7F\u7528",(0,c.jsx)(n.code,{children:"function*"}),"\u8BED\u6CD5\uFF0C\u8FED\u4EE3\u5668\u8FD8\u53EF\u4EE5\u624B\u52A8\u5B9E\u73B0\uFF0C\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B",(0,c.jsx)(n.code,{children:"next"}),"\u65B9\u6CD5\u7684\u5BF9\u8C61\u6765\u63A7\u5236\u8FED\u4EE3\u8FC7\u7A0B\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const userInfo = ['\u59D3\u540D\uFF0C\u7D20\u660E\u8BDA', '\u5E74\u9F84: 26', '\u7231\u597D: \u65C5\u6E38'];\n\nfunction createIterator(arr) {\n  let nextIndex = 0;\n  return {\n    next: function () {\n      if (nextIndex < arr.length) {\n        return { value: arr[nextIndex++], done: false };\n      } else {\n        return { value: '\u559C\u6B22JavaScript', done: true };\n      }\n    },\n  };\n}\n\nconst iterator = createIterator(userInfo);\nconsole.log(iterator.next()); // { value: '\u59D3\u540D\uFF0C\u7D20\u660E\u8BDA', done: false }\nconsole.log(iterator.next()); // { value: '\u5E74\u9F84: 26', done: false }\nconsole.log(iterator.next()); // { value: '\u7231\u597D: \u65C5\u6E38', done: false }\nconsole.log(iterator.next()); // { value: '\u559C\u6B22JavaScript', done: true }\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var t=r(67294);let c={},o=t.createContext(c);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);