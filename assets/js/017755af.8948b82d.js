"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["37358"],{11700:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l}});var i=t(95414),o=t(85893),s=t(50065);let r={slug:"python-typeerror-asyncconnectionpool--init---got-an-unexpected-keyword-argument-socket-options",title:"Python TypeError AsyncConnectionPool  init   got an unexpected keyword argument socket options",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-03-18T00:00:00.000Z")},a="Python: TypeError: AsyncConnectionPool.init() got an unexpected keyword argument 'socket_options",c={authorsImageUrls:[void 0]},l=[];function u(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"stable diffusion \u542F\u52A8\u9047\u5230\u9519\u8BEF"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(venv) PS D:\\Desktop\\Private\\stable-diffusion-webui-windows> .\\webui-user.bat\nvenv "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\venv\\Scripts\\Python.exe"\nPython 3.10.6 (tags/v3.10.6:9c7b4bd, Aug  1 2022, 21:53:49) [MSC v.1932 64 bit (AMD64)]\nVersion: v1.6.0-14-g27096813\nCommit hash: 2709681331de6031ee9dc80abe218d336ad4c6ee\nInstalling requirements\nLaunching Web UI with arguments: --api --xformers --opt-sdp-no-mem-attention --enable-insecure-extension-access --listen\nTraceback (most recent call last):\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\launch.py", line 48, in <module>\n    main()\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\launch.py", line 44, in main\n    start()\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\modules\\launch_utils.py", line 432, in start\n    import webui\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\webui.py", line 13, in <module>\n    initialize.imports()\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\modules\\initialize.py", line 21, in imports\n    import gradio  # noqa: F401\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\venv\\lib\\site-packages\\gradio\\__init__.py", line 3, in <module>\n    import gradio.components as components\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\venv\\lib\\site-packages\\gradio\\components\\__init__.py", line 1, in <module>\n    from gradio.components.annotated_image import AnnotatedImage\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\venv\\lib\\site-packages\\gradio\\components\\annotated_image.py", line 12, in <module>\n    from gradio import utils\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\venv\\lib\\site-packages\\gradio\\utils.py", line 353, in <module>\n    class AsyncRequest:\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\venv\\lib\\site-packages\\gradio\\utils.py", line 372, in AsyncRequest\n    client = httpx.AsyncClient()\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\venv\\lib\\site-packages\\httpx\\_client.py", line 1397, in __init__\n    self._transport = self._init_transport(\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\venv\\lib\\site-packages\\httpx\\_client.py", line 1445, in _init_transport\n    return AsyncHTTPTransport(\n  File "D:\\Desktop\\Private\\stable-diffusion-webui-windows\\venv\\lib\\site-packages\\httpx\\_transports\\default.py", line 275, in __init__\n    self._pool = httpcore.AsyncConnectionPool(\nTypeError: AsyncConnectionPool.__init__() got an unexpected keyword argument \'socket_options\'\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"TypeError: AsyncConnectionPool.__init__() got an unexpected keyword argument 'socket_options'"})," \u9519\u8BEF\uFF0C\u4ECE\u591A\u4E2A\u8BA8\u8BBA\u548C\u89E3\u51B3\u65B9\u6848\u4E2D\uFF0C\u4E00\u4E2A\u5E38\u89C1\u7684\u5EFA\u8BAE\u662F\u5C06 ",(0,o.jsx)(n.code,{children:"httpx"})," \u5E93\u964D\u7EA7\u5230 0.24.1 \u6216\u66F4\u65E9\u7684\u7248\u672C\u3002\u8FD9\u4E2A\u9519\u8BEF\u901A\u5E38\u662F\u7531\u4E8E ",(0,o.jsx)(n.code,{children:"httpx"})," \u65B0\u7248\u672C\uFF08\u5927\u4E8E 0.24.1\uFF09\u4E2D\u5F15\u5165\u4E86\u4E00\u4E2A\u4E0D\u517C\u5BB9\u7684\u53D8\u66F4\u6240\u5BFC\u81F4\u7684\u3002\u6839\u636E GitHub \u4E0A\u7684\u7528\u6237\u53CD\u9988\u548C\u8BA8\u8BBA\uFF0C\u964D\u7EA7 ",(0,o.jsx)(n.code,{children:"httpx"})," \u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/13840",children:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/13840"}),"### \u964D\u7EA7\u7248\u672C"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"pip install httpx==0.24.1\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u91CD\u65B0\u542F\u52A8"})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(67294);let o={},s=i.createContext(o);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},95414:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/python-typeerror-asyncconnectionpool--init---got-an-unexpected-keyword-argument-socket-options","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-03-18-Python_TypeError_AsyncConnectionPool__init___got_an_unexpected_keyword_argument_socket_options.md","source":"@site/blog/\u540E\u7AEF/2024-03-18-Python_TypeError_AsyncConnectionPool__init___got_an_unexpected_keyword_argument_socket_options.md","title":"Python TypeError AsyncConnectionPool  init   got an unexpected keyword argument socket options","description":"stable diffusion \u542F\u52A8\u9047\u5230\u9519\u8BEF","date":"2024-03-18T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.9333333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"python-typeerror-asyncconnectionpool--init---got-an-unexpected-keyword-argument-socket-options","title":"Python TypeError AsyncConnectionPool  init   got an unexpected keyword argument socket options","authors":["sumingcheng"],"tags":["backend"],"date":"2024-03-18T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u5E38\u7528 go \u547D\u4EE4","permalink":"/docs-hub/blog/\u5E38\u7528-go-\u547D\u4EE4"},"nextItem":{"title":"Python \u6CA1 requirementstxt \u5982\u4F55\u5B89\u88C5\u5305","permalink":"/docs-hub/blog/python-\u6CA1-requirementstxt-\u5982\u4F55\u5B89\u88C5\u5305"}}')}}]);