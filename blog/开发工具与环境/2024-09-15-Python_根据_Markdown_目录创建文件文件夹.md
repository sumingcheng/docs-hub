---
slug: python-根据-markdown-目录创建文件文件夹
title: Python 根据 Markdown 目录创建文件文件夹
authors: [sumingcheng]
tags: [dev-tools]
date: 2024-09-15
---

# Python 根据 Markdown 目录创建文件/文件夹

**将脚本保存为 `create_dirs_from_md.py`。**

**将您的目录结构粘贴到 `md_structure` 变量中。**

**在终端运行脚本：**`python3 create_dirs_from_md.py`

![17adf28490d266622875f6dd7c4cbabe](../image/17adf28490d266622875f6dd7c4cbabe.jpg)

创建成功

```
import os
import re

md_structure = '''
- cmd/
  - main.go
- internal/
  - domain/
    - model/
      - order.go
    - repository/
      - order_repository.go
  - application/
    - service/
      - order_service.go
  - infrastructure/
    - repository/
      - order_repository_impl.go
    - db/
      - database.go
  - interfaces/
    - handler/
      - order_handler.go
  - di/
    - wire.go
    - wire_gen.go
'''

def parse_md_structure(md_text):
    lines = md_text.strip().split('\n')
    stack = []
    paths = []
    for line in lines:
        # 计算缩进级别
        indent = len(line) - len(line.lstrip(' '))
        level = indent // 2  # 每两个空格一个级别

        # 提取名称，去除前面的符号和空格
        name = line.strip().lstrip('-').strip()

        # 更新堆栈
        while len(stack) > level:
            stack.pop()
        stack.append(name)

        # 构建路径
        path = os.path.join(*stack)
        paths.append(path)

    return paths

def create_dirs_and_files(paths):
    for path in paths:
        if path.endswith('/'):
            # 是目录
            dir_path = path.rstrip('/')
            os.makedirs(dir_path, exist_ok=True)
            print(f"Created directory: {dir_path}")
        elif '.' in os.path.basename(path):
            # 是文件
            dir_name = os.path.dirname(path)
            if dir_name and not os.path.exists(dir_name):
                os.makedirs(dir_name, exist_ok=True)
                print(f"Created directory: {dir_name}")
            with open(path, 'w') as f:
                pass
            print(f"Created file: {path}")
        else:
            # 是目录（没有斜杠，但也不是文件）
            os.makedirs(path, exist_ok=True)
            print(f"Created directory: {path}")

if __name__ == "__main__":
    paths = parse_md_structure(md_structure)
    create_dirs_and_files(paths)
```
