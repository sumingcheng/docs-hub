"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[10793],{48911:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"Web3/IPFS/IPFS\u547d\u4ee4","title":"IPFS \u547d\u4ee4\u8be6\u89e3","description":"ipfs init","source":"@site/docs/Web3/IPFS/3.IPFS\u547d\u4ee4.md","sourceDirName":"Web3/IPFS","slug":"/Web3/IPFS/IPFS\u547d\u4ee4","permalink":"/docs-hub/Web3/IPFS/IPFS\u547d\u4ee4","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Web3/IPFS/3.IPFS\u547d\u4ee4.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733909372000,"sidebarPosition":3,"frontMatter":{},"sidebar":"web3IpfsSidebar","previous":{"title":"IPFS \u4e0e IPNS \u6280\u672f\u8be6\u89e3","permalink":"/docs-hub/Web3/IPFS/IPFS\u4e0eIPNS\u6280\u672f\u8be6\u89e3"},"next":{"title":"IPFS \u4e2d\u7684\u56fa\u5b9a\u548c\u83b7\u53d6\u64cd\u4f5c","permalink":"/docs-hub/Web3/IPFS/IPFS-pin-get"}}');var l=n(74848),d=n(28453);const c={},a="IPFS \u547d\u4ee4\u8be6\u89e3",r={},h=[{value:"ipfs init",id:"ipfs-init",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"ipfs add",id:"ipfs-add",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"ipfs cat",id:"ipfs-cat",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:3},{value:"ipfs ls",id:"ipfs-ls",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:3},{value:"ipfs pin",id:"ipfs-pin",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:3},{value:"ipfs daemon",id:"ipfs-daemon",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:3},{value:"ipfs swarm",id:"ipfs-swarm",level:2},{value:"\u8fde\u63a5\u5230\u53e6\u4e00\u4e2a\u8282\u70b9",id:"\u8fde\u63a5\u5230\u53e6\u4e00\u4e2a\u8282\u70b9",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-6",level:3},{value:"\u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684\u8282\u70b9",id:"\u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684\u8282\u70b9",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-7",level:3},{value:"ipfs config",id:"ipfs-config",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-8",level:3},{value:"ipfs version",id:"ipfs-version",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-9",level:3},{value:"ipfs repo",id:"ipfs-repo",level:2},{value:"\u68c0\u67e5\u4ed3\u5e93\u72b6\u6001",id:"\u68c0\u67e5\u4ed3\u5e93\u72b6\u6001",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-10",level:3},{value:"\u4fee\u590d\u4ed3\u5e93",id:"\u4fee\u590d\u4ed3\u5e93",level:3},{value:"ipfs key",id:"ipfs-key",level:2},{value:"\u521b\u5efa\u65b0\u5bc6\u94a5",id:"\u521b\u5efa\u65b0\u5bc6\u94a5",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-11",level:3},{value:"\u5217\u51fa\u6240\u6709\u5bc6\u94a5",id:"\u5217\u51fa\u6240\u6709\u5bc6\u94a5",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-12",level:3},{value:"ipfs dag",id:"ipfs-dag",level:2},{value:"\u83b7\u53d6 DAG \u8282\u70b9",id:"\u83b7\u53d6-dag-\u8282\u70b9",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-13",level:3},{value:"\u6dfb\u52a0 DAG \u8282\u70b9",id:"\u6dfb\u52a0-dag-\u8282\u70b9",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-14",level:3},{value:"ipfs pin ls",id:"ipfs-pin-ls",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-15",level:3},{value:"ipfs block",id:"ipfs-block",level:2},{value:"\u83b7\u53d6\u6570\u636e\u5757",id:"\u83b7\u53d6\u6570\u636e\u5757",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-16",level:3},{value:"\u5220\u9664\u6570\u636e\u5757",id:"\u5220\u9664\u6570\u636e\u5757",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-17",level:3},{value:"ipfs mount",id:"ipfs-mount",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-18",level:3},{value:"ipfs stats",id:"ipfs-stats",level:2},{value:"\u67e5\u770b\u7f51\u7edc\u7edf\u8ba1",id:"\u67e5\u770b\u7f51\u7edc\u7edf\u8ba1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-19",level:3},{value:"\u67e5\u770b\u4ee3\u7406\u7edf\u8ba1",id:"\u67e5\u770b\u4ee3\u7406\u7edf\u8ba1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-20",level:3},{value:"ipfs config edit",id:"ipfs-config-edit",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-21",level:3},{value:"ipfs log",id:"ipfs-log",level:2},{value:"\u67e5\u770b\u65e5\u5fd7",id:"\u67e5\u770b\u65e5\u5fd7",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-22",level:3},{value:"ipfs version",id:"ipfs-version-1",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-23",level:3},{value:"\u5b9e\u8df5\u4e2d\u7684 IPFS \u547d\u4ee4\u5e94\u7528",id:"\u5b9e\u8df5\u4e2d\u7684-ipfs-\u547d\u4ee4\u5e94\u7528",level:2}];function p(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"ipfs-\u547d\u4ee4\u8be6\u89e3",children:"IPFS \u547d\u4ee4\u8be6\u89e3"})}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-init",children:"ipfs init"}),"\n",(0,l.jsxs)(s.p,{children:["\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684 IPFS \u8282\u70b9\u662f\u4f7f\u7528 IPFS \u7684\u7b2c\u4e00\u6b65\u3002",(0,l.jsx)(s.code,{children:"ipfs init"}),"\u547d\u4ee4\u7528\u4e8e\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a IPFS \u4ed3\u5e93\uff0c\u5e76\u751f\u6210\u5fc5\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u548c\u5bc6\u94a5\u5bf9\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs init\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u6267\u884c\u6b64\u547d\u4ee4\u540e\uff0c\u7cfb\u7edf\u4f1a\u8f93\u51fa\u8282\u70b9\u7684 Peer ID \u548c\u521d\u59cb\u914d\u7f6e\u3002\u521d\u59cb\u5316\u8fc7\u7a0b\u4f1a\u751f\u6210\u4e00\u4e2a\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4f4d\u4e8e",(0,l.jsx)(s.code,{children:"~/.ipfs/config"}),"\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs init\ninitializing IPFS node at /home/user/.ipfs\ngenerating 2048-bit RSA keypair...done\npeer identity: QmExamplePeerID\n"})}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-add",children:"ipfs add"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs add"}),"\u547d\u4ee4\u7528\u4e8e\u5c06\u6587\u4ef6\u6dfb\u52a0\u5230 IPFS \u7f51\u7edc\u3002\u6dfb\u52a0\u6587\u4ef6\u540e\uff0cIPFS \u4f1a\u8fd4\u56de\u6587\u4ef6\u7684\u5185\u5bb9\u6807\u8bc6\u7b26\uff08CID\uff09\uff0c\u8be5 CID \u53ef\u4ee5\u7528\u4e8e\u5728\u7f51\u7edc\u4e2d\u68c0\u7d22\u8be5\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs add <\u6587\u4ef6\u8def\u5f84>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs add example.txt\nadded QmExampleCID example.txt\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u6b64\u547d\u4ee4\u5c06",(0,l.jsx)(s.code,{children:"example.txt"}),"\u6587\u4ef6\u6dfb\u52a0\u5230 IPFS\uff0c\u5e76\u8fd4\u56de\u5176 CID\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5 CID \u5728\u4efb\u4f55 IPFS \u8282\u70b9\u4e0a\u8bbf\u95ee\u8be5\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-cat",children:"ipfs cat"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs cat"}),"\u547d\u4ee4\u7528\u4e8e\u901a\u8fc7 CID \u68c0\u7d22\u548c\u663e\u793a\u6587\u4ef6\u5185\u5bb9\u3002\u8fd9\u4e2a\u547d\u4ee4\u7c7b\u4f3c\u4e8e Unix \u4e2d\u7684",(0,l.jsx)(s.code,{children:"cat"}),"\u547d\u4ee4\uff0c\u4f46\u5b83\u4ece IPFS \u7f51\u7edc\u4e2d\u83b7\u53d6\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs cat <CID>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-2",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs cat QmExampleCID\nHello, IPFS!\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u8be5\u547d\u4ee4\u5c06\u663e\u793a CID \u4e3a",(0,l.jsx)(s.code,{children:"QmExampleCID"}),"\u7684\u6587\u4ef6\u5185\u5bb9\u3002"]}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-ls",children:"ipfs ls"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs ls"}),"\u547d\u4ee4\u7528\u4e8e\u5217\u51fa CID \u5bf9\u5e94\u7684\u5bf9\u8c61\u7684\u5185\u5bb9\u3002\u5982\u679c CID \u6307\u5411\u4e00\u4e2a\u76ee\u5f55\uff0c\u8be5\u547d\u4ee4\u4f1a\u5217\u51fa\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs ls <CID>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-3",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs ls QmExampleDirectoryCID\nQmFile1CID  12345  file1.txt\nQmFile2CID  67890  file2.txt\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u6b64\u547d\u4ee4\u663e\u793a\u4e86\u76ee\u5f55 CID \u4e0b\u5305\u542b\u7684\u6587\u4ef6\u53ca\u5176\u5bf9\u5e94\u7684 CID \u548c\u5927\u5c0f\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-pin",children:"ipfs pin"}),"\n",(0,l.jsxs)(s.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u7279\u5b9a\u7684 CID \u5728\u672c\u5730 IPFS \u8282\u70b9\u4e2d\u88ab\u6c38\u4e45\u4fdd\u5b58\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(s.code,{children:"ipfs pin"}),"\u547d\u4ee4\u8fdb\u884c\u56fa\u5b9a\u3002\u56fa\u5b9a\u7684\u5185\u5bb9\u4e0d\u4f1a\u88ab\u5783\u573e\u56de\u6536\u673a\u5236\u5220\u9664\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs pin add <CID>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-4",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs pin add QmExampleCID\npinning QmExampleCID\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u56fa\u5b9a\u5185\u5bb9\u5bf9\u4e8e\u9700\u8981\u957f\u671f\u4fdd\u5b58\u7684\u91cd\u8981\u6570\u636e\u975e\u5e38\u6709\u7528\uff0c\u907f\u514d\u6570\u636e\u5728\u8282\u70b9\u91cd\u542f\u6216\u6e05\u7406\u65f6\u4e22\u5931\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-daemon",children:"ipfs daemon"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs daemon"}),"\u547d\u4ee4\u7528\u4e8e\u542f\u52a8 IPFS \u5b88\u62a4\u8fdb\u7a0b\u3002\u8fd9\u662f IPFS \u8282\u70b9\u5728\u7f51\u7edc\u4e2d\u8fd0\u884c\u548c\u4e0e\u5176\u4ed6\u8282\u70b9\u901a\u4fe1\u7684\u6838\u5fc3\u670d\u52a1\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs daemon\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-5",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs daemon\nInitializing daemon...\nAPI server listening on /ip4/127.0.0.1/tcp/5001\nGateway server listening on /ip4/127.0.0.1/tcp/8080\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\u540e\uff0c\u8282\u70b9\u5c06\u5f00\u59cb\u8fde\u63a5\u5230 IPFS \u7f51\u7edc\uff0c\u5e76\u53ef\u4ee5\u5904\u7406 API \u8bf7\u6c42\u548c\u7f51\u5173\u8bbf\u95ee\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-swarm",children:"ipfs swarm"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs swarm"}),"\u547d\u4ee4\u7528\u4e8e\u7ba1\u7406\u548c\u67e5\u770b IPFS \u8282\u70b9\u7684\u7f51\u7edc\u8fde\u63a5\u3002\u5e38\u7528\u7684\u5b50\u547d\u4ee4\u5305\u62ec",(0,l.jsx)(s.code,{children:"connect"}),"\u548c",(0,l.jsx)(s.code,{children:"peers"}),"\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u8fde\u63a5\u5230\u53e6\u4e00\u4e2a\u8282\u70b9",children:"\u8fde\u63a5\u5230\u53e6\u4e00\u4e2a\u8282\u70b9"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs swarm connect <\u591a\u5730\u5740>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-6",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs swarm connect /ip4/192.168.1.10/tcp/4001/p2p/QmPeerID\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684\u8282\u70b9",children:"\u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684\u8282\u70b9"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs swarm peers\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-7",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs swarm peers\n/ip4/192.168.1.10/tcp/4001/p2p/QmPeerID\n/ip6/::1/tcp/4001/p2p/QmAnotherPeerID\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u901a\u8fc7",(0,l.jsx)(s.code,{children:"swarm"}),"\u5b50\u547d\u4ee4\uff0c\u7528\u6237\u53ef\u4ee5\u7ba1\u7406\u8282\u70b9\u4e4b\u95f4\u7684\u8fde\u63a5\uff0c\u4f18\u5316\u7f51\u7edc\u6027\u80fd\u548c\u6570\u636e\u4f20\u8f93\u6548\u7387\u3002"]}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-config",children:"ipfs config"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs config"}),"\u547d\u4ee4\u7528\u4e8e\u67e5\u770b\u548c\u4fee\u6539 IPFS \u8282\u70b9\u7684\u914d\u7f6e\u3002\u7528\u6237\u53ef\u4ee5\u8c03\u6574\u8282\u70b9\u7684\u884c\u4e3a\u548c\u53c2\u6570\uff0c\u4ee5\u6ee1\u8db3\u7279\u5b9a\u9700\u6c42\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs config <\u952e> <\u503c>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-8",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.p,{children:"\u67e5\u770b\u5f53\u524d\u7684\u914d\u7f6e\uff1a"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs config show\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u4fee\u6539 API \u5730\u5740\uff1a"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs config Addresses.API /ip4/127.0.0.1/tcp/5002\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u8fc7\u8c03\u6574\u914d\u7f6e\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8282\u70b9\u7684\u7f51\u7edc\u8bbe\u7f6e\u3001\u5b89\u5168\u9009\u9879\u548c\u5176\u4ed6\u53c2\u6570\uff0c\u63d0\u5347 IPFS \u7684\u4f7f\u7528\u4f53\u9a8c\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-version",children:"ipfs version"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs version"}),"\u547d\u4ee4\u7528\u4e8e\u663e\u793a\u5f53\u524d\u5b89\u88c5\u7684 IPFS \u7248\u672c\u4fe1\u606f\u3002\u8fd9\u5bf9\u4e8e\u786e\u4fdd\u8282\u70b9\u4f7f\u7528\u6700\u65b0\u7248\u672c\u548c\u8fdb\u884c\u6545\u969c\u6392\u9664\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs version\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-9",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs version\nipfs version 0.8.0\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u4e86\u89e3 IPFS \u7248\u672c\u6709\u52a9\u4e8e\u7528\u6237\u8ddf\u8e2a\u66f4\u65b0\u548c\u517c\u5bb9\u6027\uff0c\u786e\u4fdd\u8282\u70b9\u8fd0\u884c\u7a33\u5b9a\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-repo",children:"ipfs repo"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs repo"}),"\u547d\u4ee4\u7528\u4e8e\u7ba1\u7406 IPFS \u4ed3\u5e93\uff0c\u5305\u62ec\u68c0\u67e5\u3001\u4fee\u590d\u548c\u5907\u4efd\u4ed3\u5e93\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u68c0\u67e5\u4ed3\u5e93\u72b6\u6001",children:"\u68c0\u67e5\u4ed3\u5e93\u72b6\u6001"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs repo stat\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-10",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs repo stat\nRepo:         /home/user/.ipfs\nVersion:      10\nStorageMax:   10 GiB\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u4fee\u590d\u4ed3\u5e93",children:"\u4fee\u590d\u4ed3\u5e93"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs repo repair\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u6b64\u547d\u4ee4\u5728\u4ed3\u5e93\u51fa\u73b0\u95ee\u9898\u65f6\u5c1d\u8bd5\u4fee\u590d\u6570\u636e\uff0c\u786e\u4fdd\u8282\u70b9\u7684\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-key",children:"ipfs key"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs key"}),"\u547d\u4ee4\u7528\u4e8e\u7ba1\u7406 IPNS \u5bc6\u94a5\u3002\u901a\u8fc7\u521b\u5efa\u548c\u7ba1\u7406\u5bc6\u94a5\uff0c\u7528\u6237\u53ef\u4ee5\u5728 IPFS \u7f51\u7edc\u4e2d\u53d1\u5e03\u548c\u66f4\u65b0\u5185\u5bb9\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u521b\u5efa\u65b0\u5bc6\u94a5",children:"\u521b\u5efa\u65b0\u5bc6\u94a5"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs key gen <\u540d\u79f0> [\u9009\u9879]\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-11",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs key gen myKey\ngenerating RSA keypair...done\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u5217\u51fa\u6240\u6709\u5bc6\u94a5",children:"\u5217\u51fa\u6240\u6709\u5bc6\u94a5"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs key list\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-12",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs key list\nmyKey\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u8fc7\u7ba1\u7406\u5bc6\u94a5\uff0c\u7528\u6237\u53ef\u4ee5\u5b9e\u73b0\u5185\u5bb9\u7684\u5b89\u5168\u53d1\u5e03\u548c\u66f4\u65b0\uff0c\u63d0\u5347 IPFS \u7684\u5e94\u7528\u7075\u6d3b\u6027\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-dag",children:"ipfs dag"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs dag"}),"\u547d\u4ee4\u7528\u4e8e\u64cd\u4f5c IPFS \u4e2d\u7684\u6709\u5411\u65e0\u73af\u56fe\uff08DAG\uff09\u6570\u636e\u7ed3\u6784\u3002\u5b83\u652f\u6301\u6dfb\u52a0\u3001\u83b7\u53d6\u548c\u4fee\u6539 DAG \u8282\u70b9\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u83b7\u53d6-dag-\u8282\u70b9",children:"\u83b7\u53d6 DAG \u8282\u70b9"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs dag get <CID>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-13",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'$ ipfs dag get QmDAGCID\n{\n  "name": "example",\n  "value": 123\n}\n'})}),"\n",(0,l.jsx)(s.h3,{id:"\u6dfb\u52a0-dag-\u8282\u70b9",children:"\u6dfb\u52a0 DAG \u8282\u70b9"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs dag put <\u6587\u4ef6>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-14",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs dag put example.json\nadded QmNewDAGCID\n"})}),"\n",(0,l.jsx)(s.p,{children:"DAG \u64cd\u4f5c\u5bf9\u4e8e\u6784\u5efa\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\u548c\u5e94\u7528\u975e\u5e38\u91cd\u8981\uff0c\u63d0\u4f9b\u4e86\u7075\u6d3b\u7684\u6570\u636e\u7ba1\u7406\u65b9\u5f0f\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-pin-ls",children:"ipfs pin ls"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs pin ls"}),"\u547d\u4ee4\u7528\u4e8e\u5217\u51fa\u5f53\u524d\u8282\u70b9\u56fa\u5b9a\u7684\u6240\u6709 CID\u3002\u8fd9\u6709\u52a9\u4e8e\u7528\u6237\u4e86\u89e3\u54ea\u4e9b\u5185\u5bb9\u88ab\u4fdd\u5b58\u5728\u672c\u5730\uff0c\u907f\u514d\u6570\u636e\u4e22\u5931\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs pin ls\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-15",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs pin ls\nQmExampleCID\nQmAnotherCID\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u8fc7\u5b9a\u671f\u67e5\u770b\u56fa\u5b9a\u7684\u5185\u5bb9\uff0c\u7528\u6237\u53ef\u4ee5\u6709\u6548\u7ba1\u7406\u5b58\u50a8\u8d44\u6e90\uff0c\u786e\u4fdd\u91cd\u8981\u6570\u636e\u7684\u6301\u4e45\u6027\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-block",children:"ipfs block"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs block"}),"\u547d\u4ee4\u7528\u4e8e\u76f4\u63a5\u64cd\u4f5c IPFS \u4e2d\u7684\u6570\u636e\u5757\u3002\u5b83\u652f\u6301\u6dfb\u52a0\u3001\u83b7\u53d6\u548c\u5220\u9664\u5757\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u83b7\u53d6\u6570\u636e\u5757",children:"\u83b7\u53d6\u6570\u636e\u5757"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs block get <CID>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-16",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'$ ipfs block get QmBlockCID\n{"data":"example data"}\n'})}),"\n",(0,l.jsx)(s.h3,{id:"\u5220\u9664\u6570\u636e\u5757",children:"\u5220\u9664\u6570\u636e\u5757"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs block rm <CID>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-17",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs block rm QmBlockCID\nremoved QmBlockCID\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u5757\u64cd\u4f5c\u9002\u7528\u4e8e\u9700\u8981\u4f4e\u7ea7\u6570\u636e\u7ba1\u7406\u7684\u9ad8\u7ea7\u7528\u6237\uff0c\u63d0\u4f9b\u4e86\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-mount",children:"ipfs mount"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs mount"}),"\u547d\u4ee4\u7528\u4e8e\u5c06 IPFS \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\u5230\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u3002\u8fd9\u6837\uff0c\u7528\u6237\u53ef\u4ee5\u50cf\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\u4e00\u6837\u8bbf\u95ee IPFS \u5185\u5bb9\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs mount <\u6302\u8f7d\u70b9>\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-18",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs mount /mnt/ipfs\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u6302\u8f7d\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,l.jsx)(s.code,{children:"/mnt/ipfs"}),"\u76ee\u5f55\u8bbf\u95ee IPFS \u7f51\u7edc\u4e2d\u7684\u5185\u5bb9\uff0c\u7b80\u5316\u4e86\u6570\u636e\u7684\u4ea4\u4e92\u548c\u7ba1\u7406\u3002"]}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-stats",children:"ipfs stats"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs stats"}),"\u547d\u4ee4\u7528\u4e8e\u76d1\u63a7 IPFS \u8282\u70b9\u7684\u6027\u80fd\u548c\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002\u5b83\u63d0\u4f9b\u4e86\u5b9e\u65f6\u7684\u7edf\u8ba1\u6570\u636e\uff0c\u6709\u52a9\u4e8e\u4f18\u5316\u8282\u70b9\u914d\u7f6e\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u67e5\u770b\u7f51\u7edc\u7edf\u8ba1",children:"\u67e5\u770b\u7f51\u7edc\u7edf\u8ba1"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs stats bw\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-19",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs stats bw\nDownload: 10 MB/s\nUpload: 5 MB/s\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u67e5\u770b\u4ee3\u7406\u7edf\u8ba1",children:"\u67e5\u770b\u4ee3\u7406\u7edf\u8ba1"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs stats repo\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-20",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs stats repo\nRepo size: 2.5 GB\nNum objects: 15000\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u8fc7\u76d1\u63a7\u7edf\u8ba1\u6570\u636e\uff0c\u7528\u6237\u53ef\u4ee5\u53ca\u65f6\u53d1\u73b0\u548c\u89e3\u51b3\u6027\u80fd\u74f6\u9888\uff0c\u63d0\u5347 IPFS \u8282\u70b9\u7684\u8fd0\u884c\u6548\u7387\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-config-edit",children:"ipfs config edit"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs config edit"}),"\u547d\u4ee4\u7528\u4e8e\u5728\u9ed8\u8ba4\u7f16\u8f91\u5668\u4e2d\u6253\u5f00 IPFS \u914d\u7f6e\u6587\u4ef6\uff0c\u4fbf\u4e8e\u7528\u6237\u624b\u52a8\u4fee\u6539\u914d\u7f6e\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs config edit\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-21",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs config edit\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u6b64\u547d\u4ee4\u4f1a\u6253\u5f00\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u8c03\u6574\u7f51\u7edc\u8bbe\u7f6e\u3001\u5b89\u5168\u9009\u9879\u548c\u5176\u4ed6\u53c2\u6570\uff0c\u5b9a\u5236 IPFS \u8282\u70b9\u7684\u884c\u4e3a\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-log",children:"ipfs log"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs log"}),"\u547d\u4ee4\u7528\u4e8e\u67e5\u770b\u548c\u7ba1\u7406 IPFS \u5b88\u62a4\u8fdb\u7a0b\u7684\u65e5\u5fd7\u3002\u65e5\u5fd7\u8bb0\u5f55\u4e86\u8282\u70b9\u7684\u8fd0\u884c\u72b6\u6001\u548c\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u4fbf\u4e8e\u6545\u969c\u6392\u9664\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u67e5\u770b\u65e5\u5fd7",children:"\u67e5\u770b\u65e5\u5fd7"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs log tail\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-22",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs log tail\n2024-04-27T12:00:00Z Initialized IPFS node\n2024-04-27T12:05:00Z Added file example.txt with CID QmExampleCID\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u8fc7\u67e5\u770b\u65e5\u5fd7\uff0c\u7528\u6237\u53ef\u4ee5\u4e86\u89e3\u8282\u70b9\u7684\u6d3b\u52a8\u60c5\u51b5\uff0c\u5feb\u901f\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"ipfs-version-1",children:"ipfs version"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ipfs version"}),"\u547d\u4ee4\u7528\u4e8e\u663e\u793a\u5f53\u524d\u5b89\u88c5\u7684 IPFS \u7248\u672c\u4fe1\u606f\uff0c\u786e\u4fdd\u8282\u70b9\u4f7f\u7528\u7684\u662f\u6700\u65b0\u7248\u672c\uff0c\u5e76\u6709\u52a9\u4e8e\u517c\u5bb9\u6027\u68c0\u67e5\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"ipfs version\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b-23",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ ipfs version\nipfs version 0.12.2\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u5b9a\u671f\u68c0\u67e5 IPFS \u7248\u672c\uff0c\u6709\u52a9\u4e8e\u83b7\u53d6\u6700\u65b0\u529f\u80fd\u548c\u5b89\u5168\u4fee\u590d\uff0c\u4fdd\u969c\u8282\u70b9\u7684\u7a33\u5b9a\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"\u5b9e\u8df5\u4e2d\u7684-ipfs-\u547d\u4ee4\u5e94\u7528",children:"\u5b9e\u8df5\u4e2d\u7684 IPFS \u547d\u4ee4\u5e94\u7528"}),"\n",(0,l.jsxs)(s.p,{children:["\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u719f\u7ec3\u638c\u63e1 IPFS \u547d\u4ee4\u80fd\u591f\u663e\u8457\u63d0\u5347\u6570\u636e\u7ba1\u7406\u548c\u5206\u53d1\u7684\u6548\u7387\u3002\u4f8b\u5982\uff0c\u90e8\u7f72\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u5185\u5bb9\u7ba1\u7406\u7cfb\u7edf\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(s.code,{children:"ipfs add"}),"\u547d\u4ee4\u4e0a\u4f20\u5185\u5bb9\uff0c\u901a\u8fc7",(0,l.jsx)(s.code,{children:"ipfs pin"}),"\u786e\u4fdd\u6570\u636e\u6301\u4e45\u5b58\u50a8\uff0c\u5e76\u5229\u7528",(0,l.jsx)(s.code,{children:"ipfs daemon"}),"\u4fdd\u6301\u8282\u70b9\u5728\u7ebf\u3002\u540c\u65f6\uff0c\u7ed3\u5408",(0,l.jsx)(s.code,{children:"ipfs name publish"}),"\u548c",(0,l.jsx)(s.code,{children:"ipfs key"}),"\u547d\u4ee4\uff0c\u5b9e\u73b0\u5185\u5bb9\u7684\u52a8\u6001\u66f4\u65b0\u548c\u5b89\u5168\u7ba1\u7406\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"# \u542f\u52a8IPFS\u5b88\u62a4\u8fdb\u7a0b\nipfs daemon\n\n# \u6dfb\u52a0\u6587\u4ef6\u5230IPFS\nipfs add blog-post.md\n\n# \u56fa\u5b9a\u6587\u4ef6\u4ee5\u9632\u6b62\u88ab\u5783\u573e\u56de\u6536\nipfs pin add QmBlogPostCID\n\n# \u53d1\u5e03\u5230IPNS\nipfs name publish QmBlogPostCID\n"})})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>a});var i=n(96540);const l={},d=i.createContext(l);function c(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);