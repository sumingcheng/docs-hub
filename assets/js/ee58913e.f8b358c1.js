"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["96073"],{11013:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var c=t(11427),s=t(85893),o=t(50065);let i={slug:"reactmemo-\u548C-usememo-\u5E94\u8BE5\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528",title:"Reactmemo \u548C useMemo \u5E94\u8BE5\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528",authors:["sumingcheng"],tags:["frontend"],date:new Date("2023-07-24T00:00:00.000Z")},r="React.memo \u548C useMemo \u5E94\u8BE5\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528",m={authorsImageUrls:[void 0]},l=[];function a(e){let n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useMemo"})," \u662F\u4E00\u4E2A React Hook\uFF0C\u7528\u4E8E\u5728\u51FD\u6570\u7EC4\u4EF6\u5185\u90E8\u8BB0\u5FC6\u5316\u4E00\u4E2A\u503C\u3002\u5F53\u5176\u4F9D\u8D56\u9879\u6539\u53D8\u65F6\uFF0C\u5B83\u4F1A\u91CD\u65B0\u8BA1\u7B97\u8FD9\u4E2A\u503C\uFF1B\u5426\u5219\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u4E0A\u4E00\u6B21\u8BA1\u7B97\u7684\u503C\u3002\u8FD9\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u907F\u514D\u5728\u6BCF\u6B21\u6E32\u67D3\u65F6\u8FDB\u884C\u6602\u8D35\u7684\u8BA1\u7B97\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"React.memo"})," \u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u63A7\u5236\u4E00\u4E2A\u7EC4\u4EF6\u4F55\u65F6\u91CD\u65B0\u6E32\u67D3\u3002\u5F53\u4E00\u4E2A\u7EC4\u4EF6\u88AB ",(0,s.jsx)(n.code,{children:"React.memo"})," \u5305\u88C5\u540E\uFF0C\u53EA\u6709\u5F53\u5B83\u7684 props \u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u5B83\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u5426\u5219\uFF0CReact \u5C06\u590D\u7528\u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u7ED3\u679C\uFF0C\u8FD9\u53EF\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\uFF0C\u63D0\u9AD8\u5E94\u7528\u7684\u6027\u80FD\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u4E24\u4E2A\u529F\u80FD\u90FD\u662F React \u7684\u4F18\u5316\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u4FDD\u6301\u5E94\u7528\u54CD\u5E94\u6027\u7684\u540C\u65F6\u63D0\u9AD8\u6027\u80FD\u3002\u4F46\u662F\u8981\u6CE8\u610F\uFF0C\u4ED6\u4EEC\u5E76\u4E0D\u80FD\u89E3\u51B3\u6240\u6709\u7684\u6027\u80FD\u95EE\u9898\uFF0C\u4E14\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u5F15\u5165\u989D\u5916\u7684\u6027\u80FD\u5F00\u9500\u3002\u56E0\u6B64\uFF0C\u53EA\u6709\u5728\u786E\u5B9A\u9700\u8981\u8FDB\u884C\u4F18\u5316\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u5DE5\u5177\u53EF\u4EE5\u6709\u6548\u5730\u63D0\u9AD8\u6027\u80FD\u65F6\uFF0C\u624D\u5E94\u8BE5\u4F7F\u7528\u4ED6\u4EEC\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4E3E\u4E2A\u4F8B\u5B50"})}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u7136\u53EF\u4EE5\u3002\u8BA9\u6211\u4EEC\u770B\u4E00\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50\uFF0C\u6BD4\u5982\u4E00\u4E2A\u7B80\u5355\u7684\u5217\u8868\u6E32\u67D3\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"function List({ items }) {\n  return (\n    <ul>\n      {items.map(item => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",(0,s.jsx)(n.code,{children:"List"})," \u7EC4\u4EF6\u63A5\u6536\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"items"})," prop\uFF0C\u5E76\u4E3A\u6BCF\u4E2A item \u6E32\u67D3\u4E00\u4E2A\u5217\u8868\u9879\u3002\u8FD9\u4E2A\u7EC4\u4EF6\u975E\u5E38\u7B80\u5355\uFF0C\u4E14\u6027\u80FD\u901A\u5E38\u662F\u8DB3\u591F\u7684\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u800C\uFF0C\u5982\u679C\u6211\u4EEC\u8FC7\u5EA6\u4F18\u5316\uFF0C\u53EF\u80FD\u4F1A\u8FD9\u6837\u505A\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"const ListItem = React.memo(function ListItem({ item }) {\n  return <li>{item.name}</li>;\n});\n\nfunction List({ items }) {\n  return (\n    <ul>\n      {items.map(item => (\n        <ListItem key={item.id} item={item} />\n      ))}\n    </ul>\n  );\n}\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u4F18\u5316\u7684\u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684 ",(0,s.jsx)(n.code,{children:"ListItem"})," \u7EC4\u4EF6\uFF0C\u5E76\u7528 ",(0,s.jsx)(n.code,{children:"React.memo"})," \u5BF9\u5B83\u8FDB\u884C\u4E86\u5305\u88C5\uFF0C\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3\u3002\u7136\u800C\uFF0C\u8FD9\u79CD\u4F18\u5316\u5B9E\u9645\u4E0A\u53EF\u80FD\u6CA1\u6709\u5E26\u6765\u5B9E\u8D28\u6027\u7684\u6027\u80FD\u63D0\u5347\uFF0C\u56E0\u4E3A\u539F\u59CB\u7248\u672C\u7684\u6027\u80FD\u5DF2\u7ECF\u8DB3\u591F\u597D\u3002\u66F4\u7CDF\u7CD5\u7684\u662F\uFF0C\u8FD9\u79CD\u4F18\u5316\u589E\u52A0\u4E86\u4EE3\u7801\u7684\u590D\u6742\u6027\u548C\u96BE\u4EE5\u7406\u89E3\u6027\uFF0C\u8BA9\u4EE3\u7801\u7684\u7EF4\u62A4\u53D8\u5F97\u66F4\u56F0\u96BE\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C",(0,s.jsx)(n.code,{children:"React.memo"})," \u7684\u6D45\u6BD4\u8F83\u53EF\u80FD\u4F1A\u5BFC\u81F4\u95EE\u9898\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5982\u679C ",(0,s.jsx)(n.code,{children:"item"})," \u5BF9\u8C61\u7684\u5C5E\u6027\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u4F46 ",(0,s.jsx)(n.code,{children:"item"})," \u5BF9\u8C61\u672C\u8EAB\u7684\u5F15\u7528\u6CA1\u6709\u6539\u53D8\uFF0C\u90A3\u4E48 ",(0,s.jsx)(n.code,{children:"React.memo"})," \u53EF\u80FD\u4F1A\u9519\u8FC7\u8FD9\u4E2A\u53D8\u5316\uFF0C\u5BFC\u81F4 UI \u4E0D\u6B63\u786E\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:['\u603B\u7684\u6765\u8BF4\uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u9075\u5FAA "\u5148\u8BA9\u5B83\u5DE5\u4F5C\uFF0C\u7136\u540E\u8BA9\u5B83\u66F4\u5FEB" \u7684\u539F\u5219\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5E94\u8BE5\u9996\u5148\u5173\u6CE8\u5E94\u7528\u7684\u529F\u80FD\u548C\u6B63\u786E\u6027\uFF0C\u7136\u540E\u518D\u5173\u6CE8\u6027\u80FD\u3002\u53EA\u6709\u5F53\u6027\u80FD\u771F\u7684\u6210\u4E3A\u95EE\u9898\u65F6\uFF0C\u6211\u4EEC\u624D\u9700\u8981\u8003\u8651\u4F7F\u7528 ',(0,s.jsx)(n.code,{children:"useMemo"})," \u6216 ",(0,s.jsx)(n.code,{children:"React.memo"})," \u8FDB\u884C\u4F18\u5316\u3002"]}),"\n",(0,s.jsx)(n.p,{children:'\u6211\u4E2A\u4EBA\u89C9\u5F97\u8FD9\u662F\u4E0D\u662F\u4E5F\u548C Java \u7684\u82E5\u65E0\u5FC5\u8981\uFF0C\u52FF\u589E\u5B9E\u4F53\u7684\u7406\u5FF5\u5F88\u76F8\u4F3C\uFF0C\u4E0D\u4EC5\u4EC5\u9002\u7528\u4E8E React \u6216\u8005 JavaScript\uFF0C\u4E5F\u9002\u7528\u4E8E Java \u548C\u5176\u4ED6\u8BB8\u591A\u7F16\u7A0B\u8BED\u8A00\u3002\u8FD9\u4E2A\u539F\u5219\u901A\u5E38\u88AB\u79F0\u4E3A "YAGNI"\uFF0C\u5373 "You Aren\'t Gonna Need It"\uFF08\u4F60\u4E0D\u4F1A\u9700\u8981\u5B83\uFF09\u3002\u8FD9\u4E2A\u539F\u5219\u544A\u8BEB\u6211\u4EEC\u907F\u514D\u8FC7\u5EA6\u8BBE\u8BA1\u548C\u8FC7\u5EA6\u4F18\u5316\uFF0C\u9664\u975E\u771F\u7684\u6709\u5FC5\u8981\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u4EE5\u5728\u4F7F\u7528 memo \u7684\u65F6\u5019\u8FD8\u662F\u8981\u591A\u8003\u8651\u662F\u4E0D\u662F\u7B26\u5408\u4EE5\u4E0B\u4E09\u70B9"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4E0D\u5FC5\u8981\u7684\u590D\u6742\u6027"}),"\uFF1A\u5982\u679C\u4F60\u7684\u5E94\u7528\u6216\u7EC4\u4EF6\u5E76\u4E0D\u9047\u5230\u6027\u80FD\u95EE\u9898\uFF0C\u90A3\u4E48\u5F15\u5165 ",(0,s.jsx)(n.code,{children:"useMemo"})," \u6216 ",(0,s.jsx)(n.code,{children:"React.memo"})," \u53EF\u80FD\u4F1A\u589E\u52A0\u4E0D\u5FC5\u8981\u7684\u590D\u6742\u6027\uFF0C\u8BA9\u4EE3\u7801\u66F4\u96BE\u7406\u89E3\u548C\u7EF4\u62A4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u8FC7\u5EA6\u4F18\u5316"}),"\uFF1A",(0,s.jsx)(n.code,{children:"useMemo"})," \u548C ",(0,s.jsx)(n.code,{children:"React.memo"})," \u901A\u8FC7\u8BB0\u5FC6\u503C\u548C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\u6765\u63D0\u9AD8\u6027\u80FD\uFF0C\u4F46\u8FD9\u79CD\u8BB0\u5FC6\u5316\u548C\u907F\u514D\u6E32\u67D3\u672C\u8EAB\u4E5F\u9700\u8981\u4E00\u4E9B\u8BA1\u7B97\u548C\u5185\u5B58\u3002\u5982\u679C\u4F60\u8FC7\u5EA6\u4F7F\u7528\u8FD9\u4E24\u4E2A\u5DE5\u5177\uFF0C\u53EF\u80FD\u4F1A\u5F15\u5165\u989D\u5916\u7684\u6027\u80FD\u5F00\u9500\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6D45\u6BD4\u8F83"}),"\uFF1A",(0,s.jsx)(n.code,{children:"React.memo"})," \u901A\u8FC7\u5BF9 props \u8FDB\u884C\u6D45\u6BD4\u8F83\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u3002\u8FD9\u610F\u5473\u7740\u5982\u679C props \u662F\u590D\u6742\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u53EA\u662F\u5185\u90E8\u7684\u67D0\u4E2A\u5C5E\u6027\u53D1\u751F\u4E86\u53D8\u5316\uFF0C",(0,s.jsx)(n.code,{children:"React.memo"})," \u53EF\u80FD\u65E0\u6CD5\u6B63\u786E\u5730\u5224\u65AD\u662F\u5426\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u3002"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var c=t(67294);let s={},o=c.createContext(s);function i(e){let n=c.useContext(o);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(o.Provider,{value:n},e.children)}},11427:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/reactmemo-\u548C-usememo-\u5E94\u8BE5\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2023-07-24-Reactmemo_\u548C_useMemo_\u5E94\u8BE5\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528.md","source":"@site/blog/\u524D\u7AEF/2023-07-24-Reactmemo_\u548C_useMemo_\u5E94\u8BE5\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528.md","title":"Reactmemo \u548C useMemo \u5E94\u8BE5\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528","description":"- useMemo \u662F\u4E00\u4E2A React Hook\uFF0C\u7528\u4E8E\u5728\u51FD\u6570\u7EC4\u4EF6\u5185\u90E8\u8BB0\u5FC6\u5316\u4E00\u4E2A\u503C\u3002\u5F53\u5176\u4F9D\u8D56\u9879\u6539\u53D8\u65F6\uFF0C\u5B83\u4F1A\u91CD\u65B0\u8BA1\u7B97\u8FD9\u4E2A\u503C\uFF1B\u5426\u5219\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u4E0A\u4E00\u6B21\u8BA1\u7B97\u7684\u503C\u3002\u8FD9\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u907F\u514D\u5728\u6BCF\u6B21\u6E32\u67D3\u65F6\u8FDB\u884C\u6602\u8D35\u7684\u8BA1\u7B97\u3002","date":"2023-07-24T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":3.316666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"reactmemo-\u548C-usememo-\u5E94\u8BE5\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528","title":"Reactmemo \u548C useMemo \u5E94\u8BE5\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528","authors":["sumingcheng"],"tags":["frontend"],"date":"2023-07-24T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"React Vue3 API \u901F\u67E5","permalink":"/docs-hub/blog/react-vue3-api-\u901F\u67E5"},"nextItem":{"title":"watch \u548C watchEffect \u533A\u522B","permalink":"/docs-hub/blog/watch-\u548C-watcheffect-\u533A\u522B"}}')}}]);