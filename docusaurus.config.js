// @ts-check
// 注意：类型注释允许进行类型检查和IDE自动补全

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// 导入Docusaurus的配置类型
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '素明诚的笔记本', // 网站的标题
  tagline: '问题多多', // 网站的标语
  favicon: 'img/favicon.ico', // 网站的图标

  // 设置你的网站的生产URL
  url: 'https://sumingcheng.github.io',
  // 设置网站在哪个路径名下被访问
  // 对于GitHub pages部署，通常是 '/<projectName>/'
  baseUrl: '/NoteBook',

  // GitHub pages部署配置。
  // 如果你不使用GitHub pages，你不需要这些。
  organizationName: 'sumingcheng', // 通常是你的GitHub组织/用户名称
  projectName: 'NoteBook', // 通常是你的仓库名称

  onBrokenLinks: 'throw', // 找不到链接时的行为
  onBrokenMarkdownLinks: 'warn', // Markdown中找不到链接时的行为

  // 即使你不使用国际化，你也可以使用此字段来设置有用的元数据，如html lang。
  i18n: {
    defaultLocale: 'zh-CN', // 默认语言
    locales: ['zh-CN'], // 所支持的语言
    localeConfigs: {
      'zh-CN': {
        label: '中文' // 语言的标签
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
  themeConfig:
  // 导入Docusaurus的经典主题配置类型
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // 用你的项目的社交卡片替换
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'My Site', // 导航栏标题
          logo: {
            alt: 'My Site Logo', // logo的替代文本
            src: 'img/logo.svg' // logo的路径
          },
          items: [ // 导航项
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Tutorial'
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/facebook/docusaurus',
              label: 'GitHub',
              position: 'right'
            }
          ]
        },
        footer: { // 页脚配置
          style: 'dark',
          links: [
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
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/docusaurus'
                },
                {
                  label: 'Discord',
                  href: 'https://discordapp.com/invite/docusaurus'
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/docusaurus'
                }
              ]
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog'
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/facebook/docusaurus'
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
      })
}

module.exports = config // 导出配置
