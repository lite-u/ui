import {Children, CSSProperties, ReactNode, useEffect, useRef, useState} from 'react'
import SelectContext from './SelectContext'
import {Row, Transition} from '../../index'
import Interactable from '../interactive/Interactable'
import {useLiteUIContext} from '../../LiteUIProvider'
import SelectItem from './SelectItem'

/**
 * Select component
 *
 * @brief
 * A styled dropdown (select) component.
 *
 * @intro
 * Renders a `<select>` like element styled according to theme context. Supports multiple sizes
 * and validation states.
 *
 * @example
 * import { Select } from '@lite-u/ui'
 *
 * <Select>
 *   <option value="1">One</option>
 *   <option value="2">Two</option>
 * </Select>
 */
const Select: React.FC<React.HTMLProps<HTMLDivElement> & {
  /**
   * Extra small size variant for the select.
   * @default false
   */
  xs?: boolean

  /**
   * Small size variant for the select.
   * @default false
   */
  s?: boolean

  /**
   * Medium size variant for the select.
   * @default true
   */
  m?: boolean

  /**
   * Large size variant for the select.
   * @default false
   */
  l?: boolean
  /**
   * Inline styles to customize the select element.
   */
  style?: React.CSSProperties
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>
}> = ({
        label,
        style,
        xs,
        s,
        m,
        l,
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
  const animationLeaveDuration = 100
  const getSize = () => {
    if (xs) return 'xs'
    if (s) return 'sm'
    if (l) return 'lg'
    return 'md'
  }
  const {theme} = useLiteUIContext()
  const size = getSize()
  const isOpenedRef = useRef<boolean>(false)
  const styles: CSSProperties = {
    ...theme.formElements[size],
    padding: `0 ${theme.padding[size].y}px`,
    fontSize: theme.fontSizes[size],
    borderRadius: theme.borderRadius[size],
    boxSizing: 'border-box',
  }
// console.log(theme.)
  const filteredChildren: ReactNode[] = []

  Children.forEach(children, (child) => {
    // @ts-ignore
    if (child.type !== SelectItem) {
      // @ts-ignore
      console.error(`<Select> only accepts <SelectItem> as children. Found: <${child.type}>`)
      return
    }

    filteredChildren.push(child)
  })

  const close: EventListener = (e) => {
    const target = e.target as HTMLElement
    const inside = wrapperRef?.current?.contains(target)

    if (!inside && isOpenedRef.current) {
      setOpenSelect(false)
    }
  }

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

    window.addEventListener('click', close)

    return () => {
      window.removeEventListener('click', close)
    }
  }, [children, defaultValue, size])

  const handleItemClick = (newValue: string | number) => {
    setValue(newValue)
    if (newValue !== value) {
      onChange && onChange(newValue)
    }
    setOpenSelect(false)
    isOpenedRef.current = false
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
    isOpenedRef.current = !openSelect
  }

  return <SelectContext.Provider value={{itemStyle: styles, selectValue: value, itemClick: handleItemClick}}>
    <div role={'select'}
         ref={wrapperRef}
         style={{
           flex: 'none',
           minWidth: styles.minWidth,
           height: styles.height,
           borderRadius: styles.borderRadius,
           // boxShadow: '0 0 1px 0 #000',
           cursor: 'pointer',
           boxSizing: 'border-box',
           ...style,
           position: 'relative',
         }}
         {...props}>

      <Interactable
        tag={'div'}
        role={'placeholder'}
        tabIndex={0}
        style={{
          ...styles,
          // height: '100%',
          border: '1px solid #dfdfdf',
          borderRadius: styles.borderRadius,
          fontSize: styles.fontSize,
          userSelect: 'none',
        }}
        onClick={() => {
          // e.stopPropagation()
          handleOpen()
          return false
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.code.toLowerCase() === 'space') {
            e.preventDefault()
            handleOpen()
          }

          onKeyDown && onKeyDown(e)
        }}>
        <Row fh
             between
             center
             pl={styles.padding}
             pr={styles.padding}>
          <span>{value}</span>
          <Transition visible={openSelect}
                      duration={animationDuration}
                      leaveDuration={animationLeaveDuration}
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
      </Interactable>

      <Transition visible={openSelect}
                  duration={animationDuration}
                  leaveDuration={animationLeaveDuration}
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
                    zIndex: 1000,
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
            {filteredChildren}
          </div>
        </div>
      </Transition>
    </div>
  </SelectContext.Provider>

}

export default Select