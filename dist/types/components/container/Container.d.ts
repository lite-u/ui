import { CSSProperties } from 'react';
export interface ContainerProps {
    /**
     * If true, applies `box-sizing: border-box` to the container.
     * @default true
     */
    box?: boolean;
    /**
     * If true, applies `overflow: hidden`.
     * @default false
     */
    ovh?: boolean;
    /**
     * If true, applies `overflow: auto`.
     * @default false
     */
    ova?: boolean;
    /**
     * If true, sets width to 100%.
     * @default true
     */
    fw?: boolean;
    /**
     * If true, sets height to 100%.
     * @default false
     */
    fh?: boolean;
    /**
     * If true, aligns text to the left.
     * @default true
     */
    tl?: boolean;
    /**
     * If true, aligns text to the center.
     * @default false
     */
    tc?: boolean;
    /**
     * If true, aligns text to the right.
     * @default false
     */
    tr?: boolean;
    /**
     * Background color of the container.
     */
    bg?: CSSProperties['backgroundColor'];
    /**
     * Text color of the container.
     */
    color?: CSSProperties['color'];
    /**
     * Font size of the container text.
     * @default 14
     */
    fz?: CSSProperties['fontSize'];
    /**
     * If true, applies border-radius of 5px.
     */
    rounded?: boolean;
    /**
     * If true, applies a 1px solid border with the specified border color.
     */
    border?: boolean;
    /**
     * If true, sets display to inline-block.
     */
    ib?: boolean;
    /**
     * Color of the border.
     * @default '#dfdfdf'
     */
    borderColor?: CSSProperties['borderColor'];
    /**
     * Padding of the container.
     */
    p?: CSSProperties['padding'];
    /**
     * Padding top of the container.
     */
    pt?: CSSProperties['paddingTop'];
    /**
     * Padding right of the container.
     */
    pr?: CSSProperties['paddingRight'];
    /**
     * Padding bottom of the container.
     */
    pb?: CSSProperties['paddingBottom'];
    /**
     * Padding left of the container.
     */
    pl?: CSSProperties['paddingLeft'];
    /**
     * Margin of the container.
     */
    m?: CSSProperties['margin'];
    /**
     * Margin top of the container.
     */
    mt?: CSSProperties['marginTop'];
    /**
     * Margin right of the container.
     */
    mr?: CSSProperties['marginRight'];
    /**
     * Margin bottom of the container.
     */
    mb?: CSSProperties['marginBottom'];
    /**
     * Margin left of the container.
     */
    ml?: CSSProperties['marginLeft'];
    /**
     * Maximum width of the container.
     */
    maxW?: CSSProperties['maxWidth'];
    /**
     * Maximum height of the container.
     */
    maxH?: CSSProperties['maxHeight'];
    /**
     * Minimum width of the container.
     */
    minW?: CSSProperties['minWidth'];
    /**
     * Minimum height of the container.
     */
    minH?: CSSProperties['minHeight'];
    /**
     * Width of the container.
     */
    w?: CSSProperties['width'];
    /**
     * Height of the container.
     */
    h?: CSSProperties['height'];
    /**
     * ARIA role attribute for the container.
     * @default 'container'
     */
    role?: string;
}
/**
 * Container component
 *
 * @brief
 * A flexible layout and style container that adapts to various UI layout needs.
 *
 * @intro
 * Provides dynamic box, margin, padding, overflow, and size styling through a rich set of shorthand props.
 * Useful as a base layout block across components or pages.
 *
 * @example
 * <Container p={20} bg="#f9f9f9" fw fh>
 *   <h2>Content</h2>
 * </Container>
 */
declare const Container: React.FC<React.HTMLProps<HTMLDivElement> & ContainerProps>;
export declare const Con: import("react").FC<import("react").HTMLProps<HTMLDivElement> & ContainerProps>;
export default Container;
