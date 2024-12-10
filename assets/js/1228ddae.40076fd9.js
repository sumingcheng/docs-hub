"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[21422],{11970:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Backend/Java/\u57fa\u7840/\u5faa\u73af\u4e0e\u63a7\u5236\u7ed3\u6784","title":"Java \u5faa\u73af\u4e0e\u63a7\u5236\u7ed3\u6784","description":"While \u5faa\u73af","source":"@site/docs/Backend/Java/\u57fa\u7840/100.\u5faa\u73af\u4e0e\u63a7\u5236\u7ed3\u6784.md","sourceDirName":"Backend/Java/\u57fa\u7840","slug":"/Backend/Java/\u57fa\u7840/\u5faa\u73af\u4e0e\u63a7\u5236\u7ed3\u6784","permalink":"/docs-hub/docs/Backend/Java/\u57fa\u7840/\u5faa\u73af\u4e0e\u63a7\u5236\u7ed3\u6784","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/\u57fa\u7840/100.\u5faa\u73af\u4e0e\u63a7\u5236\u7ed3\u6784.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":100,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"Java \u6761\u4ef6\u8bed\u53e5\uff1aif-else \u548c switch","permalink":"/docs-hub/docs/Backend/Java/\u57fa\u7840/\u6761\u4ef6\u8bed\u53e5"},"next":{"title":"Java \u65b9\u6cd5\u4e0e\u51fd\u6570","permalink":"/docs-hub/docs/Backend/Java/\u57fa\u7840/\u65b9\u6cd5"}}');var t=i(74848),s=i(28453);const a={},c="Java \u5faa\u73af\u4e0e\u63a7\u5236\u7ed3\u6784",d={},l=[{value:"While \u5faa\u73af",id:"while-\u5faa\u73af",level:2},{value:"Do-While \u5faa\u73af",id:"do-while-\u5faa\u73af",level:2},{value:"\u8bb0\u8d26\u672c\u6848\u4f8b",id:"\u8bb0\u8d26\u672c\u6848\u4f8b",level:2},{value:"\u751f\u6210\u516d\u4f4d\u968f\u673a\u5b57\u7b26\u4e32",id:"\u751f\u6210\u516d\u4f4d\u968f\u673a\u5b57\u7b26\u4e32",level:2},{value:"For \u5faa\u73af",id:"for-\u5faa\u73af",level:2},{value:"Continue \u8bed\u53e5",id:"continue-\u8bed\u53e5",level:2},{value:"Break \u8bed\u53e5",id:"break-\u8bed\u53e5",level:2},{value:"\u5faa\u73af\u7c7b\u578b\u5bf9\u6bd4",id:"\u5faa\u73af\u7c7b\u578b\u5bf9\u6bd4",level:2},{value:"\u53cc\u91cd\u5faa\u73af\u7ec3\u4e60",id:"\u53cc\u91cd\u5faa\u73af\u7ec3\u4e60",level:2},{value:"\u4e5d\u4e5d\u4e58\u6cd5\u8868",id:"\u4e5d\u4e5d\u4e58\u6cd5\u8868",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"java-\u5faa\u73af\u4e0e\u63a7\u5236\u7ed3\u6784",children:"Java \u5faa\u73af\u4e0e\u63a7\u5236\u7ed3\u6784"})}),"\n",(0,t.jsx)(e.h2,{id:"while-\u5faa\u73af",children:"While \u5faa\u73af"}),"\n",(0,t.jsxs)(e.p,{children:["\u5f53\u9700\u8981\u5728\u6ee1\u8db3\u7279\u5b9a\u6761\u4ef6\u65f6\u91cd\u590d\u6267\u884c\u4e00\u6bb5\u4ee3\u7801\u65f6\uff0c\u6211\u4f1a\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"while"})," \u5faa\u73af\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u6839\u636e\u7528\u6237\u8f93\u5165\u7684\u6570\u5b57\uff0c\u8f93\u51fa\u5bf9\u5e94\u7684\u5de5\u4f5c\u65e5\u540d\u79f0\uff0c\u76f4\u5230 ",(0,t.jsx)(e.code,{children:"dayOfWeek"})," \u5927\u4e8e 5 \u4e3a\u6b62\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'System.out.println("\u8bf7\u8f93\u5165\u4e00\u4e2a\u6570\u5b57");\nScanner scanner = new Scanner(System.in);\nint dayOfWeek = scanner.nextInt();\n\nwhile (dayOfWeek <= 5) {\n    switch (dayOfWeek) {\n        case 1:\n            System.out.println("\u5468\u4e00");\n            break;\n        case 2:\n            System.out.println("\u5468\u4e8c");\n            break;\n        case 3:\n            System.out.println("\u5468\u4e09");\n            break;\n        case 4:\n            System.out.println("\u5468\u56db");\n            break;\n        case 5:\n            System.out.println("\u5468\u4e94");\n            break;\n    }\n    dayOfWeek++;\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"do-while-\u5faa\u73af",children:"Do-While \u5faa\u73af"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"do-while"})," \u5faa\u73af\u81f3\u5c11\u4f1a\u6267\u884c\u4e00\u6b21\u5faa\u73af\u4f53\uff0c\u7136\u540e\u518d\u5224\u65ad\u6761\u4ef6\u662f\u5426\u6ee1\u8db3\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u7528\u6237\u767b\u5f55\u9a8c\u8bc1\u7a0b\u5e8f\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u7528\u6237\u540d\u548c\u5bc6\u7801\u5747\u4e3a ",(0,t.jsx)(e.code,{children:"sumingcheng"}),"\u3002"]}),"\n",(0,t.jsx)(e.li,{children:"\u7a0b\u5e8f\u4f1a\u63d0\u793a\u7528\u6237\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u76f4\u5230\u8f93\u5165\u6b63\u786e\u4e3a\u6b62\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'String userName = "sumingcheng";\nString password = "sumingcheng";\nScanner scanner = new Scanner(System.in);\nString inputUserName;\nString inputPassword;\n\ndo {\n    System.out.println("Please enter your username");\n    inputUserName = scanner.next();\n} while (!inputUserName.equals(userName));\n\ndo {\n    System.out.println("Please enter your password");\n    inputPassword = scanner.next();\n} while (!inputPassword.equals(password));\n\nSystem.out.println("Login successfully!");\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u8bb0\u8d26\u672c\u6848\u4f8b",children:"\u8bb0\u8d26\u672c\u6848\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u7f16\u5199\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u8bb0\u8d26\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u5b9e\u73b0\u4ee5\u4e0b\u529f\u80fd\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u67e5\u8be2\u8d26\u6237\u4f59\u989d"}),"\n",(0,t.jsx)(e.li,{children:"\u8bb0\u5f55\u6536\u5165"}),"\n",(0,t.jsx)(e.li,{children:"\u8bb0\u5f55\u652f\u51fa"}),"\n",(0,t.jsx)(e.li,{children:"\u9000\u51fa\u7a0b\u5e8f"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9\u83dc\u5355\u9009\u9879\u6765\u6267\u884c\u76f8\u5e94\u7684\u64cd\u4f5c\u3002\u4ee5\u4e0b\u662f\u4ee3\u7801\u5b9e\u73b0\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'import java.util.Scanner;\nimport java.math.BigDecimal;\n\nBigDecimal balance = BigDecimal.ZERO;\nint option = 0;\n\ndo {\n    System.out.println("1. \u67e5\u8be2\u8d26\u6237\u4f59\u989d\uff0c\u8f93\u51fa\u603b\u989d\\n" +\n            "2. \u8bb0\u5f55\u6536\u5165\uff0c\u603b\u989d+\u6536\u5165=\u65b0\u603b\u989d\\n" +\n            "3. \u8bb0\u5f55\u652f\u51fa\uff0c\u603b\u989d-\u652f\u51fa=\u65b0\u603b\u989d\\n" +\n            "4. \u9000\u51fa");\n    option = new Scanner(System.in).nextInt();\n\n    switch (option) {\n        case 1:\n            System.out.println("\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e3a" + balance);\n            break;\n        case 2:\n            System.out.println("\u8bf7\u8f93\u5165\u6536\u5165\u91d1\u989d");\n            BigDecimal income = new Scanner(System.in).nextBigDecimal();\n            balance = balance.add(income);\n            System.out.println("\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e3a" + balance);\n            break;\n        case 3:\n            System.out.println("\u8bf7\u8f93\u5165\u652f\u51fa\u91d1\u989d");\n            BigDecimal expense = new Scanner(System.in).nextBigDecimal();\n            balance = balance.subtract(expense);\n            System.out.println("\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e3a" + balance);\n            break;\n        case 4:\n            System.out.println("\u60a8\u5df2\u7ecf\u9000\u51fa\u4e86\u8bb0\u8d26\u672c\uff01");\n            break;\n        default:\n            System.out.println("\u60a8\u7684\u8f93\u5165\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01");\n            break;\n    }\n\n} while (option != 4);\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u751f\u6210\u516d\u4f4d\u968f\u673a\u5b57\u7b26\u4e32",children:"\u751f\u6210\u516d\u4f4d\u968f\u673a\u5b57\u7b26\u4e32"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u9700\u8981\u751f\u6210\u4e00\u4e2a\u7531\u516d\u4e2a\u5c0f\u5199\u5b57\u6bcd\u7ec4\u6210\u7684\u968f\u673a\u5b57\u7b26\u4e32\u3002\u4ee5\u4e0b\u662f\u4ee3\u7801\u5b9e\u73b0\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"import java.util.Random;\n\nRandom random = new Random();\nStringBuilder randomStr = new StringBuilder();\n\ndo {\n    char c = (char) (random.nextInt(26) + 97);\n    randomStr.append(c);\n} while (randomStr.length() < 6);\n\nSystem.out.println(randomStr.toString());\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u6ce8\u610f\uff1a\u5728\u751f\u6210\u968f\u673a\u5b57\u6bcd\u65f6\uff0c\u6211\u4f7f\u7528\u4e86 ",(0,t.jsx)(e.code,{children:"random.nextInt(26) + 97"}),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u5f97\u5230\u4ece ",(0,t.jsx)(e.code,{children:"'a'"})," \u5230 ",(0,t.jsx)(e.code,{children:"'z'"})," \u7684\u5b57\u7b26\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"for-\u5faa\u73af",children:"For \u5faa\u73af"}),"\n",(0,t.jsxs)(e.p,{children:["\u5f53\u77e5\u9053\u9700\u8981\u5faa\u73af\u7684\u6b21\u6570\u65f6\uff0c\u6211\u4f1a\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"for"})," \u5faa\u73af\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u8f93\u51fa\u4ece 1 \u5230 10 \u7684\u6570\u5b57\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"for (int i = 1; i <= 10; i++) {\n    System.out.println(i);\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"continue-\u8bed\u53e5",children:"Continue \u8bed\u53e5"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"continue"})," \u8bed\u53e5\u7528\u4e8e\u8df3\u8fc7\u5f53\u524d\u5faa\u73af\u4e2d\u7684\u5269\u4f59\u8bed\u53e5\uff0c\u76f4\u63a5\u8fdb\u5165\u4e0b\u4e00\u6b21\u5faa\u73af\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u8f93\u51fa 100 \u4ee5\u5185\u7684\u5947\u6570\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"for (int i = 0; i <= 100; i++) {\n    if (i % 2 == 0) {\n        continue;\n    }\n    System.out.println(i);\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"break-\u8bed\u53e5",children:"Break \u8bed\u53e5"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"break"})," \u8bed\u53e5\u7528\u4e8e\u7acb\u5373\u8df3\u51fa\u5faa\u73af\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u5728\u9047\u5230\u7b2c\u4e00\u4e2a\u5076\u6570\u65f6\u8df3\u51fa\u5faa\u73af\uff0c\u56e0\u6b64\u53ea\u4f1a\u8f93\u51fa\u6570\u5b57 1\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"for (int i = 1; i <= 100; i++) {\n    if (i % 2 == 0) {\n        break;\n    }\n    System.out.println(i);\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5faa\u73af\u7c7b\u578b\u5bf9\u6bd4",children:"\u5faa\u73af\u7c7b\u578b\u5bf9\u6bd4"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"for"})," \u5faa\u73af\u9002\u5408\u7528\u4e8e\u5df2\u77e5\u5faa\u73af\u6b21\u6570\u7684\u60c5\u51b5\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"while"})," \u5faa\u73af\u9002\u5408\u7528\u4e8e\u6839\u636e\u6761\u4ef6\u51b3\u5b9a\u662f\u5426\u7ee7\u7eed\u6267\u884c\u7684\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e24\u79cd\u5faa\u73af\u53ef\u4ee5\u76f8\u4e92\u66ff\u4ee3\uff0c\u6839\u636e\u5b9e\u9645\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u5faa\u73af\u7ed3\u6784\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u53cc\u91cd\u5faa\u73af\u7ec3\u4e60",children:"\u53cc\u91cd\u5faa\u73af\u7ec3\u4e60"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4f7f\u7528\u53cc\u91cd\u5faa\u73af\u6765\u6253\u5370\u4e00\u4e2a\u7b49\u8170\u4e09\u89d2\u5f62\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'for (int i = 1; i <= 5; i++) {\n    for (int j = i; j < 5; j++) {\n        System.out.print(" ");\n    }\n\n    for (int j = 1; j <= (i * 2 - 1); j++) {\n        System.out.print("*");\n    }\n    System.out.println();\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(99388).A+"",width:"243",height:"212"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e5d\u4e5d\u4e58\u6cd5\u8868",children:"\u4e5d\u4e5d\u4e58\u6cd5\u8868"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4f7f\u7528\u53cc\u91cd\u5faa\u73af\u6253\u5370\u4e5d\u4e5d\u4e58\u6cd5\u8868\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'for (int i = 1; i <= 9; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(i + "x" + j + "=" + i * j + " ");\n    }\n    System.out.println();\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(8775).A+"",width:"757",height:"312"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},99388:(n,e,i)=>{i.d(e,{A:()=>r});const r="data:image/png;base64,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"},8775:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/95052edbf84b497f319386c2562136ac-f3b1d0a09a84a5b85b28890635cf419d.png"},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>c});var r=i(96540);const t={},s=r.createContext(t);function a(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);