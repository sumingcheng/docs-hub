"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["96866"],{74095:function(M,N,I){I.r(N),I.d(N,{default:()=>d,frontMatter:()=>c,metadata:()=>D,assets:()=>j,toc:()=>n,contentTitle:()=>i});var D=JSON.parse('{"id":"Backend/Java/\u57FA\u7840/\u6570\u636E\u7C7B\u578B","title":"Java \u4E2D\u7684\u6570\u636E\u7C7B\u578B","description":"\u57FA\u672C\u7C7B\u578B","source":"@site/docs/Backend/Java/\u57FA\u7840/40.\u6570\u636E\u7C7B\u578B.md","sourceDirName":"Backend/Java/\u57FA\u7840","slug":"/Backend/Java/\u57FA\u7840/\u6570\u636E\u7C7B\u578B","permalink":"/docs-hub/Backend/Java/\u57FA\u7840/\u6570\u636E\u7C7B\u578B","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/\u57FA\u7840/40.\u6570\u636E\u7C7B\u578B.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":40,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"Java \u57FA\u7840\uFF1A\u53D8\u91CF\u3001\u5E38\u91CF\u548C\u6807\u8BC6\u7B26","permalink":"/docs-hub/Backend/Java/\u57FA\u7840/\u6807\u8BC6\u7B26-\u53D8\u91CF-\u5E38\u91CF"},"next":{"title":"\u8FDB\u5236\u4E0E\u4F4D\u8FD0\u7B97\u8BE6\u89E3","permalink":"/docs-hub/Backend/Java/\u57FA\u7840/\u8FDB\u5236\u8F6C\u6362"}}'),g=I("85893"),e=I("50065");let c={},i="Java \u4E2D\u7684\u6570\u636E\u7C7B\u578B",j={},n=[{value:"\u57FA\u672C\u7C7B\u578B",id:"\u57FA\u672C\u7C7B\u578B",level:2},{value:"\u6574\u578B",id:"\u6574\u578B",level:3},{value:"\u6D6E\u70B9\u578B",id:"\u6D6E\u70B9\u578B",level:3},{value:"\u5E03\u5C14\u578B",id:"\u5E03\u5C14\u578B",level:3},{value:"\u5B57\u7B26\u578B",id:"\u5B57\u7B26\u578B",level:3},{value:"\u5F15\u7528\u7C7B\u578B",id:"\u5F15\u7528\u7C7B\u578B",level:2},{value:"\u5B57\u7B26\u4E32",id:"\u5B57\u7B26\u4E32",level:3},{value:"\u6570\u7EC4",id:"\u6570\u7EC4",level:3},{value:"\u5BF9\u8C61",id:"\u5BF9\u8C61",level:3},{value:"\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362",id:"\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362",level:2},{value:"\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362",id:"\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362",level:2},{value:"\u7CBE\u5EA6\u4E22\u5931\u7684\u6848\u4F8B",id:"\u7CBE\u5EA6\u4E22\u5931\u7684\u6848\u4F8B",level:2},{value:"\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879",id:"\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879",level:2}];function A(M){let N={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.a)(),...M.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(N.header,{children:(0,g.jsx)(N.h1,{id:"java-\u4E2D\u7684\u6570\u636E\u7C7B\u578B",children:"Java \u4E2D\u7684\u6570\u636E\u7C7B\u578B"})}),"\n",(0,g.jsx)(N.h2,{id:"\u57FA\u672C\u7C7B\u578B",children:"\u57FA\u672C\u7C7B\u578B"}),"\n",(0,g.jsx)(N.p,{children:"Java \u63D0\u4F9B\u4E86\u591A\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u7528\u4E8E\u8868\u793A\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u503C\u548C\u5B57\u7B26\u3002"}),"\n",(0,g.jsx)(N.h3,{id:"\u6574\u578B",children:"\u6574\u578B"}),"\n",(0,g.jsxs)(N.p,{children:["\u6574\u578B\u7528\u4E8E\u8868\u793A\u6574\u6570\u6570\u503C\uFF0C\u5305\u62EC",(0,g.jsx)(N.code,{children:"byte"}),"\u3001",(0,g.jsx)(N.code,{children:"short"}),"\u3001",(0,g.jsx)(N.code,{children:"int"}),"\u548C",(0,g.jsx)(N.code,{children:"long"}),"\u3002"]}),"\n",(0,g.jsxs)(N.p,{children:[(0,g.jsx)(N.code,{children:"byte"}),"\u7C7B\u578B\u5360 1 \u5B57\u8282\uFF088 \u4F4D\uFF09\uFF0C\u53D6\u503C\u8303\u56F4\u662F",(0,g.jsx)(N.code,{children:"-2^7"}),"\u5230",(0,g.jsx)(N.code,{children:"2^7 - 1"}),"\uFF0C\u5373",(0,g.jsx)(N.code,{children:"-128"}),"\u5230",(0,g.jsx)(N.code,{children:"127"}),"\u3002",(0,g.jsx)(N.code,{children:"short"}),"\u7C7B\u578B\u5360 2 \u5B57\u8282\uFF0816 \u4F4D\uFF09\uFF0C\u53D6\u503C\u8303\u56F4\u662F",(0,g.jsx)(N.code,{children:"-2^15"}),"\u5230",(0,g.jsx)(N.code,{children:"2^15 - 1"}),"\uFF0C\u5373",(0,g.jsx)(N.code,{children:"-32,768"}),"\u5230",(0,g.jsx)(N.code,{children:"32,767"}),"\u3002",(0,g.jsx)(N.code,{children:"int"}),"\u7C7B\u578B\u5360 4 \u5B57\u8282\uFF0832 \u4F4D\uFF09\uFF0C\u53D6\u503C\u8303\u56F4\u662F",(0,g.jsx)(N.code,{children:"-2^31"}),"\u5230",(0,g.jsx)(N.code,{children:"2^31 - 1"}),"\uFF0C\u5373",(0,g.jsx)(N.code,{children:"-2,147,483,648"}),"\u5230",(0,g.jsx)(N.code,{children:"2,147,483,647"}),"\u3002",(0,g.jsx)(N.code,{children:"long"}),"\u7C7B\u578B\u5360 8 \u5B57\u8282\uFF0864 \u4F4D\uFF09\uFF0C\u53D6\u503C\u8303\u56F4\u662F",(0,g.jsx)(N.code,{children:"-2^63"}),"\u5230",(0,g.jsx)(N.code,{children:"2^63 - 1"}),"\uFF0C\u5373",(0,g.jsx)(N.code,{children:"-9,223,372,036,854,775,808"}),"\u5230",(0,g.jsx)(N.code,{children:"9,223,372,036,854,775,807"}),"\u3002"]}),"\n",(0,g.jsx)(N.h3,{id:"\u6D6E\u70B9\u578B",children:"\u6D6E\u70B9\u578B"}),"\n",(0,g.jsxs)(N.p,{children:["\u6D6E\u70B9\u578B\u7528\u4E8E\u8868\u793A\u5E26\u5C0F\u6570\u7684\u6570\u503C\uFF0C\u5305\u62EC",(0,g.jsx)(N.code,{children:"float"}),"\u548C",(0,g.jsx)(N.code,{children:"double"}),"\u3002"]}),"\n",(0,g.jsxs)(N.p,{children:[(0,g.jsx)(N.code,{children:"float"}),"\u7C7B\u578B\u5360 4 \u5B57\u8282\uFF0832 \u4F4D\uFF09\uFF0C\u53D6\u503C\u8303\u56F4\u7EA6\u4E3A",(0,g.jsx)(N.code,{children:"-3.4e+38"}),"\u5230",(0,g.jsx)(N.code,{children:"3.4e+38"}),"\u3002",(0,g.jsx)(N.code,{children:"double"}),"\u7C7B\u578B\u5360 8 \u5B57\u8282\uFF0864 \u4F4D\uFF09\uFF0C\u53D6\u503C\u8303\u56F4\u7EA6\u4E3A",(0,g.jsx)(N.code,{children:"-1.7e+308"}),"\u5230",(0,g.jsx)(N.code,{children:"1.7e+308"}),"\u3002"]}),"\n",(0,g.jsx)(N.h3,{id:"\u5E03\u5C14\u578B",children:"\u5E03\u5C14\u578B"}),"\n",(0,g.jsxs)(N.p,{children:[(0,g.jsx)(N.code,{children:"boolean"}),"\u7C7B\u578B\u7528\u4E8E\u8868\u793A\u903B\u8F91\u4E0A\u7684\u771F\u6216\u5047\u3002\u5728 Java \u865A\u62DF\u673A\u4E2D\uFF0C",(0,g.jsx)(N.code,{children:"boolean"}),"\u5B9E\u9645\u4EE5",(0,g.jsx)(N.code,{children:"int"}),"\u7C7B\u578B\u5B58\u50A8\uFF0C\u5360 4 \u5B57\u8282\uFF0832 \u4F4D\uFF09\u3002"]}),"\n",(0,g.jsx)(N.h3,{id:"\u5B57\u7B26\u578B",children:"\u5B57\u7B26\u578B"}),"\n",(0,g.jsxs)(N.p,{children:[(0,g.jsx)(N.code,{children:"char"}),"\u7C7B\u578B\u5360 2 \u5B57\u8282\uFF0C\u7528\u4E8E\u5B58\u50A8\u5355\u4E2A\u5B57\u7B26\uFF0C\u53D6\u503C\u8303\u56F4\u662F",(0,g.jsx)(N.code,{children:"0"}),"\u5230",(0,g.jsx)(N.code,{children:"65,535"}),"\u3002\u5B83\u91C7\u7528 Unicode \u5B57\u7B26\u96C6\uFF0C\u6BCF\u4E2A\u5B57\u7B26\u90FD\u5BF9\u5E94\u4E00\u4E2A\u552F\u4E00\u7684\u4E8C\u8FDB\u5236\u6574\u6570\u3002"]}),"\n",(0,g.jsx)(N.p,{children:(0,g.jsx)(N.img,{alt:"Unicode\u5B57\u7B26\u96C6",src:I(54793).Z+"",width:"886",height:"318"})}),"\n",(0,g.jsx)(N.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E0D\u80FD\u5C06\u5927\u5BB9\u91CF\u7684\u6570\u636E\u7C7B\u578B\u5B58\u50A8\u5230\u5C0F\u5BB9\u91CF\u7684\u6570\u636E\u7C7B\u578B\u4E2D\uFF0C\u4E5F\u5C31\u662F\u201C\u4E0D\u53EF\u4EE5\u5C0F\u676F\u88C5\u5927\u676F\u201D\u3002"}),"\n",(0,g.jsx)(N.h2,{id:"\u5F15\u7528\u7C7B\u578B",children:"\u5F15\u7528\u7C7B\u578B"}),"\n",(0,g.jsx)(N.p,{children:"\u9664\u4E86\u57FA\u672C\u7C7B\u578B\uFF0CJava \u8FD8\u63D0\u4F9B\u4E86\u5F15\u7528\u7C7B\u578B\uFF0C\u5305\u62EC\u5B57\u7B26\u4E32\u3001\u6570\u7EC4\u548C\u5BF9\u8C61\u3002"}),"\n",(0,g.jsx)(N.h3,{id:"\u5B57\u7B26\u4E32",children:"\u5B57\u7B26\u4E32"}),"\n",(0,g.jsxs)(N.p,{children:[(0,g.jsx)(N.code,{children:"String"}),"\u7C7B\u578B\u7528\u4E8E\u8868\u793A\u7531 Unicode \u5B57\u7B26\u7EC4\u6210\u7684\u5B57\u7B26\u5E8F\u5217\uFF0C\u662F\u4E00\u4E2A\u6709\u5E8F\u7684\u5B57\u7B26\u7EC4\u5408\u3002"]}),"\n",(0,g.jsx)(N.pre,{children:(0,g.jsx)(N.code,{className:"language-java",children:'String message = "sumingcheng";\n'})}),"\n",(0,g.jsx)(N.h3,{id:"\u6570\u7EC4",children:"\u6570\u7EC4"}),"\n",(0,g.jsx)(N.p,{children:"\u6570\u7EC4\u662F\u7528\u4E8E\u5B58\u50A8\u540C\u4E00\u7C7B\u578B\u5143\u7D20\u7684\u5BB9\u5668\uFF0C\u53EF\u4EE5\u662F\u4E00\u7EF4\u3001\u591A\u7EF4\u7B49\u591A\u79CD\u5F62\u5F0F\u3002"}),"\n",(0,g.jsx)(N.h3,{id:"\u5BF9\u8C61",children:"\u5BF9\u8C61"}),"\n",(0,g.jsx)(N.p,{children:"\u5BF9\u8C61\u662F\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u5305\u542B\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u7528\u4E8E\u63CF\u8FF0\u73B0\u5B9E\u4E16\u754C\u4E2D\u7684\u4E8B\u7269\u3002"}),"\n",(0,g.jsx)(N.h1,{id:"\u8FDB\u5236",children:"\u8FDB\u5236"}),"\n",(0,g.jsx)(N.p,{children:"\u5728\u8BA1\u7B97\u673A\u4E2D\uFF0C\u6D6E\u70B9\u6570\u901A\u5E38\u4F7F\u7528\u4E8C\u8FDB\u5236\u8868\u793A\u3002\u6807\u51C6\u7684\u4E8C\u8FDB\u5236\u6D6E\u70B9\u6570\u8868\u793A\u6CD5\u4E3A\uFF1A"}),"\n",(0,g.jsx)(N.p,{children:(0,g.jsx)(N.img,{alt:"\u6D6E\u70B9\u6570\u8868\u793A\u516C\u5F0F",src:I(58516).Z+"",width:"161",height:"25"})}),"\n",(0,g.jsxs)(N.p,{children:["\u5176\u4E2D\uFF0C\u7B26\u53F7\u4F4D",(0,g.jsx)(N.code,{children:"s"}),"\u8868\u793A\u6D6E\u70B9\u6570\u7684\u6B63\u8D1F\uFF0C",(0,g.jsx)(N.code,{children:"s=0"}),"\u8868\u793A\u6B63\u6570\uFF0C",(0,g.jsx)(N.code,{children:"s=1"}),"\u8868\u793A\u8D1F\u6570\u3002\u6709\u6548\u6570\u5B57",(0,g.jsx)(N.code,{children:"M"}),"\u5728\u5185\u5B58\u4E2D\u5B58\u50A8\u65F6\u7701\u7565\u4E86",(0,g.jsx)(N.code,{children:"1."}),"\u90E8\u5206\uFF0C\u8BFB\u53D6\u65F6\u9700\u8981\u52A0\u4E0A\u3002\u6307\u6570",(0,g.jsx)(N.code,{children:"E"}),"\u8868\u793A 2 \u7684\u5E42\u6B21\uFF0C\u51B3\u5B9A\u4E86\u6570\u503C\u7684\u5927\u5C0F\u3002"]}),"\n",(0,g.jsxs)(N.p,{children:["\u4F8B\u5982\uFF0C",(0,g.jsx)(N.code,{children:"25.125"}),"\u53EF\u4EE5\u8868\u793A\u4E3A\uFF1A"]}),"\n",(0,g.jsx)(N.pre,{children:(0,g.jsx)(N.code,{children:"25.125 = (-1)^0 \xd7 1.1001001 \xd7 2^4\n"})}),"\n",(0,g.jsx)(N.p,{children:(0,g.jsx)(N.img,{alt:"25.125\u7684\u4E8C\u8FDB\u5236\u8868\u793A",src:I(41304).Z+"",width:"975",height:"574"})}),"\n",(0,g.jsx)(N.h1,{id:"\u6D6E\u70B9\u6570\u7684\u4E8C\u8FDB\u5236\u8868\u793A",children:"\u6D6E\u70B9\u6570\u7684\u4E8C\u8FDB\u5236\u8868\u793A"}),"\n",(0,g.jsx)(N.p,{children:"\u4E3A\u4E86\u66F4\u597D\u5730\u7406\u89E3\u6D6E\u70B9\u6570\u7684\u4E8C\u8FDB\u5236\u8868\u793A\uFF0C\u6211\u7F16\u5199\u4E86\u4EE5\u4E0B\u4EE3\u7801\uFF1A"}),"\n",(0,g.jsx)(N.pre,{children:(0,g.jsx)(N.code,{className:"language-java",children:"public class TestFloatBinary {\n    public static void main(String[] args) {\n        // \u5C0625.125\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u8868\u793A\n\n        // \u6574\u6570\u90E8\u5206\uFF1A25\n        // 25 / 2 = 12 ... 1\n        // 12 / 2 = 6 ... 0\n        // 6 / 2 = 3 ... 0\n        // 3 / 2 = 1 ... 1\n        // 1 / 2 = 0 ... 1\n        // \u5012\u5E8F\u6392\u5217\uFF0C\u6574\u6570\u90E8\u5206\u7684\u4E8C\u8FDB\u5236\u4E3A\uFF1A11001\n\n        // \u5C0F\u6570\u90E8\u5206\uFF1A0.125\n        // 0.125 \xd7 2 = 0.25 ... 0\n        // 0.25 \xd7 2 = 0.5 ... 0\n        // 0.5 \xd7 2 = 1.0 ... 1\n        // \u53D6\u6574\u90E8\u5206\uFF0C\u5C0F\u6570\u90E8\u5206\u7684\u4E8C\u8FDB\u5236\u4E3A\uFF1A001\n\n        // \u5408\u5E76\u6574\u6570\u548C\u5C0F\u6570\u90E8\u5206\uFF0C\u5F97\u523025.125\u7684\u4E8C\u8FDB\u5236\u8868\u793A\uFF1A11001.001\n\n        // \u5BF9\u4E8E0.4188\u7684\u4E8C\u8FDB\u5236\u8868\u793A\uFF1A\n        // 0.4188 \xd7 2 = 0.8376 ... 0\n        // 0.8376 \xd7 2 = 1.6752 ... 1\n        // 0.6752 \xd7 2 = 1.3504 ... 1\n        // 0.3504 \xd7 2 = 0.7008 ... 0\n        // 0.7008 \xd7 2 = 1.4016 ... 1\n        // 0.4016 \xd7 2 = 0.8032 ... 0\n        // 0.8032 \xd7 2 = 1.6064 ... 1\n        // 0.6064 \xd7 2 = 1.2128 ... 1\n        // 0.2128 \xd7 2 = 0.4256 ... 0\n        // 0.4256 \xd7 2 = 0.8512 ... 0\n        // \u5C0F\u6570\u90E8\u5206\u53EF\u80FD\u65E0\u9650\u5FAA\u73AF\uFF0C\u5BFC\u81F4\u5B58\u50A8\u65F6\u7CBE\u5EA6\u6709\u9650\n    }\n}\n"})}),"\n",(0,g.jsx)(N.p,{children:"\u8FD9\u8BF4\u660E\u4E86\u6D6E\u70B9\u6570\u5728\u8BA1\u7B97\u673A\u4E2D\u7684\u5B58\u50A8\u662F\u6709\u9650\u7684\uFF0C\u5C0F\u6570\u90E8\u5206\u53EF\u80FD\u4F1A\u51FA\u73B0\u7CBE\u5EA6\u635F\u5931\u3002"}),"\n",(0,g.jsx)(N.h1,{id:"\u6570\u636E\u7C7B\u578B\u8F6C\u6362",children:"\u6570\u636E\u7C7B\u578B\u8F6C\u6362"}),"\n",(0,g.jsx)(N.h2,{id:"\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362",children:"\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362"}),"\n",(0,g.jsx)(N.p,{children:"\u5F53\u6211\u4EEC\u5C06\u5C0F\u5BB9\u91CF\u7684\u7C7B\u578B\u8D4B\u503C\u7ED9\u5927\u5BB9\u91CF\u7684\u7C7B\u578B\u65F6\uFF0C\u4F1A\u53D1\u751F\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362\u3002\u8FD9\u7C7B\u4F3C\u4E8E\u201C\u5927\u676F\u53EF\u4EE5\u88C5\u5C0F\u676F\u7684\u6C34\u201D\u3002"}),"\n",(0,g.jsx)(N.p,{children:(0,g.jsx)(N.img,{alt:"\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362",src:I(24451).Z+"",width:"473",height:"154"})}),"\n",(0,g.jsx)(N.h2,{id:"\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362",children:"\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362"}),"\n",(0,g.jsx)(N.p,{children:"\u5F53\u9700\u8981\u5C06\u5927\u5BB9\u91CF\u7684\u7C7B\u578B\u8D4B\u503C\u7ED9\u5C0F\u5BB9\u91CF\u7684\u7C7B\u578B\u65F6\uFF0C\u5FC5\u987B\u8FDB\u884C\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u3002\u8FD9\u9700\u8981\u786E\u4FDD\u5C0F\u5BB9\u91CF\u7684\u7C7B\u578B\u80FD\u591F\u5BB9\u7EB3\u5927\u5BB9\u91CF\u7C7B\u578B\u7684\u503C\uFF0C\u5426\u5219\u4F1A\u53D1\u751F\u7CBE\u5EA6\u4E22\u5931\u3002"}),"\n",(0,g.jsx)(N.p,{children:(0,g.jsx)(N.img,{alt:"\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362",src:I(88e3).Z+"",width:"612",height:"371"})}),"\n",(0,g.jsx)(N.p,{children:(0,g.jsx)(N.img,{alt:"\u7C7B\u578B\u8F6C\u6362\u793A\u610F\u56FE",src:I(41590).Z+"",width:"910",height:"546"})}),"\n",(0,g.jsx)(N.h2,{id:"\u7CBE\u5EA6\u4E22\u5931\u7684\u6848\u4F8B",children:"\u7CBE\u5EA6\u4E22\u5931\u7684\u6848\u4F8B"}),"\n",(0,g.jsx)(N.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7CBE\u5EA6\u4E22\u5931\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,g.jsx)(N.pre,{children:(0,g.jsx)(N.code,{className:"language-java",children:"int number = 200;\nbyte smallNumber = (byte) number;\n\nSystem.out.println(smallNumber); // \u8F93\u51FA\u7ED3\u679C\u4E3A -56\n"})}),"\n",(0,g.jsx)(N.p,{children:"\u89E3\u91CA\uFF1A"}),"\n",(0,g.jsxs)(N.ul,{children:["\n",(0,g.jsxs)(N.li,{children:[(0,g.jsx)(N.code,{children:"int"}),"\u7C7B\u578B\u7684",(0,g.jsx)(N.code,{children:"number"}),"\u53D8\u91CF\u5360 4 \u5B57\u8282\uFF0C\u503C\u4E3A 200\u3002"]}),"\n",(0,g.jsxs)(N.li,{children:["\u5F3A\u5236\u8F6C\u6362\u4E3A",(0,g.jsx)(N.code,{children:"byte"}),"\u7C7B\u578B\u65F6\uFF0C\u53EA\u4FDD\u7559\u4E86\u4F4E 8 \u4F4D\uFF0C\u9AD8\u4F4D\u88AB\u622A\u65AD\u3002"]}),"\n",(0,g.jsxs)(N.li,{children:["\u7531\u4E8E",(0,g.jsx)(N.code,{children:"byte"}),"\u7684\u53D6\u503C\u8303\u56F4\u662F",(0,g.jsx)(N.code,{children:"-128"}),"\u5230",(0,g.jsx)(N.code,{children:"127"}),"\uFF0C\u7ED3\u679C\u51FA\u73B0\u4E86\u6EA2\u51FA\uFF0C\u5BFC\u81F4\u503C\u53D8\u4E3A",(0,g.jsx)(N.code,{children:"-56"}),"\u3002"]}),"\n"]}),"\n",(0,g.jsx)(N.p,{children:"\u53E6\u4E00\u4E2A\u793A\u4F8B\uFF1A"}),"\n",(0,g.jsx)(N.pre,{children:(0,g.jsx)(N.code,{className:"language-java",children:"int value = 128;\nbyte byteValue = (byte) value;\n\nSystem.out.println(byteValue); // \u8F93\u51FA\u7ED3\u679C\u4E3A -128\n"})}),"\n",(0,g.jsx)(N.p,{children:"\u89E3\u91CA\uFF1A"}),"\n",(0,g.jsxs)(N.ul,{children:["\n",(0,g.jsxs)(N.li,{children:[(0,g.jsx)(N.code,{children:"int"}),"\u7C7B\u578B\u7684",(0,g.jsx)(N.code,{children:"value"}),"\u53D8\u91CF\u503C\u4E3A 128\u3002"]}),"\n",(0,g.jsxs)(N.li,{children:["\u8F6C\u6362\u4E3A",(0,g.jsx)(N.code,{children:"byte"}),"\u65F6\uFF0C128 \u8D85\u51FA\u4E86",(0,g.jsx)(N.code,{children:"byte"}),"\u7684\u53D6\u503C\u8303\u56F4\uFF0C\u5BFC\u81F4\u7ED3\u679C\u4E3A",(0,g.jsx)(N.code,{children:"-128"}),"\u3002"]}),"\n"]}),"\n",(0,g.jsx)(N.p,{children:"\u56E0\u6B64\uFF0C\u5728\u8FDB\u884C\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u65F6\uFF0C\u5FC5\u987B\u786E\u4FDD\u6570\u503C\u5728\u76EE\u6807\u7C7B\u578B\u7684\u53D6\u503C\u8303\u56F4\u5185\uFF0C\u5426\u5219\u4F1A\u53D1\u751F\u7CBE\u5EA6\u4E22\u5931\u3002"}),"\n",(0,g.jsx)(N.h2,{id:"\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879",children:"\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,g.jsxs)(N.p,{children:["\u5E03\u5C14\u7C7B\u578B\u4E0D\u80FD\u8F6C\u6362\u4E3A\u5176\u4ED6\u7C7B\u578B\u3002\u5728\u5F3A\u7C7B\u578B\u8BED\u8A00\u4E2D\uFF0C",(0,g.jsx)(N.code,{children:"boolean"}),"\u4E0E\u6570\u503C\u7C7B\u578B\u662F\u4E25\u683C\u533A\u5206\u7684\u3002\u4E0D\u540C\u53D6\u503C\u8303\u56F4\u7684\u7C7B\u578B\u4E4B\u95F4\u4E0D\u80FD\u76F4\u63A5\u8D4B\u503C\uFF0C\u9700\u8981\u8FDB\u884C\u663E\u5F0F\u7684\u7C7B\u578B\u8F6C\u6362\u3002"]}),"\n",(0,g.jsx)(N.hr,{}),"\n",(0,g.jsx)(N.p,{children:(0,g.jsx)(N.strong,{children:"\u63D0\u793A"})}),"\n",(0,g.jsx)(N.p,{children:"\u5728 Java \u7F16\u7A0B\u4E2D\uFF0C\u4E86\u89E3\u6570\u636E\u7C7B\u578B\u548C\u7C7B\u578B\u8F6C\u6362\u5BF9\u4E8E\u7F16\u5199\u9AD8\u8D28\u91CF\u7684\u4EE3\u7801\u81F3\u5173\u91CD\u8981\u3002\u52A1\u5FC5\u6CE8\u610F\u7C7B\u578B\u8F6C\u6362\u53EF\u80FD\u5E26\u6765\u7684\u7CBE\u5EA6\u4E22\u5931\u548C\u6EA2\u51FA\u95EE\u9898\u3002"}),"\n",(0,g.jsx)(N.hr,{})]})}function d(M={}){let{wrapper:N}={...(0,e.a)(),...M.components};return N?(0,g.jsx)(N,{...M,children:(0,g.jsx)(A,{...M})}):A(M)}},41590:function(M,N,I){I.d(N,{Z:function(){return D}});let D=I.p+"assets/images/4e14864d2e075a3aa415a868524bc135-8f13489090cb79ca0948c5d02c52d948.png"},41304:function(M,N,I){I.d(N,{Z:function(){return D}});let D=I.p+"assets/images/73a5e6ac4d5c5bf243b59e830e3dbd61-1f0b25b29f9d8bc2f5150d7be92d086b.png"},88e3:function(M,N,I){I.d(N,{Z:function(){return D}});let D=I.p+"assets/images/87d0af222d94216c64ec41534e3cab4e-a052cd21f6adc656ee6e6f3977703122.png"},24451:function(M,N,I){I.d(N,{Z:function(){return D}});let D=I.p+"assets/images/94adee2eca42b5340b4f8a73e6640ccb-508d2848026774fcb0e14c36b2788d26.png"},54793:function(M,N,I){I.d(N,{Z:function(){return D}});let D=I.p+"assets/images/aa3306ea3103c055e316ca361d96e1a7-d567c12f696d84c83ac5bd3580da2eee.png"},58516:function(M,N,I){I.d(N,{Z:function(){return D}});let D="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwLjE1MWV4IiBoZWlnaHQ9IjMuMTc2ZXgiIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogLTAuODM4ZXg7IiB2aWV3Qm94PSIwIC0xMDA2LjYgODY3NiAxMzY3LjQiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWxhYmVsbGVkYnk9Ik1hdGhKYXgtU1ZHLTEtVGl0bGUiPgo8dGl0bGUgaWQ9Ik1hdGhKYXgtU1ZHLTEtVGl0bGUiPkVxdWF0aW9uPC90aXRsZT4KPGRlZnMgYXJpYS1oaWRkZW49InRydWUiPgo8cGF0aCBzdHJva2Utd2lkdGg9IjEiIGlkPSJFMS1NSk1BVEhJLTU2IiBkPSJNNTIgNjQ4UTUyIDY3MCA2NSA2ODNINzZRMTE4IDY4MCAxODEgNjgwUTI5OSA2ODAgMzIwIDY4M0gzMzBRMzM2IDY3NyAzMzYgNjc0VDMzNCA2NTZRMzI5IDY0MSAzMjUgNjM3SDMwNFEyODIgNjM1IDI3NCA2MzVRMjQ1IDYzMCAyNDIgNjIwUTI0MiA2MTggMjcxIDM2OVQzMDEgMTE4TDM3NCAyMzVRNDQ3IDM1MiA1MjAgNDcxVDU5NSA1OTRRNTk5IDYwMSA1OTkgNjA5UTU5OSA2MzMgNTU1IDYzN1E1MzcgNjM3IDUzNyA2NDhRNTM3IDY0OSA1MzkgNjYxUTU0MiA2NzUgNTQ1IDY3OVQ1NTggNjgzUTU2MCA2ODMgNTcwIDY4M1Q2MDQgNjgyVDY2OCA2ODFRNzM3IDY4MSA3NTUgNjgzSDc2MlE3NjkgNjc2IDc2OSA2NzJRNzY5IDY1NSA3NjAgNjQwUTc1NyA2MzcgNzQzIDYzN1E3MzAgNjM2IDcxOSA2MzVUNjk4IDYzMFQ2ODIgNjIzVDY3MCA2MTVUNjYwIDYwOFQ2NTIgNTk5VDY0NSA1OTJMNDUyIDI4MlEyNzIgLTkgMjY2IC0xNlEyNjMgLTE4IDI1OSAtMjFMMjQxIC0yMkgyMzRRMjE2IC0yMiAyMTYgLTE1UTIxMyAtOSAxNzcgMzA1UTEzOSA2MjMgMTM4IDYyNlExMzMgNjM3IDc2IDYzN0g1OVE1MiA2NDIgNTIgNjQ4WiI+PC9wYXRoPgo8cGF0aCBzdHJva2Utd2lkdGg9IjEiIGlkPSJFMS1NSk1BSU4tM0QiIGQ9Ik01NiAzNDdRNTYgMzYwIDcwIDM2N0g3MDdRNzIyIDM1OSA3MjIgMzQ3UTcyMiAzMzYgNzA4IDMyOEwzOTAgMzI3SDcyUTU2IDMzMiA1NiAzNDdaTTU2IDE1M1E1NiAxNjggNzIgMTczSDcwOFE3MjIgMTYzIDcyMiAxNTNRNzIyIDE0MCA3MDcgMTMzSDcwUTU2IDE0MCA1NiAxNTNaIj48L3BhdGg+CjxwYXRoIHN0cm9rZS13aWR0aD0iMSIgaWQ9IkUxLU1KTUFJTi0yOCIgZD0iTTk0IDI1MFE5NCAzMTkgMTA0IDM4MVQxMjcgNDg4VDE2NCA1NzZUMjAyIDY0M1QyNDQgNjk1VDI3NyA3MjlUMzAyIDc1MEgzMTVIMzE5UTMzMyA3NTAgMzMzIDc0MVEzMzMgNzM4IDMxNiA3MjBUMjc1IDY2N1QyMjYgNTgxVDE4NCA0NDNUMTY3IDI1MFQxODQgNThUMjI1IC04MVQyNzQgLTE2N1QzMTYgLTIyMFQzMzMgLTI0MVEzMzMgLTI1MCAzMTggLTI1MEgzMTVIMzAyTDI3NCAtMjI2UTE4MCAtMTQxIDEzNyAtMTRUOTQgMjUwWiI+PC9wYXRoPgo8cGF0aCBzdHJva2Utd2lkdGg9IjEiIGlkPSJFMS1NSk1BSU4tMjIxMiIgZD0iTTg0IDIzN1Q4NCAyNTBUOTggMjcwSDY3OVE2OTQgMjYyIDY5NCAyNTBUNjc5IDIzMEg5OFE4NCAyMzcgODQgMjUwWiI+PC9wYXRoPgo8cGF0aCBzdHJva2Utd2lkdGg9IjEiIGlkPSJFMS1NSk1BSU4tMzEiIGQ9Ik0yMTMgNTc4TDIwMCA1NzNRMTg2IDU2OCAxNjAgNTYzVDEwMiA1NTZIODNWNjAySDEwMlExNDkgNjA0IDE4OSA2MTdUMjQ1IDY0MVQyNzMgNjYzUTI3NSA2NjYgMjg1IDY2NlEyOTQgNjY2IDMwMiA2NjBWMzYxTDMwMyA2MVEzMTAgNTQgMzE1IDUyVDMzOSA0OFQ0MDEgNDZINDI3VjBINDE2UTM5NSAzIDI1NyAzUTEyMSAzIDEwMCAwSDg4VjQ2SDExNFExMzYgNDYgMTUyIDQ2VDE3NyA0N1QxOTMgNTBUMjAxIDUyVDIwNyA1N1QyMTMgNjFWNTc4WiI+PC9wYXRoPgo8cGF0aCBzdHJva2Utd2lkdGg9IjEiIGlkPSJFMS1NSk1BSU4tMjkiIGQ9Ik02MCA3NDlMNjQgNzUwUTY5IDc1MCA3NCA3NTBIODZMMTE0IDcyNlEyMDggNjQxIDI1MSA1MTRUMjk0IDI1MFEyOTQgMTgyIDI4NCAxMTlUMjYxIDEyVDIyNCAtNzZUMTg2IC0xNDNUMTQ1IC0xOTRUMTEzIC0yMjdUOTAgLTI0NlE4NyAtMjQ5IDg2IC0yNTBINzRRNjYgLTI1MCA2MyAtMjUwVDU4IC0yNDdUNTUgLTIzOFE1NiAtMjM3IDY2IC0yMjVRMjIxIC02NCAyMjEgMjUwVDY2IDcyNVE1NiA3MzcgNTUgNzM4UTU1IDc0NiA2MCA3NDlaIj48L3BhdGg+CjxwYXRoIHN0cm9rZS13aWR0aD0iMSIgaWQ9IkUxLU1KTUFUSEktNzMiIGQ9Ik0xMzEgMjg5UTEzMSAzMjEgMTQ3IDM1NFQyMDMgNDE1VDMwMCA0NDJRMzYyIDQ0MiAzOTAgNDE1VDQxOSAzNTVRNDE5IDMyMyA0MDIgMzA4VDM2NCAyOTJRMzUxIDI5MiAzNDAgMzAwVDMyOCAzMjZRMzI4IDM0MiAzMzcgMzU0VDM1NCAzNzJUMzY3IDM3OFEzNjggMzc4IDM2OCAzNzlRMzY4IDM4MiAzNjEgMzg4VDMzNiAzOTlUMjk3IDQwNVEyNDkgNDA1IDIyNyAzNzlUMjA0IDMyNlEyMDQgMzAxIDIyMyAyOTFUMjc4IDI3NFQzMzAgMjU5UTM5NiAyMzAgMzk2IDE2M1EzOTYgMTM1IDM4NSAxMDdUMzUyIDUxVDI4OSA3VDE5NSAtMTBRMTE4IC0xMCA4NiAxOVQ1MyA4N1E1MyAxMjYgNzQgMTQzVDExOCAxNjBRMTMzIDE2MCAxNDYgMTUxVDE2MCAxMjBRMTYwIDk0IDE0MiA3NlQxMTEgNThRMTA5IDU3IDEwOCA1N1QxMDcgNTVRMTA4IDUyIDExNSA0N1QxNDYgMzRUMjAxIDI3UTIzNyAyNyAyNjMgMzhUMzAxIDY2VDMxOCA5N1QzMjMgMTIyUTMyMyAxNTAgMzAyIDE2NFQyNTQgMTgxVDE5NSAxOTZUMTQ4IDIzMVExMzEgMjU2IDEzMSAyODlaIj48L3BhdGg+CjxwYXRoIHN0cm9rZS13aWR0aD0iMSIgaWQ9IkUxLU1KTUFJTi0yMjE3IiBkPSJNMjI5IDI4NlEyMTYgNDIwIDIxNiA0MzZRMjE2IDQ1NCAyNDAgNDY0UTI0MSA0NjQgMjQ1IDQ2NFQyNTEgNDY1UTI2MyA0NjQgMjczIDQ1NlQyODMgNDM2UTI4MyA0MTkgMjc3IDM1NlQyNzAgMjg2TDMyOCAzMjhRMzg0IDM2OSAzODkgMzcyVDM5OSAzNzVRNDEyIDM3NSA0MjMgMzY1VDQzNSAzMzhRNDM1IDMyNSA0MjUgMzE1UTQyMCAzMTIgMzU3IDI4MlQyODkgMjUwTDM1NSAyMTlMNDI1IDE4NFE0MzQgMTc1IDQzNCAxNjFRNDM0IDE0NiA0MjUgMTM2VDQwMSAxMjVRMzkzIDEyNSAzODMgMTMxVDMyOCAxNzFMMjcwIDIxM1EyODMgNzkgMjgzIDYzUTI4MyA1MyAyNzYgNDRUMjUwIDM1UTIzMSAzNSAyMjQgNDRUMjE2IDYzUTIxNiA4MCAyMjIgMTQzVDIyOSAyMTNMMTcxIDE3MVExMTUgMTMwIDExMCAxMjdRMTA2IDEyNCAxMDAgMTI0UTg3IDEyNCA3NiAxMzRUNjQgMTYxUTY0IDE2NiA2NCAxNjlUNjcgMTc1VDcyIDE4MVQ4MSAxODhUOTQgMTk1VDExMyAyMDRUMTM4IDIxNVQxNzAgMjMwVDIxMCAyNTBMNzQgMzE1UTY1IDMyNCA2NSAzMzhRNjUgMzUzIDc0IDM2M1Q5OCAzNzRRMTA2IDM3NCAxMTYgMzY4VDE3MSAzMjhMMjI5IDI4NloiPjwvcGF0aD4KPHBhdGggc3Ryb2tlLXdpZHRoPSIxIiBpZD0iRTEtTUpNQVRISS00RCIgZD0iTTI4OSA2MjlRMjg5IDYzNSAyMzIgNjM3UTIwOCA2MzcgMjAxIDYzOFQxOTQgNjQ4UTE5NCA2NDkgMTk2IDY1OVExOTcgNjYyIDE5OCA2NjZUMTk5IDY3MVQyMDEgNjc2VDIwMyA2NzlUMjA3IDY4MVQyMTIgNjgzVDIyMCA2ODNUMjMyIDY4NFEyMzggNjg0IDI2MiA2ODRUMzA3IDY4M1EzODYgNjgzIDM5OCA2ODNUNDE0IDY3OFE0MTUgNjc0IDQ1MSAzOTZMNDg3IDExN0w1MTAgMTU0UTUzNCAxOTAgNTc0IDI1NFQ2NjIgMzk0UTgzNyA2NzMgODM5IDY3NVE4NDAgNjc2IDg0MiA2NzhUODQ2IDY4MUw4NTIgNjgzSDk0OFE5NjUgNjgzIDk4OCA2ODNUMTAxNyA2ODRRMTA1MSA2ODQgMTA1MSA2NzNRMTA1MSA2NjggMTA0OCA2NTZUMTA0NSA2NDNRMTA0MSA2MzcgMTAwOCA2MzdROTY4IDYzNiA5NTcgNjM0VDkzOSA2MjNROTM2IDYxOCA4NjcgMzQwVDc5NyA1OVE3OTcgNTUgNzk4IDU0VDgwNSA1MFQ4MjIgNDhUODU1IDQ2SDg4NlE4OTIgMzcgODkyIDM1UTg5MiAxOSA4ODUgNVE4ODAgMCA4NjkgMFE4NjQgMCA4MjggMVQ3MzYgMlE2NzUgMiA2NDQgMlQ2MDkgMVE1OTIgMSA1OTIgMTFRNTkyIDEzIDU5NCAyNVE1OTggNDEgNjAyIDQzVDYyNSA0NlE2NTIgNDYgNjg1IDQ5UTY5OSA1MiA3MDQgNjFRNzA2IDY1IDc0MiAyMDdUODEzIDQ5MFQ4NDggNjMxTDY1NCAzMjJRNDU4IDEwIDQ1MyA1UTQ1MSA0IDQ0OSAzUTQ0NCAwIDQzMyAwUTQxOCAwIDQxNSA3UTQxMyAxMSAzNzQgMzE3TDMzNSA2MjRMMjY3IDM1NFEyMDAgODggMjAwIDc5UTIwNiA0NiAyNzIgNDZIMjgyUTI4OCA0MSAyODkgMzdUMjg2IDE5UTI4MiAzIDI3OCAxUTI3NCAwIDI2NyAwUTI2NSAwIDI1NSAwVDIyMSAxVDE1NyAyUTEyNyAyIDk1IDFUNTggMFE0MyAwIDM5IDJUMzUgMTFRMzUgMTMgMzggMjVUNDMgNDBRNDUgNDYgNjUgNDZRMTM1IDQ2IDE1NCA4NlExNTggOTIgMjIzIDM1NFQyODkgNjI5WiI+PC9wYXRoPgo8cGF0aCBzdHJva2Utd2lkdGg9IjEiIGlkPSJFMS1NSk1BSU4tMzIiIGQ9Ik0xMDkgNDI5UTgyIDQyOSA2NiA0NDdUNTAgNDkxUTUwIDU2MiAxMDMgNjE0VDIzNSA2NjZRMzI2IDY2NiAzODcgNjEwVDQ0OSA0NjVRNDQ5IDQyMiA0MjkgMzgzVDM4MSAzMTVUMzAxIDI0MVEyNjUgMjEwIDIwMSAxNDlMMTQyIDkzTDIxOCA5MlEzNzUgOTIgMzg1IDk3UTM5MiA5OSA0MDkgMTg2VjE4OUg0NDlWMTg2UTQ0OCAxODMgNDM2IDk1VDQyMSAzVjBINTBWMTlWMzFRNTAgMzggNTYgNDZUODYgODFRMTE1IDExMyAxMzYgMTM3UTE0NSAxNDcgMTcwIDE3NFQyMDQgMjExVDIzMyAyNDRUMjYxIDI3OFQyODQgMzA4VDMwNSAzNDBUMzIwIDM2OVQzMzMgNDAxVDM0MCA0MzFUMzQzIDQ2NFEzNDMgNTI3IDMwOSA1NzNUMjEyIDYxOVExNzkgNjE5IDE1NCA2MDJUMTE5IDU2OVQxMDkgNTUwUTEwOSA1NDkgMTE0IDU0OVExMzIgNTQ5IDE1MSA1MzVUMTcwIDQ4OVExNzAgNDY0IDE1NCA0NDdUMTA5IDQyOVoiPjwvcGF0aD4KPHBhdGggc3Ryb2tlLXdpZHRoPSIxIiBpZD0iRTEtTUpNQVRISS00NSIgZD0iTTQ5MiAyMTNRNDcyIDIxMyA0NzIgMjI2UTQ3MiAyMzAgNDc3IDI1MFQ0ODIgMjg1UTQ4MiAzMTYgNDYxIDMyM1QzNjQgMzMwSDMxMlEzMTEgMzI4IDI3NyAxOTJUMjQzIDUyUTI0MyA0OCAyNTQgNDhUMzM0IDQ2UTQyOCA0NiA0NTggNDhUNTE4IDYxUTU2NyA3NyA1OTkgMTE3VDY3MCAyNDhRNjgwIDI3MCA2ODMgMjcyUTY5MCAyNzQgNjk4IDI3NFE3MTggMjc0IDcxOCAyNjFRNjEzIDcgNjA4IDJRNjA1IDAgMzIyIDBIMTMzUTMxIDAgMzEgMTFRMzEgMTMgMzQgMjVRMzggNDEgNDIgNDNUNjUgNDZROTIgNDYgMTI1IDQ5UTEzOSA1MiAxNDQgNjFRMTQ2IDY2IDIxNSAzNDJUMjg1IDYyMlEyODUgNjI5IDI4MSA2MjlRMjczIDYzMiAyMjggNjM0SDE5N1ExOTEgNjQwIDE5MSA2NDJUMTkzIDY1OVExOTcgNjc2IDIwMyA2ODBINzU3UTc2NCA2NzYgNzY0IDY2OVE3NjQgNjY0IDc1MSA1NTdUNzM3IDQ0N1E3MzUgNDQwIDcxNyA0NDBINzA1UTY5OCA0NDUgNjk4IDQ1M0w3MDEgNDc2UTcwNCA1MDAgNzA0IDUyOFE3MDQgNTU4IDY5NyA1NzhUNjc4IDYwOVQ2NDMgNjI1VDU5NiA2MzJUNTMyIDYzNEg0ODVRMzk3IDYzMyAzOTIgNjMxUTM4OCA2MjkgMzg2IDYyMlEzODUgNjE5IDM1NSA0OTlUMzI0IDM3N1EzNDcgMzc2IDM3MiAzNzZIMzk4UTQ2NCAzNzYgNDg5IDM5MVQ1MzQgNDcyUTUzOCA0ODggNTQwIDQ5MFQ1NTcgNDkzUTU2MiA0OTMgNTY1IDQ5M1Q1NzAgNDkyVDU3MiA0OTFUNTc0IDQ4N1Q1NzcgNDgzTDU0NCAzNTFRNTExIDIxOCA1MDggMjE2UTUwNSAyMTMgNDkyIDIxM1oiPjwvcGF0aD4KPC9kZWZzPgo8ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMCkiIGFyaWEtaGlkZGVuPSJ0cnVlIj4KIDx1c2UgeGxpbms6aHJlZj0iI0UxLU1KTUFUSEktNTYiIHg9IjAiIHk9IjAiPjwvdXNlPgogPHVzZSB4bGluazpocmVmPSIjRTEtTUpNQUlOLTNEIiB4PSIxMDQ3IiB5PSIwIj48L3VzZT4KIDx1c2UgeGxpbms6aHJlZj0iI0UxLU1KTUFJTi0yOCIgeD0iMjEwMyIgeT0iMCI+PC91c2U+CiA8dXNlIHhsaW5rOmhyZWY9IiNFMS1NSk1BSU4tMjIxMiIgeD0iMjQ5MyIgeT0iMCI+PC91c2U+CiA8dXNlIHhsaW5rOmhyZWY9IiNFMS1NSk1BSU4tMzEiIHg9IjMyNzEiIHk9IjAiPjwvdXNlPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzcyLDApIj4KIDx1c2UgeGxpbms6aHJlZj0iI0UxLU1KTUFJTi0yOSIgeD0iMCIgeT0iMCI+PC91c2U+CiA8dXNlIHRyYW5zZm9ybT0ic2NhbGUoMC43MDcpIiB4bGluazpocmVmPSIjRTEtTUpNQVRISS03MyIgeD0iNTUwIiB5PSI1ODMiPjwvdXNlPgo8L2c+CiA8dXNlIHhsaW5rOmhyZWY9IiNFMS1NSk1BSU4tMjIxNyIgeD0iNDgxNSIgeT0iMCI+PC91c2U+CiA8dXNlIHhsaW5rOmhyZWY9IiNFMS1NSk1BVEhJLTREIiB4PSI1NTM4IiB5PSIwIj48L3VzZT4KIDx1c2UgeGxpbms6aHJlZj0iI0UxLU1KTUFJTi0yMjE3IiB4PSI2ODEyIiB5PSIwIj48L3VzZT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzUzNCwwKSI+CiA8dXNlIHhsaW5rOmhyZWY9IiNFMS1NSk1BSU4tMzIiIHg9IjAiIHk9IjAiPjwvdXNlPgogPHVzZSB0cmFuc2Zvcm09InNjYWxlKDAuNzA3KSIgeGxpbms6aHJlZj0iI0UxLU1KTUFUSEktNDUiIHg9IjcwNyIgeT0iNTgzIj48L3VzZT4KPC9nPgo8L2c+Cjwvc3ZnPg=="},50065:function(M,N,I){I.d(N,{Z:function(){return i},a:function(){return c}});var D=I(67294);let g={},e=D.createContext(g);function c(M){let N=D.useContext(e);return D.useMemo(function(){return"function"==typeof M?M(N):{...N,...M}},[N,M])}function i(M){let N;return N=M.disableParentContext?"function"==typeof M.components?M.components(g):M.components||g:c(M.components),D.createElement(e.Provider,{value:N},M.children)}}}]);