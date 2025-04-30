import {CSSProperties, ElementType, useState} from 'react'
import Polymorphic, {PolymorphicProps} from '../polymorphic/Polymorphic'

type InteractableProps<T extends ElementType> = {
  hover?: CSSProperties;
  focus?: CSSProperties;
  down?: CSSProperties;
} & PolymorphicProps<T>

const Interactable = <T extends ElementType>({
                                               tag = 'div' as T,
                                               children,
                                               onMouseEnter,
                                               onMouseOver,
                                               onMouseLeave,
                                               onMouseDown,
                                               onMouseUp,
                                               onFocus,
                                               onBlur,
                                               // onHoverEnd,
                                               // active = {},
                                               hover = {},
                                               down = {},
                                               focus = {},
                                               style = {},
                                               ...rest
                                             }: InteractableProps<T>) => {
  const [isHover, setIsHover] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [isDown, setIsDown] = useState(false)

  return Polymorphic({
    tag,
    children,
    style: {
      ...style,
      ...(isHover ? hover : {}),
      ...(isFocus ? focus : {}),
      ...(isDown ? down : {}),
    },
    onMouseEnter: (e) => {
      setIsHover(true)
      onMouseEnter && onMouseEnter(e)
    },
    onMouseOver: (e) => {
      setIsHover(true)
      onMouseOver && onMouseOver(e)
    },
    onMouseLeave: (e) => {
      setIsHover(false)
      onMouseLeave && onMouseLeave(e)
    },
    onMouseDown: (e) => {
      setIsDown(true)
      onMouseDown && onMouseDown(e)
    },
    onMouseUp: (e) => {
      setIsDown(false)
      onMouseUp && onMouseUp(e)
    },
    onFocus: (e) => {
      setIsFocus(true)
      onFocus && onFocus(e)
    },
    onBlur: (e) => {
      setIsFocus(false)
      onBlur && onBlur(e)
    },
    ...rest,
  })
}

export default Interactable