import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import { Col } from '../../index';
import Container from '../container/Container';
/**
 * Panel component
 *
 * @brief
 * A flexible container component used to group and visually separate content within the layout.
 *
 * @intro
 * Provides a styled block container with customizable margin, padding, and background options.
 * Commonly used to structure and emphasize content sections in a UI.
 *
 * @example
 * <Panel p={20} bg="#fff">
 *   <h2>Section Title</h2>
 *   <p>This is a section of content within a panel.</p>
 * </Panel>
 */
const Panel = ({ xs, s, m, l, title, titleClass, titleStyle = {}, contentClass, contentStyle = {}, children, ...props }) => {
    const { theme } = useLiteUIContext();
    let size = 'md';
    if (xs) {
        size = 'xs';
    }
    if (s) {
        size = 'sm';
    }
    if (l) {
        size = 'lg';
    }
    const headFontSize = theme.fontSizes[size];
    const headPadding = theme.padding[size].x;
    const boxFontSize = theme.fontSizes[size];
    const boxPadding = theme.padding[size].x;
    const primaryColor = theme.panel.primaryColor;
    console.log(titleStyle);
    return _jsx(Container, { fw: true, fh: true, role: 'panel', ...props, children: _jsxs(Col, { fw: true, fh: true, stretch: true, children: [_jsx(Container, { role: 'panel-head', fw: true, style: {
                        background: primaryColor,
                        borderRadius: '3px 3px 0 0',
                        color: '#fff',
                        ...titleStyle,
                    }, className: titleClass, children: _jsx("p", { style: { fontSize: headFontSize, padding: headPadding }, children: title }) }), _jsx(Container, { role: 'panel-content', fw: true, bg: '#fff', style: {
                        overflow: 'auto',
                        border: `1px solid ${primaryColor}`,
                        borderTop: 'none',
                        flex: '100%',
                        fontSize: boxFontSize,
                        padding: boxPadding,
                        ...contentStyle,
                    }, className: contentClass, children: children })] }) });
};
export default Panel;
