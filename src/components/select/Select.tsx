import React, {useEffect, useRef, useState} from 'react'
import SelectContext from './SelectContext'

const Select: React.FC<React.HTMLProps<HTMLDivElement> & {
  label?: string
  children?: React.ReactNode
  style?: {}
}> = ({
        label,
        style,
        children,
        ...props
      }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ top?: string, bottom?: string }>({})
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [value, setValue] = useState('')

  useEffect(() => {
    const maxHeight = window.innerHeight
    if (containerRef.current) {
      const h = containerRef.current.offsetHeight

      if (h > maxHeight) {
        setWrapperHeight(300)
      } else {
        setWrapperHeight(h)
      }
    }
  }, [children])

  const handleOpen = () => {
    const maxHeight = window.innerHeight
    const rect = wrapperRef.current?.getBoundingClientRect()
    const newPosition: { top?: string, bottom?: string } = {}

    if (rect!.y > maxHeight / 2) {
      newPosition.bottom = '100%'
    } else {
      newPosition.top = '100%'
    }

    setPosition(newPosition)
    setOpenSelect(!openSelect)
  }
  return <SelectContext.Provider value={{value, setValue}}>
    <div ref={wrapperRef}
         style={{
           width: 100,
           height: 40,
           cursor: 'pointer',
           ...style,
           position: 'relative',
         }}
         {...props}>

      <div onClick={(e) => {
        handleOpen(e)
      }}>placeholder
      </div>

      <div style={{
        position: 'absolute',
        overflow: openSelect ? 'auto' : 'hidden',
        width: '100%',
        height: openSelect ? wrapperHeight : 0,
        // top: position.top,
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
        ...position,
        // bottom: '100%',
        // top: '100%',
      }}>
        <div ref={containerRef}
             style={{
               width: '100%',
               backgroundColor: '#fff',
               position: 'absolute',
               height: 'auto',
               top: 0,
               left: 0,
             }} {...props}>
          {children}
        </div>
      </div>
    </div>
  </SelectContext.Provider>

}

export default Select