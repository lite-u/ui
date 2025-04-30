/// <reference types="react" />
import { JSX } from 'react/jsx-runtime';
type ElementTag = keyof JSX.IntrinsicElements;
type PropsOf<T extends ElementTag> = JSX.IntrinsicElements[T];
export type PolymorphicProps<T extends ElementTag> = {
    tag?: T;
    children?: React.ReactNode;
} & PropsOf<T>;
declare const Polymorphic: <T extends keyof JSX.IntrinsicElements = "div">(props: PolymorphicProps<T>) => import("react").ReactElement<Omit<PolymorphicProps<T>, "children" | "tag">, string | import("react").JSXElementConstructor<any>>;
export default Polymorphic;
