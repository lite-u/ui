import React, {
  CSSProperties,
  ElementType,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  PointerEvent,
  PointerEventHandler,
  useState,
} from 'react'
import {JSX} from 'react/jsx-runtime'
import IntrinsicElements = JSX.IntrinsicElements

type PolymorphicTag = keyof HTMLElementTagNameMap;
// type ElementTypeFor<T extends PolymorphicTag> = HTMLElementTagNameMap[T];

type InteractableBaseProps<T extends PolymorphicTag> = {
  tag?: PolymorphicTag;
  hover?: CSSProperties;
  focus?: CSSProperties;
  active?: CSSProperties;
  style?: CSSProperties;
  children?: React.ReactNode;
  // onMouseEnter?: (e: React.MouseEvent<ElementTypeFor<T>>) => void;

  onMouseEnter?: MouseEventHandler<HTMLElementTagNameMap[T]>
  onMouseLeave?: MouseEventHandler<HTMLElementTagNameMap[T]>
  onFocus?: FocusEventHandler<HTMLElementTagNameMap[T]>
  onBlur?: FocusEventHandler<HTMLElementTagNameMap[T]>
  onPointerDown?: PointerEventHandler<HTMLElementTagNameMap[T]>
  onPointerUp?: PointerEventHandler<HTMLElementTagNameMap[T]>
  onClick?: MouseEventHandler<HTMLElementTagNameMap[T]>
  onKeyDown?: KeyboardEventHandler<HTMLElementTagNameMap[T]>
} & IntrinsicElements[T];

/**
 * A polymorphic component that adapts to the given `tag`.
 */
function Interactable<T extends PolymorphicTag>({
                                                  tag,
                                                  hover,
                                                  focus,
                                                  active,
                                                  style,
                                                  children,
                                                  onMouseEnter,
                                                  onMouseLeave,
                                                  onFocus,
                                                  onBlur,
                                                  onPointerDown,
                                                  onPointerUp,
                                                  onKeyDown,
                                                  // onClick,
                                                  ...rest
                                                }: InteractableBaseProps<T>) {
  const Tag = tag as ElementType
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [pressed, setPressed] = useState(false)

  const computedStyle: CSSProperties = {
    ...style,
    ...(hovered ? hover : {}),
    ...(focused ? focus : {}),
    ...(pressed ? active : {}),
  }
  return (
    <Tag
      {...rest}
      onMouseEnter={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
        // @ts-ignore
        if (rest?.disabled) return
        setHovered(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
        // @ts-ignore
        if (rest?.disabled) return
        setHovered(false)
        onMouseLeave?.(e)
      }}
      onFocus={(e: React.FocusEvent<HTMLElementTagNameMap[T]>) => {
        // @ts-ignore
        if (rest?.disabled) return
        setFocused(true)
        onFocus?.(e)
      }}
      onBlur={(e: React.FocusEvent<HTMLElementTagNameMap[T]>) => {
        // @ts-ignore
        if (rest?.disabled) return
        setFocused(false)
        onBlur?.(e)
      }}
      onPointerDown={(e: PointerEvent<HTMLElementTagNameMap[T]>) => {
        // @ts-ignore
        if (rest?.disabled) return
        // @ts-ignore
        e.target?.setPointerCapture(e.pointerId)
        setPressed(true)
        onPointerDown?.(e)
      }}
      onPointerUp={(e: PointerEvent<HTMLElementTagNameMap[T]>) => {
        // @ts-ignore
        if (rest?.disabled) return
        // @ts-ignore
        e.target?.releasePointerCapture(e.pointerId)
        setPressed(false)
        onPointerUp?.(e)
      }}
      /*   onMouseDown={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
           // (e.target as HTMLElement).setPointerCapture(e.pointerId)
           console.log('mousedown')
           setPressed(true)
           onMouseDown?.(e)
         }}
         onMouseUp={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
           setPressed(false)
           onMouseUp?.(e)
         }}*/
      style={computedStyle}
    >
      {children}
    </Tag>
  )
}

export default Interactable