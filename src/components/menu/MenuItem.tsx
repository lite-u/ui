import {CSSProperties, useState} from 'react'
import {useLiteUIContext} from '../../LiteUIProvider'
import {Transition} from '../../index'
import {FromType} from '../transition/Transition'

/**
 * MenuItem component
 *
 * @brief
 * A flexible interactive item used within menus or lists, with optional size variants and hover transitions.
 *
 * @intro
 * Applies consistent dimensions and padding based on selected size (`xs`, `s`, `m`, `l`),
 * and shows a transition effect on hover. Integrates theming from Lite UI context.
 *
 * @example
 * import { MenuItem } from '@lite-u/ui'
 *
 * <MenuItem m hoverStyle={{ backgroundColor: 'lightgray' }}>
 *   Settings
 * </MenuItem>
 */
const MenuItem: React.FC<React.HTMLProps<HTMLDivElement> & {
  /**
   * Renders the item in extra-small size.
   * @default false
   */
  xs?: boolean,
  /**
   * Renders the item in small size.
   * @default false
   */
  s?: boolean,
  /**
   * Renders the item in medium size.
   * @default true
   */
  m?: boolean,
  /**
   * Renders the item in large size.
   * @default false
   */
  l?: boolean,
  /**
   * CSS styles to apply on hover transition.
   * @default { backgroundColor: '#dfdfdf' }
   */
  hoverStyle?: FromType
  /**
   * Duration of the hover transition entering, in milliseconds.
   * @default 300
   */
  hoverEnterDuration?: number
  /**
   * Duration of the hover transition leaving, in milliseconds.
   * @default 500
   */
  hoverLeaveDuration?: number
}> = ({
        children,
        style = {},
        xs,
        s,
        m = true,
        l,
        hoverStyle = {
          backgroundColor: '#dfdfdf',
        },
        hoverEnterDuration = 200,
        hoverLeaveDuration = 300,
        ...props
      }) => {
  const [visible, setVisible] = useState(false)
  const getSize = () => {
    if (xs) return 'xs'
    if (s) return 'sm'
    if (l) return 'lg'
    return 'md'
  }
  const {theme} = useLiteUIContext()
  const size = getSize()
  const styles: CSSProperties = {
    minWidth: 100,
    height: theme.formElements[size].height,
    padding: theme.padding[size].y,
    fontSize: theme.fontSizes[size],
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    wordBreak: 'keep-all',
    whiteSpace: 'nowrap',
    // overflow: 'hidden',
    textOverflow: 'ellipsis',
  }

  return <div
    role={'menu-item'}
    onMouseOver={() => {
      setVisible(true)
    }}
    onMouseLeave={() => {
      setVisible(false)
    }}
    style={{
      display: 'flex',
      // overflow: 'hidden',
      // ...styles,
      // ...style,
    }}
    {...props}>
    <Transition visible={visible}
                style={{
                  ...styles,
                  ...style,
                }}
                leaveDuration={hoverLeaveDuration}
                duration={hoverEnterDuration}
                from={{
                  backgroundColor: '#fff',
                }}
                to={hoverStyle}>
      {children}
    </Transition>
  </div>
}

export default MenuItem