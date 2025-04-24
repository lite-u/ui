import React, {CSSProperties, ReactNode} from 'react'

const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement> & {
  size?: number,
  children?: ReactNode
  center?: boolean
}> = ({
        children,
        size = 16,
        style = {},
        center = false,
        ...props
      }) => {
  // const theme = useTheme()
  const styles: CSSProperties = {}

  if (center) {
    styles.textAlign = 'center'
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