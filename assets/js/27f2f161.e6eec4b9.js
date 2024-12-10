"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[36622],{49319:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"Network/AJAX/\u5b9e\u6218-AJAX\u4e4b-\u5927\u9644\u4ef6\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd-","title":"AJAX \u5b9e\u6218\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd","description":"\u4f7f\u7528 AJAX \u6280\u672f\u5b9e\u73b0\u5927\u9644\u4ef6\u6587\u4ef6\u7684\u4e0a\u4f20\u529f\u80fd,\u5305\u62ec\u5355\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20\u3001\u591a\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20\u4ee5\u53ca\u4f7f\u7528 FormData \u5f02\u6b65\u4e0a\u4f20\u7b49\u65b9\u5f0f\u3002","source":"@site/docs/Network/AJAX/90.\u5b9e\u6218-AJAX\u4e4b-\u5927\u9644\u4ef6\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd-.md","sourceDirName":"Network/AJAX","slug":"/Network/AJAX/\u5b9e\u6218-AJAX\u4e4b-\u5927\u9644\u4ef6\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd-","permalink":"/docs-hub/docs/Network/AJAX/\u5b9e\u6218-AJAX\u4e4b-\u5927\u9644\u4ef6\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd-","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Network/AJAX/90.\u5b9e\u6218-AJAX\u4e4b-\u5927\u9644\u4ef6\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd-.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":90,"frontMatter":{},"sidebar":"networkAjaxSidebar","previous":{"title":"Cookie \u589e\u5220\u6539\u67e5\u4e0e\u7528\u6237\u8ffd\u8e2a","permalink":"/docs-hub/docs/Network/AJAX/cookie\u589e\u5220\u6539\u67e5-\u7528\u6237\u8ffd\u8e2a"}}');var o=t(74848),r=t(28453);const s={},i="AJAX \u5b9e\u6218\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd",l={},d=[{value:"\u6587\u4ef6\u4e0a\u4f20\u7684\u683c\u5f0f",id:"\u6587\u4ef6\u4e0a\u4f20\u7684\u683c\u5f0f",level:2},{value:"\u5355\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20",id:"\u5355\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20",level:3},{value:"\u591a\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20",id:"\u591a\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20",level:3},{value:"\u4f7f\u7528 FormData \u4e0a\u4f20\u6587\u4ef6",id:"\u4f7f\u7528-formdata-\u4e0a\u4f20\u6587\u4ef6",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"ajax-\u5b9e\u6218\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd",children:"AJAX \u5b9e\u6218\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd"})}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528 AJAX \u6280\u672f\u5b9e\u73b0\u5927\u9644\u4ef6\u6587\u4ef6\u7684\u4e0a\u4f20\u529f\u80fd,\u5305\u62ec\u5355\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20\u3001\u591a\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20\u4ee5\u53ca\u4f7f\u7528 FormData \u5f02\u6b65\u4e0a\u4f20\u7b49\u65b9\u5f0f\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u6587\u4ef6\u4e0a\u4f20\u7684\u683c\u5f0f",children:"\u6587\u4ef6\u4e0a\u4f20\u7684\u683c\u5f0f"}),"\n",(0,o.jsx)(n.h3,{id:"\u5355\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20",children:"\u5355\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20"}),"\n",(0,o.jsxs)(n.p,{children:["\u8981\u5b9e\u73b0\u5355\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20,\u9700\u8981\u4f7f\u7528",(0,o.jsx)(n.code,{children:"multipart/form-data"}),"\u4f5c\u4e3a\u8868\u5355\u7684",(0,o.jsx)(n.code,{children:"enctype"}),"\u5c5e\u6027\u503c\u3002\u8fd9\u6837\u5728\u63d0\u4ea4\u8868\u5355\u65f6,\u6d4f\u89c8\u5668\u4f1a\u5c06\u6587\u4ef6\u4f5c\u4e3a\u4e8c\u8fdb\u5236\u6570\u636e\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<form action="upload.php" method="post" enctype="multipart/form-data">\n  <input type="text" name="filename" />\n  <input type="file" name="file" />\n  <input type="submit" value="\u4e0a\u4f20" />\n</form>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\u591a\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20",children:"\u591a\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20"}),"\n",(0,o.jsxs)(n.p,{children:["\u591a\u6587\u4ef6\u540c\u6b65\u4e0a\u4f20\u53ef\u4ee5\u901a\u8fc7\u5728",(0,o.jsx)(n.code,{children:'<input type="file">'}),"\u4e2d\u6dfb\u52a0",(0,o.jsx)(n.code,{children:"multiple"}),"\u5c5e\u6027\u6765\u5b9e\u73b0\u3002\u8fd9\u6837\u7528\u6237\u5c31\u53ef\u4ee5\u4e00\u6b21\u9009\u62e9\u591a\u4e2a\u6587\u4ef6\u8fdb\u884c\u4e0a\u4f20\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u53e6\u5916,\u4e3a\u4e86\u5728\u670d\u52a1\u5668\u7aef\u80fd\u591f\u6b63\u786e\u63a5\u6536\u5230\u591a\u4e2a\u6587\u4ef6,\u9700\u8981\u5c06\u8868\u5355\u63a7\u4ef6\u7684",(0,o.jsx)(n.code,{children:"name"}),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u6570\u7ec4\u5f62\u5f0f,\u5982",(0,o.jsx)(n.code,{children:'name="file[]"'}),"\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<form action="upload.php" method="post" enctype="multipart/form-data">\n  <input type="text" name="filename" />\n  <input type="file" name="file[]" multiple />\n  <input type="submit" value="\u4e0a\u4f20" />\n</form>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6216\u8005\u4e5f\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a",(0,o.jsx)(n.code,{children:'<input type="file">'}),"\u63a7\u4ef6:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<form action="upload.php" method="post" enctype="multipart/form-data">\n  <input type="text" name="filename" />\n  <input type="file" name="file[]" />\n  <input type="file" name="file[]" />\n  <input type="file" name="file[]" />\n  <input type="file" name="file[]" />\n  <input type="file" name="file[]" />\n  <input type="submit" value="\u4e0a\u4f20" />\n</form>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528-formdata-\u4e0a\u4f20\u6587\u4ef6",children:"\u4f7f\u7528 FormData \u4e0a\u4f20\u6587\u4ef6"}),"\n",(0,o.jsx)(n.p,{children:"FormData \u662f XMLHttpRequest Level 2 \u65b0\u589e\u7684\u4e00\u4e2a\u7279\u6027,\u5b83\u4e3a\u8868\u5355\u6570\u636e\u7684\u5e8f\u5217\u5316\u63d0\u4f9b\u4e86\u4fbf\u5229\u3002\u6211\u4eec\u53ef\u4ee5\u5229\u7528 FormData \u6765\u5b9e\u73b0 AJAX \u6587\u4ef6\u4e0a\u4f20\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f,\u76f4\u63a5\u6253\u5370 FormData \u5bf9\u8c61\u65f6\u8f93\u51fa\u4e3a\u7a7a,\u8fd9\u662f\u56e0\u4e3a FormData \u4e2d\u7684\u6570\u636e\u65e0\u6cd5\u901a\u8fc7\u63a7\u5236\u53f0\u8f93\u51fa\u3002\u8981\u8bbf\u95ee\u5176\u4e2d\u7684\u6570\u636e,\u9700\u8981\u4f7f\u7528 FormData \u63d0\u4f9b\u7684\u4e00\u4e9b\u65b9\u6cd5\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<body>\n  <input type=\"text\" id=\"username\" value=\"\u5f20\u4e09\" />\n  <input type=\"text\" id=\"password\" value=\"123\" />\n  <input type=\"submit\" value=\"\u63d0\u4ea4\" id=\"submitBtn\" />\n\n  <script>\n    const usernameInput = document.getElementById('username');\n    const passwordInput = document.getElementById('password');\n    const submitButton = document.getElementById('submitBtn');\n\n    const formData = new FormData();\n\n    submitButton.addEventListener('click', function () {\n      formData.append('username', usernameInput.value);\n      formData.append('password', passwordInput.value);\n      console.log(formData); // \u8f93\u51fa: FormData {}\n\n      console.log('username: ' + formData.get('username')); // \u83b7\u53d6\u6570\u636e\n\n      formData.set('password', '123123123'); // \u8bbe\u7f6e\u6570\u636e\n      console.log(formData.get('password'));\n\n      console.log(formData.has('username')); // \u5224\u65ad\u662f\u5426\u5b58\u5728\n\n      formData.delete('password'); // \u5220\u9664\u6570\u636e\n    });\n  <\/script>\n</body>\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4f7f\u7528 FormData \u5b9e\u73b0\u5f02\u6b65\u6587\u4ef6\u4e0a\u4f20\u7684\u793a\u4f8b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const fileInput = document.getElementById('fileInput');\nconst uploadButton = document.getElementById('uploadBtn');\n\nuploadButton.addEventListener('click', function () {\n  const file = fileInput.files[0]; // \u83b7\u53d6\u6587\u4ef6\u5bf9\u8c61\n\n  const formData = new FormData();\n  formData.append('file', file);\n\n  const xhr = new XMLHttpRequest();\n  xhr.open('POST', '/upload');\n\n  xhr.onload = function () {\n    if (xhr.status === 200) {\n      console.log('\u4e0a\u4f20\u6210\u529f!');\n    } else {\n      console.error('\u4e0a\u4f20\u5931\u8d25!');\n    }\n  };\n\n  xhr.send(formData); // \u53d1\u9001FormData\u5bf9\u8c61\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(96540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);