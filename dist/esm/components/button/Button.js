import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../../themes/ThemeContext';
const Button = ({ type, ...props }) => {
    const theme = useTheme();
    console.log(theme);
    return _jsx("button", { type: type, ...props });
};
export default Button;
