import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import Interactable from '../interactive/Interactable';
import { Transition } from '../../index';
const MenuItem = ({ children, style = {}, sm = false, activeStyle = {
    backgroundColor: '#dfdfdf',
    // color: '#dfdfdf',
}, ...props }) => {
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
    return _jsx(Transition, { visible: true, from: {
            opacity: 0.5,
        }, to: {
            opacity: 1,
        }, children: _jsx(Interactable, { tag: 'div', role: 'menu-item', hover: activeStyle, style: {
                ...styles,
                ...style,
            }, ...props, children: children }) });
};
export default MenuItem;
