import React, {useEffect, useRef, useState} from 'react'

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  children?: React.ReactNode
  style?: {}
}> = ({
        label,
        children,
        ...props
      }) => {
  const [openSelect, setOpenSelect] = useState(false)
  // const [selectFocused, setSelectFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [position, setPosition] = useState({
    top: 0,
    bottom: 0,
  })
  const styles: React.CSSProperties = {
    border: '1px solid #dfdfdf',
    position: 'absolute',
  }

  useEffect(() => {
    const maxHeight = window.innerHeight
    if (containerRef.current) {
      const h = containerRef.current.offsetHeight

      console.log(wrapperRef.current.getBoundingClientRect())
      // console.log(Math.min(maxHeight, h))
      setWrapperHeight(Math.min(maxHeight, h))
    }
  }, [children])

  return <div ref={wrapperRef} {...props} style={{
    position: 'relative',
  }}>
    {/*{label && <label>{label}</label>}*/}
    {/*
                    <div onFocus={() => setSelectFocused(true)}
                         onBlur={() => setSelectFocused(false)}>
                      {children}
                    </div>
                */}

    <div onClick={() => {
      setOpenSelect(!openSelect)
    }}>selected
    </div>

    <div style={{
      position: 'relative',
      overflow: 'hidden',
      height: openSelect ? wrapperHeight : 0,
    }}>
      <div ref={containerRef}
           style={{position: 'absolute', height: 'auto'}} {...props}>
        {children}
      </div>
    </div>
    {/*<select name="" id=""></select>  */}
  </div>
}

export default Select