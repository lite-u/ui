import { jsx as _jsx } from "react/jsx-runtime";
const Paragraph = ({ children, size = 16, style = {}, color, center = false, wb = 'break-word', ...props }) => {
    // const theme = useTheme()
    const styles = {};
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
