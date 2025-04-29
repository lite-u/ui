import {ReactNode, useEffect, useState} from 'react'

const MenuItemBase: React.FC<
  React.HTMLProps<HTMLDivElement> &
  {
    children: ReactNode,
    active?: boolean,
    activeStyle?: React.CSSProperties
  }
> = ({
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
  const [localActive, setLocalActive] = useState(false)

  useEffect(() => {
    setLocalActive(active)
  }, [active])

  const handleMouseEnter = () => {
    setLocalActive(true)
  }

  const handleMouseOver = () => {
    setLocalActive(true)
  }

  const handleMouseLeave = () => {
    setLocalActive(false)
  }

  return <div
    style={{
      ...(localActive ? activeStyle : {}),
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
    {...props}>
    {children}
  </div>
}

export default MenuItemBase