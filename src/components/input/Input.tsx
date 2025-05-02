import InputNumber, {InputNumberProps} from './InputNumber'
import InputText from './InputText'
import {useLiteUIContext} from '../../LiteUIProvider'
import {CSSProperties, useImperativeHandle, useRef} from 'react'

/**
 * Input component
 *
 * @brief
 * A stylized input field supporting text and number types with size and color variants.
 *
 * @intro
 * Renders either a text or number input with support for theming, sizing, and validation states.
 * Styling is pulled from the Lite UI theme context and adjusted according to provided props.
 *
 * @example
 * import { Input } from '@lite-u/ui'
 *
 * <Input placeholder="Your name" />
 * <Input number step={0.1} error />
 * <Input label="Username" s primary />
 */
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Optional label to display as the `<label>`.
   * @default ''
   */
  label?: string,
  /**
   * Extra small size variant for the input.
   * @default false
   */
  xs?: boolean
  /**
   * Small size variant for the input.
   * @default false
   */
  s?: boolean
  /**
   * Medium size variant for the input.
   * @default true
   */
  m?: boolean
  /**
   * Large size variant for the input.
   * @default false
   */
  l?: boolean,
  /**
   * If true, renders a number input instead of a text input.
   * @default false
   */
  number?: boolean
  /**
   * Applies primary styling to the input field.
   * @default false
   */
  primary?: boolean
  /**
   * Applies warning styling to the input field.
   * @default false
   */
  warn?: boolean
  /**
   * Applies error styling to the input field.
   * @default false
   */
  error?: boolean
  /**
   * Applies neutral styling to the input field.
   * @default true
   */
  neutral?: boolean
  /**
   * Inline styles to customize the input field.
   */
  style?: {}
  /**
   * Inline styles to customize the label.
   */
  labelStyle?: {}
  ref?: React.Ref<HTMLInputElement>
}> = ({
        type = 'text',
        number,
        label,
        xs,
        s,
        m = true,
        l,
        style = {},
        labelStyle = {},
        primary,
        neutral = true,
        warn,
        error,
        ref,
        ...props
      }) => {
  const {theme} = useLiteUIContext()
  const getSize = () => {
    if (xs) return 'xs'
    if (s) return 'sm'
    if (l) return 'lg'
    return 'md'
  }
  const size = getSize()
  const styles: CSSProperties = {
    ...theme.formElements[size],
    padding: `0 ${theme.padding[size].y}px`,
    fontSize: theme.fontSizes[size],
    borderRadius: theme.borderRadius[size],
    boxSizing: 'border-box',
  }
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => inputRef.current!)

  if (neutral) {
    Object.assign(styles, theme.input.neutral)
  }

  if (primary) {
    Object.assign(styles, theme.input.primary)
  }

  if (warn) {
    Object.assign(styles, theme.input.warn)
  }

  if (error) {
    Object.assign(styles, theme.input.error)
  }

  Object.assign(styles, style)

  if (number) {
    type = 'number'
  }

  return <div>
    {label &&
        <label style={{
          display: 'inline-block',
          marginRight: 10,
          fontSize: theme.fontSizes[size],
          ...labelStyle,
        }} onClick={() => {
          inputRef.current?.focus()
        }}>{label}</label>
    }

    {
      number ?
        <InputNumber ref={inputRef} style={styles} {...props as Omit<InputNumberProps, 'ref'>}/>
        :
        <InputText ref={inputRef} style={styles} {...props}/>
    }
  </div>
}

export default Input