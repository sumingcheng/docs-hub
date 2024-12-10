"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[75649],{84019:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"Frontend/JavaScript/Promise/Promise\u524d\u7f6e\u77e5\u8bc6","title":"\u5f02\u6b65\u7f16\u7a0b\u4e0e Promise","description":"Getting Started | bluebird","source":"@site/docs/Frontend/JavaScript/Promise/80.Promise\u524d\u7f6e\u77e5\u8bc6.md","sourceDirName":"Frontend/JavaScript/Promise","slug":"/Frontend/JavaScript/Promise/Promise\u524d\u7f6e\u77e5\u8bc6","permalink":"/docs-hub/docs/Frontend/JavaScript/Promise/Promise\u524d\u7f6e\u77e5\u8bc6","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Frontend/JavaScript/Promise/80.Promise\u524d\u7f6e\u77e5\u8bc6.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":80,"frontMatter":{},"sidebar":"javascriptSidebar","previous":{"title":"\u751f\u6210\u5668\u4e0e\u8fed\u4ee3\u5668","permalink":"/docs-hub/docs/Frontend/JavaScript/Promise/\u8fed\u4ee3\u5668-\u751f\u6210\u5668"},"next":{"title":"\u6d4f\u89c8\u5668\u7684\u5e38\u9a7b\u7ebf\u7a0b","permalink":"/docs-hub/docs/Frontend/JavaScript/Promise/Promise\u4f7f\u7528"}}');var o=r(74848),i=r(28453);const t={},c="\u5f02\u6b65\u7f16\u7a0b\u4e0e Promise",d={},a=[{value:"ajax \u4e0d\u540c\u7248\u672c\u8bf7\u6c42\u5199\u6cd5",id:"ajax-\u4e0d\u540c\u7248\u672c\u8bf7\u6c42\u5199\u6cd5",level:2},{value:"node \u5f02\u6b65\u8bfb\u53d6\u6587\u4ef6",id:"node-\u5f02\u6b65\u8bfb\u53d6\u6587\u4ef6",level:2},{value:"\u5f02\u6b65",id:"\u5f02\u6b65",level:2},{value:"DOM \u51b2\u7a81",id:"dom-\u51b2\u7a81",level:3},{value:"\u5f02\u6b65\u4efb\u52a1",id:"\u5f02\u6b65\u4efb\u52a1",level:3},{value:"\u4e8b\u4ef6\u8f6e\u8be2",id:"\u4e8b\u4ef6\u8f6e\u8be2",level:3},{value:"\u56de\u8c03\u51fd\u6570",id:"\u56de\u8c03\u51fd\u6570",level:3},{value:"Promise \u7684\u72b6\u6001",id:"promise-\u7684\u72b6\u6001",level:2},{value:"Promise \u94fe\u5f0f\u8c03\u7528",id:"promise-\u94fe\u5f0f\u8c03\u7528",level:2},{value:"Promise \u7684\u5e38\u7528\u65b9\u6cd5",id:"promise-\u7684\u5e38\u7528\u65b9\u6cd5",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u5f02\u6b65\u7f16\u7a0b\u4e0e-promise",children:"\u5f02\u6b65\u7f16\u7a0b\u4e0e Promise"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"http://bluebirdjs.com/docs/getting-started.html",children:"Getting Started | bluebird"})}),"\n",(0,o.jsxs)(n.p,{children:["ES6 \u7684 ",(0,o.jsx)(n.code,{children:"Promise"})," \u672c\u8d28\u662f\u5c06\u793e\u533a\u4e2d\u975e\u5e38\u6210\u719f\u7684 Promise \u5b9e\u73b0\uff0c\u7eb3\u5165\u5230 ECMA \u6807\u51c6\u4e2d\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"ajax-\u4e0d\u540c\u7248\u672c\u8bf7\u6c42\u5199\u6cd5",children:"ajax \u4e0d\u540c\u7248\u672c\u8bf7\u6c42\u5199\u6cd5"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<script src=\"https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js\"><\/script>\n<script>\n  // \u4f7f\u7528\u4f20\u7edf\u7684\u56de\u8c03\u65b9\u5f0f\n  $.ajax({\n    url: 'https://jsonplaceholder.typicode.com/posts',\n    type: 'GET',\n    dataType: 'JSON',\n    success: function (data) {\n      console.log(data);\n    },\n  });\n\n  // \u4f7f\u7528 $.ajax \u8fd4\u56de\u7684 Promise \u5bf9\u8c61\n  const ajaxRequest1 = $.ajax('https://jsonplaceholder.typicode.com/posts');\n  ajaxRequest1\n    .done(function (data) {\n      console.log(data);\n    })\n    .fail(function (error) {\n      console.error(error);\n    });\n\n  // \u4f7f\u7528 Promise \u7684 then \u65b9\u6cd5\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\n  const ajaxRequest2 = $.ajax('https://jsonplaceholder.typicode.com/posts');\n  ajaxRequest2.then(\n    function (data) {\n      console.log(data);\n    },\n    function (error) {\n      console.error(error);\n    }\n  );\n<\/script>\n"})}),"\n",(0,o.jsx)(n.h2,{id:"node-\u5f02\u6b65\u8bfb\u53d6\u6587\u4ef6",children:"node \u5f02\u6b65\u8bfb\u53d6\u6587\u4ef6"}),"\n",(0,o.jsx)(n.p,{children:"\u56de\u8c03\u5730\u72f1\u793a\u4f8b\uff0c\u5f02\u6b65\u8bfb\u53d6\u4e0b\u56fe\u4e2d\u7684\u4e09\u4e2a\u6587\u4ef6\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:r(91983).A+"",width:"333",height:"103"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const fs = require('fs');\n\nfs.readFile('./name.txt', 'utf-8', function (err, data) {\n  if (err) {\n    console.error('\u8bfb\u53d6 name.txt \u5931\u8d25:', err);\n    return;\n  }\n  fs.readFile(data, 'utf-8', function (err, data) {\n    if (err) {\n      console.error('\u8bfb\u53d6\u7b2c\u4e8c\u4e2a\u6587\u4ef6\u5931\u8d25:', err);\n      return;\n    }\n    fs.readFile(data, 'utf-8', function (err, data) {\n      if (err) {\n        console.error('\u8bfb\u53d6\u7b2c\u4e09\u4e2a\u6587\u4ef6\u5931\u8d25:', err);\n        return;\n      }\n      console.log('\u6700\u7ec8\u8bfb\u53d6\u7684\u6570\u636e:', data); // \u8f93\u51fa\u6700\u7ec8\u6587\u4ef6\u5185\u5bb9\n    });\n  });\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5f02\u6b65",children:"\u5f02\u6b65"}),"\n",(0,o.jsx)(n.h3,{id:"dom-\u51b2\u7a81",children:"DOM \u51b2\u7a81"}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u4e00\u4e2a\u811a\u672c\u4fee\u6539 DOM\uff0c\u53e6\u4e00\u4e2a\u811a\u672c\u6dfb\u52a0 DOM \u65f6\uff0c\u4e3a\u4e86\u9632\u6b62 DOM \u51b2\u7a81\uff0cJavaScript \u88ab\u8bbe\u8ba1\u4e3a\u5355\u7ebf\u7a0b\u7684\u3002\u8fd9\u786e\u4fdd\u4e86\u5728\u4efb\u610f\u65f6\u523b\u53ea\u6709\u4e00\u4e2a\u4efb\u52a1\u5728\u64cd\u4f5c DOM\uff0c\u4ece\u800c\u907f\u514d\u4e86\u7ade\u6001\u6761\u4ef6\u548c\u4e0d\u4e00\u81f4\u7684\u72b6\u6001\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u5f02\u6b65\u4efb\u52a1",children:"\u5f02\u6b65\u4efb\u52a1"}),"\n",(0,o.jsx)(n.p,{children:"\u7531\u4e8e JavaScript \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u4f46\u9700\u8981\u5904\u7406\u8bf8\u5982\u7f51\u7edc\u8bf7\u6c42\u3001\u6587\u4ef6\u8bfb\u53d6\u7b49\u8017\u65f6\u64cd\u4f5c\u3002\u5b9e\u73b0\u5f02\u6b65\u7684\u89e3\u51b3\u65b9\u6848\u662f\u4e8b\u4ef6\u8f6e\u8be2\u673a\u5236\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u4e8b\u4ef6\u8f6e\u8be2",children:"\u4e8b\u4ef6\u8f6e\u8be2"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u5f53\u4e3b\u7ebf\u7a0b\u7684\u4efb\u52a1\u961f\u5217\u4e3a\u7a7a\u540e\uff0c\u4e8b\u4ef6\u8f6e\u8be2\u673a\u5236\u4f1a\u68c0\u67e5\u4e8b\u4ef6\u961f\u5217\u4e2d\u7684\u5185\u5bb9\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u5f53\u5f02\u6b65\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5176\u56de\u8c03\u51fd\u6570\u4f1a\u88ab\u63a8\u5165\u5230\u4e3b\u7ebf\u7a0b\u4e2d\u6267\u884c\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4e8b\u4ef6\u8f6e\u8be2\u7684\u6838\u5fc3\u662f\u56de\u8c03\u51fd\u6570\uff0c\u5b83\u786e\u4fdd\u5f02\u6b65\u4efb\u52a1\u5728\u9002\u5f53\u7684\u65f6\u673a\u6267\u884c\uff0c\u800c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop",children:"\u5e76\u53d1\u6a21\u578b\u4e0e\u4e8b\u4ef6\u5faa\u73af - JavaScript | MDN"})}),"\n",(0,o.jsx)(n.h3,{id:"\u56de\u8c03\u51fd\u6570",children:"\u56de\u8c03\u51fd\u6570"}),"\n",(0,o.jsx)(n.p,{children:"\u56de\u8c03\u51fd\u6570\u662f\u6307\u5c06\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u53e6\u4e00\u4e2a\u51fd\u6570\u7684\u5f62\u5f0f\u3002\u56de\u8c03\u51fd\u6570\u5206\u4e3a\u540c\u6b65\u56de\u8c03\u548c\u5f02\u6b65\u56de\u8c03\uff0c\u540c\u6b65\u56de\u8c03\u51fd\u6570\u5728\u8c03\u7528\u65f6\u7acb\u5373\u6267\u884c\uff0c\u5f02\u6b65\u56de\u8c03\u51fd\u6570\u5219\u5728\u672a\u6765\u67d0\u4e2a\u65f6\u95f4\u70b9\u6267\u884c\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// sort \u662f\u9ad8\u9636\u51fd\u6570\uff0c\u63a5\u53d7\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\nconst numbers = [3, 1, 2];\nnumbers.sort(function (a, b) {\n  // \u8fd9\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u51fa\u73b0\uff0c\u662f\u56de\u8c03\u51fd\u6570\n  return a - b;\n});\nconsole.log(numbers); // \u8f93\u51fa: [1, 2, 3]\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u901a\u8fc7\u5408\u7406\u4f7f\u7528\u56de\u8c03\u51fd\u6570\uff0c\u53ef\u4ee5\u6709\u6548\u5730\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\uff0c\u907f\u514d\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002\u7136\u800c\uff0c\u8fc7\u591a\u7684\u5d4c\u5957\u56de\u8c03\u53ef\u80fd\u5bfc\u81f4\u4ee3\u7801\u96be\u4ee5\u7ef4\u62a4\uff0c\u8fd9\u4e5f\u662f\u540e\u6765 Promise \u548c async/await \u88ab\u5f15\u5165\u7684\u539f\u56e0\u3002"}),"\n",(0,o.jsx)(n.h1,{id:"promise",children:"Promise"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 JavaScript \u4e2d\uff0c",(0,o.jsx)(n.code,{children:"Promise"})," \u662f\u4e00\u79cd\u7528\u4e8e\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u7684\u673a\u5236\u3002\u5b83\u4ee3\u8868\u4e00\u4e2a\u5728\u672a\u6765\u53ef\u80fd\u5b8c\u6210\u6216\u5931\u8d25\u7684\u64cd\u4f5c\u53ca\u5176\u7ed3\u679c\u3002\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"Promise"}),"\uff0c\u53ef\u4ee5\u66f4\u6e05\u6670\u5730\u7ec4\u7ec7\u5f02\u6b65\u4ee3\u7801\uff0c\u907f\u514d\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Promise\nconst fetchData = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    const data = { id: 1, name: 'John Doe' };\n    resolve(data); // \u64cd\u4f5c\u6210\u529f\uff0c\u8c03\u7528 resolve\n    // reject('Error fetching data'); // \u64cd\u4f5c\u5931\u8d25\uff0c\u8c03\u7528 reject\n  }, 1000);\n});\n\n// \u4f7f\u7528 Promise\nfetchData\n  .then((data) => {\n    console.log('\u6570\u636e\u83b7\u53d6\u6210\u529f:', data);\n  })\n  .catch((error) => {\n    console.error('\u6570\u636e\u83b7\u53d6\u5931\u8d25:', error);\n  });\n"})}),"\n",(0,o.jsx)(n.h2,{id:"promise-\u7684\u72b6\u6001",children:"Promise \u7684\u72b6\u6001"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Promise"})," \u6709\u4e09\u79cd\u72b6\u6001\uff1a"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Pending\uff08\u7b49\u5f85\u4e2d\uff09"}),": \u521d\u59cb\u72b6\u6001\uff0c\u65e2\u4e0d\u662f\u6210\u529f\uff0c\u4e5f\u4e0d\u662f\u5931\u8d25\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Fulfilled\uff08\u5df2\u5151\u73b0\uff09"}),": \u64cd\u4f5c\u6210\u529f\u5b8c\u6210\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Rejected\uff08\u5df2\u62d2\u7edd\uff09"}),": \u64cd\u4f5c\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u72b6\u6001\u4e00\u65e6\u6539\u53d8\uff0c\u5c31\u4e0d\u4f1a\u518d\u6539\u53d8\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"promise-\u94fe\u5f0f\u8c03\u7528",children:"Promise \u94fe\u5f0f\u8c03\u7528"}),"\n",(0,o.jsx)(n.p,{children:"\u901a\u8fc7\u94fe\u5f0f\u8c03\u7528\uff0c\u53ef\u4ee5\u5c06\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u6309\u987a\u5e8f\u6267\u884c\uff0c\u6bcf\u4e2a\u64cd\u4f5c\u7684\u7ed3\u679c\u53ef\u4ee5\u4f20\u9012\u7ed9\u4e0b\u4e00\u4e2a\u64cd\u4f5c\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const firstPromise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(1);\n  }, 1000);\n});\n\nfirstPromise\n  .then((result) => {\n    console.log(result); // \u8f93\u51fa: 1\n    return result + 1;\n  })\n  .then((result) => {\n    console.log(result); // \u8f93\u51fa: 2\n    return result + 1;\n  })\n  .then((result) => {\n    console.log(result); // \u8f93\u51fa: 3\n  })\n  .catch((error) => {\n    console.error('\u53d1\u751f\u9519\u8bef:', error);\n  });\n"})}),"\n",(0,o.jsx)(n.h2,{id:"promise-\u7684\u5e38\u7528\u65b9\u6cd5",children:"Promise \u7684\u5e38\u7528\u65b9\u6cd5"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Promise.all(iterable)"}),": \u5f53\u6240\u6709\u7684 ",(0,o.jsx)(n.code,{children:"Promise"})," \u90fd\u6210\u529f\u65f6\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,o.jsx)(n.code,{children:"Promise"}),"\uff0c\u5176\u7ed3\u679c\u662f\u4e00\u4e2a\u5305\u542b\u6240\u6709 ",(0,o.jsx)(n.code,{children:"Promise"})," \u7ed3\u679c\u7684\u6570\u7ec4\u3002\u5982\u679c\u6709\u4efb\u4f55\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"Promise"})," \u5931\u8d25\uff0c\u8fd4\u56de\u7684 ",(0,o.jsx)(n.code,{children:"Promise"})," \u7acb\u5373\u5931\u8d25\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Promise.race(iterable)"}),": \u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,o.jsx)(n.code,{children:"Promise"}),"\uff0c\u5b83\u7684\u72b6\u6001\u7531\u7b2c\u4e00\u4e2a\u5b8c\u6210\u7684 ",(0,o.jsx)(n.code,{children:"Promise"})," \u51b3\u5b9a\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Promise.allSettled(iterable)"}),": \u7b49\u5f85\u6240\u6709\u7684 ",(0,o.jsx)(n.code,{children:"Promise"})," \u5b8c\u6210\uff0c\u65e0\u8bba\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\uff0c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6bcf\u4e2a ",(0,o.jsx)(n.code,{children:"Promise"})," \u7ed3\u679c\u7684\u6570\u7ec4\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Promise.any(iterable)"}),": \u53ea\u8981\u6709\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"Promise"})," \u6210\u529f\uff0c\u5c31\u8fd4\u56de\u8be5 ",(0,o.jsx)(n.code,{children:"Promise"})," \u7684\u7ed3\u679c\u3002\u5982\u679c\u6240\u6709\u7684 ",(0,o.jsx)(n.code,{children:"Promise"})," \u90fd\u5931\u8d25\uff0c\u8fd4\u56de\u7684 ",(0,o.jsx)(n.code,{children:"Promise"})," \u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const promise1 = Promise.resolve(3);\nconst promise2 = 42;\nconst promise3 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, 'foo');\n});\n\nPromise.all([promise1, promise2, promise3]).then((values) => {\n  console.log(values); // \u8f93\u51fa: [3, 42, \"foo\"]\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u901a\u8fc7\u5408\u7406\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"Promise"}),"\uff0c\u53ef\u4ee5\u7f16\u5199\u51fa\u66f4\u6e05\u6670\u3001\u53ef\u7ef4\u62a4\u7684\u5f02\u6b65\u4ee3\u7801\uff0c\u63d0\u9ad8\u4ee3\u7801\u7684\u5065\u58ee\u6027\u548c\u53ef\u8bfb\u6027\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},91983:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var s=r(96540);const o={},i=s.createContext(o);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);