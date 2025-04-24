import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
import { Col } from '../../index';
import Paragraph from '../paragraph/Paragraph';
const Panel = ({ title, titleClass = '', boxClass = '', children, ...props }) => {
    const { theme } = useTheme();
    return _jsxs(Col, { fh: true, ...props, children: [_jsx("div", { style: { background: theme.panel.primaryColor, borderRadius: '3px 3px 0 0', color: '#fff' }, className: titleClass, children: _jsx(Paragraph, { center: true, size: 16, style: { padding: 8 }, children: title }) }), _jsx("div", { style: { border: `1px solid ${theme.panel.primaryColor}` }, className: boxClass, children: children })] });
};
export default Panel;
