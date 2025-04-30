export {};
/*
import {CSSProperties, ElementType, useEffect, useState} from 'react'

type InteratableProps<T extends ElementType> = {
  active?: boolean;
  activeStyle?: CSSProperties;
} & PolymorphicProps<T>

const Interatable = <T extends ElementType>({
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
                                          }: InteratableProps<T>) => {
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
      ...style,
      ...(isActive ? activeStyle : {}),
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

export default Interatable*/
