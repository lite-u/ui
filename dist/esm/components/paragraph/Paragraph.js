import { jsx as _jsx } from "react/jsx-runtime";
const Paragraph = ({ children, size = 12, style = {}, center = false, ...props }) => {
    // const theme = useTheme()
    const styles = {};
    if (center) {
        styles.textAlign = 'center';
    }
    if (size) {
        styles.fontSize = size;
    }
    return _jsx("p", { style: { ...style, ...styles }, ...props, children: children });
};
export const P = Paragraph;
export default Paragraph;
