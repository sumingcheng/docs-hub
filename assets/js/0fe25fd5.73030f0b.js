"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["34424"],{33888:function(e,n,s){s.r(n),s.d(n,{assets:function(){return a},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return r},metadata:function(){return t},toc:function(){return o}});var t=s(394),i=s(85893),l=s(50065);let r={slug:"microk8s-\u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5",title:"Microk8s \u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-09-10T00:00:00.000Z")},c="Microk8s \u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5",a={authorsImageUrls:[void 0]},o=[{value:"\u90E8\u7F72\u7ED3\u6784",id:"\u90E8\u7F72\u7ED3\u6784",level:2},{value:"\u5B89\u88C5\u63D2\u4EF6",id:"\u5B89\u88C5\u63D2\u4EF6",level:3},{value:"metallb",id:"metallb",level:3},{value:"ingress",id:"ingress",level:3},{value:"\u6D4B\u8BD5",id:"\u6D4B\u8BD5",level:3},{value:"\u8D1F\u8F7D\u5747\u8861\u6548\u679C",id:"\u8D1F\u8F7D\u5747\u8861\u6548\u679C",level:2},{value:"\u914D\u7F6E\u6587\u4EF6",id:"\u914D\u7F6E\u6587\u4EF6",level:2},{value:"deployment.yaml",id:"deploymentyaml",level:2},{value:"service.yaml",id:"serviceyaml",level:2},{value:"ingress.yaml",id:"ingressyaml",level:2},{value:"ipaddresspool.yaml",id:"ipaddresspoolyaml",level:2}];function d(e){let n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u90E8\u7F72\u7ED3\u6784",children:"\u90E8\u7F72\u7ED3\u6784"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"72b99c9f5f751e012cf7d0ab52ffc848",src:s(9731).Z+"",width:"1440",height:"500"}),"## \u5B89\u88C5 microk8s",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/714822990",children:"\u7D20\u660E\u8BDA\uFF1AUbuntu \u5B89\u88C5 MicroK8s"}),"## \u914D\u7F6E microk8s"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5B89\u88C5\u63D2\u4EF6",children:"\u5B89\u88C5\u63D2\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:"MetalLB: \u8FD9\u662F\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u5668\u5B9E\u73B0,\u53EF\u4EE5\u4E3A Kubernetes \u670D\u52A1\u63D0\u4F9B\u5916\u90E8 IP \u5730\u5740\u3002\u5728\u88F8\u673A Kubernetes \u96C6\u7FA4(\u5982\u5355\u8282\u70B9 Microk8s \u96C6\u7FA4)\u4E2D,MetalLB \u901A\u5E38\u7528\u6765\u66FF\u4EE3\u4E91\u5E73\u53F0\u4E0A\u7684\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Ingress: Ingress \u662F\u4E00\u79CD Kubernetes \u8D44\u6E90,\u7528\u4E8E\u7BA1\u7406\u4ECE\u96C6\u7FA4\u5916\u90E8\u5230\u96C6\u7FA4\u5185\u670D\u52A1\u7684\u8BBF\u95EE\u3002\u5B83\u53EF\u4EE5\u63D0\u4F9B SSL \u7EC8\u6B62\u3001\u57FA\u4E8E\u540D\u79F0\u7684\u865A\u62DF\u4E3B\u673A\u7B49\u529F\u80FD\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"metallb",children:"metallb"}),"\n",(0,i.jsxs)(n.p,{children:["\u5B89\u88C5\u65F6\u5019\u8F93\u5165\u4F60\u7684\u60F3\u8981\u5730\u5740\u6BB5",(0,i.jsx)(n.code,{children:"192.168.1.240-192.168.1.250"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"microk8s enable metallb\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u67E5\u770B\u662F\u5426\u6B63\u5E38"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"microk8s kubectl get pods -n metallb-system\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ingress",children:"ingress"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"microk8s enable ingress\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6D4B\u8BD5",children:"\u6D4B\u8BD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"watch -n 0.5 curl http://192.168.1.240:9999\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8D1F\u8F7D\u5747\u8861\u6548\u679C",children:"\u8D1F\u8F7D\u5747\u8861\u6548\u679C"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"43cf27748d6ed22b09fa13243e449a3e",src:s(56785).Z+"",width:"1440",height:"782"})}),"\n",(0,i.jsx)(n.p,{children:"service"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ee62e0086785c3531c31f0d1fd6b1c78",src:s(12476).Z+"",width:"1440",height:"158"})}),"\n",(0,i.jsx)(n.p,{children:"ingress"}),"\n",(0,i.jsx)(n.h2,{id:"\u914D\u7F6E\u6587\u4EF6",children:"\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,i.jsx)(n.h2,{id:"deploymentyaml",children:"deployment.yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: go-sec-kill\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: go-sec-kill\n  template:\n    metadata:\n      labels:\n        app: go-sec-kill\n    spec:\n      containers:\n        - name: go-sec-kill\n          image: smcroot/go-sec-kill\n          ports:\n            - containerPort: 8080\n          imagePullPolicy: IfNotPresent\n          resources:\n            requests:\n              memory: "1Gi" # \u8BF7\u6C421GB\u5185\u5B58\n              cpu: "500m" # \u8BF7\u6C420.5 CPU\n            limits:\n              memory: "2Gi" # \u9650\u5236\u6700\u591A\u4F7F\u75282GB\u5185\u5B58\n              cpu: "1" # \u9650\u5236\u6700\u591A\u4F7F\u75281\u4E2ACPU\n\u200B\n'})}),"\n",(0,i.jsx)(n.h2,{id:"serviceyaml",children:"service.yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: go-sec-kill\nspec:\n  type: LoadBalancer\n  selector:\n    app: go-sec-kill\n  ports:\n    - protocol: TCP\n      name: http\n      port: 9999\n      targetPort: 8080\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ingressyaml",children:"ingress.yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: go-sec-kill-ingress\nspec:\n  rules:\n    - http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: go-sec-kill\n                port:\n                  number: 9999\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ipaddresspoolyaml",children:"ipaddresspool.yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: my-ip-pool\n  namespace: metallb-system\nspec:\n  addresses:\n    - 192.168.1.240-192.168.1.250\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},56785:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/43cf27748d6ed22b09fa13243e449a3e-1c541a7e216b8083733ec8f9b06a8b11.jpg"},9731:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/72b99c9f5f751e012cf7d0ab52ffc848-2ae4e6a25f4258e200af09fa46451776.jpg"},12476:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/ee62e0086785c3531c31f0d1fd6b1c78-9b55dedc32ef771aff667f0a11d3c90b.jpg"},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(67294);let i={},l=t.createContext(i);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}},394:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/microk8s-\u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-10-Microk8s_\u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-10-Microk8s_\u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5.md","title":"Microk8s \u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5","description":"\u90E8\u7F72\u7ED3\u6784","date":"2024-09-10T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.1433333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"microk8s-\u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5","title":"Microk8s \u5355\u673A\u96C6\u7FA4\u4E0A\u7684\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u5B9E\u8DF5","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-09-10T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u8BBE\u7F6E SSH \u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1","permalink":"/docs-hub/blog/\u8BBE\u7F6E-ssh-\u5BC6\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1"},"nextItem":{"title":"Snap \u5E38\u7528\u547D\u4EE4\u4EE3\u7406\u914D\u7F6E","permalink":"/docs-hub/blog/snap-\u5E38\u7528\u547D\u4EE4\u4EE3\u7406\u914D\u7F6E"}}')}}]);