import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
const Menu = ({ children, style = {}, gap = 8, ...props }) => {
    const { theme } = useTheme();
    return _jsx("div", { style: {
            ...style,
            gap,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'normal',
        }, ...props, children: children });
};
export default Menu;
