import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
const InputNumber = ({}) => {
    const theme = useTheme();
    return _jsx("input", { type: 'number', style: {
            borderColor: theme.theme.bg,
        } });
};
export default InputNumber;
