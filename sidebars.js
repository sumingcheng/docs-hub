/**
 * 创建一个侧边栏允许你：
 * 创建一个有序的文档组
 * 为该组的每一个文档渲染一个侧边栏
 * 提供下一步/上一步的导航
 * 侧边栏可以从文件系统生成，或者在这里显式地定义。
 * 根据需要创建尽可能多的侧边栏。
 */

// @ts-check  // 开启 TypeScript 的类型检查功能

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 * 定义侧边栏的配置类型
 */
const sidebars = {
  // 默认情况下，Docusaurus 从 docs 文件夹结构中生成一个侧边栏
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  frontEndSidebar: [{type: 'autogenerated', dirName: 'frontEnd'}],
  backEndSidebar: [{type: 'autogenerated', dirName: 'backEnd'}],
  learnSidebar: [{type: 'autogenerated', dirName: 'learning'}],
  debuggerSidebar: [{type: 'autogenerated', dirName: 'debugger'}],
  thoughtsSidebar: [{type: 'autogenerated', dirName: 'thoughts'}],
  translationsSidebar: [{type: 'autogenerated', dirName: 'translations'}],
  resourceSidebar: [{type: 'autogenerated', dirName: 'resource'}]
}

module.exports = sidebars  // 导出侧边栏的配置
