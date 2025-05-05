import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Con, Transition } from '../../index';
/**
 * Collapse component
 *
 * @brief
 * A collapsible container that shows or hides its content with a smooth transition.
 *
 * @intro
 * Renders a toggleable header and a content area that expands or collapses with animation.
 * Useful for accordion-like UI components or sections where content needs to be shown/hidden on demand.
 *
 * @example
 * import Collapse from '@lite-u/ui'
 *
 * <Collapse head="Click me">
 *   <p>This content is hidden or shown based on the collapse state.</p>
 * </Collapse>
 */
const Collapse = ({ open = true, head, children, onToggle, headStyle, contentStyle, ...props }) => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [isOpen, setIsOpen] = useState(open);
    const containerRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current)
            return;
        const r = containerRef.current.getBoundingClientRect();
        setContainerHeight(r.height);
    }, [containerRef.current, children]);
    return _jsxs("div", { role: 'collapse', style: { flex: 1 }, children: [_jsx(Con, { role: 'collapse-switch', 
                // fw
                w: '100%', style: {
                    display: 'inline-block', cursor: 'pointer', userSelect: 'none',
                    ...headStyle,
                }, onClick: () => {
                    setIsOpen(!isOpen);
                    onToggle?.(!isOpen);
                }, children: head }), _jsx(Transition, { visible: isOpen, from: {
                    height: 0,
                }, to: {
                    height: containerHeight,
                }, style: {
                    overflow: 'hidden',
                    ...contentStyle,
                }, ...props, children: _jsx("div", { ref: containerRef, role: 'collapse-content', children: children }) })] });
};
export const Open = Collapse;
export default Collapse;
