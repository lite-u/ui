import React, {CSSProperties, HTMLProps, useEffect, useRef, useState} from 'react'
import SelectContext from './SelectContext'
import {Row, Transition} from '../../index'
import Hoverable from '../interactive/Hoverable'

export type SelectSize = 'sm' | 'md' | 'lg'
const Select: React.FC<HTMLProps<HTMLDivElement> & {
  label?: string
  children?: React.ReactNode
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  sm?: boolean
  md?: boolean
  lg?: boolean
  size?: SelectSize
  style?: {},
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>
}> = ({
        label,
        style,
        sm,
        md,
        lg,
        size = 'md' as SelectSize,
        defaultValue = '',
        onChange,
        children,
        onKeyDown,
        ...props
      }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ top?: string, bottom?: string }>({})
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [value, setValue] = useState(defaultValue)
  const animationDuration = 100
  const sizeStyle: Record<SelectSize, CSSProperties> = {
    sm: {
      width: 40,
      height: 20,
      padding: 6,
      borderRadius: 2,
      fontSize: 12,
    },
    md: {
      width: 60,
      height: 30,
      padding: 10,
      borderRadius: 3,
      fontSize: 14,
    },
    lg: {
      width: 100,
      height: 40,
      padding: 12,
      borderRadius: 4,
      fontSize: 16,
    },
  }

  if (md) {
    size = 'md'
  }

  if (sm) {
    size = 'sm'
  }

  if (lg) {
    size = 'lg'
  }

  const itemStyle = sizeStyle[size]

  useEffect(() => {
    const maxHeight = window.innerHeight

    setValue(defaultValue)
    // setItemStyle(sizeStyle[size])
    // console.log(containerRef.current)
    if (containerRef.current) {
      const h = containerRef.current.offsetHeight

      // console.log(h)
      if (h > maxHeight) {
        setWrapperHeight(300)
      } else {
        setWrapperHeight(h)
      }
    }
  }, [children, defaultValue, size])

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

  return <SelectContext.Provider value={{itemStyle, selectValue: value, itemClick: handleItemClick}}>
    <div role={'select'}
         ref={wrapperRef}
         style={{
           width: itemStyle.width,
           height: itemStyle.height,
           borderRadius: itemStyle.borderRadius,
           boxShadow: '0 0 1px 0 #000',
           cursor: 'pointer',
           boxSizing: 'border-box',
           ...style,
           position: 'relative',
         }}
         {...props}>

      <Hoverable
        role={'placeholder'}
        tabIndex={0}
        style={{
          height: '100%',
          borderRadius: itemStyle.borderRadius,
          fontSize: itemStyle.fontSize,
          userSelect: 'none',
        }}
        onClick={() => {
          handleOpen()
        }}
        onKeyDown={(e) => {
          if (e.code.toLowerCase() === 'space') {
            e.preventDefault()
            handleOpen()
          }

          onKeyDown && onKeyDown(e)
        }}>
        <Row fh
             justifyContent={'space-between'}
             pl={itemStyle.padding}
             pr={itemStyle.padding}
             alignItems={'center'}>
          <span>{value}</span>
          <Transition visible={openSelect}
                      duration={animationDuration}
                      from={{
                        rotate: '0deg',
                      }}
                      to={{
                        rotate: '180deg',
                      }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
          </Transition>
        </Row>
      </Hoverable>

      <Transition visible={openSelect}
                  duration={animationDuration}
                  from={{
                    height: 0,
                  }}
                  to={{
                    height: wrapperHeight,
                  }}
                  style={{
                    position: 'absolute',
                    // top: '100%',
                    left: 0,
                    overflow: 'hidden',
                    width: '100%',
                    height: wrapperHeight,
                    backgroundColor: '#fff',
                    boxShadow: '0 0 1px 0 #000',
                    ...position,
                  }}>
        <div role={'select-wrapper'}
             style={{
               overflowY: openSelect ? 'auto' : 'hidden',
               overflowX: 'hidden',
               // width: '100%',
               height: wrapperHeight,
               backgroundColor: '#fff',
               // boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
             }}>
          <div ref={containerRef}
               style={{
                 // position: 'absolute',
                 width: '100%',
                 backgroundColor: '#fff',
                 height: 'auto',
               }}>
            {children}
          </div>
        </div>
      </Transition>
    </div>
  </SelectContext.Provider>

}

export default Select