import { CSSProperties, ReactNode } from 'react';
type CollapseProps = React.HTMLProps<HTMLDivElement> & {
    head: ReactNode;
    open?: boolean;
    headStyle?: CSSProperties;
    duration?: number;
    leaveDuration?: number;
    onToggle?: (isOpen: boolean) => void;
};
declare const Collapse: React.FC<CollapseProps>;
export declare const Open: import("react").FC<CollapseProps>;
export default Collapse;
