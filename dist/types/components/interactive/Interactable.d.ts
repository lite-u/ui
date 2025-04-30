import { CSSProperties, ElementType } from 'react';
import { PolymorphicProps } from '../polymorphic/Polymorphic';
type InteractableProps<T extends ElementType> = {
    hover?: CSSProperties;
    focus?: CSSProperties;
    down?: CSSProperties;
} & PolymorphicProps<T>;
declare const Interactable: <T extends ElementType>({ tag, children, onMouseEnter, onMouseOver, onMouseLeave, onMouseDown, onMouseUp, onFocus, onBlur, hover, down, focus, style, ...rest }: InteractableProps<T>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export default Interactable;
