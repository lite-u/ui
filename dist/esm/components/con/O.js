import { jsx as _jsx } from "react/jsx-runtime";
const O = ({ children, fw = true, fh = false, w, h, style = {}, ...props }) => {
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
    return _jsx("div", { role: 'O', style: styles, ...props, children: children });
};
export default O;
