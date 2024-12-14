"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["82908"],{87984:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return a}});var o=n(43564),r=n(85893),s=n(50065);let i={slug:"js\u6570\u7EC4\u65B9\u6CD5\u7EC3\u4E60-\u6839\u636E\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u4F4D\u5927\u5C0F\u6392\u5E8F",title:"JS\u6570\u7EC4\u65B9\u6CD5\u7EC3\u4E60-\u6839\u636E\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u4F4D\u5927\u5C0F\u6392\u5E8F",authors:["sumingcheng"],tags:["frontend"],date:new Date("2023-02-08T00:00:00.000Z")},c="JS\u6570\u7EC4\u65B9\u6CD5\u7EC3\u4E60-\u6839\u636E\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u4F4D\u5927\u5C0F\u6392\u5E8F",u={authorsImageUrls:[void 0]},a=[];function l(e){let t={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"<script>\n  let Str = 'Nothing is to be got without pains but poverty';\n  let changeString = 'poverty9 Nothing1 without6 pains7 but8 is2 to3 be4 got5';\n  //   \u6839\u636E\u5355\u8BCD\u672B\u5C3E\u7684\u4E0B\u6807\uFF0C\u8FD8\u539F\u53E5\u5B50\n\n  // \u65B9\u6CD51 sort\n  let processString1 = changeString.split(' ').sort((a, b) => {\n    return a.slice(- 1) - b.slice(- 1);\n  }).join(' ');\n  console.log(processString1);\n  //   \u65B9\u6CD52 map\n  let processString2 = changeString.split(' ').map((e) => {\n    return {\n      index: e.slice(- 1),\n      value: e.slice(0, e.length - 1)\n    };\n  }).sort((a, b) => {\n    return a.index - b.index;\n  }).map((e) => {\n    return e.value;\n  }).join(' ');\n  console.log(processString2);\n<\/script>\n"})})}function g(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var o=n(67294);let r={},s=o.createContext(r);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}},43564:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/js\u6570\u7EC4\u65B9\u6CD5\u7EC3\u4E60-\u6839\u636E\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u4F4D\u5927\u5C0F\u6392\u5E8F","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2023-02-08-JS\u6570\u7EC4\u65B9\u6CD5\u7EC3\u4E60-\u6839\u636E\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u4F4D\u5927\u5C0F\u6392\u5E8F.md","source":"@site/blog/\u524D\u7AEF/2023-02-08-JS\u6570\u7EC4\u65B9\u6CD5\u7EC3\u4E60-\u6839\u636E\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u4F4D\u5927\u5C0F\u6392\u5E8F.md","title":"JS\u6570\u7EC4\u65B9\u6CD5\u7EC3\u4E60-\u6839\u636E\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u4F4D\u5927\u5C0F\u6392\u5E8F","description":"","date":"2023-02-08T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.34,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"js\u6570\u7EC4\u65B9\u6CD5\u7EC3\u4E60-\u6839\u636E\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u4F4D\u5927\u5C0F\u6392\u5E8F","title":"JS\u6570\u7EC4\u65B9\u6CD5\u7EC3\u4E60-\u6839\u636E\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u4F4D\u5927\u5C0F\u6392\u5E8F","authors":["sumingcheng"],"tags":["frontend"],"date":"2023-02-08T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"JS Web Workers","permalink":"/docs-hub/blog/js-web-workers"},"nextItem":{"title":"v-for \u4E3A\u4EC0\u4E48\u4E0D\u63A8\u8350\u7528 index \u505A key","permalink":"/docs-hub/blog/v-for-\u4E3A\u4EC0\u4E48\u4E0D\u63A8\u8350\u7528-index-\u505A-key"}}')}}]);