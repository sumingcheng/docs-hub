# Vue3 中的 provide 和 inject



 **Link:** [https://zhuanlan.zhihu.com/p/641682784]



在 Vue 3 中，`provide` 和 `inject` 的值默认是不响应式的。这意味着如果你提供一个值，然后在提供该值之后改变它，那么使用 `inject` 的组件将不会看到这个变化。

然而，你可以通过 Vue 3 的 `reactive` 或者 `ref` 方法来创建响应式的值，然后提供这个响应式的值。这样，当这个值改变时，所有注入该值的组件都会重新渲染，以反映这个变化。

以下是一个例子：

```
// 在 Vue 3 中的 main.js 或者 main.ts 文件中
import { createApp, reactive } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 创建一个响应式的值
const globalState = reactive({ user: 'John Doe' })

// 提供这个响应式的值
app.provide('globalState', globalState)

app.mount('#app')

```

然后在任何子组件中，你可以使用 `inject` API 来接收这个响应式的值，并在模板或者计算属性中使用它：

```
// 在任何子组件中
import { inject } from 'vue'

export default {
  setup() {
    const globalState = inject('globalState')

    // 在模板或者计算属性中使用 globalState.user
    return { globalState }
  }
}

```

在 Vue 3 中，你需要使用 `globalState.user` 来访问 `user` 属性，而不能直接使用 `globalState`，因为 `globalState` 是一个响应式的对象，而不是一个值。如果你需要提供一个响应式的值（例如一个字符串或数字），你可以使用 `ref` 方法。

