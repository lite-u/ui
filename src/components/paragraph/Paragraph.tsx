import React, {CSSProperties, ReactNode} from 'react'

const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement> & {
  size?: number,
  children?: ReactNode
  color?: CSSProperties['color']
  center?: boolean
}> = ({
        children,
        size = 16,
        style = {},
        color,
        center = false,
        ...props
      }) => {
  // const theme = useTheme()
  const styles: CSSProperties = {}

  if (center) {
    styles.textAlign = 'center'
  }

  if (color) {
    styles.color = color
  }

  if (size) {
    styles.fontSize = size
  }
  return <p style={{...style, ...styles}} {...props}>
    {children}
  </p>
}

export const P = Paragraph
export default Paragraph