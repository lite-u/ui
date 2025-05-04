import { ContainerProps } from '../container/Container';
import { CSSProperties } from 'react';
export interface ColumnProps extends ContainerProps {
    /**
     * Aligns children to the start of the column (left by default).
     * @default true
     */
    start?: boolean;
    /**
     * Aligns children to the center of the column.
     * @default false
     */
    center?: boolean;
    /**
     * Stretches children to fill the column width.
     * @default false
     */
    stretch?: boolean;
    /**
     * Aligns children to the end of the column (right by default).
     * @default false
     */
    end?: boolean;
    /**
     * Defines spacing between children using the CSS `gap` property.
     * @default 0
     */
    space?: CSSProperties['gap'];
    /**
     * Justifies children with space around them.
     * @default false
     */
    around?: boolean;
    /**
     * Justifies children with space between them.
     * @default false
     */
    between?: boolean;
    /**
     * Justifies children to the center vertically.
     * @default false
     */
    jc?: boolean;
    /**
     * Justifies children to the start vertically.
     * @default false
     */
    js?: boolean;
    /**
     * Justifies children to the end vertically.
     * @default false
     */
    je?: boolean;
}
/**
 * Column component
 *
 * @brief
 * A flexible vertical layout container built on top of the Flex component.
 *
 * @intro
 * Arranges children in a column direction using Flexbox. Supports alignment props
 * like `start`, `center`, `end`, and spacing between items using the `space` prop.
 *
 * @example
 * import { Column } from '@lite-u/ui'
 * // Col is an alias of Column
 * import { Col } from '@lite-u/ui'
 *
 * <Column center space={16}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Column>
 */
declare const Column: React.FC<ColumnProps & Omit<React.HTMLProps<HTMLDivElement>, 'start'>>;
export declare const Col: import("react").FC<ColumnProps & Omit<import("react").HTMLProps<HTMLDivElement>, "start">>;
export default Column;
