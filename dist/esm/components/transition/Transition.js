import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const Transition = ({ children, scale, translate, opacity, width, height, top, right, bottom, left, effect = 'ease', visible = true, // Controls visibility (scale from 0 to 1)
duration = 300, // Duration of the animation in ms
 }) => {
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
        translate,
        width,
        height,
        top,
        right,
        bottom,
        left,
        scale,
        opacity,
    ]);
    // Get the scaling style
    const getStyle = () => {
        const r = {};
        let showing = state === 'entered' || state === 'entering';
        let transformDeclares = [];
        let transitionDeclares = new Set();
        if (scale) {
            transformDeclares.push(showing ? `scale(${scale.to})` : `scale(${scale.from})`);
            transitionDeclares.add(`transform ${duration}ms ${effect}`);
        }
        if (translate) {
            transformDeclares.push(showing ? translate.to : translate.from);
            transitionDeclares.add(`transform ${duration}ms ${effect}`);
        }
        if (opacity) {
            r.opacity = showing ? opacity.to : opacity.from;
            transitionDeclares.add(`opacity ${opacity.duration || duration}ms ${opacity.effect || effect}`);
        }
        if (width) {
            r.width = showing ? width.to : width.from;
            transitionDeclares.add(`width ${duration}ms ${effect}`);
        }
        if (height) {
            r.height = showing ? height.to : height.from;
            transitionDeclares.add(`height ${duration}ms ${effect}`);
        }
        if (top) {
            r.top = showing ? top.to : top.from;
            transitionDeclares.add(`top ${duration}ms ${effect}`);
        }
        if (right) {
            r.right = showing ? right.to : right.from;
            transitionDeclares.add(`right ${duration}ms ${effect}`);
        }
        if (bottom) {
            r.bottom = showing ? bottom.to : bottom.from;
            transitionDeclares.add(`bottom ${duration}ms ${effect}`);
        }
        if (left) {
            r.left = showing ? left.to : left.from;
            transitionDeclares.add(`left ${duration}ms ${effect}`);
        }
        if (transitionDeclares.size > 0) {
            r.transition = [...transitionDeclares.values()].join(', ');
        }
        if (transformDeclares.length > 0) {
            r.transform = transformDeclares.join(' ');
        }
        return r;
    };
    return (_jsx("div", { role: 'transition', style: {
            transformOrigin: 'center center',
            overflow: 'hidden',
            ...getStyle(),
        }, children: children }));
};
export default Transition;
