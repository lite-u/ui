import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputNumber from './InputNumber';
import InputText from './InputText';
import { useLiteUIContext } from '../../LiteUIProvider';
import { useImperativeHandle, useRef } from 'react';
/**
 * Input component
 *
 * @brief
 * A stylized input field supporting text and number types with size and color variants.
 *
 * @intro
 * Renders either a text or number input with support for theming, sizing, and validation states.
 * Styling is pulled from the Lite UI theme context and adjusted according to provided props.
 *
 * @example
 * import { Input } from '@lite-u/ui'
 *
 * <Input placeholder="Your name" />
 * <Input number step={0.1} error />
 * <Input label="Username" s primary />
 */
const Input = ({ type = 'text', number, label = '', xs, s, m = true, l, style = {}, labelStyle = {}, primary, neutral = true, warn, error, ref, ...props }) => {
    const { theme } = useLiteUIContext();
    const getSize = () => {
        if (xs)
            return 'xs';
        if (s)
            return 'sm';
        if (l)
            return 'lg';
        return 'md';
    };
    const size = getSize();
    const styles = {
        ...theme.formElements[size],
        padding: `0 ${theme.padding[size].y}px`,
        fontSize: theme.fontSizes[size],
        borderRadius: theme.borderRadius[size],
        boxSizing: 'border-box',
    };
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => inputRef.current);
    if (neutral) {
        Object.assign(styles, theme.input.neutral);
    }
    if (primary) {
        Object.assign(styles, theme.input.primary);
    }
    if (warn) {
        Object.assign(styles, theme.input.warn);
    }
    if (error) {
        Object.assign(styles, theme.input.error);
    }
    Object.assign(styles, style);
    if (number) {
        type = 'number';
    }
    return _jsxs("div", { children: [label &&
                _jsx("label", { style: {
                        marginRight: 10,
                        fontSize: theme.fontSizes[size],
                        ...labelStyle,
                    }, onClick: () => {
                        inputRef.current?.focus();
                    }, children: label }), number ?
                _jsx(InputNumber, { ref: inputRef, style: styles, ...props })
                :
                    _jsx(InputText, { ref: inputRef, style: styles, ...props })] });
};
export default Input;
