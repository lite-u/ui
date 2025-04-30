import InputNumber, {InputNumberProps} from './InputNumber'
import InputText from './InputText'
import {useLiteUIContext} from '../../LiteUIProvider'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string,
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
  const sizeStyles = {
    s: {
      width: 100,
      height: 25,
      padding: '2px 6px',
      fontSize: 12,
      borderRadius: theme.borderRadius.sm,
    },
    m: {
      width: 120,
      height: 30,
      padding: '4px 8px',
      fontSize: 14,
      borderRadius: theme.borderRadius.md,

    },
    l: {
      width: 150,
      height: 40,
      padding: '6px 10px',
      fontSize: 16,
      borderRadius: theme.borderRadius.lg,
    },
  }

  let styles: React.CSSProperties = {
    boxSizing: 'border-box',
  }

  // console.log(theme.input.primary)

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

  if (m) {
    Object.assign(styles, sizeStyles.m)
  }

  if (s) {
    Object.assign(styles, sizeStyles.s)
  }

  if (l) {
    Object.assign(styles, sizeStyles.l)
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