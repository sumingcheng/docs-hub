"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["71241"],{13819:function(n,e,t){t.r(e),t.d(e,{default:()=>d,frontMatter:()=>c,metadata:()=>r,assets:()=>s,toc:()=>u,contentTitle:()=>l});var r=JSON.parse('{"id":"Backend/Java/\u9762\u5411\u5BF9\u8C61/Java-\u5305\u88C5\u7C7B","title":"Java \u4E2D\u7684\u5305\u88C5\u7C7B","description":"Java \u4E2D\u7684\u5305\u88C5\u7C7B\u662F\u4E00\u7EC4\u7279\u6B8A\u7684\u7C7B\uFF0C\u5B83\u4EEC\u4E3A Java \u7684\u516B\u4E2A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u63D0\u4F9B\u4E86\u5BF9\u8C61\u8868\u793A\u3002\u7531\u4E8E\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E0D\u662F\u5BF9\u8C61\uFF0C\u5F53\u9700\u8981\u5BF9\u8C61\u8868\u793A\u65F6\uFF0C\u4F8B\u5982\u5728\u96C6\u5408\u6846\u67B6\u6216\u67D0\u4E9B\u65B9\u6CD5\u53C2\u6570\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u76F8\u5E94\u7684\u5305\u88C5\u7C7B\u3002","source":"@site/docs/Backend/Java/\u9762\u5411\u5BF9\u8C61/180.Java-\u5305\u88C5\u7C7B.md","sourceDirName":"Backend/Java/\u9762\u5411\u5BF9\u8C61","slug":"/Backend/Java/\u9762\u5411\u5BF9\u8C61/Java-\u5305\u88C5\u7C7B","permalink":"/docs-hub/Backend/Java/\u9762\u5411\u5BF9\u8C61/Java-\u5305\u88C5\u7C7B","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/\u9762\u5411\u5BF9\u8C61/180.Java-\u5305\u88C5\u7C7B.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":180,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"\u901A\u7528\u65B9\u6CD5","permalink":"/docs-hub/Backend/Java/\u9762\u5411\u5BF9\u8C61/Object-\u7C7B\u4E0E\u7C7B\u65B9\u6CD5"},"next":{"title":"String-\u5B9E\u4F8B\u65B9\u6CD5\u7684\u5B9E\u6218","permalink":"/docs-hub/Backend/Java/\u9762\u5411\u5BF9\u8C61/String-\u5B9E\u4F8B\u65B9\u6CD5"}}'),a=t("85893"),i=t("50065");let c={},l="Java \u4E2D\u7684\u5305\u88C5\u7C7B",s={},u=[{value:"\u5305\u88C5\u7C7B\u7684\u4E3B\u8981\u7528\u9014",id:"\u5305\u88C5\u7C7B\u7684\u4E3B\u8981\u7528\u9014",level:2},{value:"\u5305\u88C5\u7C7B\u7684\u793A\u4F8B\u4EE3\u7801",id:"\u5305\u88C5\u7C7B\u7684\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u62C6\u7BB1\u4E0E\u88C5\u7BB1",id:"\u62C6\u7BB1\u4E0E\u88C5\u7BB1",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function o(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"java-\u4E2D\u7684\u5305\u88C5\u7C7B",children:"Java \u4E2D\u7684\u5305\u88C5\u7C7B"})}),"\n",(0,a.jsx)(e.p,{children:"Java \u4E2D\u7684\u5305\u88C5\u7C7B\u662F\u4E00\u7EC4\u7279\u6B8A\u7684\u7C7B\uFF0C\u5B83\u4EEC\u4E3A Java \u7684\u516B\u4E2A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u63D0\u4F9B\u4E86\u5BF9\u8C61\u8868\u793A\u3002\u7531\u4E8E\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E0D\u662F\u5BF9\u8C61\uFF0C\u5F53\u9700\u8981\u5BF9\u8C61\u8868\u793A\u65F6\uFF0C\u4F8B\u5982\u5728\u96C6\u5408\u6846\u67B6\u6216\u67D0\u4E9B\u65B9\u6CD5\u53C2\u6570\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u76F8\u5E94\u7684\u5305\u88C5\u7C7B\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u4EE5\u4E0B\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u53CA\u5176\u5BF9\u5E94\u7684\u5305\u88C5\u7C7B\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"byte -> Byte\nshort -> Short\nint -> Integer\nlong -> Long\nfloat -> Float\ndouble -> Double\nchar -> Character\nboolean -> Boolean\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u5305\u88C5\u7C7B\u7684\u4E3B\u8981\u7528\u9014",children:"\u5305\u88C5\u7C7B\u7684\u4E3B\u8981\u7528\u9014"}),"\n",(0,a.jsx)(e.p,{children:"\u5305\u88C5\u7C7B\u5C06\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u503C\u5BF9\u8C61\u5316\uFF0C\u65B9\u4FBF\u8C03\u7528\u6240\u9700\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u3002\u8FD9\u4E9B\u7C7B\u8FD8\u63D0\u4F9B\u4E86\u7C7B\u578B\u8F6C\u6362\u7684\u529F\u80FD\uFF0C\u5141\u8BB8\u5728\u4E0D\u540C\u6570\u636E\u7C7B\u578B\u4E4B\u95F4\u8FDB\u884C\u8F6C\u6362\u3002\u7531\u4E8E Java \u7684\u96C6\u5408\u6846\u67B6\u53EA\u652F\u6301\u5B58\u50A8\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u88C5\u7C7B\u4F7F\u5F97\u57FA\u672C\u7C7B\u578B\u7684\u6570\u636E\u80FD\u591F\u88AB\u96C6\u5408\u5B58\u50A8\u3002\u6B64\u5916\uFF0C\u5305\u88C5\u7C7B\u672C\u8EAB\u5305\u542B\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6B63\u786E\u652F\u6301\u5BF9\u6570\u636E\u7684\u5904\u7406\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u4F8B\u5982\uFF0C",(0,a.jsx)(e.code,{children:"Integer"}),"\u7C7B\u63D0\u4F9B\u4E86\u5C06\u5341\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5\uFF0C\u8FD8\u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u4E3A\u6574\u6570\u3002\u8FD9\u4E9B\u65B9\u6CD5\u5728\u6570\u636E\u5904\u7406\u548C\u8F6C\u6362\u4E2D\u975E\u5E38\u5B9E\u7528\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u5305\u88C5\u7C7B\u7684\u793A\u4F8B\u4EE3\u7801",children:"\u5305\u88C5\u7C7B\u7684\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'package com.wrapper_class;\n\npublic class Test {\n    public static void main(String[] args) {\n        // \u5305\u88C5\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\u793A\u4F8B\n        // \u5341\u8FDB\u5236\u8F6C\u4E8C\u8FDB\u5236\n        String binaryString = Integer.toString(100, 2);\n        System.out.println(binaryString); // \u8F93\u51FA: 1100100\n\n        // \u4E8C\u8FDB\u5236\u8F6C\u5341\u8FDB\u5236\n        int decimal = Integer.parseInt("100", 2);\n        System.out.println(decimal); // \u8F93\u51FA: 4\n\n        // \u81EA\u52A8\u88C5\u7BB1\uFF1A\u5C06\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u4E3A\u5305\u88C5\u7C7B\u5BF9\u8C61\n        Integer num1 = 1;\n        Integer num2 = 1;\n        System.out.println(num1 == num2); // \u8F93\u51FA: true \u76F8\u540C\u5F15\u7528\n\n        // \u624B\u52A8\u88C5\u7BB1\uFF1A\u4F7F\u7528\u6784\u9020\u65B9\u6CD5\u521B\u5EFA\u5BF9\u8C61\n        Integer num3 = new Integer(2);\n        Integer num4 = new Integer(2);\n        System.out.println(num3 == num4); // \u8F93\u51FA: false \u4E0D\u540C\u5F15\u7528\n        System.out.println(num3.equals(num4)); // \u8F93\u51FA: true \u503C\u76F8\u7B49\n\n        // \u81EA\u52A8\u88C5\u7BB1\u8D85\u51FA\u7F13\u5B58\u8303\u56F4\n        Integer num5 = 128;\n        Integer num6 = 128;\n        System.out.println(num5 == num6); // \u8F93\u51FA: false \u4E0D\u540C\u5F15\u7528\n\n        /*\n         * \u81EA\u52A8\u88C5\u7BB1\u7684\u5B9E\u73B0\u539F\u7406\n         * \u81EA\u52A8\u88C5\u7BB1\u8C03\u7528\u4E86Integer.valueOf\u65B9\u6CD5\n         * IntegerCache.low = -128\n         * IntegerCache.high = 127\n         * \u56E0\u6B64\uFF0C-128\u5230127\u4E4B\u95F4\u7684\u6570\u5728\u81EA\u52A8\u88C5\u7BB1\u65F6\u4F1A\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\n         * \u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u4F18\u5316\u5E38\u7528\u6570\u5B57\u7684\u6027\u80FD\u548C\u5185\u5B58\u4F7F\u7528\u6548\u7387\n         */\n        Integer num7 = Integer.valueOf(127);\n        Integer num8 = Integer.valueOf(127);\n        Integer num9 = Integer.valueOf(1);\n        Integer num10 = Integer.valueOf(1);\n        System.out.println(num7 == num8); // \u8F93\u51FA: true\n        System.out.println(num9 == num10); // \u8F93\u51FA: true\n\n        // \u4EE5\u4E0B\u662FInteger.valueOf\u65B9\u6CD5\u7684\u7B80\u5316\u5B9E\u73B0\n        // public static Integer valueOf(int i) {\n        //     if (i >= Integer.IntegerCache.low && i <= Integer.IntegerCache.high)\n        //         return Integer.IntegerCache.cache[i + (-Integer.IntegerCache.low)];\n        //     return new Integer(i);\n        // }\n    }\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u62C6\u7BB1\u4E0E\u88C5\u7BB1",children:"\u62C6\u7BB1\u4E0E\u88C5\u7BB1"}),"\n",(0,a.jsx)(e.p,{children:"\u88C5\u7BB1\u662F\u6307\u5C06\u57FA\u672C\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u4E3A\u5176\u5BF9\u5E94\u7684\u5305\u88C5\u7C7B\u5BF9\u8C61\uFF0C\u800C\u62C6\u7BB1\u5219\u662F\u5C06\u5305\u88C5\u7C7B\u5BF9\u8C61\u8F6C\u6362\u56DE\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3002\u81EA JDK 1.5 \u8D77\uFF0CJava \u5F15\u5165\u4E86\u81EA\u52A8\u88C5\u7BB1\u548C\u81EA\u52A8\u62C6\u7BB1\u529F\u80FD\uFF0C\u7B80\u5316\u4E86\u57FA\u672C\u7C7B\u578B\u4E0E\u5305\u88C5\u7C7B\u4E4B\u95F4\u7684\u8F6C\u6362\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"package com.wrapper_class;\n\npublic class Test2 {\n    public static void main(String[] args) {\n        // \u81EA\u52A8\u88C5\u7BB1\uFF1A\u5C06\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u4E3A\u5305\u88C5\u7C7B\u5BF9\u8C61\n        Integer number = 996;\n        // \u5728\u6253\u5370\u65F6\uFF0C\u4F1A\u8C03\u7528Integer\u7684toString\u65B9\u6CD5\n        System.out.println(number); // \u8F93\u51FA: 996\n        System.out.println(number instanceof Integer); // \u8F93\u51FA: true\n\n        // \u624B\u52A8\u62C6\u7BB1\uFF1A\u5C06\u5305\u88C5\u7C7B\u5BF9\u8C61\u8F6C\u6362\u4E3A\u57FA\u672C\u7C7B\u578B\n        int primitive = number.intValue();\n        System.out.println(primitive); // \u8F93\u51FA: 996\n        // \u62C6\u7BB1\u540E\u7684primitive\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u65E0\u6CD5\u8C03\u7528Integer\u7684\u65B9\u6CD5\n    }\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,a.jsxs)(e.p,{children:["\u7F13\u5B58\u673A\u5236\uFF1AJava \u5BF9\u67D0\u4E9B\u6570\u503C\u8303\u56F4\u7684\u5305\u88C5\u7C7B\u5BF9\u8C61\u8FDB\u884C\u4E86\u7F13\u5B58\uFF0C\u4F8B\u5982",(0,a.jsx)(e.code,{children:"Integer"}),"\u7C7B\u7F13\u5B58\u4E86-128 \u5230 127 \u4E4B\u95F4\u7684\u6574\u6570\u3002\u8FD9\u610F\u5473\u7740\u5728\u8FD9\u4E2A\u8303\u56F4\u5185\uFF0C\u81EA\u52A8\u88C5\u7BB1\u7684\u5BF9\u8C61\u5F15\u7528\u76F8\u540C\uFF0C",(0,a.jsx)(e.code,{children:"=="}),"\u6BD4\u8F83\u4E3A",(0,a.jsx)(e.code,{children:"true"}),"\u3002\u8D85\u51FA\u8FD9\u4E2A\u8303\u56F4\u65F6\uFF0C\u6BCF\u6B21\u88C5\u7BB1\u90FD\u4F1A\u521B\u5EFA\u65B0\u7684\u5BF9\u8C61\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u6027\u80FD\u8003\u8651\uFF1A\u867D\u7136\u5305\u88C5\u7C7B\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u529F\u80FD\uFF0C\u4F46\u9891\u7E41\u4F7F\u7528\u88C5\u7BB1\u548C\u62C6\u7BB1\u53EF\u80FD\u4F1A\u5F71\u54CD\u6027\u80FD\u3002\u5728\u6027\u80FD\u654F\u611F\u7684\u573A\u666F\u4E0B\uFF0C\u5C3D\u91CF\u4F7F\u7528\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u4E0D\u53EF\u53D8\u6027\uFF1A\u5305\u88C5\u7C7B\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u4E00\u65E6\u521B\u5EFA\uFF0C\u5176\u503C\u4E0D\u53EF\u66F4\u6539\u3002\u8FD9\u6709\u52A9\u4E8E\u63D0\u9AD8\u7EBF\u7A0B\u5B89\u5168\u6027\uFF0C\u4F46\u9700\u8981\u6CE8\u610F\u5728\u9700\u8981\u53EF\u53D8\u6570\u636E\u7C7B\u578B\u65F6\u7684\u9009\u62E9\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u7A7A\u6307\u9488\u5F02\u5E38\uFF1A\u5305\u88C5\u7C7B\u5BF9\u8C61\u53EF\u4EE5\u4E3A",(0,a.jsx)(e.code,{children:"null"}),"\uFF0C\u5728\u8FDB\u884C\u62C6\u7BB1\u64CD\u4F5C\u65F6\uFF0C\u5982\u679C\u5BF9\u8C61\u4E3A",(0,a.jsx)(e.code,{children:"null"}),"\uFF0C\u4F1A\u629B\u51FA",(0,a.jsx)(e.code,{children:"NullPointerException"}),"\u3002\u56E0\u6B64\uFF0C\u5728\u4F7F\u7528\u5305\u88C5\u7C7B\u65F6\u5E94\u786E\u4FDD\u5BF9\u8C61\u4E0D\u4E3A",(0,a.jsx)(e.code,{children:"null"}),"\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["Integer \u7C7B\u9ED8\u8BA4\u7F13\u5B58\u4E86-128 \u5230 127 \u4E4B\u95F4\u7684\u6574\u6570\uFF0C\u8FD9\u4E2A\u8303\u56F4\u53EF\u4EE5\u901A\u8FC7 JVM \u53C2\u6570 -XX",":AutoBoxCacheMax",(0,a.jsx)(e.code,{children:"=<size>"})," \u6765\u4FEE\u6539\u4E0A\u9650\u3002\u5176\u4ED6\u5305\u88C5\u7C7B\u5982 Character \u4E5F\u6709\u7C7B\u4F3C\u7684\u7F13\u5B58\u673A\u5236\u3002"]})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return c}});var r=t(67294);let a={},i=r.createContext(a);function c(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);