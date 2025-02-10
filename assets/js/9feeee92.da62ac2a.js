"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["83426"],{93368:function(n,e,i){i.r(e),i.d(e,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>s});var r=JSON.parse('{"id":"Backend/Go/\u7ED3\u6784\u4F53/\u6CDB\u578B\u7ED3\u6784\u4F53","title":"Go \u6CDB\u578B\u7ED3\u6784\u4F53","description":"\u5B9A\u4E49\u6CDB\u578B\u7ED3\u6784\u4F53","source":"@site/docs/Backend/Go/\u7ED3\u6784\u4F53/5.\u6CDB\u578B\u7ED3\u6784\u4F53.md","sourceDirName":"Backend/Go/\u7ED3\u6784\u4F53","slug":"/Backend/Go/\u7ED3\u6784\u4F53/\u6CDB\u578B\u7ED3\u6784\u4F53","permalink":"/docs-hub/Backend/Go/\u7ED3\u6784\u4F53/\u6CDB\u578B\u7ED3\u6784\u4F53","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Go/\u7ED3\u6784\u4F53/5.\u6CDB\u578B\u7ED3\u6784\u4F53.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":5,"frontMatter":{},"sidebar":"goSidebar","previous":{"title":"Go \u7ED3\u6784\u4F53\u5185\u5B58\u5E03\u5C40\u548C\u5D4C\u5957","permalink":"/docs-hub/Backend/Go/\u7ED3\u6784\u4F53/\u7ED3\u6784\u4F53\u5185\u5B58\u5E03\u5C40\u548C\u5D4C\u5957"},"next":{"title":"\u63A5\u53E3","permalink":"/docs-hub/category/\u63A5\u53E3"}}'),c=i("85893"),t=i("50065");let l={},s="Go \u6CDB\u578B\u7ED3\u6784\u4F53",d={},a=[{value:"\u5B9A\u4E49\u6CDB\u578B\u7ED3\u6784\u4F53",id:"\u5B9A\u4E49\u6CDB\u578B\u7ED3\u6784\u4F53",level:2},{value:"\u6CDB\u578B\u7ED3\u6784\u4F53\u7684\u7279\u70B9",id:"\u6CDB\u578B\u7ED3\u6784\u4F53\u7684\u7279\u70B9",level:2},{value:"\u5C01\u88C5\u5207\u7247\u64CD\u4F5C\u65B9\u6CD5",id:"\u5C01\u88C5\u5207\u7247\u64CD\u4F5C\u65B9\u6CD5",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function o(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"go-\u6CDB\u578B\u7ED3\u6784\u4F53",children:"Go \u6CDB\u578B\u7ED3\u6784\u4F53"})}),"\n",(0,c.jsx)(e.h2,{id:"\u5B9A\u4E49\u6CDB\u578B\u7ED3\u6784\u4F53",children:"\u5B9A\u4E49\u6CDB\u578B\u7ED3\u6784\u4F53"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\n// \u5B9A\u4E49\u4E00\u4E2A\u6CDB\u578B\u7ED3\u6784\u4F53\ntype GenericStruct[T any] struct {\n    Value T\n}\n\nfunc main() {\n    // \u4F7F\u7528 int \u7C7B\u578B\u5B9E\u4F8B\u5316\n    intInstance := GenericStruct[int]{Value: 5}\n    fmt.Println(intInstance)\n\n    // \u4F7F\u7528 string \u7C7B\u578B\u5B9E\u4F8B\u5316\n    stringInstance := GenericStruct[string]{Value: "sumingcheng"}\n    fmt.Println(stringInstance)\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6CDB\u578B\u7ED3\u6784\u4F53 ",(0,c.jsx)(e.code,{children:"GenericStruct"}),"\uFF0C\u4F7F\u7528\u7C7B\u578B\u53C2\u6570 ",(0,c.jsx)(e.code,{children:"T"}),"\u3002\u8FD9\u6837\u53EF\u4EE5\u5728\u5B9E\u4F8B\u5316\u65F6\u6307\u5B9A\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u5B9E\u73B0\u5BF9\u4E0D\u540C\u6570\u636E\u7C7B\u578B\u7684\u652F\u6301\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6CDB\u578B\u7ED3\u6784\u4F53\u7684\u7279\u70B9",children:"\u6CDB\u578B\u7ED3\u6784\u4F53\u7684\u7279\u70B9"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u7C7B\u578B\u53C2\u6570\u5316"})}),"\n",(0,c.jsx)(e.p,{children:"\u6CDB\u578B\u7ED3\u6784\u4F53\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6216\u591A\u4E2A\u7C7B\u578B\u53C2\u6570\uFF0C\u4F7F\u5176\u9002\u7528\u4E8E\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u540C\u65F6\u4FDD\u6301\u7C7B\u578B\u5B89\u5168\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u4EE3\u7801\u590D\u7528"})}),"\n",(0,c.jsx)(e.p,{children:"\u901A\u8FC7\u6CDB\u578B\u7ED3\u6784\u4F53\uFF0C\u53EF\u4EE5\u51CF\u5C11\u91CD\u590D\u4EE3\u7801\u3002\u4F8B\u5982\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u80FD\u591F\u5904\u7406\u4EFB\u610F\u7C7B\u578B\u7684\u94FE\u8868\u6216\u6811\uFF0C\u800C\u4E0D\u9700\u8981\u4E3A\u6BCF\u79CD\u6570\u636E\u7C7B\u578B\u7F16\u5199\u4E0D\u540C\u7684\u5B9E\u73B0\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u7C7B\u578B\u5B89\u5168"})}),"\n",(0,c.jsx)(e.p,{children:"\u6CDB\u578B\u63D0\u4F9B\u4E86\u6BD4\u63A5\u53E3\u66F4\u5F3A\u7684\u7C7B\u578B\u5B89\u5168\u6027\u3002\u56E0\u4E3A\u7C7B\u578B\u53C2\u6570\u5728\u7F16\u8BD1\u65F6\u5C31\u80FD\u786E\u5B9A\u5177\u4F53\u7C7B\u578B\uFF0C\u51CF\u5C11\u4E86\u8FD0\u884C\u65F6\u7684\u7C7B\u578B\u65AD\u8A00\u548C\u68C0\u67E5\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u6027\u80FD\u4F18\u5316"})}),"\n",(0,c.jsx)(e.p,{children:"\u6CDB\u578B\u53EF\u4EE5\u51CF\u5C11\u5BF9\u63A5\u53E3\u548C\u53CD\u5C04\u7684\u4F9D\u8D56\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002\u7C7B\u578B\u53C2\u6570\u5728\u7F16\u8BD1\u65F6\u786E\u5B9A\uFF0C\u6709\u52A9\u4E8E\u4F18\u5316\u4EE3\u7801\u6267\u884C\u6548\u7387\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u7C7B\u578B\u7EA6\u675F"})}),"\n",(0,c.jsx)(e.p,{children:"\u53EF\u4EE5\u4F7F\u7528\u63A5\u53E3\u4F5C\u4E3A\u7C7B\u578B\u53C2\u6570\u7684\u7EA6\u675F\uFF0C\u9650\u5236\u7C7B\u578B\u53C2\u6570\u7684\u53EF\u9009\u8303\u56F4\uFF0C\u63D0\u4F9B\u989D\u5916\u7684\u7075\u6D3B\u6027\u548C\u63A7\u5236\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u7C7B\u578B\u63A8\u65AD"})}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u4F7F\u7528\u6CDB\u578B\u7ED3\u6784\u4F53\u65F6\uFF0CGo \u7F16\u8BD1\u5668\u901A\u5E38\u80FD\u591F\u63A8\u65AD\u51FA\u7C7B\u578B\u53C2\u6570\uFF0C\u51CF\u5C11\u4E86\u4EE3\u7801\u7684\u5197\u4F59\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u5C01\u88C5\u5207\u7247\u64CD\u4F5C\u65B9\u6CD5",children:"\u5C01\u88C5\u5207\u7247\u64CD\u4F5C\u65B9\u6CD5"}),"\n",(0,c.jsx)(e.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528\u6CDB\u578B\u7ED3\u6784\u4F53\u5C01\u88C5\u5207\u7247\u64CD\u4F5C\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\n// SliceWrapper \u5B9A\u4E49\u4E00\u4E2A\u6CDB\u578B\u7ED3\u6784\u4F53\uFF0C\u7528\u4E8E\u5C01\u88C5\u5207\u7247\u64CD\u4F5C\ntype SliceWrapper[T any] struct {\n    Slice []T\n}\n\nfunc main() {\n    // \u521B\u5EFA\u4E00\u4E2A\u6574\u6570\u5207\u7247\u7684\u5C01\u88C5\n    intSlice := SliceWrapper[int]{Slice: []int{1, 3, 5}}\n    intSlice.Add(2)\n    fmt.Println("\u6DFB\u52A0\u5143\u7D20\u540E:", intSlice.Slice)\n\n    intSlice.Remove(1)\n    fmt.Println("\u79FB\u9664\u5143\u7D20\u540E:", intSlice.Slice)\n\n    intSlice.Push(4)\n    fmt.Println("Push \u5143\u7D20\u540E:", intSlice.Slice)\n\n    // \u4F7F\u7528 Map \u65B9\u6CD5\n    squaredSlice := intSlice.Map(func(x int) int {\n        return x * x\n    })\n    fmt.Println("\u6620\u5C04\u540E\u7684\u65B0\u5207\u7247:", squaredSlice.Slice)\n}\n\n// Add \u65B9\u6CD5\u6DFB\u52A0\u5143\u7D20\u5230\u5207\u7247\nfunc (s *SliceWrapper[T]) Add(element T) {\n    s.Slice = append(s.Slice, element)\n}\n\n// Remove \u65B9\u6CD5\u5220\u9664\u6307\u5B9A\u7D22\u5F15\u7684\u5143\u7D20\nfunc (s *SliceWrapper[T]) Remove(index int) error {\n    if index < 0 || index >= len(s.Slice) {\n        return fmt.Errorf("\u7D22\u5F15\u8D85\u51FA\u8303\u56F4")\n    }\n    s.Slice = append(s.Slice[:index], s.Slice[index+1:]...)\n    return nil\n}\n\n// Push \u65B9\u6CD5\u6DFB\u52A0\u5143\u7D20\u5230\u5207\u7247\u672B\u5C3E\nfunc (s *SliceWrapper[T]) Push(element T) {\n    s.Slice = append(s.Slice, element)\n}\n\n// Map \u65B9\u6CD5\u5BF9\u5207\u7247\u7684\u6BCF\u4E2A\u5143\u7D20\u5E94\u7528\u51FD\u6570 f\nfunc (s *SliceWrapper[T]) Map(f func(T) T) *SliceWrapper[T] {\n    newSlice := make([]T, len(s.Slice))\n    for i, v := range s.Slice {\n        newSlice[i] = f(v)\n    }\n    return &SliceWrapper[T]{Slice: newSlice}\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6CDB\u578B\u7ED3\u6784\u4F53 ",(0,c.jsx)(e.code,{children:"SliceWrapper"}),"\uFF0C\u7528\u4E8E\u5C01\u88C5\u5BF9\u5207\u7247\u7684\u5E38\u7528\u64CD\u4F5C\uFF0C\u5305\u62EC\u6DFB\u52A0\u3001\u5220\u9664\u3001\u63A8\u5165\u5143\u7D20\u548C\u6620\u5C04\u51FD\u6570\u7B49\u3002\u901A\u8FC7\u4F7F\u7528\u6CDB\u578B\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u9002\u7528\u4E8E\u4EFB\u610F\u7C7B\u578B\u7684\u5207\u7247\uFF0C\u589E\u5F3A\u4E86\u4EE3\u7801\u7684\u901A\u7528\u6027\u548C\u53EF\u590D\u7528\u6027\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u4F7F\u7528\u6CDB\u578B\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u7C7B\u578B\u53C2\u6570\u7684\u7EA6\u675F\uFF0C\u786E\u4FDD\u7C7B\u578B\u5B89\u5168\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u6CDB\u578B\u529F\u80FD\u5728 Go 1.18 \u53CA\u4EE5\u4E0A\u7248\u672C\u5F15\u5165\uFF0C\u4F7F\u7528\u524D\u9700\u786E\u4FDD Go \u7248\u672C\u7B26\u5408\u8981\u6C42\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5408\u7406\u5229\u7528\u6CDB\u578B\u53EF\u4EE5\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u7EF4\u62A4\u6027\uFF0C\u4F46\u8FC7\u5EA6\u4F7F\u7528\u53EF\u80FD\u589E\u52A0\u4EE3\u7801\u590D\u6742\u5EA6\u3002"}),"\n"]}),"\n"]})]})}function p(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return s},a:function(){return l}});var r=i(67294);let c={},t=r.createContext(c);function l(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);