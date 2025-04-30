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
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ccc',
      borderRadius: 4,
    }}>
      <Button
        xs
        onMouseDown={() => startHold('up')}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        style={{
          height: '50%',
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
        onMouseDown={() => startHold('down')}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        style={{
          height: '50%',
          background: 'white',
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