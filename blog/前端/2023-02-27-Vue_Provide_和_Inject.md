---
slug: vue-provide-和-inject
title: Vue Provide 和 Inject
authors: [sumingcheng]
tags: [frontend]
date: 2023-02-27
---

# Vue Provide 和 Inject

Vue 的依赖注入主要通过 Provide 和 Inject 两个 API 来实现

- Provide: 在父组件中通过 provide 提供一个变量，该变量可以是一个值或一个对象。这个变量可以被子组件通过 inject 来注入。
- Inject: 在子组件中通过 inject 来注入 provide 提供的变量。这个变量可以是一个值或一个对象。

父组件通过 provide 提供一个变量或对象，子组件通过 inject 来注入这个变量或对象，实现了父组件向子组件传递数据的功能。

例如，父组件提供了一个名为 user 的变量：

```
export default {
  provide: {
    user: {
      name: 'John Doe',
      age: 30
    }
  }
}

```

在子组件中通过 inject 来注入这个变量：

```
 export default {
  inject: ['user'],
  mounted() {
    console.log(this.user.name); // John Doe
  }
}

```

这样，在子组件中就可以访问到父组件提供的 user 变量了。这种依赖注入的方式可以让代码更加灵活，易于维护和扩展。

## 什么是依赖注入

举个例子来说，假设我们正在开发一个电商网站，我们需要一个购物车（Cart）对象，该对象依赖于一个商品列表（ProductList）对象。如果我们不使用依赖注入，那么购物车对象就需要负责创建商品列表对象，这样会导致购物车对象和商品列表对象紧密耦合在一起。而如果使用依赖注入，我们可以将商品列表对象的创建和维护交给外部容器（比如框架或组件），购物车对象只需要接收到这个商品列表对象，然后就可以使用它来添加商品、删除商品等操作，而不需要关心商品列表对象的创建和维护。

在 Vue 中，通过 Provide 和 Inject 可以实现依赖注入。例如，我们可以在父组件中使用 Provide 来提供一些数据或方法，然后在子组件中使用 Inject 来注入这些数据或方法，从而实现子组件依赖于父组件的功能。这种方式可以帮助我们减少组件之间的耦合，提高代码的可维护性和可测试性。

## 总结

Provide 和 Inject 适用于在组件树中需要共享数据的场景，不需要手动逐层地传递 props 属性，提高了代码的可读性和可维护性。
