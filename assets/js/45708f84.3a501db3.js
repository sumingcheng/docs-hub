"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[37877],{39991:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>t,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Backend/Go/\u57fa\u7840/\u5224\u65ad\u8bed\u53e5","title":"Go \u6761\u4ef6\u5224\u65ad","description":"Go \u8bed\u8a00\u7684\u6761\u4ef6\u5224\u65ad\u4e3b\u8981\u4f7f\u7528 if\u3001else\u3001else if \u548c switch\uff0c\u867d\u7136\u4e0e\u5176\u4ed6\u4e3b\u6d41\u7f16\u7a0b\u8bed\u8a00\u7c7b\u4f3c\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u72ec\u7279\u7684\u7279\u70b9\u3002\u6211\u5728\u8fd9\u91cc\u5206\u4eab\u4e00\u4e0b\u5bf9\u8fd9\u4e9b\u6761\u4ef6\u5224\u65ad\u7684\u7406\u89e3\u548c\u4f7f\u7528\u65b9\u6cd5\u3002","source":"@site/docs/Backend/Go/\u57fa\u7840/14.\u5224\u65ad\u8bed\u53e5.md","sourceDirName":"Backend/Go/\u57fa\u7840","slug":"/Backend/Go/\u57fa\u7840/\u5224\u65ad\u8bed\u53e5","permalink":"/docs-hub/Backend/Go/\u57fa\u7840/\u5224\u65ad\u8bed\u53e5","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u57fa\u7840/14.\u5224\u65ad\u8bed\u53e5.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":14,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u7c7b\u578b\u8f6c\u6362\u548c\u8fd0\u7b97\u7b26","permalink":"/docs-hub/Backend/Go/\u57fa\u7840/\u7c7b\u578b\u8f6c\u6362\u548c\u8fd0\u7b97\u7b26"},"next":{"title":"Go \u5faa\u73af\u548c\u63a7\u5236\u7ed3\u6784","permalink":"/docs-hub/Backend/Go/\u57fa\u7840/\u5faa\u73af\u548c\u63a7\u5236\u7ed3\u6784"}}');var A=c(74848),i=c(28453);const d={},r="Go \u6761\u4ef6\u5224\u65ad",h={},l=[{value:"<code>if</code> \u8bed\u53e5",id:"if-\u8bed\u53e5",level:2},{value:"<code>else</code> \u548c <code>else if</code> \u8bed\u53e5",id:"else-\u548c-else-if-\u8bed\u53e5",level:2},{value:"<code>switch</code> \u8bed\u53e5",id:"switch-\u8bed\u53e5",level:2},{value:"<code>fallthrough</code> \u8bed\u53e5",id:"fallthrough-\u8bed\u53e5",level:3},{value:"\u591a\u91cd\u5339\u914d",id:"\u591a\u91cd\u5339\u914d",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.header,{children:(0,A.jsx)(n.h1,{id:"go-\u6761\u4ef6\u5224\u65ad",children:"Go \u6761\u4ef6\u5224\u65ad"})}),"\n",(0,A.jsxs)(n.p,{children:["Go \u8bed\u8a00\u7684\u6761\u4ef6\u5224\u65ad\u4e3b\u8981\u4f7f\u7528 ",(0,A.jsx)(n.code,{children:"if"}),"\u3001",(0,A.jsx)(n.code,{children:"else"}),"\u3001",(0,A.jsx)(n.code,{children:"else if"})," \u548c ",(0,A.jsx)(n.code,{children:"switch"}),"\uff0c\u867d\u7136\u4e0e\u5176\u4ed6\u4e3b\u6d41\u7f16\u7a0b\u8bed\u8a00\u7c7b\u4f3c\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u72ec\u7279\u7684\u7279\u70b9\u3002\u6211\u5728\u8fd9\u91cc\u5206\u4eab\u4e00\u4e0b\u5bf9\u8fd9\u4e9b\u6761\u4ef6\u5224\u65ad\u7684\u7406\u89e3\u548c\u4f7f\u7528\u65b9\u6cd5\u3002"]}),"\n",(0,A.jsxs)(n.h2,{id:"if-\u8bed\u53e5",children:[(0,A.jsx)(n.code,{children:"if"})," \u8bed\u53e5"]}),"\n",(0,A.jsxs)(n.p,{children:["\u5728 Go \u8bed\u8a00\u4e2d\uff0c",(0,A.jsx)(n.code,{children:"if"})," \u8bed\u53e5\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u53ef\u9009\u7684\u521d\u59cb\u5316\u8bed\u53e5\uff0c\u8be5\u8bed\u53e5\u4f1a\u5728\u6761\u4ef6\u5224\u65ad\u4e4b\u524d\u6267\u884c\u3002\u6b64\u5916\uff0c",(0,A.jsx)(n.code,{children:"if"})," \u6761\u4ef6\u8868\u8fbe\u5f0f\u4e0d\u9700\u8981\u4f7f\u7528\u62ec\u53f7\u5305\u56f4\uff0c\u4f46\u4ee3\u7801\u5757\u5fc5\u987b\u4f7f\u7528\u82b1\u62ec\u53f7 ",(0,A.jsx)(n.code,{children:"{}"}),"\u3002"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-go",children:'func checkNumber(num int) {\n    if remainder := num % 2; remainder == 0 {\n        fmt.Println(num, "\u662f\u5076\u6570")\n    } else {\n        fmt.Println(num, "\u662f\u5947\u6570")\n    }\n}\n'})}),"\n",(0,A.jsxs)(n.p,{children:["\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4f7f\u7528\u4e86\u4e00\u4e2a\u521d\u59cb\u5316\u8bed\u53e5 ",(0,A.jsx)(n.code,{children:"remainder := num % 2"}),"\uff0c",(0,A.jsx)(n.code,{children:"remainder"})," \u7684\u4f5c\u7528\u57df\u4ec5\u9650\u4e8e ",(0,A.jsx)(n.code,{children:"if-else"})," \u4ee3\u7801\u5757\u5185\u90e8\u3002"]}),"\n",(0,A.jsxs)(n.h2,{id:"else-\u548c-else-if-\u8bed\u53e5",children:[(0,A.jsx)(n.code,{children:"else"})," \u548c ",(0,A.jsx)(n.code,{children:"else if"})," \u8bed\u53e5"]}),"\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.code,{children:"else"})," \u548c ",(0,A.jsx)(n.code,{children:"else if"})," \u7684\u4f7f\u7528\u65b9\u5f0f\u4e0e ",(0,A.jsx)(n.code,{children:"if"})," \u7c7b\u4f3c\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,A.jsx)(n.code,{children:"else"})," \u6216 ",(0,A.jsx)(n.code,{children:"else if"})," \u5fc5\u987b\u7d27\u8ddf\u5728 ",(0,A.jsx)(n.code,{children:"if"})," \u8bed\u53e5\u7684\u53f3\u82b1\u62ec\u53f7 ",(0,A.jsx)(n.code,{children:"}"})," \u4e4b\u540e\uff0c\u4e0d\u80fd\u6362\u884c\u3002",(0,A.jsx)(n.code,{children:"else if"})," \u63d0\u4f9b\u4e86\u989d\u5916\u7684\u6761\u4ef6\u5224\u65ad\uff0c\u907f\u514d\u4e86\u591a\u5c42\u5d4c\u5957\u7684 ",(0,A.jsx)(n.code,{children:"if-else"})," \u7ed3\u6784\u3002"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-go",children:'func checkScore(score int) {\n    if score >= 90 {\n        fmt.Println("A\u7ea7")\n    } else if score >= 80 {\n        fmt.Println("B\u7ea7")\n    } else if score >= 70 {\n        fmt.Println("C\u7ea7")\n    } else {\n        fmt.Println("D\u7ea7")\n    }\n}\n'})}),"\n",(0,A.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u6839\u636e\u5206\u6570\u8f93\u51fa\u5bf9\u5e94\u7684\u7b49\u7ea7\uff0c",(0,A.jsx)(n.code,{children:"else if"})," \u8bed\u53e5\u4f7f\u5f97\u4ee3\u7801\u903b\u8f91\u6e05\u6670\u660e\u4e86\u3002"]}),"\n",(0,A.jsxs)(n.h2,{id:"switch-\u8bed\u53e5",children:[(0,A.jsx)(n.code,{children:"switch"})," \u8bed\u53e5"]}),"\n",(0,A.jsxs)(n.p,{children:["Go \u8bed\u8a00\u7684 ",(0,A.jsx)(n.code,{children:"switch"})," \u8bed\u53e5\u6709\u4e00\u4e9b\u4e0d\u540c\u4e8e\u5176\u4ed6\u8bed\u8a00\u7684\u7279\u70b9\u3002\u9996\u5148\uff0c\u5b83\u53ef\u4ee5\u4e0d\u4f7f\u7528\u8868\u8fbe\u5f0f\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,A.jsx)(n.code,{children:"switch"})," \u4f1a\u5339\u914d ",(0,A.jsx)(n.code,{children:"true"}),"\u3002\u5176\u6b21\uff0c",(0,A.jsx)(n.code,{children:"switch"})," \u8bed\u53e5\u53ef\u4ee5\u5305\u542b\u521d\u59cb\u5316\u8bed\u53e5\uff0c\u5c31\u50cf ",(0,A.jsx)(n.code,{children:"if"})," \u8bed\u53e5\u4e00\u6837\u3002\u6b64\u5916\uff0c",(0,A.jsx)(n.code,{children:"case"})," \u8bed\u53e5\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u6761\u4ef6\uff0c\u4f7f\u7528\u9017\u53f7 ",(0,A.jsx)(n.code,{children:","})," \u5206\u9694\u3002"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-go",children:'func checkNumber(num int) {\n    switch remainder := num % 2; remainder {\n    case 0:\n        fmt.Println(num, "\u662f\u5076\u6570")\n    default:\n        fmt.Println(num, "\u662f\u5947\u6570")\n    }\n}\n'})}),"\n",(0,A.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684 ",(0,A.jsx)(n.code,{children:"switch"})," \u793a\u4f8b\u4e2d\uff0c\u6211\u4f7f\u7528\u4e86\u521d\u59cb\u5316\u8bed\u53e5 ",(0,A.jsx)(n.code,{children:"remainder := num % 2"}),"\uff0c\u7136\u540e\u6839\u636e ",(0,A.jsx)(n.code,{children:"remainder"})," \u7684\u503c\u8fdb\u884c\u5224\u65ad\u3002"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-go",children:'func checkScore(score int) {\n    switch {\n    case score >= 90:\n        fmt.Println("A\u7ea7")\n    case score >= 80:\n        fmt.Println("B\u7ea7")\n    case score >= 70:\n        fmt.Println("C\u7ea7")\n    default:\n        fmt.Println("D\u7ea7")\n    }\n}\n'})}),"\n",(0,A.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u7684 ",(0,A.jsx)(n.code,{children:"switch"})," \u540e\u6ca1\u6709\u8ddf\u4efb\u4f55\u8868\u8fbe\u5f0f\uff0c",(0,A.jsx)(n.code,{children:"case"})," \u6761\u4ef6\u4f1a\u4ece\u4e0a\u5230\u4e0b\u4f9d\u6b21\u5224\u65ad\uff0c\u5339\u914d\u5230\u7b2c\u4e00\u4e2a\u6ee1\u8db3\u6761\u4ef6\u7684\u5206\u652f\u540e\u6267\u884c\u3002"]}),"\n",(0,A.jsxs)(n.h3,{id:"fallthrough-\u8bed\u53e5",children:[(0,A.jsx)(n.code,{children:"fallthrough"})," \u8bed\u53e5"]}),"\n",(0,A.jsxs)(n.p,{children:["Go \u8bed\u8a00\u7684 ",(0,A.jsx)(n.code,{children:"switch"})," \u8bed\u53e5\u5728\u6bcf\u4e2a ",(0,A.jsx)(n.code,{children:"case"})," \u540e\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u7ed3\u675f\uff0c\u65e0\u9700\u663e\u5f0f\u5730\u5199\u51fa ",(0,A.jsx)(n.code,{children:"break"}),"\u3002\u5982\u679c\u5e0c\u671b\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2a ",(0,A.jsx)(n.code,{children:"case"}),"\uff0c\u9700\u8981\u4f7f\u7528 ",(0,A.jsx)(n.code,{children:"fallthrough"})," \u8bed\u53e5\u3002"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-go",children:'func checkScore(score int) {\n    switch {\n    case score >= 90:\n        fmt.Println("A\u7ea7")\n        fallthrough\n    case score >= 80:\n        fmt.Println("B\u7ea7")\n        fallthrough\n    case score >= 70:\n        fmt.Println("C\u7ea7")\n        fallthrough\n    default:\n        fmt.Println("D\u7ea7")\n    }\n}\n'})}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{src:c(45458).A+"",width:"376",height:"322"})}),"\n",(0,A.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4f7f\u7528\u4e86 ",(0,A.jsx)(n.code,{children:"fallthrough"}),"\uff0c\u6240\u4ee5\u5f53\u5206\u6570\u5927\u4e8e\u7b49\u4e8e 90 \u65f6\uff0c\u4f1a\u8fde\u7eed\u8f93\u51fa\u6240\u6709\u7b49\u7ea7\u3002"]}),"\n",(0,A.jsx)(n.h3,{id:"\u591a\u91cd\u5339\u914d",children:"\u591a\u91cd\u5339\u914d"}),"\n",(0,A.jsxs)(n.p,{children:["Go \u8bed\u8a00\u7684 ",(0,A.jsx)(n.code,{children:"switch"})," \u8bed\u53e5\u53ef\u4ee5\u5728 ",(0,A.jsx)(n.code,{children:"case"})," \u4e2d\u5339\u914d\u591a\u4e2a\u6761\u4ef6\uff0c\u6761\u4ef6\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7 ",(0,A.jsx)(n.code,{children:","})," \u5206\u9694\u3002"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-go",children:'func main() {\n    checkScore(90)\n    checkScore(80)\n    checkScore(70)\n}\n\nfunc checkScore(score int) {\n    switch {\n    case score >= 90, score >= 80, score >= 70:\n        fmt.Println("A\u7ea7")\n    default:\n        fmt.Println("D\u7ea7")\n    }\n}\n'})}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{src:c(66372).A+"",width:"510",height:"143"})}),"\n",(0,A.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c",(0,A.jsx)(n.code,{children:"case"})," \u6761\u4ef6\u5305\u542b\u4e86\u591a\u4e2a\u8868\u8fbe\u5f0f\uff0c\u4efb\u4f55\u4e00\u4e2a\u8868\u8fbe\u5f0f\u4e3a ",(0,A.jsx)(n.code,{children:"true"}),"\uff0c\u90fd\u4f1a\u6267\u884c\u5bf9\u5e94\u7684\u4ee3\u7801\u5757\u3002"]}),"\n",(0,A.jsx)(n.hr,{})]})}function t(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,A.jsx)(n,{...e,children:(0,A.jsx)(o,{...e})}):o(e)}},66372:(e,n,c)=>{c.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAACPCAYAAAAbZrn1AAAgAElEQVR4Ae2d+1cTZ/7H+99Mh+LtIAoeFBA9xeqWrljU3T1at5VztK2irShqvde1al2tHLNK63bt6nZVqlVEZZXqSosYcb3s1qAlXAxIJBACgelv7+95ZhJMMpMAkvglzPuHnJC5PM9nns9r5v35PJfhlcwZb2Eon1cTJoEftgEZIANkgAyQgfhk4JWhiL44lo6OT0fTb/QbGSADZIAMCAYo/OzBYDBHBsgAGSADJmKAwm8iZzPaZ7RPBsgAGSADFH4KPyN9MkAGyAAZMBEDFH4TOZuRPiN9MkAGyAAZoPBT+BnpkwEyQAbIgIkYoPCbyNmM9BnpkwEyQAbIAIWfws9InwyQATJABkzEAIXfRM5mpM9InwyQATJABij8FH5G+mSADJABMmAiBij8JnI2I31G+mSADJABMkDhp/Az0icDZIAMkAETMRBT4ZfkyVj+XSt+/bVb/dR8NotwGcA1adt1tX2Uq5uRKCezjQzaiFkKsxQyQAbIQHQYiLHwv4OvGz1Q+rrQp3jQfeUTjKew6YSdwh8dmPlQYDuSATJABgZmILbCn30A9xQPlLs/4abbA+XZaeQnMqMNBZPCPzCooW3G32wzMkAGyMCLMRBT4Z+09Rp6FQ8cx9djT60HivIIJXkU/lBYKfwvBm9oO/I325EMkAEyMDADMRN+SU5BQZkTitKJinVT8ftj9eo49p19Obqu7uE6KjF7FSzlVtid7eh2P4G9tgz789/AZN/Yufdika7OaZ9Vq/Z0lxUi8fUCWCpq0eBsR09XC+z/KYdlxVthx9sT0hZh3eELuPWwDq0dLvR0taLp5xsoPbga2ePDBzZjZxeipKIWjS4Xujua8aimFLsWZ0MESGIehNEYvzT+t3j/i1JUPbSjw9MJj6sJj6wXULJxESZx2ETn1+GyxPMHfmiwjdhGZCC+GYih8L+H4w6R5d/GnpnJSCw4D7figff6NiRHUbCk9CJcaunShFNxo8vZBGeXG0r3XXz1d23SXEThLy9BSV0nFO8zPG1xwNPr0crqa8T5Vdk6YZFnbcEVh1s7ptcFV4sdjnaX2rMhxNtVsw85Y/XiL83YjMo2X9mKG+42n51uK4qPVhoKv5S0GAdrtcmRijjH2YjWjk7ftXbAfnYtpkWxLXkzx/fNTP/Rf2SADAyGgdgJf84h2MT4fuMxzJeTIaX9CdV9Higd5/C+gTAOxtjQY8SqgSUn7KoQ9jZcxNa8LMiirsQszP/0Mu63OdR9kYTf21yHqtINmDNRA0ZOXYwdV7QylboS5AQIqyRPRUHZU7VMR+Ve/CEjTQ0MRO9G2sK9uNYmAh0Xrm6cERQwSHIqlp1u1myxleLjnAztvMTpyNt+EdYnDeq+wIxfkich9/D/1EmR7vvfoiAnHa+Ka5NTkZlfjCq1LicuFU4Pqiu0jfibDwIyQAbIABkIZCBmwp+2s0oVLde5j5CgClYeLDYhjHb8bZE+Iw40arB/S/LvUPJYlOlE2eppQQIoyRlYc1kT6UjCrzhOYsm4YHukqbtwUwQpyk3snPZ8nyRnYu6KzVi/cQMWZjzf7rc35y//VQW848yqEFvexbFmUV4rSj/QggX/OZKcjo8u+rL6gOV8kuxbEaE8hCV3clB54tzUbdfh9fWgTAwITvzl8ps3OhkgA2SADBgxEBPhl+Q0rLncDkXpwo1tWf2ilX9Ky3rvH5zXv83IqMFuk+SVONMpBPUOPn9dL8RZe61alh1hjL/vh60YFyKckpyPE62i3IewzNWXG86+/kl6VzapwY7/OEkuRLlXlGfF7hn68qbvuaXP+Md9gkrRY9JzASsT9OdIb3+JerH/0ZdBvRL+OvnNG54MkAEyQAaMGIiN8Ccsxym1K/o+vvjNc9GaUFShZqm9P+7C5BCxNTJuoG2SvBpl3UJQb2GXQQbuF+JIGb+Y3BdajyTnYst3lbh2/TTWz3puvzhOSpyFP+45jSpbI1w92li//wVF/u/ALnv1HLkIFUKklWrsmBpcntjvtzPwPCllJ34U5/Q50WKvgz3009SCHrG/SRtKCb0G/uYNTwbIABkgA0YMxEb455XgFyFKLd9icYDAS1mf447Y3lWOgpDudSPjBtoWK+EPV68kz8SKM7+oE/lEb0b3M3uwILe16zJ3UZY0DOH3BxPhvin8vLHD8crtZIMMkAEjBmIi/Jm7a1QBDCtWSjNOvKvPfI0MjLRNdPWfFS8GGkZXv1HGH65OKfcIHovApbcOZ9fm6t5CaJS5i7KGI/yK+3ssCwiewtnG7bzByQAZIANkYDAMRF34xcz3DZUdqvC32apRUxP8udekZcU2y0JdF/tgDA48RpIX4ahdCL/x5L6PLw08uW8owp+y/YaW0d/cjVQDMRYTGkWwE9hlL+wd1hi/twJrorQKIrDt+DcfEGSADJABczIQfeFPXIkzLiHGNlhy9Vl90nptnF+x7sVUA/EcCohiGd3Sk02q2PbaL2DT21nakjffMrkHTm22/FDH+MPZMOVTn7Bb9+rWz4uAZ+V5bfmgXvjfwzdPRJu8yKz+BvxjafBKAGHfhPmbUHzIguKiRRgzzHYMd73cbs6HAv1Ov5OB0c1A9IV/4V/RKLrD205iidFs9IzdsIr9Pf9C4UR9YDBU4KSsTbga+GIcZxPa3G4oXhuO/3MQL/AxmNwXzgbJP3dBaUDFzsVI8f/fgeS5WFb8Ax60aKsW9MIfuo4/Xe3tkHwByr2nT3Q9BWId/7wj2jp+b/0FbFkw07csMgVT8rbi3ONOddXEz5YFw+45CXe93D66b376l/4lA+ZkIOrCn32gVhUxd/k6w0xUkv3r+Vtxepl+ffqLgDh29hocuXwbDe0u9LgdaLh3CZYPc5C2Q+uaj1bGLyb3rTxb3/+WPq/bAYejRX3bn9Jpxf6SKzoB91+P/s19jVqA4rmHo8f/bXielLQEh+60afuULnieNcLhbFdXRoghBdfdw1gYheDJbyO/zfkQoN/pdzJgLgaiKvziBTdbb7i19fvbZ4bNRJecaFTFrP7oO2GPiQaI/q55b/k6XT2B7+ofSl3SmDewdF8pquua0dnTAbezHg+un8CWBVkYtzG88Is6RIAi3tXf5HKhp7MZ9bfPY3/+7P7/KRDaUyDOkSbkYkXxGfxka4CruxPuZ3bU3b2Kb3Yux/QI/xdgKNfEY81109Pf9DcZMDcDURX+kQZT3lc2NcBwnvpQJ/wjzVbaY+4bkf6n/8kAGXhZDIxK4Rfj45MXHEBVu5hQ147LazMp/Am8qV7WTcV6yBoZIAMjmYFRIfxS/tewBbzZrqHV2T8O3nHrz3hzzPAnEY5kJ9I2PmTIABkgA2RgsAyMDuFf8T26Fe1f3opJb33edrTVW1FeUoQ5SRT9wcLA4/jgIANkgAyMfgZGhfAT1NEPKn1MH5MBMkAGosMAhZ9j35z/QAbIABkgAyZigMJvImczWo5OtMx2ZDuSATIQzwxQ+Cn8jPTJABkgA2TARAxQ+E3k7HiOUGk7MywyQAbIQHQYoPBT+BnpkwEyQAbIgIkYoPCbyNmMlqMTLbMd2Y5kgAzEMwMUfgo/I30yQAbIABkwEQMUfhM5O54jVNrODIsMkAEyEB0GKPwUfkb6ZIAMkAEyYCIGKPwmcjaj5ehEy2xHtiMZIAPxzACFn8LPSJ8MkAEyQAZMxACF30TOjucIlbYzwyIDZIAMRIcBCj+Fn5E+GSADZIAMmIgBCr+JnM1oOTrRMtuR7UgGyEA8M0Dhp/Az0icDZIAMkAETMUDhN5Gz4zlCpe3MsMgAGSAD0WGAwk/hZ6RPBsgAGSADJmKAwm8iZzNajk60zHZkO5IBMhDPDFD4KfyM9MkAGSADZMBEDFD4TeTseI5QaTszLDJABshAdBig8FP4GemTATJABsiAiRig8JvI2YyWoxMtsx3ZjmSADMQzAxR+Cj8jfTJABsgAGTARAxR+Ezk7niNU2s4MiwyQATIQHQYo/BR+RvpkgAyQATJgIgYo/CZyNqPl6ETLbEe2IxkgA/HMQEyFX5InY/l3rfj11271U/PZLEaVBoHGpG3X1fZRrm5GopzMNjJoo3i+yWg7RYIMkIGRxECMhf8dfN3ogdLXhT7Fg+4rn2A8hU0n7BR+PhRG0kOBtpBHMjC6GYit8GcfwD3FA+XuT7jp9kB5dhr5icxoQ28qCv/ovslC/c3f9DcZIAP/nwzEVPgnbb2GXsUDx/H12FPrgaI8QkkehT/U4RR+PgRCmeBvMkEGyECsGIiZ8EtyCgrKnFCUTlSsm4rfH6tXx7Hv7MvRdXUP9+ISs1fBUm6F3dmObvcT2GvLsD//DUz2jZ17Lxbp6pz2WbVqT3dZIRJfL4ClohYNznb0dLXA/p9yWFa8FXa8PSFtEdYdvoBbD+vQ2uFCT1crmn6+gdKDq5E9PnxgM3Z2IUoqatHocqG7oxmPakqxa3E2RIAk5kEYjfFL43+L978oRdVDOzo8nfC4mvDIegElGxdhEodNdH4dLks8nw9bMkAGRjsDMRT+93DcIbL829gzMxmJBefhVjzwXt+G5CgKlpRehEstXZpwKm50OZvg7HJD6b6Lr/6uTZqLKPzlJSip64TifYanLQ54ej1aWX2NOL8qWycs8qwtuOJwa8f0uuBqscPR7lJ7NoR4u2r2IWesXvylGZtR2eYrW3HD3eaz021F8dFKQ+GXkhbjYK02OVIR5zgb0drR6bvWDtjPrsW0KLblaIed18cHOhkgA2RgEmIn/DmHYBPj+43HMF9OhpT2J1T3eaB0nMP7BsL4Is4QqwaWnLCrQtjbcBFb87Igi7oSszD/08u43+ZQ90USfm9zHapKN2DORO2GkFMXY8cVrUylrgQ5AcIqyVNRUPZULdNRuRd/yEhTAwPRu5G2cC+utYlAx4WrG2cEBQySnIplp5s1W2yl+DgnQzsvcTrytl+E9UmDui8w45fkScg9/D91UqT7/rcoyEnHq+La5FRk5hejSq3LiUuF04PqepF25Dl8GJIBMkAGzMNAzIQ/bWeVKlqucx8hQRWsPFhsQhjt+NsifUb8ItBJ8u9Q8liU6UTZ6mlBAijJGVhzWRPpSMKvOE5iybhge6Spu3BTBCnKTeyc9nyfJGdi7orNWL9xAxZmPN/utz3nL/9VBbzjzKoQW97FsWZRXitKP9CCBf85kpyOjy76svqA5XyS7FsRoTyEJXdyUHni3NRt1+H19aBMDAhO/OXy2zw3MX1NX5MBMjAUBmIi/JKchjWX26EoXbixLatftPJPaVnv/YPz+rcNxdjQYyV5Jc50CkG9g89f1wtx1l6rlmVHGOPv+2ErxoUIpyTn40SrKPchLHP15Yba4f/dP0nvyiY12PFvl+RClHtFeVbsnqEvb/qeW/qMf9wnqBQ9Jj0XsDJBf4709peoF/sffRnUK+Gvk998EJABMkAGyIARA7ER/oTlOKV2Rd/HF795LloTiirULLX3x12YHCK2RsYNtE2SV6OsWwjqLewyyMD9Qhwp4xeT+0LrkeRcbPmuEteun8b6Wc/tF8dJibPwxz2nUWVrhKtHG+v3v6DI/x3YZa+eIxehQoi0Uo0dU4PLE/v9dgaeJ6XsxI/inD4nWux1sId+mlrQI/Y3aUMpodfA37zhyQAZIANkwIiB2Aj/vBL8IkSp5VssDhB4Ketz3BHbu8pRENK9bmTcQNtiJfzh6pXkmVhx5hd1Ip/ozeh+Zg8W5LZ2XeYuypKGIfz+YCLcN4WfN3Y4XrmdbJABMmDEQEyEP3N3jSqAYcVKacaJd/WZr5GBkbaJrv6z4sVAw+jqN8r4w9Up5R7BYxG49Nbh7Npc3VsIjTJ3UdZwhF9xf49lAcFTONu4nTc4GSADZIAMDIaBqAu/mPm+obJDFf42WzVqaoI/95q0rNhmWajrYh+MwYHHSPIiHLUL4Tee3PfxpYEn9w1F+FO239Ay+pu7kWogxmJCowh2Arvshb3DGuP3VmBNlFZBBLYd/+YDggyQATJgTgaiL/yJK3HGJcTYBkuuPqtPWq+N8yvWvZhqIJ5DAVEso1t6skkV2177BWx6O0tb8uZbJvfAqc2WH+oYfzgbpnzqE3brXt36eRHwrDyvLR/UC/97+OaJaJMXmdXfgH8sDV4JIOybMH8Tig9ZUFy0CGOG2Y7hrpfbzflQoN/pdzIwuhmIvvAv/CsaRXd420ksMZqNnrEbVrG/518onKgPDIYKnJS1CVcDX4zjbEKb2w3Fa8Pxfw7iBT4Gk/vC2SD55y4oDajYuRgp/v87kDwXy4p/wIMWbdWCXvhD1/Gnq70dki9Auff0ia6nQKzjn3dEW8fvrb+ALQtm+pZFpmBK3lace9yprpr42bJg2D0n4a6X20f3zU//0r9kwJwMRF34sw/UqiLmLl9nmIlKsn89fytOL9OvT38REMfOXoMjl2+jod2FHrcDDfcuwfJhDtJ2aF3z0cr4xeS+lWfr+9/S53U74HC0qG/7Uzqt2F9yRSfg/uvRv7mvUQtQPPdw9Pi/Dc+Tkpbg0J02bZ/SBc+zRjic7erKCDGk4Lp7GAujEDz5beS3OR8C9Dv9TgbMxUBUhV+84GbrDbe2fn/7zLCZ6JITjaqY1R99J+wx0QDR3zXvLV+nqyfwXf1DqUsa8waW7itFdV0zOns64HbW48H1E9iyIAvjNoYXflGHCFDEu/qbXC70dDaj/vZ57M+f3f8/BUJ7CsQ50oRcrCg+g59sDXB1d8L9zI66u1fxzc7lmB7h/wIM5Zp4rLluevqb/iYD5mYgqsI/0mDK+8qmBhjOUx/qhH+k2Up7zH0j0v/0PxkgAy+LgVEp/GJ8fPKCA6hqFxPq2nF5bSaFP4E31cu6qVgPWSMDZGAkMzAqhF/K/xq2gDfbNbQ6+8fBO279GW+OGf4kwpHsRNrGhwwZIANkgAwMloFXkpIzkTnjrUF/BlvwyzxOWvE9uhXtX96KSW993na01VtRXlKEOUkU/ZfpC9bFhw8ZIANkYGQz8Ipw0GtjpyB9+puDEn86dGQ7lP6hf8gAGSADZCASA6rwiwNeG5NK4ec4OOdCkAEyQAbIwChnoF/4hfiPn5A+oPhHiiK4j1EmGSADZIAMkIGRzUCQ8AtnTcuYE1H86dCR7VD6h/4hA2SADJCBSAzohH98UuSsP1Jh3EfYyAAZIANkgAyMbAZ0wp+QmMKMf5SP7/CmHNk3Jf1D/5ABMhBLBnTCLyqLtLwvlsawbMJOBsgAGSADZCC2DFD4md1zBi8ZIANkgAyYiAEKv4mczSg6tlE025ftSwbIQDwwQOGn8DPSJwNkgAyQARMxQOE3kbPjIRKljcyYyAAZIAOxZYDCT+FnpE8GyAAZIAMmYoDCbyJnM4qObRTN9mX7kgEyEA8MUPgp/Iz0yQAZIANkwEQMUPhN5Ox4iERpIzMmMkAGyEBsGaDwU/gZ6ZMBMkAGyICJGKDwm8jZjKJjG0Wzfdm+ZIAMxAMDFH4KPyN9MkAGyAAZMBEDFH4TOTseIlHayIyJDJABMhBbBij8FH5G+mSADJABMmAiBij8JnI2o+jYRtFsX7YvGSAD8cAAhZ/Cz0ifDJABMkAGTMQAhd9Ezo6HSJQ2MmMiA2SADMSWAQo/hZ+RPhkgA2SADJiIAQq/iZzNKDq2UTTbl+1LBshAPDBA4afwM9InA2SADJABEzEQU+GX5MlY/l0rfv21W/3UfDaLcBnANWnbdbV9lKubkSgns40M2igeomjayGyPDJCBeGAgxsL/Dr5u9EDp60Kf4kH3lU8wnsKmE3YKPx8W8fCwoI3klAyMDgZiK/zZB3BP8UC5+xNuuj1Qnp1GfiIz2tCbh8I/Om6mUL/yN/1KBsjASGQgpsI/aes19CoeOI6vx55aDxTlEUryKPyhIFD4+XAIZYK/yQQZIAOxYiBmwi/JKSgoc0JROlGxbip+f6xeHce+sy9H19U93ItLzF4FS7kVdmc7ut1PYK8tw/78NzDZN3buvVikq3PaZ9WqPd1lhUh8vQCWilo0ONvR09UC+3/KYVnxVtjx9oS0RVh3+AJuPaxDa4cLPV2taPr5BkoPrkb2+PCBzdjZhSipqEWjy4XujmY8qinFrsXZEAGSmAdhNMYvjf8t3v+iFFUP7ejwdMLjasIj6wWUbFyESRw20fl1uCzxfD5syQAZGO0MxFD438Nxh8jyb2PPzGQkFpyHW/HAe30bkqMoWFJ6ES61dGnCqbjR5WyCs8sNpfsuvvq7NmkuovCXl6CkrhOK9xmetjjg6fVoZfU14vyqbJ2wyLO24IrDrR3T64KrxQ5Hu0vt2RDi7arZh5yxevGXZmxGZZuvbMUNd5vPTrcVxUcrDYVfSlqMg7Xa5EhFnONsRGtHp+9aO2A/uxbTotiWox12Xh8f6GSADJCBSYid8Occgk2M7zcew3w5GVLan1Dd54HScQ7vGwjjizhDrBpYcsKuCmFvw0VszcuCLOpKzML8Ty/jfptD3RdJ+L3Ndagq3YA5E7UbQk5djB1XtDKVuhLkBAirJE9FQdlTtUxH5V78ISNNDQxE70bawr241iYCHReubpwRFDBIciqWnW7WbLGV4uOcDO28xOnI234R1icN6r7AjF+SJyH38P/USZHu+9+iICcdr4prk1ORmV+MKrUuJy4VTg+q60XakefwYUgGyAAZMA8DMRP+tJ1Vqmi5zn2EBFWw8mCxCWG042+L9Bnxi0Anyb9DyWNRphNlq6cFCaAkZ2DNZU2kIwm/4jiJJeOC7ZGm7sJNEaQoN7Fz2vN9kpyJuSs2Y/3GDViY8Xy73/acv/xXFfCOM6tCbHkXx5pFea0o/UALFvznSHI6Prroy+oDlvNJsm9FhPIQltzJQeWJc1O3XYfX14MyMSA48ZfLb/PcxPQ1fU0GyMBQGIiJ8EtyGtZcboeidOHGtqx+0co/pWW99w/O6982FGNDj5XklTjTKQT1Dj5/XS/EWXutWpYdYYy/74etGBcinJKcjxOtotyHsMzVlxtqh/93/yS9K5vUYMe/XZILUe4V5Vmxe4a+vOl7bukz/nGfoFL0mPRcwMoE/TnS21+iXux/9GVQr4S/Tn7zQUAGyAAZIANGDMRG+BOW45TaFX0fX/zmuWhNKKpQs9TeH3dhcojYGhk30DZJXo2ybiGot7DLIAP3C3GkjF9M7gutR5JzseW7Sly7fhrrZz23XxwnJc7CH/ecRpWtEa4ebazf/4Ii/3dgl716jlyECiHSSjV2TA0uT+z32xl4npSyEz+Kc/qcaLHXwR76aWpBj9jfpA2lhF4Df/OGJwNkgAyQASMGYiP880rwixCllm+xOEDgpazPcUds7ypHQUj3upFxA22LlfCHq1eSZ2LFmV/UiXyiN6P7mT1YkNvadZm7KEsahvD7g4lw3xR+3tjheOV2skEGyIARAzER/szdNaoAhhUrpRkn3tVnvkYGRtomuvrPihcDDaOr3yjjD1enlHsEj0Xg0luHs2tzdW8hNMrcRVnDEX7F/T2WBQRP4Wzjdt7gZIAMkAEyMBgGdMKfkJiCzBlvhf0MVKiY+b6hskMV/jZbNWpqgj/3mrSs2GZZqOtiH6js0P2SvAhH7UL4jSf3fXxp4Ml9QxH+lO03tIz+5m6kGoixmNAogp3ALnth87DG+L0VWBOlVRCh7cfffEiQATJABszHgE74xyelhxV9ERAMBImUuBJnXEKMbbDk6rP6pPXaOL9i3YupBuI5UPmB+8UyuqUnm1Sx7bVfwKa3s7Qlb75lcg+c2mz5oY7xB9YR+PeUT33Cbt2rWz8vAp6V57Xlg3rhfw/fPBFt8iKz+hvwj6XBKwGETRPmb0LxIQuKixZhzDDbMfAa+bf5HgL0OX1OBszFgE74p2XMGZ7wL/wrGkV3eNtJLDGajZ6xG1axv+dfKJyoDwyGCqCUtQlXA1+M42xCm9sNxWvD8X8O4gU+BpP7wtkg+ecuKA2o2LkYKf7/O5A8F8uKf8CDFm3Vgl74Q9fxp6sBlOQLUO49faLrKRDr+Ocd0dbxe+svYMuCmb5lkSmYkrcV5x53qqsmfrYsGDAYC3c93G6um53+pr/JABkQDAQJ//gJkbP9wWT82QdqVRFzl68zzEQl2b+evxWnl+nXp78ImGNnr8GRy7fR0O5Cj9uBhnuXYPkwB2k7tK75aGX8YnLfyrP1/W/p87odcDha1Lf9KZ1W7C+5ohNw//Xo39zXqAUonns4evzfhudJSUtw6E6btk/pgudZIxzOdnVlhBhScN09jIVRCJ78NvKbDwUyQAbIwOhnoF/4XxuTGjHT94/7R4JCvOBm6w23tn5/+8ywmeiSE42qmNUffSfsMZHqGew+f9e8t3ydrp7Ad/UPtjxxnDTmDSzdV4rqumZ09nTA7azHg+snsGVBFsZtDC/84lwRoIh39Te5XOjpbEb97fPYnz+7/38KhPYUqPVNyMWK4jP4ydYAV3cn3M/sqLt7Fd/sXI7pEf4vwFCuiceO/hudPqaPyQAZ8DOgCv9rY6cgffqbwxZ+f6Ej5TvvK5saYDhPfagT/pFiI+3gzUgGyAAZIAMvk4FXkpIzByX4g8n4X6bhkeoS4+OTFxxAVbuYUNeOy2szKfwJvLEiMcN95IMMkAGzMPCKX9AH+z0SG0bK/xq2gDfbNbQ6+8fBO279GW+OGf4kwpF43bSJDyoyQAbIABkYKgOjQ/hXfI9uRfuXt2LSW5+3HW31VpSXFGFOEkV/qFDweD5IyAAZIAOjl4FRIfwEdPQCSt/St2SADJCB6DJA4efYN+c/kAEyQAbIgIkYoPCbyNmMmqMbNbM92Z5kgAzEIwMUfgo/I30yQAbIABkwEQMUfhM5Ox4jU9rMjIoMkAEyEF0GKPwUfkb6ZIAMkAEyYCIGKPwmcjaj5uhGzWxPticZIAPxyACFn8LPSJ8MkAEyQAZMxACF30TOjsfIlDYzoyIDZIAMRJcBCq0cSBwAAABZSURBVD+Fn5E+GSADZIAMmIgBCr+JnM2oObpRM9uT7UkGyEA8MkDhp/Az0icDZIAMkAETMUDhN5Gz4zEypc3MqMgAGSAD0WWAwk/hZ6RPBsgAGSADJmLg/wDJQth99VObQAAAAABJRU5ErkJggg=="},45458:(e,n,c)=>{c.d(n,{A:()=>s});const s=c.p+"assets/images/b26ca49fcebcf1a72f3d5dc414b3dd4c-c4ee450faedd26a69e6dccaa4f5d25a4.png"},28453:(e,n,c)=>{c.d(n,{R:()=>d,x:()=>r});var s=c(96540);const A={},i=s.createContext(A);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);