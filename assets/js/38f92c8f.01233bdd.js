"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["73095"],{90422:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return g},metadata:function(){return t},toc:function(){return l}});var t=r(95889),o=r(85893),s=r(50065);let g={slug:"go\u8BED\u8A00\u5B9E\u8DF5\u5F00\u95ED\u539F\u5219\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u4E0E\u88C5\u9970\u5668\u6A21\u5F0F",title:"Go\u8BED\u8A00\u5B9E\u8DF5\u5F00\u95ED\u539F\u5219\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u4E0E\u88C5\u9970\u5668\u6A21\u5F0F",authors:["sumingcheng"],tags:["performance-architecture"],date:new Date("2024-10-21T00:00:00.000Z")},i="Go \u8BED\u8A00\u5B9E\u8DF5\uFF1A\u5F00\u95ED\u539F\u5219\u3001\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u4E0E\u88C5\u9970\u5668\u6A21\u5F0F",c={authorsImageUrls:[void 0]},l=[{value:"1. \u5F00\u95ED\u539F\u5219\uFF08Open-Closed Principle, OCP\uFF09",id:"1-\u5F00\u95ED\u539F\u5219open-closed-principle-ocp",level:2},{value:"Go \u4EE3\u7801\u793A\u4F8B",id:"go-\u4EE3\u7801\u793A\u4F8B",level:3},{value:"2. \u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1",id:"2-\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1",level:2},{value:"3. \u88C5\u9970\u5668\u6A21\u5F0F",id:"3-\u88C5\u9970\u5668\u6A21\u5F0F",level:2},{value:"Go \u4EE3\u7801\u793A\u4F8B",id:"go-\u4EE3\u7801\u793A\u4F8B-1",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"1-\u5F00\u95ED\u539F\u5219open-closed-principle-ocp",children:"1. \u5F00\u95ED\u539F\u5219\uFF08Open-Closed Principle, OCP\uFF09"}),"\n",(0,o.jsx)(n.p,{children:"\u5F00\u95ED\u539F\u5219\u7684\u6838\u5FC3\u601D\u60F3\u662F\u8F6F\u4EF6\u5B9E\u4F53\uFF08\u5982\u7C7B\u3001\u6A21\u5757\u3001\u51FD\u6570\u7B49\uFF09\u5E94\u8BE5\u5BF9\u6269\u5C55\u5F00\u653E\uFF0C\u5BF9\u4FEE\u6539\u5C01\u95ED\u3002\u8FD9\u610F\u5473\u7740\u4E00\u4E2A\u5B9E\u4F53\u5141\u8BB8\u5176\u884C\u4E3A\u88AB\u6269\u5C55\uFF0C\u4F46\u662F\u4E0D\u5E94\u5F53\u4FEE\u6539\u5176\u6E90\u4EE3\u7801\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"go-\u4EE3\u7801\u793A\u4F8B",children:"Go \u4EE3\u7801\u793A\u4F8B"}),"\n",(0,o.jsx)(n.p,{children:"\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u65E5\u5FD7\u7CFB\u7EDF\uFF0C\u9700\u8981\u652F\u6301\u4E0D\u540C\u683C\u5F0F\u7684\u65E5\u5FD7\u8F93\u51FA\uFF08\u5982 JSON\u3001XML \u7B49\uFF09\u3002\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u65E5\u5FD7\u63A5\u53E3\uFF0C\u7136\u540E\u4E3A\u6BCF\u79CD\u65E5\u5FD7\u683C\u5F0F\u63D0\u4F9B\u4E00\u4E2A\u5B9E\u73B0\u3002\u8FD9\u6837\uFF0C\u5982\u679C\u5C06\u6765\u9700\u8981\u652F\u6301\u65B0\u7684\u65E5\u5FD7\u683C\u5F0F\uFF0C\u6211\u4EEC\u53EA\u9700\u6DFB\u52A0\u65B0\u7684\u5B9E\u73B0\uFF0C\u800C\u4E0D\u9700\u4FEE\u6539\u73B0\u6709\u4EE3\u7801\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'package main\n\u200B\nimport (\n    "fmt"\n    "encoding/json"\n    "encoding/xml"\n)\n\u200B\n// Logger \u662F\u5BF9\u65E5\u5FD7\u64CD\u4F5C\u7684\u62BD\u8C61\ntype Logger interface {\n    Log(message string) error\n}\n\u200B\n// JSONLogger \u662F\u8F93\u51FAJSON\u683C\u5F0F\u65E5\u5FD7\u7684\u5B9E\u73B0\ntype JSONLogger struct{}\n\u200B\nfunc (l *JSONLogger) Log(message string) error {\n    data, err := json.Marshal(struct{Message string}{Message: message})\n    if err != nil {\n        return err\n    }\n    fmt.Println(string(data))\n    return nil\n}\n\u200B\n// XMLLogger \u662F\u8F93\u51FAXML\u683C\u5F0F\u65E5\u5FD7\u7684\u5B9E\u73B0\ntype XMLLogger struct{}\n\u200B\nfunc (l *XMLLogger) Log(message string) error {\n    data, err := xml.Marshal(struct{Message string}{Message: message})\n    if err != nil {\n        return err\n    }\n    fmt.Println(string(data))\n    return nil\n}\n\u200B\nfunc main() {\n    var logger Logger\n\u200B\n    // \u4F7F\u7528JSONLogger\n    logger = &JSONLogger{}\n    logger.Log("Hello JSON")\n\u200B\n    // \u4F7F\u7528XMLLogger\n    logger = &XMLLogger{}\n    logger.Log("Hello XML")\n}\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"2-\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1",children:"2. \u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1"}),"\n",(0,o.jsx)(n.p,{children:"\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u6307\u7684\u662F\u5728\u6DFB\u52A0\u6216\u4FEE\u6539\u529F\u80FD\u65F6\uFF0C\u5C3D\u91CF\u4E0D\u4FEE\u6539\u73B0\u6709\u7684\u4EE3\u7801\u7ED3\u6784\uFF0C\u800C\u662F\u901A\u8FC7\u6269\u5C55\u7B49\u65B9\u5F0F\u6765\u589E\u5F3A\u529F\u80FD\u3002\u8FD9\u6837\u53EF\u4EE5\u6700\u5927\u9650\u5EA6\u5730\u4FDD\u6301\u539F\u6709\u4EE3\u7801\u7684\u7A33\u5B9A\u6027\u548C\u53EF\u7528\u6027\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4E0A\u8FF0\u65E5\u5FD7\u7CFB\u7EDF\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u5B9E\u73B0",(0,o.jsx)(n.code,{children:"Logger"}),"\u63A5\u53E3\u6765\u6DFB\u52A0\u65B0\u7684\u65E5\u5FD7\u683C\u5F0F\uFF0C\u800C\u4E0D\u662F\u4FEE\u6539",(0,o.jsx)(n.code,{children:"Logger"}),"\u63A5\u53E3\u6216\u5176\u4ED6\u5DF2\u6709\u5B9E\u73B0\u3002\u8FD9\u79CD\u65B9\u5F0F\u5C31\u662F\u5178\u578B\u7684\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"3-\u88C5\u9970\u5668\u6A21\u5F0F",children:"3. \u88C5\u9970\u5668\u6A21\u5F0F"}),"\n",(0,o.jsx)(n.p,{children:"\u88C5\u9970\u5668\u6A21\u5F0F\u662F\u4E00\u79CD\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u5141\u8BB8\u5411\u4E00\u4E2A\u73B0\u6709\u7684\u5BF9\u8C61\u6DFB\u52A0\u65B0\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u53C8\u4E0D\u6539\u53D8\u5176\u7ED3\u6784\u3002\u8FD9\u662F\u4E00\u79CD\u5B9E\u73B0\u5F00\u95ED\u539F\u5219\u7684\u6709\u6548\u624B\u6BB5\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"go-\u4EE3\u7801\u793A\u4F8B-1",children:"Go \u4EE3\u7801\u793A\u4F8B"}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679C\u6211\u4EEC\u60F3\u8981\u4E3A\u65E5\u5FD7\u6DFB\u52A0\u65F6\u95F4\u6233\u529F\u80FD\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u88C5\u9970\u5668\u6765\u5B9E\u73B0\u8FD9\u4E00\u9700\u6C42\uFF0C\u800C\u4E0D\u662F\u4FEE\u6539\u73B0\u6709\u7684\u65E5\u5FD7\u5B9E\u73B0\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'import (\n    "time"\n)\n\u200B\n// TimestampLogger \u662F\u88C5\u9970\u5668\uFF0C\u4E3A\u65E5\u5FD7\u6DFB\u52A0\u65F6\u95F4\u6233\ntype TimestampLogger struct {\n    Logger Logger\n}\n\u200B\nfunc (l *TimestampLogger) Log(message string) error {\n    timestampedMessage := fmt.Sprintf("%s: %s", time.Now().Format(time.RFC3339), message)\n    return l.Logger.Log(timestampedMessage)\n}\n\u200B\nfunc main() {\n    var logger Logger\n\u200B\n    // \u4F7F\u7528\u5E26\u65F6\u95F4\u6233\u7684JSONLogger\n    logger = &TimestampLogger{Logger: &JSONLogger{}}\n    logger.Log("Decorated JSON")\n}\n\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return g}});var t=r(67294);let o={},s=t.createContext(o);function g(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:g(e.components),t.createElement(s.Provider,{value:n},e.children)}},95889:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/go\u8BED\u8A00\u5B9E\u8DF5\u5F00\u95ED\u539F\u5219\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u4E0E\u88C5\u9970\u5668\u6A21\u5F0F","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784/2024-10-21-Go\u8BED\u8A00\u5B9E\u8DF5\u5F00\u95ED\u539F\u5219\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u4E0E\u88C5\u9970\u5668\u6A21\u5F0F.md","source":"@site/blog/\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784/2024-10-21-Go\u8BED\u8A00\u5B9E\u8DF5\u5F00\u95ED\u539F\u5219\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u4E0E\u88C5\u9970\u5668\u6A21\u5F0F.md","title":"Go\u8BED\u8A00\u5B9E\u8DF5\u5F00\u95ED\u539F\u5219\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u4E0E\u88C5\u9970\u5668\u6A21\u5F0F","description":"1. \u5F00\u95ED\u539F\u5219\uFF08Open-Closed Principle, OCP\uFF09","date":"2024-10-21T00:00:00.000Z","tags":[{"inline":false,"label":"\u6027\u80FD\u4F18\u5316\u548C\u67B6\u6784","permalink":"/docs-hub/blog/tags/performance-architecture","description":"\u6027\u80FD\u4F18\u5316\u548C\u7CFB\u7EDF\u67B6\u6784\u76F8\u5173\u6587\u7AE0"}],"readingTime":2.0533333333333332,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"go\u8BED\u8A00\u5B9E\u8DF5\u5F00\u95ED\u539F\u5219\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u4E0E\u88C5\u9970\u5668\u6A21\u5F0F","title":"Go\u8BED\u8A00\u5B9E\u8DF5\u5F00\u95ED\u539F\u5219\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u4E0E\u88C5\u9970\u5668\u6A21\u5F0F","authors":["sumingcheng"],"tags":["performance-architecture"],"date":"2024-10-21T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"sudo -s \u5982\u4F55\u4E0D\u8F93\u5165\u5BC6\u7801","permalink":"/docs-hub/blog/sudo--s-\u5982\u4F55\u4E0D\u8F93\u5165\u5BC6\u7801"},"nextItem":{"title":"Python \u7684\u5305\u5982\u4F55\u5BFC\u5165\u5BFC\u51FA\u548C\u7BA1\u7406","permalink":"/docs-hub/blog/python-\u7684\u5305\u5982\u4F55\u5BFC\u5165\u5BFC\u51FA\u548C\u7BA1\u7406"}}')}}]);