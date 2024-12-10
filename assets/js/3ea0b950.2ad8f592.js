"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[12988],{46244:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>s});const c=JSON.parse('{"id":"Backend/Go/\u5e76\u53d1/Context","title":"Go \u4e0a\u4e0b\u6587\uff08context\uff09\u8be6\u89e3","description":"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587","source":"@site/docs/Backend/Go/\u5e76\u53d1/3.Context.md","sourceDirName":"Backend/Go/\u5e76\u53d1","slug":"/Backend/Go/\u5e76\u53d1/Context","permalink":"/docs-hub/docs/Backend/Go/\u5e76\u53d1/Context","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u5e76\u53d1/3.Context.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":3,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u8bfb\u5199\u9501\uff08sync.RWMutex\uff09\u8be6\u89e3","permalink":"/docs-hub/docs/Backend/Go/\u5e76\u53d1/\u8bfb\u5199\u9501"},"next":{"title":"C \u8bed\u8a00\u4e0e Go \u8bed\u8a00\u4e2d\u7684\u6307\u9488\u6bd4\u8f83","permalink":"/docs-hub/docs/Backend/Go/\u6307\u9488/\u6307\u9488"}}');var d=t(74848),o=t(28453);const i={},l="Go \u4e0a\u4e0b\u6587\uff08context\uff09\u8be6\u89e3",r={},s=[{value:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587",id:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587",level:2},{value:"<code>context.TODO</code> \u548c <code>context.Background</code> \u7684\u533a\u522b",id:"contexttodo-\u548c-contextbackground-\u7684\u533a\u522b",level:2},{value:"Context \u63a5\u53e3",id:"context-\u63a5\u53e3",level:2},{value:"<code>Done</code> \u4fe1\u53f7\u7684\u4f20\u9012\u673a\u5236",id:"done-\u4fe1\u53f7\u7684\u4f20\u9012\u673a\u5236",level:2},{value:"<code>context.WithCancel</code>",id:"contextwithcancel",level:3},{value:"<code>context.WithDeadline</code>",id:"contextwithdeadline",level:3},{value:"<code>context.WithTimeout</code>",id:"contextwithtimeout",level:3},{value:"\u4f7f\u7528\u573a\u666f\u603b\u7ed3",id:"\u4f7f\u7528\u573a\u666f\u603b\u7ed3",level:3},{value:"\u4e0a\u4e0b\u6587\u5982\u4f55\u5728 goroutine \u6811\u4e2d\u4f20\u503c",id:"\u4e0a\u4e0b\u6587\u5982\u4f55\u5728-goroutine-\u6811\u4e2d\u4f20\u503c",level:2},{value:"<code>Done</code> \u4fe1\u53f7\u5982\u4f55\u4f20\u9012",id:"done-\u4fe1\u53f7\u5982\u4f55\u4f20\u9012",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"go-\u4e0a\u4e0b\u6587context\u8be6\u89e3",children:"Go \u4e0a\u4e0b\u6587\uff08context\uff09\u8be6\u89e3"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587",children:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4e0a\u4e0b\u6587\uff08Context\uff09\u662f\u4e00\u4e2a\u53ef\u4f9b\u6240\u6709\u5b50\u7a0b\u5e8f\u8bbf\u95ee\u7684\u5bf9\u8c61\uff0c\u5305\u542b\u4e86\u6240\u6709\u5b50\u7a0b\u5e8f\u6240\u9700\u7684\u90e8\u5206\u6570\u636e\u6216\u529f\u80fd\u3002\u901a\u8fc7\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u5b50\u7a0b\u5e8f\u4e4b\u95f4\u53ef\u4ee5\u5171\u4eab\u4fe1\u606f\uff0c\u5b9e\u73b0\u534f\u4f5c\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"contexttodo-\u548c-contextbackground-\u7684\u533a\u522b",children:[(0,d.jsx)(n.code,{children:"context.TODO"})," \u548c ",(0,d.jsx)(n.code,{children:"context.Background"})," \u7684\u533a\u522b"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"context.TODO"})," \u548c ",(0,d.jsx)(n.code,{children:"context.Background"})," \u90fd\u7528\u4e8e\u521d\u59cb\u5316\u4e00\u4e2a\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u4f46\u4f7f\u7528\u573a\u666f\u6709\u6240\u4e0d\u540c\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"context.Background"})}),"\uff1a\u6700\u57fa\u672c\u7684\u4e0a\u4e0b\u6587\uff0c\u901a\u5e38\u7528\u4e8e ",(0,d.jsx)(n.code,{children:"main"})," \u51fd\u6570\u3001\u521d\u59cb\u5316\u6216\u6d4b\u8bd5\u4ee3\u7801\u4e2d\uff0c\u6216\u4f5c\u4e3a\u6240\u6709\u4e0a\u4e0b\u6587\u7684\u6839\u8282\u70b9\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"context.TODO"})}),"\uff1a\u7528\u4e8e\u5c1a\u672a\u786e\u5b9a\u5e94\u4f7f\u7528\u54ea\u79cd\u4e0a\u4e0b\u6587\u7684\u573a\u666f\u3002\u5b83\u662f\u4e00\u4e2a\u5360\u4f4d\u7b26\uff0c\u63d0\u793a\u5f00\u53d1\u8005\u9700\u8981\u5728\u672a\u6765\u786e\u5b9a\u5177\u4f53\u7684\u4e0a\u4e0b\u6587\u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"context-\u63a5\u53e3",children:"Context \u63a5\u53e3"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 Go \u7684 ",(0,d.jsx)(n.code,{children:"context"})," \u5305\u4e2d\uff0c",(0,d.jsx)(n.code,{children:"Context"})," \u662f\u4e00\u4e2a\u63a5\u53e3\u800c\u975e\u7ed3\u6784\u4f53\uff0c\u5b9a\u4e49\u4e86\u4ee5\u4e0b\u65b9\u6cd5\uff1a"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"\u65b9\u6cd5"}),(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,d.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{style:{textAlign:"left"},children:"Deadline"}),(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"() (deadline time.Time, ok bool)"})}),(0,d.jsxs)(n.td,{style:{textAlign:"left"},children:["\u8fd4\u56de\u4e0a\u4e0b\u6587\u88ab\u53d6\u6d88\u7684\u622a\u6b62\u65f6\u95f4\u3002\u5982\u679c\u8bbe\u7f6e\u4e86\u622a\u6b62\u65f6\u95f4\uff0c",(0,d.jsx)(n.code,{children:"ok"})," \u4e3a ",(0,d.jsx)(n.code,{children:"true"}),"\uff0c\u5426\u5219\u4e3a ",(0,d.jsx)(n.code,{children:"false"}),"\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{style:{textAlign:"left"},children:"Done"}),(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"() <-chan struct{}"})}),(0,d.jsx)(n.td,{style:{textAlign:"left"},children:"\u8fd4\u56de\u4e00\u4e2a\u901a\u9053\uff0c\u5f53\u4e0a\u4e0b\u6587\u88ab\u53d6\u6d88\u6216\u622a\u6b62\u65f6\u95f4\u5230\u8fbe\u65f6\uff0c\u8be5\u901a\u9053\u4f1a\u88ab\u5173\u95ed\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{style:{textAlign:"left"},children:"Err"}),(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"() error"})}),(0,d.jsxs)(n.td,{style:{textAlign:"left"},children:["\u8fd4\u56de\u4e0a\u4e0b\u6587\u7ed3\u675f\u7684\u539f\u56e0\uff0c\u901a\u5e38\u662f ",(0,d.jsx)(n.code,{children:"context.Canceled"})," \u6216 ",(0,d.jsx)(n.code,{children:"context.DeadlineExceeded"}),"\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{style:{textAlign:"left"},children:"Value"}),(0,d.jsx)(n.td,{style:{textAlign:"left"},children:(0,d.jsx)(n.code,{children:"(key interface{}) interface{}"})}),(0,d.jsx)(n.td,{style:{textAlign:"left"},children:"\u6839\u636e\u952e\u4ece\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6\u5bf9\u5e94\u7684\u503c\uff0c\u7528\u4e8e\u5728\u4e0a\u4e0b\u6587\u4e2d\u4f20\u9012\u8bf7\u6c42\u8303\u56f4\u5185\u7684\u6570\u636e\u3002"})]})]})]}),"\n",(0,d.jsxs)(n.h2,{id:"done-\u4fe1\u53f7\u7684\u4f20\u9012\u673a\u5236",children:[(0,d.jsx)(n.code,{children:"Done"})," \u4fe1\u53f7\u7684\u4f20\u9012\u673a\u5236"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5f53\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"context.WithCancel"}),"\u3001",(0,d.jsx)(n.code,{children:"context.WithDeadline"})," \u6216 ",(0,d.jsx)(n.code,{children:"context.WithTimeout"})," \u51fd\u6570\u65f6\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5b50\u4e0a\u4e0b\u6587\u548c\u4e00\u4e2a\u53d6\u6d88\u51fd\u6570\u3002\u8fd9\u4e2a\u5b50\u4e0a\u4e0b\u6587\u5305\u542b\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"Done"})," \u901a\u9053\uff0c\u5f53\u53d6\u6d88\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c",(0,d.jsx)(n.code,{children:"Done"})," \u901a\u9053\u4f1a\u88ab\u5173\u95ed\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"contextwithcancel",children:(0,d.jsx)(n.code,{children:"context.WithCancel"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"context.WithCancel"})," \u8fd4\u56de\u4e00\u4e2a\u5e26\u53d6\u6d88\u529f\u80fd\u7684\u4e0a\u4e0b\u6587\u3002\u5f53\u4e0d\u518d\u9700\u8981\u8be5\u4e0a\u4e0b\u6587\uff0c\u64cd\u4f5c\u5b8c\u6210\u6216\u5e0c\u671b\u63d0\u524d\u7ec8\u6b62\u65f6\uff0c\u53ef\u4ee5\u8c03\u7528\u53d6\u6d88\u51fd\u6570\u6765\u53d6\u6d88\u4e0a\u4e0b\u6587\u3002\u4f7f\u7528\u8be5\u4e0a\u4e0b\u6587\u7684\u64cd\u4f5c\u5e94\u68c0\u67e5\u4e0a\u4e0b\u6587\u662f\u5426\u5df2\u88ab\u53d6\u6d88\uff0c\u5e76\u76f8\u5e94\u5730\u505c\u6b62\u6267\u884c\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5047\u8bbe\u6709\u4e00\u4e2a\u6b63\u5728\u6267\u884c\u7684 HTTP \u8bf7\u6c42\uff0c\u5982\u679c\u7528\u6237\u53d6\u6d88\u4e86\u8fd9\u4e2a\u8bf7\u6c42\uff0c\u53ef\u4ee5\u8c03\u7528\u53d6\u6d88\u51fd\u6570\u6765\u505c\u6b62\u540e\u7eed\u5904\u7406\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"contextwithdeadline",children:(0,d.jsx)(n.code,{children:"context.WithDeadline"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"context.WithDeadline"})," \u521b\u5efa\u4e00\u4e2a\u5e26\u622a\u6b62\u65f6\u95f4\u7684\u4e0a\u4e0b\u6587\u3002\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u7236\u4e0a\u4e0b\u6587\u548c\u4e00\u4e2a\u672a\u6765\u7684\u65f6\u95f4\u70b9\uff0c\u8868\u793a\u5e0c\u671b\u64cd\u4f5c\u5728\u8be5\u65f6\u95f4\u70b9\u524d\u5b8c\u6210\u3002\u5982\u679c\u64cd\u4f5c\u672a\u5728\u622a\u6b62\u65f6\u95f4\u524d\u5b8c\u6210\uff0c\u4e0a\u4e0b\u6587\u4f1a\u81ea\u52a8\u53d6\u6d88\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u9700\u8981\u5728 5 \u79d2\u5185\u4ece\u6570\u636e\u5e93\u8bfb\u53d6\u6570\u636e\uff0c\u5426\u5219\u89c6\u4e3a\u64cd\u4f5c\u5931\u8d25\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a 5 \u79d2\u540e\u7684\u622a\u6b62\u65f6\u95f4\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"contextwithtimeout",children:(0,d.jsx)(n.code,{children:"context.WithTimeout"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"context.WithTimeout"})," \u4e0e ",(0,d.jsx)(n.code,{children:"context.WithDeadline"})," \u7c7b\u4f3c\uff0c\u4f46\u66f4\u52a0\u65b9\u4fbf\u3002\u65e0\u9700\u6307\u5b9a\u5177\u4f53\u7684\u622a\u6b62\u65e5\u671f\uff0c\u53ea\u9700\u6307\u5b9a\u4e00\u4e2a\u6301\u7eed\u65f6\u95f4\uff0c\u51fd\u6570\u5185\u90e8\u4f1a\u8ba1\u7b97\u51fa\u622a\u6b62\u65f6\u95f4\u3002\u8fd9\u6837\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u64cd\u4f5c\u5728\u4e00\u5b9a\u65f6\u95f4\u6bb5\u540e\u81ea\u52a8\u53d6\u6d88\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5728 Web \u5e94\u7528\u4e2d\uff0c\u9650\u5236\u67d0\u4e2a\u64cd\u4f5c\u6700\u591a\u6267\u884c 2 \u5206\u949f\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5\u51fd\u6570\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528\u573a\u666f\u603b\u7ed3",children:"\u4f7f\u7528\u573a\u666f\u603b\u7ed3"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"WithCancel"})}),"\uff1a\u5f53\u9700\u8981\u80fd\u591f\u968f\u65f6\u53d6\u6d88\u64cd\u4f5c\u65f6\u4f7f\u7528\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"WithDeadline"})}),"\uff1a\u5f53\u6709\u4e00\u4e2a\u56fa\u5b9a\u7684\u622a\u6b62\u65f6\u95f4\uff0c\u5e0c\u671b\u64cd\u4f5c\u5728\u6b64\u4e4b\u524d\u5b8c\u6210\u65f6\u4f7f\u7528\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"WithTimeout"})}),"\uff1a\u5f53\u5e0c\u671b\u64cd\u4f5c\u5728\u4e00\u5b9a\u65f6\u95f4\u6bb5\u540e\u81ea\u52a8\u53d6\u6d88\u65f6\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4e0a\u4e0b\u6587\u5982\u4f55\u5728-goroutine-\u6811\u4e2d\u4f20\u503c",children:"\u4e0a\u4e0b\u6587\u5982\u4f55\u5728 goroutine \u6811\u4e2d\u4f20\u503c"}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u4e0b\u6587\u7684 ",(0,d.jsx)(n.code,{children:"Value"})," \u65b9\u6cd5\u7528\u4e8e\u4f20\u9012\u8bf7\u6c42\u8303\u56f4\u5185\u7684\u503c\u3002\u901a\u8fc7\u4e0a\u4e0b\u6587\u6811\u4f20\u9012\u6570\u636e\uff0c\u6bcf\u4e2a\u4e0a\u4e0b\u6587\u8282\u70b9\u53ef\u4ee5\u5173\u8054\u4e00\u5bf9\u952e\u503c\u5bf9\uff0c\u7136\u540e\u5728\u4e0a\u4e0b\u6587\u6811\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u90fd\u53ef\u4ee5\u68c0\u7d22\u8fd9\u4e9b\u503c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "sync"\n)\n\nfunc main() {\n    // \u521b\u5efa\u6839\u4e0a\u4e0b\u6587\n    ctx := context.Background()\n    // \u4f7f\u7528 WithValue \u521b\u5efa\u643a\u5e26\u8bf7\u6c42 ID \u7684\u4e0a\u4e0b\u6587\n    ctx = context.WithValue(ctx, "requestID", "sumingcheng")\n\n    // \u5904\u7406\u8bf7\u6c42\u7684\u51fd\u6570\n    processRequest(ctx)\n}\n\nfunc processRequest(ctx context.Context) {\n    // \u4ece\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6\u8bf7\u6c42 ID\n    requestID := ctx.Value("requestID").(string)\n\n    // \u542f\u52a8\u591a\u4e2a goroutine \u5e76\u884c\u5904\u7406\u4efb\u52a1\n    var wg sync.WaitGroup\n    for i := 1; i <= 3; i++ {\n        wg.Add(1)\n        go func(id int) {\n            defer wg.Done()\n            // \u6bcf\u4e2a goroutine \u90fd\u53ef\u4ee5\u8bbf\u95ee\u76f8\u540c\u7684\u8bf7\u6c42 ID\n            fmt.Printf("Goroutine %d \u6b63\u5728\u5904\u7406\u8bf7\u6c42 %s\\n", id, requestID)\n        }(i)\n    }\n\n    // \u7b49\u5f85\u6240\u6709 goroutine \u5b8c\u6210\n    wg.Wait()\n}\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"done-\u4fe1\u53f7\u5982\u4f55\u4f20\u9012",children:[(0,d.jsx)(n.code,{children:"Done"})," \u4fe1\u53f7\u5982\u4f55\u4f20\u9012"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Done"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4e3a ",(0,d.jsx)(n.code,{children:"<-chan struct{}"})," \u7684\u901a\u9053\uff0c\u5f53\u4e0a\u4e0b\u6587\u88ab\u53d6\u6d88\u6216\u622a\u6b62\u65f6\u95f4\u5230\u8fbe\u65f6\uff0c\u8be5\u901a\u9053\u4f1a\u88ab\u5173\u95ed\u3002\u5b50\u4e0a\u4e0b\u6587\u4f1a\u7ee7\u627f\u7236\u4e0a\u4e0b\u6587\u7684 ",(0,d.jsx)(n.code,{children:"Done"})," \u901a\u9053\uff0c\u5f53\u7236\u4e0a\u4e0b\u6587\u88ab\u53d6\u6d88\u65f6\uff0c\u6240\u6709\u5b50\u4e0a\u4e0b\u6587\u7684 ",(0,d.jsx)(n.code,{children:"Done"})," \u901a\u9053\u4e5f\u4f1a\u5173\u95ed\uff0c\u5b9e\u73b0\u53d6\u6d88\u4fe1\u53f7\u5728 goroutine \u6811\u4e2d\u7684\u4f20\u9012\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "time"\n)\n\nfunc worker(ctx context.Context, id int) {\n    for {\n        select {\n        case <-ctx.Done():\n            // \u5f53\u4e0a\u4e0b\u6587\u88ab\u53d6\u6d88\u65f6\uff0cDone \u901a\u9053\u4f1a\u5173\u95ed\n            fmt.Printf("Worker %d \u63a5\u6536\u5230\u505c\u6b62\u4fe1\u53f7\\n", id)\n            return\n        default:\n            // \u6a21\u62df\u5de5\u4f5c\n            fmt.Printf("Worker %d \u6b63\u5728\u5de5\u4f5c...\\n", id)\n            time.Sleep(1 * time.Second)\n        }\n    }\n}\n\nfunc main() {\n    // \u521b\u5efa\u6839\u4e0a\u4e0b\u6587\u548c\u53d6\u6d88\u51fd\u6570\n    ctx, cancel := context.WithCancel(context.Background())\n\n    // \u542f\u52a8\u7b2c\u4e00\u4e2a worker\n    go worker(ctx, 1)\n\n    // \u542f\u52a8\u7b2c\u4e8c\u4e2a worker\n    go worker(ctx, 2)\n\n    // \u6a21\u62df\u4e00\u6bb5\u65f6\u95f4\u540e\u53d6\u6d88\u64cd\u4f5c\n    time.Sleep(5 * time.Second)\n    fmt.Println("\u4e3b\u7a0b\u5e8f\u53d1\u9001\u53d6\u6d88\u4fe1\u53f7")\n    cancel() // \u53d6\u6d88\u6240\u6709\u4f7f\u7528 ctx \u7684 goroutine\n\n    // \u7b49\u5f85 goroutine \u5b8c\u6210\u6e05\u7406\n    time.Sleep(2 * time.Second)\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u63d0\u793a"})," \u4f7f\u7528\u4e0a\u4e0b\u6587\u4f20\u9012\u53d6\u6d88\u4fe1\u53f7\uff0c\u53ef\u4ee5\u4f18\u96c5\u5730\u7ba1\u7406 goroutine \u7684\u751f\u547d\u5468\u671f\uff0c\u907f\u514d\u8d44\u6e90\u6cc4\u6f0f\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var c=t(96540);const d={},o=c.createContext(d);function i(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);