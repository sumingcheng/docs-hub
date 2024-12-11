"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[18644],{98640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"Backend/Java/\u6cdb\u578b/\u6cdb\u578b\u8be6\u89e3","title":"Java \u6cdb\u578b\u8be6\u89e3","description":"Java \u6cdb\u578b\uff08Generics\uff09\u662f Java 5\uff08JDK 1.5\uff09\u5f15\u5165\u7684\u4e00\u4e2a\u91cd\u8981\u7279\u6027\uff0c\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u68c0\u67e5\u7c7b\u578b\u7684\u6b63\u786e\u6027\uff0c\u589e\u5f3a\u4ee3\u7801\u7684\u5b89\u5168\u6027\u548c\u53ef\u8bfb\u6027\u3002","source":"@site/docs/Backend/Java/\u6cdb\u578b/10.\u6cdb\u578b\u8be6\u89e3.md","sourceDirName":"Backend/Java/\u6cdb\u578b","slug":"/Backend/Java/\u6cdb\u578b/\u6cdb\u578b\u8be6\u89e3","permalink":"/docs-hub/Backend/Java/\u6cdb\u578b/\u6cdb\u578b\u8be6\u89e3","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/\u6cdb\u578b/10.\u6cdb\u578b\u8be6\u89e3.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":10,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"\u6cdb\u578b","permalink":"/docs-hub/category/\u6cdb\u578b"},"next":{"title":"Java \u6cdb\u578b\u65b9\u6cd5\u4e0e\u901a\u914d\u7b26\u8be6\u89e3","permalink":"/docs-hub/Backend/Java/\u6cdb\u578b/\u6cdb\u578b\u65b9\u6cd5\u4e0e\u901a\u914d\u7b26\u8be6\u89e3"}}');var r=t(74848),s=t(28453);const a={},l="Java \u6cdb\u578b\u8be6\u89e3",c={},o=[{value:"\u6cdb\u578b\u7684\u4f7f\u7528",id:"\u6cdb\u578b\u7684\u4f7f\u7528",level:2},{value:"\u83f1\u5f62\u64cd\u4f5c\u7b26",id:"\u83f1\u5f62\u64cd\u4f5c\u7b26",level:2},{value:"\u6cdb\u578b\u7c7b",id:"\u6cdb\u578b\u7c7b",level:2},{value:"\u88c5\u7bb1\u4e0e\u62c6\u7bb1",id:"\u88c5\u7bb1\u4e0e\u62c6\u7bb1",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"java-\u6cdb\u578b\u8be6\u89e3",children:"Java \u6cdb\u578b\u8be6\u89e3"})}),"\n",(0,r.jsx)(n.p,{children:"Java \u6cdb\u578b\uff08Generics\uff09\u662f Java 5\uff08JDK 1.5\uff09\u5f15\u5165\u7684\u4e00\u4e2a\u91cd\u8981\u7279\u6027\uff0c\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u68c0\u67e5\u7c7b\u578b\u7684\u6b63\u786e\u6027\uff0c\u589e\u5f3a\u4ee3\u7801\u7684\u5b89\u5168\u6027\u548c\u53ef\u8bfb\u6027\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6cdb\u578b\u7684\u4f7f\u7528",children:"\u6cdb\u578b\u7684\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u6cdb\u578b\u53ea\u80fd\u4f7f\u7528\u5f15\u7528\u7c7b\u578b\uff0c\u4e0d\u80fd\u4f7f\u7528\u57fa\u672c\u7c7b\u578b\u3002\u6cdb\u578b\u7684\u5177\u4f53\u7c7b\u578b\u5728\u4f7f\u7528\u65f6\u624d\u88ab\u786e\u5b9a\uff0c\u662f\u4e00\u79cd\u7c7b\u578b\u53c2\u6570\u5316\u7684\u673a\u5236\u3002\u5b83\u63d0\u4f9b\u4e86\u7f16\u8bd1\u65f6\u7684\u7c7b\u578b\u5b89\u5168\u4fdd\u969c\uff0c\u63d0\u9ad8\u4e86\u7a0b\u5e8f\u7684\u590d\u7528\u6027\uff0c\u800c\u4e14\u4e0d\u9700\u8981\u8fdb\u884c\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package com.generics;\n\npublic class Printer<T, K> {\n    private T firstValue;\n    private K secondValue;\n\n    public Printer(T firstValue, K secondValue) {\n        this.firstValue = firstValue;\n        this.secondValue = secondValue;\n    }\n\n    public T print() {\n        System.out.println(firstValue);\n        System.out.println(secondValue);\n        return firstValue;\n    }\n\n    public <V> boolean myEquals(V val) {\n        return val.equals(firstValue);\n    }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Printer<Integer, String> integerPrinter = new Printer<>(100, "sumingcheng");\nintegerPrinter.print();\n\nPrinter<String, Number> stringPrinter = new Printer<>("sumingcheng", 1);\nString result = stringPrinter.print();\nSystem.out.println(result);\n\nboolean isEqual = stringPrinter.myEquals("sumingcheng");\nSystem.out.println(isEqual);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u83f1\u5f62\u64cd\u4f5c\u7b26",children:"\u83f1\u5f62\u64cd\u4f5c\u7b26"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ece Java 7 \u5f00\u59cb\uff0c\u53ef\u4ee5\u4f7f\u7528\u83f1\u5f62\u64cd\u4f5c\u7b26 ",(0,r.jsx)(n.code,{children:"<>"})," \u5728\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\u8fdb\u884c\u7c7b\u578b\u63a8\u65ad\u3002\u8fd9\u6837\u4e0d\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"new"})," \u64cd\u4f5c\u7b26\u540e\u7684\u6784\u9020\u51fd\u6570\u4e2d\u518d\u6b21\u663e\u5f0f\u5730\u6307\u5b9a\u6cdb\u578b\u7c7b\u578b\uff0c\u7f16\u8bd1\u5668\u4f1a\u6839\u636e\u53d8\u91cf\u7684\u7c7b\u578b\u81ea\u52a8\u63a8\u65ad\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"ArrayList<String> list = new ArrayList<>();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7f16\u8bd1\u5668\u4f1a\u4ece\u5de6\u4fa7\u7684 ",(0,r.jsx)(n.code,{children:"ArrayList<String>"})," \u63a8\u65ad\u51fa\u53f3\u4fa7\u7684\u6cdb\u578b\u7c7b\u578b\uff0c\u4f7f\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6cdb\u578b\u7c7b",children:"\u6cdb\u578b\u7c7b"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u6cdb\u578b\u7c7b\u65f6\uff0c\u9700\u8981\u5728\u7c7b\u540d\u540e\u9762\u4f7f\u7528\u5c16\u62ec\u53f7\u5b9a\u4e49\u6cdb\u578b\u6807\u8bc6\uff0c\u4e00\u822c\u4f7f\u7528 T\u3001E\u3001K\u3001V \u7b49\u4f5c\u4e3a\u6807\u8bc6\u7b26\u3002\u6709\u51e0\u4e2a\u6cdb\u578b\u6807\u8bc6\uff0c\u5c31\u9700\u8981\u4f20\u5165\u51e0\u4e2a\u5177\u4f53\u7684\u7c7b\u578b\u3002\u4f20\u5165\u5177\u4f53\u7c7b\u578b\u65f6\uff0c\u5c31\u76f8\u5f53\u4e8e\u66ff\u6362\u4e86\u6cdb\u578b\u6807\u8bc6\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5728\u5b9e\u4f8b\u5316\u65f6\u6ca1\u6709\u4f20\u5165\u5177\u4f53\u7c7b\u578b\uff0c\u6cdb\u578b\u7684\u9ed8\u8ba4\u4e0a\u9650\u662f ",(0,r.jsx)(n.code,{children:"Object"})," \u7c7b\u578b\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6cdb\u578b\u4e0d\u652f\u6301\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u53ea\u652f\u6301\u5f15\u7528\u7c7b\u578b\uff0c\u56e0\u4e3a\u6cdb\u578b\u7c7b\u578b\u662f\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Object"})," \u7c7b\u8fdb\u884c\u5904\u7406\u7684\uff0c\u800c\u57fa\u672c\u6570\u636e\u7c7b\u578b\u65e0\u6cd5\u7ee7\u627f ",(0,r.jsx)(n.code,{children:"Object"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class MyTest<T, E, K, V> {\n    private T first;\n    private E second;\n    private K third;\n    private V fourth;\n\n    public MyTest(T first, E second, K third, V fourth) {\n        this.first = first;\n        this.second = second;\n        this.third = third;\n        this.fourth = fourth;\n    }\n\n    public void printTypes() {\n        System.out.println("T \u7684\u7c7b\u578b\u662f\uff1a" + first.getClass().getName());\n        System.out.println("E \u7684\u7c7b\u578b\u662f\uff1a" + second.getClass().getName());\n        System.out.println("K \u7684\u7c7b\u578b\u662f\uff1a" + third.getClass().getName());\n        System.out.println("V \u7684\u7c7b\u578b\u662f\uff1a" + fourth.getClass().getName());\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"MyTest<Integer, String, Double, Character> myTest = new MyTest<>(100, \"sumingcheng\", 99.9, 'A');\nmyTest.printTypes();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u88c5\u7bb1\u4e0e\u62c6\u7bb1",children:"\u88c5\u7bb1\u4e0e\u62c6\u7bb1"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5b9e\u4f8b\u5316\u6cdb\u578b\u7c7b\u65f6\uff0c\u53ef\u4ee5\u4f20\u5165\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u5305\u88c5\u7c7b\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"Integer"}),"\u3001",(0,r.jsx)(n.code,{children:"String"})," \u7b49\u3002\u7c7b\u5728\u5b9e\u4f8b\u5316\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u6839\u636e\u6cdb\u578b\u7c7b\u7684\u5177\u4f53\u7c7b\u578b\u8fdb\u884c\u88c5\u7bb1\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5177\u4f53\u7684\u6cdb\u578b\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Object"})," \u8fdb\u884c\u88c5\u7bb1\u3002\u53d6\u503c\u65f6\uff0c\u4f1a\u81ea\u52a8\u8fdb\u884c\u62c6\u7bb1\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package com.generics;\n\npublic class Box<T> {\n    private T value;\n\n    public Box() {\n    }\n\n    public Box(T value) {\n        this.value = value;\n    }\n\n    public T getValue() {\n        return value;\n    }\n\n    public void setValue(T value) {\n        this.value = value;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package com.generics;\n\npublic class BoxTest {\n    public static void main(String[] args) {\n        Box boxWithoutType = new Box();    // \u4e0d\u6307\u5b9a\u6cdb\u578b\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a Object\n        boxWithoutType.setValue("sumingcheng");  // \u53ef\u4ee5\u5b58\u50a8\u4efb\u4f55\u7c7b\u578b\u7684\u5bf9\u8c61\n        boxWithoutType.setValue(123);      // \u4e5f\u53ef\u4ee5\u5b58\u50a8\u4e00\u4e2a int\n\n        Object value = boxWithoutType.getValue();  // \u8fd4\u56de\u503c\u7c7b\u578b\u4e3a Object\n        System.out.println(value);\n\n        Box<Integer> integerBox = new Box<>();\n        integerBox.setValue(42);           // \u81ea\u52a8\u88c5\u7bb1\uff1a\u5c06 int \u8f6c\u6362\u4e3a Integer\n\n        int intValue = integerBox.getValue(); // \u81ea\u52a8\u62c6\u7bb1\uff1a\u5c06 Integer \u8f6c\u6362\u4e3a int\n        System.out.println(intValue);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6cdb\u578b\u53ea\u80fd\u4f7f\u7528\u5f15\u7528\u7c7b\u578b\uff0c\u4e0d\u80fd\u4f7f\u7528\u57fa\u672c\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u4f7f\u7528\u6cdb\u578b\u65f6\uff0c\u7c7b\u578b\u53c2\u6570\u5728\u7f16\u8bd1\u671f\u4f1a\u8fdb\u884c\u7c7b\u578b\u64e6\u9664\uff0c\u56e0\u6b64\u5728\u8fd0\u884c\u65f6\u65e0\u6cd5\u83b7\u53d6\u5b9e\u9645\u7684\u6cdb\u578b\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e3a\u4e86\u907f\u514d\u7c7b\u578b\u8f6c\u6362\u5f02\u5e38\uff0c\u5e94\u5c3d\u91cf\u5728\u5b9e\u4f8b\u5316\u6cdb\u578b\u7c7b\u65f6\u6307\u5b9a\u5177\u4f53\u7684\u7c7b\u578b\u53c2\u6570\u3002"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);