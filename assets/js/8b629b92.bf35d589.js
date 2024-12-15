"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["4602"],{11450:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return d}});var r=t(80118),i=t(85893),l=t(50065);let o={slug:"docker-\u955C\u50CF\u4F18\u5316\u7B56\u7565",title:"Docker \u955C\u50CF\u4F18\u5316\u7B56\u7565",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-06-18T00:00:00.000Z")},c="Docker \u955C\u50CF\u4F18\u5316\u7B56\u7565",s={authorsImageUrls:[void 0]},d=[{value:"1. \u9009\u62E9\u5C0F\u578B\u57FA\u7840\u955C\u50CF",id:"1-\u9009\u62E9\u5C0F\u578B\u57FA\u7840\u955C\u50CF",level:3},{value:"2. \u6700\u5C0F\u5316\u5C42\u7684\u6570\u91CF",id:"2-\u6700\u5C0F\u5316\u5C42\u7684\u6570\u91CF",level:3},{value:"3. \u6E05\u7406\u4E0D\u5FC5\u8981\u7684\u6587\u4EF6",id:"3-\u6E05\u7406\u4E0D\u5FC5\u8981\u7684\u6587\u4EF6",level:3},{value:"4. \u4F7F\u7528\u591A\u9636\u6BB5\u6784\u5EFA",id:"4-\u4F7F\u7528\u591A\u9636\u6BB5\u6784\u5EFA",level:3},{value:"5. \u4F7F\u7528.dockerignore \u6587\u4EF6",id:"5-\u4F7F\u7528dockerignore-\u6587\u4EF6",level:3},{value:"6. \u4F18\u5316\u6307\u4EE4\u987A\u5E8F",id:"6-\u4F18\u5316\u6307\u4EE4\u987A\u5E8F",level:3},{value:"7. \u7CBE\u7B80\u5065\u5EB7\u68C0\u67E5\u6307\u4EE4",id:"7-\u7CBE\u7B80\u5065\u5EB7\u68C0\u67E5\u6307\u4EE4",level:3},{value:"8. \u9009\u62E9\u6027\u62F7\u8D1D\u6587\u4EF6",id:"8-\u9009\u62E9\u6027\u62F7\u8D1D\u6587\u4EF6",level:3},{value:"9. \u6709\u6548\u5229\u7528\u6784\u5EFA\u7F13\u5B58",id:"9-\u6709\u6548\u5229\u7528\u6784\u5EFA\u7F13\u5B58",level:3},{value:"10. \u5BA1\u67E5\u8F6F\u4EF6\u5305\u5B89\u88C5",id:"10-\u5BA1\u67E5\u8F6F\u4EF6\u5305\u5B89\u88C5",level:3},{value:"11. \u538B\u7F29\u5E94\u7528\u7A0B\u5E8F\u6587\u4EF6",id:"11-\u538B\u7F29\u5E94\u7528\u7A0B\u5E8F\u6587\u4EF6",level:3},{value:"12. \u4F7F\u7528\u975E root \u7528\u6237",id:"12-\u4F7F\u7528\u975E-root-\u7528\u6237",level:3}];function a(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"1-\u9009\u62E9\u5C0F\u578B\u57FA\u7840\u955C\u50CF",children:"1. \u9009\u62E9\u5C0F\u578B\u57FA\u7840\u955C\u50CF"}),"\n",(0,i.jsx)(n.p,{children:"\u9009\u62E9 Alpine Linux \u7B49\u5C0F\u578B\u57FA\u7840\u955C\u50CF\uFF0C\u56E0\u5176\u4F53\u79EF\u5C0F\u5DE7\uFF0C\u6709\u52A9\u4E8E\u51CF\u5C11\u6700\u7EC8\u955C\u50CF\u7684\u5927\u5C0F\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"2-\u6700\u5C0F\u5316\u5C42\u7684\u6570\u91CF",children:"2. \u6700\u5C0F\u5316\u5C42\u7684\u6570\u91CF"}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7\u5408\u5E76\u591A\u4E2A ",(0,i.jsx)(n.code,{children:"RUN"})," \u6307\u4EE4\uFF0C\u51CF\u5C11\u955C\u50CF\u5C42\u6570\uFF0C\u4F8B\u5982\u5C06\u66F4\u65B0\u3001\u5B89\u88C5\u548C\u6E05\u7406\u6B65\u9AA4\u5408\u5E76\u5230\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"RUN"})," \u4E2D\u6267\u884C\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"RUN apt-get update && \\\n    apt-get install -y package1 package2 && \\\n    rm -rf /var/lib/apt/lists/*\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-\u6E05\u7406\u4E0D\u5FC5\u8981\u7684\u6587\u4EF6",children:"3. \u6E05\u7406\u4E0D\u5FC5\u8981\u7684\u6587\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5B89\u88C5\u8F6F\u4EF6\u5305\u540E\uFF0C\u6E05\u7406\u7F13\u5B58\u548C\u4E34\u65F6\u6587\u4EF6\uFF0C\u79FB\u9664\u4E0D\u5FC5\u8981\u7684\u5305\uFF0C\u4EE5\u51CF\u5C11\u955C\u50CF\u7684\u4F53\u79EF\uFF0C\u914D\u5408\u591A\u9636\u6BB5\u6784\u5EFA\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"4-\u4F7F\u7528\u591A\u9636\u6BB5\u6784\u5EFA",children:"4. \u4F7F\u7528\u591A\u9636\u6BB5\u6784\u5EFA"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u591A\u9636\u6BB5\u6784\u5EFA\uFF0C\u53EA\u5728\u6700\u7EC8\u955C\u50CF\u4E2D\u5305\u542B\u8FD0\u884C\u5E94\u7528\u6240\u5FC5\u9700\u7684\u6587\u4EF6\u548C\u4F9D\u8D56\uFF0C\u4ECE\u800C\u51CF\u5C11\u955C\u50CF\u5927\u5C0F\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# Build stage\nFROM golang:1.16 as builder\nWORKDIR /app\nCOPY . .\nRUN go build -o myapp .\n\u200B\n# Final stage\nFROM alpine:latest\nCOPY --from=builder /app/myapp /myapp\nENTRYPOINT ["./myapp"]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"5-\u4F7F\u7528dockerignore-\u6587\u4EF6",children:"5. \u4F7F\u7528.dockerignore \u6587\u4EF6"}),"\n",(0,i.jsxs)(n.p,{children:["\u5229\u7528 ",(0,i.jsx)(n.code,{children:".dockerignore"})," \u6587\u4EF6\u6392\u9664\u4E0D\u5FC5\u8981\u7684\u6587\u4EF6\u548C\u76EE\u5F55\uFF0C\u9632\u6B62\u5B83\u4EEC\u88AB\u6DFB\u52A0\u5230\u955C\u50CF\u4E2D\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"6-\u4F18\u5316\u6307\u4EE4\u987A\u5E8F",children:"6. \u4F18\u5316\u6307\u4EE4\u987A\u5E8F"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u4F18\u5316 Dockerfile \u4E2D\u6307\u4EE4\u7684\u987A\u5E8F\uFF0C\u4F7F\u5F97\u4E0D\u7ECF\u5E38\u53D8\u66F4\u7684\u6307\u4EE4\u5C3D\u91CF\u653E\u5728\u524D\u9762\uFF0C\u4EE5\u5229\u7528 Docker \u7684\u6784\u5EFA\u7F13\u5B58\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"7-\u7CBE\u7B80\u5065\u5EB7\u68C0\u67E5\u6307\u4EE4",children:"7. \u7CBE\u7B80\u5065\u5EB7\u68C0\u67E5\u6307\u4EE4"}),"\n",(0,i.jsxs)(n.p,{children:["\u786E\u4FDD\u5065\u5EB7\u68C0\u67E5\uFF08",(0,i.jsx)(n.code,{children:"HEALTHCHECK"}),"\uFF09\u6307\u4EE4\u5C3D\u53EF\u80FD\u8F7B\u91CF\uFF0C\u4E0D\u589E\u52A0\u989D\u5916\u7684\u8D1F\u62C5\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"8-\u9009\u62E9\u6027\u62F7\u8D1D\u6587\u4EF6",children:"8. \u9009\u62E9\u6027\u62F7\u8D1D\u6587\u4EF6"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"COPY"})," \u6307\u4EE4\u65F6\uFF0C\u53EA\u62F7\u8D1D\u5FC5\u9700\u7684\u6587\u4EF6\uFF0C\u907F\u514D\u5F15\u5165\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"9-\u6709\u6548\u5229\u7528\u6784\u5EFA\u7F13\u5B58",children:"9. \u6709\u6548\u5229\u7528\u6784\u5EFA\u7F13\u5B58"}),"\n",(0,i.jsx)(n.p,{children:"\u5408\u7406\u5B89\u6392 Dockerfile \u4E2D\u7684\u6307\u4EE4\uFF0C\u4EE5\u6700\u5927\u9650\u5EA6\u5730\u590D\u7528\u6784\u5EFA\u7F13\u5B58\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u91CD\u5EFA\u8FC7\u7A0B\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"10-\u5BA1\u67E5\u8F6F\u4EF6\u5305\u5B89\u88C5",children:"10. \u5BA1\u67E5\u8F6F\u4EF6\u5305\u5B89\u88C5"}),"\n",(0,i.jsx)(n.p,{children:"\u5B9A\u671F\u5BA1\u67E5\u548C\u66F4\u65B0 Dockerfile\uFF0C\u79FB\u9664\u4E0D\u518D\u9700\u8981\u7684\u4F9D\u8D56\uFF0C\u4FDD\u6301\u955C\u50CF\u7684\u8F7B\u91CF\u7EA7\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"11-\u538B\u7F29\u5E94\u7528\u7A0B\u5E8F\u6587\u4EF6",children:"11. \u538B\u7F29\u5E94\u7528\u7A0B\u5E8F\u6587\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u9759\u6001\u8D44\u6E90\u8FDB\u884C\u538B\u7F29\u5904\u7406\uFF0C\u5982\u4F7F\u7528 Gzip \u538B\u7F29\uFF0C\u4EE5\u51CF\u5C0F\u6587\u4EF6\u5360\u7528\u7684\u7A7A\u95F4\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"12-\u4F7F\u7528\u975E-root-\u7528\u6237",children:"12. \u4F7F\u7528\u975E root \u7528\u6237"}),"\n",(0,i.jsx)(n.p,{children:"\u6307\u5B9A\u975E root \u7528\u6237\u8FD0\u884C\u5BB9\u5668\uFF0C\u51CF\u5C11\u5BF9\u5B89\u5168\u7279\u6027\u7684\u4F9D\u8D56\uFF0C\u53EF\u80FD\u5E26\u6765\u7684\u989D\u5916\u6587\u4EF6\u6216\u5E93\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u5B9E\u65BD\u4EE5\u4E0A\u7B56\u7565\uFF0C\u53EF\u4EE5\u6709\u6548\u63A7\u5236 Docker \u955C\u50CF\u7684\u5927\u5C0F\uFF0C\u63D0\u5347\u5BB9\u5668\u7684\u542F\u52A8\u901F\u5EA6\u548C\u8FD0\u884C\u6548\u7387\uFF0C\u964D\u4F4E\u8D44\u6E90\u6D88\u8017\uFF0C\u4F18\u5316\u5BB9\u5668\u7684\u6574\u4F53\u6027\u80FD\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(67294);let i={},l=r.createContext(i);function o(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:n},e.children)}},80118:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/docker-\u955C\u50CF\u4F18\u5316\u7B56\u7565","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-18-Docker_\u955C\u50CF\u4F18\u5316\u7B56\u7565.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-06-18-Docker_\u955C\u50CF\u4F18\u5316\u7B56\u7565.md","title":"Docker \u955C\u50CF\u4F18\u5316\u7B56\u7565","description":"1. \u9009\u62E9\u5C0F\u578B\u57FA\u7840\u955C\u50CF","date":"2024-06-18T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.8633333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"docker-\u955C\u50CF\u4F18\u5316\u7B56\u7565","title":"Docker \u955C\u50CF\u4F18\u5316\u7B56\u7565","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-06-18T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Linux \u8FD0\u884C go \u6587\u4EF6","permalink":"/docs-hub/blog/linux-\u8FD0\u884C-go-\u6587\u4EF6"},"nextItem":{"title":"curl \u53C2\u6570\u548C\u4F7F\u7528","permalink":"/docs-hub/blog/curl-\u53C2\u6570\u548C\u4F7F\u7528"}}')}}]);