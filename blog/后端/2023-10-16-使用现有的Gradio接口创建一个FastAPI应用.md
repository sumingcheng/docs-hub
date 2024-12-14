---
authors: sumingcheng
---
# 使用现有的Gradio接口创建一个FastAPI应用



 **Link:** [https://zhuanlan.zhihu.com/p/661637772]



**确保已经安装了**

```
pip install fastapi gradio uvicorn
```

**创建你的Gradio和FastAPI应用**

```
import gradio as gr
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
import uvicorn

# 定义你的模型功能
def model_function(input_text: str):
    text_length = len(input_text)
    return f"The text has {text_length} characters."

# 创建你的Gradio接口
gradio_iface = gr.Interface(fn=model_function, inputs="text", outputs="text")

# 创建你的FastAPI应用
app = FastAPI()

@app.get("/", response_class=HTMLResponse)
async def read_root():
    # 返回 Gradio 界面的 HTML
    return gradio_iface._get_html()

@app.get("/predict/")
def predict(input_text: str):
    # 直接调用Gradio接口的模型功能
    return {"result": gradio_iface.process({"text": input_text})["text"]}

# 如果是直接运行此脚本，启动Uvicorn服务器
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

现在，你可以运行此脚本，然后访问 `http://localhost:8000` 来查看和交互 Gradio 界面，或者访问 `http://localhost:8000/docs` 来查看和交互 FastAPI 自动生成的 Swagger 文档。  
  
  


