"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["28997"],{71869:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return a},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var s=t(58427),r=t(85893),i=t(50065);let c={slug:"\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B",title:"\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B",authors:["sumingcheng"],tags:["performance-architecture"],date:new Date("2023-07-24T00:00:00.000Z")},o="\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B",l={authorsImageUrls:[void 0]},u=[];function h(e){let n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'\u9996\u5148\uFF0C\u65E0\u8BBA\u662F\u89C2\u5BDF\u8005\u6A21\u5F0F\u8FD8\u662F\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\uFF0C\u90FD\u662F\u4E3A\u4E86\u5728\u5BF9\u8C61\u4E4B\u95F4\u5B9E\u73B0\u4F4E\u8026\u5408\u7684\u901A\u4FE1\u3002\u8FD9\u4E24\u79CD\u6A21\u5F0F\u90FD\u6D89\u53CA\u5230 "\u8BA2\u9605\u8005" \u548C "\u53D1\u5E03\u8005" \u7684\u6982\u5FF5\u3002\u8BA2\u9605\u8005\u8BA2\u9605\u67D0\u4E2A\u4E8B\u4EF6\u6216\u6570\u636E\u7684\u66F4\u65B0\uFF0C\u5F53\u53D1\u5E03\u8005\u53D1\u5E03\u8FD9\u4E2A\u4E8B\u4EF6\u6216\u66F4\u65B0\u8FD9\u4E2A\u6570\u636E\u65F6\uFF0C\u6240\u6709\u7684\u8BA2\u9605\u8005\u90FD\u4F1A\u5F97\u5230\u901A\u77E5\u3002'}),"\n",(0,r.jsx)(n.p,{children:"\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF1A\u5728\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E2D\uFF0C\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u4E4B\u95F4\u6709\u76F4\u63A5\u7684\u5173\u8054\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u53D1\u5E03\u8005\u76F4\u63A5\u8C03\u7528\u8BA2\u9605\u8005\u7684\u65B9\u6CD5\u6765\u901A\u77E5\u4ED6\u4EEC\u3002\u56E0\u6B64\uFF0C\u53D1\u5E03\u8005\u9700\u8981\u77E5\u9053\u5B83\u7684\u8BA2\u9605\u8005\u662F\u8C01\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u60F3\u8C61\u4E00\u4E2A\u62A5\u7EB8\u8BA2\u9605\u7684\u60C5\u5F62\uFF0C\u62A5\u7EB8\u516C\u53F8\uFF08\u53D1\u5E03\u8005\uFF09\u6709\u4E00\u4E2A\u660E\u786E\u7684\u8BA2\u9605\u8005\u5217\u8868\uFF0C\u5F53\u6709\u65B0\u7684\u62A5\u7EB8\u51FA\u7248\u65F6\uFF0C\u5B83\u4F1A\u76F4\u63A5\u5C06\u62A5\u7EB8\u9001\u5230\u8BA2\u9605\u8005\u7684\u95E8\u524D\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"class Publisher {\n  constructor() {\n    this.observers = [];\n  }\n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n  publish() {\n    this.observers.forEach((observer) => {\n      observer.notify();\n    });\n  }\n}\n\nclass Observer {\n  notify() {\n    console.log('Observer has been notified.');\n  }\n}\n\nconst publisher = new Publisher();\nconst observer = new Observer();\n\npublisher.subscribe(observer);\npublisher.publish(); // Log: Observer has been notified.\n\n\n"})}),"\n",(0,r.jsx)(n.p,{children:'\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\uFF1A\u4E0E\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E0D\u540C\uFF0C\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u4E2D\u7684\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u4E4B\u95F4\u4E0D\u5B58\u5728\u76F4\u63A5\u5173\u8054\u3002\u800C\u662F\u901A\u8FC7\u4E00\u4E2A "\u6D88\u606F\u4E2D\u5FC3" \u6216 "\u4E8B\u4EF6\u603B\u7EBF" \u6765\u8FDB\u884C\u901A\u4FE1\u7684\u3002\u53D1\u5E03\u8005\u53D1\u5E03\u4E8B\u4EF6\u5230\u6D88\u606F\u4E2D\u5FC3\uFF0C\u8BA2\u9605\u8005\u5219\u4ECE\u6D88\u606F\u4E2D\u5FC3\u8BA2\u9605\u4E8B\u4EF6\u3002\u56E0\u6B64\uFF0C\u53D1\u5E03\u8005\u5E76\u4E0D\u9700\u8981\u77E5\u9053\u8BA2\u9605\u8005\u662F\u8C01\u3002\u6211\u4EEC\u53EF\u4EE5\u60F3\u8C61\u7535\u89C6\u5E7F\u64AD\u7684\u60C5\u5F62\uFF0C\u7535\u89C6\u53F0\uFF08\u53D1\u5E03\u8005\uFF09\u53EA\u8D1F\u8D23\u5C06\u8282\u76EE\uFF08\u4E8B\u4EF6\uFF09\u53D1\u9001\u5230\u7535\u89C6\u4FE1\u53F7\u4E2D\uFF08\u6D88\u606F\u4E2D\u5FC3\uFF09\uFF0C\u800C\u4F5C\u4E3A\u89C2\u4F17\uFF08\u8BA2\u9605\u8005\uFF09\uFF0C\u4F60\u53EA\u9700\u8981\u5728\u7535\u89C6\u4E0A\u8C03\u5230\u6B63\u786E\u7684\u9891\u9053\uFF08\u8BA2\u9605\u4E8B\u4EF6\uFF09\u5C31\u53EF\u4EE5\u770B\u5230\u8282\u76EE\u3002'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"class EventBus {\n  constructor() {\n    this.listeners = {};\n  }\n  subscribe(eventName, listener) {\n    if (!this.listeners[eventName]) {\n      this.listeners[eventName] = [];\n    }\n    this.listeners[eventName].push(listener);\n  }\n  publish(eventName) {\n    if (this.listeners[eventName]) {\n      this.listeners[eventName].forEach((listener) => {\n        listener();\n      });\n    }\n  }\n}\n\nconst eventBus = new EventBus();\n\neventBus.subscribe('news', () => console.log('Subscriber has been notified.'));\neventBus.publish('news'); // Log: Subscriber has been notified.\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E2D\uFF0C\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u76F4\u63A5\u8FDB\u884C\u4EA4\u4E92\uFF0C\u800C\u5728\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u4E2D\uFF0C\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u901A\u8FC7\u4E00\u4E2A\u7B2C\u4E09\u65B9\uFF08\u6D88\u606F\u4E2D\u5FC3/\u4E8B\u4EF6\u603B\u7EBF\uFF09\u8FDB\u884C\u4EA4\u4E92\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E2D\u7684\u53D1\u5E03\u8005\u77E5\u9053\u8BA2\u9605\u8005\u662F\u8C01\uFF0C\u800C\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u4E2D\u7684\u53D1\u5E03\u8005\u5E76\u4E0D\u77E5\u9053\u8BA2\u9605\u8005\u662F\u8C01\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u603B\u7ED3"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ECE\u7406\u8BBA\u4E0A\u8BB2\uFF0C\u4E24\u79CD\u6A21\u5F0F\u90FD\u53EF\u4EE5\u5B9E\u73B0\u5B9E\u65F6\u901A\u77E5\u3002\u65E0\u8BBA\u662F\u89C2\u5BDF\u8005\u6A21\u5F0F\u8FD8\u662F\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\uFF0C\u4E00\u65E6\u6709\u4E8B\u4EF6\u53D1\u751F\u6216\u6570\u636E\u53D8\u5316\uFF0C\u8BA2\u9605\u8005\u90FD\u53EF\u4EE5\u7ACB\u5373\u6536\u5230\u901A\u77E5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u533A\u522B\u4E3B\u8981\u5728\u4E8E\u8FD9\u4E24\u79CD\u6A21\u5F0F\u901A\u77E5\u8BA2\u9605\u8005\u7684\u65B9\u5F0F\u4E0D\u540C\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u89C2\u5BDF\u8005\u6A21\u5F0F\u4E2D\uFF0C\u53D1\u5E03\u8005\u76F4\u63A5\u901A\u77E5\u8BA2\u9605\u8005\u3002\u56E0\u6B64\uFF0C\u53EA\u8981\u53D1\u5E03\u8005\u53D1\u51FA\u901A\u77E5\uFF0C\u8BA2\u9605\u8005\u5C31\u53EF\u4EE5\u7ACB\u5373\u6536\u5230\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u4E2D\uFF0C\u53D1\u5E03\u8005\u5C06\u901A\u77E5\u53D1\u9001\u5230\u4E00\u4E2A\u4E2D\u95F4\u4EE3\u7406\uFF08\u901A\u5E38\u88AB\u79F0\u4E3A\u4E8B\u4EF6\u603B\u7EBF\u6216\u6D88\u606F\u4E2D\u5FC3\uFF09\uFF0C\u7136\u540E\u7531\u8FD9\u4E2A\u4E2D\u95F4\u4EE3\u7406\u5C06\u901A\u77E5\u4F20\u9012\u7ED9\u8BA2\u9605\u8005\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5C3D\u7BA1\u53EF\u80FD\u5B58\u5728\u4E00\u70B9\u5EF6\u8FDF\uFF08\u56E0\u4E3A\u901A\u77E5\u9700\u8981\u9996\u5148\u5230\u8FBE\u4E2D\u95F4\u4EE3\u7406\uFF0C\u7136\u540E\u518D\u4ECE\u4E2D\u95F4\u4EE3\u7406\u4F20\u9012\u7ED9\u8BA2\u9605\u8005\uFF09\uFF0C\u4F46\u8FD9\u4E2A\u5EF6\u8FDF\u901A\u5E38\u53EF\u4EE5\u5FFD\u7565\u4E0D\u8BA1\uFF0C\u6240\u4EE5\u8BA2\u9605\u8005\u4F9D\u7136\u53EF\u4EE5\u8FD1\u4E4E\u5B9E\u65F6\u5730\u6536\u5230\u901A\u77E5\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5B9E\u9645\u4E0A\uFF0C\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u80FD\u591F\u63D0\u4F9B\u66F4\u591A\u7684\u7075\u6D3B\u6027\uFF0C\u56E0\u4E3A\u5B83\u89E3\u8026\u4E86\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u3002\u7531\u4E8E\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u90FD\u53EA\u4E0E\u4E8B\u4EF6\u603B\u7EBF\u4EA4\u4E92\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4EA4\u4E92\uFF0C\u56E0\u6B64\u53EF\u4EE5\u66F4\u5BB9\u6613\u5730\u6DFB\u52A0\u3001\u5220\u9664\u6216\u4FEE\u6539\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\uFF0C\u800C\u65E0\u9700\u6539\u53D8\u5176\u4ED6\u90E8\u5206\u7684\u4EE3\u7801\u3002\u8FD9\u4F7F\u5F97\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u7279\u522B\u9002\u5408\u5927\u578B\u3001\u590D\u6742\u7684\u7CFB\u7EDF\uFF0C\u5176\u4E2D\u7684\u7EC4\u4EF6\u53EF\u80FD\u9700\u8981\u5728\u8FD0\u884C\u65F6\u52A8\u6001\u5730\u6DFB\u52A0\u6216\u5220\u9664\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u540C\u65F6\uFF0C\u901A\u8FC7\u4F7F\u7528\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u6D88\u606F\u4F20\u9012\u6A21\u5F0F\uFF0C\u4F8B\u5982\u6D88\u606F\u8FC7\u6EE4\u3001\u6D88\u606F\u6301\u4E45\u5316\u3001\u6D88\u606F\u6392\u5E8F\u7B49\uFF0C\u8FD9\u662F\u89C2\u5BDF\u8005\u6A21\u5F0F\u65E0\u6CD5\u76F4\u63A5\u5B9E\u73B0\u7684\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var s=t(67294);let r={},i=s.createContext(r);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}},58427:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784/2023-07-24-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B.md","source":"@site/blog/\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784/2023-07-24-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B.md","title":"\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B","description":"\u9996\u5148\uFF0C\u65E0\u8BBA\u662F\u89C2\u5BDF\u8005\u6A21\u5F0F\u8FD8\u662F\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\uFF0C\u90FD\u662F\u4E3A\u4E86\u5728\u5BF9\u8C61\u4E4B\u95F4\u5B9E\u73B0\u4F4E\u8026\u5408\u7684\u901A\u4FE1\u3002\u8FD9\u4E24\u79CD\u6A21\u5F0F\u90FD\u6D89\u53CA\u5230 \\"\u8BA2\u9605\u8005\\" \u548C \\"\u53D1\u5E03\u8005\\" \u7684\u6982\u5FF5\u3002\u8BA2\u9605\u8005\u8BA2\u9605\u67D0\u4E2A\u4E8B\u4EF6\u6216\u6570\u636E\u7684\u66F4\u65B0\uFF0C\u5F53\u53D1\u5E03\u8005\u53D1\u5E03\u8FD9\u4E2A\u4E8B\u4EF6\u6216\u66F4\u65B0\u8FD9\u4E2A\u6570\u636E\u65F6\uFF0C\u6240\u6709\u7684\u8BA2\u9605\u8005\u90FD\u4F1A\u5F97\u5230\u901A\u77E5\u3002","date":"2023-07-24T00:00:00.000Z","tags":[{"inline":false,"label":"\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784","permalink":"/docs-hub/blog/tags/performance-architecture","description":"\u6027\u80FD\u4F18\u5316\u548C\u7CFB\u7EDF\u67B6\u6784\u76F8\u5173\u6587\u7AE0"}],"readingTime":3.453333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B","title":"\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u533A\u522B","authors":["sumingcheng"],"tags":["performance-architecture"],"date":"2023-07-24T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"watch \u548C watchEffect \u533A\u522B","permalink":"/docs-hub/blog/watch-\u548C-watcheffect-\u533A\u522B"},"nextItem":{"title":"JS\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49","permalink":"/docs-hub/blog/js\u4E2Dthis\u6709\u4EC0\u4E48\u610F\u4E49"}}')}}]);