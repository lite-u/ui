import {useTheme} from '../../LiteUIContext'

const InputNumber: React.FC<{ style: React.CSSProperties }> = ({style, ...props}) => {
  const theme = useTheme()

  return <input
    type={'text'}
    style={{
      // borderColor: theme.theme.bg,
      ...style,
    }} {...props}/>
}

export default InputNumber