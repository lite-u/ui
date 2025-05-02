// import {useLiteUIContext} from '../../LiteUIProvider'

import {HTMLProps} from 'react'

const InputNumber: React.FC<HTMLProps<HTMLInputElement> & { style: React.CSSProperties }> = ({style, ...props}) => {
  return <input
    type={'text'}
    style={{
      ...style,
    }} {...props}/>
}

export default InputNumber