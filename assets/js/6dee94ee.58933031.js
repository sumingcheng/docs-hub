"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["30582"],{15707:function(n,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return d},default:function(){return a},frontMatter:function(){return l},metadata:function(){return r},toc:function(){return c}});var r=t(60474),s=t(85893),i=t(50065);let l={slug:"python-\u591A\u7EBF\u7A0B\u7F16\u7A0B\u5B9E\u8DF5",title:"Python \u591A\u7EBF\u7A0B\u7F16\u7A0B\u5B9E\u8DF5",authors:["sumingcheng"],tags:["backend"],date:new Date("2024-11-04T00:00:00.000Z")},d="Python \u591A\u7EBF\u7A0B\u7F16\u7A0B\u5B9E\u8DF5",o={authorsImageUrls:[void 0]},c=[{value:"\u5168\u5C40\u89E3\u91CA\u5668\u9501\uFF08GIL\uFF09",id:"\u5168\u5C40\u89E3\u91CA\u5668\u9501gil",level:2},{value:"\u5E76\u53D1\u7F16\u7A0B\u65B9\u5F0F",id:"\u5E76\u53D1\u7F16\u7A0B\u65B9\u5F0F",level:2},{value:"threading",id:"threading",level:2},{value:"multiprocessing",id:"multiprocessing",level:2},{value:"ThreadPoolExecutor",id:"threadpoolexecutor",level:2},{value:"asyncio",id:"asyncio",level:2},{value:"\u56DB\u79CD\u65B9\u5F0F\u5BF9\u6BD4",id:"\u56DB\u79CD\u65B9\u5F0F\u5BF9\u6BD4",level:2}];function h(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u5168\u5C40\u89E3\u91CA\u5668\u9501gil",children:"\u5168\u5C40\u89E3\u91CA\u5668\u9501\uFF08GIL\uFF09"}),"\n",(0,s.jsx)(e.p,{children:"\u5728Python\u7684\u5E76\u53D1\u7F16\u7A0B\u4E2D\uFF0C\u5168\u5C40\u89E3\u91CA\u5668\u9501\uFF08GIL\uFF09\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u8003\u91CF\u56E0\u7D20\u3002\u5B83\u9650\u5236\u4E86\u5728CPython\uFF08\u89E3\u91CA\u5668\uFF09\u4E2D\u540C\u65F6\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u5B57\u8282\u7801\uFF0C\u4ECE\u800C\u5F71\u54CDCPU\u5BC6\u96C6\u578B\u4EFB\u52A1\u7684\u6027\u80FD\u3002\u5C3D\u7BA1\u5982\u6B64\uFF0CGIL\u7684\u5B58\u5728\u5BF9I/O\u5BC6\u96C6\u578B\u4EFB\u52A1\u5F71\u54CD\u8F83\u5C0F\uFF0C\u56E0\u4E3A\u7EBF\u7A0B\u5728\u7B49\u5F85I/O\u64CD\u4F5C\u65F6\u53EF\u4EE5\u91CA\u653EGIL\uFF0C\u5141\u8BB8\u5176\u4ED6\u7EBF\u7A0B\u8FD0\u884C\u3002\u5728\u6B64\u80CC\u666F\u4E0B\uFF0C\u5F00\u53D1\u8005\u901A\u5E38\u6839\u636E\u4EFB\u52A1\u6027\u8D28\u9009\u62E9\u5408\u9002\u7684\u5E76\u53D1\u6A21\u5F0F\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5BF9\u4E8EI/O\u5BC6\u96C6\u578B\u4EFB\u52A1\uFF0C",(0,s.jsx)(e.code,{children:"Threading"}),"\u6A21\u5757\u548C",(0,s.jsx)(e.code,{children:"ThreadPoolExecutor"}),"\u63D0\u4F9B\u4E86\u8F83\u4E3A\u7B80\u5355\u7684\u5B9E\u73B0\uFF0C\u5141\u8BB8\u591A\u4E2A\u7EBF\u7A0B\u5E76\u884C\u6267\u884CI/O\u64CD\u4F5C\u3002\u800C",(0,s.jsx)(e.code,{children:"asyncio"}),"\u5219\u5229\u7528\u4E8B\u4EF6\u5FAA\u73AF\u548C\u534F\u7A0B\u6765\u5904\u7406\u9AD8\u5E76\u53D1I/O\u8BF7\u6C42\uFF0C\u5176\u975E\u963B\u585E\u6A21\u578B\u5728\u5904\u7406\u5927\u91CF\u8FDE\u63A5\u65F6\u66F4\u4E3A\u9AD8\u6548\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728CPU\u5BC6\u96C6\u578B\u4EFB\u52A1\u7684\u573A\u666F\u4E2D\uFF0C",(0,s.jsx)(e.code,{children:"multiprocessing"}),"\u6A21\u5757\u662F\u66F4\u4F18\u7684\u9009\u62E9\u3002\u5B83\u901A\u8FC7\u521B\u5EFA\u591A\u4E2A\u72EC\u7ACB\u8FDB\u7A0B\uFF0C\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u6709\u81EA\u5DF1\u7684Python\u89E3\u91CA\u5668\u548C\u5185\u5B58\u7A7A\u95F4\uFF0C\u4ECE\u800C\u7ED5\u8FC7GIL\uFF0C\u5B9E\u73B0\u771F\u6B63\u7684\u5E76\u884C\u8BA1\u7B97\u3002\u8FD9\u4F7F\u5F97",(0,s.jsx)(e.code,{children:"multiprocessing"}),"\u80FD\u5145\u5206\u5229\u7528\u591A\u6838\u5904\u7406\u5668\u7684\u80FD\u529B\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5E76\u53D1\u7F16\u7A0B\u65B9\u5F0F",children:"\u5E76\u53D1\u7F16\u7A0B\u65B9\u5F0F"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u7279\u6027"}),(0,s.jsx)(e.th,{children:"threading"}),(0,s.jsx)(e.th,{children:"multiprocessing"}),(0,s.jsx)(e.th,{children:"ThreadPoolExecutor"}),(0,s.jsx)(e.th,{children:"asyncio"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u9002\u7528\u573A\u666F"}),(0,s.jsx)(e.td,{children:"I/O \u5BC6\u96C6\u578B"}),(0,s.jsx)(e.td,{children:"CPU \u5BC6\u96C6\u578B"}),(0,s.jsx)(e.td,{children:"I/O \u5BC6\u96C6\u578B"}),(0,s.jsx)(e.td,{children:"I/O \u5BC6\u96C6\u578B"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5E76\u884C\u6027"}),(0,s.jsx)(e.td,{children:"\u53D7 GIL \u9650\u5236"}),(0,s.jsx)(e.td,{children:"\u771F\u6B63\u7684\u5E76\u884C"}),(0,s.jsx)(e.td,{children:"\u53D7 GIL \u9650\u5236"}),(0,s.jsx)(e.td,{children:"\u771F\u6B63\u7684\u5E76\u884C\uFF08\u57FA\u4E8E\u534F\u7A0B\uFF09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u8D44\u6E90\u7BA1\u7406"}),(0,s.jsx)(e.td,{children:"\u5171\u4EAB\u5185\u5B58"}),(0,s.jsx)(e.td,{children:"\u8FDB\u7A0B\u95F4\u5185\u5B58\u9694\u79BB"}),(0,s.jsx)(e.td,{children:"\u7EBF\u7A0B\u6C60\u81EA\u52A8\u7BA1\u7406"}),(0,s.jsx)(e.td,{children:"\u5355\u7EBF\u7A0B\u4E8B\u4EF6\u5FAA\u73AF"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u7BA1\u7406\u590D\u6742\u6027"}),(0,s.jsx)(e.td,{children:"\u7B80\u5355"}),(0,s.jsx)(e.td,{children:"\u8F83\u590D\u6742"}),(0,s.jsx)(e.td,{children:"\u7B80\u5355"}),(0,s.jsx)(e.td,{children:"\u4E2D\u7B49\u590D\u6742\uFF08\u9700\u8981\u7406\u89E3\u5F02\u6B65\u6982\u5FF5\uFF09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u6027\u80FD"}),(0,s.jsx)(e.td,{children:"\u5BF9\u4E8E I/O \u6548\u7387\u8F83\u9AD8"}),(0,s.jsx)(e.td,{children:"\u5BF9\u4E8E\u8BA1\u7B97\u6548\u7387\u8F83\u9AD8"}),(0,s.jsx)(e.td,{children:"\u5BF9\u4E8E I/O \u6548\u7387\u8F83\u9AD8"}),(0,s.jsx)(e.td,{children:"\u5BF9\u4E8E\u5927\u91CF\u5E76\u53D1 I/O \u64CD\u4F5C\u6548\u7387\u9AD8"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u9002\u5408\u5E76\u53D1\u91CF"}),(0,s.jsx)(e.td,{children:"\u8F83\u5C0F\uFF08\u7EBF\u7A0B\u4E0A\u4E0B\u6587\u5207\u6362\u5F00\u9500\uFF09"}),(0,s.jsx)(e.td,{children:"\u5927\uFF08\u591A\u4E2A\u8FDB\u7A0B\uFF09"}),(0,s.jsx)(e.td,{children:"\u8F83\u5927\uFF08\u53EF\u914D\u7F6E\u6700\u5927\u7EBF\u7A0B\u6570\uFF09"}),(0,s.jsx)(e.td,{children:"\u5F88\u5927\uFF08\u53EF\u5904\u7406\u6210\u5343\u4E0A\u4E07\u7684\u8FDE\u63A5\uFF09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u7F16\u7A0B\u6A21\u578B"}),(0,s.jsx)(e.td,{children:"\u57FA\u4E8E\u7EBF\u7A0B"}),(0,s.jsx)(e.td,{children:"\u57FA\u4E8E\u8FDB\u7A0B"}),(0,s.jsx)(e.td,{children:"\u57FA\u4E8E\u7EBF\u7A0B"}),(0,s.jsx)(e.td,{children:"\u57FA\u4E8E\u534F\u7A0B"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"threading",children:"threading"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u9002\u5408\u5904\u7406 I/O \u5BC6\u96C6\u578B\u4EFB\u52A1\uFF0C\u4F46\u5728 CPU \u5BC6\u96C6\u578B\u4EFB\u52A1\u4E2D\u6027\u80FD\u53D7\u9650\u4E8E GIL\u3002\u7BA1\u7406\u7B80\u5355\uFF0C\u9002\u5408\u5C0F\u89C4\u6A21\u5E76\u53D1\u573A\u666F\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'import threading\nimport requests\n\u200B\n\u200B\n# \u4E0B\u8F7D\u5355\u4E2A URL \u7684\u51FD\u6570\ndef download_url(url):\n    try:\n        response = requests.get(url, timeout=5)\n        print(f"\u6210\u529F\u4E0B\u8F7D: {url}, \u5185\u5BB9\u957F\u5EA6: {len(response.content)}")\n    except Exception as e:\n        print(f"\u4E0B\u8F7D\u5931\u8D25: {url}, \u9519\u8BEF: {e}")\n\u200B\n\u200B\ndef main(urls):\n    threads = []\n    for url in urls:\n        thread = threading.Thread(target=download_url, args=(url,))\n        threads.append(thread)\n        thread.start()\n\u200B\n    for thread in threads:\n        thread.join()  # \u7B49\u5F85\u6240\u6709\u7EBF\u7A0B\u5B8C\u6210\n\u200B\n\u200B\nif __name__ == "__main__":\n    urls = [f"https://www.example.com/{i}" for i in range(10)]\n    main(urls)\n'})}),"\n",(0,s.jsx)(e.h2,{id:"multiprocessing",children:"multiprocessing"}),"\n",(0,s.jsx)(e.p,{children:"\u9002\u5408 CPU \u5BC6\u96C6\u578B\u4EFB\u52A1\uFF0C\u80FD\u591F\u5B9E\u73B0\u771F\u6B63\u7684\u5E76\u884C\u3002\u8FDB\u7A0B\u95F4\u5185\u5B58\u9694\u79BB\uFF0C\u9002\u5408\u5927\u89C4\u6A21\u8BA1\u7B97\uFF0C\u4F46\u7BA1\u7406\u8F83\u590D\u6742\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'import multiprocessing\nimport requests\n\u200B\n\u200B\n# \u4E0B\u8F7D\u5355\u4E2A URL \u7684\u51FD\u6570\ndef download_url(url):\n    try:\n        response = requests.get(url, timeout=5)\n        print(f"\u6210\u529F\u4E0B\u8F7D: {url}, \u5185\u5BB9\u957F\u5EA6: {len(response.content)}")\n    except Exception as e:\n        print(f"\u4E0B\u8F7D\u5931\u8D25: {url}, \u9519\u8BEF: {e}")\n\u200B\n\u200B\ndef main(urls):\n    with multiprocessing.Pool(processes=5) as pool:  # \u4F7F\u7528\u8FDB\u7A0B\u6C60\n        pool.map(download_url, urls)\n\u200B\n\u200B\nif __name__ == "__main__":\n    urls = [f"https://www.example.com/{i}" for i in range(10)]\n    main(urls)\n'})}),"\n",(0,s.jsx)(e.h2,{id:"threadpoolexecutor",children:"ThreadPoolExecutor"}),"\n",(0,s.jsx)(e.p,{children:"\u63D0\u4F9B\u4E86\u7B80\u5355\u7684\u7EBF\u7A0B\u6C60\u7BA1\u7406\uFF0C\u9002\u5408 I/O \u5BC6\u96C6\u578B\u4EFB\u52A1\u3002\u66F4\u9AD8\u6548\u5730\u7BA1\u7406\u7EBF\u7A0B\uFF0C\u6613\u4E8E\u4F7F\u7528\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'import requests\nfrom concurrent.futures import ThreadPoolExecutor\n\u200B\n\u200B\n# \u4E0B\u8F7D\u5355\u4E2A URL \u7684\u51FD\u6570\ndef download_url(url):\n    try:\n        response = requests.get(url, timeout=5)\n        print(f"\u6210\u529F\u4E0B\u8F7D: {url}, \u5185\u5BB9\u957F\u5EA6: {len(response.content)}")\n    except Exception as e:\n        print(f"\u4E0B\u8F7D\u5931\u8D25: {url}, \u9519\u8BEF: {e}")\n\u200B\n\u200B\ndef main(urls):\n    with ThreadPoolExecutor(max_workers=5) as executor:\n        executor.map(download_url, urls)\n\u200B\n\u200B\nif __name__ == "__main__":\n    urls = [f"https://www.example.com/{i}" for i in range(10)]\n    main(urls)\n'})}),"\n",(0,s.jsx)(e.h2,{id:"asyncio",children:"asyncio"}),"\n",(0,s.jsx)(e.p,{children:"\u8BED\u6CD5\u7C7B\u4F3C\u4E8EJS\uFF0C\u901A\u8FC7\u4E8B\u4EF6\u5FAA\u73AF\u548C\u534F\u7A0B\u5904\u7406 I/O \u5BC6\u96C6\u578B\u4EFB\u52A1\uFF0C\u80FD\u5904\u7406\u5927\u91CF\u5E76\u53D1\u3002\u7F16\u7A0B\u6A21\u578B\u76F8\u5BF9\u590D\u6742\uFF0C\u9700\u8981\u7406\u89E3\u5F02\u6B65\u7F16\u7A0B\u7684\u6982\u5FF5\uFF0C\u4F46\u80FD\u663E\u8457\u63D0\u5347 I/O \u6027\u80FD\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'import asyncio\nimport aiohttp\n\u200B\n\u200B\n# \u5F02\u6B65\u4E0B\u8F7D\u5355\u4E2A URL \u7684\u51FD\u6570\nasync def download_url(session, url):\n    try:\n        async with session.get(url, timeout=5) as response:\n            content = await response.read()\n            print(f"\u6210\u529F\u4E0B\u8F7D: {url}, \u5185\u5BB9\u957F\u5EA6: {len(content)}")\n    except Exception as e:\n        print(f"\u4E0B\u8F7D\u5931\u8D25: {url}, \u9519\u8BEF: {e}")\n\u200B\n\u200B\nasync def main(urls):\n    async with aiohttp.ClientSession() as session:\n        tasks = [download_url(session, url) for url in urls]\n        await asyncio.gather(*tasks)\n\u200B\n\u200B\nif __name__ == "__main__":\n    urls = [f"https://www.example.com/{i}" for i in range(10)]\n    asyncio.run(main(urls))\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u56DB\u79CD\u65B9\u5F0F\u5BF9\u6BD4",children:"\u56DB\u79CD\u65B9\u5F0F\u5BF9\u6BD4"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5BF9\u4E8E I/O \u5BC6\u96C6\u578B\u4EFB\u52A1"}),"\uFF0C",(0,s.jsx)(e.code,{children:"asyncio"})," \u548C ",(0,s.jsx)(e.code,{children:"ThreadPoolExecutor"})," \u662F\u4F18\u79C0\u7684\u9009\u62E9\uFF0C\u4F46 ",(0,s.jsx)(e.code,{children:"asyncio"})," \u66F4\u9002\u5408\u5904\u7406\u9AD8\u5E76\u53D1\u8FDE\u63A5\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5BF9\u4E8E CPU \u5BC6\u96C6\u578B\u4EFB\u52A1"}),"\uFF0C",(0,s.jsx)(e.code,{children:"multiprocessing"})," \u6A21\u5757\u5141\u8BB8\u5728 Python \u4E2D\u521B\u5EFA\u591A\u4E2A\u8FDB\u7A0B\uFF0C\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u6709\u81EA\u5DF1\u7684 Python \u89E3\u91CA\u5668\u548C\u5185\u5B58\u7A7A\u95F4\u3002\u56E0\u6B64\uFF0C\u5B83\u53EF\u4EE5\u7ED5\u8FC7\u5168\u5C40\u89E3\u91CA\u5668\u9501\uFF08GIL\uFF09\uFF0C\u5B9E\u73B0\u771F\u6B63\u7684\u5E76\u884C\u8BA1\u7B97\u3002\u8FD9\u4F7F\u5F97 ",(0,s.jsx)(e.code,{children:"multiprocessing"})," \u975E\u5E38\u9002\u5408 CPU \u5BC6\u96C6\u578B\u4EFB\u52A1\uFF0C\u56E0\u4E3A\u5B83\u80FD\u591F\u5145\u5206\u5229\u7528\u591A\u6838\u5904\u7406\u5668\u7684\u8BA1\u7B97\u80FD\u529B\u3002"]})]})}function a(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return l}});var r=t(67294);let s={},i=r.createContext(s);function l(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:e},n.children)}},60474:function(n){n.exports=JSON.parse('{"permalink":"/docs-hub/blog/python-\u591A\u7EBF\u7A0B\u7F16\u7A0B\u5B9E\u8DF5","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u540E\u7AEF/2024-11-04-Python_\u591A\u7EBF\u7A0B\u7F16\u7A0B\u5B9E\u8DF5.md","source":"@site/blog/\u540E\u7AEF/2024-11-04-Python_\u591A\u7EBF\u7A0B\u7F16\u7A0B\u5B9E\u8DF5.md","title":"Python \u591A\u7EBF\u7A0B\u7F16\u7A0B\u5B9E\u8DF5","description":"\u5168\u5C40\u89E3\u91CA\u5668\u9501\uFF08GIL\uFF09","date":"2024-11-04T00:00:00.000Z","tags":[{"inline":false,"label":"\u540E\u7AEF","permalink":"/docs-hub/blog/tags/backend","description":"\u540E\u7AEF\u5F00\u53D1\u6280\u672F\u6587\u7AE0"}],"readingTime":3.85,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"python-\u591A\u7EBF\u7A0B\u7F16\u7A0B\u5B9E\u8DF5","title":"Python \u591A\u7EBF\u7A0B\u7F16\u7A0B\u5B9E\u8DF5","authors":["sumingcheng"],"tags":["backend"],"date":"2024-11-04T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u7981\u7528\u5FAE\u8F6F\u62FC\u97F3\u8F93\u5165\u6CD5\u7B80\u4F53\u7E41\u4F53\u70ED\u952E","permalink":"/docs-hub/blog/\u7981\u7528\u5FAE\u8F6F\u62FC\u97F3\u8F93\u5165\u6CD5\u7B80\u4F53\u7E41\u4F53\u70ED\u952E"},"nextItem":{"title":"\u751F\u6210\u81EA\u7B7E\u540D SSL \u8BC1\u4E66","permalink":"/docs-hub/blog/\u751F\u6210\u81EA\u7B7E\u540D-ssl-\u8BC1\u4E66"}}')}}]);