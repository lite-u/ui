import { jsx as _jsx } from "react/jsx-runtime";
import Flex from './Flex';
/**
 * Row component
 *
 * @brief
 * A horizontal flex container with shorthand alignment and spacing props.
 *
 * @intro
 * A layout component built on top of `Flex`, providing horizontal flow and useful alignment helpers like `start`, `center`, `stretch`, `wrap`, and `space`.
 * Supports extended `ContainerProps`.
 *
 * @example
 * import { Container } from '@lite-u/ui'
 *
 * <Row center space={10} wrap>
 *   <span>1</span>
 *   <span>2</span>
 *   <span>3</span>
 * </Row>
 */
const Row = ({ children, wrap = false, around = false, jc = false, js = false, je = false, between = false, start = true, center = false, stretch = false, end = false, role = 'row', space = 0, style = {}, ...props }) => {
    let styles = {
        display: 'flex',
        flex: 1,
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
    if (js) {
        flexProps.justifyContent = 'start';
    }
    if (je) {
        flexProps.justifyContent = 'end';
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
    if (wrap) {
        flexProps.flexWrap = 'wrap';
    }
    return _jsx(Flex, { role: role, style: styles, ...flexProps, children: children });
};
export default Row;
