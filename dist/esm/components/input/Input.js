import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputNumber from './InputNumber';
import InputText from './InputText';
const Input = ({ type, label, s, m, l, ...props }) => {
    let styles = {
        border: '1px solid #dfdfdf',
    };
    if (s) {
        Object.assign(styles, {});
    }
    return _jsxs("div", { children: [label && _jsx("label", { children: label }), type === 'number' && _jsx(InputNumber, { style: styles, ...props }), type === 'text' && _jsx(InputText, { style: styles, ...props })] });
    return _jsx("input", { type: type });
};
export default Input;
