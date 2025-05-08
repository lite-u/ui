import { jsx as _jsx } from "react/jsx-runtime";
import Interactable from '../interactable/Interactable';
import { useLiteUIContext } from '../../LiteUIProvider';
/**
 * Link component
 *
 * @brief
 * Represents a hyperlink component with consistent styling and optional behavior controls.
 *
 * @intro
 * Renders a styled `<a>` element for internal or external navigation, supporting accessibility and customization options.
 *
 * @example
 * import { Link } from '@lite-u/ui'
 *
 * <Link href="https://example.com" target="_blank">
 *     Visit Example
 * </Link>
 */
const Link = ({ children, fw, fh, style = {}, ...props }) => {
    const { theme } = useLiteUIContext();
    return _jsx(Interactable, { tag: 'a', hover: {
            color: theme.colors.secondary,
        }, style: {
            color: '#000',
            cursor: 'pointer',
            width: fw ? '100%' : 'auto',
            height: fh ? '100%' : 'auto',
            ...style,
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        }, ...props, children: children });
};
export default Link;
