import {ReactNode, useContext} from 'react'
import SelectContext from './SelectContext'
import MenuItemBase from '../menu/MenuItemBase'

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

  const {itemClick, selectValue, itemStyle} = context

  const styles = {
    height: itemStyle.height,
    // padding: '4px 6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  }

  if (selectValue === value) {
    styles.backgroundColor = '#dfdfdf'
  }

  return (
    <MenuItemBase tabIndex={0}
                  style={styles}
                  onKeyDown={(e) => {
                    if (e.code.toLowerCase() === 'space') {
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
    </MenuItemBase>
  )
}

export default SelectItem