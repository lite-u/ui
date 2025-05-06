import {useLiteUIContext} from '../../LiteUIProvider'
import ButtonBase from './ButtonBase'

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'error' | 'warn' | 'neutral';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Extra small button. Sizing depends on theme.
   * @default false
   */
  xs?: boolean;
  /**
   * Small button. Sizing depends on theme.
   * @default false
   */
  s?: boolean;
  /**
   * Medium button. Sizing depends on theme.
   * @default true
   */
  m?: boolean;
  /**
   * Large button. Sizing depends on theme.
   * @default false
   */
  l?: boolean;
  /**
   * If true, applies the primary color style.
   * @default false
   */
  primary?: boolean;
  /**
   * If true, applies the neutral color style.
   * @default true
   */
  neutral?: boolean;
  /**
   * If true, applies the warning color style.
   * @default false
   */
  warn?: boolean;
  /**
   * If true, applies the error color style.
   * @default false
   */
  error?: boolean;
  /**
   * If true, set the Button to disabled
   * @default false
   */
  disabled?: boolean;
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
                                                disabled = false,
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
    userSelect: 'none',
    fontSize: fontSizes[size],
    padding: `0 ${padding[size].x}px`,
    borderRadius: `${borderRadius[size]}px`,
    borderWidth: 0,
    ...button[variant],
    ...theme.formElements[size],
    ...style,
  }

  if (disabled) {
    styles.backgroundColor = theme.button.disabled.backgroundColor
    styles.color = theme.button.disabled.color
    styles.border = theme.button.disabled.border
    styles.cursor = 'not-allowed'
    styles.pointerEvents = 'visible'
  }

  return (
    <ButtonBase disabled={disabled} type={type} style={styles} {...props}>{children}</ButtonBase>
  )
}

export default Button