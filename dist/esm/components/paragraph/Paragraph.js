import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
const Paragraph = ({ children, size = 16, style = {}, color, center = false, wb = 'break-word', ...props }) => {
    const { theme } = useLiteUIContext();
    const styles = {
        fontSize: theme.title.h6,
        paddingTop: theme.padding.md.x,
        paddingBottom: theme.padding.md.x,
    };
    if (center) {
        styles.textAlign = 'center';
    }
    if (color) {
        styles.color = color;
    }
    if (size) {
        styles.fontSize = size;
    }
    if (wb) {
        styles.wordBreak = wb;
    }
    return _jsx("p", { style: { ...style, ...styles }, ...props, children: children });
};
export const P = Paragraph;
export default Paragraph;
