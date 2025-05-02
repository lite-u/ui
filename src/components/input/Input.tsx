import InputNumber, {InputNumberProps} from './InputNumber'
import InputText from './InputText'
import {useLiteUIContext} from '../../LiteUIProvider'
import {CSSProperties} from 'react'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string,
  xs?: boolean
  s?: boolean
  m?: boolean
  l?: boolean,
  number?: boolean
  primary?: boolean
  warn?: boolean
  error?: boolean
  neutral?: boolean
  style?: {}
}> = ({
        type = 'text',
        number,
        label,
        xs,
        s,
        m = true,
        l,
        style = {},
        primary,
        neutral = true,
        warn,
        error,
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
    {label && <label>{label}</label>}

    {
      type === 'number' && <InputNumber style={styles} {...props as InputNumberProps}/>
    }

    {
      type === 'text' && <InputText style={styles} {...props}/>
    }
  </div>
}

export default Input