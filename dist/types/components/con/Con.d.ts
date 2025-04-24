import { ReactNode } from 'react';
declare const Con: React.FC<React.HTMLProps<HTMLDivElement> & {
    children: ReactNode;
    fw?: boolean;
    fh?: boolean;
    p?: number | string;
    m?: number | string;
    w?: number | string;
    h?: number | string;
    style?: {};
}>;
export default Con;
