import {CSSProperties, FC, ReactNode, useEffect, useState} from 'react'

type TimingFunction =
  | 'ease'
  | 'linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | `cubic-bezier(${number}, ${number}, ${number}, ${number})`;

const Transition: FC<{
  visible: boolean,
  transformOrigin?: CSSProperties['transformOrigin'],
  scale?: {
    from: number
    to: number
  }
  rotate?: {
    from: `rotate(${number}deg)`
    to: `rotate(${number}deg)`
  }
  translate?: {
    from: string
    to: string
  }
  opacity?: {
    from: number
    to: number
    duration?: number
    effect?: TimingFunction
  }
  width?: {
    from: CSSProperties['width']
    to: CSSProperties['width']
  }
  height?: {
    from: CSSProperties['height']
    to: CSSProperties['height']
  }
  top?: {
    from: CSSProperties['top']
    to: CSSProperties['top']
  }
  right?: {
    from: CSSProperties['right']
    to: CSSProperties['right']
  }
  bottom?: {
    from: CSSProperties['bottom']
    to: CSSProperties['bottom']
  }
  left?: {
    from: CSSProperties['left']
    to: CSSProperties['left']
  }
  effect?: TimingFunction
  duration?: number,
  children: ReactNode
}> = ({
        children,
        transformOrigin = 'center',
        scale,
        rotate,
        translate,
        opacity,
        width,
        height,
        top,
        right,
        bottom,
        left,
        effect = 'ease',
        visible = true,
        duration = 300,
      }) => {
  const [state, setState] = useState(visible ? 'entered' : 'exiting')

  useEffect(() => {
    if (visible) {
      setState('entering')
      const timer = setTimeout(() => setState('entered'), duration)
      return () => clearTimeout(timer)
    } else {
      setState('exiting')
      const timer = setTimeout(() => setState('exited'), duration)
      return () => clearTimeout(timer)
    }
  }, [
    visible,
    duration,
    translate,
    width,
    height,
    top,
    right,
    bottom,
    left,
    scale,
    rotate,
    opacity,
  ])

  // Get the scaling style
  const getStyle = () => {
    const r: {
      transform?: CSSProperties['transform']
      opacity?: CSSProperties['opacity']
      transition?: CSSProperties['transition']
      width?: CSSProperties['width']
      height?: CSSProperties['height']
      top?: CSSProperties['top']
      right?: CSSProperties['right']
      bottom?: CSSProperties['bottom']
      left?: CSSProperties['left']
      rotate?: string
    } = {}

    let showing = state === 'entered' || state === 'entering'
    let transformDeclares = []
    let transitionDeclares = new Set()

    if (scale) {
      transformDeclares.push(showing ? `scale(${scale.to})` : `scale(${scale.from})`)
      transitionDeclares.add(`transform ${duration}ms ${effect}`)
    }

    if (rotate) {
      transformDeclares.push(showing ? rotate.to : rotate.from)
      transitionDeclares.add(`rotate ${duration}ms ${effect}`)
    }

    if (translate) {
      transformDeclares.push(showing ? translate.to : translate.from)
      transitionDeclares.add(`transform ${duration}ms ${effect}`)
    }

    if (opacity) {
      r.opacity = showing ? opacity.to : opacity.from
      transitionDeclares.add(`opacity ${opacity.duration || duration}ms ${opacity.effect || effect}`)
    }

    if (width) {
      r.width = showing ? width.to : width.from
      transitionDeclares.add(`width ${duration}ms ${effect}`)
    }

    if (height) {
      r.height = showing ? height.to : height.from
      transitionDeclares.add(`height ${duration}ms ${effect}`)
    }

    if (top) {
      r.top = showing ? top.to : top.from
      transitionDeclares.add(`top ${duration}ms ${effect}`)
    }

    if (right) {
      r.right = showing ? right.to : right.from
      transitionDeclares.add(`right ${duration}ms ${effect}`)
    }

    if (bottom) {
      r.bottom = showing ? bottom.to : bottom.from
      transitionDeclares.add(`bottom ${duration}ms ${effect}`)
    }

    if (left) {
      r.left = showing ? left.to : left.from
      transitionDeclares.add(`left ${duration}ms ${effect}`)
    }

    if (transitionDeclares.size > 0) {
      r.transition = [...transitionDeclares.values()].join(', ')
    }

    if (transformDeclares.length > 0) {
      r.transform = transformDeclares.join(' ')
    }

    return r
  }

  return (
    <div
      role={'transition'}
      style={{
        transformOrigin,
        overflow: 'hidden',
        ...getStyle(),
      }}
    >
      {children}
    </div>
  )
}

export default Transition