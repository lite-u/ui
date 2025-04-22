import {useTheme} from '../../themes/ThemeContext'
import React, {ReactNode} from 'react'

const Paragraph: React.FC<{
  size: 'sm' | 'md' | 'xl',
  children: ReactNode
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  p?: boolean
}> = ({
        children,
        ...props
      }) => {
  const theme = useTheme()

  return <p {...props}>
    {children}
  </p>
}

export const P = Paragraph
export default Paragraph