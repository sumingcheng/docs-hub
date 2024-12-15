import React from 'react'
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768
}

export const useIsMobile = () => {
  const [isMobileView, setIsMobileView] = React.useState(isMobile())

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(isMobile())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobileView
}