import React, {CSSProperties, useRef} from 'react'
import Interactable, {InteractableBaseProps} from '../interactable/Interactable'

type SpinnerControlProps = {
  intervalTime?: number
  onStep: (dir: 'up' | 'down') => void;
  disabled?: boolean
};

export const SpinnerControl: React.FC<SpinnerControlProps> = ({onStep, disabled, intervalTime = 100}) => {
  const intervalRef = useRef<number | null>(null)

  const startHold = (dir: 'up' | 'down') => {
    onStep(dir) // fire immediately
    intervalRef.current = window.setInterval(() => {
      onStep(dir)
    }, intervalTime)
  }

  const stopHold = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }
  const wrapperStyle: CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 30,
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    // color: '#000',
  }
  const buttonStyle = {
    padding: 0,
    margin: 0,
    height: '50%',
    flex: 1,
    borderRadius: 0,
    color: '#000',
    backgroundColor: '#dfdfdf',
    cursor: disabled ? 'not-allowed' : 'pointer',
    // boxShadow: '0 0 1px 0 #000',
    fontSize: '1em',
    display: 'inline-flex',
    justifyContent: 'center',
    border: 'none',
  }
  const buttonActiveStyle = {
    backgroundColor: '#aaaaaa',
    color: '#fff',
  }
  const buttonProps: InteractableBaseProps<'button'> = {
    tag: 'button',
    type: 'button',
    role: 'input-number-spinner-up',
    disabled: disabled,
    style: buttonStyle,
    active: buttonActiveStyle,
    onMouseUp: stopHold,
    onMouseLeave: stopHold,
  }

  return (
    <div role={'input-number-spinner-wrapper'} style={wrapperStyle}>
      <Interactable {...buttonProps} onMouseDown={() => startHold('up')}>
        <svg style={{height: '100%'}} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1"
             strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </Interactable>
      <Interactable {...buttonProps} onMouseDown={() => startHold('down')}>
        <svg style={{height: '100%'}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
             strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </Interactable>
    </div>
  )
}