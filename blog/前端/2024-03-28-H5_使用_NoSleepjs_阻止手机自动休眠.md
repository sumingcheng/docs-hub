---
authors: sumingcheng
---
# H5 使用 NoSleep.js 阻止手机自动休眠



 **Link:** [https://zhuanlan.zhihu.com/p/689507073]


```
npm install nosleep.js
```
[https://github.com/richtr/NoSleep.js/](https://github.com/richtr/NoSleep.js/)### 在展示的组件内加上以下内容  
```
import NoSleep from 'nosleep.js';

```
### 在组件内部使用  
```
// 创建 NoSleep 实例
var noSleep = new NoSleep();

// 在用户交互的事件回调中激活
function enableNoSleep() {
  noSleep.enable();
  // 取消事件监听以避免重复激活
  document.removeEventListener('click', enableNoSleep, false);
}

// 添加事件监听，等待用户交互
document.addEventListener('click', enableNoSleep, false);

```
