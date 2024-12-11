"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[90014],{95606:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});const l=JSON.parse('{"id":"Backend/Java/\u9762\u5411\u5bf9\u8c61/\u5927\u6570\u503c\u7528\u6cd5","title":"BigInteger \u548c BigDecimal \u7684\u5b9e\u6218\u6307\u5357","description":"BigInteger","source":"@site/docs/Backend/Java/\u9762\u5411\u5bf9\u8c61/200.\u5927\u6570\u503c\u7528\u6cd5.md","sourceDirName":"Backend/Java/\u9762\u5411\u5bf9\u8c61","slug":"/Backend/Java/\u9762\u5411\u5bf9\u8c61/\u5927\u6570\u503c\u7528\u6cd5","permalink":"/docs-hub/Backend/Java/\u9762\u5411\u5bf9\u8c61/\u5927\u6570\u503c\u7528\u6cd5","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/\u9762\u5411\u5bf9\u8c61/200.\u5927\u6570\u503c\u7528\u6cd5.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":200,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"String-\u5b9e\u4f8b\u65b9\u6cd5\u7684\u5b9e\u6218","permalink":"/docs-hub/Backend/Java/\u9762\u5411\u5bf9\u8c61/String-\u5b9e\u4f8b\u65b9\u6cd5"},"next":{"title":"\u65e5\u671f\u4e0e\u65e5\u5386\u5904\u7406","permalink":"/docs-hub/Backend/Java/\u9762\u5411\u5bf9\u8c61/\u65e5\u671f\u4e0e\u65e5\u5386\u5904\u7406"}}');var c=n(74848),d=n(28453);const r={},a="BigInteger \u548c BigDecimal \u7684\u5b9e\u6218\u6307\u5357",t={},s=[{value:"BigInteger",id:"biginteger",level:2},{value:"\u53d7\u9650\u4e8e",id:"\u53d7\u9650\u4e8e",level:3},{value:"\u521b\u5efa BigInteger \u5bf9\u8c61",id:"\u521b\u5efa-biginteger-\u5bf9\u8c61",level:3},{value:"Addition",id:"addition",level:3},{value:"Subtraction",id:"subtraction",level:3},{value:"Multiplication",id:"multiplication",level:3},{value:"Division",id:"division",level:3},{value:"\u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5",id:"\u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5",level:3},{value:"BigDecimal",id:"bigdecimal",level:2},{value:"\u521b\u5efa BigDecimal \u5bf9\u8c61",id:"\u521b\u5efa-bigdecimal-\u5bf9\u8c61",level:3},{value:"Addition",id:"addition-1",level:3},{value:"Subtraction",id:"subtraction-1",level:3},{value:"Multiplication",id:"multiplication-1",level:3},{value:"Division",id:"division-1",level:3},{value:"\u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5",id:"\u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5-1",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"BigDecimal \u7684\u5305\u88c5\u8fc7\u7a0b",id:"bigdecimal-\u7684\u5305\u88c5\u8fc7\u7a0b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879-1",level:2}];function o(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"biginteger-\u548c-bigdecimal-\u7684\u5b9e\u6218\u6307\u5357",children:"BigInteger \u548c BigDecimal \u7684\u5b9e\u6218\u6307\u5357"})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'import java.math.BigDecimal;\nimport java.math.BigInteger;\nimport java.math.RoundingMode;\n\npublic class TestBigNumbers {\n    public static void main(String[] args) {\n        // \u521b\u5efa BigInteger \u5bf9\u8c61\n        BigInteger numberA = new BigInteger("12345678901234567890");\n        BigInteger numberB = BigInteger.valueOf(100);\n\n        // \u57fa\u672c\u8fd0\u7b97\n        BigInteger sum = numberA.add(numberB);\n        BigInteger difference = numberA.subtract(numberB);\n        BigInteger product = numberA.multiply(numberB);\n        BigInteger quotient = numberA.divide(numberB);\n        BigInteger remainder = numberA.remainder(numberB);\n\n        // \u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5\n        BigInteger absoluteValue = numberA.abs();\n        BigInteger negatedValue = numberA.negate();\n        int comparisonResult = numberA.compareTo(numberB);\n\n        // \u521b\u5efa BigDecimal \u5bf9\u8c61\n        BigDecimal decimalX = new BigDecimal("12345.6789");\n        BigDecimal decimalY = BigDecimal.valueOf(10.5);\n\n        // \u57fa\u672c\u8fd0\u7b97\n        BigDecimal decimalSum = decimalX.add(decimalY);\n        BigDecimal decimalDifference = decimalX.subtract(decimalY);\n        BigDecimal decimalProduct = decimalX.multiply(decimalY);\n        BigDecimal decimalQuotient = decimalX.divide(decimalY, 2, RoundingMode.HALF_UP);\n\n        // \u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5\n        BigDecimal decimalAbsValue = decimalX.abs();\n        BigDecimal decimalNegatedValue = decimalX.negate();\n\n        BigDecimal bi1 = new BigDecimal("0.1");\n        BigDecimal bi2 = new BigDecimal("0.2");\n        BigDecimal bi3 = new BigDecimal("0.1");\n\n        int compare1 = bi1.compareTo(bi2);\n        int compare2 = bi2.compareTo(bi1);\n        int compare3 = bi1.compareTo(bi3);\n        boolean equalsResult = bi1.equals(bi3);\n\n        System.out.println("BigInteger Operations:");\n        System.out.println("Sum: " + sum);\n        System.out.println("Difference: " + difference);\n        System.out.println("Product: " + product);\n        System.out.println("Quotient: " + quotient);\n        System.out.println("Remainder: " + remainder);\n        System.out.println("Absolute Value: " + absoluteValue);\n        System.out.println("Negated Value: " + negatedValue);\n        System.out.println("Comparison Result: " + comparisonResult);\n\n        System.out.println("\\nBigDecimal Operations:");\n        System.out.println("Sum: " + decimalSum);\n        System.out.println("Difference: " + decimalDifference);\n        System.out.println("Product: " + decimalProduct);\n        System.out.println("Quotient: " + decimalQuotient);\n        System.out.println("Absolute Value: " + decimalAbsValue);\n        System.out.println("Negated Value: " + decimalNegatedValue);\n        System.out.println("Compare bi1 to bi2: " + compare1);\n        System.out.println("Compare bi2 to bi1: " + compare2);\n        System.out.println("Compare bi1 to bi3: " + compare3);\n        System.out.println("bi1 equals bi3: " + equalsResult);\n    }\n}\n'})}),"\n",(0,c.jsx)(i.h2,{id:"biginteger",children:"BigInteger"}),"\n",(0,c.jsx)(i.h3,{id:"\u53d7\u9650\u4e8e",children:"\u53d7\u9650\u4e8e"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"JVM \u7684\u6700\u5927\u5806\u5927\u5c0f"}),"\n",(0,c.jsx)(i.li,{children:"\u53ef\u7528\u7684\u7269\u7406\u5185\u5b58"}),"\n",(0,c.jsxs)(i.li,{children:["\u5185\u90e8\u7684 ",(0,c.jsx)(i.code,{children:"int"})," \u6570\u7ec4\u7684\u6700\u5927\u957f\u5ea6\uff0c\u8fd9\u4e5f\u53d7\u9650\u4e8e JVM \u548c\u7269\u7406\u5185\u5b58"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"BigInteger"})," \u5fc5\u987b\u652f\u6301 ",(0,c.jsx)(i.code,{children:"-2^Integer.MAX_VALUE"})," \u81f3 ",(0,c.jsx)(i.code,{children:"2^Integer.MAX_VALUE"}),"\uff0c\u5373\u5de6\u53f3\u5f00\u533a\u95f4"]}),"\n",(0,c.jsxs)(i.li,{children:["\u8d85\u51fa\u8303\u56f4\u4f1a\u62a5 ",(0,c.jsx)(i.code,{children:"ArithmeticException"})," \u8fd0\u7b97\u5f02\u5e38"]}),"\n",(0,c.jsx)(i.li,{children:"\u6700\u5c11\u652f\u6301 1 \u81f3 2^500000000"}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u521b\u5efa-biginteger-\u5bf9\u8c61",children:"\u521b\u5efa BigInteger \u5bf9\u8c61"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigInteger numberA = new BigInteger("12345678901234567890");\nBigInteger numberB = BigInteger.valueOf(100);\n'})}),"\n",(0,c.jsxs)(i.p,{children:["\u4f7f\u7528\u5b57\u7b26\u4e32\u521b\u5efa ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u53ef\u4ee5\u786e\u4fdd\u6570\u503c\u7684\u51c6\u786e\u6027\u3002\u901a\u8fc7 ",(0,c.jsx)(i.code,{children:"BigInteger.valueOf(long val)"})," \u65b9\u6cd5\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u8f83\u5c0f\u7684 ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"addition",children:"Addition"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigInteger sum = numberA.add(numberB);\nSystem.out.println("Sum: " + sum); // 12345678901234567990\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"add"})," \u65b9\u6cd5\u7528\u4e8e\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\u7684\u52a0\u6cd5\u8fd0\u7b97\u3002\u7531\u4e8e ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u662f\u4e0d\u53ef\u53d8\u7684\uff0c",(0,c.jsx)(i.code,{children:"add"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"subtraction",children:"Subtraction"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigInteger difference = numberA.subtract(numberB);\nSystem.out.println("Difference: " + difference); // 12345678901234567790\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"subtract"})," \u65b9\u6cd5\u7528\u4e8e\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\u7684\u51cf\u6cd5\u8fd0\u7b97\u3002\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\uff0c\u8868\u793a\u5dee\u503c\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"multiplication",children:"Multiplication"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigInteger product = numberA.multiply(numberB);\nSystem.out.println("Product: " + product); // 1234567890123456789000\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"multiply"})," \u65b9\u6cd5\u7528\u4e8e\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\u7684\u4e58\u6cd5\u8fd0\u7b97\u3002\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\uff0c\u8868\u793a\u79ef\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"division",children:"Division"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigInteger quotient = numberA.divide(numberB);\nSystem.out.println("Quotient: " + quotient); // 123456789012345678\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"divide"})," \u65b9\u6cd5\u7528\u4e8e\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\u7684\u9664\u6cd5\u8fd0\u7b97\u3002\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\uff0c\u8868\u793a\u5546\u3002\u5982\u679c\u9664\u4e0d\u5c3d\uff0c\u4f1a\u629b\u51fa ",(0,c.jsx)(i.code,{children:"ArithmeticException"}),"\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"\u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5",children:"\u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:"BigInteger absoluteValue = numberA.abs(); // \u7edd\u5bf9\u503c\nBigInteger negatedValue = numberA.negate(); // \u53d6\u53cd\nint comparisonResult = numberA.compareTo(numberB); // \u6bd4\u8f83\u4e24\u4e2a BigInteger \u7684\u503c\n"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"abs"})," \u8fd4\u56de ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u7684\u7edd\u5bf9\u503c\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"negate"})," \u8fd4\u56de ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u7684\u76f8\u53cd\u6570\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"compareTo"})," \u6bd4\u8f83\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u5bf9\u8c61\uff0c\u8fd4\u56de\u8d1f\u503c\u3001\u96f6\u6216\u6b63\u503c\uff0c\u5206\u522b\u8868\u793a\u5c0f\u4e8e\u3001\u7b49\u4e8e\u6216\u5927\u4e8e\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h2,{id:"bigdecimal",children:"BigDecimal"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"BigDecimal"})," \u7528\u4e8e\u8868\u793a\u4efb\u610f\u5927\u5c0f\u7684\u5e26\u6709\u5c0f\u6570\u70b9\u7684\u6570\uff0c\u9002\u7528\u4e8e\u9ad8\u7cbe\u5ea6\u8ba1\u7b97\uff0c\u5982\u91d1\u878d\u5e94\u7528\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"\u521b\u5efa-bigdecimal-\u5bf9\u8c61",children:"\u521b\u5efa BigDecimal \u5bf9\u8c61"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigDecimal decimalX = new BigDecimal("12345.6789");\nBigDecimal decimalY = BigDecimal.valueOf(10.5);\n'})}),"\n",(0,c.jsxs)(i.p,{children:["\u4f7f\u7528\u5b57\u7b26\u4e32\u521b\u5efa ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u53ef\u4ee5\u907f\u514d\u4e8c\u8fdb\u5236\u6d6e\u70b9\u6570\u5e26\u6765\u7684\u7cbe\u5ea6\u95ee\u9898\u3002",(0,c.jsx)(i.code,{children:"BigDecimal.valueOf(double val)"})," \u4e5f\u53ef\u4ee5\u7528\u4e8e\u5feb\u901f\u521b\u5efa\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"addition-1",children:"Addition"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigDecimal decimalSum = decimalX.add(decimalY);\nSystem.out.println("Sum: " + decimalSum); // 12356.1789\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"add"})," \u65b9\u6cd5\u7528\u4e8e\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\u7684\u52a0\u6cd5\u8fd0\u7b97\u3002\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\uff0c\u8868\u793a\u548c\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"subtraction-1",children:"Subtraction"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigDecimal decimalDifference = decimalX.subtract(decimalY);\nSystem.out.println("Difference: " + decimalDifference); // 12335.6789\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"subtract"})," \u65b9\u6cd5\u7528\u4e8e\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\u7684\u51cf\u6cd5\u8fd0\u7b97\u3002\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\uff0c\u8868\u793a\u5dee\u503c\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"multiplication-1",children:"Multiplication"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigDecimal decimalProduct = decimalX.multiply(decimalY);\nSystem.out.println("Product: " + decimalProduct); // 129,999.00445\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"multiply"})," \u65b9\u6cd5\u7528\u4e8e\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\u7684\u4e58\u6cd5\u8fd0\u7b97\u3002\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\uff0c\u8868\u793a\u79ef\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"division-1",children:"Division"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigDecimal decimalQuotient = decimalX.divide(decimalY, 2, RoundingMode.HALF_UP);\nSystem.out.println("Quotient: " + decimalQuotient); // 1177.73\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"divide"})," \u65b9\u6cd5\u7528\u4e8e\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\u7684\u9664\u6cd5\u8fd0\u7b97\u3002\u7531\u4e8e\u9664\u6cd5\u53ef\u80fd\u5bfc\u81f4\u65e0\u9650\u5c0f\u6570\uff0c\u9700\u8981\u6307\u5b9a\u7cbe\u5ea6\u548c\u820d\u5165\u6a21\u5f0f\uff0c\u4ee5\u786e\u4fdd\u7ed3\u679c\u7684\u53ef\u63a7\u6027\u3002"]}),"\n",(0,c.jsx)(i.h3,{id:"\u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5-1",children:"\u5176\u4ed6\u6709\u7528\u7684\u65b9\u6cd5"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigDecimal decimalAbsValue = decimalX.abs(); // \u7edd\u5bf9\u503c\nBigDecimal decimalNegatedValue = decimalX.negate(); // \u53d6\u53cd\n\nBigDecimal bi1 = new BigDecimal("0.1");\nBigDecimal bi2 = new BigDecimal("0.2");\nBigDecimal bi3 = new BigDecimal("0.1");\n\nint compare1 = bi1.compareTo(bi2); // -1\nint compare2 = bi2.compareTo(bi1); // 1\nint compare3 = bi1.compareTo(bi3); // 0\nboolean equalsResult = bi1.equals(bi3); // true\n\nSystem.out.println("Compare bi1 to bi2: " + compare1);\nSystem.out.println("Compare bi2 to bi1: " + compare2);\nSystem.out.println("Compare bi1 to bi3: " + compare3);\nSystem.out.println("bi1 equals bi3: " + equalsResult);\n'})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"abs"})," \u8fd4\u56de ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u7684\u7edd\u5bf9\u503c\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"negate"})," \u8fd4\u56de ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u7684\u76f8\u53cd\u6570\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"compareTo"})," \u6bd4\u8f83\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\uff0c\u8fd4\u56de\u8d1f\u503c\u3001\u96f6\u6216\u6b63\u503c\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.code,{children:"equals"})," \u68c0\u67e5\u4e24\u4e2a ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\u5728\u6570\u503c\u548c\u7cbe\u5ea6\u4e0a\u662f\u5426\u76f8\u7b49\u3002"]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(i.p,{children:["\u5f53\u4f7f\u7528 ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u8fdb\u884c\u9664\u6cd5\u64cd\u4f5c\u65f6\uff0c\u901a\u5e38\u9700\u8981\u6307\u5b9a\u7cbe\u5ea6\u548c\u820d\u5165\u6a21\u5f0f\uff0c\u4ee5\u786e\u4fdd\u5f97\u5230\u671f\u671b\u7684\u7ed3\u679c\u3002\u6b64\u5916\uff0c\u5efa\u8bae\u5728\u521d\u59cb\u5316 ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u65f6\u4f7f\u7528\u5b57\u7b26\u4e32\uff0c\u4ee5\u907f\u514d\u4e8c\u8fdb\u5236\u6d6e\u70b9\u6570\u5e26\u6765\u7684\u7cbe\u5ea6\u95ee\u9898\u3002"]}),"\n",(0,c.jsx)(i.h2,{id:"bigdecimal-\u7684\u5305\u88c5\u8fc7\u7a0b",children:"BigDecimal \u7684\u5305\u88c5\u8fc7\u7a0b"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"BigDecimal"})," \u7531\u4e24\u90e8\u5206\u6784\u6210\uff1a"]}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["\u65e0\u7b26\u53f7\u6574\u6570\u503c\uff1a\u7531 ",(0,c.jsx)(i.code,{children:"BigInteger"})," \u8868\u793a\uff0c\u6307\u4ee3 ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u7684\u6574\u6570\u90e8\u5206\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u6807\u5ea6\uff1a\u4e00\u4e2a ",(0,c.jsx)(i.code,{children:"int"})," \u7c7b\u578b\u7684\u503c\uff0c\u5b9a\u4e49\u5c0f\u6570\u70b9\u7684\u4f4d\u7f6e\u3002\u6b63\u6570\u8868\u793a\u5c0f\u6570\u70b9\u540e\u7684\u4f4d\u6570\uff0c\u8d1f\u6570\u8868\u793a\u6570\u503c\u88ab\u6269\u5927\u4e86\u591a\u5c11\u500d\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["\u4ee5 ",(0,c.jsx)(i.code,{children:"3.154"})," \u4e3a\u4f8b\uff1a"]}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["\u65e0\u7b26\u53f7\u6574\u6570\u503c\u4e3a ",(0,c.jsx)(i.code,{children:"3154"}),"\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:["\u6807\u5ea6\u4e3a ",(0,c.jsx)(i.code,{children:"3"}),"\uff0c\u56e0\u4e3a\u5c0f\u6570\u70b9\u540e\u6709\u4e09\u4f4d\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["\u521b\u5efa ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u5bf9\u8c61\uff1a"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'BigDecimal bd = new BigDecimal("3.154");\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"BigDecimal"})," \u4f1a\u89e3\u6790\u5b57\u7b26\u4e32 ",(0,c.jsx)(i.code,{children:'"3.154"'}),"\uff0c\u5e76\u5c06\u5176\u8f6c\u5316\u4e3a\u4e0a\u8ff0\u7684\u65e0\u7b26\u53f7\u6574\u6570\u503c\u548c\u6807\u5ea6\u3002"]}),"\n",(0,c.jsxs)(i.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u6570\u503c\u7684\u7cbe\u786e\u6027\uff0c\u5efa\u8bae\u5728\u521d\u59cb\u5316 ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u65f6\u4f7f\u7528\u5b57\u7b26\u4e32\uff0c\u800c\u4e0d\u662f ",(0,c.jsx)(i.code,{children:"double"})," \u6216 ",(0,c.jsx)(i.code,{children:"float"})," \u7c7b\u578b\u3002\u8fd9\u662f\u56e0\u4e3a\u4e8c\u8fdb\u5236\u6d6e\u70b9\u6570\u53ef\u80fd\u4e0d\u4f1a\u7cbe\u786e\u5730\u8868\u793a\u67d0\u4e9b\u5341\u8fdb\u5236\u6570\u503c\uff0c\u5bfc\u81f4\u4e0d\u671f\u671b\u7684\u820d\u5165\u3002\u4f7f\u7528\u5b57\u7b26\u4e32\u521d\u59cb\u5316\u53ef\u4ee5\u786e\u4fdd\u5f97\u5230\u7cbe\u786e\u7684\u6570\u503c\u8868\u793a\u3002"]}),"\n",(0,c.jsx)(i.h2,{id:"\u6ce8\u610f\u4e8b\u9879-1",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"BigInteger"})," \u548c ",(0,c.jsx)(i.code,{children:"BigDecimal"})," \u90fd\u662f\u4e0d\u53ef\u53d8\u7684\u7c7b\uff0c\u8fd9\u4f7f\u5f97\u5b83\u4eec\u5728\u591a\u7ebf\u7a0b\u73af\u5883\u4e2d\u5929\u7136\u5b89\u5168\u3002\u7136\u800c\uff0c\u9891\u7e41\u7684\u5bf9\u8c61\u521b\u5efa\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u5c24\u5176\u662f\u5728\u9700\u8981\u5927\u91cf\u8ba1\u7b97\u65f6\u3002\u63a8\u8350\u5728\u9700\u8981\u9891\u7e41\u4fee\u6539\u6570\u503c\u7684\u573a\u666f\u4e0b\u4f7f\u7528 ",(0,c.jsx)(i.code,{children:"StringBuilder"})," \u6216\u5176\u4ed6\u4f18\u5316\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsxs)(i.p,{children:["\u5728\u5904\u7406\u56fd\u9645\u5316\u5e94\u7528\u65f6\uff0c\u8fdb\u884c\u6570\u503c\u683c\u5f0f\u5316\u7b49\u64cd\u4f5c\u65f6\uff0c\u52a1\u5fc5\u8003\u8651\u533a\u57df\u6027\uff08",(0,c.jsx)(i.code,{children:"Locale"}),"\uff09\u53c2\u6570\uff0c\u4ee5\u786e\u4fdd\u6b63\u786e\u6027\u3002\u4f7f\u7528\u5b57\u7b26\u4e32\u65b9\u6cd5\u65f6\uff0c\u6ce8\u610f\u53ef\u80fd\u629b\u51fa\u7684\u5f02\u5e38\uff0c\u8fdb\u884c\u9002\u5f53\u7684\u5f02\u5e38\u5904\u7406\u6216\u8f93\u5165\u9a8c\u8bc1\u3002\u7406\u89e3\u8fd9\u4e9b\u7c7b\u7684\u5185\u90e8\u7ed3\u6784\u548c\u65b9\u6cd5\u7684\u5de5\u4f5c\u539f\u7406\uff0c\u6709\u52a9\u4e8e\u7f16\u5199\u9ad8\u6548\u3001\u53ef\u9760\u7684 Java \u4ee3\u7801\u3002"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-java",children:'// \u4f7f\u7528StringBuilder\u8fdb\u884c\u9ad8\u6548\u7684\u5b57\u7b26\u4e32\u62fc\u63a5\nStringBuilder stringBuilder = new StringBuilder();\nstringBuilder.append("The sum is: ").append(sum);\nSystem.out.println(stringBuilder.toString()); // The sum is: 12345678901234567990\n'})})]})}function m(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var l=n(96540);const c={},d=l.createContext(c);function r(e){const i=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),l.createElement(d.Provider,{value:i},e.children)}}}]);