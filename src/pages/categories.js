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
      { name: 'Go', icon: <FaCode className={styles.itemIcon} />, path: '/docs-hub/category/基础' },
      { name: 'Python', icon: <FaPython className={styles.itemIcon} />, path: '/docs-hub/category/基础-1' },
      { name: 'Java', icon: <FaJava className={styles.itemIcon} />, path: '/docs-hub/category/基础-2' },
      { name: 'Docker', icon: <FaDocker className={styles.itemIcon} />, path: '/docs-hub/Backend/Docker/Docker-基础命令' },
      { name: 'MySQL', icon: <FaDatabase className={styles.itemIcon} />, path: '/docs-hub/Backend/MySQL/常用SQL语句' },
      { name: 'Redis', icon: <FaDatabase className={styles.itemIcon} />, path: '/docs-hub/Backend/Redis/Redis-基础使用' },
      { name: 'Nginx', icon: <RiServerFill className={styles.itemIcon} />, path: '/docs-hub/Backend/Nginx/Nginx基础入门' },
      { name: 'ElasticSearch', icon: <FaDatabase className={styles.itemIcon} />, path: '/docs-hub/Backend/ElasticSearch/ElasticSearch-安装使用' },
      { name: 'MQ', icon: <FaNetworkWired className={styles.itemIcon} />, path: '/docs-hub/Backend/MQ/Go-Kafka安装使用指南' },
      { name: 'MongoDB', icon: <FaDatabase className={styles.itemIcon} />, path: '/docs-hub/Backend/MongoDB/MongoDB安装与使用' },
      { name: 'Git', icon: <RiGithubFill className={styles.itemIcon} />, path: '/docs-hub/Backend/Git/Git-提交规范' },
      { name: '正则', icon: <FaRegFileCode className={styles.itemIcon} />, path: '/docs-hub/Backend/Regular/正则表达式基础' },
    ]
  },
  {
    title: '前端开发',
    enTitle: 'Frontend',
    items: [
      { name: 'JavaScript', icon: <RiJavascriptFill className={styles.itemIcon} />, path: 'Frontend/JavaScript' },
      { name: 'TypeScript', icon: <FaCode className={styles.itemIcon} />, path: 'Frontend/TypeScript' },
      { name: 'Vue', icon: <RiVuejsFill className={styles.itemIcon} />, path: 'Frontend/Vue' },
      { name: 'React', icon: <FaReact className={styles.itemIcon} />, path: 'Frontend/React' },
      { name: 'HTML', icon: <RiHtml5Fill className={styles.itemIcon} />, path: 'Frontend/HTML' },
      { name: 'CSS', icon: <RiCss3Fill className={styles.itemIcon} />, path: 'Frontend/CSS' },
      { name: 'DOM', icon: <RiWindowFill className={styles.itemIcon} />, path: 'Frontend/DOM' },
      { name: 'BOM', icon: <RiWindowFill className={styles.itemIcon} />, path: 'Frontend/BOM' },
      { name: 'Node', icon: <RiNodejsFill className={styles.itemIcon} />, path: 'Frontend/Node' },
      { name: 'Electron', icon: <FaDesktop className={styles.itemIcon} />, path: 'Frontend/Electron' },
      { name: '工程化', icon: <FaCogs className={styles.itemIcon} />, path: 'Frontend/Engineering' },
      { name: 'Quasar', icon: <FaCode className={styles.itemIcon} />, path: 'Frontend/Quasar' },
    ]
  },
  {
    title: '面试题',
    enTitle: 'Interview',
    items: [
      { name: '后端面试', icon: <RiBookFill className={styles.itemIcon} />, path: 'Interview/Backend' },
      { name: '前端面试', icon: <RiBookFill className={styles.itemIcon} />, path: 'Interview/Frontend' },
    ]
  },
  {
    title: '网络',
    enTitle: 'Network',
    items: [
      { name: 'AJAX', icon: <FaGlobe className={styles.itemIcon} />, path: 'Network/AJAX' },
      { name: 'HTTP', icon: <FaGlobe className={styles.itemIcon} />, path: 'Network/HTTP' },
    ]
  },
  {
    title: 'Web3',
    enTitle: 'Web3',
    items: [
      { name: 'IPFS', icon: <FaCubes className={styles.itemIcon} />, path: 'Web3/IPFS' },
      { name: 'Web3基础', icon: <FaBook className={styles.itemIcon} />, path: 'Web3/Learning' },
    ]
  },
  {
    title: '资源导航',
    enTitle: 'Resources',
    items: [
      { name: '资源', icon: <FaFolder className={styles.itemIcon} />, path: 'Resource' },
      { name: '软件', icon: <FaCogs className={styles.itemIcon} />, path: 'Resource/Soft' },
    ]
  },
  {
    title: '其他',
    enTitle: 'Others',
    items: [
      { name: '食谱', icon: <RiBookFill className={styles.itemIcon} />, path: 'Other/CookBook' },
      { name: '笔记', icon: <RiFileTextFill className={styles.itemIcon} />, path: 'Other/Notes' },
    ]
  }
]