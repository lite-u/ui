import { ReactNode } from 'react';
declare const Collapse: React.FC<React.HTMLProps<HTMLDivElement> & {
    head: ReactNode;
    open?: boolean;
    onToggle?: (isOpen: boolean) => void;
}>;
export declare const Open: import("react").FC<import("react").HTMLProps<HTMLDivElement> & {
    head: ReactNode;
    open?: boolean;
    onToggle?: (isOpen: boolean) => void;
}>;
export default Collapse;
