---
slug: javascript-的可选链操作符-
title: JavaScript 的可选链操作符 
authors: [sumingcheng]
tags: [frontend]
date: 2024-07-26
---

# JavaScript 的可选链操作符 (?.)



 



可选链操作符 (`?.`) 允许开发者在访问深层嵌套对象属性时无需显式验证每一层的存在性。这大大简化了从复杂对象中提取值的过程，尤其是在属性可能未定义的情况下。该特性在 ECMAScript 2020 中正式引入，之前开发者需要进行多层检查以防运行时错误。

## 可选链操作符 (?.) 的应用场景  
### 对象属性访问  

当访问链中的某个中间属性不存在时，不会引发错误，而是使表达式短路并返回 `undefined`。

```
let nestedProp = obj.first?.second;
```

此处，如果 `obj.first` 是 `null` 或 `undefined`，则 `nestedProp` 返回 `undefined`。

### 数组索引访问  
```
let item = arr?.[42];
```

表达式安全地访问数组的第 43 项，不必担心 `arr` 可能为 `null` 或 `undefined`。

### 函数或方法调用  

如果尝试调用的函数不存在，表达式会短路并返回 `undefined`，而不抛出错误。

```
obj.func?.();
```

如果 `obj.func` 存在且为函数，则执行调用；如果为 `undefined` 或 `null`，则不执行并返回 `undefined`。