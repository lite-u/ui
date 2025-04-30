import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import Hoverable from '../hover/Hoverable';
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
        // borderRadius: theme.borderRadius.lg,
        // background: theme.menuItem.backgroundColor,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    };
    if (sm) {
        styles.height = 30;
        // styles.padding = '8px 16px'
        styles.fontSize = theme.fontSizes.sm;
    }
    console.log(styles);
    return _jsx(Hoverable, { role: 'menu-item', activeStyle: activeStyle, style: {
            ...styles,
            ...style,
        }, ...props, children: children });
};
export default MenuItem;
