import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useLiteUIContext } from '../../LiteUIProvider';
import { Transition } from '../../index';
const MenuItem = ({ children, style = {}, sm = false, hoverStyle = {
    backgroundColor: '#dfdfdf',
}, hoverEnterDuration = 300, hoverLeaveDuration = 500, ...props }) => {
    const [visible, setVisible] = useState(false);
    const { theme } = useLiteUIContext();
    const styles = {
        height: 40,
        padding: theme.padding.md.y,
        fontSize: theme.fontSizes.md,
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    };
    if (sm) {
        styles.height = 30;
        styles.fontSize = theme.fontSizes.sm;
    }
    // console.log(styles)
    return _jsx("div", { role: 'menu-item', onMouseOver: () => {
            setVisible(true);
        }, onMouseLeave: () => {
            setVisible(false);
        }, ...props, children: _jsx(Transition, { visible: visible, style: {
                ...styles,
                ...style,
            }, leaveDuration: hoverLeaveDuration, duration: hoverEnterDuration, from: {
                backgroundColor: '#fff',
            }, to: hoverStyle, children: children }) });
};
export default MenuItem;
