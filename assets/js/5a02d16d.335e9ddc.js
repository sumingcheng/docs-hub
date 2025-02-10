"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["54450"],{99464:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"Backend/Python/stable-diffusion/AI-\u5DE5\u5177","title":"AI-\u5DE5\u5177","description":"\u80CC\u666F\u66FF\u6362/\u53BB\u9664","source":"@site/docs/Backend/Python/stable-diffusion/160.AI-\u5DE5\u5177.md","sourceDirName":"Backend/Python/stable-diffusion","slug":"/Backend/Python/stable-diffusion/AI-\u5DE5\u5177","permalink":"/docs-hub/Backend/Python/stable-diffusion/AI-\u5DE5\u5177","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Python/stable-diffusion/160.AI-\u5DE5\u5177.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":160,"frontMatter":{},"sidebar":"pythonSidebar","previous":{"title":"SD-Plugin","permalink":"/docs-hub/Backend/Python/stable-diffusion/SD-Plugin"},"next":{"title":"\u4E91\u670D\u52A1\u90E8\u7F72\u65B9\u6848\u4E0E\u4EF7\u683C","permalink":"/docs-hub/Backend/Python/stable-diffusion/\u963F\u91CC\u4E91-ECS-OSS-CDN"}}'),s=t("85893"),l=t("50065");let d={},a=void 0,c={},o=[{value:"\u80CC\u666F\u66FF\u6362/\u53BB\u9664",id:"\u80CC\u666F\u66FF\u6362\u53BB\u9664",level:2},{value:"\u5BF9\u8C61\u6D88\u9664",id:"\u5BF9\u8C61\u6D88\u9664",level:2},{value:"\u56FE\u7247\u653E\u5927",id:"\u56FE\u7247\u653E\u5927",level:2},{value:"\u539F\u7406",id:"\u539F\u7406",level:3},{value:"\u63D0\u793A\u8BCD\u4F18\u5316",id:"\u63D0\u793A\u8BCD\u4F18\u5316",level:2},{value:"\u539F\u7406",id:"\u539F\u7406-1",level:3},{value:"\u5907\u6CE8",id:"\u5907\u6CE8",level:2},{value:"\u5185\u7F51\u5927\u5C4F\u5730\u5740",id:"\u5185\u7F51\u5927\u5C4F\u5730\u5740",level:3},{value:"\u5916\u7F51\u6F14\u793A\u5730\u5740",id:"\u5916\u7F51\u6F14\u793A\u5730\u5740",level:3}];function r(e){let n={a:"a",h2:"h2",h3:"h3",p:"p",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u80CC\u666F\u66FF\u6362\u53BB\u9664",children:"\u80CC\u666F\u66FF\u6362/\u53BB\u9664"}),"\n",(0,s.jsx)(n.p,{children:"SD \u914D\u5408\u6A21\u578B\u7406\u89E3\u56FE\u50CF\u4E2D\u7684\u4E0D\u540C\u90E8\u5206\uFF0C\u5305\u62EC\u54EA\u4E9B\u662F\u80CC\u666F\uFF0C\u54EA\u4E9B\u662F\u524D\u666F\uFF0C\u7136\u540E\u5BF9\u8C61\u63D0\u53D6\u5BF9\u5E94\u7684\u90E8\u5206"}),"\n",(0,s.jsx)(n.p,{children:"\u5BF9\u4E8E\u80CC\u666F\u66FF\u6362\uFF0C\u5B83\u4F1A\u751F\u6210\u4E0E\u539F\u56FE\u8BED\u4E49\u4E00\u81F4\u4F46\u7EC6\u8282\u4E0D\u540C\u7684\u80CC\u666F\uFF0C\u6A21\u578B\u4F1A\u57FA\u4E8E\u7406\u89E3\u7684\u5185\u5BB9\u751F\u6210\u65B0\u7684\u56FE\u50CF\u90E8\u5206\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5BF9\u4E8E\u80CC\u666F\u53BB\u9664\uFF0C\u5B83\u4F1A\u79FB\u9664\u80CC\u666F\u7684\u6240\u6709\u5185\u5BB9"}),"\n",(0,s.jsx)(n.h2,{id:"\u5BF9\u8C61\u6D88\u9664",children:"\u5BF9\u8C61\u6D88\u9664"}),"\n",(0,s.jsx)(n.p,{children:"\u5927\u6A21\u578B\u914D\u5408 SD \u7B97\u6CD5\u63D0\u53D6\u56FE\u50CF\u7279\u5F81\uFF0C\u8FA8\u8BC6\u9700\u8981\u66FF\u6362\u6216\u6D88\u9664\u7684\u5BF9\u8C61\u3002SD \u7B97\u6CD5\u4F1A\u9884\u6D4B\u88AB\u79FB\u9664\u90E8\u5206\u5468\u56F4\u7684\u80CC\u666F\u5185\u5BB9\uFF0C\u7136\u540E\u751F\u6210\u7684\u80CC\u666F\u4E0E\u6574\u4F53\u56FE\u50CF\u98CE\u683C\u4E00\u81F4\u7684\u5185\u5BB9\u586B\u5145\u5230\u56FE\u7247\u5185\u90E8"}),"\n",(0,s.jsx)(n.h2,{id:"\u56FE\u7247\u653E\u5927",children:"\u56FE\u7247\u653E\u5927"}),"\n",(0,s.jsx)(n.h3,{id:"\u539F\u7406",children:"\u539F\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u56FE\u7247\u653E\u5927\u6280\u672F\u4E3B\u8981\u5229\u7528\u9AD8\u6E05\u653E\u5927\u7B97\u6CD5\u3002\u8FD9\u4E00\u8FC7\u7A0B\u9996\u5148\u5BF9\u4F4E\u8D28\u91CF\u56FE\u7247\u8FDB\u884C\u5347\u566A\u5904\u7406\uFF0C\u7136\u540E\u7ED3\u5408\u5927\u578B\u6A21\u578B\u8FDB\u884C\u964D\u566A\uFF0C\u4EE5\u4EA7\u751F\u66F4\u9AD8\u8D28\u91CF\u7684\u56FE\u50CF\u3002\u7406\u8BBA\u4E0A\uFF0C\u5982\u679C\u7B97\u529B\u8DB3\u591F\u5F3A\u5927\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u539F\u56FE\u653E\u5927 10 \u500D\u4EE5\u4E0A\uFF0C\u4ECE\u800C\u663E\u8457\u6539\u5584\u4F4E\u8D28\u91CF\u56FE\u7247\u7684\u8D28\u91CF\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 FPS \u7535\u8111\u6E38\u620F\u4E2D\uFF0C\u8BB8\u591A\u8FFD\u6C42\u9AD8\u5E27\u7387\u7684\u573A\u666F\u5C31\u662F\u5229\u7528\u8FD9\u79CD\u6280\u672F\u5B9E\u73B0\u7684\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u63D0\u793A\u8BCD\u4F18\u5316",children:"\u63D0\u793A\u8BCD\u4F18\u5316"}),"\n",(0,s.jsx)(n.h3,{id:"\u539F\u7406-1",children:"\u539F\u7406"}),"\n",(0,s.jsx)(n.p,{children:"stabl-diffusion \u672C\u8EAB\u662F\u6709\u4E00\u5957\u81EA\u5DF1\u7684\u8BED\u6CD5\u7684\uFF0C\u901A\u8FC7\u4F7F\u7528\u8FD9\u5957\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u66F4\u6709\u6548\u5730\u751F\u6210\u9AD8\u8D28\u91CF\u4E14\u7B26\u5408\u7528\u6237\u671F\u671B\u7684\u56FE\u50CF\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u63D0\u793A\u8BCD\u4F18\u5316\u901A\u8FC7\u8BAD\u7EC3\u5927\u91CF\u7684 sd\uFF08Stable Diffusion\uFF09\u63D0\u793A\u8BCD\uFF0C\u5B83\u4F7F\u5F97\u666E\u901A\u7684\u63D0\u793A\u8BCD\u8D8B\u5411\u4E8E\u66F4\u4F18\u8D28\u3001\u66F4\u9002\u5408 SD \u4F7F\u7528\u7684\u8BCD\u6C47\u3002\u8FD9\u79CD\u4F18\u5316\u5927\u5927\u63D0\u9AD8\u4E86\u56FE\u50CF\u7684\u6574\u4F53\u8D28\u91CF\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5907\u6CE8",children:"\u5907\u6CE8"}),"\n",(0,s.jsx)(n.h3,{id:"\u5185\u7F51\u5927\u5C4F\u5730\u5740",children:"\u5185\u7F51\u5927\u5C4F\u5730\u5740"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://192.168.8.102/ai/#/screen",children:"http://192.168.8.102/ai/#/screen"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5916\u7F51\u6F14\u793A\u5730\u5740",children:"\u5916\u7F51\u6F14\u793A\u5730\u5740"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://mikacat.com/display/#/",children:"https://mikacat.com/display/#/"})}),"\n",(0,s.jsx)(n.p,{children:"\u5916\u7F51\u672A\u5BFC\u5165\u5B66\u751F\u4FE1\u606F"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var i=t(67294);let s={},l=i.createContext(s);function d(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);