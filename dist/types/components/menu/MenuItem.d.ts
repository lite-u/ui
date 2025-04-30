import { CSSProperties, ReactNode } from 'react';
declare const MenuItem: React.FC<React.HTMLProps<HTMLDivElement> & {
    children: ReactNode;
    sm?: boolean;
    activeStyle?: CSSProperties;
}>;
export default MenuItem;
