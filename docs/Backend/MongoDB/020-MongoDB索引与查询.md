# MongoDB 索引与查询优化

## 索引基础

### 创建索引

在 MongoDB 中，笔者经常使用 `createIndex()` 方法来创建索引。单字段索引是最基本的索引类型：

```javascript
db.users.createIndex({ username: 1 });
```

其中 `1` 表示升序索引，`-1` 表示降序索引。对于经常查询的字段，建议创建复合索引：

```javascript
db.orders.createIndex({ userId: 1, orderDate: -1 });
```

### 索引类型

在实践中，以下索引类型非常有用：

```javascript
// 唯一索引
db.users.createIndex({ email: 1 }, { unique: true });

// 部分索引
db.products.createIndex({ price: 1 }, { partialFilterExpression: { quantity: { $gt: 0 } } });

// 文本索引
db.articles.createIndex({ content: 'text' });
```

唯一索引确保字段值的唯一性，部分索引仅索引满足特定条件的文档，文本索引则用于全文搜索。

## 查询优化

### 查询分析

使用 `explain()` 方法分析查询性能：

```javascript
db.users.find({ age: { $gt: 21 } }).explain('executionStats');
```

此方法提供查询执行的详细信息，有助于识别性能瓶颈。

### 覆盖查询

通过只返回索引字段来优化查询：

```javascript
db.users.find({ age: { $gt: 21 } }, { _id: 0, username: 1 }).hint({ username: 1 });
```

覆盖查询减少了需要读取的数据量，从而提升查询效率。

## 索引策略

### 选择索引字段

通常根据以下场景创建索引：

```javascript
// 频繁查询的字段
db.orders.createIndex({ status: 1 });

// 排序字段
db.posts.createIndex({ createTime: -1 });

// 关联查询字段
db.comments.createIndex({ postId: 1 });
```

选择合适的索引字段能够显著提升查询性能，特别是在处理大量数据时。

### 索引维护

定期检查索引使用情况：

```javascript
// 查看集合索引
db.users.getIndexes();

// 删除不再使用的索引
db.users.dropIndex('index_name');
```

定期维护索引有助于优化存储空间并提升数据库性能。

## 性能监控

### 慢查询分析

开启慢查询日志，监控耗时操作：

```javascript
db.setProfilingLevel(1, { slowms: 100 });
```

通过分析慢查询日志，笔者能够识别并优化性能较差的查询。

### 资源使用监控

监控索引大小和内存使用情况：

```javascript
// 查看索引大小
db.users.stats().indexSizes;

// 查看数据库内存使用
db.serverStatus().mem;
```

了解资源使用情况有助于做出合理的性能优化决策。

## 注意事项

创建索引时需考虑其对写操作的影响，避免过多索引导致写入性能下降。
