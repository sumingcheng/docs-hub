"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[62691],{97526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Frontend/JavaScript/\u4e8b\u4ef6\u73af/\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1","title":"\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1","description":"JavaScript \u5f15\u64ce\u5728\u6267\u884c\u4efb\u52a1\u65f6,\u4f1a\u6839\u636e\u4efb\u52a1\u7684\u7c7b\u578b\u548c\u6765\u6e90,\u5c06\u5176\u5212\u5206\u4e3a\u5b8f\u4efb\u52a1\uff08MacroTask\uff09\u548c\u5fae\u4efb\u52a1\uff08MicroTask\uff09\u3002","source":"@site/docs/Frontend/JavaScript/\u4e8b\u4ef6\u73af/2.\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1.md","sourceDirName":"Frontend/JavaScript/\u4e8b\u4ef6\u73af","slug":"/Frontend/JavaScript/\u4e8b\u4ef6\u73af/\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1","permalink":"/docs-hub/docs/Frontend/JavaScript/\u4e8b\u4ef6\u73af/\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u4e8b\u4ef6\u73af/2.\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":2,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b","permalink":"/docs-hub/docs/Frontend/JavaScript/\u4e8b\u4ef6\u73af/\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b"},"next":{"title":"\u4e8b\u4ef6\u5faa\u73af\u7ec3\u4e60","permalink":"/docs-hub/docs/Frontend/JavaScript/\u4e8b\u4ef6\u73af/\u4e8b\u4ef6\u73af\u7684\u8fd0\u884c\u6d41\u7a0b"}}');var r=t(74848),o=t(28453);const a={},i="\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1",c={},l=[{value:"\u5b8f\u4efb\u52a1",id:"\u5b8f\u4efb\u52a1",level:2},{value:"\u5fae\u4efb\u52a1",id:"\u5fae\u4efb\u52a1",level:2},{value:"setTimeout \u4e0e setImmediate",id:"settimeout-\u4e0e-setimmediate",level:2},{value:"MessageChannel \u4e0e postMessage",id:"messagechannel-\u4e0e-postmessage",level:2},{value:"\u8de8\u6a21\u5757\u901a\u4fe1",id:"\u8de8\u6a21\u5757\u901a\u4fe1",level:2},{value:"requestAnimationFrame \u4e0e setInterval",id:"requestanimationframe-\u4e0e-setinterval",level:2},{value:"MutationObserver \u4e0e process.nextTick",id:"mutationobserver-\u4e0e-processnexttick",level:2}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1",children:"\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1"})}),"\n",(0,r.jsx)(n.p,{children:"JavaScript \u5f15\u64ce\u5728\u6267\u884c\u4efb\u52a1\u65f6,\u4f1a\u6839\u636e\u4efb\u52a1\u7684\u7c7b\u578b\u548c\u6765\u6e90,\u5c06\u5176\u5212\u5206\u4e3a\u5b8f\u4efb\u52a1\uff08MacroTask\uff09\u548c\u5fae\u4efb\u52a1\uff08MicroTask\uff09\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b8f\u4efb\u52a1",children:"\u5b8f\u4efb\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"\u5b8f\u4efb\u52a1\u901a\u5e38\u662f\u7531\u5bbf\u4e3b\u73af\u5883\uff08\u5982\u6d4f\u89c8\u5668\uff09\u63d0\u4f9b\u7684\u5f02\u6b65 API \u548c\u4e8b\u4ef6\u4ea7\u751f\u7684,\u5305\u62ec:"}),"\n",(0,r.jsx)(n.p,{children:"script:\u6574\u4f53\u4ee3\u7801\u5757\u3002\nUI \u6e32\u67d3:\u9875\u9762\u7684\u91cd\u7ed8\u548c\u56de\u6d41\u3002\nsetTimeout:\u5ef6\u8fdf\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\u3002\nsetInterval:\u5b9a\u65f6\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\u3002\nsetImmediate:\u7acb\u5373\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\uff08\u4ec5 IE \u548c Node \u652f\u6301\uff09\u3002\nMessageChannel:\u901a\u8fc7\u6d88\u606f\u901a\u9053\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570\u3002\nrequestAnimationFrame:\u4e0b\u4e00\u6b21\u9875\u9762\u91cd\u7ed8\u4e4b\u524d\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\u3002\n\u7528\u6237\u4ea4\u4e92\u4e8b\u4ef6:\u5982\u70b9\u51fb\u3001\u6eda\u52a8\u7b49\u3002\nAjax:\u5f02\u6b65\u7f51\u7edc\u8bf7\u6c42\u5b8c\u6210\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5fae\u4efb\u52a1",children:"\u5fae\u4efb\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"\u5fae\u4efb\u52a1\u901a\u5e38\u662f\u7531 JavaScript \u8bed\u8a00\u672c\u8eab\u63d0\u4f9b\u7684 API \u4ea7\u751f\u7684,\u5305\u62ec:"}),"\n",(0,r.jsxs)(n.p,{children:["Promise.then",":Promise"," \u7684\u6210\u529f\u6216\u5931\u8d25\u56de\u8c03\u3002\nMutationObserver:\u76d1\u542c DOM \u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570\u3002",(0,r.jsx)(n.br,{}),"\n","process.nextTick",":Node"," \u73af\u5883\u4e0b\u7684\u5fae\u4efb\u52a1 API\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"settimeout-\u4e0e-setimmediate",children:"setTimeout \u4e0e setImmediate"}),"\n",(0,r.jsx)(n.p,{children:"setTimeout \u548c setImmediate \u90fd\u7528\u4e8e\u5ef6\u8fdf\u6267\u884c\u56de\u8c03\u51fd\u6570,\u4f46\u5b83\u4eec\u7684\u884c\u4e3a\u6709\u4e00\u4e9b\u7ec6\u5fae\u7684\u5dee\u5f02:"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e0b,setTimeout \u7684\u6700\u5c0f\u5ef6\u8fdf\u65f6\u95f4\u56e0\u6d4f\u89c8\u5668\u800c\u5f02,\u4e00\u822c\u4e3a 4ms \u5de6\u53f3\u3002\u800c setImmediate \u5219\u6ca1\u6709\u6700\u5c0f\u5ef6\u8fdf,\u4f1a\u5728\u5f53\u524d\u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u540e,\u7acb\u5373\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Node \u73af\u5883\u4e0b,setTimeout(fn, 0)\u4e0d\u4e00\u5b9a\u4f1a\u6bd4 setImmediate(fn)\u5148\u6267\u884c\u3002\u8fd9\u53d6\u51b3\u4e8e\u5f53\u524d\u4e8b\u4ef6\u5faa\u73af\u7684\u72b6\u6001:\n\u5982\u679c\u5728 I/O \u56de\u8c03\u4e2d,setImmediate \u4f1a\u5148\u6267\u884c\u3002\n\u5982\u679c\u5728\u4e3b\u6a21\u5757\u4e2d,setTimeout \u4f1a\u5148\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"setImmediate(() => {\n  console.log('setImmediate');\n});\n\nsetTimeout(() => {\n  console.log('setTimeout');\n}, 0);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"messagechannel-\u4e0e-postmessage",children:"MessageChannel \u4e0e postMessage"}),"\n",(0,r.jsx)(n.p,{children:"MessageChannel \u63d0\u4f9b\u4e86\u4e00\u79cd\u5f02\u6b65\u901a\u4fe1\u673a\u5236,\u5141\u8bb8\u6211\u4eec\u521b\u5efa\u4e00\u5bf9\u5173\u8054\u7684\u7aef\u53e3\uff08port\uff09,\u7136\u540e\u901a\u8fc7 postMessage \u65b9\u6cd5\u5728\u7aef\u53e3\u4e4b\u95f4\u4f20\u9012\u6d88\u606f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const channel = new MessageChannel();\nconst { port1, port2 } = channel;\n\nport1.onmessage = function (event) {\n  console.log('port1\u6536\u5230:', event.data);\n  port1.postMessage('port1\u5df2\u6536\u5230');\n};\n\nport2.onmessage = function (event) {\n  console.log('port2\u6536\u5230:', event.data);\n  port2.postMessage('port2\u5df2\u6536\u5230');\n};\n\nport1.postMessage('\u4f60\u597d,port2');\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8de8\u6a21\u5757\u901a\u4fe1",children:"\u8de8\u6a21\u5757\u901a\u4fe1"}),"\n",(0,r.jsx)(n.p,{children:"\u501f\u52a9 MessageChannel,\u6211\u4eec\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u8de8\u6a21\u5757\u7684\u6d88\u606f\u4f20\u9012\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,r.jsx)(n.p,{children:"\u6a21\u5757 1:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const channel = new MessageChannel();\nconst { port1 } = channel;\n\nconst title = document.querySelector('h1');\n\nport1.onmessage = function (event) {\n  title.textContent = event.data;\n  port1.postMessage('DOM\u5df2\u66f4\u65b0');\n};\n\nexport default channel.port2;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6a21\u5757 2:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import port2 from './module1.js';\n\nport2.postMessage('Hello world');\n\nport2.onmessage = function (event) {\n  console.log('\u6536\u5230port1\u7684\u53cd\u9988:', event.data);\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"requestanimationframe-\u4e0e-setinterval",children:"requestAnimationFrame \u4e0e setInterval"}),"\n",(0,r.jsx)(n.p,{children:"requestAnimationFrame \u548c setInterval \u90fd\u5e38\u7528\u4e8e\u521b\u5efa\u52a8\u753b\u6548\u679c,\u4f46\u5b83\u4eec\u7684\u5de5\u4f5c\u65b9\u5f0f\u6709\u6240\u4e0d\u540c:"}),"\n",(0,r.jsx)(n.p,{children:"setInterval \u6309\u7167\u56fa\u5b9a\u7684\u65f6\u95f4\u95f4\u9694,\u91cd\u590d\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002\u6bcf\u6b21\u56de\u8c03\u51fd\u6570\u4e2d\u7684 DOM \u64cd\u4f5c,\u90fd\u4f1a\u7acb\u5373\u89e6\u53d1\u4e00\u6b21\u91cd\u6392\u548c\u91cd\u7ed8\u3002"}),"\n",(0,r.jsx)(n.p,{children:"requestAnimationFrame \u5219\u4f1a\u5c06\u6bcf\u4e00\u5e27\u4e2d\u7684\u6240\u6709 DOM \u64cd\u4f5c\u96c6\u4e2d\u8d77\u6765,\u5728\u4e0b\u4e00\u6b21\u9875\u9762\u91cd\u7ed8\u4e4b\u524d,\u4e00\u6b21\u6027\u6267\u884c\u5b8c\u8fd9\u4e9b\u64cd\u4f5c,\u4ece\u800c\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u91cd\u6392\u548c\u91cd\u7ed8\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u5916,\u5f53\u9875\u9762\u5904\u4e8e\u540e\u53f0\u6216\u6700\u5c0f\u5316\u65f6:\nsetInterval \u4f1a\u7ee7\u7eed\u6267\u884c,\u5373\u4f7f\u9875\u9762\u6b64\u65f6\u4e0d\u53ef\u89c1\u3002\nrequestAnimationFrame \u5219\u4f1a\u81ea\u52a8\u6682\u505c,\u76f4\u5230\u9875\u9762\u91cd\u65b0\u53ef\u89c1\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64,\u5728\u5236\u4f5c\u52a8\u753b\u65f6,\u4f18\u5148\u4f7f\u7528 requestAnimationFrame \u53ef\u4ee5\u83b7\u5f97\u66f4\u6d41\u7545\u3001\u66f4\u8282\u80fd\u7684\u6548\u679c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"mutationobserver-\u4e0e-processnexttick",children:"MutationObserver \u4e0e process.nextTick"}),"\n",(0,r.jsx)(n.p,{children:"MutationObserver \u662f\u6d4f\u89c8\u5668\u63d0\u4f9b\u7684\u4e00\u4e2a\u7528\u4e8e\u76d1\u542c DOM \u53d8\u5316\u7684 API\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u89c2\u5bdf\u67d0\u4e2a DOM \u8282\u70b9\u53ca\u5176\u5b50\u6811\u7684\u53d8\u5316,\u5e76\u5728\u53d8\u5316\u53d1\u751f\u65f6\u6267\u884c\u76f8\u5e94\u7684\u56de\u8c03\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const target = document.getElementById('target');\n\nconst observer = new MutationObserver(function (mutations) {\n  mutations.forEach(function (mutation) {\n    console.log('\u53d1\u751f\u53d8\u5316\u7684\u8282\u70b9:', mutation.target);\n  });\n});\n\nobserver.observe(target, {\n  attributes: true,\n  childList: true,\n  subtree: true,\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:'process.nextTick \u662f Node \u73af\u5883\u4e0b\u7684\u4e00\u4e2a\u7279\u6b8a\u7684\u5fae\u4efb\u52a1 API,\u5b83\u53ef\u4ee5\u5728\u5f53\u524d"\u6267\u884c\u6808"\u7684\u5c3e\u90e8\u3001\u4e0b\u4e00\u6b21 Event Loop\uff08\u4e3b\u7ebf\u7a0b\u8bfb\u53d6"\u4efb\u52a1\u961f\u5217"\uff09\u4e4b\u524d,\u89e6\u53d1\u56de\u8c03\u51fd\u6570\u3002'}),"\n",(0,r.jsx)(n.p,{children:"process.nextTick \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e Promise.then \u548c\u5176\u4ed6\u5fae\u4efb\u52a1\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"Promise.resolve().then(() => console.log('Promise'));\n\nsetTimeout(() => console.log('setTimeout'), 0);\n\nprocess.nextTick(() => console.log('nextTick'));\n\n// \u8f93\u51fa\u987a\u5e8f:\n// nextTick\n// Promise\n// setTimeout\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);