import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
import { useState } from 'react';
export const Button = ({ xs, s, m = true, l, primary, warn, error, neutral = true, style = {}, type = 'button', ...props }) => {
    const { theme } = useTheme();
    const [opacity, setOpacity] = useState(1);
    const { fontSizes, padding, buttonStyles, borderRadius, } = theme;
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
    const styles = {
        opacity,
        cursor: 'pointer',
        fontSize: fontSizes[size],
        padding: `0 ${padding[size].x}px`,
        borderRadius: `${borderRadius[size]}px`,
        borderWidth: 0,
        ...buttonStyles[variant],
        ...sizeStyles[size],
        ...style,
    };
    return (_jsx("button", { type: type, style: styles, onMouseOver: () => setOpacity(0.8), onMouseOut: () => setOpacity(1), ...props }));
};
export default Button;
