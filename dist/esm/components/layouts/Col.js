import { jsx as _jsx } from "react/jsx-runtime";
const Col = ({ children, fw = true, fh = false, around = false, between = false, space = 0, start = true, center = false, stretch = false, end = false, w, h, style = {}, ...props }) => {
    let styles = {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        gap: space,
        width: 'auto',
        height: 'auto', ...style,
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
    return _jsx("div", { style: styles, ...props, children: children });
};
export default Col;
