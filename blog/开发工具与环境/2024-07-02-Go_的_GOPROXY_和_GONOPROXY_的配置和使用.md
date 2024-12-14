# Go 的 GOPROXY 和 GONOPROXY 的配置和使用



 **Link:** [https://zhuanlan.zhihu.com/p/706544661]

### GOPROXY 的使用  

`GOPROXY` 环境变量用于指定 Go 模块代理服务器的 URL。Go 模块代理服务器是一种提供 Go 包及其依赖的中间服务器，可以加速包下载和确保包的可用性。您可以配置多个代理，使用逗号分隔。例如，如果第一个代理返回 404 或 410 错误，Go 工具链将自动尝试列表中的下一个代理。这种机制确保了即使某个代理服务不可用，模块获取操作也可以继续进行。

搭建自己的代理服务：[https://zhuanlan.zhihu.com/p/706537626](https://zhuanlan.zhihu.com/p/706537626)

### 默认的 GOPROXY 设置  

默认情况下，`GOPROXY` 被设置为 `https://proxy.golang.org,direct`。这里的 `direct` 关键字告诉 Go 工具链

如果你的 `GOPROXY` 环境变量包含了 `direct` 关键词，并且列出的代理服务器（例如 `proxy.golang.org`）没有找到你需要的模块（如 `github.com/sirupsen/logrus`），那么 Go 工具链会尝试直接从模块的源地址，即 GitHub 上的 `github.com/sirupsen/logrus` 仓库，获取这个模块

### 配置直连模式  

通过设置 `GOPROXY=direct`，开发者可以让所有的 `go get` 命令绕过代理，直接从源代码托管站点下载模块。这对于在公司内部网络环境中工作，且需要直接访问内部 Git 服务器（如 GitLab）上的私有模块时特别有用。

### 模块验证和 GONOSUMDB 配置  

为了确保下载的模块未被篡改，Go 提供了模块校验和功能。`GONOSUMDB` 环境变量允许指定哪些模块不应进行校验和检查。例如，设置 `GONOSUMDB=gitlab.mycorp.com` 表明所有托管在 `gitlab.mycorp.com` 上的模块都不需要进行校验和验证。

### 配置 GOPRIVATE 和 GONOPROXY  

`GOPRIVATE` 和 `GONOPROXY` 环境变量用于定义不通过公共代理或不进行校验和验证的私有模块的模式。这些设置对于管理企业内部或敏感的私有模块非常有用，确保这些模块的使用不会被公开或误用。

