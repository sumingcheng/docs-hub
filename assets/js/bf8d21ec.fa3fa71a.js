"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["21244"],{68087:function(n,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>s,contentTitle:()=>t});var i=JSON.parse('{"id":"Backend/Go/\u63A5\u53E3/\u7C7B\u578B\u65AD\u8A00","title":"Go \u8BED\u8A00\u4E2D\u7684\u63A5\u53E3\u4E0E\u7C7B\u578B\u65AD\u8A00","description":"\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u7684\u7C7B\u578B\u65AD\u8A00","source":"@site/docs/Backend/Go/\u63A5\u53E3/1.\u7C7B\u578B\u65AD\u8A00.md","sourceDirName":"Backend/Go/\u63A5\u53E3","slug":"/Backend/Go/\u63A5\u53E3/\u7C7B\u578B\u65AD\u8A00","permalink":"/docs-hub/Backend/Go/\u63A5\u53E3/\u7C7B\u578B\u65AD\u8A00","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u63A5\u53E3/1.\u7C7B\u578B\u65AD\u8A00.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":1,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"\u63A5\u53E3","permalink":"/docs-hub/category/\u63A5\u53E3"},"next":{"title":"Go \u9E2D\u5B50\u7C7B\u578B\u548C\u7C7B\u578B\u7EA6\u675F","permalink":"/docs-hub/Backend/Go/\u63A5\u53E3/\u9E2D\u5B50\u7C7B\u578B"}}'),a=r("85893"),c=r("50065");let l={},t="Go \u8BED\u8A00\u4E2D\u7684\u63A5\u53E3\u4E0E\u7C7B\u578B\u65AD\u8A00",d={},s=[{value:"\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u7684\u7C7B\u578B\u65AD\u8A00",id:"\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u7684\u7C7B\u578B\u65AD\u8A00",level:2},{value:"\u7C7B\u578B\u65AD\u8A00\u7684\u4F7F\u7528",id:"\u7C7B\u578B\u65AD\u8A00\u7684\u4F7F\u7528",level:2},{value:"\u5982\u4F55\u5728 Go 1.17 \u4E2D\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684\u52A0\u6CD5\u8FD0\u7B97",id:"\u5982\u4F55\u5728-go-117-\u4E2D\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684\u52A0\u6CD5\u8FD0\u7B97",level:2},{value:"\u63A5\u53E3\u7684\u7528\u9014",id:"\u63A5\u53E3\u7684\u7528\u9014",level:2},{value:"Go \u8BED\u8A00\u7684\u9762\u5411\u5BF9\u8C61\u7279\u6027",id:"go-\u8BED\u8A00\u7684\u9762\u5411\u5BF9\u8C61\u7279\u6027",level:2},{value:"\u63A5\u53E3\u7684\u5D4C\u5957",id:"\u63A5\u53E3\u7684\u5D4C\u5957",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function o(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"go-\u8BED\u8A00\u4E2D\u7684\u63A5\u53E3\u4E0E\u7C7B\u578B\u65AD\u8A00",children:"Go \u8BED\u8A00\u4E2D\u7684\u63A5\u53E3\u4E0E\u7C7B\u578B\u65AD\u8A00"})}),"\n",(0,a.jsx)(e.h2,{id:"\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u7684\u7C7B\u578B\u65AD\u8A00",children:"\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u7684\u7C7B\u578B\u65AD\u8A00"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    var value interface{} = 1\n    value = value.(int) + 1\n    fmt.Println(value)\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,a.jsx)(e.code,{children:"interface{}"})," \u7C7B\u578B\u7684\u53D8\u91CF ",(0,a.jsx)(e.code,{children:"value"}),"\uFF0C\u521D\u59CB\u503C\u4E3A\u6574\u6570 ",(0,a.jsx)(e.code,{children:"1"}),"\u3002\u901A\u8FC7\u7C7B\u578B\u65AD\u8A00 ",(0,a.jsx)(e.code,{children:"value.(int)"}),"\uFF0C\u5C06\u5176\u8F6C\u6362\u4E3A ",(0,a.jsx)(e.code,{children:"int"})," \u7C7B\u578B\uFF0C\u7136\u540E\u52A0\u4E0A ",(0,a.jsx)(e.code,{children:"1"}),"\uFF0C\u7ED3\u679C\u8D4B\u56DE ",(0,a.jsx)(e.code,{children:"value"}),"\u3002\u6700\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C ",(0,a.jsx)(e.code,{children:"2"}),"\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u7C7B\u578B\u65AD\u8A00\u7684\u4F7F\u7528",children:"\u7C7B\u578B\u65AD\u8A00\u7684\u4F7F\u7528"}),"\n",(0,a.jsx)(e.p,{children:"\u81EA\u5B9A\u4E49\u7C7B\u578B\u4E5F\u53EF\u4EE5\u8FDB\u884C\u7C7B\u578B\u65AD\u8A00\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    var data interface{} = "hello"\n\n    str, ok := data.(string)\n    fmt.Println(str, ok) // \u8F93\u51FA\uFF1Ahello true\n\n    num, ok := data.(float64)\n    fmt.Println(num, ok) // \u8F93\u51FA\uFF1A0 false\n\n    // \u5982\u679C\u4E0D\u5173\u5FC3\u65AD\u8A00\u662F\u5426\u6210\u529F\uFF0C\u53EF\u4EE5\u7701\u7565 ok\n    str = data.(string)\n    fmt.Println(str) // \u8F93\u51FA\uFF1Ahello\n\n    // \u4EE5\u4E0B\u4EE3\u7801\u4F1A\u5F15\u53D1 panic\uFF0C\u56E0\u4E3A data \u4E0D\u662F float64 \u7C7B\u578B\n    // num = data.(float64)\n    // fmt.Println(num)\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u5C06\u53D8\u91CF ",(0,a.jsx)(e.code,{children:"data"})," \u5B9A\u4E49\u4E3A ",(0,a.jsx)(e.code,{children:"interface{}"})," \u7C7B\u578B\uFF0C\u5E76\u8D4B\u503C\u4E3A\u5B57\u7B26\u4E32 ",(0,a.jsx)(e.code,{children:'"hello"'}),"\u3002\u7136\u540E\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u5C06\u5176\u8F6C\u6362\u4E3A ",(0,a.jsx)(e.code,{children:"string"})," \u548C ",(0,a.jsx)(e.code,{children:"float64"})," \u7C7B\u578B\uFF0C\u5E76\u901A\u8FC7\u68C0\u67E5\u65AD\u8A00\u662F\u5426\u6210\u529F\u6765\u5904\u7406\u4E0D\u540C\u7684\u60C5\u51B5\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u5982\u4F55\u5728-go-117-\u4E2D\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684\u52A0\u6CD5\u8FD0\u7B97",children:"\u5982\u4F55\u5728 Go 1.17 \u4E2D\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684\u52A0\u6CD5\u8FD0\u7B97"}),"\n",(0,a.jsx)(e.p,{children:"\u5728 Go 1.17 \u7248\u672C\u4E2D\uFF0C\u6CA1\u6709\u6CDB\u578B\u529F\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u548C\u7C7B\u578B\u9009\u62E9\u6765\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684\u64CD\u4F5C\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'func Plus(a, b interface{}) interface{} {\n    switch a.(type) {\n    case int:\n        valA := a.(int)\n        valB := b.(int)\n        return valA + valB\n    case string:\n        valA := a.(string)\n        valB := b.(string)\n        return valA + valB\n    case float32:\n        valA := a.(float32)\n        valB := b.(float32)\n        return valA + valB\n    default:\n        panic("\u7C7B\u578B\u4E0D\u652F\u6301")\n    }\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u51FD\u6570\u4E2D\uFF0C\u6211\u4F7F\u7528 ",(0,a.jsx)(e.code,{children:"interface{}"})," \u7C7B\u578B\u4F5C\u4E3A\u53C2\u6570\uFF0C\u901A\u8FC7 ",(0,a.jsx)(e.code,{children:"switch"})," \u8BED\u53E5\u68C0\u67E5\u53C2\u6570\u7684\u5177\u4F53\u7C7B\u578B\uFF0C\u7136\u540E\u8FDB\u884C\u76F8\u5E94\u7684\u52A0\u6CD5\u64CD\u4F5C\u3002\u5982\u679C\u7C7B\u578B\u4E0D\u652F\u6301\uFF0C\u4F1A\u5F15\u53D1 ",(0,a.jsx)(e.code,{children:"panic"}),"\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u63A5\u53E3\u7684\u7528\u9014",children:"\u63A5\u53E3\u7684\u7528\u9014"}),"\n",(0,a.jsx)(e.p,{children:"\u63A5\u53E3\u7528\u4E8E\u5B9A\u4E49\u4E00\u7EC4\u65B9\u6CD5\uFF0C\u89C4\u5B9A\u7C7B\u578B\u9700\u8981\u5B9E\u73B0\u54EA\u4E9B\u65B9\u6CD5\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u63A5\u53E3\u4E2D\u4FDD\u5B58\u4E86\u9700\u8981\u5B9E\u73B0\u7684\u65B9\u6CD5\u7684\u5B9A\u4E49\u89C4\u5219\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"go-\u8BED\u8A00\u7684\u9762\u5411\u5BF9\u8C61\u7279\u6027",children:"Go \u8BED\u8A00\u7684\u9762\u5411\u5BF9\u8C61\u7279\u6027"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\n// \u5B9A\u4E49\u4E00\u4E2A\u52A8\u7269\u7684\u7ED3\u6784\u4F53\ntype Animal struct {\n    Name string\n    Age  int\n}\n\n// \u4E3A Animal \u7ED3\u6784\u4F53\u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5\nfunc (a Animal) Speak() string {\n    return "\u6211\u662F\u4E00\u53EA\u540D\u53EB " + a.Name + " \u7684\u52A8\u7269"\n}\n\n// \u5B9A\u4E49\u4E00\u4E2A Speaker \u63A5\u53E3\ntype Speaker interface {\n    Speak() string\n}\n\n// \u63A5\u53D7 Speaker \u63A5\u53E3\u7C7B\u578B\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u4F7F\u4EFB\u4F55\u5B9E\u73B0\u4E86\u8BE5\u63A5\u53E3\u7684\u7C7B\u578B\u53D1\u58F0\nfunc MakeItSpeak(s Speaker) {\n    fmt.Println(s.Speak())\n}\n\nfunc main() {\n    animal := Animal{Name: "sumingcheng", Age: 5}\n    MakeItSpeak(animal) // \u8F93\u51FA\uFF1A\u6211\u662F\u4E00\u53EA\u540D\u53EB sumingcheng \u7684\u52A8\u7269\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,a.jsx)(e.code,{children:"Animal"})," \u7ED3\u6784\u4F53\uFF0C\u5E76\u4E3A\u5176\u5B9E\u73B0\u4E86 ",(0,a.jsx)(e.code,{children:"Speak"})," \u65B9\u6CD5\u3002\u7136\u540E\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,a.jsx)(e.code,{children:"Speaker"})," \u63A5\u53E3\uFF0C\u5305\u542B ",(0,a.jsx)(e.code,{children:"Speak"})," \u65B9\u6CD5\u3002\u51FD\u6570 ",(0,a.jsx)(e.code,{children:"MakeItSpeak"})," \u63A5\u53D7\u4E00\u4E2A ",(0,a.jsx)(e.code,{children:"Speaker"})," \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u53EF\u4EE5\u8BA9\u4EFB\u4F55\u5B9E\u73B0\u4E86 ",(0,a.jsx)(e.code,{children:"Speak"})," \u65B9\u6CD5\u7684\u7C7B\u578B\u53D1\u58F0\u3002\u5728 ",(0,a.jsx)(e.code,{children:"main"})," \u51FD\u6570\u4E2D\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A ",(0,a.jsx)(e.code,{children:"Animal"})," \u5B9E\u4F8B\u5E76\u4F20\u9012\u7ED9 ",(0,a.jsx)(e.code,{children:"MakeItSpeak"}),"\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u63A5\u53E3\u7684\u5D4C\u5957",children:"\u63A5\u53E3\u7684\u5D4C\u5957"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"type Reader interface {\n    Read(p []byte) (n int, err error)\n}\n\ntype Writer interface {\n    Write(p []byte) (n int, err error)\n}\n\n// ReadWriter \u63A5\u53E3\u540C\u65F6\u5D4C\u5165\u4E86 Reader \u548C Writer \u63A5\u53E3\ntype ReadWriter interface {\n    Reader\n    Writer\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u8FD9\u91CC\uFF0C\u6211\u5B9A\u4E49\u4E86\u4E24\u4E2A\u63A5\u53E3 ",(0,a.jsx)(e.code,{children:"Reader"})," \u548C ",(0,a.jsx)(e.code,{children:"Writer"}),"\uFF0C\u7136\u540E\u901A\u8FC7\u63A5\u53E3\u5D4C\u5957\u5B9A\u4E49\u4E86 ",(0,a.jsx)(e.code,{children:"ReadWriter"})," \u63A5\u53E3\uFF0C\u4F7F\u5176\u540C\u65F6\u5305\u542B ",(0,a.jsx)(e.code,{children:"Reader"})," \u548C ",(0,a.jsx)(e.code,{children:"Writer"})," \u7684\u65B9\u6CD5\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u65F6\uFF0C\u5E94\u5904\u7406\u65AD\u8A00\u5931\u8D25\u7684\u60C5\u51B5\uFF0C\u907F\u514D\u7A0B\u5E8F\u5D29\u6E83\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u63A5\u53E3\u5B9A\u4E49\u5E94\u7B80\u6D01\uFF0C\u65B9\u4FBF\u4E0D\u540C\u7C7B\u578B\u5B9E\u73B0\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5728 Go 1.18 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B\u6765\u7B80\u5316\u4EE3\u7801\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u53D8\u91CF\u547D\u540D\u5E94\u6E05\u6670\u6613\u8BFB\uFF0C\u63D0\u5347\u4EE3\u7801\u53EF\u7EF4\u62A4\u6027\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u7C7B\u578B\u9009\u62E9 (",(0,a.jsx)(e.code,{children:"type switch"}),") \u53EF\u4EE5\u4F18\u96C5\u5730\u5904\u7406\u591A\u79CD\u7C7B\u578B\u60C5\u51B5\u3002"]}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},50065:function(n,e,r){r.d(e,{Z:function(){return t},a:function(){return l}});var i=r(67294);let a={},c=i.createContext(a);function l(n){let e=i.useContext(c);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);