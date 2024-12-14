"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["50684"],{54571:function(e,n,t){t.r(n),t.d(n,{assets:function(){return r},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var i=t(87081),a=t(85893),c=t(50065);let l={slug:"java\u6CDB\u578B\u4E2D\u7684\u9ED8\u8BA4\u7C7B\u578B\u53CA\u57FA\u672C\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u7BB1\u548C\u62C6\u7BB1\u673A\u5236",title:"Java\u6CDB\u578B\u4E2D\u7684\u9ED8\u8BA4\u7C7B\u578B\u53CA\u57FA\u672C\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u7BB1\u548C\u62C6\u7BB1\u673A\u5236",authors:["sumingcheng"],tags:["backend"],date:new Date("2023-09-12T00:00:00.000Z")},o="Java\u6CDB\u578B\u4E2D\u7684\u9ED8\u8BA4\u7C7B\u578B\u53CA\u57FA\u672C\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u7BB1\u548C\u62C6\u7BB1\u673A\u5236",r={authorsImageUrls:[void 0]},u=[{value:"\u6CDB\u578B\u673A\u5236",id:"\u6CDB\u578B\u673A\u5236",level:2},{value:"\u4E3E\u4F8B",id:"\u4E3E\u4F8B",level:2},{value:"\u4F7F\u7528",id:"\u4F7F\u7528",level:2}];function s(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u6CDB\u578B\u673A\u5236",children:"\u6CDB\u578B\u673A\u5236"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u5982\u679C\u6CA1\u6709\u8FDB\u884C\u5177\u4F53\u7C7B\u578B\u7684\u4F20\u5165\uFF0C\u9ED8\u8BA4\u4F7F\u7528 Object \u8FDB\u884C\u88C5\u7BB1\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u53D6\u503C\u7684\u65F6\u5019\u81EA\u52A8\u62C6\u7BB1\u4E3A\u57FA\u672C\u7C7B\u578B\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4E3E\u4F8B",children:"\u4E3E\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"package com.Generics;\n\npublic class Box<T> {\n    private T value;\n\n    public Box () {\n    }\n\n    public Box (T value) {\n        this.value = value;\n    }\n\n    public T getValue () {\n        return value;\n    }\n\n    public void setValue (T value) {\n        this.value = value;\n    }\n}\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4F7F\u7528",children:"\u4F7F\u7528"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'package com.Generics;\n\npublic class BoxTest {\n    public static void main (String[] args) {\n        Box genericBox = new Box();    // \u4E0D\u6307\u5B9A\u6CDB\u578B\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3AObject\n        genericBox.setValue("Hello");  // \u53EF\u4EE5\u5B58\u50A8\u4EFB\u4F55\u7C7B\u578B\u7684\u5BF9\u8C61\n        genericBox.setValue(123);      // \u4E5F\u53EF\u4EE5\u5B58\u50A8\u4E00\u4E2Aint\n\n        Object genericValue = genericBox.getValue();  // \u8FD4\u56DE\u503C\u7C7B\u578B\u4E3AObject\n        System.out.println(genericValue);\n\n        Box<Integer> intBox = new Box<>();\n        intBox.setValue(42);           // \u81EA\u52A8\u88C5\u7BB1\uFF1A\u5C06int\u8F6C\u6362\u4E3AInteger\n\n        int intValue = intBox.getValue(); // \u81EA\u52A8\u62C6\u7BB1\uFF1A\u5C06Integer\u8F6C\u6362\u4E3Aint\n        System.out.println(intValue);\n\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u4ECE",(0,a.jsx)(n.code,{children:"Object genericValue = genericBox.getValue()"}),"\u8FD9\u6BB5\u4EE3\u7801\u6CA1\u6709\u62A5\u9519\u5C31\u53EF\u4EE5\u5224\u65AD\u51FA\u9ED8\u8BA4\u7C7B\u578B\u4E3A",(0,a.jsx)(n.code,{children:"Object"})]})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var i=t(67294);let a={},c=i.createContext(a);function l(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(c.Provider,{value:n},e.children)}},87081:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/java\u6CDB\u578B\u4E2D\u7684\u9ED8\u8BA4\u7C7B\u578B\u53CA\u57FA\u672C\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u7BB1\u548C\u62C6\u7BB1\u673A\u5236","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2023-09-12-Java\u6CDB\u578B\u4E2D\u7684\u9ED8\u8BA4\u7C7B\u578B\u53CA\u57FA\u672C\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u7BB1\u548C\u62C6\u7BB1\u673A\u5236.md","source":"@site/blog/\u540E\u7AEF/2023-09-12-Java\u6CDB\u578B\u4E2D\u7684\u9ED8\u8BA4\u7C7B\u578B\u53CA\u57FA\u672C\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u7BB1\u548C\u62C6\u7BB1\u673A\u5236.md","title":"Java\u6CDB\u578B\u4E2D\u7684\u9ED8\u8BA4\u7C7B\u578B\u53CA\u57FA\u672C\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u7BB1\u548C\u62C6\u7BB1\u673A\u5236","description":"\u6CDB\u578B\u673A\u5236","date":"2023-09-12T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.7266666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"java\u6CDB\u578B\u4E2D\u7684\u9ED8\u8BA4\u7C7B\u578B\u53CA\u57FA\u672C\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u7BB1\u548C\u62C6\u7BB1\u673A\u5236","title":"Java\u6CDB\u578B\u4E2D\u7684\u9ED8\u8BA4\u7C7B\u578B\u53CA\u57FA\u672C\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u7BB1\u548C\u62C6\u7BB1\u673A\u5236","authors":["sumingcheng"],"tags":["backend"],"date":"2023-09-12T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u5B9E\u73B0\u5B57\u7B26\u4E32\u5927\u6570\u76F8\u52A0","permalink":"/docs-hub/blog/\u5B9E\u73B0\u5B57\u7B26\u4E32\u5927\u6570\u76F8\u52A0"},"nextItem":{"title":"Maven \u63D2\u4EF6","permalink":"/docs-hub/blog/maven-\u63D2\u4EF6"}}')}}]);