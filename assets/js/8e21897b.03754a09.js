"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["90232"],{26445:function(e,n,i){i.r(n),i.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return r},toc:function(){return d}});var r=i(80336),t=i(85893),l=i(50065);let s={slug:"linux-\u5B89\u88C5-minikube-\u8BE6\u7EC6\u64CD\u4F5C",title:"Linux \u5B89\u88C5 Minikube \u8BE6\u7EC6\u64CD\u4F5C",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-08-13T00:00:00.000Z")},c="Linux \u5B89\u88C5 Minikube \u8BE6\u7EC6\u64CD\u4F5C",u={authorsImageUrls:[void 0]},d=[{value:"\u5B89\u88C5\u4F9D\u8D56",id:"\u5B89\u88C5\u4F9D\u8D56",level:2},{value:"\u6DFB\u52A0\u7528\u6237\u7EC4",id:"\u6DFB\u52A0\u7528\u6237\u7EC4",level:2},{value:"\u5B89\u88C5 Minikube",id:"\u5B89\u88C5-minikube",level:2},{value:"\u542F\u52A8 Minikube",id:"\u542F\u52A8-minikube",level:2},{value:"\u9A8C\u8BC1 Minikube \u662F\u5426\u6210\u529F\u542F\u52A8",id:"\u9A8C\u8BC1-minikube-\u662F\u5426\u6210\u529F\u542F\u52A8",level:2},{value:"\u6B63\u5E38\u8F93\u51FA\u793A\u4F8B",id:"\u6B63\u5E38\u8F93\u51FA\u793A\u4F8B",level:2},{value:"\u624B\u52A8\u8C03\u6574 Minikube \u8D44\u6E90",id:"\u624B\u52A8\u8C03\u6574-minikube-\u8D44\u6E90",level:2},{value:"\u8C03\u6574\u914D\u7F6E",id:"\u8C03\u6574\u914D\u7F6E",level:2},{value:"\u91CD\u65B0\u542F\u52A8 Minikube",id:"\u91CD\u65B0\u542F\u52A8-minikube",level:2},{value:"\u786E\u8BA4 kubectl \u914D\u7F6E",id:"\u786E\u8BA4-kubectl-\u914D\u7F6E",level:2},{value:"\u4FEE\u6B63 kubectl \u914D\u7F6E",id:"\u4FEE\u6B63-kubectl-\u914D\u7F6E",level:2},{value:"\u67E5\u770B\u96C6\u7FA4\u4FE1\u606F",id:"\u67E5\u770B\u96C6\u7FA4\u4FE1\u606F",level:2},{value:"\u5217\u51FA\u6240\u6709\u8282\u70B9",id:"\u5217\u51FA\u6240\u6709\u8282\u70B9",level:2},{value:"\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684 Pods",id:"\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684-pods",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u5B89\u88C5\u4F9D\u8D56",children:"\u5B89\u88C5\u4F9D\u8D56"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u66F4\u65B0\u7CFB\u7EDF\u4F9D\u8D56"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt update && sudo apt upgrade\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5B89\u88C5\u5FC5\u8981\u4F9D\u8D56"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt install -y curl wget apt-transport-https\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6DFB\u52A0\u7528\u6237\u7EC4",children:"\u6DFB\u52A0\u7528\u6237\u7EC4"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6DFB\u52A0\u5F53\u524D\u7528\u6237\u5230 docker \u7EC4"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo usermod -aG docker $USER\nnewgrp docker\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u91CC\u7684 ",(0,t.jsx)(n.code,{children:"sudo usermod -aG docker $USER"})," \u5C06\u5F53\u524D\u7528\u6237\u6DFB\u52A0\u5230 docker \u7EC4\u3002\u4E3A\u4E86\u4F7F\u8FD9\u4E00\u53D8\u66F4\u751F\u6548\uFF0C\u901A\u5E38\u9700\u8981\u6CE8\u9500\u518D\u91CD\u65B0\u767B\u5F55\uFF0C\u6216\u8005\u5F00\u542F\u4E00\u4E2A\u65B0\u7684\u7EC8\u7AEF\u4F1A\u8BDD\u3002\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"newgrp docker"})," \u547D\u4EE4\u53EF\u4EE5\u5728\u5F53\u524D\u4F1A\u8BDD\u4E2D\u7ACB\u5373\u5E94\u7528\u66F4\u6539\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5B89\u88C5-minikube",children:"\u5B89\u88C5 Minikube"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4E0B\u8F7D Minikube"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -LO https//storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64\nsudo install minikube-linux-amd64 /usr/local/bin/minikube\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u9A8C\u8BC1\u5B89\u88C5"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"minikube version\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u542F\u52A8-minikube",children:"\u542F\u52A8 Minikube"}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528 Docker \u4F5C\u4E3A\u9A71\u52A8\uFF0CMinikube \u4F1A\u5728\u4E00\u4E2A Docker \u5BB9\u5668\u5185\u90E8\u8FD0\u884C Kubernetes \u96C6\u7FA4\uFF0C\u800C\u4E0D\u662F\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u865A\u62DF\u673A\u3002\u8FD9\u79CD\u65B9\u6CD5\u66F4\u8F7B\u91CF\u7EA7\uFF0C\u56E0\u4E3A\u5B83\u5229\u7528\u4E86\u73B0\u6709\u7684\u64CD\u4F5C\u7CFB\u7EDF\u73AF\u5883\u548C Docker \u7684\u5BB9\u5668\u6280\u672F\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"minikube start --driver=docker\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9A8C\u8BC1-minikube-\u662F\u5426\u6210\u529F\u542F\u52A8",children:"\u9A8C\u8BC1 Minikube \u662F\u5426\u6210\u529F\u542F\u52A8"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"minikube status\nkubectl cluster-info\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6B63\u5E38\u8F93\u51FA\u793A\u4F8B",children:"\u6B63\u5E38\u8F93\u51FA\u793A\u4F8B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"minikube\ntype Control Plane\nhost Running\nkubelet Running\napiserver Running\nkubeconfig Configured\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u624B\u52A8\u8C03\u6574-minikube-\u8D44\u6E90",children:"\u624B\u52A8\u8C03\u6574 Minikube \u8D44\u6E90"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u505C\u6B62 Minikube"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"minikube stop\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8C03\u6574\u914D\u7F6E",children:"\u8C03\u6574\u914D\u7F6E"}),"\n",(0,t.jsx)(n.p,{children:"\u6C38\u4E45\u66F4\u6539\u914D\u7F6E"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"minikube start --cpus 8 --memory 16384\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u91CD\u65B0\u542F\u52A8-minikube",children:"\u91CD\u65B0\u542F\u52A8 Minikube"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"minikube start\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u786E\u8BA4-kubectl-\u914D\u7F6E",children:"\u786E\u8BA4 kubectl \u914D\u7F6E"}),"\n",(0,t.jsx)(n.p,{children:"\u68C0\u67E5 kubectl \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u786E\u4FDD\u5176\u6307\u5411\u6B63\u786E\u7684 Kubernetes API \u5730\u5740"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl config view\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B Minikube IP \u5730\u5740\uFF0C\u786E\u8BA4\u670D\u52A1\u5668\u914D\u7F6E"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"minikube ip\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4FEE\u6B63-kubectl-\u914D\u7F6E",children:"\u4FEE\u6B63 kubectl \u914D\u7F6E"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u96C6\u7FA4\u5730\u5740\u4E0D\u6B63\u786E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6765\u8BBE\u7F6E\u6B63\u786E\u7684\u96C6\u7FA4\u4FE1\u606F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl config set-cluster minikube --server=https//192.168.49.28443 --certificate-authority=/home/gptadmin/.minikube/ca.crt\nkubectl config set-context minikube --cluster=minikube --user=minikube\nkubectl config use-context minikube\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u67E5\u770B\u96C6\u7FA4\u4FE1\u606F",children:"\u67E5\u770B\u96C6\u7FA4\u4FE1\u606F"}),"\n",(0,t.jsx)(n.p,{children:"\u83B7\u53D6 Kubernetes \u63A7\u5236\u5E73\u9762\u7684\u72B6\u6001\u548C\u5730\u5740"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl cluster-info\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5217\u51FA\u6240\u6709\u8282\u70B9",children:"\u5217\u51FA\u6240\u6709\u8282\u70B9"}),"\n",(0,t.jsx)(n.p,{children:"\u663E\u793A Minikube \u96C6\u7FA4\u4E2D\u7684\u6240\u6709\u8282\u70B9\u4FE1\u606F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl get nodes\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684-pods",children:"\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684 Pods"}),"\n",(0,t.jsx)(n.p,{children:"\u5217\u51FA\u96C6\u7FA4\u4E2D\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684 Pods"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl get pods --all-namespaces\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var r=i(67294);let t={},l=r.createContext(t);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}},80336:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/linux-\u5B89\u88C5-minikube-\u8BE6\u7EC6\u64CD\u4F5C","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-08-13-Linux_\u5B89\u88C5_Minikube_\u8BE6\u7EC6\u64CD\u4F5C.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-08-13-Linux_\u5B89\u88C5_Minikube_\u8BE6\u7EC6\u64CD\u4F5C.md","title":"Linux \u5B89\u88C5 Minikube \u8BE6\u7EC6\u64CD\u4F5C","description":"\u5B89\u88C5\u4F9D\u8D56","date":"2024-08-13T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.6033333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"linux-\u5B89\u88C5-minikube-\u8BE6\u7EC6\u64CD\u4F5C","title":"Linux \u5B89\u88C5 Minikube \u8BE6\u7EC6\u64CD\u4F5C","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-08-13T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Go \u9879\u76EE\u6253\u5305\u4E0D\u540C\u5E73\u53F0\u548C\u7248\u672C","permalink":"/docs-hub/blog/go-\u9879\u76EE\u6253\u5305\u4E0D\u540C\u5E73\u53F0\u548C\u7248\u672C"},"nextItem":{"title":"Linux \u5B89\u88C5 kubectl","permalink":"/docs-hub/blog/linux-\u5B89\u88C5-kubectl"}}')}}]);