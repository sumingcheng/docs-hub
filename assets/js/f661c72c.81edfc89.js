"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["95448"],{65493:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return d}});var i=t(37397),a=t(85893),r=t(50065);let s={slug:"gradio-\u914D\u5408-fastapi-\u642D\u5EFA\u4EA4\u4E92\u5F0Fweb\u5E94\u7528\u4E0Erest-api\u670D\u52A1",title:"Gradio \u914D\u5408 FastAPI \u642D\u5EFA\u4EA4\u4E92\u5F0FWeb\u5E94\u7528\u4E0EREST API\u670D\u52A1",authors:["sumingcheng"],tags:["backend"],date:new Date("2023-10-18T00:00:00.000Z")},o="Gradio \u914D\u5408 FastAPI \u642D\u5EFA\u4EA4\u4E92\u5F0F Web \u5E94\u7528\u4E0E REST API \u670D\u52A1",c={authorsImageUrls:[void 0]},d=[{value:"\u865A\u62DF\u73AF\u5883\u51C6\u5907",id:"\u865A\u62DF\u73AF\u5883\u51C6\u5907",level:2},{value:"\u7F16\u5199\u6838\u5FC3\u4EE3\u7801",id:"\u7F16\u5199\u6838\u5FC3\u4EE3\u7801",level:2},{value:"\u4F7F\u7528 gradio \u521B\u5EFA\u9875\u9762",id:"\u4F7F\u7528-gradio-\u521B\u5EFA\u9875\u9762",level:2},{value:"\u521B\u5EFA FastAPI \u5E94\u7528",id:"\u521B\u5EFA-fastapi-\u5E94\u7528",level:2},{value:"\u8FD0\u884C\u5E94\u7528",id:"\u8FD0\u884C\u5E94\u7528",level:3}];function l(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u865A\u62DF\u73AF\u5883\u51C6\u5907",children:"\u865A\u62DF\u73AF\u5883\u51C6\u5907"}),"\n",(0,a.jsx)(e.p,{children:"\u8FDB\u5165\u9879\u76EE\u6587\u4EF6\u5939\uFF0C\u521B\u5EFA\u865A\u62DF\u73AF\u5883"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"python -m venv venv\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u6FC0\u6D3B\u73AF\u5883"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"source venv/bin/activate  # \u5728Windows\u4E0A\u4F7F\u7528 venv\\Scripts\\activate.bat\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5B89\u88C5\u4F9D\u8D56"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"pip install gradio fastapi uvicorn\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u7F16\u5199\u6838\u5FC3\u4EE3\u7801",children:"\u7F16\u5199\u6838\u5FC3\u4EE3\u7801"}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u4E00\u4E2A Python \u6587\u4EF6\uFF08\u4F8B\u5982",(0,a.jsx)(e.code,{children:"core_logic.py"}),"\uFF09\u4E2D\u7F16\u5199\u4F60\u7684\u6838\u5FC3\u903B\u8F91\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'def login(username, password):\n    if username == "admin" and password == "123123":\n        return "Login successful!"\n    else:\n        return "Login failed. Please check your credentials."\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u4F7F\u7528-gradio-\u521B\u5EFA\u9875\u9762",children:"\u4F7F\u7528 gradio \u521B\u5EFA\u9875\u9762"}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u53E6\u4E00\u4E2A Python \u6587\u4EF6\uFF08\u4F8B\u5982",(0,a.jsx)(e.code,{children:"gradio_app.py"}),"\uFF09\u4E2D\u521B\u5EFA Gradio \u754C\u9762\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'import gradio as gr\nfrom core_logic import login\n\niface = gr.Interface(\n    fn=login,\n    inputs=["text", "password"],\n    outputs="text"\n)\n\nif __name__ == "__main__":\n    iface.launch()\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u521B\u5EFA-fastapi-\u5E94\u7528",children:"\u521B\u5EFA FastAPI \u5E94\u7528"}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u53E6\u4E00\u4E2A Python \u6587\u4EF6\uFF08\u4F8B\u5982",(0,a.jsx)(e.code,{children:"fastapi_app.py"}),"\uFF09\u4E2D\u521B\u5EFA FastAPI \u5E94\u7528"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'from fastapi import FastAPI\nfrom pydantic import BaseModel\nfrom core_logic import login\n\napp = FastAPI()\n\nclass LoginData(BaseModel):\n    username: str\n    password: str\n\n@app.post("/login/")\nasync def api_login(data: LoginData):\n    return {"message": login(data.username, data.password)}\n\nif __name__ == "__main__":\n    import uvicorn\n    uvicorn.run(app, host="127.0.0.1", port=7861)\n\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u8FD0\u884C\u5E94\u7528",children:"\u8FD0\u884C\u5E94\u7528"}),"\n",(0,a.jsxs)(e.p,{children:["\u4E3A Gradio \u754C\u9762\u8FD0\u884C",(0,a.jsx)(e.code,{children:"gradio_app.py"}),"\uFF0C\u5E76\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE Gradio \u754C\u9762\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"python gradio_app.py\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u4E3A FastAPI \u5E94\u7528\u8FD0\u884C",(0,a.jsx)(e.code,{children:"fastapi_app.py"}),"\uFF0C\u5E76\u901A\u8FC7\u6D4F\u89C8\u5668\u6216 API \u5BA2\u6237\u7AEF\u8BBF\u95EE FastAPI \u63D0\u4F9B\u7684\u63A5\u53E3\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"python fastapi_app.py\n"})}),"\n",(0,a.jsx)(e.p,{children:"PS\uFF1A\u8FD9\u53EA\u662F\u4E00\u4E2A\u6A21\u677F\uFF0C\u5982\u679C\u60F3\u7EE7\u7EED\u6DFB\u52A0 UI \u754C\u9762\u6216\u8005\u662F\u63A5\u53E3\u9700\u8981\u4F60\u81EA\u5DF1\u7EE7\u7EED\u5F00\u53D1"})]})}function p(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return s}});var i=t(67294);let a={},r=i.createContext(a);function s(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(r.Provider,{value:e},n.children)}},37397:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/gradio-\u914D\u5408-fastapi-\u642D\u5EFA\u4EA4\u4E92\u5F0Fweb\u5E94\u7528\u4E0Erest-api\u670D\u52A1","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2023-10-18-Gradio_\u914D\u5408_FastAPI_\u642D\u5EFA\u4EA4\u4E92\u5F0FWeb\u5E94\u7528\u4E0EREST_API\u670D\u52A1.md","source":"@site/blog/\u540E\u7AEF/2023-10-18-Gradio_\u914D\u5408_FastAPI_\u642D\u5EFA\u4EA4\u4E92\u5F0FWeb\u5E94\u7528\u4E0EREST_API\u670D\u52A1.md","title":"Gradio \u914D\u5408 FastAPI \u642D\u5EFA\u4EA4\u4E92\u5F0FWeb\u5E94\u7528\u4E0EREST API\u670D\u52A1","description":"\u865A\u62DF\u73AF\u5883\u51C6\u5907","date":"2023-10-18T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.9733333333333334,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"gradio-\u914D\u5408-fastapi-\u642D\u5EFA\u4EA4\u4E92\u5F0Fweb\u5E94\u7528\u4E0Erest-api\u670D\u52A1","title":"Gradio \u914D\u5408 FastAPI \u642D\u5EFA\u4EA4\u4E92\u5F0FWeb\u5E94\u7528\u4E0EREST API\u670D\u52A1","authors":["sumingcheng"],"tags":["backend"],"date":"2023-10-18T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"stable-diffusion \u63D2\u4EF6\u63A8\u8350","permalink":"/docs-hub/blog/stable-diffusion-\u63D2\u4EF6\u63A8\u8350"},"nextItem":{"title":"Go \u7684\u6570\u7EC4\u4E3A\u4EC0\u4E48\u662F\u503C\u7C7B\u578B","permalink":"/docs-hub/blog/go-\u7684\u6570\u7EC4\u4E3A\u4EC0\u4E48\u662F\u503C\u7C7B\u578B"}}')}}]);