"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[93555],{58657:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"Backend/Go/Gin/Gin\u6846\u67b6","title":"\u4f7f\u7528 Gin \u6846\u67b6\u6784\u5efa Go \u5e94\u7528\u7a0b\u5e8f","description":"\u521d\u59cb\u5316\u6a21\u5757","source":"@site/docs/Backend/Go/Gin/10.Gin\u6846\u67b6.md","sourceDirName":"Backend/Go/Gin","slug":"/Backend/Go/Gin/Gin\u6846\u67b6","permalink":"/docs-hub/docs/Backend/Go/Gin/Gin\u6846\u67b6","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/Gin/10.Gin\u6846\u67b6.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":10,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Gin","permalink":"/docs-hub/docs/category/gin"},"next":{"title":"Web \u5b89\u5168\u4e2d\u7684\u590d\u6742\u8bf7\u6c42\u548c\u653b\u51fb\u9632\u8303","permalink":"/docs-hub/docs/Backend/Go/Gin/Web\u5b89\u5168\u4e0e\u8bf7\u6c42"}}');var d=i(74848),l=i(28453);const c={},r="\u4f7f\u7528 Gin \u6846\u67b6\u6784\u5efa Go \u5e94\u7528\u7a0b\u5e8f",a={},t=[{value:"\u521d\u59cb\u5316\u6a21\u5757",id:"\u521d\u59cb\u5316\u6a21\u5757",level:2},{value:"\u751f\u6210\u6587\u4ef6",id:"\u751f\u6210\u6587\u4ef6",level:2},{value:"\u5b89\u88c5 Gin",id:"\u5b89\u88c5-gin",level:2},{value:"\u66f4\u6362\u4ee3\u7406",id:"\u66f4\u6362\u4ee3\u7406",level:2},{value:"\u4f7f\u7528 Git \u514b\u9686\u5b89\u88c5",id:"\u4f7f\u7528-git-\u514b\u9686\u5b89\u88c5",level:2},{value:"\u65b0\u5efa <code>main.go</code>",id:"\u65b0\u5efa-maingo",level:2},{value:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f",id:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u65e5\u5fd7\u542b\u4e49",id:"\u65e5\u5fd7\u542b\u4e49",level:2},{value:"Logger \u548c Recovery \u4e2d\u95f4\u4ef6\u7684\u8b66\u544a",id:"logger-\u548c-recovery-\u4e2d\u95f4\u4ef6\u7684\u8b66\u544a",level:3},{value:"\u8fd0\u884c\u5728 &quot;debug&quot; \u6a21\u5f0f\u7684\u8b66\u544a",id:"\u8fd0\u884c\u5728-debug-\u6a21\u5f0f\u7684\u8b66\u544a",level:3},{value:"\u5173\u4e8e\u4ee3\u7406\u7684\u8b66\u544a",id:"\u5173\u4e8e\u4ee3\u7406\u7684\u8b66\u544a",level:3},{value:"\u7aef\u53e3\u914d\u7f6e\u4fe1\u606f",id:"\u7aef\u53e3\u914d\u7f6e\u4fe1\u606f",level:3},{value:"\u76d1\u542c\u670d\u52a1\u4fe1\u606f",id:"\u76d1\u542c\u670d\u52a1\u4fe1\u606f",level:3},{value:"\u8bf7\u6c42\u65e5\u5fd7",id:"\u8bf7\u6c42\u65e5\u5fd7",level:3},{value:"\u5207\u6362\u5230\u53d1\u5e03\u6a21\u5f0f",id:"\u5207\u6362\u5230\u53d1\u5e03\u6a21\u5f0f",level:2},{value:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",level:3},{value:"\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6e",id:"\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6e",level:3},{value:"\u914d\u7f6e\u4fe1\u4efb\u7684\u4ee3\u7406",id:"\u914d\u7f6e\u4fe1\u4efb\u7684\u4ee3\u7406",level:2},{value:"\u66f4\u6539\u76d1\u542c\u7aef\u53e3",id:"\u66f4\u6539\u76d1\u542c\u7aef\u53e3",level:2},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u8def\u7531",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u8def\u7531",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u4f7f\u7528-gin-\u6846\u67b6\u6784\u5efa-go-\u5e94\u7528\u7a0b\u5e8f",children:"\u4f7f\u7528 Gin \u6846\u67b6\u6784\u5efa Go \u5e94\u7528\u7a0b\u5e8f"})}),"\n",(0,d.jsx)(n.h2,{id:"\u521d\u59cb\u5316\u6a21\u5757",children:"\u521d\u59cb\u5316\u6a21\u5757"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"go mod init main\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u751f\u6210\u6587\u4ef6",children:"\u751f\u6210\u6587\u4ef6"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"Go Modules \u6587\u4ef6\u7ed3\u6784",src:i(34400).A+"",width:"820",height:"354"})}),"\n",(0,d.jsx)(n.h2,{id:"\u5b89\u88c5-gin",children:"\u5b89\u88c5 Gin"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"go get -u github.com/gin-gonic/gin\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u9047\u5230\u7f51\u7edc\u95ee\u9898\uff0c\u53ef\u4ee5\u66f4\u6362\u4ee3\u7406\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u66f4\u6362\u4ee3\u7406",children:"\u66f4\u6362\u4ee3\u7406"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"go env -w GOPROXY=https://goproxy.cn,direct\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"\u8bbe\u7f6e\u4ee3\u7406",src:i(6665).A+"",width:"1250",height:"579"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4f7f\u7528-git-\u514b\u9686\u5b89\u88c5",children:"\u4f7f\u7528 Git \u514b\u9686\u5b89\u88c5"}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u4ecd\u7136\u65e0\u6cd5\u5b89\u88c5\uff0c\u53ef\u4ee5\u901a\u8fc7 Git \u514b\u9686\u65b9\u5f0f\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gin-gonic/gin.git\ncd gin\ngo install\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"\u65b0\u5efa-maingo",children:["\u65b0\u5efa ",(0,d.jsx)(n.code,{children:"main.go"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"net/http"\n\n\t"github.com/gin-gonic/gin"\n)\n\nfunc main() {\n\t// \u521b\u5efa\u9ed8\u8ba4\u7684 Gin \u8def\u7531\u5668\n\trouter := gin.Default()\n\n\t// \u6dfb\u52a0\u4e00\u4e2a\u7b80\u5355\u7684 GET \u8def\u7531\n\trouter.GET("/ping", func(c *gin.Context) {\n\t\tc.JSON(http.StatusOK, gin.H{\n\t\t\t"message": "pong",\n\t\t})\n\t})\n\n\t// \u8fd0\u884c\u670d\u52a1\u5668\uff0c\u9ed8\u8ba4\u76d1\u542c\u5728 localhost:8080\n\trouter.Run()\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f",children:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f",src:i(99898).A+"",width:"1235",height:"357"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"\u8bbf\u95ee /ping \u8def\u7531",src:i(56398).A+"",width:"1727",height:"503"})}),"\n",(0,d.jsx)(n.h2,{id:"\u65e5\u5fd7\u542b\u4e49",children:"\u65e5\u5fd7\u542b\u4e49"}),"\n",(0,d.jsx)(n.h3,{id:"logger-\u548c-recovery-\u4e2d\u95f4\u4ef6\u7684\u8b66\u544a",children:"Logger \u548c Recovery \u4e2d\u95f4\u4ef6\u7684\u8b66\u544a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-plaintext",children:"[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u662f\u63d0\u793a Gin \u5f15\u64ce\u5b9e\u4f8b\u5df2\u7ecf\u9644\u52a0\u4e86 Logger \u548c Recovery \u4e2d\u95f4\u4ef6\uff0c\u8fd9\u662f\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4e0d\u9700\u8981\u62c5\u5fc3\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u8fd0\u884c\u5728-debug-\u6a21\u5f0f\u7684\u8b66\u544a",children:'\u8fd0\u884c\u5728 "debug" \u6a21\u5f0f\u7684\u8b66\u544a'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-plaintext",children:'[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n - using env:   export GIN_MODE=release\n - using code:  gin.SetMode(gin.ReleaseMode)\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u8868\u793a\u5f53\u524d\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u5728\u8c03\u8bd5\u6a21\u5f0f\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5efa\u8bae\u5207\u6362\u5230\u53d1\u5e03\u6a21\u5f0f\u4ee5\u63d0\u9ad8\u6027\u80fd\u5e76\u51cf\u5c11\u65e5\u5fd7\u8f93\u51fa\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf ",(0,d.jsx)(n.code,{children:"GIN_MODE=release"})," \u6216\u5728\u4ee3\u7801\u4e2d\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"gin.SetMode(gin.ReleaseMode)"})," \u6765\u5b9e\u73b0\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5173\u4e8e\u4ee3\u7406\u7684\u8b66\u544a",children:"\u5173\u4e8e\u4ee3\u7406\u7684\u8b66\u544a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-plaintext",children:"[GIN-debug] [WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u8868\u793a\u5e94\u7528\u7a0b\u5e8f\u88ab\u914d\u7f6e\u4e3a\u4fe1\u4efb\u6240\u6709\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u98ce\u9669\u3002\u5efa\u8bae\u4ec5\u4fe1\u4efb\u53d7\u4fe1\u4efb\u7684\u4ee3\u7406\uff0c\u6216\u8005\u914d\u7f6e\u7279\u5b9a\u7684\u4ee3\u7406\u5217\u8868\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u7aef\u53e3\u914d\u7f6e\u4fe1\u606f",children:"\u7aef\u53e3\u914d\u7f6e\u4fe1\u606f"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-plaintext",children:"[GIN-debug] Environment variable PORT is undefined. Using port :8080 by default\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8868\u793a\u73af\u5883\u53d8\u91cf ",(0,d.jsx)(n.code,{children:"PORT"})," \u672a\u5b9a\u4e49\uff0cGin \u9ed8\u8ba4\u4f7f\u7528\u7aef\u53e3 8080\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,d.jsx)(n.code,{children:"PORT"})," \u73af\u5883\u53d8\u91cf\u6765\u66f4\u6539\u76d1\u542c\u7aef\u53e3\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u76d1\u542c\u670d\u52a1\u4fe1\u606f",children:"\u76d1\u542c\u670d\u52a1\u4fe1\u606f"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-plaintext",children:"[GIN-debug] Listening and serving HTTP on :8080\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8868\u793a\u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u7aef\u53e3 8080 \u4e0a\u76d1\u542c\u5e76\u63d0\u4f9b HTTP \u670d\u52a1\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u8bf7\u6c42\u65e5\u5fd7",children:"\u8bf7\u6c42\u65e5\u5fd7"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-plaintext",children:'[GIN] 2024/01/08 - 17:11:35 | 200 |            0s |             ::1 | GET      "/ping"\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u6761\u8bf7\u6c42\u65e5\u5fd7\uff0c\u663e\u793a\u4e86\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u65f6\u95f4"}),"\uff1a\u8bf7\u6c42\u53d1\u751f\u7684\u65f6\u95f4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u72b6\u6001\u7801"}),"\uff1a\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801\uff0c200 \u8868\u793a\u6210\u529f\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u8017\u65f6"}),"\uff1a\u5904\u7406\u8bf7\u6c42\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u5ba2\u6237\u7aef IP"}),"\uff1a\u8bf7\u6c42\u7684\u6765\u6e90 IP \u5730\u5740\uff0c",(0,d.jsx)(n.code,{children:"::1"})," \u8868\u793a\u672c\u5730 IPv6 \u5730\u5740\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u65b9\u6cd5\u548c\u8def\u5f84"}),"\uff1a\u8bf7\u6c42\u7684\u65b9\u6cd5\u548c\u8def\u5f84\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5207\u6362\u5230\u53d1\u5e03\u6a21\u5f0f",children:"\u5207\u6362\u5230\u53d1\u5e03\u6a21\u5f0f"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5efa\u8bae\u5c06 Gin \u5207\u6362\u5230\u53d1\u5e03\u6a21\u5f0f\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b9e\u73b0\uff1a"}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",children:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u524d\uff0c\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"export GIN_MODE=release\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6e",children:"\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6e"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"main.go"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"gin.SetMode(gin.ReleaseMode)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u914d\u7f6e\u4fe1\u4efb\u7684\u4ee3\u7406",children:"\u914d\u7f6e\u4fe1\u4efb\u7684\u4ee3\u7406"}),"\n",(0,d.jsx)(n.p,{children:"\u4e3a\u4e86\u5b89\u5168\u8d77\u89c1\uff0c\u5e94\u8be5\u914d\u7f6e\u4fe1\u4efb\u7684\u4ee3\u7406\u5217\u8868\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4f4d\u4e8e\u53cd\u5411\u4ee3\u7406\u4e4b\u540e\uff0c\u53ef\u4ee5\u6307\u5b9a\u4ee3\u7406\u7684 IP \u5730\u5740\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'router.SetTrustedProxies([]string{"192.168.1.1"})\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5c06 ",(0,d.jsx)(n.code,{children:'"192.168.1.1"'})," \u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u4ee3\u7406\u670d\u52a1\u5668 IP \u5730\u5740\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u66f4\u6539\u76d1\u542c\u7aef\u53e3",children:"\u66f4\u6539\u76d1\u542c\u7aef\u53e3"}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u5728 ",(0,d.jsx)(n.code,{children:"router.Run()"})," \u4e2d\u6307\u5b9a\u7aef\u53e3\u53f7\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'router.Run(":8081")\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u6216\u8005\u901a\u8fc7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf ",(0,d.jsx)(n.code,{children:"PORT"}),"\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"export PORT=8081\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u8def\u7531",children:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u8def\u7531"}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u7684\u8def\u7531\u6765\u5904\u7406\u4e0d\u540c\u7684\u8bf7\u6c42\u3002\u4f8b\u5982\uff0c\u6dfb\u52a0\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"/hello"})," \u8def\u7531\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'router.GET("/hello", func(c *gin.Context) {\n\tc.JSON(http.StatusOK, gin.H{\n\t\t"message": "Hello, sumingcheng!",\n\t})\n})\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,d.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u6211\u4eec\u6210\u529f\u5730\u4f7f\u7528 Gin \u6846\u67b6\u6784\u5efa\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 Go \u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u4e86\u89e3\u4e86\u65e5\u5fd7\u4e2d\u7684\u5e38\u89c1\u63d0\u793a\u4fe1\u606f\u3002\u8bb0\u5f97\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8c03\u6574\u914d\u7f6e\uff0c\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u5b89\u5168\u6027\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},6665:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/0cf5c0c644c649e332d6c8c927d3b615-c1a3cb46b8aa89517af3d4b54301dedc.png"},99898:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/587d18b1fb1b77bbabf18325144f1f9c-88888b39e94f3cdd88b73a6a7f02306a.png"},56398:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/bd0871eaca688aa4023752ff788643f8-ecb58696804178b4fb769e22ff9cffd7.png"},34400:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/d016fff20dda9fd7db675f5dd8b066bb-23a471046d6faf6c89c24ec3dc570b58.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var s=i(96540);const d={},l=s.createContext(d);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);