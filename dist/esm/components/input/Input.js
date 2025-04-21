import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputNumber from './InputNumber';
import InputText from './InputText';
const Input = ({ type, label, ...props }) => {
    return _jsxs("div", { children: [label && _jsx("label", { children: label }), type === 'number' && _jsx(InputNumber, { ...props }), type === 'text' && _jsx(InputText, { ...props })] });
    return _jsx("input", { type: type });
};
export default Input;
