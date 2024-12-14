---
authors: sumingcheng
---
# JS Web Workers



 **Link:** [https://zhuanlan.zhihu.com/p/604527576]

## 什么是Web Workers  
[Worker - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker)## 有哪些实际用处？  

Worker线程中全局对象为 `self`，代表子线程自身，这时 `this`指向`self`，其上有一些api：

* `self.postMessage`: worker线程往主线程发消息，消息可以是任意类型数据，包括二进制数据
* `self.close`: worker线程关闭自己
* `self.onmessage`: 指定主线程发worker线程消息时的回调，也可以`self.addEventListener('message',cb)`
* `self.onerror`: 指定worker线程发生错误时的回调，也可以 `self.addEventListener('error',cb)`

### 优点  

1. 可以通过`Web Workers`把需要大量计算的工作交接给`worker`处理，不占用主线程。
2. 通过`postMessage`和`onmessage`进行信息的传递和接收。

主线程与 Worker 之间传递的数据是通过拷贝完成的，而传址来完成的。传递给 Worker 的对象需要经过序列化，接下来在另一端还需要反序列化。页面与 Worker 不会共享同一个实例，最终的结果就是在每次通信结束时生成了数据的一个副本。

也就是说，Worker 与其主页面之间只能单纯的传递数据，不能传递复杂的引用类型：如通过构造函数创建的对象等。并且，传递的数据也是经过拷贝生成的一个副本，在一端对数据进行修改不会影响另一端。

**缺点**

1. `worker` 不支持跨域请求
2. `worker`不能访问`document`和`window`，但是可以获取`navigator`、`location(只读)`、`XMLHttpRequest`、`setTimeout`等浏览器API。也可以进行`AJAX`请求。

## 多个worker  

1. 一个`worker`可以委派多个`worker`

```
// 加载其他的worker
importScripts('...')

```

1. 使用`terminate()`可以终止`worker`

