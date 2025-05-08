import {Children, CSSProperties, ReactNode, useEffect, useRef, useState} from 'react'
import SelectContext from './SelectContext'
import Interactable from '../interactable/Interactable'
import {useLiteUIContext} from '../../LiteUIProvider'
import SelectItem from './SelectItem'
import Row from '../layouts/Row'
import Transition from '../transition/Transition'

type SelectProps = Omit<React.HTMLProps<HTMLDivElement>, 'disabled'> & {
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
   * Set Select to disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Inline styles to customize the select element.
   */
  style?: React.CSSProperties
  /**
   * Custom styles applied to each `SelectItem` within the dropdown.
   */
  itemStyle?: React.CSSProperties
  /**
   * The initial selected value of the select component.
   * @default \-
   */
  selectValue?: string | number
  /**
   * Callback fired when the selected value changes.
   * Receives the new value as a string or number.
   * @default \-
   * */
  onSelectChange?: (value: string | number) => void
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>
}

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
 * <Select s defaultValue={'2'}>
 *   <SelectItem value={'1'}>1</SelectItem>
 *   <SelectItem value={'2'}>2</SelectItem>
 *   <SelectItem value={'3'}>3</SelectItem>
 * </Select>
 */
const Select: React.FC<SelectProps> = ({
                                         label,
                                         style,
                                         itemStyle = {},
                                         xs,
                                         s,
                                         m,
                                         l,
                                         disabled = false,
                                         selectValue,
                                         onSelectChange,
                                         children,
                                         onKeyDown,
                                         ...props
                                       }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ top?: string, bottom?: string }>({})
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [value, setValue] = useState<number | string>(selectValue || '')
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
  const defaultStyle: CSSProperties = {
    ...theme.formElements[size],
    padding: `0 ${theme.padding[size].y}px`,
    fontSize: theme.fontSizes[size],
    borderRadius: theme.borderRadius[size],
    boxSizing: 'border-box',
  }
  if (disabled) {
    Object.assign(defaultStyle, theme.select.disabled)
  }
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

    // @ts-ignore
    setValue(selectValue)

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
  }, [children, selectValue, size])

  const handleItemClick = (newValue: string | number) => {
    if (disabled) return
    setValue(newValue)
    if (newValue !== value) {
      onSelectChange && onSelectChange(newValue)
    }
    setOpenSelect(false)
    isOpenedRef.current = false
  }

  const handleOpen = () => {
    if (disabled) return
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

  const mergedItemStyle = {
    ...defaultStyle,
    ...itemStyle,
  }
  // console.log(mergedItemStyle)
  return <SelectContext.Provider value={{itemStyle: mergedItemStyle, selectValue: value, itemClick: handleItemClick}}>
    <div role={'select'}
         ref={wrapperRef}
         style={{
           flex: 0,
           // flex: 'none',
           ...defaultStyle,
           padding: 0,
           // minWidth: defaultStyle.minWidth,
           // height: defaultStyle.height,
           // borderRadius: defaultStyle.borderRadius,
           // boxShadow: '0 0 1px 0 #000',
           // cursor: disabled ? 'not-allowed' : 'pointer',
           cursor: 'pointer',
           // boxSizing: 'border-box',
           ...style,
           position: 'relative',
         }}>

      <Interactable
        tag={'div'}
        role={'placeholder'}
        tabIndex={disabled ? -1 : 0}
        style={{
          userSelect: 'none',
          border: '1px solid #dfdfdf',
          ...defaultStyle,
          // ...disabled ? {color: '#bababa'} : {},
          ...style,
          // height: '100%',
          // borderRadius: defaultStyle.borderRadius,
          // fontSize: defaultStyle.fontSize,
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
        }}

        {...props}
      >
        <Row fh
             between
             center
             pl={defaultStyle.padding}
             pr={defaultStyle.padding}>
          <span>{value}</span>
          <Transition visible={openSelect}
                      duration={animationDuration}
                      exitDuration={animationLeaveDuration}
                      style={{
                        width: 14,
                        height: 14,
                        flex: 0,
                      }}
                      from={{
                        rotate: '0deg',
                      }}
                      to={{
                        rotate: '180deg',
                      }}>
            {/*<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>*/}

            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                 strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </Transition>
        </Row>
      </Interactable>

      <Transition visible={openSelect}
                  duration={animationDuration}
                  exitDuration={animationLeaveDuration}
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
                    width: 'auto',
                    minWidth: '100%',
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