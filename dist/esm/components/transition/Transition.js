import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
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
 *   )
 * }
 */
const Transition = ({ children, from = {}, to = {}, transformOrigin = 'center', visible = true, effect = 'ease', duration = 300, exitDuration = 300, delay = 0, onAnimationEntered, onAnimationExited, onAnimationEnterCancel, onAnimationExitCancel, style = {}, ...props }) => {
    const [state, setState] = useState(visible ? 'entered' : 'exiting');
    // const [waiting, setWaiting] = useState()
    const initialized = useRef(false);
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            return;
        }
        if (visible) {
            setState('entering');
            let timer = window.setTimeout(() => {
                setState('entered');
                onAnimationEntered?.();
                timer = 0;
            }, duration);
            return () => {
                if (timer) {
                    clearTimeout(timer);
                    onAnimationEnterCancel?.();
                }
            };
        }
        else {
            setState('exiting');
            let timer = window.setTimeout(() => {
                setState('exited');
                timer = 0;
                onAnimationExited?.();
            }, duration);
            return () => {
                if (timer) {
                    clearTimeout(timer);
                    onAnimationExitCancel?.();
                }
            };
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
            let itemDuration = showing ? duration : exitDuration;
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
            flex: 1,
            ...style,
            ...getStyle(),
        }, ...props, children: children }));
};
const handleCamelPropsName = (propName) => propName.replace(/[A-Z]/g, (a) => '-' + a.toLowerCase());
export default Transition;
