import { CSSProperties, ReactNode, RefObject } from 'react';
type CollapseProps = React.HTMLProps<HTMLDivElement> & {
    head: ReactNode;
    open?: boolean;
    headStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    duration?: number;
    leaveDuration?: number;
    onToggle?: (isOpen: boolean) => void;
    ref?: RefObject<HTMLDivElement>;
};
declare const Collapse: React.FC<CollapseProps>;
export declare const Open: import("react").FC<CollapseProps>;
export default Collapse;
