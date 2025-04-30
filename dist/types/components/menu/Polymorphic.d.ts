import { ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';
import IntrinsicElements = JSX.IntrinsicElements;
declare const Polymorphic: React.FC<React.HTMLProps<HTMLDivElement> & {
    children: ReactNode;
    tag: keyof IntrinsicElements;
    active?: boolean;
    activeStyle?: React.CSSProperties;
}>;
export default Polymorphic;
