import {useTheme} from '../../themes/ThemeContext'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { size: 'sm' | 'md' | 'xl' }> = ({
                                                                                                          type,
                                                                                                          ...props
                                                                                                        }) => {
  const theme = useTheme()
  console.log(theme)
  return <button type={type} {...props}/>
}

export default Button