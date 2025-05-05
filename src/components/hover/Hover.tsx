import {Children, createContext, CSSProperties, FC, isValidElement, ReactNode, useEffect, useRef, useState} from 'react'
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

/**
 * Hover component
 *
 * @brief
 * A hover-triggered wrapper that reveals content based on mouse interactions.
 *
 * @intro
 * Wraps `HoverHead` and `HoverBody` components to provide tooltip or popover-like functionality.
 * It manages visibility and optional persistence of content based on hover state, with customizable delay and trigger behavior.
 *
 * @example
 * import { Hover, HoverHead, HoverBody } from '@lite-u/ui'
 *
 * <Hover delay={200} persistMode>
 *   <HoverHead>Hover me</HoverHead>
 *   <HoverBody>This content shows on hover</HoverBody>
 * </Hover>
 */
const Hover: FC<{
  children: ReactNode,
  /**
   * Delay in milliseconds before hiding the hover content after mouse leaves.
   * @default 0
   */
  delay?: number,
  /**
   * If true, hover effects are triggered only when hovering over the `HoverHead` element,
   * and `HoverBody` will disappear when the mouse leaves the `HoverHead`.
   * @default false
   */
  onlyTriggerByHead?: boolean
  /**
   * Enables persistent display mode, where hover state is managed logically and content is not removed from the DOM,
   * but instead controlled via display (display: none).
   * @default false
   */
  persistMode?: boolean
  style?: CSSProperties
}> = ({
        children,
        delay = 0,
        onlyTriggerByHead = false,
        persistMode = false,
        style = {},
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
      style={style}
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