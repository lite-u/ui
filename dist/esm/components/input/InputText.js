import { jsx as _jsx } from "react/jsx-runtime";
// import {useLiteUIContext} from '../../LiteUIProvider'
const InputNumber = ({ style, ...props }) => {
    // const theme = useLiteUIContext()
    return _jsx("input", { type: 'text', style: {
            // borderColor: theme.theme.bg,
            ...style,
        }, ...props });
};
export default InputNumber;
