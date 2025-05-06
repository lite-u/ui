import { ReactNode } from 'react';
type TooltipPlacement = 't' | 'r' | 'b' | 'l' | 'tl' | 'tr' | 'bl' | 'br';
type ToolTipProps = React.HTMLProps<HTMLDivElement> & {
    /**
     * The title of the tooltip.
     */
    title: React.ReactNode;
    /**
     * The background color of the tooltip. Defaults to a neutral color.
     * @default '#333'
     */
    bgColor?: string;
    /**
     * The text color of the tooltip. Defaults to a readable color.
     * @default '#fff'
     *
     */
    textColor?: string;
    /**
     * The placement of the tooltip relative to its children. Can be one of:
     * `t` , `r` , `b` , `l` , `tl` , `tr` , `bl` , `br`
     *
     * @default t
     */
    placement?: TooltipPlacement;
    /**
     * Duration of the transition entering, in milliseconds.
     * @default 200
     */
    animationEnterDuration: number;
    /**
     * Duration of the transition leaving, in milliseconds.
     * @default 100
     */
    animationExitDuration: number;
    children: ReactNode;
};
/**
 * Tooltip component
 *
 * @brief
 * Displays a floating label with helpful information when the user hovers over or focuses on the target element.
 *
 * @intro
 * Renders a customizable tooltip using React Portals for positioning and transition animations. It calculates the correct position based on the specified direction and adjusts dynamically if the target element moves.
 *
 * @example
 * import { Tooltip } from '@lite-u/ui'
 *
 * <Tooltip title="Hello" placement="t">
 *   <button>Hover me</button>
 * </Tooltip>
 */
export declare const Tooltip: React.FC<ToolTipProps>;
export default Tooltip;
