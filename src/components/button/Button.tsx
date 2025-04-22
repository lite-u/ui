import {useTheme} from '../../themes/ThemeContext'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  s?: boolean
  m?: boolean
  l?: boolean, style?: {}
}> = ({
        s,
        m,
        l,
        type,
        style = {},
        ...props
      }) => {
  const theme = useTheme()
  let buttonDefaultStyle = {
    cursor: 'pointer',
    // alignSelf: 'center',
  }

  if (s) {
    Object.assign(buttonDefaultStyle, {
      minWidth: 40,
      height: 20,
      fontSize: 12,
    })
  } else if (m) {
    Object.assign(buttonDefaultStyle, {
      minWidth: 60,
      height: 30,
      fontSize: 14,
    })
  } else if (l) {
    Object.assign(buttonDefaultStyle, {
      minWidth: 80,
      height: 40,
      fontSize: 16,
    })
  }

  Object.assign(buttonDefaultStyle, style)
  // console.log(theme)

  return <button type={type}
                 style={buttonDefaultStyle} {...props}/>
}

export default Button