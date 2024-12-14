"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["32037"],{97673:function(n,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"Backend/Go/Gin/Validator\u591A\u8BED\u8A00\u7FFB\u8BD1","title":"\u5728 Gin \u4E2D\u4F7F\u7528 Validator \u8FDB\u884C\u591A\u8BED\u8A00\u9A8C\u8BC1","description":"\u5B89\u88C5\u5FC5\u8981\u7684\u4F9D\u8D56\u5305","source":"@site/docs/Backend/Go/Gin/40.Validator\u591A\u8BED\u8A00\u7FFB\u8BD1.md","sourceDirName":"Backend/Go/Gin","slug":"/Backend/Go/Gin/Validator\u591A\u8BED\u8A00\u7FFB\u8BD1","permalink":"/docs-hub/Backend/Go/Gin/Validator\u591A\u8BED\u8A00\u7FFB\u8BD1","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/Gin/40.Validator\u591A\u8BED\u8A00\u7FFB\u8BD1.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":40,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Gin \u6846\u67B6\u4E2D\u7684\u6570\u636E\u7ED1\u5B9A\u65B9\u6CD5\u8BE6\u89E3","permalink":"/docs-hub/Backend/Go/Gin/\u6570\u636E\u7ED1\u5B9A\u65B9\u6CD5"},"next":{"title":"Go \u8BED\u8A00\u4E2D\u7684\u8DEF\u5F84\u5904\u7406\u4E0E\u91CD\u5B9A\u5411","permalink":"/docs-hub/Backend/Go/Gin/\u670D\u52A1\u7AEF\u6E32\u67D3"}}'),l=r("85893"),s=r("50065");let t={},d="\u5728 Gin \u4E2D\u4F7F\u7528 Validator \u8FDB\u884C\u591A\u8BED\u8A00\u9A8C\u8BC1",a={},o=[{value:"\u5B89\u88C5\u5FC5\u8981\u7684\u4F9D\u8D56\u5305",id:"\u5B89\u88C5\u5FC5\u8981\u7684\u4F9D\u8D56\u5305",level:2},{value:"\u521B\u5EFA\u548C\u4F7F\u7528\u7FFB\u8BD1\u5668\u4E0E\u9A8C\u8BC1\u5668",id:"\u521B\u5EFA\u548C\u4F7F\u7528\u7FFB\u8BD1\u5668\u4E0E\u9A8C\u8BC1\u5668",level:2},{value:"\u7F16\u5199\u793A\u4F8B\u4EE3\u7801",id:"\u7F16\u5199\u793A\u4F8B\u4EE3\u7801",level:3},{value:"\u4EE3\u7801\u89E3\u6790",id:"\u4EE3\u7801\u89E3\u6790",level:3},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u94FE\u63A5",id:"\u76F8\u5173\u94FE\u63A5",level:2}];function c(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u5728-gin-\u4E2D\u4F7F\u7528-validator-\u8FDB\u884C\u591A\u8BED\u8A00\u9A8C\u8BC1",children:"\u5728 Gin \u4E2D\u4F7F\u7528 Validator \u8FDB\u884C\u591A\u8BED\u8A00\u9A8C\u8BC1"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5B89\u88C5\u5FC5\u8981\u7684\u4F9D\u8D56\u5305",children:"\u5B89\u88C5\u5FC5\u8981\u7684\u4F9D\u8D56\u5305"}),"\n",(0,l.jsx)(e.p,{children:"\u4E3A\u4E86\u5728 Gin \u6846\u67B6\u4E2D\u5B9E\u73B0\u591A\u8BED\u8A00\u7684\u9A8C\u8BC1\uFF0C\u9700\u8981\u5B89\u88C5\u4EE5\u4E0B\u4F9D\u8D56\u5305\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"go get -u github.com/go-playground/locales\ngo get -u github.com/go-playground/universal-translator\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD9\u4E9B\u5305\u63D0\u4F9B\u4E86\u672C\u5730\u5316\u548C\u7FFB\u8BD1\u529F\u80FD\uFF0C\u914D\u5408 ",(0,l.jsx)(e.code,{children:"validator"})," \u4F7F\u7528\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9519\u8BEF\u4FE1\u606F\u7684\u591A\u8BED\u8A00\u652F\u6301\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u521B\u5EFA\u548C\u4F7F\u7528\u7FFB\u8BD1\u5668\u4E0E\u9A8C\u8BC1\u5668",children:"\u521B\u5EFA\u548C\u4F7F\u7528\u7FFB\u8BD1\u5668\u4E0E\u9A8C\u8BC1\u5668"}),"\n",(0,l.jsx)(e.p,{children:"\u4F7F\u7528\u7FFB\u8BD1\u5668\u548C\u9A8C\u8BC1\u5668\u53EF\u4EE5\u5E2E\u52A9\u6211\u5FEB\u901F\u5B8C\u6210\u4EE3\u7801\u903B\u8F91\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002\u4E0B\u9762\u662F\u5177\u4F53\u7684\u5B9E\u73B0\u6B65\u9AA4\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u7F16\u5199\u793A\u4F8B\u4EE3\u7801",children:"\u7F16\u5199\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsxs)(e.p,{children:["\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u6F14\u793A\u5982\u4F55\u5728 Gin \u4E2D\u96C6\u6210 ",(0,l.jsx)(e.code,{children:"validator"})," \u548C\u7FFB\u8BD1\u5668\uFF0C\u5B9E\u73B0\u591A\u8BED\u8A00\u7684\u9519\u8BEF\u4FE1\u606F\u63D0\u793A\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gin-gonic/gin"\n    "github.com/gin-gonic/gin/binding"\n    "github.com/go-playground/locales/en"\n    "github.com/go-playground/locales/zh"\n    ut "github.com/go-playground/universal-translator"\n    "github.com/go-playground/validator/v10"\n    entranslations "github.com/go-playground/validator/v10/translations/en"\n    zhtranslations "github.com/go-playground/validator/v10/translations/zh"\n    "net/http"\n    "reflect"\n)\n\nvar trans ut.Translator\n\ntype Register struct {\n    Username string `json:"username" binding:"required,max=10,min=5"`\n    Password string `json:"password" binding:"required,max=10,min=5"`\n}\n\nfunc main() {\n    r := gin.Default()\n\n    if err := initTrans("zh"); err != nil {\n        fmt.Println("\u65E0\u6CD5\u521B\u5EFA\u7FFB\u8BD1\u5668")\n        return\n    }\n\n    r.POST("/register", func(c *gin.Context) {\n        var reg Register\n\n        if err := c.ShouldBindJSON(&reg); err != nil {\n            errs, ok := err.(validator.ValidationErrors)\n            if !ok {\n                c.JSON(http.StatusOK, gin.H{\n                    "code": 1,\n                    "msg":  err.Error(),\n                })\n                return\n            }\n\n            c.JSON(http.StatusOK, gin.H{\n                "code": 1001,\n                "msg":  errs.Translate(trans),\n            })\n            return\n        }\n\n        c.JSON(http.StatusOK, gin.H{\n            "code": 0,\n            "msg":  "success",\n            "data": reg,\n        })\n    })\n\n    r.Run()\n}\n\nfunc initTrans(locale string) error {\n    validate, ok := binding.Validator.Engine().(*validator.Validate)\n    if !ok {\n        fmt.Println("Validator\u7C7B\u578B\u65AD\u8A00\u5931\u8D25")\n        return fmt.Errorf("Validator\u7C7B\u578B\u65AD\u8A00\u5931\u8D25")\n    }\n\n    // \u6CE8\u518C\u4E00\u4E2A\u83B7\u53D6 json \u6807\u7B7E\u4F5C\u4E3A\u5B57\u6BB5\u540D\u7684\u65B9\u6CD5\n    validate.RegisterTagNameFunc(func(fld reflect.StructField) string {\n        name := fld.Tag.Get("json")\n        if name == "" {\n            return fld.Name\n        }\n        return name\n    })\n\n    zhT := zh.New()\n    enT := en.New()\n    uni := ut.New(enT, zhT, enT)\n\n    var found bool\n    trans, found = uni.GetTranslator(locale)\n    if !found {\n        fmt.Printf("\u627E\u4E0D\u5230\u8BED\u8A00%s\u7684\u7FFB\u8BD1\u5668\\n", locale)\n        return fmt.Errorf("\u627E\u4E0D\u5230\u8BED\u8A00%s\u7684\u7FFB\u8BD1\u5668", locale)\n    }\n\n    switch locale {\n    case "zh":\n        err := zhtranslations.RegisterDefaultTranslations(validate, trans)\n        if err != nil {\n            return err\n        }\n    case "en":\n        err := entranslations.RegisterDefaultTranslations(validate, trans)\n        if err != nil {\n            return err\n        }\n    default:\n        fmt.Printf("\u4E0D\u652F\u6301\u7684\u8BED\u8A00\u7C7B\u578B%s\\n", locale)\n        return fmt.Errorf("\u4E0D\u652F\u6301\u7684\u8BED\u8A00\u7C7B\u578B%s", locale)\n    }\n\n    return nil\n}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u4EE3\u7801\u89E3\u6790",children:"\u4EE3\u7801\u89E3\u6790"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7ED3\u6784\u4F53\u5B9A\u4E49"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"Register"})," \u7ED3\u6784\u4F53\uFF0C\u7528\u4E8E\u63A5\u6536\u6CE8\u518C\u4FE1\u606F\uFF0C\u5E76\u5728\u7ED3\u6784\u4F53\u6807\u7B7E\u4E2D\u4F7F\u7528\u4E86\u9A8C\u8BC1\u89C4\u5219 ",(0,l.jsx)(e.code,{children:"required"}),"\u3001",(0,l.jsx)(e.code,{children:"max=10"}),"\u3001",(0,l.jsx)(e.code,{children:"min=5"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u521D\u59CB\u5316\u7FFB\u8BD1\u5668"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ",(0,l.jsx)(e.code,{children:"main"})," \u51FD\u6570\u4E2D\uFF0C\u8C03\u7528\u4E86 ",(0,l.jsx)(e.code,{children:'initTrans("zh")'})," \u51FD\u6570\uFF0C\u521D\u59CB\u5316\u4E2D\u6587\u7FFB\u8BD1\u5668\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8DEF\u7531\u5904\u7406"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u8DEF\u7531\u5904\u7406\u51FD\u6570\u4E2D\uFF0C\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"ShouldBindJSON"})," \u5C06\u8BF7\u6C42\u4F53\u7ED1\u5B9A\u5230 ",(0,l.jsx)(e.code,{children:"reg"})," \u7ED3\u6784\u4F53\u3002\u5982\u679C\u53D1\u751F\u9519\u8BEF\uFF0C\u68C0\u67E5\u662F\u5426\u662F\u9A8C\u8BC1\u9519\u8BEF\u7C7B\u578B\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"errs.Translate(trans)"})," \u5C06\u9519\u8BEF\u4FE1\u606F\u7FFB\u8BD1\u6210\u4E2D\u6587\u5E76\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7FFB\u8BD1\u5668\u521D\u59CB\u5316\u51FD\u6570"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"initTrans"})," \u51FD\u6570\u7528\u4E8E\u521D\u59CB\u5316\u7FFB\u8BD1\u5668\u3002\u9996\u5148\uFF0C\u65AD\u8A00 ",(0,l.jsx)(e.code,{children:"binding.Validator.Engine()"})," \u662F\u5426\u4E3A ",(0,l.jsx)(e.code,{children:"*validator.Validate"})," \u7C7B\u578B\u3002\u7136\u540E\uFF0C\u6CE8\u518C\u4E86\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"RegisterTagNameFunc"}),"\uFF0C\u4F7F\u9A8C\u8BC1\u5668\u5728\u8FD4\u56DE\u9519\u8BEF\u65F6\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"json"})," \u6807\u7B7E\u4F5C\u4E3A\u5B57\u6BB5\u540D\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u521B\u5EFA\u4E86\u4E2D\u6587\u548C\u82F1\u6587\u7684\u7FFB\u8BD1\u5668\uFF0C\u5E76\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"ut.New"})," \u521B\u5EFA\u4E86\u4E00\u4E2A\u901A\u7528\u7FFB\u8BD1\u5668 ",(0,l.jsx)(e.code,{children:"uni"}),"\u3002\u6839\u636E\u4F20\u5165\u7684\u8BED\u8A00\u53C2\u6570 ",(0,l.jsx)(e.code,{children:"locale"}),"\uFF0C\u83B7\u53D6\u5BF9\u5E94\u7684\u7FFB\u8BD1\u5668\uFF0C\u5E76\u6CE8\u518C\u76F8\u5E94\u8BED\u8A00\u7684\u9ED8\u8BA4\u7FFB\u8BD1\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5168\u9762\u7684\u9519\u8BEF\u5904\u7406"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u7ED1\u5B9A\u548C\u9A8C\u8BC1\u65F6\uFF0C\u90FD\u8981\u5904\u7406\u53EF\u80FD\u51FA\u73B0\u7684\u9519\u8BEF\uFF0C\u786E\u4FDD\u7A0B\u5E8F\u7684\u5065\u58EE\u6027\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53CB\u597D\u7684\u9519\u8BEF\u4FE1\u606F"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"json"})," \u6807\u7B7E\u4F5C\u4E3A\u5B57\u6BB5\u540D\uFF0C\u53EF\u4EE5\u4F7F\u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F\u66F4\u52A0\u53CB\u597D\uFF0C\u76F4\u63A5\u663E\u793A\u524D\u7AEF\u4F20\u9012\u7684\u5B57\u6BB5\u540D\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u591A\u8BED\u8A00\u652F\u6301"})}),"\n",(0,l.jsxs)(e.p,{children:["\u901A\u8FC7\u4F20\u5165\u4E0D\u540C\u7684 ",(0,l.jsx)(e.code,{children:"locale"}),"\uFF0C\u53EF\u4EE5\u652F\u6301\u591A\u79CD\u8BED\u8A00\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6613\u8BFB\u7684\u53D8\u91CF\u540D"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4F7F\u7528\u7B80\u6D01\u6613\u61C2\u7684\u53D8\u91CF\u540D\uFF0C\u4F8B\u5982\u5C06 ",(0,l.jsx)(e.code,{children:"register"})," \u7B80\u5316\u4E3A ",(0,l.jsx)(e.code,{children:"reg"}),"\uFF0C\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"validator"})," \u548C\u7FFB\u8BD1\u5668\u65F6\uFF0C\u8981\u786E\u4FDD\u7248\u672C\u517C\u5BB9\uFF0C\u4E0D\u8981\u968F\u610F\u66F4\u6539\u5305\u7684\u7248\u672C\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u53D8\u91CF\u540D\u5E94\u5C3D\u91CF\u7B80\u6D01\u660E\u4E86\uFF0C\u907F\u514D\u4F7F\u7528\u96BE\u4EE5\u7406\u89E3\u7684\u7F29\u5199\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u907F\u514D\u5728\u4EE3\u7801\u548C\u6CE8\u91CA\u4E2D\u4F7F\u7528\u5192\u53F7\uFF0C\u63D0\u5347\u4EE3\u7801\u89C4\u8303\u6027\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u52A8\u6001\u8BBE\u7F6E ",(0,l.jsx)(e.code,{children:"locale"}),"\uFF0C\u5B9E\u73B0\u5BA2\u6237\u7AEF\u81EA\u884C\u9009\u62E9\u8BED\u8A00\u7684\u529F\u80FD\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u76F8\u5173\u94FE\u63A5",children:"\u76F8\u5173\u94FE\u63A5"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://github.com/go-playground/validator/tree/master/_examples/translations",children:"go-playground/validator Translations \u793A\u4F8B"})})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},50065:function(n,e,r){r.d(e,{Z:function(){return d},a:function(){return t}});var i=r(67294);let l={},s=i.createContext(l);function t(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);