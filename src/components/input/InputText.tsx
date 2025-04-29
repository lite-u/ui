// import {useLiteUIContext} from '../../LiteUIProvider'

const InputNumber: React.FC<{ style: React.CSSProperties }> = ({style, ...props}) => {
  // const theme = useLiteUIContext()

  return <input
    type={'text'}
    style={{
      // borderColor: theme.theme.bg,
      ...style,
    }} {...props}/>
}

export default InputNumber