import React, {useEffect, useRef, useState} from 'react'
import SelectContext from './SelectContext'
import {Row} from '../../index'

const Select: React.FC<React.HTMLProps<HTMLDivElement> & {
  label?: string
  children?: React.ReactNode
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  style?: {}
}> = ({
        label,
        style,
        defaultValue = '',
        onChange,
        children,
        ...props
      }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ top?: string, bottom?: string }>({})
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const maxHeight = window.innerHeight
    setValue(defaultValue)
    if (containerRef.current) {
      const h = containerRef.current.offsetHeight

      if (h > maxHeight) {
        setWrapperHeight(300)
      } else {
        setWrapperHeight(h)
      }
    }
  }, [children, defaultValue])

  const handleItemClick = (newValue: string | number) => {
    setValue(newValue)
    if (newValue !== value) {
      onChange && onChange(newValue)
    }
    setOpenSelect(false)
  }

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

  return <SelectContext.Provider value={{value, itemClick: handleItemClick}}>
    <div ref={wrapperRef}
         style={{
           width: 100,
           height: 40,
           border: '1px solid #dfdfdf',
           cursor: 'pointer',
           ...style,
           position: 'relative',
         }}
         {...props}>

      <Row center jc fh onClick={() => {
        handleOpen()
      }}>{value}</Row>

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