import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import Interactable from '../interactable/Interactable';
export const SpinnerControl = ({ onStep, disabled, intervalTime = 100 }) => {
    const intervalRef = useRef(null);
    const startHold = (dir) => {
        onStep(dir); // fire immediately
        intervalRef.current = window.setInterval(() => {
            onStep(dir);
        }, intervalTime);
    };
    const stopHold = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    const wrapperStyle = {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 30,
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        // color: '#000',
    };
    const buttonStyle = {
        padding: 0,
        margin: 0,
        height: '50%',
        flex: 1,
        borderRadius: 0,
        color: '#000',
        backgroundColor: '#dfdfdf',
        cursor: disabled ? 'not-allowed' : 'pointer',
        // boxShadow: '0 0 1px 0 #000',
        fontSize: '1em',
        display: 'inline-flex',
        justifyContent: 'center',
        border: 'none',
    };
    const buttonActiveStyle = {
        backgroundColor: '#aaaaaa',
        color: '#fff',
    };
    const buttonProps = {
        tag: 'button',
        type: 'button',
        role: 'input-number-spinner-up',
        disabled: disabled,
        style: buttonStyle,
        active: buttonActiveStyle,
        onMouseUp: stopHold,
        onMouseLeave: stopHold,
    };
    return (_jsxs("div", { role: 'input-number-spinner-wrapper', style: wrapperStyle, children: [_jsx(Interactable, { ...buttonProps, onMouseDown: () => startHold('up'), children: _jsx("svg", { style: { height: '100%' }, width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "18 15 12 9 6 15" }) }) }), _jsx(Interactable, { ...buttonProps, onMouseDown: () => startHold('down'), children: _jsx("svg", { style: { height: '100%' }, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }) })] }));
};
