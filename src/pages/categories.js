import {
  FaBook,
  FaCode,
  FaCogs,
  FaCubes,
  FaDatabase,
  FaDesktop,
  FaDocker,
  FaFolder,
  FaGlobe,
  FaJava,
  FaNetworkWired,
  FaPython,
  FaReact,
  FaRegFileCode
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
import styles from "./index.module.scss"

// 定义文档分类
export const categories = [
  {
    title: '后端开发',
    enTitle: 'Backend',
    items: [
      // 编程语言
      { name: 'Go', icon: <FaCode className={styles.itemIcon} />, path: '/docs-hub/category/基础' },
      { name: 'Python', icon: <FaPython className={styles.itemIcon} />, path: '/docs-hub/category/基础-1' },
      { name: 'Java', icon: <FaJava className={styles.itemIcon} />, path: '/docs-hub/category/基础-2' },
      // 中间件和服务
      { name: 'Docker', icon: <FaDocker className={styles.itemIcon} />, path: '/docs-hub/Backend/Docker/Docker-基础命令' },
      { name: 'Nginx', icon: <RiServerFill className={styles.itemIcon} />, path: '/docs-hub/Backend/Nginx/Nginx基础入门' },
      { name: 'ElasticSearch', icon: <FaDatabase className={styles.itemIcon} />, path: '/docs-hub/Backend/ElasticSearch/ElasticSearch-安装使用' },
      { name: 'MQ', icon: <FaNetworkWired className={styles.itemIcon} />, path: '/docs-hub/Backend/MQ/Go-Kafka安装使用指南' },
      // 数据库
      { name: 'MySQL', icon: <FaDatabase className={styles.itemIcon} />, path: '/docs-hub/Backend/MySQL/常用SQL语句' },
      { name: 'Redis', icon: <FaDatabase className={styles.itemIcon} />, path: '/docs-hub/Backend/Redis/Redis-基础使用' },
      { name: 'MongoDB', icon: <FaDatabase className={styles.itemIcon} />, path: '/docs-hub/Backend/MongoDB/MongoDB安装与使用' },
      // 工具
      { name: 'Git', icon: <RiGithubFill className={styles.itemIcon} />, path: '/docs-hub/Backend/Git/Git-提交规范' },
      { name: '正则', icon: <FaRegFileCode className={styles.itemIcon} />, path: '/docs-hub/Backend/Regular/正则表达式基础' },
    ]
  },
  {
    title: '前端开发',
    enTitle: 'Frontend',
    items: [
      // 核心语言
      { name: 'JavaScript', icon: <RiJavascriptFill className={styles.itemIcon} />, path: '/docs-hub/category/es3-es5' },
      { name: 'TypeScript', icon: <FaCode className={styles.itemIcon} />, path: '/docs-hub/Frontend/TypeScript/TypeScript简介' },
      // Node相关
      { name: 'Node', icon: <RiNodejsFill className={styles.itemIcon} />, path: '/docs-hub/Frontend/Node/NodeJS基本认知' },
      // 框架
      { name: 'Vue', icon: <RiVuejsFill className={styles.itemIcon} />, path: '/docs-hub/category/vue基础入门' },
      { name: 'React', icon: <FaReact className={styles.itemIcon} />, path: '/docs-hub/Frontend/React/初识React' },
      // 工程化
      { name: '工程化', icon: <FaCogs className={styles.itemIcon} />, path: '/docs-hub/Frontend/Engineering/核心-Web-指标' },
      // 基础技术
      { name: 'HTML', icon: <RiHtml5Fill className={styles.itemIcon} />, path: '/docs-hub/Frontend/HTML/DOCTYPE' },
      { name: 'CSS', icon: <RiCss3Fill className={styles.itemIcon} />, path: '/docs-hub/Frontend/CSS/CSS-选择器-权重-匹配规则' },
      { name: 'DOM', icon: <RiWindowFill className={styles.itemIcon} />, path: '/docs-hub/Frontend/DOM/DOM初识-JS对象-XML-幻灯片案例展示' },
      { name: 'BOM', icon: <RiWindowFill className={styles.itemIcon} />, path: '/docs-hub/Frontend/BOM/深入理解BOM' },
      { name: 'Electron', icon: <FaDesktop className={styles.itemIcon} />, path: '/docs-hub/Frontend/Electron/初识-基础' },
      { name: 'Quasar', icon: <FaCode className={styles.itemIcon} />, path: '/docs-hub/Frontend/Quasar/Quasar项目搭建' },
    ]
  },
  {
    title: '面试题',
    enTitle: 'Interview',
    items: [
      { name: '后端面试', icon: <RiBookFill className={styles.itemIcon} />, path: '/docs-hub/Interview/Backend/占位' },
      { name: '前端面试', icon: <RiBookFill className={styles.itemIcon} />, path: '/docs-hub/Interview/Frontend/浏览器是如何渲染页面的' },
    ]
  },
  {
    title: '网络',
    enTitle: 'Network',
    items: [
      { name: 'AJAX', icon: <FaGlobe className={styles.itemIcon} />, path: '/docs-hub/Network/AJAX/JSON基础与数据解析-JSON方法-AJAX初识' },
      { name: 'HTTP', icon: <FaGlobe className={styles.itemIcon} />, path: '/docs-hub/Network/HTTP/URL-客户端-服务端-域名操作' },
    ]
  },
  {
    title: 'Web3',
    enTitle: 'Web3',
    items: [
      { name: 'IPFS', icon: <FaCubes className={styles.itemIcon} />, path: '/docs-hub/Web3/IPFS/IPFS-Desktop-运行指南' },
      { name: 'Web3基础', icon: <FaBook className={styles.itemIcon} />, path: '/docs-hub/Web3/Learning/Web2如何转Web3' },
    ]
  },
  {
    title: '资源导航',
    enTitle: 'Resources',
    items: [
      { name: '软件', icon: <FaCogs className={styles.itemIcon} />, path: '/docs-hub/Resource/Soft/Windows装机软件' },
    ]
  },
  {
    title: '其他',
    enTitle: 'Others',
    items: [
      { name: '食谱', icon: <RiBookFill className={styles.itemIcon} />, path: '/docs-hub/Other/CookBook/柠檬酸辣无骨鸡爪' },
      { name: '笔记', icon: <RiFileTextFill className={styles.itemIcon} />, path: '/docs-hub/Other/Notes/使用指南' },
    ]
  }
]