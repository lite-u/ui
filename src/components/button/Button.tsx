import {useLiteUIContext} from '../../LiteUIProvider'
import ButtonBase from './ButtonBase'

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'error' | 'warn' | 'neutral';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * If true, renders the button in extra small size (height: 20px, min-width: 30px).
   */
  xs?: boolean;
  /**
   * If true, renders the button in small size (height: 25px, min-width: 40px).
   */
  s?: boolean;
  /**
   * If true, renders the button in medium size. Exact dimensions depend on the theme. Default is true.
   */
  m?: boolean;
  /**
   * If true, renders the button in large size (height: 40px, min-width: 60px).
   */
  l?: boolean;
  /**
   * If true, applies the primary color style.
   */
  primary?: boolean;
  /**
   * If true, applies the neutral color style. Default is true.
   */
  neutral?: boolean;
  /**
   * If true, applies the warning color style.
   */
  warn?: boolean;
  /**
   * If true, applies the error color style.
   */
  error?: boolean;
  /**
   * Custom inline styles for the button.
   */
  style?: React.CSSProperties;
  /**
   * The content of the button (usually text or icons).
   */
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