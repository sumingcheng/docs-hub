# Python 中的 List、Array、Tuple 和 Set

## List 列表

在 Python 中列表是一个有序的集合，可以包含任何数据类型，比如数字 字符串 甚至其他列表。列表是可变的，可以直接添加 删除 修改列表中的元素。实际开发中列表常用于存储动态变化的数据集。

### 创建列表

```python
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]
mixed_list = [1, "Alice", 3.5, [1, 2, 3]]
empty_list = []
```

### 列表操作

通过索引访问元素

```python
print(names[0])  # 输出 "Alice"
```

直接修改列表元素

```python
names[1] = "Ben"
print(names)  # 输出 ["Alice", "Ben", "Charlie"]
```

在末尾添加元素

```python
names.append("David")
print(names)  # 输出 ["Alice", "Ben", "Charlie", "David"]
```

在指定位置插入元素

```python
names.insert(1, "Eve")
print(names)  # 输出 ["Alice", "Eve", "Ben", "Charlie", "David"]
```

删除元素

```python
del names[1]
print(names)  # 输出 ["Alice", "Ben", "Charlie", "David"]

removed_name = names.pop(1)
print(removed_name)  # 输出 "Ben"
print(names)          # 输出 ["Alice", "Charlie", "David"]
```

列表的常用方法有 sort reverse count index remove 等

```python
numbers = [5, 2, 4, 1, 3]
numbers.sort()
print(numbers)  # 输出 [1, 2, 3, 4, 5]

numbers.reverse()
print(numbers)  # 输出 [5, 4, 3, 2, 1]
```

遍历列表

```python
for name in names:
    print(name)
```

获取列表长度

```python
print(len(names))  # 输出 3
```

切片语法 [start:stop:step]

```python
my_list = [1, 2, 3, 4, 5, "a", "b", "c"]
print(my_list[0:5:2])  # 输出 [1, 3, 5]
```

在实际使用中列表适合构建动态数据结构 比如存放用户输入的数据 临时计算结果等  
若对性能有较高要求 可在数据处理前尽量减少不必要的列表拷贝操作 并保证列表元素类型尽可能一致

## Python 中的 List 和 Array 区别

### 列表实例

```python
my_list = [1, "Hello", 3.5, [2, 3, 4]]
my_list.append("World")
my_list[1] = "Hi"
print(my_list)  # 输出 [1, 'Hi', 3.5, [2, 3, 4], 'World']
```

### 数组实例

```python
import array

my_array = array.array('i', [1, 2, 3, 4, 5])
my_array.append(6)
my_array[0] = 7
print(my_array)  # 输出 array('i', [7, 2, 3, 4, 5, 6])
```

将非整数类型数据添加到整数数组会报错

灵活性  
List 可存放不同类型数据 Array 通常要求相同类型数据

用途  
List 用于通用场景数据处理和灵活操作 Array 在需要存储大量同类型数据时更高效

效率和存储  
Array 在处理大量数值数据时更紧凑  
在需要数值高效运算时可考虑借助 NumPy 数组进一步提升性能和功能

## Tuple 元组

Tuple 与列表类似 但元组是不可变的 无法修改元素 适用于表示固定长度不可变的数据集合 例如坐标点或配置信息

### 定义元组

```python
t = (1, 2, 3, 4, 5)
```

元组不可变

```python
# t[0] = 10 这会引发错误
```

可通过索引访问元素

```python
print(t[1])  # 输出 2
```

元组切片

```python
print(t[1:4])  # 输出 (2, 3, 4)
```

元组中可包含多种数据类型

```python
mixed_tuple = (1, "Hello", (2, 3, 4))
```

单元素元组需要逗号

```python
single_element_tuple = (5,)
```

使用元组的典型场景是作为不变的数据集合 可以在函数返回多个值时使用元组轻松打包返回结果

## Set 集合

Set 是一个无序无重复元素的集合 可用于快速判断某元素是否存在

### 定义集合

```python
s1 = {1, 2, 3, 4}
s2 = set([1, 2, 3, 4])
```

重复元素会自动去重

```python
s = {1, 2, 2, 3, 4}
print(s)  # 输出 {1, 2, 3, 4}
```

集合无序 不能使用索引

添加元素

```python
s.add(5)
```

移除元素

```python
s.remove(5)     # 若不存在会报错
s.discard(5)    # 若不存在不会报错
```

长度和成员测试

```python
print(len(s))
print(1 in s)
```

集合运算

并集

```python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1 | s2)  # 输出 {1, 2, 3, 4, 5}
```

交集

```python
print(s1 & s2)  # 输出 {3}
```

差集

```python
print(s1 - s2)  # 输出 {1, 2}
```

对称差集

```python
print(s1 ^ s2)  # 输出 {1, 2, 4, 5}
```

在实际开发中可用集合快速判断元素存在性  
在处理需要去重的数据时可将列表转为集合再处理

## 数据结构区别

| 特性/数据结构 | Tuple（元组）           | Set（集合）            | Array（数组）               | List（列表）       |
| ------------- | ----------------------- | ---------------------- | --------------------------- | ------------------ |
| 定义          | ()                      | {} 或 set()            | array.array()               | []                 |
| 有序性        | 有序                    | 无序                   | 有序                        | 有序               |
| 可变性        | 不可变                  | 可变                   | 可变                        | 可变               |
| 重复元素      | 允许                    | 不允许                 | 允许                        | 允许               |
| 索引访问      | 允许                    | 不允许                 | 允许                        | 允许               |
| 数据类型      | 任意                    | 任意                   | 必须一致                    | 任意               |
| 优点          | 不可变 安全性高         | 去重 快速成员检查      | 存储紧凑 数值运算高效       | 通用灵活 使用简单  |
| 缺点          | 不可变 操作受限         | 无序 无法索引          | 数据类型受限                | 存储效率低于数组   |
| 使用场景      | 固定数据集 函数多返回值 | 去重 集合运算 集合判断 | 数值运算 批量处理同类型数据 | 通用数据处理与存储 |
