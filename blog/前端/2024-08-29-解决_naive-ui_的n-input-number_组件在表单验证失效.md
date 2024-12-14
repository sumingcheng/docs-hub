---
authors: sumingcheng
---
# 解决 naive-ui 的n-input-number 组件在表单验证失效



 **Link:** [https://zhuanlan.zhihu.com/p/717181137]

## 问题背景  

我使用的是`"naive-ui": "^2.38.1"`这个版本的组件库。搜索了一下关于 `n-input-number` 组件在表单验证中遇到问题的情况,发现这是一个比较常见的问题。很多人都遇到了 `n-input-number` 的值明明是合法的,但表单验证就是不通过的情况。

问题的原因可能在于 `n-input-number` 的值是一个数字,而表单验证器默认期望的是一个字符串。

为了解决这个问题,你可以尝试以下方法

## 自定义验证函数  

在 `formRules` 中,为 `defaultText` 字段添加一个自定义验证函数,将数字转换为字符串后再进行验证

```
defaultText [
  {
    required true,
    message '默认生成字数不能为空',
    trigger 'blur',
    validator (rule, value) => {
      if (!value) {
        return new Error('默认生成字数不能为空');
      }
      return true;
    }
  }
]

```
## 使用n-input组件代替n-input-number  

如果上面的方法不能解决问题,你可以考虑使用 `n-input` 组件代替 `n-input-number`,然后在 `formRules` 中使用正则表达式来验证输入的是否是合法的数字

```
<n-input 
  placeholder="请输入生成字数" 
  v-model="formState.defaultText"
></n-input>
defaultText [
  {
    required true,
    message '默认生成字数不能为空',
    trigger 'blur',
    pattern /^\d+$/,
    message '默认生成字数必须是正整数'
  }
]

```

看`issue`的时候发现很多人吐槽组件库的校验规则有问题，如果你对组件规则校验有很强的依赖，建议使用其他的组件库~

