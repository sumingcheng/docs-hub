"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["14928"],{19913:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"Backend/Java/\u9762\u5411\u5BF9\u8C61/\u62BD\u8C61\u7C7B\u7684\u6982\u5FF5\u4E0E\u7279\u70B9","title":"\u62BD\u8C61\u7C7B Abstract class","description":"\u62BD\u8C61\u7C7B\u7684\u7279\u6027","source":"@site/docs/Backend/Java/\u9762\u5411\u5BF9\u8C61/80.\u62BD\u8C61\u7C7B\u7684\u6982\u5FF5\u4E0E\u7279\u70B9.md","sourceDirName":"Backend/Java/\u9762\u5411\u5BF9\u8C61","slug":"/Backend/Java/\u9762\u5411\u5BF9\u8C61/\u62BD\u8C61\u7C7B\u7684\u6982\u5FF5\u4E0E\u7279\u70B9","permalink":"/docs-hub/Backend/Java/\u9762\u5411\u5BF9\u8C61/\u62BD\u8C61\u7C7B\u7684\u6982\u5FF5\u4E0E\u7279\u70B9","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/\u9762\u5411\u5BF9\u8C61/80.\u62BD\u8C61\u7C7B\u7684\u6982\u5FF5\u4E0E\u7279\u70B9.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734402243000,"sidebarPosition":80,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"\u5728\u5DF2\u6709\u7684\u7C7B\u7684\u57FA\u7840\u4E0A\u6269\u5C55\u4E00\u4E2A\u65B0\u7684\u7C7B\uFF08\u6D3E\u751F\uFF09","permalink":"/docs-hub/Backend/Java/\u9762\u5411\u5BF9\u8C61/\u7C7B\u7684\u6D3E\u751F"},"next":{"title":"\u4F7F\u7528\u62BD\u8C61\u7C7B\u6784\u5EFA\u7535\u6E90\u9002\u914D\u7ED3\u6784","permalink":"/docs-hub/Backend/Java/\u9762\u5411\u5BF9\u8C61/\u62BD\u8C61\u7C7B\u4E0E\u63A5\u53E3\u7684\u6982\u5FF5\u4E0E\u533A\u522B"}}'),r=a("85893"),s=a("50065");let c={},i="\u62BD\u8C61\u7C7B Abstract class",d={},l=[{value:"\u62BD\u8C61\u7C7B\u7684\u7279\u6027",id:"\u62BD\u8C61\u7C7B\u7684\u7279\u6027",level:2},{value:"\u4F7F\u7528\u62BD\u8C61\u7C7B\u7684\u7EC6\u8282",id:"\u4F7F\u7528\u62BD\u8C61\u7C7B\u7684\u7EC6\u8282",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u62BD\u8C61\u7C7B-abstract-class",children:"\u62BD\u8C61\u7C7B Abstract class"})}),"\n",(0,r.jsx)(n.h2,{id:"\u62BD\u8C61\u7C7B\u7684\u7279\u6027",children:"\u62BD\u8C61\u7C7B\u7684\u7279\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u62BD\u8C61\u7C7B\u4E2D\u53EF\u4EE5\u58F0\u660E\u62BD\u8C61\u65B9\u6CD5\uFF0C\u4F46\u8FD9\u4E9B\u65B9\u6CD5\u53EA\u8D1F\u8D23\u5B9A\u4E49\u65B9\u6CD5\u7B7E\u540D\uFF0C\u4E0D\u5728\u62BD\u8C61\u7C7B\u4E2D\u5B9E\u73B0\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u62BD\u8C61\u65B9\u6CD5\u5FC5\u987B\u5B9A\u4E49\u5728\u62BD\u8C61\u7C7B\u5185\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u5FC5\u987B\u7531\u975E\u62BD\u8C61\u5B50\u7C7B\u5B9E\u73B0\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u62BD\u8C61\u65B9\u6CD5\u4E0D\u5E94\u4E3A\u79C1\u6709\uFF0C\u56E0\u4E3A\u9700\u8981\u7531\u5B50\u7C7B\u6765\u5B9E\u73B0\u8FD9\u4E9B\u65B9\u6CD5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u62BD\u8C61\u7C7B\u4E2D\u53EF\u4EE5\u5B58\u5728\u6784\u9020\u65B9\u6CD5\u3001\u666E\u901A\u5C5E\u6027\u548C\u666E\u901A\u65B9\u6CD5\uFF0C\u8FD9\u4E9B\u6210\u5458\u53EF\u88AB\u5B50\u7C7B\u76F4\u63A5\u5229\u7528\u3002\u62BD\u8C61\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\u4E0D\u80FD\u76F4\u63A5\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u4F46\u5728\u5B50\u7C7B\u5B9E\u4F8B\u5316\u65F6\u4F1A\u88AB\u8C03\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u62BD\u8C61\u7C7B\u53EF\u4EE5\u7EE7\u7EED\u88AB\u62BD\u8C61\u5B50\u7C7B\u7EE7\u627F\uFF0C\u7EE7\u627F\u94FE\u4E0A\u7684\u5B50\u7C7B\u53EF\u9009\u62E9\u7EE7\u7EED\u62BD\u8C61\uFF0C\u76F4\u5230\u67D0\u4E2A\u5177\u4F53\u5B50\u7C7B\u4E3A\u6B62\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7EE7\u627F\u62BD\u8C61\u7C7B\u7684\u5177\u4F53\u5B50\u7C7B\u5FC5\u987B\u5B9E\u73B0\u7EE7\u627F\u94FE\u4E0A\u6240\u6709\u7684\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5426\u5219\u8BE5\u5B50\u7C7B\u4ECD\u4E3A\u62BD\u8C61\u7C7B\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u62BD\u8C61\u7C7B\u65E0\u6CD5\u76F4\u63A5\u5B9E\u4F8B\u5316\uFF0C\u5B83\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u4F5C\u4E3A\u5176\u4ED6\u7C7B\u7684\u57FA\u7C7B\u3002\u5B9A\u4E49\u5728\u62BD\u8C61\u7C7B\u4E2D\u7684\u5E38\u91CF\u548C\u516C\u5171\u65B9\u6CD5\u53EF\u88AB\u5B50\u7C7B\u8BBF\u95EE\u4E0E\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u62BD\u8C61\u7C7B\u4E0D\u80FD\u58F0\u660E\u4E3A final \u7C7B\uFF0C\u4EE5\u514D\u5931\u53BB\u88AB\u7EE7\u627F\u7684\u610F\u4E49\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u62BD\u8C61\u7C7B\u7684\u7EC6\u8282",children:"\u4F7F\u7528\u62BD\u8C61\u7C7B\u7684\u7EC6\u8282"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5728\u5B9E\u8DF5\u4E2D\u53D1\u73B0\u62BD\u8C61\u7C7B\u9002\u5408\u7528\u4E8E\u4E3A\u4E00\u7EC4\u76F8\u5173\u7C7B\u63D0\u4F9B\u7EDF\u4E00\u63A5\u53E3\u4E0E\u57FA\u7840\u903B\u8F91\u3002\u62BD\u8C61\u7C7B\u7684\u62BD\u8C61\u65B9\u6CD5\u8BA9\u5B50\u7C7B\u5B9E\u73B0\u81EA\u5DF1\u7684\u7EC6\u8282\uFF0C\u800C\u62BD\u8C61\u7C7B\u672C\u8EAB\u53EF\u63D0\u4F9B\u9ED8\u8BA4\u884C\u4E3A\u4EE5\u51CF\u5C11\u91CD\u590D\u4EE3\u7801\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u7B14\u8005\u53EF\u4EE5\u5728\u62BD\u8C61\u7C7B\u4E2D\u5B9A\u4E49\u901A\u7528\u7ED3\u6784\uFF0C\u518D\u7531\u5B50\u7C7B\u5404\u81EA\u5B8C\u6210\u4E2A\u6027\u5316\u5B9E\u73B0\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public abstract class DBManager {\n    protected abstract void registerDatabase();\n\n    protected abstract void connectDatabase();\n\n    protected void operateDatabase() {\n        registerDatabase();\n        connectDatabase();\n    }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class MySQLManager extends DBManager {\n    public MySQLManager() {\n    }\n\n    public void registerDatabase() {\n        System.out.println("MySQLManager registering MySQL driver...");\n    }\n\n    public void connectDatabase() {\n        System.out.println("MySQLManager connecting to MySQL database...");\n    }\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return c}});var t=a(67294);let r={},s=t.createContext(r);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);