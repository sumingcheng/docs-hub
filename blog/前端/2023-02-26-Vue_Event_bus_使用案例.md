---
slug: vue-event-bus-使用案例
title: Vue Event bus 使用案例
authors: [sumingcheng]
tags: [frontend]
date: 2023-02-26
---

# Vue Event bus 使用案例

假设我们有两个组件：一个是父组件 `Parent`，一个是子组件 `Child`。我们希望在 `Child` 中触发一个事件，然后在 `Parent` 中监听这个事件并进行处理。这时我们可以使用 Event bus 来实现：

首先在 `main.js` 中创建一个全局的 Event bus：

```
Vue.prototype.$eventBus = new Vue()

```

接着在 `Child` 组件中触发事件：

```
methods: {
  handleClick() {
    this.$eventBus.$emit('myEvent', 'hello')
  }
}

```

这里我们使用 `$emit` 方法来触发一个名为 `myEvent` 的事件，并传递一个参数 `'hello'`。

最后在 `Parent` 组件中监听事件并进行处理：

```
 created() {
  this.$eventBus.$on('myEvent', (message) => {
    console.log(message)
  })
}

```

这里我们使用 `$on` 方法来监听名为 `myEvent` 的事件，并在回调函数中输出传递的参数。

通过这种方式，我们可以实现跨组件通信，将数据从一个组件传递到另一个组件。需要注意的是，Event bus 作为全局对象，**可能会导致代码难以维护和调试，因此需要谨慎使用。**
