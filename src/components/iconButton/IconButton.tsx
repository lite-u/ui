import {useLiteUIContext} from '../../LiteUIProvider'
import ButtonBase from '../button/ButtonBase'

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg';
// type Variant = 'primary' | 'error' | 'warn' | 'neutral';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  neutral?: boolean;
  style?: React.CSSProperties;
};

export const IconButton: React.FC<IconButtonProps> = ({
                                                        xs,
                                                        s,
                                                        m = true,
                                                        l,
                                                        style = {},
                                                        type = 'button',
                                                        ...props
                                                      }) => {
  const {theme} = useLiteUIContext()
  const {
    fontSizes,
    // button,
    // borderRadius,
  } = theme

  const getSize = (): SizeVariant => {
    if (xs) return 'xs'
    if (s) return 'sm'
    if (l) return 'lg'
    return 'md'
  }
  const size = getSize()
  const sizeStyles: Record<SizeVariant, React.CSSProperties> = {
    xs: {
      width: 20,
      height: 20,
    },
    sm: {
      width: 25,
      height: 25,
    },
    md: {
      width: 30,
      height: 30,
    },
    lg: {
      width: 40,
      height: 40,
    },
  }
  const sizeStyle = sizeStyles[size]
  const styles: React.CSSProperties = {
    cursor: 'pointer',
    fontSize: fontSizes[size],
    padding: 2,
    borderRadius: sizeStyle.width,
    borderWidth: 0,
    backgroundColor: '#cfcfcf',
    color: '#ffffff',
    overflow: 'hidden',
    ...sizeStyle,
    ...style,
  }

  return (
    <ButtonBase
      type={type}
      style={styles}
      {...props}
    />
  )
}

export default IconButton