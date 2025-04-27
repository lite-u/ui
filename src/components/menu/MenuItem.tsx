import {ReactNode} from 'react'
import {useLiteUIContext} from '../../LiteUIProvider'

const MenuItem: React.FC<React.HTMLProps<HTMLDivElement> & { children: ReactNode, sm?: boolean }> = ({
                                                                                                       children,
                                                                                                       style = {},
                                                                                                       sm = false,
                                                                                                       ...props
                                                                                                     }) => {
  const {theme} = useLiteUIContext()
  const styles: React.CSSProperties = {
    ...style,
    height: 30,
    padding: theme.padding.md.y,
    fontSize: theme.fontSizes.md,
    // borderRadius: theme.borderRadius.lg,
    background: theme.menuItem.backgroundColor,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  }

  if (sm) {
    styles.height = 20
    styles.padding = '8px 16px'
    styles.fontSize = theme.fontSizes.sm
  }

  return <div style={styles}
              {...props}>
    {children}
  </div>
}

export default MenuItem