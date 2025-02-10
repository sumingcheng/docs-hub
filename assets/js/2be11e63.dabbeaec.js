"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["64558"],{34413:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var o=t(85788),s=t(85893),a=t(50065);let i={slug:"fastgpt47--chatglm3-6b--m3e-\u672C\u5730\u90E8\u7F72",title:"FastGPT47  chatglm3-6b  m3e \u672C\u5730\u90E8\u7F72",authors:["sumingcheng"],tags:["dev-tools"],date:new Date("2024-09-25T00:00:00.000Z")},r="FastGPT4.7 + chatglm3-6b + m3e \u672C\u5730\u90E8\u7F72",l={authorsImageUrls:[void 0]},c=[{value:"\u5B89\u88C5 Docker \u548C docker-compose",id:"\u5B89\u88C5-docker-\u548C-docker-compose",level:2},{value:"\u5B89\u88C5\u5E76\u542F\u52A8",id:"\u5B89\u88C5\u5E76\u542F\u52A8",level:2},{value:"\u670D\u52A1\u8BF4\u660E",id:"\u670D\u52A1\u8BF4\u660E",level:3},{value:"\u8FD0\u884C chatglm3-6b",id:"\u8FD0\u884C-chatglm3-6b",level:2},{value:"api_server.py",id:"api_serverpy",level:3},{value:"\u8FD0\u884C\u6210\u529F\u540E",id:"\u8FD0\u884C\u6210\u529F\u540E",level:3},{value:"\u914D\u7F6E OneAPI",id:"\u914D\u7F6E-oneapi",level:2},{value:"\u6211\u7684 M3E \u5728 WSL \u91CC\u9762",id:"\u6211\u7684-m3e-\u5728-wsl-\u91CC\u9762",level:3},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:3},{value:"\u53C2\u8003\u94FE\u63A5",id:"\u53C2\u8003\u94FE\u63A5",level:3}];function d(e){let n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u5B89\u88C5-docker-\u548C-docker-compose",children:"\u5B89\u88C5 Docker \u548C docker-compose"}),"\n",(0,s.jsx)(n.p,{children:"Windows \u53EF\u4EE5\u4F7F\u7528 wsl"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# \u5B89\u88C5 Docker\ncurl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun\nsystemctl enable --now docker\n# \u5B89\u88C5 docker-compose\ncurl -L https://github.com/docker/compose/releases/download/v2.20.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n# \u9A8C\u8BC1\u5B89\u88C5\ndocker -v\ndocker-compose -v\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5B89\u88C5\u5E76\u542F\u52A8",children:"\u5B89\u88C5\u5E76\u542F\u52A8"}),"\n",(0,s.jsx)(n.p,{children:"docker-compose.yml \u548C config.json \u8FD9\u4E24\u4E2A\u6587\u4EF6\u5F88\u91CD\u8981\uFF0C\u5B89\u88C5\u540E\u4E0D\u8981\u5220\u6389~"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mkdir fastgpt\ncd fastgpt\ncurl -O https://raw.githubusercontent.com/labring/FastGPT/main/files/deploy/fastgpt/docker-compose.yml\ncurl -O https://raw.githubusercontent.com/labring/FastGPT/main/projects/app/data/config.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6CE8\u610F\u542F\u52A8\u7684\u65F6\u5019\u8981\u5728 fastgpt \u8FD9\u4E2A\u76EE\u5F55"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# \u542F\u52A8\u5BB9\u5668\ndocker-compose up -d\n# \u7B49\u5F8510s\uFF0COneAPI\u7B2C\u4E00\u6B21\u603B\u662F\u8981\u91CD\u542F\u51E0\u6B21\u624D\u80FD\u8FDE\u4E0AMysql\nsleep 10\n# \u91CD\u542F\u4E00\u6B21oneapi(\u7531\u4E8EOneAPI\u7684\u9ED8\u8BA4Key\u6709\u70B9\u95EE\u9898\uFF0C\u4E0D\u91CD\u542F\u7684\u8BDD\u4F1A\u63D0\u793A\u627E\u4E0D\u5230\u6E20\u9053\uFF0C\u4E34\u65F6\u624B\u52A8\u91CD\u542F\u4E00\u6B21\u89E3\u51B3\uFF0C\u7B49\u5F85\u4F5C\u8005\u4FEE\u590D)\ndocker restart oneapi\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"5b6581830daeef63ab9688aa590e002a",src:t(64382).Z+"",width:"1440",height:"159"})}),"\n",(0,s.jsx)(n.p,{children:"\u5B89\u88C5\u6210\u529F\u540E\u53EF\u4EE5\u770B\u5230\u7EA2\u6846\u91CC\u7684\u5BB9\u5668\uFF0Cm3e \u540E\u7EED\u518D\u8BF4"}),"\n",(0,s.jsx)(n.h3,{id:"\u670D\u52A1\u8BF4\u660E",children:"\u670D\u52A1\u8BF4\u660E"}),"\n",(0,s.jsx)(n.p,{children:"OneAPI\uFF1A\u63D0\u4F9B\u6807\u51C6\u7684 API \u683C\u5F0F\uFF0C\u540E\u7EED M3E \u548C GLM \u90FD\u8981\u5BF9\u63A5\u5230\u8FD9\u91CC\u9762"}),"\n",(0,s.jsx)(n.p,{children:"FastGPT\uFF1ANextJS \u505A\u7684\uFF0C\u63D0\u4F9B\u524D\u7AEF\u548C\u540E\u7AEF\u7684\u670D\u52A1"}),"\n",(0,s.jsx)(n.p,{children:"mongo\uFF1A\u804A\u5929\u8BB0\u5F55\u3001\u5386\u53F2\u5BF9\u8BDD\u7B49\u6570\u636E"}),"\n",(0,s.jsx)(n.p,{children:"pg\uFF1A\u5B58\u5411\u91CF"}),"\n",(0,s.jsx)(n.p,{children:"MySQL\uFF1A_"}),"\n",(0,s.jsx)(n.p,{children:"M3E\uFF1A\u5411\u91CF\u5316\u6A21\u578B"}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD0\u884C-chatglm3-6b",children:"\u8FD0\u884C chatglm3-6b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/THUDM/ChatGLM3",children:"https://github.com/THUDM/ChatGLM3"})}),"\n",(0,s.jsx)(n.p,{children:"\u514B\u9686\u9879\u76EE\u540E\uFF0C\u6211\u4EEC\u5B89\u88C5\u4F9D\u8D56\uFF0C\u8BB0\u5F97\u88C5 CUDA \u9A71\u52A8\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u9700\u8981\u7684\u5C31\u662F openai_api_demo \u91CC\u9762\u7684",(0,s.jsx)(n.a,{href:"https://github.com/THUDM/ChatGLM3/blob/main/openai_api_demo/api_server.py",children:"https://github.com/THUDM/ChatGLM3/blob/main/openai_api_demo/api_server.py"})]}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u63D0\u524D\u4E0B\u8F7D\u597D\u6A21\u578B\uFF0C\u6216\u8005\u662F\u8FD0\u884C\u7684\u65F6\u5019\u518D\u4E0B\u8F7D\uFF0C\u63D0\u524D\u4E0B\u8F7D\u53EF\u80FD\u4F1A\u5FEB\u5F88\u591A~"}),"\n",(0,s.jsx)(n.p,{children:"glm3-6b\uFF0C\u8FD9\u4E2A\u6BD4\u8F83\u597D\u8FD0\u884C\uFF0C\u7F51\u4E0A\u6559\u7A0B\u975E\u5E38\u591A\uFF0C\u53EA\u8981\u8DD1\u8D77\u6765\u5C31\u53EF\u4EE5\uFF0C\u8FD9\u91CC\u4E0D\u8D58\u8FF0\u4E86"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ed8272ae3599f0d00c32bc9b6f989a08",src:t(46936).Z+"",width:"1440",height:"695"})}),"\n",(0,s.jsx)(n.p,{children:"\u6CE8\u610F\u662F GLM3 \u7684\u4E0D\u8981 \u4E0B\u8F7D\u9519\u4E86"}),"\n",(0,s.jsx)(n.h3,{id:"api_serverpy",children:"api_server.py"}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u91CC\u7ED9\u51FA\u6765\uFF0C\u4FEE\u6539\u4E86\u4E00\u4E0B\u524D\u9762\u7684\u8DEF\u5F84\uFF0C\u56E0\u4E3A\u6211\u5DF2\u7ECF\u63D0\u524D\u4E0B\u8F7D\u597D\u4E86\u6A21\u578B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'import os\nimport time\nimport tiktoken\nimport torch\nimport uvicorn\n\nfrom fastapi import FastAPI, HTTPException, Response\nfrom fastapi.middleware.cors import CORSMiddleware\n\nfrom contextlib import asynccontextmanager\nfrom typing import List, Literal, Optional, Union\nfrom loguru import logger\nfrom pydantic import BaseModel, Field\nfrom transformers import AutoTokenizer, AutoModel\nfrom utils import process_response, generate_chatglm3, generate_stream_chatglm3\nfrom sentence_transformers import SentenceTransformer\n\nfrom sse_starlette.sse import EventSourceResponse\n\n\nprint(torch.__version__)\nprint(torch.cuda.is_available())\n\n# Set up limit request time\nEventSourceResponse.DEFAULT_PING_INTERVAL = 1000\n\n# \u83B7\u53D6\u5F53\u524D\u811A\u672C\u7684\u76EE\u5F55\ncurrent_dir = os.path.dirname(os.path.abspath(__file__))\n\n# \u6784\u5EFA\u76F8\u5BF9\u4E8E\u5F53\u524D\u811A\u672C\u7684\u6A21\u578B\u76EE\u5F55\u8DEF\u5F84\nmodel_dir = os.path.abspath(os.path.join(current_dir, "..", "..", "chatglm3-6b"))\n\nprint(f"model_dir: {model_dir}")\n\n# \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\nos.environ[\'MODEL_PATH\'] = model_dir\nos.environ[\'TOKENIZER_PATH\'] = model_dir\n\nprint("MODEL_PATH:", os.getenv(\'MODEL_PATH\'))\nprint("TOKENIZER_PATH:", os.getenv(\'TOKENIZER_PATH\'))\n\n# set LLM path\nMODEL_PATH = os.environ.get(\'MODEL_PATH\', \'THUDM/chatglm3-6b\')\nTOKENIZER_PATH = os.environ.get("TOKENIZER_PATH", MODEL_PATH)\n\n# set Embedding Model path\nEMBEDDING_PATH = os.environ.get(\'EMBEDDING_PATH\', \'BAAI/bge-m3\')\n\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI):\n    yield\n    if torch.cuda.is_available():\n        torch.cuda.empty_cache()\n        torch.cuda.ipc_collect()\n\n\napp = FastAPI(lifespan=lifespan)\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=["*"],\n    allow_credentials=True,\n    allow_methods=["*"],\n    allow_headers=["*"],\n)\n\n\nclass ModelCard(BaseModel):\n    id: str\n    object: str = "model"\n    created: int = Field(default_factory=lambda: int(time.time()))\n    owned_by: str = "owner"\n    root: Optional[str] = None\n    parent: Optional[str] = None\n    permission: Optional[list] = None\n\n\nclass ModelList(BaseModel):\n    object: str = "list"\n    data: List[ModelCard] = []\n\n\nclass FunctionCallResponse(BaseModel):\n    name: Optional[str] = None\n    arguments: Optional[str] = None\n\n\nclass ChatMessage(BaseModel):\n    role: Literal["user", "assistant", "system", "function"]\n    content: str = None\n    name: Optional[str] = None\n    function_call: Optional[FunctionCallResponse] = None\n\n\nclass DeltaMessage(BaseModel):\n    role: Optional[Literal["user", "assistant", "system"]] = None\n    content: Optional[str] = None\n    function_call: Optional[FunctionCallResponse] = None\n\n\n## for Embedding\nclass EmbeddingRequest(BaseModel):\n    input: Union[List[str], str]\n    model: str\n\n\nclass CompletionUsage(BaseModel):\n    prompt_tokens: int\n    completion_tokens: int\n    total_tokens: int\n\n\nclass EmbeddingResponse(BaseModel):\n    data: list\n    model: str\n    object: str\n    usage: CompletionUsage\n\n\n# for ChatCompletionRequest\n\nclass UsageInfo(BaseModel):\n    prompt_tokens: int = 0\n    total_tokens: int = 0\n    completion_tokens: Optional[int] = 0\n\n\nclass ChatCompletionRequest(BaseModel):\n    model: str\n    messages: List[ChatMessage]\n    temperature: Optional[float] = 0.8\n    top_p: Optional[float] = 0.8\n    max_tokens: Optional[int] = None\n    stream: Optional[bool] = False\n    tools: Optional[Union[dict, List[dict]]] = None\n    repetition_penalty: Optional[float] = 1.1\n\n\nclass ChatCompletionResponseChoice(BaseModel):\n    index: int\n    message: ChatMessage\n    finish_reason: Literal["stop", "length", "function_call"]\n\n\nclass ChatCompletionResponseStreamChoice(BaseModel):\n    delta: DeltaMessage\n    finish_reason: Optional[Literal["stop", "length", "function_call"]]\n    index: int\n\n\nclass ChatCompletionResponse(BaseModel):\n    model: str\n    id: str\n    object: Literal["chat.completion", "chat.completion.chunk"]\n    choices: List[Union[ChatCompletionResponseChoice, ChatCompletionResponseStreamChoice]]\n    created: Optional[int] = Field(default_factory=lambda: int(time.time()))\n    usage: Optional[UsageInfo] = None\n\n\n@app.get("/health")\nasync def health() -> Response:\n    """Health check."""\n    return Response(status_code=200)\n\n\n@app.post("/v1/embeddings", response_model=EmbeddingResponse)\nasync def get_embeddings(request: EmbeddingRequest):\n    if isinstance(request.input, str):\n        embeddings = [embedding_model.encode(request.input)]\n    else:\n        embeddings = [embedding_model.encode(text) for text in request.input]\n    embeddings = [embedding.tolist() for embedding in embeddings]\n\n    def num_tokens_from_string(string: str) -> int:\n        """\n        Returns the number of tokens in a text string.\n        use cl100k_base tokenizer\n        """\n        encoding = tiktoken.get_encoding(\'cl100k_base\')\n        num_tokens = len(encoding.encode(string))\n        return num_tokens\n\n    response = {\n        "data": [\n            {\n                "object": "embedding",\n                "embedding": embedding,\n                "index": index\n            }\n            for index, embedding in enumerate(embeddings)\n        ],\n        "model": request.model,\n        "object": "list",\n        "usage": CompletionUsage(\n            prompt_tokens=sum(len(text.split()) for text in request.input),\n            completion_tokens=0,\n            total_tokens=sum(num_tokens_from_string(text) for text in request.input),\n        )\n    }\n    return response\n\n\n@app.get("/v1/models", response_model=ModelList)\nasync def list_models():\n    model_card = ModelCard(\n        id="chatglm3-6b"\n    )\n    return ModelList(\n        data=[model_card]\n    )\n\n\n@app.post("/v1/chat/completions", response_model=ChatCompletionResponse)\nasync def create_chat_completion(request: ChatCompletionRequest):\n    global model, tokenizer\n\n    if len(request.messages) < 1 or request.messages[-1].role == "assistant":\n        raise HTTPException(status_code=400, detail="Invalid request")\n\n    gen_params = dict(\n        messages=request.messages,\n        temperature=request.temperature,\n        top_p=request.top_p,\n        max_tokens=request.max_tokens or 1024,\n        echo=False,\n        stream=request.stream,\n        repetition_penalty=request.repetition_penalty,\n        tools=request.tools,\n    )\n    logger.debug(f"==== request ====\\n{gen_params}")\n\n    if request.stream:\n\n        # Use the stream mode to read the first few characters, if it is not a function call, direct stram output\n        predict_stream_generator = predict_stream(request.model, gen_params)\n        output = next(predict_stream_generator)\n        if not contains_custom_function(output):\n            return EventSourceResponse(predict_stream_generator, media_type="text/event-stream")\n\n        # Obtain the result directly at one time and determine whether tools needs to be called.\n        logger.debug(f"First result output\uFF1A\\n{output}")\n\n        function_call = None\n        if output and request.tools:\n            try:\n                function_call = process_response(output, use_tool=True)\n            except:\n                logger.warning("Failed to parse tool call")\n\n        # CallFunction\n        if isinstance(function_call, dict):\n            function_call = FunctionCallResponse(**function_call)\n\n            """\n            In this demo, we did not register any tools.\n            You can use the tools that have been implemented in our `tools_using_demo` and implement your own streaming tool implementation here.\n            Similar to the following method:\n                function_args = json.loads(function_call.arguments)\n                tool_response = dispatch_tool(tool_name: str, tool_params: dict)\n            """\n            tool_response = ""\n\n            if not gen_params.get("messages"):\n                gen_params["messages"] = []\n\n            gen_params["messages"].append(ChatMessage(\n                role="assistant",\n                content=output,\n            ))\n            gen_params["messages"].append(ChatMessage(\n                role="function",\n                name=function_call.name,\n                content=tool_response,\n            ))\n\n            # Streaming output of results after function calls\n            generate = predict(request.model, gen_params)\n            return EventSourceResponse(generate, media_type="text/event-stream")\n\n        else:\n            # Handled to avoid exceptions in the above parsing function process.\n            generate = parse_output_text(request.model, output)\n            return EventSourceResponse(generate, media_type="text/event-stream")\n\n    # Here is the handling of stream = False\n    response = generate_chatglm3(model, tokenizer, gen_params)\n\n    # Remove the first newline character\n    if response["text"].startswith("\\n"):\n        response["text"] = response["text"][1:]\n    response["text"] = response["text"].strip()\n\n    usage = UsageInfo()\n    function_call, finish_reason = None, "stop"\n    if request.tools:\n        try:\n            function_call = process_response(response["text"], use_tool=True)\n        except:\n            logger.warning("Failed to parse tool call, maybe the response is not a tool call or have been answered.")\n\n    if isinstance(function_call, dict):\n        finish_reason = "function_call"\n        function_call = FunctionCallResponse(**function_call)\n\n    message = ChatMessage(\n        role="assistant",\n        content=response["text"],\n        function_call=function_call if isinstance(function_call, FunctionCallResponse) else None,\n    )\n\n    logger.debug(f"==== message ====\\n{message}")\n\n    choice_data = ChatCompletionResponseChoice(\n        index=0,\n        message=message,\n        finish_reason=finish_reason,\n    )\n    task_usage = UsageInfo.model_validate(response["usage"])\n    for usage_key, usage_value in task_usage.model_dump().items():\n        setattr(usage, usage_key, getattr(usage, usage_key) + usage_value)\n\n    return ChatCompletionResponse(\n        model=request.model,\n        id="",  # for open_source model, id is empty\n        choices=[choice_data],\n        object="chat.completion",\n        usage=usage\n    )\n\n\nasync def predict(model_id: str, params: dict):\n    global model, tokenizer\n\n    choice_data = ChatCompletionResponseStreamChoice(\n        index=0,\n        delta=DeltaMessage(role="assistant"),\n        finish_reason=None\n    )\n    chunk = ChatCompletionResponse(model=model_id, id="", choices=[choice_data], object="chat.completion.chunk")\n    yield "{}".format(chunk.model_dump_json(exclude_unset=True))\n\n    previous_text = ""\n    for new_response in generate_stream_chatglm3(model, tokenizer, params):\n        decoded_unicode = new_response["text"]\n        delta_text = decoded_unicode[len(previous_text):]\n        previous_text = decoded_unicode\n\n        finish_reason = new_response["finish_reason"]\n        if len(delta_text) == 0 and finish_reason != "function_call":\n            continue\n\n        function_call = None\n        if finish_reason == "function_call":\n            try:\n                function_call = process_response(decoded_unicode, use_tool=True)\n            except:\n                logger.warning(\n                    "Failed to parse tool call, maybe the response is not a tool call or have been answered.")\n\n        if isinstance(function_call, dict):\n            function_call = FunctionCallResponse(**function_call)\n\n        delta = DeltaMessage(\n            content=delta_text,\n            role="assistant",\n            function_call=function_call if isinstance(function_call, FunctionCallResponse) else None,\n        )\n\n        choice_data = ChatCompletionResponseStreamChoice(\n            index=0,\n            delta=delta,\n            finish_reason=finish_reason\n        )\n        chunk = ChatCompletionResponse(\n            model=model_id,\n            id="",\n            choices=[choice_data],\n            object="chat.completion.chunk"\n        )\n        yield "{}".format(chunk.model_dump_json(exclude_unset=True))\n\n    choice_data = ChatCompletionResponseStreamChoice(\n        index=0,\n        delta=DeltaMessage(),\n        finish_reason="stop"\n    )\n    chunk = ChatCompletionResponse(\n        model=model_id,\n        id="",\n        choices=[choice_data],\n        object="chat.completion.chunk"\n    )\n    yield "{}".format(chunk.model_dump_json(exclude_unset=True))\n    yield \'[DONE]\'\n\n\ndef predict_stream(model_id, gen_params):\n    """\n    The function call is compatible with stream mode output.\n    The first seven characters are determined.\n    If not a function call, the stream output is directly generated.\n    Otherwise, the complete character content of the function call is returned.\n    :param model_id:\n    :param gen_params:\n    :return:\n    """\n    output = ""\n    is_function_call = False\n    has_send_first_chunk = False\n    for new_response in generate_stream_chatglm3(model, tokenizer, gen_params):\n        decoded_unicode = new_response["text"]\n        delta_text = decoded_unicode[len(output):]\n        output = decoded_unicode\n\n        # When it is not a function call and the character length is> 7,\n        # try to judge whether it is a function call according to the special function prefix\n        if not is_function_call and len(output) > 7:\n\n            # Determine whether a function is called\n            is_function_call = contains_custom_function(output)\n            if is_function_call:\n                continue\n\n            # Non-function call, direct stream output\n            finish_reason = new_response["finish_reason"]\n\n            # Send an empty string first to avoid truncation by subsequent next() operations.\n            if not has_send_first_chunk:\n                message = DeltaMessage(\n                    content="",\n                    role="assistant",\n                    function_call=None,\n                )\n                choice_data = ChatCompletionResponseStreamChoice(\n                    index=0,\n                    delta=message,\n                    finish_reason=finish_reason\n                )\n                chunk = ChatCompletionResponse(\n                    model=model_id,\n                    id="",\n                    choices=[choice_data],\n                    created=int(time.time()),\n                    object="chat.completion.chunk"\n                )\n                yield "{}".format(chunk.model_dump_json(exclude_unset=True))\n\n            send_msg = delta_text if has_send_first_chunk else output\n            has_send_first_chunk = True\n            message = DeltaMessage(\n                content=send_msg,\n                role="assistant",\n                function_call=None,\n            )\n            choice_data = ChatCompletionResponseStreamChoice(\n                index=0,\n                delta=message,\n                finish_reason=finish_reason\n            )\n            chunk = ChatCompletionResponse(\n                model=model_id,\n                id="",\n                choices=[choice_data],\n                created=int(time.time()),\n                object="chat.completion.chunk"\n            )\n            yield "{}".format(chunk.model_dump_json(exclude_unset=True))\n\n    if is_function_call:\n        yield output\n    else:\n        yield \'[DONE]\'\n\n\nasync def parse_output_text(model_id: str, value: str):\n    """\n    Directly output the text content of value\n    :param model_id:\n    :param value:\n    :return:\n    """\n    choice_data = ChatCompletionResponseStreamChoice(\n        index=0,\n        delta=DeltaMessage(role="assistant", content=value),\n        finish_reason=None\n    )\n    chunk = ChatCompletionResponse(model=model_id, id="", choices=[choice_data], object="chat.completion.chunk")\n    yield "{}".format(chunk.model_dump_json(exclude_unset=True))\n\n    choice_data = ChatCompletionResponseStreamChoice(\n        index=0,\n        delta=DeltaMessage(),\n        finish_reason="stop"\n    )\n    chunk = ChatCompletionResponse(model=model_id, id="", choices=[choice_data], object="chat.completion.chunk")\n    yield "{}".format(chunk.model_dump_json(exclude_unset=True))\n    yield \'[DONE]\'\n\n\ndef contains_custom_function(value: str) -> bool:\n    """\n    Determine whether \'function_call\' according to a special function prefix.\n    For example, the functions defined in "tools_using_demo/tool_register.py" are all "get_xxx" and start with "get_"\n    [Note] This is not a rigorous judgment method, only for reference.\n    :param value:\n    :return:\n    """\n    return value and \'get_\' in value\n\n\nif __name__ == "__main__":\n    # Load LLM\n    tokenizer = AutoTokenizer.from_pretrained(os.getenv(\'TOKENIZER_PATH\'), trust_remote_code=True)\n    model = AutoModel.from_pretrained(os.getenv(\'MODEL_PATH\'), trust_remote_code=True, device_map="auto").eval()\n\n    # load Embedding\n    embedding_model = SentenceTransformer(EMBEDDING_PATH, device="cuda")\n    uvicorn.run(app, host=\'0.0.0.0\', port=8888, workers=1)\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u8FD0\u884C\u6210\u529F\u540E",children:"\u8FD0\u884C\u6210\u529F\u540E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"85e97e5d6213b8e74cd7faa2622a355b",src:t(23415).Z+"",width:"1440",height:"283"}),"### \u5B89\u88C5 M3E"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u7ED9\u51FA\u7684\u955C\u50CF\uFF0C\u8FD9\u4E2A\u81EA\u5DF1\u641E\u5BB9\u6613\u51FA\u95EE\u9898\uFF0C\u76F4\u63A5\u4F7F\u7528\u955C\u50CF\u6700\u65B9\u4FBF\uFF0C",(0,s.jsx)(n.a,{href:"https://doc.fastai.site/docs/development/custom-models/m3e/",children:"https://doc.fastai.site/docs/development/custom-models/m3e/"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u914D\u7F6E-oneapi",children:"\u914D\u7F6E OneAPI"}),"\n",(0,s.jsxs)(n.p,{children:["\u91CD\u70B9\u6765\u4E86\uFF0COneAPI \u76EE\u524D\u8FD9\u4E2A\u5730\u65B9\u6709\u4E2A\u5751\uFF0C\u4F60\u53C2\u8003\u8FD9\u7BC7\u6587\u7AE0\u7684\u65F6\u5019\uFF0C",(0,s.jsx)(n.a,{href:"https://doc.fastai.site/docs/development/custom-models/m3e/#%E6%8E%A5%E5%85%A5-one-api",children:"https://doc.fastai.site/docs/development/custom-models/m3e/#\u63A5\u5165-one-api"}),"\uFF0C\u8BB0\u5F97 Base URL \u4E00\u5B9A\u8981\u586B\u5199\u5177\u4F53\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6211\u7684-m3e-\u5728-wsl-\u91CC\u9762",children:"\u6211\u7684 M3E \u5728 WSL \u91CC\u9762"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"2090aa22ad0e2333c3349df4bcff350e",src:t(71312).Z+"",width:"1403",height:"606"}),"### \u6211\u7684 ChatGLM API \u5728\u672C\u673A\u672C\u5730\u8FD0\u884C",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"c04de4dba58351b4174778516b263eb1",src:t(40066).Z+"",width:"1394",height:"620"}),"### \u6D4B\u8BD5"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u54CD\u5E94\u65F6\u95F4\u7279\u522B\u957F\uFF0C\u5C31\u662F\u6709\u95EE\u9898"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"ed0d8bf11e9e4b189ad5dbcde10b5bb7",src:t(19507).Z+"",width:"1385",height:"277"}),"### \u589E\u52A0 config.json \u914D\u7F6E"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u76F4\u63A5\u7ED9\u51FA\u6211\u589E\u52A0\u7684\u5185\u5BB9\uFF0C\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E\u8BF7\u770B ",(0,s.jsx)(n.a,{href:"https://doc.fastai.site/docs/development/configuration/",children:"https://doc.fastai.site/docs/development/configuration/"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "feConfigs": {\n    "lafEnv": "https://laf.dev"\n  },\n  "systemEnv": {\n    "openapiPrefix": "fastgpt",\n    "vectorMaxProcess": 15,\n    "qaMaxProcess": 15,\n    "pgHNSWEfSearch": 100\n  },\n  "llmModels": [\n  	{\n  	"model": "gpt-3.5-turbo",\n  	"name": "gpt-3.5-turbo",\n  	"maxContext": 16000,\n  	"avatar": "/imgs/model/openai.svg",\n  	"maxResponse": 4000,\n  	"quoteMaxToken": 13000,\n  	"maxTemperature": 1.2,\n  	"charsPointsPrice": 0,\n  	"censor": false,\n  	"vision": false,\n  	"datasetProcess": true,\n  	"usedInClassify": true,\n  	"usedInExtractFields": true,\n  	"usedInToolCall": true,\n  	"usedInQueryExtension": true,\n  	"toolChoice": true,\n  	"functionCall": true,\n  	"customCQPrompt": "",\n  	"customExtractPrompt": "",\n  	"defaultSystemChatPrompt": "",\n  	"defaultConfig": {}\n  	},\n  	{\n  	"model": "gpt-4-0125-preview",\n  	"name": "gpt-4-turbo",\n  	"avatar": "/imgs/model/openai.svg",\n  	"maxContext": 125000,\n  	"maxResponse": 4000,\n  	"quoteMaxToken": 100000,\n  	"maxTemperature": 1.2,\n  	"charsPointsPrice": 0,\n  	"censor": false,\n  	"vision": false,\n  	"datasetProcess": false,\n  	"usedInClassify": true,\n  	"usedInExtractFields": true,\n  	"usedInToolCall": true,\n  	"usedInQueryExtension": true,\n  	"toolChoice": true,\n  	"functionCall": false,\n  	"customCQPrompt": "",\n  	"customExtractPrompt": "",\n  	"defaultSystemChatPrompt": "",\n  	"defaultConfig": {}\n  	},\n  	{\n  	"model": "gpt-4-vision-preview",\n  	"name": "gpt-4-vision",\n  	"avatar": "/imgs/model/openai.svg",\n  	"maxContext": 128000,\n  	"maxResponse": 4000,\n  	"quoteMaxToken": 100000,\n  	"maxTemperature": 1.2,\n  	"charsPointsPrice": 0,\n  	"censor": false,\n  	"vision": true,\n  	"datasetProcess": false,\n  	"usedInClassify": false,\n  	"usedInExtractFields": false,\n  	"usedInToolCall": false,\n  	"usedInQueryExtension": false,\n  	"toolChoice": true,\n  	"functionCall": false,\n  	"customCQPrompt": "",\n  	"customExtractPrompt": "",\n  	"defaultSystemChatPrompt": "",\n  	"defaultConfig": {}\n  	},\n    {\n      "model": "chatglm3-6b",\n      "name": "chatglm3-6b",\n      "maxContext": 8000,\n      "maxResponse": 8000,\n      "quoteMaxToken": 2000,\n      "maxTemperature": 1,\n      "vision": false,\n      "defaultSystemChatPrompt": ""\n    }\n  ],\n  "vectorModels": [\n    {\n      "model": "m3e",\n      "name": "M3E\uFF08\u6D4B\u8BD5\u4F7F\u7528\uFF09",\n      "price": 0.1,\n      "defaultToken": 500,\n      "maxToken": 1800\n    }\n  ],\n  "reRankModels": [],\n  "audioSpeechModels": [\n    {\n      "model": "tts-1",\n      "name": "OpenAI TTS1",\n      "charsPointsPrice": 0,\n      "voices": [\n        {\n          "label": "Alloy",\n          "value": "alloy",\n          "bufferId": "openai-Alloy"\n        },\n        {\n          "label": "Echo",\n          "value": "echo",\n          "bufferId": "openai-Echo"\n        },\n        {\n          "label": "Fable",\n          "value": "fable",\n          "bufferId": "openai-Fable"\n        },\n        {\n          "label": "Onyx",\n          "value": "onyx",\n          "bufferId": "openai-Onyx"\n        },\n        {\n          "label": "Nova",\n          "value": "nova",\n          "bufferId": "openai-Nova"\n        },\n        {\n          "label": "Shimmer",\n          "value": "shimmer",\n          "bufferId": "openai-Shimmer"\n        }\n      ]\n    }\n  ],\n  "whisperModel": {\n    "model": "whisper-1",\n    "name": "Whisper1",\n    "charsPointsPrice": 0\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4F7F\u7528",(0,s.jsx)(n.code,{children:"WSL"}),"\u6700\u597D\u7535\u8111\u5185\u5B58\u5927\u70B9\uFF0C",(0,s.jsx)(n.code,{children:"WSL"}),"\u8FD9\u73A9\u610F\u5F88\u5403\u5185\u5B58"]}),"\n",(0,s.jsxs)(n.li,{children:["\u80FD\u7528",(0,s.jsx)(n.code,{children:"docker"}),"\u5C31\u7528",(0,s.jsx)(n.code,{children:"docker"}),"\uFF0C\u5F88\u591A\u90FD\u662F\u56E0\u4E3A\u914D\u7F6E\u7684\u95EE\u9898\u51FA\u9519"]}),"\n",(0,s.jsxs)(n.li,{children:["\u663E\u5B58\u4E0D\u591F\u53EF\u4EE5\u91CF\u5316\uFF0C\u4E0D\u884C\u5C31\u7528",(0,s.jsx)(n.code,{children:"API"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u53C2\u8003\u94FE\u63A5",children:"\u53C2\u8003\u94FE\u63A5"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://doc.fastai.site/docs/development/docker/",children:"https://doc.fastai.site/docs/development/docker/"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/THUDM/ChatGLM3/tree/main/openai_api_demo",children:"https://github.com/THUDM/ChatGLM3/tree/main/openai_api_demo"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://huggingface.co/THUDM/chatglm3-6b",children:"https://huggingface.co/THUDM/chatglm3-6b"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.modelscope.cn/models/xrunda/m3e-base/summary",children:"https://www.modelscope.cn/models/xrunda/m3e-base/summary"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/labring/FastGPT",children:"https://github.com/labring/FastGPT"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/labring/sealos",children:"https://github.com/labring/sealos"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/songquanpeng/one-api",children:"https://github.com/songquanpeng/one-api"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5982\u679C\u60A8\u559C\u6B22\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u4E0D\u59A8\u7ED9\u5B83\u70B9\u4E2A\u8D5E\u5E76\u6536\u85CF\uFF0C\u611F\u8C22\u60A8\u7684\u652F\u6301\uFF01"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71312:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/2090aa22ad0e2333c3349df4bcff350e-e1a44ebf8c422d3b50c30467a99bd4d8.jpg"},64382:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/5b6581830daeef63ab9688aa590e002a-954feb645002275007e6eee009190731.jpg"},23415:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/85e97e5d6213b8e74cd7faa2622a355b-012260ec67045ff50aaf5c6a451c63b0.jpg"},40066:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/c04de4dba58351b4174778516b263eb1-119097838deb0dabfdc152dfd0c8b318.jpg"},19507:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/ed0d8bf11e9e4b189ad5dbcde10b5bb7-9a11bd0df2876fff3274c0ed2a10193f.jpg"},46936:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/ed8272ae3599f0d00c32bc9b6f989a08-159e4e2c21b80f767bdf0995626f2409.jpg"},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var o=t(67294);let s={},a=o.createContext(s);function i(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}},85788:function(e){e.exports=JSON.parse('{"permalink":"/docs-hub/blog/fastgpt47--chatglm3-6b--m3e-\u672C\u5730\u90E8\u7F72","editUrl":"https://github.com/sumingcheng/docs-hub/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-25-FastGPT47__chatglm3-6b__m3e_\u672C\u5730\u90E8\u7F72.md","source":"@site/blog/\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883/2024-09-25-FastGPT47__chatglm3-6b__m3e_\u672C\u5730\u90E8\u7F72.md","title":"FastGPT47  chatglm3-6b  m3e \u672C\u5730\u90E8\u7F72","description":"\u5B89\u88C5 Docker \u548C docker-compose","date":"2024-09-25T00:00:00.000Z","tags":[{"inline":false,"label":"\u5F00\u53D1\u5DE5\u5177\u4E0E\u73AF\u5883","permalink":"/docs-hub/blog/tags/dev-tools","description":"\u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u6587\u7AE0"}],"readingTime":7.426666666666667,"hasTruncateMarker":false,"authors":[{"name":"\u7D20\u660E\u8BDA","title":"Full stack development","url":"https://github.com/sumingcheng","page":{"permalink":"/docs-hub/blog/authors/sumingcheng"},"socials":{"x":"https://x.com/sumingcheng","github":"https://github.com/sumingcheng"},"imageURL":"https://github.com/user-attachments/assets/9a06bd55-094a-4efc-91c3-d1b92236822f","key":"sumingcheng"}],"frontMatter":{"slug":"fastgpt47--chatglm3-6b--m3e-\u672C\u5730\u90E8\u7F72","title":"FastGPT47  chatglm3-6b  m3e \u672C\u5730\u90E8\u7F72","authors":["sumingcheng"],"tags":["dev-tools"],"date":"2024-09-25T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Docker \u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9","permalink":"/docs-hub/blog/docker-\u66F4\u6362\u955C\u50CF\u6E90\u963F\u91CC\u79D1\u5927\u7F51\u6613\u817E\u8BAF\u4E2D\u79D1\u5927\u5FAE\u8F6F\u5B98\u65B9"},"nextItem":{"title":"\u5355\u5143\u6D4B\u8BD5\u548C\u96C6\u6210\u6D4B\u8BD5\u7684\u533A\u522B","permalink":"/docs-hub/blog/\u5355\u5143\u6D4B\u8BD5\u548C\u96C6\u6210\u6D4B\u8BD5\u7684\u533A\u522B"}}')}}]);