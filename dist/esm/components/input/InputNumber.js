import { jsx as _jsx } from "react/jsx-runtime";
// import {useTheme} from '../../themes/ThemeContext'
const InputNumber = ({ style, ...props }) => {
    // const theme = useTheme()
    return _jsx("input", { type: 'number', style: {
            // borderColor: theme.theme.bg,
            ...style,
        }, ...props });
};
export default InputNumber;
