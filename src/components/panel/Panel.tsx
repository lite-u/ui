import {useLiteUIContext} from '../../LiteUIProvider'
import {Col} from '../../index'
import Container, {ContainerProps} from '../container/Container'

/**
 * Panel component
 *
 * @brief
 * A flexible container component used to group and visually separate content within the layout.
 *
 * @intro
 * Provides a styled block container with customizable margin, padding, and background options.
 * Commonly used to structure and emphasize content sections in a UI.
 *
 * @example
 * <Panel p={20} bg="#fff">
 *   <h2>Section Title</h2>
 *   <p>This is a section of content within a panel.</p>
 * </Panel>
 */
const Panel: React.FC<{
  /**
   * If true, sets the panel size to extra small (`xs`).
   * @default false
   */
  xs?: boolean,

  /**
   * If true, sets the panel size to small (`sm`).
   * @default false
   */
  s?: boolean,

  /**
   * If true, sets the panel size to medium (`md`).
   * @default false
   */
  m?: boolean,

  /**
   * If true, sets the panel size to large (`lg`).
   * @default false
   */
  l?: boolean,

  /**
   * The title text displayed in the panel header.
   * @default \-
   */
  title: string,

  /**
   * Optional custom styles for the title container.
   * @default {}
   */
  titleStyle?: React.CSSProperties,

  /**
   * Optional class name for the title container.
   * @default \-
   */
  titleClass?: string,

  /**
   * Optional custom styles for the panel content container.
   * @default {}
   */
  contentStyle?: React.CSSProperties,

  /**
   * Optional class name for the panel content container.
   * @default \-
   */
  contentClass?: string,
} & ContainerProps & React.HTMLProps<HTMLDivElement>> = ({
                                                           xs,
                                                           s,
                                                           m,
                                                           l,
                                                           title,
                                                           titleClass,
                                                           titleStyle = {},
                                                           contentClass,
                                                           contentStyle = {},
                                                           children,
                                                           ...props
                                                         }) => {
  const {theme} = useLiteUIContext()
  let size = 'md'

  if (xs) {
    size = 'xs'
  }

  if (s) {
    size = 'sm'
  }

  if (l) {
    size = 'lg'
  }

  const headFontSize = theme.fontSizes[size as keyof typeof theme['fontSizes']]
  const headPadding = theme.padding[size as keyof typeof theme['padding']].x
  const boxFontSize = theme.fontSizes[size as keyof typeof theme['fontSizes']]
  const boxPadding = theme.padding[size as keyof typeof theme['padding']].x
  const primaryColor = theme.panel.primaryColor

  console.log(titleStyle)
  return <Container fw fh role={'panel'} {...props}>
    <Col fw fh stretch>
      <Container role={'panel-head'}
                 fw
                 style={{
                   background: primaryColor,
                   borderRadius: '3px 3px 0 0',
                   color: '#fff',
                   ...titleStyle,
                 }}
                 className={titleClass}>
        <p style={{fontSize: headFontSize, padding: headPadding}}>{title}</p>
      </Container>

      <Container role={'panel-content'}
                 fw
                 bg={'#fff'}
                 style={{
                   overflow: 'auto',
                   border: `1px solid ${primaryColor}`,
                   borderTop: 'none',
                   flex: '100%',
                   fontSize: boxFontSize,
                   padding: boxPadding,
                   ...contentStyle,
                 }}
                 className={contentClass}>
        {children}
      </Container>
    </Col>
  </Container>
}

export default Panel