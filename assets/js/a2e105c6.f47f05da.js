"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["69231"],{70223:function(t,n,e){e.r(n),e.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return a},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var o=e(56925),s=e(85893),r=e(50065);let i={slug:"httponly-\u7684\u7528\u5904",title:"HttpOnly \u7684\u7528\u5904",authors:["sumingcheng"],tags:["network-protocol"],date:new Date("2024-07-15T00:00:00.000Z")},c="HttpOnly \u7684\u7528\u5904",l={authorsImageUrls:[void 0]},u=[{value:"\u80CC\u666F\u548C\u8BE6\u7EC6\u8BF4\u660E",id:"\u80CC\u666F\u548C\u8BE6\u7EC6\u8BF4\u660E",level:2},{value:"\u8BBE\u7F6E\u540E\u7684\u597D\u5904",id:"\u8BBE\u7F6E\u540E\u7684\u597D\u5904",level:2}];function p(t){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"HttpOnly \u662F\u4E00\u4E2A\u8BBE\u7F6E\u5728 cookies \u4E0A\u7684\u5C5E\u6027\uFF0C\u7528\u4E8E\u963B\u6B62\u5BA2\u6237\u7AEF JavaScript \u8BBF\u95EE\u8FD9\u4E9B cookies\uFF0C\u4EE5\u63D0\u9AD8\u7F51\u7AD9\u5B89\u5168\u6027\uFF0C\u7279\u522B\u662F\u9632\u6B62\u8DE8\u7AD9\u811A\u672C\uFF08XSS\uFF09\u653B\u51FB"}),"\n",(0,s.jsx)(n.h2,{id:"\u80CC\u666F\u548C\u8BE6\u7EC6\u8BF4\u660E",children:"\u80CC\u666F\u548C\u8BE6\u7EC6\u8BF4\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u80CC\u666F"})," HttpOnly \u6700\u521D\u7531 Microsoft \u5F15\u5165\uFF0C\u5E76\u5728 2002 \u5E74\u9996\u6B21\u51FA\u73B0\u5728 Internet Explorer \u4E2D\uFF0C\u76EE\u7684\u662F\u589E\u5F3A Web \u5E94\u7528\u7684\u5B89\u5168\u6027"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u539F\u56E0"})," \u51FA\u73B0\u662F\u4E3A\u4E86\u51CF\u5C11 XSS \u653B\u51FB\u7684\u98CE\u9669\uFF0C\u8FD9\u7C7B\u653B\u51FB\u53EF\u80FD\u4F1A\u52AB\u6301\u7528\u6237\u4F1A\u8BDD\u6216\u7A83\u53D6\u654F\u611F\u4FE1\u606F\uFF0C\u5982\u8BA4\u8BC1 tokens"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u529F\u80FD"})," HttpOnly \u5C5E\u6027\u7528\u4E8E\u9650\u5236 cookies \u4EC5\u53EF\u901A\u8FC7 HTTP(S) \u8BF7\u6C42\u8BBF\u95EE\uFF0C\u4F7F\u5F97\u5BA2\u6237\u7AEF\u811A\u672C\uFF08\u5982 JavaScript\uFF09\u65E0\u6CD5\u8BFB\u53D6\u6216\u4FEE\u6539\u8FD9\u4E9B cookies"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8BBE\u7F6E\u65B9\u6CD5"})," \u5728\u8BBE\u7F6E cookie \u65F6\uFF0C\u5C06 ",(0,s.jsx)(n.code,{children:"HttpOnly"})," \u6807\u5FD7\u52A0\u5165\u54CD\u5E94\u5934\u4E2D \u4F8B\u5982\u5728 Go \u8BED\u8A00\u7684 HTTP \u670D\u52A1\u5668\u4EE3\u7801\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u8BBE\u7F6E\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'    router.GET("/set-cookie", func(c *gin.Context) {\n        // \u8BBE\u7F6E\u4E00\u4E2A HttpOnly \u7684 Cookie\n        http.SetCookie(c.Writer, &http.Cookie{\n            Name:     "session_token",\n            Value:    "some_secure_token",\n            Expires:  time.Now().Add(24 * time.Hour), // \u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\n            HttpOnly: true,                          // \u786E\u4FDD HttpOnly \u6807\u5FD7\u88AB\u8BBE\u7F6E\n        })\n\u200B\n        c.String(http.StatusOK, "Cookie set successfully")\n    })\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u8BBE\u7F6E\u540E\u7684\u597D\u5904",children:"\u8BBE\u7F6E\u540E\u7684\u597D\u5904"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5B89\u5168\u6027\u589E\u5F3A"})," \u8BBE\u7F6E HttpOnly \u540E\uFF0C\u5373\u4F7F\u7F51\u7AD9\u51FA\u73B0 XSS \u6F0F\u6D1E\uFF0C\u4E5F\u96BE\u4EE5\u901A\u8FC7",(0,s.jsx)(n.strong,{children:"\u5BA2\u6237\u7AEF"}),"\u811A\u672C\u76F4\u63A5\u83B7\u53D6\u6807\u8BB0\u4E3A HttpOnly \u7684 cookies\uFF0C\u6709\u6548\u964D\u4F4E\u4FE1\u606F\u6CC4\u9732\u98CE\u9669"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6570\u636E\u4FDD\u62A4"})," \u4FDD\u62A4\u7528\u6237\u6570\u636E\u4E0D\u88AB\u6076\u610F\u811A\u672C\u7A83\u53D6\uFF0C\u5C24\u5176\u662F\u5728\u6D89\u53CA\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u7528\u6237\u4F1A\u8BDD\u7BA1\u7406\u65F6"]})]})}function a(t={}){let{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},50065:function(t,n,e){e.d(n,{Z:function(){return c},a:function(){return i}});var o=e(67294);let s={},r=o.createContext(s);function i(t){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),o.createElement(r.Provider,{value:n},t.children)}},56925:function(t){t.exports=JSON.parse('{"permalink":"/docs-hub/blog/httponly-\u7684\u7528\u5904","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u7F51\u7EDC\u4E0E\u534F\u8BAE/2024-07-15-HttpOnly_\u7684\u7528\u5904.md","source":"@site/blog/\u7F51\u7EDC\u4E0E\u534F\u8BAE/2024-07-15-HttpOnly_\u7684\u7528\u5904.md","title":"HttpOnly \u7684\u7528\u5904","description":"HttpOnly \u662F\u4E00\u4E2A\u8BBE\u7F6E\u5728 cookies \u4E0A\u7684\u5C5E\u6027\uFF0C\u7528\u4E8E\u963B\u6B62\u5BA2\u6237\u7AEF JavaScript \u8BBF\u95EE\u8FD9\u4E9B cookies\uFF0C\u4EE5\u63D0\u9AD8\u7F51\u7AD9\u5B89\u5168\u6027\uFF0C\u7279\u522B\u662F\u9632\u6B62\u8DE8\u7AD9\u811A\u672C\uFF08XSS\uFF09\u653B\u51FB","date":"2024-07-15T00:00:00.000Z","tags":[{"inline":false,"label":"\u7F51\u7EDC\u4E0E\u534F\u8BAE","permalink":"/docs-hub/blog/tags/network-protocol","description":"\u7F51\u7EDC\u6280\u672F\u548C\u534F\u8BAE\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.14,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"httponly-\u7684\u7528\u5904","title":"HttpOnly \u7684\u7528\u5904","authors":["sumingcheng"],"tags":["network-protocol"],"date":"2024-07-15T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Go Gin \u5E38\u7528\u7684\u9A8C\u8BC1\u89C4\u5219","permalink":"/docs-hub/blog/go-gin-\u5E38\u7528\u7684\u9A8C\u8BC1\u89C4\u5219"},"nextItem":{"title":"go get \u547D\u4EE4\u8BE6\u89E3","permalink":"/docs-hub/blog/go-get-\u547D\u4EE4\u8BE6\u89E3"}}')}}]);