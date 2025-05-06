import { jsx as _jsx } from "react/jsx-runtime";
import { useState, } from 'react';
/**
 * A polymorphic component that adapts to the given `tag`.
 */
function Interactable({ tag, hover, focus, active, style, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onPointerDown, onPointerUp, onKeyDown, 
// onClick,
...rest }) {
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
    return (_jsx(Tag, { ...rest, onMouseEnter: (e) => {
            // @ts-ignore
            if (rest?.disabled)
                return;
            setHovered(true);
            onMouseEnter?.(e);
        }, onMouseLeave: (e) => {
            // @ts-ignore
            if (rest?.disabled)
                return;
            setHovered(false);
            onMouseLeave?.(e);
        }, onFocus: (e) => {
            // @ts-ignore
            if (rest?.disabled)
                return;
            setFocused(true);
            onFocus?.(e);
        }, onBlur: (e) => {
            // @ts-ignore
            if (rest?.disabled)
                return;
            setFocused(false);
            onBlur?.(e);
        }, onPointerDown: (e) => {
            // @ts-ignore
            if (rest?.disabled)
                return;
            // @ts-ignore
            e.target?.setPointerCapture(e.pointerId);
            setPressed(true);
            onPointerDown?.(e);
        }, onPointerUp: (e) => {
            // @ts-ignore
            if (rest?.disabled)
                return;
            // @ts-ignore
            e.target?.releasePointerCapture(e.pointerId);
            setPressed(false);
            onPointerUp?.(e);
        }, 
        /*   onMouseDown={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
             // (e.target as HTMLElement).setPointerCapture(e.pointerId)
             console.log('mousedown')
             setPressed(true)
             onMouseDown?.(e)
           }}
           onMouseUp={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
             setPressed(false)
             onMouseUp?.(e)
           }}*/
        style: computedStyle, children: children }));
}
export default Interactable;
