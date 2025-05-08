import {CSSProperties, ReactNode, RefObject, useEffect, useRef, useState} from 'react'
import Transition, {TransitionProps} from '../transition/Transition'

type CollapseProps = Omit<React.HTMLProps<HTMLDivElement>, 'style' | 'onToggle'> & {
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

/**
 * Collapse component
 *
 * @brief
 * A collapsible container that shows or hides its content with a smooth transition.
 *
 * @intro
 * Renders a toggleable header and a content area that expands or collapses with animation.
 * Useful for accordion-like UI components or sections where content needs to be shown/hidden on demand.
 *
 * @example
 * import Collapse from '@lite-u/ui'
 *
 * <Collapse head="Click me">
 *   <p>This content is hidden or shown based on the collapse state.</p>
 * </Collapse>
 */
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
    <div role={'collapse-switch'}
         style={{
           width: '100%',
           display: 'inline-block', cursor: 'pointer', userSelect: 'none',
           ...headStyle,
         }}
         onClick={() => {
           setIsOpen(!isOpen)
           onToggle?.(!isOpen)
         }}>
      {head}
    </div>

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