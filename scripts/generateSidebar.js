const fs = require("fs")
const path = require("path")

function getFiles(dir, baseDir = "") {
  const items = []
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 获取目录下的第一个 md/mdx 文件作为目录的介绍文件
      const introFiles = fs
        .readdirSync(fullPath)
        .filter((f) => /^intro\.(md|mdx)$/.test(f))
      const hasIntro = introFiles.length > 0

      const subItems = getFiles(fullPath, path.join(baseDir, file))
      if (subItems.length > 0) {
        items.push({
          type: "category",
          label: file.charAt(0).toUpperCase() + file.slice(1), // 首字母大写
          items: hasIntro
            ? [`${path.join(baseDir, file)}/intro`, ...subItems]
            : subItems,
        })
      }
    } else if (
      /\.(md|mdx)$/.test(file) &&
      file !== "intro.md" &&
      file !== "intro.mdx"
    ) {
      // 添加不包含扩展名的文档路径
      items.push(path.join(baseDir, file).replace(/\.(md|mdx)$/, ""))
    }
  })

  return items
}

function generateSidebar() {
  const docsDir = path.join(__dirname, "..", "docs")
  const sidebar = {}

  // 获取 docs 目录下的所有子目录
  const dirs = fs
    .readdirSync(docsDir)
    .filter((file) => fs.statSync(path.join(docsDir, file)).isDirectory())

  // 为每个子目录生成配置
  dirs.forEach((dir) => {
    const items = getFiles(path.join(docsDir, dir), dir)
    if (items.length > 0) {
      sidebar[`${dir}Sidebar`] = [
        {
          type: "category",
          label: `${dir.charAt(0).toUpperCase() + dir.slice(1)}教程`,
          items,
        },
      ]
    }
  })

  // 写入 sidebars.js
  const sidebarContent = `module.exports = ${JSON.stringify(
    sidebar,
    null,
    2
  )};`
  fs.writeFileSync(path.join(__dirname, "..", "sidebars.js"), sidebarContent)

  console.log("侧边栏配置已成功生成！")
}

generateSidebar()
