import React from 'react'

const Modal: React.FC<{
  children: React.ReactNode,
  onBackdropClick: VoidFunction,
  onClose: VoidFunction
}> = ({children}) => {

  return <div
    className={`fixed top-0 left-0 z-300 w-full h-full flex flex-row items-center justify-center text-sm select-none`}>
    <div
      style={{
        backgroundColor: '#fff',
      }}
      className={'absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center text-sm select-none'}>
      {children}
    </div>
  </div>
}

export default Modal