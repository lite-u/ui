import {CSSProperties, ReactNode, useEffect, useRef, useState} from 'react'
import {Con, Transition} from '../../index'

const Collapse: React.FC<React.HTMLProps<HTMLDivElement> & {
  head: ReactNode,
  open?: boolean,
  headStyle?: CSSProperties,
  onToggle?: (isOpen: boolean) => void,
}> = ({
        open = true,
        head,
        children,
        onToggle,
        headStyle,
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