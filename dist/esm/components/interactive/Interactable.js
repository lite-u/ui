import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
/**
 * A polymorphic component that adapts to the given `tag`.
 */
function Interactable({ tag, hover, focus, active, style, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onMouseDown, onMouseUp, onKeyDown, ...rest }) {
    const Tag = tag;
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const [pressed, setPressed] = useState(false);
    const computedStyle = {
        ...style,
        ...(hovered ? hover : {}),
        ...(focused ? focus : {}),
        ...(pressed ? active : {}),
    };
    return (_jsx(Tag, { ...rest, 
        /*      onKeyDown={(e: KeyboardEvent<HTMLElementTagNameMap[T]>) => {
                setHovered(true)
                onKeyDown?.(e)
              }}*/
        onMouseEnter: (e) => {
            setHovered(true);
            onMouseEnter?.(e);
        }, onMouseLeave: (e) => {
            setHovered(false);
            onMouseLeave?.(e);
        }, onFocus: (e) => {
            setFocused(true);
            onFocus?.(e);
        }, onBlur: (e) => {
            setFocused(false);
            onBlur?.(e);
        }, onMouseDown: (e) => {
            setPressed(true);
            onMouseDown?.(e);
        }, onMouseUp: (e) => {
            setPressed(false);
            onMouseUp?.(e);
        }, style: computedStyle, children: children }));
}
export default Interactable;
