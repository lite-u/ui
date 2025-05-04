import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useLiteUIContext } from '../../LiteUIProvider';
import { Transition } from '../../index';
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
const MenuItem = ({ children, style = {}, xs, s, m = true, l, hoverStyle = {
    backgroundColor: '#dfdfdf',
}, hoverEnterDuration = 300, hoverLeaveDuration = 500, ...props }) => {
    const [visible, setVisible] = useState(false);
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
        width: 150,
        height: theme.formElements[size].height,
        padding: theme.padding[size].y,
        fontSize: theme.fontSizes[size],
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        wordBreak: 'keep-all',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    };
    return _jsx("div", { role: 'menu-item', onMouseOver: () => {
            setVisible(true);
        }, onMouseLeave: () => {
            setVisible(false);
        }, style: {
        // ...styles,
        // ...style,
        }, ...props, children: _jsx(Transition, { visible: visible, style: {
                ...styles,
                ...style,
            }, leaveDuration: hoverLeaveDuration, duration: hoverEnterDuration, from: {
                backgroundColor: '#fff',
            }, to: hoverStyle, children: children }) });
};
export default MenuItem;
