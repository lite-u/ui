import { jsx as _jsx } from "react/jsx-runtime";
import Flex from './Flex';
const Column = ({ children, around = false, jc = false, between = false, space = 0, start = true, center = false, stretch = false, end = false, role = 'column', style = {}, ...props }) => {
    let styles = {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        gap: space,
        width: 'auto',
        height: 'auto', ...style,
    };
    const flexProps = {
        ...props,
    };
    if (around) {
        flexProps.justifyContent = 'space-around';
    }
    if (between) {
        flexProps.justifyContent = 'space-between';
    }
    if (jc) {
        flexProps.justifyContent = 'center';
    }
    if (start) {
        flexProps.alignItems = 'start';
    }
    if (center) {
        flexProps.alignItems = 'center';
    }
    if (end) {
        flexProps.alignItems = 'end';
    }
    if (stretch) {
        flexProps.alignItems = 'stretch';
    }
    return _jsx(Flex, { col: true, role: role, style: styles, ...flexProps, children: children });
};
export const Col = Column;
export default Column;
