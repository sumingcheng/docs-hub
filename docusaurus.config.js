// @ts-check
// 注意：类型注释允许进行类型检查和IDE自动补全

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// 导入Docusaurus的配置类型
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Su Mingcheng\'s Blog', // 网站的标题
  tagline: 'sumingcheng', // 网站的标语
  favicon: 'img/favicon.ico', // 网站的图标
  trailingSlash: true, // 是否在URL末尾添加斜杠
  // 设置你的网站的生产URL
  url: 'https://sumingcheng.github.io',
  // 设置网站在哪个路径名下被访问
  // 对于GitHub pages部署，通常是 '/<projectName>/'
  baseUrl: '/NoteBook/',

  // GitHub pages部署配置。
  // 如果你不使用GitHub pages，你不需要这些。
  organizationName: 'sumingcheng', // 通常是你的GitHub组织/用户名称
  projectName: 'NoteBook', // 通常是你的仓库名称

  onBrokenLinks: 'throw', // 找不到链接时的行为
  onBrokenMarkdownLinks: 'warn', // Markdown中找不到链接时的行为

  // 即使你不使用国际化，你也可以使用此字段来设置有用的元数据，如html lang。
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    localeConfigs: {
      'zh-CN': {
        label: '简体中文'
      },
      en: {
        label: 'English'
      }
    }
  },

  // 预设配置
  presets: [
    [
      'classic',
      // 导入Docusaurus的经典预设选项类型
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // 侧边栏的路径
          // 请更改为你的仓库。
          // 删除此项以删除"编辑此页"链接。
          editUrl: 'https://github.com/sumingcheng'
        },
        blog: {
          showReadingTime: true, // 是否显示阅读时间
          // 请更改为你的仓库。
          // 删除此项以删除"编辑此页"链接。
          editUrl: 'https://github.com/sumingcheng'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css') // 自定义CSS的路径
        }
      })
    ]
  ],

  // 主题配置
  // 导入Docusaurus的经典主题配置类型
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/mini.ico',
    navbar: {
      title: 'Su Mingcheng\'s Blog', // 导航栏标题
      logo: {
        alt: '素明诚', // logo的替代文本
        src: 'img/mini.ico' // logo的路径
      },
      items: [
        // {to: '/blog', label: 'Blog', position: 'right'},
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          position: 'right',
          label: '学习资料'
        },
        {
          type: 'docSidebar',
          sidebarId: 'thoughtsSidebar',
          position: 'right',
          label: '思考碎片'
        },
        {
          type: 'docSidebar',
          sidebarId: 'translationsSidebar',
          position: 'right',
          label: '译文集'
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourceSidebar',
          position: 'right',
          label: '资源'
        },
        {
          href: 'https://github.com/sumingcheng',
          'aria-label': 'GitHub repository',
          position: 'right',
          className: 'github-icon'
        }
      ]
    },
    footer: { // 页脚配置
      style: 'dark',
      links: [
        //   好的文章
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro'
            }
          ]
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro'
            }
          ]
        },
        //   社区的链接
        {
          title: 'Community',
          items: [
            {
              label: 'React',
              href: 'https://react.dev/learn'
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/zh-CN/docs/'
            }
          ]
        },
        //   相关链接
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sumingcheng'
            },
            {
              label: 'yuque',
              href: 'https://www.yuque.com/sumingcheng'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.` // 版权声明
    },
    prism: { // Prism代码高亮配置
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  }
}

module.exports = config // 导出配置
