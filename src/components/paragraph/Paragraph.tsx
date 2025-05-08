import {CSSProperties} from 'react'

type ParagraphProps = Omit<React.HTMLAttributes<HTMLParagraphElement>, 'textColor' | 'size'> & {
  /**
   * Custom font size for the paragraph text.
   * @default inherit
   */
  size?: CSSProperties['fontSize'],
  /**
   * Text color of the paragraph.
   * @default inherit
   */
  textColor?: CSSProperties['color']
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
 * <Paragraph size={14} textColor="gray" center>
 *   This is a centered paragraph with custom styling.
 * </Paragraph>
 */
const Paragraph: React.FC<ParagraphProps> = ({
                                               children,
                                               size,
                                               style = {},
                                               textColor,
                                               center = false,
                                               wb = 'break-word',
                                               ...props
                                             }) => {
  const styles: CSSProperties = {
    flex: 1,
    fontSize: 'inherit',
    margin: 0,
    padding: 0,
  }

  if (center) {
    styles.textAlign = 'center'
  }

  if (textColor) {
    styles.color = textColor
  }

  if (typeof size === 'string' || typeof size === 'number') {
    styles.fontSize = size
  }

  if (wb) {
    styles.wordBreak = wb
  }

  return <p style={{...styles, ...style}} {...props}>
    {children}
  </p>
}

export const P = Paragraph
export default Paragraph