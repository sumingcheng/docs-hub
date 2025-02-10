"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["68113"],{86781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l}});var i=n(46467),c=n(85893),o=n(50065);let r={slug:"\u5B9E\u73B0nexttick",title:"\u5B9E\u73B0nextTick",authors:["sumingcheng"],tags:["frontend"],date:new Date("2023-02-12T00:00:00.000Z")},s="\u5B9E\u73B0$nextTick",u={authorsImageUrls:[void 0]},l=[{value:"\u4E3A\u4EC0\u4E48\u4F1A\u6709$nextTick",id:"\u4E3A\u4EC0\u4E48\u4F1A\u6709nexttick",level:2},{value:"\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A$nextTick",id:"\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2Anexttick",level:2}];function a(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"\u4E3A\u4EC0\u4E48\u4F1A\u6709nexttick",children:"\u4E3A\u4EC0\u4E48\u4F1A\u6709$nextTick"}),"\n",(0,c.jsxs)(t.p,{children:["\u56E0\u4E3A",(0,c.jsx)(t.code,{children:"Vue"}),"\u662F\u5F02\u6B65\u66F4\u65B0",(0,c.jsx)(t.code,{children:"DOM"}),"\u7684\uFF0C\u6570\u636E\u6539\u53D8\u5C31\u4F1A\u5F00\u542F\u5F02\u6B65\u66F4\u65B0\u961F\u5217\uFF0C\u7B49\u5F85\u961F\u5217\u4E2D\u6240\u6709\u6570\u636E\u53D8\u5316\u5B8C\u6210\u540E\u518D\u7EDF\u4E00\u66F4\u65B0\uFF0C\u8FD9\u6837\u505A\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684",(0,c.jsx)(t.code,{children:"DOM"}),"\u64CD\u4F5C\u3002"]}),"\n",(0,c.jsx)(t.h2,{id:"\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2Anexttick",children:"\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A$nextTick"}),"\n",(0,c.jsxs)(t.p,{children:["Vue \u7684 ",(0,c.jsx)(t.code,{children:"$nextTick"})," \uFF0C\u7528\u4E8E\u5728\u4E0B\u6B21 DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u4E4B\u540E\u6267\u884C\u5EF6\u8FDF\u56DE\u8C03\u3002\u5B83\u7684\u5B9E\u73B0\u4E3B\u8981\u662F\u5229\u7528\u4E86 JavaScript \u5F15\u64CE\u7684\u5FAE\u4EFB\u52A1\u673A\u5236\uFF0C\u901A\u8FC7\u5728\u5F53\u524D\u4EFB\u52A1\u7ED3\u675F\u540E\uFF0C\u628A\u56DE\u8C03\u51FD\u6570\u52A0\u5165\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u5B9E\u73B0\u4E86\u4E0B\u6B21 DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u4E4B\u540E\u518D\u6267\u884C\u56DE\u8C03\u51FD\u6570\u7684\u6548\u679C\u3002"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:"Vue.prototype.$nextTick = function (fn) {\n  // \u5C06\u56DE\u8C03\u51FD\u6570\u52A0\u5165\u5230 Promise \u961F\u5217\n  Promise.resolve().then(fn);\n};\n\n"})}),"\n",(0,c.jsx)(t.p,{children:"\u8BE5\u4EE3\u7801\u7684\u5B9E\u73B0\u539F\u7406\u662F\uFF1A\u5728 JavaScript \u4E2D\uFF0CPromise \u662F\u4E00\u4E2A\u5FAE\u4EFB\u52A1\uFF0C\u5F53\u5F53\u524D\u4EFB\u52A1\u7ED3\u675F\u540E\uFF0C\u5B83\u4F1A\u88AB\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u5E76\u5728\u4E0B\u4E00\u8F6E\u5FAE\u4EFB\u52A1\u4E2D\u6267\u884C\u3002\u56E0\u6B64\uFF0C\u901A\u8FC7\u5728 $nextTick \u51FD\u6570\u4E2D\u8C03\u7528 Promise.resolve().then(fn)\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5728\u4E0B\u4E00\u6B21\u5FAE\u4EFB\u52A1\u4E2D\u6267\u884C fn \u56DE\u8C03\u51FD\u6570\u7684\u6548\u679C\u3002"})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var i=n(67294);let c={},o=i.createContext(c);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(o.Provider,{value:t},e.children)}},46467:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u5B9E\u73B0nexttick","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2023-02-12-\u5B9E\u73B0nextTick.md","source":"@site/blog/\u524D\u7AEF/2023-02-12-\u5B9E\u73B0nextTick.md","title":"\u5B9E\u73B0nextTick","description":"\u4E3A\u4EC0\u4E48\u4F1A\u6709$nextTick","date":"2023-02-12T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.88,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u5B9E\u73B0nexttick","title":"\u5B9E\u73B0nextTick","authors":["sumingcheng"],"tags":["frontend"],"date":"2023-02-12T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u524D\u7AEF\u6027\u80FD\u4F18\u5316","permalink":"/docs-hub/blog/\u524D\u7AEF\u6027\u80FD\u4F18\u5316"},"nextItem":{"title":"HTTPHTTPS\u7684\u533A\u522B","permalink":"/docs-hub/blog/httphttps\u7684\u533A\u522B"}}')}}]);