---
authors: sumingcheng
---
# Go strconv 包的主要功能



 **Link:** [https://zhuanlan.zhihu.com/p/710024983]

## 整数转换  

`Atoi`（ASCII to Integer）将字符串转换为整数

`Itoa`（Integer to ASCII）将整数转换为字符串

`ParseInt`将字符串解析为指定基数（进制）的整数

`FormatInt`将整数格式化为字符串，可指定基数

## 浮点数转换  

`ParseFloat`将字符串解析为浮点数，可以指定精度（32位或64位）

`FormatFloat`将浮点数格式化为字符串，可以指定格式和精度

## 布尔值转换  

`ParseBool`将字符串解析为布尔值

`FormatBool`将布尔值格式化为字符串

## 整数转换示例  
```
package main
​
import (
    "fmt"
    "strconv"
)
​
func main() {
    // 字符串转整数
    s := "1024"
    num, err := strconv.Atoi(s)
    if err != nil {
        fmt.Println("转换错误:", err)
    } else {
        fmt.Println("转换结果:", num)
    }
​
    // 整数转字符串
    numStr := strconv.Itoa(num)
    fmt.Println("整数转字符串:", numStr)
​
    // 使用 ParseInt 解析十六进制字符串
    hexNum, _ := strconv.ParseInt("1f4", 16, 32)
    fmt.Println("十六进制 '1f4' 转为十进制:", hexNum)
​
    // 使用 FormatInt 将数字转换为二进制表示的字符串
    binStr := strconv.FormatInt(int64(hexNum), 2)
    fmt.Println("数字转二进制字符串:", binStr)
}

```
## 浮点数转换示例  
```
package main
​
import (
    "fmt"
    "strconv"
)
​
func main() {
    // 字符串转浮点数
    floatStr := "3.14159"
    f, err := strconv.ParseFloat(floatStr, 64)
    if err != nil {
        fmt.Println("转换错误:", err)
    } else {
        fmt.Println("转换结果:", f)
    }
​
    // 浮点数转字符串
    formattedFloat := strconv.FormatFloat(f, 'f', 3, 64)
    fmt.Println("浮点数格式化:", formattedFloat)
}

```
## 布尔值转换示例  
```
package main
​
import (
    "fmt"
    "strconv"
)
​
func main() {
    // 字符串转布尔值
    boolStr := "true"
    b, err := strconv.ParseBool(boolStr)
    if err != nil {
        fmt.Println("转换错误:", err)
    } else {
        fmt.Println("转换结果:", b)
    }
​
    // 布尔值转字符串
    bStr := strconv.FormatBool(b)
    fmt.Println("布尔值转字符串:", bStr)
}

```
