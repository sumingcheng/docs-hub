---
authors: sumingcheng
---
# Go 创建 goroutine 的四种方式



 **Link:** [https://zhuanlan.zhihu.com/p/706686625]

### 直接启动匿名函数  

这是创建 goroutine 最常见的方式使用 `go` 关键字后跟一个匿名函数调用，立即在新的 goroutine 上执行该函数

```
go func() {
    fmt.Println("Running in a goroutine")
}()

```
### 启动一个已有函数  

如果你已经有一个函数，你可以创建一个 goroutine 来运行这个函数这仍然使用 `go` 关键字，后面跟随函数名和参数

```
func printMessage(message string) {
    fmt.Println(message)
}
​
go printMessage("Hello, goroutine!")

```
### 启动一个方法  

如果你有一个对象的方法需要在 goroutine 中运行，也可以使用 `go` 关键字直接调用

```
type Greeter struct {
    greeting string
}
​
func (g Greeter) greet() {
    fmt.Println(g.greeting)
}
​
var greeter = Greeter{"Hello from a goroutine"}
go greeter.greet()

```
### 使用闭包调用  

如果需要在 goroutine 中使用当前作用域内的变量，可以通过闭包来捕获这些变量

```
name := "Gopher"
go func(who string) {
    fmt.Println("Hello,", who)
}(name)

```
