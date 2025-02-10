"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["75591"],{30844:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return r},toc:function(){return a}});var r=t(10807),s=t(85893),o=t(50065);let c={slug:"js\u5B9E\u73B0\u6839\u636E\u57DF\u540D\u67E5\u627Eip",title:"JS\u5B9E\u73B0\u6839\u636E\u57DF\u540D\u67E5\u627EIP",authors:["sumingcheng"],tags:["backend"],date:new Date("2023-08-11T00:00:00.000Z")},i="JS \u5B9E\u73B0\uFF0C\u6839\u636E\u57DF\u540D\u67E5\u627E IP",l={authorsImageUrls:[void 0]},a=[];function u(e){let n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u76F4\u63A5\u4E0A\u4EE3\u7801\u4E86\uFF0C\u5F88\u7B80\u5355\uFF0C\u6709 Node \u5C31\u53EF\u4EE5"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"const dns = require('dns');\nconst http = require('http');\nconst url = require('url');\n\nconst server = http.createServer((req, res) => {\n    // \u6DFB\u52A0CORS\u8DE8\u57DF\u5934\u90E8\u4FE1\u606F\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');\n    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n\n    // \u5224\u65ADURL\u662F\u5426\u4EE5/getIp\u5F00\u59CB\n    if (req.url.startsWith('/getIp')) {\n        // \u89E3\u6790URL\u83B7\u53D6\u67E5\u8BE2\u53C2\u6570\n        const path = url.parse(req.url, true).query;\n        console.log(path.domain);\n\n        // DNS\u67E5\u8BE2\n        dns.lookup(path.domain, (err, address, family) => {\n            if (err) {\n                res.writeHead(500, {'Content-Type': 'text/plain'});\n                res.end('\u83B7\u53D6IP\u5730\u5740\u65F6\u51FA\u9519\u3002');\n                console.error('DNS\u67E5\u8BE2\u65F6\u51FA\u9519:', err);\n                return;\n            }\n            res.writeHead(200, {'Content-Type': 'text/plain'});\n            res.end(address);\n            console.log('IP\u5730\u5740:', address);\n            console.log('IP\u7248\u672C:', family);\n        });\n\n        console.log('\u6709\u4EBA\u8BBF\u95EE\u4E86\u6211\u4EEC\u7684web\u670D\u52A1\u5668\u3002');\n    } else {\n        res.writeHead(404, {'Content-Type': 'text/plain'});\n        res.end('\u672A\u627E\u5230');\n    }\n});\n\nserver.listen(3636, () => {\n    console.log('\u670D\u52A1\u5668\u8FD0\u884C\u5728 http://localhost:3636');\n});\n\n"})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var r=t(67294);let s={},o=r.createContext(s);function c(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}},10807:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/js\u5B9E\u73B0\u6839\u636E\u57DF\u540D\u67E5\u627Eip","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2023-08-11-JS\u5B9E\u73B0\u6839\u636E\u57DF\u540D\u67E5\u627EIP.md","source":"@site/blog/\u540E\u7AEF/2023-08-11-JS\u5B9E\u73B0\u6839\u636E\u57DF\u540D\u67E5\u627EIP.md","title":"JS\u5B9E\u73B0\u6839\u636E\u57DF\u540D\u67E5\u627EIP","description":"\u76F4\u63A5\u4E0A\u4EE3\u7801\u4E86\uFF0C\u5F88\u7B80\u5355\uFF0C\u6709 Node \u5C31\u53EF\u4EE5","date":"2023-08-11T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":0.55,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"js\u5B9E\u73B0\u6839\u636E\u57DF\u540D\u67E5\u627Eip","title":"JS\u5B9E\u73B0\u6839\u636E\u57DF\u540D\u67E5\u627EIP","authors":["sumingcheng"],"tags":["backend"],"date":"2023-08-11T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u5408\u5E76\u4E24\u4E2A\u4E0D\u540C\u7684Git\u4ED3\u5E93","permalink":"/docs-hub/blog/\u5408\u5E76\u4E24\u4E2A\u4E0D\u540C\u7684git\u4ED3\u5E93"},"nextItem":{"title":"mvcmvpmvvm\u4E09\u79CD\u6A21\u5F0F\u7684\u5F02\u540C","permalink":"/docs-hub/blog/mvcmvpmvvm\u4E09\u79CD\u6A21\u5F0F\u7684\u5F02\u540C"}}')}}]);