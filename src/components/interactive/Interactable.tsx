import React, {
  CSSProperties,
  ElementType,
  FocusEventHandler,
  // KeyboardEvent,
  // KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from 'react'
import {JSX} from 'react/jsx-runtime'
import IntrinsicElements = JSX.IntrinsicElements

type PolymorphicTag = keyof HTMLElementTagNameMap;

type InteractableBaseProps<T extends PolymorphicTag> = {
  tag?: PolymorphicTag;
  hover?: CSSProperties;
  focus?: CSSProperties;
  active?: CSSProperties;
  style?: CSSProperties;
  children?: React.ReactNode;
  onMouseEnter?: MouseEventHandler<HTMLElementTagNameMap[T]>
  onMouseLeave?: MouseEventHandler<HTMLElementTagNameMap[T]>
  onFocus?: FocusEventHandler<HTMLElementTagNameMap[T]>
  onBlur?: FocusEventHandler<HTMLElementTagNameMap[T]>
  onMouseDown?: MouseEventHandler<HTMLElementTagNameMap[T]>
  onMouseUp?: MouseEventHandler<HTMLElementTagNameMap[T]>
  // onKeyDown?: KeyboardEventHandler<HTMLElementTagNameMap[T]>
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
                                                  onMouseDown,
                                                  onMouseUp,
                                                  onKeyDown,
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
/*      onKeyDown={(e: KeyboardEvent<HTMLElementTagNameMap[T]>) => {
        setHovered(true)
        onKeyDown?.(e)
      }}*/
      onMouseEnter={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
        setHovered(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
        setHovered(false)
        onMouseLeave?.(e)
      }}
      onFocus={(e: React.FocusEvent<HTMLElementTagNameMap[T]>) => {
        setFocused(true)
        onFocus?.(e)
      }}
      onBlur={(e: React.FocusEvent<HTMLElementTagNameMap[T]>) => {
        setFocused(false)
        onBlur?.(e)
      }}
      onMouseDown={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
        setPressed(true)
        onMouseDown?.(e)
      }}
      onMouseUp={(e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
        setPressed(false)
        onMouseUp?.(e)
      }}
      style={computedStyle}
    >
      {children}
    </Tag>
  )
}

export default Interactable