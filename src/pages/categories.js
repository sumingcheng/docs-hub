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
  FaBook,
  FaBitcoin,
  FaUtensils,
  FaHdd,
  FaCoffee,
  FaAtom,
  FaServer,
  FaSearch,
  FaExchangeAlt,
  FaWrench
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
  RiWindowFill,
  RiComputerLine
} from 'react-icons/ri'

import { SiTypescript } from 'react-icons/si'

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
      { name: 'Go', icon: <FaCode style={{ color: '#00ADD8' }} />, path: '/docs-hub/category/基础' },
      { name: 'Python', icon: <FaPython style={{ color: '#3776AB' }} />, path: '/docs-hub/category/基础-1' },
      { name: 'Java', icon: <FaJava style={{ color: '#007396' }} />, path: '/docs-hub/category/基础-2' },
      // 中间件和服务
      { name: 'Docker', icon: <FaDocker style={{ color: '#2496ED' }} />, path: '/docs-hub/Backend/Docker/Docker-基础命令' },
      { name: 'Nginx', icon: <FaServer style={{ color: '#009639' }} />, path: '/docs-hub/Backend/Nginx/Nginx基础入门' },
      { name: 'ElasticSearch', icon: <FaSearch style={{ color: '#FED10A' }} />, path: '/docs-hub/Backend/ElasticSearch/ElasticSearch-安装使用' },
      { name: 'MQ', icon: <FaExchangeAlt style={{ color: '#FF6B6B' }} />, path: '/docs-hub/Backend/MQ/Go-Kafka安装使用指南' },
      // 数据库
      { name: 'MySQL', icon: <FaDatabase style={{ color: '#4479A1' }} />, path: '/docs-hub/Backend/MySQL/常用SQL语句' },
      { name: 'Redis', icon: <FaDatabase style={{ color: '#A41E11' }} />, path: '/docs-hub/Backend/Redis/Redis-基础使用' },
      { name: 'MongoDB', icon: <FaDatabase style={{ color: '#47A248' }} />, path: '/docs-hub/Backend/MongoDB/MongoDB安装与使用' },
      // 工具
      { name: 'Git', icon: <RiGithubFill style={{ color: '#171515' }} />, path: '/docs-hub/Backend/Git/Git-提交规范' },
      { name: '正则', icon: <FaRegFileCode style={{ color: '#4169E1' }} />, path: '/docs-hub/Backend/Regular/正则表达式基础' },
    ]
  },
  {
    title: '前端开发',
    enTitle: 'Frontend',
    items: [
      // 核心语言
      { name: 'JavaScript', icon: <RiJavascriptFill style={{ color: '#F7DF1E' }} />, path: '/docs-hub/category/es3-es5' },
      { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} />, path: '/docs-hub/Frontend/TypeScript/TypeScript简介' },
      // Node相关
      { name: 'Node', icon: <RiNodejsFill style={{ color: '#339933' }} />, path: '/docs-hub/Frontend/Node/NodeJS基本认知' },
      // 框架
      { name: 'Vue', icon: <RiVuejsFill style={{ color: '#4FC08D' }} />, path: '/docs-hub/category/vue基础入门' },
      { name: 'React', icon: <FaReact style={{ color: '#61DAFB' }} />, path: '/docs-hub/Frontend/React/初识React' },
      // 工程化
      { name: '工程化', icon: <FaWrench style={{ color: '#6C6CFF' }} />, path: '/docs-hub/Frontend/Engineering/核心-Web-指标' },
      // 基础技术
      { name: 'HTML', icon: <RiHtml5Fill style={{ color: '#E34F26' }} />, path: '/docs-hub/Frontend/HTML/DOCTYPE' },
      { name: 'CSS', icon: <RiCss3Fill style={{ color: '#1572B6' }} />, path: '/docs-hub/Frontend/CSS/CSS-选择器-权重-匹配规则' },
      { name: 'DOM', icon: <RiWindowFill style={{ color: '#FFB800' }} />, path: '/docs-hub/Frontend/DOM/DOM初识-JS对象-XML-幻灯片案例展示' },
      { name: 'BOM', icon: <RiWindowFill style={{ color: '#FF8C00' }} />, path: '/docs-hub/Frontend/BOM/深入理解BOM' },
      { name: 'Electron', icon: <RiComputerLine style={{ color: '#9FEAF9' }} />, path: '/docs-hub/Frontend/Electron/初识-基础' },
      { name: 'Quasar', icon: <FaAtom style={{ color: '#1976D2' }} />, path: '/docs-hub/Frontend/Quasar/Quasar项目搭建' },
    ]
  },
  {
    title: '面试题',
    enTitle: 'Interview',
    items: [
      { name: '后端面试', icon: <RiBookFill style={{ color: '#0088CC' }} />, path: '/docs-hub/Interview/Backend/占位' },
      { name: '前端面试', icon: <RiBookFill style={{ color: '#0088CC' }} />, path: '/docs-hub/Interview/Frontend/浏览器是如何渲染页面的' },
    ]
  },
  {
    title: '网络',
    enTitle: 'Network',
    items: [
      { name: 'AJAX', icon: <FaGlobe style={{ color: '#4A90E2' }} />, path: '/docs-hub/Network/AJAX/JSON基础与数据解析-JSON方法-AJAX初识' },
      { name: 'HTTP', icon: <FaGlobe style={{ color: '#4A90E2' }} />, path: '/docs-hub/Network/HTTP/URL-客户端-服务端-域名操作' },
    ]
  },
  {
    title: 'Web3',
    enTitle: 'Web3',
    items: [
      { name: 'IPFS', icon: <FaHdd style={{ color: '#4A90E2' }} />, path: '/docs-hub/Web3/IPFS/IPFS-Desktop-运行指南' },
      { name: 'Web3基础', icon: <FaBitcoin style={{ color: '#F7931A' }} />, path: '/docs-hub/Web3/Learning/Web2如何转Web3' },
    ]
  },
  {
    title: '资源导航',
    enTitle: 'Resources',
    items: [
      { name: '软件', icon: <FaCogs style={{ color: '#6C6CFF' }} />, path: '/docs-hub/Resource/Soft/Windows装机软件' },
    ]
  },
  {
    title: '其他',
    enTitle: 'Others',
    items: [
      { name: '食谱', icon: <FaUtensils style={{ color: '#FFA500' }} />, path: '/docs-hub/Other/CookBook/柠檬酸辣无骨鸡爪' },
      { name: '笔记', icon: <RiFileTextFill style={{ color: '#40A9FF' }} />, path: '/docs-hub/Other/Notes/使用指南' },
    ]
  }
]