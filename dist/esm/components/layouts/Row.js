import { jsx as _jsx } from "react/jsx-runtime";
const Row = ({ children, fw = true, fh = false, around = false, jc = false, between = false, start = true, center = false, stretch = false, end = false, space = 0, w, h, style = {}, ...props }) => {
    let styles = {
        display: 'flex',
        flexDirection: 'row',
        boxSizing: 'border-box',
        width: 'auto', height: 'auto', ...style,
        gap: space,
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
    if (jc) {
        styles.justifyContent = 'center';
    }
    if (between) {
        styles.justifyContent = 'space-between';
    }
    if (start) {
        styles.alignItems = 'start';
    }
    if (center) {
        styles.alignItems = 'center';
    }
    if (end) {
        styles.alignItems = 'end';
    }
    if (stretch) {
        styles.alignItems = 'stretch';
    }
    return _jsx("div", { role: 'row', style: styles, ...props, children: children });
};
export default Row;
