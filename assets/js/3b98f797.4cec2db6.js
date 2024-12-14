"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["43459"],{29652:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return d}});var a=t(67653),r=t(85893),s=t(50065);let i={slug:"\u89E3\u51B3sse\u4E2D\u7684\u7C98\u5305\u95EE\u9898",title:"\u89E3\u51B3SSE\u4E2D\u7684\u7C98\u5305\u95EE\u9898",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-04-02T00:00:00.000Z")},o="\u89E3\u51B3SSE\u4E2D\u7684\u7C98\u5305\u95EE\u9898",c={authorsImageUrls:[void 0]},d=[{value:"\u5206\u9694\u5E76\u5EF6\u8FDF",id:"\u5206\u9694\u5E76\u5EF6\u8FDF",level:2},{value:"\u524D\u7AEF\u4F18\u5316",id:"\u524D\u7AEF\u4F18\u5316",level:2}];function l(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u89E3\u51B3\u95EE\u9898\u7684\u5173\u952E\u5728\u4E8E\u627E\u5230\u5173\u952E\u95EE\u9898"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u786E\u4FDD\u670D\u52A1\u5668\u6B63\u786E\u5730\u4F7F\u7528SSE\u534F\u8BAE\u683C\u5F0F"}),"\uFF0C\u5305\u62EC\u5728\u4E8B\u4EF6\u4E4B\u95F4\u4F7F\u7528\u6B63\u786E\u7684\u5206\u9694\u7B26\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u4F18\u5316\u670D\u52A1\u5668\u53D1\u9001\u4E8B\u4EF6\u7684\u903B\u8F91"}),"\uFF0C\u907F\u514D\u56E0\u4E3A\u8FC7\u5FEB\u7684\u53D1\u9001\u901F\u5EA6\u800C\u5BFC\u81F4\u7684\u4E8B\u4EF6\u5408\u5E76\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5BA2\u6237\u7AEF\u5E94\u5F53\u5B9E\u73B0\u5065\u58EE\u7684\u6570\u636E\u5904\u7406\u903B\u8F91"}),"\uFF0C\u80FD\u591F\u5904\u7406\u5408\u5E76\u7684\u4E8B\u4EF6\u6570\u636E\uFF0C\u5E76\u6B63\u786E\u5730\u5206\u5272\u548C\u89E3\u6790\u4E8B\u4EF6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5206\u9694\u5E76\u5EF6\u8FDF",children:"\u5206\u9694\u5E76\u5EF6\u8FDF"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'from flask import Flask, Response, stream_with_context\nimport time\nimport json\n\napp = Flask(__name__)\n\ndef generate_sse_events():\n    event_id = 1\n    while True:\n        # \u6A21\u62DF\u6570\u636E\u751F\u6210\n        data = {"time": time.time(), "msg": f"Event {event_id}"}\n        sse_data = f"id: {event_id}\\n" \\\n                   f"event: message\\n" \\\n                   f"data: {json.dumps(data)}\\n\\n"\n        yield sse_data\n        event_id += 1\n        time.sleep(1)  # \u5F15\u5165\u5EF6\u65F6\u4EE5\u6A21\u62DF\u6570\u636E\u5904\u7406\u65F6\u95F4\u548C\u907F\u514D\u7C98\u5305\n\n@app.route(\'/events\')\ndef sse_request():\n    return Response(stream_with_context(generate_sse_events()),\n                    content_type=\'text/event-stream\')\n\nif __name__ == \'__main__\':\n    app.run(debug=True, threaded=True)\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u524D\u7AEF\u4F18\u5316",children:"\u524D\u7AEF\u4F18\u5316"}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u662F\u6211\u5728\u4E1A\u52A1\u4E2D\u5C01\u88C5\u7684\u4EE3\u7801\uFF0C\u6709\u9700\u8981\u53EF\u4EE5\u8BD5\u4E00\u4E0B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { currentEnvironment } from \"@/api/axios\";\n\nfunction buildApiUrl(): string {\n	return `${ currentEnvironment() === '/vnet' ? '/vnet/' : '' }api/chat-process`;\n}\n\nasync function processStreamedData(reader: ReadableStreamDefaultReader<Uint8Array>, onDataReceived: (data: any) => void) {\n	let accumulatedText = '';\n\n	while (true) {\n		const { done, value } = await reader.read();\n		if (done) break;\n		accumulatedText += value;\n\n		while (true) {\n			const newlineIndex = accumulatedText.indexOf('\\n\\n');\n			if (newlineIndex === -1) break;\n\n			let dataBlock = accumulatedText.substring(0, newlineIndex).trim();\n			accumulatedText = accumulatedText.substring(newlineIndex + 2);\n\n			if (dataBlock.startsWith('data: ')) {\n				dataBlock = dataBlock.substring(6);\n				try {\n					const json = JSON.parse(dataBlock);\n					onDataReceived(json);\n				} catch (error) {\n					console.error('\u5206\u6790JSON\u65F6\u51FA\u9519:', error, '\u6765\u81EA\u533A\u5757:', dataBlock);\n				}\n			}\n		}\n	}\n}\n\nexport async function getGeneratedData(data: any, onDataReceived: (data: any) => void) {\n	const response = await fetch(buildApiUrl(), {\n		method: 'POST',\n		headers: {\n			'Content-Type': 'application/json',\n		},\n		body: JSON.stringify(data),\n	});\n\n	if (!response.body) {\n		throw new Error(\"\u54CD\u5E94\u4F53\u4E2D\u6CA1\u6709\u53EF\u8BFB\u6D41\u6570\u636E\u3002\");\n	}\n\n	const reader: any = response.body.pipeThrough(new TextDecoderStream()).getReader();\n\n	await processStreamedData(reader, onDataReceived);\n}\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(67294);let r={},s=a.createContext(r);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}},67653:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u89E3\u51B3sse\u4E2D\u7684\u7C98\u5305\u95EE\u9898","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-04-02-\u89E3\u51B3SSE\u4E2D\u7684\u7C98\u5305\u95EE\u9898.md","source":"@site/blog/\u540E\u7AEF/2024-04-02-\u89E3\u51B3SSE\u4E2D\u7684\u7C98\u5305\u95EE\u9898.md","title":"\u89E3\u51B3SSE\u4E2D\u7684\u7C98\u5305\u95EE\u9898","description":"\u89E3\u51B3\u95EE\u9898\u7684\u5173\u952E\u5728\u4E8E\u627E\u5230\u5173\u952E\u95EE\u9898","date":"2024-04-02T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.3066666666666666,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u89E3\u51B3sse\u4E2D\u7684\u7C98\u5305\u95EE\u9898","title":"\u89E3\u51B3SSE\u4E2D\u7684\u7C98\u5305\u95EE\u9898","authors":["sumingcheng"],"tags":["backend"],"date":"2024-04-02T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u67B6\u6784\u548C\u6307\u4EE4\u96C6","permalink":"/docs-hub/blog/\u67B6\u6784\u548C\u6307\u4EE4\u96C6"},"nextItem":{"title":"\u4F7F\u7528 Fetch API \u548C ReadableStream API \u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E","permalink":"/docs-hub/blog/\u4F7F\u7528-fetch-api-\u548C-readablestream-api-\u6765\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u6570\u636E"}}')}}]);