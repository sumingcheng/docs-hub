# Koa 和 Express 框架区别



 **Link:** [https://zhuanlan.zhihu.com/p/669314064]

## Koa：洋葱模型  

Koa 框架使用一种称为“洋葱模型”的中间件结构。这意味着在处理请求时，代码会“深入”每个中间件，然后在返回响应之前再“回溯”通过这些中间件。这种结构非常适合复杂的异步逻辑，因为它允许您在请求和响应期间执行代码。

**Koa 中间件**

```
const Koa = require('koa');
const app = new Koa();
​
// 第一个中间件
app.use(async (ctx, next) => {
    console.log('中间件1 Start');
    await next(); // 进入下一个中间件
    console.log('中间件1 End'); // 在回溯时执行
});
​
// 第二个中间件
app.use(async (ctx, next) => {
    console.log('中间件2 Start');
    await next(); // 这里可以是异步操作
    console.log('中间件2 End'); // 在回溯时执行
});
​
app.listen(3000);

```

执行顺序是

1. 打印 "中间件1 Start"
2. 进入第二个中间件，打印 "中间件2 Start"
3. 第二个中间件完成后，打印 "中间件2 End"
4. 回到第一个中间件，打印 "中间件1 End"

### Express：线性流程  

与 Koa 不同，Express 的中间件遵循一个更直线式的流程。在 Express 中，中间件按照它们添加到应用程序中的顺序执行。每个中间件处理请求，然后将控制权传递给下一个中间件，而不是返回到上一个中间件。

**Express 中间件**

```
const express = require('express');
const app = express();
​
// 第一个中间件
app.use((req, res, next) => {
    console.log('中间件1');
    next(); // 直接传递到下一个中间件
});
​
// 第二个中间件
app.use((req, res, next) => {
    console.log('中间件2');
    next(); // 传递控制权
});
​
app.listen(3000);

```

执行顺序是

1. 打印 "中间件1"
2. 然后直接进入并打印 "中间件2"

在这个结构中，没有类似于 Koa 中的“回溯”过程。每个中间件都是一个独立的单元，执行完毕后，就直接转到下一个中间件。

