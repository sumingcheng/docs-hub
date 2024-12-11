"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[26624],{8289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Web3/IPFS/IPFS-pin-get","title":"IPFS \u4e2d\u7684\u56fa\u5b9a\u548c\u83b7\u53d6\u64cd\u4f5c","description":"IPFS \u4e2d\u7684\\"pin\\"\u548c\\"get\\"\u64cd\u4f5c","source":"@site/docs/Web3/IPFS/4.IPFS-pin-get.md","sourceDirName":"Web3/IPFS","slug":"/Web3/IPFS/IPFS-pin-get","permalink":"/docs-hub/Web3/IPFS/IPFS-pin-get","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Web3/IPFS/4.IPFS-pin-get.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":4,"frontMatter":{},"sidebar":"web3IpfsSidebar","previous":{"title":"IPFS \u547d\u4ee4\u8be6\u89e3","permalink":"/docs-hub/Web3/IPFS/IPFS\u547d\u4ee4"},"next":{"title":"IPFS \u751f\u547d\u5468\u671f\u6307\u5357","permalink":"/docs-hub/Web3/IPFS/IPFS\u751f\u547d\u5468\u671f"}}');var s=t(74848),r=t(28453);const d={},o="IPFS \u4e2d\u7684\u56fa\u5b9a\u548c\u83b7\u53d6\u64cd\u4f5c",c={},l=[{value:"IPFS \u4e2d\u7684&quot;pin&quot;\u548c&quot;get&quot;\u64cd\u4f5c",id:"ipfs-\u4e2d\u7684pin\u548cget\u64cd\u4f5c",level:2},{value:"&quot;Pin&quot; \u64cd\u4f5c",id:"pin-\u64cd\u4f5c",level:3},{value:"&quot;Get&quot; \u64cd\u4f5c",id:"get-\u64cd\u4f5c",level:3},{value:"\u5148&quot;pin&quot;\u540e&quot;get&quot;\u7684\u4f18\u52bf",id:"\u5148pin\u540eget\u7684\u4f18\u52bf",level:2},{value:"\u8865\u5145\u8bf4\u660e",id:"\u8865\u5145\u8bf4\u660e",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ipfs-\u4e2d\u7684\u56fa\u5b9a\u548c\u83b7\u53d6\u64cd\u4f5c",children:"IPFS \u4e2d\u7684\u56fa\u5b9a\u548c\u83b7\u53d6\u64cd\u4f5c"})}),"\n",(0,s.jsx)(n.h2,{id:"ipfs-\u4e2d\u7684pin\u548cget\u64cd\u4f5c",children:'IPFS \u4e2d\u7684"pin"\u548c"get"\u64cd\u4f5c'}),"\n",(0,s.jsx)(n.h3,{id:"pin-\u64cd\u4f5c",children:'"Pin" \u64cd\u4f5c'}),"\n",(0,s.jsx)(n.p,{children:'"Pin"\u64cd\u4f5c\u7528\u4e8e\u5c06\u7279\u5b9a\u6587\u4ef6\u901a\u8fc7\u5176\u5185\u5bb9\u6807\u8bc6\u7b26\uff08CID\uff09\u56fa\u5b9a\u5728\u672c\u5730\u8282\u70b9\u4e0a\uff0c\u786e\u4fdd\u8be5\u6587\u4ef6\u4e0d\u4f1a\u88ab\u5783\u573e\u56de\u6536\u673a\u5236\u5220\u9664\u3002\u8fd9\u610f\u5473\u7740\u5373\u4f7f\u5176\u4ed6\u8282\u70b9\u4e0d\u518d\u5b58\u50a8\u8be5\u6587\u4ef6\uff0c\u60a8\u7684\u672c\u5730\u8282\u70b9\u4ecd\u4f1a\u4fdd\u7559\u4e00\u4efd\u526f\u672c\u3002\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u4fdd\u8bc1\u91cd\u8981\u6216\u5e38\u7528\u7684\u6587\u4ef6\u59cb\u7ec8\u5728\u672c\u5730\u53ef\u7528\uff0c\u63d0\u9ad8\u6587\u4ef6\u7684\u53ef\u8bbf\u95ee\u6027\u548c\u6301\u4e45\u6027\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u8981\u56fa\u5b9a\u4e00\u4e2a\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ipfs pin add QmYourContentIdentifier\n"})}),"\n",(0,s.jsx)(n.h3,{id:"get-\u64cd\u4f5c",children:'"Get" \u64cd\u4f5c'}),"\n",(0,s.jsx)(n.p,{children:'"Get"\u64cd\u4f5c\u7528\u4e8e\u8bf7\u6c42\u5e76\u68c0\u7d22\u7279\u5b9a\u6587\u4ef6\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\u4e8e\u672c\u5730\u8282\u70b9\uff0c"get"\u64cd\u4f5c\u4f1a\u76f4\u63a5\u4ece\u672c\u5730\u5b58\u50a8\u4e2d\u83b7\u53d6\uff1b\u5982\u679c\u4e0d\u5b58\u5728\uff0cIPFS \u4f1a\u901a\u8fc7\u7f51\u7edc\u4ece\u5176\u4ed6\u8282\u70b9\u83b7\u53d6\u8be5\u6587\u4ef6\u3002\u4ece\u672c\u5730\u83b7\u53d6\u6587\u4ef6\u901a\u5e38\u6bd4\u901a\u8fc7\u7f51\u7edc\u83b7\u53d6\u66f4\u5feb\uff0c\u56e0\u4e3a\u907f\u514d\u4e86\u7f51\u7edc\u5ef6\u8fdf\u548c\u6570\u636e\u4f20\u8f93\u65f6\u95f4\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u8981\u83b7\u53d6\u4e00\u4e2a\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ipfs get QmYourContentIdentifier\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5148pin\u540eget\u7684\u4f18\u52bf",children:'\u5148"pin"\u540e"get"\u7684\u4f18\u52bf'}),"\n",(0,s.jsx)(n.p,{children:'\u901a\u8fc7\u5148"pin"\u6587\u4ef6\uff0c\u786e\u4fdd\u8be5\u6587\u4ef6\u5df2\u7ecf\u5b58\u50a8\u5728\u672c\u5730\u8282\u70b9\uff0c\u8fd9\u610f\u5473\u7740\u5728\u6267\u884c"get"\u64cd\u4f5c\u65f6\uff0c\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\u4e8e\u672c\u5730\uff0c\u53ef\u4ee5\u7acb\u5373\u8bbf\u95ee\u3002\u7531\u4e8e\u6587\u4ef6\u5df2\u5728\u672c\u5730\uff0c"get"\u64cd\u4f5c\u65e0\u9700\u901a\u8fc7\u7f51\u7edc\u8bf7\u6c42\u5176\u4ed6\u8282\u70b9\uff0c\u4ece\u800c\u663e\u8457\u51cf\u5c11\u4e86\u83b7\u53d6\u6587\u4ef6\u6240\u9700\u7684\u65f6\u95f4\u3002\u6b64\u5916\uff0c\u5373\u4f7f\u7f51\u7edc\u72b6\u51b5\u4e0d\u4f73\u6216\u5176\u4ed6\u8282\u70b9\u4e0b\u7ebf\uff0c\u60a8\u4ecd\u53ef\u4ee5\u901a\u8fc7\u672c\u5730\u526f\u672c\u8bbf\u95ee\u5df2\u56fa\u5b9a\u7684\u6587\u4ef6\uff0c\u63d0\u9ad8\u4e86\u6570\u636e\u7684\u53ef\u7528\u6027\u548c\u53ef\u9760\u6027\u3002'}),"\n",(0,s.jsx)(n.h2,{id:"\u8865\u5145\u8bf4\u660e",children:"\u8865\u5145\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:'IPFS \u672c\u8eab\u5177\u6709\u7f13\u5b58\u673a\u5236\uff0c\u5373\u4f7f\u672a\u663e\u5f0f\u5730"pin"\u6587\u4ef6\uff0c\u6700\u8fd1\u8bbf\u95ee\u8fc7\u7684\u6587\u4ef6\u53ef\u80fd\u4f1a\u6682\u65f6\u4fdd\u5b58\u5728\u672c\u5730\u3002\u7136\u800c\uff0c\u8fd9\u4e9b\u7f13\u5b58\u6587\u4ef6\u53ef\u80fd\u4f1a\u56e0\u7a7a\u95f4\u9650\u5236\u6216\u5176\u4ed6\u56e0\u7d20\u800c\u88ab\u6e05\u9664\u3002\u56e0\u6b64\uff0c"pin"\u64cd\u4f5c\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u6301\u4e45\u548c\u53ef\u9760\u7684\u65b9\u5f0f\u6765\u786e\u4fdd\u6587\u4ef6\u7684\u672c\u5730\u53ef\u7528\u6027\u3002'}),"\n",(0,s.jsx)(n.p,{children:'\u5728\u4f7f\u7528\u573a\u666f\u65b9\u9762\uff0c\u5bf9\u4e8e\u9700\u8981\u9891\u7e41\u8bbf\u95ee\u6216\u5173\u952e\u7684\u91cd\u8981\u6587\u4ef6\uff0c\u5efa\u8bae\u5148"pin"\u4ee5\u786e\u4fdd\u9ad8\u6548\u548c\u53ef\u9760\u7684\u8bbf\u95ee\u3002\u800c\u5bf9\u4e8e\u4e34\u65f6\u6216\u4e0d\u5e38\u7528\u7684\u6587\u4ef6\uff0c\u76f4\u63a5"get"\u53ef\u80fd\u66f4\u4e3a\u5408\u9002\u3002'}),"\n",(0,s.jsx)(n.h1,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsx)(n.p,{children:'\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\uff0c\u5408\u7406\u89c4\u5212\u54ea\u4e9b\u6587\u4ef6\u9700\u8981\u56fa\u5b9a\u662f\u5173\u952e\u3002\u5bf9\u4e8e\u56e2\u961f\u534f\u4f5c\u9879\u76ee\u4e2d\u5e38\u7528\u7684\u8d44\u6e90\u6587\u4ef6\uff0c\u5e94\u4f18\u5148\u8fdb\u884c"pin"\u64cd\u4f5c\uff0c\u4ee5\u786e\u4fdd\u6240\u6709\u56e2\u961f\u6210\u5458\u90fd\u80fd\u5feb\u901f\u8bbf\u95ee\u3002\u6b64\u5916\uff0c\u5b9a\u671f\u68c0\u67e5\u548c\u7ba1\u7406\u56fa\u5b9a\u7684\u6587\u4ef6\u5217\u8868\uff0c\u53ef\u4ee5\u6709\u6548\u5229\u7528\u672c\u5730\u5b58\u50a8\u7a7a\u95f4\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8d44\u6e90\u5360\u7528\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5b9a\u671f\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5f53\u524d\u56fa\u5b9a\u7684\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ipfs pin ls\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636e\u9700\u8981\uff0c\u79fb\u9664\u4e0d\u518d\u9700\u8981\u56fa\u5b9a\u7684\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ipfs pin rm QmYourContentIdentifier\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u53ef\u4ee5\u4fdd\u6301\u672c\u5730\u5b58\u50a8\u7684\u6574\u6d01\u548c\u9ad8\u6548\uff0c\u786e\u4fdd\u5173\u952e\u6570\u636e\u59cb\u7ec8\u53ef\u7528\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);