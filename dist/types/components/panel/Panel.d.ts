import { ReactNode } from 'react';
import { ContainerProps } from '../container/Container';
/**
 * Panel component
 *
 * @brief
 * A flexible container component used to group and visually separate content within the layout.
 *
 * @intro
 * Provides a styled block container with customizable margin, padding, and background options.
 * Commonly used to structure and emphasize content sections in a UI.
 *
 * @example
 * <Panel p={20} bg="#fff">
 *   <h2>Section Title</h2>
 *   <p>This is a section of content within a panel.</p>
 * </Panel>
 */
declare const Panel: React.FC<{
    xs?: boolean;
    s?: boolean;
    m?: boolean;
    l?: boolean;
    title: string;
    titleStyle?: React.CSSProperties;
    titleClass?: string;
    contentStyle?: React.CSSProperties;
    contentClass?: string;
    children?: ReactNode;
} & ContainerProps & React.HTMLProps<HTMLDivElement>>;
export default Panel;
