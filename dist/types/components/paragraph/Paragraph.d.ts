import { CSSProperties } from 'react';
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
 *
 * <Paragraph size={14} color="gray" center>
 *   This is a centered paragraph with custom styling.
 * </Paragraph>
 */
declare const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement> & {
    /**
     * Custom font size for the paragraph text.
     * @default 16
     */
    size?: number;
    /**
     * Text color of the paragraph.
     */
    color?: CSSProperties['color'];
    /**
     * Centers the paragraph text.
     * @default false
     */
    center?: boolean;
    /**
     * Controls word-break behavior (e.g., 'break-word', 'normal').
     * @default 'break-word'
     */
    wb?: CSSProperties['wordBreak'];
}>;
export declare const P: import("react").FC<import("react").HTMLAttributes<HTMLParagraphElement> & {
    /**
     * Custom font size for the paragraph text.
     * @default 16
     */
    size?: number;
    /**
     * Text color of the paragraph.
     */
    color?: CSSProperties["color"];
    /**
     * Centers the paragraph text.
     * @default false
     */
    center?: boolean;
    /**
     * Controls word-break behavior (e.g., 'break-word', 'normal').
     * @default 'break-word'
     */
    wb?: CSSProperties["wordBreak"];
}>;
export default Paragraph;
