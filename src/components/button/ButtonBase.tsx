import {useState} from 'react'
import {Interactable} from '../../index'

export const ButtonBase: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  {
    style?: React.CSSProperties;
  }> = ({
          type = 'button',
          onMouseEnter,
          onMouseOver,
          onMouseLeave,
          onMouseDown,
          onMouseUp,
          children,
          style = {},
          ...props
        }) => {
  const [opacity, setOpacity] = useState(1)

  const handleMouseEnter = () => {
    setOpacity(.8)
  }

  const handleMouseOver = () => {
    setOpacity(.8)
  }

  const handleMouseLeave = () => {
    setOpacity(1)
  }

  const handleMouseDown = () => {
    setOpacity(1)
  }

  const handleMouseUp = () => {
    setOpacity(.8)
  }

  return (
    <Interactable
      tag={'button'}
      type={'button'}
      style={{
        opacity,
        ...style,
      }}
      onMouseEnter={(e) => {
        handleMouseEnter()
        onMouseEnter && onMouseEnter(e)
      }}
      onMouseOver={(e) => {
        handleMouseOver()
        onMouseOver && onMouseOver(e)
      }}
      /* type={type}
       style={{
         opacity,
         ...style,
       }}
       onMouseEnter={(e) => {
         handleMouseEnter()
         onMouseEnter && onMouseEnter(e)
       }}
       onMouseOver={(e) => {
         handleMouseOver()
         onMouseOver && onMouseOver(e)
       }}
       onMouseLeave={(e) => {
         handleMouseLeave()
         onMouseLeave && onMouseLeave(e)
       }}
       onMouseDown={(e) => {
         handleMouseDown()
         onMouseDown && onMouseDown(e)
       }}
       onMouseUp={(e) => {
         handleMouseUp()
         onMouseUp && onMouseUp(e)
       }}
       {...props}*/
    >{children}</Interactable>
  )
}

export default ButtonBase