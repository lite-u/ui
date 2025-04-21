import { jsx as _jsx } from "react/jsx-runtime";
import InputNumber from './InputNumber';
const Input = ({ type }) => {
    if (type === 'number') {
        return _jsx(InputNumber, {});
    }
    if (type === 'text') {
        return _jsx(InputNumber, {});
    }
    return _jsx("input", { type: type });
};
export default Input;
