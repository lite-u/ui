import { CSSProperties, FC, ReactNode } from 'react';
type HoverContextType = {
    show: boolean;
    persisted: boolean;
    onMouseEnter?: VoidFunction | null;
    onMouseLeave?: VoidFunction | null;
};
export declare const HoverContext: import("react").Context<HoverContextType>;
/**
 * Hover component
 *
 * @brief
 * A hover-triggered wrapper that reveals content based on mouse interactions.
 *
 * @intro
 * Wraps `HoverHead` and `HoverBody` components to provide tooltip or popover-like functionality.
 * It manages visibility and optional persistence of content based on hover state, with customizable delay and trigger behavior.
 *
 * @example
 * import { Hover, HoverHead, HoverBody } from '@lite-u/ui'
 *
 * <Hover delay={200} persistMode>
 *   <HoverHead>Hover me</HoverHead>
 *   <HoverBody>This content shows on hover</HoverBody>
 * </Hover>
 */
declare const Hover: FC<{
    children: ReactNode;
    /**
     * Delay in milliseconds before hiding the hover content after mouse leaves.
     * @default 0
     */
    delay?: number;
    /**
     * If true, hover effects are triggered only when hovering over the `HoverHead` element,
     * and `HoverBody` will disappear when the mouse leaves the `HoverHead`.
     * @default false
     */
    onlyTriggerByHead?: boolean;
    /**
     * Enables persistent display mode, where hover state is managed logically and content is not removed from the DOM,
     * but instead controlled via display (display: none).
     * @default false
     */
    persistMode?: boolean;
    style?: CSSProperties;
}>;
export default Hover;
