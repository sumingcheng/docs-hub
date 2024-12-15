"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["79274"],{60936:function(t,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return l},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return u}});var r=e(7478),o=e(85893),s=e(50065);let i={slug:"\u4F7F\u7528\u73B0\u6709\u7684gradio\u63A5\u53E3\u521B\u5EFA\u4E00\u4E2Afastapi\u5E94\u7528",title:"\u4F7F\u7528\u73B0\u6709\u7684Gradio\u63A5\u53E3\u521B\u5EFA\u4E00\u4E2AFastAPI\u5E94\u7528",authors:["sumingcheng"],tags:["backend"],date:new Date("2023-10-16T00:00:00.000Z")},a="\u4F7F\u7528\u73B0\u6709\u7684 Gradio \u63A5\u53E3\u521B\u5EFA\u4E00\u4E2A FastAPI \u5E94\u7528",c={authorsImageUrls:[void 0]},u=[];function p(t){let n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u786E\u4FDD\u5DF2\u7ECF\u5B89\u88C5\u4E86"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pip install fastapi gradio uvicorn\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u521B\u5EFA\u4F60\u7684 Gradio \u548C FastAPI \u5E94\u7528"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'import gradio as gr\nfrom fastapi import FastAPI\nfrom fastapi.responses import HTMLResponse\nimport uvicorn\n\n# \u5B9A\u4E49\u4F60\u7684\u6A21\u578B\u529F\u80FD\ndef model_function(input_text: str):\n    text_length = len(input_text)\n    return f"The text has {text_length} characters."\n\n# \u521B\u5EFA\u4F60\u7684Gradio\u63A5\u53E3\ngradio_iface = gr.Interface(fn=model_function, inputs="text", outputs="text")\n\n# \u521B\u5EFA\u4F60\u7684FastAPI\u5E94\u7528\napp = FastAPI()\n\n@app.get("/", response_class=HTMLResponse)\nasync def read_root():\n    # \u8FD4\u56DE Gradio \u754C\u9762\u7684 HTML\n    return gradio_iface._get_html()\n\n@app.get("/predict/")\ndef predict(input_text: str):\n    # \u76F4\u63A5\u8C03\u7528Gradio\u63A5\u53E3\u7684\u6A21\u578B\u529F\u80FD\n    return {"result": gradio_iface.process({"text": input_text})["text"]}\n\n# \u5982\u679C\u662F\u76F4\u63A5\u8FD0\u884C\u6B64\u811A\u672C\uFF0C\u542F\u52A8Uvicorn\u670D\u52A1\u5668\nif __name__ == "__main__":\n    uvicorn.run(app, host="0.0.0.0", port=8000)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u73B0\u5728\uFF0C\u4F60\u53EF\u4EE5\u8FD0\u884C\u6B64\u811A\u672C\uFF0C\u7136\u540E\u8BBF\u95EE ",(0,o.jsx)(n.code,{children:"http://localhost:8000"})," \u6765\u67E5\u770B\u548C\u4EA4\u4E92 Gradio \u754C\u9762\uFF0C\u6216\u8005\u8BBF\u95EE ",(0,o.jsx)(n.code,{children:"http://localhost:8000/docs"})," \u6765\u67E5\u770B\u548C\u4EA4\u4E92 FastAPI \u81EA\u52A8\u751F\u6210\u7684 Swagger \u6587\u6863\u3002"]})]})}function l(t={}){let{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},50065:function(t,n,e){e.d(n,{Z:function(){return a},a:function(){return i}});var r=e(67294);let o={},s=r.createContext(o);function i(t){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(s.Provider,{value:n},t.children)}},7478:function(t){t.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u4F7F\u7528\u73B0\u6709\u7684gradio\u63A5\u53E3\u521B\u5EFA\u4E00\u4E2Afastapi\u5E94\u7528","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2023-10-16-\u4F7F\u7528\u73B0\u6709\u7684Gradio\u63A5\u53E3\u521B\u5EFA\u4E00\u4E2AFastAPI\u5E94\u7528.md","source":"@site/blog/\u540E\u7AEF/2023-10-16-\u4F7F\u7528\u73B0\u6709\u7684Gradio\u63A5\u53E3\u521B\u5EFA\u4E00\u4E2AFastAPI\u5E94\u7528.md","title":"\u4F7F\u7528\u73B0\u6709\u7684Gradio\u63A5\u53E3\u521B\u5EFA\u4E00\u4E2AFastAPI\u5E94\u7528","description":"\u786E\u4FDD\u5DF2\u7ECF\u5B89\u88C5\u4E86","date":"2023-10-16T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.6266666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u4F7F\u7528\u73B0\u6709\u7684gradio\u63A5\u53E3\u521B\u5EFA\u4E00\u4E2Afastapi\u5E94\u7528","title":"\u4F7F\u7528\u73B0\u6709\u7684Gradio\u63A5\u53E3\u521B\u5EFA\u4E00\u4E2AFastAPI\u5E94\u7528","authors":["sumingcheng"],"tags":["backend"],"date":"2023-10-16T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"prototype \u548C   proto   \u7684\u533A\u522B","permalink":"/docs-hub/blog/prototype-\u548C---proto---\u7684\u533A\u522B"},"nextItem":{"title":"Go \u8BED\u8A00\u4E2DfmtPrintln \u548C println \u7684\u533A\u522B","permalink":"/docs-hub/blog/go-\u8BED\u8A00\u4E2Dfmtprintln-\u548C-println-\u7684\u533A\u522B"}}')}}]);