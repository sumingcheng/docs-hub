"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["48844"],{10425:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var s=t(39503),d=t(85893),r=t(50065);let c={slug:"linux-\u4F7F\u7528-zstd-\u89E3\u538B\u7F29",title:"Linux \u4F7F\u7528 zstd \u89E3\u538B\u7F29",authors:["sumingcheng"],tags:["os-and-commands"],date:new Date("2024-06-08T00:00:00.000Z")},i="Linux \u4F7F\u7528 zstd \u89E3\u538B\u7F29",o={authorsImageUrls:[void 0]},l=[{value:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5",level:3},{value:"\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879",id:"\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879",level:3}];function u(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"zstd"}),"\uFF08Zstandard\uFF09\u662F\u4E00\u4E2A\u7531 Facebook \u5F00\u53D1\u7684\u9AD8\u6548\u538B\u7F29\u7B97\u6CD5\u548C\u5DE5\u5177\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsxs)(n.strong,{children:["\u5B89\u88C5 ",(0,d.jsx)(n.code,{children:"zstd"})]})," \u5728\u5927\u591A\u6570 Linux \u53D1\u884C\u7248\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u5B89\u88C5 ",(0,d.jsx)(n.code,{children:"zstd"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo apt install zstd      # Debian/Ubuntu\nsudo yum install zstd      # CentOS\nsudo dnf install zstd      # Fedora\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u538B\u7F29\u6587\u4EF6"})," \u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"zstd"})," \u538B\u7F29\u6587\u4EF6\uFF0C\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"zstd [\u6587\u4EF6\u540D]\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u538B\u7F29\u4E00\u4E2A\u540D\u4E3A ",(0,d.jsx)(n.code,{children:"example.txt"})," \u7684\u6587\u4EF6"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"zstd example.txt\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u4F1A\u521B\u5EFA\u4E00\u4E2A\u538B\u7F29\u540E\u7684\u6587\u4EF6 ",(0,d.jsx)(n.code,{children:"example.txt.zst"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u89E3\u538B\u6587\u4EF6"})," \u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"zstd"})," \u89E3\u538B\u6587\u4EF6\uFF0C\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"zstd -d [\u538B\u7F29\u6587\u4EF6\u540D]\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6216\u8005\u4F7F\u7528\u957F\u53C2\u6570 ",(0,d.jsx)(n.code,{children:"--decompress"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"zstd --decompress example.txt.zst\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u8C03\u6574\u538B\u7F29\u7B49\u7EA7"})," ",(0,d.jsx)(n.code,{children:"zstd"})," \u5141\u8BB8\u4F60\u6307\u5B9A\u538B\u7F29\u7B49\u7EA7\uFF081-19\uFF09\uFF0C\u9ED8\u8BA4\u4E3A 3\u3002\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u538B\u7F29\u6BD4\u8D8A\u597D\uFF0C\u4F46\u9700\u8981\u66F4\u591A\u7684\u5904\u7406\u65F6\u95F4"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"zstd -[\u7B49\u7EA7] example.txt\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF0C\u4F7F\u7528\u538B\u7F29\u7B49\u7EA7 5 \u538B\u7F29\u6587\u4EF6"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"zstd -5 example.txt\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879",children:"\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u5185\u5B58\u4F7F\u7528"}),"\uFF0C\u9AD8\u538B\u7F29\u7B49\u7EA7\u53EF\u80FD\u4F1A\u663E\u8457\u589E\u52A0\u5185\u5B58\u4F7F\u7528\u3002\u5728\u8D44\u6E90\u53D7\u9650\u7684\u73AF\u5883\u4E2D\uFF0C\u5E94\u907F\u514D\u4F7F\u7528\u8FC7\u9AD8\u7684\u538B\u7F29\u7B49\u7EA7\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6587\u4EF6\u8986\u76D6"}),"\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",(0,d.jsx)(n.code,{children:"zstd"})," \u5728\u538B\u7F29\u6216\u89E3\u538B\u65F6\u4E0D\u4F1A\u8986\u76D6\u73B0\u6709\u6587\u4EF6\u3002\u5982\u679C\u9700\u8981\u8986\u76D6\uFF0C\u53EF\u4EE5\u6DFB\u52A0 ",(0,d.jsx)(n.code,{children:"-f"}),"\uFF08\u6216 ",(0,d.jsx)(n.code,{children:"--force"}),"\uFF09\u53C2\u6570\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6279\u91CF\u5904\u7406"}),"\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\u4E00\u6B21\u538B\u7F29\u6216\u89E3\u538B\u591A\u4E2A\u6587\u4EF6"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"zstd *.txt           # \u538B\u7F29\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709 .txt \u6587\u4EF6\nzstd -d *.zst        # \u89E3\u538B\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709 .zst \u6587\u4EF6\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(67294);let d={},r=s.createContext(d);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}},39503:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/linux-\u4F7F\u7528-zstd-\u89E3\u538B\u7F29","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u547D\u4EE4/2024-06-08-Linux_\u4F7F\u7528_zstd_\u89E3\u538B\u7F29.md","source":"@site/blog/\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u547D\u4EE4/2024-06-08-Linux_\u4F7F\u7528_zstd_\u89E3\u538B\u7F29.md","title":"Linux \u4F7F\u7528 zstd \u89E3\u538B\u7F29","description":"zstd\uFF08Zstandard\uFF09\u662F\u4E00\u4E2A\u7531 Facebook \u5F00\u53D1\u7684\u9AD8\u6548\u538B\u7F29\u7B97\u6CD5\u548C\u5DE5\u5177\u3002","date":"2024-06-08T00:00:00.000Z","tags":[{"inline":false,"label":"\u64CD\u4F5C\u7CFB\u7EDF\u4E0E\u547D\u4EE4","permalink":"/docs-hub/blog/tags/os-and-commands","description":"\u64CD\u4F5C\u7CFB\u7EDF\u548C\u547D\u4EE4\u884C\u76F8\u5173\u77E5\u8BC6"}],"readingTime":1.2,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"linux-\u4F7F\u7528-zstd-\u89E3\u538B\u7F29","title":"Linux \u4F7F\u7528 zstd \u89E3\u538B\u7F29","authors":["sumingcheng"],"tags":["os-and-commands"],"date":"2024-06-08T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Linux \u4FEE\u6539 root \u7528\u6237\u7684\u5BC6\u7801","permalink":"/docs-hub/blog/linux-\u4FEE\u6539-root-\u7528\u6237\u7684\u5BC6\u7801"},"nextItem":{"title":"Docker \u914D\u7F6E\u4EE3\u7406","permalink":"/docs-hub/blog/docker-\u914D\u7F6E\u4EE3\u7406"}}')}}]);