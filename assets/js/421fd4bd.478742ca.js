"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["77120"],{15322:function(n,e,t){t.r(e),t.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return a},frontMatter:function(){return c},metadata:function(){return r},toc:function(){return s}});var r=t(43575),i=t(85893),o=t(50065);let c={slug:"go-\u8BED\u8A00\u4E2D\u7684\u9501\u7C7B\u578B\u4E0E\u5E94\u7528\u573A\u666F\u8BE6\u89E3",title:"Go \u8BED\u8A00\u4E2D\u7684\u9501\u7C7B\u578B\u4E0E\u5E94\u7528\u573A\u666F\u8BE6\u89E3",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-05-15T00:00:00.000Z")},u="Go \u8BED\u8A00\u4E2D\u7684\u9501\u7C7B\u578B\u4E0E\u5E94\u7528\u573A\u666F\u8BE6\u89E3",d={authorsImageUrls:[void 0]},s=[{value:"\u5E38\u7528\u7684\u9501\u7684\u7C7B\u578B",id:"\u5E38\u7528\u7684\u9501\u7684\u7C7B\u578B",level:3},{value:"RWMutex vs. Mutex",id:"rwmutex-vs-mutex",level:3},{value:"Mutex\uFF08\u4E92\u65A5\u9501\uFF09",id:"mutex\u4E92\u65A5\u9501",level:3},{value:"RWMutex\uFF08\u8BFB\u5199\u9501\uFF09",id:"rwmutex\u8BFB\u5199\u9501",level:3},{value:"\u4EE3\u7801\u793A\u4F8B",id:"\u4EE3\u7801\u793A\u4F8B",level:2},{value:"Mutex\uFF08\u4E92\u65A5\u9501\uFF09",id:"mutex\u4E92\u65A5\u9501-1",level:3},{value:"RWMutex\uFF08\u8BFB\u5199\u9501\uFF09",id:"rwmutex\u8BFB\u5199\u9501-1",level:3},{value:"Once\uFF08\u4E00\u6B21\u6027\u9501\uFF09",id:"once\u4E00\u6B21\u6027\u9501",level:3},{value:"Cond\uFF08\u6761\u4EF6\u53D8\u91CF\uFF09",id:"cond\u6761\u4EF6\u53D8\u91CF",level:3}];function l(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"\u5E38\u7528\u7684\u9501\u7684\u7C7B\u578B",children:"\u5E38\u7528\u7684\u9501\u7684\u7C7B\u578B"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u9501\u7C7B\u578B"}),(0,i.jsx)(e.th,{children:"\u63CF\u8FF0"}),(0,i.jsx)(e.th,{children:"\u7528\u9014"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Mutex"}),(0,i.jsx)(e.td,{children:"\u4E92\u65A5\u9501\uFF0C\u4E00\u6B21\u53EA\u5141\u8BB8\u4E00\u4E2A goroutine \u8BBF\u95EE\u67D0\u4E2A\u8D44\u6E90\u3002"}),(0,i.jsx)(e.td,{children:"\u7528\u4E8E\u4FDD\u62A4\u5171\u4EAB\u8D44\u6E90\uFF0C\u907F\u514D\u5E76\u53D1\u5199\u5165\u65F6\u51FA\u73B0\u6570\u636E\u7ADE\u4E89\u3002"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"RWMutex"}),(0,i.jsx)(e.td,{children:"\u8BFB\u5199\u9501\uFF0C\u5141\u8BB8\u591A\u4E2A\u8BFB\u64CD\u4F5C\u540C\u65F6\u8FDB\u884C\uFF0C\u4F46\u5199\u64CD\u4F5C\u662F\u4E92\u65A5\u7684\u3002"}),(0,i.jsx)(e.td,{children:"\u9002\u7528\u4E8E\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u5728\u9891\u7E41\u8BFB\u53D6\u65F6\u7684\u6027\u80FD\u3002"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Once"}),(0,i.jsx)(e.td,{children:"\u4E00\u6B21\u6027\u9501\uFF0C\u786E\u4FDD\u67D0\u4E2A\u64CD\u4F5C\u5728\u5168\u5C40\u8303\u56F4\u5185\u53EA\u88AB\u6267\u884C\u4E00\u6B21\u3002"}),(0,i.jsx)(e.td,{children:"\u4E3B\u8981\u7528\u4E8E\u8D44\u6E90\u7684\u521D\u59CB\u5316\uFF0C\u5982\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0\u4E2D\u4FDD\u8BC1\u53EA\u521D\u59CB\u5316\u4E00\u6B21\u3002"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Cond"}),(0,i.jsx)(e.td,{children:"\u6761\u4EF6\u53D8\u91CF\uFF0C\u7528\u4E8E\u7B49\u5F85\u6216\u5BA3\u5E03\u4E8B\u4EF6\u7684\u53D1\u751F\u3002"}),(0,i.jsx)(e.td,{children:"\u5F53 goroutine \u9700\u8981\u7B49\u5F85\u67D0\u4E2A\u6761\u4EF6\u6EE1\u8DB3\u65F6\u4F7F\u7528\uFF0C\u5E38\u4E0E Mutex \u6216 RWMutex \u914D\u5408\u4F7F\u7528\u3002"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"rwmutex-vs-mutex",children:"RWMutex vs. Mutex"}),"\n",(0,i.jsx)(e.h3,{id:"mutex\u4E92\u65A5\u9501",children:"Mutex\uFF08\u4E92\u65A5\u9501\uFF09"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u529F\u80FD"}),"\uFF1A\u63D0\u4F9B\u57FA\u672C\u7684\u9501\u5B9A\u529F\u80FD\uFF0C\u786E\u4FDD\u540C\u4E00\u65F6\u523B\u53EA\u6709\u4E00\u4E2A goroutine \u53EF\u4EE5\u8BBF\u95EE\u8D44\u6E90\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9002\u7528\u573A\u666F"}),"\uFF1A\u9002\u7528\u4E8E\u5BF9\u6570\u636E\u8FDB\u884C\u9891\u7E41\u5199\u64CD\u4F5C\u7684\u573A\u666F\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"rwmutex\u8BFB\u5199\u9501",children:"RWMutex\uFF08\u8BFB\u5199\u9501\uFF09"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4F18\u52BF"}),"\uFF1A\u5141\u8BB8\u591A\u4E2A\u8BFB\u53D6\u64CD\u4F5C\u540C\u65F6\u8FDB\u884C\uFF0C\u800C\u5199\u64CD\u4F5C\u5219\u9700\u72EC\u5360\u8D44\u6E90\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6027\u80FD\u4F18\u5316"}),"\uFF1A\u5728\u8BFB\u591A\u5199\u5C11\u7684\u5E94\u7528\u573A\u666F\u4E2D\uFF0CRWMutex \u6BD4 Mutex \u66F4\u9AD8\u6548\uFF0C\u56E0\u4E3A\u5B83\u51CF\u5C11\u4E86\u8BFB\u64CD\u4F5C\u7684\u7B49\u5F85\u65F6\u95F4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4EE3\u7801\u793A\u4F8B",children:"\u4EE3\u7801\u793A\u4F8B"}),"\n",(0,i.jsx)(e.h3,{id:"mutex\u4E92\u65A5\u9501-1",children:"Mutex\uFF08\u4E92\u65A5\u9501\uFF09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\u200B\nimport (\n    "fmt"\n    "sync"\n)\n\u200B\nvar mutex sync.Mutex\nvar balance int\n\u200B\nfunc Deposit(amount int) {\n    defer mutex.Unlock()\n    mutex.Lock()\n    balance += amount\n}\n\u200B\nfunc Balance() int {\n    defer mutex.Unlock()\n    mutex.Lock()\n    return balance\n}\n\u200B\nfunc main() {\n    Deposit(100)\n    fmt.Println("Current Balance:", Balance())\n}\n\u200B\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"rwmutex\u8BFB\u5199\u9501-1",children:"RWMutex\uFF08\u8BFB\u5199\u9501\uFF09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\u200B\nimport (\n    "fmt"\n    "sync"\n)\n\u200B\nvar rwMutex sync.RWMutex\nvar data2 int\nvar wg sync.WaitGroup\n\u200B\nfunc ReadData(id int) {\n    defer rwMutex.RUnlock()\n    rwMutex.RLock()\n    fmt.Printf("Goroutine %d read data: %d\\n", id, data2)\n\u200B\n    wg.Done()\n}\n\u200B\nfunc WriteData(id, d int) {\n    defer rwMutex.Unlock()\n    rwMutex.Lock()\n    data2 = d\n    fmt.Printf("Goroutine %d write data: %d\\n", id, d)\n    wg.Done()\n}\n\u200B\nfunc main() {\n    // \u542F\u52A8\u591A\u4E2A\u8BFB\u5199goroutines\n    numGoroutines := 10\n    wg.Add(numGoroutines * 2) // \u56E0\u4E3A\u6709numGoroutines\u4E2A\u8BFBgoroutine\u548CnumGoroutines\u4E2A\u5199goroutine\n\u200B\n    for i := 0; i < numGoroutines; i++ {\n        go WriteData(i, i*10) // \u6BCF\u4E2Agoroutine\u5199\u5165\u4E0D\u540C\u7684\u6570\u636E\n        go ReadData(i)        // \u540C\u65F6\u8FDB\u884C\u8BFB\u64CD\u4F5C\n    }\n\u200B\n    wg.Wait() // \u7B49\u5F85\u6240\u6709goroutine\u5B8C\u6210\n    fmt.Println("Final Data:", data2)\n}\n\u200B\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"once\u4E00\u6B21\u6027\u9501",children:"Once\uFF08\u4E00\u6B21\u6027\u9501\uFF09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\u200B\nimport (\n    "fmt"\n    "sync"\n)\n\u200B\nvar once sync.Once\nvar value int\n\u200B\nfunc Setup() {\n    value = 42\n    fmt.Println("Value set")\n}\n\u200B\nfunc DoSetup() {\n    once.Do(Setup)\n}\n\u200B\nfunc main() {\n    go DoSetup()\n    go DoSetup()\n    go DoSetup()\n\u200B\n    // WaitGroup \u7B49\u5F85 goroutines \u5B8C\u6210\n    var wg sync.WaitGroup\n    wg.Add(3)\n    go func() {\n        defer wg.Done()\n        DoSetup()\n    }()\n    go func() {\n        defer wg.Done()\n        DoSetup()\n    }()\n    go func() {\n        defer wg.Done()\n        DoSetup()\n    }()\n    wg.Wait()\n    fmt.Println("value:", value)\n}\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"cond\u6761\u4EF6\u53D8\u91CF",children:"Cond\uFF08\u6761\u4EF6\u53D8\u91CF\uFF09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\u200B\nimport (\n    "sync"\n    "time"\n)\n\u200B\nvar cond = sync.NewCond(&sync.Mutex{})\nvar ready bool\nvar wg4 sync.WaitGroup\n\u200B\n// process \u5904\u7406\u7279\u5B9A\u7684\u8FDB\u7A0B\uFF0C\u7B49\u5F85\u6761\u4EF6\u53D8\u91CF\u901A\u77E5\nfunc process(i int) {\n    defer wg4.Done()\n    defer cond.L.Unlock()\n    cond.L.Lock()\n    for !ready {\n        cond.Wait()\n    }\n    println("\u8FDB\u7A0B", i, "\u5DF2\u51C6\u5907\u5C31\u7EEA")\n}\n\u200B\nfunc main() {\n    for i := 0; i < 5; i++ {\n        wg4.Add(1)\n        go process(i)\n    }\n    println("\u6240\u6709\u534F\u7A0B\u5DF2\u521B\u5EFA")\n\u200B\n    time.Sleep(2 * time.Second) // \u786E\u4FDD\u6240\u6709\u5B50\u534F\u7A0B\u90FD\u8FDB\u5165\u7B49\u5F85\u72B6\u6001\n\u200B\n    cond.L.Lock()\n    ready = true\n    cond.Broadcast()\n    cond.L.Unlock()\n\u200B\n    wg4.Wait() // \u7B49\u5F85\u6240\u6709\u5B50\u534F\u7A0B\u5B8C\u6210\n}\n\u200B\n\n'})})]})}function a(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return u},a:function(){return c}});var r=t(67294);let i={},o=r.createContext(i);function c(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(o.Provider,{value:e},n.children)}},43575:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/go-\u8BED\u8A00\u4E2D\u7684\u9501\u7C7B\u578B\u4E0E\u5E94\u7528\u573A\u666F\u8BE6\u89E3","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-05-15-Go_\u8BED\u8A00\u4E2D\u7684\u9501\u7C7B\u578B\u4E0E\u5E94\u7528\u573A\u666F\u8BE6\u89E3.md","source":"@site/blog/\u540E\u7AEF/2024-05-15-Go_\u8BED\u8A00\u4E2D\u7684\u9501\u7C7B\u578B\u4E0E\u5E94\u7528\u573A\u666F\u8BE6\u89E3.md","title":"Go \u8BED\u8A00\u4E2D\u7684\u9501\u7C7B\u578B\u4E0E\u5E94\u7528\u573A\u666F\u8BE6\u89E3","description":"\u5E38\u7528\u7684\u9501\u7684\u7C7B\u578B","date":"2024-05-15T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":2.4366666666666665,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go-\u8BED\u8A00\u4E2D\u7684\u9501\u7C7B\u578B\u4E0E\u5E94\u7528\u573A\u666F\u8BE6\u89E3","title":"Go \u8BED\u8A00\u4E2D\u7684\u9501\u7C7B\u578B\u4E0E\u5E94\u7528\u573A\u666F\u8BE6\u89E3","authors":["sumingcheng"],"tags":["backend"],"date":"2024-05-15T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"TCP \u56DB\u6B21\u6325\u624B\u8FC7\u7A0B","permalink":"/docs-hub/blog/tcp-\u56DB\u6B21\u6325\u624B\u8FC7\u7A0B"},"nextItem":{"title":"Go \u76D0\u503C\u52A0\u5BC6\u548C\u5BC6\u7801\u751F\u6210","permalink":"/docs-hub/blog/go-\u76D0\u503C\u52A0\u5BC6\u548C\u5BC6\u7801\u751F\u6210"}}')}}]);