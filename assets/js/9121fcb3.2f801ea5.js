"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["51240"],{37404:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"Frontend/Electron/\u521D\u8BC6-\u57FA\u7840","title":"Electron \u521D\u8BC6\u4E0E\u57FA\u7840","description":"Electron \u662F\u4E00\u4E2A\u57FA\u4E8E web \u6280\u672F\u6784\u5EFA\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528\u7684\u6846\u67B6,\u5B83\u5177\u6709\u4EE5\u4E0B\u7279\u70B9","source":"@site/docs/Frontend/Electron/10.\u521D\u8BC6-\u57FA\u7840.md","sourceDirName":"Frontend/Electron","slug":"/Frontend/Electron/\u521D\u8BC6-\u57FA\u7840","permalink":"/docs-hub/Frontend/Electron/\u521D\u8BC6-\u57FA\u7840","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Electron/10.\u521D\u8BC6-\u57FA\u7840.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":10,"frontMatter":{},"sidebar":"electronSidebar","next":{"title":"Electron \u5E94\u7528\u751F\u547D\u5468\u671F\u8BE6\u89E3","permalink":"/docs-hub/Frontend/Electron/\u751F\u547D\u5468\u671F"}}'),c=t("85893"),i=t("50065");let s={},d="Electron \u521D\u8BC6\u4E0E\u57FA\u7840",o={},l=[{value:"Electron \u67B6\u6784",id:"electron-\u67B6\u6784",level:2},{value:"Chromium \u6D4F\u89C8\u5668\u5185\u6838",id:"chromium-\u6D4F\u89C8\u5668\u5185\u6838",level:2},{value:"\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528\u5F00\u53D1\u65B9\u6848\u5BF9\u6BD4",id:"\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528\u5F00\u53D1\u65B9\u6848\u5BF9\u6BD4",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function a(e){let n={h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"electron-\u521D\u8BC6\u4E0E\u57FA\u7840",children:"Electron \u521D\u8BC6\u4E0E\u57FA\u7840"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(72540).Z+"",width:"1288",height:"320"})}),"\n",(0,c.jsx)(n.p,{children:"Electron \u662F\u4E00\u4E2A\u57FA\u4E8E web \u6280\u672F\u6784\u5EFA\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528\u7684\u6846\u67B6,\u5B83\u5177\u6709\u4EE5\u4E0B\u7279\u70B9"}),"\n",(0,c.jsx)(n.p,{children:"\u9AD8\u6548 \u901A\u8FC7 web \u6280\u672F\u7F16\u5199 UI,\u53EF\u4EE5\u5FEB\u901F\u5B9E\u73B0\u754C\u9762\u5F00\u53D1"}),"\n",(0,c.jsx)(n.p,{children:"\u80FD\u529B \u53EF\u4EE5\u8C03\u7528\u5E95\u5C42\u80FD\u529B,\u5B9E\u73B0\u66F4\u5F3A\u5927\u7684\u529F\u80FD"}),"\n",(0,c.jsx)(n.p,{children:"\u4F53\u9A8C \u652F\u6301\u8DE8\u5E73\u53F0,\u5728\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u63D0\u4F9B\u4E00\u81F4\u7684\u7528\u6237\u4F53\u9A8C"}),"\n",(0,c.jsx)(n.h2,{id:"electron-\u67B6\u6784",children:"Electron \u67B6\u6784"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(27720).Z+"",width:"1030",height:"1016"})}),"\n",(0,c.jsx)(n.p,{children:"Electron \u7684\u67B6\u6784\u4E3B\u8981\u5305\u542B\u4E09\u4E2A\u90E8\u5206"}),"\n",(0,c.jsx)(n.p,{children:"\u4E3B\u8FDB\u7A0B(Main Process) \u8D1F\u8D23\u521B\u5EFA\u548C\u7BA1\u7406\u5E94\u7528\u7A97\u53E3,\u4EE5\u53CA\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4EA4\u4E92"}),"\n",(0,c.jsx)(n.p,{children:"\u6E32\u67D3\u8FDB\u7A0B(Renderer Process) \u8D1F\u8D23\u8FD0\u884C\u5E94\u7528\u7684\u524D\u7AEF\u9875\u9762,\u6BCF\u4E2A\u7A97\u53E3\u90FD\u5728\u5355\u72EC\u7684\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u8FD0\u884C"}),"\n",(0,c.jsx)(n.p,{children:"\u539F\u751F API(Native APIs) \u63D0\u4F9B\u4E86\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u5E95\u5C42\u4EA4\u4E92\u7684\u80FD\u529B,\u5982\u6587\u4EF6\u7CFB\u7EDF\u8BBF\u95EE\u3001\u7F51\u7EDC\u901A\u4FE1\u7B49"}),"\n",(0,c.jsx)(n.p,{children:"\u6E32\u67D3\u8FDB\u7A0B\u4E0E\u4E3B\u8FDB\u7A0B\u4E4B\u95F4\u901A\u8FC7 IPC(\u8FDB\u7A0B\u95F4\u901A\u4FE1)\u5B9E\u73B0\u6D88\u606F\u4F20\u9012\u548C\u6570\u636E\u4EA4\u6362\u3002\u591A\u4E2A\u7A97\u53E3\u7684\u6E32\u67D3\u8FDB\u7A0B\u4E4B\u95F4\u4E5F\u53EF\u4EE5\u901A\u8FC7 IPC \u8FDB\u884C\u901A\u4FE1\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"chromium-\u6D4F\u89C8\u5668\u5185\u6838",children:"Chromium \u6D4F\u89C8\u5668\u5185\u6838"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(34729).Z+"",width:"825",height:"768"})}),"\n",(0,c.jsx)(n.p,{children:"Electron \u5185\u7F6E\u4E86 Chromium \u6D4F\u89C8\u5668\u5185\u6838,\u4E3A\u5E94\u7528\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684 web \u6E32\u67D3\u80FD\u529B\u3002Chromium \u662F\u8C37\u6B4C\u5F00\u6E90\u7684\u6D4F\u89C8\u5668\u9879\u76EE,\u5B83\u4E3A Electron \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u652F\u6301"}),"\n",(0,c.jsx)(n.p,{children:"HTML/CSS/JavaScript \u53EF\u4EE5\u4F7F\u7528\u6807\u51C6\u7684 web \u6280\u672F\u5F00\u53D1\u5E94\u7528\u754C\u9762"}),"\n",(0,c.jsx)(n.p,{children:"DevTools \u63D0\u4F9B\u4E86\u5F00\u53D1\u8005\u5DE5\u5177,\u65B9\u4FBF\u8C03\u8BD5\u548C\u6027\u80FD\u4F18\u5316"}),"\n",(0,c.jsx)(n.p,{children:"\u591A\u8FDB\u7A0B\u67B6\u6784 \u6BCF\u4E2A\u9875\u9762\u8FD0\u884C\u5728\u72EC\u7ACB\u7684\u6E32\u67D3\u8FDB\u7A0B\u4E2D,\u63D0\u9AD8\u4E86\u7A33\u5B9A\u6027\u548C\u6D41\u7545\u5EA6"}),"\n",(0,c.jsx)(n.p,{children:"\u5B89\u5168\u6C99\u7BB1 \u5BF9\u9875\u9762\u4E2D\u7684\u4E0D\u53EF\u4FE1\u4EE3\u7801\u8FDB\u884C\u9694\u79BB,\u4FDD\u969C\u5E94\u7528\u5B89\u5168"}),"\n",(0,c.jsx)(n.h2,{id:"\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528\u5F00\u53D1\u65B9\u6848\u5BF9\u6BD4",children:"\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528\u5F00\u53D1\u65B9\u6848\u5BF9\u6BD4"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(30675).Z+"",width:"2044",height:"928"})}),"\n",(0,c.jsx)(n.p,{children:"\u76EE\u524D\u6D41\u884C\u7684\u8DE8\u5E73\u53F0\u684C\u9762\u5E94\u7528\u5F00\u53D1\u65B9\u6848\u6709 Native\u3001QT\u3001Flutter\u3001NW.js\u3001Electron \u7B49,\u5B83\u4EEC\u5404\u6709\u4F18\u7F3A\u70B9"}),"\n",(0,c.jsx)(n.p,{children:"Native \u4F7F\u7528\u5E73\u53F0\u539F\u751F\u6280\u672F\u5982.Net/Objective-C/Java \u7B49\u5F00\u53D1,\u4F18\u70B9\u662F\u6027\u80FD\u9AD8\u3001\u4F53\u9A8C\u597D\u3001\u5305\u4F53\u79EF\u5C0F,\u7F3A\u70B9\u662F\u95E8\u69DB\u9AD8\u3001\u8FED\u4EE3\u6162,\u9700\u8981\u5BF9\u4E0D\u540C\u5E73\u53F0\u5206\u522B\u5F00\u53D1\u548C\u7EF4\u62A4"}),"\n",(0,c.jsx)(n.p,{children:"QT \u57FA\u4E8E C++\u5F00\u53D1,\u4F18\u70B9\u662F\u8DE8\u5E73\u53F0\u3001\u9AD8\u6027\u80FD\u3001\u5AB2\u7F8E\u539F\u751F\u4F53\u9A8C,\u7F3A\u70B9\u662F\u95E8\u69DB\u8F83\u9AD8,\u9700\u8981\u638C\u63E1 C++,\u8FED\u4EE3\u901F\u5EA6\u4E00\u822C"}),"\n",(0,c.jsx)(n.p,{children:"Flutter \u4F18\u70B9\u662F\u8DE8\u7AEF,\u652F\u6301\u79FB\u52A8\u3001\u684C\u9762\u3001web \u7B49,\u7F3A\u70B9\u662F\u684C\u9762\u7AEF\u8FD8\u5728\u53D1\u5C55\u4E2D,\u57FA\u5EFA\u548C\u751F\u6001\u8FD8\u4E0D\u591F\u5B8C\u5584"}),"\n",(0,c.jsx)(n.p,{children:"NW.js \u4F18\u70B9\u662F\u8DE8\u5E73\u53F0\u3001\u793E\u533A\u6D3B\u8DC3\u3001\u652F\u6301 XP \u7B49\u8001\u65E7\u7CFB\u7EDF,\u7F3A\u70B9\u662F\u5305\u4F53\u79EF\u5927\u3001\u6027\u80FD\u4E00\u822C"}),"\n",(0,c.jsx)(n.p,{children:"Electron \u4F18\u70B9\u662F\u8DE8\u5E73\u53F0\u3001\u793E\u533A\u6D3B\u8DC3\u3001\u6848\u4F8B\u4F17\u591A,\u7F3A\u70B9\u662F\u5305\u4F53\u79EF\u5927\u3001\u6027\u80FD\u4E00\u822C"}),"\n",(0,c.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679C\u9879\u76EE\u5BF9\u6027\u80FD\u548C\u4F53\u9A8C\u8981\u6C42\u4E0D\u662F\u6781\u81F4,\u800C\u662F\u5E0C\u671B\u5FEB\u901F\u5F00\u53D1\u548C\u8FED\u4EE3,\u964D\u4F4E\u8DE8\u5E73\u53F0\u5F00\u53D1\u6210\u672C,\u90A3\u4E48 Electron \u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\u3002\u5B83\u5141\u8BB8\u5F00\u53D1\u8005\u4F7F\u7528\u719F\u6089\u7684 web \u6280\u672F\u5982 HTML/CSS/JavaScript \u6765\u6784\u5EFA\u529F\u80FD\u4E30\u5BCC\u7684\u684C\u9762\u5E94\u7528,\u540C\u65F6\u652F\u6301 Windows\u3001macOS\u3001Linux \u7B49\u4E3B\u6D41\u64CD\u4F5C\u7CFB\u7EDF\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},72540:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/b555b0b58be7ec0d39e3c0da65f3db8d-8d1353e6d2381406bd2faa12b0714f97.png"},34729:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/c9d7b5529fb91f582f111a7aea516309-9c3a2f0d8d74284b9fcb9a0e82202912.png"},30675:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/ce79d2d58421feafbfe2fb6eeb62cde4-6ae6746819c405206b078fca64e5be34.png"},27720:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/fb21b36e6a7c3e308a5dc55f7087c72c-8978c5a34da6f1a1e067828c13803fc2.png"},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var r=t(67294);let c={},i=r.createContext(c);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);