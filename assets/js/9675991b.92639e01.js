"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["69119"],{79831:function(e,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return t},metadata:function(){return i},toc:function(){return a}});var i=s(36748),l=s(85893),r=s(50065);let t={slug:"docker-danglingunused--images",title:"Docker DanglingUnused  Images",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-09-12T00:00:00.000Z")},d="Docker Dangling/Unused  Images",c={authorsImageUrls:[void 0]},a=[{value:"Dangling Images\uFF08\u60AC\u7A7A\u955C\u50CF\uFF09",id:"dangling-images\u60AC\u7A7A\u955C\u50CF",level:2},{value:"\u4EA7\u751F\u539F\u56E0",id:"\u4EA7\u751F\u539F\u56E0",level:3},{value:"Unused Images\uFF08\u672A\u4F7F\u7528\u955C\u50CF\uFF09",id:"unused-images\u672A\u4F7F\u7528\u955C\u50CF",level:2},{value:"\u4EA7\u751F\u539F\u56E0",id:"\u4EA7\u751F\u539F\u56E0-1",level:3},{value:"\u6E05\u7406 Dangling Images",id:"\u6E05\u7406-dangling-images",level:2},{value:"\u6E05\u7406Unused Images",id:"\u6E05\u7406unused-images",level:3},{value:"\u6E05\u7406\u65F6\u7684\u6CE8\u610F\u4E8B\u9879",id:"\u6E05\u7406\u65F6\u7684\u6CE8\u610F\u4E8B\u9879",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"dangling-images\u60AC\u7A7A\u955C\u50CF",children:"Dangling Images\uFF08\u60AC\u7A7A\u955C\u50CF\uFF09"}),"\n",(0,l.jsx)(n.p,{children:"\u5B9A\u4E49\u8FD9\u4E9B\u955C\u50CF\u5728\u672C\u5730\u5B58\u5728\uFF0C\u4F46\u662F\u5728Docker\u4ED3\u5E93\u4E2D\u5DF2\u7ECF\u4E0D\u5B58\u5728\u5BF9\u5E94\u7684\u6807\u7B7E\u4E86\u3002\u901A\u5E38\u662F\u56E0\u4E3A\u955C\u50CF\u7684\u6807\u7B7E\u88AB\u66F4\u65B0\u6216\u5220\u9664\u5BFC\u81F4\u7684\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7279\u70B9\u5B83\u4EEC\u6CA1\u6709\u6807\u7B7E\uFF0C\u53EA\u6709\u955C\u50CFID\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u4EA7\u751F\u539F\u56E0",children:"\u4EA7\u751F\u539F\u56E0"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6784\u5EFA\u4E00\u4E2A\u65B0\u7248\u672C\u7684\u955C\u50CF\uFF0C\u81EA\u52A8\u53D6\u6D88\u65E7\u7248\u672C\u955C\u50CF\u7684\u6807\u7B7E\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u624B\u52A8\u5220\u9664\u4E00\u4E2A\u955C\u50CF\u7684\u6807\u7B7E\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u4F7F\u7528",(0,l.jsx)(n.code,{children:"docker pull"}),"\u62C9\u53D6\u4E00\u4E2A\u5DF2\u6709\u6807\u7B7E\u7684\u65B0\u7248\u672C\u955C\u50CF\uFF0C\u65E7\u7248\u672C\u955C\u50CF\u6807\u7B7E\u88AB\u53D6\u6D88\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8BC6\u522B\u65B9\u6CD5\u4F7F\u7528\u547D\u4EE4",(0,l.jsx)(n.code,{children:"docker images -f dangling=true"}),"\u5217\u51FA\u6240\u6709\u60AC\u7A7A\u955C\u50CF\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"unused-images\u672A\u4F7F\u7528\u955C\u50CF",children:"Unused Images\uFF08\u672A\u4F7F\u7528\u955C\u50CF\uFF09"}),"\n",(0,l.jsx)(n.p,{children:"\u5B9A\u4E49\u8FD9\u4E9B\u955C\u50CF\u4E0D\u662F\u4EFB\u4F55\u5BB9\u5668\u7684\u57FA\u7840\u955C\u50CF\uFF0C\u4E5F\u4E0D\u662F\u4EFB\u4F55\u955C\u50CF\u7684\u7236\u955C\u50CF\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7279\u70B9\u5B83\u4EEC\u53EF\u80FD\u6709\u6807\u7B7E\uFF0C\u4F46\u662F\u5DF2\u7ECF\u4E0D\u88AB\u9700\u8981\u4E86\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u4EA7\u751F\u539F\u56E0-1",children:"\u4EA7\u751F\u539F\u56E0"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u67D0\u4E2A\u5BB9\u5668\u6216\u8005\u955C\u50CF\u88AB\u5220\u9664\uFF0C\u4F9D\u8D56\u4E8E\u5B83\u7684\u955C\u50CF\u5C42\u4E5F\u968F\u4E4B\u53D8\u4E3A\u672A\u4F7F\u7528\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u624B\u52A8\u5220\u9664\u4E00\u4E2A\u5BB9\u5668\u6216\u955C\u50CF\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8BC6\u522B\u65B9\u6CD5\u4F7F\u7528\u547D\u4EE4",(0,l.jsx)(n.code,{children:"docker images -f dangling=false"}),"\u5E76\u624B\u52A8\u8BC6\u522B\u90A3\u4E9B\u672A\u88AB\u4F7F\u7528\u7684\u955C\u50CF\u3002Docker\u76EE\u524D\u6CA1\u6709\u63D0\u4F9B\u81EA\u52A8\u8BC6\u522BUnused Images\u7684\u547D\u4EE4\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6E05\u7406-dangling-images",children:"\u6E05\u7406 Dangling Images"}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528\u547D\u4EE4",(0,l.jsx)(n.code,{children:"docker rmi $(docker images -f dangling=true -q)"}),"\u5220\u9664\u6240\u6709\u60AC\u7A7A\u955C\u50CF\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528Docker 1.13\u7248\u672C\u63D0\u4F9B\u7684",(0,l.jsx)(n.code,{children:"docker system prune"}),"\u547D\u4EE4\u81EA\u52A8\u6E05\u7406\u60AC\u7A7A\u955C\u50CF\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6E05\u7406unused-images",children:"\u6E05\u7406Unused Images"}),"\n",(0,l.jsxs)(n.p,{children:["\u624B\u52A8\u8BC6\u522B\u5E76\u5220\u9664\u90A3\u4E9B\u5DF2\u77E5\u4E0D\u518D\u9700\u8981\u7684\u955C\u50CF\uFF0C\u4F7F\u7528",(0,l.jsx)(n.code,{children:"docker rmi <image_id>"}),"\u547D\u4EE4\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8C28\u614E\u4F7F\u7528",(0,l.jsx)(n.code,{children:"docker system prune -a"}),"\u547D\u4EE4\u81EA\u52A8\u5220\u9664\u6240\u6709\u672A\u4F7F\u7528\u955C\u50CF\uFF0C\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6E05\u7406\u65F6\u7684\u6CE8\u610F\u4E8B\u9879",children:"\u6E05\u7406\u65F6\u7684\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(n.p,{children:"\u6E05\u7406\u524D\u786E\u4FDD\u4E0D\u9700\u8981\u8FD9\u4E9B\u955C\u50CF\uFF0C\u6E05\u7406\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679C\u4E00\u4E2A\u60AC\u7A7A\u955C\u50CF\u540C\u65F6\u4E5F\u662F\u4E00\u4E2A\u672A\u4F7F\u7528\u955C\u50CF\uFF0C\u4F7F\u7528",(0,l.jsx)(n.code,{children:"docker image prune"}),"\u6216\u8005",(0,l.jsx)(n.code,{children:"docker system prune"}),"\u547D\u4EE4\u5C31\u8DB3\u591F\u4E86\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5B9A\u671F\u6E05\u7406\u4E0D\u9700\u8981\u7684\u955C\u50CF\uFF0C\u4EE5\u8282\u7701\u78C1\u76D8\u7A7A\u95F4\u3002\u4F46\u4E0D\u8981\u8FC7\u4E8E\u9891\u7E41\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var i=s(67294);let l={},r=i.createContext(l);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}},36748:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/docker-danglingunused--images","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-12-Docker_DanglingUnused__Images.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-12-Docker_DanglingUnused__Images.md","title":"Docker DanglingUnused  Images","description":"Dangling Images\uFF08\u60AC\u7A7A\u955C\u50CF\uFF09","date":"2024-09-12T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":1.6,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"docker-danglingunused--images","title":"Docker DanglingUnused  Images","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-09-12T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Go \u4F7F\u7528 ORM \u63D2\u5165\u4E00\u4E2A NULL \u503C","permalink":"/docs-hub/blog/go-\u4F7F\u7528-orm-\u63D2\u5165\u4E00\u4E2A-null-\u503C"},"nextItem":{"title":"KubernetesK8s\u96C6\u7FA4 Docker \u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6","permalink":"/docs-hub/blog/kubernetesk8s\u96C6\u7FA4-docker-\u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6"}}')}}]);