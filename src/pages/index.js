import React from 'react'
import Link from "@docusaurus/Link"
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Heading from "@theme/Heading"
import Layout from "@theme/Layout"
import clsx from "clsx"
import styles from "./index.module.scss"

import NeonButton from '../components/NeonButton'
import CategoryCard from './categories'
import { categories } from './categories'
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
          前端、后端、Web3 一站式文档中心
        </p>
        <div className={styles.buttons}>
          <NeonButton to="/docs-hub/Other/Notes/如何编写技术文章">
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
