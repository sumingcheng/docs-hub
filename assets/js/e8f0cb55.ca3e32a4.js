"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["75785"],{76878:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>o,toc:()=>t,contentTitle:()=>d});var a=JSON.parse('{"id":"Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/\u5F52\u7C7B\u51FD\u6570\u5C01\u88C5-\u6848\u4F8B","title":"\u6570\u636E\u5F52\u7C7B\u6280\u672F","description":"\u5355\u4E00\u5F52\u7C7B","source":"@site/docs/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/70.\u5F52\u7C7B\u51FD\u6570\u5C01\u88C5-\u6848\u4F8B.md","sourceDirName":"Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B","slug":"/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/\u5F52\u7C7B\u51FD\u6570\u5C01\u88C5-\u6848\u4F8B","permalink":"/docs-hub/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/\u5F52\u7C7B\u51FD\u6570\u5C01\u88C5-\u6848\u4F8B","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/70.\u5F52\u7C7B\u51FD\u6570\u5C01\u88C5-\u6848\u4F8B.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":70,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u9632\u6296\u4E0E\u8282\u6D41\u7684\u533A\u522B\u4E0E\u5E94\u7528","permalink":"/docs-hub/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/\u51FD\u6570\u9632\u6296-\u51FD\u6570\u8282\u6D41-\u9632\u6296\u548C\u8282\u6D41\u7684\u5E94\u7528"},"next":{"title":"\u51FD\u6570\u8BB0\u5FC6","permalink":"/docs-hub/Frontend/JavaScript/\u51FD\u6570\u5F0F\u7F16\u7A0B/\u51FD\u6570\u8BB0\u5FC6\u5E94\u7528"}}'),i=s("85893"),c=s("50065");let r={},d="\u6570\u636E\u5F52\u7C7B\u6280\u672F",o={},t=[{value:"\u5355\u4E00\u5F52\u7C7B",id:"\u5355\u4E00\u5F52\u7C7B",level:2},{value:"\u590D\u5408\u5F52\u7C7B",id:"\u590D\u5408\u5F52\u7C7B",level:2},{value:"\u5C01\u88C5\u5F52\u7C7B\u51FD\u6570",id:"\u5C01\u88C5\u5F52\u7C7B\u51FD\u6570",level:2}];function l(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u6570\u636E\u5F52\u7C7B\u6280\u672F",children:"\u6570\u636E\u5F52\u7C7B\u6280\u672F"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5355\u4E00\u5F52\u7C7B",children:"\u5355\u4E00\u5F52\u7C7B"}),"\n",(0,i.jsx)(e.p,{children:"\u5355\u4E00\u5F52\u7C7B\u6307\u7684\u662F\u4E00\u6761\u6570\u636E\u53EA\u5BF9\u5E94\u4E00\u4E2A\u79CD\u7C7B\uFF0C\u8FD9\u79CD\u6570\u636E\u7684\u5173\u8054\u53EB\u505A\u6620\u5C04\u3002\u4F8B\u5982\uFF0C\u4E0B\u9762\u7684 JSON \u6570\u636E\u4E2D\uFF0C\u6BCF\u4E2A\u4EBA\u7684\u6027\u522B\u53EA\u5BF9\u5E94\u7537\u6216\u5973\u5176\u4E2D\u4E00\u79CD\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "1": [\n    { "id": "1", "name": "\u5C0F\u660E", "sex": "1" },\n    { "id": "2", "name": "\u5C0F\u7EFF", "sex": "1" }\n  ],\n  "2": [\n    { "id": "3", "name": "\u5C0F\u5F71", "sex": "2" },\n    { "id": "4", "name": "\u5C0F\u59DC", "sex": "2" }\n  ]\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u5B9E\u73B0\u5355\u4E00\u5F52\u7C7B\u7684 JavaScript \u4EE3\u7801\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"<script>\n  var users = [\n    { id: '1', name: '\u5C0F\u660E', sex: '1' },\n    { id: '2', name: '\u5C0F\u7EFF', sex: '1' },\n    { id: '3', name: '\u5C0F\u5F71', sex: '2' },\n    { id: '4', name: '\u5C0F\u59DC', sex: '2' },\n  ];\n\n  var sexTypes = [\n    { id: '1', sex: '\u7537' },\n    { id: '2', sex: '\u5973' },\n  ];\n\n  var classifiedData = {};\n\n  sexTypes.forEach(function (sexType) {\n    var sexId = sexType.id;\n\n    classifiedData[sexId] = [];\n\n    users.forEach(function (user) {\n      var userSex = user.sex;\n\n      if (userSex === sexId) {\n        classifiedData[sexId].push(user);\n      }\n    });\n  });\n\n  console.log(classifiedData);\n<\/script>\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5148\u5B9A\u4E49\u4E86\u4E24\u4E2A\u6570\u7EC4\uFF1A",(0,i.jsx)(e.code,{children:"users"}),"\u5B58\u50A8\u7528\u6237\u6570\u636E\uFF0C",(0,i.jsx)(e.code,{children:"sexTypes"}),"\u5B58\u50A8\u6027\u522B\u7C7B\u578B\u3002\u7136\u540E\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61",(0,i.jsx)(e.code,{children:"classifiedData"}),"\u7528\u4E8E\u5B58\u50A8\u5F52\u7C7B\u540E\u7684\u6570\u636E\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u904D\u5386",(0,i.jsx)(e.code,{children:"sexTypes"}),"\u6570\u7EC4\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u6027\u522B\u7C7B\u578B\uFF0C\u6211\u4EEC\u5728",(0,i.jsx)(e.code,{children:"classifiedData"}),"\u5BF9\u8C61\u4E2D\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94\u7684\u7A7A\u6570\u7EC4\u3002\u7136\u540E\uFF0C\u6211\u4EEC\u518D\u904D\u5386",(0,i.jsx)(e.code,{children:"users"}),"\u6570\u7EC4\uFF0C\u5C06\u6BCF\u4E2A\u7528\u6237\u6309\u7167\u6027\u522B\u5F52\u7C7B\u5230\u5BF9\u5E94\u7684\u6570\u7EC4\u4E2D\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6700\u540E\uFF0C",(0,i.jsx)(e.code,{children:"classifiedData"}),"\u5BF9\u8C61\u5C31\u5305\u542B\u4E86\u6309\u6027\u522B\u5F52\u7C7B\u7684\u7528\u6237\u6570\u636E\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u590D\u5408\u5F52\u7C7B",children:"\u590D\u5408\u5F52\u7C7B"}),"\n",(0,i.jsx)(e.p,{children:"\u590D\u5408\u5F52\u7C7B\u6307\u7684\u662F\u4E00\u6761\u6570\u636E\u53EF\u4EE5\u540C\u65F6\u5C5E\u4E8E\u591A\u4E2A\u79CD\u7C7B\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u590D\u5408\u5F52\u7C7B\u7684\u4F8B\u5B50\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var hobbies = [\n  { id: '1', name: '\u8DB3\u7403' },\n  { id: '2', name: '\u7BEE\u7403' },\n  { id: '3', name: '\u6392\u7403' },\n  { id: '4', name: '\u4E52\u4E53\u7403' },\n  { id: '5', name: '\u4FDD\u9F84\u7403' },\n  { id: '6', name: '\u9AD8\u5C14\u592B\u7403' },\n];\n\nvar persons = [\n  { name: '\u5C0F2', hobby: '1,3' },\n  { name: '\u5C0F1', hobby: '1,4' },\n  { name: '\u5C0F3', hobby: '1,6' },\n  { name: '\u5C0F4', hobby: '1,6' },\n  { name: '\u5C0F5', hobby: '1,3,4' },\n  { name: '\u5C0F6', hobby: '3,4' },\n  { name: '\u5C0F7', hobby: '3,5' },\n  { name: '\u5C0F8', hobby: '1,2,3,4,5,6' },\n];\n\nvar classifiedData = {};\n\nhobbies.forEach(function (hobby) {\n  var hobbyId = hobby.id;\n  classifiedData[hobbyId] = [];\n\n  persons.forEach(function (person) {\n    var personHobbies = person.hobby.split(',');\n\n    personHobbies.forEach(function (personHobby) {\n      if (personHobby === hobbyId) {\n        classifiedData[hobbyId].push(person);\n      }\n    });\n  });\n});\n\nconsole.log(classifiedData);\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6BCF\u4E2A\u4EBA\u53EF\u4EE5\u6709\u591A\u4E2A\u7231\u597D\uFF0C\u7231\u597D\u7528\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\u8868\u793A\u3002\u6211\u4EEC\u5148\u904D\u5386",(0,i.jsx)(e.code,{children:"hobbies"}),"\u6570\u7EC4\uFF0C\u4E3A\u6BCF\u4E2A\u7231\u597D\u5728",(0,i.jsx)(e.code,{children:"classifiedData"}),"\u5BF9\u8C61\u4E2D\u521B\u5EFA\u4E00\u4E2A\u7A7A\u6570\u7EC4\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u540E\uFF0C\u6211\u4EEC\u904D\u5386",(0,i.jsx)(e.code,{children:"persons"}),"\u6570\u7EC4\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u4EBA\uFF0C\u6211\u4EEC\u5C06\u5176\u7231\u597D\u5B57\u7B26\u4E32\u6309\u9017\u53F7\u5206\u5272\u6210\u6570\u7EC4\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u518D\u904D\u5386\u8FD9\u4E2A\u7231\u597D\u6570\u7EC4\uFF0C\u5C06\u5F53\u524D\u4EBA\u6DFB\u52A0\u5230\u5BF9\u5E94\u7231\u597D\u7684\u6570\u7EC4\u4E2D\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6700\u7EC8\uFF0C",(0,i.jsx)(e.code,{children:"classifiedData"}),"\u5BF9\u8C61\u5C31\u5305\u542B\u4E86\u6309\u7231\u597D\u5F52\u7C7B\u7684\u4EBA\u5458\u6570\u636E\uFF0C\u6BCF\u4E2A\u4EBA\u53EF\u4EE5\u51FA\u73B0\u5728\u591A\u4E2A\u7231\u597D\u7684\u6570\u7EC4\u4E2D\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5C01\u88C5\u5F52\u7C7B\u51FD\u6570",children:"\u5C01\u88C5\u5F52\u7C7B\u51FD\u6570"}),"\n",(0,i.jsx)(e.p,{children:"\u4E3A\u4E86\u63D0\u9AD8\u4EE3\u7801\u7684\u590D\u7528\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u5F52\u7C7B\u64CD\u4F5C\u5C01\u88C5\u6210\u4E00\u4E2A\u51FD\u6570\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u5C01\u88C5\u540E\u7684\u5F52\u7C7B\u51FD\u6570\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"function classifyData(categories, data, foreignKey, classifyType) {\n  var classifiedData = {};\n\n  categories.forEach(function (category) {\n    var categoryId = category.id;\n    classifiedData[categoryId] = [];\n\n    data.forEach(function (item) {\n      var foreignValue = item[foreignKey];\n\n      if (classifyType === 'single') {\n        if (foreignValue === categoryId) {\n          classifiedData[categoryId].push(item);\n        }\n      } else if (classifyType === 'multi') {\n        var foreignValues = foreignValue.split(',');\n        if (foreignValues.includes(categoryId)) {\n          classifiedData[categoryId].push(item);\n        }\n      }\n    });\n  });\n\n  return classifiedData;\n}\n\nvar hobbies = [\n  { id: '1', name: '\u8DB3\u7403' },\n  { id: '2', name: '\u7BEE\u7403' },\n  { id: '3', name: '\u6392\u7403' },\n  { id: '4', name: '\u4E52\u4E53\u7403' },\n  { id: '5', name: '\u4FDD\u9F84\u7403' },\n  { id: '6', name: '\u9AD8\u5C14\u592B\u7403' },\n];\n\nvar persons = [\n  { name: '\u5C0F2', hobby: '1,3' },\n  { name: '\u5C0F1', hobby: '1,4' },\n  { name: '\u5C0F3', hobby: '1,6' },\n  { name: '\u5C0F4', hobby: '1,6' },\n  { name: '\u5C0F5', hobby: '1,3,4' },\n  { name: '\u5C0F6', hobby: '3,4' },\n  { name: '\u5C0F7', hobby: '3,5' },\n  { name: '\u5C0F8', hobby: '1,2,3,4,5,6' },\n];\n\nvar hobbyData = classifyData(hobbies, persons, 'hobby', 'multi');\nconsole.log(hobbyData);\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"classifyData"}),"\u51FD\u6570\u63A5\u53D7\u56DB\u4E2A\u53C2\u6570\uFF1A"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"categories"}),"\uFF1A\u5F52\u7C7B\u7684\u7C7B\u522B\u6570\u7EC4"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"data"}),"\uFF1A\u9700\u8981\u5F52\u7C7B\u7684\u6570\u636E\u6570\u7EC4"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"foreignKey"}),"\uFF1A\u5916\u952E\uFF0C\u5373",(0,i.jsx)(e.code,{children:"data"}),"\u4E2D\u7528\u4E8E\u5F52\u7C7B\u7684\u5C5E\u6027\u540D"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"classifyType"}),"\uFF1A\u5F52\u7C7B\u7C7B\u578B\uFF0C\u53EF\u4EE5\u662F",(0,i.jsx)(e.code,{children:"'single'"}),"\u6216",(0,i.jsx)(e.code,{children:"'multi'"}),"\uFF0C\u8868\u793A\u5355\u4E00\u5F52\u7C7B\u6216\u590D\u5408\u5F52\u7C7B"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u51FD\u6570\u5185\u90E8\u5148\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61",(0,i.jsx)(e.code,{children:"classifiedData"}),"\u7528\u4E8E\u5B58\u50A8\u5F52\u7C7B\u540E\u7684\u6570\u636E\u3002\u7136\u540E\uFF0C\u5B83\u904D\u5386",(0,i.jsx)(e.code,{children:"categories"}),"\u6570\u7EC4\uFF0C\u4E3A\u6BCF\u4E2A\u7C7B\u522B\u5728",(0,i.jsx)(e.code,{children:"classifiedData"}),"\u4E2D\u521B\u5EFA\u4E00\u4E2A\u7A7A\u6570\u7EC4\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u51FD\u6570\u904D\u5386",(0,i.jsx)(e.code,{children:"data"}),"\u6570\u7EC4\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u6570\u636E\u9879\uFF0C\u6839\u636E",(0,i.jsx)(e.code,{children:"classifyType"}),"\u7684\u503C\u8FDB\u884C\u5355\u4E00\u5F52\u7C7B\u6216\u590D\u5408\u5F52\u7C7B\u3002\u5355\u4E00\u5F52\u7C7B\u76F4\u63A5\u5224\u65AD\u5916\u952E\u503C\u662F\u5426\u7B49\u4E8E\u5F53\u524D\u7C7B\u522B\u7684 ID\uFF0C\u590D\u5408\u5F52\u7C7B\u5219\u5C06\u5916\u952E\u503C\u6309\u9017\u53F7\u5206\u5272\u6210\u6570\u7EC4\uFF0C\u5224\u65AD\u5F53\u524D\u7C7B\u522B\u7684 ID \u662F\u5426\u5728\u6570\u7EC4\u4E2D\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6700\u540E\uFF0C\u51FD\u6570\u8FD4\u56DE\u5F52\u7C7B\u540E\u7684\u6570\u636E\u5BF9\u8C61",(0,i.jsx)(e.code,{children:"classifiedData"}),"\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4F7F\u7528\u5C01\u88C5\u540E\u7684",(0,i.jsx)(e.code,{children:"classifyData"}),"\u51FD\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u65B9\u4FBF\u5730\u5BF9\u4E0D\u540C\u7684\u6570\u636E\u8FDB\u884C\u5F52\u7C7B\u3002\u4E0A\u9762\u7684\u4EE3\u7801\u793A\u4F8B\u6F14\u793A\u4E86\u5982\u4F55\u4F7F\u7528",(0,i.jsx)(e.code,{children:"classifyData"}),"\u51FD\u6570\u5BF9\u4EBA\u5458\u6570\u636E\u6309\u7231\u597D\u8FDB\u884C\u590D\u5408\u5F52\u7C7B\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u901A\u8FC7\u5C01\u88C5\u5F52\u7C7B\u51FD\u6570\uFF0C\u6211\u4EEC\u63D0\u9AD8\u4E86\u4EE3\u7801\u7684\u590D\u7528\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002\u65E0\u8BBA\u662F\u5355\u4E00\u5F52\u7C7B\u8FD8\u662F\u590D\u5408\u5F52\u7C7B\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528\u540C\u4E00\u4E2A\u51FD\u6570\u6765\u5B8C\u6210\uFF0C\u53EA\u9700\u4F20\u5165\u4E0D\u540C\u7684\u53C2\u6570\u5373\u53EF\u3002"})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return r}});var a=s(67294);let i={},c=a.createContext(i);function r(n){let e=a.useContext(c);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(c.Provider,{value:e},n.children)}}}]);