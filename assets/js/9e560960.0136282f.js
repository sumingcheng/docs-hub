"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["73824"],{31635:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return l}});var a=t(28105),i=t(85893),r=t(50065);let o={slug:"ormobject-relational-mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04",title:"ORMObject-Relational Mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04",authors:["sumingcheng"],tags:["backend"],date:new Date("2023-11-16T00:00:00.000Z")},c="ORM\uFF08Object-Relational Mapping\uFF0C\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04\uFF09",s={authorsImageUrls:[void 0]},l=[{value:"\u7528\u6237\u8868\u6A21\u578B",id:"\u7528\u6237\u8868\u6A21\u578B",level:3},{value:"\u6DFB\u52A0\u4E00\u6761\u65B0\u7EAA\u5F55",id:"\u6DFB\u52A0\u4E00\u6761\u65B0\u7EAA\u5F55",level:3}];function u(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"ORM\uFF0C\u7B80\u5355\u5730\u8BF4\uFF0C\u5C31\u50CF\u662F\u6570\u636E\u5E93\u548C\u4F60\u7684\u4EE3\u7801\u4E4B\u95F4\u7684\u7FFB\u8BD1\u5668\u3002\u5B83\u8BA9\u4F60\u80FD\u7528\u4F60\u719F\u6089\u7684JavaScript\u5BF9\u8C61\u6765\u5904\u7406\u6570\u636E\uFF0C\u800C\u4E0D\u7528\u53BB\u5199\u90A3\u4E9B\u6709\u65F6\u5019\u8BA9\u4EBA\u5934\u75BC\u7684SQL\u8BED\u53E5\u3002\u60F3\u8C61\u4E00\u4E0B\uFF0C\u4F60\u6709\u4E2A\u7528\u6237\u8868\uFF0C\u901A\u5E38\u4F60\u5F97\u5199SQL\u53BB\u6DFB\u52A0\u3001\u67E5\u627E\u3001\u66F4\u65B0\u6216\u5220\u9664\u7528\u6237\uFF0C\u5BF9\u5427\uFF1F\u4F46\u662F\u6709\u4E86ORM\uFF0C\u8FD9\u4E00\u5207\u5C31\u50CF\u662F\u5728\u5904\u7406\u4E00\u4E2A\u666E\u901A\u7684JavaScript\u5BF9\u8C61\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6BD4\u5982\u8BF4\uFF0C\u4F60\u7528Sequelize\uFF08\u8FD9\u662FNode.js\u91CC\u4E00\u4E2A\u5F88\u6D41\u884C\u7684ORM\u5DE5\u5177\uFF09\uFF0C\u4F60\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u201CUser\u201D\u6A21\u578B\uFF0C\u8FD9\u4E2A\u6A21\u578B\u5C31\u4EE3\u8868\u4E86\u6570\u636E\u5E93\u91CC\u7684\u7528\u6237\u8868\u3002\u7136\u540E\uFF0C\u5F53\u4F60\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u7528\u6237\u65F6\uFF0C\u4F60\u53EA\u9700\u8981\u50CF\u64CD\u4F5CJavaScript\u5BF9\u8C61\u4E00\u6837\u53BB\u505A\uFF0CSequelize\u4F1A\u5E2E\u4F60\u628A\u8FD9\u4E9B\u64CD\u4F5C\u8F6C\u6362\u6210\u76F8\u5E94\u7684SQL\u8BED\u53E5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u663E\u800C\u6613\u89C1\u7684\uFF1A\u9996\u5148\uFF0C\u4F60\u4E0D\u9700\u8981\u82B1\u65F6\u95F4\u53BB\u5199\u548C\u8C03\u8BD5SQL\u8BED\u53E5\uFF0C\u8FD9\u8BA9\u4F60\u80FD\u66F4\u4E13\u6CE8\u4E8E\u7F16\u5199\u4E1A\u52A1\u903B\u8F91\uFF1B\u5176\u6B21\uFF0C\u56E0\u4E3A\u4F60\u662F\u5728\u7528JavaScript\u5BF9\u8C61\uFF0C\u6240\u4EE5\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u4E5F\u53D8\u5F97\u66F4\u597D\uFF1B\u6700\u540E\uFF0C\u5982\u679C\u5C06\u6765\u9700\u8981\u6362\u6570\u636E\u5E93\uFF0C\u4F60\u7684\u4EE3\u7801\u6539\u52A8\u4F1A\u5C11\u5F88\u591A\uFF0C\u56E0\u4E3AORM\u4F1A\u5E2E\u4F60\u5904\u7406\u6570\u636E\u5E93\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7528\u6237\u8868\u6A21\u578B",children:"\u7528\u6237\u8868\u6A21\u578B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"const User = sequelize.define('User', {\n  username: DataTypes.STRING,\n  birthday: DataTypes.DATE\n});\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6DFB\u52A0\u4E00\u6761\u65B0\u7EAA\u5F55",children:"\u6DFB\u52A0\u4E00\u6761\u65B0\u7EAA\u5F55"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"User.create({\n  username: 'zhangsan',\n  birthday: new Date(1980, 6, 20)\n});\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4E0D\u8FC7\uFF0C\u4E5F\u6709\u4E00\u4E9B\u7F3A\u70B9\u3002\u6BD4\u5982\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u590D\u6742\u7684\u67E5\u8BE2\uFF0CORM\u53EF\u80FD\u4E0D\u591F\u7075\u6D3B\uFF0C\u6709\u65F6\u5019\u751F\u6210\u7684SQL\u8BED\u53E5\u4E5F\u4E0D\u662F\u6700\u4F18\u7684\u3002\u4F46\u603B\u7684\u6765\u8BF4\uFF0CORM\u662F\u4E2A\u5F88\u6709\u7528\u7684\u5DE5\u5177\uFF0C\u5C24\u5176\u662F\u5728\u9879\u76EE\u89C4\u6A21\u8F83\u5927\u65F6\uFF0C\u5B83\u80FD\u5927\u5927\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002"})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var a=t(67294);let i={},r=a.createContext(i);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}},28105:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/ormobject-relational-mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2023-11-16-ORMObject-Relational_Mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04.md","source":"@site/blog/\u540E\u7AEF/2023-11-16-ORMObject-Relational_Mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04.md","title":"ORMObject-Relational Mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04","description":"ORM\uFF0C\u7B80\u5355\u5730\u8BF4\uFF0C\u5C31\u50CF\u662F\u6570\u636E\u5E93\u548C\u4F60\u7684\u4EE3\u7801\u4E4B\u95F4\u7684\u7FFB\u8BD1\u5668\u3002\u5B83\u8BA9\u4F60\u80FD\u7528\u4F60\u719F\u6089\u7684JavaScript\u5BF9\u8C61\u6765\u5904\u7406\u6570\u636E\uFF0C\u800C\u4E0D\u7528\u53BB\u5199\u90A3\u4E9B\u6709\u65F6\u5019\u8BA9\u4EBA\u5934\u75BC\u7684SQL\u8BED\u53E5\u3002\u60F3\u8C61\u4E00\u4E0B\uFF0C\u4F60\u6709\u4E2A\u7528\u6237\u8868\uFF0C\u901A\u5E38\u4F60\u5F97\u5199SQL\u53BB\u6DFB\u52A0\u3001\u67E5\u627E\u3001\u66F4\u65B0\u6216\u5220\u9664\u7528\u6237\uFF0C\u5BF9\u5427\uFF1F\u4F46\u662F\u6709\u4E86ORM\uFF0C\u8FD9\u4E00\u5207\u5C31\u50CF\u662F\u5728\u5904\u7406\u4E00\u4E2A\u666E\u901A\u7684JavaScript\u5BF9\u8C61\u3002","date":"2023-11-16T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":1.38,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"ormobject-relational-mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04","title":"ORMObject-Relational Mapping\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04","authors":["sumingcheng"],"tags":["backend"],"date":"2023-11-16T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Nginx \u914D\u7F6E\u793A\u4F8B","permalink":"/docs-hub/blog/nginx-\u914D\u7F6E\u793A\u4F8B"},"nextItem":{"title":"\u4EC0\u4E48\u662F RESTful API","permalink":"/docs-hub/blog/\u4EC0\u4E48\u662F-restful-api"}}')}}]);