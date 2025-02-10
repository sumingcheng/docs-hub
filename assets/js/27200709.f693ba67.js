"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["12993"],{369:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>h,contentTitle:()=>l});var i=JSON.parse('{"id":"Backend/Go/Gin/\u670D\u52A1\u7AEF\u6E32\u67D3","title":"Go \u8BED\u8A00\u4E2D\u7684\u8DEF\u5F84\u5904\u7406\u4E0E\u91CD\u5B9A\u5411","description":"\u8DEF\u5F84\u76F8\u5173\u65B9\u6CD5","source":"@site/docs/Backend/Go/Gin/50.\u670D\u52A1\u7AEF\u6E32\u67D3.md","sourceDirName":"Backend/Go/Gin","slug":"/Backend/Go/Gin/\u670D\u52A1\u7AEF\u6E32\u67D3","permalink":"/docs-hub/Backend/Go/Gin/\u670D\u52A1\u7AEF\u6E32\u67D3","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/Gin/50.\u670D\u52A1\u7AEF\u6E32\u67D3.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":50,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"\u5728 Gin \u4E2D\u4F7F\u7528 Validator \u8FDB\u884C\u591A\u8BED\u8A00\u9A8C\u8BC1","permalink":"/docs-hub/Backend/Go/Gin/Validator\u591A\u8BED\u8A00\u7FFB\u8BD1"},"next":{"title":"Gin \u6846\u67B6\u4E2D\u7684\u4E2D\u95F4\u4EF6\u548C\u8DEF\u7531\u5206\u7EC4","permalink":"/docs-hub/Backend/Go/Gin/\u4E2D\u95F4\u4EF6\u548C\u8DEF\u7531\u5206\u7EC4"}}'),r=t("85893"),s=t("50065");let c={},l="Go \u8BED\u8A00\u4E2D\u7684\u8DEF\u5F84\u5904\u7406\u4E0E\u91CD\u5B9A\u5411",d={},h=[{value:"\u8DEF\u5F84\u76F8\u5173\u65B9\u6CD5",id:"\u8DEF\u5F84\u76F8\u5173\u65B9\u6CD5",level:2},{value:"\u670D\u52A1\u7AEF\u6E32\u67D3 HTML",id:"\u670D\u52A1\u7AEF\u6E32\u67D3-html",level:2},{value:"\u91CD\u5B9A\u5411",id:"\u91CD\u5B9A\u5411",level:2},{value:"\u4F7F\u7528 302 \u4E34\u65F6\u91CD\u5B9A\u5411",id:"\u4F7F\u7528-302-\u4E34\u65F6\u91CD\u5B9A\u5411",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:3}];function o(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"go-\u8BED\u8A00\u4E2D\u7684\u8DEF\u5F84\u5904\u7406\u4E0E\u91CD\u5B9A\u5411",children:"Go \u8BED\u8A00\u4E2D\u7684\u8DEF\u5F84\u5904\u7406\u4E0E\u91CD\u5B9A\u5411"})}),"\n",(0,r.jsx)(e.h2,{id:"\u8DEF\u5F84\u76F8\u5173\u65B9\u6CD5",children:"\u8DEF\u5F84\u76F8\u5173\u65B9\u6CD5"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4F7F\u7528\u4E86 ",(0,r.jsx)(e.a,{href:"https://github.com/sumingcheng/go-Learning.git",children:"sumingcheng/go-Learning"})," \u8FD9\u4E2A\u9879\u76EE\u6765\u6D4B\u8BD5\u548C\u5B66\u4E60\u8DEF\u5F84\u5904\u7406\u7684\u65B9\u6CD5\u3002\u4EE5\u4E0B\u662F\u5E38\u7528\u7684\u8DEF\u5F84\u5904\u7406\u51FD\u6570\uFF1A"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"os.Getwd()"})}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u5F53\u524D\u7A0B\u5E8F\u5DE5\u4F5C\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"filepath.Abs(path string)"})}),"\n",(0,r.jsx)(e.p,{children:"\u5C06\u6307\u5B9A\u7684\u76F8\u5BF9\u8DEF\u5F84\u8F6C\u6362\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"filepath.Rel(basepath, targpath string)"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8FD4\u56DE\u4ECE ",(0,r.jsx)(e.code,{children:"basepath"})," \u5230 ",(0,r.jsx)(e.code,{children:"targpath"})," \u7684\u76F8\u5BF9\u8DEF\u5F84\u3002\u5982\u679C\u4E24\u8005\u6CA1\u6709\u76F4\u63A5\u5173\u7CFB\uFF0C\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"filepath.Dir(path string)"})}),"\n",(0,r.jsx)(e.p,{children:"\u83B7\u53D6\u8DEF\u5F84\u4E2D\u7684\u76EE\u5F55\u90E8\u5206\uFF0C\u5373\u6700\u540E\u4E00\u4E2A\u8DEF\u5F84\u5206\u9694\u7B26\u4E4B\u524D\u7684\u5185\u5BB9\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"filepath.Base(path string)"})}),"\n",(0,r.jsx)(e.p,{children:"\u83B7\u53D6\u8DEF\u5F84\u4E2D\u7684\u6700\u540E\u4E00\u90E8\u5206\uFF0C\u65E0\u8BBA\u662F\u6587\u4EF6\u540D\u8FD8\u662F\u76EE\u5F55\u540D\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"filepath.Join(elem ...string)"})}),"\n",(0,r.jsx)(e.p,{children:"\u5C06\u591A\u4E2A\u8DEF\u5F84\u5143\u7D20\u5408\u5E76\u6210\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u81EA\u52A8\u5904\u7406\u8DEF\u5F84\u4E2D\u7684\u5206\u9694\u7B26\uFF0C\u907F\u514D\u591A\u4F59\u7684\u5206\u9694\u7B26\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"filepath.Glob(pattern string)"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8FD4\u56DE\u7B26\u5408\u6307\u5B9A\u6A21\u5F0F\u7684\u6240\u6709\u6587\u4EF6\u8DEF\u5F84\u3002\u6A21\u5F0F\u652F\u6301\u7B80\u5355\u7684\u901A\u914D\u7B26\u5982 ",(0,r.jsx)(e.code,{children:"*"})," \u548C ",(0,r.jsx)(e.code,{children:"?"}),"\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"filepath.IsAbs(path string)"})}),"\n",(0,r.jsx)(e.p,{children:"\u68C0\u67E5\u7ED9\u5B9A\u7684\u8DEF\u5F84\u662F\u5426\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"filepath.Clean(path string)"})}),"\n",(0,r.jsxs)(e.p,{children:["\u6807\u51C6\u5316\u8DEF\u5F84\uFF0C\u53BB\u9664\u5197\u4F59\u7684 ",(0,r.jsx)(e.code,{children:"."}),"\u3001",(0,r.jsx)(e.code,{children:".."})," \u548C\u591A\u4F59\u7684\u8DEF\u5F84\u5206\u9694\u7B26\uFF0C\u4F46\u4E0D\u4F1A\u89E3\u6790\u7B26\u53F7\u94FE\u63A5\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u670D\u52A1\u7AEF\u6E32\u67D3-html",children:"\u670D\u52A1\u7AEF\u6E32\u67D3 HTML"}),"\n",(0,r.jsx)(e.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528 Gin \u6846\u67B6\u6E32\u67D3 HTML \u6A21\u677F\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n	"fmt"\n	"github.com/gin-gonic/gin"\n	"net/http"\n	"os"\n	"path/filepath"\n)\n\nfunc main() {\n	router := gin.Default()\n\n	// \u83B7\u53D6\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\n	currentDir, err := os.Getwd()\n	if err != nil {\n		panic(err)\n	}\n	fmt.Println("\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55", currentDir)\n\n	// \u6784\u5EFA\u6A21\u677F\u8DEF\u5F84\n	templatePath := filepath.Join(currentDir, "Gin", "ssr", "templates", "**", "*")\n	router.LoadHTMLGlob(templatePath)\n\n	// \u5B9A\u4E49\u8DEF\u7531\n	router.GET("/home", func(c *gin.Context) {\n		c.HTML(http.StatusOK, "home.html", gin.H{"title": "\u4E3B\u9875"})\n	})\n\n	router.GET("/list", func(c *gin.Context) {\n		c.HTML(http.StatusOK, "list.html", gin.H{"title": "\u5217\u8868\u9875"})\n	})\n\n	router.GET("/user", func(c *gin.Context) {\n		c.HTML(http.StatusOK, "user.html", gin.H{"title": "\u7528\u6237\u9875"})\n	})\n\n	router.Run(":8888")\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u9996\u5148\u83B7\u53D6\u4E86\u5F53\u524D\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u7136\u540E\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"filepath.Join"})," \u6784\u5EFA\u4E86\u6A21\u677F\u7684\u8DEF\u5F84\u3002\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"LoadHTMLGlob"})," \u65B9\u6CD5\uFF0CGin \u53EF\u4EE5\u52A0\u8F7D\u6307\u5B9A\u8DEF\u5F84\u4E0B\u7684\u6240\u6709\u6A21\u677F\u6587\u4EF6\u3002\u8FD9\u6837\uFF0C\u5F53\u8BBF\u95EE ",(0,r.jsx)(e.code,{children:"/home"}),"\u3001",(0,r.jsx)(e.code,{children:"/list"})," \u6216 ",(0,r.jsx)(e.code,{children:"/user"})," \u8DEF\u7531\u65F6\uFF0C\u670D\u52A1\u5668\u4F1A\u6E32\u67D3\u5BF9\u5E94\u7684 HTML \u6A21\u677F\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u91CD\u5B9A\u5411",children:"\u91CD\u5B9A\u5411"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 Web \u5F00\u53D1\u4E2D\uFF0C\u91CD\u5B9A\u5411\u662F\u4E00\u79CD\u5E38\u89C1\u64CD\u4F5C\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"http.StatusMovedPermanently"}),"\uFF08301 \u72B6\u6001\u7801\uFF09\u8FDB\u884C\u91CD\u5B9A\u5411\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u7F13\u5B58\u91CD\u5B9A\u5411\u4FE1\u606F\uFF0C\u641C\u7D22\u5F15\u64CE\u4E5F\u4F1A\u8BB0\u5F55\u3002\u8FD9\u53EF\u80FD\u5BFC\u81F4\u540E\u7EED\u4FEE\u6539\u91CD\u5B9A\u5411\u8DEF\u5F84\u65F6\uFF0C\u6D4F\u89C8\u5668\u4ECD\u7136\u4F7F\u7528\u7F13\u5B58\u7684\u65E7\u8DEF\u5F84\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EF\u4EE5\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0 ",(0,r.jsx)(e.code,{children:"Cache-Control"}),"\uFF0C\u7981\u6B62\u7F13\u5B58\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'router.GET("/", func(c *gin.Context) {\n	c.Header("Cache-Control", "no-cache, no-store, must-revalidate")\n	c.Redirect(http.StatusMovedPermanently, "/list")\n})\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u8FD9\u6837\uFF0C\u6D4F\u89C8\u5668\u6BCF\u6B21\u90FD\u4F1A\u91CD\u65B0\u8BF7\u6C42\u91CD\u5B9A\u5411\u4FE1\u606F\uFF0C\u4E0D\u4F1A\u4F7F\u7528\u7F13\u5B58\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u4F7F\u7528-302-\u4E34\u65F6\u91CD\u5B9A\u5411",children:"\u4F7F\u7528 302 \u4E34\u65F6\u91CD\u5B9A\u5411"}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679C\u4E0D\u5E0C\u671B\u6D4F\u89C8\u5668\u7F13\u5B58\u91CD\u5B9A\u5411\u4FE1\u606F\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"http.StatusFound"}),"\uFF08302 \u72B6\u6001\u7801\uFF09\u8FDB\u884C\u4E34\u65F6\u91CD\u5B9A\u5411\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'c.Redirect(http.StatusFound, "/list")\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4F7F\u7528 302 \u72B6\u6001\u7801\uFF0C\u8868\u793A\u8D44\u6E90\u53EA\u662F\u4E34\u65F6\u79FB\u52A8\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u7F13\u5B58\u91CD\u5B9A\u5411\u4FE1\u606F\uFF0C\u4FBF\u4E8E\u540E\u7EED\u4FEE\u6539\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"301 \u6C38\u4E45\u91CD\u5B9A\u5411"}),"\uFF1A\u9002\u7528\u4E8E\u8D44\u6E90\u6C38\u4E45\u79FB\u52A8\u7684\u60C5\u51B5\uFF0C\u6D4F\u89C8\u5668\u548C\u641C\u7D22\u5F15\u64CE\u4F1A\u7F13\u5B58\uFF0C\u9700\u8C28\u614E\u4F7F\u7528\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"302 \u4E34\u65F6\u91CD\u5B9A\u5411"}),"\uFF1A\u9002\u7528\u4E8E\u8D44\u6E90\u4E34\u65F6\u79FB\u52A8\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u7F13\u5B58\uFF0C\u65B9\u4FBF\u540E\u7EED\u4FEE\u6539\u91CD\u5B9A\u5411\u8DEF\u5F84\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7981\u6B62\u7F13\u5B58"}),"\uFF1A\u5728\u4F7F\u7528 301 \u91CD\u5B9A\u5411\u65F6\uFF0C\u5982\u9700\u9632\u6B62\u7F13\u5B58\uFF0C\u9700\u624B\u52A8\u6DFB\u52A0 ",(0,r.jsx)(e.code,{children:"Cache-Control"})," \u54CD\u5E94\u5934\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u901A\u8FC7\u5408\u7406\u4F7F\u7528\u91CD\u5B9A\u5411\u72B6\u6001\u7801\u548C\u54CD\u5E94\u5934\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u63A7\u5236\u8D44\u6E90\u7684\u8BBF\u95EE\u548C\u5BFC\u822A\u3002"})]})}function a(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return c}});var i=t(67294);let r={},s=i.createContext(r);function c(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);