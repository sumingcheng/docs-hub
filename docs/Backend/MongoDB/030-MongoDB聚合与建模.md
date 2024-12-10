# MongoDB 聚合操作与数据建模

## 聚合管道

### 基础操作符

在开发过程中，笔者经常使用聚合管道处理复杂的数据分析需求。以下示例展示了如何使用聚合管道对订单进行分组和统计：

```javascript
db.orders.aggregate([
  { $match: { status: 'completed' } },
  {
    $group: {
      _id: '$customerId',
      totalAmount: { $sum: '$amount' },
      orderCount: { $sum: 1 },
    },
  },
]);
```

上述代码首先筛选状态为“completed”的订单，然后按`customerId`分组，计算每个客户的总订单金额和订单数量。

### 高级操作符

处理复杂的数据转换和计算时，笔者常使用高级操作符。以下示例展示了如何展开产品数组并计算每个产品的收入：

```javascript
db.sales.aggregate([
  { $unwind: '$products' },
  {
    $project: {
      productName: '$products.name',
      revenue: { $multiply: ['$products.price', '$products.quantity'] },
    },
  },
  { $sort: { revenue: -1 } },
]);
```

该聚合管道首先使用`$unwind`将`products`数组拆分为单独的文档，然后使用`$project`计算每个产品的收入，最后按收入降序排序。

## 数据建模

### 嵌入式模型

嵌入式模型适用于一对一或一对少量关系的场景。笔者在设计用户资料时，选择将地址信息嵌入到用户文档中：

```javascript
db.users.insertOne({
  username: 'userA',
  profile: {
    firstName: 'Zhang',
    lastName: 'San',
    address: {
      city: 'Beijing',
      street: 'Wangfujing',
    },
  },
});
```

这种设计简化了数据结构，减少了查询次数，适合用户和其资料之间的紧密关联。

### 引用式模型

引用式模型适用于一对多或多对多关系的场景。笔者在管理订单和产品时，采用了引用式模型：

```javascript
db.orders.insertOne({
  orderId: 'ORD001',
  userId: ObjectId('user123'),
  products: [
    { productId: ObjectId('prod456'), quantity: 2 },
    { productId: ObjectId('prod789'), quantity: 1 },
  ],
});
```

通过引用`userId`和`productId`，可以有效管理用户与订单、订单与产品之间的关系，适用于数据量较大且关系复杂的情况。

## 数据一致性

### 原子操作

为了确保单个文档内的多个字段更新操作的原子性，笔者使用原子操作符。例如，以下操作同时减少账户余额并记录交易：

```javascript
db.accounts.updateOne(
  { accountId: 'ACC001', balance: { $gte: 100 } },
  {
    $inc: { balance: -100 },
    $push: {
      transactions: {
        type: 'withdrawal',
        amount: 100,
        timestamp: new Date(),
      },
    },
  }
);
```

这种方法确保了在更新余额的同时，交易记录被正确添加，避免了数据不一致的问题。

### 事务处理

在需要保证多文档操作一致性时，笔者使用事务。以下示例展示了如何在会话中执行事务：

```javascript
const session = db.getMongo().startSession();
session.startTransaction();

try {
  db.accounts.updateOne({ accountId: 'ACC001' }, { $inc: { balance: -100 } }, { session });

  db.transactions.insertOne(
    {
      accountId: 'ACC001',
      type: 'transfer',
      amount: 100,
    },
    { session }
  );

  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
}
```

通过事务，笔者确保了账户余额的更新和交易记录的插入要么同时成功，要么同时失败，维护了数据的一致性。

## 性能优化

### 数据分片

对于大规模数据集，笔者采用分片策略来提升性能和扩展性。以下命令启用数据库分片并对`users`集合进行哈希分片：

```javascript
sh.enableSharding('myDatabase');
sh.shardCollection('myDatabase.users', { userId: 'hashed' });
```

分片能够将数据分布到多个服务器上，均衡负载，提升查询和写入性能。

### 数据压缩

为了降低存储成本，笔者配置了适当的压缩选项。以下示例展示了如何在创建集合时启用`zlib`压缩：

```javascript
db.createCollection('logs', {
  storageEngine: {
    wiredTiger: {
      configString: 'block_compressor=zlib',
    },
  },
});
```

使用数据压缩不仅节省了存储空间，还在一定程度上提高了 I/O 性能。

## 注意事项

在设计聚合管道和数据模型时，需权衡查询性能与数据冗余，合理选择嵌入式或引用式模型以满足业务需求。
