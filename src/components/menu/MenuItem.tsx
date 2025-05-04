import {CSSProperties, useState} from 'react'
import {useLiteUIContext} from '../../LiteUIProvider'
import {Transition} from '../../index'
import {FromType} from '../transition/Transition'

const MenuItem: React.FC<React.HTMLProps<HTMLDivElement> & {
  xs?: boolean,
  s?: boolean,
  m?: boolean,
  l?: boolean,
  hoverStyle?: FromType
  hoverEnterDuration?: number
  hoverLeaveDuration?: number
}> = ({
        children,
        style = {},
        xs,
        s,
        m = true,
        l,
        hoverStyle = {
          backgroundColor: '#dfdfdf',
        },
        hoverEnterDuration = 300,
        hoverLeaveDuration = 500,
        ...props
      }) => {
  const [visible, setVisible] = useState(false)
  const getSize = () => {
    if (xs) return 'xs'
    if (s) return 'sm'
    if (l) return 'lg'
    return 'md'
  }
  const {theme} = useLiteUIContext()
  const size = getSize()
  const styles: CSSProperties = {
    width: 150,
    height: theme.formElements[size].height,
    padding: theme.padding[size].y,
    fontSize: theme.fontSizes[size],
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  }

  return <div
    role={'menu-item'}
    onMouseOver={() => {
      setVisible(true)
    }}
    onMouseLeave={() => {
      setVisible(false)
    }}
    style={{
      // ...styles,
      // ...style,
    }}
    {...props}>
    <Transition visible={visible}
                style={{
                  ...styles,
                  ...style,
                }}
                leaveDuration={hoverLeaveDuration}
                duration={hoverEnterDuration}
                from={{
                  backgroundColor: '#fff',
                }}
                to={hoverStyle}>
      {children}
    </Transition>
  </div>
}

export default MenuItem