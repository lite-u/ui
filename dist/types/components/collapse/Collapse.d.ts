import { CSSProperties, ReactNode, RefObject } from 'react';
import { TransitionProps } from '../transition/Transition';
type CollapseProps = React.HTMLProps<HTMLDivElement> & {
    /**
     * The clickable header element that toggles the collapse.
     * @default \-
     */
    head: ReactNode;
    /**
     * Controls whether the collapse is initially open.
     * @default true
     */
    open?: boolean;
    /**
     * Inline styles applied to the clickable header element.
     * @default \-
     */
    headStyle?: CSSProperties;
    /**
     * Inline styles applied to the collapsible content container.
     * @default \-
     */
    contentStyle?: CSSProperties;
    /**
     * Duration of the enter transition in milliseconds.
     * @default \-
     */
    duration?: TransitionProps['duration'];
    /**
     * Duration of the leave transition in milliseconds.
     * @default \-
     */
    exitDuration?: TransitionProps['exitDuration'];
    /**
     * Callback fired when the collapse is toggled. Receives the new open state.
     * @default \-
     */
    onToggle?: (isOpen: boolean) => void;
    ref?: RefObject<HTMLDivElement>;
};
declare const Collapse: React.FC<CollapseProps>;
export declare const Open: import("react").FC<CollapseProps>;
export default Collapse;
