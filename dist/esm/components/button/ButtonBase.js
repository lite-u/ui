import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Interactable } from '../../index';
export const ButtonBase = ({ type = 'button', onMouseEnter, onMouseOver, onMouseLeave, onMouseDown, onMouseUp, children, style = {}, ...props }) => {
    const [opacity, setOpacity] = useState(1);
    const handleMouseEnter = () => {
        setOpacity(.8);
    };
    const handleMouseOver = () => {
        setOpacity(.8);
    };
    const handleMouseLeave = () => {
        setOpacity(1);
    };
    const handleMouseDown = () => {
        setOpacity(1);
    };
    const handleMouseUp = () => {
        setOpacity(.8);
    };
    return (_jsx(Interactable, { tag: 'button', type: 'button', style: {
            opacity,
            ...style,
        }, onMouseEnter: (e) => {
            handleMouseEnter();
            onMouseEnter && onMouseEnter(e);
        }, onMouseOver: (e) => {
            handleMouseOver();
            onMouseOver && onMouseOver(e);
        }, children: children }));
};
export default ButtonBase;
