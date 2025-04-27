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
    mw?: CSSProperties['maxWidth'];
    w?: CSSProperties['width'];
    h?: CSSProperties['height'];
    mh?: CSSProperties['maxHeight'];
    style?: {};
}>;
export default Con;
