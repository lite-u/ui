import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputNumber from './InputNumber';
import InputText from './InputText';
import { useLiteUIContext } from '../../LiteUIProvider';
const Input = ({ type = 'text', number, label, s, m = true, l, style = {}, primary, neutral = true, warn, error, ...props }) => {
    const { theme } = useLiteUIContext();
    const sizeStyles = {
        s: {
            width: 100,
            height: 25,
            padding: '2px 6px',
            fontSize: 12,
        },
        m: {
            width: 120,
            height: 30,
            padding: '4px 8px',
            fontSize: 14,
        },
        l: {
            width: 150,
            height: 40,
            padding: '6px 10px',
            fontSize: 16,
        },
    };
    let styles = {
        boxSizing: 'border-box',
    };
    // console.log(theme.input.primary)
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
    if (m) {
        Object.assign(styles, sizeStyles.m);
    }
    if (s) {
        Object.assign(styles, sizeStyles.s);
    }
    if (l) {
        Object.assign(styles, sizeStyles.l);
    }
    Object.assign(styles, style);
    if (number) {
        type = 'number';
    }
    return _jsxs("div", { children: [label && _jsx("label", { children: label }), type === 'number' && _jsx(InputNumber, { style: styles, ...props }), type === 'text' && _jsx(InputText, { style: styles, ...props })] });
};
export default Input;
