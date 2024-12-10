"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[6333],{3007:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});const i=JSON.parse('{"id":"Frontend/Engineering/MVC-MVVM","title":"MVC \u4e0e MVVM \u6a21\u5f0f\u8be6\u89e3","description":"MVC \u6a21\u5f0f","source":"@site/docs/Frontend/Engineering/90.MVC-MVVM.md","sourceDirName":"Frontend/Engineering","slug":"/Frontend/Engineering/MVC-MVVM","permalink":"/docs-hub/docs/Frontend/Engineering/MVC-MVVM","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/Engineering/90.MVC-MVVM.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":90,"frontMatter":{},"sidebar":"engineeringSidebar","previous":{"title":"Webpack \u6027\u80fd\u4f18\u5316\u5b9e\u6218\u6307\u5357","permalink":"/docs-hub/docs/Frontend/Engineering/Webpack-\u6027\u80fd\u4f18\u5316"},"next":{"title":"Angular\u3001Vue \u548c React \u6846\u67b6\u5bf9\u6bd4","permalink":"/docs-hub/docs/Frontend/Engineering/Angular-Vue-React-\u5bf9\u6bd4"}}');var a=t(74848),l=t(28453);const o={},d="MVC \u4e0e MVVM \u6a21\u5f0f\u8be6\u89e3",r={},s=[{value:"MVC \u6a21\u5f0f",id:"mvc-\u6a21\u5f0f",level:2},{value:"MVC \u5de5\u4f5c\u6d41\u7a0b",id:"mvc-\u5de5\u4f5c\u6d41\u7a0b",level:3},{value:"MVC \u7684\u4f18\u70b9",id:"mvc-\u7684\u4f18\u70b9",level:3},{value:"\u4e00\u4e2a\u7b80\u5355\u7684 MVC \u5b9e\u73b0\u793a\u4f8b",id:"\u4e00\u4e2a\u7b80\u5355\u7684-mvc-\u5b9e\u73b0\u793a\u4f8b",level:3},{value:"MVVM \u6a21\u5f0f",id:"mvvm-\u6a21\u5f0f",level:2},{value:"MVVM \u7684\u7ec4\u6210\u90e8\u5206",id:"mvvm-\u7684\u7ec4\u6210\u90e8\u5206",level:3},{value:"MVVM \u7684\u5de5\u4f5c\u539f\u7406",id:"mvvm-\u7684\u5de5\u4f5c\u539f\u7406",level:3},{value:"MVVM \u7684\u4f18\u70b9",id:"mvvm-\u7684\u4f18\u70b9",level:3},{value:"\u4e00\u4e2a\u7b80\u5355\u7684 MVVM \u5b9e\u73b0\u793a\u4f8b",id:"\u4e00\u4e2a\u7b80\u5355\u7684-mvvm-\u5b9e\u73b0\u793a\u4f8b",level:3}];function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"mvc-\u4e0e-mvvm-\u6a21\u5f0f\u8be6\u89e3",children:"MVC \u4e0e MVVM \u6a21\u5f0f\u8be6\u89e3"})}),"\n",(0,a.jsx)(e.h2,{id:"mvc-\u6a21\u5f0f",children:"MVC \u6a21\u5f0f"}),"\n",(0,a.jsx)(e.p,{children:"MVC \u662f Model-View-Controller \u7684\u7f29\u5199,\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u8f6f\u4ef6\u67b6\u6784\u6a21\u5f0f\u3002\u5b83\u5c06\u5e94\u7528\u7a0b\u5e8f\u5212\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206:\n\u6a21\u578b(Model):\u8d1f\u8d23\u7ba1\u7406\u548c\u64cd\u4f5c\u6570\u636e,\u6267\u884c\u6570\u636e\u7684 CRUD(\u521b\u5efa\u3001\u8bfb\u53d6\u3001\u66f4\u65b0\u3001\u5220\u9664)\u64cd\u4f5c\u3002\n\u89c6\u56fe(View):\u8d1f\u8d23\u6570\u636e\u7684\u5c55\u793a\u548c\u7528\u6237\u4ea4\u4e92\u3002\u5982\u679c\u89c6\u56fe\u5728\u670d\u52a1\u7aef\u751f\u6210,\u5c31\u662f\u670d\u52a1\u7aef\u6e32\u67d3;\u5982\u679c\u5728\u5ba2\u6237\u7aef\u751f\u6210,\u5c31\u662f\u5ba2\u6237\u7aef\u6e32\u67d3\u3002\n\u63a7\u5236\u5668(Controller):\u8d1f\u8d23\u5904\u7406\u4e1a\u52a1\u903b\u8f91,\u534f\u8c03\u6a21\u578b\u548c\u89c6\u56fe\u4e4b\u95f4\u7684\u4ea4\u4e92\u3002\u524d\u7aef\u901a\u8fc7\u8bf7\u6c42 API \u6765\u8c03\u7528\u63a7\u5236\u5668\u4e2d\u7684\u65b9\u6cd5,\u6267\u884c\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"mvc-\u5de5\u4f5c\u6d41\u7a0b",children:"MVC \u5de5\u4f5c\u6d41\u7a0b"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"\u524d\u7aef\u53d1\u8d77\u4e00\u4e2a\u5f02\u6b65\u8bf7\u6c42,\u8bf7\u6c42\u67d0\u4e2a URL\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u670d\u52a1\u7aef\u8def\u7531\u5c06\u8bf7\u6c42\u6620\u5c04\u5230\u63a7\u5236\u5668\u7684\u67d0\u4e2a\u65b9\u6cd5\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u63a7\u5236\u5668\u65b9\u6cd5\u6267\u884c\u4e1a\u52a1\u903b\u8f91,\u53ef\u80fd\u4f1a\u67e5\u8be2\u6216\u4fee\u6539\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u63a7\u5236\u5668\u65b9\u6cd5\u8fd4\u56de\u54cd\u5e94\u7ed3\u679c,\u5c06\u6570\u636e\u8fd4\u56de\u7ed9\u524d\u7aef\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u524d\u7aef\u63a5\u6536\u5230\u54cd\u5e94\u6570\u636e,\u66f4\u65b0\u89c6\u56fe\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"mvc-\u7684\u4f18\u70b9",children:"MVC \u7684\u4f18\u70b9"}),"\n",(0,a.jsx)(e.p,{children:"MVC \u7684\u4e3b\u8981\u4f18\u70b9\u662f\u5b9e\u73b0\u4e86\u5173\u6ce8\u70b9\u5206\u79bb,\u4f7f\u5f97\u5e94\u7528\u7a0b\u5e8f\u7684\u7ed3\u6784\u66f4\u52a0\u6e05\u6670,\u4e0d\u540c\u6a21\u5757\u4e4b\u95f4\u8026\u5408\u5ea6\u4f4e,\u65b9\u4fbf\u5f00\u53d1\u548c\u7ef4\u62a4:"}),"\n",(0,a.jsx)(e.p,{children:"\u6a21\u578b\u53ea\u9700\u8981\u5173\u6ce8\u6570\u636e,\u4e0d\u9700\u8981\u5173\u6ce8\u5176\u4ed6\u3002\n\u89c6\u56fe\u53ea\u9700\u8981\u5173\u6ce8\u754c\u9762\u5c55\u793a,\u4e0d\u9700\u8981\u5173\u6ce8\u6570\u636e\u6765\u6e90\u3002\n\u63a7\u5236\u5668\u53ea\u9700\u8981\u5173\u6ce8\u4e1a\u52a1\u903b\u8f91,\u4e0d\u9700\u8981\u5173\u6ce8\u6570\u636e\u5b58\u50a8\u548c\u754c\u9762\u5c55\u793a\u7684\u7ec6\u8282\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u79cd\u5206\u5c42\u7ed3\u6784\u4f7f\u5f97\u5e94\u7528\u7a0b\u5e8f\u66f4\u5bb9\u6613\u6269\u5c55\u3001\u4fee\u6539\u548c\u6d4b\u8bd5\u3002\u6bd4\u5982\u53ef\u4ee5\u5355\u72ec\u4fee\u6539\u89c6\u56fe\u800c\u4e0d\u5f71\u54cd\u6a21\u578b\u548c\u63a7\u5236\u5668\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u4e00\u4e2a\u7b80\u5355\u7684-mvc-\u5b9e\u73b0\u793a\u4f8b",children:"\u4e00\u4e2a\u7b80\u5355\u7684 MVC \u5b9e\u73b0\u793a\u4f8b"}),"\n",(0,a.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528\u539f\u751f JavaScript \u5b9e\u73b0\u7684\u7b80\u5355 MVC \u8ba1\u7b97\u5668\u793a\u4f8b"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<div id="app"></div>\n\n<script>\n  (function () {\n    // \u521d\u59cb\u5316\n    function init() {\n      model.init();\n      view.render();\n      controller.init();\n    }\n\n    // \u6a21\u578b:\u7ba1\u7406\u6570\u636e\n    var model = {\n      data: {\n        a: 0,\n        b: 0,\n        s: \'+\',\n        r: 0,\n      },\n      init: function () {\n        var _this = this;\n        // \u5bf9data\u4e2d\u7684\u6bcf\u4e2a\u5c5e\u6027\u8fdb\u884c\u6570\u636e\u52ab\u6301\n        for (var k in _this.data) {\n          (function (k) {\n            Object.defineProperty(_this, k, {\n              get: function () {\n                return _this.data[k];\n              },\n              set: function (newValue) {\n                _this.data[k] = newValue;\n                // \u6570\u636e\u53d8\u5316\u65f6\u91cd\u65b0\u6e32\u67d3\u89c6\u56fe\n                view.render({ [k]: newValue });\n              },\n            });\n          })(k);\n        }\n      },\n    };\n\n    // \u89c6\u56fe:\u7ba1\u7406\u6a21\u677f\u548c\u6e32\u67d3\n    var view = {\n      el: \'#app\',\n      template: `\n      <p>\n        <span class="cal-a">{{ a }}</span>\n        <span class="cal-s">{{ s }}</span>\n        <span class="cal-b">{{ b }}</span>\n        <span>=</span>\n        <span class="cal-r">{{ r }}</span>\n      </p>\n      <p>\n        <input type="text" placeholder="Number a" class="cal-input a">\n        <input type="text" placeholder="Number b" class="cal-input b">\n      </p>\n      <p>\n        <button class="cal-btn">+</button>\n        <button class="cal-btn">-</button>\n        <button class="cal-btn">*</button>\n        <button class="cal-btn">/</button>\n      </p>\n    `,\n      render: function (mutedData) {\n        if (!mutedData) {\n          // \u521d\u6b21\u6e32\u67d3,\u5c06\u6a21\u677f\u4e2d\u7684{{xxx}}\u66ff\u6362\u4e3a\u5177\u4f53\u6570\u636e\n          this.template = this.template.replace(/\\{\\{(.*?)\\}\\}/g, function (node, key) {\n            return model[key.trim()];\n          });\n          document.querySelector(this.el).innerHTML = this.template;\n        } else {\n          // \u6570\u636e\u53d8\u5316\u540e\u7684\u91cd\u65b0\u6e32\u67d3,\u76f4\u63a5\u4fee\u6539\u76f8\u5e94dom\u5143\u7d20\u7684\u5185\u5bb9\n          for (var k in mutedData) {\n            document.querySelector(\'.cal-\' + k).textContent = mutedData[k];\n          }\n        }\n      },\n    };\n\n    // \u63a7\u5236\u5668:\u4e8b\u4ef6\u5904\u7406\n    var controller = {\n      init: function () {\n        var oCalInputs = document.querySelectorAll(\'.cal-input\'),\n          oCalBtns = document.querySelectorAll(\'.cal-btn\'),\n          inputItem,\n          btnItem;\n\n        // \u7ed1\u5b9a\u8f93\u5165\u6846\u4e8b\u4ef6\n        for (var i = 0; i < oCalInputs.length; i++) {\n          inputItem = oCalInputs[i];\n          inputItem.addEventListener(\'input\', this.handleInput, false);\n        }\n\n        // \u7ed1\u5b9a\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6\n        for (var i = 0; i < oCalBtns.length; i++) {\n          btnItem = oCalBtns[i];\n          btnItem.addEventListener(\'click\', this.handleBtnClick, false);\n        }\n      },\n      handleInput: function (e) {\n        var tar = e.target,\n          value = Number(tar.value),\n          field = tar.className.split(\' \')[1];\n\n        model[field] = value;\n        with (model) {\n          r = eval(\'a\' + s + \'b\');\n        }\n      },\n      handleBtnClick: function (e) {\n        var type = e.target.textContent;\n        model.s = type;\n        with (model) {\n          r = eval(\'a\' + s + \'b\');\n        }\n      },\n    };\n\n    init();\n  })();\n<\/script>\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u4e2a\u793a\u4f8b\u4e2d\n\u6a21\u578b model \u5b9a\u4e49\u4e86\u6570\u636e\u548c\u6570\u636e\u53d8\u5316\u540e\u8981\u6267\u884c\u7684\u64cd\u4f5c\n\u89c6\u56fe view \u5b9a\u4e49\u4e86\u6a21\u677f,\u4ee5\u53ca\u5982\u4f55\u6e32\u67d3\u6a21\u677f\n\u63a7\u5236\u5668 controller \u5b9a\u4e49\u4e86\u4e8b\u4ef6\u5904\u7406\u51fd\u6570,\u5728\u7279\u5b9a\u4e8b\u4ef6\u53d1\u751f\u65f6\u4fee\u6539\u6a21\u578b\u4e2d\u7684\u6570\u636e"}),"\n",(0,a.jsx)(e.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u5206\u5c42\u8bbe\u8ba1,\u5404\u4e2a\u6a21\u5757\u4e4b\u95f4\u804c\u8d23\u6e05\u6670,\u8026\u5408\u5ea6\u4f4e,\u6574\u4e2a\u7a0b\u5e8f\u7ed3\u6784\u6e05\u6670,\u6613\u4e8e\u5f00\u53d1\u548c\u7ef4\u62a4\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"mvvm-\u6a21\u5f0f",children:"MVVM \u6a21\u5f0f"}),"\n",(0,a.jsx)(e.p,{children:"MVVM \u662f Model-View-ViewModel \u7684\u7f29\u5199,\u662f\u4e00\u79cd\u57fa\u4e8e MVC \u6f14\u53d8\u800c\u6765\u7684\u67b6\u6784\u6a21\u5f0f\u3002\u5b83\u5f15\u5165\u4e86 ViewModel \u8fd9\u4e00\u5c42\u6765\u7b80\u5316\u89c6\u56fe\u548c\u6a21\u578b\u7684\u4ea4\u4e92\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"mvvm-\u7684\u7ec4\u6210\u90e8\u5206",children:"MVVM \u7684\u7ec4\u6210\u90e8\u5206"}),"\n",(0,a.jsx)(e.p,{children:"\u6a21\u578b(Model):\u4fdd\u5b58\u548c\u5904\u7406\u6570\u636e,\u4e0e MVC \u4e2d\u7684 Model \u7c7b\u4f3c\u3002\n\u89c6\u56fe(View):\u8d1f\u8d23\u754c\u9762\u5c55\u793a,\u4e0e\u7528\u6237\u8fdb\u884c\u4ea4\u4e92\u3002\n\u89c6\u56fe\u6a21\u578b(ViewModel):\u4e00\u4e2a\u901a\u8fc7\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u8fde\u63a5\u89c6\u56fe\u548c\u6a21\u578b\u7684\u5bf9\u8c61\u3002\u5b83\u5c01\u88c5\u4e86\u89c6\u56fe\u9700\u8981\u7528\u5230\u7684\u5c5e\u6027\u548c\u547d\u4ee4,\u89c6\u56fe\u901a\u8fc7\u6570\u636e\u7ed1\u5b9a\u7684\u65b9\u5f0f\u4e0e ViewModel \u8fdb\u884c\u901a\u4fe1\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"mvvm-\u7684\u5de5\u4f5c\u539f\u7406",children:"MVVM \u7684\u5de5\u4f5c\u539f\u7406"}),"\n",(0,a.jsx)(e.p,{children:"\u5728 MVVM \u4e2d,\u89c6\u56fe\u548c\u6a21\u578b\u4e0d\u76f4\u63a5\u901a\u4fe1,\u800c\u662f\u901a\u8fc7 ViewModel \u6765\u8fdb\u884c\u4ea4\u4e92:"}),"\n",(0,a.jsx)(e.p,{children:"\u89c6\u56fe\u7684\u53d8\u5316\u4f1a\u81ea\u52a8\u540c\u6b65\u5230 ViewModel,ViewModel \u7684\u53d8\u5316\u4e5f\u4f1a\u81ea\u52a8\u540c\u6b65\u5230\u89c6\u56fe\u3002\nViewModel \u4ece\u6a21\u578b\u83b7\u53d6\u6570\u636e,\u5e76\u5bf9\u6570\u636e\u8fdb\u884c\u8f6c\u6362\u548c\u5904\u7406,\u4f7f\u5176\u9002\u5408\u754c\u9762\u5c55\u793a\u3002\nViewModel \u5411\u6a21\u578b\u53d1\u9001\u547d\u4ee4,\u6267\u884c\u76f8\u5e94\u7684\u4e1a\u52a1\u903b\u8f91\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u79cd\u901a\u8fc7 ViewModel \u5b9e\u73b0\u89c6\u56fe\u548c\u6a21\u578b\u7684\u81ea\u52a8\u540c\u6b65,\u4f7f\u5f97\u5b83\u4eec\u4e4b\u95f4\u7684\u8026\u5408\u5ea6\u8fdb\u4e00\u6b65\u964d\u4f4e\u3002\u5f00\u53d1\u8005\u53ea\u9700\u8981\u5173\u6ce8 ViewModel \u7684\u5f00\u53d1,\u800c\u4e0d\u9700\u8981\u624b\u52a8\u64cd\u4f5c DOM\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"mvvm-\u7684\u4f18\u70b9",children:"MVVM \u7684\u4f18\u70b9"}),"\n",(0,a.jsx)(e.p,{children:"MVVM \u6a21\u5f0f\u76f8\u6bd4 MVC \u6709\u4ee5\u4e0b\u4f18\u70b9"}),"\n",(0,a.jsx)(e.p,{children:"\u8fdb\u4e00\u6b65\u964d\u4f4e\u4e86\u89c6\u56fe\u548c\u6a21\u578b\u7684\u8026\u5408\u5ea6\u3002\u89c6\u56fe\u548c\u6a21\u578b\u4e0d\u76f4\u63a5\u901a\u4fe1,\u800c\u662f\u901a\u8fc7 ViewModel \u6765\u8fdb\u884c\u4ea4\u4e92,\u4f7f\u5f97\u5b83\u4eec\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u66f4\u52a0\u6e05\u6670\u548c\u677e\u6563\u3002\n\u7b80\u5316\u4e86\u89c6\u56fe\u5c42\u7684\u4ee3\u7801\u3002\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u624b\u52a8\u64cd\u4f5c DOM,\u53ea\u9700\u8981\u7ef4\u62a4 ViewModel \u4e2d\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u5373\u53ef,\u8fd9\u4f7f\u5f97\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\u548c\u6613\u4e8e\u7ef4\u62a4\u3002\n\u63d0\u9ad8\u4e86\u53ef\u6d4b\u8bd5\u6027\u3002ViewModel \u62bd\u8c61\u4e86\u89c6\u56fe\u7684\u72b6\u6001\u548c\u884c\u4e3a,\u53ef\u4ee5\u9488\u5bf9 ViewModel \u7f16\u5199\u5355\u5143\u6d4b\u8bd5,\u6d4b\u8bd5\u66f4\u52a0\u5bb9\u6613\u548c\u53ef\u9760\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u4e00\u4e2a\u7b80\u5355\u7684-mvvm-\u5b9e\u73b0\u793a\u4f8b",children:"\u4e00\u4e2a\u7b80\u5355\u7684 MVVM \u5b9e\u73b0\u793a\u4f8b"}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u91cc\u662f\u4e00\u4e2a\u4f7f\u7528 JavaScript \u5b9e\u73b0\u7684\u7b80\u5355 MVVM \u793a\u4f8b,\u5b9e\u73b0\u4e86\u6570\u636e\u7684\u53cc\u5411\u7ed1\u5b9a:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"// \u4e00\u4e2a\u7b80\u5355\u7684MVVM\u5b9e\u73b0\nfunction Vue(options) {\n  this.data = options.data;\n  var data = this.data;\n\n  observe(data);\n\n  var id = options.el;\n  var dom = nodeToFragment(document.getElementById(id), this);\n  document.getElementById(id).appendChild(dom);\n}\n\n// \u89c2\u5bdf\u6570\u636e\u53d8\u5316\nfunction observe(obj) {\n  if (!obj || typeof obj !== 'object') {\n    return;\n  }\n  Object.keys(obj).forEach(function (key) {\n    defineReactive(obj, key, obj[key]);\n  });\n}\n\nfunction defineReactive(obj, key, val) {\n  observe(val);\n  Object.defineProperty(obj, key, {\n    get: function () {\n      return val;\n    },\n    set: function (newVal) {\n      val = newVal;\n      console.log('\u5c5e\u6027' + key + '\u5df2\u7ecf\u88ab\u76d1\u542c\uff0c\u73b0\u5728\u503c\u4e3a\uff1a\"' + newVal.toString() + '\"');\n    },\n  });\n}\n\n// \u5c06template\u8f6c\u4e3afragment\nfunction nodeToFragment(node, vm) {\n  var flag = document.createDocumentFragment();\n  var child;\n\n  while ((child = node.firstChild)) {\n    compile(child, vm);\n    flag.appendChild(child);\n  }\n  return flag;\n}\n\n// \u7f16\u8bd1\u6a21\u677f\nfunction compile(node, vm) {\n  var reg = /\\{\\{(.*)\\}\\}/;\n  if (node.nodeType === 1) {\n    // \u5143\u7d20\u8282\u70b9\n    var attr = node.attributes;\n    for (var i = 0; i < attr.length; i++) {\n      if (attr[i].nodeName == 'v-model') {\n        var name = attr[i].nodeValue;\n        node.addEventListener('input', function (e) {\n          vm.data[name] = e.target.value;\n        });\n        node.value = vm.data[name];\n        node.removeAttribute('v-model');\n      }\n    }\n\n    new Watcher(vm, node, name, 'input');\n  }\n  if (node.nodeType === 3) {\n    // \u6587\u672c\u8282\u70b9\n    if (reg.test(node.nodeValue)) {\n      var name = RegExp.$1;\n      name = name.trim();\n      new Watcher(vm, node, name, 'text');\n    }\n  }\n}\n\n// \u89c2\u5bdf\u8005,\u5f53\u6570\u636e\u53d8\u5316\u65f6\u66f4\u65b0\u89c6\u56fe\nfunction Watcher(vm, node, name, nodeType) {\n  Dep.target = this;\n  this.name = name;\n  this.node = node;\n  this.vm = vm;\n  this.nodeType = nodeType;\n  this.update();\n  Dep.target = null;\n}\n\nWatcher.prototype = {\n  update: function () {\n    this.get();\n    if (this.nodeType == 'text') {\n      this.node.nodeValue = this.value;\n    }\n    if (this.nodeType == 'input') {\n      this.node.value = this.value;\n    }\n  },\n  get: function () {\n    this.value = this.vm.data[this.name];\n  },\n};\n\n// \u8ba2\u9605\u5668,\u7ba1\u7406\u591a\u4e2a\u89c2\u5bdf\u8005\nfunction Dep() {\n  this.subs = [];\n}\n\nDep.prototype = {\n  addSub: function (sub) {\n    this.subs.push(sub);\n  },\n  notify: function () {\n    this.subs.forEach(function (sub) {\n      sub.update();\n    });\n  },\n};\n\nDep.target = null;\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u4e2a\u793a\u4f8b\u5b9e\u73b0\u4e86\u4ee5\u4e0b\u529f\u80fd:"}),"\n",(0,a.jsxs)(e.p,{children:["\u901a\u8fc7",(0,a.jsx)(e.code,{children:"Object.defineProperty"}),"\u5bf9\u6570\u636e\u8fdb\u884c\u52ab\u6301,\u5b9e\u73b0\u4e86\u6570\u636e\u7684\u54cd\u5e94\u5f0f\u3002\n\u5c06\u6a21\u677f\u89e3\u6790\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811,\u8bc6\u522b\u5176\u4e2d\u7684\u6307\u4ee4\u548c\u63d2\u503c\u8868\u8fbe\u5f0f\u3002\n\u4e3a\u6bcf\u4e2a\u5c5e\u6027\u521b\u5efa\u4e00\u4e2a\u89c2\u5bdf\u8005 Watcher,\u5f53\u5c5e\u6027\u53d8\u5316\u65f6\u901a\u77e5\u89c2\u5bdf\u8005\u66f4\u65b0\u89c6\u56fe\u3002\n\u901a\u8fc7\u8ba2\u9605\u5668 Dep \u7ba1\u7406\u591a\u4e2a\u89c2\u5bdf\u8005,\u5b9e\u73b0\u4e86\u4e00\u5bf9\u591a\u7684\u4f9d\u8d56\u5173\u7cfb\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u867d\u7136\u8fd9\u53ea\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b,\u4f46\u5b83\u5c55\u793a\u4e86 MVVM \u7684\u6838\u5fc3\u539f\u7406\u6570\u636e\u7684\u54cd\u5e94\u5f0f\u548c\u53cc\u5411\u7ed1\u5b9a\u3002\u73b0\u4ee3\u7684 MVVM \u6846\u67b6\u5982 Vue.js,\u5c31\u662f\u5728\u8fd9\u4e2a\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u5927\u91cf\u7684\u6269\u5c55\u548c\u4f18\u5316,\u63d0\u4f9b\u4e86\u66f4\u52a0\u5b8c\u5584\u548c\u9ad8\u6548\u7684\u89e3\u51b3\u65b9\u6848\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>d});var i=t(96540);const a={},l=i.createContext(a);function o(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);