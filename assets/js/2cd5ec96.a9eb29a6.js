"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["19886"],{21278:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"Backend/Go/Protobuf/\u5D4C\u5957\u7684-message","title":"\u4F7F\u7528 Protocol Buffers \u5B9A\u4E49\u548C\u8BBF\u95EE\u5D4C\u5957\u6D88\u606F","description":"\u5B9A\u4E49 .proto \u6587\u4EF6","source":"@site/docs/Backend/Go/Protobuf/30.\u5D4C\u5957\u7684-message.md","sourceDirName":"Backend/Go/Protobuf","slug":"/Backend/Go/Protobuf/\u5D4C\u5957\u7684-message","permalink":"/docs-hub/Backend/Go/Protobuf/\u5D4C\u5957\u7684-message","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/Protobuf/30.\u5D4C\u5957\u7684-message.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":30,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Protobuf \u539F\u7406\u4E0E\u7F16\u7801\u65B9\u6CD5","permalink":"/docs-hub/Backend/Go/Protobuf/Protobuf-\u7F16\u7801\u539F\u7406"},"next":{"title":"\u4F7F\u7528 Protocol Buffers \u548C gRPC \u6784\u5EFA\u8BFE\u7A0B\u670D\u52A1","permalink":"/docs-hub/Backend/Go/Protobuf/grpc-\u6570\u7EC4\u548C-map"}}'),s=r("85893"),t=r("50065");let i={},l="\u4F7F\u7528 Protocol Buffers \u5B9A\u4E49\u548C\u8BBF\u95EE\u5D4C\u5957\u6D88\u606F",d={},c=[{value:"\u5B9A\u4E49 <code>.proto</code> \u6587\u4EF6",id:"\u5B9A\u4E49-proto-\u6587\u4EF6",level:2},{value:"\u8BF4\u660E",id:"\u8BF4\u660E",level:3},{value:"\u8BBF\u95EE Protobuf \u7684\u5D4C\u5957\u53D8\u91CF",id:"\u8BBF\u95EE-protobuf-\u7684\u5D4C\u5957\u53D8\u91CF",level:2},{value:"\u5B9A\u4E49 <code>.proto</code> \u6587\u4EF6",id:"\u5B9A\u4E49-proto-\u6587\u4EF6-1",level:3},{value:"Go \u4EE3\u7801\u793A\u4F8B",id:"go-\u4EE3\u7801\u793A\u4F8B",level:3},{value:"\u8BF4\u660E",id:"\u8BF4\u660E-1",level:3},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function u(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4F7F\u7528-protocol-buffers-\u5B9A\u4E49\u548C\u8BBF\u95EE\u5D4C\u5957\u6D88\u606F",children:"\u4F7F\u7528 Protocol Buffers \u5B9A\u4E49\u548C\u8BBF\u95EE\u5D4C\u5957\u6D88\u606F"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5B9A\u4E49-proto-\u6587\u4EF6",children:["\u5B9A\u4E49 ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4EF6"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4F7F\u7528 Protocol Buffers \u65F6\uFF0C\u6211\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3A ",(0,s.jsx)(n.code,{children:"student.proto"})," \u7684\u6587\u4EF6\uFF0C\u7528\u4E8E\u63CF\u8FF0\u5B66\u751F\u4FE1\u606F\u7684\u6D88\u606F\u7C7B\u578B\u548C\u670D\u52A1\u63A5\u53E3\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\n\noption go_package = "./;proto";\nimport "google/protobuf/timestamp.proto";\n\nmessage StudentRequest {\n  int64 sid = 1;\n}\n\nenum Course {\n  GO = 0;\n  JAVA = 1;\n  PYTHON = 2;\n}\n\nenum Gender {\n  MALE = 0;\n  FEMALE = 1;\n}\n\nmessage Scores {\n  int32 interview = 1;\n  int32 written = 2;\n}\n\nmessage StudentResponse {\n  int64 sid = 1;\n  string sName = 2;\n  string age = 3;\n  Course course = 4;\n  Gender gender = 5;\n  Scores scores = 6;\n  google.protobuf.Timestamp joinTime = 7;\n}\n\nservice StudentService {\n  rpc GetStudent(StudentRequest) returns (StudentResponse);\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u8BF4\u660E",children:"\u8BF4\u660E"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u679A\u4E3E\u7C7B\u578B"}),"\uFF1A",(0,s.jsx)(n.code,{children:"Course"})," \u548C ",(0,s.jsx)(n.code,{children:"Gender"})," \u7528\u4E8E\u8868\u793A\u56FA\u5B9A\u7684\u9009\u9879\u96C6\u5408\uFF0C\u63D0\u5347\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u5B89\u5168\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5D4C\u5957\u6D88\u606F"}),"\uFF1A",(0,s.jsx)(n.code,{children:"Scores"})," \u7528\u4E8E\u5305\u542B\u591A\u4E2A\u76F8\u5173\u7684\u5B57\u6BB5\uFF0C\u65B9\u4FBF\u6570\u636E\u7684\u7EC4\u7EC7\u548C\u7BA1\u7406\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u65F6\u95F4\u7C7B\u578B"}),"\uFF1A\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"google.protobuf.Timestamp"})," \u8868\u793A\u65F6\u95F4\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u5904\u7406\u8DE8\u8BED\u8A00\u548C\u8DE8\u5E73\u53F0\u7684\u65F6\u95F4\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BBF\u95EE-protobuf-\u7684\u5D4C\u5957\u53D8\u91CF",children:"\u8BBF\u95EE Protobuf \u7684\u5D4C\u5957\u53D8\u91CF"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4F7F\u7528 Protobuf \u65F6\uFF0C\u8BBF\u95EE\u5D4C\u5957\u7684\u6D88\u606F\u7C7B\u578B\u9700\u8981\u7279\u522B\u6CE8\u610F\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B\uFF0C\u6F14\u793A\u5982\u4F55\u5B9A\u4E49\u548C\u8BBF\u95EE\u5D4C\u5957\u6D88\u606F\uFF1A"}),"\n",(0,s.jsxs)(n.h3,{id:"\u5B9A\u4E49-proto-\u6587\u4EF6-1",children:["\u5B9A\u4E49 ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4EF6"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\n\npackage example;\n\nmessage Outer {\n  message Inner {\n    string value = 1;\n  }\n  Inner inner = 1;\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"go-\u4EE3\u7801\u793A\u4F8B",children:"Go \u4EE3\u7801\u793A\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n  "fmt"\n  "example" // \u66FF\u6362\u4E3A\u5B9E\u9645\u7684\u5BFC\u5165\u8DEF\u5F84\n)\n\nfunc main() {\n  // \u521D\u59CB\u5316 Outer \u6D88\u606F\n  outer := &example.Outer{\n    Inner: &example.Outer_Inner{\n      Value: "Hello, Protobuf!",\n    },\n  }\n\n  // \u8BBF\u95EE\u5D4C\u5957\u53D8\u91CF\n  if inner := outer.GetInner(); inner != nil {\n    fmt.Println(inner.GetValue())\n  } else {\n    fmt.Println("Inner is nil")\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u8BF4\u660E-1",children:"\u8BF4\u660E"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u521D\u59CB\u5316\u5D4C\u5957\u6D88\u606F"}),"\uFF1A\u5728\u521B\u5EFA ",(0,s.jsx)(n.code,{children:"Outer"})," \u5B9E\u4F8B\u65F6\uFF0C\u9700\u8981\u540C\u65F6\u521D\u59CB\u5316\u5D4C\u5957\u7684 ",(0,s.jsx)(n.code,{children:"Inner"})," \u6D88\u606F\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u8BBF\u95EE\u5D4C\u5957\u7C7B\u578B"}),"\uFF1A\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u5D4C\u5957\u7684\u6D88\u606F\u7C7B\u578B\u540D\u79F0\u4F1A\u88AB\u751F\u6210\u4E3A ",(0,s.jsx)(n.code,{children:"Outer_Inner"})," \u7684\u5F62\u5F0F\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5B89\u5168\u8BBF\u95EE"}),"\uFF1A\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"GetInner()"})," \u548C ",(0,s.jsx)(n.code,{children:"GetValue()"})," \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5B89\u5168\u5730\u83B7\u53D6\u5D4C\u5957\u6D88\u606F\u548C\u5B57\u6BB5\u7684\u503C\uFF0C\u907F\u514D\u7A7A\u6307\u9488\u5F02\u5E38\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5408\u7406\u7EC4\u7EC7\u6D88\u606F\u7ED3\u6784"}),"\uFF1A\u4F7F\u7528\u5D4C\u5957\u6D88\u606F\u53EF\u4EE5\u66F4\u6E05\u6670\u5730\u8868\u8FBE\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\uFF0C\u4F46\u5E94\u907F\u514D\u8FC7\u6DF1\u7684\u5D4C\u5957\uFF0C\u4FDD\u6301\u6D88\u606F\u7684\u7B80\u6D01\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u679A\u4E3E\u7C7B\u578B"}),"\uFF1A\u5F53\u5B57\u6BB5\u7684\u53D6\u503C\u8303\u56F4\u56FA\u5B9A\u4E14\u6709\u9650\u65F6\uFF0C\u4F7F\u7528\u679A\u4E3E\u7C7B\u578B\u53EF\u4EE5\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u65F6\u95F4\u5904\u7406"}),"\uFF1A\u4F7F\u7528\u6807\u51C6\u7684 ",(0,s.jsx)(n.code,{children:"google.protobuf.Timestamp"})," \u7C7B\u578B\uFF0C\u53EF\u4EE5\u786E\u4FDD\u65F6\u95F4\u6570\u636E\u5728\u4E0D\u540C\u8BED\u8A00\u548C\u5E73\u53F0\u95F4\u7684\u4E00\u81F4\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5BFC\u5165\u8DEF\u5F84"}),"\uFF1A\u5728\u4F7F\u7528\u751F\u6210\u7684 Go \u4EE3\u7801\u65F6\uFF0C\u9700\u8981\u786E\u4FDD\u5BFC\u5165\u8DEF\u5F84\u6B63\u786E\uFF0C\u66FF\u6362\u4E3A\u5B9E\u9645\u7684\u5305\u8DEF\u5F84\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4EE3\u7801\u751F\u6210"}),"\uFF1A\u4FEE\u6539 ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4EF6\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u751F\u6210\u5BF9\u5E94\u7684 Go \u4EE3\u7801\uFF0C\u4EE5\u786E\u4FDD\u4EE3\u7801\u4E0E\u5B9A\u4E49\u540C\u6B65\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7248\u672C\u517C\u5BB9\u6027"}),"\uFF1A\u5728\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\u65F6\uFF0C\u8981\u6CE8\u610F\u7248\u672C\u7684\u517C\u5BB9\u6027\uFF0C\u907F\u514D\u7531\u4E8E\u7248\u672C\u5DEE\u5F02\u5BFC\u81F4\u7684\u95EE\u9898\u3002"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var o=r(67294);let s={},t=o.createContext(s);function i(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);