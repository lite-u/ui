import {useTheme} from '../../themes/ThemeContext'

const InputNumber: React.FC<{}> = ({}) => {
  const theme = useTheme()
  return <input type={'number'} style={{
    borderColor: theme.theme.bg,
  }}/>
}

export default InputNumber