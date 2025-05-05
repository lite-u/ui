import {CSSProperties, FC, ReactNode, useContext} from 'react'
import {HoverContext} from './Hover'

const HoverBody: FC<{ children: ReactNode, style?: CSSProperties }> = ({children, style={}}) => {
  const {show, persisted} = useContext(HoverContext)

  if (!show && !persisted) return
  let styles = persisted ? {display: show ? 'block' : 'none'} : {}
  return <div
    style={{
      ...style,
      ...styles,
    }}>{children}</div>
}

export default HoverBody