import {FC, ReactNode, useContext} from 'react'
import {HoverContext} from './Hover'

const HoverHead: FC<{ children: ReactNode }> = ({children}) => {
  const {onMouseEnter, onMouseLeave} = useContext(HoverContext)

  return <div
    onMouseEnter={() => {
      onMouseEnter?.()
    }}
    onMouseLeave={() => {
      onMouseLeave?.()
    }}

  >{children}</div>
}

export default HoverHead