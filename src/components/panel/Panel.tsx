import {useLiteUIContext} from '../../LiteUIProvider'
import {ReactNode} from 'react'
import {Col} from '../../index'
import Paragraph from '../paragraph/Paragraph'
import {Con, ContainerProps} from '../con/Con'

const Panel: React.FC<{
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  size?: 'md' | 'sm' | 'xs' | 'lg'
  title: string,
  titleStyle?: React.CSSProperties,
  titleClass?: string,
  boxStyle?: React.CSSProperties,
  boxClass?: string,
  children?: ReactNode
} & ContainerProps & React.HTMLProps<HTMLDivElement>> = ({
                                                           xs,
                                                           sm,
                                                           md,
                                                           lg,
                                                           title,
                                                           size = 'md',
                                                           titleClass = '',
                                                           titleStyle = {},
                                                           boxClass = '',
                                                           boxStyle = {},
                                                           children,
                                                           ...props
                                                         }) => {
  const {theme} = useLiteUIContext()

  if (md) {
    size = 'md'
  }

  if (sm) {
    size = 'sm'
  }

  if (xs) {
    size = 'xs'
  }

  if (lg) {
    size = 'lg'
  }

  const headFontSize = theme.fontSizes[size as keyof typeof theme['fontSizes']]
  const headPadding = theme.padding[size as keyof typeof theme['padding']].y
  const boxFontSize = theme.fontSizes[size as keyof typeof theme['fontSizes']]
  const boxPadding = theme.padding[size as keyof typeof theme['padding']].x

  return <Con fw fh role={'panel'} {...props}>
    <Col fw fh stretch>
      <Con role={'panel-head'}
           fw
           style={{background: theme.panel.primaryColor, borderRadius: '3px 3px 0 0', color: '#fff', ...titleStyle}}
           className={titleClass}>
        <Paragraph center size={headFontSize} style={{padding: headPadding}}>{title}</Paragraph>
      </Con>

      <Con role={'panel-box'}
           fw
           bg={'#fff'}
           style={{
             overflow: 'auto',
             border: `1px solid ${theme.panel.primaryColor}`,
             borderTop: 'none',
             flex: '100%',
             fontSize: boxFontSize,
             padding: boxPadding,
             ...boxStyle,
           }}
           className={boxClass}>
        {children}
      </Con>
    </Col>
  </Con>
}

export default Panel