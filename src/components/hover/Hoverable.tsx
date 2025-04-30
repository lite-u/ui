import {ReactNode, useEffect, useState} from 'react'
import {JSX} from 'react/jsx-runtime'
import Polymorphic, {PolymorphicProps} from '../polymorphic/Polymorphic'
import IntrinsicElements = JSX.IntrinsicElements

const Hoverable: React.FC<
  PolymorphicProps<'div'> &
  {
    children: ReactNode,
    tag?: keyof IntrinsicElements;
    active?: boolean,
    activeStyle?: React.CSSProperties
  }
> = ({
       tag = 'div',
       children,
       onMouseEnter,
       onMouseOver,
       onMouseLeave,
       onMouseDown,
       onMouseUp,
       active = false,
       activeStyle = {
         backgroundColor: '#dfdfdf',
       },
       style = {},
       ...props
     }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(active)
  }, [active])

  const handleMouseEnter = () => {
    setIsActive(true)
  }

  const handleMouseOver = () => {
    setIsActive(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
  }

  return Polymorphic({
    tag,
    children,
    style: {
      ...(isActive ? activeStyle : {}),
      ...style,
    },
    onMouseEnter: (e) => {
      handleMouseEnter()
      onMouseEnter && onMouseEnter(e)
    },
    onMouseOver: (e) => {
      handleMouseOver()
      onMouseOver && onMouseOver(e)
    },
    onMouseLeave: (e) => {
      handleMouseLeave()
      onMouseLeave && onMouseLeave(e)
    },
    ...props,
  })
}

export default Hoverable