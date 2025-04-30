import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const TransitionB = ({ children, from = {}, to = {}, transformOrigin = 'center', visible = true, effect = 'ease', duration = 300, delay = 0, }) => {
    const [state, setState] = useState(visible ? 'entered' : 'exiting');
    useEffect(() => {
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
    ]);
    // Get the scaling style
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
            let itemDuration = duration;
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
            overflow: 'hidden',
            ...getStyle(),
        }, children: children }));
};
const handleCamelPropsName = (propName) => propName.replace(/[A-Z]/g, (a) => '-' + a.toLowerCase());
export default TransitionB;
