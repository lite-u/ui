import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
export const Title = ({ h1, h2, h3, h4, h5, h6, children, style, sticky, ...rest }) => {
    const { theme } = useLiteUIContext();
    const { padding } = theme;
    const headingMap = {
        h1: { fontSize: theme.title.h1, margin: padding.lg.x },
        h2: { fontSize: theme.title.h2, margin: padding.lg.x },
        h3: { fontSize: theme.title.h3, margin: padding.md.x },
        h4: { fontSize: theme.title.h4, margin: padding.md.x },
        h5: { fontSize: theme.title.h5, margin: padding.sm.x },
        h6: { fontSize: theme.title.h6, margin: padding.sm.x },
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
    const fontSize = headingMap[Tag].fontSize;
    return (_jsx(Tag, { style: {
            fontWeight: 'bold',
            margin: `${margin}px 0`,
            fontSize: fontSize + 'px',
            position: sticky ? 'sticky' : 'static',
            zIndex: 10,
            left: sticky ? 0 : 'auto',
            top: sticky ? 0 : 'auto',
            backgroundColor: theme.title.backgroundColor,
            ...style,
        }, ...rest, children: children }));
};
export default Title;
