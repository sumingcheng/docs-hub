---
slug: gradio-配合-fastapi-搭建交互式web应用与rest-api服务
title: Gradio 配合 FastAPI 搭建交互式Web应用与REST API服务
authors: [sumingcheng]
tags: [backend]
date: 2023-10-18
---

# Gradio 配合 FastAPI 搭建交互式Web应用与REST API服务



 **Link:** [https://zhuanlan.zhihu.com/p/662028863]

## 虚拟环境准备  

进入项目文件夹，创建虚拟环境

```
python -m venv venv
```

激活环境

```
source venv/bin/activate  # 在Windows上使用 venv\Scripts\activate.bat
```

安装依赖

```
pip install gradio fastapi uvicorn
```
## 编写核心代码  

在一个Python文件（例如`core_logic.py`）中编写你的核心逻辑。

```
def login(username, password):
    if username == "admin" and password == "123123":
        return "Login successful!"
    else:
        return "Login failed. Please check your credentials."
```
## 使用 gradio 创建页面  

在另一个Python文件（例如`gradio_app.py`）中创建Gradio界面。

```
import gradio as gr
from core_logic import login

iface = gr.Interface(
    fn=login,
    inputs=["text", "password"],
    outputs="text"
)

if __name__ == "__main__":
    iface.launch()
```
## 创建 FastAPI 应用  

在另一个Python文件（例如`fastapi_app.py`）中创建FastAPI应用

```
from fastapi import FastAPI
from pydantic import BaseModel
from core_logic import login

app = FastAPI()

class LoginData(BaseModel):
    username: str
    password: str

@app.post("/login/")
async def api_login(data: LoginData):
    return {"message": login(data.username, data.password)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=7861)

```
### 运行应用  

为Gradio界面运行`gradio_app.py`，并通过浏览器访问Gradio界面。

```
python gradio_app.py 
```

为FastAPI应用运行`fastapi_app.py`，并通过浏览器或API客户端访问FastAPI提供的接口。

```
python fastapi_app.py 
```

  


PS：这只是一个模板，如果想继续添加UI界面或者是接口需要你自己继续开发