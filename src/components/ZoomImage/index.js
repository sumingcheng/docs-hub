import React, { useEffect } from 'react'
import mediumZoom from 'medium-zoom'

export default function ZoomImage() {
  useEffect(() => {
    try {
      // 创建 zoom 实例
      const zoom = mediumZoom('.markdown img, article img', {
        margin: 24,
        background: 'rgba(0, 0, 0, 0.8)',
        scrollOffset: 0,
      })

      // 清理函数
      return () => {
        try {
          zoom.detach() // 清理 zoom 实例
        } catch (error) {
          console.error('Error detaching zoom:', error)
        }
      }
    } catch (error) {
      console.error('Error initializing zoom:', error)
    }
  }, [])

  return null
}