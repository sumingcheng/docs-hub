"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["78"],{1754:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return i},default:function(){return a},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var s=t(11080),r=t(85893),u=t(50065);let c={slug:"\u4FEE\u6539-ubuntu-2204-\u4E2D\u7684-kubernetes-\u5305\u6E90",title:"\u4FEE\u6539 Ubuntu 2204 \u4E2D\u7684 Kubernetes \u5305\u6E90",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-09-11T00:00:00.000Z")},i="\u4FEE\u6539 Ubuntu 22.04 \u4E2D\u7684 Kubernetes \u5305\u6E90",o={authorsImageUrls:[void 0]},l=[{value:"\u5907\u4EFD\u73B0\u6709\u7684 Kubernetes \u6E90\u6587\u4EF6",id:"\u5907\u4EFD\u73B0\u6709\u7684-kubernetes-\u6E90\u6587\u4EF6",level:3},{value:"\u7F16\u8F91 Kubernetes\u6E90\u6587\u4EF6",id:"\u7F16\u8F91-kubernetes\u6E90\u6587\u4EF6",level:3},{value:"\u66FF\u6362\u4E3A\u65B0\u7684\u6E90",id:"\u66FF\u6362\u4E3A\u65B0\u7684\u6E90",level:3},{value:"\u6DFB\u52A0\u955C\u50CF\u6E90\u7684 GPG \u5BC6\u94A5",id:"\u6DFB\u52A0\u955C\u50CF\u6E90\u7684-gpg-\u5BC6\u94A5",level:3},{value:"\u66F4\u65B0\u8F6F\u4EF6\u6E90",id:"\u66F4\u65B0\u8F6F\u4EF6\u6E90",level:3},{value:"\u6D4B\u8BD5\u65B0\u6E90",id:"\u6D4B\u8BD5\u65B0\u6E90",level:3}];function d(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,u.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u5907\u4EFD\u73B0\u6709\u7684-kubernetes-\u6E90\u6587\u4EF6",children:"\u5907\u4EFD\u73B0\u6709\u7684 Kubernetes \u6E90\u6587\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4FEE\u6539\u4E4B\u524D\uFF0C\u9996\u5148\u5907\u4EFD\u4F60\u7684\u73B0\u6709 Kubernetes \u6E90\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u5FC5\u8981\u65F6\u53EF\u4EE5\u6062\u590D\u539F\u59CB\u8BBE\u7F6E\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo cp /etc/apt/sources.list.d/kubernetes.list /etc/apt/sources.list.d/kubernetes.list.backup\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7F16\u8F91-kubernetes\u6E90\u6587\u4EF6",children:"\u7F16\u8F91 Kubernetes\u6E90\u6587\u4EF6"}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u7F16\u8F91 Kubernetes \u6E90\u6587\u4EF6\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"nano"})," \u6216\u4F60\u559C\u6B22\u7684\u4EFB\u4F55\u7F16\u8F91\u5668\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo nano /etc/apt/sources.list.d/kubernetes.list\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u66FF\u6362\u4E3A\u65B0\u7684\u6E90",children:"\u66FF\u6362\u4E3A\u65B0\u7684\u6E90"}),"\n",(0,r.jsx)(n.p,{children:"\u9009\u62E9\u4F7F\u7528\u963F\u91CC\u4E91\u7684 Kubernetes \u955C\u50CF\uFF0C\u4F60\u5E94\u8BE5\u5C06\u6587\u4EF6\u5185\u5BB9\u66F4\u6539\u4E3A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6E05\u534E\u5927\u5B66\u955C\u50CF\u6E90\uFF0C\u5C06\u5185\u5BB9\u66F4\u6539\u4E3A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"deb https://mirrors.tuna.tsinghua.edu.cn/kubernetes/apt/ kubernetes-xenial main\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4FDD\u5B58\u6587\u4EF6\u5E76\u9000\u51FA\u7F16\u8F91\u5668\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6DFB\u52A0\u955C\u50CF\u6E90\u7684-gpg-\u5BC6\u94A5",children:"\u6DFB\u52A0\u955C\u50CF\u6E90\u7684 GPG \u5BC6\u94A5"}),"\n",(0,r.jsx)(n.p,{children:"\u4E3A\u4E86\u786E\u4FDD apt \u53EF\u4EE5\u4FE1\u4EFB\u65B0\u6E90\u7684\u8F6F\u4EF6\u5305\uFF0C\u4F60\u9700\u8981\u6DFB\u52A0\u955C\u50CF\u6E90\u7684 GPG \u5BC6\u94A5\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6E05\u534E\u5927\u5B66\u6E90\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl -s https://mirrors.tuna.tsinghua.edu.cn/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u66F4\u65B0\u8F6F\u4EF6\u6E90",children:"\u66F4\u65B0\u8F6F\u4EF6\u6E90"}),"\n",(0,r.jsx)(n.p,{children:"\u66F4\u65B0 apt \u7684\u8F6F\u4EF6\u5305\u5217\u8868\u4EE5\u53CD\u6620\u6E90\u7684\u53D8\u66F4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo apt update\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6D4B\u8BD5\u65B0\u6E90",children:"\u6D4B\u8BD5\u65B0\u6E90"}),"\n",(0,r.jsx)(n.p,{children:"\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u5B89\u88C5\u6216\u66F4\u65B0\u4E00\u4E2A Kubernetes \u5305\u6765\u786E\u8BA4\u65B0\u7684\u6E90\u662F\u5426\u5DE5\u4F5C\u6B63\u5E38"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo apt install kubectl\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6216\u8005\u5982\u679C\u5DF2\u7ECF\u5B89\u88C5\u4E86\uFF0C\u5C1D\u8BD5\u66F4\u65B0\u770B\u662F\u5426\u6709\u65B0\u7248\u672C"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo apt update && sudo apt upgrade\n"})})]})}function a(e={}){let{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(67294);let r={},u=s.createContext(r);function c(e){let n=s.useContext(u);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(u.Provider,{value:n},e.children)}},11080:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/\u4FEE\u6539-ubuntu-2204-\u4E2D\u7684-kubernetes-\u5305\u6E90","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-11-\u4FEE\u6539_Ubuntu_2204_\u4E2D\u7684_Kubernetes_\u5305\u6E90.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-11-\u4FEE\u6539_Ubuntu_2204_\u4E2D\u7684_Kubernetes_\u5305\u6E90.md","title":"\u4FEE\u6539 Ubuntu 2204 \u4E2D\u7684 Kubernetes \u5305\u6E90","description":"\u5907\u4EFD\u73B0\u6709\u7684 Kubernetes \u6E90\u6587\u4EF6","date":"2024-09-11T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":0.9866666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"\u4FEE\u6539-ubuntu-2204-\u4E2D\u7684-kubernetes-\u5305\u6E90","title":"\u4FEE\u6539 Ubuntu 2204 \u4E2D\u7684 Kubernetes \u5305\u6E90","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-09-11T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Ubuntu \u4E0A\u5B89\u88C5 Docker \u548C Docker Compose","permalink":"/docs-hub/blog/ubuntu-\u4E0A\u5B89\u88C5-docker-\u548C-docker-compose"},"nextItem":{"title":"\u8BBE\u7F6E SSH \u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1","permalink":"/docs-hub/blog/\u8BBE\u7F6E-ssh-\u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1"}}')}}]);