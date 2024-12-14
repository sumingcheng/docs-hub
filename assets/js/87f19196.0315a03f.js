"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["34800"],{82472:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>c,assets:()=>d,toc:()=>i,contentTitle:()=>s});var c=JSON.parse('{"id":"Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5","title":"\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5","description":"\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5","source":"@site/docs/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/20.\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5.md","sourceDirName":"Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5","slug":"/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5","permalink":"/docs-hub/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/20.\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":20,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u6570\u7EC4\u6241\u5E73\u5316\u4E0E\u53BB\u91CD\u5B9E\u73B0","permalink":"/docs-hub/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/\u6570\u7EC4\u6241\u5E73\u5316\u4E0E\u53BB\u91CD\u5B9E\u73B0"},"next":{"title":"every\u3001some\u3001reduce \u548C reduceRight","permalink":"/docs-hub/Frontend/JavaScript/\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5/every-some-reduce-reduceRight\u4F7F\u7528\u4E0E\u91CD\u5199"}}'),t=r("85893"),l=r("50065");let a={},s=void 0,d={},i=[{value:"\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5",id:"\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5",level:2},{value:"\u4EE3\u7801\u89E3\u6790",id:"\u4EE3\u7801\u89E3\u6790",level:3},{value:"\u5B9E\u6218\u793A\u4F8B",id:"\u5B9E\u6218\u793A\u4F8B",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:3},{value:"\u4F7F\u7528 <code>reduce</code> \u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316",id:"\u4F7F\u7528-reduce-\u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316",level:2},{value:"\u4EE3\u7801\u89E3\u6790",id:"\u4EE3\u7801\u89E3\u6790-1",level:3},{value:"\u5B9E\u6218\u793A\u4F8B",id:"\u5B9E\u6218\u793A\u4F8B-1",level:3},{value:"\u4F18\u7F3A\u70B9\u5206\u6790",id:"\u4F18\u7F3A\u70B9\u5206\u6790",level:3},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5",children:"\u6570\u7EC4\u6269\u5C55\u65B9\u6CD5"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 JavaScript \u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6269\u5C55 ",(0,t.jsx)(n.code,{children:"Array.prototype"})," \u6765\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684\u6570\u7EC4\u6241\u5E73\u5316\u65B9\u6CD5\u3002\u8FD9\u79CD\u65B9\u6CD5\u5141\u8BB8\u6240\u6709\u6570\u7EC4\u5B9E\u4F8B\u76F4\u63A5\u8C03\u7528 ",(0,t.jsx)(n.code,{children:"flatten"})," \u65B9\u6CD5\uFF0C\u5B9E\u73B0\u6570\u7EC4\u7684\u964D\u7EF4\u64CD\u4F5C\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, , 2, [3, , 4, [5, 6], 7], 8, 9];\n\nArray.prototype.flatten = function () {\n  const array = this;\n  const toString = Object.prototype.toString;\n\n  if (toString.call(array) !== '[object Array]') {\n    throw new Error('\u53EA\u6709\u6570\u7EC4\u53EF\u4EE5\u4F7F\u7528\u8BE5\u65B9\u6CD5');\n  }\n\n  let flattenedArray = [];\n\n  array.forEach(function (elem) {\n    if (toString.call(elem) === '[object Array]') {\n      flattenedArray = flattenedArray.concat(elem.flatten());\n    } else {\n      flattenedArray.push(elem);\n    }\n  });\n\n  return flattenedArray;\n};\n\nconsole.log(arr.flatten());\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4EE3\u7801\u89E3\u6790",children:"\u4EE3\u7801\u89E3\u6790"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. \u6269\u5C55 ",(0,t.jsx)(n.code,{children:"Array.prototype"})]})}),"\n",(0,t.jsxs)(n.p,{children:["\u901A\u8FC7\u5728 ",(0,t.jsx)(n.code,{children:"Array.prototype"})," \u4E0A\u6DFB\u52A0 ",(0,t.jsx)(n.code,{children:"flatten"})," \u65B9\u6CD5\uFF0C\u4F7F\u5F97\u6240\u6709\u6570\u7EC4\u5B9E\u4F8B\u90FD\u80FD\u8C03\u7528\u8BE5\u65B9\u6CD5\u3002\u8FD9\u79CD\u65B9\u6CD5\u7684\u4F18\u52BF\u5728\u4E8E\u5176\u901A\u7528\u6027\u548C\u4FBF\u6377\u6027\uFF0C\u4F46\u9700\u8C28\u614E\u4F7F\u7528\u4EE5\u907F\u514D\u4E0E\u5176\u4ED6\u5E93\u6216\u672A\u6765\u7684 JavaScript \u6807\u51C6\u65B9\u6CD5\u51B2\u7A81\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"2. \u7C7B\u578B\u68C0\u67E5"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u65B9\u6CD5\u5185\u90E8\uFF0C\u9996\u5148\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Object.prototype.toString"})," \u6765\u68C0\u67E5\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u5BF9\u8C61\u662F\u5426\u4E3A\u6570\u7EC4\u3002\u5982\u679C\u4E0D\u662F\u6570\u7EC4\uFF0C\u5219\u629B\u51FA\u9519\u8BEF\uFF0C\u786E\u4FDD\u65B9\u6CD5\u7684\u6B63\u786E\u4F7F\u7528\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"if (toString.call(array) !== '[object Array]') {\n  throw new Error('\u53EA\u6709\u6570\u7EC4\u53EF\u4EE5\u4F7F\u7528\u8BE5\u65B9\u6CD5');\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"3. \u9012\u5F52\u6241\u5E73\u5316"})}),"\n",(0,t.jsxs)(n.p,{children:["\u904D\u5386\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\uFF0C\u5982\u679C\u5143\u7D20\u662F\u6570\u7EC4\uFF0C\u5219\u9012\u5F52\u8C03\u7528 ",(0,t.jsx)(n.code,{children:"flatten"})," \u65B9\u6CD5\uFF0C\u5C06\u5176\u7ED3\u679C\u4E0E ",(0,t.jsx)(n.code,{children:"flattenedArray"})," \u5408\u5E76\uFF1B\u5426\u5219\uFF0C\u5C06\u5143\u7D20\u76F4\u63A5\u63A8\u5165 ",(0,t.jsx)(n.code,{children:"flattenedArray"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"array.forEach(function (elem) {\n  if (toString.call(elem) === '[object Array]') {\n    flattenedArray = flattenedArray.concat(elem.flatten());\n  } else {\n    flattenedArray.push(elem);\n  }\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"4. \u7ED3\u679C\u8FD4\u56DE"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7EC8\uFF0C\u8FD4\u56DE\u6241\u5E73\u5316\u540E\u7684\u6570\u7EC4\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"return flattenedArray;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5B9E\u6218\u793A\u4F8B",children:"\u5B9E\u6218\u793A\u4F8B"}),"\n",(0,t.jsx)(n.p,{children:"\u8003\u8651\u4EE5\u4E0B\u5D4C\u5957\u6570\u7EC4\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, , 2, [3, , 4, [5, 6], 7], 8, 9];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8C03\u7528 ",(0,t.jsx)(n.code,{children:"flatten"})," \u65B9\u6CD5\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[1, 2, 3, 4, 5, 6, 7, 8, 9]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u6027\u80FD\u8003\u8651"}),"\uFF1A\u6269\u5C55\u539F\u751F\u5BF9\u8C61\u7684\u539F\u578B\u53EF\u80FD\u4F1A\u5F71\u54CD\u6027\u80FD\uFF0C\u5C24\u5176\u662F\u5728\u5927\u578B\u9879\u76EE\u4E2D\u3002\u5EFA\u8BAE\u5728\u5FC5\u8981\u65F6\u4F7F\u7528\uFF0C\u5E76\u907F\u514D\u547D\u540D\u51B2\u7A81\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7A7A\u5143\u7D20\u5904\u7406"}),"\uFF1A\u5728\u793A\u4F8B\u6570\u7EC4\u4E2D\u5B58\u5728\u7A7A\u5143\u7D20\uFF08\u5982 ",(0,t.jsx)(n.code,{children:"[1, , 2]"}),"\uFF09\uFF0C\u5728\u6241\u5E73\u5316\u8FC7\u7A0B\u4E2D\u8FD9\u4E9B\u7A7A\u5143\u7D20\u4F1A\u88AB\u5FFD\u7565\u3002\u5982\u679C\u9700\u8981\u4FDD\u7559\u7A7A\u4F4D\uFF0C\u53EF\u4EE5\u8C03\u6574 ",(0,t.jsx)(n.code,{children:"flatten"})," \u65B9\u6CD5\u7684\u5B9E\u73B0\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"\u4F7F\u7528-reduce-\u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316",children:["\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"reduce"})," \u5B9E\u73B0\u6570\u7EC4\u6241\u5E73\u5316"]}),"\n",(0,t.jsxs)(n.p,{children:["\u9664\u4E86\u6269\u5C55\u539F\u578B\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"Array.prototype.reduce"})," \u65B9\u6CD5\u6765\u5B9E\u73B0\u6570\u7EC4\u7684\u6241\u5E73\u5316\u3002",(0,t.jsx)(n.code,{children:"reduce"})," \u63D0\u4F9B\u4E86\u4E00\u79CD\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u65B9\u5F0F\uFF0C\u80FD\u591F\u7B80\u6D01\u5730\u5904\u7406\u6570\u7EC4\u64CD\u4F5C\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, , 2, [3, , 4, [5, 6], 7], 8, 9];\n\nArray.prototype.flatten = function () {\n  const array = this;\n  const toString = Object.prototype.toString;\n\n  if (toString.call(array) !== '[object Array]') {\n    throw new Error('\u53EA\u6709\u6570\u7EC4\u53EF\u4EE5\u4F7F\u7528\u8BE5\u65B9\u6CD5');\n  }\n\n  return array.reduce(function (accumulator, elem) {\n    if (toString.call(elem) === '[object Array]') {\n      return accumulator.concat(elem.flatten());\n    } else {\n      return accumulator.concat(elem);\n    }\n  }, []);\n};\n\nconsole.log(arr.flatten());\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4EE3\u7801\u89E3\u6790-1",children:"\u4EE3\u7801\u89E3\u6790"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. \u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"reduce"})," \u65B9\u6CD5"]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"reduce"})," \u65B9\u6CD5\u901A\u8FC7\u7D2F\u52A0\u5668 ",(0,t.jsx)(n.code,{children:"accumulator"})," \u548C\u5F53\u524D\u5143\u7D20 ",(0,t.jsx)(n.code,{children:"elem"})," \u6765\u9010\u6B65\u6784\u5EFA\u6700\u7EC8\u7684\u6241\u5E73\u5316\u6570\u7EC4\u3002\u521D\u59CB\u503C\u4E3A\u4E00\u4E2A\u7A7A\u6570\u7EC4 ",(0,t.jsx)(n.code,{children:"[]"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"return array.reduce(function (accumulator, elem) {\n  if (toString.call(elem) === '[object Array]') {\n    return accumulator.concat(elem.flatten());\n  } else {\n    return accumulator.concat(elem);\n  }\n}, []);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. \u9012\u5F52\u8C03\u7528 ",(0,t.jsx)(n.code,{children:"flatten"})]})}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53\u9047\u5230\u5D4C\u5957\u6570\u7EC4\u65F6\uFF0C\u9012\u5F52\u8C03\u7528 ",(0,t.jsx)(n.code,{children:"flatten"})," \u65B9\u6CD5\uFF0C\u5C06\u5176\u6241\u5E73\u5316\u540E\u4E0E\u7D2F\u52A0\u5668\u5408\u5E76\u3002\u5426\u5219\uFF0C\u76F4\u63A5\u5C06\u5143\u7D20\u6DFB\u52A0\u5230\u7D2F\u52A0\u5668\u4E2D\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5B9E\u6218\u793A\u4F8B-1",children:"\u5B9E\u6218\u793A\u4F8B"}),"\n",(0,t.jsx)(n.p,{children:"\u5BF9\u4E8E\u76F8\u540C\u7684\u5D4C\u5957\u6570\u7EC4\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, , 2, [3, , 4, [5, 6], 7], 8, 9];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8C03\u7528 ",(0,t.jsx)(n.code,{children:"flatten"})," \u65B9\u6CD5\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u540C\u6837\u4E3A\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[1, 2, 3, 4, 5, 6, 7, 8, 9]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4F18\u7F3A\u70B9\u5206\u6790",children:"\u4F18\u7F3A\u70B9\u5206\u6790"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4F18\u70B9"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7B80\u6D01\u6027"}),"\uFF1A\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"reduce"})," \u53EF\u4EE5\u4F7F\u4EE3\u7801\u66F4\u52A0\u7B80\u6D01\uFF0C\u51CF\u5C11\u663E\u5F0F\u7684\u5FAA\u73AF\u7ED3\u6784\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u51FD\u6570\u5F0F\u7F16\u7A0B"}),"\uFF1A\u7B26\u5408\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u8303\u5F0F\uFF0C\u4FBF\u4E8E\u94FE\u5F0F\u8C03\u7528\u548C\u7EC4\u5408\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7F3A\u70B9"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u6027\u80FD"}),"\uFF1A\u5728\u5904\u7406\u975E\u5E38\u5927\u7684\u6570\u7EC4\u65F6\uFF0C\u9012\u5F52\u8C03\u7528\u53EF\u80FD\u5BFC\u81F4\u6808\u6EA2\u51FA\u6216\u6027\u80FD\u95EE\u9898\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u53EF\u8BFB\u6027"}),"\uFF1A\u5BF9\u4E8E\u4E0D\u719F\u6089 ",(0,t.jsx)(n.code,{children:"reduce"})," \u65B9\u6CD5\u7684\u5F00\u53D1\u8005\uFF0C\u7406\u89E3\u9012\u5F52\u7684 ",(0,t.jsx)(n.code,{children:"reduce"})," \u5B9E\u73B0\u53EF\u80FD\u8F83\u4E3A\u56F0\u96BE\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u9009\u62E9\u5408\u9002\u7684\u65B9\u6CD5"}),"\uFF1A\u6839\u636E\u9879\u76EE\u9700\u6C42\u548C\u56E2\u961F\u7684\u719F\u6089\u7A0B\u5EA6\uFF0C\u9009\u62E9\u9002\u5408\u7684\u6570\u7EC4\u6241\u5E73\u5316\u65B9\u6CD5\u3002\u5BF9\u4E8E\u7B80\u5355\u573A\u666F\uFF0C\u9012\u5F52\u65B9\u6CD5\u76F4\u89C2\u6613\u61C2\uFF1B\u5BF9\u4E8E\u590D\u6742\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"reduce"})," \u63D0\u9AD8\u4EE3\u7801\u7684\u51FD\u6570\u5F0F\u98CE\u683C\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u907F\u514D\u6269\u5C55\u539F\u578B"}),"\uFF1A\u5C3D\u91CF\u907F\u514D\u6269\u5C55\u539F\u751F\u5BF9\u8C61\u7684\u539F\u578B\uFF0C\u4EE5\u9632\u6B62\u6F5C\u5728\u7684\u547D\u540D\u51B2\u7A81\u548C\u6027\u80FD\u95EE\u9898\u3002\u53EF\u4EE5\u5C06 ",(0,t.jsx)(n.code,{children:"flatten"})," \u65B9\u6CD5\u4F5C\u4E3A\u72EC\u7ACB\u7684\u5DE5\u5177\u51FD\u6570\u5B9E\u73B0\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function flatten(array) {\n  const toString = Object.prototype.toString;\n\n  if (toString.call(array) !== '[object Array]') {\n    throw new Error('\u53EA\u6709\u6570\u7EC4\u53EF\u4EE5\u4F7F\u7528\u8BE5\u65B9\u6CD5');\n  }\n\n  return array.reduce(function (accumulator, elem) {\n    if (toString.call(elem) === '[object Array]') {\n      return accumulator.concat(flatten(elem));\n    } else {\n      return accumulator.concat(elem);\n    }\n  }, []);\n}\n\nconst arr = [1, , 2, [3, , 4, [5, 6], 7], 8, 9];\nconst flattenedArr = flatten(arr);\nconsole.log(flattenedArr);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u907F\u514D\u4FEE\u6539\u539F\u751F\u5BF9\u8C61\uFF0C\u540C\u65F6\u4FDD\u6301\u4EE3\u7801\u7684\u7075\u6D3B\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return a}});var c=r(67294);let t={},l=c.createContext(t);function a(e){let n=c.useContext(l);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);