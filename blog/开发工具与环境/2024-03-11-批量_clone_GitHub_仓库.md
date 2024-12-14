---
authors: sumingcheng
---
# 批量 clone GitHub 仓库



 **Link:** [https://zhuanlan.zhihu.com/p/686457220]

### 获取仓库列表，保存在当前目录下  

`curl https://api.github.com/users/替换为你的用户名/repos?per_page=100 > repos.json`

### 编写 python 脚本  
```
import json
import subprocess

# 加载仓库列表
with open('repos.json', 'r', encoding='utf-8') as file:
    repos = json.load(file)

# 遍历每个仓库
for repo in repos:
    # 获取仓库的克隆URL
    clone_url = repo['clone_url']
    # 执行克隆操作
    print(f"Cloning {clone_url}...")
    subprocess.run(['git', 'clone', clone_url])
```

python [http://xx.py](http://xx.py) 运行这个脚本，clone 所有仓库

