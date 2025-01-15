import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Heading from "@theme/Heading"
import Layout from "@theme/Layout"
import clsx from "clsx"
import React from 'react'
import styles from "./index.module.scss"

import NeonButton from '../components/NeonButton'
import Categories from './categories'


function HomepageHeader() {
  const { colorMode } = useColorMode()

  return (
    <header className={clsx('hero', styles.heroBanner, styles[colorMode])}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Documentation Center
        </Heading>
        <p className="hero__subtitle">
          技术知识分享与学习笔记汇总 📝
        </p>
        <p style={{ fontSize: '14px' }}>
        归档了2024年之前发布在语雀、知乎、简书、掘金的技术文章
        </p>
        <div className={styles.buttons}>
          <NeonButton to="/docs-hub/blog">
            开始阅读文档 📚
          </NeonButton>
        </div>
      </div>
    </header>
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
          <Categories />
        </div>
      </main>
    </Layout>
  )
}
