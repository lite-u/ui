import {useTheme} from '../../themes/ThemeContext'
import React, {ReactNode} from 'react'

type TitleProps = {
  children: ReactNode
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
                                              ...rest
                                            }) => {
  const {theme} = useTheme()
  const {padding} = theme

  const headingMap: Record<HeadingLevel, { margin: number }> = {
    h1: {margin: padding.lg.y},
    h2: {margin: padding.lg.y},
    h3: {margin: padding.md.y},
    h4: {margin: padding.md.y},
    h5: {margin: padding.sm.y},
    h6: {margin: padding.sm.y},
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

  return (
    <Tag
      style={{
        fontWeight: 'bold',
        margin: `${margin}px 0`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Title