import { ElementType, HTMLAttributes } from 'react';
export type PolymorphicProps<T extends ElementType> = {
    tag?: T;
} & HTMLAttributes<HTMLElement>;
declare const Polymorphic: <T extends ElementType>(props: PolymorphicProps<T>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export default Polymorphic;
