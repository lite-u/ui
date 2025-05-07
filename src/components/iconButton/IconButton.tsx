import {useLiteUIContext} from '../../LiteUIProvider'
import ButtonBase from '../button/ButtonBase'
import {CSSProperties} from 'react'

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Applies the extra small size variant to the button.
   * @default false
   */
  xs?: boolean;
  /**
   * Applies the small size variant to the button.
   * @default false
   */
  s?: boolean;
  /**
   * Applies the small size variant to the button.
   * @default false
   */
  m?: boolean;
  /**
   * Applies the large size variant to the button.
   * @default false
   */
  l?: boolean;
  /**
   * If true, set the Button to disabled
   * @default false
   */
  disabled?: boolean;

  style?: CSSProperties;
};

/**
 * IconButton component
 *
 * @brief
 * A square-shaped button designed to contain only an icon, not text.
 *
 * @intro
 * Renders a circular or square icon-only button with predefined size variants.
 * Supports four sizes and applies consistent styling from theme context.
 *
 * @example
 * import { IconButton } from '@lite-u/ui'
 * import { Icon } from '@lite-u/icons'
 *
 * <IconButton s onClick={handleClick}>
 *   <Icon name="search" />
 * </IconButton>
 */
export const IconButton: React.FC<IconButtonProps> = ({
                                                        xs,
                                                        s,
                                                        m = true,
                                                        l,
                                                        style = {},
                                                        disabled = false,
                                                        type = 'button',
                                                        ...props
                                                      }) => {
  const {theme} = useLiteUIContext()
  const {fontSizes, formElements} = theme

  const getSize = (): SizeVariant => {
    if (xs) return 'xs'
    if (s) return 'sm'
    if (l) return 'lg'
    return 'md'
  }
  const size = getSize()
  const sizeStyle = formElements[size]
  const len = sizeStyle.height
  const styles: React.CSSProperties = {
    cursor: 'pointer',
    fontSize: fontSizes[size],
    borderRadius: len,
    borderWidth: 0,
    backgroundColor: '#cfcfcf',
    color: '#ffffff',
    overflow: 'hidden',
    width: len,
    height: len,
    ...style,
  }

  if (disabled) {
    styles.backgroundColor = theme.button.disabled.backgroundColor
    styles.color = theme.button.disabled.color
    styles.border = theme.button.disabled.border
    styles.cursor = 'not-allowed'
  }

  return (
    <ButtonBase
      disabled={disabled}
      type={type}
      style={styles}
      {...props}
    />
  )
}

export default IconButton