"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["49907"],{63248:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>c,assets:()=>r,toc:()=>o,contentTitle:()=>s});var c=JSON.parse('{"id":"Frontend/DOM/\u65F6\u95F4\u7EBF-\u89E3\u6790\u4E0E\u6E32\u67D3-\u5C01\u88C5\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u51FD\u6570","title":"\u6D4F\u89C8\u5668\u65F6\u95F4\u7EBF - \u89E3\u6790\u4E0E\u6E32\u67D3\u8FC7\u7A0B\u8BE6\u89E3","description":"\u672C\u6587\u5C06\u8BE6\u7EC6\u63A2\u8BA8\u6D4F\u89C8\u5668\u4ECE\u5F00\u59CB\u52A0\u8F7D\u9875\u9762\u5230\u5B8C\u5168\u6E32\u67D3\u7ED3\u675F\u7684\u6574\u4E2A\u8FC7\u7A0B,\u91CD\u70B9\u5173\u6CE8\u6587\u6863\u89E3\u6790\u3001DOM \u6784\u5EFA\u3001CSSOM \u6784\u5EFA\u4EE5\u53CA\u811A\u672C\u6267\u884C\u7B49\u5173\u952E\u9636\u6BB5\u3002","source":"@site/docs/Frontend/DOM/120.\u65F6\u95F4\u7EBF-\u89E3\u6790\u4E0E\u6E32\u67D3-\u5C01\u88C5\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u51FD\u6570.md","sourceDirName":"Frontend/DOM","slug":"/Frontend/DOM/\u65F6\u95F4\u7EBF-\u89E3\u6790\u4E0E\u6E32\u67D3-\u5C01\u88C5\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u51FD\u6570","permalink":"/docs-hub/Frontend/DOM/\u65F6\u95F4\u7EBF-\u89E3\u6790\u4E0E\u6E32\u67D3-\u5C01\u88C5\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u51FD\u6570","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/DOM/120.\u65F6\u95F4\u7EBF-\u89E3\u6790\u4E0E\u6E32\u67D3-\u5C01\u88C5\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u51FD\u6570.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734402243000,"sidebarPosition":120,"frontMatter":{},"sidebar":"domSidebar","previous":{"title":"domTree \u89E3\u6790","permalink":"/docs-hub/Frontend/DOM/domTree-\u89E3\u6790\u4E0E\u52A0\u8F7D-\u56DE\u6D41\u4E0E\u91CD\u7ED8"},"next":{"title":"\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u7ED1\u5B9A","permalink":"/docs-hub/Frontend/DOM/\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u7ED1\u5B9A"}}'),l=d("85893"),i=d("50065");let t={},s="\u6D4F\u89C8\u5668\u65F6\u95F4\u7EBF - \u89E3\u6790\u4E0E\u6E32\u67D3\u8FC7\u7A0B\u8BE6\u89E3",r={},o=[{value:"document.readyState \u72B6\u6001",id:"documentreadystate-\u72B6\u6001",level:2},{value:"loading",id:"loading",level:3},{value:"interactive",id:"interactive",level:3},{value:"complete",id:"complete",level:3},{value:"\u76D1\u542C readyState \u53D8\u5316",id:"\u76D1\u542C-readystate-\u53D8\u5316",level:2},{value:"DOMContentLoaded \u4E8B\u4EF6",id:"domcontentloaded-\u4E8B\u4EF6",level:2},{value:"window.onload \u4E8B\u4EF6",id:"windowonload-\u4E8B\u4EF6",level:2},{value:"\u73B0\u4EE3\u6D4F\u89C8\u5668\u7684\u4F18\u5316",id:"\u73B0\u4EE3\u6D4F\u89C8\u5668\u7684\u4F18\u5316",level:2},{value:"\u517C\u5BB9\u6027\u5904\u7406",id:"\u517C\u5BB9\u6027\u5904\u7406",level:2},{value:"\u4E8B\u4EF6\u4F20\u9012\u673A\u5236",id:"\u4E8B\u4EF6\u4F20\u9012\u673A\u5236",level:2},{value:"\u4E8B\u4EF6\u5192\u6CE1",id:"\u4E8B\u4EF6\u5192\u6CE1",level:3},{value:"\u4E8B\u4EF6\u6355\u83B7",id:"\u4E8B\u4EF6\u6355\u83B7",level:3}];function a(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u6D4F\u89C8\u5668\u65F6\u95F4\u7EBF---\u89E3\u6790\u4E0E\u6E32\u67D3\u8FC7\u7A0B\u8BE6\u89E3",children:"\u6D4F\u89C8\u5668\u65F6\u95F4\u7EBF - \u89E3\u6790\u4E0E\u6E32\u67D3\u8FC7\u7A0B\u8BE6\u89E3"})}),"\n",(0,l.jsx)(n.p,{children:"\u672C\u6587\u5C06\u8BE6\u7EC6\u63A2\u8BA8\u6D4F\u89C8\u5668\u4ECE\u5F00\u59CB\u52A0\u8F7D\u9875\u9762\u5230\u5B8C\u5168\u6E32\u67D3\u7ED3\u675F\u7684\u6574\u4E2A\u8FC7\u7A0B,\u91CD\u70B9\u5173\u6CE8\u6587\u6863\u89E3\u6790\u3001DOM \u6784\u5EFA\u3001CSSOM \u6784\u5EFA\u4EE5\u53CA\u811A\u672C\u6267\u884C\u7B49\u5173\u952E\u9636\u6BB5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"documentreadystate-\u72B6\u6001",children:"document.readyState \u72B6\u6001"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"document.readyState"}),"\u5C5E\u6027\u8868\u793A\u6587\u6863\u52A0\u8F7D\u72B6\u6001,\u5171\u6709\u4E09\u4E2A\u53EF\u80FD\u7684\u503C:"]}),"\n",(0,l.jsx)(n.h3,{id:"loading",children:"loading"}),"\n",(0,l.jsx)(n.p,{children:"\u8868\u793A\u6587\u6863\u6B63\u5728\u52A0\u8F7D\u4E2D\u3002\u5728\u8FD9\u4E2A\u9636\u6BB5:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"document"}),"\u5BF9\u8C61\u5DF2\u521B\u5EFA,JS \u5F00\u59CB\u8D77\u4F5C\u7528\u3002DOM \u7684\u6784\u5EFA\u4F9D\u8D56\u4E8E",(0,l.jsx)(n.code,{children:"document"}),"\u5BF9\u8C61\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u6D4F\u89C8\u5668\u5F00\u59CB\u4ECE\u7B2C\u4E00\u884C\u89E3\u6790\u5230\u6700\u540E\u4E00\u884C,\u6784\u5EFA DOM \u6811\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679C\u9047\u5230",(0,l.jsx)(n.code,{children:"link"}),"\u6216",(0,l.jsx)(n.code,{children:"style"}),"\u6807\u7B7E:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u9047\u5230",(0,l.jsx)(n.code,{children:"link"}),"\u6807\u7B7E\u4F1A\u5F00\u542F\u65B0\u7EBF\u7A0B,\u5F02\u6B65\u52A0\u8F7D\u5916\u90E8 CSS \u6587\u4EF6\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"style"}),"\u6807\u7B7E\u5219\u7528\u4E8E\u6784\u5EFA CSSOM \u6811,CSSOM \u6811\u548C DOM \u6811\u662F\u540C\u65F6\u6784\u5EFA\u7684\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679C\u9047\u5230\u4E0D\u5E26",(0,l.jsx)(n.code,{children:"async"}),"\u5C5E\u6027\u7684",(0,l.jsx)(n.code,{children:"script"}),"\u6807\u7B7E,\u5219\u4F1A\u963B\u585E\u6587\u6863\u89E3\u6790,\u7B49\u5F85 JS \u811A\u672C\u52A0\u8F7D\u5E76\u6267\u884C\u5B8C\u6210\u540E\u624D\u80FD\u7EE7\u7EED\u89E3\u6790\u6587\u6863\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679C",(0,l.jsx)(n.code,{children:"script"}),"\u6807\u7B7E\u8BBE\u7F6E\u4E86",(0,l.jsx)(n.code,{children:"async"}),"\u5C5E\u6027,\u5219\u4F1A\u5F02\u6B65\u52A0\u8F7D\u5E76\u6267\u884C JS,\u4E0D\u4F1A\u963B\u585E\u6587\u6863\u89E3\u6790\u3002\u4F46\u6B64\u65F6\u4E0D\u80FD\u4F7F\u7528",(0,l.jsx)(n.code,{children:"document.write"}),"\u65B9\u6CD5,\u82E5\u5FC5\u987B\u4F7F\u7528,\u53EF\u4EE5\u5C06\u5176\u5199\u5728",(0,l.jsx)(n.code,{children:"window.onload"}),"\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u89E3\u6790\u5230",(0,l.jsx)(n.code,{children:"img"}),"\u6807\u7B7E\u65F6,\u4F1A\u5148\u89E3\u6790\u8FD9\u4E2A\u8282\u70B9\u3002\u5982\u679C",(0,l.jsx)(n.code,{children:"src"}),"\u5C5E\u6027\u4E0D\u4E3A\u7A7A,\u5219\u4F1A\u521B\u5EFA\u65B0\u7EBF\u7A0B\u5F02\u6B65\u52A0\u8F7D\u56FE\u7247\u8D44\u6E90,\u4E0D\u4F1A\u963B\u585E\u6587\u6863\u89E3\u6790\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"interactive",children:"interactive"}),"\n",(0,l.jsx)(n.p,{children:"\u8868\u793A\u6587\u6863\u89E3\u6790\u5B8C\u6210,\u4F46\u8D44\u6E90\u4ECD\u5728\u52A0\u8F7D\u3002\u5728\u8FD9\u4E2A\u9636\u6BB5:"}),"\n",(0,l.jsxs)(n.ol,{start:"7",children:["\n",(0,l.jsx)(n.li,{children:"\u6574\u4E2A HTML \u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679C\u6709\u8BBE\u7F6E",(0,l.jsx)(n.code,{children:"defer"}),"\u5C5E\u6027\u7684",(0,l.jsx)(n.code,{children:"script"}),"\u6807\u7B7E,\u5219\u5F00\u59CB\u6309\u7167\u5728\u6587\u6863\u4E2D\u51FA\u73B0\u7684\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u8FD9\u4E9B\u811A\u672C\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u89E6\u53D1",(0,l.jsx)(n.code,{children:"DOMContentLoaded"}),"\u4E8B\u4EF6,\u6807\u5FD7\u7740\u7A0B\u5E8F\u7531\u540C\u6B65\u811A\u672C\u6267\u884C\u9636\u6BB5\u8FC7\u6E21\u5230\u4E8B\u4EF6\u9A71\u52A8\u9636\u6BB5\u3002\u6211\u4EEC\u53EF\u4EE5\u76D1\u542C\u6B64\u4E8B\u4EF6,\u4EE5\u4E86\u89E3\u6587\u6863\u89E3\u6790\u5B8C\u6210\u7684\u65F6\u95F4\u70B9\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"complete",children:"complete"}),"\n",(0,l.jsx)(n.p,{children:"\u8868\u793A\u9875\u9762\u6240\u6709\u5185\u5BB9\u90FD\u52A0\u8F7D\u5B8C\u6BD5\u3002\u5728\u8FD9\u4E2A\u9636\u6BB5:"}),"\n",(0,l.jsxs)(n.ol,{start:"10",children:["\n",(0,l.jsxs)(n.li,{children:["\u6240\u6709\u5F02\u6B65\u52A0\u8F7D\u7684\u8D44\u6E90,\u5982\u8BBE\u7F6E\u4E86",(0,l.jsx)(n.code,{children:"async"}),"\u5C5E\u6027\u7684\u811A\u672C\u3001\u56FE\u7247\u7B49\u90FD\u5DF2\u52A0\u8F7D\u5E76\u6267\u884C\u5B8C\u6BD5\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u89E6\u53D1",(0,l.jsx)(n.code,{children:"window"}),"\u5BF9\u8C61\u7684",(0,l.jsx)(n.code,{children:"load"}),"\u4E8B\u4EF6,\u6807\u5FD7\u7740\u9875\u9762\u52A0\u8F7D\u5F7B\u5E95\u5B8C\u6210\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76D1\u542C-readystate-\u53D8\u5316",children:"\u76D1\u542C readyState \u53D8\u5316"}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7",(0,l.jsx)(n.code,{children:"document.onreadystatechange"}),"\u4E8B\u4EF6\u76D1\u542C",(0,l.jsx)(n.code,{children:"readyState"}),"\u7684\u53D8\u5316,\u4E00\u65E6\u72B6\u6001\u53D1\u751F\u6539\u53D8\u5C31\u4F1A\u7ACB\u5373\u89E6\u53D1\u8BE5\u4E8B\u4EF6\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"// \u6253\u5370\u5F53\u524D\u72B6\u6001\nconsole.log(document.readyState);\n\n// \u76D1\u542CreadyState\u53D8\u5316\ndocument.onreadystatechange = function () {\n  console.log(document.readyState);\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u4E0A\u8FF0\u4EE3\u7801,\u63A7\u5236\u53F0\u8F93\u51FA\u5982\u4E0B:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"readyState\u53D8\u5316",src:d(73802).Z+"",width:"705",height:"247"})}),"\n",(0,l.jsx)(n.h2,{id:"domcontentloaded-\u4E8B\u4EF6",children:"DOMContentLoaded \u4E8B\u4EF6"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"DOMContentLoaded"}),"\u4E8B\u4EF6\u5728 DOM \u6811\u6784\u5EFA\u5B8C\u6210\u540E\u7ACB\u5373\u89E6\u53D1,\u65E0\u9700\u7B49\u5F85\u56FE\u7247\u7B49\u8D44\u6E90\u52A0\u8F7D\u3002\u76D1\u542C\u8BE5\u4E8B\u4EF6\u7684\u65B9\u5F0F\u5982\u4E0B:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"document.addEventListener(\n  'DOMContentLoaded',\n  function () {\n    console.log('DOM fully loaded and parsed');\n  },\n  false\n);\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"DOMContentLoaded\u89E6\u53D1\u65F6\u673A",src:d(12651).Z+"",width:"613",height:"272"})}),"\n",(0,l.jsx)(n.h2,{id:"windowonload-\u4E8B\u4EF6",children:"window.onload \u4E8B\u4EF6"}),"\n",(0,l.jsxs)(n.p,{children:["\u4E0E",(0,l.jsx)(n.code,{children:"DOMContentLoaded"}),"\u4E0D\u540C,",(0,l.jsx)(n.code,{children:"window.onload"}),"\u4E8B\u4EF6\u4F1A\u5728\u9875\u9762\u6240\u6709\u8D44\u6E90\u90FD\u52A0\u8F7D\u5B8C\u6BD5\u540E\u624D\u89E6\u53D1\u3002\u7531\u4E8E\u5B83\u89E6\u53D1\u65F6\u673A\u8F83\u665A,\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u4F7F\u7528\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u73B0\u4EE3\u6D4F\u89C8\u5668\u7684\u4F18\u5316",children:"\u73B0\u4EE3\u6D4F\u89C8\u5668\u7684\u4F18\u5316"}),"\n",(0,l.jsx)(n.p,{children:"\u73B0\u4EE3\u6D4F\u89C8\u5668\u5728\u89E3\u6790\u548C\u6E32\u67D3\u65B9\u9762\u505A\u4E86\u5F88\u591A\u4F18\u5316:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u91C7\u7528\u6D41\u5F0F\u89E3\u6790,\u8FB9\u89E3\u6790\u8FB9\u6784\u5EFA DOM \u6811\u548C CSSOM \u6811,\u5C3D\u65E9\u5F00\u59CB\u6E32\u67D3\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u5F15\u5165\u4E86",(0,l.jsx)(n.code,{children:"first paint"}),"(\u9996\u6B21\u6E32\u67D3)\u7684\u6982\u5FF5,\u5C3D\u5FEB\u663E\u793A\u9875\u9762\u5185\u5BB9\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u56E0\u6B64,\u6211\u4EEC\u5E94\u5F53\u907F\u514D\u5C06",(0,l.jsx)(n.code,{children:"script"}),"\u6807\u7B7E\u653E\u5728 HTML \u6587\u6863\u7684\u5F00\u5934,\u4EE5\u514D\u963B\u585E\u540E\u7EED\u5185\u5BB9\u7684\u89E3\u6790\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u517C\u5BB9\u6027\u5904\u7406",children:"\u517C\u5BB9\u6027\u5904\u7406"}),"\n",(0,l.jsxs)(n.p,{children:["\u4E3A\u4E86\u517C\u5BB9\u65E7\u7248 IE \u6D4F\u89C8\u5668,\u53EF\u4EE5\u5C01\u88C5\u4E00\u4E2A",(0,l.jsx)(n.code,{children:"domReady"}),"\u51FD\u6570:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"function domReady(callback) {\n  if (document.addEventListener) {\n    document.addEventListener(\n      'DOMContentLoaded',\n      function () {\n        document.removeEventListener('DOMContentLoaded', arguments.callee, false);\n        callback();\n      },\n      false\n    );\n  } else if (document.attachEvent) {\n    document.attachEvent('onreadystatechange', function () {\n      if (document.readyState === 'complete') {\n        document.detachEvent('onreadystatechange', arguments.callee);\n        callback();\n      }\n    });\n    if (document.documentElement.doScroll && window == window.top) {\n      try {\n        document.documentElement.doScroll('left');\n      } catch (error) {\n        return setTimeout(arguments.callee, 0);\n      }\n      callback();\n    }\n  }\n}\n\n// \u4F7F\u7528\u793A\u4F8B\ndomReady(function () {\n  // DOM\u52A0\u8F7D\u5B8C\u6BD5,\u6267\u884C\u67D0\u4E9B\u64CD\u4F5C\n  console.log('DOM Ready!');\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0A\u5C31\u662F\u73B0\u4EE3\u6D4F\u89C8\u5668\u52A0\u8F7D\u548C\u6E32\u67D3\u9875\u9762\u7684\u5B8C\u6574\u65F6\u95F4\u7EBF\u3002\u4F5C\u4E3A\u5F00\u53D1\u8005,\u6211\u4EEC\u5E94\u8BE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5,\u5408\u7406\u5B89\u6392\u8D44\u6E90\u52A0\u8F7D\u987A\u5E8F,\u5C3D\u53EF\u80FD\u4F18\u5316\u5173\u952E\u6E32\u67D3\u8DEF\u5F84,\u63D0\u5347\u9875\u9762\u6027\u80FD\u3002\u540C\u65F6,\u4E3A\u4E86\u786E\u4FDD\u811A\u672C\u6267\u884C\u4E0D\u4F1A\u963B\u585E\u9875\u9762\u89E3\u6790,\u5EFA\u8BAE\u5C06\u811A\u672C\u8BBE\u7F6E\u4E3A\u5F02\u6B65\u52A0\u8F7D\u6216\u63A8\u8FDF\u5230\u6587\u6863\u89E3\u6790\u5B8C\u6210\u540E\u6267\u884C\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u4E8B\u4EF6\u4F20\u9012\u673A\u5236",children:"\u4E8B\u4EF6\u4F20\u9012\u673A\u5236"}),"\n",(0,l.jsx)(n.p,{children:"\u9664\u4E86\u7406\u89E3\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\u7EBF,\u6211\u4EEC\u8FD8\u9700\u8981\u4E86\u89E3\u6D4F\u89C8\u5668\u4E8B\u4EF6\u4F20\u9012\u7684\u4E24\u79CD\u65B9\u5F0F:\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4E8B\u4EF6\u4F20\u9012\u5B9A\u4E49\u4E86\u5143\u7D20\u4E8B\u4EF6\u89E6\u53D1\u7684\u987A\u5E8F\u3002\u4F8B\u5982,\u5F53\u70B9\u51FB\u4E00\u4E2A\u5D4C\u5957\u5728",(0,l.jsx)(n.code,{children:"<div>"}),"\u4E2D\u7684",(0,l.jsx)(n.code,{children:"<p>"}),"\u5143\u7D20\u65F6,\u4E24\u4E2A\u5143\u7D20\u4E0A\u7ED1\u5B9A\u7684 click \u4E8B\u4EF6\u89E6\u53D1\u987A\u5E8F\u53D6\u51B3\u4E8E\u4F20\u9012\u65B9\u5F0F:"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4E8B\u4EF6\u5192\u6CE1",children:"\u4E8B\u4EF6\u5192\u6CE1"}),"\n",(0,l.jsxs)(n.p,{children:["\u4E8B\u4EF6\u4ECE\u6700\u5185\u5C42\u5143\u7D20\u5F00\u59CB\u89E6\u53D1,\u7136\u540E\u9010\u7EA7\u5411\u4E0A\u4F20\u64AD\u5230\u6700\u5916\u5C42\u3002\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D,",(0,l.jsx)(n.code,{children:"<p>"}),"\u4E0A\u7684 click \u4E8B\u4EF6\u4F1A\u5148\u89E6\u53D1,\u4E4B\u540E\u518D\u89E6\u53D1",(0,l.jsx)(n.code,{children:"<div>"}),"\u4E0A\u7684 click \u4E8B\u4EF6\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4E8B\u4EF6\u6355\u83B7",children:"\u4E8B\u4EF6\u6355\u83B7"}),"\n",(0,l.jsxs)(n.p,{children:["\u4E8B\u4EF6\u4ECE\u6700\u5916\u5C42\u5F00\u59CB\u89E6\u53D1,\u7136\u540E\u9010\u7EA7\u5411\u5185\u4F20\u64AD\u5230\u6700\u5177\u4F53\u7684\u5143\u7D20\u3002\u8FD8\u662F\u4E0A\u9762\u7684\u4F8B\u5B50,",(0,l.jsx)(n.code,{children:"<div>"}),"\u4E0A\u7684 click \u4E8B\u4EF6\u4F1A\u5148\u89E6\u53D1,\u4E4B\u540E\u518D\u89E6\u53D1",(0,l.jsx)(n.code,{children:"<p>"}),"\u4E0A\u7684 click \u4E8B\u4EF6\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"addEventListener()"}),"\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u53EF\u9009\u7684",(0,l.jsx)(n.code,{children:"useCapture"}),"\u53C2\u6570\u6765\u8BBE\u7F6E\u4F20\u9012\u7C7B\u578B:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"element.addEventListener(event, function, useCapture);\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"useCapture"}),"\u9ED8\u8BA4\u4E3A",(0,l.jsx)(n.code,{children:"false"}),",\u8868\u793A\u4F7F\u7528\u5192\u6CE1\u4F20\u9012\u3002\u5F53\u8BBE\u7F6E\u4E3A",(0,l.jsx)(n.code,{children:"true"}),"\u65F6,\u5219\u4F7F\u7528\u6355\u83B7\u4F20\u9012\u3002\u4F8B\u5982:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"document.getElementById('myDiv').addEventListener('click', handleClick, true);\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8FD9\u6837,\u540D\u4E3A",(0,l.jsx)(n.code,{children:"myDiv"}),"\u7684\u5143\u7D20\u5728\u6355\u83B7\u9636\u6BB5\u5C31\u4F1A\u89E6\u53D1",(0,l.jsx)(n.code,{children:"handleClick"}),"\u51FD\u6570\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u7406\u89E3\u4E8B\u4EF6\u4F20\u9012\u673A\u5236\u6709\u52A9\u4E8E\u6211\u4EEC\u6B63\u786E\u5904\u7406\u4E8B\u4EF6,\u907F\u514D\u53EF\u80FD\u51FA\u73B0\u7684\u95EE\u9898\u3002\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D,\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u4F7F\u7528\u4E8B\u4EF6\u5192\u6CE1\u5C31\u8DB3\u591F\u4E86\u3002\u53EA\u6709\u5728\u7279\u5B9A\u573A\u666F\u4E0B,\u6211\u4EEC\u624D\u9700\u8981\u4F7F\u7528\u4E8B\u4EF6\u6355\u83B7\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},73802:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/73130364fbf1600467ae5c0f2d640c1e-08b5b95ee72f9c1879946b8d23198659.png"},12651:function(e,n,d){d.d(n,{Z:function(){return c}});let c=d.p+"assets/images/f247e2a68563a856c4dab5e1925535e4-30d24d7fd22ba57f06ddc9876dfffae6.png"},50065:function(e,n,d){d.d(n,{Z:function(){return s},a:function(){return t}});var c=d(67294);let l={},i=c.createContext(l);function t(e){let n=c.useContext(i);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);