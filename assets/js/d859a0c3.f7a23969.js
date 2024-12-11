"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[97748],{11113:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Backend/Python/\u57fa\u7840/\u63a8\u5bfc\u5f0f","title":"Python \u63a8\u5bfc\u5f0f\u6df1\u5165\u7406\u89e3","description":"\u5217\u8868\u63a8\u5bfc\u5f0f","source":"@site/docs/Backend/Python/\u57fa\u7840/080-\u63a8\u5bfc\u5f0f.md","sourceDirName":"Backend/Python/\u57fa\u7840","slug":"/Backend/Python/\u57fa\u7840/\u63a8\u5bfc\u5f0f","permalink":"/docs-hub/Backend/Python/\u57fa\u7840/\u63a8\u5bfc\u5f0f","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Python/\u57fa\u7840/080-\u63a8\u5bfc\u5f0f.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":80,"frontMatter":{},"sidebar":"pythonSidebar","previous":{"title":"Python \u8fd0\u7b97\u7b26\u6df1\u5165\u7406\u89e3","permalink":"/docs-hub/Backend/Python/\u57fa\u7840/\u8fd0\u7b97\u7b26"},"next":{"title":"Python \u51fd\u6570\u5b9a\u4e49\u4e0e\u53c2\u6570\u8be6\u89e3","permalink":"/docs-hub/Backend/Python/\u57fa\u7840/\u51fd\u6570\u5b9a\u4e49\u4e0e\u53c2\u6570\u8be6\u89e3"}}');var s=t(74848),d=t(28453);const i={},c="Python \u63a8\u5bfc\u5f0f\u6df1\u5165\u7406\u89e3",l={},a=[{value:"\u5217\u8868\u63a8\u5bfc\u5f0f",id:"\u5217\u8868\u63a8\u5bfc\u5f0f",level:2},{value:"\u5b57\u5178\u63a8\u5bfc\u5f0f",id:"\u5b57\u5178\u63a8\u5bfc\u5f0f",level:2},{value:"\u96c6\u5408\u63a8\u5bfc\u5f0f",id:"\u96c6\u5408\u63a8\u5bfc\u5f0f",level:2},{value:"\u751f\u6210\u5668\u8868\u8fbe\u5f0f",id:"\u751f\u6210\u5668\u8868\u8fbe\u5f0f",level:2},{value:"\u63a8\u5bfc\u5f0f\u7684\u9ad8\u7ea7\u7528\u6cd5",id:"\u63a8\u5bfc\u5f0f\u7684\u9ad8\u7ea7\u7528\u6cd5",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"python-\u63a8\u5bfc\u5f0f\u6df1\u5165\u7406\u89e3",children:"Python \u63a8\u5bfc\u5f0f\u6df1\u5165\u7406\u89e3"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5217\u8868\u63a8\u5bfc\u5f0f",children:"\u5217\u8868\u63a8\u5bfc\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f7f\u7528\u5217\u8868\u63a8\u5bfc\u5f0f\uff0c\u4ece\u53ef\u8fed\u4ee3\u5bf9\u8c61\u4e2d\u5feb\u901f\u521b\u5efa\u5217\u8868\uff0c\u5e76\u8ba9\u4ee3\u7801\u5728\u903b\u8f91\u6e05\u6670\u7684\u540c\u65f6\u63d0\u5347\u53ef\u8bfb\u6027\u548c\u6027\u80fd\u3002\u9762\u5bf9\u6570\u636e\u6e05\u6d17\u4e0e\u8f6c\u6362\u7b49\u573a\u666f\u65f6\uff0c\u6211\u503e\u5411\u4f7f\u7528\u5217\u8868\u63a8\u5bfc\u5f0f\u6765\u51cf\u5c11\u4e2d\u95f4\u53d8\u91cf\uff0c\u63d0\u5347\u5904\u7406\u6548\u7387\u3002\u4e3a\u63d0\u5347\u4ee3\u7801\u8d28\u91cf\uff0c\u6211\u901a\u5e38\u4f1a\u5728\u63a8\u5bfc\u5f0f\u4e2d\u4e3a\u53d8\u91cf\u547d\u540d\u4e3a\u66f4\u5177\u8bed\u4e49\u5316\u7684\u540d\u79f0\uff0c\u4f8b\u5982\u5c06\u901a\u7528\u7684 x \u6539\u4e3a num \u4ee5\u589e\u5f3a\u53ef\u8bfb\u6027\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# \u521b\u5efa\u5e73\u65b9\u6570\u5217\u8868\nsquares = [num**2 for num in range(10)]\nprint(squares)  # \u7ed3\u679c\u4e3a [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\n# \u5e26\u6761\u4ef6\u8fc7\u6ee4\u7684\u5217\u8868\u63a8\u5bfc\neven_squares = [num**2 for num in range(10) if num % 2 == 0]\nprint(even_squares)  # \u7ed3\u679c\u4e3a [0, 4, 16, 36, 64]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5b57\u5178\u63a8\u5bfc\u5f0f",children:"\u5b57\u5178\u63a8\u5bfc\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5728\u6784\u5efa\u67d0\u4e9b\u6620\u5c04\u5173\u7cfb\u65f6\uff0c\u4f1a\u4f7f\u7528\u5b57\u5178\u63a8\u5bfc\u5f0f\u4ece\u5217\u8868\u6216\u5176\u4ed6\u53ef\u8fed\u4ee3\u5bf9\u8c61\u76f4\u63a5\u521b\u5efa\u5b57\u5178\uff0c\u907f\u514d\u4f20\u7edf\u5faa\u73af\u8d4b\u503c\u7684\u5197\u4f59\u4ee3\u7801\u3002\u901a\u8fc7\u5b57\u5178\u63a8\u5bfc\u5f0f\u53ef\u4ee5\u5728\u4e00\u884c\u5185\u5b8c\u6210\u6570\u636e\u53d8\u6362\u4e0e\u7ed3\u6784\u6784\u5efa\uff0c\u8ba9\u4e1a\u52a1\u903b\u8f91\u66f4\u76f4\u89c2\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# \u6570\u5b57\u5230\u5e73\u65b9\u503c\u7684\u6620\u5c04\nsquare_dict = {num: num**2 for num in (2, 4, 6)}\nprint(square_dict)  # \u7ed3\u679c\u4e3a {2: 4, 4: 16, 6: 36}\n\n# \u5e26\u6761\u4ef6\u7684\u5b57\u5178\u63a8\u5bfc\neven_square_dict = {num: num**2 for num in range(6) if num % 2 == 0}\nprint(even_square_dict)  # \u7ed3\u679c\u4e3a {0: 0, 2: 4, 4: 16}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u96c6\u5408\u63a8\u5bfc\u5f0f",children:"\u96c6\u5408\u63a8\u5bfc\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u96c6\u5408\u63a8\u5bfc\u5f0f\u8ba9\u6211\u80fd\u591f\u5feb\u901f\u4ece\u53ef\u8fed\u4ee3\u5bf9\u8c61\u4e2d\u521b\u5efa\u53bb\u91cd\u7684\u96c6\u5408\u3002\u5f53\u6211\u9700\u8981\u5bf9\u6570\u636e\u53bb\u91cd\u5e76\u8ba1\u7b97\u67d0\u4e9b\u7279\u5b9a\u5c5e\u6027\u65f6\uff0c\u96c6\u5408\u63a8\u5bfc\u5f0f\u662f\u4e00\u79cd\u7b80\u6d01\u7684\u5199\u6cd5\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# \u521b\u5efa\u5e73\u65b9\u6570\u96c6\u5408\nnumber_list = [1, 2, 3, 4, 2]\nsquares_set = {num**2 for num in number_list}\nprint(squares_set)  # \u7ed3\u679c\u4e3a {16, 1, 4, 9}\n\n# \u5e26\u6761\u4ef6\u7684\u96c6\u5408\u63a8\u5bfc\neven_squares_set = {num**2 for num in range(6) if num % 2 == 0}\nprint(even_squares_set)  # \u7ed3\u679c\u4e3a {0, 16, 4}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u751f\u6210\u5668\u8868\u8fbe\u5f0f",children:"\u751f\u6210\u5668\u8868\u8fbe\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5728\u9762\u5bf9\u6d77\u91cf\u6570\u636e\u5904\u7406\u65f6\u4f1a\u66f4\u503e\u5411\u4f7f\u7528\u751f\u6210\u5668\u8868\u8fbe\u5f0f\uff0c\u5b83\u4e0d\u4f1a\u4e00\u6b21\u6027\u521b\u5efa\u5b8c\u6574\u7684\u6570\u636e\u7ed3\u6784\uff0c\u800c\u662f\u5728\u8fed\u4ee3\u8fc7\u7a0b\u4e2d\u9010\u6b65\u751f\u6210\u6240\u9700\u6570\u636e\u3002\u8fd9\u79cd\u60f0\u6027\u6c42\u503c\u65b9\u5f0f\u8ba9\u5185\u5b58\u4f7f\u7528\u66f4\u52a0\u9ad8\u6548\u3002\u5f53\u9700\u8981\u5c06\u751f\u6210\u7ed3\u679c\u8f6c\u6362\u4e3a\u5143\u7ec4\u6216\u5904\u7406\u6d41\u5f0f\u6570\u636e\u65f6\uff0c\u751f\u6210\u5668\u8868\u8fbe\u5f0f\u662f\u66f4\u5408\u9002\u7684\u9009\u62e9\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# \u521b\u5efa\u751f\u6210\u5668\u8868\u8fbe\u5f0f\nsquares_gen = (num**2 for num in range(10))\nprint(type(squares_gen))  # \u7ed3\u679c\u4e3a <class 'generator'>\n\n# \u8f6c\u6362\u4e3a\u5143\u7ec4\nsquares_tuple = tuple(squares_gen)\nprint(squares_tuple)  # \u7ed3\u679c\u4e3a (0, 1, 4, 9, 16, 25, 36, 49, 64, 81)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u63a8\u5bfc\u5f0f\u7684\u9ad8\u7ea7\u7528\u6cd5",children:"\u63a8\u5bfc\u5f0f\u7684\u9ad8\u7ea7\u7528\u6cd5"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6211\u4e5f\u4f1a\u5c06\u63a8\u5bfc\u5f0f\u5e94\u7528\u4e8e\u66f4\u4e3a\u590d\u6742\u7684\u573a\u666f\u3002\u4f8b\u5982\u9488\u5bf9\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u6241\u5e73\u5316\u5904\u7406\uff0c\u6216\u591a\u91cd\u6761\u4ef6\u8fc7\u6ee4\u7684\u573a\u5408\u3002\u6b64\u65f6\u6211\u4f1a\u7279\u522b\u5173\u6ce8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\uff0c\u5e76\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u9700\u6c42\u51b3\u5b9a\u662f\u5426\u4f7f\u7528\u66f4\u5177\u53ef\u7ef4\u62a4\u6027\u7684\u4f20\u7edf\u5faa\u73af\u7ed3\u6784\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# \u5d4c\u5957\u63a8\u5bfc\u5f0f\u6241\u5e73\u5316\u5904\u7406\u77e9\u9635\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [val for row in matrix for val in row]\nprint(flattened)  # \u7ed3\u679c\u4e3a [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n# \u591a\u6761\u4ef6\u63a8\u5bfc\u5f0f\u8fc7\u6ee4\u6570\u636e\ncomplex_list = [num for num in range(100) if num % 2 == 0 if num % 4 == 0]\nprint(complex_list)  # \u90e8\u5206\u7ed3\u679c\u4e3a [0, 4, 8, 12, ..., 96]\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5b9e\u8df5\u4e2d\uff0c\u6211\u5c3d\u91cf\u4e0d\u5728\u5355\u4e00\u63a8\u5bfc\u5f0f\u4e2d\u5806\u53e0\u8fc7\u591a\u6761\u4ef6\u548c\u903b\u8f91\uff0c\u4e0d\u4ec5\u4e3a\u4e86\u4fdd\u6301\u53ef\u8bfb\u6027\uff0c\u4e5f\u4e3a\u4e86\u964d\u4f4e\u540e\u671f\u7ef4\u62a4\u7684\u6210\u672c\u3002\u9762\u5bf9\u8f83\u4e3a\u590d\u6742\u7684\u573a\u666f\u65f6\uff0c\u6211\u4f1a\u6743\u8861\u662f\u5426\u5e94\u91c7\u7528\u66f4\u6e05\u6670\u7684\u5faa\u73af\u8bed\u53e5\u6216\u51fd\u6570\u6765\u5b9e\u73b0\u903b\u8f91\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u5904\u7406\u5927\u91cf\u6570\u636e\u65f6\uff0c\u6211\u503e\u5411\u4f7f\u7528\u751f\u6210\u5668\u8868\u8fbe\u5f0f\u6765\u51cf\u5c11\u5185\u5b58\u5f00\u9500\u3002\u4f8b\u5982\u5728\u6570\u636e\u6d41\u6216\u6570\u636e\u7ba1\u9053\u4e2d\uff0c\u751f\u6210\u5668\u8868\u8fbe\u5f0f\u53ef\u4ee5\u66f4\u9ad8\u6548\u5730\u5904\u7406\u6570\u636e\u800c\u4e0d\u7528\u4e00\u6b21\u6027\u52a0\u8f7d\u6240\u6709\u7ed3\u679c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u8868\u603b\u7ed3\u4e86\u5404\u79cd\u63a8\u5bfc\u5f0f\u4e0e\u8868\u8fbe\u5f0f\u7684\u9002\u7528\u573a\u666f\u4e0e\u7279\u6027"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u63a8\u5bfc\u65b9\u5f0f"}),(0,s.jsx)(e.th,{children:"\u4f7f\u7528\u573a\u666f"}),(0,s.jsx)(e.th,{children:"\u7279\u70b9"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5217\u8868\u63a8\u5bfc\u5f0f"}),(0,s.jsx)(e.td,{children:"\u5feb\u901f\u521b\u5efa\u5217\u8868\u4e0e\u7b80\u5355\u8fc7\u6ee4"}),(0,s.jsx)(e.td,{children:"\u7b80\u6d01\u76f4\u89c2\u9002\u5408\u4e2d\u5c0f\u6570\u636e\u91cf"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5b57\u5178\u63a8\u5bfc\u5f0f"}),(0,s.jsx)(e.td,{children:"\u521b\u5efa\u952e\u503c\u6620\u5c04"}),(0,s.jsx)(e.td,{children:"\u7075\u6d3b\u6784\u5efa\u590d\u6742\u6620\u5c04\u7ed3\u6784"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u96c6\u5408\u63a8\u5bfc\u5f0f"}),(0,s.jsx)(e.td,{children:"\u53bb\u91cd\u4e0e\u5feb\u901f\u8ba1\u7b97\u72ec\u7acb\u5143\u7d20"}),(0,s.jsx)(e.td,{children:"\u81ea\u52a8\u53bb\u91cd\u4fbf\u4e8e\u7edf\u8ba1\u5206\u6790"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u751f\u6210\u5668\u8868\u8fbe\u5f0f"}),(0,s.jsx)(e.td,{children:"\u60f0\u6027\u6c42\u503c\u5904\u7406\u6d77\u91cf\u6570\u636e"}),(0,s.jsx)(e.td,{children:"\u5185\u5b58\u9ad8\u6548\u9002\u5408\u6d41\u5f0f\u6570\u636e\u5904\u7406"})]})]})]})]})}function o(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var r=t(96540);const s={},d=r.createContext(s);function i(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);