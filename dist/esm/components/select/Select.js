import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
const Select = ({ label, children, ...props }) => {
    const [openSelect, setOpenSelect] = useState(false);
    // const [selectFocused, setSelectFocused] = useState(false)
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const [wrapperHeight, setWrapperHeight] = useState(0);
    const [position, setPosition] = useState({
        top: 0,
        bottom: 0,
    });
    const styles = {
        border: '1px solid #dfdfdf',
        position: 'absolute',
    };
    useEffect(() => {
        const maxHeight = window.innerHeight;
        if (containerRef.current) {
            const h = containerRef.current.offsetHeight;
            console.log(wrapperRef.current.getBoundingClientRect());
            // console.log(Math.min(maxHeight, h))
            setWrapperHeight(Math.min(maxHeight, h));
        }
    }, [children]);
    return _jsxs("div", { ref: wrapperRef, ...props, style: {
            position: 'relative',
        }, children: [_jsx("div", { onClick: () => {
                    setOpenSelect(!openSelect);
                }, children: "selected" }), _jsx("div", { style: {
                    position: 'relative',
                    overflow: 'hidden',
                    height: openSelect ? wrapperHeight : 0,
                }, children: _jsx("div", { ref: containerRef, style: { position: 'absolute', height: 'auto' }, ...props, children: children }) })] });
};
export default Select;
