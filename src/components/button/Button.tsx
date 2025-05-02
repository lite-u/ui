import {useLiteUIContext} from '../../LiteUIProvider'
import ButtonBase from './ButtonBase'

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'error' | 'warn' | 'neutral';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Extra small button. Sizing depends on theme.
   */
  xs?: boolean;
  /**
   * Small button. Sizing depends on theme.
   */
  s?: boolean;
  /**
   * Medium button. Sizing depends on theme.
   */
  m?: boolean;
  /**
   * Large button. Sizing depends on theme.
   */
  l?: boolean;
  /**
   * If true, applies the primary color style.
   */
  primary?: boolean;
  /**
   * If true, applies the neutral color style.
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

/**
 * Button component
 *
 * @brief A customizable button component that supports size and color variants.
 *
 * @intro Supports four sizes (xs, s, m, l) and four variants (primary, neutral, warn, error).
 *
 * @example
 *
 * import { Button } from '@lite-u/ui'
 *
 * <Button>Default</Button>
 * <Button primary xs>Confirm</Button>
 * <Button error l>Delete</Button>
 */
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

  const styles: React.CSSProperties = {
    cursor: 'pointer',
    fontSize: fontSizes[size],
    padding: `0 ${padding[size].x}px`,
    borderRadius: `${borderRadius[size]}px`,
    borderWidth: 0,
    ...button[variant],
    ...theme.formElements[size],
    ...style,
  }

  return (
    <ButtonBase type={type} style={styles} {...props}>{children}</ButtonBase>
  )
}

export default Button