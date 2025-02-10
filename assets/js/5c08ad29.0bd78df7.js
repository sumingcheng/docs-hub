"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["20601"],{68601:function(e,i,n){n.r(i),n.d(i,{default:()=>a,frontMatter:()=>d,metadata:()=>c,assets:()=>h,toc:()=>l,contentTitle:()=>t});var c=JSON.parse('{"id":"Network/AJAX/JSONP\u8DE8\u57DF","title":"JSONP \u8DE8\u57DF\u8BF7\u6C42 JSON \u6570\u636E","description":"JSONP\uFF08JSON with Padding\uFF09\u662F\u4E00\u79CD\u8DE8\u57DF\u83B7\u53D6 JSON \u6570\u636E\u7684\u975E\u5B98\u65B9\u4F7F\u7528\u6A21\u5F0F\u3002\u5B83\u5229\u7528\u4E86\u67D0\u4E9B HTML \u6807\u7B7E\u4E0D\u53D7\u540C\u6E90\u7B56\u7565\u9650\u5236\u7684\u7279\u6027\uFF0C\u6BD4\u5982script\u6807\u7B7E\u53EF\u4EE5\u5F15\u5165\u4E0D\u540C\u6E90\u7684 JavaScript \u6587\u4EF6\u3002","source":"@site/docs/Network/AJAX/50.JSONP\u8DE8\u57DF.md","sourceDirName":"Network/AJAX","slug":"/Network/AJAX/JSONP\u8DE8\u57DF","permalink":"/docs-hub/Network/AJAX/JSONP\u8DE8\u57DF","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Network/AJAX/50.JSONP\u8DE8\u57DF.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":50,"frontMatter":{},"sidebar":"networkAjaxSidebar","previous":{"title":"\u8DE8\u57DF HTTP \u8BF7\u6C42\u7684\u516D\u79CD\u65B9\u6CD5","permalink":"/docs-hub/Network/AJAX/\u8DE8\u57DF\u65B9\u6CD5\u7684\u516D\u79CD\u65B9\u6CD5"},"next":{"title":"iframe \u7F51\u9875\u5BFC\u822A\u4E0E\u4EE3\u7801\u7F16\u8F91\u5668\u5E94\u7528","permalink":"/docs-hub/Network/AJAX/iframe\u7F51\u9875\u5BFC\u822A-\u4EE3\u7801\u7F16\u8F91\u5668"}}'),s=n("85893"),r=n("50065");let d={},t="JSONP \u8DE8\u57DF\u8BF7\u6C42 JSON \u6570\u636E",h={},l=[{value:"\u5BA2\u6237\u7AEF\u671F\u671B\u8FD4\u56DE\u7684 JSON \u683C\u5F0F",id:"\u5BA2\u6237\u7AEF\u671F\u671B\u8FD4\u56DE\u7684-json-\u683C\u5F0F",level:2},{value:"JSONP \u5B9E\u9645\u8FD4\u56DE\u7684\u683C\u5F0F",id:"jsonp-\u5B9E\u9645\u8FD4\u56DE\u7684\u683C\u5F0F",level:2},{value:"\u6D4F\u89C8\u5668\u5982\u4F55\u89E3\u6790 script \u6807\u7B7E\u5F15\u5165\u7684\u8D44\u6E90",id:"\u6D4F\u89C8\u5668\u5982\u4F55\u89E3\u6790-script-\u6807\u7B7E\u5F15\u5165\u7684\u8D44\u6E90",level:2},{value:"\u4F7F\u7528 jQuery \u53D1\u9001 JSONP \u8BF7\u6C42",id:"\u4F7F\u7528-jquery-\u53D1\u9001-jsonp-\u8BF7\u6C42",level:2},{value:"\u8DE8\u57DF\u8BF7\u6C42\u7684\u5B8C\u6574\u793A\u4F8B",id:"\u8DE8\u57DF\u8BF7\u6C42\u7684\u5B8C\u6574\u793A\u4F8B",level:2}];function o(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"jsonp-\u8DE8\u57DF\u8BF7\u6C42-json-\u6570\u636E",children:"JSONP \u8DE8\u57DF\u8BF7\u6C42 JSON \u6570\u636E"})}),"\n",(0,s.jsxs)(i.p,{children:["JSONP\uFF08JSON with Padding\uFF09\u662F\u4E00\u79CD\u8DE8\u57DF\u83B7\u53D6 JSON \u6570\u636E\u7684\u975E\u5B98\u65B9\u4F7F\u7528\u6A21\u5F0F\u3002\u5B83\u5229\u7528\u4E86\u67D0\u4E9B HTML \u6807\u7B7E\u4E0D\u53D7\u540C\u6E90\u7B56\u7565\u9650\u5236\u7684\u7279\u6027\uFF0C\u6BD4\u5982",(0,s.jsx)(i.code,{children:"script"}),"\u6807\u7B7E\u53EF\u4EE5\u5F15\u5165\u4E0D\u540C\u6E90\u7684 JavaScript \u6587\u4EF6\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A\nJSONP \u6293\u53D6\u7684\u8D44\u6E90\u5E76\u4E0D\u662F\u76F4\u63A5\u7684 JSON \u6570\u636E\uFF0C\u800C\u662F\u4E00\u4E2A\u5E26\u6709 JSON \u6570\u636E\u4F5C\u4E3A\u53C2\u6570\u7684\u51FD\u6570\u8C03\u7528\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u5BA2\u6237\u7AEF\u671F\u671B\u8FD4\u56DE\u7684-json-\u683C\u5F0F",children:"\u5BA2\u6237\u7AEF\u671F\u671B\u8FD4\u56DE\u7684 JSON \u683C\u5F0F"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{ "name": "Jacky", "age": "18" }\n'})}),"\n",(0,s.jsx)(i.h2,{id:"jsonp-\u5B9E\u9645\u8FD4\u56DE\u7684\u683C\u5F0F",children:"JSONP \u5B9E\u9645\u8FD4\u56DE\u7684\u683C\u5F0F"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"callback({ name: 'Jacky', age: '18' });\n"})}),"\n",(0,s.jsx)(i.p,{children:"JSONP \u5229\u7528\u4E86\u4EE5\u4E0B\u51E0\u79CD\u6807\u7B7E\u4E0D\u53D7\u540C\u6E90\u7B56\u7565\u5F71\u54CD\u7684\u7279\u6027\uFF1A"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"img"}),"\u6807\u7B7E\u7684",(0,s.jsx)(i.code,{children:"src"}),"\u5C5E\u6027\u53EF\u4EE5\u5F15\u5165\u4E0D\u540C\u6E90\u7684\u56FE\u7247\u8D44\u6E90"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"link"}),"\u6807\u7B7E\u7684",(0,s.jsx)(i.code,{children:"href"}),"\u5C5E\u6027\u53EF\u4EE5\u5F15\u5165\u4E0D\u540C\u6E90\u7684 CSS \u6587\u4EF6"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"iframe"}),"\u6807\u7B7E\u7684",(0,s.jsx)(i.code,{children:"src"}),"\u5C5E\u6027\u53EF\u4EE5\u5F15\u5165\u4E0D\u540C\u6E90\u7684\u7F51\u9875"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"script"}),"\u6807\u7B7E\u7684",(0,s.jsx)(i.code,{children:"src"}),"\u5C5E\u6027\u53EF\u4EE5\u5F15\u5165\u4E0D\u540C\u6E90\u7684 JavaScript \u6587\u4EF6"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u6D4F\u89C8\u5668\u5982\u4F55\u89E3\u6790-script-\u6807\u7B7E\u5F15\u5165\u7684\u8D44\u6E90",children:"\u6D4F\u89C8\u5668\u5982\u4F55\u89E3\u6790 script \u6807\u7B7E\u5F15\u5165\u7684\u8D44\u6E90"}),"\n",(0,s.jsxs)(i.p,{children:["\u5F53\u4F7F\u7528",(0,s.jsx)(i.code,{children:"script"}),"\u6807\u7B7E\u5F15\u5165\u4E00\u4E2A\u8D44\u6E90\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C06\u5176\u4F5C\u4E3A JavaScript \u4EE3\u7801\u6765\u6267\u884C\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u4F8B\u5982\u6709\u4EE5\u4E0B HTML \u4EE3\u7801\uFF1A"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-html",children:'<script src="./data.js"><\/script>\n<script>\n  console.log(username);\n<\/script>\n'})}),"\n",(0,s.jsxs)(i.p,{children:["\u5047\u8BBE",(0,s.jsx)(i.code,{children:"data.js"}),"\u6587\u4EF6\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"var username = 'Jacky';\n"})}),"\n",(0,s.jsxs)(i.p,{children:["\u6267\u884C\u7ED3\u679C\uFF1A\n",(0,s.jsx)(i.img,{src:n(35821).Z+"",width:"396",height:"186"})]}),"\n",(0,s.jsxs)(i.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C",(0,s.jsx)(i.code,{children:"script"}),"\u6807\u7B7E\u6210\u529F\u5F15\u5165\u5E76\u6267\u884C\u4E86",(0,s.jsx)(i.code,{children:"data.js"}),"\u4E2D\u7684\u4EE3\u7801\uFF0C\u56E0\u6B64\u7B2C\u4E8C\u4E2A",(0,s.jsx)(i.code,{children:"script"}),"\u6807\u7B7E\u4E2D\u53EF\u4EE5\u8BBF\u95EE\u5230",(0,s.jsx)(i.code,{children:"username"}),"\u53D8\u91CF\u3002"]}),"\n",(0,s.jsx)(i.h2,{id:"\u4F7F\u7528-jquery-\u53D1\u9001-jsonp-\u8BF7\u6C42",children:"\u4F7F\u7528 jQuery \u53D1\u9001 JSONP \u8BF7\u6C42"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"$.ajax({\n  type: 'get',\n  url: 'http://www.example.com/data',\n  dataType: 'jsonp',\n  jsonp: 'callback',\n  success: function (response) {\n    console.log(response);\n  },\n});\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u5176\u4E2D\u7684\u4E00\u4E9B\u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'dataType: "jsonp"'}),"\u8868\u793A\u4F7F\u7528 JSONP \u65B9\u5F0F\u8BF7\u6C42"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"jsonp: 'callback'"}),"\u6307\u5B9A\u56DE\u8C03\u51FD\u6570\u540D\u7684\u53C2\u6570\u540D\uFF0C\u9ED8\u8BA4\u4E3A",(0,s.jsx)(i.code,{children:"callback"})]}),"\n",(0,s.jsxs)(i.li,{children:["\u5982\u679C\u4E0D\u6307\u5B9A",(0,s.jsx)(i.code,{children:"jsonpCallback"}),"\uFF0C\u8FD4\u56DE\u7684\u6570\u636E\u4F1A\u4F20\u5165",(0,s.jsx)(i.code,{children:"success"}),"\u56DE\u8C03\u51FD\u6570"]}),"\n",(0,s.jsxs)(i.li,{children:["\u5982\u679C\u6307\u5B9A\u4E86",(0,s.jsx)(i.code,{children:"jsonpCallback: 'handleResponse'"}),"\uFF0C\u5219\u8FD4\u56DE\u7684\u6570\u636E\u4F1A\u4F20\u5165\u540D\u4E3A",(0,s.jsx)(i.code,{children:"handleResponse"}),"\u7684\u5168\u5C40\u51FD\u6570"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u8DE8\u57DF\u8BF7\u6C42\u7684\u5B8C\u6574\u793A\u4F8B",children:"\u8DE8\u57DF\u8BF7\u6C42\u7684\u5B8C\u6574\u793A\u4F8B"}),"\n",(0,s.jsxs)(i.p,{children:["\u5728\u4E0B\u9762\u7684\u4ED3\u5E93\u4E2D\u6709\u4E00\u4E2A\u4F7F\u7528 JSONP \u8DE8\u57DF\u8BF7\u6C42\u767E\u5EA6\u641C\u7D22\u5EFA\u8BAE\u6570\u636E\u7684\u5B8C\u6574\u793A\u4F8B\uFF1A\n",(0,s.jsx)(i.a,{href:"https://github.com/sumingcheng/JavaScript-practise/tree/main/AJAX/baidu_search",children:"https://github.com/sumingcheng/JavaScript-practise/tree/main/AJAX/baidu_search"})]})]})}function a(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},35821:function(e,i,n){n.d(i,{Z:function(){return c}});let c="data:image/png;base64,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"},50065:function(e,i,n){n.d(i,{Z:function(){return t},a:function(){return d}});var c=n(67294);let s={},r=c.createContext(s);function d(e){let i=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(r.Provider,{value:i},e.children)}}}]);