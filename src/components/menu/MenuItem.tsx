import {ReactNode, useState} from 'react'
import {useLiteUIContext} from '../../LiteUIProvider'
import {Transition} from '../../index'
import {FromType} from '../transition/Transition'

const MenuItem: React.FC<
  React.HTMLProps<HTMLDivElement> &
  {
    children: ReactNode,
    sm?: boolean,
    hoverStyle?: FromType
    hoverEnterDuration?: number
    hoverLeaveDuration?: number
  }> = ({
          children,
          style = {},
          sm = false,
          hoverStyle = {
            backgroundColor: '#dfdfdf',
          },
          hoverEnterDuration = 300,
          hoverLeaveDuration = 500,
          ...props
        }) => {
  const [visible, setVisible] = useState(false)
  const {theme} = useLiteUIContext()
  const styles: React.CSSProperties = {
    height: 40,
    padding: theme.padding.md.y,
    fontSize: theme.fontSizes.md,
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  }

  if (sm) {
    styles.height = 30
    styles.fontSize = theme.fontSizes.sm
  }

  // console.log(styles)

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
      ...style,
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