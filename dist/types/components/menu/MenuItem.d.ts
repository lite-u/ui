import { CSSProperties } from 'react';
/**
 * MenuItem component
 *
 * @brief
 * A flexible interactive item used within menus or lists, with optional size variants and hover transitions.
 *
 * @intro
 * Applies consistent dimensions and padding based on selected size (`xs`, `s`, `m`, `l`),
 * and shows a transition effect on hover. Integrates theming from Lite UI context.
 *
 * @example
 * import { MenuItem } from '@lite-u/ui'
 *
 * <MenuItem m hoverStyle={{ backgroundColor: 'lightgray' }}>
 *   Settings
 * </MenuItem>
 */
declare const MenuItem: React.FC<React.HTMLProps<HTMLDivElement> & {
    /**
     * Renders the item in extra-small size.
     * @default false
     */
    xs?: boolean;
    /**
     * Renders the item in small size.
     * @default false
     */
    s?: boolean;
    /**
     * Renders the item in medium size.
     * @default true
     */
    m?: boolean;
    /**
     * Renders the item in large size.
     * @default false
     */
    l?: boolean;
    /**
     * CSS styles to apply on active.
     * @default { backgroundColor: '#dfdfdf' }
     */
    activeStyle?: CSSProperties;
    /**
     * CSS styles to apply on hover.
     * @default { backgroundColor: '#dfdfdf' }
     */
    hoverStyle?: CSSProperties;
}>;
export default MenuItem;
