import React, {useRef} from 'react'
import {Button} from '../../index'

type SpinnerControlProps = {
  onStep: (dir: 'up' | 'down') => void;
};

export const SpinnerControl: React.FC<SpinnerControlProps> = ({onStep}) => {
  const intervalRef = useRef<number | null>(null)

  const startHold = (dir: 'up' | 'down') => {
    onStep(dir) // fire immediately
    intervalRef.current = window.setInterval(() => {
      onStep(dir)
    }, 100)
  }

  const stopHold = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  return (
    <div style={{
      position: 'absolute',
      right: 0,
      top: 0,
      width: 30,
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Button
        xs
        onMouseDown={() => startHold('up')}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        style={{
          width: '100%',
          height: '50%',
          padding: 0,
          // borderBottom: '1px solid #ccc',
          // cursor: 'pointer',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </Button>
      <Button
        xs
        onMouseDown={() => startHold('down')}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        style={{
          width: '100%',
          height: '50%',
          padding: 0,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </Button>
    </div>
  )
}