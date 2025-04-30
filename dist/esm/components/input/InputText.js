import { jsx as _jsx } from "react/jsx-runtime";
// import {useLiteUIContext} from '../../LiteUIProvider'
const InputNumber = ({ style, ...props }) => {
    return _jsx("input", { type: 'text', style: {
            ...style,
        }, ...props });
};
export default InputNumber;
