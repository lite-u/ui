import React, { CSSProperties } from 'react';
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
    onMouseEnter?: (e: React.MouseEvent<HTMLElementTagNameMap[T]>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLElementTagNameMap[T]>) => void;
    onFocus?: (e: React.MouseEvent<HTMLElementTagNameMap[T]>) => void;
    onBlur?: (e: React.MouseEvent<HTMLElementTagNameMap[T]>) => void;
    onMouseDown?: (e: React.MouseEvent<HTMLElementTagNameMap[T]>) => void;
    onMouseUp?: (e: React.MouseEvent<HTMLElementTagNameMap[T]>) => void;
} & IntrinsicElements[T];
/**
 * A polymorphic component that adapts to the given `tag`.
 */
declare function Interactable<T extends PolymorphicTag = 'div'>({ tag, hover, focus, active, style, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onMouseDown, onMouseUp, ...rest }: InteractableBaseProps<T>): JSX.Element;
export default Interactable;
