"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["5761"],{13947:function(e,t,l){l.r(t),l.d(t,{default:()=>j,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>x,contentTitle:()=>r});var n=JSON.parse('{"id":"Backend/Go/\u57FA\u7840/\u5B57\u7B26\u4E32\u5904\u7406","title":"Go \u5B57\u7B26\u4E32\u5904\u7406","description":"\u672F\u8BED","source":"@site/docs/Backend/Go/\u57FA\u7840/11.\u5B57\u7B26\u4E32\u5904\u7406.md","sourceDirName":"Backend/Go/\u57FA\u7840","slug":"/Backend/Go/\u57FA\u7840/\u5B57\u7B26\u4E32\u5904\u7406","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/\u5B57\u7B26\u4E32\u5904\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u57FA\u7840/11.\u5B57\u7B26\u4E32\u5904\u7406.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734260240000,"sidebarPosition":11,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u7C7B\u578B\u8F6C\u6362","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/\u6570\u636E\u7C7B\u578B\u8F6C\u6362"},"next":{"title":"Go \u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/\u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316"}}'),d=l("85893"),s=l("50065");let i={},r="Go \u5B57\u7B26\u4E32\u5904\u7406",c={},x=[{value:"\u672F\u8BED",id:"\u672F\u8BED",level:2},{value:"\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6",id:"\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6",level:2},{value:"\u5207\u7247\u540E\u83B7\u53D6\u957F\u5EA6",id:"\u5207\u7247\u540E\u83B7\u53D6\u957F\u5EA6",level:2},{value:"\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u5B57\u7B26\u957F\u5EA6",id:"\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u5B57\u7B26\u957F\u5EA6",level:2},{value:"\u8F6C\u4E49\u5B57\u7B26",id:"\u8F6C\u4E49\u5B57\u7B26",level:2}];function h(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"go-\u5B57\u7B26\u4E32\u5904\u7406",children:"Go \u5B57\u7B26\u4E32\u5904\u7406"})}),"\n",(0,d.jsx)(t.h2,{id:"\u672F\u8BED",children:"\u672F\u8BED"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"left"},children:(0,d.jsx)(t.strong,{children:"\u672F\u8BED"})}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:(0,d.jsx)(t.strong,{children:"\u82F1\u6587"})}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:(0,d.jsx)(t.strong,{children:"\u63CF\u8FF0"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"\u5907\u6CE8"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u4F4D"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Bit"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u4E8C\u8FDB\u5236\u6570\u5B57\uFF0C0 \u6216 1"}),(0,d.jsx)(t.td,{children:"\u8BA1\u7B97\u673A\u4E2D\u7684\u6700\u5C0F\u6570\u636E\u5355\u4F4D"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u5B57\u8282"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Byte"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u901A\u5E38\u7531 8 \u4E2A\u4F4D\u7EC4\u6210"}),(0,d.jsx)(t.td,{children:"\u8BA1\u7B97\u673A\u4E2D\u7684\u6807\u51C6\u6570\u636E\u5757"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u5B57\u7B26"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Char"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u4EE3\u8868\u4E00\u4E2A\u6587\u672C\u5B57\u7B26"}),(0,d.jsx)(t.td,{children:"\u5728\u4E0D\u540C\u7684\u7F16\u7801\u4E2D\uFF0C\u53EF\u80FD\u5360\u7528\u4E0D\u540C\u6570\u91CF\u7684\u5B57\u8282"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u6BD4\u7279"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Bit"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u540C\u201C\u4F4D\u201D"}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6",children:"\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6"}),"\n",(0,d.jsxs)(t.p,{children:["\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528",(0,d.jsx)(t.code,{children:"len()"}),"\u51FD\u6570\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u957F\u5EA6\u3002"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-go",children:'text := "admin"\n\nlength := len(text)\nfmt.Println(length) // \u8F93\u51FA: 5\n'})}),"\n",(0,d.jsxs)(t.p,{children:["\u6CE8\u610F\uFF0C",(0,d.jsx)(t.code,{children:"len()"}),"\u51FD\u6570\u8FD4\u56DE\u7684\u662F\u5B57\u8282\u957F\u5EA6\u800C\u975E\u5B57\u7B26\u6570\u91CF\u3002\u5F53\u5B57\u7B26\u4E32\u5305\u542B\u4E2D\u6587\u5B57\u7B26\u65F6\uFF0C\u6BCF\u4E2A\u4E2D\u6587\u5B57\u7B26\u901A\u5E38\u5360\u7528 3 \u4E2A\u5B57\u8282\u3002"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-go",children:'text := "\u4E2D\u6587"\nlength := len(text)\nfmt.Println(length) // \u8F93\u51FA: 6\n'})}),"\n",(0,d.jsxs)(t.p,{children:["\u867D\u7136",(0,d.jsx)(t.code,{children:'"\u4E2D\u6587"'}),"\u5305\u542B 2 \u4E2A\u5B57\u7B26\uFF0C\u4F46",(0,d.jsx)(t.code,{children:"len(text)"}),"\u8FD4\u56DE 6\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u4E2D\u6587\u5B57\u7B26\u5360 3 \u4E2A\u5B57\u8282\u3002"]}),"\n",(0,d.jsx)(t.h2,{id:"\u5207\u7247\u540E\u83B7\u53D6\u957F\u5EA6",children:"\u5207\u7247\u540E\u83B7\u53D6\u957F\u5EA6"}),"\n",(0,d.jsxs)(t.p,{children:["\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5B57\u8282\u5207\u7247\u540E\uFF0C\u53EF\u4EE5\u518D\u6B21\u4F7F\u7528",(0,d.jsx)(t.code,{children:"len()"}),"\u51FD\u6570\u83B7\u53D6\u957F\u5EA6\u3002"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-go",children:'text := "i am go"\nbytes := []byte(text)\nfmt.Println(bytes)        // \u8F93\u51FA: [105 32 97 109 32 103 111]\nfmt.Println(len(bytes))   // \u8F93\u51FA: 7\n'})}),"\n",(0,d.jsx)(t.h2,{id:"\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u5B57\u7B26\u957F\u5EA6",children:"\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u5B57\u7B26\u957F\u5EA6"}),"\n",(0,d.jsxs)(t.p,{children:["\u8981\u83B7\u53D6\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26\u6570\u91CF\uFF0C\u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A",(0,d.jsx)(t.code,{children:"[]rune"}),"\u5207\u7247\u3002"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-go",children:'text := "\u597D\u597D\u5B66\u4E60"\nbytes := []byte(text)\nrunes := []rune(text)\n\nfmt.Println(len(bytes)) // \u8F93\u51FA: 12\nfmt.Println(len(runes)) // \u8F93\u51FA: 4\n'})}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"len(bytes)"}),"\u8FD4\u56DE\u5B57\u8282\u6570\uFF0C\u800C",(0,d.jsx)(t.code,{children:"len(runes)"}),"\u8FD4\u56DE\u5B57\u7B26\u6570\u3002\u8FD9\u5728\u5904\u7406\u5305\u542B\u591A\u5B57\u8282\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\u65F6\u975E\u5E38\u6709\u7528\u3002"]}),"\n",(0,d.jsx)(t.h2,{id:"\u8F6C\u4E49\u5B57\u7B26",children:"\u8F6C\u4E49\u5B57\u7B26"}),"\n",(0,d.jsx)(t.p,{children:"\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u5B57\u7B26\u4E32\u53EF\u4EE5\u4F7F\u7528\u8F6C\u4E49\u5B57\u7B26\u6765\u8868\u793A\u7279\u6B8A\u5B57\u7B26\u3002\u5E38\u7528\u7684\u8F6C\u4E49\u5B57\u7B26\u5982\u4E0B\uFF1A"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"left"},children:(0,d.jsx)(t.strong,{children:"\u8F6C\u4E49\u5E8F\u5217"})}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:(0,d.jsx)(t.strong,{children:"\u542B\u4E49"})}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:(0,d.jsx)(t.strong,{children:"\u793A\u4F8B"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\n"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u6362\u884C\u7B26"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\nWorld")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\r"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u56DE\u8F66\u7B26"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\rWorld")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\t"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u5236\u8868\u7B26\uFF08\u6C34\u5E73\uFF09"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\tWorld")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\'"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u5355\u5F15\u53F7"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"fmt.Println('\\'Hello\\'')"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'\\"'})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u53CC\u5F15\u53F7"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("\\"Hello\\"")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\\\"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u53CD\u659C\u6760\u672C\u8EAB"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\\\World")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\a"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u62A5\u8B66\u94C3\u58F0"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\aWorld")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\b"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u9000\u683C\u952E"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\bWorld")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\f"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u6362\u9875\u7B26"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\fWorld")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\v"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u5782\u76F4\u5236\u8868\u7B26"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\vWorld")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\0"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u7A7A\u5B57\u7B26"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\0World")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\xhh"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u4EE5\u4E24\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u8868\u793A\u7684\u5B57\u7B26"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\x0AWorld")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\uhhhh"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u4EE5\u56DB\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u8868\u793A\u7684 Unicode \u5B57\u7B26"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\u00A9World")'})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"\\Uhhhhhhhh"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"\u4EE5\u516B\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u8868\u793A\u7684 Unicode \u5B57\u7B26"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:'fmt.Println("Hello\\U0001F601World")'})})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"\u4F7F\u7528\u53CD\u5F15\u53F7\u5B9A\u4E49\u7684\u539F\u751F\u5B57\u7B26\u4E32\u65F6\uFF0C\u4E0D\u4F1A\u5904\u7406\u8F6C\u4E49\u5B57\u7B26\u3002"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-go",children:'fmt.Println("\u4ED6\u8BF4:\\"\u7A77\u662F\u539F\u7F6A\\"") // \u8F93\u51FA: \u4ED6\u8BF4:"\u7A77\u662F\u539F\u7F6A"\n\nfmt.Println(`\u4ED6\u8BF4:"\u7A77\u662F\u539F\u7F6A"`)   // \u8F93\u51FA: \u4ED6\u8BF4:"\u7A77\u662F\u539F\u7F6A"\n'})})]})}function j(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return r},a:function(){return i}});var n=l(67294);let d={},s=n.createContext(d);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);