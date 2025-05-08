import { jsx as _jsx } from "react/jsx-runtime";
import { useLiteUIContext } from '../../LiteUIProvider';
/**
 * Paragraph component
 *
 * @brief
 * Renders a styled `<p>` tag with configurable font size, color, alignment, and word-break behavior.
 *
 * @intro
 * Applies theming defaults for spacing and base typography, while allowing per-instance customization
 * for text alignment, font size, color, and word-breaking strategy.
 *
 * @example
 * import { Paragraph } from '@lite-u/ui'
 * P is an alias of Paragraph
 * import { P } from '@lite-u/ui'
 *
 * <Paragraph size={14} textColor="gray" center>
 *   This is a centered paragraph with custom styling.
 * </Paragraph>
 */
const Paragraph = ({ children, size, style = {}, textColor, center = false, wb = 'break-word', ...props }) => {
    const { theme } = useLiteUIContext();
    const styles = {
        flex: 1,
        fontSize: theme.title.h6,
        margin: 0,
        padding: 0,
        // paddingTop: theme.padding.md.x,
        // paddingBottom: theme.padding.md.x,
    };
    if (center) {
        styles.textAlign = 'center';
    }
    if (textColor) {
        styles.color = textColor;
    }
    if (typeof size === 'string' || typeof size === 'number') {
        styles.fontSize = size;
    }
    if (wb) {
        styles.wordBreak = wb;
    }
    return _jsx("p", { style: { ...styles, ...style }, ...props, children: children });
};
export const P = Paragraph;
export default Paragraph;
