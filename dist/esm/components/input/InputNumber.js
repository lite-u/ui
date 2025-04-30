import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import {useTheme} from '../../themes/ThemeContext'
import { useEffect, useRef, useState } from 'react';
const scientificBelow = 1e-6;
const scientificAbove = 1e+6;
const InputNumber = ({ style, step = 1, value, onKeyDown, onChange, ...props }) => {
    // const theme = useTheme()
    const [localValue, setLocalValue] = useState(0);
    const inputRef = useRef(null);
    const presicion = 6;
    const [localStep, setLocalStep] = useState(step);
    const increment = () => setLocalValue(prev => {
        return parseFloat((prev + localStep).toFixed(presicion));
    });
    const decrement = () => setLocalValue(prev => {
        return parseFloat((prev - localStep).toFixed(presicion));
    });
    useEffect(() => {
        if (!isNaN(value)) {
            setLocalValue(value);
        }
        if (step < scientificBelow) {
            setLocalStep(scientificBelow);
        }
        else if (step > scientificAbove) {
            setLocalStep(scientificAbove);
        }
    }, [value, step]);
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            increment();
            e.preventDefault();
        }
        if (e.key === 'ArrowDown') {
            decrement();
            e.preventDefault();
        }
        onKeyDown && onKeyDown(e);
        e.stopPropagation();
    };
    const handleChange = (e) => {
        setLocalValue(Number(e.target.value));
        onChange && onChange(e);
    };
    return _jsxs("div", { style: {
            display: 'inline-flex',
            position: 'relative',
        }, ...props, children: [_jsx("input", { ref: inputRef, type: 'number', value: localValue, onChange: handleChange, onKeyDown: handleKeyDown, style: {
                    // borderColor: theme.theme.bg,
                    ...style,
                }, ...props }), _jsx("span", { onClick: () => {
                    increment();
                }, style: {
                    width: 30,
                    height: 10,
                    overflow: 'hidden',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                }, children: "SpinUP" }), _jsx("span", { onClick: () => {
                    decrement();
                }, style: {
                    width: 30,
                    height: 10,
                    overflow: 'hidden',
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                }, children: "SpinDown" })] });
};
export default InputNumber;
