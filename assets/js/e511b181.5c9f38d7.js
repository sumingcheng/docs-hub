"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["83401"],{34455:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return a}});var r=t(4243),o=t(85893),s=t(50065);let i={slug:"go-strconv-\u5305\u7684\u4E3B\u8981\u529F\u80FD",title:"Go strconv \u5305\u7684\u4E3B\u8981\u529F\u80FD",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-07-21T00:00:00.000Z")},c="Go strconv \u5305\u7684\u4E3B\u8981\u529F\u80FD",l={authorsImageUrls:[void 0]},a=[{value:"\u6574\u6570\u8F6C\u6362",id:"\u6574\u6570\u8F6C\u6362",level:2},{value:"\u6D6E\u70B9\u6570\u8F6C\u6362",id:"\u6D6E\u70B9\u6570\u8F6C\u6362",level:2},{value:"\u5E03\u5C14\u503C\u8F6C\u6362",id:"\u5E03\u5C14\u503C\u8F6C\u6362",level:2},{value:"\u6574\u6570\u8F6C\u6362\u793A\u4F8B",id:"\u6574\u6570\u8F6C\u6362\u793A\u4F8B",level:2},{value:"\u6D6E\u70B9\u6570\u8F6C\u6362\u793A\u4F8B",id:"\u6D6E\u70B9\u6570\u8F6C\u6362\u793A\u4F8B",level:2},{value:"\u5E03\u5C14\u503C\u8F6C\u6362\u793A\u4F8B",id:"\u5E03\u5C14\u503C\u8F6C\u6362\u793A\u4F8B",level:2}];function u(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u6574\u6570\u8F6C\u6362",children:"\u6574\u6570\u8F6C\u6362"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Atoi"}),"\uFF08ASCII to Integer\uFF09\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6574\u6570"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Itoa"}),"\uFF08Integer to ASCII\uFF09\u5C06\u6574\u6570\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"ParseInt"}),"\u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u4E3A\u6307\u5B9A\u57FA\u6570\uFF08\u8FDB\u5236\uFF09\u7684\u6574\u6570"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"FormatInt"}),"\u5C06\u6574\u6570\u683C\u5F0F\u5316\u4E3A\u5B57\u7B26\u4E32\uFF0C\u53EF\u6307\u5B9A\u57FA\u6570"]}),"\n",(0,o.jsx)(e.h2,{id:"\u6D6E\u70B9\u6570\u8F6C\u6362",children:"\u6D6E\u70B9\u6570\u8F6C\u6362"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"ParseFloat"}),"\u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u4E3A\u6D6E\u70B9\u6570\uFF0C\u53EF\u4EE5\u6307\u5B9A\u7CBE\u5EA6\uFF0832 \u4F4D\u6216 64 \u4F4D\uFF09"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"FormatFloat"}),"\u5C06\u6D6E\u70B9\u6570\u683C\u5F0F\u5316\u4E3A\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u6307\u5B9A\u683C\u5F0F\u548C\u7CBE\u5EA6"]}),"\n",(0,o.jsx)(e.h2,{id:"\u5E03\u5C14\u503C\u8F6C\u6362",children:"\u5E03\u5C14\u503C\u8F6C\u6362"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"ParseBool"}),"\u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u4E3A\u5E03\u5C14\u503C"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"FormatBool"}),"\u5C06\u5E03\u5C14\u503C\u683C\u5F0F\u5316\u4E3A\u5B57\u7B26\u4E32"]}),"\n",(0,o.jsx)(e.h2,{id:"\u6574\u6570\u8F6C\u6362\u793A\u4F8B",children:"\u6574\u6570\u8F6C\u6362\u793A\u4F8B"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'package main\n\u200B\nimport (\n    "fmt"\n    "strconv"\n)\n\u200B\nfunc main() {\n    // \u5B57\u7B26\u4E32\u8F6C\u6574\u6570\n    s := "1024"\n    num, err := strconv.Atoi(s)\n    if err != nil {\n        fmt.Println("\u8F6C\u6362\u9519\u8BEF:", err)\n    } else {\n        fmt.Println("\u8F6C\u6362\u7ED3\u679C:", num)\n    }\n\u200B\n    // \u6574\u6570\u8F6C\u5B57\u7B26\u4E32\n    numStr := strconv.Itoa(num)\n    fmt.Println("\u6574\u6570\u8F6C\u5B57\u7B26\u4E32:", numStr)\n\u200B\n    // \u4F7F\u7528 ParseInt \u89E3\u6790\u5341\u516D\u8FDB\u5236\u5B57\u7B26\u4E32\n    hexNum, _ := strconv.ParseInt("1f4", 16, 32)\n    fmt.Println("\u5341\u516D\u8FDB\u5236 \'1f4\' \u8F6C\u4E3A\u5341\u8FDB\u5236:", hexNum)\n\u200B\n    // \u4F7F\u7528 FormatInt \u5C06\u6570\u5B57\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u8868\u793A\u7684\u5B57\u7B26\u4E32\n    binStr := strconv.FormatInt(int64(hexNum), 2)\n    fmt.Println("\u6570\u5B57\u8F6C\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32:", binStr)\n}\n\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u6D6E\u70B9\u6570\u8F6C\u6362\u793A\u4F8B",children:"\u6D6E\u70B9\u6570\u8F6C\u6362\u793A\u4F8B"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'package main\n\u200B\nimport (\n    "fmt"\n    "strconv"\n)\n\u200B\nfunc main() {\n    // \u5B57\u7B26\u4E32\u8F6C\u6D6E\u70B9\u6570\n    floatStr := "3.14159"\n    f, err := strconv.ParseFloat(floatStr, 64)\n    if err != nil {\n        fmt.Println("\u8F6C\u6362\u9519\u8BEF:", err)\n    } else {\n        fmt.Println("\u8F6C\u6362\u7ED3\u679C:", f)\n    }\n\u200B\n    // \u6D6E\u70B9\u6570\u8F6C\u5B57\u7B26\u4E32\n    formattedFloat := strconv.FormatFloat(f, \'f\', 3, 64)\n    fmt.Println("\u6D6E\u70B9\u6570\u683C\u5F0F\u5316:", formattedFloat)\n}\n\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u5E03\u5C14\u503C\u8F6C\u6362\u793A\u4F8B",children:"\u5E03\u5C14\u503C\u8F6C\u6362\u793A\u4F8B"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'package main\n\u200B\nimport (\n    "fmt"\n    "strconv"\n)\n\u200B\nfunc main() {\n    // \u5B57\u7B26\u4E32\u8F6C\u5E03\u5C14\u503C\n    boolStr := "true"\n    b, err := strconv.ParseBool(boolStr)\n    if err != nil {\n        fmt.Println("\u8F6C\u6362\u9519\u8BEF:", err)\n    } else {\n        fmt.Println("\u8F6C\u6362\u7ED3\u679C:", b)\n    }\n\u200B\n    // \u5E03\u5C14\u503C\u8F6C\u5B57\u7B26\u4E32\n    bStr := strconv.FormatBool(b)\n    fmt.Println("\u5E03\u5C14\u503C\u8F6C\u5B57\u7B26\u4E32:", bStr)\n}\n\n'})})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var r=t(67294);let o={},s=r.createContext(o);function i(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(s.Provider,{value:e},n.children)}},4243:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-strconv-\u5305\u7684\u4E3B\u8981\u529F\u80FD","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-07-21-Go_strconv_\u5305\u7684\u4E3B\u8981\u529F\u80FD.md","source":"@site/blog/\u540E\u7AEF/2024-07-21-Go_strconv_\u5305\u7684\u4E3B\u8981\u529F\u80FD.md","title":"Go strconv \u5305\u7684\u4E3B\u8981\u529F\u80FD","description":"\u6574\u6570\u8F6C\u6362","date":"2024-07-21T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.4666666666666666,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-strconv-\u5305\u7684\u4E3B\u8981\u529F\u80FD","title":"Go strconv \u5305\u7684\u4E3B\u8981\u529F\u80FD","authors":["sumingcheng"],"tags":["backend"],"date":"2024-07-21T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u53D1\u5E03 Docker \u955C\u50CF\u5230 GitHub Packages","permalink":"/docs-hub/blog/\u53D1\u5E03-docker-\u955C\u50CF\u5230-github-packages"},"nextItem":{"title":"Nginx \u4EE3\u7406 EventsStream \u63A5\u53E3\u914D\u7F6E\u4F18\u5316","permalink":"/docs-hub/blog/nginx-\u4EE3\u7406-eventsstream-\u63A5\u53E3\u914D\u7F6E\u4F18\u5316"}}')}}]);