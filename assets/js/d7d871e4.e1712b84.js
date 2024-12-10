"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[63271],{66250:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>A,frontMatter:()=>s,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"Frontend/DOM/innerHTML","title":"\u6df1\u5165\u7406\u89e3 element.innerHTML","description":"\u8bbe\u7f6e\u548c\u83b7\u53d6\u5143\u7d20\u7684 HTML \u5185\u5bb9","source":"@site/docs/Frontend/DOM/100.innerHTML.md","sourceDirName":"Frontend/DOM","slug":"/Frontend/DOM/innerHTML","permalink":"/docs-hub/docs/Frontend/DOM/innerHTML","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/DOM/100.innerHTML.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":100,"frontMatter":{},"sidebar":"domSidebar","previous":{"title":"\u9f20\u6807\u4e8b\u4ef6\u4e0e\u5143\u7d20\u62d6\u62fd","permalink":"/docs-hub/docs/Frontend/DOM/\u9f20\u6807\u4e8b\u4ef6\u6df1\u5165-\u70b9\u51fb\u4e0e\u62d6\u62fd\u5206\u79bb-\u53cc\u51fb\u4e8b\u4ef6"},"next":{"title":"domTree \u89e3\u6790","permalink":"/docs-hub/docs/Frontend/DOM/domTree-\u89e3\u6790\u4e0e\u52a0\u8f7d-\u56de\u6d41\u4e0e\u91cd\u7ed8"}}');var c=r(74848),l=r(28453);const s={},i="\u6df1\u5165\u7406\u89e3 element.innerHTML",d={},o=[{value:"\u8bbe\u7f6e\u548c\u83b7\u53d6\u5143\u7d20\u7684 HTML \u5185\u5bb9",id:"\u8bbe\u7f6e\u548c\u83b7\u53d6\u5143\u7d20\u7684-html-\u5185\u5bb9",level:2},{value:"\u663e\u793a HTML \u6e90\u7801",id:"\u663e\u793a-html-\u6e90\u7801",level:2},{value:"\u5f15\u7528\u5931\u6548\u95ee\u9898",id:"\u5f15\u7528\u5931\u6548\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u5f15\u7528\u5931\u6548\u7684\u65b9\u6cd5",id:"\u89e3\u51b3\u5f15\u7528\u5931\u6548\u7684\u65b9\u6cd5",level:3},{value:"element.outerHTML",id:"elementouterhtml",level:2},{value:"\u8bbe\u7f6e innerHTML \u7684\u539f\u7406",id:"\u8bbe\u7f6e-innerhtml-\u7684\u539f\u7406",level:2},{value:"\u5b89\u5168\u95ee\u9898",id:"\u5b89\u5168\u95ee\u9898",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2},{value:"HTMLElement.innerText",id:"htmlelementinnertext",level:2},{value:"\u4e0e textContent \u7684\u533a\u522b",id:"\u4e0e-textcontent-\u7684\u533a\u522b",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u6df1\u5165\u7406\u89e3-elementinnerhtml",children:"\u6df1\u5165\u7406\u89e3 element.innerHTML"})}),"\n",(0,c.jsx)(n.h2,{id:"\u8bbe\u7f6e\u548c\u83b7\u53d6\u5143\u7d20\u7684-html-\u5185\u5bb9",children:"\u8bbe\u7f6e\u548c\u83b7\u53d6\u5143\u7d20\u7684 HTML \u5185\u5bb9"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"innerHTML"})," \u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u6216\u83b7\u53d6\u5143\u7d20\u7684 HTML \u5185\u5bb9\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u57fa\u672c\u793a\u4f8b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:"<div class=\"wrapper\"></div>\n<script>\n  const wrapperElement = document.getElementsByClassName('wrapper')[0];\n  wrapperElement.innerHTML = '<h1>Hello World</h1>';\n<\/script>\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"innerHTML"})," \u5b57\u7b26\u4e32\u5fc5\u987b\u7b26\u5408\u6709\u6548\u7684 HTML \u8bed\u6cd5\uff0c\u5426\u5219\u5728\u65e7\u7248\u672c\u6d4f\u89c8\u5668\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u8bed\u6cd5\u9519\u8bef\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"document.innerHTML"})," \u662f\u53ea\u8bfb\u5c5e\u6027\uff0c\u65e0\u6cd5\u76f4\u63a5\u4fee\u6539\u6574\u4e2a\u6587\u6863\u7684 HTML\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a ",(0,c.jsx)(n.code,{children:"innerHTML"})," \u8d4b\u503c\u4f1a\u79fb\u9664\u5143\u7d20\u539f\u6709\u7684\u6240\u6709\u5b50\u8282\u70b9\uff0c\u5e76\u7528\u65b0\u7684 HTML \u5185\u5bb9\u66ff\u6362\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u663e\u793a-html-\u6e90\u7801",children:"\u663e\u793a HTML \u6e90\u7801"}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u65f6\u9700\u8981\u5728\u9875\u9762\u4e0a\u5c55\u793a HTML \u6e90\u7801\uff0c\u53ef\u4ee5\u7ed3\u5408 ",(0,c.jsx)(n.code,{children:"innerHTML"})," \u548c\u5b57\u7b26\u4e32\u66ff\u6362\u5b9e\u73b0\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:"<div class=\"wrapper\"></div>\n<script>\n  const wrapperElement = document.getElementsByClassName('wrapper')[0];\n  const htmlContent = document.documentElement.innerHTML;\n  const encodedHtml = htmlContent.replace(/</g, '&lt;');\n\n  document.documentElement.innerHTML = '<pre>' + encodedHtml + '</pre>';\n  wrapperElement.innerHTML = encodedHtml;\n<\/script>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u9996\u5148\u83b7\u53d6\u6574\u4e2a\u6587\u6863\u7684 HTML\uff0c\u7136\u540e\u5c06 ",(0,c.jsx)(n.code,{children:"<"})," \u66ff\u6362\u4e3a ",(0,c.jsx)(n.code,{children:"&lt;"})," \u4ee5\u8fdb\u884c\u8f6c\u4e49\uff0c\u6700\u540e\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"<pre>"})," \u6807\u7b7e\u5305\u88f9\u5e76\u8bbe\u7f6e\u56de\u53bb\uff0c\u4ece\u800c\u5728\u9875\u9762\u4e0a\u663e\u793a\u683c\u5f0f\u5316\u540e\u7684 HTML \u6e90\u7801\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5f15\u7528\u5931\u6548\u95ee\u9898",children:"\u5f15\u7528\u5931\u6548\u95ee\u9898"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"innerHTML"})," \u8d4b\u503c\u540e\uff0c\u4e4b\u524d\u4fdd\u5b58\u7684 DOM \u5143\u7d20\u5f15\u7528\u53ef\u80fd\u4f1a\u5931\u6548\u3002\u5982\u4e0b\u4f8b\u6240\u793a\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:"<div class=\"wrapper\">\n  <span>Hello</span>\n</div>\n<script>\n  const wrapperElement = document.getElementsByClassName('wrapper')[0];\n  const textElement = document.getElementsByTagName('span')[0];\n\n  wrapperElement.innerHTML += '<h1>World</h1>';\n  textElement.style.color = 'red'; // Error!\n<\/script>\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u5f15\u7528\u5931\u6548\u793a\u610f\u56fe",src:r(64569).A+"",width:"263",height:"163"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"innerHTML"})," \u64cd\u4f5c\u4f1a\u7834\u574f\u5bf9\u539f\u6709 DOM \u7ed3\u6784\u7684\u5f15\u7528\u3002\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"textElement"})," \u5728 ",(0,c.jsx)(n.code,{children:"innerHTML"})," \u4fee\u6539\u540e\u5931\u6548\uff0c\u7ee7\u7eed\u4f7f\u7528\u4f1a\u62a5\u9519\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u89e3\u51b3\u5f15\u7528\u5931\u6548\u7684\u65b9\u6cd5",children:"\u89e3\u51b3\u5f15\u7528\u5931\u6548\u7684\u65b9\u6cd5"}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u5148\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"innerHTML"})," \u4fee\u6539\u5185\u5bb9\uff0c\u7136\u540e\u91cd\u65b0\u83b7\u53d6\u5143\u7d20\u5f15\u7528\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const wrapperElement = document.getElementsByClassName('wrapper')[0];\nwrapperElement.innerHTML += '<h1>World</h1>';\n\nconst textElement = document.getElementsByTagName('span')[0];\ntextElement.style.color = 'red'; // OK\n"})}),"\n",(0,c.jsx)(n.h2,{id:"elementouterhtml",children:"element.outerHTML"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0e ",(0,c.jsx)(n.code,{children:"innerHTML"})," \u7c7b\u4f3c\uff0c",(0,c.jsx)(n.code,{children:"outerHTML"})," \u53ef\u4ee5\u66ff\u6362\u5143\u7d20\u672c\u8eab\u53ca\u5176\u6240\u6709\u5b50\u8282\u70b9\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"wrapperElement.outerHTML = '<div>Replaced</div>';\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u8bbe\u7f6e-innerhtml-\u7684\u539f\u7406",children:"\u8bbe\u7f6e innerHTML \u7684\u539f\u7406"}),"\n",(0,c.jsxs)(n.p,{children:["\u6267\u884c ",(0,c.jsx)(n.code,{children:"element.innerHTML = '<h1>title</h1>'"})," \u65f6\uff0c\u5927\u81f4\u7ecf\u5386\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6d4f\u89c8\u5668\u89e3\u6790 ",(0,c.jsx)(n.code,{children:"'<h1>title</h1>'"})," \u5b57\u7b26\u4e32\u4e3a HTML \u6587\u6863\u7ed3\u6784\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"DocumentFragment"})," \u5c06\u89e3\u6790\u540e\u7684 HTML \u8f6c\u6362\u4e3a DOM \u8282\u70b9\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u66ff\u6362\u5143\u7d20\u539f\u6709\u7684\u6240\u6709\u5b50\u8282\u70b9\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e\u6d89\u53ca HTML \u89e3\u6790\u548c\u5927\u91cf DOM \u64cd\u4f5c\uff0c",(0,c.jsx)(n.code,{children:"innerHTML"})," \u7684\u6267\u884c\u901f\u5ea6\u8f83\u6162\uff0c\u5e94\u8c28\u614e\u4f7f\u7528\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5b89\u5168\u95ee\u9898",children:"\u5b89\u5168\u95ee\u9898"}),"\n",(0,c.jsxs)(n.p,{children:["\u73b0\u4ee3\u6d4f\u89c8\u5668\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u4f1a\u963b\u6b62\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"innerHTML"})," \u63d2\u5165\u7684 ",(0,c.jsx)(n.code,{children:"<script>"})," \u6807\u7b7e\u6267\u884c\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const content = '123';\nwrapperElement.innerHTML = '<script>alert(\"Hi\")<\/script>';\nwrapperElement.innerHTML = content; // \u4e0d\u4f1a\u5f39\u51fa alert\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7136\u800c\uff0c\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u63d2\u5165\u7684\u6076\u610f\u4ee3\u7801\u4ecd\u53ef\u80fd\u5e26\u6765\u5b89\u5168\u9690\u60a3\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const content = '<img src=\"x\" onerror=\"alert(\\'Hacked!\\')\" />';\nwrapperElement.innerHTML = content; // \u4f1a\u6267\u884c alert\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u907f\u514d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"innerHTML"})," \u63d2\u5165\u4e0d\u53ef\u4fe1\u7684\u5185\u5bb9\uff0c\u4ee5\u9632\u8303 XSS \u653b\u51fb\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528\u5efa\u8bae",children:"\u4f7f\u7528\u5efa\u8bae"}),"\n",(0,c.jsxs)(n.p,{children:["\u63d2\u5165\u7eaf\u6587\u672c\u5185\u5bb9\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"Node.textContent"})," \u4ee3\u66ff ",(0,c.jsx)(n.code,{children:"innerHTML"}),"\u3002",(0,c.jsx)(n.code,{children:"textContent"})," \u4ec5\u63d2\u5165\u6587\u672c\u5185\u5bb9\uff0c\u4e0d\u89e3\u6790 HTML \u6807\u7b7e\uff0c\u6267\u884c\u6548\u7387\u66f4\u9ad8\uff0c\u4e14\u66f4\u5b89\u5168\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"wrapperElement.textContent = 'Hello <b>World</b>!';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u9700\u8981\u52a8\u6001\u521b\u5efa DOM \u5143\u7d20\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"document.createElement"})," \u7b49\u5e95\u5c42 API \u4ee3\u66ff\u5b57\u7b26\u4e32\u62fc\u63a5\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const divElement = document.createElement('div');\ndivElement.innerHTML = '<h1>Hello World</h1>';\ndocument.body.appendChild(divElement);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"htmlelementinnertext",children:"HTMLElement.innerText"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"innerText"})," \u7528\u4e8e\u8bbe\u7f6e\u6216\u83b7\u53d6\u5143\u7d20\u7684\u6e32\u67d3\u6587\u672c\u5185\u5bb9\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u4e0e-textcontent-\u7684\u533a\u522b",children:"\u4e0e textContent \u7684\u533a\u522b"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"textContent"})," \u83b7\u53d6\u5143\u7d20\u7684\u6240\u6709\u6587\u672c\u5185\u5bb9\uff0c\u5305\u62ec ",(0,c.jsx)(n.code,{children:"<script>"}),"\u3001",(0,c.jsx)(n.code,{children:"<style>"})," \u7b49\u7279\u6b8a\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"innerText"})," \u4ec5\u83b7\u53d6\u7528\u6237\u53ef\u89c1\u7684\u5185\u5bb9\uff0c\u53d7 CSS \u6837\u5f0f\u5f71\u54cd\u3002\u6b64\u5916\uff0c\u8bfb\u53d6 ",(0,c.jsx)(n.code,{children:"innerText"})," \u65f6\uff0c\u6d4f\u89c8\u5668\u9700\u91cd\u65b0\u8ba1\u7b97\u6e32\u67d3\u7ed3\u679c\uff0c\u6027\u80fd\u8f83\u5dee\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<div class="wrapper">\n  <h1>\u6807\u9898</h1>\n  <p class="content">\n    <style>\n      .content {\n        color: orange;\n      }\n    </style>\n    \u53ef\u89c1\u5185\u5bb9\n    <br />\n    \u53ef\u89c1\u5185\u5bb9\n    <span style="display: none;">\u4e0d\u53ef\u89c1\u5185\u5bb9</span>\n  </p>\n</div>\n\n<script>\n  const wrapper = document.querySelector(\'.wrapper\');\n  console.log(wrapper.innerText);\n  // \u8f93\u51fa:\n  // \u6807\u9898\n  // \u53ef\u89c1\u5185\u5bb9\n  // \u53ef\u89c1\u5185\u5bb9\n\n  console.log(wrapper.textContent);\n  // \u8f93\u51fa:\n  // \u6807\u9898\n  //\n  //   .content { color: orange; }\n  //\n  //   \u53ef\u89c1\u5185\u5bb9\n  //\n  //   \u53ef\u89c1\u5185\u5bb9\n  //   \u4e0d\u53ef\u89c1\u5185\u5bb9\n<\/script>\n'})})]})}function A(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},64569:(e,n,r)=>{r.d(n,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(96540);const c={},l=t.createContext(c);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);