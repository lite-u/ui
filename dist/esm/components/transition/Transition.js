import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
/**
 * Transition component
 *
 * @brief
 * Animates itself.
 *
 * @intro
 * To apply animations to elements typically requires external libraries or CSS files. For simplicity and control, `Transition` implements inline animations, putting all animation-related properties under your direct management.
 *
 * \
 * ✅️ `Tips`: Always remember: `Transition` is the direct receiver of the animation and serves as the true boundary between the wrapped component and its parent. If you wrap a component with `Transition`, be sure to apply the corresponding styles directly to `Transition`.
 *
 * @example
 * import { Con, Button, Transition } from '@lite-u/ui'
 *
 * const Sample = () => {
 *   const [show, setShow] = useState(false)
 *
 *   return <Con w={100} h={100}>
 *     <Button onClick={() => setShow(!show)}>Toggle</Button>
 *     <Transition from={{opacity: 0, scale: 0.9}} to={{opacity: 1, scale: 1}} visible={show}>
 *       <div>Hello world</div>
 *     </Transition>
 *   </Con>
 * }
 */
const Transition = ({ children, from = {}, to = {}, transformOrigin = 'center', visible = true, effect = 'ease', duration = 300, leaveDuration = 300, delay = 0, style = {}, ...props }) => {
    const [state, setState] = useState(visible ? 'entered' : 'exiting');
    // const [waiting, setWaiting] = useState()
    useEffect(() => {
        // console.log(state)
        if (visible) {
            setState('entering');
            const timer = setTimeout(() => setState('entered'), duration);
            return () => clearTimeout(timer);
        }
        else {
            setState('exiting');
            const timer = setTimeout(() => setState('exited'), duration);
            return () => clearTimeout(timer);
        }
    }, [
        visible,
        duration,
        from,
        to,
        transformOrigin,
        effect,
        delay,
    ]);
    const getStyle = () => {
        const styles = {};
        let showing = state === 'entered' || state === 'entering';
        let transitionDeclarations = new Set();
        let handlingObj = showing ? to : from;
        const keys = Object.keys(handlingObj);
        keys.forEach((key) => {
            const item = handlingObj[key];
            let itemTransitionDeclaration = '';
            let itemDelay = delay;
            let itemDuration = showing ? duration : leaveDuration;
            let itemEffect = effect;
            let itemStyleValue;
            if (typeof item === 'object') {
                itemStyleValue = item.value;
                if (item.delay) {
                    itemDelay = item.delay;
                }
                if (item.duration) {
                    itemDuration = item.duration;
                }
                if (item.effect) {
                    itemEffect = item.effect;
                }
            }
            else {
                itemStyleValue = item;
            }
            itemTransitionDeclaration = `${handleCamelPropsName(key)} ${itemDuration}ms ${itemEffect} ${itemDelay}ms`;
            // @ts-ignore
            styles[key] = itemStyleValue;
            transitionDeclarations.add(itemTransitionDeclaration);
        });
        if (transitionDeclarations.size > 0) {
            styles.transition = [...transitionDeclarations.values()].join(', ');
        }
        return styles;
    };
    return (_jsx("div", { role: 'transition', style: {
            transformOrigin,
            // pointerEvents: state === 'entered' ? 'auto' : 'none',
            // overflow: 'hidden',
            // position: 'absolute',
            ...style,
            ...getStyle(),
        }, ...props, children: children }));
};
const handleCamelPropsName = (propName) => propName.replace(/[A-Z]/g, (a) => '-' + a.toLowerCase());
export default Transition;
