"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[34830],{57895:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Frontend/Vue/Vue\u6838\u5fc3\u7279\u6027/\u6df1\u5165\u7814\u7a76data\u5c5e\u6027\u4ee5\u53ca\u6570\u636e\u54cd\u5e94\u5f0f\u5b9e\u73b0","title":"Data","description":"data \u5728 Vue \u5b9e\u4f8b\u4e2d\u626e\u6f14\u7740\u6838\u5fc3\u89d2\u8272\uff0c\u8d1f\u8d23\u5b58\u50a8\u548c\u7ba1\u7406\u5e94\u7528\u7684\u72b6\u6001\u3002\u4ee5\u4e0b\u662f\u5173\u4e8e data \u7684\u5173\u952e\u8981\u70b9\uff1a","source":"@site/docs/Frontend/Vue/Vue\u6838\u5fc3\u7279\u6027/50.\u6df1\u5165\u7814\u7a76data\u5c5e\u6027\u4ee5\u53ca\u6570\u636e\u54cd\u5e94\u5f0f\u5b9e\u73b0.md","sourceDirName":"Frontend/Vue/Vue\u6838\u5fc3\u7279\u6027","slug":"/Frontend/Vue/Vue\u6838\u5fc3\u7279\u6027/\u6df1\u5165\u7814\u7a76data\u5c5e\u6027\u4ee5\u53ca\u6570\u636e\u54cd\u5e94\u5f0f\u5b9e\u73b0","permalink":"/docs-hub/docs/Frontend/Vue/Vue\u6838\u5fc3\u7279\u6027/\u6df1\u5165\u7814\u7a76data\u5c5e\u6027\u4ee5\u53ca\u6570\u636e\u54cd\u5e94\u5f0f\u5b9e\u73b0","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Vue/Vue\u6838\u5fc3\u7279\u6027/50.\u6df1\u5165\u7814\u7a76data\u5c5e\u6027\u4ee5\u53ca\u6570\u636e\u54cd\u5e94\u5f0f\u5b9e\u73b0.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":50,"frontMatter":{},"sidebar":"vueSidebar","previous":{"title":"\u8ba1\u7b97\u5c5e\u6027","permalink":"/docs-hub/docs/Frontend/Vue/Vue\u6838\u5fc3\u7279\u6027/\u6df1\u5165\u7814\u7a76\u8ba1\u7b97\u5c5e\u6027\u4ee5\u53ca\u5e94\u7528\u573a\u666f\u5206\u6790"},"next":{"title":"Methods","permalink":"/docs-hub/docs/Frontend/Vue/Vue\u6838\u5fc3\u7279\u6027/\u6df1\u5165methods\u5c5e\u6027\u4ee5\u53ca\u5b9e\u4f8b\u65b9\u6cd5\u6302\u8f7d\u5b9e\u73b0"}}');var s=d(74848),c=d(28453);const r={},i="Data",a={},l=[{value:"\u4e24\u79cd <code>data</code> \u7684\u4f7f\u7528\u65b9\u5f0f",id:"\u4e24\u79cd-data-\u7684\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u4e3a\u4ec0\u4e48 <code>data</code> \u662f\u4e00\u4e2a\u51fd\u6570\uff1f",id:"\u4e3a\u4ec0\u4e48-data-\u662f\u4e00\u4e2a\u51fd\u6570",level:2},{value:"<strong>defineGetter</strong> \u548c <strong>defineSetter</strong>",id:"definegetter-\u548c-definesetter",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"data",children:"Data"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"data"})," \u5728 Vue \u5b9e\u4f8b\u4e2d\u626e\u6f14\u7740\u6838\u5fc3\u89d2\u8272\uff0c\u8d1f\u8d23\u5b58\u50a8\u548c\u7ba1\u7406\u5e94\u7528\u7684\u72b6\u6001\u3002\u4ee5\u4e0b\u662f\u5173\u4e8e ",(0,s.jsx)(n.code,{children:"data"})," \u7684\u5173\u952e\u8981\u70b9\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"data"})," \u5fc5\u987b\u662f\u4e00\u4e2a\u51fd\u6570\u3002\u5728\u521b\u5efa Vue \u5b9e\u4f8b\u65f6\uff0cVue \u4f1a\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"data"})," \u51fd\u6570\u5e76\u8fd4\u56de\u4e00\u4e2a\u6570\u636e\u5bf9\u8c61\u3002\u8fd9\u786e\u4fdd\u4e86\u6bcf\u4e2a\u5b9e\u4f8b\u90fd\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u6570\u636e\u526f\u672c\uff0c\u907f\u514d\u4e86\u6570\u636e\u5171\u4eab\u5e26\u6765\u7684\u6f5c\u5728\u95ee\u9898\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u54cd\u5e94\u5f0f\u5305\u88c5\uff0c",(0,s.jsx)(n.code,{children:"data"})," \u4e2d\u7684\u5c5e\u6027\u88ab\u5b58\u50a8\u5728\u5b9e\u4f8b\u7684 ",(0,s.jsx)(n.code,{children:"$data"})," \u5bf9\u8c61\u4e2d\u3002\u8fd9\u6837\uff0c\u5b9e\u4f8b\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u8fd9\u4e9b\u5c5e\u6027\uff0c\u800c\u65e0\u9700\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"$data"})," \u8fdb\u884c\u4e2d\u4ecb\u3002\u4f8b\u5982\uff0c",(0,s.jsx)(n.code,{children:"vm.title"})," \u76f4\u63a5\u8bbf\u95ee\u7684\u662f ",(0,s.jsx)(n.code,{children:"vm.$data.title"}),"\uff0c\u4e24\u8005\u6548\u679c\u76f8\u540c\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u4e24\u79cd-data-\u7684\u4f7f\u7528\u65b9\u5f0f",children:["\u4e24\u79cd ",(0,s.jsx)(n.code,{children:"data"})," \u7684\u4f7f\u7528\u65b9\u5f0f"]}),"\n",(0,s.jsxs)(n.p,{children:["Vue \u63d0\u4f9b\u4e86\u4e24\u79cd\u8bbf\u95ee ",(0,s.jsx)(n.code,{children:"data"})," \u4e2d\u5c5e\u6027\u7684\u65b9\u5f0f\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$data"})," \u662f\u54cd\u5e94\u5f0f\u6570\u636e\u5bf9\u8c61\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5b9e\u4f8b\u4e0a\u7684\u5c5e\u6027\u4e0e ",(0,s.jsx)(n.code,{children:"data"})," \u4e2d\u7684\u5c5e\u6027\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u3002\u5982\u679c\u4e0d\u4e00\u81f4\uff0cVue \u5728\u6e32\u67d3\u65f6\u4f1a\u62a5\u9519\u3002\u56e0\u6b64\uff0c\u5f00\u53d1\u8005\u5e94\u5c3d\u91cf\u907f\u514d\u5728 ",(0,s.jsx)(n.code,{children:"data"})," \u4e2d\u4f7f\u7528\u4ee5 ",(0,s.jsx)(n.code,{children:"$"}),"\u3001",(0,s.jsx)(n.code,{children:"_"})," \u7b49\u524d\u7f00\u547d\u540d\u7684\u5c5e\u6027\uff0c\u4ee5\u9632\u4e0e Vue \u7684\u5185\u7f6e API \u51b2\u7a81\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5b9e\u4f8b\u4e0a\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"this._"})," \u8fdb\u884c\u8bbf\u95ee\u3002\u8fd9\u79cd\u65b9\u5f0f\u5141\u8bb8\u6211\u4eec\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"get"})," \u548c ",(0,s.jsx)(n.code,{children:"set"})," \u65b9\u6cd5\u6765\u8bbf\u95ee\u548c\u4fee\u6539\u6570\u636e\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"vm.$data.title;\nvm.title;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e24\u8005\u90fd\u53ef\u4ee5\u7528\u6765\u83b7\u53d6\u6216\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"title"})," \u5c5e\u6027\u7684\u503c\uff0c\u6548\u679c\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u8bbf\u95ee\u65b9\u5f0f\u793a\u610f\u56fe",src:d(71048).A+"",width:"427",height:"555"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u4e3a\u4ec0\u4e48-data-\u662f\u4e00\u4e2a\u51fd\u6570",children:["\u4e3a\u4ec0\u4e48 ",(0,s.jsx)(n.code,{children:"data"})," \u662f\u4e00\u4e2a\u51fd\u6570\uff1f"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06 ",(0,s.jsx)(n.code,{children:"data"})," \u5b9a\u4e49\u4e3a\u51fd\u6570\u6709\u4ee5\u4e0b\u51e0\u4e2a\u539f\u56e0\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u786e\u4fdd\u6570\u636e\u7684\u72ec\u7acb\u6027"}),"\uff1a\u6bcf\u4e2a Vue \u5b9e\u4f8b\u5728\u521b\u5efa\u65f6\u90fd\u4f1a\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"data"})," \u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u5bf9\u8c61\u3002\u8fd9\u786e\u4fdd\u4e86\u6bcf\u4e2a\u5b9e\u4f8b\u7684\u6570\u636e\u662f\u72ec\u7acb\u7684\uff0c\u4e92\u4e0d\u5e72\u6270\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u907f\u514d\u6570\u636e\u5171\u4eab"}),"\uff1a\u5982\u679c ",(0,s.jsx)(n.code,{children:"data"})," \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u6240\u6709\u5b9e\u4f8b\u5c06\u5171\u4eab\u540c\u4e00\u4e2a\u6570\u636e\u5f15\u7528\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u610f\u60f3\u4e0d\u5230\u7684\u526f\u4f5c\u7528\u3002\u901a\u8fc7\u4f7f\u7528\u51fd\u6570\u8fd4\u56de\u72ec\u7acb\u7684\u6570\u636e\u5bf9\u8c61\uff0c\u53ef\u4ee5\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7b80\u5316\u6570\u636e\u7ba1\u7406"}),"\uff1a\u5c3d\u7ba1\u53ef\u4ee5\u901a\u8fc7\u6df1\u62f7\u8d1d\u6765\u786e\u4fdd ",(0,s.jsx)(n.code,{children:"data"})," \u5bf9\u8c61\u7684\u72ec\u7acb\u6027\uff0c\u4f46\u5c06 ",(0,s.jsx)(n.code,{children:"data"})," \u5b9a\u4e49\u4e3a\u51fd\u6570\u66f4\u52a0\u7b80\u6d01\u548c\u9ad8\u6548\uff0c\u7b26\u5408 Vue \u7684\u8bbe\u8ba1\u7406\u5ff5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"data \u662f\u51fd\u6570\u793a\u610f\u56fe",src:d(70949).A+"",width:"1415",height:"453"})}),"\n",(0,s.jsxs)(n.h2,{id:"definegetter-\u548c-definesetter",children:[(0,s.jsx)(n.strong,{children:"defineGetter"})," \u548c ",(0,s.jsx)(n.strong,{children:"defineSetter"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Vue \u4e2d\uff0c\u6570\u636e\u7684\u54cd\u5e94\u5f0f\u5b9e\u73b0\u4f9d\u8d56\u4e8e ",(0,s.jsx)(n.code,{children:"Object.defineProperty"})," \u65b9\u6cd5\u3002\u7136\u800c\uff0c\u4e3a\u4e86\u517c\u5bb9\u6027\uff0cVue \u4e5f\u4f7f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"__defineGetter__"})," \u548c ",(0,s.jsx)(n.code,{children:"__defineSetter__"})," \u65b9\u6cd5\u3002\u8fd9\u4e9b\u65b9\u6cd5\u5141\u8bb8\u6211\u4eec\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"get"})," \u548c ",(0,s.jsx)(n.code,{children:"set"})," \u6765\u8bbf\u95ee\u548c\u4fee\u6539\u6570\u636e\u5c5e\u6027\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// \u4f7f\u7528 Object.defineProperty \u5b9e\u73b0\u54cd\u5e94\u5f0f\nObject.defineProperty(_this, k, {\n  get: function () {\n    return _this.$data[k];\n  },\n  set: function (newValue) {\n    _this.$data[k] = newValue;\n  },\n});\n\n// \u4f7f\u7528 __defineGetter__ \u548c __defineSetter__ \u5b9e\u73b0\u54cd\u5e94\u5f0f\n_this.__defineGetter__(k, function () {\n  return _this.$data[k];\n});\n\n_this.__defineSetter__(k, function (newValue) {\n  _this.$data[k] = newValue;\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u79cd\u65b9\u6cd5\u786e\u4fdd\u4e86\u5f53\u6570\u636e\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u89c6\u56fe\u80fd\u591f\u81ea\u52a8\u66f4\u65b0\uff0c\u4ece\u800c\u5b9e\u73b0\u6570\u636e\u4e0e\u89c6\u56fe\u7684\u53cc\u5411\u7ed1\u5b9a\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"data"})," \u65f6\uff0c\u9075\u5faa\u4ee5\u4e0b\u6700\u4f73\u5b9e\u8df5\u53ef\u4ee5\u63d0\u5347\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u548c\u6027\u80fd\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u907f\u514d\u4f7f\u7528\u4fdd\u7559\u524d\u7f00"}),"\uff1a\u4e0d\u8981\u5728 ",(0,s.jsx)(n.code,{children:"data"})," \u5c5e\u6027\u540d\u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"$"}),"\u3001",(0,s.jsx)(n.code,{children:"_"})," \u7b49\u524d\u7f00\uff0c\u4ee5\u514d\u4e0e Vue \u7684\u5185\u7f6e\u5c5e\u6027\u548c\u65b9\u6cd5\u53d1\u751f\u51b2\u7a81\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4fdd\u6301\u6570\u636e\u7b80\u5355"}),"\uff1a\u5c3d\u91cf\u4fdd\u6301 ",(0,s.jsx)(n.code,{children:"data"})," \u4e2d\u7684\u6570\u636e\u7ed3\u6784\u7b80\u5355\uff0c\u907f\u514d\u5d4c\u5957\u8fc7\u6df1\uff0c\u4ee5\u4fbf\u66f4\u5bb9\u6613\u8fdb\u884c\u7ba1\u7406\u548c\u8c03\u8bd5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u63cf\u8ff0\u6027\u53d8\u91cf\u540d"}),"\uff1a\u9009\u62e9\u5177\u6709\u63cf\u8ff0\u6027\u7684\u53d8\u91cf\u540d\uff0c\u4f7f\u4ee3\u7801\u66f4\u5177\u53ef\u8bfb\u6027\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"userName"})," \u800c\u4e0d\u662f ",(0,s.jsx)(n.code,{children:"name1"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u521d\u59cb\u5316\u6240\u6709\u5c5e\u6027"}),"\uff1a\u5728 ",(0,s.jsx)(n.code,{children:"data"})," \u4e2d\u521d\u59cb\u5316\u6240\u6709\u9700\u8981\u7684\u5c5e\u6027\uff0c\u5373\u4f7f\u5b83\u4eec\u6682\u65f6\u6ca1\u6709\u503c\u3002\u8fd9\u6709\u52a9\u4e8e\u907f\u514d\u5728\u540e\u7eed\u5f00\u53d1\u4e2d\u51fa\u73b0\u672a\u5b9a\u4e49\u7684\u5c5e\u6027\u9519\u8bef\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u5408\u7406\u5730\u8bbe\u8ba1\u548c\u7ba1\u7406 ",(0,s.jsx)(n.code,{children:"data"}),"\uff0c\u53ef\u4ee5\u786e\u4fdd Vue \u5e94\u7528\u7684\u7a33\u5b9a\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},70949:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/26ea7ab633c1227b0208fbbd2014f188-0af27bd2225d2d2a1364483600c1b41b.png"},71048:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/e8a47d2d54a50e393ff75b34bfc6311e-ca2c0ed39b468b7b134fcb670909c874.png"},28453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>i});var t=d(96540);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);