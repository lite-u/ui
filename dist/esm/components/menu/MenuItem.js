import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
const MenuItem = ({ children, style = {}, sm = false, ...props }) => {
    const { theme } = useTheme();
    const styles = {
        ...style,
        height: 30,
        padding: theme.padding.md.y,
        fontSize: theme.fontSizes.md,
        borderRadius: theme.borderRadius.lg,
        background: theme.menuItemStyles.backgroundColor,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    };
    if (sm) {
        styles.height = 20;
        styles.padding = theme.padding.sm.y;
        styles.fontSize = theme.fontSizes.sm;
    }
    return _jsx("div", { style: styles, ...props, children: children });
};
export default MenuItem;
