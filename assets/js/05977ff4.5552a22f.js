"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["3526"],{42320:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"Frontend/HTML/history-worker","title":"History \u5BF9\u8C61\u4E0E Web Worker","description":"History \u5BF9\u8C61","source":"@site/docs/Frontend/HTML/60.history-worker.md","sourceDirName":"Frontend/HTML","slug":"/Frontend/HTML/history-worker","permalink":"/docs-hub/Frontend/HTML/history-worker","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/HTML/60.history-worker.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":60,"frontMatter":{},"sidebar":"htmlSidebar","previous":{"title":"\u97F3\u89C6\u9891\u6807\u7B7E audio \u548C video","permalink":"/docs-hub/Frontend/HTML/audio\u6807\u7B7E\u4E0Evideo\u6807\u7B7E\u53CA\u57FA\u672C\u5E94\u7528"},"next":{"title":"\u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u5BF9\u6BD4","permalink":"/docs-hub/Frontend/HTML/localStorage-sessionStorage-cookies"}}'),o=r("85893"),s=r("50065");let i={},d="History \u5BF9\u8C61\u4E0E Web Worker",a={},l=[{value:"History \u5BF9\u8C61",id:"history-\u5BF9\u8C61",level:2},{value:"\u540E\u9000",id:"\u540E\u9000",level:3},{value:"History.pushState()",id:"historypushstate",level:3},{value:"popstate \u4E8B\u4EF6",id:"popstate-\u4E8B\u4EF6",level:3},{value:"HashChangeEvent",id:"hashchangeevent",level:2},{value:"Web Worker",id:"web-worker",level:2},{value:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5",level:3},{value:"\u591A\u4E2A Worker",id:"\u591A\u4E2A-worker",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"history-\u5BF9\u8C61\u4E0E-web-worker",children:"History \u5BF9\u8C61\u4E0E Web Worker"})}),"\n",(0,o.jsx)(n.h2,{id:"history-\u5BF9\u8C61",children:"History \u5BF9\u8C61"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"window.history"}),"\u5C5E\u6027\u6307\u5411",(0,o.jsx)(n.code,{children:"History"}),"\u5BF9\u8C61,\u8868\u793A\u5F53\u524D\u7A97\u53E3\u7684\u6D4F\u89C8\u5386\u53F2\u3002\u4F8B\u5982:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"window.history.length; // 3\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"History"}),"\u5BF9\u8C61\u4E3B\u8981\u6709\u4E24\u4E2A\u5C5E\u6027:"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"History.length"}),":\u5F53\u524D\u7A97\u53E3\u8BBF\u95EE\u8FC7\u7684\u7F51\u5740\u6570\u91CF(\u5305\u62EC\u5F53\u524D\u7F51\u9875)\n",(0,o.jsx)(n.code,{children:"History.state"}),":History"," \u5806\u6808\u6700\u4E0A\u5C42\u7684\u72B6\u6001\u503C"]}),"\n",(0,o.jsx)(n.h3,{id:"\u540E\u9000",children:"\u540E\u9000"}),"\n",(0,o.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\u540E\u9000\u5230\u524D\u4E00\u4E2A\u7F51\u5740:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"history.back();\n\n// \u7B49\u540C\u4E8E\nhistory.go(-1);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"historypushstate",children:"History.pushState()"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"History.pushState()"}),"\u65B9\u6CD5\u7528\u4E8E\u5728\u5386\u53F2\u4E2D\u6DFB\u52A0\u4E00\u6761\u8BB0\u5F55,\u8BED\u6CD5\u5982\u4E0B:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"window.history.pushState(state, title, url);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"popstate-\u4E8B\u4EF6",children:"popstate \u4E8B\u4EF6"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u6BCF\u4E00\u6B21\u6D3B\u52A8\u7684\u5386\u53F2\u6761\u76EE\u53D1\u751F\u6539\u53D8\u65F6,\u5C31\u4F1A\u6709\u4E00\u4E2A",(0,o.jsx)(n.code,{children:"popstate"}),"\u4E8B\u4EF6\u6D3E\u53D1\u7ED9",(0,o.jsx)(n.code,{children:"window"}),"\u5BF9\u8C61\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4E0B\u9762\u662F\u4E00\u4E2A\u901A\u8FC7",(0,o.jsx)(n.code,{children:"popstate"}),"\u4E8B\u4EF6\u5B9E\u73B0\u5386\u53F2\u8BB0\u5F55\u7684\u793A\u4F8B"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<style>\n  div {\n    box-sizing: border-box;\n  }\n\n  .container {\n    width: 800px;\n    height: 200px;\n  }\n\n  .box {\n    float: left;\n    margin: 20px;\n    color: #fff;\n    font-size: 30px;\n    font-weight: bold;\n    line-height: 150px;\n    text-align: center;\n    cursor: pointer;\n    width: 150px;\n    height: 150px;\n    transition: all 0.2s ease-out;\n  }\n\n  .box:hover {\n    background-color: #fff;\n    color: #000;\n  }\n\n  .red {\n    background-color: red;\n    border: 5px solid red;\n  }\n\n  .green {\n    background-color: green;\n    border: 5px solid green;\n  }\n\n  .blue {\n    background-color: blue;\n    border: 5px solid blue;\n  }\n\n  .black {\n    background-color: black;\n    border: 5px solid black;\n  }\n\n  .box.selected {\n    transform: scale(1.2);\n  }\n</style>\n\n<body>\n  <div class="container">\n    <div class="box red" id="box-1">1</div>\n    <div class="box green" id="box-2">2</div>\n    <div class="box blue" id="box-3">3</div>\n    <div class="box black" id="box-4">4</div>\n  </div>\n  <script>\n    let boxes = Array.from(document.getElementsByClassName(\'box\'));\n    function selectBox(id) {\n      boxes.forEach((item) => {\n        item.classList.toggle(\'selected\', item.id === id);\n      });\n    }\n    boxes.forEach((item) => {\n      item.addEventListener(\'click\', (e) => {\n        let id = item.id;\n        history.pushState({ id }, null, `selected=${id}`);\n        selectBox(id);\n      });\n    });\n    window.addEventListener(\'popstate\', (e) => {\n      let id = e.state.id;\n      selectBox(id);\n    });\n  <\/script>\n</body>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u53E6\u4E00\u4E2A\u901A\u8FC7",(0,o.jsx)(n.code,{children:"popstate"}),"\u4E8B\u4EF6\u5B9E\u73B0\u8FC7\u6EE4\u529F\u80FD\u7684\u793A\u4F8B"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<body>\n  <input type=\"text\" id=\"inputKwd\" />\n  <button id=\"btn\">\u67E5\u8BE2</button>\n  <div class=\"output\"></div>\n  <script>\n    var data = [{ name: 'VueJS0' }, { name: 'VueJS1' }, { name: 'VueJS2' }, { name: 'VueJS3' }, { name: 'VueJS4' }, { name: 'VueJS5' }];\n    var outputArea = document.getElementsByClassName('output')[0],\n      btn = document.getElementById('btn'),\n      inputKwd = document.getElementById('inputKwd');\n\n    btn.addEventListener('click', function () {\n      var keyword = inputKwd.value;\n      var filteredData = data.filter(function (item) {\n        return item.name.indexOf(keyword) !== -1;\n      });\n      renderDom(filteredData);\n      history.pushState({ keyword }, null, '#' + keyword);\n    });\n\n    function renderDom(data) {\n      var html = data.map((item) => `<p>${item.name}</p>`).join('');\n      outputArea.innerHTML = html;\n    }\n\n    renderDom(data);\n\n    window.addEventListener(\n      'popstate',\n      function (e) {\n        var keyword = e.state ? e.state.keyword : '';\n        var filteredData = data.filter(function (item) {\n          return item.name.indexOf(keyword) !== -1;\n        });\n\n        inputKwd.value = keyword;\n        renderDom(filteredData);\n      },\n      false\n    );\n  <\/script>\n</body>\n"})}),"\n",(0,o.jsx)(n.h2,{id:"hashchangeevent",children:"HashChangeEvent"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"HashChangeEvent"}),"\u63A5\u53E3\u8868\u793A\u4E00\u4E2A\u53D8\u5316\u4E8B\u4EF6,\u5F53 URL \u4E2D\u7684\u7247\u6BB5\u6807\u8BC6\u7B26(\u5373",(0,o.jsx)(n.code,{children:"#"}),"\u53F7\u540E\u9762\u7684\u90E8\u5206)\u53D1\u751F\u6539\u53D8\u65F6,\u4F1A\u89E6\u53D1\u6B64\u4E8B\u4EF6\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"web-worker",children:"Web Worker"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Worker",children:"Worker"})," \u662F\u4E00\u4E2A\u53EF\u4EE5\u5728\u540E\u53F0\u8FD0\u884C\u811A\u672C\u800C\u4E0D\u5F71\u54CD\u9875\u9762\u6027\u80FD\u7684 JavaScript \u63A5\u53E3\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"Web Worker \u6709\u4EE5\u4E0B\u7279\u70B9:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u901A\u8FC7",(0,o.jsx)(n.code,{children:"postMessage"}),"\u548C",(0,o.jsx)(n.code,{children:"onmessage"}),"\u8FDB\u884C\u4FE1\u606F\u7684\u4F20\u9012\u548C\u63A5\u6536,\u4E0D\u652F\u6301\u8DE8\u57DF\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["Worker \u7EBF\u7A0B\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C DOM,\u4F46\u53EF\u4EE5\u901A\u8FC7",(0,o.jsx)(n.code,{children:"postMessage"}),"\u4E0E\u4E3B\u7EBF\u7A0B\u901A\u4FE1,\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u64CD\u4F5C DOM\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["Worker \u4E0D\u80FD\u8BBF\u95EE",(0,o.jsx)(n.code,{children:"window"}),"\u5BF9\u8C61,\u4F46\u53EF\u4EE5\u8BBF\u95EE",(0,o.jsx)(n.code,{children:"navigator"}),"\u5BF9\u8C61\u7684\u90E8\u5206\u5C5E\u6027,\u5982",(0,o.jsx)(n.code,{children:"onLine"}),",",(0,o.jsx)(n.code,{children:"appName"}),",",(0,o.jsx)(n.code,{children:"platform"}),",",(0,o.jsx)(n.code,{children:"userAgent"}),"\u7B49\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"Worker \u53EF\u4EE5\u53D1\u8D77 AJAX \u8BF7\u6C42\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["Worker \u7684\u8FD0\u884C\u4E0D\u4F1A\u5F71\u54CD\u4E3B\u7EBF\u7A0B,\u4F46\u662F\u4E5F\u4E0D\u662F\u5B8C\u5168\u72EC\u7ACB\u7684,\u5B83\u4EEC\u4E4B\u95F4\u901A\u8FC7",(0,o.jsx)(n.code,{children:"postMessage"}),"\u8FDB\u884C\u901A\u4FE1\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),"\n",(0,o.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684 Web Worker \u793A\u4F8B"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<body>\n  <script>\n    if (window.Worker) {\n      var myWorker = new Worker('worker.js');\n      var message = {\n        addThis: { num1: 1, num2: 1 },\n      };\n      myWorker.postMessage(message);\n      myWorker.onmessage = function (e) {\n        console.log(e.data); // {result: 2}\n      };\n    }\n  <\/script>\n</body>\n"})}),"\n",(0,o.jsx)(n.p,{children:"worker.js:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"onmessage = function (e) {\n  if (e.data.addThis !== undefined) {\n    var result = e.data.addThis.num1 + e.data.addThis.num2;\n    postMessage({ result });\n  }\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u591A\u4E2A-worker",children:"\u591A\u4E2A Worker"}),"\n",(0,o.jsxs)(n.p,{children:["\u4E00\u4E2A Worker \u53EF\u4EE5\u542F\u52A8\u591A\u4E2A Worker,\u901A\u8FC7",(0,o.jsx)(n.code,{children:"importScripts()"}),"\u65B9\u6CD5\u52A0\u8F7D\u5176\u4ED6 Worker \u811A\u672C:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"importScripts('worker1.js', 'worker2.js');\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528",(0,o.jsx)(n.code,{children:"terminate()"}),"\u65B9\u6CD5\u7EC8\u6B62\u4E00\u4E2A Worker \u7684\u6267\u884C:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// \u7EC8\u6B62\u5F53\u524D worker\nself.close();\n\n// \u7EC8\u6B62\u5176\u4ED6 worker\nworker.terminate();\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D,\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 Web Worker \u5B9E\u73B0\u4E00\u4E9B\u8017\u65F6\u7684\u8BA1\u7B97\u6216\u8005\u6570\u636E\u5904\u7406,\u4ECE\u800C\u907F\u514D\u963B\u585E\u4E3B\u7EBF\u7A0B,\u63D0\u9AD8\u9875\u9762\u6027\u80FD\u3002\u4F46\u4E5F\u8981\u6CE8\u610F Worker \u7684\u517C\u5BB9\u6027\u95EE\u9898,\u76EE\u524D\u4E3B\u6D41\u6D4F\u89C8\u5668\u90FD\u5DF2\u7ECF\u652F\u6301 Web Worker,\u4F46\u5728\u4F7F\u7528\u65F6\u8FD8\u662F\u8981\u505A\u597D\u964D\u7EA7\u5904\u7406\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(67294);let o={},s=t.createContext(o);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);