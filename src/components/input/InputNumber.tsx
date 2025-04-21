import {useTheme} from '../../themes/ThemeContext'

const InputNumber: React.FC<{}> = ({}) => {
  const theme = useTheme()
  console.log(theme)
  return <input type={'number'} />
}

export default InputNumber