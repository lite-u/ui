type TitleProps = {
    /**
     * Makes the heading position sticky at the top of its container.
     * @default false
     */
    sticky?: boolean;
    /**
     * If true, renders an h1 element.
     * @default false
     */
    h1?: boolean;
    /**
     * If true, renders an h2 element.
     * @default false
     */
    h2?: boolean;
    /**
     * If true, renders an h3 element.
     * @default false
     */
    h3?: boolean;
    /**
     * If true, renders an h4 element.
     * @default false
     */
    h4?: boolean;
    /**
     * If true, renders an h5 element.
     * @default false
     */
    h5?: boolean;
    /**
     * If true, renders an h6 element.
     * @default false
     */
    h6?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;
/**
 * Title component
 *
 * @brief
 * Renders a heading (`<h1>`–`<h6>`) with automatic theming and optional sticky positioning.
 *
 * @intro
 * Automatically selects a heading level (h1–h6) based on the given boolean props.
 * Styles the heading with a themed font size and margin. Supports sticky behavior for fixed headers.
 *
 * @example
 * import { Title } from '@lite-u/ui'
 *
 * <Title h2 sticky>Section Title</Title>
 */
export declare const Title: React.FC<TitleProps>;
export default Title;
