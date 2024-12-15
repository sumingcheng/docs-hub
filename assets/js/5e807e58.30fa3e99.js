"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["28523"],{54966:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165\u7814\u7A76data\u5C5E\u6027\u4EE5\u53CA\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0","title":"Data","description":"data \u5728 Vue \u5B9E\u4F8B\u4E2D\u626E\u6F14\u7740\u6838\u5FC3\u89D2\u8272\uFF0C\u8D1F\u8D23\u5B58\u50A8\u548C\u7BA1\u7406\u5E94\u7528\u7684\u72B6\u6001\u3002\u4EE5\u4E0B\u662F\u5173\u4E8E data \u7684\u5173\u952E\u8981\u70B9\uFF1A","source":"@site/docs/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/50.\u6DF1\u5165\u7814\u7A76data\u5C5E\u6027\u4EE5\u53CA\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0.md","sourceDirName":"Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027","slug":"/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165\u7814\u7A76data\u5C5E\u6027\u4EE5\u53CA\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0","permalink":"/docs-hub/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165\u7814\u7A76data\u5C5E\u6027\u4EE5\u53CA\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/50.\u6DF1\u5165\u7814\u7A76data\u5C5E\u6027\u4EE5\u53CA\u6570\u636E\u54CD\u5E94\u5F0F\u5B9E\u73B0.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":50,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"\u8BA1\u7B97\u5C5E\u6027","permalink":"/docs-hub/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165\u7814\u7A76\u8BA1\u7B97\u5C5E\u6027\u4EE5\u53CA\u5E94\u7528\u573A\u666F\u5206\u6790"},"next":{"title":"Methods","permalink":"/docs-hub/Frontend/Vue/Vue\u6838\u5FC3\u7279\u6027/\u6DF1\u5165methods\u5C5E\u6027\u4EE5\u53CA\u5B9E\u4F8B\u65B9\u6CD5\u6302\u8F7D\u5B9E\u73B0"}}'),s=d("85893"),r=d("50065");let c={},i="Data",a={},l=[{value:"\u4E24\u79CD <code>data</code> \u7684\u4F7F\u7528\u65B9\u5F0F",id:"\u4E24\u79CD-data-\u7684\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u4E3A\u4EC0\u4E48 <code>data</code> \u662F\u4E00\u4E2A\u51FD\u6570\uFF1F",id:"\u4E3A\u4EC0\u4E48-data-\u662F\u4E00\u4E2A\u51FD\u6570",level:2},{value:"<strong>defineGetter</strong> \u548C <strong>defineSetter</strong>",id:"definegetter-\u548C-definesetter",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"data",children:"Data"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"data"})," \u5728 Vue \u5B9E\u4F8B\u4E2D\u626E\u6F14\u7740\u6838\u5FC3\u89D2\u8272\uFF0C\u8D1F\u8D23\u5B58\u50A8\u548C\u7BA1\u7406\u5E94\u7528\u7684\u72B6\u6001\u3002\u4EE5\u4E0B\u662F\u5173\u4E8E ",(0,s.jsx)(n.code,{children:"data"})," \u7684\u5173\u952E\u8981\u70B9\uFF1A"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"data"})," \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\u3002\u5728\u521B\u5EFA Vue \u5B9E\u4F8B\u65F6\uFF0CVue \u4F1A\u8C03\u7528 ",(0,s.jsx)(n.code,{children:"data"})," \u51FD\u6570\u5E76\u8FD4\u56DE\u4E00\u4E2A\u6570\u636E\u5BF9\u8C61\u3002\u8FD9\u786E\u4FDD\u4E86\u6BCF\u4E2A\u5B9E\u4F8B\u90FD\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u6570\u636E\u526F\u672C\uFF0C\u907F\u514D\u4E86\u6570\u636E\u5171\u4EAB\u5E26\u6765\u7684\u6F5C\u5728\u95EE\u9898\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7\u54CD\u5E94\u5F0F\u5305\u88C5\uFF0C",(0,s.jsx)(n.code,{children:"data"})," \u4E2D\u7684\u5C5E\u6027\u88AB\u5B58\u50A8\u5728\u5B9E\u4F8B\u7684 ",(0,s.jsx)(n.code,{children:"$data"})," \u5BF9\u8C61\u4E2D\u3002\u8FD9\u6837\uFF0C\u5B9E\u4F8B\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u800C\u65E0\u9700\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"$data"})," \u8FDB\u884C\u4E2D\u4ECB\u3002\u4F8B\u5982\uFF0C",(0,s.jsx)(n.code,{children:"vm.title"})," \u76F4\u63A5\u8BBF\u95EE\u7684\u662F ",(0,s.jsx)(n.code,{children:"vm.$data.title"}),"\uFF0C\u4E24\u8005\u6548\u679C\u76F8\u540C\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u4E24\u79CD-data-\u7684\u4F7F\u7528\u65B9\u5F0F",children:["\u4E24\u79CD ",(0,s.jsx)(n.code,{children:"data"})," \u7684\u4F7F\u7528\u65B9\u5F0F"]}),"\n",(0,s.jsxs)(n.p,{children:["Vue \u63D0\u4F9B\u4E86\u4E24\u79CD\u8BBF\u95EE ",(0,s.jsx)(n.code,{children:"data"})," \u4E2D\u5C5E\u6027\u7684\u65B9\u5F0F\uFF1A"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$data"})," \u662F\u54CD\u5E94\u5F0F\u6570\u636E\u5BF9\u8C61\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\u4E0E ",(0,s.jsx)(n.code,{children:"data"})," \u4E2D\u7684\u5C5E\u6027\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u3002\u5982\u679C\u4E0D\u4E00\u81F4\uFF0CVue \u5728\u6E32\u67D3\u65F6\u4F1A\u62A5\u9519\u3002\u56E0\u6B64\uFF0C\u5F00\u53D1\u8005\u5E94\u5C3D\u91CF\u907F\u514D\u5728 ",(0,s.jsx)(n.code,{children:"data"})," \u4E2D\u4F7F\u7528\u4EE5 ",(0,s.jsx)(n.code,{children:"$"}),"\u3001",(0,s.jsx)(n.code,{children:"_"})," \u7B49\u524D\u7F00\u547D\u540D\u7684\u5C5E\u6027\uFF0C\u4EE5\u9632\u4E0E Vue \u7684\u5185\u7F6E API \u51B2\u7A81\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5B9E\u4F8B\u4E0A\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"this._"})," \u8FDB\u884C\u8BBF\u95EE\u3002\u8FD9\u79CD\u65B9\u5F0F\u5141\u8BB8\u6211\u4EEC\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"get"})," \u548C ",(0,s.jsx)(n.code,{children:"set"})," \u65B9\u6CD5\u6765\u8BBF\u95EE\u548C\u4FEE\u6539\u6570\u636E\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"vm.$data.title;\nvm.title;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4E24\u8005\u90FD\u53EF\u4EE5\u7528\u6765\u83B7\u53D6\u6216\u8BBE\u7F6E ",(0,s.jsx)(n.code,{children:"title"})," \u5C5E\u6027\u7684\u503C\uFF0C\u6548\u679C\u76F8\u540C\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u8BBF\u95EE\u65B9\u5F0F\u793A\u610F\u56FE",src:d(40327).Z+"",width:"427",height:"555"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u4E3A\u4EC0\u4E48-data-\u662F\u4E00\u4E2A\u51FD\u6570",children:["\u4E3A\u4EC0\u4E48 ",(0,s.jsx)(n.code,{children:"data"})," \u662F\u4E00\u4E2A\u51FD\u6570\uFF1F"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5C06 ",(0,s.jsx)(n.code,{children:"data"})," \u5B9A\u4E49\u4E3A\u51FD\u6570\u6709\u4EE5\u4E0B\u51E0\u4E2A\u539F\u56E0\uFF1A"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u786E\u4FDD\u6570\u636E\u7684\u72EC\u7ACB\u6027"}),"\uFF1A\u6BCF\u4E2A Vue \u5B9E\u4F8B\u5728\u521B\u5EFA\u65F6\u90FD\u4F1A\u8C03\u7528 ",(0,s.jsx)(n.code,{children:"data"})," \u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u5BF9\u8C61\u3002\u8FD9\u786E\u4FDD\u4E86\u6BCF\u4E2A\u5B9E\u4F8B\u7684\u6570\u636E\u662F\u72EC\u7ACB\u7684\uFF0C\u4E92\u4E0D\u5E72\u6270\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u907F\u514D\u6570\u636E\u5171\u4EAB"}),"\uFF1A\u5982\u679C ",(0,s.jsx)(n.code,{children:"data"})," \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u6240\u6709\u5B9E\u4F8B\u5C06\u5171\u4EAB\u540C\u4E00\u4E2A\u6570\u636E\u5F15\u7528\uFF0C\u8FD9\u53EF\u80FD\u5BFC\u81F4\u610F\u60F3\u4E0D\u5230\u7684\u526F\u4F5C\u7528\u3002\u901A\u8FC7\u4F7F\u7528\u51FD\u6570\u8FD4\u56DE\u72EC\u7ACB\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7B80\u5316\u6570\u636E\u7BA1\u7406"}),"\uFF1A\u5C3D\u7BA1\u53EF\u4EE5\u901A\u8FC7\u6DF1\u62F7\u8D1D\u6765\u786E\u4FDD ",(0,s.jsx)(n.code,{children:"data"})," \u5BF9\u8C61\u7684\u72EC\u7ACB\u6027\uFF0C\u4F46\u5C06 ",(0,s.jsx)(n.code,{children:"data"})," \u5B9A\u4E49\u4E3A\u51FD\u6570\u66F4\u52A0\u7B80\u6D01\u548C\u9AD8\u6548\uFF0C\u7B26\u5408 Vue \u7684\u8BBE\u8BA1\u7406\u5FF5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"data \u662F\u51FD\u6570\u793A\u610F\u56FE",src:d(4964).Z+"",width:"1415",height:"453"})}),"\n",(0,s.jsxs)(n.h2,{id:"definegetter-\u548C-definesetter",children:[(0,s.jsx)(n.strong,{children:"defineGetter"})," \u548C ",(0,s.jsx)(n.strong,{children:"defineSetter"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Vue \u4E2D\uFF0C\u6570\u636E\u7684\u54CD\u5E94\u5F0F\u5B9E\u73B0\u4F9D\u8D56\u4E8E ",(0,s.jsx)(n.code,{children:"Object.defineProperty"})," \u65B9\u6CD5\u3002\u7136\u800C\uFF0C\u4E3A\u4E86\u517C\u5BB9\u6027\uFF0CVue \u4E5F\u4F7F\u7528\u4E86 ",(0,s.jsx)(n.code,{children:"__defineGetter__"})," \u548C ",(0,s.jsx)(n.code,{children:"__defineSetter__"})," \u65B9\u6CD5\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5141\u8BB8\u6211\u4EEC\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"get"})," \u548C ",(0,s.jsx)(n.code,{children:"set"})," \u6765\u8BBF\u95EE\u548C\u4FEE\u6539\u6570\u636E\u5C5E\u6027\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// \u4F7F\u7528 Object.defineProperty \u5B9E\u73B0\u54CD\u5E94\u5F0F\nObject.defineProperty(_this, k, {\n  get: function () {\n    return _this.$data[k];\n  },\n  set: function (newValue) {\n    _this.$data[k] = newValue;\n  },\n});\n\n// \u4F7F\u7528 __defineGetter__ \u548C __defineSetter__ \u5B9E\u73B0\u54CD\u5E94\u5F0F\n_this.__defineGetter__(k, function () {\n  return _this.$data[k];\n});\n\n_this.__defineSetter__(k, function (newValue) {\n  _this.$data[k] = newValue;\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u79CD\u65B9\u6CD5\u786E\u4FDD\u4E86\u5F53\u6570\u636E\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u89C6\u56FE\u80FD\u591F\u81EA\u52A8\u66F4\u65B0\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6570\u636E\u4E0E\u89C6\u56FE\u7684\u53CC\u5411\u7ED1\u5B9A\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"data"})," \u65F6\uFF0C\u9075\u5FAA\u4EE5\u4E0B\u6700\u4F73\u5B9E\u8DF5\u53EF\u4EE5\u63D0\u5347\u4EE3\u7801\u7684\u53EF\u7EF4\u62A4\u6027\u548C\u6027\u80FD\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u907F\u514D\u4F7F\u7528\u4FDD\u7559\u524D\u7F00"}),"\uFF1A\u4E0D\u8981\u5728 ",(0,s.jsx)(n.code,{children:"data"})," \u5C5E\u6027\u540D\u4E2D\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"$"}),"\u3001",(0,s.jsx)(n.code,{children:"_"})," \u7B49\u524D\u7F00\uFF0C\u4EE5\u514D\u4E0E Vue \u7684\u5185\u7F6E\u5C5E\u6027\u548C\u65B9\u6CD5\u53D1\u751F\u51B2\u7A81\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4FDD\u6301\u6570\u636E\u7B80\u5355"}),"\uFF1A\u5C3D\u91CF\u4FDD\u6301 ",(0,s.jsx)(n.code,{children:"data"})," \u4E2D\u7684\u6570\u636E\u7ED3\u6784\u7B80\u5355\uFF0C\u907F\u514D\u5D4C\u5957\u8FC7\u6DF1\uFF0C\u4EE5\u4FBF\u66F4\u5BB9\u6613\u8FDB\u884C\u7BA1\u7406\u548C\u8C03\u8BD5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u63CF\u8FF0\u6027\u53D8\u91CF\u540D"}),"\uFF1A\u9009\u62E9\u5177\u6709\u63CF\u8FF0\u6027\u7684\u53D8\u91CF\u540D\uFF0C\u4F7F\u4EE3\u7801\u66F4\u5177\u53EF\u8BFB\u6027\u3002\u4F8B\u5982\uFF0C\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"userName"})," \u800C\u4E0D\u662F ",(0,s.jsx)(n.code,{children:"name1"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u521D\u59CB\u5316\u6240\u6709\u5C5E\u6027"}),"\uFF1A\u5728 ",(0,s.jsx)(n.code,{children:"data"})," \u4E2D\u521D\u59CB\u5316\u6240\u6709\u9700\u8981\u7684\u5C5E\u6027\uFF0C\u5373\u4F7F\u5B83\u4EEC\u6682\u65F6\u6CA1\u6709\u503C\u3002\u8FD9\u6709\u52A9\u4E8E\u907F\u514D\u5728\u540E\u7EED\u5F00\u53D1\u4E2D\u51FA\u73B0\u672A\u5B9A\u4E49\u7684\u5C5E\u6027\u9519\u8BEF\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7\u5408\u7406\u5730\u8BBE\u8BA1\u548C\u7BA1\u7406 ",(0,s.jsx)(n.code,{children:"data"}),"\uFF0C\u53EF\u4EE5\u786E\u4FDD Vue \u5E94\u7528\u7684\u7A33\u5B9A\u6027\u548C\u53EF\u6269\u5C55\u6027\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},4964:function(e,n,d){d.d(n,{Z:function(){return t}});let t=d.p+"assets/images/26ea7ab633c1227b0208fbbd2014f188-0af27bd2225d2d2a1364483600c1b41b.png"},40327:function(e,n,d){d.d(n,{Z:function(){return t}});let t=d.p+"assets/images/e8a47d2d54a50e393ff75b34bfc6311e-ca2c0ed39b468b7b134fcb670909c874.png"},50065:function(e,n,d){d.d(n,{Z:function(){return i},a:function(){return c}});var t=d(67294);let s={},r=t.createContext(s);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);