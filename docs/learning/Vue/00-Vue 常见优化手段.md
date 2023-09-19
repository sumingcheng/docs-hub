# Vue 常见优化手段

## 过早优化

1. 会降低代码可读性
2. 会增加前期开发时间
3. 程序出现问题再优化，有利于你个人
4. 优化要因地制宜，见招拆招
## 使用 key

对于通过 v-for 生成的列表，应给每个列表项一个稳定且唯一的 key，这有利于列表在变动时，尽量少的改动元素
## 使用冻结对象
如果对象很多，嵌套的结构很深，遍历这个对象的过程就需要花费很多时间，Vue 的响应式绑定就会不断的遍历你这个对象。
## 不需要遍历的场景

这个对象不需要改动，只是需要展示而已，对于列表来说就是不需要改动的，这种情况下，我们就不需要响应式。
冻结对象，Vue不会遍历，也不具有响应式，性能更好
```javascript
   let obj = {
     a:1,
     b:2
   }
   Object.freeze(obj)
   Object.isFrozen(obj) // true
```
## 使用函数式组件
[渲染函数 & JSX | Vue.js](https://cn.vuejs.org/guide/extras/render-function.html#functional-components)
### 为什么函数组件性能优于普通组件

1. 没有生命周期方法：因为函数式组件是无状态的，它们没有像 created、mounted 等生命周期钩子。这意味着在渲染过程中没有额外的方法调用。
2. 没有响应式系统开销：函数式组件不使用响应式数据或计算属性，所以没有额外的响应式系统的开销。
3. 没有组件实例：每次调用函数式组件，它都会直接返回一个虚拟节点树，而不是首先创建一个新的组件实例。这避免了与实例化、维护和垃圾回收相关的开销。
4. 更快的虚拟DOM渲染：由于其简单性，函数式组件的虚拟DOM结构通常更快地进行差异化和渲染。
## 使用计算属性
计算属性可以缓存数据
## 非实时绑定的表单项

当时有 v-model 绑定一个表单项的时，用户改变表单状态时，也会随之改变数据，从而导致 vue 发生重新渲染(renrender)，这会带来一些性能开销
我们可以通过使用 v-model.lazy，或不使用 v-model 的方式解决该问题，但要注意，这样可能会导致在某一个时间段内数据和表单项的值不是一致的
## 保持对象引用稳定
在绝大部分情况下，vue 触发渲染的时机是其依赖的数据发生变化
若是没有数据变化，哪怕给数据重新赋值了，vue 也是不会做出任何处理的
```javascript
   function hasChanged(x, y) {
     if (x === y) {
       return x === 0 && 1 / x !== 1 / y
     } else {
       return x === x || y === y
     }
   }
```
因此，如果需要，只要能保证组件的依赖数据不发生变化，组件就不会重新渲染

1. 对于原始数据类型，保持值不变即可
2. 对于对象类型，保持引用不变即可
3. 从另一方面来说，优于可以通过保持属性引用稳定来避免子组件的重新渲染，那么我们应该细分组件，尽量避免多余的渲染
### 案例

1. 通过远程接口获取评论，每次都获取全部更新列表，每次都是新的引用（慢）
2. 获取部分数据，在 push 到列表里，每次都是复用之前的引用（更快）

延迟装载

在 JavaScript 中，延迟装载（或称为懒加载）通常用于提高页面加载速度和性能，特别是当页面包含大量数据或资源时。以下是几种实现 JavaScript 延迟装载的方法：

1. 使用 async 和 defer 属性: 当加载脚本时，你可以使用 async 或 defer 属性来控制脚本的执行时机。
   - async: 脚本将异步加载。一旦脚本可用，它就会运行，而不必等待其他脚本或页面的解析完成。
   - defer: 脚本会按照它们在页面中的顺序延迟执行，直到页面解析完成后才运行。
```html
<script async src="path/to/your/script.js"></script>
<script defer src="path/to/your/script.js"></script>
```

2. 图片的懒加载: 对于图片，可以使用 loading="lazy" 属性来实现原生的懒加载。
```html
<img src="image.jpg" alt="Description" loading="lazy">
```

3. 使用 Intersection Observer API: 这是一个更通用的方法，可以用于任何元素。使用这个 API，你可以确定一个元素是否在视口内，如果不在，可以延迟加载它。
```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Load your content (e.g., an image or a script)
    }
  });
});

// Watch a particular element for visibility
observer.observe(document.querySelector('.some-element'));
```

4. 动态导入模块: 如果你使用的是现代的 JavaScript 模块系统（例如 ES6 模块或 Webpack），可以使用动态导入来实现代码分割和懒加载。
```javascript
// Only load the module when you need it
const module = await import('./module.js');
```

5. 使用第三方库: 有许多第三方库（如 lazysizes）可以帮助实现懒加载，特别是对于更复杂的情况。
## 延迟渲染
### requestAnimationFrame 

requestAnimationFrame 是一个浏览器的 API，用于告诉浏览器你希望执行一个动画，并请求浏览器在下一次重绘前调用指定的回调函数更新动画。这个方法是用来进行高效率、更平滑的动画和页面渲染调整的。以下是一些常见的 requestAnimationFrame 使用场景：

1. 动画：无论是简单的 CSS 动画还是复杂的 canvas 或 WebGL 动画，requestAnimationFrame 都是推荐的调度方式。与 setTimeout 或 setInterval 不同，它是特别为动画设计的，能够保证在适当的时间运行，从而提供平滑的帧率。
2. 滚动效果：当你想实现自定义的滚动效果或者滚动监听的时候，使用 requestAnimationFrame 可以确保滚动动画或事件在最佳的时间点被处理。
3. 节流和去抖：对于高频率事件（如 mousemove 或 resize），使用 requestAnimationFrame 可以确保事件处理器不会被频繁调用，从而提高性能。
4. 页面元素的渲染和调整：当你想在 JavaScript 中改变元素的样式或布局，并希望这些更改能够平滑且高效地呈现，你可以使用 requestAnimationFrame 来安排这些更改。
5. 游戏循环：在浏览器中运行的游戏通常使用 requestAnimationFrame 来实现其主循环，确保游戏渲染与浏览器的重绘过程同步。

使用 requestAnimationFrame 的好处是它能够与浏览器的帧刷新率同步，通常是 60fps，从而为用户提供更加流畅的体验。此外，如果标签页不在前台，requestAnimationFrame 会自动暂停，这有助于节省 CPU 和 GPU 的能源。
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>requestAnimationFrame Example</title>
    <style>
      #box {
        width: 50px;
        height: 50px;
        background-color: red;
        position: absolute;
        top: 50%;
        left: 0;
      }
    </style>
  </head>
  <body>
    <div id="box"></div>

    <script>
      const box = document.getElementById('box');
      let leftPosition = 0;

      function moveBox() {
        // 更新 box 的位置
        leftPosition += 2;
        box.style.left = leftPosition + 'px';

        // 如果 box 没有超出屏幕宽度，则继续动画
        if (leftPosition < window.innerWidth) {
          requestAnimationFrame(moveBox);
        }
      }

      // 开始动画
      requestAnimationFrame(moveBox);
    </script>
  </body>
</html>

```
这个 animate 函数会在每一帧被调用，使动画或其他效果得以持续进行。
## Vue 优化组件加载
用于渲染过多组件的时候
```javascript
export default function (maxFrameCount) {
  return {
    // 数据定义部分
    data() {
      return {
        frameCount: 0, // 当前的帧计数
      };
    },

    // 当 Vue 组件被挂载（即插入到 DOM 中）时会执行此生命周期钩子
    mounted() {
      // 定义一个函数来更新帧计数
      const refreshFrameCount = () => {
        // 使用 requestAnimationFrame 来异步地执行代码
        // 这确保了代码在浏览器的下一个绘制帧之前被执行
        requestAnimationFrame(() => {
          this.frameCount++; // 增加帧计数

          // 如果当前帧计数小于 maxFrameCount，继续更新帧计数
          if (this.frameCount < maxFrameCount) {
            refreshFrameCount();
          }
        });
      };

      // 开始帧计数
      refreshFrameCount();
    },

    methods: {
      // 定义一个方法，它会返回 true 当当前帧计数大于或等于指定的帧计数
      // 这可以用于根据帧计数延迟显示或渲染某些内容
      defer(showInFrameCount) {
        return this.frameCount >= showInFrameCount;
      },
    },
  };
}
```

