"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([[96988],{98175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Backend/Python/\u57fa\u7840/\u5e38\u7528\u6807\u51c6\u5e93","title":"Python \u5e38\u7528\u6807\u51c6\u5e93\u6307\u5357","description":"\u65f6\u95f4\u5904\u7406","source":"@site/docs/Backend/Python/\u57fa\u7840/019.\u5e38\u7528\u6807\u51c6\u5e93.md","sourceDirName":"Backend/Python/\u57fa\u7840","slug":"/Backend/Python/\u57fa\u7840/\u5e38\u7528\u6807\u51c6\u5e93","permalink":"/docs-hub/docs/Backend/Python/\u57fa\u7840/\u5e38\u7528\u6807\u51c6\u5e93","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Python/\u57fa\u7840/019.\u5e38\u7528\u6807\u51c6\u5e93.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1733823104000,"sidebarPosition":19,"frontMatter":{},"sidebar":"pythonSidebar","previous":{"title":"Python \u4e4b\u7985","permalink":"/docs-hub/docs/Backend/Python/\u57fa\u7840/Python\u4e4b\u7985\u7684\u89e3\u8bfb"},"next":{"title":"\u7f16\u7801\u548c\u5b57\u7b26\u96c6","permalink":"/docs-hub/docs/Backend/Python/\u57fa\u7840/\u7f16\u7801\u548c\u5b57\u7b26\u96c6"}}');var a=t(74848),i=t(28453);const d={},s="Python \u5e38\u7528\u6807\u51c6\u5e93\u6307\u5357",o={},l=[{value:"\u65f6\u95f4\u5904\u7406",id:"\u65f6\u95f4\u5904\u7406",level:2},{value:"\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c",id:"\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c",level:2},{value:"\u6570\u636e\u5e8f\u5217\u5316",id:"\u6570\u636e\u5e8f\u5217\u5316",level:2},{value:"CSV \u6587\u4ef6\u5904\u7406",id:"csv-\u6587\u4ef6\u5904\u7406",level:2},{value:"\u968f\u673a\u6570\u751f\u6210",id:"\u968f\u673a\u6570\u751f\u6210",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:2},{value:"\u65e5\u5fd7\u8bb0\u5f55",id:"\u65e5\u5fd7\u8bb0\u5f55",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"python-\u5e38\u7528\u6807\u51c6\u5e93\u6307\u5357",children:"Python \u5e38\u7528\u6807\u51c6\u5e93\u6307\u5357"})}),"\n",(0,a.jsx)(n.h2,{id:"\u65f6\u95f4\u5904\u7406",children:"\u65f6\u95f4\u5904\u7406"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528 datetime \u5904\u7406\u65e5\u671f\u548c\u65f6\u95f4\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from datetime import datetime, timedelta\n\ndef date_operations():\n    current_time = datetime.now()\n    tomorrow = current_time + timedelta(days=1)\n    formatted_date = current_time.strftime("%Y-%m-%d %H:%M:%S")\n\n    return {\n        "current": current_time,\n        "tomorrow": tomorrow,\n        "formatted": formatted_date\n    }\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c",children:"\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.p,{children:"\u7ed3\u5408 os \u548c pathlib \u5904\u7406\u6587\u4ef6\u7cfb\u7edf\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\nfrom pathlib import Path\n\ndef file_operations(directory):\n    current_dir = Path(directory)\n\n    for file_path in current_dir.glob("*.txt"):\n        file_info = {\n            "name": file_path.name,\n            "size": os.path.getsize(file_path),\n            "modified": datetime.fromtimestamp(\n                os.path.getmtime(file_path)\n            )\n        }\n        yield file_info\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u6570\u636e\u5e8f\u5217\u5316",children:"\u6570\u636e\u5e8f\u5217\u5316"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528 json \u5904\u7406\u6570\u636e\u5e8f\u5217\u5316\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import json\n\ndef handle_json_data(data):\n    serialized = json.dumps(data, indent=2)\n    deserialized = json.loads(serialized)\n\n    with open("data.json", "w") as f:\n        json.dump(data, f, indent=2)\n\n    return serialized, deserialized\n'})}),"\n",(0,a.jsx)(n.h2,{id:"csv-\u6587\u4ef6\u5904\u7406",children:"CSV \u6587\u4ef6\u5904\u7406"}),"\n",(0,a.jsx)(n.p,{children:"\u5904\u7406 CSV \u683c\u5f0f\u6570\u636e\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import csv\n\ndef process_csv_file(filename):\n    with open(filename, "r", newline="") as f:\n        reader = csv.DictReader(f)\n        data = list(reader)\n\n    fieldnames = ["name", "age", "city"]\n    with open("output.csv", "w", newline="") as f:\n        writer = csv.DictWriter(f, fieldnames=fieldnames)\n        writer.writeheader()\n        writer.writerows(data)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u968f\u673a\u6570\u751f\u6210",children:"\u968f\u673a\u6570\u751f\u6210"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528 random \u751f\u6210\u968f\u673a\u6570\u636e\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import random\n\ndef generate_random_data(size):\n    numbers = random.sample(range(1, 100), size)\n    choice = random.choice(["A", "B", "C"])\n    shuffled = list(range(size))\n    random.shuffle(shuffled)\n\n    return {\n        "numbers": numbers,\n        "choice": choice,\n        "shuffled": shuffled\n    }\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u547d\u4ee4\u884c\u53c2\u6570",children:"\u547d\u4ee4\u884c\u53c2\u6570"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528 argparse \u5904\u7406\u547d\u4ee4\u884c\u53c2\u6570\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import argparse\n\ndef setup_argument_parser():\n    parser = argparse.ArgumentParser(\n        description="\u5904\u7406\u547d\u4ee4\u884c\u53c2\u6570\u793a\u4f8b"\n    )\n\n    parser.add_argument(\n        "--input",\n        required=True,\n        help="\u8f93\u5165\u6587\u4ef6\u8def\u5f84"\n    )\n\n    parser.add_argument(\n        "--output",\n        default="output.txt",\n        help="\u8f93\u51fa\u6587\u4ef6\u8def\u5f84"\n    )\n\n    return parser\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u65e5\u5fd7\u8bb0\u5f55",children:"\u65e5\u5fd7\u8bb0\u5f55"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528 logging \u8bb0\u5f55\u7a0b\u5e8f\u65e5\u5fd7\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import logging\n\ndef setup_logger():\n    logging.basicConfig(\n        filename="app.log",\n        level=logging.INFO,\n        format="%(asctime)s [%(levelname)s] %(message)s",\n        datefmt="%Y-%m-%d %H:%M:%S"\n    )\n\n    logger = logging.getLogger(__name__)\n    return logger\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var r=t(96540);const a={},i=r.createContext(a);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);