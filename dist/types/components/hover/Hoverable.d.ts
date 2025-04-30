import { CSSProperties, ElementType } from 'react';
import { PolymorphicProps } from '../polymorphic/Polymorphic';
type HoverableProps<T extends ElementType> = {
    active?: boolean;
    activeStyle?: CSSProperties;
} & PolymorphicProps<T>;
declare const Hoverable: <T extends ElementType>({ tag, children, onMouseEnter, onMouseOver, onMouseLeave, onMouseDown, onMouseUp, active, activeStyle, style, ...rest }: HoverableProps<T>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export default Hoverable;
