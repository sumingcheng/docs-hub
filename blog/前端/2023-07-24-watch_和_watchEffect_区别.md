---
slug: watch-和-watcheffect-区别
title: watch 和 watchEffect 区别
authors: [sumingcheng]
tags: [frontend]
date: 2023-07-24
---

# watch 和 watchEffect 区别



 



* `watchEffect`：你提供一个函数，Vue.js 将立即运行该函数，并响应式地追踪其依赖，并在其依赖变更时重新运行该函数。这非常适合侧效应的操作，例如获取数据、订阅或手动改变 DOM 等。你不需要特别指出要观察的对象，Vue.js 会自动收集依赖。

例如：

```
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => console.log(count.value))

```

在上述代码中，每当 `count` 改变，提供给 `watchEffect` 的函数就会重新运行。

* `watch`：需要明确指出要观察的响应式对象，当被观察的响应式对象发生改变时，`watch` 将运行一个回调函数。这非常适合在数据变化时执行异步或者较复杂的操作。

例如：

```
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {

  console.log('The new count is: ' + newValue)
})

```

在上述代码中，只有 `count` 改变时，提供给 `watch` 的回调函数才会运行。

  


`watchEffect` 更为简单和直观，尤其在处理副作用时，而 `watch` 则提供了更细粒度的控制，包括获取旧值和新值，以及 lazy 选项等