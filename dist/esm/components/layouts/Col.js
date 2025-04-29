import { jsx as _jsx } from "react/jsx-runtime";
import Flex from './Flex';
const Col = ({ children, around = false, jc = false, between = false, space = 0, start = true, center = false, stretch = false, end = false, role = 'column', style = {}, ...props }) => {
    let styles = {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        gap: space,
        width: 'auto',
        height: 'auto', ...style,
    };
    if (around) {
        styles.justifyContent = 'space-around';
    }
    if (between) {
        styles.justifyContent = 'space-between';
    }
    if (jc) {
        styles.justifyContent = 'center';
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
    return _jsx(Flex, { col: true, role: role, style: styles, ...props, children: children });
};
export default Col;
