"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["27905"],{91171:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return t},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return r}});var l=s(57540),i=s(85893),a=s(50065);let c={slug:"windows-\u4E0A\u5B89\u88C5-cmake",title:"Windows \u4E0A\u5B89\u88C5 CMake",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-10-26T00:00:00.000Z")},t="Windows \u4E0A\u5B89\u88C5 CMake",d={authorsImageUrls:[void 0]},r=[{value:"CMake \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898",id:"cmake-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898",level:2},{value:"\u5B89\u88C5 CMake",id:"\u5B89\u88C5-cmake",level:2},{value:"\u4E0B\u8F7D CMake",id:"\u4E0B\u8F7D-cmake",level:3},{value:"\u5B89\u88C5 CMake",id:"\u5B89\u88C5-cmake-1",level:3},{value:"\u9A8C\u8BC1 CMake \u5B89\u88C5",id:"\u9A8C\u8BC1-cmake-\u5B89\u88C5",level:2},{value:"\u4F7F\u7528 CMake \u6D4B\u8BD5\u4E00\u4E2A\u7B80\u5355\u7684\u9879\u76EE",id:"\u4F7F\u7528-cmake-\u6D4B\u8BD5\u4E00\u4E2A\u7B80\u5355\u7684\u9879\u76EE",level:2},{value:"\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684 C++\u9879\u76EE",id:"\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684-c\u9879\u76EE",level:3},{value:"\u751F\u6210\u548C\u6784\u5EFA\u9879\u76EE",id:"\u751F\u6210\u548C\u6784\u5EFA\u9879\u76EE",level:3},{value:"\u8FD0\u884C\u751F\u6210\u7684\u7A0B\u5E8F",id:"\u8FD0\u884C\u751F\u6210\u7684\u7A0B\u5E8F",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"CMake \u662F\u4E00\u4E2A\u6784\u5EFA\u7CFB\u7EDF\u751F\u6210\u5668\uFF0C\u5B83\u4E3B\u8981\u89E3\u51B3\u4E86\u8DE8\u5E73\u53F0\u7F16\u8BD1\u548C\u6784\u5EFA\u8F6F\u4EF6\u7684\u590D\u6742\u6027\u95EE\u9898\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u4F7F\u7528\u5355\u4E00\u7684\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406\u548C\u751F\u6210\u9002\u7528\u4E8E\u591A\u79CD\u7F16\u8BD1\u73AF\u5883\u7684\u9879\u76EE\u6587\u4EF6\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"cmake-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898",children:"CMake \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898"}),"\n",(0,i.jsx)(n.p,{children:"\u60F3\u8C61\u4E0B\u4F60\u662F\u4E00\u4E2A\u8F6F\u4EF6\u5F00\u53D1\u8005\uFF0C\u4F60\u7684\u4EFB\u52A1\u662F\u5F00\u53D1\u53EF\u4EE5\u5728 Windows\u3001Linux \u548C macOS \u4E0A\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6BCF\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u6709\u5176\u7279\u5B9A\u7684\u7F16\u8BD1\u5668\u548C\u5DE5\u5177\u94FE\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u80FD\u9700\u8981\u4E3A\u6BCF\u4E2A\u5E73\u53F0\u7F16\u5199\u548C\u7EF4\u62A4\u4E0D\u540C\u7684\u6784\u5EFA\u811A\u672C\u6216\u9879\u76EE\u6587\u4EF6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528 CMake\uFF0C\u4F60\u53EA\u9700\u8981\u7F16\u5199\u4E00\u5957 CMakeLists.txt \u914D\u7F6E\u6587\u4EF6\u3002CMake \u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u751F\u6210\u9002\u7528\u4E8E\u5404\u4E2A\u5E73\u53F0\u7684\u6784\u5EFA\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728 Windows \u4E0A\uFF0CCMake \u53EF\u4EE5\u751F\u6210 Visual Studio \u7684\u89E3\u51B3\u65B9\u6848\u6587\u4EF6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728 Linux \u4E0A\uFF0CCMake \u53EF\u4EE5\u751F\u6210 Makefiles\uFF0C\u8FD9\u4E9B Makefiles \u53C8\u53EF\u4EE5\u88AB GNU Make \u5DE5\u5177\u4F7F\u7528\u6765\u7F16\u8BD1\u7A0B\u5E8F\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728 macOS \u4E0A\uFF0CCMake \u540C\u6837\u53EF\u4EE5\u751F\u6210 Makefiles \u6216\u8005 Xcode \u9879\u76EE\u6587\u4EF6\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u6837\uFF0C\u4F60\u5C31\u4E0D\u9700\u8981\u624B\u52A8\u9002\u914D\u548C\u7BA1\u7406\u6BCF\u4E2A\u5E73\u53F0\u7684\u6784\u5EFA\u8FC7\u7A0B\uFF0C\u5927\u5927\u7B80\u5316\u4E86\u8DE8\u5E73\u53F0\u5F00\u53D1\u7684\u590D\u6742\u6027\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5B89\u88C5-cmake",children:"\u5B89\u88C5 CMake"}),"\n",(0,i.jsx)(n.h3,{id:"\u4E0B\u8F7D-cmake",children:"\u4E0B\u8F7D CMake"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8BBF\u95EE ",(0,i.jsx)(n.a,{href:"https://cmake.org/download/",children:"https://cmake.org/download/"}),"\uFF0C\u4E0B\u8F7D\u9002\u7528\u4E8E Windows \u7684 CMake \u5B89\u88C5\u5305\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5B89\u88C5-cmake-1",children:"\u5B89\u88C5 CMake"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD0\u884C\u4E0B\u8F7D\u7684\u5B89\u88C5\u7A0B\u5E8F\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u5B89\u88C5CMake\u6B65\u9AA41",src:s(69858).Z+"",width:"1200",height:"344"})}),"\n",(0,i.jsx)(n.p,{children:'\u5728\u5B89\u88C5\u8FC7\u7A0B\u4E2D\uFF0C\u9009\u62E9"Add CMake to the system PATH for all users"\u6216"Add CMake to the system PATH for the current user"\u9009\u9879\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u76F4\u63A5\u8C03\u7528 CMake\u3002'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u5B89\u88C5CMake\u6B65\u9AA42",src:s(66624).Z+"",width:"616",height:"486"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9A8C\u8BC1-cmake-\u5B89\u88C5",children:"\u9A8C\u8BC1 CMake \u5B89\u88C5"}),"\n",(0,i.jsx)(n.p,{children:"\u6253\u5F00\u547D\u4EE4\u884C\u5DE5\u5177\uFF08CMD \u6216 PowerShell\uFF09\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cmake --version\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u9A8C\u8BC1CMake\u5B89\u88C5",src:s(63434).Z+"",width:"736",height:"233"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528-cmake-\u6D4B\u8BD5\u4E00\u4E2A\u7B80\u5355\u7684\u9879\u76EE",children:"\u4F7F\u7528 CMake \u6D4B\u8BD5\u4E00\u4E2A\u7B80\u5355\u7684\u9879\u76EE"}),"\n",(0,i.jsx)(n.h3,{id:"\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684-c\u9879\u76EE",children:"\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684 C++\u9879\u76EE"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6\u5939\u4F5C\u4E3A\u9879\u76EE\u6587\u4EF6\u5939\uFF0C\u4F8B\u5982",(0,i.jsx)(n.code,{children:"CMakeTest"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u8BE5\u6587\u4EF6\u5939\u5185\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A",(0,i.jsx)(n.code,{children:"CMakeLists.txt"}),"\u7684\u6587\u4EF6\uFF0C\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.10)\nproject(HelloCMake)\nadd_executable(hello hello.cpp)\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\u5728\u540C\u4E00\u6587\u4EF6\u5939\u4E2D\u521B\u5EFA\u4E00\u4E2A",(0,i.jsx)(n.code,{children:"hello.cpp"}),"\u7684 C++\u6E90\u6587\u4EF6\uFF0C\u8F93\u5165\u4EE5\u4E0B\u7B80\u5355\u4EE3\u7801\uFF1A"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n\nint main() {\n    std::cout << "Hello, CMake!" << std::endl;\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u751F\u6210\u548C\u6784\u5EFA\u9879\u76EE",children:"\u751F\u6210\u548C\u6784\u5EFA\u9879\u76EE"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u5BFC\u822A\u5230\u4F60\u7684",(0,i.jsx)(n.code,{children:"CMakeTest"}),"\u76EE\u5F55"]}),"\n",(0,i.jsxs)(n.li,{children:["\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A",(0,i.jsx)(n.code,{children:"build"}),"\u7684\u76EE\u5F55\u6765\u5B58\u653E\u6784\u5EFA\u8F93\u51FA\uFF1A"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir build\ncd build\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u8FD0\u884C CMake \u751F\u6210\u6784\u5EFA\u7CFB\u7EDF\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cmake ..\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u6784\u5EFA\u9879\u76EE\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cmake --build .\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u8FD0\u884C\u751F\u6210\u7684\u7A0B\u5E8F",children:"\u8FD0\u884C\u751F\u6210\u7684\u7A0B\u5E8F"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728",(0,i.jsx)(n.code,{children:"build"}),"\u76EE\u5F55\u4E2D\uFF0C\u4F60\u4F1A\u627E\u5230\u7F16\u8BD1\u540E\u7684\u53EF\u6267\u884C\u6587\u4EF6\uFF08\u5728 Windows \u4E2D\u662F",(0,i.jsx)(n.code,{children:"hello.exe"}),"\uFF09"]}),"\n",(0,i.jsx)(n.li,{children:"\u8FD0\u884C\u5B83\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./hello\n"})}),"\n",(0,i.jsx)(n.p,{children:'\u5982\u679C\u770B\u5230\u8F93\u51FA"Hello, CMake!"\uFF0C\u5219\u8868\u793A CMake \u5DF2\u6B63\u786E\u5B89\u88C5\u5E76\u80FD\u591F\u7528\u4E8E\u6784\u5EFA\u9879\u76EE\u3002'}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u4E9B\u6B65\u9AA4\u5C06\u5E2E\u52A9\u4F60\u5B89\u88C5 CMake \u5E76\u9A8C\u8BC1\u5B83\u662F\u5426\u80FD\u5728\u4F60\u7684\u7CFB\u7EDF\u4E0A\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u5C55\u793A\u5982\u4F55\u4F7F\u7528 CMake \u6765\u6784\u5EFA C++\u7A0B\u5E8F\u3002\u5982\u679C\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u67E5\u770B CMake \u7684",(0,i.jsx)(n.a,{href:"https://cmake.org/documentation/",children:"\u5B98\u65B9\u6587\u6863"}),"\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u66F4\u591A\u9AD8\u7EA7\u529F\u80FD\u548C\u8BE6\u7EC6\u6307\u5357\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},63434:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/091698446c90c83e75a77559dfffcbb1-987af40149c5ceba2279ee3dda64196a.jpg"},66624:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/d0d6fa5493ec5ba8de9c272d8e842d77-11a63594dfd858045ff4333085a8f154.jpg"},69858:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/d2719d305851faf3087521a005a04c92-ca03ae923f74f0af5bcc8194fe29c9f9.jpg"},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return c}});var l=s(67294);let i={},a=l.createContext(i);function c(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(a.Provider,{value:n},e.children)}},57540:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/windows-\u4E0A\u5B89\u88C5-cmake","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-10-26-Windows_\u4E0A\u5B89\u88C5_CMake.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-10-26-Windows_\u4E0A\u5B89\u88C5_CMake.md","title":"Windows \u4E0A\u5B89\u88C5 CMake","description":"CMake \u662F\u4E00\u4E2A\u6784\u5EFA\u7CFB\u7EDF\u751F\u6210\u5668\uFF0C\u5B83\u4E3B\u8981\u89E3\u51B3\u4E86\u8DE8\u5E73\u53F0\u7F16\u8BD1\u548C\u6784\u5EFA\u8F6F\u4EF6\u7684\u590D\u6742\u6027\u95EE\u9898\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u4F7F\u7528\u5355\u4E00\u7684\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406\u548C\u751F\u6210\u9002\u7528\u4E8E\u591A\u79CD\u7F16\u8BD1\u73AF\u5883\u7684\u9879\u76EE\u6587\u4EF6\u3002","date":"2024-10-26T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":2.5366666666666666,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"windows-\u4E0A\u5B89\u88C5-cmake","title":"Windows \u4E0A\u5B89\u88C5 CMake","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-10-26T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Whispercpp \u5B89\u88C5\u4E0E\u4F7F\u7528\u6559\u7A0B","permalink":"/docs-hub/blog/whispercpp-\u5B89\u88C5\u4E0E\u4F7F\u7528\u6559\u7A0B"},"nextItem":{"title":"Windows \u5B89\u88C5 MinGW-W64","permalink":"/docs-hub/blog/windows-\u5B89\u88C5-mingw-w64"}}')}}]);