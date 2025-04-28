import {useEffect, useRef} from 'react'

const useElementMoveDetect = (ref: React.RefObject<HTMLElement>, onMove: () => void) => {
  const lastRect = useRef<DOMRect>()

  useEffect(() => {
    const checkMove = () => {
      if (!ref.current) return

      const newRect = ref.current.getBoundingClientRect()

      if (!lastRect.current ||
        newRect.top !== lastRect.current.top ||
        newRect.left !== lastRect.current.left) {
        onMove()
      }

      lastRect.current = newRect
    }

    const interval = setInterval(checkMove, 100) // check every 100ms
    return () => clearInterval(interval)
  }, [onMove])
}

export default useElementMoveDetect