import { CSSProperties, ReactNode } from 'react';
declare const Con: React.FC<React.HTMLProps<HTMLDivElement> & {
    children?: ReactNode;
    box?: boolean;
    ovh?: boolean;
    fw?: boolean;
    fh?: boolean;
    bg?: CSSProperties['backgroundColor'];
    color?: CSSProperties['color'];
    p?: CSSProperties['padding'];
    m?: CSSProperties['margin'];
    w?: CSSProperties['width'];
    h?: CSSProperties['height'];
    style?: {};
}>;
export default Con;
