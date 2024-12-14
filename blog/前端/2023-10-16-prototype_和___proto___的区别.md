---
slug: prototype-和---proto---的区别
title: prototype 和   proto   的区别
authors: [sumingcheng]
tags: [frontend]
date: 2023-10-16
---

# prototype 和 __proto__ 的区别



 



prototype

* `prototype` 是构造函数的一个属性，它是一个对象，包含了所有由该构造函数创建的对象实例应该共享的方法和属性。
* 当你创建一个新的对象实例时（例如，通过 `new` 关键字），这个 `prototype` 对象就会成为新对象实例的原型。

  


```
function Person() {}
Person.prototype.greet = function() { console.log('Hello!'); };

const alice = new Person();
alice.greet();  // Output: Hello!

```

\_\_proto\_\_

* `__proto__` 是每个对象实例的一个属性，它指向创建该对象的构造函数的 `prototype` 对象。
* 通过 `__proto__`，对象实例可以访问其原型上的方法和属性。

  


```
const alice = new Person();
console.log(alice.__proto__ === Person.prototype);  // Output: true

```

简而言之：

* `prototype` 是构造函数用来存储对象实例共享的方法和属性的地方。
* `__proto__` 是对象实例用来访问其原型（即构造函数的 `prototype` 对象）的方法和属性的链接。

这两者之间的关系是：

* 对象实例的 `__proto__` 属性指向创建它的构造函数的 `prototype` 对象。