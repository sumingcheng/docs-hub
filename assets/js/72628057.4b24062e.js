"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["78594"],{5470:function(s,n,e){e.r(n),e.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"Backend/Go/\u57FA\u7840/\u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316","title":"Go \u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316","description":"\u5360\u4F4D\u7B26","source":"@site/docs/Backend/Go/\u57FA\u7840/12.\u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316.md","sourceDirName":"Backend/Go/\u57FA\u7840","slug":"/Backend/Go/\u57FA\u7840/\u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/\u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u57FA\u7840/12.\u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":12,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u5B57\u7B26\u4E32\u5904\u7406","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/\u5B57\u7B26\u4E32\u5904\u7406"},"next":{"title":"Go \u7C7B\u578B\u8F6C\u6362\u548C\u8FD0\u7B97\u7B26","permalink":"/docs-hub/Backend/Go/\u57FA\u7840/\u7C7B\u578B\u8F6C\u6362\u548C\u8FD0\u7B97\u7B26"}}'),i=e("85893"),t=e("50065");let d={},l="Go \u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316",c={},o=[{value:"\u5360\u4F4D\u7B26",id:"\u5360\u4F4D\u7B26",level:2},{value:"Sprintf",id:"sprintf",level:2},{value:"strings.Builder",id:"stringsbuilder",level:2},{value:"\u5B57\u7B26\u4E32\u65B9\u6CD5",id:"\u5B57\u7B26\u4E32\u65B9\u6CD5",level:2},{value:"<code>strings.Contains(s, substr string) bool</code>",id:"stringscontainss-substr-string-bool",level:3},{value:"<code>strings.Count(s, substr string) int</code>",id:"stringscounts-substr-string-int",level:3},{value:"<code>strings.HasPrefix(s, prefix string) bool</code> \u548C <code>strings.HasSuffix(s, suffix string) bool</code>",id:"stringshasprefixs-prefix-string-bool-\u548C-stringshassuffixs-suffix-string-bool",level:3},{value:"<code>strings.Index(s, substr string) int</code>",id:"stringsindexs-substr-string-int",level:3},{value:"<code>strings.Join(a []string, sep string) string</code>",id:"stringsjoina-string-sep-string-string",level:3},{value:"<code>strings.Replace(s, old, new string, n int) string</code> \u548C <code>strings.ReplaceAll(s, old, new string) string</code>",id:"stringsreplaces-old-new-string-n-int-string-\u548C-stringsreplacealls-old-new-string-string",level:3},{value:"<code>strings.Split(s, sep string) []string</code>",id:"stringssplits-sep-string-string",level:3},{value:"<code>strings.ToLower(s string) string</code> \u548C <code>strings.ToUpper(s string) string</code>",id:"stringstolowers-string-string-\u548C-stringstouppers-string-string",level:3},{value:"<code>strings.TrimSpace(s string) string</code>",id:"stringstrimspaces-string-string",level:3},{value:"<code>strings.Trim(s, cutset string) string</code>\u3001<code>strings.TrimLeft(s, cutset string) string</code> \u548C <code>strings.TrimRight(s, cutset string) string</code>",id:"stringstrims-cutset-string-stringstringstrimlefts-cutset-string-string-\u548C-stringstrimrights-cutset-string-string",level:3},{value:"\u5360\u4F4D\u7B26\u8868",id:"\u5360\u4F4D\u7B26\u8868",level:2}];function h(s){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"go-\u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316",children:"Go \u5B57\u7B26\u4E32\u64CD\u4F5C\u548C\u683C\u5F0F\u5316"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5360\u4F4D\u7B26",children:"\u5360\u4F4D\u7B26"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"fmt.Printf"})," \u7684\u6027\u80FD\u4E0D\u5982 ",(0,i.jsx)(n.code,{children:"fmt.Print"}),"\uFF0C\u56E0\u6B64\u5728\u6027\u80FD\u654F\u611F\u7684\u573A\u666F\u4E2D\u8981\u8C28\u614E\u4F7F\u7528\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'sampleText := "\u5B57\u7B26\u4E32"\nnumber := 123\nfmt.Printf("\u5B57\u7B26\u4E32\u662F%s\uFF0C\u6570\u5B57\u662F%d", sampleText, number) // \u8F93\u51FA\uFF1A\u5B57\u7B26\u4E32\u662F\u5B57\u7B26\u4E32\uFF0C\u6570\u5B57\u662F123\n'})}),"\n",(0,i.jsx)(n.h2,{id:"sprintf",children:"Sprintf"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"fmt.Sprintf"})," \u53EF\u4EE5\u8FD4\u56DE\u683C\u5F0F\u5316\u540E\u7684\u5B57\u7B26\u4E32\uFF0C\u4FBF\u4E8E\u8FDB\u4E00\u6B65\u5904\u7406\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'result := fmt.Sprintf("\u5B57\u7B26\u4E32\u662F%s\uFF0C\u6570\u5B57\u662F%d", sampleText, number)\nfmt.Println(result)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"stringsbuilder",children:"strings.Builder"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"strings.Builder"})," \u7684\u6027\u80FD\u975E\u5E38\u597D\uFF0C\u6211\u63A8\u8350\u5728\u9700\u8981\u62FC\u63A5\u5927\u91CF\u5B57\u7B26\u4E32\u65F6\u4F7F\u7528\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func buildString() {\n	var builder strings.Builder\n\n	// \u8FFD\u52A0\u5B57\u7B26\u4E32\n	builder.WriteString("Hello, ")\n	builder.WriteString("World!")\n	builder.WriteRune(\'\\n\')\n\n	// \u83B7\u53D6\u6700\u7EC8\u7684\u5B57\u7B26\u4E32\n	result := builder.String()\n\n	// \u8F93\u51FA\u7ED3\u679C\n	fmt.Println(result)\n\n	// \u91CD\u7F6E builder\n	builder.Reset()\n\n	// \u518D\u6B21\u4F7F\u7528 builder\n	builder.WriteString("Goodbye, World!")\n	result = builder.String()\n	fmt.Println(result)\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u5B57\u7B26\u4E32\u65B9\u6CD5",children:"\u5B57\u7B26\u4E32\u65B9\u6CD5"}),"\n",(0,i.jsx)(n.h3,{id:"stringscontainss-substr-string-bool",children:(0,i.jsx)(n.code,{children:"strings.Contains(s, substr string) bool"})}),"\n",(0,i.jsx)(n.p,{children:"\u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u5B50\u4E32\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Println(strings.Contains("Golang", "Go")) // \u8F93\u51FA\uFF1Atrue\n'})}),"\n",(0,i.jsx)(n.h3,{id:"stringscounts-substr-string-int",children:(0,i.jsx)(n.code,{children:"strings.Count(s, substr string) int"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u5B50\u4E32\u5728\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u7684\u6B21\u6570\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Println(strings.Count("hello hello hello", "hello")) // \u8F93\u51FA\uFF1A3\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"stringshasprefixs-prefix-string-bool-\u548C-stringshassuffixs-suffix-string-bool",children:[(0,i.jsx)(n.code,{children:"strings.HasPrefix(s, prefix string) bool"})," \u548C ",(0,i.jsx)(n.code,{children:"strings.HasSuffix(s, suffix string) bool"})]}),"\n",(0,i.jsx)(n.p,{children:"\u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u5426\u4EE5\u6307\u5B9A\u524D\u7F00\u5F00\u5934\u6216\u4EE5\u6307\u5B9A\u540E\u7F00\u7ED3\u5C3E\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Println(strings.HasPrefix("Golang", "Go"))   // \u8F93\u51FA\uFF1Atrue\nfmt.Println(strings.HasSuffix("Golang", "lang")) // \u8F93\u51FA\uFF1Atrue\n'})}),"\n",(0,i.jsx)(n.h3,{id:"stringsindexs-substr-string-int",children:(0,i.jsx)(n.code,{children:"strings.Index(s, substr string) int"})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD4\u56DE\u5B50\u4E32\u5728\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u5B57\u7B26\u4E32\u4E0D\u5305\u542B\u5B50\u4E32\uFF0C\u5219\u8FD4\u56DE -1\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Println(strings.Index("Golang", "lang")) // \u8F93\u51FA\uFF1A2\n'})}),"\n",(0,i.jsx)(n.h3,{id:"stringsjoina-string-sep-string-string",children:(0,i.jsx)(n.code,{children:"strings.Join(a []string, sep string) string"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5C06\u4E00\u7CFB\u5217\u5B57\u7B26\u4E32\u8FDE\u63A5\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E4B\u95F4\u7528 ",(0,i.jsx)(n.code,{children:"sep"})," \u5206\u9694\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'arr := []string{"foo", "bar", "baz"}\nfmt.Println(strings.Join(arr, ", ")) // \u8F93\u51FA\uFF1Afoo, bar, baz\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"stringsreplaces-old-new-string-n-int-string-\u548C-stringsreplacealls-old-new-string-string",children:[(0,i.jsx)(n.code,{children:"strings.Replace(s, old, new string, n int) string"})," \u548C ",(0,i.jsx)(n.code,{children:"strings.ReplaceAll(s, old, new string) string"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u66FF\u6362\u5B57\u7B26\u4E32\u4E2D\u7684\u5B50\u4E32\uFF0C\u53EF\u4EE5\u6307\u5B9A\u66FF\u6362\u7684\u6B21\u6570\uFF08",(0,i.jsx)(n.code,{children:"n"})," \u4E3A -1 \u65F6\u8868\u793A\u66FF\u6362\u6240\u6709\uFF09\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Println(strings.Replace("oink oink oink", "k", "ky", 2))     // \u8F93\u51FA\uFF1Aoinky oinky oink\nfmt.Println(strings.ReplaceAll("oink oink oink", "oink", "moo")) // \u8F93\u51FA\uFF1Amoo moo moo\n'})}),"\n",(0,i.jsx)(n.h3,{id:"stringssplits-sep-string-string",children:(0,i.jsx)(n.code,{children:"strings.Split(s, sep string) []string"})}),"\n",(0,i.jsx)(n.p,{children:"\u6839\u636E\u5206\u9694\u7B26\u5C06\u5B57\u7B26\u4E32\u5206\u5272\u4E3A\u5B50\u4E32\u6570\u7EC4\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Printf("%q\\n", strings.Split("a,b,c", ",")) // \u8F93\u51FA\uFF1A["a" "b" "c"]\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"stringstolowers-string-string-\u548C-stringstouppers-string-string",children:[(0,i.jsx)(n.code,{children:"strings.ToLower(s string) string"})," \u548C ",(0,i.jsx)(n.code,{children:"strings.ToUpper(s string) string"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5C06\u5B57\u7B26\u4E32\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u90FD\u8F6C\u6362\u4E3A\u5C0F\u5199\u6216\u5927\u5199\u683C\u5F0F\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Println(strings.ToLower("Golang")) // \u8F93\u51FA\uFF1Agolang\nfmt.Println(strings.ToUpper("Golang")) // \u8F93\u51FA\uFF1AGOLANG\n'})}),"\n",(0,i.jsx)(n.h3,{id:"stringstrimspaces-string-string",children:(0,i.jsx)(n.code,{children:"strings.TrimSpace(s string) string"})}),"\n",(0,i.jsx)(n.p,{children:"\u526A\u5207\u5B57\u7B26\u4E32\u4E24\u7AEF\u7684\u7A7A\u767D\u7B26\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Println(strings.TrimSpace(" \\t\\n Golang \\n\\t\\r\\n")) // \u8F93\u51FA\uFF1AGolang\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"stringstrims-cutset-string-stringstringstrimlefts-cutset-string-string-\u548C-stringstrimrights-cutset-string-string",children:[(0,i.jsx)(n.code,{children:"strings.Trim(s, cutset string) string"}),"\u3001",(0,i.jsx)(n.code,{children:"strings.TrimLeft(s, cutset string) string"})," \u548C ",(0,i.jsx)(n.code,{children:"strings.TrimRight(s, cutset string) string"})]}),"\n",(0,i.jsx)(n.p,{children:"\u526A\u5207\u5B57\u7B26\u4E32\u4E24\u7AEF\uFF08\u6216\u5DE6\u7AEF\u3001\u53F3\u7AEF\uFF09\u7684\u6307\u5B9A\u5B57\u7B26\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Println(strings.Trim("!!!Hello, Gophers!!!", "!"))      // \u8F93\u51FA\uFF1AHello, Gophers\nfmt.Println(strings.TrimLeft("!!!Hello, Gophers!!!", "!"))  // \u8F93\u51FA\uFF1AHello, Gophers!!!\nfmt.Println(strings.TrimRight("!!!Hello, Gophers!!!", "!")) // \u8F93\u51FA\uFF1A!!!Hello, Gophers\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u5360\u4F4D\u7B26\u8868",children:"\u5360\u4F4D\u7B26\u8868"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5360\u4F4D\u7B26"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,i.jsx)(n.th,{children:"\u793A\u4F8B"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%v"})}),(0,i.jsx)(n.td,{children:"\u503C\u7684\u9ED8\u8BA4\u683C\u5F0F\u8868\u793A"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"42, Hello, true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%+v"})}),(0,i.jsx)(n.td,{children:"\u5F53\u6253\u5370\u7ED3\u6784\u4F53\u65F6\uFF0C\u4F1A\u6DFB\u52A0\u5B57\u6BB5\u540D"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{Field1:42 Field2:Hello}"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%#v"})}),(0,i.jsx)(n.td,{children:"\u503C\u7684 Go \u8BED\u6CD5\u8868\u793A"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'main.User{Name:"Alice", Age:25}'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%T"})}),(0,i.jsx)(n.td,{children:"\u503C\u7684\u7C7B\u578B\u7684 Go \u8BED\u6CD5\u8868\u793A"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int, string, bool"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%t"})}),(0,i.jsx)(n.td,{children:"\u5E03\u5C14\u503C true \u6216 false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true, false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%b"})}),(0,i.jsx)(n.td,{children:"\u6574\u6570\u7684\u4E8C\u8FDB\u5236\u8868\u793A"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"101010, 11110000"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%c"})}),(0,i.jsx)(n.td,{children:"\u76F8\u5E94 Unicode \u7801\u70B9\u6240\u8868\u793A\u7684\u5B57\u7B26"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"U+0042 ('B'), U+03B2 ('\u03B2')"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%d"})}),(0,i.jsx)(n.td,{children:"\u6574\u6570\u7684\u5341\u8FDB\u5236\u8868\u793A"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"42, -42"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%o"})}),(0,i.jsx)(n.td,{children:"\u6574\u6570\u7684\u516B\u8FDB\u5236\u8868\u793A"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"52, -52"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%q"})}),(0,i.jsx)(n.td,{children:"\u5355\u5F15\u53F7\u56F4\u7ED5\u7684\u5B57\u7B26\u5B57\u9762\u503C\uFF0C\u7531 Go \u8BED\u6CD5\u5B89\u5168\u5730\u8F6C\u4E49"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'a', '\\''"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%x"})}),(0,i.jsx)(n.td,{children:"\u6574\u6570\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u5B57\u6BCD\u5F62\u5F0F\u4E3A\u5C0F\u5199 a-f"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"2a, ff"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%X"})}),(0,i.jsx)(n.td,{children:"\u6574\u6570\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u5B57\u6BCD\u5F62\u5F0F\u4E3A\u5927\u5199 A-F"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"2A, FF"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%U"})}),(0,i.jsx)(n.td,{children:"Unicode \u683C\u5F0F"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"U+0042, U+03B2"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%e"})}),(0,i.jsx)(n.td,{children:"\u79D1\u5B66\u8BA1\u6570\u6CD5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.234456e+78"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%E"})}),(0,i.jsx)(n.td,{children:"\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF08\u5927\u5199\uFF09"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.234456E+78"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%f"})}),(0,i.jsx)(n.td,{children:"\u6709\u5C0F\u6570\u70B9\u800C\u65E0\u6307\u6570"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"123.456"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%F"})}),(0,i.jsxs)(n.td,{children:["\u7B49\u540C\u4E8E ",(0,i.jsx)(n.code,{children:"%f"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"123.456"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%g"})}),(0,i.jsxs)(n.td,{children:["\u6839\u636E\u60C5\u51B5\u9009\u62E9 ",(0,i.jsx)(n.code,{children:"%e"})," \u6216 ",(0,i.jsx)(n.code,{children:"%f"}),"\uFF0C\u4EE5\u4EA7\u751F\u66F4\u7D27\u51D1\u7684\uFF08\u65E0\u672B\u5C3E\u7684 0\uFF09\u8F93\u51FA"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.234456e+78, 123.456"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%G"})}),(0,i.jsxs)(n.td,{children:["\u6839\u636E\u60C5\u51B5\u9009\u62E9 ",(0,i.jsx)(n.code,{children:"%E"})," \u6216 ",(0,i.jsx)(n.code,{children:"%F"}),"\uFF0C\u4EE5\u4EA7\u751F\u66F4\u7D27\u51D1\u7684\uFF08\u65E0\u672B\u5C3E\u7684 0\uFF09\u8F93\u51FA"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.234456E+78, 123.456"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%s"})}),(0,i.jsx)(n.td,{children:"\u5B57\u7B26\u4E32\u8868\u793A"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Hello World"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%q"})}),(0,i.jsx)(n.td,{children:"\u53CC\u5F15\u53F7\u56F4\u7ED5\u7684\u5B57\u7B26\u4E32\uFF0C\u7531 Go \u8BED\u6CD5\u5B89\u5168\u5730\u8F6C\u4E49"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"Hello World"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%x"})}),(0,i.jsx)(n.td,{children:"\u5B57\u7B26\u4E32\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u5C0F\u5199\u5B57\u6BCD\uFF0C\u6BCF\u5B57\u8282\u4E24\u4E2A\u5B57\u7B26"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"68656c6c6f"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%X"})}),(0,i.jsx)(n.td,{children:"\u5B57\u7B26\u4E32\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u5927\u5199\u5B57\u6BCD\uFF0C\u6BCF\u5B57\u8282\u4E24\u4E2A\u5B57\u7B26"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"68656C6C6F"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"%p"})}),(0,i.jsx)(n.td,{children:"\u6307\u9488\u7684\u5341\u516D\u8FDB\u5236\u8868\u793A\uFF0C\u524D\u7F00\u4E3A 0x"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0x4218f0"})})]})]})]})]})}function x(s={}){let{wrapper:n}={...(0,t.a)(),...s.components};return n?(0,i.jsx)(n,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},50065:function(s,n,e){e.d(n,{Z:function(){return l},a:function(){return d}});var r=e(67294);let i={},t=r.createContext(i);function d(s){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof s?s(n):{...n,...s}},[n,s])}function l(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:d(s.components),r.createElement(t.Provider,{value:n},s.children)}}}]);