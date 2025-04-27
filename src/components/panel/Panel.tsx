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
  xl?: boolean
  title: string,
  titleStyle?: React.CSSProperties,
  titleClass?: string,
  boxStyle?: React.CSSProperties,
  boxClass?: string,
  children?: ReactNode
} & ContainerProps & React.HTMLProps<HTMLDivElement>> = ({
                                                           xs,
                                                           sm,
                                                           md = true,
                                                           lg,
                                                           xl,
                                                           title,
                                                           titleClass = '',
                                                           titleStyle = {},
                                                           boxClass = '',
                                                           boxStyle = {},
                                                           children,
                                                           ...props
                                                         }) => {
  const {theme} = useLiteUIContext()
  let headFontSize = theme.fontSizes.md
  let headPadding = theme.padding.md.x

  if (md) {
    headFontSize = theme.fontSizes.md
    headPadding = theme.padding.md.y
  }

  if (sm) {
    headFontSize = theme.fontSizes.sm
    headPadding = theme.padding.sm.y
  }

  if (xs) {
    headFontSize = theme.fontSizes.xs
    headPadding = theme.padding.xs.y
  }

  if (lg) {
    headFontSize = theme.fontSizes.lg
    headPadding = theme.padding.lg.y
  }

  console.log(headFontSize)
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
             ...boxStyle,
           }}
           className={boxClass}>
        {children}
      </Con>
    </Col>
  </Con>
}

export default Panel