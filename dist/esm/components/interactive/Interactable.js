import { jsx as _jsx } from "react/jsx-runtime";
import { useState, } from 'react';
/**
 * A polymorphic component that adapts to the given `tag`.
 */
function Interactable({ tag = 'div', disabled = false, hover, focus, active, style, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onPointerDown, onPointerUp, onKeyDown, 
// onClick,
...rest }) {
    const Tag = tag;
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const [pressed, setPressed] = useState(false);
    const computedStyle = {
        ...style,
    };
    if (pressed) {
        Object.assign(computedStyle, active);
    }
    else if (focused) {
        Object.assign(computedStyle, focus);
    }
    else if (hovered) {
        Object.assign(computedStyle, hover);
    }
    return (_jsx(Tag, { ...rest, onMouseEnter: (e) => {
            if (disabled)
                return;
            setHovered(true);
            onMouseEnter?.(e);
        }, onMouseLeave: (e) => {
            if (disabled)
                return;
            setHovered(false);
            onMouseLeave?.(e);
        }, onFocus: (e) => {
            if (disabled)
                return;
            setFocused(true);
            onFocus?.(e);
        }, onBlur: (e) => {
            if (disabled)
                return;
            setFocused(false);
            onBlur?.(e);
        }, onPointerDown: (e) => {
            if (disabled)
                return;
            const target = e.target;
            target.setPointerCapture(e.pointerId);
            setPressed(true);
            onPointerDown?.(e);
        }, onPointerUp: (e) => {
            if (disabled)
                return;
            const target = e.target;
            target.releasePointerCapture(e.pointerId);
            setPressed(false);
            onPointerUp?.(e);
        }, style: computedStyle, children: children }));
}
export default Interactable;
