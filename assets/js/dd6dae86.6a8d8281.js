"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["50969"],{2083:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>t});var s=JSON.parse('{"id":"Network/AJAX/JSON\u57FA\u7840\u4E0E\u6570\u636E\u89E3\u6790-JSON\u65B9\u6CD5-AJAX\u521D\u8BC6","title":"JSON \u57FA\u7840\u4E0E\u6570\u636E\u89E3\u6790","description":"\u4EC0\u4E48\u662F JSON","source":"@site/docs/Network/AJAX/5.JSON\u57FA\u7840\u4E0E\u6570\u636E\u89E3\u6790-JSON\u65B9\u6CD5-AJAX\u521D\u8BC6.md","sourceDirName":"Network/AJAX","slug":"/Network/AJAX/JSON\u57FA\u7840\u4E0E\u6570\u636E\u89E3\u6790-JSON\u65B9\u6CD5-AJAX\u521D\u8BC6","permalink":"/docs-hub/Network/AJAX/JSON\u57FA\u7840\u4E0E\u6570\u636E\u89E3\u6790-JSON\u65B9\u6CD5-AJAX\u521D\u8BC6","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Network/AJAX/5.JSON\u57FA\u7840\u4E0E\u6570\u636E\u89E3\u6790-JSON\u65B9\u6CD5-AJAX\u521D\u8BC6.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":5,"frontMatter":{},"sidebar":"networkAjaxSidebar","next":{"title":"AJAX \u539F\u751F\u5C01\u88C5","permalink":"/docs-hub/Network/AJAX/\u8BF7\u6C42-AJAX-\u539F\u751FAJAX\u5C01\u88C5"}}'),i=r("85893"),l=r("50065");let c={},t="JSON \u57FA\u7840\u4E0E\u6570\u636E\u89E3\u6790",o={},a=[{value:"\u4EC0\u4E48\u662F JSON",id:"\u4EC0\u4E48\u662F-json",level:2},{value:"JSON \u5E38\u7528\u65B9\u6CD5",id:"json-\u5E38\u7528\u65B9\u6CD5",level:2},{value:"\u4E09\u5927\u6570\u636E\u7C7B\u578B",id:"\u4E09\u5927\u6570\u636E\u7C7B\u578B",level:2},{value:"JSON \u5BF9\u8C61\u7684\u683C\u5F0F",id:"json-\u5BF9\u8C61\u7684\u683C\u5F0F",level:2},{value:"\u4E3A\u4EC0\u4E48 JSON \u4F1A\u53D6\u4EE3 XML",id:"\u4E3A\u4EC0\u4E48-json-\u4F1A\u53D6\u4EE3-xml",level:2},{value:"AJAX \u521D\u8BC6",id:"ajax-\u521D\u8BC6",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"json-\u57FA\u7840\u4E0E\u6570\u636E\u89E3\u6790",children:"JSON \u57FA\u7840\u4E0E\u6570\u636E\u89E3\u6790"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4EC0\u4E48\u662F-json",children:"\u4EC0\u4E48\u662F JSON"}),"\n",(0,i.jsx)(n.p,{children:"JSON \u5168\u79F0\u662F JavaScript Object Notation,\u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u6570\u636E\u4EA4\u6362\u683C\u5F0F\u3002\u5B83\u7684\u5B58\u5728\u662F\u4E3A\u4E86\u65B9\u4FBF\u6570\u636E\u4EA4\u4E92,\u56E0\u6B64 JSON \u6570\u636E\u4E00\u5B9A\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002\u4E0E JavaScript \u4E2D\u7684\u5BF9\u8C61\u4E0D\u540C,JSON \u4E2D\u7684\u5BF9\u8C61\u4E0D\u80FD\u5305\u542B\u65B9\u6CD5\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"json-\u5E38\u7528\u65B9\u6CD5",children:"JSON \u5E38\u7528\u65B9\u6CD5"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4F7F\u7528 JSON \u8FDB\u884C\u6570\u636E\u4EA4\u4E92\u65F6,\u901A\u5E38\u4F1A\u7528\u5230\u4EE5\u4E0B\u4E24\u4E2A\u65B9\u6CD5:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JSON.stringify()"}),":\u5C06 JavaScript \u5BF9\u8C61\u8F6C\u6362\u4E3A JSON \u5B57\u7B26\u4E32\u3002\n",(0,i.jsx)(n.code,{children:"JSON.parse()"}),":\u5C06 JSON \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A JavaScript \u5BF9\u8C61\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE6\u7EC6\u7528\u6CD5\u53EF\u53C2\u8003\u4EE5\u4E0B\u94FE\u63A5:\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",children:"JSON.stringify() - JavaScript | MDN"}),"\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",children:"JSON.parse() - JavaScript | MDN"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E09\u5927\u6570\u636E\u7C7B\u578B",children:"\u4E09\u5927\u6570\u636E\u7C7B\u578B"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u6570\u636E\u4EA4\u4E92\u8FC7\u7A0B\u4E2D,\u901A\u5E38\u4F1A\u6D89\u53CA\u5230\u4E09\u5927\u7C7B\u578B\u7684\u6570\u636E:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u6807\u91CF(scalar):\u5305\u62EC\u5B57\u7B26\u4E32\u548C\u6570\u5B57"}),"\n",(0,i.jsx)(n.li,{children:"\u5E8F\u5217(sequence):\u5305\u62EC\u6570\u7EC4\u548C\u5217\u8868"}),"\n",(0,i.jsx)(n.li,{children:"\u6620\u5C04(mapping):\u952E\u503C\u5BF9"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"json-\u5BF9\u8C61\u7684\u683C\u5F0F",children:"JSON \u5BF9\u8C61\u7684\u683C\u5F0F"}),"\n",(0,i.jsx)(n.p,{children:"\u4E00\u4E2A\u6807\u51C6\u7684 JSON \u5BF9\u8C61\u5E94\u8BE5\u6EE1\u8DB3\u4EE5\u4E0B\u683C\u5F0F:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u952E\u540D\u548C\u952E\u503C\u5FC5\u987B\u7528\u53CC\u5F15\u53F7",(0,i.jsx)(n.code,{children:'""'}),"\u5305\u88F9"]}),"\n",(0,i.jsxs)(n.li,{children:["\u952E\u503C\u5BF9\u4E4B\u95F4\u7528\u5192\u53F7",(0,i.jsx)(n.code,{children:":"}),"\u9694\u5F00"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5E76\u5217\u7684\u6570\u636E\u4E4B\u95F4\u7528\u9017\u53F7",(0,i.jsx)(n.code,{children:","}),"\u9694\u5F00"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6620\u5C04\u7684\u96C6\u5408\u7528\u5927\u62EC\u53F7",(0,i.jsx)(n.code,{children:"{}"}),"\u5305\u88F9"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5E76\u5217\u6570\u636E\u7684\u96C6\u5408\u7528\u4E2D\u62EC\u53F7",(0,i.jsx)(n.code,{children:"[]"}),"\u5305\u88F9"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u7B26\u5408 JSON \u683C\u5F0F\u7684\u5BF9\u8C61\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Tom",\n  "age": 18,\n  "hobbies": ["football", "basketball"],\n  "scores": {\n    "math": 90,\n    "english": 85\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u4E3A\u4EC0\u4E48-json-\u4F1A\u53D6\u4EE3-xml",children:"\u4E3A\u4EC0\u4E48 JSON \u4F1A\u53D6\u4EE3 XML"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u65E9\u671F\u7684 Web \u5F00\u53D1\u4E2D,XML \u66FE\u662F\u6570\u636E\u4EA4\u4E92\u7684\u4E3B\u6D41\u683C\u5F0F\u3002\u4F46\u662F\u968F\u7740 JSON \u7684\u51FA\u73B0,\u5B83\u9010\u6E10\u53D6\u4EE3\u4E86 XML \u7684\u5730\u4F4D\u3002\u4E3B\u8981\u539F\u56E0\u6709\u4EE5\u4E0B\u51E0\u70B9:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"XML \u6570\u636E\u6587\u6863\u901A\u5E38\u5F88\u5927,\u4F20\u8F93\u6548\u7387\u4F4E"}),"\n",(0,i.jsx)(n.li,{children:"XML \u7684\u89E3\u6790\u6BD4\u8F83\u590D\u6742,\u5F00\u53D1\u6210\u672C\u9AD8"}),"\n",(0,i.jsx)(n.li,{children:"XML \u7684\u53EF\u8BFB\u6027\u8F83\u5DEE,\u4E0D\u6613\u8BFB\u5199"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u76F8\u6BD4\u4E4B\u4E0B,JSON \u5177\u6709\u4F53\u79EF\u5C0F\u3001\u89E3\u6790\u65B9\u4FBF\u3001\u53EF\u8BFB\u6027\u5F3A\u7B49\u4F18\u70B9,\u56E0\u6B64\u6210\u4E3A\u4E86\u5F53\u524D\u6700\u6D41\u884C\u7684\u6570\u636E\u4EA4\u4E92\u683C\u5F0F\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"ajax-\u521D\u8BC6",children:"AJAX \u521D\u8BC6"}),"\n",(0,i.jsx)(n.p,{children:"AJAX \u5168\u79F0 Asynchronous JavaScript and XML,\u662F\u4E00\u79CD\u5728\u65E0\u9700\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u7F51\u9875\u7684\u60C5\u51B5\u4E0B,\u80FD\u591F\u66F4\u65B0\u90E8\u5206\u7F51\u9875\u5185\u5BB9\u7684\u6280\u672F\u3002\u5B83\u7684\u51FA\u73B0\u5927\u5927\u63D0\u9AD8\u4E86 Web \u5E94\u7528\u7684\u6027\u80FD\u548C\u7528\u6237\u4F53\u9A8C\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 AJAX \u4E2D,JSON \u901A\u5E38\u4F5C\u4E3A\u6570\u636E\u54CD\u5E94\u7684\u683C\u5F0F\u3002\u5F53\u6211\u4EEC\u53D1\u9001\u4E00\u4E2A AJAX \u8BF7\u6C42\u65F6,\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u5C31\u662F\u4E00\u6BB5 JSON \u5B57\u7B26\u4E32,\u7136\u540E\u6211\u4EEC\u518D\u901A\u8FC7",(0,i.jsx)(n.code,{children:"JSON.parse()"}),"\u65B9\u6CD5\u5C06\u5176\u89E3\u6790\u4E3A JavaScript \u5BF9\u8C61,\u4ECE\u800C\u5B9E\u73B0\u6570\u636E\u7684\u5C55\u793A\u548C\u4EA4\u4E92\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528 jQuery \u53D1\u9001 AJAX \u8BF7\u6C42\u5E76\u5904\u7406 JSON \u54CD\u5E94\u7684\u7B80\u5355\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"$.ajax({\n  url: '/api/data',\n  type: 'GET',\n  dataType: 'json',\n  success: function (res) {\n    console.log(res.data);\n  },\n  error: function (err) {\n    console.error(err);\n  },\n});\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return c}});var s=r(67294);let i={},l=s.createContext(i);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);