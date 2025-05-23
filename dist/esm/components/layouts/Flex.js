import { jsx as _jsx } from "react/jsx-runtime";
import Container from '../container/Container';
const Flex = ({ children, row = true, col, space = 0, flexWrap = 'initial', alignItems = 'start', justifyContent = 'normal', style = {}, role = 'flex', ...props }) => {
    let styles = {
        display: 'flex',
        boxSizing: 'border-box',
        gap: space,
        ...style,
    };
    styles.alignItems = alignItems;
    styles.justifyContent = justifyContent;
    styles.flexWrap = flexWrap;
    if (row) {
        styles.flexDirection = 'row';
    }
    if (col) {
        styles.flexDirection = 'column';
    }
    return _jsx(Container, { role: role, style: styles, ...props, children: children });
};
export default Flex;
