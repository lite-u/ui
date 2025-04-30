import { ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';
import { PolymorphicProps } from '../polymorphic/Polymorphic';
import IntrinsicElements = JSX.IntrinsicElements;
declare const Hoverable: React.FC<PolymorphicProps<'div'> & {
    children: ReactNode;
    tag?: keyof IntrinsicElements;
    active?: boolean;
    activeStyle?: React.CSSProperties;
}>;
export default Hoverable;
