import {useTheme} from '../../themes/ThemeContext'
import {useState} from 'react'

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
                                                type = 'button',
                                                ...props
                                              }) => {
  const {theme} = useTheme()
  const [opacity, setOpacity] = useState(1)
  const {
    fontSizes,
    padding,
    buttonStyles,
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
      minWidth: 40,
      height: 20,
    },
    sm: {
      minWidth: 50,
      height: 25,
    },
    md: {
      minWidth: 60,
      height: 30,
    },
    lg: {
      minWidth: 80,
      height: 40,
    },
  }

  const styles: React.CSSProperties = {
    opacity,
    cursor: 'pointer',
    fontSize: fontSizes[size],
    padding: `0 ${padding[size].x}px`,
    borderRadius: `${borderRadius[size]}px`,
    borderWidth: 0,
    ...buttonStyles[variant],
    ...sizeStyles[size],
    ...style,
  }

  return (
    <button
      type={type}
      style={styles}
      onMouseOver={() => setOpacity(0.8)}
      onMouseOut={() => setOpacity(1)}
      {...props}
    />
  )
}

export default Button