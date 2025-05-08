import {useLiteUIContext} from '../../LiteUIProvider'
import Container from '../container/Container'
import Column from '../layouts/Column'
import {CSSProperties, ReactNode} from 'react'

type PanelProps = {
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
   * The head part displayed in the panel header.
   * @default \-
   */
  head: ReactNode,

  /**
   * Optional custom styles for the head container.
   * @default {}
   */
  headStyle?: CSSProperties,

  /**
   * Optional custom styles for the panel content container.
   * @default {}
   */
  contentStyle?: CSSProperties,
}

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
 * import { Panel } from '@lite-u/ui'
 *
 * <Panel p={20} bg="#fff">
 *   <h2>Section Title</h2>
 *   <p>This is a section of content within a panel.</p>
 * </Panel>
 */
const Panel: React.FC<PanelProps & React.HTMLProps<HTMLDivElement>> = ({
                                                                         xs,
                                                                         s,
                                                                         m,
                                                                         l,
                                                                         head,
                                                                         headStyle = {},
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

  return <Container fw fh role={'panel'} {...props}>
    <Column fw fh stretch>
      <Container role={'panel-head-wrap'}
                 fw
                 style={{
                   margin: 0,
                   // padding: 0,
                   background: primaryColor,
                   borderRadius: '3px 3px 0 0',
                   color: '#fff',
                   padding: headPadding,
                   fontSize: headFontSize,
                   ...headStyle,
                 }}>{head}</Container>

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
                 }}>
        {children}
      </Container>
    </Column>
  </Container>
}

export default Panel