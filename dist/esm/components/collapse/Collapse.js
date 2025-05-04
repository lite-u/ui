import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Con, Transition } from '../../index';
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
    return _jsxs("div", { role: 'collapse', children: [_jsx(Con, { role: 'collapse-switch', 
                // fw
                w: 'auto', style: {
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
