import {useLiteUIContext} from '../../LiteUIProvider'
import {ReactNode} from 'react'
import {Col} from '../../index'
import Paragraph from '../paragraph/Paragraph'
import {Con, ContainerProps} from '../con/Con'

const Panel: React.FC<{
  title: string,
  titleClass?: string,
  boxClass?: string,
  children?: ReactNode
} & ContainerProps & React.HTMLProps<HTMLDivElement>> = ({
                                                           title,
                                                           titleClass = '',
                                                           boxClass = '',
                                                           children,
                                                           ...props
                                                         }) => {
  const {theme} = useLiteUIContext()

  return <Con fw fh role={'panel'} {...props}>
    <Col fw fh stretch>
      <Con fw style={{background: theme.panel.primaryColor, borderRadius: '3px 3px 0 0', color: '#fff'}}
           className={titleClass}>
        <Paragraph center size={16} style={{padding: 8}}>{title}</Paragraph>
      </Con>

      <Con fw bg={'#fff'} style={{
        border: `1px solid ${theme.panel.primaryColor}`,
        borderTop: 'none',
        flex: '100%',
      }}
           className={boxClass}>
        {children}
      </Con>
    </Col>
  </Con>
}

export default Panel