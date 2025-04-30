import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Interactable, Transition } from '../../index';
const Collapse = ({ head, children, onClick, onKeyDown, style = {}, ...props }) => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current)
            return;
        // console.log(containerRef.current)
        const r = containerRef.current.getBoundingClientRect();
        // console.log(r.height)
        setContainerHeight(r.height);
    }, [containerRef.current]);
    return _jsxs("div", { role: 'collapse', children: [_jsx(Interactable, { tag: 'div', style: { userSelect: 'none' }, hover: { background: 'red' }, onClick: () => {
                    setOpen(!open);
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
