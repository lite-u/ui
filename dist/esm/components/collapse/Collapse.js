import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Transition } from '../../index';
const Collapse = ({ head, children, onToggle, ...props }) => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current)
            return;
        const r = containerRef.current.getBoundingClientRect();
        setContainerHeight(r.height);
    }, [containerRef.current, children]);
    return _jsxs("div", { role: 'collapse', children: [_jsx("div", { style: { userSelect: 'none' }, onClick: () => {
                    setOpen(!open);
                    onToggle?.(!open);
                }, children: head }), _jsx(Transition, { visible: open, from: {
                    height: 0,
                }, to: {
                    height: containerHeight,
                }, style: {
                    overflow: 'hidden',
                }, ...props, children: _jsx("div", { ref: containerRef, children: children }) })] });
};
export const Open = Collapse;
export default Collapse;
