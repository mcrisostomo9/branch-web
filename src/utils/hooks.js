import { useState, useEffect } from "react"

// Hook
export function useWindowSize() {
  const isClient = typeof window === "object"

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }
    console.log(`window size: ${windowSize.width}`)
    console.log("running on mount")
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
