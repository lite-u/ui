import { CSSProperties, FocusEventHandler, KeyboardEventHandler, MouseEventHandler, PointerEventHandler, ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';
import IntrinsicElements = JSX.IntrinsicElements;
type PolymorphicTag = keyof HTMLElementTagNameMap;
export type InteractableBaseProps<T extends PolymorphicTag> = {
    tag?: PolymorphicTag;
    hover?: CSSProperties;
    focus?: CSSProperties;
    active?: CSSProperties;
    style?: CSSProperties;
    disabled?: boolean;
    children?: ReactNode;
    onMouseEnter?: MouseEventHandler<HTMLElementTagNameMap[T]>;
    onMouseLeave?: MouseEventHandler<HTMLElementTagNameMap[T]>;
    onFocus?: FocusEventHandler<HTMLElementTagNameMap[T]>;
    onBlur?: FocusEventHandler<HTMLElementTagNameMap[T]>;
    onPointerDown?: PointerEventHandler<HTMLElementTagNameMap[T]>;
    onPointerUp?: PointerEventHandler<HTMLElementTagNameMap[T]>;
    onClick?: MouseEventHandler<HTMLElementTagNameMap[T]>;
    onKeyDown?: KeyboardEventHandler<HTMLElementTagNameMap[T]>;
} & Omit<IntrinsicElements[T], 'disabled'>;
/**
 * A polymorphic component that adapts to the given `tag`.
 */
declare function Interactable<T extends PolymorphicTag>({ tag, disabled, hover, focus, active, style, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onPointerDown, onPointerUp, onKeyDown, ...rest }: InteractableBaseProps<T>): JSX.Element;
export declare const IA: typeof Interactable;
export default Interactable;
