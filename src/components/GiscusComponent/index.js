import React from 'react'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'

export default function GiscusComponent() {
  const { colorMode } = useColorMode()

  return (
    <Giscus
      repo="sumingcheng/docs-hub"
      repoId="R_kgDOKQ1N4Q"
      category="Announcements"
      categoryId="DIC_kwDOKQ1N4c4Ckrcs"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode === 'dark' ? 'dark' : 'light'}
      lang="zh-CN"
      loading="lazy"
    />
  )
} 