import { createElement, useEffect, useState } from 'react';
const Polymorphic = ({ children, onMouseEnter, onMouseOver, tag = 'div', onMouseLeave, onMouseDown, onMouseUp, active = false, activeStyle = {
    backgroundColor: '#dfdfdf',
}, style = {}, ...props }) => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(active);
    }, [active]);
    const handleMouseEnter = () => {
        setIsActive(true);
    };
    const handleMouseOver = () => {
        setIsActive(true);
    };
    const handleMouseLeave = () => {
        setIsActive(false);
    };
    const nodeProps = {
        style: {
            ...(isActive ? activeStyle : {}),
            ...style,
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
        ...props,
    };
    return createElement(tag, nodeProps, children);
};
export default Polymorphic;
