// import {useLiteUIContext} from '../../LiteUIProvider'

import {HTMLProps} from 'react'

const InputNumber: React.FC<HTMLProps<HTMLInputElement> & { style: React.CSSProperties }> = ({style,disabled, ...props}) => {
  return <input
    type={'text'}
    disabled={disabled}
    style={{
      // cursor: disabled ? 'not-allowed' : 'inherit',
      ...style,
    }} {...props}/>
}

export default InputNumber