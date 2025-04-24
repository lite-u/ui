import {useTheme} from '../../themes/ThemeContext'
import React, {ReactNode} from 'react'

type TitleProps = {
  children: ReactNode
  sticky?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
} & React.HTMLAttributes<HTMLHeadingElement>

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Title: React.FC<TitleProps> = ({
                                              h1, h2, h3, h4, h5, h6,
                                              children,
                                              style,
                                              sticky,
                                              ...rest
                                            }) => {
  const {theme} = useTheme()
  const {padding} = theme

  const headingMap: Record<HeadingLevel, { fontSize: number, margin: number }> = {
    h1: {fontSize: theme.title.h1, margin: padding.lg.x},
    h2: {fontSize: theme.title.h2, margin: padding.lg.x},
    h3: {fontSize: theme.title.h3, margin: padding.md.x},
    h4: {fontSize: theme.title.h4, margin: padding.md.x},
    h5: {fontSize: theme.title.h5, margin: padding.sm.x},
    h6: {fontSize: theme.title.h6, margin: padding.sm.x},
  }

  const level =
    (h1 && 'h1') ||
    (h2 && 'h2') ||
    (h3 && 'h3') ||
    (h4 && 'h4') ||
    (h5 && 'h5') ||
    (h6 && 'h6') ||
    'h1'

  const Tag: HeadingLevel = level
  const margin = headingMap[Tag].margin
  const fontSize = headingMap[Tag].fontSize
   return (
    <Tag
      style={{
        fontWeight: 'bold',
        margin: `${margin}px 0`,
        fontSize: fontSize + 'px',
        position: sticky ? 'sticky' : 'static',
        zIndex: 10,
        left: sticky ? 0 : 'auto',
        top: sticky ? 0 : 'auto',
        backgroundColor: theme.title.backgroundColor,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Title