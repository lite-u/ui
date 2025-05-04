import {CSSProperties, FC, ReactNode, useEffect, useState} from 'react'

type TimingFunction =
  | 'ease'
  | 'linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | `cubic-bezier(${number}, ${number}, ${number}, ${number})`;

export type FromType = {
  [key in keyof CSSProperties]: CSSProperties[key] |
  {
    value: CSSProperties[key]
    effect?: TimingFunction
    duration?: number,
    delay?: number,
  }
};

export type TransitionProps = {
  visible: boolean,
  from?: FromType
  to: FromType
  transformOrigin?: string
  effect?: TimingFunction
  duration?: number,
  leaveDuration?: number
  delay?: number,
  children: ReactNode
  style?: CSSProperties
}

const Transition: FC<TransitionProps> = ({
                                           children,
                                           from = {},
                                           to = {},
                                           transformOrigin = 'center',
                                           visible = true,
                                           effect = 'ease',
                                           duration = 300,
                                           leaveDuration = 300,
                                           delay = 0,
                                           style = {},
                                         }) => {
  const [state, setState] = useState(visible ? 'entered' : 'exiting')
  // const [waiting, setWaiting] = useState()
  useEffect(() => {
    // console.log(state)
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
    from,
    to,
    transformOrigin,
    effect,
    delay,
  ])

  const getStyle = () => {
    const styles: CSSProperties = {}
    let showing = state === 'entered' || state === 'entering'
    let transitionDeclarations = new Set()
    let handlingObj = showing ? to : from
    const keys = Object.keys(handlingObj) as unknown as (keyof CSSProperties)[]

    keys.forEach((key) => {
      const item = handlingObj[key]
      let itemTransitionDeclaration = ''
      let itemDelay = delay
      let itemDuration = showing ? duration : leaveDuration
      let itemEffect = effect
      let itemStyleValue: CSSProperties[typeof key]

      if (typeof item === 'object') {
        itemStyleValue = item.value

        if (item.delay) {
          itemDelay = item.delay
        }

        if (item.duration) {
          itemDuration = item.duration
        }

        if (item.effect) {
          itemEffect = item.effect
        }
      } else {
        itemStyleValue = item
      }

      itemTransitionDeclaration = `${handleCamelPropsName(key)} ${itemDuration}ms ${itemEffect} ${itemDelay}ms`
      // @ts-ignore
      styles[key] = itemStyleValue as CSSProperties[typeof key]
      transitionDeclarations.add(itemTransitionDeclaration)
    })

    if (transitionDeclarations.size > 0) {
      styles.transition = [...transitionDeclarations.values()].join(', ')
    }

    return styles
  }

  return (
    <div
      role={'transition'}
      style={{
        transformOrigin,
        // pointerEvents: state === 'entered' ? 'auto' : 'none',
        // overflow: 'hidden',
        // position: 'absolute',
        ...style,
        ...getStyle(),
      }}
    >
      {children}
    </div>
  )
}

const handleCamelPropsName = (propName: keyof CSSProperties) => propName.replace(/[A-Z]/g, (a) => '-' + a.toLowerCase())

export default Transition