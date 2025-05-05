import {CSSProperties, ReactNode, RefObject, useEffect, useRef, useState} from 'react'
import {Con, Transition} from '../../index'
import {TransitionProps} from '../transition/Transition'

type CollapseProps = React.HTMLProps<HTMLDivElement> & {
  /**
   * The clickable header element that toggles the collapse.
   * @default \-
   */
  head: ReactNode,
  /**
   * Controls whether the collapse is initially open.
   * @default true
   */
  open?: boolean,
  /**
   * Inline styles applied to the clickable header element.
   * @default \-
   */
  headStyle?: CSSProperties,
  /**
   * Inline styles applied to the collapsible content container.
   * @default \-
   */
  contentStyle?: CSSProperties,
  /**
   * Duration of the enter transition in milliseconds.
   * @default \-
   */
  duration?: TransitionProps['duration'],
  /**
   * Duration of the leave transition in milliseconds.
   * @default \-
   */
  exitDuration?: TransitionProps['exitDuration'],
  /**
   * Callback fired when the collapse is toggled. Receives the new open state.
   * @default \-
   */
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

  return <div role={'collapse'} style={{flex: 1}}>
    <Con role={'collapse-switch'}
      // fw
         w={'100%'}
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