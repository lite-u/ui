import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import { Col } from '../../index';
import Paragraph from '../paragraph/Paragraph';
import { Con } from '../con/Con';
const Panel = ({ title, titleClass = '', titleStyle = {}, boxClass = '', boxStyle = {}, children, ...props }) => {
    const { theme } = useLiteUIContext();
    return _jsx(Con, { fw: true, fh: true, role: 'panel', ...props, children: _jsxs(Col, { fw: true, fh: true, stretch: true, children: [_jsx(Con, { role: 'panel-head', fw: true, style: { background: theme.panel.primaryColor, borderRadius: '3px 3px 0 0', color: '#fff', ...titleStyle }, className: titleClass, children: _jsx(Paragraph, { center: true, size: 16, style: { padding: 8 }, children: title }) }), _jsx(Con, { role: 'panel-box', fw: true, bg: '#fff', style: {
                        overflow: 'auto',
                        border: `1px solid ${theme.panel.primaryColor}`,
                        borderTop: 'none',
                        flex: '100%',
                        ...boxStyle,
                    }, className: boxClass, children: children })] }) });
};
export default Panel;
