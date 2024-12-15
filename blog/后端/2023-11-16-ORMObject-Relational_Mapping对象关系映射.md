---
slug: ormobject-relational-mapping对象关系映射
title: ORMObject-Relational Mapping对象关系映射
authors: [sumingcheng]
tags: [backend]
date: 2023-11-16
---

# ORM（Object-Relational Mapping，对象关系映射）

ORM，简单地说，就像是数据库和你的代码之间的翻译器。它让你能用你熟悉的 JavaScript 对象来处理数据，而不用去写那些有时候让人头疼的 SQL 语句。想象一下，你有个用户表，通常你得写 SQL 去添加、查找、更新或删除用户，对吧？但是有了 ORM，这一切就像是在处理一个普通的 JavaScript 对象。

比如说，你用 Sequelize（这是 Node.js 里一个很流行的 ORM 工具），你可以定义一个“User”模型，这个模型就代表了数据库里的用户表。然后，当你要创建一个新用户时，你只需要像操作 JavaScript 对象一样去做，Sequelize 会帮你把这些操作转换成相应的 SQL 语句。

这样做的好处是显而易见的：首先，你不需要花时间去写和调试 SQL 语句，这让你能更专注于编写业务逻辑；其次，因为你是在用 JavaScript 对象，所以代码的可读性也变得更好；最后，如果将来需要换数据库，你的代码改动会少很多，因为 ORM 会帮你处理数据库之间的差异。

### 用户表模型

```
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
});

```

### 添加一条新纪录

```
User.create({
  username: 'zhangsan',
  birthday: new Date(1980, 6, 20)
});

```

不过，也有一些缺点。比如，对于一些复杂的查询，ORM 可能不够灵活，有时候生成的 SQL 语句也不是最优的。但总的来说，ORM 是个很有用的工具，尤其是在项目规模较大时，它能大大提升开发效率。
