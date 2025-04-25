import React from 'react'

const Modal: React.FC<{
  children?: React.ReactNode,
  style?: React.CSSProperties
  onBackdropClick?: VoidFunction,
  backdropBg?: string
}> = ({children, style, onBackdropClick, backdropBg = 'rgba(0,0,0,.5)'}) => {

  return <div
    data-name={'modal-root'}
    style={{
      'display': 'flex',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'flexDirection': 'row',
      'justifyContent': 'center',
      'alignItems': 'center',
      'width': '100%',
      'height': '100%',
      'userSelect': 'none',
      zIndex: 1000,
      ...style,
    }}
  >
    <div
      data-name={'modal-backdrop'}
      style={{
        'position': 'absolute',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        zIndex: -1,
        backgroundColor: backdropBg,
      }}
      onClick={() => {
        if (onBackdropClick) {
          onBackdropClick()
        }
      }}>
    </div>
    {children}
  </div>
}

export default Modal