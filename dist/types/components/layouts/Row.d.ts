import { ContainerProps } from '../container/Container';
import { CSSProperties } from 'react';
interface RowProps extends ContainerProps {
    /**
     * Align items to the start vertically.
     * @default true
     */
    start?: boolean;
    /**
     * Align items to the center vertically.
     * @default false
     */
    center?: boolean;
    /**
     * Stretch items to fill the container vertically.
     * @default false
     */
    stretch?: boolean;
    /**
     * Align items to the end vertically.
     * @default false
     */
    end?: boolean;
    /**
     * If true, allows child elements to wrap onto multiple lines.
     * @default false
     */
    wrap?: boolean;
    /**
     * Justify content with space around.
     * @default false
     */
    around?: boolean;
    /**
     * Justify content to the center horizontally.
     * @default false
     */
    jc?: boolean;
    /**
     * Justifies children to the start horizontally.
     * @default false
     */
    js?: boolean;
    /**
     * Justifies children to the end horizontally.
     * @default false
     */
    je?: boolean;
    /**
     * Justify content with space between items.
     * @default false
     */
    between?: boolean;
    /**
     * Gap between child elements.
     * @default 0
     */
    space?: CSSProperties['gap'];
}
type RowComponentProps = Omit<React.HTMLProps<HTMLDivElement>, 'wrap' | 'start'> & RowProps;
/**
 * Row component
 *
 * @brief
 * A horizontal flex container with shorthand alignment and spacing props.
 *
 * @intro
 * A layout component built on top of `Flex`, providing horizontal flow and useful alignment helpers like `start`, `center`, `stretch`, `wrap`, and `space`.
 * Supports extended `ContainerProps`.
 *
 * @example
 * import { Container } from '@lite-u/ui'
 *
 * <Row center space={10} wrap>
 *   <span>1</span>
 *   <span>2</span>
 *   <span>3</span>
 * </Row>
 */
declare const Row: React.FC<RowComponentProps>;
export default Row;
