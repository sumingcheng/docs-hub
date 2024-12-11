"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[10928],{64957:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"Frontend/JavaScript/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u51fd\u6570\u7ec4\u5408-\u7ed3\u5408\u5f8b-pointfree","title":"\u51fd\u6570\u7ec4\u5408\u4e0e\u7ed3\u5408\u5f8b","description":"\u51fd\u6570\u7ec4\u5408\u6982\u5ff5","source":"@site/docs/Frontend/JavaScript/\u51fd\u6570\u5f0f\u7f16\u7a0b/50.\u51fd\u6570\u7ec4\u5408-\u7ed3\u5408\u5f8b-pointfree.md","sourceDirName":"Frontend/JavaScript/\u51fd\u6570\u5f0f\u7f16\u7a0b","slug":"/Frontend/JavaScript/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u51fd\u6570\u7ec4\u5408-\u7ed3\u5408\u5f8b-pointfree","permalink":"/docs-hub/Frontend/JavaScript/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u51fd\u6570\u7ec4\u5408-\u7ed3\u5408\u5f8b-pointfree","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/\u51fd\u6570\u5f0f\u7f16\u7a0b/50.\u51fd\u6570\u7ec4\u5408-\u7ed3\u5408\u5f8b-pointfree.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":50,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u51fd\u6570\u7684\u5143\u4e0e\u504f\u51fd\u6570\u5e94\u7528","permalink":"/docs-hub/Frontend/JavaScript/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u504f\u51fd\u6570-\u504f\u51fd\u6570\u4e0e\u67ef\u91cc\u51fd\u6570\u7684\u533a\u522b-\u60f0\u6027\u51fd\u6570"},"next":{"title":"\u9632\u6296\u4e0e\u8282\u6d41\u7684\u533a\u522b\u4e0e\u5e94\u7528","permalink":"/docs-hub/Frontend/JavaScript/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u51fd\u6570\u9632\u6296-\u51fd\u6570\u8282\u6d41-\u9632\u6296\u548c\u8282\u6d41\u7684\u5e94\u7528"}}');var c=r(74848),s=r(28453);const t={},i="\u51fd\u6570\u7ec4\u5408\u4e0e\u7ed3\u5408\u5f8b",l={},d=[{value:"\u51fd\u6570\u7ec4\u5408\u6982\u5ff5",id:"\u51fd\u6570\u7ec4\u5408\u6982\u5ff5",level:2},{value:"\u51fd\u6570\u7684\u5de6\u503e\u7279\u6027",id:"\u51fd\u6570\u7684\u5de6\u503e\u7279\u6027",level:2},{value:"\u4f7f\u7528 while \u5faa\u73af\u5b9e\u73b0\u51fd\u6570\u7ec4\u5408",id:"\u4f7f\u7528-while-\u5faa\u73af\u5b9e\u73b0\u51fd\u6570\u7ec4\u5408",level:2},{value:"\u4f7f\u7528 reduceRight \u5b9e\u73b0\u51fd\u6570\u7ec4\u5408",id:"\u4f7f\u7528-reduceright-\u5b9e\u73b0\u51fd\u6570\u7ec4\u5408",level:2},{value:"\u7ed3\u5408\u5f8b\u7279\u6027",id:"\u7ed3\u5408\u5f8b\u7279\u6027",level:2},{value:"Pointfree \u98ce\u683c",id:"pointfree-\u98ce\u683c",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u51fd\u6570\u7ec4\u5408\u4e0e\u7ed3\u5408\u5f8b",children:"\u51fd\u6570\u7ec4\u5408\u4e0e\u7ed3\u5408\u5f8b"})}),"\n",(0,c.jsx)(n.h2,{id:"\u51fd\u6570\u7ec4\u5408\u6982\u5ff5",children:"\u51fd\u6570\u7ec4\u5408\u6982\u5ff5"}),"\n",(0,c.jsx)(n.p,{children:"\u51fd\u6570\u7ec4\u5408(Function Composition)\u4e5f\u79f0\u4e3a\u9972\u517b\u51fd\u6570(compose),\u6307\u7684\u662f\u5c06\u82e5\u5e72\u4e2a\u7eaf\u51fd\u6570\u3001\u504f\u51fd\u6570\u6216\u67ef\u91cc\u5316\u51fd\u6570\u7ec4\u5408\u6210\u4e00\u4e2a\u65b0\u7684\u51fd\u6570,\u5f62\u6210\u6570\u636e\u4f20\u9012\u5e76\u5b9e\u73b0\u6709\u5e8f\u6267\u884c\u7684\u6548\u679c\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u51fd\u6570\u7684\u5de6\u503e\u7279\u6027",children:"\u51fd\u6570\u7684\u5de6\u503e\u7279\u6027"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u51fd\u6570\u7ec4\u5408\u4e2d,\u5185\u90e8\u53c2\u6570\u901a\u5e38\u662f\u4e00\u4e2a\u6267\u884c\u51fd\u6570,\u5e76\u6309\u7167\u81ea\u53f3\u5411\u5de6\u7684\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u51fd\u6570\u5de6\u503e\u7684\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"function upperCase(str) {\n  return str.toUpperCase();\n}\n\nfunction addExclamation(str) {\n  return str + '!';\n}\n\nfunction compose(f, g) {\n  return function (x) {\n    return f(g(x)); // \u5de6\u503e\u51fd\u6570\n  };\n}\n\nvar composed = compose(upperCase, addExclamation);\nconsole.log(composed('hello')); // \u8f93\u51fa: HELLO!\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d,",(0,c.jsx)(n.code,{children:"compose"}),"\u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u51fd\u6570",(0,c.jsx)(n.code,{children:"f"}),"\u548c",(0,c.jsx)(n.code,{children:"g"}),"\u4f5c\u4e3a\u53c2\u6570,\u8fd4\u56de\u4e00\u4e2a\u65b0\u51fd\u6570\u3002\u65b0\u51fd\u6570\u5185\u90e8\u5148\u6267\u884c",(0,c.jsx)(n.code,{children:"g(x)"}),",\u7136\u540e\u5c06\u7ed3\u679c\u4f20\u9012\u7ed9",(0,c.jsx)(n.code,{children:"f"}),"\u6267\u884c,\u5b9e\u73b0\u4e86\u51fd\u6570\u7684\u5de6\u503e\u7279\u6027\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528-while-\u5faa\u73af\u5b9e\u73b0\u51fd\u6570\u7ec4\u5408",children:"\u4f7f\u7528 while \u5faa\u73af\u5b9e\u73b0\u51fd\u6570\u7ec4\u5408"}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 while \u5faa\u73af\u6765\u5b9e\u73b0\u51fd\u6570\u7ec4\u5408,\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"function compose() {\n  var args = Array.prototype.slice.call(arguments);\n  var length = args.length;\n\n  return function (x) {\n    var result = args[length - 1](x);\n\n    while (length--) {\n      result = args[length](result);\n    }\n\n    return result;\n  };\n}\n\nvar composed = compose(upperCase, addExclamation);\nconsole.log(composed('hello')); // \u8f93\u51fa: HELLO!\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u5b9e\u73b0\u4e2d,",(0,c.jsx)(n.code,{children:"compose"}),"\u51fd\u6570\u63a5\u53d7\u4efb\u610f\u6570\u91cf\u7684\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570,\u8fd4\u56de\u4e00\u4e2a\u65b0\u51fd\u6570\u3002\u65b0\u51fd\u6570\u5185\u90e8\u4f7f\u7528 while \u5faa\u73af\u4ece\u53f3\u5230\u5de6\u4f9d\u6b21\u6267\u884c\u4f20\u5165\u7684\u51fd\u6570,\u5e76\u5c06\u7ed3\u679c\u4f20\u9012\u7ed9\u4e0b\u4e00\u4e2a\u51fd\u6570,\u6700\u7ec8\u8fd4\u56de\u7ec4\u5408\u540e\u7684\u7ed3\u679c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528-reduceright-\u5b9e\u73b0\u51fd\u6570\u7ec4\u5408",children:"\u4f7f\u7528 reduceRight \u5b9e\u73b0\u51fd\u6570\u7ec4\u5408"}),"\n",(0,c.jsxs)(n.p,{children:["\u9664\u4e86 while \u5faa\u73af,\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"reduceRight"}),"\u65b9\u6cd5\u6765\u5b9e\u73b0\u51fd\u6570\u7ec4\u5408,\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"function compose() {\n  var args = Array.prototype.slice.call(arguments);\n\n  return function (x) {\n    return args.reduceRight(function (result, func) {\n      return func(result);\n    }, x);\n  };\n}\n\nvar composed = compose(upperCase, addExclamation);\nconsole.log(composed('hello')); // \u8f93\u51fa: HELLO!\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u5b9e\u73b0\u4e2d,",(0,c.jsx)(n.code,{children:"compose"}),"\u51fd\u6570\u5185\u90e8\u4f7f\u7528",(0,c.jsx)(n.code,{children:"reduceRight"}),"\u65b9\u6cd5\u4ece\u53f3\u5230\u5de6\u4f9d\u6b21\u6267\u884c\u4f20\u5165\u7684\u51fd\u6570,\u5e76\u5c06\u7ed3\u679c\u4f20\u9012\u7ed9\u4e0b\u4e00\u4e2a\u51fd\u6570,\u6700\u7ec8\u8fd4\u56de\u7ec4\u5408\u540e\u7684\u7ed3\u679c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7ed3\u5408\u5f8b\u7279\u6027",children:"\u7ed3\u5408\u5f8b\u7279\u6027"}),"\n",(0,c.jsx)(n.p,{children:"\u51fd\u6570\u7ec4\u5408\u6ee1\u8db3\u7ed3\u5408\u5f8b(Associativity)\u7279\u6027,\u5373\u5728\u7ec4\u5408\u51fd\u6570\u7684\u53c2\u6570\u65f6,\u65e0\u8bba\u5982\u4f55\u5206\u7ec4\u6216\u7ed3\u5408,\u6700\u7ec8\u7684\u7ed3\u679c\u90fd\u662f\u76f8\u540c\u7684\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u7ed3\u5408\u5f8b\u7684\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"var composed1 = compose(upperCase, addExclamation);\nvar composed2 = compose(compose(upperCase), addExclamation);\n\nconsole.log(composed1('hello')); // \u8f93\u51fa: HELLO!\nconsole.log(composed2('hello')); // \u8f93\u51fa: HELLO!\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d,\u65e0\u8bba\u662f\u5148\u7ec4\u5408",(0,c.jsx)(n.code,{children:"upperCase"}),"\u548c",(0,c.jsx)(n.code,{children:"addExclamation"}),",\u8fd8\u662f\u5148\u7ec4\u5408",(0,c.jsx)(n.code,{children:"upperCase"}),"\u518d\u4e0e",(0,c.jsx)(n.code,{children:"addExclamation"}),"\u7ec4\u5408,\u6700\u7ec8\u5f97\u5230\u7684\u7ed3\u679c\u90fd\u662f\u76f8\u540c\u7684\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"pointfree-\u98ce\u683c",children:"Pointfree \u98ce\u683c"}),"\n",(0,c.jsx)(n.p,{children:"Pointfree \u662f\u4e00\u79cd\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u98ce\u683c,\u5b83\u5f3a\u8c03\u4ee5\u4e0b\u4e24\u70b9:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u65e0\u503c\u5f62\u6001:\u907f\u514d\u76f4\u63a5\u64cd\u4f5c\u5177\u4f53\u7684\u503c,\u800c\u662f\u901a\u8fc7\u51fd\u6570\u7ec4\u5408\u6765\u5904\u7406\u6570\u636e\u6d41\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u4e0d\u63d0\u53ca\u6570\u636e",":Pointfree"," \u98ce\u683c\u610f\u5473\u7740\u6c38\u8fdc\u4e0d\u5fc5\u8bf4\u4f60\u7684\u6570\u636e(never having to say your data)\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Pointfree \u98ce\u683c\u53ef\u4ee5\u4f7f\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\u3001\u53ef\u8bfb\u6027\u66f4\u5f3a,\u5e76\u4e14\u66f4\u5bb9\u6613\u8fdb\u884c\u7ec4\u5408\u548c\u590d\u7528\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var o=r(96540);const c={},s=o.createContext(c);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);