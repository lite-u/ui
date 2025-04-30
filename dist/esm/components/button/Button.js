import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import ButtonBase from './ButtonBase';
export const Button = ({ xs, s, m = true, l, primary, warn, error, neutral = true, style = {}, children, type = 'button', ...props }) => {
    const { theme } = useLiteUIContext();
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
    const styles = {
        cursor: 'pointer',
        fontSize: fontSizes[size],
        padding: `0 ${padding[size].x}px`,
        borderRadius: `${borderRadius[size]}px`,
        borderWidth: 0,
        ...button[variant],
        ...sizeStyles[size],
        ...style,
    };
    return (_jsx(ButtonBase, { type: type, style: styles, ...props, children: children }));
};
export default Button;
