import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import Hoverable from '../interactive/Hoverable';
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
        }, children: _jsx(Hoverable, { role: 'menu-item', activeStyle: activeStyle, style: {
                ...styles,
                ...style,
            }, ...props, children: children }) });
};
export default MenuItem;
