"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[32552],{55983:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Backend/Java/\u6cdb\u578b/\u6cdb\u578b\u7ee7\u627f\u4e0e\u6cdb\u578b\u63a5\u53e3","title":"Java \u6cdb\u578b\u4e2d\u7684\u7ee7\u627f\u4e0e\u901a\u914d\u7b26","description":"\u5b50\u7c7b\u4e0e\u7236\u7c7b\u90fd\u662f\u6cdb\u578b\u7c7b\u7684\u60c5\u51b5","source":"@site/docs/Backend/Java/\u6cdb\u578b/30.\u6cdb\u578b\u7ee7\u627f\u4e0e\u6cdb\u578b\u63a5\u53e3.md","sourceDirName":"Backend/Java/\u6cdb\u578b","slug":"/Backend/Java/\u6cdb\u578b/\u6cdb\u578b\u7ee7\u627f\u4e0e\u6cdb\u578b\u63a5\u53e3","permalink":"/docs-hub/Backend/Java/\u6cdb\u578b/\u6cdb\u578b\u7ee7\u627f\u4e0e\u6cdb\u578b\u63a5\u53e3","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/\u6cdb\u578b/30.\u6cdb\u578b\u7ee7\u627f\u4e0e\u6cdb\u578b\u63a5\u53e3.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":30,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"Java \u6cdb\u578b\u65b9\u6cd5\u4e0e\u901a\u914d\u7b26\u8be6\u89e3","permalink":"/docs-hub/Backend/Java/\u6cdb\u578b/\u6cdb\u578b\u65b9\u6cd5\u4e0e\u901a\u914d\u7b26\u8be6\u89e3"},"next":{"title":"Java \u6cdb\u578b\u7684\u7c7b\u578b\u64e6\u9664\u4e0e\u6865\u63a5\u65b9\u6cd5","permalink":"/docs-hub/Backend/Java/\u6cdb\u578b/\u6cdb\u578b\u7684\u7c7b\u578b\u64e6\u9664\u4e0e\u6865\u63a5\u65b9\u6cd5"}}');var a=i(74848),c=i(28453);const s={},t="Java \u6cdb\u578b\u4e2d\u7684\u7ee7\u627f\u4e0e\u901a\u914d\u7b26",l={},d=[{value:"\u5b50\u7c7b\u4e0e\u7236\u7c7b\u90fd\u662f\u6cdb\u578b\u7c7b\u7684\u60c5\u51b5",id:"\u5b50\u7c7b\u4e0e\u7236\u7c7b\u90fd\u662f\u6cdb\u578b\u7c7b\u7684\u60c5\u51b5",level:2},{value:"\u6cdb\u578b\u63a5\u53e3",id:"\u6cdb\u578b\u63a5\u53e3",level:2},{value:"\u4f7f\u7528 <code>super</code> \u5173\u952e\u5b57\u5b9a\u4e49\u901a\u914d\u7b26\u7684\u4e0b\u754c",id:"\u4f7f\u7528-super-\u5173\u952e\u5b57\u5b9a\u4e49\u901a\u914d\u7b26\u7684\u4e0b\u754c",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"java-\u6cdb\u578b\u4e2d\u7684\u7ee7\u627f\u4e0e\u901a\u914d\u7b26",children:"Java \u6cdb\u578b\u4e2d\u7684\u7ee7\u627f\u4e0e\u901a\u914d\u7b26"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5b50\u7c7b\u4e0e\u7236\u7c7b\u90fd\u662f\u6cdb\u578b\u7c7b\u7684\u60c5\u51b5",children:"\u5b50\u7c7b\u4e0e\u7236\u7c7b\u90fd\u662f\u6cdb\u578b\u7c7b\u7684\u60c5\u51b5"}),"\n",(0,a.jsx)(n.p,{children:"\u5728 Java \u4e2d\uff0c\u5f53\u5b50\u7c7b\u548c\u7236\u7c7b\u90fd\u662f\u6cdb\u578b\u7c7b\u65f6\uff0c\u5b50\u7c7b\u5728\u7ee7\u627f\u7236\u7c7b\u65f6\u5fc5\u987b\u4f20\u9012\u7236\u7c7b\u7684\u7c7b\u578b\u53c2\u6570\u3002\u5982\u679c\u5b50\u7c7b\u4e0d\u662f\u6cdb\u578b\u7c7b\uff0c\u800c\u7236\u7c7b\u662f\u6cdb\u578b\u7c7b\uff0c\u90a3\u4e48\u5728\u5b50\u7c7b\u7ee7\u627f\u65f6\u9700\u8981\u4e3a\u7236\u7c7b\u7684\u6cdb\u578b\u6307\u5b9a\u5177\u4f53\u7684\u7c7b\u578b\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0b\u9762\u662f\u4e00\u4e2a\u6cdb\u578b\u7236\u7c7b ",(0,a.jsx)(n.code,{children:"Father<T>"}),"\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"package com.Generics;\n\npublic class Father<T> {\n    private T name;\n\n    public Father(T name) {\n        this.name = name;\n    }\n\n    public T getName() {\n        return name;\n    }\n\n    public void setName(T name) {\n        this.name = name;\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u6cdb\u578b\u5b50\u7c7b ",(0,a.jsx)(n.code,{children:"Child<T>"}),"\uff0c\u7ee7\u627f\u81ea ",(0,a.jsx)(n.code,{children:"Father<T>"}),"\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"package com.Generics;\n\npublic class Child<T> extends Father<T> {\n\n    public Child(T name) {\n        super(name);\n    }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u4e3b\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Child<String> child = new Child<>("sumingcheng");\nSystem.out.println("child.getName(): " + child.getName());\nchild.setName("sumingcheng");\nSystem.out.println("child.getName(): " + child.getName());\n\nChild<Integer> child1 = new Child<>(100);\nSystem.out.println("child1.getName(): " + child1.getName());\nchild1.setName(101);\nSystem.out.println("child1.getName(): " + child1.getName());\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u6cdb\u578b\u7684\u597d\u5904\u662f\u53ef\u4ee5\u5728\u4f20\u5165\u53c2\u6570\u65f6\u51b3\u5b9a\u7c7b\u578b\uff0c\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\uff0c\u63d0\u9ad8\u4ee3\u7801\u7684\u7075\u6d3b\u6027\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6cdb\u578b\u63a5\u53e3",children:"\u6cdb\u578b\u63a5\u53e3"}),"\n",(0,a.jsxs)(n.p,{children:["\u6211\u4eec\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u6cdb\u578b\u63a5\u53e3 ",(0,a.jsx)(n.code,{children:"IPrinter<T>"})," \u4ee5\u53ca\u5176\u5b9e\u73b0\u7c7b ",(0,a.jsx)(n.code,{children:"PrinterImpl<T>"}),"\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"package com.Generics;\n\npublic interface IPrinter<T> {\n    void print(T item);\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'package com.Generics;\n\npublic class PrinterImpl<T> implements IPrinter<T> {\n    @Override\n    public void print(T item) {\n        System.out.println("\u7c7b\u578b " + item.getClass().getSimpleName() + "\uff0c\u503c " + item);\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u4e3b\u7a0b\u5e8f\u4e2d\u4f7f\u7528\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'IPrinter<String> stringPrinter = new PrinterImpl<>();\nstringPrinter.print("sumingcheng");\n\nIPrinter<Integer> integerPrinter = new PrinterImpl<>();\nintegerPrinter.print(12345);\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"\u4f7f\u7528-super-\u5173\u952e\u5b57\u5b9a\u4e49\u901a\u914d\u7b26\u7684\u4e0b\u754c",children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"super"})," \u5173\u952e\u5b57\u5b9a\u4e49\u901a\u914d\u7b26\u7684\u4e0b\u754c"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u6cdb\u578b\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"super"})," \u5173\u952e\u5b57\u6765\u5b9a\u4e49\u901a\u914d\u7b26\u7684\u4e0b\u754c\uff0c\u4ee5\u4fbf\u5411\u96c6\u5408\u4e2d\u6dfb\u52a0\u5143\u7d20\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"List<? super Integer> list = new ArrayList<Number>();\nlist.add(10);  // \u5141\u8bb8\n// list.add(new Object());  // \u7f16\u8bd1\u9519\u8bef\n// list.add(5.5);  // \u7f16\u8bd1\u9519\u8bef\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,a.jsx)(n.code,{children:"List<? super Integer>"})," \u8868\u793a\u53ef\u4ee5\u662f ",(0,a.jsx)(n.code,{children:"Integer"})," \u6216\u5176\u7236\u7c7b\u578b\u7684\u5217\u8868\uff0c\u4f46\u53ea\u80fd\u6dfb\u52a0 ",(0,a.jsx)(n.code,{children:"Integer"})," \u6216\u5176\u5b50\u7c7b\u578b\u7684\u5bf9\u8c61\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u7c7b\u578b\u5b89\u5168\uff0c\u907f\u514d\u6dfb\u52a0\u4e0d\u517c\u5bb9\u7684\u7c7b\u578b\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5728\u7ee7\u627f\u6cdb\u578b\u7c7b\u65f6\uff0c\u52a1\u5fc5\u660e\u786e\u6307\u5b9a\u7c7b\u578b\u53c2\u6570\uff0c\u907f\u514d\u7c7b\u578b\u64e6\u9664\u5bfc\u81f4\u7684\u8fd0\u884c\u65f6\u9519\u8bef\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u4f7f\u7528\u6cdb\u578b\u63a5\u53e3\u65f6\uff0c\u53ef\u4ee5\u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u4ee3\u7801\uff0c\u9002\u7528\u4e8e\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u5904\u7406\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u5728\u4f7f\u7528\u901a\u914d\u7b26\u65f6\uff0c",(0,a.jsx)(n.code,{children:"super"})," \u5b9a\u4e49\u4e0b\u754c\uff0c",(0,a.jsx)(n.code,{children:"extends"})," \u5b9a\u4e49\u4e0a\u754c\uff0c\u6839\u636e\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u5173\u952e\u5b57\u3002"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>t});var r=i(96540);const a={},c=r.createContext(a);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);