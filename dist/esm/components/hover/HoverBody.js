import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { HoverContext } from './Hover';
const HoverBody = ({ children, style = {} }) => {
    const { show, persisted } = useContext(HoverContext);
    if (!show && !persisted)
        return;
    let styles = persisted ? { display: show ? 'flex' : 'none' } : {};
    return _jsx("div", { style: {
            ...style,
            ...styles,
        }, children: children });
};
export default HoverBody;
