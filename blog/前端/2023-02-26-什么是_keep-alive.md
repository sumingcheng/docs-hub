# 什么是 keep-alive



 **Link:** [https://zhuanlan.zhihu.com/p/609606035]



`keep-alive` 是 Vue.js 中的一个内置组件，用于缓存组件实例。当组件被包裹在 `keep-alive` 组件中时，该组件不会被销毁，而是被缓存起来，直到缓存被清除或组件被激活重新渲染。这样可以提高组件的渲染效率，减少不必要的性能开销。

`keep-alive` 组件提供了 `include` 和 `exclude` 两个属性，用于指定需要缓存的组件和需要排除的组件。同时还提供了一些生命周期钩子函数，用于在缓存组件的过程中进行一些额外的操作，例如激活缓存组件时自动更新数据。

需要注意的是，`keep-alive` 组件只能缓存有状态的组件，即带有 `data` 属性的组件。同时，被缓存的组件可能会因为缓存而带来一些副作用，例如缓存的组件会保留之前的状态，如果没有及时更新可能会导致一些问题，因此需要根据具体的场景进行使用和管理。

## 动态/异步组件  
## 异步组件  

1. 异步组件会被分割成代码块文件
2. 按需从服务器上下载组件`xx.js`

```
  // Vue2
  AsyncComp:() => import('./xxx');

  // Vue3
  import { defineAsyncCompontent } from 'vue';
  const { defineAsyncCompontent } = 'Vue';

```
## 动态组件  

在交互中，组件的渲染是不确定的，根据交互的操作来决定渲染哪个组件

```
<component :is=""></component>
<template>
  <div class="login-tab">
    <div class="login-nav">
      <div
        v-for="tab of tabData"
        :key="tab"
        :class="['nav-item', { active: currentTab === tab }]"
        @click="changeTab(tab)"
      >{{ tab }}</div>
    </div>
    <div class="login-component">
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
​
<script>
import AccountLogin from './AccountLogin';
​
export default {
  name: 'MainLogin',
  components: {
    AccountLogin,
    QrcodeLogin: () => import('./QrcodeLogin'),
    MobileLogin: () => import('./MobileLogin')
  },
  data () {
    return {
      currentTab: 'Account',
      tabData: ['Account', 'Qrcode', 'Mobile']
    }
  },
  methods: {
    changeTab (tab) {
      this.currentTab = tab;
    }
  },
  computed: {
    // 拼出来组件名
    currentTabComponent () {
      return this.currentTab.toLowerCase() + '-login';
    }
  }
}
</script>

```
## keep-alive使用  

被`keep-alive`包裹的组件，组件切换时会缓存组件，保持组件的状态，避免反复渲染导致性能问题

1. vDOM：Virtual DOM
2. vNode：Virtual Node
3. rDOM：Real DOM
4. rNode：Real Node

## keep-alive的原理  

1. 用户操作视图，视图变化，影响组件显示变化
2. 被`keep-alive`包裹的组件会缓存组件的`vNode`
3. 有现成的`vNode`就用现成的`vNode`来更新`DOM`
4. 这种更新不经过`unmounted`，再次进入也不会走`mounted`
5. 使用`activated`代替`mounted`，使用`deactivated`代替`unmounted`

## keep-alive属性  

正常匹配组件的`name`属性或如果没有就匹配局部注册组件名称

## exclude  

排除某个组件

```
<keep-alive exclude="List,Intro">
  <component :is="currentComponent"></component>
</keep-alive>
```
## include  

允许某个组件

```
<keep-alive include="List,Intro">
  <component :is="currentComponent"></component>
</keep-alive>
```
## max  

最多缓存几个组件

```
<keep-alive :max="5">
  <!-- 需要缓存的组件 -->
</keep-alive>
```
## 正则匹配  
```
<keep-alive :include="/n|c/">
    <component :is="currentComponent"></component>
</keep-alive>
```
## bug  

异步组件不能使用`include`，缓存了但是没办法正确显示。异步组件请使用`exclude`

```
<keep-alive include="List">
  <component :is="currentComponent"></component>
</keep-alive>
```
## keep-alive实现  
```
import comp1 from './components/Comp1';
import comp2 from './components/Comp2';
import comp3 from './components/Comp3';
​
const oButtons = document.getElementById('buttons');
const oWrapper = document.getElementById('wrapper');
​
const App = {
  components: {
    comp1,
    comp2,
    comp3
  },
  compCache: {},
  init() {
    this.bindEvent();
  },
  mounted(callback) {
    callback && callback();
  },
  activated(callback) {
    callback && callback();
  },
  bindEvent() {
    oButtons.addEventListener('click', this.handleBtnClick.bind(this), false);
  },
  handleBtnClick(e) {
    const tar = e.target,
        tagName = tar.tagName.toLowerCase();
​
    if (tagName === 'span') {
      const key = tar.dataset.key;
​
      let vNode = null;
​
      if (this.compCache[key]) {
        vNode = this.compCache[key];
      } else {
        vNode = this.setVNode(this.components[key]);
​
        if (this.checkKeepAlive(oWrapper)) {
          this.compCache[key] = vNode;
        }
      }
​
      const rNode = this.setRNode(vNode);
      oWrapper.innerHTML = '';
      oWrapper.appendChild(rNode);
​
      if (this.checkKeepAlive(oWrapper)) {
        this.activated(() => {
          console.log(key, 'activated');
        });
      } else {
        this.mounted(() => {
          console.log(key, 'mounted');
        });
      }
    }
  },
  setVNode(comp) {
    const { template, name } = comp;
​
    const regTag = template.match(/\<(.+?)\>/)[1],
        regContent = template.match(/\>(.+?)\</)[1];
​
    return {
      tag: regTag,
      children: regContent,
      mark: name
    };
  },
​
  setRNode(vNode) {
    const tag = vNode.tag;
    const content = vNode.children;
​
    const node = document.createElement(tag);
    node.innerText = content;
​
    return node;
  },
​
  checkKeepAlive(wrapper) {
    const outerWrapper = wrapper.parentNode.tagName.toLowerCase();
    return outerWrapper === 'keep-alive';
  }
};
​
App.init();

```
