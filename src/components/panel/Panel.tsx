import {useTheme} from '../../themes/ThemeContext'
import {ReactNode} from 'react'
import {Col} from '../../index'
import Paragraph from '../paragraph/Paragraph'

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

  return <Col {...props}>
    <div style={{background: theme.panel.primaryColor, color: '#fff'}} className={titleClass}>
      <Paragraph center size={18} style={{padding:8}}>{title}</Paragraph>
    </div>
    <div style={{border: `1px solid ${theme.panel.primaryColor}`, height: 100}} className={boxClass}>
      {children}
    </div>
  </Col>

}

export default Panel