import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
const Select = ({ label, style, children, ...props }) => {
    const [openSelect, setOpenSelect] = useState(false);
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const [wrapperHeight, setWrapperHeight] = useState(0);
    useEffect(() => {
        const maxHeight = window.innerHeight;
        if (containerRef.current) {
            const h = containerRef.current.offsetHeight;
            setWrapperHeight(Math.min(maxHeight, h));
        }
    }, [children]);
    const handleOpen = (e) => {
        const rect = wrapperRef.current?.getBoundingClientRect();
        // setPosition({top: rect!.top, bottom: rect!.bottom})
        setOpenSelect(!openSelect);
    };
    return _jsxs("div", { ref: wrapperRef, style: {
            ...style,
            position: 'relative',
        }, ...props, children: [_jsx("div", { onClick: (e) => {
                    handleOpen(e);
                }, children: "placeholder" }), _jsx("div", { style: {
                    position: 'absolute',
                    overflow: openSelect ? 'auto' : 'hidden',
                    width: '100%',
                    height: openSelect ? wrapperHeight : 0,
                    // top: position.top,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
                    bottom: '100%',
                }, children: _jsx("div", { ref: containerRef, style: {
                        width: '100%',
                        backgroundColor: '#fff',
                        position: 'absolute',
                        height: 'auto',
                        top: 0,
                        left: 0,
                    }, ...props, children: children }) })] });
};
export default Select;
