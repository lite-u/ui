import { jsx as _jsx } from "react/jsx-runtime";
const Container = ({ children, ovh = false, box = true, fw = true, fh = false, bg, color, w, h, maxW, maxH, minW, minH, p, m, pt, pr, pb, pl, mt, mr, mb, ml, style = {}, role = 'container', ...props }) => {
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
    if (pt) {
        styles.paddingTop = pt;
    }
    if (pr) {
        styles.paddingRight = pr;
    }
    if (pb) {
        styles.paddingBottom = pb;
    }
    if (pl) {
        styles.paddingLeft = pl;
    }
    if (mt) {
        styles.marginTop = mt;
    }
    if (mr) {
        styles.marginRight = mr;
    }
    if (mb) {
        styles.marginBottom = mb;
    }
    if (ml) {
        styles.marginLeft = ml;
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
    return _jsx("div", { "data-role": role, style: styles, ...props, children: children });
};
export const Con = Container;
export default Container;
