import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import useElementMoveDetect from '../../hooks/useElementMoveDetect';
import { createPortal } from 'react-dom';
import { Transition } from '../../index';
export const Tooltip = ({ title, color, bgColor, position = 't', delay = 100, children, }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [localPosition, setLocalPosition] = useState();
    const tooltipRef = useRef(null);
    const targetRef = useRef(null);
    const backgroundColor = bgColor || '#333';
    const textColor = color || '#fff';
    const [realTimeStyle, setRealTimeStyle] = useState({});
    const [animationVisible, setAnimationVisible] = useState(false);
    const leavingTimerRef = useRef(0);
    const animationEnterDuration = 200;
    const animationExitDuration = 100;
    useElementMoveDetect(targetRef, () => {
        calcPosition();
    });
    useEffect(() => {
        calcPosition();
        if (position) {
            setLocalPosition(position);
            return;
        }
        /*if (isVisible && targetRef.current && tooltipRef.current) {
          const targetRect = targetRef.current.getBoundingClientRect()
          const tooltipRect = tooltipRef.current.getBoundingClientRect()
    
          // Calculate available space
          const spaceAbove = targetRect.top
          const spaceBelow = window.innerHeight - targetRect.bottom
          const spaceLeft = targetRect.left
          const spaceRight = window.innerWidth - targetRect.right
    
          // Auto position tooltip in various directions
          if (spaceAbove > tooltipRect.height) {
            setLocalPosition('t')
          } else if (spaceBelow > tooltipRect.height) {
            setLocalPosition('b')
          } else if (spaceLeft > tooltipRect.width) {
            setLocalPosition('l')
          } else if (spaceRight > tooltipRect.width) {
            setLocalPosition('r')
          } else {
            if (spaceAbove > tooltipRect.height / 2 && spaceLeft > tooltipRect.width / 2) {
              setLocalPosition('tl')
            } else if (spaceAbove > tooltipRect.height / 2 && spaceRight > tooltipRect.width / 2) {
              setLocalPosition('tr')
            } else if (spaceBelow > tooltipRect.height / 2 && spaceLeft > tooltipRect.width / 2) {
              setLocalPosition('bl')
            } else if (spaceBelow > tooltipRect.height / 2 && spaceRight > tooltipRect.width / 2) {
              setLocalPosition('br')
            } else {
              setLocalPosition('b')
            }
          }
        }*/
    }, [isVisible, targetRef.current, position]);
    const calcPosition = () => {
        const firstChild = targetRef.current?.firstElementChild;
        // const maxWidth = window.innerWidth
        const maxHeight = window.innerHeight;
        if (firstChild) {
            const { width, height, top, left, right, bottom } = firstChild.getBoundingClientRect();
            // console.log(width, height)
            const styles = {};
            // let newLeft = left
            // let newTop = top
            switch (localPosition) {
                case 't':
                    styles.bottom = maxHeight - top;
                    styles.left = left + width / 2;
                    break;
                case 'b':
                    styles.top = bottom;
                    styles.left = left + width / 2;
                    break;
                case 'l':
                    styles.right = innerWidth - left;
                    styles.top = top + height / 2;
                    break;
                case 'r':
                    styles.left = right;
                    styles.top = top + height / 2;
                    break;
                case 'tl':
                    styles.bottom = maxHeight - top;
                    styles.right = innerWidth - left;
                    break;
                case 'tr':
                    styles.bottom = maxHeight - top;
                    styles.right = innerWidth - right;
                    break;
                case 'bl':
                    styles.top = bottom;
                    styles.right = innerWidth - left;
                    break;
                case 'br':
                    styles.top = bottom;
                    styles.left = left + width;
                    break;
            }
            setRealTimeStyle(styles);
        }
    };
    const getPositionStyles = () => {
        switch (localPosition) {
            case 't':
                return { bottom: 6, transform: 'translateX(-50%)' };
            case 'b':
                return { top: 6, transform: 'translateX(-50%)' };
            case 'l':
                return { right: 6, transform: 'translateY(-50%)' };
            case 'r':
                return { left: 6, transform: 'translateY(-50%)' };
            case 'tl':
                return { bottom: 6, left: 0 };
            case 'tr':
                return { bottom: 6, right: 0 };
            case 'bl':
                return { top: 6, left: 0 };
            case 'br':
                return { top: 6, right: 0 };
            default:
                return { bottom: 6, transform: 'translateX(-50%)' };
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
        setAnimationVisible(false);
        clearTimeout(leavingTimerRef.current);
        leavingTimerRef.current = 0;
        leavingTimerRef.current = setTimeout(() => {
            setIsVisible(false);
            leavingTimerRef.current = 0;
        }, delay || animationExitDuration);
    };
    // const positionStyle = getPositionStyles()
    // console.log(positionStyle)
    // const transformOrigin = '6px 0px'
    return (_jsxs("div", { role: 'tooltip', ref: targetRef, style: { display: 'inline-block' }, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [children, isVisible && createPortal(_jsx(Transition, { visible: animationVisible, transformOrigin: 'center', from: {
                    scale: {
                        value: 0,
                        duration: animationExitDuration,
                    },
                }, to: {
                    scale: 1,
                }, duration: animationEnterDuration, style: {
                    position: 'fixed',
                    // width: 'auto',
                    // height: 'auto',
                    ...realTimeStyle,
                }, children: _jsxs("div", { ref: tooltipRef, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, style: {
                        position: 'absolute',
                        zIndex: 1000,
                        // ...realTimePosition,
                        // position: 'absolute',
                        backgroundColor: backgroundColor,
                        padding: '5px 10px',
                        borderRadius: 4,
                        fontSize: 12,
                        color: textColor,
                        ...getPositionStyles(),
                    }, children: [title, _jsx("div", { style: {
                                content: '',
                                position: 'absolute',
                                borderStyle: 'solid',
                                color: textColor,
                                ...getArrowStyles(),
                            } })] }) }), document.body)] }));
};
export default Tooltip;
