---
slug: python-typeerror-asyncconnectionpool--init---got-an-unexpected-keyword-argument-socket-options
title: Python TypeError AsyncConnectionPool  init   got an unexpected keyword argument socket options
authors: [sumingcheng]
tags: [backend]
date: 2024-03-18
---

# Python: TypeError: AsyncConnectionPool.**init**() got an unexpected keyword argument 'socket_options

stable diffusion 启动遇到错误

```
(venv) PS D:\Desktop\Private\stable-diffusion-webui-windows> .\webui-user.bat
venv "D:\Desktop\Private\stable-diffusion-webui-windows\venv\Scripts\Python.exe"
Python 3.10.6 (tags/v3.10.6:9c7b4bd, Aug  1 2022, 21:53:49) [MSC v.1932 64 bit (AMD64)]
Version: v1.6.0-14-g27096813
Commit hash: 2709681331de6031ee9dc80abe218d336ad4c6ee
Installing requirements
Launching Web UI with arguments: --api --xformers --opt-sdp-no-mem-attention --enable-insecure-extension-access --listen
Traceback (most recent call last):
  File "D:\Desktop\Private\stable-diffusion-webui-windows\launch.py", line 48, in <module>
    main()
  File "D:\Desktop\Private\stable-diffusion-webui-windows\launch.py", line 44, in main
    start()
  File "D:\Desktop\Private\stable-diffusion-webui-windows\modules\launch_utils.py", line 432, in start
    import webui
  File "D:\Desktop\Private\stable-diffusion-webui-windows\webui.py", line 13, in <module>
    initialize.imports()
  File "D:\Desktop\Private\stable-diffusion-webui-windows\modules\initialize.py", line 21, in imports
    import gradio  # noqa: F401
  File "D:\Desktop\Private\stable-diffusion-webui-windows\venv\lib\site-packages\gradio\__init__.py", line 3, in <module>
    import gradio.components as components
  File "D:\Desktop\Private\stable-diffusion-webui-windows\venv\lib\site-packages\gradio\components\__init__.py", line 1, in <module>
    from gradio.components.annotated_image import AnnotatedImage
  File "D:\Desktop\Private\stable-diffusion-webui-windows\venv\lib\site-packages\gradio\components\annotated_image.py", line 12, in <module>
    from gradio import utils
  File "D:\Desktop\Private\stable-diffusion-webui-windows\venv\lib\site-packages\gradio\utils.py", line 353, in <module>
    class AsyncRequest:
  File "D:\Desktop\Private\stable-diffusion-webui-windows\venv\lib\site-packages\gradio\utils.py", line 372, in AsyncRequest
    client = httpx.AsyncClient()
  File "D:\Desktop\Private\stable-diffusion-webui-windows\venv\lib\site-packages\httpx\_client.py", line 1397, in __init__
    self._transport = self._init_transport(
  File "D:\Desktop\Private\stable-diffusion-webui-windows\venv\lib\site-packages\httpx\_client.py", line 1445, in _init_transport
    return AsyncHTTPTransport(
  File "D:\Desktop\Private\stable-diffusion-webui-windows\venv\lib\site-packages\httpx\_transports\default.py", line 275, in __init__
    self._pool = httpcore.AsyncConnectionPool(
TypeError: AsyncConnectionPool.__init__() got an unexpected keyword argument 'socket_options'
```

`TypeError: AsyncConnectionPool.__init__() got an unexpected keyword argument 'socket_options'` 错误，从多个讨论和解决方案中，一个常见的建议是将 `httpx` 库降级到 0.24.1 或更早的版本。这个错误通常是由于 `httpx` 新版本（大于 0.24.1）中引入了一个不兼容的变更所导致的。根据 GitHub 上的用户反馈和讨论，降级 `httpx` 可以解决这个问题

[https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/13840](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/13840)### 降级版本

```
pip install httpx==0.24.1
```

重新启动
