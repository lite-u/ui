import { jsx as _jsx } from "react/jsx-runtime";
import { Children, createContext, isValidElement, useEffect, useRef, useState } from 'react';
import HoverHead from './HoverHead';
import HoverBody from './HoverBody';
export const HoverContext = createContext({
    show: false,
    persisted: false,
    onMouseEnter: () => { },
    onMouseLeave: () => { },
});
const Hover = ({ children, delay = 0, onlyTriggerByHead = false, persistMode = false, style = {}, }) => {
    const [isShow, setIsShow] = useState(false);
    const filterChildren = [];
    const leaveTimer = useRef(0);
    const [persist, setPersist] = useState(false);
    useEffect(() => {
        setPersist(persistMode);
    }, [persistMode]);
    Children.forEach(children, (child) => {
        const isElement = isValidElement(child);
        if (isElement) {
            const type = child.type;
            if (type === HoverHead || type === HoverBody) {
                filterChildren.push(child);
            }
        }
        else {
            console.error(`<Hover> only accepts <HoverHead> and <HoverBody> as children. Found: ${child}`);
        }
    });
    const handleEnter = () => {
        clearTimeout(leaveTimer.current);
        setIsShow(true);
    };
    const handlerLeave = () => {
        clearTimeout(leaveTimer.current);
        leaveTimer.current = window.setTimeout(() => {
            setIsShow(false);
        }, delay);
    };
    return _jsx(HoverContext.Provider, { value: {
            persisted: persist,
            show: isShow,
            onMouseEnter: onlyTriggerByHead ? handleEnter : null,
            onMouseLeave: onlyTriggerByHead ? handlerLeave : null,
        }, children: _jsx("div", { style: style, onMouseEnter: () => {
                if (onlyTriggerByHead)
                    return;
                handleEnter();
            }, onMouseLeave: () => {
                if (onlyTriggerByHead)
                    return;
                handlerLeave();
            }, children: filterChildren }) });
};
export default Hover;
