import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import styles from "./index.module.scss"
import { useColorMode } from '@docusaurus/theme-common'
import {
  RiJavascriptFill,
  RiReactjsFill,
  RiVuejsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiNodejsFill,
  RiDatabase2Fill,
  RiGithubFill,
  RiBookFill,
  RiCodeBoxFill,
  RiWindowFill,
  RiSettings4Fill,
  RiFileTextFill,
  RiFolderOpenFill,
  RiGlobalFill,
  RiTerminalBoxFill,
  RiToolsFill,
  RiAppsLine,
  RiCodeSSlashFill,
  RiServerFill
} from 'react-icons/ri'

import {
  FaJava,
  FaPython,
  FaDocker,
  FaReact,
  FaDatabase,
  FaCode,
  FaNetworkWired,
  FaRegFileCode,
  FaDesktop,
  FaCogs,
  FaCubes,
  FaGlobe,
  FaBook,
  FaFolder
} from 'react-icons/fa'

import NeonButton from '../components/NeonButton'

// 添加一个辅助函数来处理路径
const getDocPath = (path) => `/docs-hub${path}`

// 定义文档分类
const categories = [
  {
    title: '后端开发',
    enTitle: 'Backend',
    items: [
      { name: 'Go', icon: <FaCode className={styles.itemIcon} />, path: 'Backend/Go/intro' },
      { name: 'Python', icon: <FaPython className={styles.itemIcon} />, path: 'Backend/Python' },
      { name: 'Java', icon: <FaJava className={styles.itemIcon} />, path: 'Backend/Java' },
      { name: 'Docker', icon: <FaDocker className={styles.itemIcon} />, path: 'Backend/Docker' },
      { name: 'MySQL', icon: <FaDatabase className={styles.itemIcon} />, path: 'Backend/MySQL' },
      { name: 'Redis', icon: <FaDatabase className={styles.itemIcon} />, path: 'Backend/Redis' },
      { name: 'Nginx', icon: <RiServerFill className={styles.itemIcon} />, path: 'Backend/Nginx' },
      { name: 'ElasticSearch', icon: <FaDatabase className={styles.itemIcon} />, path: 'Backend/ElasticSearch' },
      { name: 'MQ', icon: <FaNetworkWired className={styles.itemIcon} />, path: 'Backend/MQ' },
      { name: 'MongoDB', icon: <FaDatabase className={styles.itemIcon} />, path: 'Backend/MongoDB' },
      { name: 'Git', icon: <RiGithubFill className={styles.itemIcon} />, path: 'Backend/Git' },
      { name: '正则', icon: <FaRegFileCode className={styles.itemIcon} />, path: 'Backend/Regular' },
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

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const { colorMode } = useColorMode()

  return (
    <header className={clsx('hero', styles.heroBanner, styles[colorMode])}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Documentation Center
        </Heading>
        <p className="hero__subtitle">
          前端、后端、Web3 一站式技术文档中心
        </p>
        <div className={styles.buttons}>
          <NeonButton to="/docs/intro">
            开始阅读文档 📚
          </NeonButton>
        </div>
      </div>
    </header>
  )
}

function CategoryCard({ category }) {
  const getFullPath = (path) => `/docs-hub/docs/${path}`

  return (
    <div className={styles.categoryCard}>
      <h3 className={styles.categoryTitle} data-cn={category.title}>
        {category.enTitle}
      </h3>
      <div className={styles.categoryGrid}>
        {category.items.map((item) => (
          <Link
            key={item.name}
            to={getFullPath(item.path)}
            className={styles.itemLink}
          >
            <div className={styles.itemCard}>
              {item.icon}
              <span className={styles.itemName}>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.title}
      description="文档中心 - 前端、后端、Web3 等技术领域的学习笔记和开发经验分享"
    >
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.categories}>
            {categories.map((category, idx) => (
              <CategoryCard key={idx} category={category} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}
