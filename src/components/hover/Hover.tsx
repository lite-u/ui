import {Children, createContext, FC, isValidElement, ReactNode, useEffect, useRef, useState} from 'react'
import HoverHead from './HoverHead'
import HoverBody from './HoverBody'

type HoverContextType = {
  show: boolean
  persisted: boolean
  onMouseEnter?: VoidFunction | null
  onMouseLeave?: VoidFunction | null
}
export const HoverContext = createContext<HoverContextType>({
  show: false,
  persisted: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
})

const Hover: FC<{
  children: ReactNode,
  delay?: number,
  onlyTriggerByHead?: boolean
  persistMode?: boolean
}> = ({
        children,
        delay = 0,
        onlyTriggerByHead = false,
        persistMode = false,
      }) => {
  const [isShow, setIsShow] = useState(false)
  const filterChildren: ReactNode[] = []
  const leaveTimer = useRef(0)
  const [persist, setPersist] = useState(false)

  useEffect(() => {
    setPersist(persistMode)
  }, [persistMode])
  Children.forEach(children, (child) => {
    const isElement = isValidElement(child)

    if (isElement) {
      const type = child.type

      if (type === HoverHead || type === HoverBody) {
        filterChildren.push(child)
      }
    } else {
      console.error(`<Hover> only accepts <HoverHead> and <HoverBody> as children. Found: ${child}`)
    }
  })

  const handleEnter = () => {
    clearTimeout(leaveTimer.current)
    setIsShow(true)
  }

  const handlerLeave = () => {
    clearTimeout(leaveTimer.current)

    leaveTimer.current = window.setTimeout(() => {
      setIsShow(false)
    }, delay)
  }

  return <HoverContext.Provider
    value={{
      persisted: persist,
      show: isShow,
      onMouseEnter: onlyTriggerByHead ? handleEnter : null,
      onMouseLeave: onlyTriggerByHead ? handlerLeave : null,
    }}>
    <div
      onMouseEnter={() => {
        if (onlyTriggerByHead) return
        handleEnter()
      }}
      onMouseLeave={() => {
        if (onlyTriggerByHead) return
        handlerLeave()
      }}>
      {filterChildren}
    </div>
  </HoverContext.Provider>
}

export default Hover