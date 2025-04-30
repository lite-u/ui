import { useState } from 'react';
import Polymorphic from '../polymorphic/Polymorphic';
const Interactable = ({ tag = 'div', children, onMouseEnter, onMouseOver, onMouseLeave, onMouseDown, onMouseUp, hover = {}, 
// active = {},
down = {}, style = {}, ...rest }) => {
    const [isHover, setIsHover] = useState(false);
    // const [isActive, setIsActive] = useState(false)
    const [isDown, setIsDown] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseOver = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const handleMouseDown = () => {
        setIsDown(true);
    };
    const handleMouseUp = () => {
        setIsDown(false);
    };
    return Polymorphic({
        tag,
        children,
        style: {
            ...style,
            ...(isHover ? hover : {}),
            ...(isDown ? down : {}),
        },
        onMouseEnter: (e) => {
            handleMouseEnter();
            onMouseEnter && onMouseEnter(e);
        },
        onMouseOver: (e) => {
            handleMouseOver();
            onMouseOver && onMouseOver(e);
        },
        onMouseLeave: (e) => {
            handleMouseLeave();
            onMouseLeave && onMouseLeave(e);
        },
        onMouseDown: (e) => {
            handleMouseDown();
            onMouseDown && onMouseDown(e);
        },
        onMouseUp: (e) => {
            handleMouseUp();
            onMouseUp && onMouseUp(e);
        },
        ...rest,
    });
};
export default Interactable;
