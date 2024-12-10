# MongoDB 安全与权限管理

## 用户认证

### 创建管理员用户

在生产环境中，笔者首先创建了管理员用户：

```javascript
use admin
db.createUser({
  user: "adminUser",
  pwd: "securePassword123",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" }
  ]
})
```

### 启用认证

笔者修改了 MongoDB 的配置文件以开启认证机制：

```yaml
security:
  authorization: enabled
  clusterAuthMode: x509
```

## 角色管理

### 内置角色

MongoDB 提供了多种内置角色以满足不同的需求。笔者创建了数据库管理员和只读用户：

```javascript
// 数据库管理员
db.createUser({
  user: 'dbAdmin',
  pwd: 'dbPass123',
  roles: [{ role: 'dbAdmin', db: 'businessDB' }],
});

// 只读用户
db.createUser({
  user: 'readOnlyUser',
  pwd: 'readPass123',
  roles: [{ role: 'read', db: 'businessDB' }],
});
```

### 自定义角色

为了满足特定权限需求，笔者创建了自定义角色：

```javascript
db.createRole({
  role: 'orderProcessor',
  privileges: [
    {
      resource: { db: 'businessDB', collection: 'orders' },
      actions: ['find', 'update'],
    },
  ],
  roles: [],
});
```

## 网络安全

### SSL/TLS 配置

笔者配置了 SSL/TLS 以加密传输数据：

```yaml
net:
  ssl:
    mode: requireSSL
    PEMKeyFile: /path/to/mongodb.pem
    CAFile: /path/to/ca.pem
    allowInvalidCertificates: false
    allowInvalidHostnames: false
```

### 防火墙设置

为了限制 MongoDB 的访问，笔者设置了防火墙，仅允许特定 IP 访问：

```yaml
net:
  bindIp: 127.0.0.1,192.168.1.100
  port: 27017
```

## 审计机制

### 开启审计

笔者配置了审计日志以记录关键操作：

```yaml
security:
  authorization: enabled
  audit:
    destination: file
    format: JSON
    path: /var/log/mongodb/audit.json
```

### 审计事件过滤

设置需要审计的操作类型，笔者选择了认证、创建集合和删除集合事件：

```javascript
db.setAuditConfig({
  auditFilter: {
    atype: {
      $in: ['authenticate', 'createCollection', 'dropCollection'],
    },
  },
});
```

## 数据加密

### 静态加密

笔者配置了存储加密以保护静态数据：

```yaml
security:
  enableEncryption: true
  encryptionKeyFile: /path/to/key.file
```

### 字段级加密

对于敏感字段，笔者实施了字段级加密：

```javascript
db.createCollection('users', {
  validator: {
    $jsonSchema: {
      properties: {
        ssn: {
          encrypt: {
            keyId: [UUID('key1')],
            algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512_Random',
          },
        },
      },
    },
  },
});
```
