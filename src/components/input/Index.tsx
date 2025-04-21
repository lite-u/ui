import InputNumber from './InputNumber'

const Input: React.FC<{ type: 'number' | 'text' }> = ({type}) => {
  // const theme = useTheme()

  if (type === 'number') {
    return <InputNumber/>
  }

  if (type === 'text') {
    return <InputNumber/>
  }

  return <input type={type}/>
}

export default Input