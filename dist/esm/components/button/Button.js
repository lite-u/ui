import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import ButtonBase from './ButtonBase';
/**
 * Button component
 *
 * @brief A customizable button component that supports size and color variants.
 *
 * @intro Supports four sizes (xs, s, m, l) and four variants (primary, neutral, warn, error).
 *
 * @example
 *
 * import { Button } from '@lite-u/ui'
 *
 * <Button>Default</Button>
 * <Button primary xs>Confirm</Button>
 * <Button error l>Delete</Button>
 */
export const Button = ({ xs, s, m = true, l, primary, warn, error, neutral = true, disabled = false, style = {}, children, type = 'button', ...props }) => {
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
        userSelect: 'none',
        fontSize: fontSizes[size],
        padding: `0 ${padding[size].x}px`,
        borderRadius: `${borderRadius[size]}px`,
        borderWidth: 0,
        ...button[variant],
        ...theme.formElements[size],
        ...style,
    };
    if (disabled) {
        styles.backgroundColor = theme.button.disabled.backgroundColor;
        styles.color = theme.button.disabled.color;
        styles.border = theme.button.disabled.border;
        styles.cursor = 'not-allowed';
        styles.pointerEvents = 'visible';
    }
    return (_jsx(ButtonBase, { disabled: disabled, type: type, style: styles, ...props, children: children }));
};
export default Button;
