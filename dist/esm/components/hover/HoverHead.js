import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { HoverContext } from './Hover';
const HoverHead = ({ children }) => {
    const { onMouseEnter, onMouseLeave } = useContext(HoverContext);
    return _jsx("div", { onMouseEnter: () => {
            onMouseEnter?.();
        }, onMouseLeave: () => {
            onMouseLeave?.();
        }, children: children });
};
export default HoverHead;
