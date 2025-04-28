import {useEffect, useRef, useState} from 'react'

type TooltipPosition = 't' | 'r' | 'b' | 'l' | 'tl' | 'tr' | 'bl' | 'br'
type ToolTipProps = React.HTMLProps<HTMLDivElement> & {
  title: string
  bgColor?: string
  color?: string
  position?: TooltipPosition
  children: React.ReactNode;
};

export const Tooltip: React.FC<ToolTipProps> = ({
                                                  title,
                                                  color,
                                                  bgColor,
                                                  position,
                                                  children,
                                                }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [localPosition, setLocalPosition] = useState<TooltipPosition | null>()
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLDivElement | null>(null)
  const backgroundColor = bgColor || '#333'
  const textColor = color || '#fff'
  useEffect(() => {
    if (position) {
      setLocalPosition(position)
      return
    }

    if (isVisible && targetRef.current && tooltipRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect()
      const tooltipRect = tooltipRef.current.getBoundingClientRect()

      // Calculate available space
      const spaceAbove = targetRect.top
      const spaceBelow = window.innerHeight - targetRect.bottom
      const spaceLeft = targetRect.left
      const spaceRight = window.innerWidth - targetRect.right

      // Auto position tooltip in various directions
      if (spaceAbove > tooltipRect.height) {
        setLocalPosition('t')
      } else if (spaceBelow > tooltipRect.height) {
        setLocalPosition('b')
      } else if (spaceLeft > tooltipRect.width) {
        setLocalPosition('l')
      } else if (spaceRight > tooltipRect.width) {
        setLocalPosition('r')
      } else {
        if (spaceAbove > tooltipRect.height / 2 && spaceLeft > tooltipRect.width / 2) {
          setLocalPosition('tl')
        } else if (spaceAbove > tooltipRect.height / 2 && spaceRight > tooltipRect.width / 2) {
          setLocalPosition('tr')
        } else if (spaceBelow > tooltipRect.height / 2 && spaceLeft > tooltipRect.width / 2) {
          setLocalPosition('bl')
        } else if (spaceBelow > tooltipRect.height / 2 && spaceRight > tooltipRect.width / 2) {
          setLocalPosition('br')
        } else {
          setLocalPosition('b')
        }
      }
    }
  }, [isVisible, position])

  const getPositionStyles = () => {
    switch (localPosition) {
      case 't':
        return {bottom: '120%', left: '50%', transform: 'translateX(-50%)'}
      case 'b':
        return {top: '120%', left: '50%', transform: 'translateX(-50%)'}
      case 'l':
        return {right: '120%', top: '50%', transform: 'translateY(-50%)'}
      case 'r':
        return {left: '120%', top: '50%', transform: 'translateY(-50%)'}
      case 'tl':
        return {bottom: '120%', left: '0', transform: 'translateX(0)'}
      case 'tr':
        return {bottom: '120%', right: '0', transform: 'translateX(0)'}
      case 'bl':
        return {top: '120%', left: '0', transform: 'translateX(0)'}
      case 'br':
        return {top: '120%', right: '0', transform: 'translateX(0)'}
      default:
        return {bottom: '120%', left: '50%', transform: 'translateX(-50%)'}
    }
  }

  const getArrowStyles = () => {
    switch (localPosition) {
      case 't':
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderWidth: '6px 6px 0 6px',
          borderColor: `${backgroundColor} transparent transparent transparent`,
        }
      case 'b':
        return {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderWidth: '0 6px 6px 6px',
          borderColor: `transparent transparent ${backgroundColor} transparent`,
        }
      case 'l':
        return {
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          borderWidth: '6px 0 6px 6px',
          borderColor: `transparent transparent transparent ${backgroundColor}`,
        }
      case 'r':
        return {
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          borderWidth: '6px 6px 6px 0',
          borderColor: `transparent ${backgroundColor} transparent transparent`,
        }
      case 'tl':
        return {
          top: '100%',
          left: '15%',
          transform: 'translateX(0)',
          borderWidth: '6px 6px 0 6px',
          borderColor: `${backgroundColor} transparent transparent transparent`,
        }
      case 'tr':
        return {
          top: '100%',
          right: '15%',
          transform: 'translateX(0)',
          borderWidth: '6px 6px 0 6px',
          borderColor: `${backgroundColor} transparent transparent transparent`,
        }
      case 'bl':
        return {
          bottom: '100%',
          left: '15%',
          transform: 'translateX(0)',
          borderWidth: '0 6px 6px 6px',
          borderColor: `transparent transparent ${backgroundColor} transparent`,
        }
      case 'br':
        return {
          bottom: '100%',
          right: '15%',
          transform: 'translateX(0)',
          borderWidth: '0 6px 6px 6px',
          borderColor: `transparent transparent ${backgroundColor} transparent`,
        }
      default:
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderWidth: '6px 6px 0 6px',
          borderColor: `${backgroundColor} transparent transparent transparent`,
        }
    }
  }

  const handleMouseEnter = () => {
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  return (
    <div
      role={'tooltip'}
      ref={targetRef}
      style={{position: 'relative', display: 'inline-block'}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          style={{
            position: 'absolute',
            backgroundColor: backgroundColor,
            padding: '5px 10px',
            borderRadius: '4px',
            // whiteSpace: 'nowrap',
            zIndex: 1000,
            fontSize: '12px',
            color: textColor,
            ...getPositionStyles(),
          }}
        >
          {title}
          <div
            style={{
              content: '',
              position: 'absolute',
              borderStyle: 'solid',
              color: textColor,
              ...getArrowStyles(),
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Tooltip