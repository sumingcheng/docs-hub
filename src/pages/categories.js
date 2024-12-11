import React from 'react'
import Link from "@docusaurus/Link"
import styles from "./index.module.scss"
import {
  FaCode,
  FaDocker,
  FaJava,
  FaNetworkWired,
  FaPython,
  FaReact,
  FaRegFileCode,
  FaDatabase,
  FaCogs,
  FaDesktop,
  FaGlobe,
  FaCubes,
  FaBook
} from 'react-icons/fa'
import {
  RiBookFill,
  RiCss3Fill,
  RiFileTextFill,
  RiGithubFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNodejsFill,
  RiServerFill,
  RiVuejsFill,
  RiWindowFill
} from 'react-icons/ri'

// CategoryCard 组件
export default function Categories() {
  return (
    <div className={styles.categories}>
      {categoriesData.map((category, idx) => (
        <div key={idx} className={styles.categoryCard}>
          <h3 className={styles.categoryTitle} data-cn={category.title}>
            {category.enTitle}
          </h3>
          <div className={styles.categoryGrid}>
            {category.items.map((item) => (
              <Link
                key={item.name}
                to={item.path}
              >
                <div className={styles.itemCard}>
                  <div className={styles.itemIcon}>
                    {typeof item.icon === 'function' ? item.icon() : item.icon}
                  </div>
                  <span className={styles.itemName}>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// 分类数据
const categoriesData = [
  {
    title: '后端开发',
    enTitle: 'Backend',
    items: [
      // 编程语言
      { name: 'Go', icon: <FaCode />, path: '/docs-hub/category/基础' },
      { name: 'Python', icon: <FaPython />, path: '/docs-hub/category/基础-1' },
      { name: 'Java', icon: <FaJava />, path: '/docs-hub/category/基础-2' },
      // 中间件和服务
      { name: 'Docker', icon: <FaDocker />, path: '/docs-hub/Backend/Docker/Docker-基础命令' },
      { name: 'Nginx', icon: <RiServerFill />, path: '/docs-hub/Backend/Nginx/Nginx基础入门' },
      { name: 'ElasticSearch', icon: <FaDatabase />, path: '/docs-hub/Backend/ElasticSearch/ElasticSearch-安装使用' },
      { name: 'MQ', icon: <FaNetworkWired />, path: '/docs-hub/Backend/MQ/Go-Kafka安装使用指南' },
      // 数据库
      { name: 'MySQL', icon: <FaDatabase />, path: '/docs-hub/Backend/MySQL/常用SQL语句' },
      { name: 'Redis', icon: <FaDatabase />, path: '/docs-hub/Backend/Redis/Redis-基础使用' },
      { name: 'MongoDB', icon: <FaDatabase />, path: '/docs-hub/Backend/MongoDB/MongoDB安装与使用' },
      // 工具
      { name: 'Git', icon: <RiGithubFill />, path: '/docs-hub/Backend/Git/Git-提交规范' },
      { name: '正则', icon: <FaRegFileCode />, path: '/docs-hub/Backend/Regular/正则表达式基础' },
    ]
  },
  {
    title: '前端开发',
    enTitle: 'Frontend',
    items: [
      // 核心语言
      { name: 'JavaScript', icon: <RiJavascriptFill />, path: '/docs-hub/category/es3-es5' },
      { name: 'TypeScript', icon: <FaCode />, path: '/docs-hub/Frontend/TypeScript/TypeScript简介' },
      // Node相关
      { name: 'Node', icon: <RiNodejsFill />, path: '/docs-hub/Frontend/Node/NodeJS基本认知' },
      // 框架
      { name: 'Vue', icon: <RiVuejsFill />, path: '/docs-hub/category/vue基础入门' },
      { name: 'React', icon: <FaReact />, path: '/docs-hub/Frontend/React/初识React' },
      // 工程化
      { name: '工程化', icon: <FaCogs />, path: '/docs-hub/Frontend/Engineering/核心-Web-指标' },
      // 基础技术
      { name: 'HTML', icon: <RiHtml5Fill />, path: '/docs-hub/Frontend/HTML/DOCTYPE' },
      { name: 'CSS', icon: <RiCss3Fill />, path: '/docs-hub/Frontend/CSS/CSS-选择器-权重-匹配规则' },
      { name: 'DOM', icon: <RiWindowFill />, path: '/docs-hub/Frontend/DOM/DOM初识-JS对象-XML-幻灯片案例展示' },
      { name: 'BOM', icon: <RiWindowFill />, path: '/docs-hub/Frontend/BOM/深入理解BOM' },
      { name: 'Electron', icon: <FaDesktop />, path: '/docs-hub/Frontend/Electron/初识-基础' },
      { name: 'Quasar', icon: <FaCode />, path: '/docs-hub/Frontend/Quasar/Quasar项目搭建' },
    ]
  },
  {
    title: '面试题',
    enTitle: 'Interview',
    items: [
      { name: '后端面试', icon: <RiBookFill />, path: '/docs-hub/Interview/Backend/占位' },
      { name: '前端面试', icon: <RiBookFill />, path: '/docs-hub/Interview/Frontend/浏览器是如何渲染页面的' },
    ]
  },
  {
    title: '网络',
    enTitle: 'Network',
    items: [
      { name: 'AJAX', icon: <FaGlobe />, path: '/docs-hub/Network/AJAX/JSON基础与数据解析-JSON方法-AJAX初识' },
      { name: 'HTTP', icon: <FaGlobe />, path: '/docs-hub/Network/HTTP/URL-客户端-服务端-域名操作' },
    ]
  },
  {
    title: 'Web3',
    enTitle: 'Web3',
    items: [
      { name: 'IPFS', icon: <FaCubes />, path: '/docs-hub/Web3/IPFS/IPFS-Desktop-运行指南' },
      { name: 'Web3基础', icon: <FaBook />, path: '/docs-hub/Web3/Learning/Web2如何转Web3' },
    ]
  },
  {
    title: '资源导航',
    enTitle: 'Resources',
    items: [
      { name: '软件', icon: <FaCogs />, path: '/docs-hub/Resource/Soft/Windows装机软件' },
    ]
  },
  {
    title: '其他',
    enTitle: 'Others',
    items: [
      { name: '食谱', icon: <RiBookFill />, path: '/docs-hub/Other/CookBook/柠檬酸辣无骨鸡爪' },
      { name: '笔记', icon: <RiFileTextFill />, path: '/docs-hub/Other/Notes/使用指南' },
    ]
  }
]