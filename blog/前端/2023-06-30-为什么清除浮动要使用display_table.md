---
authors: sumingcheng
---
# 为什么清除浮动要使用display: table？



 **Link:** [https://zhuanlan.zhihu.com/p/640540259]

## display: table  

`display: table;`：这行代码会将伪元素变成一个块级元素。这样，我们就可以在它上面应用 `clear:both`。为什么选择 `display: table;` 而不是 `display: block;` 呢？

实际上，两者都可以。但是，使用 `display: table;` 还可以避免某些其他的布局问题，例如外边距（margin）塌缩。

因此，`.clearfix::after { content: ""; display: table; clear: both; }` 这样的代码可以有效地清除浮动，并避免布局问题。

### 那边距塌缩又是什么呢？  

在CSS中，“边距塌缩”是一个常见的现象，即当两个垂直方向的块级元素相邻，并且没有任何内容、padding或border将它们分隔开时，它们之间的间距不会是两个margin的总和，而是两个margin中的最大值。这就是所谓的“边距塌缩”。

例如，假设我们有两个元素，第一个元素的下边距（margin-bottom）是20px，第二个元素的上边距（margin-top）是30px。在边距塌缩的现象下，两个元素之间的距离将是30px（最大的那个），而不是20px + 30px = 50px。

那么，为什么`display: table;`能够防止边距塌缩呢？

这是因为在CSS规范中，`display: table;`会创建一个新的块格式化上下文（Block Formatting Context, BFC）。在新的BFC中，内部的元素会在垂直方向上一个接一个地放置，并且可以管理浮动元素、防止外部元素与内部元素重叠，并防止边距塌缩。

这就是为什么要用`display: table`的好处

