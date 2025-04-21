import {useTheme} from '../../themes/ThemeContext'
import {ReactNode} from 'react'

const Panel: React.FC<{
  title: string,
  titleClass?: string,
  boxClass?: string,
  children: ReactNode
}> = ({
        title,
        titleClass = '',
        boxClass = '',
        children,
        ...props
      }) => {
  const {theme} = useTheme()

  return <div {...props}>
    <div style={{background: theme.bg}} className={titleClass}>{title}</div>
    <div style={{border: `1px solid ${theme.primary}`}} className={boxClass}>
      {children}
    </div>
  </div>

}

export default Panel