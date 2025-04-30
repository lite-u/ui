import {ReactNode, useState} from 'react'
import {Interactable, Transition} from '../../index'

const Collapse: React.FC<React.HTMLProps<HTMLDivElement> & {
  children: ReactNode,
  head: ReactNode,
}> = ({
        head,
        children,
        onClick,
        onKeyDown,
        style = {},
        ...props
      }) => {
  const [containerHeight, setContainerHeight] = useState(0)
  const [open, setOpen] = useState(false)

  return <div role={'collapse'}>
    <Interactable tag={'div'}
                  style={{userSelect: 'none'}}
                  hover={{background: 'red'}}
                  onClick={() => {
                    console.log(9)
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
      {children}
    </Transition>
  </div>
}

export const Open = Collapse
export default Collapse