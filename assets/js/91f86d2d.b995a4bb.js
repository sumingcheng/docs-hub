"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["75661"],{83802:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"Frontend/Electron/\u542F\u52A8\u4E8B\u4EF6\u76D1\u542C","title":"Electron \u5E94\u7528\u542F\u52A8\u4E8B\u4EF6\u76D1\u542C","description":"\u5728 Electron \u5E94\u7528\u5F00\u53D1\u8FC7\u7A0B\u4E2D,\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u76D1\u542C\u5E94\u7528\u7684\u542F\u52A8\u4E8B\u4EF6,\u4EE5\u4FBF\u5728\u5E94\u7528\u542F\u52A8\u7684\u4E0D\u540C\u9636\u6BB5\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\u3002","source":"@site/docs/Frontend/Electron/21.\u542F\u52A8\u4E8B\u4EF6\u76D1\u542C.md","sourceDirName":"Frontend/Electron","slug":"/Frontend/Electron/\u542F\u52A8\u4E8B\u4EF6\u76D1\u542C","permalink":"/docs-hub/Frontend/Electron/\u542F\u52A8\u4E8B\u4EF6\u76D1\u542C","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Electron/21.\u542F\u52A8\u4E8B\u4EF6\u76D1\u542C.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":21,"frontMatter":{},"sidebar":"electronSidebar","previous":{"title":"Electron \u5E94\u7528\u751F\u547D\u5468\u671F\u8BE6\u89E3","permalink":"/docs-hub/Frontend/Electron/\u751F\u547D\u5468\u671F"},"next":{"title":"Electron \u7A97\u53E3\u76F8\u5173\u4E8B\u4EF6\u76D1\u542C","permalink":"/docs-hub/Frontend/Electron/\u7A97\u53E3\u4E8B\u4EF6\u76D1\u542C"}}'),c=t("85893"),r=t("50065");let o={},i="Electron \u5E94\u7528\u542F\u52A8\u4E8B\u4EF6\u76D1\u542C",d={},a=[{value:"ready \u4E8B\u4EF6",id:"ready-\u4E8B\u4EF6",level:2},{value:"activate \u4E8B\u4EF6",id:"activate-\u4E8B\u4EF6",level:2},{value:"second-instance \u4E8B\u4EF6",id:"second-instance-\u4E8B\u4EF6",level:2},{value:"session-created \u4E8B\u4EF6",id:"session-created-\u4E8B\u4EF6",level:2}];function l(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"electron-\u5E94\u7528\u542F\u52A8\u4E8B\u4EF6\u76D1\u542C",children:"Electron \u5E94\u7528\u542F\u52A8\u4E8B\u4EF6\u76D1\u542C"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728 Electron \u5E94\u7528\u5F00\u53D1\u8FC7\u7A0B\u4E2D,\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u76D1\u542C\u5E94\u7528\u7684\u542F\u52A8\u4E8B\u4EF6,\u4EE5\u4FBF\u5728\u5E94\u7528\u542F\u52A8\u7684\u4E0D\u540C\u9636\u6BB5\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"ready-\u4E8B\u4EF6",children:"ready \u4E8B\u4EF6"}),"\n",(0,c.jsxs)(n.p,{children:["\u5F53 Electron \u5B8C\u6210\u521D\u59CB\u5316\u65F6\u4F1A\u89E6\u53D1 ",(0,c.jsx)(n.code,{children:"ready"})," \u4E8B\u4EF6\u3002\u6B64\u65F6,\u4E3B\u8FDB\u7A0B\u5DF2\u7ECF\u521B\u5EFA\u4E86\u6D4F\u89C8\u5668\u7A97\u53E3,\u4F46\u7A97\u53E3\u5185\u7684\u7F51\u9875\u8FD8\u6CA1\u6709\u5F00\u59CB\u52A0\u8F7D\u3002\u6211\u4EEC\u901A\u5E38\u5728 ",(0,c.jsx)(n.code,{children:"ready"})," \u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\u4E2D\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C:"]}),"\n",(0,c.jsx)(n.p,{children:"\u521B\u5EFA\u548C\u663E\u793A\u5E94\u7528\u4E3B\u7A97\u53E3\n\u6CE8\u518C\u5168\u5C40\u5FEB\u6377\u952E\u3001\u6258\u76D8\u56FE\u6807\u7B49\n\u6267\u884C\u5E94\u7528\u521D\u59CB\u5316\u903B\u8F91,\u5982\u68C0\u67E5\u66F4\u65B0\u3001\u52A0\u8F7D\u914D\u7F6E\u7B49"}),"\n",(0,c.jsx)(n.p,{children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const { app } = require('electron');\n\napp.whenReady().then(() => {\n  // \u521B\u5EFA\u7A97\u53E3\n  createWindow();\n\n  // \u6CE8\u518C\u5168\u5C40\u5FEB\u6377\u952E\n  globalShortcut.register('CommandOrControl+X', () => {\n    console.log('CommandOrControl+X is pressed');\n  });\n});\n"})}),"\n",(0,c.jsx)(n.h2,{id:"activate-\u4E8B\u4EF6",children:"activate \u4E8B\u4EF6"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"activate"})," \u4E8B\u4EF6\u662F macOS \u7279\u6709\u7684\u4E8B\u4EF6,\u5728 Electron \u5E94\u7528\u88AB\u6FC0\u6D3B\u65F6\u89E6\u53D1\u3002\u5982\u679C\u7528\u6237\u70B9\u51FB Dock \u4E0A\u7684\u5E94\u7528\u56FE\u6807,\u6216\u8005\u4F7F\u7528 Cmd + Tab \u5207\u6362\u5230\u8BE5\u5E94\u7528,\u5C31\u4F1A\u89E6\u53D1 ",(0,c.jsx)(n.code,{children:"activate"})," \u4E8B\u4EF6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"activate"})," \u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\u4E2D,\u6211\u4EEC\u901A\u5E38\u9700\u8981\u5224\u65AD\u5F53\u524D\u662F\u5426\u6709\u53EF\u89C1\u7684\u7A97\u53E3,\u5982\u679C\u6CA1\u6709\u5219\u521B\u5EFA\u65B0\u7A97\u53E3:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"app.on('activate', () => {\n  if (BrowserWindow.getAllWindows().length === 0) {\n    createWindow();\n  }\n});\n"})}),"\n",(0,c.jsx)(n.h2,{id:"second-instance-\u4E8B\u4EF6",children:"second-instance \u4E8B\u4EF6"}),"\n",(0,c.jsx)(n.p,{children:"\u5BF9\u4E8E\u5927\u591A\u6570\u684C\u9762\u5E94\u7528\u6765\u8BF4,\u6211\u4EEC\u671F\u671B\u5B83\u662F\u5355\u4F8B\u6A21\u5F0F\u7684,\u5373\u5728\u7CFB\u7EDF\u4E2D\u53EA\u5141\u8BB8\u8FD0\u884C\u4E00\u4E2A\u5E94\u7528\u5B9E\u4F8B\u3002\u5F53\u7528\u6237\u518D\u6B21\u70B9\u51FB\u5E94\u7528\u56FE\u6807\u65F6,\u4E0D\u4F1A\u542F\u52A8\u65B0\u7684\u8FDB\u7A0B,\u800C\u662F\u6FC0\u6D3B\u5DF2\u6709\u7684\u5E94\u7528\u7A97\u53E3\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F,\u9700\u8981\u7528\u5230 ",(0,c.jsx)(n.code,{children:"second-instance"})," \u4E8B\u4EF6\u3002\u5F53\u7B2C\u4E8C\u4E2A\u5E94\u7528\u5B9E\u4F8B\u542F\u52A8\u65F6,\u4F1A\u89E6\u53D1\u8FD9\u4E2A\u4E8B\u4EF6\u3002\u5728\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\u4E2D,\u6211\u4EEC\u53EF\u4EE5\u5C06\u542F\u52A8\u53C2\u6570\u53D1\u9001\u7ED9\u4E3B\u5B9E\u4F8B,\u5E76\u9000\u51FA\u5F53\u524D\u8FDB\u7A0B\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const gotTheLock = app.requestSingleInstanceLock();\n\nif (!gotTheLock) {\n  app.quit();\n} else {\n  app.on('second-instance', (event, commandLine, workingDirectory) => {\n    // \u5C06\u542F\u52A8\u53C2\u6570\u53D1\u9001\u7ED9\u4E3B\u5B9E\u4F8B\n    sendArgsToMainInstance(commandLine);\n    // \u6FC0\u6D3B\u4E3B\u5B9E\u4F8B\u7A97\u53E3\n    activateMainWindow();\n  });\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"session-created-\u4E8B\u4EF6",children:"session-created \u4E8B\u4EF6"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"session-created"})," \u4E8B\u4EF6\u5728 Electron \u521B\u5EFA\u65B0\u7684 ",(0,c.jsx)(n.code,{children:"session"})," \u5BF9\u8C61\u65F6\u89E6\u53D1\u3002\u901A\u8FC7\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6,\u6211\u4EEC\u53EF\u4EE5\u5BF9\u6BCF\u4E2A ",(0,c.jsx)(n.code,{children:"session"})," \u8FDB\u884C\u4E00\u4E9B\u81EA\u5B9A\u4E49\u914D\u7F6E,\u5982:"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8BBE\u7F6E ",(0,c.jsx)(n.code,{children:"session"})," \u7684 cookie\u3001\u7F13\u5B58\u7B56\u7565\n\u6CE8\u5165\u4E00\u4E9B\u9884\u7F6E\u7684\u811A\u672C\n\u4FEE\u6539 ",(0,c.jsx)(n.code,{children:"User-Agent"}),"\n\u62E6\u622A\u7F51\u7EDC\u8BF7\u6C42,\u5B9E\u73B0\u81EA\u5B9A\u4E49\u534F\u8BAE\u7B49"]}),"\n",(0,c.jsx)(n.p,{children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const { session } = require('electron');\n\napp.on('session-created', (session) => {\n  // \u8BBE\u7F6E cookie\n  session.cookies.set({\n    url: 'https://example.com',\n    name: 'dummy_name',\n    value: 'dummy',\n  });\n\n  // \u6CE8\u5165\u9884\u7F6E\u811A\u672C\n  session.setPreloads([path.resolve(app.getAppPath(), 'preload.js')]);\n});\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(67294);let c={},r=s.createContext(c);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);