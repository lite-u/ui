import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import ButtonBase from './ButtonBase';
/**
 * Button component
 *
 * @brief A customizable button component that supports size and color variants.
 *
 * @intro Renders a theme-aware, styled button using context-based configuration. Supports four sizes (xs, s, m, l) and four variants (primary, neutral, warn, error).
 *
 * @example
 * <Button>Default</Button>
 * <Button primary xs>Confirm</Button>
 * <Button error l>Delete</Button>
 */
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
    const styles = {
        cursor: 'pointer',
        fontSize: fontSizes[size],
        padding: `0 ${padding[size].x}px`,
        borderRadius: `${borderRadius[size]}px`,
        borderWidth: 0,
        ...button[variant],
        ...theme.formElements[size],
        ...style,
    };
    return (_jsx(ButtonBase, { type: type, style: styles, ...props, children: children }));
};
export default Button;
