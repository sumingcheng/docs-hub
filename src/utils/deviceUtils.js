import React from 'react'
import { throttle } from 'lodash'

export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768
}

export const useIsMobile = () => {
  const [isMobileView, setIsMobileView] = React.useState(false)

  React.useEffect(() => {
    setIsMobileView(isMobile())
    
    const handleResize = throttle(() => {
      setIsMobileView(isMobile())
    }, 200)

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

  return isMobileView
}