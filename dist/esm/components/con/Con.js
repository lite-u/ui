import { jsx as _jsx } from "react/jsx-runtime";
const Con = ({ children, ovh = false, box = true, fw = true, fh = false, bg, color = 'inherit', w, h, maxW, maxH, minW, minH, p, m, style = {}, ...props }) => {
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
    if (maxW) {
        styles.maxWidth = maxW;
    }
    if (maxH) {
        styles.maxHeight = maxH;
    }
    if (minW) {
        styles.minWidth = minW;
    }
    if (minH) {
        styles.minHeight = minH;
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
    if (ovh) {
        styles.overflow = 'hidden';
    }
    return _jsx("div", { "data-role": 'container', style: styles, ...props, children: children });
};
export default Con;
