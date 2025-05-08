import { ReactNode } from 'react';
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
declare const Link: React.FC<React.HTMLProps<HTMLAnchorElement> & {
    /**
     * The content to display inside the link.
     */
    children: ReactNode;
    /**
     * If true, the link will take up the full width of its container.
     * @default \-
     */
    fw?: boolean;
    /**
     * If true, the link will take up the full height of its container.
     * @default \-
     */
    fh?: boolean;
}>;
export default Link;
