---
slug: 深入理解-await-与-async
title: 深入理解 await 与 async
authors: [sumingcheng]
tags: [frontend]
date: 2023-09-11
---

# 深入理解 await 与 async

## 1. 基本概念

### 什么是 async 函数？

`async` 函数是一个返回 `Promise` 对象的函数。在函数内部，你可以使用 `await` 关键字来等待一个 `Promise`。

### 什么是 await 关键字？

`await` 关键字只能在 `async` 函数内部使用，它会暂停当前函数的执行直到 `Promise` 完成，并返回结果。

### async 函数返回什么类型的值？

`async` 函数总是返回一个 `Promise`。

---

## 2. 错误处理

### 如何在使用 await 时处理错误？

使用 `try/catch` 结构。

### try/catch 在 async/await 中的作用是什么？

它用于捕获 `await` 表达式中的错误或在 `async` 函数内部抛出的错误。

### 如何处理多个 await 调用中的并发错误？

1. 如果你使用 `Promise.all()` 来同时等待多个 `Promise`，它会在其中一个 `Promise` 失败时立即失败。
2. 你可以在这种情况下使用 `try/catch` 来捕获错误。

---

## 3. 并发性

### 如何并发地执行多个 await 操作？

你可以使用 `Promise.all()` 或者 `Promise.allSettled()` 来并发执行多个 `Promise`。

### Promise.all()和 Promise.race()在与 async/await 结合时有什么作用？

1. `Promise.all()` 允许你并发等待多个 `Promise`，它返回一个 `Promise`，该 `Promise` 在所有的 `Promise` 完成后完成。
2. `Promise.race()` 返回一个 `Promise`，该 `Promise` 在第一个 `Promise` 完成后完成。

---

## 4. 与 Promise 的关系

### async/await 和 Promises 之间有什么关系？

`async/await` 是基于 `Promise` 的，并提供了一种更简洁、更直观的方式来处理 `Promise`。

### 在 async 函数中返回一个值等价于哪种 Promise 操作？

1. 返回一个值等价于 `Promise.resolve()`。
2. 抛出错误等价于 `Promise.reject()`。

---

## 5. 执行顺序

### 描述一个包含多个 await 语句的 async 函数的执行顺序。

函数会从顶部开始执行，当遇到第一个 `await` 语句时暂停，直到该 `Promise` 完成。然后，函数会继续执行，直到遇到下一个 `await` 或函数结束。

### 何时使用 await 和何时避免使用？

1. 当你需要按顺序执行异步操作时，使用 `await`。
2. 当你可以并发执行多个操作时，使用 `Promise.all()` 或其他类似的方法。

---

## 6. 错误和陷阱

### 描述在使用 async/await 时可能遇到的常见错误或陷阱。

1. 忘记 `await`。
2. 在非 `async` 函数内部使用 `await`。
3. 在循环中不正确地使用 `await` 导致不必要的顺序执行。
4. 未处理的异步错误。

### 如何避免“忘记 await”的问题？

使用 TypeScript 或 ESLint，它们可以检测这种常见错误。

---

## 7. 实际应用

这通常涉及将给定代码片段转换为使用 `async/await` 或 `Promises`。这要根据具体的代码片段来决定。

---

## 8. 浏览器和 Node.js 支持

### 哪些版本的 Node.js 和浏览器开始支持 async/await？

Node.js 从 7.6.0 版本开始支持 `async/await`。大多数现代浏览器都支持它，但旧版本的浏览器可能不支持。

### 在不支持 async/await 的环境中，如何使用它？

你可以使用 Babel 或 TypeScript 这样的转译器将 `async/await` 转换为 ES5 或 ES6 JavaScript。

---

## 9. 性能和最佳实践

### async/await 是否比纯 Promises 更慢？

在大多数情况下，性能差异是可以忽略的。但 `async/await` 可能会带来一些额外的运行时开销。

### 何时应该使用 async/await，何时应该使用 Promises？

1. 当你需要更简洁和可读的代码时，使用 `async/await`。
2. 对于复杂的异步逻辑或需要更细粒度控制的场景，使用 `Promises`。

---

## 10. 其他特性和提议

### 对于 async iterators 和 for-await-of 的了解。

1. `async iterators` 是一种可以异步生成值的迭代器。
2. `for-await-of` 是一种循环结构，允许你等待 `async iterator` 的每个值。

### 了解其他与 async/await 相关的 ES 提议，如顶级 await。

顶级 `await` 是一个提议，允许你在模块的顶级使用 `await`，而不是仅在 `async` 函数中。
