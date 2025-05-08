import { CSSProperties, ReactNode } from 'react';
type PanelProps = {
    /**
     * If true, sets the panel size to extra small (`xs`).
     * @default false
     */
    xs?: boolean;
    /**
     * If true, sets the panel size to small (`sm`).
     * @default false
     */
    s?: boolean;
    /**
     * If true, sets the panel size to medium (`md`).
     * @default false
     */
    m?: boolean;
    /**
     * If true, sets the panel size to large (`lg`).
     * @default false
     */
    l?: boolean;
    /**
     * The head part displayed in the panel header.
     * @default \-
     */
    head: ReactNode;
    /**
     * Optional custom styles for the head container.
     * @default {}
     */
    headStyle?: CSSProperties;
    /**
     * Optional custom styles for the panel content container.
     * @default {}
     */
    contentStyle?: CSSProperties;
};
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
 * import { Panel } from '@lite-u/ui'
 *
 * <Panel p={20} bg="#fff">
 *   <h2>Section Title</h2>
 *   <p>This is a section of content within a panel.</p>
 * </Panel>
 */
declare const Panel: React.FC<PanelProps & React.HTMLProps<HTMLDivElement>>;
export default Panel;
