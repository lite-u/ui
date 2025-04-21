import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
const InputNumber = ({}) => {
    const theme = useTheme();
    console.log(theme);
    return _jsx("input", { type: 'number' });
};
export default InputNumber;
