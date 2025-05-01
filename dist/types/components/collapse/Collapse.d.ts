import { CSSProperties, ReactNode } from 'react';
declare const Collapse: React.FC<React.HTMLProps<HTMLDivElement> & {
    head: ReactNode;
    open?: boolean;
    headStyle?: CSSProperties;
    onToggle?: (isOpen: boolean) => void;
}>;
export declare const Open: import("react").FC<import("react").HTMLProps<HTMLDivElement> & {
    head: ReactNode;
    open?: boolean;
    headStyle?: CSSProperties;
    onToggle?: (isOpen: boolean) => void;
}>;
export default Collapse;
