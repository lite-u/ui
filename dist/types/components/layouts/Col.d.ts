import { ReactNode } from 'react';
export interface ColumnProps {
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
}
declare const Col: React.FC<ColumnProps & React.HTMLProps<HTMLDivElement>>;
export default Col;
