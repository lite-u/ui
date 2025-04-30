import {ReactNode, useEffect, useRef, useState} from 'react'
import {Row, Transition} from '../../index'

const Collapse: React.FC<React.HTMLProps<HTMLDivElement> & {
  head: ReactNode,
  open?: boolean,
  onToggle?: (isOpen: boolean) => void,
}> = ({
        open = true,
        head,
        children,
        onToggle,
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
    <Row fw
         style={{userSelect: 'none'}}
         onClick={() => {
           setIsOpen(!isOpen)
           onToggle?.(!isOpen)
         }}>
      {head}
    </Row>

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
      <div ref={containerRef}>
        {children}
      </div>
    </Transition>
  </div>
}

export const Open = Collapse
export default Collapse