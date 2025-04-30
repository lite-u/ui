// import {useLiteUIContext} from '../../LiteUIProvider'

const InputNumber: React.FC<{ style: React.CSSProperties }> = ({style, ...props}) => {
  return <input
    type={'text'}
    style={{
      ...style,
    }} {...props}/>
}

export default InputNumber