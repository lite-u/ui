import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import MenuItemBase from './MenuItemBase';
const MenuItem = ({ children, style = {}, sm = false, ...props }) => {
    const { theme } = useLiteUIContext();
    const styles = {
        ...style,
        height: 30,
        padding: theme.padding.md.y,
        fontSize: theme.fontSizes.md,
        // borderRadius: theme.borderRadius.lg,
        // background: theme.menuItem.backgroundColor,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    };
    if (sm) {
        styles.height = 20;
        styles.padding = '8px 16px';
        styles.fontSize = theme.fontSizes.sm;
    }
    return _jsx(MenuItemBase, { style: styles, ...props, children: children });
};
export default MenuItem;
