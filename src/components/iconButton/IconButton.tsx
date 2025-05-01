import {useLiteUIContext} from '../../LiteUIProvider'
import ButtonBase from '../button/ButtonBase'

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
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
  const {fontSizes, formElements} = theme

  const getSize = (): SizeVariant => {
    if (xs) return 'xs'
    if (s) return 'sm'
    if (l) return 'lg'
    return 'md'
  }
  const size = getSize()
  const sizeStyle = formElements[size]
  const styles: React.CSSProperties = {
    cursor: 'pointer',
    fontSize: fontSizes[size],
    padding: 2,
    borderRadius: sizeStyle.height,
    borderWidth: 0,
    backgroundColor: '#cfcfcf',
    color: '#ffffff',
    overflow: 'hidden',
    width: sizeStyle.height,
    height: sizeStyle.height,
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