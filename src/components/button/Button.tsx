import {useLiteUIContext} from '../../LiteUIProvider'
import ButtonBase from './ButtonBase'

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'error' | 'warn' | 'neutral';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  primary?: boolean;
  neutral?: boolean;
  warn?: boolean;
  error?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
                                                xs,
                                                s,
                                                m = true,
                                                l,
                                                primary,
                                                warn,
                                                error,
                                                neutral = true,
                                                style = {},
                                                children,
                                                type = 'button',
                                                ...props
                                              }) => {
  const {theme} = useLiteUIContext()
  const {
    fontSizes,
    padding,
    button,
    borderRadius,
  } = theme

  const getVariant = (): Variant => {
    if (primary) return 'primary'
    if (error) return 'error'
    if (warn) return 'warn'
    return 'neutral'
  }

  const getSize = (): SizeVariant => {
    if (xs) return 'xs'
    if (s) return 'sm'
    if (l) return 'lg'
    return 'md'
  }
  const size = getSize()
  const variant = getVariant()
  const sizeStyles: Record<SizeVariant, React.CSSProperties> = {
    xs: {
      minWidth: 30,
      height: 20,
    },
    sm: {
      minWidth: 40,
      height: 25,
    },
    md: {
      minWidth: 50,
      height: 30,
    },
    lg: {
      minWidth: 60,
      height: 40,
    },
  }

  const styles: React.CSSProperties = {
    cursor: 'pointer',
    fontSize: fontSizes[size],
    padding: `0 ${padding[size].x}px`,
    borderRadius: `${borderRadius[size]}px`,
    borderWidth: 0,
    ...button[variant],
    ...sizeStyles[size],
    ...style,
  }

  return (
    <ButtonBase type={type} style={styles} {...props}>{children}</ButtonBase>
  )
}

export default Button