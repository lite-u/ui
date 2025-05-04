import {CSSProperties, ReactNode, RefObject, useEffect, useRef, useState} from 'react'
import {Con, Transition} from '../../index'

type CollapseProps = React.HTMLProps<HTMLDivElement> & {
  head: ReactNode,
  open?: boolean,
  headStyle?: CSSProperties,
  contentStyle?: CSSProperties,
  duration?: number,
  leaveDuration?: number,
  onToggle?: (isOpen: boolean) => void,
  ref?: RefObject<HTMLDivElement>,
}
const Collapse: React.FC<CollapseProps> = ({
                                             open = true,
                                             head,
                                             children,
                                             onToggle,
                                             headStyle,
                                             contentStyle,
                                             ...props
                                           }) => {
  const [containerHeight, setContainerHeight] = useState(0)
  const [isOpen, setIsOpen] = useState(open)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const r = containerRef.current.getBoundingClientRect()

    setContainerHeight(r.height)
  }, [containerRef.current, children])

  return <div role={'collapse'}>
    <Con role={'collapse-switch'}
      // fw
         w={'auto'}
         style={{
           display: 'inline-block', cursor: 'pointer', userSelect: 'none',
           ...headStyle,
         }}
         onClick={() => {
           setIsOpen(!isOpen)
           onToggle?.(!isOpen)
         }}>
      {head}
    </Con>

    <Transition
      visible={isOpen}
      from={{
        height: 0,
      }}
      to={{
        height: containerHeight,
      }}
      style={{
        overflow: 'hidden',
        ...contentStyle,
      }}
      {...props}>
      <div ref={containerRef} role={'collapse-content'}>
        {children}
      </div>
    </Transition>
  </div>
}

export const Open = Collapse
export default Collapse