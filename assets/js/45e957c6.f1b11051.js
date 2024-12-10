"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[96627],{4509:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"Backend/Go/Protobuf/Protobuf-\u7f16\u7801\u539f\u7406","title":"Protobuf \u539f\u7406\u4e0e\u7f16\u7801\u65b9\u6cd5","description":"IDL","source":"@site/docs/Backend/Go/Protobuf/20.Protobuf-\u7f16\u7801\u539f\u7406.md","sourceDirName":"Backend/Go/Protobuf","slug":"/Backend/Go/Protobuf/Protobuf-\u7f16\u7801\u539f\u7406","permalink":"/docs-hub/docs/Backend/Go/Protobuf/Protobuf-\u7f16\u7801\u539f\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/Protobuf/20.Protobuf-\u7f16\u7801\u539f\u7406.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":20,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"\u5728 Go \u4e2d\u4f7f\u7528 Protocol Buffers \u548c gRPC \u751f\u6210\u4ee3\u7801","permalink":"/docs-hub/docs/Backend/Go/Protobuf/ProtocolBuffers\u548cgRPC\u751f\u6210\u4ee3\u7801"},"next":{"title":"\u4f7f\u7528 Protocol Buffers \u5b9a\u4e49\u548c\u8bbf\u95ee\u5d4c\u5957\u6d88\u606f","permalink":"/docs-hub/docs/Backend/Go/Protobuf/\u5d4c\u5957\u7684-message"}}');var d=r(74848),l=r(28453);const i={},o="Protobuf \u539f\u7406\u4e0e\u7f16\u7801\u65b9\u6cd5",c={},t=[{value:"IDL",id:"idl",level:2},{value:"Protobuf \u539f\u7406",id:"protobuf-\u539f\u7406",level:2},{value:"\u751f\u6210 .proto \u7684\u8fc7\u7a0b",id:"\u751f\u6210-proto-\u7684\u8fc7\u7a0b",level:2},{value:"\u7f16\u5199 .proto \u6587\u4ef6",id:"\u7f16\u5199-proto-\u6587\u4ef6",level:3},{value:"\u4f7f\u7528 Protobuf \u7f16\u8bd1\u5668",id:"\u4f7f\u7528-protobuf-\u7f16\u8bd1\u5668",level:3},{value:"\u7f16\u8bd1\u8fc7\u7a0b",id:"\u7f16\u8bd1\u8fc7\u7a0b",level:3},{value:"\u8fd9\u6837\u505a\u7684\u539f\u56e0",id:"\u8fd9\u6837\u505a\u7684\u539f\u56e0",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Protobuf \u7684\u9ad8\u6027\u80fd\u539f\u56e0",id:"protobuf-\u7684\u9ad8\u6027\u80fd\u539f\u56e0",level:2},{value:"\u5b57\u6bb5\u7684\u6807\u7b7e\uff08Tag\uff09",id:"\u5b57\u6bb5\u7684\u6807\u7b7etag",level:2},{value:"\u552f\u4e00\u6027",id:"\u552f\u4e00\u6027",level:3},{value:"\u7f16\u7801\u6548\u7387",id:"\u7f16\u7801\u6548\u7387",level:3},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:3},{value:"\u8303\u56f4\u548c\u4f7f\u7528",id:"\u8303\u56f4\u548c\u4f7f\u7528",level:3},{value:"Varint\uff08\u53ef\u53d8\u957f\u5ea6\u6574\u6570\uff09",id:"varint\u53ef\u53d8\u957f\u5ea6\u6574\u6570",level:2},{value:"Varint \u7684\u7f16\u7801\u539f\u7406",id:"varint-\u7684\u7f16\u7801\u539f\u7406",level:3},{value:"\u7f16\u7801\u89c4\u5219",id:"\u7f16\u7801\u89c4\u5219",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"ZigZag \u7f16\u7801",id:"zigzag-\u7f16\u7801",level:2},{value:"\u7f16\u7801\u539f\u7406",id:"\u7f16\u7801\u539f\u7406",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:3},{value:"TLV \u7f16\u7801",id:"tlv-\u7f16\u7801",level:2},{value:"\u6570\u636e\u5b9a\u4e49",id:"\u6570\u636e\u5b9a\u4e49",level:3},{value:"TLV \u7f16\u7801\u6b65\u9aa4",id:"tlv-\u7f16\u7801\u6b65\u9aa4",level:3},{value:"\u6570\u636e\u9879 1\uff08\u5e74\u9f84\uff09",id:"\u6570\u636e\u9879-1\u5e74\u9f84",level:4},{value:"\u6570\u636e\u9879 2\uff08\u59d3\u540d\uff09",id:"\u6570\u636e\u9879-2\u59d3\u540d",level:4},{value:"\u6574\u4f53\u7f16\u7801\u7ed3\u679c",id:"\u6574\u4f53\u7f16\u7801\u7ed3\u679c",level:3},{value:"\u89e3\u7801\u8fc7\u7a0b",id:"\u89e3\u7801\u8fc7\u7a0b",level:3}];function h(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.header,{children:(0,d.jsx)(e.h1,{id:"protobuf-\u539f\u7406\u4e0e\u7f16\u7801\u65b9\u6cd5",children:"Protobuf \u539f\u7406\u4e0e\u7f16\u7801\u65b9\u6cd5"})}),"\n",(0,d.jsx)(e.h2,{id:"idl",children:"IDL"}),"\n",(0,d.jsx)(e.p,{children:"\u63a5\u53e3\u63cf\u8ff0\u8bed\u8a00\uff08Interface Description Language\uff09"}),"\n",(0,d.jsx)(e.h2,{id:"protobuf-\u539f\u7406",children:"Protobuf \u539f\u7406"}),"\n",(0,d.jsxs)(e.p,{children:["\u5f53\u6211\u62e5\u6709\u4e00\u4e2a ",(0,d.jsx)(e.strong,{children:".proto"})," \u6587\u4ef6\uff0c\u5e76\u4f7f\u7528\u76f8\u5173\u547d\u4ee4\u751f\u6210 ",(0,d.jsx)(e.strong,{children:".pb.go"})," \u6587\u4ef6\u65f6\uff0c\u5b9e\u9645\u4e0a\u662f\u5728\u8fdb\u884c Protocol Buffers\uff08Protobuf\uff09\u7684\u7f16\u8bd1\u8fc7\u7a0b\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u6d89\u53ca\u5c06 ",(0,d.jsx)(e.strong,{children:".proto"})," \u6587\u4ef6\uff08\u5b9a\u4e49\u4e86\u6570\u636e\u7ed3\u6784\u548c\u670d\u52a1\u63a5\u53e3\uff09\u8f6c\u6362\u6210\u7279\u5b9a\u7f16\u7a0b\u8bed\u8a00\u7684\u6e90\u4ee3\u7801\u6587\u4ef6\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u76ee\u6807\u8bed\u8a00\u662f Go\u3002\u4e0b\u9762\u8be6\u7ec6\u89e3\u91ca\u8fd9\u4e2a\u8fc7\u7a0b\u4ee5\u53ca\u8fd9\u6837\u505a\u7684\u539f\u56e0\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u751f\u6210-proto-\u7684\u8fc7\u7a0b",children:"\u751f\u6210 .proto \u7684\u8fc7\u7a0b"}),"\n",(0,d.jsx)(e.h3,{id:"\u7f16\u5199-proto-\u6587\u4ef6",children:"\u7f16\u5199 .proto \u6587\u4ef6"}),"\n",(0,d.jsxs)(e.p,{children:["\u9996\u5148\uff0c\u6211\u5728 ",(0,d.jsx)(e.strong,{children:".proto"})," \u6587\u4ef6\u4e2d\u5b9a\u4e49\u6570\u636e\u7ed3\u6784\uff08\u6d88\u606f\uff09\u548c\u670d\u52a1\uff08\u5982\u679c\u7528\u4e8e gRPC\uff09\u3002\u8fd9\u4e2a\u6587\u4ef6\u4f5c\u4e3a\u6570\u636e\u4ea4\u6362\u7684\u84dd\u56fe\uff0c\u53ef\u4ee5\u8de8\u591a\u79cd\u8bed\u8a00\u548c\u5e73\u53f0\u4f7f\u7528\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u4f7f\u7528-protobuf-\u7f16\u8bd1\u5668",children:"\u4f7f\u7528 Protobuf \u7f16\u8bd1\u5668"}),"\n",(0,d.jsxs)(e.p,{children:["\u7136\u540e\uff0c\u6211\u4f7f\u7528 Protobuf \u7f16\u8bd1\u5668 ",(0,d.jsx)(e.strong,{children:"protoc"})," \u5c06 ",(0,d.jsx)(e.strong,{children:".proto"})," \u6587\u4ef6\u7f16\u8bd1\u4e3a\u76ee\u6807\u8bed\u8a00\u7684\u4ee3\u7801\u3002\u5bf9\u4e8e Go\uff0c\u901a\u5e38\u4f1a\u751f\u6210 ",(0,d.jsx)(e.strong,{children:".pb.go"})," \u6587\u4ef6\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u7f16\u8bd1\u8fc7\u7a0b",children:"\u7f16\u8bd1\u8fc7\u7a0b"}),"\n",(0,d.jsxs)(e.p,{children:["\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\uff0c",(0,d.jsx)(e.strong,{children:"protoc"})," \u89e3\u6790 ",(0,d.jsx)(e.strong,{children:".proto"})," \u6587\u4ef6\uff0c\u5e76\u751f\u6210\u5305\u542b\u6240\u6709\u5fc5\u8981 Go \u4ee3\u7801\u7684 ",(0,d.jsx)(e.strong,{children:".pb.go"})," \u6587\u4ef6\u3002\u8fd9\u4e9b\u4ee3\u7801\u5305\u62ec\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u5bf9\u4e8e\u6bcf\u4e2a\u6d88\u606f\u7c7b\u578b\uff0c\u4e00\u4e2a\u5bf9\u5e94\u7684 Go \u7ed3\u6784\u4f53\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u6bcf\u4e2a\u5b57\u6bb5\u7684 Getter \u65b9\u6cd5\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u6d88\u606f\u7c7b\u578b\u7684\u5e8f\u5217\u5316\uff08Marshal\uff09\u548c\u53cd\u5e8f\u5217\u5316\uff08Unmarshal\uff09\u65b9\u6cd5\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u5982\u679c\u5b9a\u4e49\u4e86\u670d\u52a1\uff08\u7528\u4e8e gRPC\uff09\uff0c\u8fd8\u4f1a\u751f\u6210\u63a5\u53e3\u548c\u5ba2\u6237\u7aef\u5b58\u6839\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u8fd9\u6837\u505a\u7684\u539f\u56e0",children:"\u8fd9\u6837\u505a\u7684\u539f\u56e0"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u8de8\u8bed\u8a00\u7684\u7ed3\u6784\u5b9a\u4e49"}),"\u3002Protobuf \u5141\u8bb8\u6211\u5b9a\u4e49\u8bed\u8a00\u4e2d\u7acb\u7684\u6570\u636e\u7ed3\u6784\u3002\u8fd9\u610f\u5473\u7740\u6211\u53ef\u4ee5\u5728\u4e00\u4e2a\u7cfb\u7edf\u4e2d\u4f7f\u7528 Go\uff0c\u800c\u5728\u53e6\u4e00\u4e2a\u7cfb\u7edf\u4e2d\u4f7f\u7528 Java\uff0c\u53ea\u9700\u5171\u4eab ",(0,d.jsx)(e.strong,{children:".proto"})," \u6587\u4ef6\u5373\u53ef\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u9ad8\u6548\u7684\u6570\u636e\u5e8f\u5217\u5316"}),"\u3002Protobuf \u65e8\u5728\u5b9e\u73b0\u9ad8\u6548\u7684\u6570\u636e\u5e8f\u5217\u5316\u3002\u751f\u6210\u7684\u4ee3\u7801\u53ef\u4ee5\u5feb\u901f\u5c06\u6570\u636e\u7ed3\u6784\u5e8f\u5217\u5316\u4e3a\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u6bd4 JSON \u6216 XML \u66f4\u9ad8\u6548\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u7c7b\u578b\u5b89\u5168"}),"\u3002\u7531\u4e8e\u6bcf\u4e2a\u5b57\u6bb5\u7684\u7c7b\u578b\u90fd\u5728 ",(0,d.jsx)(e.strong,{children:".proto"})," \u6587\u4ef6\u4e2d\u660e\u786e\u5b9a\u4e49\uff0c\u751f\u6210\u7684\u4ee3\u7801\u81ea\u7136\u662f\u7c7b\u578b\u5b89\u5168\u7684\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u517c\u5bb9\u6027"}),"\u3002Protobuf \u8bbe\u8ba1\u4e86\u7248\u672c\u63a7\u5236\u548c\u5b57\u6bb5\u7f16\u53f7\u7cfb\u7edf\uff0c\u4f7f\u5f97\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u5411\u524d\u517c\u5bb9\u548c\u5411\u540e\u517c\u5bb9\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsxs)(e.p,{children:["\u5047\u8bbe\u6211\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,d.jsx)(e.strong,{children:"sumingcheng.proto"})," \u7684\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-protobuf",children:'syntax = "proto3";\n\nmessage Person {\n  string name = 1;\n  int32 id = 2;\n  bool has_pet = 3;\n}\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u6211\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 ",(0,d.jsx)(e.strong,{children:"pb.go"})," \u6587\u4ef6\uff1a"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"protoc --go_out=. sumingcheng.proto\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u6267\u884c\u8fd9\u4e2a\u547d\u4ee4\u540e\uff0cProtobuf \u7f16\u8bd1\u5668 ",(0,d.jsx)(e.strong,{children:"protoc"})," \u4f1a\u89e3\u6790 ",(0,d.jsx)(e.strong,{children:"sumingcheng.proto"}),"\uff0c\u5e76\u751f\u6210\u4e00\u4e2a ",(0,d.jsx)(e.strong,{children:"sumingcheng.pb.go"})," \u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b ",(0,d.jsx)(e.strong,{children:"Person"})," \u7ed3\u6784\u4f53\u7684\u5b9a\u4e49\uff0c\u4ee5\u53ca\u76f8\u5173\u7684\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u65b9\u6cd5\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u901a\u8fc7\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u6211\u5c31\u53ef\u4ee5\u5728 Go \u7a0b\u5e8f\u4e2d\u4f7f\u7528 ",(0,d.jsx)(e.strong,{children:"Person"})," \u7ed3\u6784\u4f53\uff0c\u540c\u65f6\u4eab\u53d7 Protobuf \u63d0\u4f9b\u7684\u8de8\u5e73\u53f0\u517c\u5bb9\u6027\u548c\u9ad8\u6548\u6570\u636e\u7f16\u7801\u7b49\u4f18\u70b9\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"protobuf-\u7684\u9ad8\u6027\u80fd\u539f\u56e0",children:"Protobuf \u7684\u9ad8\u6027\u80fd\u539f\u56e0"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u6027\u80fd\u4f18\u5316\u7279\u6027"})}),(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u63cf\u8ff0"})})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"\u7d27\u51d1\u7684\u6570\u636e\u683c\u5f0f"})}),(0,d.jsx)(e.td,{children:"\u4e8c\u8fdb\u5236\u5b58\u50a8\u51cf\u5c11\u7a7a\u95f4\u5360\u7528\uff0c\u6570\u5b57\u6807\u7b7e\u66ff\u4ee3\u5b57\u6bb5\u540d\uff0c\u8fdb\u4e00\u6b65\u7f29\u5c0f\u6570\u636e\u5927\u5c0f\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"\u53ef\u53d8\u957f\u5ea6\u7f16\u7801\uff08Varint\uff09"})}),(0,d.jsx)(e.td,{children:"\u5bf9\u5c0f\u6570\u503c\u4f7f\u7528\u66f4\u5c11\u7684\u5b57\u8282\uff0c\u4f18\u5316\u6574\u6570\u7c7b\u578b\u6570\u636e\u7684\u7a7a\u95f4\u6548\u7387\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"\u9ad8\u6548\u7684\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316"})}),(0,d.jsx)(e.td,{children:"\u4f18\u5316\u7684\u4ee3\u7801\u751f\u6210\u5b9e\u73b0\u5feb\u901f\u7f16\u89e3\u7801\uff0c\u9884\u5b9a\u4e49\u7ed3\u6784\u65e0\u9700\u8fd0\u884c\u65f6\u89e3\u6790\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"\u660e\u786e\u7684\u6570\u636e\u7ed3\u6784\u5b9a\u4e49"})}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.strong,{children:".proto"})," \u6587\u4ef6\u786e\u4fdd\u7ed3\u6784\u4e00\u81f4\u6027\uff0c\u51cf\u5c11\u7f16\u89e3\u7801\u6b67\u4e49\u548c\u9519\u8bef\u3002"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"\u517c\u5bb9\u6027"})}),(0,d.jsx)(e.td,{children:"\u5f3a\u5927\u7684\u5411\u524d\u517c\u5bb9\u548c\u5411\u540e\u517c\u5bb9\u80fd\u529b\uff0c\u964d\u4f4e\u7ef4\u62a4\u6210\u672c\uff0c\u907f\u514d\u9891\u7e41\u6570\u636e\u8fc1\u79fb\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.strong,{children:"\u591a\u8bed\u8a00\u5e73\u53f0\u652f\u6301"})}),(0,d.jsx)(e.td,{children:"\u5e7f\u6cdb\u7684\u7f16\u7a0b\u8bed\u8a00\u652f\u6301\uff0c\u5b9e\u73b0\u9ad8\u6548\u7684\u8de8\u7cfb\u7edf\u5e73\u53f0\u6570\u636e\u4ea4\u6362\u3002"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u5b57\u6bb5\u7684\u6807\u7b7etag",children:"\u5b57\u6bb5\u7684\u6807\u7b7e\uff08Tag\uff09"}),"\n",(0,d.jsx)(e.h3,{id:"\u552f\u4e00\u6027",children:"\u552f\u4e00\u6027"}),"\n",(0,d.jsx)(e.p,{children:"\u6bcf\u4e2a\u6d88\u606f\u7c7b\u578b\u4e2d\u7684\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u6807\u7b7e\uff0c\u7528\u4e8e\u5728\u4e8c\u8fdb\u5236\u683c\u5f0f\u4e2d\u552f\u4e00\u6807\u8bc6\u5404\u4e2a\u5b57\u6bb5\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u7f16\u7801\u6548\u7387",children:"\u7f16\u7801\u6548\u7387"}),"\n",(0,d.jsx)(e.p,{children:"Protobuf \u4f7f\u7528\u8fd9\u4e9b\u6807\u7b7e\u6765\u6709\u6548\u5730\u7f16\u7801\u6d88\u606f\u3002\u5728\u4e8c\u8fdb\u5236\u683c\u5f0f\u4e2d\uff0c\u5e76\u4e0d\u5b58\u50a8\u5b57\u6bb5\u540d\uff0c\u800c\u662f\u5b58\u50a8\u5b57\u6bb5\u7684\u6807\u7b7e\uff0c\u8fd9\u53ef\u4ee5\u663e\u8457\u51cf\u5c11\u6d88\u606f\u5927\u5c0f\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-protobuf",children:"1 => 00000001  // \u53ef\u4f18\u5316\nname => 01101110 01100001 01101101 01100101  // \u4e0d\u53ef\u4f18\u5316\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u517c\u5bb9\u6027",children:"\u517c\u5bb9\u6027"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u5411\u540e\u517c\u5bb9\u6027"}),"\u3002\u53ef\u4ee5\u5411\u6d88\u606f\u4e2d\u6dfb\u52a0\u65b0\u7684\u5b57\u6bb5\uff0c\u53ea\u8981\u4e3a\u5b83\u4eec\u5206\u914d\u65b0\u7684\u552f\u4e00\u6807\u7b7e\u3002\u5df2\u6709\u7684\u4ee3\u7801\u80fd\u591f\u89e3\u6790\u8fd9\u4e9b\u6d88\u606f\uff0c\u5373\u4f7f\u5b83\u4eec\u4e0d\u7406\u89e3\u65b0\u5b57\u6bb5\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u5411\u524d\u517c\u5bb9\u6027"}),"\u3002\u53ef\u4ee5\u91cd\u547d\u540d\u5b57\u6bb5\uff0c\u6216\u5220\u9664\u4e0d\u518d\u4f7f\u7528\u7684\u5b57\u6bb5\u3002\u53ea\u8981\u4e0d\u5c06\u5df2\u5220\u9664\u5b57\u6bb5\u7684\u6807\u7b7e\u91cd\u65b0\u5206\u914d\u7ed9\u65b0\u5b57\u6bb5\uff0c\u5df2\u6709\u7684\u4ee3\u7801\u4ecd\u7136\u53ef\u4ee5\u89e3\u6790\u8fd9\u4e9b\u5b57\u6bb5\u3002\u4f8b\u5982\uff0c\u65b0\u7248\u672c\u7684\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u5904\u7406\u65e7\u7248\u672c\u751f\u6210\u7684\u6570\u636e\u3002\u5982\u679c\u65e7\u7248\u672c\u7684\u6570\u636e\u7ed3\u6784\u7f3a\u5c11\u65b0\u7248\u672c\u4e2d\u6dfb\u52a0\u7684\u5b57\u6bb5\uff0c\u65b0\u7248\u672c\u5728\u89e3\u6790\u65f6\u4f1a\u4f7f\u7528\u5b57\u6bb5\u7684\u9ed8\u8ba4\u503c\uff0c\u6216\u5728\u6ca1\u6709\u53ef\u7528\u6570\u636e\u7684\u60c5\u51b5\u4e0b\u5408\u7406\u8fd0\u884c\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u8303\u56f4\u548c\u4f7f\u7528",children:"\u8303\u56f4\u548c\u4f7f\u7528"}),"\n",(0,d.jsx)(e.p,{children:"\u6807\u7b7e\u7f16\u53f7 1 \u5230 15 \u4f7f\u7528\u4e00\u4e2a\u5b57\u8282\u8fdb\u884c\u7f16\u7801\uff0c\u5e94\u8be5\u5206\u914d\u7ed9\u9891\u7e41\u51fa\u73b0\u6216\u91cd\u8981\u7684\u5b57\u6bb5\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u6807\u7b7e\u7f16\u53f7 16 \u5230 2047 \u4f7f\u7528\u4e24\u4e2a\u5b57\u8282\u7f16\u7801\uff0c\u53ef\u7528\u4e8e\u6b21\u5e38\u89c1\u7684\u5b57\u6bb5\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u907f\u514d\u4f7f\u7528\u6807\u7b7e\u7f16\u53f7 19000 \u5230 19999\uff08Protobuf \u7cfb\u7edf\u4fdd\u7559\uff09\uff0c\u4ee5\u53ca\u8fc7\u5927\u7684\u6807\u7b7e\u7f16\u53f7\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"varint\u53ef\u53d8\u957f\u5ea6\u6574\u6570",children:"Varint\uff08\u53ef\u53d8\u957f\u5ea6\u6574\u6570\uff09"}),"\n",(0,d.jsx)(e.h3,{id:"varint-\u7684\u7f16\u7801\u539f\u7406",children:"Varint \u7684\u7f16\u7801\u539f\u7406"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Varint"}),"\uff08Variable-length integer\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u5b58\u50a8\u6570\u5b57\u7684\u7d27\u51d1\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u5e7f\u6cdb\u5e94\u7528\u4e8e Protobuf \u548c\u5176\u4ed6\u4e8c\u8fdb\u5236\u534f\u8bae\u4e2d\u3002\u5b83\u4f7f\u5f97\u5c0f\u6570\u5b57\u4f7f\u7528\u8f83\u5c11\u7684\u5b57\u8282\u8fdb\u884c\u7f16\u7801\uff0c\u800c\u5927\u6570\u5b57\u5219\u4f7f\u7528\u66f4\u591a\u5b57\u8282\u3002\u8fd9\u79cd\u7f16\u7801\u65b9\u5f0f\u65e8\u5728\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\u548c\u4f20\u8f93\u5e26\u5bbd\uff0c\u7279\u522b\u9002\u7528\u4e8e\u901a\u5e38\u503c\u8f83\u5c0f\u7684\u6570\u5b57\u5b57\u6bb5\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u7f16\u7801\u89c4\u5219",children:"\u7f16\u7801\u89c4\u5219"}),"\n",(0,d.jsx)(e.p,{children:"\u6bcf\u4e2a Varint \u5b57\u8282\u7684\u6700\u4f4e 7 \u4f4d\u7528\u4e8e\u5b58\u50a8\u5b9e\u9645\u7684\u6570\u503c\u3002\u6700\u9ad8\u4f4d\u4f5c\u4e3a\u7ee7\u7eed\u4f4d\uff0c\u82e5\u8be5\u4f4d\u4e3a 1\uff0c\u8868\u793a\u540e\u7eed\u5b57\u8282\u4ecd\u5c5e\u4e8e\u8be5\u6570\u5b57\uff1b\u82e5\u8be5\u4f4d\u4e3a 0\uff0c\u8868\u793a\u5f53\u524d\u5b57\u8282\u662f\u8be5\u6570\u5b57\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u8282\u3002\u6570\u5b57\u7684\u6700\u4f4e\u6709\u6548\u5b57\u8282\u5148\u7f16\u7801\uff0c\u5373 LSB \u5728\u5e8f\u5217\u5316\u6d41\u4e2d\u6700\u5148\u51fa\u73b0\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(e.p,{children:"\u4ee5\u6570\u5b57 300 \u4e3a\u4f8b\u3002"}),"\n",(0,d.jsxs)(e.p,{children:["300 \u7684\u4e8c\u8fdb\u5236\u8868\u793a\u4e3a ",(0,d.jsx)(e.strong,{children:"100101100"}),"\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u6309\u6bcf 7 \u4f4d\u5206\u7ec4\uff0c\u4ece\u4f4e\u4f4d\u5230\u9ad8\u4f4d\uff1a",(0,d.jsx)(e.strong,{children:"0010110"})," \u548c ",(0,d.jsx)(e.strong,{children:"0000010"}),"\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u6bcf\u7ec4\u524d\u9762\u52a0\u4e0a\u6807\u5fd7\u4f4d\u3002\u6700\u9ad8\u4f4d\u7ec4\u6807\u5fd7\u4f4d\u4e3a 0\uff0c\u5176\u4ed6\u7ec4\u6807\u5fd7\u4f4d\u4e3a 1\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"10010110"}),"\uff080b10010110\uff09"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"00000010"}),"\uff080b00000010\uff09"]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5c06\u8fd9\u4e9b\u5b57\u8282\u5408\u5e76\uff0c\u4f4e\u4f4d\u5728\u524d\uff1a",(0,d.jsx)(e.strong,{children:"10010110 00000010"}),"\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u8fd9\u6837\uff0c\u6570\u5b57 300 \u88ab\u7f16\u7801\u4e3a 2 \u4e2a\u5b57\u8282\uff1a",(0,d.jsx)(e.strong,{children:"0xAC 0x02"}),"\uff08\u5341\u516d\u8fdb\u5236\u8868\u793a\uff09\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"zigzag-\u7f16\u7801",children:"ZigZag \u7f16\u7801"}),"\n",(0,d.jsxs)(e.p,{children:["\u5728 Protobuf \u4e2d\uff0cVarint \u7528\u4e8e\u5b58\u50a8\u6574\u6570\uff0c\u4f46\u76f4\u63a5\u5b58\u50a8\u8d1f\u6574\u6570\u4f1a\u5360\u7528\u66f4\u591a\u7a7a\u95f4\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cProtobuf \u4f7f\u7528 ",(0,d.jsx)(e.strong,{children:"ZigZag \u7f16\u7801"}),"\u6765\u5904\u7406\u6709\u7b26\u53f7\u6574\u6570\uff0c\u4f7f\u5176\u80fd\u591f\u9ad8\u6548\u5730\u7f16\u7801\u8d1f\u6570\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u7f16\u7801\u539f\u7406",children:"\u7f16\u7801\u539f\u7406"}),"\n",(0,d.jsx)(e.p,{children:"ZigZag \u7f16\u7801\u901a\u8fc7\u5c06\u6709\u7b26\u53f7\u6574\u6570\u6620\u5c04\u4e3a\u65e0\u7b26\u53f7\u6574\u6570\uff0c\u4f7f\u5f97\u7edd\u5bf9\u503c\u8f83\u5c0f\u7684\u6574\u6570\uff08\u65e0\u8bba\u6b63\u8d1f\uff09\u90fd\u80fd\u6620\u5c04\u5230\u8f83\u5c0f\u7684\u65e0\u7b26\u53f7\u6574\u6570\u3002\u8fd9\u5bf9 Varint \u7f16\u7801\u975e\u5e38\u6709\u6548\uff0c\u56e0\u4e3a\u5c0f\u7684\u65e0\u7b26\u53f7\u6574\u6570\u5360\u7528\u66f4\u5c11\u7684\u7a7a\u95f4\u3002"}),"\n",(0,d.jsxs)(e.p,{children:["\u5bf9\u4e8e 32 \u4f4d\u6574\u6570\uff0c\u7f16\u7801\u516c\u5f0f\u4e3a ",(0,d.jsx)(e.code,{children:"(n << 1) ^ (n >> 31)"}),"\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5bf9\u4e8e 64 \u4f4d\u6574\u6570\uff0c\u7f16\u7801\u516c\u5f0f\u4e3a ",(0,d.jsx)(e.code,{children:"(n << 1) ^ (n >> 63)"}),"\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u793a\u4f8b-2",children:"\u793a\u4f8b"}),"\n",(0,d.jsxs)(e.p,{children:["\u8003\u8651\u6574\u6570 ",(0,d.jsx)(e.strong,{children:"-1"}),"\u3001",(0,d.jsx)(e.strong,{children:"-2"})," \u548c ",(0,d.jsx)(e.strong,{children:"-3"}),"\uff0c\u5b83\u4eec\u7684\u7f16\u7801\u8fc7\u7a0b\u5982\u4e0b\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"-1"})," ZigZag \u7f16\u7801\u540e\u4e3a ",(0,d.jsx)(e.code,{children:"1"}),"\uff0cVarint \u7f16\u7801\u4e3a ",(0,d.jsx)(e.code,{children:"0x01"}),"\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"-2"})," ZigZag \u7f16\u7801\u540e\u4e3a ",(0,d.jsx)(e.code,{children:"3"}),"\uff0cVarint \u7f16\u7801\u4e3a ",(0,d.jsx)(e.code,{children:"0x03"}),"\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"-3"})," ZigZag \u7f16\u7801\u540e\u4e3a ",(0,d.jsx)(e.code,{children:"5"}),"\uff0cVarint \u7f16\u7801\u4e3a ",(0,d.jsx)(e.code,{children:"0x05"}),"\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"2"})," ZigZag \u7f16\u7801\u540e\u4e3a ",(0,d.jsx)(e.code,{children:"4"}),"\uff0cVarint \u7f16\u7801\u4e3a ",(0,d.jsx)(e.code,{children:"0x04"}),"\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u901a\u8fc7 ZigZag \u7f16\u7801\uff0c\u8d1f\u6570\u88ab\u6620\u5c04\u4e3a\u8f83\u5c0f\u7684\u6b63\u6574\u6570\uff0c\u4f7f\u7528 Varint \u7f16\u7801\u540e\u5360\u7528\u66f4\u5c11\u7a7a\u95f4\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"tlv-\u7f16\u7801",children:"TLV \u7f16\u7801"}),"\n",(0,d.jsx)(e.h3,{id:"\u6570\u636e\u5b9a\u4e49",children:"\u6570\u636e\u5b9a\u4e49"}),"\n",(0,d.jsxs)(e.p,{children:["\u6570\u636e\u9879 1\uff08\u5e74\u9f84\uff09\u7684\u7c7b\u578b\u4e3a ",(0,d.jsx)(e.code,{children:"0x01"}),"\uff08\u9884\u5b9a\u4e49\u7684\u7c7b\u578b\u7801\uff0c\u8868\u793a\u6574\u6570\uff09\uff0c\u503c\u4e3a ",(0,d.jsx)(e.code,{children:"28"}),"\u3002\u6570\u636e\u9879 2\uff08\u59d3\u540d\uff09\u7684\u7c7b\u578b\u4e3a ",(0,d.jsx)(e.code,{children:"0x02"}),"\uff08\u9884\u5b9a\u4e49\u7684\u7c7b\u578b\u7801\uff0c\u8868\u793a\u5b57\u7b26\u4e32\uff09\uff0c\u503c\u4e3a ",(0,d.jsx)(e.code,{children:'"Alice"'}),"\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"tlv-\u7f16\u7801\u6b65\u9aa4",children:"TLV \u7f16\u7801\u6b65\u9aa4"}),"\n",(0,d.jsx)(e.h4,{id:"\u6570\u636e\u9879-1\u5e74\u9f84",children:"\u6570\u636e\u9879 1\uff08\u5e74\u9f84\uff09"}),"\n",(0,d.jsxs)(e.p,{children:["\u7c7b\u578b\uff08Type\uff09\u4e3a ",(0,d.jsx)(e.code,{children:"0x01"}),"\uff0c\u957f\u5ea6\uff08Length\uff09\u4e3a ",(0,d.jsx)(e.code,{children:"0x01"}),"\uff081 \u4e2a\u5b57\u8282\uff09\uff0c\u503c\uff08Value\uff09\u4e3a ",(0,d.jsx)(e.code,{children:"0x1C"}),"\uff0828 \u7684\u5341\u516d\u8fdb\u5236\u8868\u793a\uff09\u3002\u7f16\u7801\u7ed3\u679c\u4e3a ",(0,d.jsx)(e.code,{children:"0x01 0x01 0x1C"}),"\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u6570\u636e\u9879-2\u59d3\u540d",children:"\u6570\u636e\u9879 2\uff08\u59d3\u540d\uff09"}),"\n",(0,d.jsxs)(e.p,{children:["\u7c7b\u578b\uff08Type\uff09\u4e3a ",(0,d.jsx)(e.code,{children:"0x02"}),"\uff0c\u957f\u5ea6\uff08Length\uff09\u4e3a ",(0,d.jsx)(e.code,{children:"0x05"}),'\uff08"Alice" \u957f\u5ea6\u4e3a 5\uff09\uff0c\u503c\uff08Value\uff09\u4e3a ',(0,d.jsx)(e.code,{children:"'A' 'l' 'i' 'c' 'e'"}),"\uff08ASCII \u8868\u793a\uff09\u3002\u7f16\u7801\u7ed3\u679c\u4e3a ",(0,d.jsx)(e.code,{children:"0x02 0x05 'A' 'l' 'i' 'c' 'e'"}),"\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u6574\u4f53\u7f16\u7801\u7ed3\u679c",children:"\u6574\u4f53\u7f16\u7801\u7ed3\u679c"}),"\n",(0,d.jsxs)(e.p,{children:["\u5c06\u4e24\u4e2a\u6570\u636e\u9879\u7684\u7f16\u7801\u7ed3\u679c\u4e32\u8054\uff0c\u5f97\u5230\u5b8c\u6574\u7684 TLV \u7f16\u7801\uff1a",(0,d.jsx)(e.code,{children:"0x01 0x01 0x1C 0x02 0x05 'A' 'l' 'i' 'c' 'e'"}),"\u3002\u5728\u4f20\u8f93\u65f6\uff0c\u8fd9\u4e9b\u6570\u636e\u5c06\u8f6c\u6362\u4e3a\u4e8c\u8fdb\u5236\u683c\u5f0f\uff1a"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-plaintext",children:"0x01 -> 00000001\n0x01 -> 00000001\n0x1C -> 00011100\n0x02 -> 00000010\n0x05 -> 00000101\n'A'  -> 01000001  // ASCII\u7801\u4e2d 'A' \u7684\u4e8c\u8fdb\u5236\n'l'  -> 01101100  // ASCII\u7801\u4e2d 'l' \u7684\u4e8c\u8fdb\u5236\n'i'  -> 01101001  // ASCII\u7801\u4e2d 'i' \u7684\u4e8c\u8fdb\u5236\n'c'  -> 01100011  // ASCII\u7801\u4e2d 'c' \u7684\u4e8c\u8fdb\u5236\n'e'  -> 01100101  // ASCII\u7801\u4e2d 'e' \u7684\u4e8c\u8fdb\u5236\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u89e3\u7801\u8fc7\u7a0b",children:"\u89e3\u7801\u8fc7\u7a0b"}),"\n",(0,d.jsxs)(e.p,{children:["\u63a5\u6536\u65b9\u89e3\u6790\u6b65\u9aa4\u5982\u4e0b\u3002\u9996\u5148\uff0c\u8bfb\u53d6 ",(0,d.jsx)(e.code,{children:"0x01"}),"\uff0c\u786e\u5b9a\u6570\u636e\u7c7b\u578b\u4e3a\u6574\u6570\u3002\u63a5\u7740\uff0c\u8bfb\u53d6 ",(0,d.jsx)(e.code,{children:"0x01"}),"\uff0c\u786e\u5b9a\u503c\u957f\u5ea6\u4e3a 1 \u5b57\u8282\u3002\u7136\u540e\uff0c\u8bfb\u53d6 ",(0,d.jsx)(e.code,{children:"0x1C"}),"\uff0c\u5f97\u5230\u5e74\u9f84 ",(0,d.jsx)(e.code,{children:"28"}),"\u3002\u63a5\u4e0b\u6765\uff0c\u8bfb\u53d6 ",(0,d.jsx)(e.code,{children:"0x02"}),"\uff0c\u786e\u5b9a\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u3002\u968f\u540e\uff0c\u8bfb\u53d6 ",(0,d.jsx)(e.code,{children:"0x05"}),"\uff0c\u786e\u5b9a\u503c\u957f\u5ea6\u4e3a 5 \u5b57\u8282\u3002\u6700\u540e\uff0c\u8bfb\u53d6\u63a5\u4e0b\u6765\u7684 5 \u4e2a\u5b57\u8282\uff0c\u5f97\u5230\u59d3\u540d ",(0,d.jsx)(e.code,{children:'"Alice"'}),"\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u901a\u8fc7\u7c7b\u578b\u548c\u957f\u5ea6\u5b57\u6bb5\uff0c\u63a5\u6536\u65b9\u80fd\u591f\u6b63\u786e\u89e3\u6790\u6570\u636e\uff0c\u5373\u4f7f\u4e0d\u77e5\u9053\u5177\u4f53\u7684\u6570\u636e\u9879\u5185\u5bb9\u3002"}),"\n",(0,d.jsx)(e.hr,{})]})}function x(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>o});var s=r(96540);const d={},l=s.createContext(d);function i(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);