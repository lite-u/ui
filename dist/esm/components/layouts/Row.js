import { jsx as _jsx } from "react/jsx-runtime";
import Flex from './Flex';
const Row = ({ children, around = false, jc = false, between = false, start = true, center = false, stretch = false, end = false, role = 'row', space = 0, style = {}, ...props }) => {
    let styles = {
        display: 'flex',
        flexDirection: 'row',
        boxSizing: 'border-box',
        width: 'auto', height: 'auto', ...style,
        gap: space,
    };
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
    return _jsx(Flex, { role: role, style: styles, ...props, children: children });
};
export default Row;
