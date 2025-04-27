import {useLiteUIContext} from '../../LiteUIProvider'
import {ReactNode} from 'react'
import {Col} from '../../index'
import Paragraph from '../paragraph/Paragraph'
import {Con, ContainerProps} from '../con/Con'

const Panel: React.FC<{
  title: string,
  titleStyle?: React.CSSProperties,
  titleClass?: string,
  boxStyle?: React.CSSProperties,
  boxClass?: string,
  children?: ReactNode
} & ContainerProps & React.HTMLProps<HTMLDivElement>> = ({
                                                           title,
                                                           titleClass = '',
                                                           titleStyle = {},
                                                           boxClass = '',
                                                           boxStyle = {},
                                                           children,
                                                           ...props
                                                         }) => {
  const {theme} = useLiteUIContext()

  return <Con fw fh role={'panel'} {...props}>
    <Col fw fh stretch>
      <Con role={'panel-head'}
           fw
           style={{background: theme.panel.primaryColor, borderRadius: '3px 3px 0 0', color: '#fff', ...titleStyle}}
           className={titleClass}>
        <Paragraph center size={16} style={{padding: 8}}>{title}</Paragraph>
      </Con>

      <Con role={'panel-box'}
           fw
           bg={'#fff'}
           style={{
             overflow: 'auto',
             border: `1px solid ${theme.panel.primaryColor}`,
             borderTop: 'none',
             flex: '100%',
             ...boxStyle,
           }}
           className={boxClass}>
        {children}
      </Con>
    </Col>
  </Con>
}

export default Panel