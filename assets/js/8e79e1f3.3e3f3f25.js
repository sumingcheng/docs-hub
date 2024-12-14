"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["59106"],{60664:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>r});var i=JSON.parse('{"id":"Network/AJAX/\u8DE8\u57DF\u65B9\u6CD5\u7684\u516D\u79CD\u65B9\u6CD5","title":"\u8DE8\u57DF HTTP \u8BF7\u6C42\u7684\u516D\u79CD\u65B9\u6CD5","description":"\u540C\u6E90\u7B56\u7565\u4E0E\u8DE8\u57DF","source":"@site/docs/Network/AJAX/40.\u8DE8\u57DF\u65B9\u6CD5\u7684\u516D\u79CD\u65B9\u6CD5.md","sourceDirName":"Network/AJAX","slug":"/Network/AJAX/\u8DE8\u57DF\u65B9\u6CD5\u7684\u516D\u79CD\u65B9\u6CD5","permalink":"/docs-hub/Network/AJAX/\u8DE8\u57DF\u65B9\u6CD5\u7684\u516D\u79CD\u65B9\u6CD5","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Network/AJAX/40.\u8DE8\u57DF\u65B9\u6CD5\u7684\u516D\u79CD\u65B9\u6CD5.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":40,"frontMatter":{},"sidebar":"networkAjaxSidebar","previous":{"title":"Axios \u57FA\u7840\u4F7F\u7528","permalink":"/docs-hub/Network/AJAX/Axios\u57FA\u7840\u4F7F\u7528"},"next":{"title":"JSONP \u8DE8\u57DF\u8BF7\u6C42 JSON \u6570\u636E","permalink":"/docs-hub/Network/AJAX/JSONP\u8DE8\u57DF"}}'),c=d("85893"),s=d("50065");let t={},r="\u8DE8\u57DF HTTP \u8BF7\u6C42\u7684\u516D\u79CD\u65B9\u6CD5",o={},a=[{value:"\u540C\u6E90\u7B56\u7565\u4E0E\u8DE8\u57DF",id:"\u540C\u6E90\u7B56\u7565\u4E0E\u8DE8\u57DF",level:2},{value:"window.name \u8DE8\u57DF",id:"windowname-\u8DE8\u57DF",level:2},{value:"postMessage \u8DE8\u57DF",id:"postmessage-\u8DE8\u57DF",level:2},{value:"\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF08CORS\uFF09",id:"\u8DE8\u57DF\u8D44\u6E90\u5171\u4EABcors",level:2},{value:"\u5176\u4ED6\u8DE8\u57DF\u65B9\u6CD5",id:"\u5176\u4ED6\u8DE8\u57DF\u65B9\u6CD5",level:2},{value:"\u670D\u52A1\u5668\u4E2D\u8F6C",id:"\u670D\u52A1\u5668\u4E2D\u8F6C",level:3},{value:"document.domain",id:"documentdomain",level:3},{value:"location.hash",id:"locationhash",level:3}];function l(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u8DE8\u57DF-http-\u8BF7\u6C42\u7684\u516D\u79CD\u65B9\u6CD5",children:"\u8DE8\u57DF HTTP \u8BF7\u6C42\u7684\u516D\u79CD\u65B9\u6CD5"})}),"\n",(0,c.jsx)(n.h2,{id:"\u540C\u6E90\u7B56\u7565\u4E0E\u8DE8\u57DF",children:"\u540C\u6E90\u7B56\u7565\u4E0E\u8DE8\u57DF"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u8BA8\u8BBA\u8DE8\u57DF\u65B9\u6CD5\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E00\u4E0B\u540C\u6E90\u7B56\u7565\u548C\u8DE8\u57DF\u7684\u6982\u5FF5\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6E90(\u57DF\u540D)\u7531\u4E09\u90E8\u5206\u7EC4\u6210\uFF1A\u534F\u8BAE + \u57DF\u540D + \u7AEF\u53E3\u3002\u5F53\u4E24\u4E2A URL \u7684\u534F\u8BAE\u3001\u57DF\u540D\u548C\u7AEF\u53E3\u5B8C\u5168\u76F8\u540C\u65F6\uFF0C\u6211\u4EEC\u79F0\u5B83\u4EEC\u662F\u540C\u6E90\u7684\u3002\u53CD\u4E4B\uFF0C\u5982\u679C\u534F\u8BAE\u3001\u57DF\u540D\u6216\u7AEF\u53E3\u6709\u4EFB\u610F\u4E00\u9879\u4E0D\u540C\uFF0C\u5C31\u79F0\u4E3A\u8DE8\u57DF\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"windowname-\u8DE8\u57DF",children:"window.name \u8DE8\u57DF"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"window.name"}),"\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u5B83\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(59019).Z+"",width:"1572",height:"314"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6BCF\u4E2A\u6D4F\u89C8\u5668\u7A97\u53E3\uFF08\u5305\u62EC",(0,c.jsx)(n.code,{children:"iframe"}),"\uFF09\u90FD\u6709\u4E00\u4E2A\u5168\u5C40\u7684",(0,c.jsx)(n.code,{children:"window"}),"\u5BF9\u8C61\uFF0C\u800C",(0,c.jsx)(n.code,{children:"window.name"}),"\u662F",(0,c.jsx)(n.code,{children:"window"}),"\u5BF9\u8C61\u7684\u4E00\u4E2A\u5C5E\u6027\u3002\n\u540C\u4E00\u4E2A\u7A97\u53E3\u7684\u751F\u547D\u5468\u671F\u5185\uFF0C",(0,c.jsx)(n.code,{children:"window.name"}),"\u7684\u503C\u53EF\u4EE5\u88AB\u6240\u6709\u9875\u9762\u5171\u4EAB\u548C\u4FEE\u6539\u3002\n\u5373\u4F7F\u5728\u7A97\u53E3\u52A0\u8F7D\u4E86\u4E0D\u540C\u7684\u9875\u9762\uFF0C",(0,c.jsx)(n.code,{children:"window.name"}),"\u7684\u503C\u4E5F\u4E0D\u4F1A\u6539\u53D8\u3002\n",(0,c.jsx)(n.code,{children:"window.name"}),"\u53EF\u4EE5\u5B58\u50A8\u7EA6 2M \u7684\u6570\u636E\u3002\n\u5982\u679C\u7236\u7A97\u53E3\u548C",(0,c.jsx)(n.code,{children:"iframe"}),"\u7684\u6E90\u4E0D\u540C\uFF0C\u7236\u7A97\u53E3\u65E0\u6CD5\u901A\u8FC7",(0,c.jsx)(n.code,{children:"iframe.contentWindow.name"}),"\u83B7\u53D6\u503C\uFF0C\u4F46",(0,c.jsx)(n.code,{children:"iframe"}),"\u5185\u90E8\u4E0D\u53D7\u6B64\u9650\u5236\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u57FA\u4E8E\u4EE5\u4E0A\u7279\u70B9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528",(0,c.jsx)(n.code,{children:"window.name"}),"\u6765\u5B9E\u73B0\u8DE8\u57DF\u6570\u636E\u4F20\u8F93\u3002\u5177\u4F53\u65B9\u6CD5\u662F\uFF1A\u5148\u5728",(0,c.jsx)(n.code,{children:"iframe"}),"\u4E2D\u4FDD\u5B58\u9700\u8981\u4F20\u8F93\u7684\u6570\u636E\u5230",(0,c.jsx)(n.code,{children:"window.name"}),"\uFF0C\u7136\u540E\u5C06",(0,c.jsx)(n.code,{children:"iframe"}),"\u8DF3\u8F6C\u5230\u4E00\u4E2A\u4E0E\u7236\u7A97\u53E3\u540C\u6E90\u7684\u9875\u9762\uFF0C\u8FD9\u65F6\u7236\u7A97\u53E3\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230",(0,c.jsx)(n.code,{children:"iframe"}),"\u7684",(0,c.jsx)(n.code,{children:"window.name"}),"\u4E86\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"postmessage-\u8DE8\u57DF",children:"postMessage \u8DE8\u57DF"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"postMessage"}),"\u662F\u4E00\u79CD\u5B89\u5168\u7684\u8DE8\u57DF\u901A\u4FE1\u65B9\u5F0F\uFF0C\u5B83\u7684\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"otherWindow.postMessage(message, targetOrigin);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["otherWindow\uFF1A\u63A5\u6536\u6D88\u606F\u7684\u7A97\u53E3\u7684\u5F15\u7528\uFF0C\u6BD4\u5982",(0,c.jsx)(n.code,{children:"iframe.contentWindow"}),"\u3002\nmessage\uFF1A\u9700\u8981\u53D1\u9001\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u662F\u4EFB\u610F\u57FA\u672C\u7C7B\u578B\u6216\u53EF\u590D\u5236\u7684\u5BF9\u8C61\u3002\ntargetOrigin\uFF1A\u63A5\u6536\u65B9\u7A97\u53E3\u7684\u6E90\uFF0C\u683C\u5F0F\u4E3A",(0,c.jsx)(n.code,{children:"\u534F\u8BAE://\u57DF\u540D:\u7AEF\u53E3"}),"\uFF0C\u6216\u8005",(0,c.jsx)(n.code,{children:"*"}),"\u8868\u793A\u4E0D\u9650\u5236\u57DF\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(54815).Z+"",width:"1437",height:"336"})}),"\n",(0,c.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u63A5\u6536\u65B9\u7A97\u53E3\u9700\u8981\u76D1\u542C",(0,c.jsx)(n.code,{children:"message"}),"\u4E8B\u4EF6\u6765\u63A5\u6536\u6570\u636E\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u867D\u7136",(0,c.jsx)(n.code,{children:"postMessage"}),"\u662F\u4E00\u79CD\u5B89\u5168\u7684\u8DE8\u57DF\u65B9\u5F0F\uFF0C\u4F46\u5728\u4F7F\u7528\u65F6\u4ECD\u9700\u6CE8\u610F\u4EE5\u4E0B\u95EE\u9898\uFF1A"]}),"\n",(0,c.jsx)(n.p,{children:"\u6570\u636E\u53EF\u80FD\u88AB\u6076\u610F\u7F51\u9875\u4F2A\u9020\u3002\n\u53EF\u80FD\u5F15\u53D1 XSS \u653B\u51FB\u3002\n\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\u3002\n\u8C03\u8BD5\u65F6\u5BB9\u6613\u51FA\u9519\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8DE8\u57DF\u8D44\u6E90\u5171\u4EABcors",children:"\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF08CORS\uFF09"}),"\n",(0,c.jsxs)(n.p,{children:["CORS \u662F\u4E00\u4E2A W3C \u6807\u51C6\uFF0C\u5B83\u5141\u8BB8\u6D4F\u89C8\u5668\u5411\u8DE8\u57DF\u7684\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u3002\u901A\u8FC7\u5728\u670D\u52A1\u7AEF\u8BBE\u7F6E",(0,c.jsx)(n.code,{children:"Access-Control-Allow-Origin"}),"\u5C31\u53EF\u4EE5\u5F00\u542F CORS\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(40076).Z+"",width:"1406",height:"429"})}),"\n",(0,c.jsx)(n.p,{children:"CORS \u8BF7\u6C42\u5206\u4E3A\u4E24\u7C7B\uFF1A\u7B80\u5355\u8BF7\u6C42\u548C\u975E\u7B80\u5355\u8BF7\u6C42\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u7B80\u5355\u8BF7\u6C42\u9700\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u4E24\u4E2A\u6761\u4EF6\uFF1A"}),"\n",(0,c.jsx)(n.p,{children:"\u8BF7\u6C42\u65B9\u6CD5\u662F HEAD\u3001GET \u6216 POST\u3002\n\u8BF7\u6C42\u5934\u7684\u53D6\u503C\u8303\u56F4\uFF1AAccept\u3001Accept-Language\u3001Content-Language\u3001Last-Event-ID\u3001Content-Type\uFF08\u53EA\u9650\u4E8E application/x-www-form-urlencoded\u3001multipart/form-data\u3001text/plain\uFF09\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4E0D\u6EE1\u8DB3\u4EE5\u4E0A\u6761\u4EF6\u7684\u5C31\u662F\u975E\u7B80\u5355\u8BF7\u6C42\uFF0C\u975E\u7B80\u5355\u8BF7\u6C42\u4F1A\u5148\u53D1\u4E00\u6B21\u9884\u68C0\u8BF7\u6C42\uFF0C\u8BE2\u95EE\u670D\u52A1\u5668\u662F\u5426\u5141\u8BB8\u8BE5\u8BF7\u6C42\uFF0C\u5F97\u5230\u80AF\u5B9A\u7B54\u590D\u540E\u624D\u4F1A\u53D1\u9001\u771F\u6B63\u7684\u8BF7\u6C42\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u867D\u7136 CORS \u662F\u4E00\u79CD\u5F3A\u5927\u7684\u8DE8\u57DF\u89E3\u51B3\u65B9\u6848\uFF0C\u4F46\u5728\u4F7F\u7528\u65F6\u9700\u8981\u6CE8\u610F CORS \u8BF7\u6C42\u53EF\u80FD\u4F1A\u5F15\u53D1\u4E00\u4E9B\u5B89\u5168\u95EE\u9898\uFF0C\u9700\u8981\u5728\u670D\u52A1\u7AEF\u505A\u597D\u9632\u8303\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u5176\u4ED6\u8DE8\u57DF\u65B9\u6CD5",children:"\u5176\u4ED6\u8DE8\u57DF\u65B9\u6CD5"}),"\n",(0,c.jsx)(n.p,{children:"\u9664\u4E86\u4E0A\u8FF0\u51E0\u79CD\u4E3B\u6D41\u7684\u8DE8\u57DF\u65B9\u6CD5\uFF0C\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u8DE8\u57DF\u65B9\u5F0F\uFF1A"}),"\n",(0,c.jsx)(n.h3,{id:"\u670D\u52A1\u5668\u4E2D\u8F6C",children:"\u670D\u52A1\u5668\u4E2D\u8F6C"}),"\n",(0,c.jsx)(n.p,{children:"\u5C06\u8DE8\u57DF\u8BF7\u6C42\u5148\u53D1\u9001\u5230\u4E0E\u9875\u9762\u540C\u6E90\u7684\u670D\u52A1\u5668\uFF0C\u518D\u7531\u670D\u52A1\u5668\u8F6C\u53D1\u5230\u76EE\u6807\u670D\u52A1\u5668\uFF0C\u5F97\u5230\u54CD\u5E94\u540E\u518D\u8F6C\u53D1\u56DE\u9875\u9762\u3002\u8FD9\u79CD\u65B9\u5F0F\u5B8C\u5168\u4F9D\u8D56\u540E\u7AEF\u5B9E\u73B0\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(67245).Z+"",width:"1416",height:"826"})}),"\n",(0,c.jsx)(n.h3,{id:"documentdomain",children:"document.domain"}),"\n",(0,c.jsxs)(n.p,{children:["\u5BF9\u4E8E\u4E3B\u57DF\u540D\u76F8\u540C\u800C\u5B50\u57DF\u540D\u4E0D\u540C\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",(0,c.jsx)(n.code,{children:"document.domain"}),"\u6765\u5B9E\u73B0\u8DE8\u57DF\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(21137).Z+"",width:"1353",height:"839"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5177\u4F53\u505A\u6CD5\u662F\u5728\u4E24\u4E2A\u9875\u9762\u4E2D\u5206\u522B\u8BBE\u7F6E",(0,c.jsx)(n.code,{children:"document.domain"}),"\u4E3A\u76F8\u540C\u7684\u4E3B\u57DF\u540D\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7",(0,c.jsx)(n.code,{children:"iframe.contentWindow"}),"\u6765\u83B7\u53D6",(0,c.jsx)(n.code,{children:"iframe"}),"\u9875\u9762\u7684",(0,c.jsx)(n.code,{children:"window"}),"\u5BF9\u8C61\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6570\u636E\u901A\u4FE1\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u53EA\u9002\u7528\u4E8E\u4E3B\u57DF\u540D\u76F8\u540C\u7684\u60C5\u51B5\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"locationhash",children:"location.hash"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"location.hash"}),"\u53EF\u4EE5\u7528\u6765\u4F20\u9012\u5C11\u91CF\u7684\u6570\u636E\uFF0C\u4F20\u8F93\u65B9\u5F0F\u662F\u5C06\u6570\u636E\u5199\u5165 URL \u7684 hash \u90E8\u5206\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(84951).Z+"",width:"1556",height:"462"})}),"\n",(0,c.jsx)(n.p,{children:"\u7531\u4E8E\u6570\u636E\u662F\u660E\u6587\u4F20\u8F93\u7684\uFF0C\u6240\u4EE5\u53EA\u9002\u5408\u4F20\u8F93\u4E00\u4E9B\u975E\u654F\u611F\u7684\u5C0F\u6570\u636E\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},21137:function(e,n,d){d.d(n,{Z:function(){return i}});let i=d.p+"assets/images/0f451924e1e1526307701f3ef1482b04-03902fb56d85c4d61420007e67b5f79b.png"},40076:function(e,n,d){d.d(n,{Z:function(){return i}});let i=d.p+"assets/images/226af5b626dc1963ee8fb3aea63a0d30-b5df7f8babaff9d40a8632b0187dc96e.png"},54815:function(e,n,d){d.d(n,{Z:function(){return i}});let i=d.p+"assets/images/26b9b0f5eacd755761c4b64918836935-e15cfa00b85d12bc9580d15952bae54e.png"},67245:function(e,n,d){d.d(n,{Z:function(){return i}});let i=d.p+"assets/images/5295bc01d647e5b355339c7360319924-cd0a39da17dcce7368ffd74c54b61c06.png"},59019:function(e,n,d){d.d(n,{Z:function(){return i}});let i=d.p+"assets/images/99bf48aa33b0f2a1d1ec2a1bbb62db23-f9999163e90924a01c8cfe05da4666db.png"},84951:function(e,n,d){d.d(n,{Z:function(){return i}});let i=d.p+"assets/images/f0214e6c3ae2d31c77d9ca19b0c939e7-65d6784fcb874a1cc35c9b9c45c34210.png"},50065:function(e,n,d){d.d(n,{Z:function(){return r},a:function(){return t}});var i=d(67294);let c={},s=i.createContext(c);function t(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);