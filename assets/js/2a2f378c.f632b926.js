"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["21345"],{37969:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var o=t(21530),s=t(85893),a=t(50065);let r={slug:"\u524D\u7AEF\u5BF9\u63A5-python-sse",title:"\u524D\u7AEF\u5BF9\u63A5 Python SSE",authors:["sumingcheng"],tags:["frontend"],date:new Date("2024-03-13T00:00:00.000Z")},i="\u524D\u7AEF\u5BF9\u63A5 Python SSE",c={authorsImageUrls:[void 0]},u=[{value:"Python \u4EE3\u7801",id:"python-\u4EE3\u7801",level:3},{value:"\u524D\u7AEF\u8BF7\u6C42\u63A5\u53E3\u5BF9\u63A5 SSE",id:"\u524D\u7AEF\u8BF7\u6C42\u63A5\u53E3\u5BF9\u63A5-sse",level:3}];function l(e){let n={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"python-\u4EE3\u7801",children:"Python \u4EE3\u7801"}),"\n",(0,s.jsx)(n.p,{children:"\u8BF7\u6C42\u540E \u6BCF 10s \u5411\u524D\u7AEF\u53D1\u9001\u6570\u636E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"from flask import Flask, Response, json\nfrom flask_cors import CORS\nimport time\n\napp = Flask(__name__)\nCORS(app)  # \u5141\u8BB8\u6240\u6709\u57DF\u8FDB\u884C\u8DE8\u57DF\u8BF7\u6C42\n\n@app.route('/events')\ndef events():\n    def generate():\n        for i in range(1, 11):  # \u751F\u621010\u6B21\u6570\u636E\n            yield f\"data: Message {i}\\n\\n\"\n            time.sleep(1)  # \u6BCF\u79D2\u53D1\u9001\u4E00\u6B21\n\n        # \u53D1\u9001\u5B8C\u6210\u4FE1\u53F7\n        yield f\"data: {json.dumps({'message': 'done'})}\\n\\n\"\n    return Response(generate(), mimetype='text/event-stream')\n\nif __name__ == '__main__':\n    app.run(debug=True, threaded=True)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u524D\u7AEF\u8BF7\u6C42\u63A5\u53E3\u5BF9\u63A5-sse",children:"\u524D\u7AEF\u8BF7\u6C42\u63A5\u53E3\u5BF9\u63A5 SSE"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>SSE Demo</title>\n    <script>\n      window.onload = () => {\n        const eventSource = new EventSource('http://127.0.0.1:5000/events');\n        eventSource.onmessage = function (event) {\n          const data = event.data;\n          console.log(data);\n          if (data.message === 'done') {\n            // \u6536\u5230\u5B8C\u6210\u4FE1\u53F7\uFF0C\u5173\u95ED\u8FDE\u63A5\n            eventSource.close();\n            console.log('All data received, connection closed.');\n          } else {\n            // \u663E\u793A\u63A5\u6536\u5230\u7684\u6D88\u606F\n            const message = document.createElement('div');\n            message.textContent = event.data;\n            document.body.appendChild(message);\n          }\n        };\n      };\n    <\/script>\n  </head>\n  <body>\n    <h2>Server-Sent Events Demo</h2>\n  </body>\n</html>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"59aa7dc28e6fec13cf51271f629f9ea3",src:t(44093).Z+"",width:"1440",height:"697"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},44093:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/59aa7dc28e6fec13cf51271f629f9ea3-e21d4e1d2de5f40188620a2160455626.jpg"},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var o=t(67294);let s={},a=o.createContext(s);function r(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}},21530:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u524D\u7AEF\u5BF9\u63A5-python-sse","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u524D\u7AEF/2024-03-13-\u524D\u7AEF\u5BF9\u63A5_Python_SSE.md","source":"@site/blog/\u524D\u7AEF/2024-03-13-\u524D\u7AEF\u5BF9\u63A5_Python_SSE.md","title":"\u524D\u7AEF\u5BF9\u63A5 Python SSE","description":"Python \u4EE3\u7801","date":"2024-03-13T00:00:00.000Z","tags":[{"inline":false,"label":"\u524D\u7AEF","permalink":"/docs-hub/blog/tags/frontend","description":"\u524D\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.6333333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u524D\u7AEF\u5BF9\u63A5-python-sse","title":"\u524D\u7AEF\u5BF9\u63A5 Python SSE","authors":["sumingcheng"],"tags":["frontend"],"date":"2024-03-13T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u4E91\u670D\u52A1\u5668 Ubuntu \u5982\u4F55\u8BBF\u95EE GitHub","permalink":"/docs-hub/blog/\u4E91\u670D\u52A1\u5668-ubuntu-\u5982\u4F55\u8BBF\u95EE-github"},"nextItem":{"title":"Git \u653E\u5F03\u6240\u6709\u672A\u8DDF\u8E2A\u672A\u8FDB\u884C\u7BA1\u7406\u7684\u6587\u4EF6","permalink":"/docs-hub/blog/git-\u653E\u5F03\u6240\u6709\u672A\u8DDF\u8E2A\u672A\u8FDB\u884C\u7BA1\u7406\u7684\u6587\u4EF6"}}')}}]);