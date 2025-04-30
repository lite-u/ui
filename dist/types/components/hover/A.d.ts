/// <reference types="react" />
import { PolymorphicProps } from '../polymorphic/Polymorphic';
declare const Hoverable: <T extends keyof import("react/jsx-runtime").JSX.IntrinsicElements>({ tag, children, onMouseEnter, onMouseOver, onMouseLeave, onMouseDown, onMouseUp, active, activeStyle, style, ...rest }: HoverableProps<T>) => import("react").ReactElement<Omit<PolymorphicProps<keyof import("react/jsx-runtime").JSX.IntrinsicElements>, "tag" | "children">, string | import("react").JSXElementConstructor<any>>;
export default Hoverable;
