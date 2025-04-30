import React, { CSSProperties, FocusEventHandler, KeyboardEventHandler, MouseEventHandler } from 'react';
import { JSX } from 'react/jsx-runtime';
import IntrinsicElements = JSX.IntrinsicElements;
type PolymorphicTag = keyof HTMLElementTagNameMap;
type InteractableBaseProps<T extends PolymorphicTag> = {
    tag?: PolymorphicTag;
    hover?: CSSProperties;
    focus?: CSSProperties;
    active?: CSSProperties;
    style?: CSSProperties;
    children?: React.ReactNode;
    onMouseEnter?: MouseEventHandler<HTMLElementTagNameMap[T]>;
    onMouseLeave?: MouseEventHandler<HTMLElementTagNameMap[T]>;
    onFocus?: FocusEventHandler<HTMLElementTagNameMap[T]>;
    onBlur?: FocusEventHandler<HTMLElementTagNameMap[T]>;
    onMouseDown?: MouseEventHandler<HTMLElementTagNameMap[T]>;
    onMouseUp?: MouseEventHandler<HTMLElementTagNameMap[T]>;
    onClick?: MouseEventHandler<HTMLElementTagNameMap[T]>;
    onKeyDown?: KeyboardEventHandler<HTMLElementTagNameMap[T]>;
} & IntrinsicElements[T];
/**
 * A polymorphic component that adapts to the given `tag`.
 */
declare function Interactable<T extends PolymorphicTag>({ tag, hover, focus, active, style, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onMouseDown, onMouseUp, onKeyDown, ...rest }: InteractableBaseProps<T>): JSX.Element;
export default Interactable;
