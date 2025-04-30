import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { Button } from '../../index';
export const SpinnerControl = ({ onStep, intervalTime = 100 }) => {
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
    return (_jsxs("div", { style: {
            position: 'absolute',
            right: 0,
            top: 0,
            width: 30,
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'stretch',
        }, children: [_jsx(Button, { xs: true, onMouseDown: () => startHold('up'), onMouseUp: stopHold, onMouseLeave: stopHold, style: {
                    // width: '100%',
                    // height: '50%',
                    flex: 1,
                    padding: 0,
                    borderRadius: 0,
                    color: 'white',
                    background: '#dfdfdf',
                    boxShadow: '0 0 1px 0 #fff',
                    // cursor: 'pointer',
                }, children: _jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "18 15 12 9 6 15" }) }) }), _jsx(Button, { xs: true, onMouseDown: () => startHold('down'), onMouseUp: stopHold, onMouseLeave: stopHold, style: {
                    // width: '100%',
                    // height: '50%',
                    flex: 1,
                    padding: 0,
                    borderRadius: 0,
                    color: 'white',
                    background: '#dfdfdf',
                }, children: _jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }) })] }));
};
