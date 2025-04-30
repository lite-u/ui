import {CSSProperties, ElementType, useEffect, useState} from 'react'
import Polymorphic, {PolymorphicProps} from '../polymorphic/Polymorphic'

type HoverableProps<T extends ElementType> = {
  active?: boolean;
  activeStyle?: CSSProperties;
} & PolymorphicProps<T>

const Hoverable = <T extends ElementType>({
                                            tag = 'div' as T,
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
                                            ...rest
                                          }: HoverableProps<T>) => {
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
    ...rest,
  })
}

export default Hoverable