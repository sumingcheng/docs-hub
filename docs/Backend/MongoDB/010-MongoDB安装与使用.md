# MongoDB 安装与使用指南

## 安装 MongoDB

### Windows 安装

笔者从 MongoDB 官方网站下载适用于 Windows 的安装包。运行安装程序时，选择默认选项完成安装。为了在命令行中方便使用 MongoDB，将安装目录下的 `bin` 目录添加到系统的环境变量中。

### macOS 安装

在 macOS 系统中，笔者使用 Homebrew 进行安装。执行以下命令：

```bash
brew tap mongodb/brew
brew install mongodb-community@6.0
```

安装完成后，启动 MongoDB 服务：

```bash
brew services start mongodb-community@6.0
```

### Linux 安装

在 Ubuntu 系统中，笔者添加了 MongoDB 的官方仓库并进行安装：

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
```

安装完成后，启动并设置 MongoDB 服务开机自启：

```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

## 基本使用

### 启动 MongoDB 服务

安装完成后，笔者检查 MongoDB 服务是否正在运行。若未运行，可使用以下命令启动：

**Windows 系统**

```cmd
net start MongoDB
```

**macOS 和 Linux 系统**

```bash
mongod --config /usr/local/etc/mongod.conf
```

### 连接到 MongoDB Shell

使用 `mongo` 命令连接到 MongoDB Shell，开始与数据库交互：

```bash
mongo
```

连接成功后，进入交互式命令行环境，可以执行各种数据库操作。

### 基本 CRUD 操作

#### 创建数据库和集合

笔者创建了名为 `sumingchengDB` 的数据库，并在其中创建了 `users` 集合：

```javascript
use sumingchengDB
db.createCollection("users")
```

#### 插入文档

向 `users` 集合中插入一条用户信息：

```javascript
db.users.insertOne({ name: 'sumingcheng', age: 28, email: 'sumingcheng@example.com' });
```

#### 查询文档

查询 `users` 集合中的所有用户：

```javascript
db.users.find();
```

#### 更新文档

将 `sumingcheng` 的年龄更新为 29：

```javascript
db.users.updateOne({ name: 'sumingcheng' }, { $set: { age: 29 } });
```

#### 删除文档

删除姓名为 `sumingcheng` 的用户：

```javascript
db.users.deleteOne({ name: 'sumingcheng' });
```

## 最佳实践

### 数据备份

笔者定期使用 `mongodump` 工具进行数据备份以防止数据丢失：

```bash
mongodump --out /backup/sumingchengDB
```

### 安全配置

启用用户认证机制，创建具有不同权限的用户，确保数据库安全。

### 性能优化

为常用的查询字段建立索引，提高查询效率：

```javascript
db.users.createIndex({ email: 1 });
```
