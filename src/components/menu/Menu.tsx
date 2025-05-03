/**
 * Menu component
 *
 * @brief
 * A vertical stack layout component designed for navigation or grouped UI items.
 *
 * @intro
 * Arranges its children in a column using Flexbox with configurable spacing.
 * Useful for building vertical menus, lists, or grouped controls. Automatically
 * sets cursor to pointer and full width, promoting interactive layout.
 *
 * @example
 * import { Menu, MenuItem } from '@lite-u/ui'
 *
 * <Menu space={12}>
 *   <MenuItem>Item 1</MenuItem>
 *   <MenuItem>Item 2</MenuItem>
 * </Menu>
 */
const Menu: React.FC<React.HTMLProps<HTMLDivElement> &
  {
    /**
     * Vertical spacing (gap) between children, in pixels.
     * @default 8
     */
    space?: number
  }> = ({
          children,
          style = {},
          space = 4,
          ...props
        }) => {
  // const {theme} = useTheme()

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    ...style,
    gap: space,
    cursor: 'pointer',
    width: '100%',
    alignItems: 'normal',
  }}
              {...props}>
    {children}
  </div>
}

export default Menu