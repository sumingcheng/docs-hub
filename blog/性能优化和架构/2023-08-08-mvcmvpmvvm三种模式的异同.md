---
authors: sumingcheng
---
# mvc、mvp、mvvm三种模式的异同



 **Link:** [https://zhuanlan.zhihu.com/p/648810045]



MVC、MVP 和 MVVM 是三种常用的软件设计模式，特别是在构建用户界面（User Interface，UI）时。这三种模式都致力于实现关注点分离，即将数据、逻辑和显示层分开，但具体实现方式存在差异。

**MVC（Model-View-Controller）**  


* **Model（模型）**：代表数据结构和业务逻辑。通常与数据库相关操作有关。
* **View（视图）**：显示数据，即用户界面部分。
* **Controller（控制器）**：接受用户的输入，调用模型来处理该输入，然后更新视图。

**特点**：Controller 负责处理用户输入，从而使模型和视图分离。

**MVP（Model-View-Presenter）**  


* **Model（模型）**：与 MVC 中的模型相同，代表数据结构和业务逻辑。
* **View（视图）**：显示数据。但与 MVC 中不同，MVP 的 View 更加主动，通常会实现一个接口，该接口允许 Presenter 进行数据更新。
* **Presenter（提供器）**：从 View 获取用户输入，调用 Model 进行处理，然后更新 View。不同于 MVC 的 Controller，Presenter 和 View 是双向绑定的。

**特点**：Presenter 直接与 View 交互，负责更新 View。View 是被动的，只负责显示。

**MVVM（Model-View-ViewModel）**  


* **Model（模型）**：与之前两种模式中的模型相同。
* **View（视图）**：显示数据，但通常不包含任何业务逻辑。它只负责声明性地描述其外观和行为。
* **ViewModel（视图模型）**：它是 View 的抽象，负责将 Model 的数据转换为 View 可以显示的数据。在 MVVM 中，通常会使用双向数据绑定技术，这意味着当数据发生变化时，View 和 ViewModel 会自动更新。

**特点**：MVVM 使用双向数据绑定，ViewModel 不直接引用 View，这使得 MVVM 更加适合于现代 UI 技术（例如 WPF、Xamarin 和 Angular）。

**异同**：

* **异**：

+ 在 MVC 中，Controller 直接更新 View；而在 MVP 中，Presenter 更新 View；在 MVVM 中，使用数据绑定技术自动更新。
+ MVVM 的 ViewModel 和 View 之间的双向数据绑定，使得 ViewModel 不需要直接引用 View。
+ MVP 的 View 相对于 MVC 更加主动，因为它通常会实现一个接口供 Presenter 更新。

  


* **同**：

+ 所有这三种模式都旨在实现关注点的分离，即将业务逻辑、数据和 UI 分离。
+ 都有 Model 作为数据和业务逻辑的代表。

## 三种模式的历史  

**MVC (Model-View-Controller)**



+ **时间**：1970s
+ **历史事件**：

- MVC 最早是在 1970 年代由 Trygve Reenskaug 在 Smalltalk-80 编程语言中提出的。这是为了将用户界面（UI）从业务逻辑和数据模型中分离出来。
- 在 1980s 和 1990s，MVC 在面向对象编程社区中得到了广泛的接受和应用。
- 随着 Web 开发的崛起，MVC 也被应用于 Web 应用，其中 Model 代表数据和业务逻辑，View 代表网页显示，Controller 处理用户的 HTTP 请求。

**MVP (Model-View-Presenter)**



+ **时间**：1990s
+ **历史事件**：

- MVP 是为了解决某些桌面应用开发中 MVC 所面临的问题而诞生的。在 MVC 中，Controller 与 UI 界面有很强的耦合，这在某些情况下不是很理想。
- MVP 更进一步地将 UI 逻辑从 View 中分离出来，由 Presenter 来管理，这使得 Presenter 可以不依赖任何 UI 框架进行单元测试。
- 该模式在 Microsoft 的某些技术，如 Windows Forms 中，变得尤为流行。

**MVVM (Model-View-ViewModel)**



+ **时间**：2000s
+ **历史事件**：

- MVVM 最早是由 Microsoft 在 2005 年为 Windows Presentation Foundation (WPF) 和 Silverlight 提出的，这两种技术都支持丰富的数据绑定能力。
- MVVM 的目的是进一步分离 GUI 的逻辑和表现，特别是在使用双向数据绑定的框架中。ViewModel 可以看作是 View 的状态和行为的抽象。
- MVVM 不仅在 Microsoft 技术中流行，也被应用于其他技术框架中，如 Angular、KnockoutJS 等。
