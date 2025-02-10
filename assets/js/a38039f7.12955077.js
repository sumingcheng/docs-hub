"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["21593"],{42931:function(n,e,s){s.r(e),s.d(e,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>t,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"Backend/Java/Maven/Maven-\u751F\u547D\u5468\u671F","title":"Maven \u751F\u547D\u5468\u671F","description":"Maven \u7684\u751F\u547D\u5468\u671F\u662F\u4E00\u7CFB\u5217\u5B9A\u4E49\u597D\u7684\u9636\u6BB5\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6784\u5EFA\u8FC7\u7A0B\u7684\u4E0D\u540C\u6B65\u9AA4\u3002\u5F53\u6267\u884C Maven \u547D\u4EE4\u5982 mvn clean \u6216 mvn install \u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u5728\u8C03\u7528\u751F\u547D\u5468\u671F\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u9636\u6BB5\u3002","source":"@site/docs/Backend/Java/Maven/20.Maven-\u751F\u547D\u5468\u671F.md","sourceDirName":"Backend/Java/Maven","slug":"/Backend/Java/Maven/Maven-\u751F\u547D\u5468\u671F","permalink":"/docs-hub/Backend/Java/Maven/Maven-\u751F\u547D\u5468\u671F","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/Maven/20.Maven-\u751F\u547D\u5468\u671F.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":20,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"pom.xml \u6587\u4EF6\u4E3B\u8981\u5185\u5BB9","permalink":"/docs-hub/Backend/Java/Maven/pom.xml-\u6587\u4EF6\u4E3B\u8981\u5185\u5BB9"},"next":{"title":"Maven \u63D2\u4EF6\u8BE6\u89E3","permalink":"/docs-hub/Backend/Java/Maven/Maven-\u63D2\u4EF6"}}'),i=s("85893"),l=s("50065");let a={},c="Maven \u751F\u547D\u5468\u671F",t={},d=[{value:"\u9ED8\u8BA4\u751F\u547D\u5468\u671F",id:"\u9ED8\u8BA4\u751F\u547D\u5468\u671F",level:2},{value:"\u6E05\u7406\u751F\u547D\u5468\u671F",id:"\u6E05\u7406\u751F\u547D\u5468\u671F",level:2},{value:"\u7AD9\u70B9\u751F\u6210\u751F\u547D\u5468\u671F",id:"\u7AD9\u70B9\u751F\u6210\u751F\u547D\u5468\u671F",level:2},{value:"\u751F\u547D\u5468\u671F",id:"\u751F\u547D\u5468\u671F",level:2},{value:"\u751F\u547D\u5468\u671F\u9636\u6BB5",id:"\u751F\u547D\u5468\u671F\u9636\u6BB5",level:2},{value:"\u53C2\u8003\u8D44\u6599",id:"\u53C2\u8003\u8D44\u6599",level:2}];function o(n){let e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"maven-\u751F\u547D\u5468\u671F",children:"Maven \u751F\u547D\u5468\u671F"})}),"\n",(0,i.jsxs)(e.p,{children:["Maven \u7684\u751F\u547D\u5468\u671F\u662F\u4E00\u7CFB\u5217\u5B9A\u4E49\u597D\u7684\u9636\u6BB5\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6784\u5EFA\u8FC7\u7A0B\u7684\u4E0D\u540C\u6B65\u9AA4\u3002\u5F53\u6267\u884C Maven \u547D\u4EE4\u5982 ",(0,i.jsx)(e.code,{children:"mvn clean"})," \u6216 ",(0,i.jsx)(e.code,{children:"mvn install"})," \u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u5728\u8C03\u7528\u751F\u547D\u5468\u671F\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u9636\u6BB5\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"Maven \u4E3B\u8981\u6709\u4E09\u4E2A\u6807\u51C6\u751F\u547D\u5468\u671F\uFF1A"}),"\n",(0,i.jsxs)(e.p,{children:["clean \u751F\u547D\u5468\u671F\u7528\u4E8E\u6E05\u9664\u4E4B\u524D\u6784\u5EFA\u7684\u9879\u76EE\u3002",(0,i.jsx)(e.br,{}),"\n","default \u751F\u547D\u5468\u671F\uFF08\u4E5F\u79F0\u4E3A build\uFF09\u662F\u6784\u5EFA\u9879\u76EE\u7684\u4E3B\u8981\u751F\u547D\u5468\u671F\u3002",(0,i.jsx)(e.br,{}),"\n","site \u751F\u547D\u5468\u671F\u7528\u4E8E\u751F\u6210\u9879\u76EE\u7684\u7AD9\u70B9\u6587\u6863\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9ED8\u8BA4\u751F\u547D\u5468\u671F",children:"\u9ED8\u8BA4\u751F\u547D\u5468\u671F"}),"\n",(0,i.jsx)(e.p,{children:"\u9ED8\u8BA4\u751F\u547D\u5468\u671F\u4E3B\u8981\u7528\u4E8E\u6784\u5EFA\u548C\u90E8\u7F72\u9879\u76EE\uFF0C\u5305\u62EC\u4EE5\u4E0B\u9636\u6BB5\uFF1A"}),"\n",(0,i.jsxs)(e.p,{children:["validate",(0,i.jsx)(e.br,{}),"\n","\u9A8C\u8BC1\u9879\u76EE\u662F\u5426\u6B63\u786E\uFF0C\u5E76\u4E14\u6240\u6709\u5FC5\u8981\u7684\u4FE1\u606F\u90FD\u53EF\u7528\u3002\u68C0\u67E5\u9879\u76EE\u914D\u7F6E\u662F\u5426\u6B63\u786E\uFF0C\u5305\u62EC\u9879\u76EE\u7ED3\u6784\u548C\u5FC5\u8981\u6587\u4EF6\u7684\u5B58\u5728\u6027\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["initialize",(0,i.jsx)(e.br,{}),"\n","\u521D\u59CB\u5316\u6784\u5EFA\u72B6\u6001\uFF0C\u4F8B\u5982\u8BBE\u7F6E\u5C5E\u6027\u6216\u521B\u5EFA\u76EE\u5F55\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["generate-sources",(0,i.jsx)(e.br,{}),"\n","\u751F\u6210\u4EFB\u4F55\u9700\u8981\u7F16\u8BD1\u7684\u6E90\u4EE3\u7801\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["process-sources",(0,i.jsx)(e.br,{}),"\n","\u5904\u7406\u6E90\u4EE3\u7801\uFF0C\u4F8B\u5982\u8FC7\u6EE4\u4EFB\u4F55\u503C\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["generate-resources",(0,i.jsx)(e.br,{}),"\n","\u751F\u6210\u8D44\u6E90\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["process-resources",(0,i.jsx)(e.br,{}),"\n","\u590D\u5236\u5E76\u53D1\u9001\u8D44\u6E90\u5230\u76EE\u6807\u76EE\u5F55\uFF0C\u4E3A\u6253\u5305\u505A\u51C6\u5907\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["compile",(0,i.jsx)(e.br,{}),"\n","\u7F16\u8BD1\u9879\u76EE\u7684\u6E90\u4EE3\u7801\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["process-classes",(0,i.jsx)(e.br,{}),"\n","\u5BF9\u7F16\u8BD1\u540E\u7684\u5B57\u8282\u6E90\u7801\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5982\u5B57\u8282\u7801\u589E\u5F3A\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["generate-test-sources",(0,i.jsx)(e.br,{}),"\n","\u751F\u6210\u6D4B\u8BD5\u4EE3\u7801\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["process-test-sources",(0,i.jsx)(e.br,{}),"\n","\u5904\u7406\u6D4B\u8BD5\u4EE3\u7801\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["generate-test-resources",(0,i.jsx)(e.br,{}),"\n","\u751F\u6210\u6D4B\u8BD5\u6240\u9700\u7684\u8D44\u6E90\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["process-test-resources",(0,i.jsx)(e.br,{}),"\n","\u590D\u5236\u5E76\u53D1\u9001\u6D4B\u8BD5\u8D44\u6E90\u5230\u76EE\u6807\u76EE\u5F55\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["test-compile",(0,i.jsx)(e.br,{}),"\n","\u7F16\u8BD1\u6D4B\u8BD5\u6E90\u4EE3\u7801\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["test",(0,i.jsx)(e.br,{}),"\n","\u4F7F\u7528\u5408\u9002\u7684\u5355\u5143\u6D4B\u8BD5\u6846\u67B6\u8FD0\u884C\u6D4B\u8BD5\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["prepare-package",(0,i.jsx)(e.br,{}),"\n","\u5728\u5B9E\u9645\u6253\u5305\u4E4B\u524D\u8FDB\u884C\u5FC5\u8981\u7684\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["package",(0,i.jsx)(e.br,{}),"\n","\u5C06\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u6253\u5305\u4E3A\u5206\u53D1\u683C\u5F0F\uFF0C\u5982 JAR\u3001WAR \u6216 EAR\u3002\u8FD9\u4E2A\u9636\u6BB5\u4F1A\u521B\u5EFA\u53EF\u5206\u53D1\u7684\u5305\u6587\u4EF6\uFF0C\u5176\u683C\u5F0F\u53D6\u51B3\u4E8E\u9879\u76EE\u7684 packaging \u7C7B\u578B\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["pre-integration-test",(0,i.jsx)(e.br,{}),"\n","\u5728\u96C6\u6210\u6D4B\u8BD5\u4E4B\u524D\u8FDB\u884C\u5FC5\u8981\u7684\u73AF\u5883\u8BBE\u7F6E\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["integration-test",(0,i.jsx)(e.br,{}),"\n","\u5904\u7406\u548C\u90E8\u7F72\u5305\u5230\u96C6\u6210\u6D4B\u8BD5\u73AF\u5883\u4E2D\uFF0C\u5E76\u8FD0\u884C\u6D4B\u8BD5\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["post-integration-test",(0,i.jsx)(e.br,{}),"\n","\u5728\u96C6\u6210\u6D4B\u8BD5\u4E4B\u540E\u8FDB\u884C\u5FC5\u8981\u7684\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["verify",(0,i.jsx)(e.br,{}),"\n","\u68C0\u67E5\u5305\u7684\u6709\u6548\u6027\uFF0C\u5E76\u786E\u4FDD\u6EE1\u8DB3\u8D28\u91CF\u6807\u51C6\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["install",(0,i.jsx)(e.br,{}),"\n","\u5C06\u6253\u5305\u7684\u9879\u76EE\u5B89\u88C5\u5230\u672C\u5730\u4ED3\u5E93\uFF0C\u4F9B\u5176\u4ED6\u9879\u76EE\u4F7F\u7528\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["deploy",(0,i.jsx)(e.br,{}),"\n","\u5C06\u6700\u7EC8\u7684\u5305\u590D\u5236\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u4F9B\u5171\u4EAB\u548C\u5408\u4F5C\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6E05\u7406\u751F\u547D\u5468\u671F",children:"\u6E05\u7406\u751F\u547D\u5468\u671F"}),"\n",(0,i.jsx)(e.p,{children:"\u6E05\u7406\u751F\u547D\u5468\u671F\u7528\u4E8E\u79FB\u9664\u5148\u524D\u7684\u6784\u5EFA\u4EA7\u7269\uFF0C\u5305\u62EC\u4EE5\u4E0B\u9636\u6BB5\uFF1A"}),"\n",(0,i.jsxs)(e.p,{children:["pre-clean",(0,i.jsx)(e.br,{}),"\n","\u6267\u884C\u6E05\u7406\u524D\u7684\u5FC5\u8981\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["clean",(0,i.jsx)(e.br,{}),"\n","\u79FB\u9664\u5148\u524D\u7684\u6784\u5EFA\u4EA7\u7269\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["post-clean",(0,i.jsx)(e.br,{}),"\n","\u6267\u884C\u6E05\u7406\u540E\u7684\u5FC5\u8981\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7AD9\u70B9\u751F\u6210\u751F\u547D\u5468\u671F",children:"\u7AD9\u70B9\u751F\u6210\u751F\u547D\u5468\u671F"}),"\n",(0,i.jsx)(e.p,{children:"\u7AD9\u70B9\u751F\u6210\u751F\u547D\u5468\u671F\u7528\u4E8E\u751F\u6210\u9879\u76EE\u7684\u7AD9\u70B9\u6587\u6863\uFF0C\u5305\u62EC\u4EE5\u4E0B\u9636\u6BB5\uFF1A"}),"\n",(0,i.jsxs)(e.p,{children:["pre-site",(0,i.jsx)(e.br,{}),"\n","\u6267\u884C\u751F\u6210\u7AD9\u70B9\u524D\u7684\u5FC5\u8981\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["site",(0,i.jsx)(e.br,{}),"\n","\u751F\u6210\u9879\u76EE\u7684\u7AD9\u70B9\u6587\u6863\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["post-site",(0,i.jsx)(e.br,{}),"\n","\u6267\u884C\u751F\u6210\u7AD9\u70B9\u6587\u6863\u540E\u7684\u5FC5\u8981\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["site-deploy",(0,i.jsx)(e.br,{}),"\n","\u5C06\u751F\u6210\u7684\u7AD9\u70B9\u6587\u6863\u90E8\u7F72\u5230\u6307\u5B9A\u7684\u670D\u52A1\u5668\u3002"]}),"\n",(0,i.jsx)(e.h1,{id:"\u6267\u884C\u751F\u547D\u5468\u671F",children:"\u6267\u884C\u751F\u547D\u5468\u671F"}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53\u8FD0\u884C\u4E00\u4E2A\u751F\u547D\u5468\u671F\u9636\u6BB5\u65F6\uFF0CMaven \u4F1A\u6309\u987A\u5E8F\u6267\u884C\u8BE5\u9636\u6BB5\u4E4B\u524D\u7684\u6240\u6709\u9636\u6BB5\u3002\u4F8B\u5982\uFF0C\u8FD0\u884C ",(0,i.jsx)(e.code,{children:"mvn install"})," \u65F6\uFF0CMaven \u4F1A\u4F9D\u6B21\u6267\u884C\u4ECE validate \u5230 install \u7684\u6240\u6709\u9636\u6BB5\u3002"]}),"\n",(0,i.jsx)(e.h1,{id:"\u751F\u547D\u5468\u671F\u4E0E\u751F\u547D\u5468\u671F\u9636\u6BB5",children:"\u751F\u547D\u5468\u671F\u4E0E\u751F\u547D\u5468\u671F\u9636\u6BB5"}),"\n",(0,i.jsx)(e.h2,{id:"\u751F\u547D\u5468\u671F",children:"\u751F\u547D\u5468\u671F"}),"\n",(0,i.jsx)(e.p,{children:"\u751F\u547D\u5468\u671F\u662F\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u7684\u4E00\u7CFB\u5217\u9636\u6BB5\u7684\u96C6\u5408\u3002Maven \u5B9A\u4E49\uFFFD\uFFFD\uFFFD\u4E09\u4E2A\u4E3B\u8981\u7684\u751F\u547D\u5468\u671F\uFF1Adefault\uFF08\u4E3B\u8981\u7528\u4E8E\u6784\u5EFA\u9879\u76EE\uFF09\u3001clean\uFF08\u7528\u4E8E\u6E05\u7406\u9879\u76EE\uFF09\u548C site\uFF08\u7528\u4E8E\u751F\u6210\u9879\u76EE\u7684\u7AD9\u70B9\u6587\u6863\uFF09\u3002\u8FD9\u4E9B\u751F\u547D\u5468\u671F\u6DB5\u76D6\u4E86\u9879\u76EE\u4ECE\u521B\u5EFA\u5230\u90E8\u7F72\u7684\u6574\u4E2A\u6784\u5EFA\u8FC7\u7A0B\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u751F\u547D\u5468\u671F\u9636\u6BB5",children:"\u751F\u547D\u5468\u671F\u9636\u6BB5"}),"\n",(0,i.jsxs)(e.p,{children:["\u751F\u547D\u5468\u671F\u9636\u6BB5\u662F\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u7684\u4E00\u4E2A\u6B65\u9AA4\u6216\u4EFB\u52A1\uFF0C\u5982 compile\u3001test \u548C install\u3002\u5F53\u6267\u884C\u4E00\u4E2A\u751F\u547D\u5468\u671F\u9636\u6BB5\u65F6\uFF0CMaven \u6309\u987A\u5E8F\u6267\u884C\u8BE5\u751F\u547D\u5468\u671F\u4E2D\u76F4\u5230\u8BE5\u9636\u6BB5\u4E3A\u6B62\u7684\u6240\u6709\u9636\u6BB5\u3002\u4F8B\u5982\uFF0C\u6267\u884C ",(0,i.jsx)(e.code,{children:"mvn install"})," \u65F6\uFF0CMaven \u4F1A\u4F9D\u6B21\u6267\u884C default \u751F\u547D\u5468\u671F\u4E2D\u4ECE validate \u5230 install \u7684\u6240\u6709\u9636\u6BB5\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u65E0\u6CD5\u76F4\u63A5\u6DFB\u52A0\u65B0\u7684\u751F\u547D\u5468\u671F\u3002Maven \u7684\u751F\u547D\u5468\u671F\u662F\u9884\u5B9A\u4E49\u7684\uFF0C\u5305\u62EC default\uFF08\u7528\u4E8E\u6784\u5EFA\uFF09\u3001clean\uFF08\u7528\u4E8E\u6E05\u7406\uFF09\u548C site\uFF08\u7528\u4E8E\u751F\u6210\u9879\u76EE\u6587\u6863\uFF09\u8FD9\u4E09\u4E2A\u4E3B\u8981\u7684\u751F\u547D\u5468\u671F\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53EF\u4EE5\u8FDB\u884C\u4EE5\u4E0B\u81EA\u5B9A\u4E49\uFF1A"}),"\n",(0,i.jsxs)(e.p,{children:["\u81EA\u5B9A\u4E49\u751F\u547D\u5468\u671F\u9636\u6BB5",(0,i.jsx)(e.br,{}),"\n","\u867D\u7136\u4E0D\u80FD\u6DFB\u52A0\u65B0\u7684\u751F\u547D\u5468\u671F\uFF0C\u4F46\u53EF\u4EE5\u4E3A\u5DF2\u6709\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u5B9A\u4E49\u81EA\u5B9A\u4E49\u7684\u884C\u4E3A\u3002\u8FD9\u901A\u8FC7\u5C06\u63D2\u4EF6\u7684\u76EE\u6807\u7ED1\u5B9A\u5230\u7279\u5B9A\u7684\u751F\u547D\u5468\u671F\u9636\u6BB5\u5B9E\u73B0\u3002\u4F8B\u5982\uFF0C\u5C06\u63D2\u4EF6\u7684\u76EE\u6807\u7ED1\u5B9A\u5230 compile \u9636\u6BB5\uFF0C\u4F7F\u5176\u5728\u7F16\u8BD1\u65F6\u6267\u884C\u7279\u5B9A\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u521B\u5EFA\u81EA\u5B9A\u4E49\u63D2\u4EF6\u548C\u76EE\u6807",(0,i.jsx)(e.br,{}),"\n","\u5982\u679C Maven \u7684\u5185\u7F6E\u63D2\u4EF6\u548C\u76EE\u6807\u4E0D\u80FD\u6EE1\u8DB3\u9700\u6C42\uFF0C\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u63D2\u4EF6\uFF0C\u5E76\u5B9A\u4E49\u65B0\u7684\u76EE\u6807\u3002\u7136\u540E\uFF0C\u5C06\u8FD9\u4E9B\u81EA\u5B9A\u4E49\u76EE\u6807\u7ED1\u5B9A\u5230\u751F\u547D\u5468\u671F\u7684\u7279\u5B9A\u9636\u6BB5\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4F7F\u7528 Profile",(0,i.jsx)(e.br,{}),"\n","Profile \u5141\u8BB8\u4E3A\u4E0D\u540C\u7684\u6784\u5EFA\u73AF\u5883\u548C\u6761\u4EF6\u5B9A\u4E49\u4E0D\u540C\u7684\u8BBE\u7F6E\u3002\u867D\u7136\u8FD9\u4E0D\u662F\u6DFB\u52A0\u65B0\u7684\u751F\u547D\u5468\u671F\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u7684\u60C5\u5883\u6539\u53D8\u6784\u5EFA\u884C\u4E3A\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6CE8\u610F\u786E\u4FDD\u5728\u81EA\u5B9A\u4E49\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u63D2\u4EF6\u7248\u672C\u7684\u517C\u5BB9\u6027\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"maven-\u914D\u7F6E\u793A\u4F8B",children:"Maven \u914D\u7F6E\u793A\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-xml",children:"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1.0-SNAPSHOT</version>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>3.8.1</version>\n        <configuration>\n          <source>1.8</source>\n          <target>1.8</target>\n        </configuration>\n      </plugin>\n      \x3c!-- \u6DFB\u52A0\u5176\u4ED6\u63D2\u4EF6\u914D\u7F6E --\x3e\n    </plugins>\n  </build>\n</project>\n"})}),"\n",(0,i.jsx)(e.h1,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u914D\u7F6E Maven \u751F\u547D\u5468\u671F\u65F6\uFF0C\u5EFA\u8BAE\u9075\u5FAA\u4EE5\u4E0B\u6700\u4F73\u5B9E\u8DF5\uFF1A"}),"\n",(0,i.jsxs)(e.p,{children:["\u786E\u4FDD\u63D2\u4EF6\u7248\u672C\u4E0E\u9879\u76EE\u9700\u6C42\u517C\u5BB9\u3002",(0,i.jsx)(e.br,{}),"\n","\u5408\u7406\u7EC4\u7EC7\u9879\u76EE\u7ED3\u6784\uFF0C\u9075\u5FAA Maven \u7684\u6807\u51C6\u76EE\u5F55\u5E03\u5C40\u3002",(0,i.jsx)(e.br,{}),"\n","\u5229\u7528 Profiles \u7BA1\u7406\u4E0D\u540C\u7684\u6784\u5EFA\u73AF\u5883\u914D\u7F6E\u3002",(0,i.jsx)(e.br,{}),"\n","\u5728\u81EA\u5B9A\u4E49\u9636\u6BB5\u7ED1\u5B9A\u63D2\u4EF6\u76EE\u6807\u65F6\uFF0C\u786E\u4FDD\u6E05\u6670\u7684\u804C\u8D23\u5206\u79BB\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u8003\u8D44\u6599",children:"\u53C2\u8003\u8D44\u6599"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html",children:"Maven \u5B98\u65B9\u6587\u6863"})})]})}function p(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return a}});var r=s(67294);let i={},l=r.createContext(i);function a(n){let e=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);