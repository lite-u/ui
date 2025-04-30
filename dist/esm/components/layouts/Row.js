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
    const flexProps = {
        ...props,
    };
    if (around) {
        flexProps.justifyContent = 'space-around';
    }
    if (jc) {
        flexProps.justifyContent = 'center';
    }
    if (between) {
        flexProps.justifyContent = 'space-between';
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
    return _jsx(Flex, { role: role, style: styles, ...flexProps, children: children });
};
export default Row;
