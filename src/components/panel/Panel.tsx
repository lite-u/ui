import {useLiteUIContext} from '../../LiteUIProvider'
import {ReactNode} from 'react'
import {Col} from '../../index'
import Paragraph from '../paragraph/Paragraph'
import {ColumnProps} from '../layouts/Col'

const Panel: React.FC<{
  title: string,
  titleClass?: string,
  boxClass?: string,
  children?: ReactNode
} & ColumnProps & React.HTMLProps<HTMLDivElement>> = ({
                                                        title,
                                                        titleClass = '',
                                                        boxClass = '',
                                                        // style,
                                                        children,
                                                        ...props
                                                      }) => {
  const {theme} = useLiteUIContext()

  return <Col fh stretch {...props}>
    <div style={{background: theme.panel.primaryColor, borderRadius: '3px 3px 0 0', color: '#fff'}}
         className={titleClass}>
      <Paragraph center size={16} style={{padding: 8}}>{title}</Paragraph>
    </div>
    <div style={{
      border: `1px solid ${theme.panel.primaryColor}`,
      borderTop: 'none',
      height: '100%',
      backgroundColor: '#fff',
    }}
         className={boxClass}>
      {children}
    </div>
  </Col>

}

export default Panel