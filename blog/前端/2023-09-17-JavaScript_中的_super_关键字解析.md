---
slug: javascript-中的-super-关键字解析
title: JavaScript 中的 super 关键字解析
authors: [sumingcheng]
tags: [frontend]
date: 2023-09-17
---

# JavaScript 中的 super 关键字解析



 **Link:** [https://zhuanlan.zhihu.com/p/656730359]

### super关键字的核心目的  

`super` 是 JavaScript 中用于在子类（或派生类）中调用其父类（或超类）的方法的关键字。在 ES6 的类和继承的上下文中，它尤其有用。

### 在构造函数中  

当你在一个派生类中定义一个构造函数时，你必须首先调用 `super()` 来确保父类（基类）的构造函数被正确地执行。这样做的目的是：

* 初始化`this`绑定：确保对象（由 `this` 表示）被正确初始化。

```
class Parent {
    constructor() {
        this.name = "Parent";
    }
}

class Child extends Parent {
    constructor() {
        super(); // 这会执行 Parent 的构造函数，并初始化 this.name 为 "Parent"
        this.type = "Child"; // 现在可以安全地使用 this
    }
}

const obj = new Child();
console.log(obj.name); // 输出 "Parent"
console.log(obj.type); // 输出 "Child"

```

* 确保继承属性和方法：派生类会继承父类上定义的所有属性和方法。这确保了你可以在子类实例上使用父类定义的所有属性和方法。

### 在派生类的方法中  

当你想在子类的一个方法内调用父类的同名方法时，你可以使用 `super` 关键字。这使得继承更加简单，并允许子类在必要时重写或扩展其父类的功能。

```
class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    greet() {
        super.greet(); // 调用父类的 greet 方法
        console.log("Hello from Child");
    }
}

const obj = new Child();
obj.greet();
// 输出：
// Hello from Parent
// Hello from Child

```
### super的行为及其重要性  

* 继承和原型链的基础：在 JavaScript 的面向对象编程中，继承允许我们在一个类（子类）上基于另一个类（父类）创建新的属性和方法。`super` 关键字确保在创建子类的实例时，父类的构造函数首先被调用，从而确保所有的属性和方法都可以被子类实例使用。
* `this`的初始化：在派生类中，`this` 在调用 `super()` 之前不能使用。如果在调用 `super()` 之前尝试使用 `this`，JavaScript 会抛出一个错误。这确保了对象的正确初始化和继承链的完整性。