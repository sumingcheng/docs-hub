"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["54963"],{50087:function(e,n,o){o.r(n),o.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"Backend/Go/Protobuf/ProtocolBuffers\u548CgRPC\u751F\u6210\u4EE3\u7801","title":"\u5728 Go \u4E2D\u4F7F\u7528 Protocol Buffers \u548C gRPC \u751F\u6210\u4EE3\u7801","description":"\u7F16\u5199 .proto \u6587\u4EF6","source":"@site/docs/Backend/Go/Protobuf/10.ProtocolBuffers\u548CgRPC\u751F\u6210\u4EE3\u7801.md","sourceDirName":"Backend/Go/Protobuf","slug":"/Backend/Go/Protobuf/ProtocolBuffers\u548CgRPC\u751F\u6210\u4EE3\u7801","permalink":"/docs-hub/Backend/Go/Protobuf/ProtocolBuffers\u548CgRPC\u751F\u6210\u4EE3\u7801","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/Protobuf/10.ProtocolBuffers\u548CgRPC\u751F\u6210\u4EE3\u7801.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":10,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Protobuf","permalink":"/docs-hub/category/protobuf"},"next":{"title":"Protobuf \u539F\u7406\u4E0E\u7F16\u7801\u65B9\u6CD5","permalink":"/docs-hub/Backend/Go/Protobuf/Protobuf-\u7F16\u7801\u539F\u7406"}}'),s=o("85893"),t=o("50065");let i={},c="\u5728 Go \u4E2D\u4F7F\u7528 Protocol Buffers \u548C gRPC \u751F\u6210\u4EE3\u7801",l={},d=[{value:"\u7F16\u5199 <code>.proto</code> \u6587\u4EF6",id:"\u7F16\u5199-proto-\u6587\u4EF6",level:2},{value:"\u5B89\u88C5\u5FC5\u8981\u7684\u63D2\u4EF6",id:"\u5B89\u88C5\u5FC5\u8981\u7684\u63D2\u4EF6",level:2},{value:"\u751F\u6210 Go \u4EE3\u7801",id:"\u751F\u6210-go-\u4EE3\u7801",level:2},{value:"\u751F\u6210\u7684\u6587\u4EF6",id:"\u751F\u6210\u7684\u6587\u4EF6",level:2},{value:"<code>myInfo.pb.go</code> \u6587\u4EF6\u5206\u6790",id:"myinfopbgo-\u6587\u4EF6\u5206\u6790",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u76F8\u5173\u94FE\u63A5",id:"\u76F8\u5173\u94FE\u63A5",level:2}];function g(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5728-go-\u4E2D\u4F7F\u7528-protocol-buffers-\u548C-grpc-\u751F\u6210\u4EE3\u7801",children:"\u5728 Go \u4E2D\u4F7F\u7528 Protocol Buffers \u548C gRPC \u751F\u6210\u4EE3\u7801"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u7F16\u5199-proto-\u6587\u4EF6",children:["\u7F16\u5199 ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4EF6"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\uFF0C\u6211\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A ",(0,s.jsx)(n.code,{children:"myInfo.proto"})," \u7684\u6587\u4EF6\uFF0C\u5B9A\u4E49\u4E86\u6D88\u606F\u7C7B\u578B\u548C\u670D\u52A1\u63A5\u53E3\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\noption go_package = "./;proto";\n\nmessage MyInfoRequest {\n  string name = 1;\n  int32 age = 2;\n  bool isMarriage = 3;\n}\n\nmessage MyInfoResponse {\n  string name = 1;\n  int32 age = 2;\n  bool isMarriage = 3;\n}\n\n// \u5B9A\u4E49\u670D\u52A1\u63A5\u53E3\nservice MyInfoService {\n  rpc GetData(MyInfoRequest) returns (MyInfoResponse);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5B89\u88C5\u5FC5\u8981\u7684\u63D2\u4EF6",children:"\u5B89\u88C5\u5FC5\u8981\u7684\u63D2\u4EF6"}),"\n",(0,s.jsx)(n.p,{children:"\u4E3A\u4E86\u5728 Go \u4E2D\u4F7F\u7528 Protocol Buffers \u548C gRPC\uFF0C\u9700\u8981\u5B89\u88C5\u76F8\u5E94\u7684\u63D2\u4EF6\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get -u google.golang.org/protobuf/cmd/protoc-gen-go\ngo get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc\n\nprotoc --version\nprotoc-gen-go --version\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u786E\u4FDD ",(0,s.jsx)(n.code,{children:"protoc"})," \u548C ",(0,s.jsx)(n.code,{children:"protoc-gen-go"})," \u5DF2\u6B63\u786E\u5B89\u88C5\u5E76\u67E5\u770B\u5176\u7248\u672C\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u751F\u6210-go-\u4EE3\u7801",children:"\u751F\u6210 Go \u4EE3\u7801"}),"\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u751F\u6210 Go \u4EE3\u7801\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"protoc --go_out=. --go-grpc_out=. myInfo.proto\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6307\u5B9A\u8F93\u5165\u6587\u4EF6\u548C\u8F93\u51FA\u9009\u9879\uFF0C\u4EE5\u751F\u6210\u6240\u9700\u7684 Go \u4EE3\u7801\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u751F\u6210\u7684\u6587\u4EF6",children:"\u751F\u6210\u7684\u6587\u4EF6"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884C\u547D\u4EE4\u540E\uFF0C\u4F1A\u751F\u6210\u4E24\u4E2A\u6587\u4EF6\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"myInfo.pb.go"})}),"\uFF1A\u5305\u542B ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u6D88\u606F\uFF08Message\uFF09\u548C\u679A\u4E3E\uFF08Enum\uFF09\u7C7B\u578B\u7684 Go \u8868\u793A\uFF0C\u7531 ",(0,s.jsx)(n.code,{children:"protoc-gen-go"})," \u63D2\u4EF6\u751F\u6210\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"myInfo_grpc.pb.go"})}),"\uFF1A\u7528\u4E8E gRPC\uFF0C\u5305\u542B ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u670D\u52A1\u63A5\u53E3\u7684 Go \u5B9E\u73B0\uFF0C\u7531 ",(0,s.jsx)(n.code,{children:"protoc-gen-go-grpc"})," \u63D2\u4EF6\u751F\u6210\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"myinfopbgo-\u6587\u4EF6\u5206\u6790",children:[(0,s.jsx)(n.code,{children:"myInfo.pb.go"})," \u6587\u4EF6\u5206\u6790"]}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u6587\u4EF6\u5305\u542B\u6D88\u606F\u7C7B\u578B\u7684 Go \u7ED3\u6784\u4F53\u5B9A\u4E49\uFF0C\u4EE5\u53CA\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u7684\u65B9\u6CD5\u3002\u4EE5\u4E0B\u662F\u90E8\u5206\u4EE3\u7801\u5206\u6790\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Code generated by protoc-gen-go. DO NOT EDIT.\n// versions:\n// 	protoc-gen-go v1.32.0\n// 	protoc        v4.25.2\n// source: myInfo.proto\n\npackage proto\n\nimport (\n	protoreflect "google.golang.org/protobuf/reflect/protoreflect"\n	protoimpl   "google.golang.org/protobuf/runtime/protoimpl"\n	reflect     "reflect"\n	sync        "sync"\n)\n\n// MyInfoRequest \u662F\u8BF7\u6C42\u6D88\u606F\u7684\u7ED3\u6784\u4F53\ntype MyInfoRequest struct {\n	state         protoimpl.MessageState\n	sizeCache     protoimpl.SizeCache\n	unknownFields protoimpl.UnknownFields\n\n	Name       string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`\n	Age        int32  `protobuf:"varint,2,opt,name=age,proto3" json:"age,omitempty"`\n	IsMarriage bool   `protobuf:"varint,3,opt,name=isMarriage,proto3" json:"isMarriage,omitempty"`\n}\n\n// Reset \u91CD\u7F6E\u6D88\u606F\u7684\u72B6\u6001\nfunc (x *MyInfoRequest) Reset() {\n	*x = MyInfoRequest{}\n	if protoimpl.UnsafeEnabled {\n		mi := &file_myInfo_proto_msgTypes[0]\n		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))\n		ms.StoreMessageInfo(mi)\n	}\n}\n\n// String \u8FD4\u56DE\u6D88\u606F\u7684\u5B57\u7B26\u4E32\u8868\u793A\nfunc (x *MyInfoRequest) String() string {\n	return protoimpl.X.MessageStringOf(x)\n}\n\n// ProtoMessage \u6807\u8BC6\u8FD9\u662F\u4E00\u4E2A Protobuf \u6D88\u606F\nfunc (*MyInfoRequest) ProtoMessage() {}\n\n// \u83B7\u53D6 Name \u5B57\u6BB5\u7684\u503C\nfunc (x *MyInfoRequest) GetName() string {\n	if x != nil {\n		return x.Name\n	}\n	return ""\n}\n\n// \u83B7\u53D6 Age \u5B57\u6BB5\u7684\u503C\nfunc (x *MyInfoRequest) GetAge() int32 {\n	if x != nil {\n		return x.Age\n	}\n	return 0\n}\n\n// \u83B7\u53D6 IsMarriage \u5B57\u6BB5\u7684\u503C\nfunc (x *MyInfoRequest) GetIsMarriage() bool {\n	if x != nil {\n		return x.IsMarriage\n	}\n	return false\n}\n\n// MyInfoResponse \u7684\u5B9A\u4E49\u4E0E\u6B64\u7C7B\u4F3C\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MyInfoResponse"})," \u7ED3\u6784\u4F53\u7684\u5B9A\u4E49\u548C\u65B9\u6CD5\u4E0E ",(0,s.jsx)(n.code,{children:"MyInfoRequest"})," \u7C7B\u4F3C\uFF0C\u7528\u4E8E\u5904\u7406\u54CD\u5E94\u6D88\u606F\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u63D2\u4EF6\u7248\u672C"}),"\uFF1A\u786E\u4FDD ",(0,s.jsx)(n.code,{children:"protoc"})," \u548C\u76F8\u5173\u7684 Go \u63D2\u4EF6\u5DF2\u6B63\u786E\u5B89\u88C5\uFF0C\u4E14\u7248\u672C\u517C\u5BB9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"go_package"})," \u8BBE\u7F6E"]}),"\uFF1A\u5728 ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4EF6\u4E2D\uFF0C",(0,s.jsx)(n.code,{children:"option go_package"})," \u7684\u8BBE\u7F6E\u4F1A\u5F71\u54CD\u751F\u6210\u4EE3\u7801\u7684\u5305\u540D\uFF0C\u9700\u6B63\u786E\u914D\u7F6E\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u81EA\u52A8\u751F\u6210\u4EE3\u7801"}),"\uFF1A\u751F\u6210\u7684\u6587\u4EF6\u4E0D\u5E94\u624B\u52A8\u4FEE\u6539\uFF0C\u4EE5\u514D\u5F71\u54CD\u81EA\u52A8\u751F\u6210\u673A\u5236\uFF0C\u82E5\u9700\u66F4\u6539\u5E94\u4FEE\u6539 ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4EF6\u540E\u91CD\u65B0\u751F\u6210\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u53D8\u91CF\u547D\u540D"}),"\uFF1A\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\u6613\u8BFB\u7684\u53D8\u91CF\u540D\uFF0C\u63D0\u5347\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u7EF4\u62A4\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u7248\u672C\u7BA1\u7406"}),"\uFF1A\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 Go Modules\uFF0C\u786E\u4FDD\u4F9D\u8D56\u7248\u672C\u7684\u53EF\u63A7\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4EE3\u7801\u751F\u6210\u81EA\u52A8\u5316"}),"\uFF1A\u53EF\u4EE5\u7F16\u5199\u811A\u672C\u6216\u4F7F\u7528 Makefile\uFF0C\u5C06\u4EE3\u7801\u751F\u6210\u6B65\u9AA4\u81EA\u52A8\u5316\uFF0C\u7B80\u5316\u5F00\u53D1\u6D41\u7A0B\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5B66\u4E60\u751F\u6210\u4EE3\u7801"}),"\uFF1A\u6DF1\u5165\u7406\u89E3\u751F\u6210\u7684\u4EE3\u7801\uFF0C\u6709\u52A9\u4E8E\u66F4\u597D\u5730\u4F7F\u7528\u548C\u8C03\u8BD5 Protocol Buffers \u548C gRPC\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u76F8\u5173\u94FE\u63A5",children:"\u76F8\u5173\u94FE\u63A5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers",children:"Protocol Buffers \u5B98\u65B9\u6587\u6863"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://grpc.io/docs/languages/go/quickstart/",children:"gRPC \u5B98\u65B9\u6587\u6863"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/sumingcheng/go-Learning",children:"sumingcheng/go-Learning"})}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return i}});var r=o(67294);let s={},t=r.createContext(s);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);