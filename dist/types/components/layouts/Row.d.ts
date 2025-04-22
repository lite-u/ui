import { ReactNode } from 'react';
declare const Row: React.FC<{
    children: ReactNode;
    fw?: boolean;
    fh?: boolean;
    w?: number | string;
    h?: number | string;
    around?: boolean;
    between?: boolean;
    style?: {};
}>;
export default Row;
