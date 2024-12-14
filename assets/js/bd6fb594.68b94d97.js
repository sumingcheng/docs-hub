"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["59590"],{93909:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return d},metadata:function(){return r},toc:function(){return l}});var r=t(83823),a=t(85893),c=t(50065);let d={slug:"\u4F7F\u7528-fetch-api-\u548C-readablestream-api-\u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E",title:"\u4F7F\u7528 Fetch API \u548C ReadableStream API \u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-03-31T00:00:00.000Z")},s="\u4F7F\u7528 Fetch API \u548C ReadableStream API \u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E",o={authorsImageUrls:[void 0]},l=[{value:"\u4F7F\u7528 Fetch API \u548C ReadableStream API \u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E",id:"\u4F7F\u7528-fetch-api-\u548C-readablestream-api-\u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E",level:2},{value:"Fetch API \u548C ReadableStream",id:"fetch-api-\u548C-readablestream",level:2},{value:"\u5904\u7406\u6587\u672C\u6570\u636E",id:"\u5904\u7406\u6587\u672C\u6570\u636E",level:2},{value:"\u5904\u7406 JSON \u6570\u636E",id:"\u5904\u7406-json-\u6570\u636E",level:2}];function i(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u4F7F\u7528-fetch-api-\u548C-readablestream-api-\u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E",children:"\u4F7F\u7528 Fetch API \u548C ReadableStream API \u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u5F00\u53D1\u65F6\uFF0C\u6211\u4EEC\u5E38\u5E38\u9700\u8981\u5904\u7406\u5927\u91CF\u7684\u6570\u636E\uFF0C\u8FD9\u4E9B\u6570\u636E\u53EF\u80FD\u662F\u6587\u4EF6\uFF0C\u4E5F\u53EF\u80FD\u662F\u7F51\u7EDC\u8BF7\u6C42\u7684\u54CD\u5E94\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u6D41\uFF08stream\uFF09\u53EF\u4EE5\u6709\u6548\u5730\u5904\u7406\u8FD9\u4E9B\u6570\u636E\uFF0C\u907F\u514D\u4E00\u6B21\u6027\u52A0\u8F7D\u6240\u6709\u6570\u636E\uFF0C\u4ECE\u800C\u51CF\u5C11\u5185\u5B58\u7684\u4F7F\u7528\u5E76\u63D0\u9AD8\u5E94\u7528\u7684\u6027\u80FD\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u8FD9\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528 Fetch API \u548C ReadableStream API \u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E\u3002\u6211\u5C06\u4F1A\u63D0\u4F9B\u5177\u4F53\u7684\u4EE3\u7801\u793A\u4F8B\u6765\u5C55\u793A\u8FD9\u4E9B\u6982\u5FF5\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"fetch-api-\u548C-readablestream",children:"Fetch API \u548C ReadableStream"}),"\n",(0,a.jsx)(n.p,{children:"Fetch API \u662F\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u4E00\u4E2A\u73B0\u4EE3\u7684\u3001\u5F3A\u5927\u7684 HTTP \u8BF7\u6C42\u5DE5\u5177\u3002\u4E0E\u65E7\u7684 XMLHttpRequest API \u76F8\u6BD4\uFF0CFetch API \u63D0\u4F9B\u4E86\u66F4\u7B80\u6D01\u7684 API \u548C\u66F4\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u5305\u62EC\u6D41\u5F0F\u54CD\u5E94\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u5F53\u4F60\u4F7F\u7528 Fetch API \u53D1\u51FA\u8BF7\u6C42\u65F6\uFF0C\u8FD4\u56DE\u7684 ",(0,a.jsx)(n.code,{children:"Response"})," \u5BF9\u8C61\u5305\u542B\u4E00\u4E2A ",(0,a.jsx)(n.code,{children:"body"})," \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u662F\u4E00\u4E2A ",(0,a.jsx)(n.code,{children:"ReadableStream"}),"\u3002",(0,a.jsx)(n.code,{children:"ReadableStream"})," \u8868\u793A\u4E00\u4E2A\u53EF\u8BFB\u7684\u6570\u636E\u6D41\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u7684 ",(0,a.jsx)(n.code,{children:"getReader()"})," \u65B9\u6CD5\u6765\u83B7\u53D6\u4E00\u4E2A reader\uFF0C\u7136\u540E\u4F7F\u7528\u8FD9\u4E2A reader \u7684 ",(0,a.jsx)(n.code,{children:"read()"})," \u65B9\u6CD5\u6765\u8BFB\u53D6\u6570\u636E\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// \u53D1\u51FA\u8BF7\u6C42\nfetch('https://example.com/data')\n  .then(response => {\n    // \u83B7\u53D6 reader\n    const reader = response.body.getReader();\n\n    // \u8BFB\u53D6\u6570\u636E\n    return reader.read().then(function process({ done, value }) {\n      if (done) {\n        console.log('Stream finished');\n        return;\n      }\n\n      console.log('Received data chunk', value);\n\n      // \u8BFB\u53D6\u4E0B\u4E00\u6BB5\u6570\u636E\n      return reader.read().then(process);\n    });\n  })\n  .catch(console.error);\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C",(0,a.jsx)(n.code,{children:"reader.read()"})," \u8FD4\u56DE\u4E00\u4E2A Promise\uFF0C\u8FD9\u4E2A Promise \u7684 resolve \u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E24\u4E2A\u5C5E\u6027\uFF1A",(0,a.jsx)(n.code,{children:"value"})," \u548C ",(0,a.jsx)(n.code,{children:"done"}),"\u3002",(0,a.jsx)(n.code,{children:"value"})," \u662F\u8BFB\u53D6\u5230\u7684\u6570\u636E\u5757\uFF0C",(0,a.jsx)(n.code,{children:"done"})," \u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u5982\u679C\u4E3A ",(0,a.jsx)(n.code,{children:"true"})," \u5219\u8868\u793A\u6570\u636E\u5DF2\u7ECF\u8BFB\u53D6\u5B8C\u6BD5\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8FD9\u6837\uFF0C\u4F60\u5C31\u53EF\u4EE5\u9010\u5757\u5730\u5904\u7406\u6570\u636E\uFF0C\u800C\u4E0D\u9700\u8981\u4E00\u6B21\u6027\u52A0\u8F7D\u6240\u6709\u6570\u636E\u3002\u4E2A\u4EBA\u89C9\u5F97\u6709\u70B9\u50CF\u8FED\u4EE3\u5668\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5904\u7406\u6587\u672C\u6570\u636E",children:"\u5904\u7406\u6587\u672C\u6570\u636E"}),"\n",(0,a.jsx)(n.p,{children:"\u4E0A\u8FF0\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u9010\u5757\u5730\u8BFB\u53D6\u6570\u636E\uFF0C\u4F46\u8FD9\u4E9B\u6570\u636E\u662F\u4E8C\u8FDB\u5236\u7684\uFF0C\u5982\u679C\u4F60\u60F3\u5904\u7406\u6587\u672C\u6570\u636E\uFF0C\u9700\u8981\u5BF9\u5176\u8FDB\u884C\u89E3\u7801\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 TextDecoder \u5B9E\u4F8B\nconst decoder = new TextDecoder('utf-8');\n\n// \u53D1\u51FA\u8BF7\u6C42\nfetch('https://example.com/text')\n  .then(response => {\n    const reader = response.body.getReader();\n\n    return reader.read().then(function process({ done, value }) {\n      if (done) {\n        console.log('Stream finished');\n        return;\n      }\n\n      // \u89E3\u7801\u6570\u636E\n      const text = decoder.decode(value);\n\n      console.log('Received text chunk', text);\n\n      return reader.read().then(process);\n    });\n  })\n  .catch(console.error);\n\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"TextDecoder"})," \u5BF9\u8C61\u6765\u89E3\u7801\u6570\u636E\u3002",(0,a.jsx)(n.code,{children:"TextDecoder"})," \u662F\u4E00\u4E2A\u53EF\u4EE5\u5C06\u4E8C\u8FDB\u5236\u6570\u636E\u89E3\u7801\u4E3A\u5B57\u7B26\u4E32\u7684\u5DE5\u5177\uFF0C\u5B83\u7684 ",(0,a.jsx)(n.code,{children:"decode()"})," \u65B9\u6CD5\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A ",(0,a.jsx)(n.code,{children:"ArrayBuffer"})," \u6216\u8005 ",(0,a.jsx)(n.code,{children:"TypedArray"})," \u5E76\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5904\u7406-json-\u6570\u636E",children:"\u5904\u7406 JSON \u6570\u636E"}),"\n",(0,a.jsx)(n.p,{children:"\u6709\u65F6\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5904\u7406\u7684\u662F JSON \u683C\u5F0F\u7684\u6570\u636E\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u9700\u8981\u9996\u5148\u5C06\u6240\u6709\u6570\u636E\u8BFB\u53D6\u5B8C\u6210\uFF0C\u7136\u540E\u5C06\u5176\u89E3\u7801\u4E3A\u5B57\u7B26\u4E32\uFF0C\u6700\u540E\u89E3\u6790\u4E3A JavaScript \u5BF9\u8C61\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"fetch('https://example.com/data.json')\n  .then(response => {\n    const reader = response.body.getReader();\n    const chunks = [];\n\n    return reader.read().then(function process({ done, value }) {\n      if (done) {\n        // \u5C06\u6240\u6709\u6570\u636E\u5757\u8FDE\u63A5\u8D77\u6765\uFF0C\u89E3\u7801\u4E3A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u89E3\u6790\u4E3A JavaScript \u5BF9\u8C61\n        const text = decoder.decode(new Uint8Array(chunks.flat()));\n        const data = JSON.parse(text);\n\n        console.log('Received JSON data', data);\n\n        return;\n      }\n\n      // \u5B58\u50A8\u6570\u636E\u5757\n      chunks.push(value);\n\n      return reader.read().then(process);\n    });\n  })\n  .catch(console.error);\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4F7F\u7528\u4E00\u4E2A\u6570\u7EC4\u6765\u5B58\u50A8\u6240\u6709\u6570\u636E\u5757\uFF0C\u7136\u540E\u5728\u6570\u636E\u8BFB\u53D6\u5B8C\u6210\u540E\uFF0C\u5C06\u6240\u6709\u6570\u636E\u5757\u8FDE\u63A5\u8D77\u6765\uFF0C\u89E3\u7801\u4E3A\u5B57\u7B26\u4E32\uFF0C\u6700\u540E\u89E3\u6790\u4E3A JavaScript \u5BF9\u8C61\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return d}});var r=t(67294);let a={},c=r.createContext(a);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(c.Provider,{value:n},e.children)}},83823:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u4F7F\u7528-fetch-api-\u548C-readablestream-api-\u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-03-31-\u4F7F\u7528_Fetch_API_\u548C_ReadableStream_API_\u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E.md","source":"@site/blog/\u540E\u7AEF/2024-03-31-\u4F7F\u7528_Fetch_API_\u548C_ReadableStream_API_\u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E.md","title":"\u4F7F\u7528 Fetch API \u548C ReadableStream API \u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E","description":"\u4F7F\u7528 Fetch API \u548C ReadableStream API \u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E","date":"2024-03-31T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":2.6633333333333336,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u4F7F\u7528-fetch-api-\u548C-readablestream-api-\u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E","title":"\u4F7F\u7528 Fetch API \u548C ReadableStream API \u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E","authors":["sumingcheng"],"tags":["backend"],"date":"2024-03-31T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u89E3\u51B3SSE\u4E2D\u7684\u7C98\u5305\u95EE\u9898","permalink":"/docs-hub/blog/\u89E3\u51B3sse\u4E2D\u7684\u7C98\u5305\u95EE\u9898"},"nextItem":{"title":"SolidityTruffleRemix\u548CHardhat\u4E4B\u95F4\u7684\u5173\u7CFB","permalink":"/docs-hub/blog/soliditytruffleremix\u548Chardhat\u4E4B\u95F4\u7684\u5173\u7CFB"}}')}}]);