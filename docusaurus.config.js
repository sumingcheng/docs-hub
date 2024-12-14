// @ts-check
// `@type` JSDoc注解可实现编辑器自动补全和类型检查
// (需配合 `@ts-check` 使用)
// 有多种等效方式来声明Docusaurus配置
// 详见: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer"
const navbar = require('./config/navbar')
const additionalLanguages = require('./config/additionalLanguages')

// 此代码运行在Node.js环境 - 禁止使用客户端代码(浏览器API、JSX等)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sumingcheng's Document Center",
  tagline: "Document Center",
  favicon: "img/favicon.ico",

  // 设置网站生产环境URL
  url: "https://sumingcheng.github.io",
  // 设置网站服务的基础路径
  // GitHub pages部署通常为'/<projectName>/'
  baseUrl: "/docs-hub/",

  // GitHub pages部署配置
  // 如不使用GitHub pages可忽略以下配置
  organizationName: "sumingcheng", // 通常是GitHub组织/用户名
  projectName: "docs-hub", // 通常是仓库名

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // 元数据必须设置
  // 例如，中文网站可将"en"替换为"zh-CN"
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
    localeConfigs: {
      "zh-CN": {
        label: "简体中文",
      },
    },
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./config/sidebars.js",
          editUrl: "https://github.com/sumingcheng/docs-hub/edit/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          routeBasePath: '/',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'], // 包含所有子目录
          blogSidebarCount: "ALL",     // 显示所有文章
          blogSidebarTitle: '所有文章', // 侧边栏标题
          sortPosts: 'descending',     // 按日期降序排列
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // 请更改为你的仓库地址
          // 删除此行将移除"编辑此���"链接
          editUrl: "https://github.com/sumingcheng/docs-hub",
          // 博客最佳实践的相关选项
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "ignore", // 忽略未截断的博客文章
        },
        theme: {
          customCss: [
            "./src/css/custom.css",
            "./src/css/article.css",
            "./src/css/navbar.css"
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为你项目的社交卡片
      image: "img/docusaurus-social-card.jpg",
      metadata: [
        {
          name: "keywords",
          content:
            "素明诚, sumingcheng, 技术文档, 博客, 前端开发, 后端开发, Web开发, JavaScript, TypeScript, Vue, React, Go, Python, Java",
        },
        {
          name: "description",
          content:
            "素明诚的技术文档和博客，涵盖前端、后端、Web3等多个技术领域的学习笔记和开发经验分享",
        },
        {
          name: "author",
          content: "素明诚 (sumingcheng)",
        },
      ],
      head: [
        // 添加多个思源黑体 CDN 源以提高可用性
        {
          tagName: "link",
          rel: "stylesheet",
          href: "https://npm.elemecdn.com/source-han-sans-sc@1.001/dist/source-han-sans-sc.css",
        },
        {
          tagName: "link",
          rel: "stylesheet",
          href: "https://cdn.bootcdn.net/ajax/libs/source-han-sans-sc/1.001/source-han-sans-sc.min.css",
        },
        {
          tagName: "link",
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap",
        },
        {
          tagName: "link",
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap",
        },
      ],
      navbar: navbar,
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "语雀",
                href: "https://www.yuque.com/sumingcheng",
              },
              {
                label: "知乎",
                href: "https://www.zhihu.com/people/xiaolaodi.top",
              },
            ],
          },
          {
            title: "Acknowledgments",
            items: [
              {
                label: "React",
                href: "https://react.dev",
              },
              {
                label: "Docusaurus",
                href: "https://docusaurus.io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://sumingcheng.cn",
              },
              {
                label: "GitHub",
                href: "https://github.com/sumingcheng",
              },
            ],
          },
        ],
        copyright: `Copyright \u00A9 2020-${new Date().getFullYear()} Sumingcheng. All Rights Reserved.`,
      },
      algolia: {
        apiKey: "18c32a5f522a7cc9090995a10ee1258c",
        indexName: "sumingcheng",
        appId: "P783BA7DL3",
        searchPagePath: "search",
        contextualSearch: true,
        searchParameters: {
          hitsPerPage: 8,
        },
        replaceSearchResultPathname: {
          from: '/docs-hub/',
          to: '/docs-hub/',
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: additionalLanguages,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      giscus: {
        repo: 'sumingcheng/docs-hub',
        repoId: 'R_kgDOKQ1N4Q',
        category: 'Announcements',
        categoryId: 'DIC_kwDOKQ1N4c4Ckrcs',
        mapping: 'pathname',
        reactionsEnabled: '1',
        emitMetadata: '0',
        inputPosition: 'top',
        lang: 'zh-CN',
        loading: 'lazy',
        theme: 'preferred_color_scheme',
      },
    }),
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      async: true,
      crossorigin: "anonymous",
    },
  ],
  customFields: {
    carbonServeId: "CVYD42T7", //  Carbon Ads ID
  },
  future: {
    experimental_faster: true, // 启用实验性能优化
  },
}

export default config
