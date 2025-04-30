import {CSSProperties, ReactNode, useContext} from 'react'
import SelectContext from './SelectContext'
import Hoverable from '../hover/Hoverable'

const SelectItem: React.FC<React.HTMLProps<HTMLDivElement> & {
  label?: string,
  value: string | number,
  children: ReactNode,
}> = ({
        label,
        value,
        children,
        onClick,
        onKeyDown,
        style = {},
        ...props
      }) => {
  const context = useContext(SelectContext)
  if (!context) return null
  const bgStyle: CSSProperties = {}
  const {itemClick, selectValue, itemStyle} = context

  if (selectValue === value) {
    bgStyle.backgroundColor = '#dfdfdf'
  }

  const styles: CSSProperties = {
    padding: itemStyle.padding,
    height: itemStyle.height,
    fontSize: itemStyle.fontSize,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    ...bgStyle,
    ...style,
  }

  return (
    <Hoverable tabIndex={0}
                  style={styles}
                  onKeyDown={(e) => {
                    const key = e.code.toLowerCase()
                    if (key === 'space' || key === 'enter') {
                      e.preventDefault()
                      itemClick(value)
                    }
                    onKeyDown && onKeyDown(e)
                  }}
                  onClick={(e) => {
                    itemClick(value)
                    onClick && onClick(e)
                  }} {...props}>
      {children}
    </Hoverable>
  )
}

export default SelectItem