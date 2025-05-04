import {CSSProperties} from 'react'
import {useLiteUIContext} from '../../LiteUIProvider'

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  /**
   * Custom font size for the paragraph text.
   * @default 16
   */
  size?: number,
  /**
   * Text color of the paragraph.
   * @default inherit
   */
  color?: CSSProperties['color']
  /**
   * Centers the paragraph text.
   * @default false
   */
  center?: boolean
  /**
   * Controls word-break behavior (e.g., 'break-word', 'normal').
   * @default 'break-word'
   */
  wb?: CSSProperties['wordBreak']
}

/**
 * Paragraph component
 *
 * @brief
 * Renders a styled `<p>` tag with configurable font size, color, alignment, and word-break behavior.
 *
 * @intro
 * Applies theming defaults for spacing and base typography, while allowing per-instance customization
 * for text alignment, font size, color, and word-breaking strategy.
 *
 * @example
 * import { Paragraph } from '@lite-u/ui'
 * P is an alias of Paragraph
 * import { P } from '@lite-u/ui'
 *
 * <Paragraph size={14} color="gray" center>
 *   This is a centered paragraph with custom styling.
 * </Paragraph>
 */
const Paragraph: React.FC<ParagraphProps> = ({
                                               children,
                                               size = 16,
                                               style = {},
                                               color,
                                               center = false,
                                               wb = 'break-word',
                                               ...props
                                             }) => {
  const {theme} = useLiteUIContext()
  const styles: CSSProperties = {
    flex: 1,
    fontSize: theme.title.h6,
    paddingTop: theme.padding.md.x,
    paddingBottom: theme.padding.md.x,
  }

  if (center) {
    styles.textAlign = 'center'
  }

  if (color) {
    styles.color = color
  }

  if (!isNaN(size)) {
    styles.fontSize = size
  }

  if (wb) {
    styles.wordBreak = wb
  }

  return <p style={{...style, ...styles}} {...props}>
    {children}
  </p>
}

export const P = Paragraph
export default Paragraph