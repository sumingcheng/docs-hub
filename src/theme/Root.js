import React, { useEffect } from 'react'
import ZoomImage from '@site/src/components/ZoomImage'

export default function Root({ children }) {
  useEffect(() => {
    console.log("Copyright protection initialized")
    const addCopyright = () => {
      document.addEventListener("copy", (e) => {
        const selectedText = window.getSelection().toString()

        if (selectedText && selectedText.length > 1500) {
          const copyright = `
---
作者：素明诚 (sumingcheng)
链接：${window.location.href}
来源：素明诚的博客
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
`
          e.clipboardData.setData("text/plain", selectedText + copyright)
          e.preventDefault()
        }
      })
    }

    addCopyright()
  }, [])

  return (
    <>
      {children}
      <ZoomImage />
    </>
  )
}
