import { jsx as _jsx } from "react/jsx-runtime";
const Con = ({ children, box = true, fw = true, fh = false, bg = 'transparent', color = 'inherit', w, h, p, m, style = {}, ...props }) => {
    let styles = {
        width: 'auto',
        height: 'auto',
        ...style,
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
    if (p) {
        styles.padding = p;
    }
    if (m) {
        styles.margin = m;
    }
    if (box) {
        styles.boxSizing = 'border-box';
    }
    if (bg) {
        styles.background = bg;
    }
    if (color) {
        styles.color = color;
    }
    return _jsx("div", { role: 'O', style: styles, ...props, children: children });
};
export default Con;
