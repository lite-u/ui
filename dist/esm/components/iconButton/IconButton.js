import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
import ButtonBase from '../button/ButtonBase';
/**
 * IconButton component
 *
 * @brief
 * A square-shaped button designed to contain only an icon, not text.
 *
 * @intro
 * Renders a circular or square icon-only button with predefined size variants.
 * Supports four sizes and applies consistent styling from theme context.
 *
 * @example
 * import { IconButton } from '@lite-u/ui'
 * import { Icon } from '@lite-u/icons'
 *
 * <IconButton s onClick={handleClick}>
 *   <Icon name="search" />
 * </IconButton>
 */
export const IconButton = ({ xs, s, m = true, l, style = {}, disabled = false, type = 'button', ...props }) => {
    const { theme } = useLiteUIContext();
    const { fontSizes, formElements } = theme;
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
    const sizeStyle = formElements[size];
    const len = sizeStyle.height;
    const styles = {
        cursor: 'pointer',
        fontSize: fontSizes[size],
        borderRadius: len,
        borderWidth: 0,
        backgroundColor: '#cfcfcf',
        color: '#ffffff',
        overflow: 'hidden',
        width: len,
        height: len,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
    };
    if (disabled) {
        styles.backgroundColor = theme.button.disabled.backgroundColor;
        styles.color = theme.button.disabled.color;
        styles.border = theme.button.disabled.border;
        styles.cursor = 'not-allowed';
    }
    return (_jsx(ButtonBase, { disabled: disabled, type: type, style: styles, ...props }));
};
export default IconButton;
