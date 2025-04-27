import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../LiteUIContext';
const InputNumber = ({ style, ...props }) => {
    const theme = useTheme();
    return _jsx("input", { type: 'text', style: {
            // borderColor: theme.theme.bg,
            ...style,
        }, ...props });
};
export default InputNumber;
