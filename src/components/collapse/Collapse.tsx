import {ReactNode, useEffect, useRef, useState} from 'react'
import {Interactable, Transition} from '../../index'

const Collapse: React.FC<React.HTMLProps<HTMLDivElement> & {
  head: ReactNode,
  onToggle: (isOpen: boolean) => void,
}> = ({
        head,
        children,
        onToggle,
        ...props
      }) => {
  const [containerHeight, setContainerHeight] = useState(0)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const r = containerRef.current.getBoundingClientRect()

    setContainerHeight(r.height)
  }, [containerRef.current])

  return <div role={'collapse'}>
    <Interactable tag={'div'}
                  style={{userSelect: 'none'}}
                  hover={{background: 'red'}}
                  onClick={() => {
                    setOpen(!open)
                    onToggle?.(!open)
                  }}>{head}</Interactable>

    <Transition
      visible={open}
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