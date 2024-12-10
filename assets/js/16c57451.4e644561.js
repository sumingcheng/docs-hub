"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[35801],{14616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"Backend/Go/gRPC\u9ad8\u7ea7/gRPC\u5ba2\u6237\u7aef\u62e6\u622a\u5668","title":"gRPC \u5ba2\u6237\u7aef\u62e6\u622a\u5668\u5b9e\u73b0\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236","description":"\u4ee3\u7801\u89e3\u6790","source":"@site/docs/Backend/Go/gRPC\u9ad8\u7ea7/2.gRPC\u5ba2\u6237\u7aef\u62e6\u622a\u5668.md","sourceDirName":"Backend/Go/gRPC\u9ad8\u7ea7","slug":"/Backend/Go/gRPC\u9ad8\u7ea7/gRPC\u5ba2\u6237\u7aef\u62e6\u622a\u5668","permalink":"/docs-hub/docs/Backend/Go/gRPC\u9ad8\u7ea7/gRPC\u5ba2\u6237\u7aef\u62e6\u622a\u5668","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/gRPC\u9ad8\u7ea7/2.gRPC\u5ba2\u6237\u7aef\u62e6\u622a\u5668.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":2,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u4e2d\u5b9e\u73b0 gRPC \u670d\u52a1\u7aef\u62e6\u622a\u5668","permalink":"/docs-hub/docs/Backend/Go/gRPC\u9ad8\u7ea7/gRPC\u670d\u52a1\u7aef\u62e6\u622a\u5668"},"next":{"title":"Go \u8bed\u8a00\u4e2d\u7684 Metadata \u5e94\u7528\u8be6\u89e3","permalink":"/docs-hub/docs/Backend/Go/gRPC\u9ad8\u7ea7/Go-metadata"}}');var r=t(74848),o=t(28453);const i={},d="gRPC \u5ba2\u6237\u7aef\u62e6\u622a\u5668\u5b9e\u73b0\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",s={},l=[{value:"\u4ee3\u7801\u89e3\u6790",id:"\u4ee3\u7801\u89e3\u6790",level:2},{value:"\u5ba2\u6237\u7aef\u914d\u7f6e\u4e0e\u62e6\u622a\u5668\u8bbe\u7f6e",id:"\u5ba2\u6237\u7aef\u914d\u7f6e\u4e0e\u62e6\u622a\u5668\u8bbe\u7f6e",level:3},{value:"\u8d85\u65f6\u63a7\u5236\u62e6\u622a\u5668",id:"\u8d85\u65f6\u63a7\u5236\u62e6\u622a\u5668",level:3},{value:"\u9ed8\u8ba4\u8d85\u65f6\u8bbe\u7f6e\u51fd\u6570",id:"\u9ed8\u8ba4\u8d85\u65f6\u8bbe\u7f6e\u51fd\u6570",level:3},{value:"gRPC \u62e6\u622a\u5668\u7684\u5e94\u7528",id:"grpc-\u62e6\u622a\u5668\u7684\u5e94\u7528",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"grpc-\u5ba2\u6237\u7aef\u62e6\u622a\u5668\u5b9e\u73b0\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",children:"gRPC \u5ba2\u6237\u7aef\u62e6\u622a\u5668\u5b9e\u73b0\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4ee3\u7801\u89e3\u6790",children:"\u4ee3\u7801\u89e3\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5c06\u5c55\u793a\u5982\u4f55\u5728 gRPC \u5ba2\u6237\u7aef\u5e94\u7528\u4e2d\u4f7f\u7528\u4e00\u5143\u62e6\u622a\u5668\u6765\u5b9e\u73b0\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236\u3002\u4ee3\u7801\u5206\u4e3a\u51e0\u4e2a\u5173\u952e\u90e8\u5206\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5ba2\u6237\u7aef\u914d\u7f6e\u4e0e\u62e6\u622a\u5668\u8bbe\u7f6e",children:"\u5ba2\u6237\u7aef\u914d\u7f6e\u4e0e\u62e6\u622a\u5668\u8bbe\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"grpc.Dial"})," \u4e0e gRPC \u670d\u52a1\u7aef\u5efa\u7acb\u8fde\u63a5\uff0c\u5e76\u5728\u6b64\u8fc7\u7a0b\u4e2d\u5e94\u7528\u81ea\u5b9a\u4e49\u7684\u62e6\u622a\u5668\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"grpc_middleware.ChainUnaryClient"})," \u5c06 ",(0,r.jsx)(n.code,{children:"clientTimeout"})," \u62e6\u622a\u5668\u6dfb\u52a0\u5230\u8c03\u7528\u94fe\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'opts := []grpc.DialOption{\n    grpc.WithTransportCredentials(insecure.NewCredentials()),\n    grpc.WithUnaryInterceptor(\n        grpc_middleware.ChainUnaryClient(clientTimeout()),\n    ),\n}\nconn, err := grpc.Dial("localhost:50051", opts...)\nif err != nil {\n    log.Fatalf("\u8fde\u63a5\u5931\u8d25: %v", err)\n}\ndefer conn.Close()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u8d85\u65f6\u63a7\u5236\u62e6\u622a\u5668",children:"\u8d85\u65f6\u63a7\u5236\u62e6\u622a\u5668"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"clientTimeout"})," \u51fd\u6570\u5b9a\u4e49\u4e86\u4e00\u4e2a\u4e00\u5143\u5ba2\u6237\u7aef\u62e6\u622a\u5668\u3002\u8fd9\u4e2a\u62e6\u622a\u5668\u7684\u4f5c\u7528\u662f\u68c0\u67e5\u4f20\u5165\u7684 ",(0,r.jsx)(n.code,{children:"context.Context"})," \u662f\u5426\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u622a\u6b62\u65f6\u95f4\uff08Deadline\uff09\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5b83\u4f1a\u8bbe\u7f6e\u4e00\u4e2a\u9ed8\u8ba4\u7684\u8d85\u65f6\u65f6\u95f4\uff0860 \u79d2\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u6240\u6709\u901a\u8fc7\u8fd9\u4e2a\u62e6\u622a\u5668\u7684 gRPC \u8bf7\u6c42\u90fd\u6709\u4e00\u4e2a\u8d85\u65f6\u9650\u5236\uff0c\u9632\u6b62\u8bf7\u6c42\u56e0\u4e3a\u7f51\u7edc\u5ef6\u8fdf\u7b49\u539f\u56e0\u800c\u65e0\u9650\u671f\u5730\u6302\u8d77\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func clientTimeout() grpc.UnaryClientInterceptor {\n    return func(\n        ctx context.Context,\n        method string,\n        req, reply interface{},\n        cc *grpc.ClientConn,\n        invoker grpc.UnaryInvoker,\n        opts ...grpc.CallOption,\n    ) error {\n        ctx, cancel := ensureTimeout(ctx, 60*time.Second)\n        if cancel != nil {\n            defer cancel()\n        }\n        return invoker(ctx, method, req, reply, cc, opts...)\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u9ed8\u8ba4\u8d85\u65f6\u8bbe\u7f6e\u51fd\u6570",children:"\u9ed8\u8ba4\u8d85\u65f6\u8bbe\u7f6e\u51fd\u6570"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ensureTimeout"})," \u51fd\u6570\u8d1f\u8d23\u68c0\u67e5\u5f53\u524d\u4e0a\u4e0b\u6587\u662f\u5426\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u622a\u6b62\u65f6\u95f4\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5b83\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4e0a\u4e0b\u6587\uff0c\u5e76\u8bbe\u7f6e 60 \u79d2\u540e\u8fc7\u671f\u3002\u8fd9\u4e2a\u51fd\u6570\u8fd4\u56de\u66f4\u65b0\u540e\u7684\u4e0a\u4e0b\u6587\u548c\u4e00\u4e2a\u53d6\u6d88\u51fd\u6570\uff0c\u7528\u4e8e\u5728\u8bf7\u6c42\u5b8c\u6210\u540e\u91ca\u653e\u8d44\u6e90\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func ensureTimeout(ctx context.Context, timeout time.Duration) (context.Context, context.CancelFunc) {\n    if _, ok := ctx.Deadline(); !ok {\n        return context.WithTimeout(ctx, timeout)\n    }\n    return ctx, nil\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"grpc-\u62e6\u622a\u5668\u7684\u5e94\u7528",children:"gRPC \u62e6\u622a\u5668\u7684\u5e94\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u5728 gRPC \u5ba2\u6237\u7aef\u4e2d\u5b9e\u73b0\u8d85\u65f6\u63a7\u5236\u62e6\u622a\u5668\uff0c\u53ef\u4ee5\u786e\u4fdd\u670d\u52a1\u7684\u5065\u58ee\u6027\u548c\u54cd\u5e94\u6027\u3002\u8fd9\u79cd\u6a21\u5f0f\u7279\u522b\u9002\u7528\u4e8e\u6784\u5efa\u5206\u5e03\u5f0f\u7cfb\u7edf\uff0c\u7f51\u7edc\u5ef6\u8fdf\u548c\u670d\u52a1\u4e0d\u53ef\u7528\u53ef\u80fd\u5bfc\u81f4\u5ba2\u6237\u7aef\u8bf7\u6c42\u957f\u65f6\u95f4\u6302\u8d77\uff0c\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u5916\uff0cgRPC \u62e6\u622a\u5668\u7684\u7075\u6d3b\u6027\u4f7f\u5f97\u5f00\u53d1\u8005\u80fd\u591f\u8f7b\u677e\u5730\u63d2\u5165\u81ea\u5b9a\u4e49\u903b\u8f91\uff0c\u4f8b\u5982\u8ba4\u8bc1\u3001\u65e5\u5fd7\u8bb0\u5f55\u548c\u76d1\u63a7\u7b49\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u4e86\u670d\u52a1\u7684\u53ef\u7ef4\u62a4\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var c=t(96540);const r={},o=c.createContext(r);function i(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);