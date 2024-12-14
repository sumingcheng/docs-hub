const navbar = {
  hideOnScroll: false,
  title: "Sumingcheng",
  logo: {
    alt: "Sumingcheng Logo",
    src: "img/smc.jpg",
  },
  items: [
    // Backend Dropdown
    {
      type: "dropdown",
      position: "right",
      label: "Backend",
      items: [
        {
          type: "docSidebar",
          sidebarId: "goSidebar",
          label: "Go",
        },
        {
          type: "docSidebar",
          sidebarId: "pythonSidebar",
          label: "Python",
        },
        {
          type: "docSidebar",
          sidebarId: "javaSidebar",
          label: "Java",
        },
        {
          type: "docSidebar",
          sidebarId: "dockerSidebar",
          label: "Docker",
        },
        {
          type: "docSidebar",
          sidebarId: "mysqlSidebar",
          label: "MySQL",
        },
        {
          type: "docSidebar",
          sidebarId: "redisSidebar",
          label: "Redis",
        },
        {
          type: "docSidebar",
          sidebarId: "nginxSidebar",
          label: "Nginx",
        },
        {
          type: "docSidebar",
          sidebarId: "elasticsearchSidebar",
          label: "ElasticSearch",
        },
        {
          type: "docSidebar",
          sidebarId: "mqSidebar",
          label: "MQ",
        },
        {
          type: "docSidebar",
          sidebarId: "mongodbSidebar",
          label: "MongoDB",
        },
        {
          type: "docSidebar",
          sidebarId: "gitSidebar",
          label: "Git",
        },
        {
          type: "docSidebar",
          sidebarId: "regularSidebar",
          label: "Regular",
        },
      ],
    },
    // Frontend Dropdown
    {
      type: "dropdown",
      position: "right",
      label: "Frontend",
      items: [
        {
          type: "docSidebar",
          sidebarId: "javascriptSidebar",
          label: "JavaScript",
        },
        {
          type: "docSidebar",
          sidebarId: "typescriptSidebar",
          label: "TypeScript",
        },
        {
          type: "docSidebar",
          sidebarId: "nodeSidebar",
          label: "Node",
        },
        {
          type: "docSidebar",
          sidebarId: "vueSidebar",
          label: "Vue",
        },
        {
          type: "docSidebar",
          sidebarId: "reactSidebar",
          label: "React",
        },
        {
          type: "docSidebar",
          sidebarId: "engineeringSidebar",
          label: "Engineering",
        },
        {
          type: "docSidebar",
          sidebarId: "htmlSidebar",
          label: "HTML",
        },
        {
          type: "docSidebar",
          sidebarId: "cssSidebar",
          label: "CSS",
        },
        {
          type: "docSidebar",
          sidebarId: "domSidebar",
          label: "DOM",
        },
        {
          type: "docSidebar",
          sidebarId: "bomSidebar",
          label: "BOM",
        },
        {
          type: "docSidebar",
          sidebarId: "electronSidebar",
          label: "Electron",
        },
        {
          type: "docSidebar",
          sidebarId: "quasarSidebar",
          label: "Quasar",
        },
      ],
    },
    {
      type: "dropdown",
      position: "right",
      label: "Interview",
      items: [
        {
          type: "docSidebar",
          sidebarId: "interviewBackendSidebar",
          label: "Backend",
        },
        {
          type: "docSidebar",
          sidebarId: "interviewFrontendSidebar",
          label: "Frontend",
        }
      ],
    },
    {
      type: "dropdown",
      position: "right",
      label: "Network",
      items: [
        {
          type: "docSidebar",
          sidebarId: "networkAjaxSidebar",
          label: "AJAX",
        },
        {
          type: "docSidebar",
          sidebarId: "networkHttpSidebar",
          label: "HTTP",
        },
      ],
    },
    {
      type: "dropdown",
      position: "right",
      label: "Web3",
      items: [
        {
          type: "docSidebar",
          sidebarId: "web3IpfsSidebar",
          label: "IPFS",
        },
        {
          type: "docSidebar",
          sidebarId: "web3LearningSidebar",
          label: "Learning",
        },
      ],
    },
    {
      type: "dropdown",
      position: "right",
      label: "Resource",
      items: [
        {
          type: "docSidebar",
          sidebarId: "resourceSoftSidebar",
          label: "Soft",
        },
      ],
    },
    {
      type: "dropdown",
      position: "right",
      label: "Other",
      items: [
        {
          type: "docSidebar",
          sidebarId: "otherCookbookSidebar",
          label: "CookBook",
        },
        {
          type: "docSidebar",
          sidebarId: "otherNotesSidebar",
          label: "Notes",
        },
      ],
    },
    { to: "/blog", label: "Blog", position: "right" },
    {
      href: "https://github.com/sumingcheng",
      position: "right",
      className: "header-github-link",
      "aria-label": "GitHub 仓库",
    },
  ],
}

module.exports = navbar
