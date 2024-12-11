"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[57654],{77795:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Backend/Go/Protobuf/\u5d4c\u5957\u7684-message","title":"\u4f7f\u7528 Protocol Buffers \u5b9a\u4e49\u548c\u8bbf\u95ee\u5d4c\u5957\u6d88\u606f","description":"\u5b9a\u4e49 .proto \u6587\u4ef6","source":"@site/docs/Backend/Go/Protobuf/30.\u5d4c\u5957\u7684-message.md","sourceDirName":"Backend/Go/Protobuf","slug":"/Backend/Go/Protobuf/\u5d4c\u5957\u7684-message","permalink":"/docs-hub/Backend/Go/Protobuf/\u5d4c\u5957\u7684-message","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/Protobuf/30.\u5d4c\u5957\u7684-message.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":30,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Protobuf \u539f\u7406\u4e0e\u7f16\u7801\u65b9\u6cd5","permalink":"/docs-hub/Backend/Go/Protobuf/Protobuf-\u7f16\u7801\u539f\u7406"},"next":{"title":"\u4f7f\u7528 Protocol Buffers \u548c gRPC \u6784\u5efa\u8bfe\u7a0b\u670d\u52a1","permalink":"/docs-hub/Backend/Go/Protobuf/grpc-\u6570\u7ec4\u548c-map"}}');var s=o(74848),t=o(28453);const i={},l="\u4f7f\u7528 Protocol Buffers \u5b9a\u4e49\u548c\u8bbf\u95ee\u5d4c\u5957\u6d88\u606f",c={},d=[{value:"\u5b9a\u4e49 <code>.proto</code> \u6587\u4ef6",id:"\u5b9a\u4e49-proto-\u6587\u4ef6",level:2},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:3},{value:"\u8bbf\u95ee Protobuf \u7684\u5d4c\u5957\u53d8\u91cf",id:"\u8bbf\u95ee-protobuf-\u7684\u5d4c\u5957\u53d8\u91cf",level:2},{value:"\u5b9a\u4e49 <code>.proto</code> \u6587\u4ef6",id:"\u5b9a\u4e49-proto-\u6587\u4ef6-1",level:3},{value:"Go \u4ee3\u7801\u793a\u4f8b",id:"go-\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u8bf4\u660e",id:"\u8bf4\u660e-1",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4f7f\u7528-protocol-buffers-\u5b9a\u4e49\u548c\u8bbf\u95ee\u5d4c\u5957\u6d88\u606f",children:"\u4f7f\u7528 Protocol Buffers \u5b9a\u4e49\u548c\u8bbf\u95ee\u5d4c\u5957\u6d88\u606f"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5b9a\u4e49-proto-\u6587\u4ef6",children:["\u5b9a\u4e49 ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4ef6"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 Protocol Buffers \u65f6\uff0c\u6211\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"student.proto"})," \u7684\u6587\u4ef6\uff0c\u7528\u4e8e\u63cf\u8ff0\u5b66\u751f\u4fe1\u606f\u7684\u6d88\u606f\u7c7b\u578b\u548c\u670d\u52a1\u63a5\u53e3\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\n\noption go_package = "./;proto";\nimport "google/protobuf/timestamp.proto";\n\nmessage StudentRequest {\n  int64 sid = 1;\n}\n\nenum Course {\n  GO = 0;\n  JAVA = 1;\n  PYTHON = 2;\n}\n\nenum Gender {\n  MALE = 0;\n  FEMALE = 1;\n}\n\nmessage Scores {\n  int32 interview = 1;\n  int32 written = 2;\n}\n\nmessage StudentResponse {\n  int64 sid = 1;\n  string sName = 2;\n  string age = 3;\n  Course course = 4;\n  Gender gender = 5;\n  Scores scores = 6;\n  google.protobuf.Timestamp joinTime = 7;\n}\n\nservice StudentService {\n  rpc GetStudent(StudentRequest) returns (StudentResponse);\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u679a\u4e3e\u7c7b\u578b"}),"\uff1a",(0,s.jsx)(n.code,{children:"Course"})," \u548c ",(0,s.jsx)(n.code,{children:"Gender"})," \u7528\u4e8e\u8868\u793a\u56fa\u5b9a\u7684\u9009\u9879\u96c6\u5408\uff0c\u63d0\u5347\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u5b89\u5168\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5d4c\u5957\u6d88\u606f"}),"\uff1a",(0,s.jsx)(n.code,{children:"Scores"})," \u7528\u4e8e\u5305\u542b\u591a\u4e2a\u76f8\u5173\u7684\u5b57\u6bb5\uff0c\u65b9\u4fbf\u6570\u636e\u7684\u7ec4\u7ec7\u548c\u7ba1\u7406\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u65f6\u95f4\u7c7b\u578b"}),"\uff1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"google.protobuf.Timestamp"})," \u8868\u793a\u65f6\u95f4\uff0c\u53ef\u4ee5\u66f4\u597d\u5730\u5904\u7406\u8de8\u8bed\u8a00\u548c\u8de8\u5e73\u53f0\u7684\u65f6\u95f4\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbf\u95ee-protobuf-\u7684\u5d4c\u5957\u53d8\u91cf",children:"\u8bbf\u95ee Protobuf \u7684\u5d4c\u5957\u53d8\u91cf"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4f7f\u7528 Protobuf \u65f6\uff0c\u8bbf\u95ee\u5d4c\u5957\u7684\u6d88\u606f\u7c7b\u578b\u9700\u8981\u7279\u522b\u6ce8\u610f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u6f14\u793a\u5982\u4f55\u5b9a\u4e49\u548c\u8bbf\u95ee\u5d4c\u5957\u6d88\u606f\uff1a"}),"\n",(0,s.jsxs)(n.h3,{id:"\u5b9a\u4e49-proto-\u6587\u4ef6-1",children:["\u5b9a\u4e49 ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4ef6"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\n\npackage example;\n\nmessage Outer {\n  message Inner {\n    string value = 1;\n  }\n  Inner inner = 1;\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"go-\u4ee3\u7801\u793a\u4f8b",children:"Go \u4ee3\u7801\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n  "fmt"\n  "example" // \u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u5bfc\u5165\u8def\u5f84\n)\n\nfunc main() {\n  // \u521d\u59cb\u5316 Outer \u6d88\u606f\n  outer := &example.Outer{\n    Inner: &example.Outer_Inner{\n      Value: "Hello, Protobuf!",\n    },\n  }\n\n  // \u8bbf\u95ee\u5d4c\u5957\u53d8\u91cf\n  if inner := outer.GetInner(); inner != nil {\n    fmt.Println(inner.GetValue())\n  } else {\n    fmt.Println("Inner is nil")\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u8bf4\u660e-1",children:"\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u521d\u59cb\u5316\u5d4c\u5957\u6d88\u606f"}),"\uff1a\u5728\u521b\u5efa ",(0,s.jsx)(n.code,{children:"Outer"})," \u5b9e\u4f8b\u65f6\uff0c\u9700\u8981\u540c\u65f6\u521d\u59cb\u5316\u5d4c\u5957\u7684 ",(0,s.jsx)(n.code,{children:"Inner"})," \u6d88\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u8bbf\u95ee\u5d4c\u5957\u7c7b\u578b"}),"\uff1a\u5728 Go \u8bed\u8a00\u4e2d\uff0c\u5d4c\u5957\u7684\u6d88\u606f\u7c7b\u578b\u540d\u79f0\u4f1a\u88ab\u751f\u6210\u4e3a ",(0,s.jsx)(n.code,{children:"Outer_Inner"})," \u7684\u5f62\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5b89\u5168\u8bbf\u95ee"}),"\uff1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"GetInner()"})," \u548c ",(0,s.jsx)(n.code,{children:"GetValue()"})," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u5b89\u5168\u5730\u83b7\u53d6\u5d4c\u5957\u6d88\u606f\u548c\u5b57\u6bb5\u7684\u503c\uff0c\u907f\u514d\u7a7a\u6307\u9488\u5f02\u5e38\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5408\u7406\u7ec4\u7ec7\u6d88\u606f\u7ed3\u6784"}),"\uff1a\u4f7f\u7528\u5d4c\u5957\u6d88\u606f\u53ef\u4ee5\u66f4\u6e05\u6670\u5730\u8868\u8fbe\u6570\u636e\u7684\u5c42\u6b21\u5173\u7cfb\uff0c\u4f46\u5e94\u907f\u514d\u8fc7\u6df1\u7684\u5d4c\u5957\uff0c\u4fdd\u6301\u6d88\u606f\u7684\u7b80\u6d01\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u679a\u4e3e\u7c7b\u578b"}),"\uff1a\u5f53\u5b57\u6bb5\u7684\u53d6\u503c\u8303\u56f4\u56fa\u5b9a\u4e14\u6709\u9650\u65f6\uff0c\u4f7f\u7528\u679a\u4e3e\u7c7b\u578b\u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u65f6\u95f4\u5904\u7406"}),"\uff1a\u4f7f\u7528\u6807\u51c6\u7684 ",(0,s.jsx)(n.code,{children:"google.protobuf.Timestamp"})," \u7c7b\u578b\uff0c\u53ef\u4ee5\u786e\u4fdd\u65f6\u95f4\u6570\u636e\u5728\u4e0d\u540c\u8bed\u8a00\u548c\u5e73\u53f0\u95f4\u7684\u4e00\u81f4\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5bfc\u5165\u8def\u5f84"}),"\uff1a\u5728\u4f7f\u7528\u751f\u6210\u7684 Go \u4ee3\u7801\u65f6\uff0c\u9700\u8981\u786e\u4fdd\u5bfc\u5165\u8def\u5f84\u6b63\u786e\uff0c\u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u5305\u8def\u5f84\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4ee3\u7801\u751f\u6210"}),"\uff1a\u4fee\u6539 ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4ef6\u540e\uff0c\u9700\u8981\u91cd\u65b0\u751f\u6210\u5bf9\u5e94\u7684 Go \u4ee3\u7801\uff0c\u4ee5\u786e\u4fdd\u4ee3\u7801\u4e0e\u5b9a\u4e49\u540c\u6b65\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7248\u672c\u517c\u5bb9\u6027"}),"\uff1a\u5728\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93\u65f6\uff0c\u8981\u6ce8\u610f\u7248\u672c\u7684\u517c\u5bb9\u6027\uff0c\u907f\u514d\u7531\u4e8e\u7248\u672c\u5dee\u5f02\u5bfc\u81f4\u7684\u95ee\u9898\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var r=o(96540);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);