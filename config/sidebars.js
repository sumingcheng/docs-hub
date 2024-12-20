/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // ===== Backend =====
  // 编程语言
  goSidebar: [{
    type: "autogenerated",
    dirName: "Backend/Go",
  }],
  pythonSidebar: [{
    type: "autogenerated",
    dirName: "Backend/Python",
  }],
  javaSidebar: [{
    type: "autogenerated",
    dirName: "Backend/Java",
  }],

  // 数据库
  mysqlSidebar: [{
    type: "autogenerated",
    dirName: "Backend/MySQL",
  }],
  redisSidebar: [{
    type: "autogenerated",
    dirName: "Backend/Redis",
  }],
  mongodbSidebar: [{
    type: "autogenerated",
    dirName: "Backend/MongoDB",
  }],

  // 中间件和服务
  dockerSidebar: [{
    type: "autogenerated",
    dirName: "Backend/Docker",
  }],
  nginxSidebar: [{
    type: "autogenerated",
    dirName: "Backend/Nginx",
  }],
  elasticsearchSidebar: [{
    type: "autogenerated",
    dirName: "Backend/ElasticSearch",
  }],
  mqSidebar: [{
    type: "autogenerated",
    dirName: "Backend/MQ",
  }],

  // 工具
  gitSidebar: [{
    type: "autogenerated",
    dirName: "Backend/Git",
  }],
  regularSidebar: [{
    type: "autogenerated",
    dirName: "Backend/Regular",
  }],

  // ===== Frontend =====
  // 核心语言
  javascriptSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/JavaScript",
  }],
  typescriptSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/TypeScript",
  }],

  // 框架
  vueSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/Vue",
  }],
  reactSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/React",
  }],

  // 基础技术
  htmlSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/HTML",
  }],
  cssSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/CSS",
  }],
  domSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/DOM",
  }],
  bomSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/BOM",
  }],

  // Node相关
  nodeSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/Node",
  }],
  electronSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/Electron",
  }],

  // 工程化
  engineeringSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/Engineering",
  }],
  quasarSidebar: [{
    type: "autogenerated",
    dirName: "Frontend/Quasar",
  }],

  // ===== Interview =====
  interviewBackendSidebar: [{
    type: "autogenerated",
    dirName: "Interview/Backend",
  }],
  interviewFrontendSidebar: [{
    type: "autogenerated",
    dirName: "Interview/Frontend",
  }],

  // ===== Network =====
  networkAjaxSidebar: [{
    type: "autogenerated",
    dirName: "Network/AJAX",
  }],
  networkHttpSidebar: [{
    type: "autogenerated",
    dirName: "Network/HTTP",
  }],

  // ===== Web3 =====
  web3IpfsSidebar: [{
    type: "autogenerated",
    dirName: "Web3/IPFS",
  }],
  web3LearningSidebar: [{
    type: "autogenerated",
    dirName: "Web3/Learning",
  }],

  // ===== Resource =====
  resourceSoftSidebar: [{
    type: "autogenerated",
    dirName: "Resource/Soft",
  }],

  // ===== Other =====
  otherCookbookSidebar: [{
    type: "autogenerated",
    dirName: "Other/CookBook",
  }],
  otherNotesSidebar: [{
    type: "autogenerated",
    dirName: "Other/Notes",
  }],
}

module.exports = sidebars
