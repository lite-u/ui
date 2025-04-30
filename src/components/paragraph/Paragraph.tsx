import React, {CSSProperties, ReactNode} from 'react'
import {useLiteUIContext} from '../../LiteUIProvider'

const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement> & {
  size?: number,
  children?: ReactNode
  color?: CSSProperties['color']
  center?: boolean
  wb?: CSSProperties['wordBreak']
}> = ({
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

  if (size) {
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