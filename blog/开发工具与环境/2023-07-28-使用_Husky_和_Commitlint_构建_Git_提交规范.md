---
slug: 使用-husky-和-commitlint-构建-git-提交规范
title: 使用 Husky 和 Commitlint 构建 Git 提交规范
authors: [sumingcheng]
tags: [dev-tools]
date: 2023-07-28
---

# 使用 Husky 和 Commitlint 构建 Git 提交规范

**安装，这里注意使用`"husky": "^4.3.8"`版本，高版本需要额外的配置，使用高版本一定要去参考 GitHub 上的说明！**

```
npm install --save-dev @commitlint/{cli,config-conventional} husky
```

**创建一个名为 `commitlint.config.js` 的文件在项目的根目录，并添加以下内容**

```
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```

**在 `package.json` 文件中，添加 Husky 的配置：**

```
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

**这样就可以了，但是如果想进行限制，需要一些配置，你可以参考我的配置**

```
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复问题
        'docs', // 文档改变
        'style', // 样式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'perf', // 性能优化
        'test', // 增加测试
        'build', // 构建过程或辅助工具的变动
        'ci', // 改变持续集成的配置文件和 package 中的 scripts 命令
        'chore', // 其他改变（比如依赖更新）
        'revert', // 代码回退
      ],
    ],
    'subject-case': [2, 'never', ['upper-case']], // 提交信息的主题不能是大写
    'header-max-length': [2, 'always', 999], // 提交信息的长度不能超过999个字符
  },
}

```

麻烦点个赞谢谢啦~
