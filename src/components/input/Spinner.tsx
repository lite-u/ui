import React, { useRef } from 'react';

type SpinnerControlProps = {
  onStep: (dir: 'up' | 'down') => void;
};

export const SpinnerControl: React.FC<SpinnerControlProps> = ({ onStep }) => {
  const intervalRef = useRef<number | null>(null);

  const startHold = (dir: 'up' | 'down') => {
    onStep(dir); // fire immediately
    intervalRef.current = window.setInterval(() => {
      onStep(dir);
    }, 100);
  };

  const stopHold = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', borderRadius: 4 }}>
      <button
        onMouseDown={() => startHold('up')}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        style={{
          padding: '4px 6px',
          borderBottom: '1px solid #ccc',
          background: 'white',
          cursor: 'pointer'
        }}
      >
        ▲
      </button>
      <button
        onMouseDown={() => startHold('down')}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        style={{
          padding: '4px 6px',
          background: 'white',
          cursor: 'pointer'
        }}
      >
        ▼
      </button>
    </div>
  );
};