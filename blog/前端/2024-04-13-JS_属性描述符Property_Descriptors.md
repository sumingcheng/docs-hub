---
slug: js-属性描述符property-descriptors
title: JS 属性描述符Property Descriptors
authors: [sumingcheng]
tags: [frontend]
date: 2024-04-13
---

# JS 属性描述符（Property Descriptors）

## 属性描述符作用

### writable

**作用**：控制属性值是否可以被修改。

**重要性**：在某些情况下，你可能希望对象的某个属性一旦创建后就保持不变，比如常量或配置项。通过将`writable`设为`false`，可以确保属性值不会被意外修改，增加了代码的稳定性和可预测性。

### enumerable

**作用**：控制属性是否可以在 for...in 循环或通过`Object.keys()`方法遍历到。

**重要性**：有时候你可能不希望某些内部属性或方法被枚举。例如，对象可能有一些内部状态或辅助函数，这些不应该暴露给对象外部的使用者。通过将`enumerable`设为`false`，可以控制对象属性的可见性和访问性，提升了对象的封装性。

### configurable

**作用**：控制属性是否可以被删除或改变其属性描述符。

**重要性**：一旦一个属性被定义为不可配置（`configurable: false`），那么它就不能被删除，其`enumerable`、`configurable`和`writable`特性也不能再被修改。这对于定义那些不应该被改变的核心属性特别有用，保证了对象接口的稳定性和安全性。

## 存取描述符

**get**一个给属性提供 getter 的方法，当访问该属性时会调用此方法。该方法返回值被用作属性的值。

**set**一个给属性提供 setter 的方法，当属性值被修改时会调用此方法，并传入新的值。

### 使用 Object.defineProperty()修改属性描述符

可以使用`Object.defineProperty()`方法来定义或修改对象属性并指定其属性描述符

```
const obj = {};
​
Object.defineProperty(obj, 'property1', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: true
});
​
console.log(obj.property1); // 42
// obj.property1的值现在不能被修改，因为writable为false

```
