import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import {useTheme} from '../../themes/ThemeContext'
import { useEffect, useRef, useState } from 'react';
import { SpinnerControl } from './Spinner';
const scientificBelow = 1e-6;
const scientificAbove = 1e+6;
const InputNumber = ({ style, step = 1, value, onKeyDown, onChange, intervalTime = 100, ...props }) => {
    // const theme = useTheme()
    const [localValue, setLocalValue] = useState(0);
    const inputRef = useRef(null);
    const precision = 6;
    const [localStep, setLocalStep] = useState(step);
    const increment = () => setLocalValue(prev => {
        return parseFloat((prev + localStep).toFixed(precision));
    });
    const decrement = () => setLocalValue(prev => {
        return parseFloat((prev - localStep).toFixed(precision));
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
            overflow: 'hidden',
            ...style,
            padding: 0,
        }, ...props, children: [_jsx("input", { ref: inputRef, type: 'number', value: localValue, onChange: handleChange, onKeyDown: handleKeyDown, style: {
                    padding: style.padding,
                    outline: 'none',
                    backgroundColor: 'transparent',
                    border: 'none',
                    // ...style,
                }, ...props }), _jsx(SpinnerControl, { intervalTime: intervalTime, onStep: (dir) => {
                    if (dir === 'up') {
                        increment();
                    }
                    else if (dir === 'down') {
                        decrement();
                    }
                } })] });
};
export default InputNumber;
