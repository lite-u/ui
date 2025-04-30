import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Interactable, Transition } from '../../index';
const Collapse = ({ head, children, onClick, onKeyDown, style = {}, ...props }) => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [open, setOpen] = useState(false);
    return _jsxs("div", { role: 'collapse', children: [_jsx(Interactable, { tag: 'div', style: { userSelect: 'none' }, hover: { background: 'red' }, onClick: () => {
                    console.log(9);
                }, children: head }), _jsx(Transition, { visible: open, from: {
                    height: 0,
                }, to: {
                    height: containerHeight,
                }, style: {
                    overflow: 'hidden',
                }, ...props, children: children })] });
};
export const Open = Collapse;
export default Collapse;
