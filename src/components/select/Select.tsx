import React, {useEffect, useRef, useState} from 'react'

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
  const [wrapperHeight, setWrapperHeight] = useState(0)

  useEffect(() => {
    const maxHeight = window.innerHeight
    if (containerRef.current) {
      const h = containerRef.current.offsetHeight

      setWrapperHeight(Math.min(maxHeight, h))
    }
  }, [children])

  const handleOpen = (e) => {
    const rect = wrapperRef.current?.getBoundingClientRect()
    // setPosition({top: rect!.top, bottom: rect!.bottom})
    setOpenSelect(!openSelect)
  }

  return <div ref={wrapperRef}
              style={{
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
      bottom: '100%',
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
    {/*<select name="" id=""></select>  */}
  </div>
}

export default Select