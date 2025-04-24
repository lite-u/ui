import {useTheme} from '../../themes/ThemeContext'
import {ReactNode} from 'react'
import {Col} from '../../index'
import Paragraph from '../paragraph/Paragraph'

const Panel: React.FC<{
  title: string,
  titleClass?: string,
  boxClass?: string,
  children?: ReactNode
}> = ({
        title,
        titleClass = '',
        boxClass = '',
        children,
        ...props
      }) => {
  const {theme} = useTheme()

  return <Col fh stretch {...props}>
    <div style={{background: theme.panel.primaryColor, borderRadius: '3px 3px 0 0', color: '#fff'}}
         className={titleClass}>
      <Paragraph center size={16} style={{padding: 8}}>{title}</Paragraph>
    </div>
    <div style={{
      border: `1px solid ${theme.panel.primaryColor}`,
      borderTop: 'none',
      height: '100%',
    }} className={boxClass}>
      {children}
    </div>
  </Col>

}

export default Panel