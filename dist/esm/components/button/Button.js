import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import { useState } from 'react';
export const Button = ({ xs, s, m = true, l, primary, warn, error, neutral = true, style = {}, type = 'button', onMouseEnter, onMouseOver, onMouseLeave, onMouseDown, onMouseUp, ...props }) => {
    const { theme } = useLiteUIContext();
    const [opacity, setOpacity] = useState(1);
    const { fontSizes, padding, button, borderRadius, } = theme;
    const getVariant = () => {
        if (primary)
            return 'primary';
        if (error)
            return 'error';
        if (warn)
            return 'warn';
        return 'neutral';
    };
    const getSize = () => {
        if (xs)
            return 'xs';
        if (s)
            return 'sm';
        if (l)
            return 'lg';
        return 'md';
    };
    const size = getSize();
    const variant = getVariant();
    const sizeStyles = {
        xs: {
            minWidth: 30,
            height: 20,
        },
        sm: {
            minWidth: 40,
            height: 25,
        },
        md: {
            minWidth: 50,
            height: 30,
        },
        lg: {
            minWidth: 60,
            height: 40,
        },
    };
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
    const styles = {
        opacity,
        cursor: 'pointer',
        fontSize: fontSizes[size],
        padding: `0 ${padding[size].x}px`,
        borderRadius: `${borderRadius[size]}px`,
        borderWidth: 0,
        ...button[variant],
        ...sizeStyles[size],
        ...style,
    };
    return (_jsx("button", { type: type, style: styles, 
        // onMouseOver={() => setOpacity(0.8)}
        // onMouseOut={() => setOpacity(1)}
        onMouseEnter: (e) => {
            handleMouseEnter();
            onMouseEnter && onMouseEnter(e);
        }, onMouseOver: (e) => {
            handleMouseOver();
            onMouseOver && onMouseOver(e);
        }, onMouseLeave: (e) => {
            handleMouseLeave();
            onMouseLeave && onMouseLeave(e);
        }, onMouseDown: (e) => {
            handleMouseDown();
            onMouseDown && onMouseDown(e);
        }, onMouseUp: (e) => {
            handleMouseUp();
            onMouseUp && onMouseUp(e);
        }, ...props }));
};
export default Button;
