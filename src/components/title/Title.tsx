import {useTheme} from '../../themes/ThemeContext'
import React, {ReactNode} from 'react'

const Title: React.FC<{
  children: ReactNode
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
}> = ({
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        children,
        ...props
      }) => {
  const theme = useTheme()
  const styles: React.CSSProperties = {fontWeight: 'bold'}

  if (h1) return <h1 style={styles}>{children}</h1>
  if (h2) return <h2 style={styles}>{children}</h2>
  if (h3) return <h3 style={styles}>{children}</h3>
  if (h4) return <h4 style={styles}>{children}</h4>
  if (h5) return <h5 style={styles}>{children}</h5>
  if (h6) return <h6 style={styles}>{children}</h6>

  return <h1>{children}</h1>
}

export default Title