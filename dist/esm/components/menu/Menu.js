import { jsx as _jsx } from "react/jsx-runtime";
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
const Menu = ({ children, style = {}, space = 8, ...props }) => {
    // const {theme} = useTheme()
    return _jsx("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            ...style,
            gap: space,
            cursor: 'pointer',
            width: '100%',
            alignItems: 'normal',
        }, ...props, children: children });
};
export default Menu;
