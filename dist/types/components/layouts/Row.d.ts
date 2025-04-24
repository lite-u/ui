import { ReactNode } from 'react';
declare const Row: React.FC<React.HTMLProps<HTMLDivElement> & {
    children: ReactNode;
    fw?: boolean;
    fh?: boolean;
    w?: number | string;
    h?: number | string;
    start?: boolean;
    center?: boolean;
    stretch?: boolean;
    end?: boolean;
    around?: boolean;
    jc?: boolean;
    between?: boolean;
    space?: number;
    style?: {};
}>;
export default Row;
