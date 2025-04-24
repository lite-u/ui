import { ReactNode } from 'react';
declare const Row: React.FC<React.HTMLProps<HTMLDivElement> & {
    children: ReactNode;
    fw?: boolean;
    fh?: boolean;
    w?: number | string;
    h?: number | string;
    start?: boolean;
    jc?: boolean;
    center?: boolean;
    end?: boolean;
    around?: boolean;
    between?: boolean;
    space?: number;
    style?: {};
}>;
export default Row;
