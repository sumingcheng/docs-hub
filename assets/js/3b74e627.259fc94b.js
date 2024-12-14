"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["80373"],{37572:function(e,n,s){s.r(n),s.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>f,contentTitle:()=>d});var t=JSON.parse('{"id":"Backend/Python/\u57FA\u7840/\u6570\u636E\u7ED3\u6784\u5B9E\u73B0","title":"Python \u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u6307\u5357","description":"\u6808\u7684\u5B9E\u73B0","source":"@site/docs/Backend/Python/\u57FA\u7840/160-\u6570\u636E\u7ED3\u6784\u5B9E\u73B0.md","sourceDirName":"Backend/Python/\u57FA\u7840","slug":"/Backend/Python/\u57FA\u7840/\u6570\u636E\u7ED3\u6784\u5B9E\u73B0","permalink":"/docs-hub/Backend/Python/\u57FA\u7840/\u6570\u636E\u7ED3\u6784\u5B9E\u73B0","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Python/\u57FA\u7840/160-\u6570\u636E\u7ED3\u6784\u5B9E\u73B0.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1734219720000,"sidebarPosition":160,"frontMatter":{},"sidebar":"pythonSidebar","previous":{"title":"Python \u5E8F\u5217\u904D\u5386\u4E0E\u63A8\u5BFC\u5F0F","permalink":"/docs-hub/Backend/Python/\u57FA\u7840/\u5E8F\u5217\u904D\u5386"},"next":{"title":"Python \u6570\u5B66\u8BA1\u7B97\u6A21\u5757\u8BE6\u89E3","permalink":"/docs-hub/Backend/Python/\u57FA\u7840/\u6570\u5B66\u51FD\u6570"}}'),r=s("85893"),i=s("50065");let l={},d="Python \u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u6307\u5357",a={},f=[{value:"\u6808\u7684\u5B9E\u73B0",id:"\u6808\u7684\u5B9E\u73B0",level:2},{value:"\u961F\u5217\u7684\u5B9E\u73B0",id:"\u961F\u5217\u7684\u5B9E\u73B0",level:2},{value:"\u4F18\u5148\u961F\u5217\u5B9E\u73B0",id:"\u4F18\u5148\u961F\u5217\u5B9E\u73B0",level:2},{value:"\u53CC\u7AEF\u961F\u5217\u5B9E\u73B0",id:"\u53CC\u7AEF\u961F\u5217\u5B9E\u73B0",level:2},{value:"\u5B9E\u9645\u5E94\u7528\u793A\u4F8B",id:"\u5B9E\u9645\u5E94\u7528\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"python-\u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u6307\u5357",children:"Python \u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u6307\u5357"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6808\u7684\u5B9E\u73B0",children:"\u6808\u7684\u5B9E\u73B0"}),"\n",(0,r.jsx)(n.p,{children:"\u57FA\u4E8E\u5217\u8868\u5B9E\u73B0\u540E\u8FDB\u5148\u51FA\u7684\u6808\u7ED3\u6784\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Stack:\n    def __init__(self):\n        self.items = []\n\n    def is_empty(self):\n        return len(self.items) == 0\n\n    def push(self, item):\n        self.items.append(item)\n\n    def pop(self):\n        if not self.is_empty():\n            return self.items.pop()\n        raise IndexError("\u6808\u4E3A\u7A7A")\n\n    def peek(self):\n        if not self.is_empty():\n            return self.items[-1]\n        raise IndexError("\u6808\u4E3A\u7A7A")\n\n    def size(self):\n        return len(self.items)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u961F\u5217\u7684\u5B9E\u73B0",children:"\u961F\u5217\u7684\u5B9E\u73B0"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 deque \u5B9E\u73B0\u9AD8\u6548\u7684\u961F\u5217\u64CD\u4F5C\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from collections import deque\n\nclass Queue:\n    def __init__(self):\n        self.items = deque()\n\n    def is_empty(self):\n        return len(self.items) == 0\n\n    def enqueue(self, item):\n        self.items.append(item)\n\n    def dequeue(self):\n        if not self.is_empty():\n            return self.items.popleft()\n        raise IndexError("\u961F\u5217\u4E3A\u7A7A")\n\n    def front(self):\n        if not self.is_empty():\n            return self.items[0]\n        raise IndexError("\u961F\u5217\u4E3A\u7A7A")\n\n    def size(self):\n        return len(self.items)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F18\u5148\u961F\u5217\u5B9E\u73B0",children:"\u4F18\u5148\u961F\u5217\u5B9E\u73B0"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 heapq \u5B9E\u73B0\u4F18\u5148\u961F\u5217\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import heapq\n\nclass PriorityQueue:\n    def __init__(self):\n        self.items = []\n\n    def push(self, item, priority):\n        heapq.heappush(self.items, (-priority, item))\n\n    def pop(self):\n        if self.items:\n            return heapq.heappop(self.items)[1]\n        raise IndexError("\u4F18\u5148\u961F\u5217\u4E3A\u7A7A")\n\n    def peek(self):\n        if self.items:\n            return self.items[0][-1]\n        raise IndexError("\u4F18\u5148\u961F\u5217\u4E3A\u7A7A")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u53CC\u7AEF\u961F\u5217\u5B9E\u73B0",children:"\u53CC\u7AEF\u961F\u5217\u5B9E\u73B0"}),"\n",(0,r.jsx)(n.p,{children:"\u652F\u6301\u4E24\u7AEF\u64CD\u4F5C\u7684\u961F\u5217\u5B9E\u73B0\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Deque:\n    def __init__(self):\n        self.items = deque()\n\n    def add_front(self, item):\n        self.items.appendleft(item)\n\n    def add_rear(self, item):\n        self.items.append(item)\n\n    def remove_front(self):\n        if not self.is_empty():\n            return self.items.popleft()\n        raise IndexError("\u53CC\u7AEF\u961F\u5217\u4E3A\u7A7A")\n\n    def remove_rear(self):\n        if not self.is_empty():\n            return self.items.pop()\n        raise IndexError("\u53CC\u7AEF\u961F\u5217\u4E3A\u7A7A")\n\n    def is_empty(self):\n        return len(self.items) == 0\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5B9E\u9645\u5E94\u7528\u793A\u4F8B",children:"\u5B9E\u9645\u5E94\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u6808\u5B9E\u73B0\u62EC\u53F7\u5339\u914D\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def is_balanced(expression):\n    stack = Stack()\n    brackets = {")": "(", "]": "[", "}": "{"}\n\n    for char in expression:\n        if char in "({[":\n            stack.push(char)\n        elif char in ")}]":\n            if stack.is_empty():\n                return False\n            if stack.pop() != brackets[char]:\n                return False\n\n    return stack.is_empty()\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u961F\u5217\u5B9E\u73B0\u4EFB\u52A1\u8C03\u5EA6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class TaskScheduler:\n    def __init__(self):\n        self.tasks = Queue()\n\n    def add_task(self, task):\n        self.tasks.enqueue(task)\n\n    def execute_tasks(self):\n        while not self.tasks.is_empty():\n            task = self.tasks.dequeue()\n            print(f"\u6267\u884C\u4EFB\u52A1 {task}")\n'})})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(67294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);