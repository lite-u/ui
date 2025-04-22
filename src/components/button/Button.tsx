import {useTheme} from '../../themes/ThemeContext'
import {useState} from 'react'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  xs?: boolean
  s?: boolean
  m?: boolean
  l?: boolean,
  style?: {}
}> = ({
        xs,
        s,
        m = true,
        l,
        type,
        style = {},
        ...props
      }) => {
  const {theme} = useTheme()
  const {fontSizes, padding, primary, warn, error} = theme
  const [opacity, setOpacity] = useState(1)

  let buttonDefaultStyle: React.CSSProperties = {
    cursor: 'pointer',
    backgroundColor: primary,
    color: 'white',
    border: `1px solid ${primary}`,
    // alignSelf: 'center',
  }

  if (xs) {
    Object.assign(buttonDefaultStyle, {
      minWidth: 40,
      height: 20,
      fontSize: fontSizes.xs,
      borderRadius: theme.borderRadius.xs,
      padding: `0 ${padding.xs.x}px`,
    })
  } else if (s) {
    Object.assign(buttonDefaultStyle, {
      minWidth: 50,
      height: 25,
      fontSize: fontSizes.sm,
      borderRadius: theme.borderRadius.sm,
      padding: `0 ${padding.sm.x}px`,
    })
  } else if (l) {
    Object.assign(buttonDefaultStyle, {
      minWidth: 80,
      height: 40,
      fontSize: fontSizes.lg,
      borderRadius: theme.borderRadius.lg,
      padding: `0 ${padding.lg.x}px`,
    })
  } else if (m) {
    Object.assign(buttonDefaultStyle, {
      minWidth: 60,
      height: 30,
      fontSize: fontSizes.md,
      borderRadius: theme.borderRadius.md,
      padding: `0 ${padding.md.x}px`,
    })
  }

  Object.assign(buttonDefaultStyle, style)
  buttonDefaultStyle.opacity = opacity

  return <button type={type}
                 style={buttonDefaultStyle}
                 {...props}
                 onMouseOver={() => {
                   setOpacity(.8)
                 }}
                 onMouseOut={() => {
                   setOpacity(1)
                 }}
  />
}

export default Button