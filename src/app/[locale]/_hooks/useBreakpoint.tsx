import { useEffect, useState } from 'react'

const useBreakpoint = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize.width])

  return windowSize
}

export default useBreakpoint
