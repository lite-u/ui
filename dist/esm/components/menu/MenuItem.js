import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import Interactable from '../interactable/Interactable';
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
const MenuItem = ({ children, style = {}, xs, s, m = true, l, activeStyle = { backgroundColor: '#dfdfdf' }, hoverStyle = { backgroundColor: '#dfdfdf' }, ...props }) => {
    const getSize = () => {
        if (xs)
            return 'xs';
        if (s)
            return 'sm';
        if (l)
            return 'lg';
        return 'md';
    };
    const { theme } = useLiteUIContext();
    const size = getSize();
    const styles = {
        justifyContent: 'center',
        transition: 'background-color 100ms linear',
        userSelect: 'none',
        width: '100%',
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
    };
    return _jsx(Interactable, { role: 'menu-item', active: activeStyle, hover: hoverStyle, style: {
            ...styles,
            ...style,
        }, ...props, children: children });
};
export default MenuItem;
