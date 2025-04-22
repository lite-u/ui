import {ReactNode} from 'react'
import {useTheme} from '../../themes/ThemeContext'

const MenuItem: React.FC<React.HTMLProps<HTMLDivElement> & { children: ReactNode, sm?: boolean }> = ({
                                                                                                       children,
                                                                                                       style = {},
                                                                                                       sm = false,
                                                                                                       ...props
                                                                                                     }) => {
  const {theme} = useTheme()
  const styles: React.CSSProperties = {
    ...style,
    height: 30,
    padding: theme.padding.md.y,
    fontSize: theme.fontSizes.md,
    borderRadius: theme.borderRadius.lg,
    background: theme.menuItemStyles.backgroundColor,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  }

  if (sm) {
    styles.height = 20
    styles.padding = theme.padding.sm.y
    styles.fontSize = theme.fontSizes.sm
  }

  return <div style={styles}
              {...props}>
    {children}
  </div>
}

export default MenuItem