import React from 'react'

const Modal: React.FC<{
  children?: React.ReactNode,
  style?: React.CSSProperties
  onBackdropClick?: VoidFunction,
  backdropBg?: string
}> = ({children, style, onBackdropClick, backdropBg}) => {

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
    }}
  >
    <div
      data-name={'modal-backdrop'}
      style={{
        ...style,
        backgroundColor: backdropBg ? backdropBg : '#fff',
      }}
      onClick={() => {
        if (onBackdropClick) {
          onBackdropClick()
        }
      }}
      className={'absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center select-none'}>
      {children}
    </div>
  </div>
}

export default Modal