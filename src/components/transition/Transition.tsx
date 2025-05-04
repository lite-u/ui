import {CSSProperties, FC, HTMLProps, ReactNode, useEffect, useState} from 'react'

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

export type TransitionProps = HTMLProps<HTMLDivElement> & {
  /**
   * Whether the transition should be visible.
   * If true, transition animates to `to` styles; otherwise, animates to `from`.
   */
  visible: boolean,

  /**
   * The initial styles before transition starts.
   * Can contain raw CSS values or detailed timing configurations.
   */
  from?: FromType

  /**
   * The target styles to animate toward when `visible` is true.
   * Can contain raw CSS values or detailed timing configurations.
   */
  to: FromType

  /**
   * CSS `transform-origin` value for the transition.
   * Controls the origin point of scaling/rotating transforms.
   * @default "center"
   */
  transformOrigin?: string

  /**
   * Default timing function for all transitions unless overridden per-property.
   * @default "ease"
   */
  effect?: TimingFunction

  /**
   * Default duration in milliseconds for entering transitions unless overridden per-property.
   * @default 300
   */
  duration?: number,

  /**
   * Default duration in milliseconds for leaving transitions unless overridden per-property.
   * @default 300
   */
  leaveDuration?: number

  /**
   * Default delay in milliseconds before starting the transition unless overridden per-property.
   * @default 0
   */
  delay?: number,

  children: ReactNode
}

/**
 * Transition component
 *
 * @brief
 * Animates its children from one style state to another based on visibility.
 *
 * @intro
 * Provides smooth CSS transitions for child elements. Supports property-level control of animation duration,
 * delay, and timing function. When `visible` changes, styles interpolate from `from` to `to` definitions.
 *
 * @example
 * <Transition
 *   from={{ opacity: 0, scale: 0.9 }}
 *   to={{ opacity: 1, scale: 1 }}
 *   visible={show}
 * >
 *   <div>Hello world</div>
 * </Transition>
 */
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