import React, {
  CSSProperties,
  ElementType,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  PointerEvent,
  PointerEventHandler,
  ReactNode,
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
  disabled?: boolean;
  children?: ReactNode;

  onMouseEnter?: MouseEventHandler<HTMLElementTagNameMap[T]>
  onMouseLeave?: MouseEventHandler<HTMLElementTagNameMap[T]>
  onFocus?: FocusEventHandler<HTMLElementTagNameMap[T]>
  onBlur?: FocusEventHandler<HTMLElementTagNameMap[T]>
  onPointerDown?: PointerEventHandler<HTMLElementTagNameMap[T]>
  onPointerUp?: PointerEventHandler<HTMLElementTagNameMap[T]>
  onClick?: MouseEventHandler<HTMLElementTagNameMap[T]>
  onKeyDown?: KeyboardEventHandler<HTMLElementTagNameMap[T]>
} & Omit<IntrinsicElements[T], 'disabled'>;

/**
 * A polymorphic component that adapts to the given `tag`.
 */
function Interactable<T extends PolymorphicTag>({
                                                  tag = 'div',
                                                  disabled = false,
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
  }

  if (pressed) {
    Object.assign(computedStyle, active)
  } else if (focused) {
    Object.assign(computedStyle, focus)
  } else if (hovered) {
    Object.assign(computedStyle, hover)
  }

  return (
    <Tag
      {...rest}
      onMouseEnter={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
        if (disabled) return

        setHovered(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
        if (disabled) return

        setHovered(false)
        onMouseLeave?.(e)
      }}
      onFocus={(e: React.FocusEvent<HTMLElementTagNameMap[T]>) => {
        if (disabled) return

        setFocused(true)
        onFocus?.(e)
      }}
      onBlur={(e: React.FocusEvent<HTMLElementTagNameMap[T]>) => {
        if (disabled) return

        setFocused(false)
        onBlur?.(e)
      }}
      onPointerDown={(e: PointerEvent<HTMLElementTagNameMap[T]>) => {
        if (disabled) return

        const target = e.target as HTMLElementTagNameMap[T]

        target.setPointerCapture(e.pointerId)
        setPressed(true)
        onPointerDown?.(e)
      }}
      onPointerUp={(e: PointerEvent<HTMLElementTagNameMap[T]>) => {
        if (disabled) return

        const target = e.target as HTMLElementTagNameMap[T]

        target.releasePointerCapture(e.pointerId)
        setPressed(false)
        onPointerUp?.(e)
      }}
      style={computedStyle}
    >
      {children}
    </Tag>
  )
}

export const IA = Interactable
export default Interactable