import { CSSProperties, ElementType } from 'react';
import { PolymorphicProps } from '../polymorphic/Polymorphic';
type InteractableProps<T extends ElementType> = {
    hover?: CSSProperties;
    active?: CSSProperties;
    down?: CSSProperties;
} & PolymorphicProps<T>;
declare const Interactable: <T extends ElementType>({ tag, children, onMouseEnter, onMouseOver, onMouseLeave, onMouseDown, onMouseUp, hover, down, style, ...rest }: InteractableProps<T>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export default Interactable;
