---
slug: react-vue3-api-速查
title: React Vue3 API 速查
authors: [sumingcheng]
tags: [frontend]
date: 2023-07-24
---

# React Vue3 API 速查

**React 组件 API：**

| API                               | 描述                                                               |
| --------------------------------- | ------------------------------------------------------------------ |
| render()                          | 返回需要渲染的元素，或者返回 null                                  |
| constructor()                     | 组件的构造函数，在创建组件的时候调用                               |
| componentDidMount()               | 在组件挂载到 DOM 后立即调用                                        |
| componentDidUpdate()              | 在组件进行更新后立即调用                                           |
| componentWillUnmount()            | 在组件卸载及销毁之前立即调用                                       |
| shouldComponentUpdate()           | 通过比较新旧 props 和 state 来决定组件是否应该更新，返回一个布尔值 |
| static getDerivedStateFromProps() | 当 state 需要从 props 初始化时使用                                 |
| getSnapshotBeforeUpdate()         | 在更新后，但在 DOM 变更之前调用                                    |

**React 基础 Hooks：**

| Hook         | 描述                                                                                 |
| ------------ | ------------------------------------------------------------------------------------ |
| useState()   | 让函数组件也能有 state（状态）                                                       |
| useEffect()  | 用来替代生命周期函数，如 componentDidMount, componentDidUpdate, componentWillUnmount |
| useContext() | 接受一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值       |

**额外的 Hooks：**

| Hook                  | 描述                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| useReducer()          | 替代 useState，接受一个形如 (state, action) => newState 的 reducer，并返回当前的 state，以及与其配套的 dispatch 方法 |
| useCallback()         | 返回一个记忆的版本，该版本仅在其中的依赖项更改时才会更改                                                             |
| useMemo()             | 返回一个记忆的值，只有当其中的依赖项更改时才会重新计算                                                               |
| useRef()              | 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）                                        |
| useImperativeHandle() | 用于自定义父组件通过 ref 获取和使用子组件的实例属性和方法                                                            |
| useLayoutEffect()     | 其函数签名与 useEffect 相同，但它在所有的 DOM 变更之后同步调用效果                                                   |
| useDebugValue()       | 可以用于在 React DevTools 中显示自定义 hook 的标签                                                                   |

**Vue.js 3 常用 API：**

| API               | 描述                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| createApp()       | 创建一个新的 Vue 应用实例                                            |
| defineComponent() | 定义一个新的组件                                                     |
| watch()           | 响应式地追踪依赖变动                                                 |
| watchEffect()     | 立即执行一个函数并响应式地追踪其依赖，并在其依赖变更时重新运行该函数 |
| computed()        | 创建一个响应式的计算属性                                             |

**Vue.js 3 组合 API：**

| API               | 描述                                                             |
| ----------------- | ---------------------------------------------------------------- |
| ref()             | 创建一个响应式引用                                               |
| reactive()        | 接收一个普通对象并返回其代理，等同于 Vue 2.x 的 Vue.observable() |
| toRefs()          | 将 reactive 创建的响应式对象转化为普通对象                       |
| toRef()           | 为 reactive 对象上的属性创建一个 ref                             |
| readonly()        | 创建一个只读的响应式对象                                         |
| isRef()           | 检查一个值是否为一个 ref 对象                                    |
| isReactive()      | 检查一个对象是否是由 reactive 创建的响应式代理                   |
| isReadonly()      | 检查一个对象是否是由 readonly 创建的只读代理                     |
| isProxy()         | 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理       |
| unref()           | 如果参数是一个 ref，则返回它的 value，否则返回参数本身           |
| proxyRefs()       | 在 reactive/reactive 上使用 ref                                  |
| customRef()       | 创建一个自定义的 ref                                             |
| shallowRef()      | 和 ref 类似，但是只保持浅层响应式                                |
| triggerRef()      | 手动触发 shallowRef 的更新                                       |
| shallowReactive() | 和 reactive 类似，但只保持浅层响应式                             |
| markRaw()         | 使一个对象永远不会被转化为 Proxy                                 |
