import { jsx as _jsx } from "react/jsx-runtime";
const Col = ({ children, fw = true, fh = false, around = false, between = false, 
// center = false,
w, h, style = {}, ...props }) => {
    let styles = {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
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
    /*if (center) {
      styles.alignItems = 'center'
    }*/
    // console.log(styles)
    return _jsx("div", { style: styles, ...props, children: children });
};
export default Col;
