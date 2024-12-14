---
slug: syncwaitgroup-使用场景
title: syncWaitGroup 使用场景
authors: [sumingcheng]
tags: [backend]
date: 2023-10-29
---

# sync.WaitGroup 使用场景



 **Link:** [https://zhuanlan.zhihu.com/p/663981725]



`sync.WaitGroup` 它主要用于等待一组协程（goroutines）的执行完成。

1. **并行处理**：当你有一组独立的任务需要并行执行，而主协程需要等待所有任务完成时，你可以使用 `sync.WaitGroup`。
2. **错误处理和资源清理**：如果你想确保在程序的主协程中，在所有的工作协程完成执行后，再执行一些错误处理或资源清理工作，`sync.WaitGroup` 是很有用的。
3. **实现并发控制**：通过使用 `sync.WaitGroup`，你可以确保在启动新的协程之前，之前的协程已经完成了它们的工作。
4. **数据的并行处理**：当你需要在不同的协程中并行处理数据，并且需要在所有处理完成后再进行下一步操作时，`sync.WaitGroup` 是非常有用的。

```
package main
​
import (
    "fmt"
    "sync"
)
​
func worker(wg *sync.WaitGroup, id int) {
    defer wg.Done()  // 在协程结束时调用 Done 方法
    fmt.Printf("Worker %d starting\n", id)
    // ... 这里是协程的工作代码 ...
    fmt.Printf("Worker %d done\n", id)
}
​
func main() {
    var wg sync.WaitGroup  // 创建一个 WaitGroup 实例
​
    for i := 1; i <= 5; i++ {
        wg.Add(1)  // 为每个启动的协程增加计数
        go worker(&wg, i)  // 启动协程
    }
​
    wg.Wait()  // 等待所有协程完成
    fmt.Println("All workers done")
}

```

在这个例子中，我们创建了一个 `sync.WaitGroup` 实例，并在启动每个协程时通过 `Add` 方法增加计数。每个工作协程在完成时调用 `Done` 方法来减少计数。主协程通过调用 `Wait` 方法等待所有工作协程完成执行。这样，我们可以确保所有工作协程完成后，再执行后续的代码。