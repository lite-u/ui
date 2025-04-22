import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
const Panel = ({ title, titleClass = '', boxClass = '', children, ...props }) => {
    const { theme } = useTheme();
    return _jsxs("div", { ...props, children: [_jsx("div", { style: { background: theme.bg }, className: titleClass, children: title }), _jsx("div", { style: { border: `1px solid ${theme.primary}` }, className: boxClass, children: children })] });
};
export default Panel;
