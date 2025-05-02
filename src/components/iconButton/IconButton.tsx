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

  return (
    <ButtonBase
      type={type}
      style={styles}
      {...props}
    />
  )
}

export default IconButton