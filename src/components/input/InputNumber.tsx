// import {useTheme} from '../../themes/ThemeContext'

import {HTMLProps, useEffect, useImperativeHandle, useRef, useState} from 'react'
import {SpinnerControl} from './Spinner'

const scientificBelow = 1e-6
const scientificAbove = 1e+6
export   type InputNumberProps = HTMLProps<HTMLInputElement> & {
  // style: React.CSSProperties,
  value: number,
  step: number
  intervalTime?: number
  ref: React.Ref<HTMLInputElement>
}
const InputNumber: React.FC<InputNumberProps> = ({
                                                   style = {},
                                                   step = 1,
                                                   value,
                                                   onKeyDown,
                                                   onChange,
                                                   intervalTime = 100,
                                                   ref,
                                                   ...props
                                                 }) => {
  // const theme = useTheme()
  const [localValue, setLocalValue] = useState<number>(0)
  const inputRef = useRef(null)
  const precision = 6
  const [localStep, setLocalStep] = useState(step)

  const increment = () => setLocalValue(prev => {
    return parseFloat((prev + localStep).toFixed(precision))
  })

  const decrement = () => setLocalValue(prev => {
    return parseFloat((prev - localStep).toFixed(precision))
  })

  useImperativeHandle(ref, () => inputRef.current!)

  useEffect(() => {
    if (!isNaN(value)) {
      setLocalValue(value)
    }

    if (step < scientificBelow) {
      setLocalStep(scientificBelow)
    } else if (step > scientificAbove) {
      setLocalStep(scientificAbove)
    }
  }, [value, step])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      increment()
      e.preventDefault()
    }

    if (e.key === 'ArrowDown') {
      decrement()
      e.preventDefault()
    }

    onKeyDown && onKeyDown(e)

    e.stopPropagation()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(Number(e.target.value))
    onChange && onChange(e)
  }

  return <div
    role={'input-number-wrapper'}
    style={{
      display: 'inline-flex',
      position: 'relative',
      overflow: 'hidden',
      ...style,
      padding: 0,
    }} {...props}>
    <input
      role={'input-number'}
      ref={inputRef}
      type={'number'}
      value={localValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      style={{
        padding: style.padding,
        outline: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        color: style.color,
        // ...style,
      }} {...props}/>

    <SpinnerControl intervalTime={intervalTime}
                    onStep={(dir) => {
                      if (dir === 'up') {
                        increment()
                      } else if (dir === 'down') {
                        decrement()
                      }
                    }}/>
  </div>
}

export default InputNumber