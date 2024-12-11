import Link from "@docusaurus/Link"
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Heading from "@theme/Heading"
import Layout from "@theme/Layout"
import clsx from "clsx"
import styles from "./index.module.scss"

import NeonButton from '../components/NeonButton'
import { categories } from './categories'


function HomepageHeader() {
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
  return (
    <div className={styles.categoryCard}>
      <h3 className={styles.categoryTitle} data-cn={category.title}>
        {category.enTitle}
      </h3>
      <div className={styles.categoryGrid}>
        {category.items.map((item) => (
          <Link
            key={item.name}
            to={item.path}
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
