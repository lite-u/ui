import { jsx as _jsx } from "react/jsx-runtime";
const InputNumber = ({ style, disabled, ...props }) => {
    return _jsx("input", { type: 'text', disabled: disabled, style: {
            // cursor: disabled ? 'not-allowed' : 'inherit',
            ...style,
        }, ...props });
};
export default InputNumber;
