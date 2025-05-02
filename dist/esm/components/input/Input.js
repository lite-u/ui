import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputNumber from './InputNumber';
import InputText from './InputText';
import { useLiteUIContext } from '../../LiteUIProvider';
const Input = ({ type = 'text', number, label, xs, s, m = true, l, style = {}, primary, neutral = true, warn, error, ...props }) => {
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
    return _jsxs("div", { children: [label && _jsx("label", { children: label }), type === 'number' && _jsx(InputNumber, { style: styles, ...props }), type === 'text' && _jsx(InputText, { style: styles, ...props })] });
};
export default Input;
