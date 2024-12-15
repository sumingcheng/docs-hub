"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["6728"],{21134:function(e,n,s){s.r(n),s.d(n,{assets:function(){return r},contentTitle:function(){return t},default:function(){return a},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return d}});var h=s(72754),i=s(85893),c=s(50065);let l={slug:"linux-\u5168\u65B9\u9762\u914D\u7F6E-bash-\u63D0\u5347\u4F53\u9A8C",title:"Linux \u5168\u65B9\u9762\u914D\u7F6E Bash \u63D0\u5347\u4F53\u9A8C",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-10-09T00:00:00.000Z")},t="Linux \u5168\u65B9\u9762\u914D\u7F6E Bash \u63D0\u5347\u4F53\u9A8C",r={authorsImageUrls:[void 0]},d=[{value:"\u914D\u7F6E Bash \u63D0\u793A\u7B26\uFF08PS1\uFF09",id:"\u914D\u7F6E-bash-\u63D0\u793A\u7B26ps1",level:2},{value:"PS1 \u53D8\u91CF\u7684\u7EC4\u6210",id:"ps1-\u53D8\u91CF\u7684\u7EC4\u6210",level:3},{value:"\u989C\u8272\u4EE3\u7801",id:"\u989C\u8272\u4EE3\u7801",level:3},{value:"\u5B89\u88C5\u548C\u914D\u7F6E bash-completion",id:"\u5B89\u88C5\u548C\u914D\u7F6E-bash-completion",level:2},{value:"\u522B\u540D\u548C\u51FD\u6570",id:"\u522B\u540D\u548C\u51FD\u6570",level:2},{value:"\u5B89\u88C5 Bash \u6846\u67B6",id:"\u5B89\u88C5-bash-\u6846\u67B6",level:2},{value:"\u67E5\u770B\u652F\u6301\u4E3B\u9898",id:"\u67E5\u770B\u652F\u6301\u4E3B\u9898",level:3},{value:"\u547D\u4EE4\u5386\u53F2\u914D\u7F6E",id:"\u547D\u4EE4\u5386\u53F2\u914D\u7F6E",level:2},{value:"\u5B89\u5168\u6027\u589E\u5F3A",id:"\u5B89\u5168\u6027\u589E\u5F3A",level:2},{value:"\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E",id:"\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u914D\u7F6E-bash-\u63D0\u793A\u7B26ps1",children:"\u914D\u7F6E Bash \u63D0\u793A\u7B26\uFF08PS1\uFF09"}),"\n",(0,i.jsxs)(n.p,{children:["\u7F16\u8F91\u4F60\u7684 ",(0,i.jsx)(n.code,{children:".bashrc"})," \u6587\u4EF6\u6765\u81EA\u5B9A\u4E49\u547D\u4EE4\u884C\u63D0\u793A\u7B26\uFF0C\u6DFB\u52A0\u989C\u8272\u548C\u4FE1\u606F\u4F7F\u5176\u66F4\u6709\u7528"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"nano ~/.bashrc\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Bash \u4E2D\uFF0C",(0,i.jsx)(n.code,{children:"PS1"})," \u662F\u73AF\u5883\u53D8\u91CF\u4E4B\u4E00\uFF0C\u7528\u6765\u5B9A\u4E49\u4E3B\u547D\u4EE4\u63D0\u793A\u7B26\uFF0C\u5373\u4F60\u5728\u547D\u4EE4\u884C\u754C\u9762\u770B\u5230\u7684\u6BCF\u6761\u547D\u4EE4\u524D\u7684\u6587\u672C\u3002",(0,i.jsx)(n.code,{children:"PS1"})," \u53EF\u4EE5\u5B9A\u5236\u5316\u663E\u793A\u7528\u6237\u7684\u540D\u5B57\u3001\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3001\u4E3B\u673A\u540D\u7B49\u4FE1\u606F\uFF0C\u8FD8\u53EF\u4EE5\u6DFB\u52A0\u989C\u8272\uFF0C\u4F7F\u5F97\u547D\u4EE4\u884C\u754C\u9762\u66F4\u52A0\u76F4\u89C2\u548C\u6613\u7528\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"ps1-\u53D8\u91CF\u7684\u7EC4\u6210",children:"PS1 \u53D8\u91CF\u7684\u7EC4\u6210"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PS1"})," \u7684\u8BBE\u7F6E\u53EF\u4EE5\u5305\u62EC\u7EAF\u6587\u672C\u548C\u4E00\u4E9B\u7279\u6B8A\u7684\u8F6C\u4E49\u5B57\u7B26\uFF0C\u8FD9\u4E9B\u8F6C\u4E49\u5B57\u7B26\u7528\u4E8E\u63D2\u5165\u52A8\u6001\u4FE1\u606F\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\u"}),"\uFF1A\u663E\u793A\u5F53\u524D\u7528\u6237\u7684\u7528\u6237\u540D\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\h"}),"\uFF1A\u663E\u793A\u673A\u5668\u7684\u4E3B\u673A\u540D\uFF0C\u4F46\u4E0D\u5305\u62EC\u57DF\u540D\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\w"}),"\uFF1A\u663E\u793A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u5B8C\u6574\u8DEF\u5F84\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\W"}),"\uFF1A\u53EA\u663E\u793A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u57FA\u7840\u540D\u79F0\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\d"}),"\uFF1A\u663E\u793A\u65E5\u671F\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\t"}),"\uFF1A\u663E\u793A\u5F53\u524D\u65F6\u95F4\uFF0824 \u5C0F\u65F6\u683C\u5F0F\uFF09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\n"}),"\uFF1A\u65B0\u884C\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\e"}),"\uFF1A\u8F6C\u4E49\u5B57\u7B26\uFF08\u7528\u4E8E\u6DFB\u52A0\u989C\u8272\u6216\u5176\u4ED6\u63A7\u5236\u4EE3\u7801\uFF09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u989C\u8272\u4EE3\u7801",children:"\u989C\u8272\u4EE3\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"PS1"})," \u4E2D\u6DFB\u52A0\u989C\u8272\uFF0C\u901A\u5E38\u4F7F\u7528 ANSI \u8F6C\u4E49\u5E8F\u5217\u6765\u5B9A\u4E49\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\[\\033[01;32m\\]"}),"\uFF1A\u7EFF\u8272"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\[\\033[01;34m\\]"}),"\uFF1A\u84DD\u8272"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\[\\033[00m\\]"}),"\uFF1A\u91CD\u7F6E\u989C\u8272\uFF08\u7ED3\u675F\u989C\u8272\u4EE3\u7801\uFF09"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5B89\u88C5\u548C\u914D\u7F6E-bash-completion",children:"\u5B89\u88C5\u548C\u914D\u7F6E bash-completion"}),"\n",(0,i.jsx)(n.p,{children:"\u5B89\u88C5 bash-completion \u589E\u5F3A\u547D\u4EE4\u8865\u5168"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt-get install bash-completion\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u786E\u4FDD ",(0,i.jsx)(n.code,{children:".bashrc"})," \u6216 ",(0,i.jsx)(n.code,{children:".bash_profile"})," \u5305\u542B\u4EE5\u4E0B\u884C\u4EE5\u542F\u7528\u5B83"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"if [ -f /etc/bash_completion ] && ! shopt -oq posix; then\n    . /etc/bash_completion\nfi\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u522B\u540D\u548C\u51FD\u6570",children:"\u522B\u540D\u548C\u51FD\u6570"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:".bashrc"})," \u4E2D\u5B9A\u4E49\u5E38\u7528\u547D\u4EE4\u7684\u522B\u540D\u548C\u51FD\u6570\uFF0C\u8FD9\u4E9B\u7B80\u77ED\u7684\u522B\u540D\u53EF\u4EE5\u63D0\u9AD8\u65E5\u5E38\u5DE5\u4F5C\u7684\u6548\u7387\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"alias ll='ls -lah'\nalias gs='git status'\nalias df='df -h'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5B89\u88C5-bash-\u6846\u67B6",children:"\u5B89\u88C5 Bash \u6846\u67B6"}),"\n",(0,i.jsx)(n.p,{children:"\u5B89\u88C5\u50CF Bash-it \u6216 Oh My Bash \u8FD9\u6837\u7684\u6846\u67B6\uFF0C\u901A\u5E38\u4F60\u53EA\u9700\u8981\u9009\u62E9\u5E76\u5B89\u88C5\u5176\u4E2D\u4E00\u4E2A\u3002\u8FD9\u662F\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u6846\u67B6\u7684\u529F\u80FD\u76F8\u4F3C\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/Bash-it/bash-it",children:"https://github.com/Bash-it/bash-it"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it\n~/.bash_it/install.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://github.com/ohmybash/oh-my-bash",children:"https://github.com/ohmybash/oh-my-bash"})," \u63A8\u8350"]})}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF0C Oh My Bash \u6240\u8981\u6C42\u7684\u6700\u4F4E\u7248\u672C\uFF08Bash 3.2\uFF09"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u4E9B\u6846\u67B6\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u4E3B\u9898\u3001\u63D2\u4EF6\u548C\u5DE5\u5177\uFF0C\u8BA9\u4F60\u7684 Bash \u66F4\u52A0\u5F3A\u5927\u548C\u6613\u7528\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u67E5\u770B\u652F\u6301\u4E3B\u9898",children:"\u67E5\u770B\u652F\u6301\u4E3B\u9898"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ls ~/.oh-my-bash/themes/\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u627E\u5230\u4F60\u559C\u6B22\u4E3B\u9898\u540E\uFF0C\u4FEE\u6539",(0,i.jsx)(n.code,{children:"~/.bashrc"}),"\uFF0C\u627E\u5230",(0,i.jsx)(n.code,{children:'OSH_THEME="agnoster"'}),"\u6211\u8BBE\u7F6E\u4E3B\u9898\u4E3A",(0,i.jsx)(n.code,{children:"agnoster"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u547D\u4EE4\u5386\u53F2\u914D\u7F6E",children:"\u547D\u4EE4\u5386\u53F2\u914D\u7F6E"}),"\n",(0,i.jsxs)(n.p,{children:["\u914D\u7F6E Bash \u5386\u53F2\u8BB0\u5F55\uFF0C\u589E\u52A0\u5B58\u50A8\u7684\u547D\u4EE4\u6570\u91CF\u5E76\u5FFD\u7565\u91CD\u590D\u9879\uFF0C\u5FFD\u7565\u91CD\u590D\u9879\u8FD9\u4E2A\u4E00\u5B9A\u8981\u914D\u7F6E\uFF0C\u603B\u6709",(0,i.jsx)(n.code,{children:"ll"}),"\u72C2\u9B54\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"echo 'HISTSIZE=5000' >> ~/.bashrc\necho 'HISTFILESIZE=10000' >> ~/.bashrc\necho 'HISTCONTROL=ignoreboth:erasedups' >> ~/.bashrc\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5B89\u5168\u6027\u589E\u5F3A",children:"\u5B89\u5168\u6027\u589E\u5F3A"}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u654F\u611F\u64CD\u4F5C\u8FDB\u884C\u522B\u540D\u8BBE\u7F6E\u4EE5\u589E\u52A0\u5B89\u5168\u6027\u8B66\u544A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"alias rm='rm -i'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E",children:"\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E"}),"\n",(0,i.jsxs)(n.p,{children:["\u4FDD\u5B58\u6240\u6709\u66F4\u6539\u540E\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u91CD\u65B0\u52A0\u8F7D ",(0,i.jsx)(n.code,{children:".bashrc"})," \u914D\u7F6E"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"source ~/.bashrc\n"})})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var h=s(67294);let i={},c=h.createContext(i);function l(e){let n=h.useContext(c);return h.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),h.createElement(c.Provider,{value:n},e.children)}},72754:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/linux-\u5168\u65B9\u9762\u914D\u7F6E-bash-\u63D0\u5347\u4F53\u9A8C","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-10-09-Linux_\u5168\u65B9\u9762\u914D\u7F6E_Bash_\u63D0\u5347\u4F53\u9A8C.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-10-09-Linux_\u5168\u65B9\u9762\u914D\u7F6E_Bash_\u63D0\u5347\u4F53\u9A8C.md","title":"Linux \u5168\u65B9\u9762\u914D\u7F6E Bash \u63D0\u5347\u4F53\u9A8C","description":"\u914D\u7F6E Bash \u63D0\u793A\u7B26\uFF08PS1\uFF09","date":"2024-10-09T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":2.203333333333333,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"linux-\u5168\u65B9\u9762\u914D\u7F6E-bash-\u63D0\u5347\u4F53\u9A8C","title":"Linux \u5168\u65B9\u9762\u914D\u7F6E Bash \u63D0\u5347\u4F53\u9A8C","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-10-09T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Git \u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F","permalink":"/docs-hub/blog/git-\u6279\u91CF\u4ED3\u5E93\u63D0\u4EA4\u8005\u4FE1\u606F"},"nextItem":{"title":"Ubuntu \u4E0A\u5B89\u88C5\u548C\u914D\u7F6E Docker","permalink":"/docs-hub/blog/ubuntu-\u4E0A\u5B89\u88C5\u548C\u914D\u7F6E-docker"}}')}}]);