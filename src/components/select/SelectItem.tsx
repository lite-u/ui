import {CSSProperties, KeyboardEvent, MouseEvent, ReactNode, useContext} from 'react'
import SelectContext from './SelectContext'
import Interactable from '../interactable/Interactable'

/**
 * SelectItem component
 *
 * @brief
 * An individual selectable item used within the Select dropdown.
 *
 * @intro
 * Displays a styled item that responds to click and keyboard interactions. Automatically highlights when selected.
 * Must be used inside a `Select` component to inherit context.
 *
 * @example
 * import { Select, SelectItem } from '@lite-u/ui'
 *
 * <Select>
 *   <SelectItem value="1">Option 1</SelectItem>
 *   <SelectItem value="2">Option 2</SelectItem>
 * </Select>
 */
const SelectItem: React.FC<React.HTMLProps<HTMLDivElement> & {
  /**
   * Optional label for the item, useful for accessibility or search indexing.
   */
  label?: string,
  /**
   * The unique value of the item. Used to track selection state.
   */
  value: string | number,
  /**
   * The visible content of the select item.
   */
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
    ...itemStyle,
    // boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    borderRadius: 0,
    minWidth: '100%',
    ...bgStyle,
    ...style,
  }

  return (
    <Interactable
      role={'select-item'}
      tag={'div'}
      tabIndex={0}
      style={styles}
      hover={{
        backgroundColor: '#dfdfdf',
      }}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        const key = e.code.toLowerCase()
        if (key === 'space' || key === 'enter') {
          e.preventDefault()
          itemClick(value)
        }
        onKeyDown && onKeyDown(e)
      }}
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        itemClick(value)
        onClick && onClick(e)
      }} {...props}>
      {children}
    </Interactable>
  )
}

export default SelectItem