import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import useElementMoveDetect from '../../hooks/useElementMoveDetect';
import { createPortal } from 'react-dom';
import { Transition } from '../../index';
export const Tooltip = ({ title, color, bgColor, position, delay = 0, children, }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [localPosition, setLocalPosition] = useState();
    const tooltipRef = useRef(null);
    const targetRef = useRef(null);
    const backgroundColor = bgColor || '#333';
    const textColor = color || '#fff';
    const [realTimePosition, setRealTimePosition] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    const [animationVisible, setAnimationVisible] = useState(false);
    const leavingTimerRef = useRef(0);
    const animationDuration = 300;
    useElementMoveDetect(targetRef, () => {
        calcPosition();
    });
    useEffect(() => {
        if (position) {
            setLocalPosition(position);
            return;
        }
        if (isVisible && targetRef.current && tooltipRef.current) {
            const targetRect = targetRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            // Calculate available space
            const spaceAbove = targetRect.top;
            const spaceBelow = window.innerHeight - targetRect.bottom;
            const spaceLeft = targetRect.left;
            const spaceRight = window.innerWidth - targetRect.right;
            // Auto position tooltip in various directions
            if (spaceAbove > tooltipRect.height) {
                setLocalPosition('t');
            }
            else if (spaceBelow > tooltipRect.height) {
                setLocalPosition('b');
            }
            else if (spaceLeft > tooltipRect.width) {
                setLocalPosition('l');
            }
            else if (spaceRight > tooltipRect.width) {
                setLocalPosition('r');
            }
            else {
                if (spaceAbove > tooltipRect.height / 2 && spaceLeft > tooltipRect.width / 2) {
                    setLocalPosition('tl');
                }
                else if (spaceAbove > tooltipRect.height / 2 && spaceRight > tooltipRect.width / 2) {
                    setLocalPosition('tr');
                }
                else if (spaceBelow > tooltipRect.height / 2 && spaceLeft > tooltipRect.width / 2) {
                    setLocalPosition('bl');
                }
                else if (spaceBelow > tooltipRect.height / 2 && spaceRight > tooltipRect.width / 2) {
                    setLocalPosition('br');
                }
                else {
                    setLocalPosition('b');
                }
            }
        }
    }, [isVisible, position]);
    const calcPosition = () => {
        const firstChild = targetRef.current?.firstElementChild;
        if (firstChild) {
            const { width, height, top, left } = firstChild.getBoundingClientRect();
            setRealTimePosition({
                width,
                height,
                top,
                left,
            });
        }
    };
    const getPositionStyles = () => {
        switch (localPosition) {
            case 't':
                return { bottom: '120%', left: '50%', transform: 'translateX(-50%)' };
            case 'b':
                return { top: '120%', left: '50%', transform: 'translateX(-50%)' };
            case 'l':
                return { right: '120%', top: '50%', transform: 'translateY(-50%)' };
            case 'r':
                return { left: '120%', top: '50%', transform: 'translateY(-50%)' };
            case 'tl':
                return { bottom: '120%', left: '0', transform: 'translateX(0)' };
            case 'tr':
                return { bottom: '120%', right: '0', transform: 'translateX(0)' };
            case 'bl':
                return { top: '120%', left: '0', transform: 'translateX(0)' };
            case 'br':
                return { top: '120%', right: '0', transform: 'translateX(0)' };
            default:
                return { bottom: '120%', left: '50%', transform: 'translateX(-50%)' };
        }
    };
    const getArrowStyles = () => {
        switch (localPosition) {
            case 't':
                return {
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderWidth: '6px 6px 0 6px',
                    borderColor: `${backgroundColor} transparent transparent transparent`,
                };
            case 'b':
                return {
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderWidth: '0 6px 6px 6px',
                    borderColor: `transparent transparent ${backgroundColor} transparent`,
                };
            case 'l':
                return {
                    left: '100%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderWidth: '6px 0 6px 6px',
                    borderColor: `transparent transparent transparent ${backgroundColor}`,
                };
            case 'r':
                return {
                    right: '100%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderWidth: '6px 6px 6px 0',
                    borderColor: `transparent ${backgroundColor} transparent transparent`,
                };
            case 'tl':
                return {
                    top: '100%',
                    left: '15%',
                    transform: 'translateX(0)',
                    borderWidth: '6px 6px 0 6px',
                    borderColor: `${backgroundColor} transparent transparent transparent`,
                };
            case 'tr':
                return {
                    top: '100%',
                    right: '15%',
                    transform: 'translateX(0)',
                    borderWidth: '6px 6px 0 6px',
                    borderColor: `${backgroundColor} transparent transparent transparent`,
                };
            case 'bl':
                return {
                    bottom: '100%',
                    left: '15%',
                    transform: 'translateX(0)',
                    borderWidth: '0 6px 6px 6px',
                    borderColor: `transparent transparent ${backgroundColor} transparent`,
                };
            case 'br':
                return {
                    bottom: '100%',
                    right: '15%',
                    transform: 'translateX(0)',
                    borderWidth: '0 6px 6px 6px',
                    borderColor: `transparent transparent ${backgroundColor} transparent`,
                };
            default:
                return {
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderWidth: '6px 6px 0 6px',
                    borderColor: `${backgroundColor} transparent transparent transparent`,
                };
        }
    };
    const handleMouseEnter = () => {
        // If it is leaving
        if (leavingTimerRef.current) {
            clearTimeout(leavingTimerRef.current);
            leavingTimerRef.current = 0;
            setAnimationVisible(true);
        }
        else {
            setIsVisible(true);
            setTimeout(() => {
                setAnimationVisible(true);
            }, 1);
        }
    };
    const handleMouseLeave = () => {
        console.log('leaving');
        setAnimationVisible(false);
        clearTimeout(leavingTimerRef.current);
        leavingTimerRef.current = 0;
        leavingTimerRef.current = setTimeout(() => {
            setIsVisible(false);
            leavingTimerRef.current = 0;
        }, delay * 2);
        console.log(leavingTimerRef.current);
    };
    return (_jsxs("div", { role: 'tooltip', ref: targetRef, style: { display: 'inline-block' }, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [children, isVisible && realTimePosition && createPortal(_jsx("div", { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, style: {
                    position: 'fixed',
                    // pointerEvents: 'none',
                    zIndex: 1000,
                    ...realTimePosition,
                }, children: _jsx(Transition, { visible: animationVisible, transformOrigin: 'top', from: {
                        scale: 0,
                    }, to: {
                        scale: 1,
                    }, style: {
                        position: 'relative',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }, children: _jsxs("div", { ref: tooltipRef, style: {
                            position: 'absolute',
                            backgroundColor: backgroundColor,
                            padding: '5px 10px',
                            borderRadius: '4px',
                            // whiteSpace: 'nowrap',
                            fontSize: '12px',
                            color: textColor,
                            ...getPositionStyles(),
                        }, children: [title, _jsx("div", { style: {
                                    content: '',
                                    position: 'absolute',
                                    borderStyle: 'solid',
                                    color: textColor,
                                    ...getArrowStyles(),
                                } })] }) }) }), document.body)] }));
};
export default Tooltip;
