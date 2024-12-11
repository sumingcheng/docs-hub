"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[88091],{74325:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Backend/Go/\u63a5\u53e3/Node-gRPC\u901a\u4fe1","title":"gRPC \u5728 Node.js \u5ba2\u6237\u7aef\u548c Go \u670d\u52a1\u7aef\u901a\u4fe1","description":"\u9879\u76ee\u6e90\u7801\u94fe\u63a5","source":"@site/docs/Backend/Go/\u63a5\u53e3/3.Node-gRPC\u901a\u4fe1.md","sourceDirName":"Backend/Go/\u63a5\u53e3","slug":"/Backend/Go/\u63a5\u53e3/Node-gRPC\u901a\u4fe1","permalink":"/docs-hub/Backend/Go/\u63a5\u53e3/Node-gRPC\u901a\u4fe1","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u63a5\u53e3/3.Node-gRPC\u901a\u4fe1.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":3,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u9e2d\u5b50\u7c7b\u578b\u548c\u7c7b\u578b\u7ea6\u675f","permalink":"/docs-hub/Backend/Go/\u63a5\u53e3/\u9e2d\u5b50\u7c7b\u578b"},"next":{"title":"\u96c6\u5408","permalink":"/docs-hub/category/\u96c6\u5408"}}');var s=o(74848),t=o(28453);const d={},i="gRPC \u5728 Node.js \u5ba2\u6237\u7aef\u548c Go \u670d\u52a1\u7aef\u901a\u4fe1",c={},l=[{value:"\u5b9a\u4e49 Proto \u6587\u4ef6",id:"\u5b9a\u4e49-proto-\u6587\u4ef6",level:2},{value:"Go \u670d\u52a1\u7aef\u5b9e\u73b0",id:"go-\u670d\u52a1\u7aef\u5b9e\u73b0",level:2},{value:"Node.js \u5ba2\u6237\u7aef\u5b9e\u73b0",id:"nodejs-\u5ba2\u6237\u7aef\u5b9e\u73b0",level:2},{value:"gRPC \u5ba2\u6237\u7aef\u914d\u7f6e",id:"grpc-\u5ba2\u6237\u7aef\u914d\u7f6e",level:3},{value:"Express \u670d\u52a1",id:"express-\u670d\u52a1",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"grpc-\u5728-nodejs-\u5ba2\u6237\u7aef\u548c-go-\u670d\u52a1\u7aef\u901a\u4fe1",children:"gRPC \u5728 Node.js \u5ba2\u6237\u7aef\u548c Go \u670d\u52a1\u7aef\u901a\u4fe1"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/sumingcheng/go-Learning/tree/main/gRPC/basic1",children:"\u9879\u76ee\u6e90\u7801\u94fe\u63a5"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9a\u4e49-proto-\u6587\u4ef6",children:"\u5b9a\u4e49 Proto \u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4ef6\u6765\u63cf\u8ff0\u670d\u52a1\u548c\u6d88\u606f\u683c\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-proto",children:'syntax = "proto3";\n\npackage proto;\n\n// \u5b9a\u4e49 TodoList \u670d\u52a1\nservice TodoList {\n  rpc AddTodo (AddingTodoRequest) returns (TodoResponse);\n  rpc ToggleTodo (TogglingTodoRequest) returns (TodoResponse);\n  rpc RemoveTodo (RemovingTodoRequest) returns (TodoResponse);\n}\n\n// \u8bf7\u6c42\u548c\u54cd\u5e94\u6d88\u606f\nmessage AddingTodoRequest {\n  string content = 1;\n}\n\nmessage TogglingTodoRequest {\n  int64 id = 1;\n}\n\nmessage RemovingTodoRequest {\n  int64 id = 1;\n}\n\nmessage TodoResponse {\n  int64 id = 1;\n  string content = 2;\n  bool completed = 3;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"go-\u670d\u52a1\u7aef\u5b9e\u73b0",children:"Go \u670d\u52a1\u7aef\u5b9e\u73b0"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u670d\u52a1\u7aef\uff0c\u6211\u4f7f\u7528 Go \u8bed\u8a00\u5b9e\u73b0\u4e86\u5b9a\u4e49\u7684 gRPC \u670d\u52a1\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "goLearning/gRPC/basic1/proto"\n    "google.golang.org/grpc"\n    "net"\n    "time"\n)\n\ntype Todo struct {\n    ID        int64\n    Content   string\n    Completed bool\n}\n\ntype TodoListServer struct {\n    proto.UnimplementedTodoListServer\n    todos []Todo\n}\n\nfunc (s *TodoListServer) AddTodo(ctx context.Context, req *proto.AddingTodoRequest) (*proto.TodoResponse, error) {\n    todo := Todo{\n        ID:        time.Now().Unix(),\n        Content:   req.Content,\n        Completed: false,\n    }\n    s.todos = append(s.todos, todo)\n\n    return &proto.TodoResponse{\n        Id:        todo.ID,\n        Content:   todo.Content,\n        Completed: todo.Completed,\n    }, nil\n}\n\nfunc (s *TodoListServer) ToggleTodo(ctx context.Context, req *proto.TogglingTodoRequest) (*proto.TodoResponse, error) {\n    var updatedTodo *Todo\n    for i := range s.todos {\n        if s.todos[i].ID == req.Id {\n            s.todos[i].Completed = !s.todos[i].Completed\n            updatedTodo = &s.todos[i]\n            break\n        }\n    }\n    if updatedTodo == nil {\n        return nil, fmt.Errorf("Todo not found")\n    }\n    return &proto.TodoResponse{\n        Id:        updatedTodo.ID,\n        Content:   updatedTodo.Content,\n        Completed: updatedTodo.Completed,\n    }, nil\n}\n\nfunc (s *TodoListServer) RemoveTodo(ctx context.Context, req *proto.RemovingTodoRequest) (*proto.TodoResponse, error) {\n    var removedTodo Todo\n    for i, todo := range s.todos {\n        if todo.ID == req.Id {\n            removedTodo = todo\n            s.todos = append(s.todos[:i], s.todos[i+1:]...)\n            break\n        }\n    }\n    return &proto.TodoResponse{\n        Id:        removedTodo.ID,\n        Content:   removedTodo.Content,\n        Completed: removedTodo.Completed,\n    }, nil\n}\n\nfunc main() {\n    server := grpc.NewServer()\n    proto.RegisterTodoListServer(server, &TodoListServer{\n        todos: make([]Todo, 0),\n    })\n    listener, err := net.Listen("tcp", ":8080")\n    if err != nil {\n        panic(err.Error())\n    }\n    if err := server.Serve(listener); err != nil {\n        panic(err.Error())\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u5b9e\u73b0\u4e86 ",(0,s.jsx)(n.code,{children:"AddTodo"}),"\u3001",(0,s.jsx)(n.code,{children:"ToggleTodo"})," \u548c ",(0,s.jsx)(n.code,{children:"RemoveTodo"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u6dfb\u52a0\u3001\u5207\u6362\u72b6\u6001\u548c\u5220\u9664\u5f85\u529e\u4e8b\u9879\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"nodejs-\u5ba2\u6237\u7aef\u5b9e\u73b0",children:"Node.js \u5ba2\u6237\u7aef\u5b9e\u73b0"}),"\n",(0,s.jsx)(n.h3,{id:"grpc-\u5ba2\u6237\u7aef\u914d\u7f6e",children:"gRPC \u5ba2\u6237\u7aef\u914d\u7f6e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// grpcClient.js\n\nconst grpc = require("@grpc/grpc-js");\nconst protoLoader = require("@grpc/proto-loader");\nconst PROTO_PATH = "../proto/todolist.proto";\n\n// \u52a0\u8f7d .proto \u6587\u4ef6\nconst packageDefinition = protoLoader.loadSync(PROTO_PATH, {\n  keepCase: true,\n  longs: String,\n  enums: String,\n  defaults: true,\n  oneofs: true,\n});\n\n// \u521b\u5efa gRPC \u5ba2\u6237\u7aef\nconst protoDescriptor = grpc.loadPackageDefinition(packageDefinition).proto;\nconst client = new protoDescriptor.TodoList(\n  "localhost:8080",\n  grpc.credentials.createInsecure()\n);\n\nmodule.exports = client;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"express-\u670d\u52a1",children:"Express \u670d\u52a1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// app.js\n\nconst express = require("express");\nconst bodyParser = require("body-parser");\nconst grpcClient = require("./grpcClient");\n\nconst app = express();\n\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: false }));\n\n// \u8de8\u57df\u8bbe\u7f6e\napp.all("*", (req, res, next) => {\n  res.header("Access-Control-Allow-Origin", "*");\n  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");\n  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");\n  next();\n});\n\n// \u6dfb\u52a0\u5f85\u529e\u4e8b\u9879\napp.post("/add_todo", (req, res) => {\n  const { content } = req.body;\n\n  grpcClient.AddTodo({ content }, (err, response) => {\n    if (err) {\n      res.status(500).json({ error: err.details });\n    } else {\n      res.json(response);\n    }\n  });\n});\n\n// \u5207\u6362\u5f85\u529e\u4e8b\u9879\u72b6\u6001\napp.post("/toggle_todo", (req, res) => {\n  const { id } = req.body;\n\n  grpcClient.ToggleTodo({ id }, (err, response) => {\n    if (err) {\n      res.status(500).json({ error: err.details });\n    } else {\n      res.json(response);\n    }\n  });\n});\n\n// \u5220\u9664\u5f85\u529e\u4e8b\u9879\napp.post("/remove_todo", (req, res) => {\n  const { id } = req.body;\n\n  grpcClient.RemoveTodo({ id }, (err, response) => {\n    if (err) {\n      res.status(500).json({ error: err.details });\n    } else {\n      res.json(response);\n    }\n  });\n});\n\napp.listen(3000, () => {\n  console.log("Server is running on http://localhost:3000");\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5ba2\u6237\u7aef\uff0c\u6211\u4f7f\u7528 Express \u6846\u67b6\u521b\u5efa\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 HTTP \u670d\u52a1\u5668\uff0c\u901a\u8fc7\u8c03\u7528 gRPC \u5ba2\u6237\u7aef\u7684\u65b9\u6cd5\u4e0e Go \u670d\u52a1\u7aef\u901a\u4fe1\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u53d8\u91cf\u547d\u540d"}),"\uff1a\u4e3a\u4e86\u63d0\u9ad8\u4ee3\u7801\u53ef\u8bfb\u6027\uff0c\u6211\u5c06\u53d8\u91cf\u540d\u4f18\u5316\u4e3a\u66f4\u5177\u63cf\u8ff0\u6027\u7684\u540d\u79f0\uff0c\u4f8b\u5982\u5c06 ",(0,s.jsx)(n.code,{children:"gClient"})," \u6539\u4e3a ",(0,s.jsx)(n.code,{children:"grpcClient"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u9519\u8bef\u5904\u7406"}),"\uff1a\u5728 Node.js \u5ba2\u6237\u7aef\u4e2d\uff0c\u6dfb\u52a0\u4e86\u9519\u8bef\u5904\u7406\uff0c\u786e\u4fdd\u5728\u53d1\u751f\u9519\u8bef\u65f6\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8de8\u57df\u914d\u7f6e"}),"\uff1a\u4fee\u6b63\u4e86\u8de8\u57df\u5934\u90e8\u7684\u8bbe\u7f6e\uff0c\u6dfb\u52a0\u4e86\u7f3a\u5c11\u7684 ",(0,s.jsx)(n.code,{children:"Content-Type"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Proto \u6587\u4ef6"}),"\uff1a\u786e\u4fdd ",(0,s.jsx)(n.code,{children:".proto"})," \u6587\u4ef6\u4e2d\u7684\u670d\u52a1\u548c\u6d88\u606f\u5b9a\u4e49\u51c6\u786e\uff0c\u4ee5\u4fbf\u6b63\u786e\u751f\u6210\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4ee3\u7801\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7248\u672c\u517c\u5bb9\u6027"}),"\uff1a\u5728\u4fee\u6539\u5185\u5bb9\u65f6\uff0c\u4fdd\u6301\u4e86\u4f7f\u7528\u7684\u5305\u7684\u7248\u672c\u4e0d\u53d8\uff0c\u9488\u5bf9\u73b0\u6709\u7248\u672c\u8fdb\u884c\u4e86\u4f18\u5316\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4ee3\u7801\u5757\u6807\u6ce8"}),"\uff1a\u6240\u6709\u4ee3\u7801\u5757\u5747\u6807\u660e\u4e86\u8bed\u8a00\u7c7b\u578b\uff0c\u4fbf\u4e8e\u9605\u8bfb\u548c\u8bed\u6cd5\u9ad8\u4eae\u3002"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>i});var r=o(96540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);