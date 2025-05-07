import { jsx as _jsx } from "react/jsx-runtime";
const InputNumber = ({ style, ...props }) => {
    return _jsx("input", { type: 'text', style: {
            ...style,
        }, ...props });
};
export default InputNumber;
