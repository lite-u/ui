import { ReactNode } from 'react';
declare const Col: React.FC<React.HTMLProps<HTMLDivElement> & {
    children: ReactNode;
    fw?: boolean;
    fh?: boolean;
    w?: number | string;
    h?: number | string;
    around?: boolean;
    style?: {};
}>;
export default Col;
