import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useEffect, useRef, useState } from 'react';
import SelectContext from './SelectContext';
import Interactable from '../interactable/Interactable';
import { useLiteUIContext } from '../../LiteUIProvider';
import SelectItem from './SelectItem';
import Row from '../layouts/Row';
import Transition from '../transition/Transition';
/**
 * Select component
 *
 * @brief
 * A styled dropdown (select) component.
 *
 * @intro
 * Renders a `<select>` like element styled according to theme context. Supports multiple sizes
 * and validation states.
 *
 * @example
 * import { Select } from '@lite-u/ui'
 *
 * <Select s defaultValue={'2'}>
 *   <SelectItem value={'1'}>1</SelectItem>
 *   <SelectItem value={'2'}>2</SelectItem>
 *   <SelectItem value={'3'}>3</SelectItem>
 * </Select>
 */
const Select = ({ label, style, itemStyle = {}, xs, s, m, l, disabled = false, selectValue, onSelectChange, children, onKeyDown, ...props }) => {
    const [openSelect, setOpenSelect] = useState(false);
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const [position, setPosition] = useState({});
    const [wrapperHeight, setWrapperHeight] = useState(0);
    const [value, setValue] = useState(selectValue || '');
    const animationDuration = 100;
    const animationLeaveDuration = 100;
    const getSize = () => {
        if (xs)
            return 'xs';
        if (s)
            return 'sm';
        if (l)
            return 'lg';
        return 'md';
    };
    const { theme } = useLiteUIContext();
    const size = getSize();
    const isOpenedRef = useRef(false);
    const defaultStyle = {
        ...theme.formElements[size],
        padding: `0 ${theme.padding[size].y}px`,
        fontSize: theme.fontSizes[size],
        borderRadius: theme.borderRadius[size],
        boxSizing: 'border-box',
    };
    if (disabled) {
        Object.assign(defaultStyle, theme.select.disabled);
    }
    const filteredChildren = [];
    Children.forEach(children, (child) => {
        // @ts-ignore
        if (child.type !== SelectItem) {
            // @ts-ignore
            console.error(`<Select> only accepts <SelectItem> as children. Found: <${child.type}>`);
            return;
        }
        filteredChildren.push(child);
    });
    const close = (e) => {
        const target = e.target;
        const inside = wrapperRef?.current?.contains(target);
        if (!inside && isOpenedRef.current) {
            setOpenSelect(false);
        }
    };
    useEffect(() => {
        const maxHeight = window.innerHeight;
        // @ts-ignore
        setValue(selectValue);
        if (containerRef.current) {
            const h = containerRef.current.offsetHeight;
            if (h > maxHeight) {
                setWrapperHeight(300);
            }
            else {
                setWrapperHeight(h);
            }
        }
        window.addEventListener('click', close);
        return () => {
            window.removeEventListener('click', close);
        };
    }, [children, selectValue, size]);
    const handleItemClick = (newValue) => {
        if (disabled)
            return;
        setValue(newValue);
        if (newValue !== value) {
            onSelectChange && onSelectChange(newValue);
        }
        setOpenSelect(false);
        isOpenedRef.current = false;
    };
    const handleOpen = () => {
        if (disabled)
            return;
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
        isOpenedRef.current = !openSelect;
    };
    const mergedItemStyle = {
        ...defaultStyle,
        ...itemStyle,
    };
    // console.log(mergedItemStyle)
    return _jsx(SelectContext.Provider, { value: { itemStyle: mergedItemStyle, selectValue: value, itemClick: handleItemClick }, children: _jsxs("div", { role: 'select', ref: wrapperRef, style: {
                flex: 0,
                // flex: 'none',
                ...defaultStyle,
                padding: 0,
                // minWidth: defaultStyle.minWidth,
                // height: defaultStyle.height,
                // borderRadius: defaultStyle.borderRadius,
                // boxShadow: '0 0 1px 0 #000',
                // cursor: disabled ? 'not-allowed' : 'pointer',
                cursor: 'pointer',
                // boxSizing: 'border-box',
                ...style,
                position: 'relative',
            }, children: [_jsx(Interactable, { tag: 'div', role: 'placeholder', tabIndex: disabled ? -1 : 0, style: {
                        userSelect: 'none',
                        border: '1px solid #dfdfdf',
                        ...defaultStyle,
                        // ...disabled ? {color: '#bababa'} : {},
                        ...style,
                        // height: '100%',
                        // borderRadius: defaultStyle.borderRadius,
                        // fontSize: defaultStyle.fontSize,
                    }, onClick: () => {
                        // e.stopPropagation()
                        handleOpen();
                        return false;
                    }, onKeyDown: (e) => {
                        if (e.code.toLowerCase() === 'space') {
                            e.preventDefault();
                            handleOpen();
                        }
                        onKeyDown && onKeyDown(e);
                    }, ...props, children: _jsxs(Row, { fh: true, between: true, center: true, pl: defaultStyle.padding, pr: defaultStyle.padding, children: [_jsx("span", { children: value }), _jsx(Transition, { visible: openSelect, duration: animationDuration, exitDuration: animationLeaveDuration, style: {
                                    width: 14,
                                    height: 14,
                                    flex: 0,
                                }, from: {
                                    rotate: '0deg',
                                }, to: {
                                    rotate: '180deg',
                                }, children: _jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }) })] }) }), _jsx(Transition, { visible: openSelect, duration: animationDuration, exitDuration: animationLeaveDuration, from: {
                        height: 0,
                    }, to: {
                        height: wrapperHeight,
                    }, style: {
                        position: 'absolute',
                        // top: '100%',
                        left: 0,
                        zIndex: 1000,
                        overflow: 'hidden',
                        width: 'auto',
                        minWidth: '100%',
                        height: wrapperHeight,
                        backgroundColor: '#fff',
                        boxShadow: '0 0 1px 0 #000',
                        ...position,
                    }, children: _jsx("div", { role: 'select-wrapper', style: {
                            overflowY: openSelect ? 'auto' : 'hidden',
                            overflowX: 'hidden',
                            // width: '100%',
                            height: wrapperHeight,
                            backgroundColor: '#fff',
                            // boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                        }, children: _jsx("div", { ref: containerRef, style: {
                                // position: 'absolute',
                                width: '100%',
                                backgroundColor: '#fff',
                                height: 'auto',
                            }, children: filteredChildren }) }) })] }) });
};
export default Select;
