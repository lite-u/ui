import { jsx as _jsx } from "react/jsx-runtime";
import Flex from './Flex';
/**
 * Column component
 *
 * @brief
 * A flexible vertical layout container built on top of the Flex component.
 *
 * @intro
 * Arranges children in a column direction using Flexbox. Supports alignment props
 * like `start`, `center`, `end`, and spacing between items using the `space` prop.
 *
 * @example
 * import { Column } from '@lite-u/ui'
 * // Col is an alias of Column
 * import { Col } from '@lite-u/ui'
 *
 * <Column center space={16}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Column>
 */
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
