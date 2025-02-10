"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["27789"],{36049:function(e,n,o){o.r(n),o.d(n,{default:()=>g,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"Backend/Go/gRPC/gRPC\u5E94\u7528","title":"\u5728 Windows \u4E0A\u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 gRPC \u5E94\u7528","description":"\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177","source":"@site/docs/Backend/Go/gRPC/2.gRPC\u5E94\u7528.md","sourceDirName":"Backend/Go/gRPC","slug":"/Backend/Go/gRPC/gRPC\u5E94\u7528","permalink":"/docs-hub/Backend/Go/gRPC/gRPC\u5E94\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/gRPC/2.gRPC\u5E94\u7528.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":2,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"\u6DF1\u5165\u7406\u89E3 HTTP\u3001gRPC \u4E0E\u6570\u636E\u683C\u5F0F","permalink":"/docs-hub/Backend/Go/gRPC/gRPC-\u57FA\u7840\u77E5\u8BC6"},"next":{"title":"GRPC \u5B9E\u73B0 TodoList","permalink":"/docs-hub/Backend/Go/gRPC/GRPC\u5B9E\u73B0TodoList"}}'),l=o("85893"),c=o("50065");let t={},s="\u5728 Windows \u4E0A\u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 gRPC \u5E94\u7528",i={},d=[{value:"\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177",id:"\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177",level:2},{value:"\u521D\u59CB\u5316 Go \u6A21\u5757",id:"\u521D\u59CB\u5316-go-\u6A21\u5757",level:3},{value:"\u4E0B\u8F7D Protocol Buffers",id:"\u4E0B\u8F7D-protocol-buffers",level:3},{value:"\u914D\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF Path",id:"\u914D\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF-path",level:3},{value:"\u9A8C\u8BC1\u5B89\u88C5",id:"\u9A8C\u8BC1\u5B89\u88C5",level:3},{value:"\u5B89\u88C5 Go \u7684 Protocol Buffers \u63D2\u4EF6",id:"\u5B89\u88C5-go-\u7684-protocol-buffers-\u63D2\u4EF6",level:3},{value:"\u7F16\u5199 .proto \u6587\u4EF6",id:"\u7F16\u5199-proto-\u6587\u4EF6",level:2},{value:"\u751F\u6210 Go \u4EE3\u7801",id:"\u751F\u6210-go-\u4EE3\u7801",level:2},{value:"\u76EE\u5F55\u7ED3\u6784",id:"\u76EE\u5F55\u7ED3\u6784",level:3},{value:"\u7F16\u5199\u670D\u52A1\u7AEF\u4EE3\u7801",id:"\u7F16\u5199\u670D\u52A1\u7AEF\u4EE3\u7801",level:2},{value:"\u7F16\u5199\u5BA2\u6237\u7AEF\u4EE3\u7801",id:"\u7F16\u5199\u5BA2\u6237\u7AEF\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u5728-windows-\u4E0A\u4F7F\u7528-go-\u8BED\u8A00\u5F00\u53D1-grpc-\u5E94\u7528",children:"\u5728 Windows \u4E0A\u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 gRPC \u5E94\u7528"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177",children:"\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177"}),"\n",(0,l.jsx)(n.h3,{id:"\u521D\u59CB\u5316-go-\u6A21\u5757",children:"\u521D\u59CB\u5316 Go \u6A21\u5757"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"go mod init proto\ngo get -u google.golang.org/grpc\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u4E0B\u8F7D-protocol-buffers",children:"\u4E0B\u8F7D Protocol Buffers"}),"\n",(0,l.jsxs)(n.p,{children:["\u524D\u5F80 ",(0,l.jsx)(n.a,{href:"https://github.com/protocolbuffers/protobuf/releases/tag/v25.2",children:"https://github.com/protocolbuffers/protobuf/releases/tag/v25.2"})," \u4E0B\u8F7D\u9002\u7528\u4E8E\u5F53\u524D\u7CFB\u7EDF\u7684 Protocol Buffers \u4E8C\u8FDB\u5236\u6587\u4EF6\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u914D\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF-path",children:"\u914D\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF Path"}),"\n",(0,l.jsxs)(n.p,{children:["\u5C06 Protocol Buffers \u7684 ",(0,l.jsx)(n.code,{children:"bin"})," \u76EE\u5F55\u6DFB\u52A0\u5230\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF ",(0,l.jsx)(n.code,{children:"Path"})," \u4E2D\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(4845).Z+"",width:"679",height:"662"})}),"\n",(0,l.jsx)(n.h3,{id:"\u9A8C\u8BC1\u5B89\u88C5",children:"\u9A8C\u8BC1\u5B89\u88C5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"protoc --version\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5E94\u8F93\u51FA ",(0,l.jsx)(n.code,{children:"libprotoc 25.2"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(10535).Z+"",width:"747",height:"133"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5B89\u88C5-go-\u7684-protocol-buffers-\u63D2\u4EF6",children:"\u5B89\u88C5 Go \u7684 Protocol Buffers \u63D2\u4EF6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"go install google.golang.org/protobuf/cmd/protoc-gen-go@latest\ngo install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7F16\u5199-proto-\u6587\u4EF6",children:"\u7F16\u5199 .proto \u6587\u4EF6"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\u521B\u5EFA ",(0,l.jsx)(n.code,{children:"hello.proto"}),"\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\npackage proto;\noption go_package = "./;proto";\n\nmessage HelloRequest {\n  string greeting = 1;\n}\n\nmessage HelloResponse {\n  string reply = 1;\n}\n\nservice Greeter {\n  rpc SayHello (HelloRequest) returns (HelloResponse);\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u751F\u6210-go-\u4EE3\u7801",children:"\u751F\u6210 Go \u4EE3\u7801"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"proto"})," \u76EE\u5F55\u4E0B\u6267\u884C\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"protoc --go_out=. --go-grpc_out=. hello.proto\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u751F\u6210 ",(0,l.jsx)(n.code,{children:"hello.pb.go"})," \u548C ",(0,l.jsx)(n.code,{children:"hello_grpc.pb.go"})," \u6587\u4EF6\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u76EE\u5F55\u7ED3\u6784",children:"\u76EE\u5F55\u7ED3\u6784"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:"go-Learning/\n\u2502\n\u2514\u2500\u2500\u2500RPC/\n    \u2502   go.mod\n    \u2502\n    \u251C\u2500\u2500\u2500client/\n    \u2502       main.go\n    \u2502\n    \u251C\u2500\u2500\u2500server/\n    \u2502       main.go\n    \u2502\n    \u2514\u2500\u2500\u2500proto/\n            hello.proto\n            hello.pb.go\n            hello_grpc.pb.go\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(91229).Z+"",width:"404",height:"351"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7F16\u5199\u670D\u52A1\u7AEF\u4EE3\u7801",children:"\u7F16\u5199\u670D\u52A1\u7AEF\u4EE3\u7801"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"server/main.go"})," \u4E2D\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"context"\n	"log"\n	"net"\n\n	"google.golang.org/grpc"\n	pb "hello/proto"\n)\n\ntype server struct {\n	pb.UnimplementedGreeterServer\n}\n\nfunc (s *server) SayHello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloResponse, error) {\n	reply := "Hello " + req.Greeting\n	return &pb.HelloResponse{Reply: reply}, nil\n}\n\nfunc main() {\n	listener, err := net.Listen("tcp", ":50051")\n	if err != nil {\n		log.Fatalf("\u76D1\u542C\u7AEF\u53E3\u5931\u8D25 %v", err)\n	}\n\n	grpcServer := grpc.NewServer()\n	pb.RegisterGreeterServer(grpcServer, &server{})\n\n	log.Println("\u670D\u52A1\u7AEF\u6B63\u5728\u76D1\u542C\u7AEF\u53E3 50051...")\n	if err := grpcServer.Serve(listener); err != nil {\n		log.Fatalf("\u542F\u52A8\u670D\u52A1\u7AEF\u5931\u8D25 %v", err)\n	}\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u7F16\u5199\u5BA2\u6237\u7AEF\u4EE3\u7801",children:"\u7F16\u5199\u5BA2\u6237\u7AEF\u4EE3\u7801"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"client/main.go"})," \u4E2D\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"context"\n	"log"\n	"time"\n\n	"google.golang.org/grpc"\n	pb "hello/proto"\n)\n\nfunc main() {\n	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure(), grpc.WithBlock())\n	if err != nil {\n		log.Fatalf("\u8FDE\u63A5\u670D\u52A1\u7AEF\u5931\u8D25 %v", err)\n	}\n	defer conn.Close()\n\n	client := pb.NewGreeterClient(conn)\n\n	ctx, cancel := context.WithTimeout(context.Background(), time.Second)\n	defer cancel()\n\n	response, err := client.SayHello(ctx, &pb.HelloRequest{Greeting: "sumingcheng"})\n	if err != nil {\n		log.Fatalf("\u8C03\u7528 SayHello \u65B9\u6CD5\u5931\u8D25 %v", err)\n	}\n\n	log.Printf("\u670D\u52A1\u7AEF\u56DE\u590D %s", response.GetReply())\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u786E\u4FDD ",(0,l.jsx)(n.code,{children:"protoc"})," \u548C Go \u63D2\u4EF6\u5DF2\u6B63\u786E\u5B89\u88C5\uFF0C\u5E76\u5728\u73AF\u5883\u53D8\u91CF\u4E2D\u914D\u7F6E\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u751F\u6210 Go \u4EE3\u7801\u65F6\uFF0C\u786E\u4FDD\u5728\u6B63\u786E\u7684\u76EE\u5F55\u4E0B\u6267\u884C\u547D\u4EE4\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u4F7F\u7528\u7684\u7AEF\u53E3\u53F7\u548C\u5730\u5740\u9700\u4FDD\u6301\u4E00\u81F4\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728\u4EE3\u7801\u4E2D\u66FF\u6362\u6D4B\u8BD5\u5185\u5BB9\u4E3A ",(0,l.jsx)(n.code,{children:"sumingcheng"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5982\u679C\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863\u6216\u793E\u533A\u8D44\u6E90\u8FDB\u884C\u6392\u67E5\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uD83D\uDCA1 \u4F7F\u7528\u6613\u4E8E\u7406\u89E3\u7684\u53D8\u91CF\u540D\u548C\u6E05\u6670\u7684\u4EE3\u7801\u7ED3\u6784\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u7EF4\u62A4\u6027\u3002"})]})}function g(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},10535:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/4dbcf9c369e3d20b05291df6e6752669-d588bfbaff012de9f14097482fb01a00.png"},4845:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/6c1d4df00258b69da6f4743bf0603623-6701b9b831de34f5ffae702e9c8ce760.png"},91229:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/a6c4b857892a6f2bc6dceb2040aec6be-11aee6eed108e26298abd6561081078c.png"},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return t}});var r=o(67294);let l={},c=r.createContext(l);function t(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);