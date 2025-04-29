import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import SelectContext from './SelectContext';
import { Row } from '../../index';
const Select = ({ label, style, defaultValue = '', onChange, children, onKeyDown, ...props }) => {
    const [openSelect, setOpenSelect] = useState(false);
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const [position, setPosition] = useState({});
    const [wrapperHeight, setWrapperHeight] = useState(0);
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
        const maxHeight = window.innerHeight;
        setValue(defaultValue);
        if (containerRef.current) {
            const h = containerRef.current.offsetHeight;
            if (h > maxHeight) {
                setWrapperHeight(300);
            }
            else {
                setWrapperHeight(h);
            }
        }
    }, [children, defaultValue]);
    const handleItemClick = (newValue) => {
        setValue(newValue);
        if (newValue !== value) {
            onChange && onChange(newValue);
        }
        setOpenSelect(false);
    };
    const handleOpen = () => {
        const maxHeight = window.innerHeight;
        const rect = wrapperRef.current?.getBoundingClientRect();
        const newPosition = {};
        if (rect.y > maxHeight / 2) {
            newPosition.bottom = '100%';
        }
        else {
            newPosition.top = '100%';
        }
        setPosition(newPosition);
        setOpenSelect(!openSelect);
    };
    return _jsx(SelectContext.Provider, { value: { value, itemClick: handleItemClick }, children: _jsxs("div", { role: 'select', ref: wrapperRef, style: {
                width: 100,
                height: 40,
                border: '1px solid #dfdfdf',
                cursor: 'pointer',
                ...style,
                position: 'relative',
            }, ...props, children: [_jsx(Row, { tabIndex: 0, center: true, jc: true, fh: true, onClick: () => {
                        handleOpen();
                    }, onKeyDown: (e) => {
                        if (e.code.toLowerCase() === 'space') {
                            e.preventDefault();
                            handleOpen();
                        }
                        onKeyDown && onKeyDown(e);
                    }, children: value }), _jsx("div", { tabIndex: 2, autoFocus: true, style: {
                        position: 'absolute',
                        overflow: openSelect ? 'auto' : 'hidden',
                        width: '100%',
                        height: openSelect ? wrapperHeight : 0,
                        // top: position.top,
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
                        ...position,
                    }, children: _jsx("div", { tabIndex: 3, ref: containerRef, style: {
                            width: '100%',
                            backgroundColor: '#fff',
                            position: 'absolute',
                            height: 'auto',
                            top: 0,
                            left: 0,
                        }, ...props, children: children }) })] }) });
};
export default Select;
