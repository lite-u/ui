import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
export const Title = ({ h1, h2, h3, h4, h5, h6, children, style, ...rest }) => {
    const { theme } = useTheme();
    const { padding } = theme;
    const headingMap = {
        h1: { margin: padding.lg.y },
        h2: { margin: padding.lg.y },
        h3: { margin: padding.md.y },
        h4: { margin: padding.md.y },
        h5: { margin: padding.sm.y },
        h6: { margin: padding.sm.y },
    };
    const level = (h1 && 'h1') ||
        (h2 && 'h2') ||
        (h3 && 'h3') ||
        (h4 && 'h4') ||
        (h5 && 'h5') ||
        (h6 && 'h6') ||
        'h1';
    const Tag = level;
    const margin = headingMap[Tag].margin;
    return (_jsx(Tag, { style: {
            fontWeight: 'bold',
            margin: `${margin}px 0`,
            ...style,
        }, ...rest, children: children }));
};
export default Title;
