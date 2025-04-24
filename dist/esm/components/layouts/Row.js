import { jsx as _jsx } from "react/jsx-runtime";
const Row = ({ children, fw = true, fh = false, around = false, between = false, w, h, style = {}, ...props }) => {
    let styles = {
        display: 'flex',
        flexDirection: 'row',
        boxSizing: 'border-box',
        width: 'auto', height: 'auto', ...style,
    };
    if (fw) {
        styles.width = '100%';
    }
    if (fh) {
        styles.height = '100%';
    }
    if (w) {
        styles.width = w;
    }
    if (h) {
        styles.height = h;
    }
    if (around) {
        styles.justifyContent = 'space-around';
    }
    if (between) {
        styles.justifyContent = 'space-between';
    }
    return _jsx("div", { role: 'row', style: styles, ...props, children: children });
};
export default Row;
